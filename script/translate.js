const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const fs = require('fs');
const lodash = require("lodash");
const pLimit = require('p-limit');
const { readConfig, createTranslator } = require('./openai-client');

let doTranslate;

const targetLanguages = [
    {
        "name": "zh-CN",
        "label": "简体中文",
    }
]

function putObjectValue(obj, key, value) {
    const keys = key.split('##');
    let current = obj;

    for (let i = 0; i < keys.length - 1; i++) {
        const k = keys[i];
        if (!current[k]) {
            current[k] = {};
        }
        current = current[k];
    }

    current[keys[keys.length - 1]] = value;
}

async function translate(waitTranslateList, targetObject, targetLanguage) {
    let promises = [];
    let doNum = 0;
    let failures = 0;
    const concurrentNum = readConfig().concurrency;

    console.log('concurrentNum', concurrentNum);

    const limit = pLimit(concurrentNum);

    for (let i = 0; i < waitTranslateList.length; i++) {
        let item = waitTranslateList[i];

        promises.push(limit(async () => {
            await doTranslate(item.message, targetLanguage).then(mesasge => {
                console.log("翻译 key", item.key, "为", targetLanguage, ":", item.message , ' => ', mesasge);
                putObjectValue(targetObject, item.key, mesasge)
            }).catch(e => {
                failures++;
                console.error("翻译失败", item.key, ":", e.message);
            }).finally(() => {
                doNum++;
                console.log("剩余翻译数量", waitTranslateList.length - doNum);
            });
        }))
    }

    await Promise.all(promises);
    if (failures > 0) {
        throw new Error(`${failures} 个字符串翻译失败，未更新语言文件和英文基线`);
    }
}

// 收集需要翻译的key和message
function collectMessages(oldSourceLanguages, newSourceLanguages, targetLanguages, parentKey = '', waitTranslateList=[]){
    for (const key in newSourceLanguages) {
        let currentKey = parentKey ? parentKey + "##" + key : key;
        if (newSourceLanguages[key] instanceof Object) {
            collectMessages(oldSourceLanguages[key]  || {}, newSourceLanguages[key], targetLanguages[key] || {}, currentKey, waitTranslateList);
        } else {
            if (targetLanguages[key] === undefined
                || oldSourceLanguages[key] === undefined
                || oldSourceLanguages[key] !== newSourceLanguages[key]) {
                waitTranslateList.push({
                    key: currentKey,
                    message: newSourceLanguages[key]
                })
            }
        }
    }
}


async function run(){
    doTranslate = createTranslator();
    const oldEnLanguages = require("./en.json");
    const newEnNodesLanguages = fs.existsSync(path.join(__dirname, "en-nodes.json")) ? require("./en-nodes.json") : {};
    let newEnLanguages = await fetch("https://raw.githubusercontent.com/n8n-io/n8n/master/packages/frontend/%40n8n/i18n/src/locales/en.json")
        .then(res => res.json())

    for (const targetLanguage of targetLanguages) {
        let targetLanguages = {};
        let fileName = path.join(__dirname, `../languages/${targetLanguage.name}.json`);
        if (fs.existsSync(fileName)){
            targetLanguages = JSON.parse(fs.readFileSync(fileName, "utf8"))
        }else{
            console.warn(targetLanguage + "语言文件不存在，创建新文件: ", fileName);
        }
        const waitTranslateList = []

        newEnLanguages = lodash.merge({}, newEnLanguages, newEnNodesLanguages);
        collectMessages(oldEnLanguages, newEnLanguages , targetLanguages, "", waitTranslateList)
        await translate(waitTranslateList, targetLanguages, targetLanguage.label);
        // 最后使用 enLanguages的key  排序 targetLanguages key
        const sortedTargetLanguages = {};
        for (const key in newEnLanguages) {
            if (targetLanguages[key] !== undefined) {
                sortedTargetLanguages[key] = targetLanguages[key];
            }
        }
        // 将翻译后的语言写入文件
        fs.writeFileSync(fileName, JSON.stringify(sortedTargetLanguages, null, 4));
    }
    fs.writeFileSync(path.join(__dirname, "en.json"), JSON.stringify(newEnLanguages, null, 4));
}

run().catch(error => {
    console.error(error.message);
    process.exitCode = 1;
});

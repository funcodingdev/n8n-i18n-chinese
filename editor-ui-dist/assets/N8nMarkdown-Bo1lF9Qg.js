import { a as __toCommonJS, n as __esmMin, o as __toESM, r as __exportAll, t as __commonJSMin } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, _ as Fragment, j as createVNode, rt as renderList, vn as normalizeClass } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as require_markdown_it } from "./markdown-it-CdtM44Tu.js";
import { t as require_markdown_it_link_attributes } from "./markdown-it-link-attributes-BC3Hu7Xj.js";
import { t as N8nLoading_default } from "./N8nLoading-COb2kWGg.js";
import { t as require_lib } from "./lib-vJcwukKE.js";
//#region ../@n8n/design-system/src/utils/markdown.ts
var import_lib = /* @__PURE__ */ __toESM(require_lib(), 1);
var { safeAttrValue } = import_lib.default;
var checkedRegEx = /(\*|-) \[x\]/;
var uncheckedRegEx = /(\*|-) \[\s\]/;
/**
* Toggles the checkbox at the specified index in the given markdown string.
*
* @param markdown - The markdown string containing checkboxes.
* @param index - The index of the checkbox to toggle.
* @returns The updated markdown string with the checkbox toggled.
*/
var toggleCheckbox = (markdown, index) => {
	let cursor = 0;
	const lines = markdown.split("\n");
	for (let lineNumber = 0; lineNumber < lines.length; lineNumber++) {
		const line = lines[lineNumber];
		const checked = checkedRegEx.test(line);
		const unchecked = uncheckedRegEx.test(line);
		if (checked || unchecked) {
			if (cursor === index) {
				const regExp = checked ? checkedRegEx : uncheckedRegEx;
				const replacement = checked ? "[ ]" : "[x]";
				lines[lineNumber] = line.replace(regExp, `$1 ${replacement}`);
				break;
			}
			cursor++;
		}
	}
	return lines.join("\n");
};
function serializeAttr(tag, name, value) {
	const safe = safeAttrValue(tag, name, value, { process: (v) => v });
	return safe ? `${name}="${safe}"` : "";
}
//#endregion
//#region ../../../node_modules/.pnpm/markdown-it-emoji@2.0.2/node_modules/markdown-it-emoji/lib/data/full.json
var full_exports = /* @__PURE__ */ __exportAll({
	a: () => a,
	ab: () => ab,
	abacus: () => abacus,
	abc: () => abc,
	abcd: () => abcd,
	accept: () => accept,
	accordion: () => accordion,
	adhesive_bandage: () => adhesive_bandage,
	adult: () => adult,
	aerial_tramway: () => aerial_tramway,
	afghanistan: () => afghanistan,
	airplane: () => airplane,
	aland_islands: () => aland_islands,
	alarm_clock: () => "⏰",
	albania: () => albania,
	alembic: () => alembic,
	algeria: () => algeria,
	alien: () => alien,
	ambulance: () => ambulance,
	american_samoa: () => american_samoa,
	amphora: () => amphora,
	anatomical_heart: () => anatomical_heart,
	anchor: () => "⚓",
	andorra: () => andorra,
	angel: () => angel,
	anger: () => anger,
	angola: () => angola,
	angry: () => angry,
	anguilla: () => anguilla,
	anguished: () => anguished,
	ant: () => ant,
	antarctica: () => antarctica,
	antigua_barbuda: () => antigua_barbuda,
	apple: () => apple,
	aquarius: () => "♒",
	argentina: () => argentina,
	aries: () => "♈",
	armenia: () => armenia,
	arrow_backward: () => arrow_backward,
	arrow_double_down: () => "⏬",
	arrow_double_up: () => "⏫",
	arrow_down: () => arrow_down,
	arrow_down_small: () => arrow_down_small,
	arrow_forward: () => arrow_forward,
	arrow_heading_down: () => arrow_heading_down,
	arrow_heading_up: () => arrow_heading_up,
	arrow_left: () => arrow_left,
	arrow_lower_left: () => arrow_lower_left,
	arrow_lower_right: () => arrow_lower_right,
	arrow_right: () => arrow_right,
	arrow_right_hook: () => arrow_right_hook,
	arrow_up: () => arrow_up,
	arrow_up_down: () => arrow_up_down,
	arrow_up_small: () => arrow_up_small,
	arrow_upper_left: () => arrow_upper_left,
	arrow_upper_right: () => arrow_upper_right,
	arrows_clockwise: () => arrows_clockwise,
	arrows_counterclockwise: () => arrows_counterclockwise,
	art: () => art,
	articulated_lorry: () => articulated_lorry,
	artificial_satellite: () => artificial_satellite,
	artist: () => artist,
	aruba: () => aruba,
	ascension_island: () => ascension_island,
	asterisk: () => asterisk,
	astonished: () => astonished,
	astronaut: () => astronaut,
	athletic_shoe: () => athletic_shoe,
	atm: () => atm,
	atom_symbol: () => atom_symbol,
	australia: () => australia,
	austria: () => austria,
	auto_rickshaw: () => auto_rickshaw,
	avocado: () => avocado,
	axe: () => axe,
	azerbaijan: () => azerbaijan,
	b: () => b,
	baby: () => baby,
	baby_bottle: () => baby_bottle,
	baby_chick: () => baby_chick,
	baby_symbol: () => baby_symbol,
	back: () => back,
	bacon: () => bacon,
	badger: () => badger,
	badminton: () => badminton,
	bagel: () => bagel,
	baggage_claim: () => baggage_claim,
	baguette_bread: () => baguette_bread,
	bahamas: () => bahamas,
	bahrain: () => bahrain,
	balance_scale: () => balance_scale,
	bald_man: () => bald_man,
	bald_woman: () => bald_woman,
	ballet_shoes: () => ballet_shoes,
	balloon: () => balloon,
	ballot_box: () => ballot_box,
	ballot_box_with_check: () => ballot_box_with_check,
	bamboo: () => bamboo,
	banana: () => banana,
	bangbang: () => bangbang,
	bangladesh: () => bangladesh,
	banjo: () => banjo,
	bank: () => bank,
	bar_chart: () => bar_chart,
	barbados: () => barbados,
	barber: () => barber,
	baseball: () => "⚾",
	basket: () => basket,
	basketball: () => basketball,
	basketball_man: () => basketball_man,
	basketball_woman: () => basketball_woman,
	bat: () => bat,
	bath: () => bath,
	bathtub: () => bathtub,
	battery: () => battery,
	beach_umbrella: () => beach_umbrella,
	bear: () => bear,
	bearded_person: () => bearded_person,
	beaver: () => beaver,
	bed: () => bed,
	bee: () => bee,
	beer: () => beer,
	beers: () => beers,
	beetle: () => beetle,
	beginner: () => beginner,
	belarus: () => belarus,
	belgium: () => belgium,
	belize: () => belize,
	bell: () => bell,
	bell_pepper: () => bell_pepper,
	bellhop_bell: () => bellhop_bell,
	benin: () => benin,
	bento: () => bento,
	bermuda: () => bermuda,
	beverage_box: () => beverage_box,
	bhutan: () => bhutan,
	bicyclist: () => bicyclist,
	bike: () => bike,
	biking_man: () => biking_man,
	biking_woman: () => biking_woman,
	bikini: () => bikini,
	billed_cap: () => billed_cap,
	biohazard: () => biohazard,
	bird: () => bird,
	birthday: () => birthday,
	bison: () => bison,
	black_cat: () => black_cat,
	black_circle: () => "⚫",
	black_flag: () => black_flag,
	black_heart: () => black_heart,
	black_joker: () => black_joker,
	black_large_square: () => "⬛",
	black_medium_small_square: () => "◾",
	black_medium_square: () => black_medium_square,
	black_nib: () => black_nib,
	black_small_square: () => black_small_square,
	black_square_button: () => black_square_button,
	blond_haired_man: () => blond_haired_man,
	blond_haired_person: () => blond_haired_person,
	blond_haired_woman: () => blond_haired_woman,
	blonde_woman: () => blonde_woman,
	blossom: () => blossom,
	blowfish: () => blowfish,
	blue_book: () => blue_book,
	blue_car: () => blue_car,
	blue_heart: () => blue_heart,
	blue_square: () => blue_square,
	blueberries: () => blueberries,
	blush: () => blush,
	boar: () => boar,
	boat: () => "⛵",
	bolivia: () => bolivia,
	bomb: () => bomb,
	bone: () => bone,
	book: () => book,
	bookmark: () => bookmark,
	bookmark_tabs: () => bookmark_tabs,
	books: () => books,
	boom: () => boom,
	boomerang: () => boomerang,
	boot: () => boot,
	bosnia_herzegovina: () => bosnia_herzegovina,
	botswana: () => botswana,
	bouncing_ball_man: () => bouncing_ball_man,
	bouncing_ball_person: () => bouncing_ball_person,
	bouncing_ball_woman: () => bouncing_ball_woman,
	bouquet: () => bouquet,
	bouvet_island: () => bouvet_island,
	bow: () => bow,
	bow_and_arrow: () => bow_and_arrow,
	bowing_man: () => bowing_man,
	bowing_woman: () => bowing_woman,
	bowl_with_spoon: () => bowl_with_spoon,
	bowling: () => bowling,
	boxing_glove: () => boxing_glove,
	boy: () => boy,
	brain: () => brain,
	brazil: () => brazil,
	bread: () => bread,
	breast_feeding: () => breast_feeding,
	bricks: () => bricks,
	bride_with_veil: () => bride_with_veil,
	bridge_at_night: () => bridge_at_night,
	briefcase: () => briefcase,
	british_indian_ocean_territory: () => british_indian_ocean_territory,
	british_virgin_islands: () => british_virgin_islands,
	broccoli: () => broccoli,
	broken_heart: () => broken_heart,
	broom: () => broom,
	brown_circle: () => brown_circle,
	brown_heart: () => brown_heart,
	brown_square: () => brown_square,
	brunei: () => brunei,
	bubble_tea: () => bubble_tea,
	bucket: () => bucket,
	bug: () => bug,
	building_construction: () => building_construction,
	bulb: () => bulb,
	bulgaria: () => bulgaria,
	bullettrain_front: () => bullettrain_front,
	bullettrain_side: () => bullettrain_side,
	burkina_faso: () => burkina_faso,
	burrito: () => burrito,
	burundi: () => burundi,
	bus: () => bus,
	business_suit_levitating: () => business_suit_levitating,
	busstop: () => busstop,
	bust_in_silhouette: () => bust_in_silhouette,
	busts_in_silhouette: () => busts_in_silhouette,
	butter: () => butter,
	butterfly: () => butterfly,
	cactus: () => cactus,
	cake: () => cake,
	calendar: () => calendar,
	call_me_hand: () => call_me_hand,
	calling: () => calling,
	cambodia: () => cambodia,
	camel: () => camel,
	camera: () => camera,
	camera_flash: () => camera_flash,
	cameroon: () => cameroon,
	camping: () => camping,
	canada: () => canada,
	canary_islands: () => canary_islands,
	cancer: () => "♋",
	candle: () => candle,
	candy: () => candy,
	canned_food: () => canned_food,
	canoe: () => canoe,
	cape_verde: () => cape_verde,
	capital_abcd: () => capital_abcd,
	capricorn: () => "♑",
	car: () => car,
	card_file_box: () => card_file_box,
	card_index: () => card_index,
	card_index_dividers: () => card_index_dividers,
	caribbean_netherlands: () => caribbean_netherlands,
	carousel_horse: () => carousel_horse,
	carpentry_saw: () => carpentry_saw,
	carrot: () => carrot,
	cartwheeling: () => cartwheeling,
	cat: () => cat,
	cat2: () => cat2,
	cayman_islands: () => cayman_islands,
	cd: () => cd,
	central_african_republic: () => central_african_republic,
	ceuta_melilla: () => ceuta_melilla,
	chad: () => chad,
	chains: () => chains,
	chair: () => chair,
	champagne: () => champagne,
	chart: () => chart,
	chart_with_downwards_trend: () => chart_with_downwards_trend,
	chart_with_upwards_trend: () => chart_with_upwards_trend,
	checkered_flag: () => checkered_flag,
	cheese: () => cheese,
	cherries: () => cherries,
	cherry_blossom: () => cherry_blossom,
	chess_pawn: () => chess_pawn,
	chestnut: () => chestnut,
	chicken: () => chicken,
	child: () => child,
	children_crossing: () => children_crossing,
	chile: () => chile,
	chipmunk: () => chipmunk,
	chocolate_bar: () => chocolate_bar,
	chopsticks: () => chopsticks,
	christmas_island: () => christmas_island,
	christmas_tree: () => christmas_tree,
	church: () => "⛪",
	cinema: () => cinema,
	circus_tent: () => circus_tent,
	city_sunrise: () => city_sunrise,
	city_sunset: () => city_sunset,
	cityscape: () => cityscape,
	cl: () => cl,
	clamp: () => clamp,
	clap: () => clap,
	clapper: () => clapper,
	classical_building: () => classical_building,
	climbing: () => climbing,
	climbing_man: () => climbing_man,
	climbing_woman: () => climbing_woman,
	clinking_glasses: () => clinking_glasses,
	clipboard: () => clipboard,
	clipperton_island: () => clipperton_island,
	clock1: () => clock1,
	clock10: () => clock10,
	clock1030: () => clock1030,
	clock11: () => clock11,
	clock1130: () => clock1130,
	clock12: () => clock12,
	clock1230: () => clock1230,
	clock130: () => clock130,
	clock2: () => clock2,
	clock230: () => clock230,
	clock3: () => clock3,
	clock330: () => clock330,
	clock4: () => clock4,
	clock430: () => clock430,
	clock5: () => clock5,
	clock530: () => clock530,
	clock6: () => clock6,
	clock630: () => clock630,
	clock7: () => clock7,
	clock730: () => clock730,
	clock8: () => clock8,
	clock830: () => clock830,
	clock9: () => clock9,
	clock930: () => clock930,
	closed_book: () => closed_book,
	closed_lock_with_key: () => closed_lock_with_key,
	closed_umbrella: () => closed_umbrella,
	cloud: () => cloud,
	cloud_with_lightning: () => cloud_with_lightning,
	cloud_with_lightning_and_rain: () => cloud_with_lightning_and_rain,
	cloud_with_rain: () => cloud_with_rain,
	cloud_with_snow: () => cloud_with_snow,
	clown_face: () => clown_face,
	clubs: () => clubs,
	cn: () => cn,
	coat: () => coat,
	cockroach: () => cockroach,
	cocktail: () => cocktail,
	coconut: () => coconut,
	cocos_islands: () => cocos_islands,
	coffee: () => "☕",
	coffin: () => coffin,
	coin: () => coin,
	cold_face: () => cold_face,
	cold_sweat: () => cold_sweat,
	collision: () => collision,
	colombia: () => colombia,
	comet: () => comet,
	comoros: () => comoros,
	compass: () => compass,
	computer: () => computer,
	computer_mouse: () => computer_mouse,
	confetti_ball: () => confetti_ball,
	confounded: () => confounded,
	confused: () => confused,
	congo_brazzaville: () => congo_brazzaville,
	congo_kinshasa: () => congo_kinshasa,
	congratulations: () => congratulations,
	construction: () => construction,
	construction_worker: () => construction_worker,
	construction_worker_man: () => construction_worker_man,
	construction_worker_woman: () => construction_worker_woman,
	control_knobs: () => control_knobs,
	convenience_store: () => convenience_store,
	cook: () => cook,
	cook_islands: () => cook_islands,
	cookie: () => cookie,
	cool: () => cool,
	cop: () => cop,
	copyright: () => copyright,
	corn: () => corn,
	costa_rica: () => costa_rica,
	cote_divoire: () => cote_divoire,
	couch_and_lamp: () => couch_and_lamp,
	couple: () => couple,
	couple_with_heart: () => couple_with_heart,
	couple_with_heart_man_man: () => couple_with_heart_man_man,
	couple_with_heart_woman_man: () => couple_with_heart_woman_man,
	couple_with_heart_woman_woman: () => couple_with_heart_woman_woman,
	couplekiss: () => couplekiss,
	couplekiss_man_man: () => couplekiss_man_man,
	couplekiss_man_woman: () => couplekiss_man_woman,
	couplekiss_woman_woman: () => couplekiss_woman_woman,
	cow: () => cow,
	cow2: () => cow2,
	cowboy_hat_face: () => cowboy_hat_face,
	crab: () => crab,
	crayon: () => crayon,
	credit_card: () => credit_card,
	crescent_moon: () => crescent_moon,
	cricket: () => cricket,
	cricket_game: () => cricket_game,
	croatia: () => croatia,
	crocodile: () => crocodile,
	croissant: () => croissant,
	crossed_fingers: () => crossed_fingers,
	crossed_flags: () => crossed_flags,
	crossed_swords: () => crossed_swords,
	crown: () => crown,
	cry: () => cry,
	crying_cat_face: () => crying_cat_face,
	crystal_ball: () => crystal_ball,
	cuba: () => cuba,
	cucumber: () => cucumber,
	cup_with_straw: () => cup_with_straw,
	cupcake: () => cupcake,
	cupid: () => cupid,
	curacao: () => curacao,
	curling_stone: () => curling_stone,
	curly_haired_man: () => curly_haired_man,
	curly_haired_woman: () => curly_haired_woman,
	curly_loop: () => "➰",
	currency_exchange: () => currency_exchange,
	curry: () => curry,
	cursing_face: () => cursing_face,
	custard: () => custard,
	customs: () => customs,
	cut_of_meat: () => cut_of_meat,
	cyclone: () => cyclone,
	cyprus: () => cyprus,
	czech_republic: () => czech_republic,
	dagger: () => dagger,
	dancer: () => dancer,
	dancers: () => dancers,
	dancing_men: () => dancing_men,
	dancing_women: () => dancing_women,
	dango: () => dango,
	dark_sunglasses: () => dark_sunglasses,
	dart: () => dart,
	dash: () => dash,
	date: () => date,
	de: () => de,
	deaf_man: () => deaf_man,
	deaf_person: () => deaf_person,
	deaf_woman: () => deaf_woman,
	deciduous_tree: () => deciduous_tree,
	deer: () => deer,
	default: () => full_default,
	denmark: () => denmark,
	department_store: () => department_store,
	derelict_house: () => derelict_house,
	desert: () => desert,
	desert_island: () => desert_island,
	desktop_computer: () => desktop_computer,
	detective: () => detective,
	diamond_shape_with_a_dot_inside: () => diamond_shape_with_a_dot_inside,
	diamonds: () => diamonds,
	diego_garcia: () => diego_garcia,
	disappointed: () => disappointed,
	disappointed_relieved: () => disappointed_relieved,
	disguised_face: () => disguised_face,
	diving_mask: () => diving_mask,
	diya_lamp: () => diya_lamp,
	dizzy: () => dizzy,
	dizzy_face: () => dizzy_face,
	djibouti: () => djibouti,
	dna: () => dna,
	do_not_litter: () => do_not_litter,
	dodo: () => dodo,
	dog: () => dog,
	dog2: () => dog2,
	dollar: () => dollar,
	dolls: () => dolls,
	dolphin: () => dolphin,
	dominica: () => dominica,
	dominican_republic: () => dominican_republic,
	door: () => door,
	doughnut: () => doughnut,
	dove: () => dove,
	dragon: () => dragon,
	dragon_face: () => dragon_face,
	dress: () => dress,
	dromedary_camel: () => dromedary_camel,
	drooling_face: () => drooling_face,
	drop_of_blood: () => drop_of_blood,
	droplet: () => droplet,
	drum: () => drum,
	duck: () => duck,
	dumpling: () => dumpling,
	dvd: () => dvd,
	eagle: () => eagle,
	ear: () => ear,
	ear_of_rice: () => ear_of_rice,
	ear_with_hearing_aid: () => ear_with_hearing_aid,
	earth_africa: () => earth_africa,
	earth_americas: () => earth_americas,
	earth_asia: () => earth_asia,
	ecuador: () => ecuador,
	egg: () => egg,
	eggplant: () => eggplant,
	egypt: () => egypt,
	eight: () => eight,
	eight_pointed_black_star: () => eight_pointed_black_star,
	eight_spoked_asterisk: () => eight_spoked_asterisk,
	eject_button: () => eject_button,
	el_salvador: () => el_salvador,
	electric_plug: () => electric_plug,
	elephant: () => elephant,
	elevator: () => elevator,
	elf: () => elf,
	elf_man: () => elf_man,
	elf_woman: () => elf_woman,
	email: () => email,
	end: () => end,
	england: () => england,
	envelope: () => envelope,
	envelope_with_arrow: () => envelope_with_arrow,
	equatorial_guinea: () => equatorial_guinea,
	eritrea: () => eritrea,
	es: () => es,
	estonia: () => estonia,
	ethiopia: () => ethiopia,
	eu: () => eu,
	euro: () => euro,
	european_castle: () => european_castle,
	european_post_office: () => european_post_office,
	european_union: () => european_union,
	evergreen_tree: () => evergreen_tree,
	exclamation: () => "❗",
	exploding_head: () => exploding_head,
	expressionless: () => expressionless,
	eye: () => eye,
	eye_speech_bubble: () => eye_speech_bubble,
	eyeglasses: () => eyeglasses,
	eyes: () => eyes,
	face_with_head_bandage: () => face_with_head_bandage,
	face_with_thermometer: () => face_with_thermometer,
	facepalm: () => facepalm,
	facepunch: () => facepunch,
	factory: () => factory,
	factory_worker: () => factory_worker,
	fairy: () => fairy,
	fairy_man: () => fairy_man,
	fairy_woman: () => fairy_woman,
	falafel: () => falafel,
	falkland_islands: () => falkland_islands,
	fallen_leaf: () => fallen_leaf,
	family: () => family,
	family_man_boy: () => family_man_boy,
	family_man_boy_boy: () => family_man_boy_boy,
	family_man_girl: () => family_man_girl,
	family_man_girl_boy: () => family_man_girl_boy,
	family_man_girl_girl: () => family_man_girl_girl,
	family_man_man_boy: () => family_man_man_boy,
	family_man_man_boy_boy: () => family_man_man_boy_boy,
	family_man_man_girl: () => family_man_man_girl,
	family_man_man_girl_boy: () => family_man_man_girl_boy,
	family_man_man_girl_girl: () => family_man_man_girl_girl,
	family_man_woman_boy: () => family_man_woman_boy,
	family_man_woman_boy_boy: () => family_man_woman_boy_boy,
	family_man_woman_girl: () => family_man_woman_girl,
	family_man_woman_girl_boy: () => family_man_woman_girl_boy,
	family_man_woman_girl_girl: () => family_man_woman_girl_girl,
	family_woman_boy: () => family_woman_boy,
	family_woman_boy_boy: () => family_woman_boy_boy,
	family_woman_girl: () => family_woman_girl,
	family_woman_girl_boy: () => family_woman_girl_boy,
	family_woman_girl_girl: () => family_woman_girl_girl,
	family_woman_woman_boy: () => family_woman_woman_boy,
	family_woman_woman_boy_boy: () => family_woman_woman_boy_boy,
	family_woman_woman_girl: () => family_woman_woman_girl,
	family_woman_woman_girl_boy: () => family_woman_woman_girl_boy,
	family_woman_woman_girl_girl: () => family_woman_woman_girl_girl,
	farmer: () => farmer,
	faroe_islands: () => faroe_islands,
	fast_forward: () => "⏩",
	fax: () => fax,
	fearful: () => fearful,
	feather: () => feather,
	feet: () => feet,
	female_detective: () => female_detective,
	female_sign: () => female_sign,
	ferris_wheel: () => ferris_wheel,
	ferry: () => ferry,
	field_hockey: () => field_hockey,
	fiji: () => fiji,
	file_cabinet: () => file_cabinet,
	file_folder: () => file_folder,
	film_projector: () => film_projector,
	film_strip: () => film_strip,
	finland: () => finland,
	fire: () => fire,
	fire_engine: () => fire_engine,
	fire_extinguisher: () => fire_extinguisher,
	firecracker: () => firecracker,
	firefighter: () => firefighter,
	fireworks: () => fireworks,
	first_quarter_moon: () => first_quarter_moon,
	first_quarter_moon_with_face: () => first_quarter_moon_with_face,
	fish: () => fish,
	fish_cake: () => fish_cake,
	fishing_pole_and_fish: () => fishing_pole_and_fish,
	fist: () => "✊",
	fist_left: () => fist_left,
	fist_oncoming: () => fist_oncoming,
	fist_raised: () => "✊",
	fist_right: () => fist_right,
	five: () => five,
	flags: () => flags,
	flamingo: () => flamingo,
	flashlight: () => flashlight,
	flat_shoe: () => flat_shoe,
	flatbread: () => flatbread,
	fleur_de_lis: () => fleur_de_lis,
	flight_arrival: () => flight_arrival,
	flight_departure: () => flight_departure,
	flipper: () => flipper,
	floppy_disk: () => floppy_disk,
	flower_playing_cards: () => flower_playing_cards,
	flushed: () => flushed,
	fly: () => fly,
	flying_disc: () => flying_disc,
	flying_saucer: () => flying_saucer,
	fog: () => fog,
	foggy: () => foggy,
	fondue: () => fondue,
	foot: () => foot,
	football: () => football,
	footprints: () => footprints,
	fork_and_knife: () => fork_and_knife,
	fortune_cookie: () => fortune_cookie,
	fountain: () => "⛲",
	fountain_pen: () => fountain_pen,
	four: () => four,
	four_leaf_clover: () => four_leaf_clover,
	fox_face: () => fox_face,
	fr: () => fr,
	framed_picture: () => framed_picture,
	free: () => free,
	french_guiana: () => french_guiana,
	french_polynesia: () => french_polynesia,
	french_southern_territories: () => french_southern_territories,
	fried_egg: () => fried_egg,
	fried_shrimp: () => fried_shrimp,
	fries: () => fries,
	frog: () => frog,
	frowning: () => frowning,
	frowning_face: () => frowning_face,
	frowning_man: () => frowning_man,
	frowning_person: () => frowning_person,
	frowning_woman: () => frowning_woman,
	fu: () => fu,
	fuelpump: () => "⛽",
	full_moon: () => full_moon,
	full_moon_with_face: () => full_moon_with_face,
	funeral_urn: () => funeral_urn,
	gabon: () => gabon,
	gambia: () => gambia,
	game_die: () => game_die,
	garlic: () => garlic,
	gb: () => gb,
	gear: () => gear,
	gem: () => gem,
	gemini: () => "♊",
	genie: () => genie,
	genie_man: () => genie_man,
	genie_woman: () => genie_woman,
	georgia: () => georgia,
	ghana: () => ghana,
	ghost: () => ghost,
	gibraltar: () => gibraltar,
	gift: () => gift,
	gift_heart: () => gift_heart,
	giraffe: () => giraffe,
	girl: () => girl,
	globe_with_meridians: () => globe_with_meridians,
	gloves: () => gloves,
	goal_net: () => goal_net,
	goat: () => goat,
	goggles: () => goggles,
	golf: () => "⛳",
	golfing: () => golfing,
	golfing_man: () => golfing_man,
	golfing_woman: () => golfing_woman,
	gorilla: () => gorilla,
	grapes: () => grapes,
	greece: () => greece,
	green_apple: () => green_apple,
	green_book: () => green_book,
	green_circle: () => green_circle,
	green_heart: () => green_heart,
	green_salad: () => green_salad,
	green_square: () => green_square,
	greenland: () => greenland,
	grenada: () => grenada,
	grey_exclamation: () => "❕",
	grey_question: () => "❔",
	grimacing: () => grimacing,
	grin: () => grin,
	grinning: () => grinning,
	guadeloupe: () => guadeloupe,
	guam: () => guam,
	guard: () => guard,
	guardsman: () => guardsman,
	guardswoman: () => guardswoman,
	guatemala: () => guatemala,
	guernsey: () => guernsey,
	guide_dog: () => guide_dog,
	guinea: () => guinea,
	guinea_bissau: () => guinea_bissau,
	guitar: () => guitar,
	gun: () => gun,
	guyana: () => guyana,
	haircut: () => haircut,
	haircut_man: () => haircut_man,
	haircut_woman: () => haircut_woman,
	haiti: () => haiti,
	hamburger: () => hamburger,
	hammer: () => hammer,
	hammer_and_pick: () => hammer_and_pick,
	hammer_and_wrench: () => hammer_and_wrench,
	hamster: () => hamster,
	hand: () => "✋",
	hand_over_mouth: () => hand_over_mouth,
	handbag: () => handbag,
	handball_person: () => handball_person,
	handshake: () => handshake,
	hankey: () => hankey,
	hash: () => hash,
	hatched_chick: () => hatched_chick,
	hatching_chick: () => hatching_chick,
	headphones: () => headphones,
	headstone: () => headstone,
	health_worker: () => health_worker,
	hear_no_evil: () => hear_no_evil,
	heard_mcdonald_islands: () => heard_mcdonald_islands,
	heart: () => heart,
	heart_decoration: () => heart_decoration,
	heart_eyes: () => heart_eyes,
	heart_eyes_cat: () => heart_eyes_cat,
	heartbeat: () => heartbeat,
	heartpulse: () => heartpulse,
	hearts: () => hearts,
	heavy_check_mark: () => heavy_check_mark,
	heavy_division_sign: () => "➗",
	heavy_dollar_sign: () => heavy_dollar_sign,
	heavy_exclamation_mark: () => "❗",
	heavy_heart_exclamation: () => heavy_heart_exclamation,
	heavy_minus_sign: () => "➖",
	heavy_multiplication_x: () => heavy_multiplication_x,
	heavy_plus_sign: () => "➕",
	hedgehog: () => hedgehog,
	helicopter: () => helicopter,
	herb: () => herb,
	hibiscus: () => hibiscus,
	high_brightness: () => high_brightness,
	high_heel: () => high_heel,
	hiking_boot: () => hiking_boot,
	hindu_temple: () => hindu_temple,
	hippopotamus: () => hippopotamus,
	hocho: () => hocho,
	hole: () => hole,
	honduras: () => honduras,
	honey_pot: () => honey_pot,
	honeybee: () => honeybee,
	hong_kong: () => hong_kong,
	hook: () => hook,
	horse: () => horse,
	horse_racing: () => horse_racing,
	hospital: () => hospital,
	hot_face: () => hot_face,
	hot_pepper: () => hot_pepper,
	hotdog: () => hotdog,
	hotel: () => hotel,
	hotsprings: () => hotsprings,
	hourglass: () => "⌛",
	hourglass_flowing_sand: () => "⏳",
	house: () => house,
	house_with_garden: () => house_with_garden,
	houses: () => houses,
	hugs: () => hugs,
	hungary: () => hungary,
	hushed: () => hushed,
	hut: () => hut,
	ice_cream: () => ice_cream,
	ice_cube: () => ice_cube,
	ice_hockey: () => ice_hockey,
	ice_skate: () => ice_skate,
	icecream: () => icecream,
	iceland: () => iceland,
	id: () => id,
	ideograph_advantage: () => ideograph_advantage,
	imp: () => imp,
	inbox_tray: () => inbox_tray,
	incoming_envelope: () => incoming_envelope,
	india: () => india,
	indonesia: () => indonesia,
	infinity: () => infinity,
	information_desk_person: () => information_desk_person,
	information_source: () => information_source,
	innocent: () => innocent,
	interrobang: () => interrobang,
	iphone: () => iphone,
	iran: () => iran,
	iraq: () => iraq,
	ireland: () => ireland,
	isle_of_man: () => isle_of_man,
	israel: () => israel,
	it: () => it,
	izakaya_lantern: () => izakaya_lantern,
	jack_o_lantern: () => jack_o_lantern,
	jamaica: () => jamaica,
	japan: () => japan,
	japanese_castle: () => japanese_castle,
	japanese_goblin: () => japanese_goblin,
	japanese_ogre: () => japanese_ogre,
	jeans: () => jeans,
	jersey: () => jersey,
	jigsaw: () => jigsaw,
	jordan: () => jordan,
	joy: () => joy,
	joy_cat: () => joy_cat,
	joystick: () => joystick,
	jp: () => jp,
	judge: () => judge,
	juggling_person: () => juggling_person,
	kaaba: () => kaaba,
	kangaroo: () => kangaroo,
	kazakhstan: () => kazakhstan,
	kenya: () => kenya,
	key: () => key,
	keyboard: () => keyboard,
	keycap_ten: () => keycap_ten,
	kick_scooter: () => kick_scooter,
	kimono: () => kimono,
	kiribati: () => kiribati,
	kiss: () => kiss,
	kissing: () => kissing,
	kissing_cat: () => kissing_cat,
	kissing_closed_eyes: () => kissing_closed_eyes,
	kissing_heart: () => kissing_heart,
	kissing_smiling_eyes: () => kissing_smiling_eyes,
	kite: () => kite,
	kiwi_fruit: () => kiwi_fruit,
	kneeling_man: () => kneeling_man,
	kneeling_person: () => kneeling_person,
	kneeling_woman: () => kneeling_woman,
	knife: () => knife,
	knot: () => knot,
	koala: () => koala,
	koko: () => koko,
	kosovo: () => kosovo,
	kr: () => kr,
	kuwait: () => kuwait,
	kyrgyzstan: () => kyrgyzstan,
	lab_coat: () => lab_coat,
	label: () => label$1,
	lacrosse: () => lacrosse,
	ladder: () => ladder,
	lady_beetle: () => lady_beetle,
	lantern: () => lantern,
	laos: () => laos,
	large_blue_circle: () => large_blue_circle,
	large_blue_diamond: () => large_blue_diamond,
	large_orange_diamond: () => large_orange_diamond,
	last_quarter_moon: () => last_quarter_moon,
	last_quarter_moon_with_face: () => last_quarter_moon_with_face,
	latin_cross: () => latin_cross,
	latvia: () => latvia,
	laughing: () => laughing,
	leafy_green: () => leafy_green,
	leaves: () => leaves,
	lebanon: () => lebanon,
	ledger: () => ledger,
	left_luggage: () => left_luggage,
	left_right_arrow: () => left_right_arrow,
	left_speech_bubble: () => left_speech_bubble,
	leftwards_arrow_with_hook: () => leftwards_arrow_with_hook,
	leg: () => leg,
	lemon: () => lemon,
	leo: () => "♌",
	leopard: () => leopard,
	lesotho: () => lesotho,
	level_slider: () => level_slider,
	liberia: () => liberia,
	libra: () => "♎",
	libya: () => libya,
	liechtenstein: () => liechtenstein,
	light_rail: () => light_rail,
	link: () => link,
	lion: () => lion,
	lips: () => lips,
	lipstick: () => lipstick,
	lithuania: () => lithuania,
	lizard: () => lizard,
	llama: () => llama,
	lobster: () => lobster,
	lock: () => lock,
	lock_with_ink_pen: () => lock_with_ink_pen,
	lollipop: () => lollipop,
	long_drum: () => long_drum,
	loop: () => "➿",
	lotion_bottle: () => lotion_bottle,
	lotus_position: () => lotus_position,
	lotus_position_man: () => lotus_position_man,
	lotus_position_woman: () => lotus_position_woman,
	loud_sound: () => loud_sound,
	loudspeaker: () => loudspeaker,
	love_hotel: () => love_hotel,
	love_letter: () => love_letter,
	love_you_gesture: () => love_you_gesture,
	low_brightness: () => low_brightness,
	luggage: () => luggage,
	lungs: () => lungs,
	luxembourg: () => luxembourg,
	lying_face: () => lying_face,
	m: () => m,
	macau: () => macau,
	macedonia: () => macedonia,
	madagascar: () => madagascar,
	mag: () => mag,
	mag_right: () => mag_right,
	mage: () => mage,
	mage_man: () => mage_man,
	mage_woman: () => mage_woman,
	magic_wand: () => magic_wand,
	magnet: () => magnet,
	mahjong: () => mahjong,
	mailbox: () => mailbox,
	mailbox_closed: () => mailbox_closed,
	mailbox_with_mail: () => mailbox_with_mail,
	mailbox_with_no_mail: () => mailbox_with_no_mail,
	malawi: () => malawi,
	malaysia: () => malaysia,
	maldives: () => maldives,
	male_detective: () => male_detective,
	male_sign: () => male_sign,
	mali: () => mali,
	malta: () => malta,
	mammoth: () => mammoth,
	man: () => man,
	man_artist: () => man_artist,
	man_astronaut: () => man_astronaut,
	man_cartwheeling: () => man_cartwheeling,
	man_cook: () => man_cook,
	man_dancing: () => man_dancing,
	man_facepalming: () => man_facepalming,
	man_factory_worker: () => man_factory_worker,
	man_farmer: () => man_farmer,
	man_feeding_baby: () => man_feeding_baby,
	man_firefighter: () => man_firefighter,
	man_health_worker: () => man_health_worker,
	man_in_manual_wheelchair: () => man_in_manual_wheelchair,
	man_in_motorized_wheelchair: () => man_in_motorized_wheelchair,
	man_in_tuxedo: () => man_in_tuxedo,
	man_judge: () => man_judge,
	man_juggling: () => man_juggling,
	man_mechanic: () => man_mechanic,
	man_office_worker: () => man_office_worker,
	man_pilot: () => man_pilot,
	man_playing_handball: () => man_playing_handball,
	man_playing_water_polo: () => man_playing_water_polo,
	man_scientist: () => man_scientist,
	man_shrugging: () => man_shrugging,
	man_singer: () => man_singer,
	man_student: () => man_student,
	man_teacher: () => man_teacher,
	man_technologist: () => man_technologist,
	man_with_gua_pi_mao: () => man_with_gua_pi_mao,
	man_with_probing_cane: () => man_with_probing_cane,
	man_with_turban: () => man_with_turban,
	man_with_veil: () => man_with_veil,
	mandarin: () => mandarin,
	mango: () => mango,
	mans_shoe: () => mans_shoe,
	mantelpiece_clock: () => mantelpiece_clock,
	manual_wheelchair: () => manual_wheelchair,
	maple_leaf: () => maple_leaf,
	marshall_islands: () => marshall_islands,
	martial_arts_uniform: () => martial_arts_uniform,
	martinique: () => martinique,
	mask: () => mask,
	massage: () => massage,
	massage_man: () => massage_man,
	massage_woman: () => massage_woman,
	mate: () => mate,
	mauritania: () => mauritania,
	mauritius: () => mauritius,
	mayotte: () => mayotte,
	meat_on_bone: () => meat_on_bone,
	mechanic: () => mechanic,
	mechanical_arm: () => mechanical_arm,
	mechanical_leg: () => mechanical_leg,
	medal_military: () => medal_military,
	medal_sports: () => medal_sports,
	medical_symbol: () => medical_symbol,
	mega: () => mega,
	melon: () => melon,
	memo: () => memo,
	men_wrestling: () => men_wrestling,
	menorah: () => menorah,
	mens: () => mens,
	mermaid: () => mermaid,
	merman: () => merman,
	merperson: () => merperson,
	metal: () => metal,
	metro: () => metro,
	mexico: () => mexico,
	microbe: () => microbe,
	micronesia: () => micronesia,
	microphone: () => microphone,
	microscope: () => microscope,
	middle_finger: () => middle_finger,
	military_helmet: () => military_helmet,
	milk_glass: () => milk_glass,
	milky_way: () => milky_way,
	minibus: () => minibus,
	minidisc: () => minidisc,
	mirror: () => mirror,
	mobile_phone_off: () => mobile_phone_off,
	moldova: () => moldova,
	monaco: () => monaco,
	money_mouth_face: () => money_mouth_face,
	money_with_wings: () => money_with_wings,
	moneybag: () => moneybag,
	mongolia: () => mongolia,
	monkey: () => monkey,
	monkey_face: () => monkey_face,
	monocle_face: () => monocle_face,
	monorail: () => monorail,
	montenegro: () => montenegro,
	montserrat: () => montserrat,
	moon: () => moon,
	moon_cake: () => moon_cake,
	morocco: () => morocco,
	mortar_board: () => mortar_board,
	mosque: () => mosque,
	mosquito: () => mosquito,
	motor_boat: () => motor_boat,
	motor_scooter: () => motor_scooter,
	motorcycle: () => motorcycle,
	motorized_wheelchair: () => motorized_wheelchair,
	motorway: () => motorway,
	mount_fuji: () => mount_fuji,
	mountain: () => mountain,
	mountain_bicyclist: () => mountain_bicyclist,
	mountain_biking_man: () => mountain_biking_man,
	mountain_biking_woman: () => mountain_biking_woman,
	mountain_cableway: () => mountain_cableway,
	mountain_railway: () => mountain_railway,
	mountain_snow: () => mountain_snow,
	mouse: () => mouse,
	mouse2: () => mouse2,
	mouse_trap: () => mouse_trap,
	movie_camera: () => movie_camera,
	moyai: () => moyai,
	mozambique: () => mozambique,
	mrs_claus: () => mrs_claus,
	muscle: () => muscle,
	mushroom: () => mushroom,
	musical_keyboard: () => musical_keyboard,
	musical_note: () => musical_note,
	musical_score: () => musical_score,
	mute: () => mute,
	mx_claus: () => mx_claus,
	myanmar: () => myanmar,
	nail_care: () => nail_care,
	name_badge: () => name_badge,
	namibia: () => namibia,
	national_park: () => national_park,
	nauru: () => nauru,
	nauseated_face: () => nauseated_face,
	nazar_amulet: () => nazar_amulet,
	necktie: () => necktie,
	negative_squared_cross_mark: () => "❎",
	nepal: () => nepal,
	nerd_face: () => nerd_face,
	nesting_dolls: () => nesting_dolls,
	netherlands: () => netherlands,
	neutral_face: () => neutral_face,
	new_caledonia: () => new_caledonia,
	new_moon: () => new_moon,
	new_moon_with_face: () => new_moon_with_face,
	new_zealand: () => new_zealand,
	newspaper: () => newspaper,
	newspaper_roll: () => newspaper_roll,
	next_track_button: () => next_track_button,
	ng: () => ng,
	ng_man: () => ng_man,
	ng_woman: () => ng_woman,
	nicaragua: () => nicaragua,
	niger: () => niger,
	nigeria: () => nigeria,
	night_with_stars: () => night_with_stars,
	nine: () => nine,
	ninja: () => ninja,
	niue: () => niue,
	no_bell: () => no_bell,
	no_bicycles: () => no_bicycles,
	no_entry: () => "⛔",
	no_entry_sign: () => no_entry_sign,
	no_good: () => no_good,
	no_good_man: () => no_good_man,
	no_good_woman: () => no_good_woman,
	no_mobile_phones: () => no_mobile_phones,
	no_mouth: () => no_mouth,
	no_pedestrians: () => no_pedestrians,
	no_smoking: () => no_smoking,
	norfolk_island: () => norfolk_island,
	north_korea: () => north_korea,
	northern_mariana_islands: () => northern_mariana_islands,
	norway: () => norway,
	nose: () => nose,
	notebook: () => notebook,
	notebook_with_decorative_cover: () => notebook_with_decorative_cover,
	notes: () => notes,
	nut_and_bolt: () => nut_and_bolt,
	o: () => "⭕",
	o2: () => o2,
	ocean: () => ocean,
	octopus: () => octopus,
	oden: () => oden,
	office: () => office,
	office_worker: () => office_worker,
	oil_drum: () => oil_drum,
	ok: () => ok,
	ok_hand: () => ok_hand,
	ok_man: () => ok_man,
	ok_person: () => ok_person,
	ok_woman: () => ok_woman,
	old_key: () => old_key,
	older_adult: () => older_adult,
	older_man: () => older_man,
	older_woman: () => older_woman,
	olive: () => olive,
	om: () => om,
	oman: () => oman,
	on: () => on,
	oncoming_automobile: () => oncoming_automobile,
	oncoming_bus: () => oncoming_bus,
	oncoming_police_car: () => oncoming_police_car,
	oncoming_taxi: () => oncoming_taxi,
	one: () => one,
	one_piece_swimsuit: () => one_piece_swimsuit,
	onion: () => onion,
	open_book: () => open_book,
	open_file_folder: () => open_file_folder,
	open_hands: () => open_hands,
	open_mouth: () => open_mouth,
	open_umbrella: () => open_umbrella,
	ophiuchus: () => "⛎",
	orange: () => orange,
	orange_book: () => orange_book,
	orange_circle: () => orange_circle,
	orange_heart: () => orange_heart,
	orange_square: () => orange_square,
	orangutan: () => orangutan,
	orthodox_cross: () => orthodox_cross,
	otter: () => otter,
	outbox_tray: () => outbox_tray,
	owl: () => owl,
	ox: () => ox,
	oyster: () => oyster,
	page_facing_up: () => page_facing_up,
	page_with_curl: () => page_with_curl,
	pager: () => pager,
	paintbrush: () => paintbrush,
	pakistan: () => pakistan,
	palau: () => palau,
	palestinian_territories: () => palestinian_territories,
	palm_tree: () => palm_tree,
	palms_up_together: () => palms_up_together,
	panama: () => panama,
	pancakes: () => pancakes,
	panda_face: () => panda_face,
	paperclip: () => paperclip,
	paperclips: () => paperclips,
	papua_new_guinea: () => papua_new_guinea,
	parachute: () => parachute,
	paraguay: () => paraguay,
	parasol_on_ground: () => parasol_on_ground,
	parking: () => parking,
	parrot: () => parrot,
	part_alternation_mark: () => part_alternation_mark,
	partly_sunny: () => "⛅",
	partying_face: () => partying_face,
	passenger_ship: () => passenger_ship,
	passport_control: () => passport_control,
	pause_button: () => pause_button,
	paw_prints: () => paw_prints,
	peace_symbol: () => peace_symbol,
	peach: () => peach,
	peacock: () => peacock,
	peanuts: () => peanuts,
	pear: () => pear,
	pen: () => pen,
	pencil: () => pencil,
	pencil2: () => pencil2,
	penguin: () => penguin,
	pensive: () => pensive,
	people_holding_hands: () => people_holding_hands,
	people_hugging: () => people_hugging,
	performing_arts: () => performing_arts,
	persevere: () => persevere,
	person_bald: () => person_bald,
	person_curly_hair: () => person_curly_hair,
	person_feeding_baby: () => person_feeding_baby,
	person_fencing: () => person_fencing,
	person_in_manual_wheelchair: () => person_in_manual_wheelchair,
	person_in_motorized_wheelchair: () => person_in_motorized_wheelchair,
	person_in_tuxedo: () => person_in_tuxedo,
	person_red_hair: () => person_red_hair,
	person_white_hair: () => person_white_hair,
	person_with_probing_cane: () => person_with_probing_cane,
	person_with_turban: () => person_with_turban,
	person_with_veil: () => person_with_veil,
	peru: () => peru,
	petri_dish: () => petri_dish,
	philippines: () => philippines,
	phone: () => phone,
	pick: () => pick,
	pickup_truck: () => pickup_truck,
	pie: () => pie,
	pig: () => pig,
	pig2: () => pig2,
	pig_nose: () => pig_nose,
	pill: () => pill,
	pilot: () => pilot,
	pinata: () => pinata,
	pinched_fingers: () => pinched_fingers,
	pinching_hand: () => pinching_hand,
	pineapple: () => pineapple,
	ping_pong: () => ping_pong,
	pirate_flag: () => pirate_flag,
	pisces: () => "♓",
	pitcairn_islands: () => pitcairn_islands,
	pizza: () => pizza,
	placard: () => placard,
	place_of_worship: () => place_of_worship,
	plate_with_cutlery: () => plate_with_cutlery,
	play_or_pause_button: () => play_or_pause_button,
	pleading_face: () => pleading_face,
	plunger: () => plunger,
	point_down: () => point_down,
	point_left: () => point_left,
	point_right: () => point_right,
	point_up: () => point_up,
	point_up_2: () => point_up_2,
	poland: () => poland,
	polar_bear: () => polar_bear,
	police_car: () => police_car,
	police_officer: () => police_officer,
	policeman: () => policeman,
	policewoman: () => policewoman,
	poodle: () => poodle,
	poop: () => poop,
	popcorn: () => popcorn,
	portugal: () => portugal,
	post_office: () => post_office,
	postal_horn: () => postal_horn,
	postbox: () => postbox,
	potable_water: () => potable_water,
	potato: () => potato,
	potted_plant: () => potted_plant,
	pouch: () => pouch,
	poultry_leg: () => poultry_leg,
	pound: () => pound,
	pout: () => pout,
	pouting_cat: () => pouting_cat,
	pouting_face: () => pouting_face,
	pouting_man: () => pouting_man,
	pouting_woman: () => pouting_woman,
	pray: () => pray,
	prayer_beads: () => prayer_beads,
	pregnant_woman: () => pregnant_woman,
	pretzel: () => pretzel,
	previous_track_button: () => previous_track_button,
	prince: () => prince,
	princess: () => princess,
	printer: () => printer,
	probing_cane: () => probing_cane,
	puerto_rico: () => puerto_rico,
	punch: () => punch,
	purple_circle: () => purple_circle,
	purple_heart: () => purple_heart,
	purple_square: () => purple_square,
	purse: () => purse,
	pushpin: () => pushpin,
	put_litter_in_its_place: () => put_litter_in_its_place,
	qatar: () => qatar,
	question: () => "❓",
	rabbit: () => rabbit,
	rabbit2: () => rabbit2,
	raccoon: () => raccoon,
	racehorse: () => racehorse,
	racing_car: () => racing_car,
	radio: () => radio,
	radio_button: () => radio_button,
	radioactive: () => radioactive,
	rage: () => rage,
	railway_car: () => railway_car,
	railway_track: () => railway_track,
	rainbow: () => rainbow,
	rainbow_flag: () => rainbow_flag,
	raised_back_of_hand: () => raised_back_of_hand,
	raised_eyebrow: () => raised_eyebrow,
	raised_hand: () => "✋",
	raised_hand_with_fingers_splayed: () => raised_hand_with_fingers_splayed,
	raised_hands: () => raised_hands,
	raising_hand: () => raising_hand,
	raising_hand_man: () => raising_hand_man,
	raising_hand_woman: () => raising_hand_woman,
	ram: () => ram,
	ramen: () => ramen,
	rat: () => rat,
	razor: () => razor,
	receipt: () => receipt,
	record_button: () => record_button,
	recycle: () => recycle,
	red_car: () => red_car,
	red_circle: () => red_circle,
	red_envelope: () => red_envelope,
	red_haired_man: () => red_haired_man,
	red_haired_woman: () => red_haired_woman,
	red_square: () => red_square,
	registered: () => registered,
	relaxed: () => relaxed,
	relieved: () => relieved,
	reminder_ribbon: () => reminder_ribbon,
	repeat: () => repeat,
	repeat_one: () => repeat_one,
	rescue_worker_helmet: () => rescue_worker_helmet,
	restroom: () => restroom,
	reunion: () => reunion,
	revolving_hearts: () => revolving_hearts,
	rewind: () => "⏪",
	rhinoceros: () => rhinoceros,
	ribbon: () => ribbon,
	rice: () => rice,
	rice_ball: () => rice_ball,
	rice_cracker: () => rice_cracker,
	rice_scene: () => rice_scene,
	right_anger_bubble: () => right_anger_bubble,
	ring: () => ring,
	ringed_planet: () => ringed_planet,
	robot: () => robot,
	rock: () => rock,
	rocket: () => rocket,
	rofl: () => rofl,
	roll_eyes: () => roll_eyes,
	roll_of_paper: () => roll_of_paper,
	roller_coaster: () => roller_coaster,
	roller_skate: () => roller_skate,
	romania: () => romania,
	rooster: () => rooster,
	rose: () => rose,
	rosette: () => rosette,
	rotating_light: () => rotating_light,
	round_pushpin: () => round_pushpin,
	rowboat: () => rowboat,
	rowing_man: () => rowing_man,
	rowing_woman: () => rowing_woman,
	ru: () => ru,
	rugby_football: () => rugby_football,
	runner: () => runner,
	running: () => running,
	running_man: () => running_man,
	running_shirt_with_sash: () => running_shirt_with_sash,
	running_woman: () => running_woman,
	rwanda: () => rwanda,
	sa: () => sa,
	safety_pin: () => safety_pin,
	safety_vest: () => safety_vest,
	sagittarius: () => "♐",
	sailboat: () => "⛵",
	sake: () => sake,
	salt: () => salt,
	samoa: () => samoa,
	san_marino: () => san_marino,
	sandal: () => sandal,
	sandwich: () => sandwich,
	santa: () => santa,
	sao_tome_principe: () => sao_tome_principe,
	sari: () => sari,
	sassy_man: () => sassy_man,
	sassy_woman: () => sassy_woman,
	satellite: () => satellite,
	satisfied: () => satisfied,
	saudi_arabia: () => saudi_arabia,
	sauna_man: () => sauna_man,
	sauna_person: () => sauna_person,
	sauna_woman: () => sauna_woman,
	sauropod: () => sauropod,
	saxophone: () => saxophone,
	scarf: () => scarf,
	school: () => school,
	school_satchel: () => school_satchel,
	scientist: () => scientist,
	scissors: () => scissors,
	scorpion: () => scorpion,
	scorpius: () => "♏",
	scotland: () => scotland,
	scream: () => scream,
	scream_cat: () => scream_cat,
	screwdriver: () => screwdriver,
	scroll: () => scroll,
	seal: () => seal,
	seat: () => seat,
	secret: () => secret,
	see_no_evil: () => see_no_evil,
	seedling: () => seedling,
	selfie: () => selfie,
	senegal: () => senegal,
	serbia: () => serbia,
	service_dog: () => service_dog,
	seven: () => seven,
	sewing_needle: () => sewing_needle,
	seychelles: () => seychelles,
	shallow_pan_of_food: () => shallow_pan_of_food,
	shamrock: () => shamrock,
	shark: () => shark,
	shaved_ice: () => shaved_ice,
	sheep: () => sheep,
	shell: () => shell,
	shield: () => shield,
	shinto_shrine: () => shinto_shrine,
	ship: () => ship,
	shirt: () => shirt,
	shit: () => shit,
	shoe: () => shoe,
	shopping: () => shopping,
	shopping_cart: () => shopping_cart,
	shorts: () => shorts,
	shower: () => shower,
	shrimp: () => shrimp,
	shrug: () => shrug,
	shushing_face: () => shushing_face,
	sierra_leone: () => sierra_leone,
	signal_strength: () => signal_strength,
	singapore: () => singapore,
	singer: () => singer,
	sint_maarten: () => sint_maarten,
	six: () => six,
	six_pointed_star: () => six_pointed_star,
	skateboard: () => skateboard,
	ski: () => ski,
	skier: () => skier,
	skull: () => skull,
	skull_and_crossbones: () => skull_and_crossbones,
	skunk: () => skunk,
	sled: () => sled,
	sleeping: () => sleeping,
	sleeping_bed: () => sleeping_bed,
	sleepy: () => sleepy,
	slightly_frowning_face: () => slightly_frowning_face,
	slightly_smiling_face: () => slightly_smiling_face,
	slot_machine: () => slot_machine,
	sloth: () => sloth,
	slovakia: () => slovakia,
	slovenia: () => slovenia,
	small_airplane: () => small_airplane,
	small_blue_diamond: () => small_blue_diamond,
	small_orange_diamond: () => small_orange_diamond,
	small_red_triangle: () => small_red_triangle,
	small_red_triangle_down: () => small_red_triangle_down,
	smile: () => smile,
	smile_cat: () => smile_cat,
	smiley: () => smiley,
	smiley_cat: () => smiley_cat,
	smiling_face_with_tear: () => smiling_face_with_tear,
	smiling_face_with_three_hearts: () => smiling_face_with_three_hearts,
	smiling_imp: () => smiling_imp,
	smirk: () => smirk,
	smirk_cat: () => smirk_cat,
	smoking: () => smoking,
	snail: () => snail,
	snake: () => snake,
	sneezing_face: () => sneezing_face,
	snowboarder: () => snowboarder,
	snowflake: () => snowflake,
	snowman: () => "⛄",
	snowman_with_snow: () => snowman_with_snow,
	soap: () => soap,
	sob: () => sob,
	soccer: () => "⚽",
	socks: () => socks,
	softball: () => softball,
	solomon_islands: () => solomon_islands,
	somalia: () => somalia,
	soon: () => soon,
	sos: () => sos,
	sound: () => sound,
	south_africa: () => south_africa,
	south_georgia_south_sandwich_islands: () => south_georgia_south_sandwich_islands,
	south_sudan: () => south_sudan,
	space_invader: () => space_invader,
	spades: () => spades,
	spaghetti: () => spaghetti,
	sparkle: () => sparkle,
	sparkler: () => sparkler,
	sparkles: () => "✨",
	sparkling_heart: () => sparkling_heart,
	speak_no_evil: () => speak_no_evil,
	speaker: () => speaker,
	speaking_head: () => speaking_head,
	speech_balloon: () => speech_balloon,
	speedboat: () => speedboat,
	spider: () => spider,
	spider_web: () => spider_web,
	spiral_calendar: () => spiral_calendar,
	spiral_notepad: () => spiral_notepad,
	sponge: () => sponge,
	spoon: () => spoon,
	squid: () => squid,
	sri_lanka: () => sri_lanka,
	st_barthelemy: () => st_barthelemy,
	st_helena: () => st_helena,
	st_kitts_nevis: () => st_kitts_nevis,
	st_lucia: () => st_lucia,
	st_martin: () => st_martin,
	st_pierre_miquelon: () => st_pierre_miquelon,
	st_vincent_grenadines: () => st_vincent_grenadines,
	stadium: () => stadium,
	standing_man: () => standing_man,
	standing_person: () => standing_person,
	standing_woman: () => standing_woman,
	star: () => "⭐",
	star2: () => star2,
	star_and_crescent: () => star_and_crescent,
	star_of_david: () => star_of_david,
	star_struck: () => star_struck,
	stars: () => stars,
	station: () => station,
	statue_of_liberty: () => statue_of_liberty,
	steam_locomotive: () => steam_locomotive,
	stethoscope: () => stethoscope,
	stew: () => stew,
	stop_button: () => stop_button,
	stop_sign: () => stop_sign,
	stopwatch: () => stopwatch,
	straight_ruler: () => straight_ruler,
	strawberry: () => strawberry,
	stuck_out_tongue: () => stuck_out_tongue,
	stuck_out_tongue_closed_eyes: () => stuck_out_tongue_closed_eyes,
	stuck_out_tongue_winking_eye: () => stuck_out_tongue_winking_eye,
	student: () => student,
	studio_microphone: () => studio_microphone,
	stuffed_flatbread: () => stuffed_flatbread,
	sudan: () => sudan,
	sun_behind_large_cloud: () => sun_behind_large_cloud,
	sun_behind_rain_cloud: () => sun_behind_rain_cloud,
	sun_behind_small_cloud: () => sun_behind_small_cloud,
	sun_with_face: () => sun_with_face,
	sunflower: () => sunflower,
	sunglasses: () => sunglasses,
	sunny: () => sunny,
	sunrise: () => sunrise,
	sunrise_over_mountains: () => sunrise_over_mountains,
	superhero: () => superhero,
	superhero_man: () => superhero_man,
	superhero_woman: () => superhero_woman,
	supervillain: () => supervillain,
	supervillain_man: () => supervillain_man,
	supervillain_woman: () => supervillain_woman,
	surfer: () => surfer,
	surfing_man: () => surfing_man,
	surfing_woman: () => surfing_woman,
	suriname: () => suriname,
	sushi: () => sushi,
	suspension_railway: () => suspension_railway,
	svalbard_jan_mayen: () => svalbard_jan_mayen,
	swan: () => swan,
	swaziland: () => swaziland,
	sweat: () => sweat,
	sweat_drops: () => sweat_drops,
	sweat_smile: () => sweat_smile,
	sweden: () => sweden,
	sweet_potato: () => sweet_potato,
	swim_brief: () => swim_brief,
	swimmer: () => swimmer,
	swimming_man: () => swimming_man,
	swimming_woman: () => swimming_woman,
	switzerland: () => switzerland,
	symbols: () => symbols,
	synagogue: () => synagogue,
	syria: () => syria,
	syringe: () => syringe,
	taco: () => taco,
	tada: () => tada,
	taiwan: () => taiwan,
	tajikistan: () => tajikistan,
	takeout_box: () => takeout_box,
	tamale: () => tamale,
	tanabata_tree: () => tanabata_tree,
	tangerine: () => tangerine,
	tanzania: () => tanzania,
	taurus: () => "♉",
	taxi: () => taxi,
	tea: () => tea,
	teacher: () => teacher,
	teapot: () => teapot,
	technologist: () => technologist,
	teddy_bear: () => teddy_bear,
	telephone: () => telephone,
	telephone_receiver: () => telephone_receiver,
	telescope: () => telescope,
	tennis: () => tennis,
	tent: () => "⛺",
	test_tube: () => test_tube,
	thailand: () => thailand,
	thermometer: () => thermometer,
	thinking: () => thinking,
	thong_sandal: () => thong_sandal,
	thought_balloon: () => thought_balloon,
	thread: () => thread,
	three: () => three,
	thumbsdown: () => thumbsdown,
	thumbsup: () => thumbsup,
	ticket: () => ticket,
	tickets: () => tickets,
	tiger: () => tiger,
	tiger2: () => tiger2,
	timer_clock: () => timer_clock,
	timor_leste: () => timor_leste,
	tipping_hand_man: () => tipping_hand_man,
	tipping_hand_person: () => tipping_hand_person,
	tipping_hand_woman: () => tipping_hand_woman,
	tired_face: () => tired_face,
	tm: () => tm,
	togo: () => togo,
	toilet: () => toilet,
	tokelau: () => tokelau,
	tokyo_tower: () => tokyo_tower,
	tomato: () => tomato,
	tonga: () => tonga,
	tongue: () => tongue,
	toolbox: () => toolbox,
	tooth: () => tooth,
	toothbrush: () => toothbrush,
	top: () => top,
	tophat: () => tophat,
	tornado: () => tornado,
	tr: () => tr,
	trackball: () => trackball,
	tractor: () => tractor,
	traffic_light: () => traffic_light,
	train: () => train,
	train2: () => train2,
	tram: () => tram,
	transgender_flag: () => transgender_flag,
	transgender_symbol: () => transgender_symbol,
	triangular_flag_on_post: () => triangular_flag_on_post,
	triangular_ruler: () => triangular_ruler,
	trident: () => trident,
	trinidad_tobago: () => trinidad_tobago,
	tristan_da_cunha: () => tristan_da_cunha,
	triumph: () => triumph,
	trolleybus: () => trolleybus,
	trophy: () => trophy,
	tropical_drink: () => tropical_drink,
	tropical_fish: () => tropical_fish,
	truck: () => truck,
	trumpet: () => trumpet,
	tshirt: () => tshirt,
	tulip: () => tulip,
	tumbler_glass: () => tumbler_glass,
	tunisia: () => tunisia,
	turkey: () => turkey,
	turkmenistan: () => turkmenistan,
	turks_caicos_islands: () => turks_caicos_islands,
	turtle: () => turtle,
	tuvalu: () => tuvalu,
	tv: () => tv,
	twisted_rightwards_arrows: () => twisted_rightwards_arrows,
	two: () => two,
	two_hearts: () => two_hearts,
	two_men_holding_hands: () => two_men_holding_hands,
	two_women_holding_hands: () => two_women_holding_hands,
	u6e80: () => u6e80,
	uganda: () => uganda,
	uk: () => uk,
	ukraine: () => ukraine,
	umbrella: () => "☔",
	unamused: () => unamused,
	underage: () => underage,
	unicorn: () => unicorn,
	united_arab_emirates: () => united_arab_emirates,
	united_nations: () => united_nations,
	unlock: () => unlock,
	up: () => up,
	upside_down_face: () => upside_down_face,
	uruguay: () => uruguay,
	us: () => us,
	us_outlying_islands: () => us_outlying_islands,
	us_virgin_islands: () => us_virgin_islands,
	uzbekistan: () => uzbekistan,
	v: () => v,
	vampire: () => vampire,
	vampire_man: () => vampire_man,
	vampire_woman: () => vampire_woman,
	vanuatu: () => vanuatu,
	vatican_city: () => vatican_city,
	venezuela: () => venezuela,
	vertical_traffic_light: () => vertical_traffic_light,
	vhs: () => vhs,
	vibration_mode: () => vibration_mode,
	video_camera: () => video_camera,
	video_game: () => video_game,
	vietnam: () => vietnam,
	violin: () => violin,
	virgo: () => "♍",
	volcano: () => volcano,
	volleyball: () => volleyball,
	vomiting_face: () => vomiting_face,
	vs: () => vs,
	vulcan_salute: () => vulcan_salute,
	waffle: () => waffle,
	wales: () => wales,
	walking: () => walking,
	walking_man: () => walking_man,
	walking_woman: () => walking_woman,
	wallis_futuna: () => wallis_futuna,
	waning_crescent_moon: () => waning_crescent_moon,
	waning_gibbous_moon: () => waning_gibbous_moon,
	warning: () => warning,
	wastebasket: () => wastebasket,
	watch: () => "⌚",
	water_buffalo: () => water_buffalo,
	water_polo: () => water_polo,
	watermelon: () => watermelon,
	wave: () => wave,
	wavy_dash: () => wavy_dash,
	waxing_crescent_moon: () => waxing_crescent_moon,
	waxing_gibbous_moon: () => waxing_gibbous_moon,
	wc: () => wc,
	weary: () => weary,
	wedding: () => wedding,
	weight_lifting: () => weight_lifting,
	weight_lifting_man: () => weight_lifting_man,
	weight_lifting_woman: () => weight_lifting_woman,
	western_sahara: () => western_sahara,
	whale: () => whale,
	whale2: () => whale2,
	wheel_of_dharma: () => wheel_of_dharma,
	wheelchair: () => "♿",
	white_check_mark: () => "✅",
	white_circle: () => "⚪",
	white_flag: () => white_flag,
	white_flower: () => white_flower,
	white_haired_man: () => white_haired_man,
	white_haired_woman: () => white_haired_woman,
	white_heart: () => white_heart,
	white_large_square: () => "⬜",
	white_medium_small_square: () => "◽",
	white_medium_square: () => white_medium_square,
	white_small_square: () => white_small_square,
	white_square_button: () => white_square_button,
	wilted_flower: () => wilted_flower,
	wind_chime: () => wind_chime,
	wind_face: () => wind_face,
	window: () => window,
	wine_glass: () => wine_glass,
	wink: () => wink,
	wolf: () => wolf,
	woman: () => woman,
	woman_artist: () => woman_artist,
	woman_astronaut: () => woman_astronaut,
	woman_cartwheeling: () => woman_cartwheeling,
	woman_cook: () => woman_cook,
	woman_dancing: () => woman_dancing,
	woman_facepalming: () => woman_facepalming,
	woman_factory_worker: () => woman_factory_worker,
	woman_farmer: () => woman_farmer,
	woman_feeding_baby: () => woman_feeding_baby,
	woman_firefighter: () => woman_firefighter,
	woman_health_worker: () => woman_health_worker,
	woman_in_manual_wheelchair: () => woman_in_manual_wheelchair,
	woman_in_motorized_wheelchair: () => woman_in_motorized_wheelchair,
	woman_in_tuxedo: () => woman_in_tuxedo,
	woman_judge: () => woman_judge,
	woman_juggling: () => woman_juggling,
	woman_mechanic: () => woman_mechanic,
	woman_office_worker: () => woman_office_worker,
	woman_pilot: () => woman_pilot,
	woman_playing_handball: () => woman_playing_handball,
	woman_playing_water_polo: () => woman_playing_water_polo,
	woman_scientist: () => woman_scientist,
	woman_shrugging: () => woman_shrugging,
	woman_singer: () => woman_singer,
	woman_student: () => woman_student,
	woman_teacher: () => woman_teacher,
	woman_technologist: () => woman_technologist,
	woman_with_headscarf: () => woman_with_headscarf,
	woman_with_probing_cane: () => woman_with_probing_cane,
	woman_with_turban: () => woman_with_turban,
	woman_with_veil: () => woman_with_veil,
	womans_clothes: () => womans_clothes,
	womans_hat: () => womans_hat,
	women_wrestling: () => women_wrestling,
	womens: () => womens,
	wood: () => wood,
	woozy_face: () => woozy_face,
	world_map: () => world_map,
	worm: () => worm,
	worried: () => worried,
	wrench: () => wrench,
	wrestling: () => wrestling,
	writing_hand: () => writing_hand,
	x: () => "❌",
	yarn: () => yarn,
	yawning_face: () => yawning_face,
	yellow_circle: () => yellow_circle,
	yellow_heart: () => yellow_heart,
	yellow_square: () => yellow_square,
	yemen: () => yemen,
	yen: () => yen,
	yin_yang: () => yin_yang,
	yo_yo: () => yo_yo,
	yum: () => yum,
	zambia: () => zambia,
	zany_face: () => zany_face,
	zap: () => "⚡",
	zebra: () => zebra,
	zero: () => zero,
	zimbabwe: () => zimbabwe,
	zipper_mouth_face: () => zipper_mouth_face,
	zombie: () => zombie,
	zombie_man: () => zombie_man,
	zombie_woman: () => zombie_woman,
	zzz: () => zzz
}), grinning, smiley, smile, grin, laughing, satisfied, sweat_smile, rofl, joy, slightly_smiling_face, upside_down_face, wink, blush, innocent, smiling_face_with_three_hearts, heart_eyes, star_struck, kissing_heart, kissing, relaxed, kissing_closed_eyes, kissing_smiling_eyes, smiling_face_with_tear, yum, stuck_out_tongue, stuck_out_tongue_winking_eye, zany_face, stuck_out_tongue_closed_eyes, money_mouth_face, hugs, hand_over_mouth, shushing_face, thinking, zipper_mouth_face, raised_eyebrow, neutral_face, expressionless, no_mouth, smirk, unamused, roll_eyes, grimacing, lying_face, relieved, pensive, sleepy, drooling_face, sleeping, mask, face_with_thermometer, face_with_head_bandage, nauseated_face, vomiting_face, sneezing_face, hot_face, cold_face, woozy_face, dizzy_face, exploding_head, cowboy_hat_face, partying_face, disguised_face, sunglasses, nerd_face, monocle_face, confused, worried, slightly_frowning_face, frowning_face, open_mouth, hushed, astonished, flushed, pleading_face, frowning, anguished, fearful, cold_sweat, disappointed_relieved, cry, sob, scream, confounded, persevere, disappointed, sweat, weary, tired_face, yawning_face, triumph, rage, pout, angry, cursing_face, smiling_imp, imp, skull, skull_and_crossbones, hankey, poop, shit, clown_face, japanese_ogre, japanese_goblin, ghost, alien, space_invader, robot, smiley_cat, smile_cat, joy_cat, heart_eyes_cat, smirk_cat, kissing_cat, scream_cat, crying_cat_face, pouting_cat, see_no_evil, hear_no_evil, speak_no_evil, kiss, love_letter, cupid, gift_heart, sparkling_heart, heartpulse, heartbeat, revolving_hearts, two_hearts, heart_decoration, heavy_heart_exclamation, broken_heart, heart, orange_heart, yellow_heart, green_heart, blue_heart, purple_heart, brown_heart, black_heart, white_heart, anger, boom, collision, dizzy, sweat_drops, dash, hole, bomb, speech_balloon, eye_speech_bubble, left_speech_bubble, right_anger_bubble, thought_balloon, zzz, wave, raised_back_of_hand, raised_hand_with_fingers_splayed, vulcan_salute, ok_hand, pinched_fingers, pinching_hand, v, crossed_fingers, love_you_gesture, metal, call_me_hand, point_left, point_right, point_up_2, middle_finger, fu, point_down, point_up, thumbsup, thumbsdown, fist_oncoming, facepunch, punch, fist_left, fist_right, clap, raised_hands, open_hands, palms_up_together, handshake, pray, writing_hand, nail_care, selfie, muscle, mechanical_arm, mechanical_leg, leg, foot, ear, ear_with_hearing_aid, nose, brain, anatomical_heart, lungs, tooth, bone, eyes, eye, tongue, lips, baby, child, boy, girl, adult, blond_haired_person, man, bearded_person, red_haired_man, curly_haired_man, white_haired_man, bald_man, woman, red_haired_woman, person_red_hair, curly_haired_woman, person_curly_hair, white_haired_woman, person_white_hair, bald_woman, person_bald, blond_haired_woman, blonde_woman, blond_haired_man, older_adult, older_man, older_woman, frowning_person, frowning_man, frowning_woman, pouting_face, pouting_man, pouting_woman, no_good, no_good_man, ng_man, no_good_woman, ng_woman, ok_person, ok_man, ok_woman, tipping_hand_person, information_desk_person, tipping_hand_man, sassy_man, tipping_hand_woman, sassy_woman, raising_hand, raising_hand_man, raising_hand_woman, deaf_person, deaf_man, deaf_woman, bow, bowing_man, bowing_woman, facepalm, man_facepalming, woman_facepalming, shrug, man_shrugging, woman_shrugging, health_worker, man_health_worker, woman_health_worker, student, man_student, woman_student, teacher, man_teacher, woman_teacher, judge, man_judge, woman_judge, farmer, man_farmer, woman_farmer, cook, man_cook, woman_cook, mechanic, man_mechanic, woman_mechanic, factory_worker, man_factory_worker, woman_factory_worker, office_worker, man_office_worker, woman_office_worker, scientist, man_scientist, woman_scientist, technologist, man_technologist, woman_technologist, singer, man_singer, woman_singer, artist, man_artist, woman_artist, pilot, man_pilot, woman_pilot, astronaut, man_astronaut, woman_astronaut, firefighter, man_firefighter, woman_firefighter, police_officer, cop, policeman, policewoman, detective, male_detective, female_detective, guard, guardsman, guardswoman, ninja, construction_worker, construction_worker_man, construction_worker_woman, prince, princess, person_with_turban, man_with_turban, woman_with_turban, man_with_gua_pi_mao, woman_with_headscarf, person_in_tuxedo, man_in_tuxedo, woman_in_tuxedo, person_with_veil, man_with_veil, woman_with_veil, bride_with_veil, pregnant_woman, breast_feeding, woman_feeding_baby, man_feeding_baby, person_feeding_baby, angel, santa, mrs_claus, mx_claus, superhero, superhero_man, superhero_woman, supervillain, supervillain_man, supervillain_woman, mage, mage_man, mage_woman, fairy, fairy_man, fairy_woman, vampire, vampire_man, vampire_woman, merperson, merman, mermaid, elf, elf_man, elf_woman, genie, genie_man, genie_woman, zombie, zombie_man, zombie_woman, massage, massage_man, massage_woman, haircut, haircut_man, haircut_woman, walking, walking_man, walking_woman, standing_person, standing_man, standing_woman, kneeling_person, kneeling_man, kneeling_woman, person_with_probing_cane, man_with_probing_cane, woman_with_probing_cane, person_in_motorized_wheelchair, man_in_motorized_wheelchair, woman_in_motorized_wheelchair, person_in_manual_wheelchair, man_in_manual_wheelchair, woman_in_manual_wheelchair, runner, running, running_man, running_woman, woman_dancing, dancer, man_dancing, business_suit_levitating, dancers, dancing_men, dancing_women, sauna_person, sauna_man, sauna_woman, climbing, climbing_man, climbing_woman, person_fencing, horse_racing, skier, snowboarder, golfing, golfing_man, golfing_woman, surfer, surfing_man, surfing_woman, rowboat, rowing_man, rowing_woman, swimmer, swimming_man, swimming_woman, bouncing_ball_person, bouncing_ball_man, basketball_man, bouncing_ball_woman, basketball_woman, weight_lifting, weight_lifting_man, weight_lifting_woman, bicyclist, biking_man, biking_woman, mountain_bicyclist, mountain_biking_man, mountain_biking_woman, cartwheeling, man_cartwheeling, woman_cartwheeling, wrestling, men_wrestling, women_wrestling, water_polo, man_playing_water_polo, woman_playing_water_polo, handball_person, man_playing_handball, woman_playing_handball, juggling_person, man_juggling, woman_juggling, lotus_position, lotus_position_man, lotus_position_woman, bath, sleeping_bed, people_holding_hands, two_women_holding_hands, couple, two_men_holding_hands, couplekiss, couplekiss_man_woman, couplekiss_man_man, couplekiss_woman_woman, couple_with_heart, couple_with_heart_woman_man, couple_with_heart_man_man, couple_with_heart_woman_woman, family, family_man_woman_boy, family_man_woman_girl, family_man_woman_girl_boy, family_man_woman_boy_boy, family_man_woman_girl_girl, family_man_man_boy, family_man_man_girl, family_man_man_girl_boy, family_man_man_boy_boy, family_man_man_girl_girl, family_woman_woman_boy, family_woman_woman_girl, family_woman_woman_girl_boy, family_woman_woman_boy_boy, family_woman_woman_girl_girl, family_man_boy, family_man_boy_boy, family_man_girl, family_man_girl_boy, family_man_girl_girl, family_woman_boy, family_woman_boy_boy, family_woman_girl, family_woman_girl_boy, family_woman_girl_girl, speaking_head, bust_in_silhouette, busts_in_silhouette, people_hugging, footprints, monkey_face, monkey, gorilla, orangutan, dog, dog2, guide_dog, service_dog, poodle, wolf, fox_face, raccoon, cat, cat2, black_cat, lion, tiger, tiger2, leopard, horse, racehorse, unicorn, zebra, deer, bison, cow, ox, water_buffalo, cow2, pig, pig2, boar, pig_nose, ram, sheep, goat, dromedary_camel, camel, llama, giraffe, elephant, mammoth, rhinoceros, hippopotamus, mouse, mouse2, rat, hamster, rabbit, rabbit2, chipmunk, beaver, hedgehog, bat, bear, polar_bear, koala, panda_face, sloth, otter, skunk, kangaroo, badger, feet, paw_prints, turkey, chicken, rooster, hatching_chick, baby_chick, hatched_chick, bird, penguin, dove, eagle, duck, swan, owl, dodo, feather, flamingo, peacock, parrot, frog, crocodile, turtle, lizard, snake, dragon_face, dragon, sauropod, whale, whale2, dolphin, flipper, seal, fish, tropical_fish, blowfish, shark, octopus, shell, snail, butterfly, bug, ant, bee, honeybee, beetle, lady_beetle, cricket, cockroach, spider, spider_web, scorpion, mosquito, fly, worm, microbe, bouquet, cherry_blossom, white_flower, rosette, rose, wilted_flower, hibiscus, sunflower, blossom, tulip, seedling, potted_plant, evergreen_tree, deciduous_tree, palm_tree, cactus, ear_of_rice, herb, shamrock, four_leaf_clover, maple_leaf, fallen_leaf, leaves, grapes, melon, watermelon, tangerine, orange, mandarin, lemon, banana, pineapple, mango, apple, green_apple, pear, peach, cherries, strawberry, blueberries, kiwi_fruit, tomato, olive, coconut, avocado, eggplant, potato, carrot, corn, hot_pepper, bell_pepper, cucumber, leafy_green, broccoli, garlic, onion, mushroom, peanuts, chestnut, bread, croissant, baguette_bread, flatbread, pretzel, bagel, pancakes, waffle, cheese, meat_on_bone, poultry_leg, cut_of_meat, bacon, hamburger, fries, pizza, hotdog, sandwich, taco, burrito, tamale, stuffed_flatbread, falafel, egg, fried_egg, shallow_pan_of_food, stew, fondue, bowl_with_spoon, green_salad, popcorn, butter, salt, canned_food, bento, rice_cracker, rice_ball, rice, curry, ramen, spaghetti, sweet_potato, oden, sushi, fried_shrimp, fish_cake, moon_cake, dango, dumpling, fortune_cookie, takeout_box, crab, lobster, shrimp, squid, oyster, icecream, shaved_ice, ice_cream, doughnut, cookie, birthday, cake, cupcake, pie, chocolate_bar, candy, lollipop, custard, honey_pot, baby_bottle, milk_glass, teapot, tea, sake, champagne, wine_glass, cocktail, tropical_drink, beer, beers, clinking_glasses, tumbler_glass, cup_with_straw, bubble_tea, beverage_box, mate, ice_cube, chopsticks, plate_with_cutlery, fork_and_knife, spoon, hocho, knife, amphora, earth_africa, earth_americas, earth_asia, globe_with_meridians, world_map, japan, compass, mountain_snow, mountain, volcano, mount_fuji, camping, beach_umbrella, desert, desert_island, national_park, stadium, classical_building, building_construction, bricks, rock, wood, hut, houses, derelict_house, house, house_with_garden, office, post_office, european_post_office, hospital, bank, hotel, love_hotel, convenience_store, school, department_store, factory, japanese_castle, european_castle, wedding, tokyo_tower, statue_of_liberty, mosque, hindu_temple, synagogue, shinto_shrine, kaaba, foggy, night_with_stars, cityscape, sunrise_over_mountains, sunrise, city_sunset, city_sunrise, bridge_at_night, hotsprings, carousel_horse, ferris_wheel, roller_coaster, barber, circus_tent, steam_locomotive, railway_car, bullettrain_side, bullettrain_front, train2, metro, light_rail, station, tram, monorail, mountain_railway, train, bus, oncoming_bus, trolleybus, minibus, ambulance, fire_engine, police_car, oncoming_police_car, taxi, oncoming_taxi, car, red_car, oncoming_automobile, blue_car, pickup_truck, truck, articulated_lorry, tractor, racing_car, motorcycle, motor_scooter, manual_wheelchair, motorized_wheelchair, auto_rickshaw, bike, kick_scooter, skateboard, roller_skate, busstop, motorway, railway_track, oil_drum, rotating_light, traffic_light, vertical_traffic_light, stop_sign, construction, canoe, speedboat, passenger_ship, ferry, motor_boat, ship, airplane, small_airplane, flight_departure, flight_arrival, parachute, seat, helicopter, suspension_railway, mountain_cableway, aerial_tramway, artificial_satellite, rocket, flying_saucer, bellhop_bell, luggage, stopwatch, timer_clock, mantelpiece_clock, clock12, clock1230, clock1, clock130, clock2, clock230, clock3, clock330, clock4, clock430, clock5, clock530, clock6, clock630, clock7, clock730, clock8, clock830, clock9, clock930, clock10, clock1030, clock11, clock1130, new_moon, waxing_crescent_moon, first_quarter_moon, moon, waxing_gibbous_moon, full_moon, waning_gibbous_moon, last_quarter_moon, waning_crescent_moon, crescent_moon, new_moon_with_face, first_quarter_moon_with_face, last_quarter_moon_with_face, thermometer, sunny, full_moon_with_face, sun_with_face, ringed_planet, star2, stars, milky_way, cloud, cloud_with_lightning_and_rain, sun_behind_small_cloud, sun_behind_large_cloud, sun_behind_rain_cloud, cloud_with_rain, cloud_with_snow, cloud_with_lightning, tornado, fog, wind_face, cyclone, rainbow, closed_umbrella, open_umbrella, parasol_on_ground, snowflake, snowman_with_snow, comet, fire, droplet, ocean, jack_o_lantern, christmas_tree, fireworks, sparkler, firecracker, balloon, tada, confetti_ball, tanabata_tree, bamboo, dolls, flags, wind_chime, rice_scene, red_envelope, ribbon, gift, reminder_ribbon, tickets, ticket, medal_military, trophy, medal_sports, softball, basketball, volleyball, football, rugby_football, tennis, flying_disc, bowling, cricket_game, field_hockey, ice_hockey, lacrosse, ping_pong, badminton, boxing_glove, martial_arts_uniform, goal_net, ice_skate, fishing_pole_and_fish, diving_mask, running_shirt_with_sash, ski, sled, curling_stone, dart, yo_yo, kite, crystal_ball, magic_wand, nazar_amulet, video_game, joystick, slot_machine, game_die, jigsaw, teddy_bear, pinata, nesting_dolls, spades, hearts, diamonds, clubs, chess_pawn, black_joker, mahjong, flower_playing_cards, performing_arts, framed_picture, art, thread, sewing_needle, yarn, knot, eyeglasses, dark_sunglasses, goggles, lab_coat, safety_vest, necktie, shirt, tshirt, jeans, scarf, gloves, coat, socks, dress, kimono, sari, one_piece_swimsuit, swim_brief, shorts, bikini, womans_clothes, purse, handbag, pouch, shopping, school_satchel, thong_sandal, mans_shoe, shoe, athletic_shoe, hiking_boot, flat_shoe, high_heel, sandal, ballet_shoes, boot, crown, womans_hat, tophat, mortar_board, billed_cap, military_helmet, rescue_worker_helmet, prayer_beads, lipstick, ring, gem, mute, speaker, sound, loud_sound, loudspeaker, mega, postal_horn, bell, no_bell, musical_score, musical_note, notes, studio_microphone, level_slider, control_knobs, microphone, headphones, radio, saxophone, accordion, guitar, musical_keyboard, trumpet, violin, banjo, drum, long_drum, iphone, calling, phone, telephone, telephone_receiver, pager, fax, battery, electric_plug, computer, desktop_computer, printer, keyboard, computer_mouse, trackball, minidisc, floppy_disk, cd, dvd, abacus, movie_camera, film_strip, film_projector, clapper, tv, camera, camera_flash, video_camera, vhs, mag, mag_right, candle, bulb, flashlight, izakaya_lantern, lantern, diya_lamp, notebook_with_decorative_cover, closed_book, book, open_book, green_book, blue_book, orange_book, books, notebook, ledger, page_with_curl, scroll, page_facing_up, newspaper, newspaper_roll, bookmark_tabs, bookmark, label$1, moneybag, coin, yen, dollar, euro, pound, money_with_wings, credit_card, receipt, chart, envelope, email, incoming_envelope, envelope_with_arrow, outbox_tray, inbox_tray, mailbox, mailbox_closed, mailbox_with_mail, mailbox_with_no_mail, postbox, ballot_box, pencil2, black_nib, fountain_pen, pen, paintbrush, crayon, memo, pencil, briefcase, file_folder, open_file_folder, card_index_dividers, date, calendar, spiral_notepad, spiral_calendar, card_index, chart_with_upwards_trend, chart_with_downwards_trend, bar_chart, clipboard, pushpin, round_pushpin, paperclip, paperclips, straight_ruler, triangular_ruler, scissors, card_file_box, file_cabinet, wastebasket, lock, unlock, lock_with_ink_pen, closed_lock_with_key, key, old_key, hammer, axe, pick, hammer_and_pick, hammer_and_wrench, dagger, crossed_swords, gun, boomerang, bow_and_arrow, shield, carpentry_saw, wrench, screwdriver, nut_and_bolt, gear, clamp, balance_scale, probing_cane, link, chains, hook, toolbox, magnet, ladder, alembic, test_tube, petri_dish, dna, microscope, telescope, satellite, syringe, drop_of_blood, pill, adhesive_bandage, stethoscope, door, elevator, mirror, window, bed, couch_and_lamp, chair, toilet, plunger, shower, bathtub, mouse_trap, razor, lotion_bottle, safety_pin, broom, basket, roll_of_paper, bucket, soap, toothbrush, sponge, fire_extinguisher, shopping_cart, smoking, coffin, headstone, funeral_urn, moyai, placard, atm, put_litter_in_its_place, potable_water, mens, womens, restroom, baby_symbol, wc, passport_control, customs, baggage_claim, left_luggage, warning, children_crossing, no_entry_sign, no_bicycles, no_smoking, do_not_litter, no_pedestrians, no_mobile_phones, underage, radioactive, biohazard, arrow_up, arrow_upper_right, arrow_right, arrow_lower_right, arrow_down, arrow_lower_left, arrow_left, arrow_upper_left, arrow_up_down, left_right_arrow, leftwards_arrow_with_hook, arrow_right_hook, arrow_heading_up, arrow_heading_down, arrows_clockwise, arrows_counterclockwise, back, end, on, soon, top, place_of_worship, atom_symbol, om, star_of_david, wheel_of_dharma, yin_yang, latin_cross, orthodox_cross, star_and_crescent, peace_symbol, menorah, six_pointed_star, twisted_rightwards_arrows, repeat, repeat_one, arrow_forward, next_track_button, play_or_pause_button, arrow_backward, previous_track_button, arrow_up_small, arrow_down_small, pause_button, stop_button, record_button, eject_button, cinema, low_brightness, high_brightness, signal_strength, vibration_mode, mobile_phone_off, female_sign, male_sign, transgender_symbol, heavy_multiplication_x, infinity, bangbang, interrobang, wavy_dash, currency_exchange, heavy_dollar_sign, medical_symbol, recycle, fleur_de_lis, trident, name_badge, beginner, ballot_box_with_check, heavy_check_mark, part_alternation_mark, eight_spoked_asterisk, eight_pointed_black_star, sparkle, copyright, registered, tm, hash, asterisk, zero, one, two, three, four, five, six, seven, eight, nine, keycap_ten, capital_abcd, abcd, symbols, abc, a, ab, b, cl, cool, free, information_source, id, m, ng, o2, ok, parking, sos, up, vs, koko, sa, ideograph_advantage, accept, congratulations, secret, u6e80, red_circle, orange_circle, yellow_circle, green_circle, large_blue_circle, purple_circle, brown_circle, red_square, orange_square, yellow_square, green_square, blue_square, purple_square, brown_square, black_medium_square, white_medium_square, black_small_square, white_small_square, large_orange_diamond, large_blue_diamond, small_orange_diamond, small_blue_diamond, small_red_triangle, small_red_triangle_down, diamond_shape_with_a_dot_inside, radio_button, white_square_button, black_square_button, checkered_flag, triangular_flag_on_post, crossed_flags, black_flag, white_flag, rainbow_flag, transgender_flag, pirate_flag, ascension_island, andorra, united_arab_emirates, afghanistan, antigua_barbuda, anguilla, albania, armenia, angola, antarctica, argentina, american_samoa, austria, australia, aruba, aland_islands, azerbaijan, bosnia_herzegovina, barbados, bangladesh, belgium, burkina_faso, bulgaria, bahrain, burundi, benin, st_barthelemy, bermuda, brunei, bolivia, caribbean_netherlands, brazil, bahamas, bhutan, bouvet_island, botswana, belarus, belize, canada, cocos_islands, congo_kinshasa, central_african_republic, congo_brazzaville, switzerland, cote_divoire, cook_islands, chile, cameroon, cn, colombia, clipperton_island, costa_rica, cuba, cape_verde, curacao, christmas_island, cyprus, czech_republic, de, diego_garcia, djibouti, denmark, dominica, dominican_republic, algeria, ceuta_melilla, ecuador, estonia, egypt, western_sahara, eritrea, es, ethiopia, eu, european_union, finland, fiji, falkland_islands, micronesia, faroe_islands, fr, gabon, gb, uk, grenada, georgia, french_guiana, guernsey, ghana, gibraltar, greenland, gambia, guinea, guadeloupe, equatorial_guinea, greece, south_georgia_south_sandwich_islands, guatemala, guam, guinea_bissau, guyana, hong_kong, heard_mcdonald_islands, honduras, croatia, haiti, hungary, canary_islands, indonesia, ireland, israel, isle_of_man, india, british_indian_ocean_territory, iraq, iran, iceland, it, jersey, jamaica, jordan, jp, kenya, kyrgyzstan, cambodia, kiribati, comoros, st_kitts_nevis, north_korea, kr, kuwait, cayman_islands, kazakhstan, laos, lebanon, st_lucia, liechtenstein, sri_lanka, liberia, lesotho, lithuania, luxembourg, latvia, libya, morocco, monaco, moldova, montenegro, st_martin, madagascar, marshall_islands, macedonia, mali, myanmar, mongolia, macau, northern_mariana_islands, martinique, mauritania, montserrat, malta, mauritius, maldives, malawi, mexico, malaysia, mozambique, namibia, new_caledonia, niger, norfolk_island, nigeria, nicaragua, netherlands, norway, nepal, nauru, niue, new_zealand, oman, panama, peru, french_polynesia, papua_new_guinea, philippines, pakistan, poland, st_pierre_miquelon, pitcairn_islands, puerto_rico, palestinian_territories, portugal, palau, paraguay, qatar, reunion, romania, serbia, ru, rwanda, saudi_arabia, solomon_islands, seychelles, sudan, sweden, singapore, st_helena, slovenia, svalbard_jan_mayen, slovakia, sierra_leone, san_marino, senegal, somalia, suriname, south_sudan, sao_tome_principe, el_salvador, sint_maarten, syria, swaziland, tristan_da_cunha, turks_caicos_islands, chad, french_southern_territories, togo, thailand, tajikistan, tokelau, timor_leste, turkmenistan, tunisia, tonga, tr, trinidad_tobago, tuvalu, taiwan, tanzania, ukraine, uganda, us_outlying_islands, united_nations, us, uruguay, uzbekistan, vatican_city, st_vincent_grenadines, venezuela, british_virgin_islands, us_virgin_islands, vietnam, vanuatu, wallis_futuna, samoa, kosovo, yemen, mayotte, south_africa, zambia, zimbabwe, england, scotland, wales, full_default;
var init_full = __esmMin((() => {
	grinning = "😀";
	smiley = "😃";
	smile = "😄";
	grin = "😁";
	laughing = "😆";
	satisfied = "😆";
	sweat_smile = "😅";
	rofl = "🤣";
	joy = "😂";
	slightly_smiling_face = "🙂";
	upside_down_face = "🙃";
	wink = "😉";
	blush = "😊";
	innocent = "😇";
	smiling_face_with_three_hearts = "🥰";
	heart_eyes = "😍";
	star_struck = "🤩";
	kissing_heart = "😘";
	kissing = "😗";
	relaxed = "☺️";
	kissing_closed_eyes = "😚";
	kissing_smiling_eyes = "😙";
	smiling_face_with_tear = "🥲";
	yum = "😋";
	stuck_out_tongue = "😛";
	stuck_out_tongue_winking_eye = "😜";
	zany_face = "🤪";
	stuck_out_tongue_closed_eyes = "😝";
	money_mouth_face = "🤑";
	hugs = "🤗";
	hand_over_mouth = "🤭";
	shushing_face = "🤫";
	thinking = "🤔";
	zipper_mouth_face = "🤐";
	raised_eyebrow = "🤨";
	neutral_face = "😐";
	expressionless = "😑";
	no_mouth = "😶";
	smirk = "😏";
	unamused = "😒";
	roll_eyes = "🙄";
	grimacing = "😬";
	lying_face = "🤥";
	relieved = "😌";
	pensive = "😔";
	sleepy = "😪";
	drooling_face = "🤤";
	sleeping = "😴";
	mask = "😷";
	face_with_thermometer = "🤒";
	face_with_head_bandage = "🤕";
	nauseated_face = "🤢";
	vomiting_face = "🤮";
	sneezing_face = "🤧";
	hot_face = "🥵";
	cold_face = "🥶";
	woozy_face = "🥴";
	dizzy_face = "😵";
	exploding_head = "🤯";
	cowboy_hat_face = "🤠";
	partying_face = "🥳";
	disguised_face = "🥸";
	sunglasses = "😎";
	nerd_face = "🤓";
	monocle_face = "🧐";
	confused = "😕";
	worried = "😟";
	slightly_frowning_face = "🙁";
	frowning_face = "☹️";
	open_mouth = "😮";
	hushed = "😯";
	astonished = "😲";
	flushed = "😳";
	pleading_face = "🥺";
	frowning = "😦";
	anguished = "😧";
	fearful = "😨";
	cold_sweat = "😰";
	disappointed_relieved = "😥";
	cry = "😢";
	sob = "😭";
	scream = "😱";
	confounded = "😖";
	persevere = "😣";
	disappointed = "😞";
	sweat = "😓";
	weary = "😩";
	tired_face = "😫";
	yawning_face = "🥱";
	triumph = "😤";
	rage = "😡";
	pout = "😡";
	angry = "😠";
	cursing_face = "🤬";
	smiling_imp = "😈";
	imp = "👿";
	skull = "💀";
	skull_and_crossbones = "☠️";
	hankey = "💩";
	poop = "💩";
	shit = "💩";
	clown_face = "🤡";
	japanese_ogre = "👹";
	japanese_goblin = "👺";
	ghost = "👻";
	alien = "👽";
	space_invader = "👾";
	robot = "🤖";
	smiley_cat = "😺";
	smile_cat = "😸";
	joy_cat = "😹";
	heart_eyes_cat = "😻";
	smirk_cat = "😼";
	kissing_cat = "😽";
	scream_cat = "🙀";
	crying_cat_face = "😿";
	pouting_cat = "😾";
	see_no_evil = "🙈";
	hear_no_evil = "🙉";
	speak_no_evil = "🙊";
	kiss = "💋";
	love_letter = "💌";
	cupid = "💘";
	gift_heart = "💝";
	sparkling_heart = "💖";
	heartpulse = "💗";
	heartbeat = "💓";
	revolving_hearts = "💞";
	two_hearts = "💕";
	heart_decoration = "💟";
	heavy_heart_exclamation = "❣️";
	broken_heart = "💔";
	heart = "❤️";
	orange_heart = "🧡";
	yellow_heart = "💛";
	green_heart = "💚";
	blue_heart = "💙";
	purple_heart = "💜";
	brown_heart = "🤎";
	black_heart = "🖤";
	white_heart = "🤍";
	anger = "💢";
	boom = "💥";
	collision = "💥";
	dizzy = "💫";
	sweat_drops = "💦";
	dash = "💨";
	hole = "🕳️";
	bomb = "💣";
	speech_balloon = "💬";
	eye_speech_bubble = "👁️‍🗨️";
	left_speech_bubble = "🗨️";
	right_anger_bubble = "🗯️";
	thought_balloon = "💭";
	zzz = "💤";
	wave = "👋";
	raised_back_of_hand = "🤚";
	raised_hand_with_fingers_splayed = "🖐️";
	vulcan_salute = "🖖";
	ok_hand = "👌";
	pinched_fingers = "🤌";
	pinching_hand = "🤏";
	v = "✌️";
	crossed_fingers = "🤞";
	love_you_gesture = "🤟";
	metal = "🤘";
	call_me_hand = "🤙";
	point_left = "👈";
	point_right = "👉";
	point_up_2 = "👆";
	middle_finger = "🖕";
	fu = "🖕";
	point_down = "👇";
	point_up = "☝️";
	thumbsup = "👍";
	thumbsdown = "👎";
	fist_oncoming = "👊";
	facepunch = "👊";
	punch = "👊";
	fist_left = "🤛";
	fist_right = "🤜";
	clap = "👏";
	raised_hands = "🙌";
	open_hands = "👐";
	palms_up_together = "🤲";
	handshake = "🤝";
	pray = "🙏";
	writing_hand = "✍️";
	nail_care = "💅";
	selfie = "🤳";
	muscle = "💪";
	mechanical_arm = "🦾";
	mechanical_leg = "🦿";
	leg = "🦵";
	foot = "🦶";
	ear = "👂";
	ear_with_hearing_aid = "🦻";
	nose = "👃";
	brain = "🧠";
	anatomical_heart = "🫀";
	lungs = "🫁";
	tooth = "🦷";
	bone = "🦴";
	eyes = "👀";
	eye = "👁️";
	tongue = "👅";
	lips = "👄";
	baby = "👶";
	child = "🧒";
	boy = "👦";
	girl = "👧";
	adult = "🧑";
	blond_haired_person = "👱";
	man = "👨";
	bearded_person = "🧔";
	red_haired_man = "👨‍🦰";
	curly_haired_man = "👨‍🦱";
	white_haired_man = "👨‍🦳";
	bald_man = "👨‍🦲";
	woman = "👩";
	red_haired_woman = "👩‍🦰";
	person_red_hair = "🧑‍🦰";
	curly_haired_woman = "👩‍🦱";
	person_curly_hair = "🧑‍🦱";
	white_haired_woman = "👩‍🦳";
	person_white_hair = "🧑‍🦳";
	bald_woman = "👩‍🦲";
	person_bald = "🧑‍🦲";
	blond_haired_woman = "👱‍♀️";
	blonde_woman = "👱‍♀️";
	blond_haired_man = "👱‍♂️";
	older_adult = "🧓";
	older_man = "👴";
	older_woman = "👵";
	frowning_person = "🙍";
	frowning_man = "🙍‍♂️";
	frowning_woman = "🙍‍♀️";
	pouting_face = "🙎";
	pouting_man = "🙎‍♂️";
	pouting_woman = "🙎‍♀️";
	no_good = "🙅";
	no_good_man = "🙅‍♂️";
	ng_man = "🙅‍♂️";
	no_good_woman = "🙅‍♀️";
	ng_woman = "🙅‍♀️";
	ok_person = "🙆";
	ok_man = "🙆‍♂️";
	ok_woman = "🙆‍♀️";
	tipping_hand_person = "💁";
	information_desk_person = "💁";
	tipping_hand_man = "💁‍♂️";
	sassy_man = "💁‍♂️";
	tipping_hand_woman = "💁‍♀️";
	sassy_woman = "💁‍♀️";
	raising_hand = "🙋";
	raising_hand_man = "🙋‍♂️";
	raising_hand_woman = "🙋‍♀️";
	deaf_person = "🧏";
	deaf_man = "🧏‍♂️";
	deaf_woman = "🧏‍♀️";
	bow = "🙇";
	bowing_man = "🙇‍♂️";
	bowing_woman = "🙇‍♀️";
	facepalm = "🤦";
	man_facepalming = "🤦‍♂️";
	woman_facepalming = "🤦‍♀️";
	shrug = "🤷";
	man_shrugging = "🤷‍♂️";
	woman_shrugging = "🤷‍♀️";
	health_worker = "🧑‍⚕️";
	man_health_worker = "👨‍⚕️";
	woman_health_worker = "👩‍⚕️";
	student = "🧑‍🎓";
	man_student = "👨‍🎓";
	woman_student = "👩‍🎓";
	teacher = "🧑‍🏫";
	man_teacher = "👨‍🏫";
	woman_teacher = "👩‍🏫";
	judge = "🧑‍⚖️";
	man_judge = "👨‍⚖️";
	woman_judge = "👩‍⚖️";
	farmer = "🧑‍🌾";
	man_farmer = "👨‍🌾";
	woman_farmer = "👩‍🌾";
	cook = "🧑‍🍳";
	man_cook = "👨‍🍳";
	woman_cook = "👩‍🍳";
	mechanic = "🧑‍🔧";
	man_mechanic = "👨‍🔧";
	woman_mechanic = "👩‍🔧";
	factory_worker = "🧑‍🏭";
	man_factory_worker = "👨‍🏭";
	woman_factory_worker = "👩‍🏭";
	office_worker = "🧑‍💼";
	man_office_worker = "👨‍💼";
	woman_office_worker = "👩‍💼";
	scientist = "🧑‍🔬";
	man_scientist = "👨‍🔬";
	woman_scientist = "👩‍🔬";
	technologist = "🧑‍💻";
	man_technologist = "👨‍💻";
	woman_technologist = "👩‍💻";
	singer = "🧑‍🎤";
	man_singer = "👨‍🎤";
	woman_singer = "👩‍🎤";
	artist = "🧑‍🎨";
	man_artist = "👨‍🎨";
	woman_artist = "👩‍🎨";
	pilot = "🧑‍✈️";
	man_pilot = "👨‍✈️";
	woman_pilot = "👩‍✈️";
	astronaut = "🧑‍🚀";
	man_astronaut = "👨‍🚀";
	woman_astronaut = "👩‍🚀";
	firefighter = "🧑‍🚒";
	man_firefighter = "👨‍🚒";
	woman_firefighter = "👩‍🚒";
	police_officer = "👮";
	cop = "👮";
	policeman = "👮‍♂️";
	policewoman = "👮‍♀️";
	detective = "🕵️";
	male_detective = "🕵️‍♂️";
	female_detective = "🕵️‍♀️";
	guard = "💂";
	guardsman = "💂‍♂️";
	guardswoman = "💂‍♀️";
	ninja = "🥷";
	construction_worker = "👷";
	construction_worker_man = "👷‍♂️";
	construction_worker_woman = "👷‍♀️";
	prince = "🤴";
	princess = "👸";
	person_with_turban = "👳";
	man_with_turban = "👳‍♂️";
	woman_with_turban = "👳‍♀️";
	man_with_gua_pi_mao = "👲";
	woman_with_headscarf = "🧕";
	person_in_tuxedo = "🤵";
	man_in_tuxedo = "🤵‍♂️";
	woman_in_tuxedo = "🤵‍♀️";
	person_with_veil = "👰";
	man_with_veil = "👰‍♂️";
	woman_with_veil = "👰‍♀️";
	bride_with_veil = "👰‍♀️";
	pregnant_woman = "🤰";
	breast_feeding = "🤱";
	woman_feeding_baby = "👩‍🍼";
	man_feeding_baby = "👨‍🍼";
	person_feeding_baby = "🧑‍🍼";
	angel = "👼";
	santa = "🎅";
	mrs_claus = "🤶";
	mx_claus = "🧑‍🎄";
	superhero = "🦸";
	superhero_man = "🦸‍♂️";
	superhero_woman = "🦸‍♀️";
	supervillain = "🦹";
	supervillain_man = "🦹‍♂️";
	supervillain_woman = "🦹‍♀️";
	mage = "🧙";
	mage_man = "🧙‍♂️";
	mage_woman = "🧙‍♀️";
	fairy = "🧚";
	fairy_man = "🧚‍♂️";
	fairy_woman = "🧚‍♀️";
	vampire = "🧛";
	vampire_man = "🧛‍♂️";
	vampire_woman = "🧛‍♀️";
	merperson = "🧜";
	merman = "🧜‍♂️";
	mermaid = "🧜‍♀️";
	elf = "🧝";
	elf_man = "🧝‍♂️";
	elf_woman = "🧝‍♀️";
	genie = "🧞";
	genie_man = "🧞‍♂️";
	genie_woman = "🧞‍♀️";
	zombie = "🧟";
	zombie_man = "🧟‍♂️";
	zombie_woman = "🧟‍♀️";
	massage = "💆";
	massage_man = "💆‍♂️";
	massage_woman = "💆‍♀️";
	haircut = "💇";
	haircut_man = "💇‍♂️";
	haircut_woman = "💇‍♀️";
	walking = "🚶";
	walking_man = "🚶‍♂️";
	walking_woman = "🚶‍♀️";
	standing_person = "🧍";
	standing_man = "🧍‍♂️";
	standing_woman = "🧍‍♀️";
	kneeling_person = "🧎";
	kneeling_man = "🧎‍♂️";
	kneeling_woman = "🧎‍♀️";
	person_with_probing_cane = "🧑‍🦯";
	man_with_probing_cane = "👨‍🦯";
	woman_with_probing_cane = "👩‍🦯";
	person_in_motorized_wheelchair = "🧑‍🦼";
	man_in_motorized_wheelchair = "👨‍🦼";
	woman_in_motorized_wheelchair = "👩‍🦼";
	person_in_manual_wheelchair = "🧑‍🦽";
	man_in_manual_wheelchair = "👨‍🦽";
	woman_in_manual_wheelchair = "👩‍🦽";
	runner = "🏃";
	running = "🏃";
	running_man = "🏃‍♂️";
	running_woman = "🏃‍♀️";
	woman_dancing = "💃";
	dancer = "💃";
	man_dancing = "🕺";
	business_suit_levitating = "🕴️";
	dancers = "👯";
	dancing_men = "👯‍♂️";
	dancing_women = "👯‍♀️";
	sauna_person = "🧖";
	sauna_man = "🧖‍♂️";
	sauna_woman = "🧖‍♀️";
	climbing = "🧗";
	climbing_man = "🧗‍♂️";
	climbing_woman = "🧗‍♀️";
	person_fencing = "🤺";
	horse_racing = "🏇";
	skier = "⛷️";
	snowboarder = "🏂";
	golfing = "🏌️";
	golfing_man = "🏌️‍♂️";
	golfing_woman = "🏌️‍♀️";
	surfer = "🏄";
	surfing_man = "🏄‍♂️";
	surfing_woman = "🏄‍♀️";
	rowboat = "🚣";
	rowing_man = "🚣‍♂️";
	rowing_woman = "🚣‍♀️";
	swimmer = "🏊";
	swimming_man = "🏊‍♂️";
	swimming_woman = "🏊‍♀️";
	bouncing_ball_person = "⛹️";
	bouncing_ball_man = "⛹️‍♂️";
	basketball_man = "⛹️‍♂️";
	bouncing_ball_woman = "⛹️‍♀️";
	basketball_woman = "⛹️‍♀️";
	weight_lifting = "🏋️";
	weight_lifting_man = "🏋️‍♂️";
	weight_lifting_woman = "🏋️‍♀️";
	bicyclist = "🚴";
	biking_man = "🚴‍♂️";
	biking_woman = "🚴‍♀️";
	mountain_bicyclist = "🚵";
	mountain_biking_man = "🚵‍♂️";
	mountain_biking_woman = "🚵‍♀️";
	cartwheeling = "🤸";
	man_cartwheeling = "🤸‍♂️";
	woman_cartwheeling = "🤸‍♀️";
	wrestling = "🤼";
	men_wrestling = "🤼‍♂️";
	women_wrestling = "🤼‍♀️";
	water_polo = "🤽";
	man_playing_water_polo = "🤽‍♂️";
	woman_playing_water_polo = "🤽‍♀️";
	handball_person = "🤾";
	man_playing_handball = "🤾‍♂️";
	woman_playing_handball = "🤾‍♀️";
	juggling_person = "🤹";
	man_juggling = "🤹‍♂️";
	woman_juggling = "🤹‍♀️";
	lotus_position = "🧘";
	lotus_position_man = "🧘‍♂️";
	lotus_position_woman = "🧘‍♀️";
	bath = "🛀";
	sleeping_bed = "🛌";
	people_holding_hands = "🧑‍🤝‍🧑";
	two_women_holding_hands = "👭";
	couple = "👫";
	two_men_holding_hands = "👬";
	couplekiss = "💏";
	couplekiss_man_woman = "👩‍❤️‍💋‍👨";
	couplekiss_man_man = "👨‍❤️‍💋‍👨";
	couplekiss_woman_woman = "👩‍❤️‍💋‍👩";
	couple_with_heart = "💑";
	couple_with_heart_woman_man = "👩‍❤️‍👨";
	couple_with_heart_man_man = "👨‍❤️‍👨";
	couple_with_heart_woman_woman = "👩‍❤️‍👩";
	family = "👪";
	family_man_woman_boy = "👨‍👩‍👦";
	family_man_woman_girl = "👨‍👩‍👧";
	family_man_woman_girl_boy = "👨‍👩‍👧‍👦";
	family_man_woman_boy_boy = "👨‍👩‍👦‍👦";
	family_man_woman_girl_girl = "👨‍👩‍👧‍👧";
	family_man_man_boy = "👨‍👨‍👦";
	family_man_man_girl = "👨‍👨‍👧";
	family_man_man_girl_boy = "👨‍👨‍👧‍👦";
	family_man_man_boy_boy = "👨‍👨‍👦‍👦";
	family_man_man_girl_girl = "👨‍👨‍👧‍👧";
	family_woman_woman_boy = "👩‍👩‍👦";
	family_woman_woman_girl = "👩‍👩‍👧";
	family_woman_woman_girl_boy = "👩‍👩‍👧‍👦";
	family_woman_woman_boy_boy = "👩‍👩‍👦‍👦";
	family_woman_woman_girl_girl = "👩‍👩‍👧‍👧";
	family_man_boy = "👨‍👦";
	family_man_boy_boy = "👨‍👦‍👦";
	family_man_girl = "👨‍👧";
	family_man_girl_boy = "👨‍👧‍👦";
	family_man_girl_girl = "👨‍👧‍👧";
	family_woman_boy = "👩‍👦";
	family_woman_boy_boy = "👩‍👦‍👦";
	family_woman_girl = "👩‍👧";
	family_woman_girl_boy = "👩‍👧‍👦";
	family_woman_girl_girl = "👩‍👧‍👧";
	speaking_head = "🗣️";
	bust_in_silhouette = "👤";
	busts_in_silhouette = "👥";
	people_hugging = "🫂";
	footprints = "👣";
	monkey_face = "🐵";
	monkey = "🐒";
	gorilla = "🦍";
	orangutan = "🦧";
	dog = "🐶";
	dog2 = "🐕";
	guide_dog = "🦮";
	service_dog = "🐕‍🦺";
	poodle = "🐩";
	wolf = "🐺";
	fox_face = "🦊";
	raccoon = "🦝";
	cat = "🐱";
	cat2 = "🐈";
	black_cat = "🐈‍⬛";
	lion = "🦁";
	tiger = "🐯";
	tiger2 = "🐅";
	leopard = "🐆";
	horse = "🐴";
	racehorse = "🐎";
	unicorn = "🦄";
	zebra = "🦓";
	deer = "🦌";
	bison = "🦬";
	cow = "🐮";
	ox = "🐂";
	water_buffalo = "🐃";
	cow2 = "🐄";
	pig = "🐷";
	pig2 = "🐖";
	boar = "🐗";
	pig_nose = "🐽";
	ram = "🐏";
	sheep = "🐑";
	goat = "🐐";
	dromedary_camel = "🐪";
	camel = "🐫";
	llama = "🦙";
	giraffe = "🦒";
	elephant = "🐘";
	mammoth = "🦣";
	rhinoceros = "🦏";
	hippopotamus = "🦛";
	mouse = "🐭";
	mouse2 = "🐁";
	rat = "🐀";
	hamster = "🐹";
	rabbit = "🐰";
	rabbit2 = "🐇";
	chipmunk = "🐿️";
	beaver = "🦫";
	hedgehog = "🦔";
	bat = "🦇";
	bear = "🐻";
	polar_bear = "🐻‍❄️";
	koala = "🐨";
	panda_face = "🐼";
	sloth = "🦥";
	otter = "🦦";
	skunk = "🦨";
	kangaroo = "🦘";
	badger = "🦡";
	feet = "🐾";
	paw_prints = "🐾";
	turkey = "🦃";
	chicken = "🐔";
	rooster = "🐓";
	hatching_chick = "🐣";
	baby_chick = "🐤";
	hatched_chick = "🐥";
	bird = "🐦";
	penguin = "🐧";
	dove = "🕊️";
	eagle = "🦅";
	duck = "🦆";
	swan = "🦢";
	owl = "🦉";
	dodo = "🦤";
	feather = "🪶";
	flamingo = "🦩";
	peacock = "🦚";
	parrot = "🦜";
	frog = "🐸";
	crocodile = "🐊";
	turtle = "🐢";
	lizard = "🦎";
	snake = "🐍";
	dragon_face = "🐲";
	dragon = "🐉";
	sauropod = "🦕";
	whale = "🐳";
	whale2 = "🐋";
	dolphin = "🐬";
	flipper = "🐬";
	seal = "🦭";
	fish = "🐟";
	tropical_fish = "🐠";
	blowfish = "🐡";
	shark = "🦈";
	octopus = "🐙";
	shell = "🐚";
	snail = "🐌";
	butterfly = "🦋";
	bug = "🐛";
	ant = "🐜";
	bee = "🐝";
	honeybee = "🐝";
	beetle = "🪲";
	lady_beetle = "🐞";
	cricket = "🦗";
	cockroach = "🪳";
	spider = "🕷️";
	spider_web = "🕸️";
	scorpion = "🦂";
	mosquito = "🦟";
	fly = "🪰";
	worm = "🪱";
	microbe = "🦠";
	bouquet = "💐";
	cherry_blossom = "🌸";
	white_flower = "💮";
	rosette = "🏵️";
	rose = "🌹";
	wilted_flower = "🥀";
	hibiscus = "🌺";
	sunflower = "🌻";
	blossom = "🌼";
	tulip = "🌷";
	seedling = "🌱";
	potted_plant = "🪴";
	evergreen_tree = "🌲";
	deciduous_tree = "🌳";
	palm_tree = "🌴";
	cactus = "🌵";
	ear_of_rice = "🌾";
	herb = "🌿";
	shamrock = "☘️";
	four_leaf_clover = "🍀";
	maple_leaf = "🍁";
	fallen_leaf = "🍂";
	leaves = "🍃";
	grapes = "🍇";
	melon = "🍈";
	watermelon = "🍉";
	tangerine = "🍊";
	orange = "🍊";
	mandarin = "🍊";
	lemon = "🍋";
	banana = "🍌";
	pineapple = "🍍";
	mango = "🥭";
	apple = "🍎";
	green_apple = "🍏";
	pear = "🍐";
	peach = "🍑";
	cherries = "🍒";
	strawberry = "🍓";
	blueberries = "🫐";
	kiwi_fruit = "🥝";
	tomato = "🍅";
	olive = "🫒";
	coconut = "🥥";
	avocado = "🥑";
	eggplant = "🍆";
	potato = "🥔";
	carrot = "🥕";
	corn = "🌽";
	hot_pepper = "🌶️";
	bell_pepper = "🫑";
	cucumber = "🥒";
	leafy_green = "🥬";
	broccoli = "🥦";
	garlic = "🧄";
	onion = "🧅";
	mushroom = "🍄";
	peanuts = "🥜";
	chestnut = "🌰";
	bread = "🍞";
	croissant = "🥐";
	baguette_bread = "🥖";
	flatbread = "🫓";
	pretzel = "🥨";
	bagel = "🥯";
	pancakes = "🥞";
	waffle = "🧇";
	cheese = "🧀";
	meat_on_bone = "🍖";
	poultry_leg = "🍗";
	cut_of_meat = "🥩";
	bacon = "🥓";
	hamburger = "🍔";
	fries = "🍟";
	pizza = "🍕";
	hotdog = "🌭";
	sandwich = "🥪";
	taco = "🌮";
	burrito = "🌯";
	tamale = "🫔";
	stuffed_flatbread = "🥙";
	falafel = "🧆";
	egg = "🥚";
	fried_egg = "🍳";
	shallow_pan_of_food = "🥘";
	stew = "🍲";
	fondue = "🫕";
	bowl_with_spoon = "🥣";
	green_salad = "🥗";
	popcorn = "🍿";
	butter = "🧈";
	salt = "🧂";
	canned_food = "🥫";
	bento = "🍱";
	rice_cracker = "🍘";
	rice_ball = "🍙";
	rice = "🍚";
	curry = "🍛";
	ramen = "🍜";
	spaghetti = "🍝";
	sweet_potato = "🍠";
	oden = "🍢";
	sushi = "🍣";
	fried_shrimp = "🍤";
	fish_cake = "🍥";
	moon_cake = "🥮";
	dango = "🍡";
	dumpling = "🥟";
	fortune_cookie = "🥠";
	takeout_box = "🥡";
	crab = "🦀";
	lobster = "🦞";
	shrimp = "🦐";
	squid = "🦑";
	oyster = "🦪";
	icecream = "🍦";
	shaved_ice = "🍧";
	ice_cream = "🍨";
	doughnut = "🍩";
	cookie = "🍪";
	birthday = "🎂";
	cake = "🍰";
	cupcake = "🧁";
	pie = "🥧";
	chocolate_bar = "🍫";
	candy = "🍬";
	lollipop = "🍭";
	custard = "🍮";
	honey_pot = "🍯";
	baby_bottle = "🍼";
	milk_glass = "🥛";
	teapot = "🫖";
	tea = "🍵";
	sake = "🍶";
	champagne = "🍾";
	wine_glass = "🍷";
	cocktail = "🍸";
	tropical_drink = "🍹";
	beer = "🍺";
	beers = "🍻";
	clinking_glasses = "🥂";
	tumbler_glass = "🥃";
	cup_with_straw = "🥤";
	bubble_tea = "🧋";
	beverage_box = "🧃";
	mate = "🧉";
	ice_cube = "🧊";
	chopsticks = "🥢";
	plate_with_cutlery = "🍽️";
	fork_and_knife = "🍴";
	spoon = "🥄";
	hocho = "🔪";
	knife = "🔪";
	amphora = "🏺";
	earth_africa = "🌍";
	earth_americas = "🌎";
	earth_asia = "🌏";
	globe_with_meridians = "🌐";
	world_map = "🗺️";
	japan = "🗾";
	compass = "🧭";
	mountain_snow = "🏔️";
	mountain = "⛰️";
	volcano = "🌋";
	mount_fuji = "🗻";
	camping = "🏕️";
	beach_umbrella = "🏖️";
	desert = "🏜️";
	desert_island = "🏝️";
	national_park = "🏞️";
	stadium = "🏟️";
	classical_building = "🏛️";
	building_construction = "🏗️";
	bricks = "🧱";
	rock = "🪨";
	wood = "🪵";
	hut = "🛖";
	houses = "🏘️";
	derelict_house = "🏚️";
	house = "🏠";
	house_with_garden = "🏡";
	office = "🏢";
	post_office = "🏣";
	european_post_office = "🏤";
	hospital = "🏥";
	bank = "🏦";
	hotel = "🏨";
	love_hotel = "🏩";
	convenience_store = "🏪";
	school = "🏫";
	department_store = "🏬";
	factory = "🏭";
	japanese_castle = "🏯";
	european_castle = "🏰";
	wedding = "💒";
	tokyo_tower = "🗼";
	statue_of_liberty = "🗽";
	mosque = "🕌";
	hindu_temple = "🛕";
	synagogue = "🕍";
	shinto_shrine = "⛩️";
	kaaba = "🕋";
	foggy = "🌁";
	night_with_stars = "🌃";
	cityscape = "🏙️";
	sunrise_over_mountains = "🌄";
	sunrise = "🌅";
	city_sunset = "🌆";
	city_sunrise = "🌇";
	bridge_at_night = "🌉";
	hotsprings = "♨️";
	carousel_horse = "🎠";
	ferris_wheel = "🎡";
	roller_coaster = "🎢";
	barber = "💈";
	circus_tent = "🎪";
	steam_locomotive = "🚂";
	railway_car = "🚃";
	bullettrain_side = "🚄";
	bullettrain_front = "🚅";
	train2 = "🚆";
	metro = "🚇";
	light_rail = "🚈";
	station = "🚉";
	tram = "🚊";
	monorail = "🚝";
	mountain_railway = "🚞";
	train = "🚋";
	bus = "🚌";
	oncoming_bus = "🚍";
	trolleybus = "🚎";
	minibus = "🚐";
	ambulance = "🚑";
	fire_engine = "🚒";
	police_car = "🚓";
	oncoming_police_car = "🚔";
	taxi = "🚕";
	oncoming_taxi = "🚖";
	car = "🚗";
	red_car = "🚗";
	oncoming_automobile = "🚘";
	blue_car = "🚙";
	pickup_truck = "🛻";
	truck = "🚚";
	articulated_lorry = "🚛";
	tractor = "🚜";
	racing_car = "🏎️";
	motorcycle = "🏍️";
	motor_scooter = "🛵";
	manual_wheelchair = "🦽";
	motorized_wheelchair = "🦼";
	auto_rickshaw = "🛺";
	bike = "🚲";
	kick_scooter = "🛴";
	skateboard = "🛹";
	roller_skate = "🛼";
	busstop = "🚏";
	motorway = "🛣️";
	railway_track = "🛤️";
	oil_drum = "🛢️";
	rotating_light = "🚨";
	traffic_light = "🚥";
	vertical_traffic_light = "🚦";
	stop_sign = "🛑";
	construction = "🚧";
	canoe = "🛶";
	speedboat = "🚤";
	passenger_ship = "🛳️";
	ferry = "⛴️";
	motor_boat = "🛥️";
	ship = "🚢";
	airplane = "✈️";
	small_airplane = "🛩️";
	flight_departure = "🛫";
	flight_arrival = "🛬";
	parachute = "🪂";
	seat = "💺";
	helicopter = "🚁";
	suspension_railway = "🚟";
	mountain_cableway = "🚠";
	aerial_tramway = "🚡";
	artificial_satellite = "🛰️";
	rocket = "🚀";
	flying_saucer = "🛸";
	bellhop_bell = "🛎️";
	luggage = "🧳";
	stopwatch = "⏱️";
	timer_clock = "⏲️";
	mantelpiece_clock = "🕰️";
	clock12 = "🕛";
	clock1230 = "🕧";
	clock1 = "🕐";
	clock130 = "🕜";
	clock2 = "🕑";
	clock230 = "🕝";
	clock3 = "🕒";
	clock330 = "🕞";
	clock4 = "🕓";
	clock430 = "🕟";
	clock5 = "🕔";
	clock530 = "🕠";
	clock6 = "🕕";
	clock630 = "🕡";
	clock7 = "🕖";
	clock730 = "🕢";
	clock8 = "🕗";
	clock830 = "🕣";
	clock9 = "🕘";
	clock930 = "🕤";
	clock10 = "🕙";
	clock1030 = "🕥";
	clock11 = "🕚";
	clock1130 = "🕦";
	new_moon = "🌑";
	waxing_crescent_moon = "🌒";
	first_quarter_moon = "🌓";
	moon = "🌔";
	waxing_gibbous_moon = "🌔";
	full_moon = "🌕";
	waning_gibbous_moon = "🌖";
	last_quarter_moon = "🌗";
	waning_crescent_moon = "🌘";
	crescent_moon = "🌙";
	new_moon_with_face = "🌚";
	first_quarter_moon_with_face = "🌛";
	last_quarter_moon_with_face = "🌜";
	thermometer = "🌡️";
	sunny = "☀️";
	full_moon_with_face = "🌝";
	sun_with_face = "🌞";
	ringed_planet = "🪐";
	star2 = "🌟";
	stars = "🌠";
	milky_way = "🌌";
	cloud = "☁️";
	cloud_with_lightning_and_rain = "⛈️";
	sun_behind_small_cloud = "🌤️";
	sun_behind_large_cloud = "🌥️";
	sun_behind_rain_cloud = "🌦️";
	cloud_with_rain = "🌧️";
	cloud_with_snow = "🌨️";
	cloud_with_lightning = "🌩️";
	tornado = "🌪️";
	fog = "🌫️";
	wind_face = "🌬️";
	cyclone = "🌀";
	rainbow = "🌈";
	closed_umbrella = "🌂";
	open_umbrella = "☂️";
	parasol_on_ground = "⛱️";
	snowflake = "❄️";
	snowman_with_snow = "☃️";
	comet = "☄️";
	fire = "🔥";
	droplet = "💧";
	ocean = "🌊";
	jack_o_lantern = "🎃";
	christmas_tree = "🎄";
	fireworks = "🎆";
	sparkler = "🎇";
	firecracker = "🧨";
	balloon = "🎈";
	tada = "🎉";
	confetti_ball = "🎊";
	tanabata_tree = "🎋";
	bamboo = "🎍";
	dolls = "🎎";
	flags = "🎏";
	wind_chime = "🎐";
	rice_scene = "🎑";
	red_envelope = "🧧";
	ribbon = "🎀";
	gift = "🎁";
	reminder_ribbon = "🎗️";
	tickets = "🎟️";
	ticket = "🎫";
	medal_military = "🎖️";
	trophy = "🏆";
	medal_sports = "🏅";
	softball = "🥎";
	basketball = "🏀";
	volleyball = "🏐";
	football = "🏈";
	rugby_football = "🏉";
	tennis = "🎾";
	flying_disc = "🥏";
	bowling = "🎳";
	cricket_game = "🏏";
	field_hockey = "🏑";
	ice_hockey = "🏒";
	lacrosse = "🥍";
	ping_pong = "🏓";
	badminton = "🏸";
	boxing_glove = "🥊";
	martial_arts_uniform = "🥋";
	goal_net = "🥅";
	ice_skate = "⛸️";
	fishing_pole_and_fish = "🎣";
	diving_mask = "🤿";
	running_shirt_with_sash = "🎽";
	ski = "🎿";
	sled = "🛷";
	curling_stone = "🥌";
	dart = "🎯";
	yo_yo = "🪀";
	kite = "🪁";
	crystal_ball = "🔮";
	magic_wand = "🪄";
	nazar_amulet = "🧿";
	video_game = "🎮";
	joystick = "🕹️";
	slot_machine = "🎰";
	game_die = "🎲";
	jigsaw = "🧩";
	teddy_bear = "🧸";
	pinata = "🪅";
	nesting_dolls = "🪆";
	spades = "♠️";
	hearts = "♥️";
	diamonds = "♦️";
	clubs = "♣️";
	chess_pawn = "♟️";
	black_joker = "🃏";
	mahjong = "🀄";
	flower_playing_cards = "🎴";
	performing_arts = "🎭";
	framed_picture = "🖼️";
	art = "🎨";
	thread = "🧵";
	sewing_needle = "🪡";
	yarn = "🧶";
	knot = "🪢";
	eyeglasses = "👓";
	dark_sunglasses = "🕶️";
	goggles = "🥽";
	lab_coat = "🥼";
	safety_vest = "🦺";
	necktie = "👔";
	shirt = "👕";
	tshirt = "👕";
	jeans = "👖";
	scarf = "🧣";
	gloves = "🧤";
	coat = "🧥";
	socks = "🧦";
	dress = "👗";
	kimono = "👘";
	sari = "🥻";
	one_piece_swimsuit = "🩱";
	swim_brief = "🩲";
	shorts = "🩳";
	bikini = "👙";
	womans_clothes = "👚";
	purse = "👛";
	handbag = "👜";
	pouch = "👝";
	shopping = "🛍️";
	school_satchel = "🎒";
	thong_sandal = "🩴";
	mans_shoe = "👞";
	shoe = "👞";
	athletic_shoe = "👟";
	hiking_boot = "🥾";
	flat_shoe = "🥿";
	high_heel = "👠";
	sandal = "👡";
	ballet_shoes = "🩰";
	boot = "👢";
	crown = "👑";
	womans_hat = "👒";
	tophat = "🎩";
	mortar_board = "🎓";
	billed_cap = "🧢";
	military_helmet = "🪖";
	rescue_worker_helmet = "⛑️";
	prayer_beads = "📿";
	lipstick = "💄";
	ring = "💍";
	gem = "💎";
	mute = "🔇";
	speaker = "🔈";
	sound = "🔉";
	loud_sound = "🔊";
	loudspeaker = "📢";
	mega = "📣";
	postal_horn = "📯";
	bell = "🔔";
	no_bell = "🔕";
	musical_score = "🎼";
	musical_note = "🎵";
	notes = "🎶";
	studio_microphone = "🎙️";
	level_slider = "🎚️";
	control_knobs = "🎛️";
	microphone = "🎤";
	headphones = "🎧";
	radio = "📻";
	saxophone = "🎷";
	accordion = "🪗";
	guitar = "🎸";
	musical_keyboard = "🎹";
	trumpet = "🎺";
	violin = "🎻";
	banjo = "🪕";
	drum = "🥁";
	long_drum = "🪘";
	iphone = "📱";
	calling = "📲";
	phone = "☎️";
	telephone = "☎️";
	telephone_receiver = "📞";
	pager = "📟";
	fax = "📠";
	battery = "🔋";
	electric_plug = "🔌";
	computer = "💻";
	desktop_computer = "🖥️";
	printer = "🖨️";
	keyboard = "⌨️";
	computer_mouse = "🖱️";
	trackball = "🖲️";
	minidisc = "💽";
	floppy_disk = "💾";
	cd = "💿";
	dvd = "📀";
	abacus = "🧮";
	movie_camera = "🎥";
	film_strip = "🎞️";
	film_projector = "📽️";
	clapper = "🎬";
	tv = "📺";
	camera = "📷";
	camera_flash = "📸";
	video_camera = "📹";
	vhs = "📼";
	mag = "🔍";
	mag_right = "🔎";
	candle = "🕯️";
	bulb = "💡";
	flashlight = "🔦";
	izakaya_lantern = "🏮";
	lantern = "🏮";
	diya_lamp = "🪔";
	notebook_with_decorative_cover = "📔";
	closed_book = "📕";
	book = "📖";
	open_book = "📖";
	green_book = "📗";
	blue_book = "📘";
	orange_book = "📙";
	books = "📚";
	notebook = "📓";
	ledger = "📒";
	page_with_curl = "📃";
	scroll = "📜";
	page_facing_up = "📄";
	newspaper = "📰";
	newspaper_roll = "🗞️";
	bookmark_tabs = "📑";
	bookmark = "🔖";
	label$1 = "🏷️";
	moneybag = "💰";
	coin = "🪙";
	yen = "💴";
	dollar = "💵";
	euro = "💶";
	pound = "💷";
	money_with_wings = "💸";
	credit_card = "💳";
	receipt = "🧾";
	chart = "💹";
	envelope = "✉️";
	email = "📧";
	incoming_envelope = "📨";
	envelope_with_arrow = "📩";
	outbox_tray = "📤";
	inbox_tray = "📥";
	mailbox = "📫";
	mailbox_closed = "📪";
	mailbox_with_mail = "📬";
	mailbox_with_no_mail = "📭";
	postbox = "📮";
	ballot_box = "🗳️";
	pencil2 = "✏️";
	black_nib = "✒️";
	fountain_pen = "🖋️";
	pen = "🖊️";
	paintbrush = "🖌️";
	crayon = "🖍️";
	memo = "📝";
	pencil = "📝";
	briefcase = "💼";
	file_folder = "📁";
	open_file_folder = "📂";
	card_index_dividers = "🗂️";
	date = "📅";
	calendar = "📆";
	spiral_notepad = "🗒️";
	spiral_calendar = "🗓️";
	card_index = "📇";
	chart_with_upwards_trend = "📈";
	chart_with_downwards_trend = "📉";
	bar_chart = "📊";
	clipboard = "📋";
	pushpin = "📌";
	round_pushpin = "📍";
	paperclip = "📎";
	paperclips = "🖇️";
	straight_ruler = "📏";
	triangular_ruler = "📐";
	scissors = "✂️";
	card_file_box = "🗃️";
	file_cabinet = "🗄️";
	wastebasket = "🗑️";
	lock = "🔒";
	unlock = "🔓";
	lock_with_ink_pen = "🔏";
	closed_lock_with_key = "🔐";
	key = "🔑";
	old_key = "🗝️";
	hammer = "🔨";
	axe = "🪓";
	pick = "⛏️";
	hammer_and_pick = "⚒️";
	hammer_and_wrench = "🛠️";
	dagger = "🗡️";
	crossed_swords = "⚔️";
	gun = "🔫";
	boomerang = "🪃";
	bow_and_arrow = "🏹";
	shield = "🛡️";
	carpentry_saw = "🪚";
	wrench = "🔧";
	screwdriver = "🪛";
	nut_and_bolt = "🔩";
	gear = "⚙️";
	clamp = "🗜️";
	balance_scale = "⚖️";
	probing_cane = "🦯";
	link = "🔗";
	chains = "⛓️";
	hook = "🪝";
	toolbox = "🧰";
	magnet = "🧲";
	ladder = "🪜";
	alembic = "⚗️";
	test_tube = "🧪";
	petri_dish = "🧫";
	dna = "🧬";
	microscope = "🔬";
	telescope = "🔭";
	satellite = "📡";
	syringe = "💉";
	drop_of_blood = "🩸";
	pill = "💊";
	adhesive_bandage = "🩹";
	stethoscope = "🩺";
	door = "🚪";
	elevator = "🛗";
	mirror = "🪞";
	window = "🪟";
	bed = "🛏️";
	couch_and_lamp = "🛋️";
	chair = "🪑";
	toilet = "🚽";
	plunger = "🪠";
	shower = "🚿";
	bathtub = "🛁";
	mouse_trap = "🪤";
	razor = "🪒";
	lotion_bottle = "🧴";
	safety_pin = "🧷";
	broom = "🧹";
	basket = "🧺";
	roll_of_paper = "🧻";
	bucket = "🪣";
	soap = "🧼";
	toothbrush = "🪥";
	sponge = "🧽";
	fire_extinguisher = "🧯";
	shopping_cart = "🛒";
	smoking = "🚬";
	coffin = "⚰️";
	headstone = "🪦";
	funeral_urn = "⚱️";
	moyai = "🗿";
	placard = "🪧";
	atm = "🏧";
	put_litter_in_its_place = "🚮";
	potable_water = "🚰";
	mens = "🚹";
	womens = "🚺";
	restroom = "🚻";
	baby_symbol = "🚼";
	wc = "🚾";
	passport_control = "🛂";
	customs = "🛃";
	baggage_claim = "🛄";
	left_luggage = "🛅";
	warning = "⚠️";
	children_crossing = "🚸";
	no_entry_sign = "🚫";
	no_bicycles = "🚳";
	no_smoking = "🚭";
	do_not_litter = "🚯";
	no_pedestrians = "🚷";
	no_mobile_phones = "📵";
	underage = "🔞";
	radioactive = "☢️";
	biohazard = "☣️";
	arrow_up = "⬆️";
	arrow_upper_right = "↗️";
	arrow_right = "➡️";
	arrow_lower_right = "↘️";
	arrow_down = "⬇️";
	arrow_lower_left = "↙️";
	arrow_left = "⬅️";
	arrow_upper_left = "↖️";
	arrow_up_down = "↕️";
	left_right_arrow = "↔️";
	leftwards_arrow_with_hook = "↩️";
	arrow_right_hook = "↪️";
	arrow_heading_up = "⤴️";
	arrow_heading_down = "⤵️";
	arrows_clockwise = "🔃";
	arrows_counterclockwise = "🔄";
	back = "🔙";
	end = "🔚";
	on = "🔛";
	soon = "🔜";
	top = "🔝";
	place_of_worship = "🛐";
	atom_symbol = "⚛️";
	om = "🕉️";
	star_of_david = "✡️";
	wheel_of_dharma = "☸️";
	yin_yang = "☯️";
	latin_cross = "✝️";
	orthodox_cross = "☦️";
	star_and_crescent = "☪️";
	peace_symbol = "☮️";
	menorah = "🕎";
	six_pointed_star = "🔯";
	twisted_rightwards_arrows = "🔀";
	repeat = "🔁";
	repeat_one = "🔂";
	arrow_forward = "▶️";
	next_track_button = "⏭️";
	play_or_pause_button = "⏯️";
	arrow_backward = "◀️";
	previous_track_button = "⏮️";
	arrow_up_small = "🔼";
	arrow_down_small = "🔽";
	pause_button = "⏸️";
	stop_button = "⏹️";
	record_button = "⏺️";
	eject_button = "⏏️";
	cinema = "🎦";
	low_brightness = "🔅";
	high_brightness = "🔆";
	signal_strength = "📶";
	vibration_mode = "📳";
	mobile_phone_off = "📴";
	female_sign = "♀️";
	male_sign = "♂️";
	transgender_symbol = "⚧️";
	heavy_multiplication_x = "✖️";
	infinity = "♾️";
	bangbang = "‼️";
	interrobang = "⁉️";
	wavy_dash = "〰️";
	currency_exchange = "💱";
	heavy_dollar_sign = "💲";
	medical_symbol = "⚕️";
	recycle = "♻️";
	fleur_de_lis = "⚜️";
	trident = "🔱";
	name_badge = "📛";
	beginner = "🔰";
	ballot_box_with_check = "☑️";
	heavy_check_mark = "✔️";
	part_alternation_mark = "〽️";
	eight_spoked_asterisk = "✳️";
	eight_pointed_black_star = "✴️";
	sparkle = "❇️";
	copyright = "©️";
	registered = "®️";
	tm = "™️";
	hash = "#️⃣";
	asterisk = "*️⃣";
	zero = "0️⃣";
	one = "1️⃣";
	two = "2️⃣";
	three = "3️⃣";
	four = "4️⃣";
	five = "5️⃣";
	six = "6️⃣";
	seven = "7️⃣";
	eight = "8️⃣";
	nine = "9️⃣";
	keycap_ten = "🔟";
	capital_abcd = "🔠";
	abcd = "🔡";
	symbols = "🔣";
	abc = "🔤";
	a = "🅰️";
	ab = "🆎";
	b = "🅱️";
	cl = "🆑";
	cool = "🆒";
	free = "🆓";
	information_source = "ℹ️";
	id = "🆔";
	m = "Ⓜ️";
	ng = "🆖";
	o2 = "🅾️";
	ok = "🆗";
	parking = "🅿️";
	sos = "🆘";
	up = "🆙";
	vs = "🆚";
	koko = "🈁";
	sa = "🈂️";
	ideograph_advantage = "🉐";
	accept = "🉑";
	congratulations = "㊗️";
	secret = "㊙️";
	u6e80 = "🈵";
	red_circle = "🔴";
	orange_circle = "🟠";
	yellow_circle = "🟡";
	green_circle = "🟢";
	large_blue_circle = "🔵";
	purple_circle = "🟣";
	brown_circle = "🟤";
	red_square = "🟥";
	orange_square = "🟧";
	yellow_square = "🟨";
	green_square = "🟩";
	blue_square = "🟦";
	purple_square = "🟪";
	brown_square = "🟫";
	black_medium_square = "◼️";
	white_medium_square = "◻️";
	black_small_square = "▪️";
	white_small_square = "▫️";
	large_orange_diamond = "🔶";
	large_blue_diamond = "🔷";
	small_orange_diamond = "🔸";
	small_blue_diamond = "🔹";
	small_red_triangle = "🔺";
	small_red_triangle_down = "🔻";
	diamond_shape_with_a_dot_inside = "💠";
	radio_button = "🔘";
	white_square_button = "🔳";
	black_square_button = "🔲";
	checkered_flag = "🏁";
	triangular_flag_on_post = "🚩";
	crossed_flags = "🎌";
	black_flag = "🏴";
	white_flag = "🏳️";
	rainbow_flag = "🏳️‍🌈";
	transgender_flag = "🏳️‍⚧️";
	pirate_flag = "🏴‍☠️";
	ascension_island = "🇦🇨";
	andorra = "🇦🇩";
	united_arab_emirates = "🇦🇪";
	afghanistan = "🇦🇫";
	antigua_barbuda = "🇦🇬";
	anguilla = "🇦🇮";
	albania = "🇦🇱";
	armenia = "🇦🇲";
	angola = "🇦🇴";
	antarctica = "🇦🇶";
	argentina = "🇦🇷";
	american_samoa = "🇦🇸";
	austria = "🇦🇹";
	australia = "🇦🇺";
	aruba = "🇦🇼";
	aland_islands = "🇦🇽";
	azerbaijan = "🇦🇿";
	bosnia_herzegovina = "🇧🇦";
	barbados = "🇧🇧";
	bangladesh = "🇧🇩";
	belgium = "🇧🇪";
	burkina_faso = "🇧🇫";
	bulgaria = "🇧🇬";
	bahrain = "🇧🇭";
	burundi = "🇧🇮";
	benin = "🇧🇯";
	st_barthelemy = "🇧🇱";
	bermuda = "🇧🇲";
	brunei = "🇧🇳";
	bolivia = "🇧🇴";
	caribbean_netherlands = "🇧🇶";
	brazil = "🇧🇷";
	bahamas = "🇧🇸";
	bhutan = "🇧🇹";
	bouvet_island = "🇧🇻";
	botswana = "🇧🇼";
	belarus = "🇧🇾";
	belize = "🇧🇿";
	canada = "🇨🇦";
	cocos_islands = "🇨🇨";
	congo_kinshasa = "🇨🇩";
	central_african_republic = "🇨🇫";
	congo_brazzaville = "🇨🇬";
	switzerland = "🇨🇭";
	cote_divoire = "🇨🇮";
	cook_islands = "🇨🇰";
	chile = "🇨🇱";
	cameroon = "🇨🇲";
	cn = "🇨🇳";
	colombia = "🇨🇴";
	clipperton_island = "🇨🇵";
	costa_rica = "🇨🇷";
	cuba = "🇨🇺";
	cape_verde = "🇨🇻";
	curacao = "🇨🇼";
	christmas_island = "🇨🇽";
	cyprus = "🇨🇾";
	czech_republic = "🇨🇿";
	de = "🇩🇪";
	diego_garcia = "🇩🇬";
	djibouti = "🇩🇯";
	denmark = "🇩🇰";
	dominica = "🇩🇲";
	dominican_republic = "🇩🇴";
	algeria = "🇩🇿";
	ceuta_melilla = "🇪🇦";
	ecuador = "🇪🇨";
	estonia = "🇪🇪";
	egypt = "🇪🇬";
	western_sahara = "🇪🇭";
	eritrea = "🇪🇷";
	es = "🇪🇸";
	ethiopia = "🇪🇹";
	eu = "🇪🇺";
	european_union = "🇪🇺";
	finland = "🇫🇮";
	fiji = "🇫🇯";
	falkland_islands = "🇫🇰";
	micronesia = "🇫🇲";
	faroe_islands = "🇫🇴";
	fr = "🇫🇷";
	gabon = "🇬🇦";
	gb = "🇬🇧";
	uk = "🇬🇧";
	grenada = "🇬🇩";
	georgia = "🇬🇪";
	french_guiana = "🇬🇫";
	guernsey = "🇬🇬";
	ghana = "🇬🇭";
	gibraltar = "🇬🇮";
	greenland = "🇬🇱";
	gambia = "🇬🇲";
	guinea = "🇬🇳";
	guadeloupe = "🇬🇵";
	equatorial_guinea = "🇬🇶";
	greece = "🇬🇷";
	south_georgia_south_sandwich_islands = "🇬🇸";
	guatemala = "🇬🇹";
	guam = "🇬🇺";
	guinea_bissau = "🇬🇼";
	guyana = "🇬🇾";
	hong_kong = "🇭🇰";
	heard_mcdonald_islands = "🇭🇲";
	honduras = "🇭🇳";
	croatia = "🇭🇷";
	haiti = "🇭🇹";
	hungary = "🇭🇺";
	canary_islands = "🇮🇨";
	indonesia = "🇮🇩";
	ireland = "🇮🇪";
	israel = "🇮🇱";
	isle_of_man = "🇮🇲";
	india = "🇮🇳";
	british_indian_ocean_territory = "🇮🇴";
	iraq = "🇮🇶";
	iran = "🇮🇷";
	iceland = "🇮🇸";
	it = "🇮🇹";
	jersey = "🇯🇪";
	jamaica = "🇯🇲";
	jordan = "🇯🇴";
	jp = "🇯🇵";
	kenya = "🇰🇪";
	kyrgyzstan = "🇰🇬";
	cambodia = "🇰🇭";
	kiribati = "🇰🇮";
	comoros = "🇰🇲";
	st_kitts_nevis = "🇰🇳";
	north_korea = "🇰🇵";
	kr = "🇰🇷";
	kuwait = "🇰🇼";
	cayman_islands = "🇰🇾";
	kazakhstan = "🇰🇿";
	laos = "🇱🇦";
	lebanon = "🇱🇧";
	st_lucia = "🇱🇨";
	liechtenstein = "🇱🇮";
	sri_lanka = "🇱🇰";
	liberia = "🇱🇷";
	lesotho = "🇱🇸";
	lithuania = "🇱🇹";
	luxembourg = "🇱🇺";
	latvia = "🇱🇻";
	libya = "🇱🇾";
	morocco = "🇲🇦";
	monaco = "🇲🇨";
	moldova = "🇲🇩";
	montenegro = "🇲🇪";
	st_martin = "🇲🇫";
	madagascar = "🇲🇬";
	marshall_islands = "🇲🇭";
	macedonia = "🇲🇰";
	mali = "🇲🇱";
	myanmar = "🇲🇲";
	mongolia = "🇲🇳";
	macau = "🇲🇴";
	northern_mariana_islands = "🇲🇵";
	martinique = "🇲🇶";
	mauritania = "🇲🇷";
	montserrat = "🇲🇸";
	malta = "🇲🇹";
	mauritius = "🇲🇺";
	maldives = "🇲🇻";
	malawi = "🇲🇼";
	mexico = "🇲🇽";
	malaysia = "🇲🇾";
	mozambique = "🇲🇿";
	namibia = "🇳🇦";
	new_caledonia = "🇳🇨";
	niger = "🇳🇪";
	norfolk_island = "🇳🇫";
	nigeria = "🇳🇬";
	nicaragua = "🇳🇮";
	netherlands = "🇳🇱";
	norway = "🇳🇴";
	nepal = "🇳🇵";
	nauru = "🇳🇷";
	niue = "🇳🇺";
	new_zealand = "🇳🇿";
	oman = "🇴🇲";
	panama = "🇵🇦";
	peru = "🇵🇪";
	french_polynesia = "🇵🇫";
	papua_new_guinea = "🇵🇬";
	philippines = "🇵🇭";
	pakistan = "🇵🇰";
	poland = "🇵🇱";
	st_pierre_miquelon = "🇵🇲";
	pitcairn_islands = "🇵🇳";
	puerto_rico = "🇵🇷";
	palestinian_territories = "🇵🇸";
	portugal = "🇵🇹";
	palau = "🇵🇼";
	paraguay = "🇵🇾";
	qatar = "🇶🇦";
	reunion = "🇷🇪";
	romania = "🇷🇴";
	serbia = "🇷🇸";
	ru = "🇷🇺";
	rwanda = "🇷🇼";
	saudi_arabia = "🇸🇦";
	solomon_islands = "🇸🇧";
	seychelles = "🇸🇨";
	sudan = "🇸🇩";
	sweden = "🇸🇪";
	singapore = "🇸🇬";
	st_helena = "🇸🇭";
	slovenia = "🇸🇮";
	svalbard_jan_mayen = "🇸🇯";
	slovakia = "🇸🇰";
	sierra_leone = "🇸🇱";
	san_marino = "🇸🇲";
	senegal = "🇸🇳";
	somalia = "🇸🇴";
	suriname = "🇸🇷";
	south_sudan = "🇸🇸";
	sao_tome_principe = "🇸🇹";
	el_salvador = "🇸🇻";
	sint_maarten = "🇸🇽";
	syria = "🇸🇾";
	swaziland = "🇸🇿";
	tristan_da_cunha = "🇹🇦";
	turks_caicos_islands = "🇹🇨";
	chad = "🇹🇩";
	french_southern_territories = "🇹🇫";
	togo = "🇹🇬";
	thailand = "🇹🇭";
	tajikistan = "🇹🇯";
	tokelau = "🇹🇰";
	timor_leste = "🇹🇱";
	turkmenistan = "🇹🇲";
	tunisia = "🇹🇳";
	tonga = "🇹🇴";
	tr = "🇹🇷";
	trinidad_tobago = "🇹🇹";
	tuvalu = "🇹🇻";
	taiwan = "🇹🇼";
	tanzania = "🇹🇿";
	ukraine = "🇺🇦";
	uganda = "🇺🇬";
	us_outlying_islands = "🇺🇲";
	united_nations = "🇺🇳";
	us = "🇺🇸";
	uruguay = "🇺🇾";
	uzbekistan = "🇺🇿";
	vatican_city = "🇻🇦";
	st_vincent_grenadines = "🇻🇨";
	venezuela = "🇻🇪";
	british_virgin_islands = "🇻🇬";
	us_virgin_islands = "🇻🇮";
	vietnam = "🇻🇳";
	vanuatu = "🇻🇺";
	wallis_futuna = "🇼🇫";
	samoa = "🇼🇸";
	kosovo = "🇽🇰";
	yemen = "🇾🇪";
	mayotte = "🇾🇹";
	south_africa = "🇿🇦";
	zambia = "🇿🇲";
	zimbabwe = "🇿🇼";
	england = "🏴󠁧󠁢󠁥󠁮󠁧󠁿";
	scotland = "🏴󠁧󠁢󠁳󠁣󠁴󠁿";
	wales = "🏴󠁧󠁢󠁷󠁬󠁳󠁿";
	full_default = {
		"100": "💯",
		"1234": "🔢",
		grinning,
		smiley,
		smile,
		grin,
		laughing,
		satisfied,
		sweat_smile,
		rofl,
		joy,
		slightly_smiling_face,
		upside_down_face,
		wink,
		blush,
		innocent,
		smiling_face_with_three_hearts,
		heart_eyes,
		star_struck,
		kissing_heart,
		kissing,
		relaxed,
		kissing_closed_eyes,
		kissing_smiling_eyes,
		smiling_face_with_tear,
		yum,
		stuck_out_tongue,
		stuck_out_tongue_winking_eye,
		zany_face,
		stuck_out_tongue_closed_eyes,
		money_mouth_face,
		hugs,
		hand_over_mouth,
		shushing_face,
		thinking,
		zipper_mouth_face,
		raised_eyebrow,
		neutral_face,
		expressionless,
		no_mouth,
		smirk,
		unamused,
		roll_eyes,
		grimacing,
		lying_face,
		relieved,
		pensive,
		sleepy,
		drooling_face,
		sleeping,
		mask,
		face_with_thermometer,
		face_with_head_bandage,
		nauseated_face,
		vomiting_face,
		sneezing_face,
		hot_face,
		cold_face,
		woozy_face,
		dizzy_face,
		exploding_head,
		cowboy_hat_face,
		partying_face,
		disguised_face,
		sunglasses,
		nerd_face,
		monocle_face,
		confused,
		worried,
		slightly_frowning_face,
		frowning_face,
		open_mouth,
		hushed,
		astonished,
		flushed,
		pleading_face,
		frowning,
		anguished,
		fearful,
		cold_sweat,
		disappointed_relieved,
		cry,
		sob,
		scream,
		confounded,
		persevere,
		disappointed,
		sweat,
		weary,
		tired_face,
		yawning_face,
		triumph,
		rage,
		pout,
		angry,
		cursing_face,
		smiling_imp,
		imp,
		skull,
		skull_and_crossbones,
		hankey,
		poop,
		shit,
		clown_face,
		japanese_ogre,
		japanese_goblin,
		ghost,
		alien,
		space_invader,
		robot,
		smiley_cat,
		smile_cat,
		joy_cat,
		heart_eyes_cat,
		smirk_cat,
		kissing_cat,
		scream_cat,
		crying_cat_face,
		pouting_cat,
		see_no_evil,
		hear_no_evil,
		speak_no_evil,
		kiss,
		love_letter,
		cupid,
		gift_heart,
		sparkling_heart,
		heartpulse,
		heartbeat,
		revolving_hearts,
		two_hearts,
		heart_decoration,
		heavy_heart_exclamation,
		broken_heart,
		heart,
		orange_heart,
		yellow_heart,
		green_heart,
		blue_heart,
		purple_heart,
		brown_heart,
		black_heart,
		white_heart,
		anger,
		boom,
		collision,
		dizzy,
		sweat_drops,
		dash,
		hole,
		bomb,
		speech_balloon,
		eye_speech_bubble,
		left_speech_bubble,
		right_anger_bubble,
		thought_balloon,
		zzz,
		wave,
		raised_back_of_hand,
		raised_hand_with_fingers_splayed,
		hand: "✋",
		raised_hand: "✋",
		vulcan_salute,
		ok_hand,
		pinched_fingers,
		pinching_hand,
		v,
		crossed_fingers,
		love_you_gesture,
		metal,
		call_me_hand,
		point_left,
		point_right,
		point_up_2,
		middle_finger,
		fu,
		point_down,
		point_up,
		"+1": "👍",
		thumbsup,
		"-1": "👎",
		thumbsdown,
		fist_raised: "✊",
		fist: "✊",
		fist_oncoming,
		facepunch,
		punch,
		fist_left,
		fist_right,
		clap,
		raised_hands,
		open_hands,
		palms_up_together,
		handshake,
		pray,
		writing_hand,
		nail_care,
		selfie,
		muscle,
		mechanical_arm,
		mechanical_leg,
		leg,
		foot,
		ear,
		ear_with_hearing_aid,
		nose,
		brain,
		anatomical_heart,
		lungs,
		tooth,
		bone,
		eyes,
		eye,
		tongue,
		lips,
		baby,
		child,
		boy,
		girl,
		adult,
		blond_haired_person,
		man,
		bearded_person,
		red_haired_man,
		curly_haired_man,
		white_haired_man,
		bald_man,
		woman,
		red_haired_woman,
		person_red_hair,
		curly_haired_woman,
		person_curly_hair,
		white_haired_woman,
		person_white_hair,
		bald_woman,
		person_bald,
		blond_haired_woman,
		blonde_woman,
		blond_haired_man,
		older_adult,
		older_man,
		older_woman,
		frowning_person,
		frowning_man,
		frowning_woman,
		pouting_face,
		pouting_man,
		pouting_woman,
		no_good,
		no_good_man,
		ng_man,
		no_good_woman,
		ng_woman,
		ok_person,
		ok_man,
		ok_woman,
		tipping_hand_person,
		information_desk_person,
		tipping_hand_man,
		sassy_man,
		tipping_hand_woman,
		sassy_woman,
		raising_hand,
		raising_hand_man,
		raising_hand_woman,
		deaf_person,
		deaf_man,
		deaf_woman,
		bow,
		bowing_man,
		bowing_woman,
		facepalm,
		man_facepalming,
		woman_facepalming,
		shrug,
		man_shrugging,
		woman_shrugging,
		health_worker,
		man_health_worker,
		woman_health_worker,
		student,
		man_student,
		woman_student,
		teacher,
		man_teacher,
		woman_teacher,
		judge,
		man_judge,
		woman_judge,
		farmer,
		man_farmer,
		woman_farmer,
		cook,
		man_cook,
		woman_cook,
		mechanic,
		man_mechanic,
		woman_mechanic,
		factory_worker,
		man_factory_worker,
		woman_factory_worker,
		office_worker,
		man_office_worker,
		woman_office_worker,
		scientist,
		man_scientist,
		woman_scientist,
		technologist,
		man_technologist,
		woman_technologist,
		singer,
		man_singer,
		woman_singer,
		artist,
		man_artist,
		woman_artist,
		pilot,
		man_pilot,
		woman_pilot,
		astronaut,
		man_astronaut,
		woman_astronaut,
		firefighter,
		man_firefighter,
		woman_firefighter,
		police_officer,
		cop,
		policeman,
		policewoman,
		detective,
		male_detective,
		female_detective,
		guard,
		guardsman,
		guardswoman,
		ninja,
		construction_worker,
		construction_worker_man,
		construction_worker_woman,
		prince,
		princess,
		person_with_turban,
		man_with_turban,
		woman_with_turban,
		man_with_gua_pi_mao,
		woman_with_headscarf,
		person_in_tuxedo,
		man_in_tuxedo,
		woman_in_tuxedo,
		person_with_veil,
		man_with_veil,
		woman_with_veil,
		bride_with_veil,
		pregnant_woman,
		breast_feeding,
		woman_feeding_baby,
		man_feeding_baby,
		person_feeding_baby,
		angel,
		santa,
		mrs_claus,
		mx_claus,
		superhero,
		superhero_man,
		superhero_woman,
		supervillain,
		supervillain_man,
		supervillain_woman,
		mage,
		mage_man,
		mage_woman,
		fairy,
		fairy_man,
		fairy_woman,
		vampire,
		vampire_man,
		vampire_woman,
		merperson,
		merman,
		mermaid,
		elf,
		elf_man,
		elf_woman,
		genie,
		genie_man,
		genie_woman,
		zombie,
		zombie_man,
		zombie_woman,
		massage,
		massage_man,
		massage_woman,
		haircut,
		haircut_man,
		haircut_woman,
		walking,
		walking_man,
		walking_woman,
		standing_person,
		standing_man,
		standing_woman,
		kneeling_person,
		kneeling_man,
		kneeling_woman,
		person_with_probing_cane,
		man_with_probing_cane,
		woman_with_probing_cane,
		person_in_motorized_wheelchair,
		man_in_motorized_wheelchair,
		woman_in_motorized_wheelchair,
		person_in_manual_wheelchair,
		man_in_manual_wheelchair,
		woman_in_manual_wheelchair,
		runner,
		running,
		running_man,
		running_woman,
		woman_dancing,
		dancer,
		man_dancing,
		business_suit_levitating,
		dancers,
		dancing_men,
		dancing_women,
		sauna_person,
		sauna_man,
		sauna_woman,
		climbing,
		climbing_man,
		climbing_woman,
		person_fencing,
		horse_racing,
		skier,
		snowboarder,
		golfing,
		golfing_man,
		golfing_woman,
		surfer,
		surfing_man,
		surfing_woman,
		rowboat,
		rowing_man,
		rowing_woman,
		swimmer,
		swimming_man,
		swimming_woman,
		bouncing_ball_person,
		bouncing_ball_man,
		basketball_man,
		bouncing_ball_woman,
		basketball_woman,
		weight_lifting,
		weight_lifting_man,
		weight_lifting_woman,
		bicyclist,
		biking_man,
		biking_woman,
		mountain_bicyclist,
		mountain_biking_man,
		mountain_biking_woman,
		cartwheeling,
		man_cartwheeling,
		woman_cartwheeling,
		wrestling,
		men_wrestling,
		women_wrestling,
		water_polo,
		man_playing_water_polo,
		woman_playing_water_polo,
		handball_person,
		man_playing_handball,
		woman_playing_handball,
		juggling_person,
		man_juggling,
		woman_juggling,
		lotus_position,
		lotus_position_man,
		lotus_position_woman,
		bath,
		sleeping_bed,
		people_holding_hands,
		two_women_holding_hands,
		couple,
		two_men_holding_hands,
		couplekiss,
		couplekiss_man_woman,
		couplekiss_man_man,
		couplekiss_woman_woman,
		couple_with_heart,
		couple_with_heart_woman_man,
		couple_with_heart_man_man,
		couple_with_heart_woman_woman,
		family,
		family_man_woman_boy,
		family_man_woman_girl,
		family_man_woman_girl_boy,
		family_man_woman_boy_boy,
		family_man_woman_girl_girl,
		family_man_man_boy,
		family_man_man_girl,
		family_man_man_girl_boy,
		family_man_man_boy_boy,
		family_man_man_girl_girl,
		family_woman_woman_boy,
		family_woman_woman_girl,
		family_woman_woman_girl_boy,
		family_woman_woman_boy_boy,
		family_woman_woman_girl_girl,
		family_man_boy,
		family_man_boy_boy,
		family_man_girl,
		family_man_girl_boy,
		family_man_girl_girl,
		family_woman_boy,
		family_woman_boy_boy,
		family_woman_girl,
		family_woman_girl_boy,
		family_woman_girl_girl,
		speaking_head,
		bust_in_silhouette,
		busts_in_silhouette,
		people_hugging,
		footprints,
		monkey_face,
		monkey,
		gorilla,
		orangutan,
		dog,
		dog2,
		guide_dog,
		service_dog,
		poodle,
		wolf,
		fox_face,
		raccoon,
		cat,
		cat2,
		black_cat,
		lion,
		tiger,
		tiger2,
		leopard,
		horse,
		racehorse,
		unicorn,
		zebra,
		deer,
		bison,
		cow,
		ox,
		water_buffalo,
		cow2,
		pig,
		pig2,
		boar,
		pig_nose,
		ram,
		sheep,
		goat,
		dromedary_camel,
		camel,
		llama,
		giraffe,
		elephant,
		mammoth,
		rhinoceros,
		hippopotamus,
		mouse,
		mouse2,
		rat,
		hamster,
		rabbit,
		rabbit2,
		chipmunk,
		beaver,
		hedgehog,
		bat,
		bear,
		polar_bear,
		koala,
		panda_face,
		sloth,
		otter,
		skunk,
		kangaroo,
		badger,
		feet,
		paw_prints,
		turkey,
		chicken,
		rooster,
		hatching_chick,
		baby_chick,
		hatched_chick,
		bird,
		penguin,
		dove,
		eagle,
		duck,
		swan,
		owl,
		dodo,
		feather,
		flamingo,
		peacock,
		parrot,
		frog,
		crocodile,
		turtle,
		lizard,
		snake,
		dragon_face,
		dragon,
		sauropod,
		"t-rex": "🦖",
		whale,
		whale2,
		dolphin,
		flipper,
		seal,
		fish,
		tropical_fish,
		blowfish,
		shark,
		octopus,
		shell,
		snail,
		butterfly,
		bug,
		ant,
		bee,
		honeybee,
		beetle,
		lady_beetle,
		cricket,
		cockroach,
		spider,
		spider_web,
		scorpion,
		mosquito,
		fly,
		worm,
		microbe,
		bouquet,
		cherry_blossom,
		white_flower,
		rosette,
		rose,
		wilted_flower,
		hibiscus,
		sunflower,
		blossom,
		tulip,
		seedling,
		potted_plant,
		evergreen_tree,
		deciduous_tree,
		palm_tree,
		cactus,
		ear_of_rice,
		herb,
		shamrock,
		four_leaf_clover,
		maple_leaf,
		fallen_leaf,
		leaves,
		grapes,
		melon,
		watermelon,
		tangerine,
		orange,
		mandarin,
		lemon,
		banana,
		pineapple,
		mango,
		apple,
		green_apple,
		pear,
		peach,
		cherries,
		strawberry,
		blueberries,
		kiwi_fruit,
		tomato,
		olive,
		coconut,
		avocado,
		eggplant,
		potato,
		carrot,
		corn,
		hot_pepper,
		bell_pepper,
		cucumber,
		leafy_green,
		broccoli,
		garlic,
		onion,
		mushroom,
		peanuts,
		chestnut,
		bread,
		croissant,
		baguette_bread,
		flatbread,
		pretzel,
		bagel,
		pancakes,
		waffle,
		cheese,
		meat_on_bone,
		poultry_leg,
		cut_of_meat,
		bacon,
		hamburger,
		fries,
		pizza,
		hotdog,
		sandwich,
		taco,
		burrito,
		tamale,
		stuffed_flatbread,
		falafel,
		egg,
		fried_egg,
		shallow_pan_of_food,
		stew,
		fondue,
		bowl_with_spoon,
		green_salad,
		popcorn,
		butter,
		salt,
		canned_food,
		bento,
		rice_cracker,
		rice_ball,
		rice,
		curry,
		ramen,
		spaghetti,
		sweet_potato,
		oden,
		sushi,
		fried_shrimp,
		fish_cake,
		moon_cake,
		dango,
		dumpling,
		fortune_cookie,
		takeout_box,
		crab,
		lobster,
		shrimp,
		squid,
		oyster,
		icecream,
		shaved_ice,
		ice_cream,
		doughnut,
		cookie,
		birthday,
		cake,
		cupcake,
		pie,
		chocolate_bar,
		candy,
		lollipop,
		custard,
		honey_pot,
		baby_bottle,
		milk_glass,
		coffee: "☕",
		teapot,
		tea,
		sake,
		champagne,
		wine_glass,
		cocktail,
		tropical_drink,
		beer,
		beers,
		clinking_glasses,
		tumbler_glass,
		cup_with_straw,
		bubble_tea,
		beverage_box,
		mate,
		ice_cube,
		chopsticks,
		plate_with_cutlery,
		fork_and_knife,
		spoon,
		hocho,
		knife,
		amphora,
		earth_africa,
		earth_americas,
		earth_asia,
		globe_with_meridians,
		world_map,
		japan,
		compass,
		mountain_snow,
		mountain,
		volcano,
		mount_fuji,
		camping,
		beach_umbrella,
		desert,
		desert_island,
		national_park,
		stadium,
		classical_building,
		building_construction,
		bricks,
		rock,
		wood,
		hut,
		houses,
		derelict_house,
		house,
		house_with_garden,
		office,
		post_office,
		european_post_office,
		hospital,
		bank,
		hotel,
		love_hotel,
		convenience_store,
		school,
		department_store,
		factory,
		japanese_castle,
		european_castle,
		wedding,
		tokyo_tower,
		statue_of_liberty,
		church: "⛪",
		mosque,
		hindu_temple,
		synagogue,
		shinto_shrine,
		kaaba,
		fountain: "⛲",
		tent: "⛺",
		foggy,
		night_with_stars,
		cityscape,
		sunrise_over_mountains,
		sunrise,
		city_sunset,
		city_sunrise,
		bridge_at_night,
		hotsprings,
		carousel_horse,
		ferris_wheel,
		roller_coaster,
		barber,
		circus_tent,
		steam_locomotive,
		railway_car,
		bullettrain_side,
		bullettrain_front,
		train2,
		metro,
		light_rail,
		station,
		tram,
		monorail,
		mountain_railway,
		train,
		bus,
		oncoming_bus,
		trolleybus,
		minibus,
		ambulance,
		fire_engine,
		police_car,
		oncoming_police_car,
		taxi,
		oncoming_taxi,
		car,
		red_car,
		oncoming_automobile,
		blue_car,
		pickup_truck,
		truck,
		articulated_lorry,
		tractor,
		racing_car,
		motorcycle,
		motor_scooter,
		manual_wheelchair,
		motorized_wheelchair,
		auto_rickshaw,
		bike,
		kick_scooter,
		skateboard,
		roller_skate,
		busstop,
		motorway,
		railway_track,
		oil_drum,
		fuelpump: "⛽",
		rotating_light,
		traffic_light,
		vertical_traffic_light,
		stop_sign,
		construction,
		anchor: "⚓",
		boat: "⛵",
		sailboat: "⛵",
		canoe,
		speedboat,
		passenger_ship,
		ferry,
		motor_boat,
		ship,
		airplane,
		small_airplane,
		flight_departure,
		flight_arrival,
		parachute,
		seat,
		helicopter,
		suspension_railway,
		mountain_cableway,
		aerial_tramway,
		artificial_satellite,
		rocket,
		flying_saucer,
		bellhop_bell,
		luggage,
		hourglass: "⌛",
		hourglass_flowing_sand: "⏳",
		watch: "⌚",
		alarm_clock: "⏰",
		stopwatch,
		timer_clock,
		mantelpiece_clock,
		clock12,
		clock1230,
		clock1,
		clock130,
		clock2,
		clock230,
		clock3,
		clock330,
		clock4,
		clock430,
		clock5,
		clock530,
		clock6,
		clock630,
		clock7,
		clock730,
		clock8,
		clock830,
		clock9,
		clock930,
		clock10,
		clock1030,
		clock11,
		clock1130,
		new_moon,
		waxing_crescent_moon,
		first_quarter_moon,
		moon,
		waxing_gibbous_moon,
		full_moon,
		waning_gibbous_moon,
		last_quarter_moon,
		waning_crescent_moon,
		crescent_moon,
		new_moon_with_face,
		first_quarter_moon_with_face,
		last_quarter_moon_with_face,
		thermometer,
		sunny,
		full_moon_with_face,
		sun_with_face,
		ringed_planet,
		star: "⭐",
		star2,
		stars,
		milky_way,
		cloud,
		partly_sunny: "⛅",
		cloud_with_lightning_and_rain,
		sun_behind_small_cloud,
		sun_behind_large_cloud,
		sun_behind_rain_cloud,
		cloud_with_rain,
		cloud_with_snow,
		cloud_with_lightning,
		tornado,
		fog,
		wind_face,
		cyclone,
		rainbow,
		closed_umbrella,
		open_umbrella,
		umbrella: "☔",
		parasol_on_ground,
		zap: "⚡",
		snowflake,
		snowman_with_snow,
		snowman: "⛄",
		comet,
		fire,
		droplet,
		ocean,
		jack_o_lantern,
		christmas_tree,
		fireworks,
		sparkler,
		firecracker,
		sparkles: "✨",
		balloon,
		tada,
		confetti_ball,
		tanabata_tree,
		bamboo,
		dolls,
		flags,
		wind_chime,
		rice_scene,
		red_envelope,
		ribbon,
		gift,
		reminder_ribbon,
		tickets,
		ticket,
		medal_military,
		trophy,
		medal_sports,
		"1st_place_medal": "🥇",
		"2nd_place_medal": "🥈",
		"3rd_place_medal": "🥉",
		soccer: "⚽",
		baseball: "⚾",
		softball,
		basketball,
		volleyball,
		football,
		rugby_football,
		tennis,
		flying_disc,
		bowling,
		cricket_game,
		field_hockey,
		ice_hockey,
		lacrosse,
		ping_pong,
		badminton,
		boxing_glove,
		martial_arts_uniform,
		goal_net,
		golf: "⛳",
		ice_skate,
		fishing_pole_and_fish,
		diving_mask,
		running_shirt_with_sash,
		ski,
		sled,
		curling_stone,
		dart,
		yo_yo,
		kite,
		"8ball": "🎱",
		crystal_ball,
		magic_wand,
		nazar_amulet,
		video_game,
		joystick,
		slot_machine,
		game_die,
		jigsaw,
		teddy_bear,
		pinata,
		nesting_dolls,
		spades,
		hearts,
		diamonds,
		clubs,
		chess_pawn,
		black_joker,
		mahjong,
		flower_playing_cards,
		performing_arts,
		framed_picture,
		art,
		thread,
		sewing_needle,
		yarn,
		knot,
		eyeglasses,
		dark_sunglasses,
		goggles,
		lab_coat,
		safety_vest,
		necktie,
		shirt,
		tshirt,
		jeans,
		scarf,
		gloves,
		coat,
		socks,
		dress,
		kimono,
		sari,
		one_piece_swimsuit,
		swim_brief,
		shorts,
		bikini,
		womans_clothes,
		purse,
		handbag,
		pouch,
		shopping,
		school_satchel,
		thong_sandal,
		mans_shoe,
		shoe,
		athletic_shoe,
		hiking_boot,
		flat_shoe,
		high_heel,
		sandal,
		ballet_shoes,
		boot,
		crown,
		womans_hat,
		tophat,
		mortar_board,
		billed_cap,
		military_helmet,
		rescue_worker_helmet,
		prayer_beads,
		lipstick,
		ring,
		gem,
		mute,
		speaker,
		sound,
		loud_sound,
		loudspeaker,
		mega,
		postal_horn,
		bell,
		no_bell,
		musical_score,
		musical_note,
		notes,
		studio_microphone,
		level_slider,
		control_knobs,
		microphone,
		headphones,
		radio,
		saxophone,
		accordion,
		guitar,
		musical_keyboard,
		trumpet,
		violin,
		banjo,
		drum,
		long_drum,
		iphone,
		calling,
		phone,
		telephone,
		telephone_receiver,
		pager,
		fax,
		battery,
		electric_plug,
		computer,
		desktop_computer,
		printer,
		keyboard,
		computer_mouse,
		trackball,
		minidisc,
		floppy_disk,
		cd,
		dvd,
		abacus,
		movie_camera,
		film_strip,
		film_projector,
		clapper,
		tv,
		camera,
		camera_flash,
		video_camera,
		vhs,
		mag,
		mag_right,
		candle,
		bulb,
		flashlight,
		izakaya_lantern,
		lantern,
		diya_lamp,
		notebook_with_decorative_cover,
		closed_book,
		book,
		open_book,
		green_book,
		blue_book,
		orange_book,
		books,
		notebook,
		ledger,
		page_with_curl,
		scroll,
		page_facing_up,
		newspaper,
		newspaper_roll,
		bookmark_tabs,
		bookmark,
		label: label$1,
		moneybag,
		coin,
		yen,
		dollar,
		euro,
		pound,
		money_with_wings,
		credit_card,
		receipt,
		chart,
		envelope,
		email,
		"e-mail": "📧",
		incoming_envelope,
		envelope_with_arrow,
		outbox_tray,
		inbox_tray,
		"package": "📦",
		mailbox,
		mailbox_closed,
		mailbox_with_mail,
		mailbox_with_no_mail,
		postbox,
		ballot_box,
		pencil2,
		black_nib,
		fountain_pen,
		pen,
		paintbrush,
		crayon,
		memo,
		pencil,
		briefcase,
		file_folder,
		open_file_folder,
		card_index_dividers,
		date,
		calendar,
		spiral_notepad,
		spiral_calendar,
		card_index,
		chart_with_upwards_trend,
		chart_with_downwards_trend,
		bar_chart,
		clipboard,
		pushpin,
		round_pushpin,
		paperclip,
		paperclips,
		straight_ruler,
		triangular_ruler,
		scissors,
		card_file_box,
		file_cabinet,
		wastebasket,
		lock,
		unlock,
		lock_with_ink_pen,
		closed_lock_with_key,
		key,
		old_key,
		hammer,
		axe,
		pick,
		hammer_and_pick,
		hammer_and_wrench,
		dagger,
		crossed_swords,
		gun,
		boomerang,
		bow_and_arrow,
		shield,
		carpentry_saw,
		wrench,
		screwdriver,
		nut_and_bolt,
		gear,
		clamp,
		balance_scale,
		probing_cane,
		link,
		chains,
		hook,
		toolbox,
		magnet,
		ladder,
		alembic,
		test_tube,
		petri_dish,
		dna,
		microscope,
		telescope,
		satellite,
		syringe,
		drop_of_blood,
		pill,
		adhesive_bandage,
		stethoscope,
		door,
		elevator,
		mirror,
		window,
		bed,
		couch_and_lamp,
		chair,
		toilet,
		plunger,
		shower,
		bathtub,
		mouse_trap,
		razor,
		lotion_bottle,
		safety_pin,
		broom,
		basket,
		roll_of_paper,
		bucket,
		soap,
		toothbrush,
		sponge,
		fire_extinguisher,
		shopping_cart,
		smoking,
		coffin,
		headstone,
		funeral_urn,
		moyai,
		placard,
		atm,
		put_litter_in_its_place,
		potable_water,
		wheelchair: "♿",
		mens,
		womens,
		restroom,
		baby_symbol,
		wc,
		passport_control,
		customs,
		baggage_claim,
		left_luggage,
		warning,
		children_crossing,
		no_entry: "⛔",
		no_entry_sign,
		no_bicycles,
		no_smoking,
		do_not_litter,
		"non-potable_water": "🚱",
		no_pedestrians,
		no_mobile_phones,
		underage,
		radioactive,
		biohazard,
		arrow_up,
		arrow_upper_right,
		arrow_right,
		arrow_lower_right,
		arrow_down,
		arrow_lower_left,
		arrow_left,
		arrow_upper_left,
		arrow_up_down,
		left_right_arrow,
		leftwards_arrow_with_hook,
		arrow_right_hook,
		arrow_heading_up,
		arrow_heading_down,
		arrows_clockwise,
		arrows_counterclockwise,
		back,
		end,
		on,
		soon,
		top,
		place_of_worship,
		atom_symbol,
		om,
		star_of_david,
		wheel_of_dharma,
		yin_yang,
		latin_cross,
		orthodox_cross,
		star_and_crescent,
		peace_symbol,
		menorah,
		six_pointed_star,
		aries: "♈",
		taurus: "♉",
		gemini: "♊",
		cancer: "♋",
		leo: "♌",
		virgo: "♍",
		libra: "♎",
		scorpius: "♏",
		sagittarius: "♐",
		capricorn: "♑",
		aquarius: "♒",
		pisces: "♓",
		ophiuchus: "⛎",
		twisted_rightwards_arrows,
		repeat,
		repeat_one,
		arrow_forward,
		fast_forward: "⏩",
		next_track_button,
		play_or_pause_button,
		arrow_backward,
		rewind: "⏪",
		previous_track_button,
		arrow_up_small,
		arrow_double_up: "⏫",
		arrow_down_small,
		arrow_double_down: "⏬",
		pause_button,
		stop_button,
		record_button,
		eject_button,
		cinema,
		low_brightness,
		high_brightness,
		signal_strength,
		vibration_mode,
		mobile_phone_off,
		female_sign,
		male_sign,
		transgender_symbol,
		heavy_multiplication_x,
		heavy_plus_sign: "➕",
		heavy_minus_sign: "➖",
		heavy_division_sign: "➗",
		infinity,
		bangbang,
		interrobang,
		question: "❓",
		grey_question: "❔",
		grey_exclamation: "❕",
		exclamation: "❗",
		heavy_exclamation_mark: "❗",
		wavy_dash,
		currency_exchange,
		heavy_dollar_sign,
		medical_symbol,
		recycle,
		fleur_de_lis,
		trident,
		name_badge,
		beginner,
		o: "⭕",
		white_check_mark: "✅",
		ballot_box_with_check,
		heavy_check_mark,
		x: "❌",
		negative_squared_cross_mark: "❎",
		curly_loop: "➰",
		loop: "➿",
		part_alternation_mark,
		eight_spoked_asterisk,
		eight_pointed_black_star,
		sparkle,
		copyright,
		registered,
		tm,
		hash,
		asterisk,
		zero,
		one,
		two,
		three,
		four,
		five,
		six,
		seven,
		eight,
		nine,
		keycap_ten,
		capital_abcd,
		abcd,
		symbols,
		abc,
		a,
		ab,
		b,
		cl,
		cool,
		free,
		information_source,
		id,
		m,
		"new": "🆕",
		ng,
		o2,
		ok,
		parking,
		sos,
		up,
		vs,
		koko,
		sa,
		ideograph_advantage,
		accept,
		congratulations,
		secret,
		u6e80,
		red_circle,
		orange_circle,
		yellow_circle,
		green_circle,
		large_blue_circle,
		purple_circle,
		brown_circle,
		black_circle: "⚫",
		white_circle: "⚪",
		red_square,
		orange_square,
		yellow_square,
		green_square,
		blue_square,
		purple_square,
		brown_square,
		black_large_square: "⬛",
		white_large_square: "⬜",
		black_medium_square,
		white_medium_square,
		black_medium_small_square: "◾",
		white_medium_small_square: "◽",
		black_small_square,
		white_small_square,
		large_orange_diamond,
		large_blue_diamond,
		small_orange_diamond,
		small_blue_diamond,
		small_red_triangle,
		small_red_triangle_down,
		diamond_shape_with_a_dot_inside,
		radio_button,
		white_square_button,
		black_square_button,
		checkered_flag,
		triangular_flag_on_post,
		crossed_flags,
		black_flag,
		white_flag,
		rainbow_flag,
		transgender_flag,
		pirate_flag,
		ascension_island,
		andorra,
		united_arab_emirates,
		afghanistan,
		antigua_barbuda,
		anguilla,
		albania,
		armenia,
		angola,
		antarctica,
		argentina,
		american_samoa,
		austria,
		australia,
		aruba,
		aland_islands,
		azerbaijan,
		bosnia_herzegovina,
		barbados,
		bangladesh,
		belgium,
		burkina_faso,
		bulgaria,
		bahrain,
		burundi,
		benin,
		st_barthelemy,
		bermuda,
		brunei,
		bolivia,
		caribbean_netherlands,
		brazil,
		bahamas,
		bhutan,
		bouvet_island,
		botswana,
		belarus,
		belize,
		canada,
		cocos_islands,
		congo_kinshasa,
		central_african_republic,
		congo_brazzaville,
		switzerland,
		cote_divoire,
		cook_islands,
		chile,
		cameroon,
		cn,
		colombia,
		clipperton_island,
		costa_rica,
		cuba,
		cape_verde,
		curacao,
		christmas_island,
		cyprus,
		czech_republic,
		de,
		diego_garcia,
		djibouti,
		denmark,
		dominica,
		dominican_republic,
		algeria,
		ceuta_melilla,
		ecuador,
		estonia,
		egypt,
		western_sahara,
		eritrea,
		es,
		ethiopia,
		eu,
		european_union,
		finland,
		fiji,
		falkland_islands,
		micronesia,
		faroe_islands,
		fr,
		gabon,
		gb,
		uk,
		grenada,
		georgia,
		french_guiana,
		guernsey,
		ghana,
		gibraltar,
		greenland,
		gambia,
		guinea,
		guadeloupe,
		equatorial_guinea,
		greece,
		south_georgia_south_sandwich_islands,
		guatemala,
		guam,
		guinea_bissau,
		guyana,
		hong_kong,
		heard_mcdonald_islands,
		honduras,
		croatia,
		haiti,
		hungary,
		canary_islands,
		indonesia,
		ireland,
		israel,
		isle_of_man,
		india,
		british_indian_ocean_territory,
		iraq,
		iran,
		iceland,
		it,
		jersey,
		jamaica,
		jordan,
		jp,
		kenya,
		kyrgyzstan,
		cambodia,
		kiribati,
		comoros,
		st_kitts_nevis,
		north_korea,
		kr,
		kuwait,
		cayman_islands,
		kazakhstan,
		laos,
		lebanon,
		st_lucia,
		liechtenstein,
		sri_lanka,
		liberia,
		lesotho,
		lithuania,
		luxembourg,
		latvia,
		libya,
		morocco,
		monaco,
		moldova,
		montenegro,
		st_martin,
		madagascar,
		marshall_islands,
		macedonia,
		mali,
		myanmar,
		mongolia,
		macau,
		northern_mariana_islands,
		martinique,
		mauritania,
		montserrat,
		malta,
		mauritius,
		maldives,
		malawi,
		mexico,
		malaysia,
		mozambique,
		namibia,
		new_caledonia,
		niger,
		norfolk_island,
		nigeria,
		nicaragua,
		netherlands,
		norway,
		nepal,
		nauru,
		niue,
		new_zealand,
		oman,
		panama,
		peru,
		french_polynesia,
		papua_new_guinea,
		philippines,
		pakistan,
		poland,
		st_pierre_miquelon,
		pitcairn_islands,
		puerto_rico,
		palestinian_territories,
		portugal,
		palau,
		paraguay,
		qatar,
		reunion,
		romania,
		serbia,
		ru,
		rwanda,
		saudi_arabia,
		solomon_islands,
		seychelles,
		sudan,
		sweden,
		singapore,
		st_helena,
		slovenia,
		svalbard_jan_mayen,
		slovakia,
		sierra_leone,
		san_marino,
		senegal,
		somalia,
		suriname,
		south_sudan,
		sao_tome_principe,
		el_salvador,
		sint_maarten,
		syria,
		swaziland,
		tristan_da_cunha,
		turks_caicos_islands,
		chad,
		french_southern_territories,
		togo,
		thailand,
		tajikistan,
		tokelau,
		timor_leste,
		turkmenistan,
		tunisia,
		tonga,
		tr,
		trinidad_tobago,
		tuvalu,
		taiwan,
		tanzania,
		ukraine,
		uganda,
		us_outlying_islands,
		united_nations,
		us,
		uruguay,
		uzbekistan,
		vatican_city,
		st_vincent_grenadines,
		venezuela,
		british_virgin_islands,
		us_virgin_islands,
		vietnam,
		vanuatu,
		wallis_futuna,
		samoa,
		kosovo,
		yemen,
		mayotte,
		south_africa,
		zambia,
		zimbabwe,
		england,
		scotland,
		wales
	};
}));
//#endregion
//#region ../../../node_modules/.pnpm/markdown-it-emoji@2.0.2/node_modules/markdown-it-emoji/lib/data/shortcuts.js
var require_shortcuts = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = {
		angry: [">:(", ">:-("],
		blush: [":\")", ":-\")"],
		broken_heart: ["</3", "<\\3"],
		confused: [":/", ":-/"],
		cry: [
			":'(",
			":'-(",
			":,(",
			":,-("
		],
		frowning: [":(", ":-("],
		heart: ["<3"],
		imp: ["]:(", "]:-("],
		innocent: [
			"o:)",
			"O:)",
			"o:-)",
			"O:-)",
			"0:)",
			"0:-)"
		],
		joy: [
			":')",
			":'-)",
			":,)",
			":,-)",
			":'D",
			":'-D",
			":,D",
			":,-D"
		],
		kissing: [":*", ":-*"],
		laughing: ["x-)", "X-)"],
		neutral_face: [":|", ":-|"],
		open_mouth: [
			":o",
			":-o",
			":O",
			":-O"
		],
		rage: [":@", ":-@"],
		smile: [":D", ":-D"],
		smiley: [":)", ":-)"],
		smiling_imp: ["]:)", "]:-)"],
		sob: [
			":,'(",
			":,'-(",
			";(",
			";-("
		],
		stuck_out_tongue: [":P", ":-P"],
		sunglasses: ["8-)", "B-)"],
		sweat: [",:(", ",:-("],
		sweat_smile: [",:)", ",:-)"],
		unamused: [
			":s",
			":-S",
			":z",
			":-Z",
			":$",
			":-$"
		],
		wink: [";)", ";-)"]
	};
}));
//#endregion
//#region ../../../node_modules/.pnpm/markdown-it-emoji@2.0.2/node_modules/markdown-it-emoji/lib/render.js
var require_render = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function emoji_html(tokens, idx) {
		return tokens[idx].content;
	};
}));
//#endregion
//#region ../../../node_modules/.pnpm/markdown-it-emoji@2.0.2/node_modules/markdown-it-emoji/lib/replace.js
var require_replace = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function create_rule(md, emojies, shortcuts, scanRE, replaceRE) {
		var arrayReplaceAt = md.utils.arrayReplaceAt, ucm = md.utils.lib.ucmicro, ZPCc = new RegExp([
			ucm.Z.source,
			ucm.P.source,
			ucm.Cc.source
		].join("|"));
		function splitTextToken(text, level, Token) {
			var token, last_pos = 0, nodes = [];
			text.replace(replaceRE, function(match, offset, src) {
				var emoji_name;
				if (shortcuts.hasOwnProperty(match)) {
					emoji_name = shortcuts[match];
					if (offset > 0 && !ZPCc.test(src[offset - 1])) return;
					if (offset + match.length < src.length && !ZPCc.test(src[offset + match.length])) return;
				} else emoji_name = match.slice(1, -1);
				if (offset > last_pos) {
					token = new Token("text", "", 0);
					token.content = text.slice(last_pos, offset);
					nodes.push(token);
				}
				token = new Token("emoji", "", 0);
				token.markup = emoji_name;
				token.content = emojies[emoji_name];
				nodes.push(token);
				last_pos = offset + match.length;
			});
			if (last_pos < text.length) {
				token = new Token("text", "", 0);
				token.content = text.slice(last_pos);
				nodes.push(token);
			}
			return nodes;
		}
		return function emoji_replace(state) {
			var i, j, l, tokens, token, blockTokens = state.tokens, autolinkLevel = 0;
			for (j = 0, l = blockTokens.length; j < l; j++) {
				if (blockTokens[j].type !== "inline") continue;
				tokens = blockTokens[j].children;
				for (i = tokens.length - 1; i >= 0; i--) {
					token = tokens[i];
					if (token.type === "link_open" || token.type === "link_close") {
						if (token.info === "auto") autolinkLevel -= token.nesting;
					}
					if (token.type === "text" && autolinkLevel === 0 && scanRE.test(token.content)) blockTokens[j].children = tokens = arrayReplaceAt(tokens, i, splitTextToken(token.content, token.level, state.Token));
				}
			}
		};
	};
}));
//#endregion
//#region ../../../node_modules/.pnpm/markdown-it-emoji@2.0.2/node_modules/markdown-it-emoji/lib/normalize_opts.js
var require_normalize_opts = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function quoteRE(str) {
		return str.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
	}
	module.exports = function normalize_opts(options) {
		var emojies = options.defs, shortcuts;
		if (options.enabled.length) emojies = Object.keys(emojies).reduce(function(acc, key) {
			if (options.enabled.indexOf(key) >= 0) acc[key] = emojies[key];
			return acc;
		}, {});
		shortcuts = Object.keys(options.shortcuts).reduce(function(acc, key) {
			if (!emojies[key]) return acc;
			if (Array.isArray(options.shortcuts[key])) {
				options.shortcuts[key].forEach(function(alias) {
					acc[alias] = key;
				});
				return acc;
			}
			acc[options.shortcuts[key]] = key;
			return acc;
		}, {});
		var keys = Object.keys(emojies), names;
		if (keys.length === 0) names = "^$";
		else names = keys.map(function(name) {
			return ":" + name + ":";
		}).concat(Object.keys(shortcuts)).sort().reverse().map(function(name) {
			return quoteRE(name);
		}).join("|");
		var scanRE = RegExp(names);
		var replaceRE = RegExp(names, "g");
		return {
			defs: emojies,
			shortcuts,
			scanRE,
			replaceRE
		};
	};
}));
//#endregion
//#region ../../../node_modules/.pnpm/markdown-it-emoji@2.0.2/node_modules/markdown-it-emoji/bare.js
var require_bare = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var emoji_html = require_render();
	var emoji_replace = require_replace();
	var normalize_opts = require_normalize_opts();
	module.exports = function emoji_plugin(md, options) {
		var opts = normalize_opts(md.utils.assign({}, {
			defs: {},
			shortcuts: {},
			enabled: []
		}, options || {}));
		md.renderer.rules.emoji = emoji_html;
		md.core.ruler.after("linkify", "emoji", emoji_replace(md, opts.defs, opts.shortcuts, opts.scanRE, opts.replaceRE));
	};
}));
//#endregion
//#region ../../../node_modules/.pnpm/markdown-it-emoji@2.0.2/node_modules/markdown-it-emoji/index.js
var require_markdown_it_emoji = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var emojies_defs = (init_full(), __toCommonJS(full_exports).default);
	var emojies_shortcuts = require_shortcuts();
	var bare_emoji_plugin = require_bare();
	module.exports = function emoji_plugin(md, options) {
		var defaults = {
			defs: emojies_defs,
			shortcuts: emojies_shortcuts,
			enabled: []
		};
		bare_emoji_plugin(md, md.utils.assign({}, defaults, options || {}));
	};
}));
//#endregion
//#region ../../../node_modules/.pnpm/markdown-it-task-lists@2.1.1/node_modules/markdown-it-task-lists/index.js
var require_markdown_it_task_lists = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var disableCheckboxes = true;
	var useLabelWrapper = false;
	var useLabelAfter = false;
	module.exports = function(md, options) {
		if (options) {
			disableCheckboxes = !options.enabled;
			useLabelWrapper = !!options.label;
			useLabelAfter = !!options.labelAfter;
		}
		md.core.ruler.after("inline", "github-task-lists", function(state) {
			var tokens = state.tokens;
			for (var i = 2; i < tokens.length; i++) if (isTodoItem(tokens, i)) {
				todoify(tokens[i], state.Token);
				attrSet(tokens[i - 2], "class", "task-list-item" + (!disableCheckboxes ? " enabled" : ""));
				attrSet(tokens[parentToken(tokens, i - 2)], "class", "contains-task-list");
			}
		});
	};
	function attrSet(token, name, value) {
		var index = token.attrIndex(name);
		var attr = [name, value];
		if (index < 0) token.attrPush(attr);
		else token.attrs[index] = attr;
	}
	function parentToken(tokens, index) {
		var targetLevel = tokens[index].level - 1;
		for (var i = index - 1; i >= 0; i--) if (tokens[i].level === targetLevel) return i;
		return -1;
	}
	function isTodoItem(tokens, index) {
		return isInline(tokens[index]) && isParagraph(tokens[index - 1]) && isListItem(tokens[index - 2]) && startsWithTodoMarkdown(tokens[index]);
	}
	function todoify(token, TokenConstructor) {
		token.children.unshift(makeCheckbox(token, TokenConstructor));
		token.children[1].content = token.children[1].content.slice(3);
		token.content = token.content.slice(3);
		if (useLabelWrapper) if (useLabelAfter) {
			token.children.pop();
			var id = "task-item-" + Math.ceil(Math.random() * (1e4 * 1e3) - 1e3);
			token.children[0].content = token.children[0].content.slice(0, -1) + " id=\"" + id + "\">";
			token.children.push(afterLabel(token.content, id, TokenConstructor));
		} else {
			token.children.unshift(beginLabel(TokenConstructor));
			token.children.push(endLabel(TokenConstructor));
		}
	}
	function makeCheckbox(token, TokenConstructor) {
		var checkbox = new TokenConstructor("html_inline", "", 0);
		var disabledAttr = disableCheckboxes ? " disabled=\"\" " : "";
		if (token.content.indexOf("[ ] ") === 0) checkbox.content = "<input class=\"task-list-item-checkbox\"" + disabledAttr + "type=\"checkbox\">";
		else if (token.content.indexOf("[x] ") === 0 || token.content.indexOf("[X] ") === 0) checkbox.content = "<input class=\"task-list-item-checkbox\" checked=\"\"" + disabledAttr + "type=\"checkbox\">";
		return checkbox;
	}
	function beginLabel(TokenConstructor) {
		var token = new TokenConstructor("html_inline", "", 0);
		token.content = "<label>";
		return token;
	}
	function endLabel(TokenConstructor) {
		var token = new TokenConstructor("html_inline", "", 0);
		token.content = "</label>";
		return token;
	}
	function afterLabel(content, id, TokenConstructor) {
		var token = new TokenConstructor("html_inline", "", 0);
		token.content = "<label class=\"task-list-item-label\" for=\"" + id + "\">" + content + "</label>";
		token.attrs = [{ for: id }];
		return token;
	}
	function isInline(token) {
		return token.type === "inline";
	}
	function isParagraph(token) {
		return token.type === "paragraph_open";
	}
	function isListItem(token) {
		return token.type === "list_item_open";
	}
	function startsWithTodoMarkdown(token) {
		return token.content.indexOf("[ ] ") === 0 || token.content.indexOf("[x] ") === 0 || token.content.indexOf("[X] ") === 0;
	}
}));
//#endregion
//#region ../@n8n/design-system/src/components/N8nMarkdown/youtube.ts
var YOUTUBE_TAG_REGEX = /@\[youtube]\(([A-Za-z0-9_-]{11})\)/im;
var YOUTUBE_EMBED_SRC_REGEX = /^https:\/\/(?:www\.)?(youtube\.com|youtube-nocookie\.com)\/embed\/([A-Za-z0-9_-]{11})$/i;
var EMBED_FRAME_PERMISSIONS = [
	"accelerometer",
	"autoplay",
	"clipboard-write",
	"encrypted-media",
	"gyroscope",
	"picture-in-picture",
	"web-share",
	"fullscreen"
];
var YOUTUBE_NOCOOKIE_URL = "https://www.youtube-nocookie.com/embed/";
var YOUTUBE_STANDARD_URL = "https://www.youtube.com/embed/";
var markdownYoutubeEmbed = (md, options) => {
	const opts = {
		width: "100%",
		title: "YouTube video player",
		nocookie: true,
		...options
	};
	const parser = (state, silent) => {
		const { pos, src } = state;
		if (src.charCodeAt(pos) !== 64) return false;
		const match = YOUTUBE_TAG_REGEX.exec(src.slice(pos));
		if (!match) return false;
		if (!silent) {
			const token = state.push("youtube_embed", "", 0);
			token.meta = { videoId: match[1] };
		}
		state.pos += match[0].length;
		return true;
	};
	const youtubeUrl = opts.nocookie ? YOUTUBE_NOCOOKIE_URL : YOUTUBE_STANDARD_URL;
	md.inline.ruler.before("link", "youtube_embed", parser);
	md.renderer.rules.youtube_embed = (tokens, idx) => {
		const { videoId } = tokens[idx].meta;
		return `<iframe ${[
			serializeAttr("iframe", "width", `${opts.width}`),
			...opts.height ? [serializeAttr("iframe", "height", `${opts.height}`)] : [],
			serializeAttr("iframe", "src", `${youtubeUrl}${videoId}`),
			serializeAttr("iframe", "title", md.utils.escapeHtml(opts.title)),
			serializeAttr("iframe", "frameborder", "0"),
			serializeAttr("iframe", "allow", EMBED_FRAME_PERMISSIONS.join("; ")),
			serializeAttr("iframe", "referrerpolicy", "strict-origin-when-cross-origin")
		].join(" ")}></iframe>`;
	};
};
//#endregion
//#region ../@n8n/design-system/src/components/N8nMarkdown/Markdown.vue?vue&type=script&setup=true&lang.ts
var import_markdown_it = /* @__PURE__ */ __toESM(require_markdown_it(), 1);
var import_markdown_it_emoji = /* @__PURE__ */ __toESM(require_markdown_it_emoji(), 1);
var import_markdown_it_link_attributes = /* @__PURE__ */ __toESM(require_markdown_it_link_attributes(), 1);
var import_markdown_it_task_lists = /* @__PURE__ */ __toESM(require_markdown_it_task_lists(), 1);
var _hoisted_1 = { class: "n8n-markdown" };
var _hoisted_2 = ["innerHTML"];
var Markdown_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Markdown",
	props: {
		content: { default: "" },
		withMultiBreaks: {
			type: Boolean,
			default: false
		},
		images: { default: () => [] },
		loading: {
			type: Boolean,
			default: false
		},
		loadingBlocks: { default: 2 },
		loadingRows: { default: 3 },
		theme: { default: "markdown" },
		options: { default: () => ({
			markdown: {
				html: false,
				linkify: true,
				typographer: true,
				breaks: true
			},
			linkAttributes: { attrs: {
				target: "_blank",
				rel: "noopener"
			} },
			tasklists: {
				enabled: true,
				label: true,
				labelAfter: false
			},
			youtube: {}
		}) }
	},
	emits: ["markdown-click", "update-content"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const editor = ref(void 0);
		const { options } = props;
		const md = new import_markdown_it.default(options.markdown).use(import_markdown_it_link_attributes.default, options.linkAttributes).use(import_markdown_it_emoji.default).use(import_markdown_it_task_lists.default, options.tasklists).use(markdownYoutubeEmbed, options.youtube);
		const { whiteList } = import_lib.default;
		const xssWhiteList = {
			...whiteList,
			label: ["class", "for"],
			iframe: [
				"width",
				"height",
				"src",
				"title",
				"frameborder",
				"allow",
				"referrerpolicy"
			]
		};
		const htmlContent = computed(() => {
			if (!props.content) return "";
			const imageUrls = {};
			if (props.images) props.images.forEach((image) => {
				if (!image) return;
				imageUrls[image.id] = image.url;
			});
			const fileIdRegex = /* @__PURE__ */ new RegExp("fileId:([0-9]+)");
			let contentToRender = props.content;
			if (props.withMultiBreaks) {
				const parseFence = (line) => {
					const match = /^\s*(`{3,}|~{3,})(.*)$/.exec(line);
					return match ? {
						char: match[1][0],
						length: match[1].length,
						rest: match[2]
					} : null;
				};
				const isBlockStart = (line) => /^\s*([-*+]|\d+\.)\s/.test(line) || /^#{1,6}\s/.test(line) || /^>/.test(line) || parseFence(line) !== null || /^---+\s*$/.test(line);
				const lines = contentToRender.split("\n");
				let openFence = null;
				contentToRender = lines.map((line, i) => {
					const fence = parseFence(line);
					if (openFence) {
						if (fence && fence.char === openFence.char && fence.length >= openFence.length && fence.rest.trim() === "") openFence = null;
						return line;
					}
					if (fence) {
						openFence = {
							char: fence.char,
							length: fence.length
						};
						return line;
					}
					if (line !== "") return line;
					const prev = lines[i - 1] ?? "";
					const next = lines[i + 1] ?? "";
					return isBlockStart(prev) || isBlockStart(next) ? "" : "&nbsp;";
				}).join("\n");
			}
			return (0, import_lib.default)(md.render(contentToRender), {
				onTagAttr(tag, name, value) {
					if (tag === "img" && name === "src") {
						if (value.match(fileIdRegex)) {
							const imageUrl = imageUrls[value.split("fileId:")[1]];
							if (!imageUrl) return "";
							return serializeAttr(tag, name, imageUrl);
						}
						const isStaticImageFile = value.split("#")[0].match(/\.(jpeg|jpg|gif|png|webp)$/) !== null && value.startsWith("/static/");
						if (!value.startsWith("https://") && !isStaticImageFile) return "";
					}
					if (tag === "iframe") {
						if (name === "src") if (YOUTUBE_EMBED_SRC_REGEX.test(value)) return serializeAttr(tag, name, value);
						else return "";
						return;
					}
				},
				onTag(tag, code) {
					if (tag === "img" && code.includes("alt=\"workflow-screenshot\"")) return "";
				},
				onIgnoreTag(tag, tagHTML) {
					if (tag === "input" && tagHTML.includes("type=\"checkbox\"")) return tagHTML;
				},
				whiteList: xssWhiteList
			});
		});
		const emit = __emit;
		const onClick = (event) => {
			let clickedLink = null;
			if (event.target instanceof HTMLAnchorElement) clickedLink = event.target;
			if (event.target instanceof HTMLElement && event.target.matches("a *")) {
				const parentLink = event.target.closest("a");
				if (parentLink) clickedLink = parentLink;
			}
			if (clickedLink) emit("markdown-click", clickedLink, event);
		};
		const onChange = async (event) => {
			if (event.target instanceof HTMLInputElement && event.target.type === "checkbox") {
				const checkboxes = editor.value?.querySelectorAll("input[type=\"checkbox\"]");
				if (checkboxes) {
					const index = Array.from(checkboxes).indexOf(event.target);
					if (index !== -1) onCheckboxChange(index);
				}
			}
		};
		const onMouseDown = (event) => {
			if (event.target instanceof HTMLInputElement) event.stopPropagation();
		};
		const onCheckboxChange = (index) => {
			const currentContent = props.content;
			if (!currentContent) return;
			emit("update-content", toggleCheckbox(currentContent, index));
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [!__props.loading ? (openBlock(), createElementBlock("div", {
				key: 0,
				ref_key: "editor",
				ref: editor,
				class: normalizeClass(_ctx.$style[__props.theme]),
				onClick,
				onMousedown: onMouseDown,
				onChange,
				innerHTML: htmlContent.value
			}, null, 42, _hoisted_2)) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.markdown)
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.loadingBlocks, (_, index) => {
				return openBlock(), createElementBlock("div", { key: index }, [createVNode(unref(N8nLoading_default), {
					loading: __props.loading,
					rows: __props.loadingRows,
					animated: "",
					variant: "p"
				}, null, 8, ["loading", "rows"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.spacer) }, null, 2)]);
			}), 128))], 2))]);
		};
	}
});
var Markdown_vue_vue_type_style_index_0_lang_module_default = {
	markdown: "_markdown_mnp5t_125",
	label: "_label_mnp5t_167",
	sticky: "_sticky_mnp5t_188",
	spacer: "_spacer_mnp5t_287"
};
//#endregion
//#region ../@n8n/design-system/src/components/N8nMarkdown/index.ts
var N8nMarkdown_default = /* @__PURE__ */ _plugin_vue_export_helper_default(Markdown_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": Markdown_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nMarkdown_default as t };

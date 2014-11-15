$(document).on("ready",inicio);
function inicio (){
	$("#inicio").on("mouseenter",mouseEnter);
	$("#tecnologia").on("mouseenter",mouseEnter);
	$("#ciencia").on("mouseenter",mouseEnter);
	$("#variedades").on("mouseenter",mouseEnter);
	$("#viber").on("mouseenter",mouseEnter);
	$("#rakuten").on("mouseenter",mouseEnter);
	$("#rakuten").on("mouseleave",mouseLeave);
	$("#red_5g").on("mouseenter",mouseEnter);
	$("#mudarse_correa").on("mouseenter",mouseEnter);
	$("#mudarse_correa").on("mouseleave",mouseLeave);
	$("#windows_xp").on("mouseenter",mouseEnter);
	$("#microsoft").on("mouseenter",mouseEnter);
	$("#microsoft").on("mouseleave",mouseLeave);
	$("#ropa_inteligente").on("mouseenter",mouseEnter);
	$("#en_el_catalogo").on("mouseenter",mouseEnter);
	$("#en_el_catalogo").on("mouseleave",mouseLeave);
	$("#descubrimientos").on("mouseenter",mouseEnter);
	$("#cientificos").on("mouseenter",mouseEnter);
	$("#cientificos").on("mouseleave",mouseLeave);
	$("#parque_yasuni").on("mouseenter",mouseEnter);
	$("#yasuni").on("mouseenter",mouseEnter);
	$("#yasuni").on("mouseleave",mouseLeave);
	$("#inodoro").on("mouseenter",mouseEnter);
	$("#inodoro_inteligente").on("mouseenter",mouseEnter);
	$("#inodoro_inteligente").on("mouseleave",mouseLeave);
	$("#celulas").on("mouseenter",mouseEnter);
	$("#celulas_inteligentes").on("mouseenter",mouseEnter);
	$("#celulas_inteligentes").on("mouseleave",mouseLeave);
	$("#cafe").on("mouseenter",mouseEnter);
	$("#cafe_ca").on("mouseenter",mouseEnter);
	$("#cafe_ca").on("mouseleave",mouseLeave);
	$("#polo").on("mouseenter",mouseEnter);
	$("#polo_pro").on("mouseenter",mouseEnter);
	$("#polo_pro").on("mouseleave",mouseLeave);
	$("#tecnologiaPotable").on("mouseenter",mouseEnter);
	$("#tecnologia_potable").on("mouseenter",mouseEnter);
	$("#tecnologia_potable").on("mouseleave",mouseLeave);
	$("#vuelo").on("mouseenter",mouseEnter);
	$("#vuelo_aves").on("mouseenter",mouseEnter);
	$("#vuelo_aves").on("mouseleave",mouseLeave);
}
function mouseEnter(e){
	var audio = $(this).context.dataset.audio;
	$("#"+audio)[0].play();
}
function mouseLeave(e){
	var audio = $(this).context.dataset.audio;
	$("#"+audio)[0].pause();
}


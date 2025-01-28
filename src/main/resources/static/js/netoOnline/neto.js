var OPERACION 		 = { BUSCA_EDOS_MCPIOS : 1,
				  	 	 BUSCA_SUCURSALES  : 2, 
				  		 BUSCA_DATOS_INIT  : 3,
				  		 BUSCA_DATOS_CEDIS : 4};

var esFiltroGeoActivo = false;
var tipoBusqueda = 1;
var BUSCADOR 		 = {EDO_MUNIC_CP : 0};
var listaSucursales  = null;
var cargaInicial     = true;
var banderaInicial   = true;
var busquedaCriterio = false;
var opcionesPoligonoRegion = [];//- poligonos de Regiones
var opcionesPoligonoCedis = [];
var listaMarcadores  = []; 
var marcadoresCEDIS  = [];
var listaMarcadoresCedis  = []; 
var marcadoresCEDISCedis  = [];
var extremosPoligono = new Array();
var extremosPoligonoCedis = new Array();
var upper=null;
var mapa;
var nombreRegiones = new Array();
var nombreZonas    = new Array();
var nombresCedis    = new Array();
var ultimoZoom     = 0;
var ultimasCoordenadas  = new Array(0,0); //-- Latitud y longitud para centrar el mapa
var etiquetasMarcadores = []; //-- Marcadores con etiqueta
var tipoVista = 0;
$(document).ready(function() {
	
	
	
	
});

function muestraDivFiltroGeografia() {
	if(esFiltroGeoActivo) {
		$("#cabeceroFiltroRegionesCedis").hide("slide", {direction: "right" }, 400);
		esFiltroGeoActivo = false;
	} else {
		$("#cabeceroFiltroRegionesCedis").show("slide", {direction: "right" }, 400);
		esFiltroGeoActivo = true;
	}
}

function initMaximizarMapa(){
	$("#maximizarMapa").click(function(){
		$(this).toggleClass("mapaMinimizado");
		if(!$(this).hasClass("mapaMinimizado")){
			$("#herramientas").css("display","none");
			$("#header").css("display","none");
			$("body").hide(0);
			$("body").css({"position":"absolute","left":"1px","top":"10px","width":"100%","height":"93%","float":"left","overflow-x":"hidden"});
			$("#Contenedor").css({"width":"100%", "height":"100%", "float":"left"});
	        $("#Bloque1").css({"width":"100%", "height":"100%","float":"left"});
	        $("#colDerecha").css({"width":"99%", "height":"100%", "float":"left"});
	        $("#listaRegiones").getNiceScroll().hide();
	        $(this).attr("src","imagenes/netoOnline/minimizar.png");
	        $(this).attr("title","Minimizar mapa");
	        $("body").show(400,function(){
	        	$('#googleMap').css("width","100%");
	        	var  w = "100%";
	        	if(!$("#listaRegiones").is(':visible')){
	        		w = "+=190";
	        	}
	        	$('#googleMap').width(w).gmap3({trigger:"resize"});
	        	hacerZoomMapa(ultimasCoordenadas[0], ultimasCoordenadas[1], ultimoZoom+1);
	        	$("#listaRegiones").css("height","350px");
	        	$("#listaRegiones").getNiceScroll().resize();
	        });
	        $(".cedisArea").animate({top: '579px'});
		}
		else{
			$('body').removeAttr('style');
			$("body").hide(0);
			$(this).attr("src","imagenes/netoOnline/maximizar.png");
			$(this).attr("title","Mostrar mapa en pantalla completa");
			$("#Contenedor").removeAttr('style');
	        $("#Bloque1").removeAttr('style');
	        $("#colDerecha").removeAttr('style');
	        $("#herramientas").removeAttr('style');
	        $("#header").css("display","block");
	        $("body").show(400,"easeInOutCirc",function(){
	        	$("#listaRegiones").getNiceScroll().hide();
	        	$("#listaRegiones").css("height","470px");
	        	$('#googleMap').css("width","100%");
	        	var  w = "100%";
	        	if(!$("#listaRegiones").is(':visible')){
	        		w = "+=190";
	        	}
	        	$('#googleMap').width(w).gmap3({trigger:"resize"});
	        	hacerZoomMapa(ultimasCoordenadas[0], ultimasCoordenadas[1], ultimoZoom-1);
	        	$("#listaRegiones").getNiceScroll().resize();
	        	$("#listaRegiones").getNiceScroll().show();
	        });	
	        $(".cedisArea").animate({top: '639px'});
		}
	});
}
function initAccionesRegiones(){
	$(".toggle_region").unbind("click");
	$(".toggle_region").click(function(){
		var idRegion = parseInt(($(this).parent().attr("id").split("region"))[1]);
		
		if(!$(this).hasClass("r_Visible")){
			if(tipoVista == 1) {
				mostrarRegion( idRegion );
			} else {
				mostrarCedis(idRegion);
			}
		}
		else{
			if(tipoVista == 1) {
				ocultarRegion( idRegion );
			} else {
				ocultarCedis( idRegion );
			}
		}
	});
	
	$(".toggle_todas_region").unbind("click");
	$(".toggle_todas_region").click(function(){
		$(this).toggleClass("r_Visible");
		if($(this).hasClass("r_Visible")){
			$(this).attr("title","Ocultar todas las regiones");
			$(".toggle_region").addClass("r_Visible");
			$(this).children("img").attr("src","imagenes/netoOnline/mostrarRegion.png");
			if(tipoVista == 1) {
				mostrarTodasRegiones();
			} else {
				mostrarTodosCedis();
			}
		}
		else{
			$(this).attr("title","Mostrar todas las regiones");
			$(".toggle_region").removeClass("r_Visible");
			$(this).children("img").attr("src","imagenes/netoOnline/blank.png");
			if(tipoVista == 1) {
				ocultarTodasRegiones(-1);
			} else {
				ocultarTodosCedis(-1);
			}
		}
	});
	
	$(".toggle_todas_tiendas").unbind("click");
	$(".toggle_todas_tiendas").click(function(){
		$(this).toggleClass("mostrandoTiendas");
		if($(this).hasClass("mostrandoTiendas")){
			$(this).attr("title","Ocultar todas las tiendas");
			$(this).children("img").attr("src","imagenes/netoOnline/icoRegionTodas.png");
			if(tipoVista == 1) {
				mostrarTodasTiendasXRegion(-1);
			} else {
				mostrarTodasTiendasXRegionCedis(-1);
			}
		}
		else{
			$(this).attr("title","Mostrar todas las tiendas");
			$(this).children("img").attr("src","imagenes/netoOnline/icoRegionOff.png");
			$(".toggle_tiendas").attr("src","imagenes/netoOnline/icoRegionOff.png");
			if(tipoVista == 1) {
				ocultarTodasTiendasXRegion(-1);
			} else {
				ocultarTodasTiendasXRegionCedis(-1);
			}
		}
	});
}
function initMostrarOcultarTiendas(){
	$(".toggle_tiendas").click(function(){
		$(this).toggleClass("mostrandoTiendas");
		var idRegion = ($(this).attr("id").split("tiendas_region"))[1];
		var divInfoZonas = $("#verZonasRegion" + idRegion);		
		
		if($(this).hasClass("mostrandoTiendas")){
			if(tipoVista == 1) {
				mostrarTodasTiendasXRegion(idRegion, divInfoZonas);
			} else {
				mostrarTodasTiendasXRegionCedis(idRegion);
			}
		}
		else{
			$(this).attr("src","imagenes/netoOnline/icoRegionOff.png");
			if(tipoVista == 1) {
				ocultarTodasTiendasXRegion(idRegion, divInfoZonas);
			} else {
				ocultarTodasTiendasXRegionCedis(idRegion);
			}
		}
	});
}
function mostrarTodasTiendasXRegion(idRegion, divInfoZonas){
	if(idRegion == -1 ){
		for( var r in listaMarcadores){ //- Region
			var _divInfoZonas = $("#verZonasRegion" + r);
			$("#tiendas_region" + r).addClass("mostrandoTiendas");
			mostrarTiendas(r, _divInfoZonas,false);
		}
		return;
	}
	mostrarTiendas(idRegion, divInfoZonas, true);
}
function mostrarTodasTiendasXRegionCedis(idCedis){
	if(idCedis == -1 ){
		for( var r in listaMarcadoresCedis){ //- Region
			$("#tiendas_region" + r).addClass("mostrandoTiendas");
			mostrarTiendasCedis(r,false);
		}
		return;
	}
	mostrarTiendasCedis(idCedis, true);
}
function mostrarTiendas(idRegion, divInfoZonas, setAnimation){
	$("#tiendas_region" + idRegion).attr("src","imagenes/netoOnline/icoRegion" + idRegion + ".png");
	$("#tiendas_region" + idRegion).attr("title","Ocultar tiendas de la región");
	for( var z in listaMarcadores[idRegion]){ //- Zona
		for( var t in listaMarcadores[idRegion][z]){ //- Tienda
			if(!$(divInfoZonas).hasClass("menosInfo")){
				listaMarcadores[idRegion][z][t].setMap(mapa);
				if(setAnimation){
					listaMarcadores[idRegion][z][t].setAnimation(google.maps.Animation.DROP);
				}
				listaMarcadores[idRegion][z][t].setMap(mapa);
			}
			else{
				etiquetasMarcadores[idRegion][z][t].setMap(mapa);
			}
			
		}
	}
}
function mostrarTiendasCedis(idCedis, setAnimation){
	$("#tiendas_region" + idCedis).attr("src","imagenes/netoOnline/icoRegion" + idCedis + ".png");
	$("#tiendas_region" + idCedis).attr("title","Ocultar tiendas de la región");
	for( var z in listaMarcadoresCedis[idCedis]){ //- Tiendas
		listaMarcadoresCedis[idCedis][z].setMap(mapa);
	}
}
function ocultarTodasTiendasXRegion(idRegion, divInfoZonas){
	if(idRegion == -1 ){
		for( var r in listaMarcadores){ //- Region
			var _divInfoZonas = $("#verZonasRegion" + r);
			$("#tiendas_region" + r).removeClass("mostrandoTiendas");
			ocultarTiendas(r, _divInfoZonas);
		}
		return;
	}
	ocultarTiendas(idRegion, divInfoZonas);
}
function ocultarTodasTiendasXRegionCedis(idCedis){
	if(idCedis == -1 ){
		for( var r in listaMarcadoresCedis){ //- Cedis
			$("#tiendas_region" + r).removeClass("mostrandoTiendas");
			ocultarTiendasCedis(r);
		}
		return;
	}
	ocultarTiendasCedis(idCedis);
}
function ocultarTiendas(idRegion, divInfoZonas){
	$("#tiendas_region" + idRegion).attr("title","Mostrar tiendas de la región");
	for( var z in listaMarcadores[idRegion]){ //- Zona
		for( var t in listaMarcadores[idRegion][z]){ //- Tienda
			if(!$(divInfoZonas).hasClass("menosInfo")){
				listaMarcadores[idRegion][z][t].setMap(null);
			}
			else{
				etiquetasMarcadores[idRegion][z][t].setMap(null);
			}
		}
	}
}
function ocultarTiendasCedis(idCedis){
	$("#tiendas_region" + idCedis).attr("title","Mostrar tiendas del cedis");
	for( var z in listaMarcadoresCedis[idCedis]){
		listaMarcadoresCedis[idCedis][z].setMap(null);
	}
}
function initAccionesZonas(){
	$(".infoZonas").click(function(){
		var idRegion = parseInt(($(this).attr("id").split("verZonasRegion"))[1]);
		if(!$(this).hasClass("menosInfo")){
			$(this).attr("title","Ocultar zonas");
			$(this).addClass("menosInfo");
			ocultarRegion(idRegion);
			mostrarTodasZonas(idRegion);
			etiquetarTiendasXZona( idRegion, $("#tiendas_region" + idRegion).hasClass("mostrandoTiendas") );
			$("#zonas_region" + idRegion).children(".zonas").children(".toggle_zona").attr("class","toggle_zona z_Visible");
			$("#zonas_region" + idRegion).show(500,"easeInOutCirc");
			var promedio = promedioCoordenadasLatLon(opcionesPoligonoRegion[idRegion]);
			hacerZoomMapa(promedio[0],promedio[1],promedio[2]);
		}
		else{
			$(this).removeClass("menosInfo");
			$(this).attr("title","Mostrar zonas");
			$("#zonas_region" + idRegion).hide(500,"easeInOutCirc");
			if($("#tiendas_region" + idRegion).hasClass("mostrandoTiendas")){
				eliminarEtiquetasXRegion(idRegion);
			}
			ocultarTodasZonas(idRegion);
			mostrarRegion(idRegion);
		}
	});
	initToggleZona();
	
}
function initToggleZona(){
	$(".toggle_zona").click(function(){
		$(this).toggleClass("z_Visible");
		$(this).toggleClass("z_NoVisible");
		var idRegion = parseInt(($(this).parent().parent().attr("id").split("zonas_region"))[1]);
		var idZona   = parseInt(($(this).parent().attr("id").split("zona"))[1]);
		if($(this).hasClass("z_Visible")){
			mostrarZona( idRegion, idZona );
		}
		else{
			ocultarZona( idRegion, idZona );
		}
	});
}

function initRegionesArea(){
	$(".regionHead").unbind( "click" );
	$(".regionHead").click(function(){
		
		if(tipoBusqueda == 2) {
			$(".cedisArea").animate({top: '430px'});
			$("#listaRegiones").animate({"top": '0px'});
			$("#mostrarTodos").animate({"margin-top": '0px'});
			buscarSucursales(localizacion);
			$(".regionesArea").css("background", "#F15C22");
			$(".cedisArea").css("background", "#BDBDBD");
			
			tipoBusqueda = 1;
		}
		
		/*
		if(!$("#listaRegiones").is(':visible')){
			$(".regionHead").css("background","url('imagenes/netoOnline/flechaProductosDown.png') 8% 88%  no-repeat");
			$("#googleMap").animate({width:"100%"},100,"easeInOutExpo",function(){
				$('#googleMap').width("100%").gmap3({trigger:"resize"});
				$("#todasRegiones").show(300,"easeInOutCirc");
				$("#listaRegiones").show(400,"easeInOutCirc");
				$(".cedisArea").show(400,"easeInOutCirc");
			});
			
		} else {
			$(".regionHead").css("background","url('imagenes/netoOnline/flechaProductosRight.png') 8% 88%  no-repeat");
			$("#todasRegiones").hide(300,"easeInOutCirc");
			$("#listaRegiones").hide(500,"easeInOutCirc");
			$(".cedisArea").hide(500,"easeInOutCirc");
			w = parseFloat(($('#googleMap').css("width").split("px"))[0]);
			$("#googleMap").animate({width:(w+190)},600,"easeInOutExpo",function(){
				$('#googleMap').width((w+190)).gmap3({trigger:"resize"});
				
			});
		}	*/
	});
	$(".cedisHead").unbind( "click" );
	$(".cedisHead").click(function(){
		var data = ["","","",""];
		var localizacion = {"data":data};
		busquedaCriterio = true;
		
		if(tipoBusqueda == 1) {
			$("#listaRegiones").html("<div style='width: 50%;margin: 0 auto;'><span style='color:#FF0000;font-family:Arial;'>Buscando...</span></div>");
			
			$(".cedisArea").animate({top: '36px'});
			//$(".cedisArea").animate({top: '181px'});
			$("#listaRegiones").animate({"top": '35px'});
			$("#mostrarTodos").animate({"margin-top": '35px'});
			buscaTiendasPorCedis(localizacion);
			$(".cedisArea").css("background", "#F15C22");
			$(".regionesArea").css("background", "#BDBDBD");
			
			tipoBusqueda = 2;
		}
		
		
		
		/*
		if($("#maximizarMapa").hasClass("mapaMinimizado")) {
			$(".cedisArea").animate({top: '181px'});
			$("#listaRegiones").animate({"margin-top": '3px'});
			$("#todasRegiones").animate({"margin-top": '35px'});
			buscaTiendasPorCedis(localizacion);
			if(tipoBusqueda == 1) {
				$(".cedisArea").animate({top: '639px'});
				buscarSucursales(localizacion);
			} else {
				$(".cedisArea").animate({top: '176px'});
				buscaTiendasPorCedis(localizacion);
			}
		} else {
			if($(".cedisArea").position().top <= 20) {
				$(".cedisArea").animate({top: '579px'});
				buscarSucursales(localizacion);
			} else {
				$(".cedisArea").animate({top: '-2px'});
				buscaTiendasPorCedis(localizacion);
			}
		}*/
	});
}
function initCedisArea(){
	$(".cedisHead").unbind( "click" );
	$(".cedisHead").click(function(){
		var data = ["","","",""];
		var localizacion = {"data":data};
		busquedaCriterio = true;
		
		$("#listaRegiones").html("<div style='width: 50%;margin: 0 auto;'><span style='color:#FF0000;font-family:Arial;'>Buscando...</span></div>");
		if($("#maximizarMapa").hasClass("mapaMinimizado")) {
			if($(".cedisArea").position().top == 87) {
				$(".cedisArea").animate({top: '639px'});
				buscarSucursales(localizacion);
			} else {
				$(".cedisArea").animate({top: '176px'});
				buscaTiendasPorCedis(localizacion);
			}
		} else {
			if($(".cedisArea").position().top <= 20) {
				$(".cedisArea").animate({top: '579px'});
				buscarSucursales(localizacion);
			} else {
				$(".cedisArea").animate({top: '-2px'});
				buscaTiendasPorCedis(localizacion);
			}
		}
	});
}

function initBusqueda(){
	setTimeout(function () {
		initBusquedaTime();
    }, 500);
}

function initBusquedaTime(){
	$("#busq_edo_mcpio").click(function(){
		$(this).select();
	});
	$("#buscarTiendas").click(function(){ 
		if($.trim($("#busq_edo_mcpio").val()) != ""){
			
		}
		else{
			 bloquearPantalla("<img src='imagenes/netoOnline/icoAlerta.png'><br/>Introducir texto para buscar", "error");
			 setTimeout($.unblockUI, 1500);
		}
	});
}

function inicializaDatosMapa(){
		parametros = "&accion=" + OPERACION.BUSCA_DATOS_INIT ;
		error = "";
		$.ajax({
		type : "POST",
		url : "DatosSucursales",
		data : parametros,
		success : function(respuesta) {
			/*
			if(respuesta[3] != "" ){
				$("#acceso_prov").click(function(){
					location.href = respuesta[3];
				});
			}*/
			if( respuesta[1] == "NULL" && respuesta[2] == "-1" && respuesta[0] != ""){
				$("#busq_edo_mcpio").val(respuesta[0]);
				respuesta[0]=respuesta[1]=respuesta[2]="";
			}else if(respuesta[2] != ""){
				$("#busq_edo_mcpio").val(respuesta[2]);
			}
			else if(respuesta[1] != ""){
				if(respuesta[0] != ""){
					$("#busq_edo_mcpio").val(respuesta[0] + ", " + respuesta[1]);
				}
				else{
					error = "Ingresar un Estado en la configuración inicial";
				}
			}
			else if(respuesta[0] != ""){
				$("#busq_edo_mcpio").val(respuesta[0]);
			}
			else{
				error="Revisar datos para inicializar Mapas";
			}
			
			if ( error!="" ){
				bloquearPantalla("<img src='imagenes/netoOnline/icoAlerta.png'><br/>" + error, "error");
				setTimeout($.unblockUI, 1500);
			}
	
			localizacion = {data:respuesta};
			buscarSucursales(localizacion);
			
		},
		error : function() {
				error="Ha ocurrido un error al realizar la petición al Servidor. Por favor volver a intentarlo.";
				bloquearPantalla("<img src='imagenes/netoOnline/icoAlerta.png'><br/>" + error, "error");
				setTimeout($.unblockUI, 1500);
		}
		});
		
}

//-- El 1er índice representa la región y el 2do representa la zona 
//--    Ejemplo: listaMarcadores[3][8] -> Marcadores de la región 3, zona 8

function crearMarcadores(datos){
	var regionId = datos.regionId;
	var zonaId   = datos.zonaId;
	var esTienda ; 
	datos.indicaTienda == 0?esTienda=false:esTienda=true;
	
	if(esTienda){
		if( listaMarcadores[regionId] == undefined){
			listaMarcadores[regionId] = [];			
		}
		
		if(listaMarcadores[regionId][zonaId] == undefined){
			listaMarcadores[regionId][zonaId] = [];
		}
	}else{
		if( marcadoresCEDIS[regionId] == undefined){
			marcadoresCEDIS[regionId] = [];
			
		}
	}
	
	var marcador = new google.maps.Marker({
						position: new google.maps.LatLng(datos.latitud,datos.longitud)
				   });
	
	marcador.setValues(datos);
	marcador.setMap(mapa);
	addListenersMarcador(marcador,marcador);
	if(esTienda){
		listaMarcadores[regionId][zonaId].push(marcador);
	}else{
		marcadoresCEDIS[regionId].push(marcador);
	}
	
	
}

function crearMarcadoresCedis(datos){
	var cedisId = datos.regionId;
	var esTienda ; 
	datos.indicaTienda == 0?esTienda=false:esTienda=true;
	
	if(esTienda){
		if( listaMarcadoresCedis[cedisId] == undefined){
			listaMarcadoresCedis[cedisId] = [];			
		}
	}else{
		if( marcadoresCEDISCedis[cedisId] == undefined){
			marcadoresCEDISCedis[cedisId] = [];
			
		}
	}
	
	var marcador = new google.maps.Marker({
						position: new google.maps.LatLng(datos.latitud,datos.longitud)
				   });
	
	marcador.setValues(datos);
	marcador.setMap(mapa);
	addListenersMarcador(marcador,marcador);
	if(esTienda){
		listaMarcadoresCedis[cedisId].push(marcador);
	}else{
		marcadoresCEDISCedis[cedisId].push(marcador);
	}
	
	
}

function setMarcadoresMapa(){
	for( var r in listaMarcadores){ //- Region
		for( var z in listaMarcadores[r]){ //- Zona
			for( var t in listaMarcadores[r][z]){ //- Tienda
				listaMarcadores[r][z][t].setIcon("imagenes/netoOnline/marcador_R" + r + ".png");
				listaMarcadores[r][z][t].setMap(mapa);
			}
		}
	}
}
function setMarcadoresMapaCedis(){
	for( var r in listaMarcadoresCedis){ //- Region
		for( var z in listaMarcadoresCedis[r]){ //- Zona
			listaMarcadoresCedis[r][z].setIcon("imagenes/netoOnline/marcador_R" + r + ".png");
			listaMarcadoresCedis[r][z].setMap(mapa);
		}
	}
}
function setMarcadoresCEDIS(){
	for( var r in marcadoresCEDIS){ //- Region
		for( var c in marcadoresCEDIS[r]){ //- CEDIS
			marcadoresCEDIS[r][c].setIcon("imagenes/netoOnline/CEDIS_R" + r + ".png");
			marcadoresCEDIS[r][c].setMap(mapa);
		}
	}
}
function setMarcadoresCEDISCedis(){
	for( var r in marcadoresCEDISCedis){ //- Region
		for( var c in marcadoresCEDISCedis[r]){ //- CEDIS
			marcadoresCEDISCedis[r][c].setIcon("imagenes/netoOnline/CEDIS_R" + r + ".png");
			marcadoresCEDISCedis[r][c].setMap(mapa);
		}
	}
}

function cambiarIcono(){
	marcadorCfgos.setIcon("imagenes/netoOnline/neto1.png");
}
function eliminarIcono(){
	marcadorCfgos.setMap(null);
}
function initMapa(_cLatitud, _cLongitud, _zoom){	
	 $("#googleMap").gmap3({ 
		map:{
			      options:{
			        center:[_cLatitud,_cLongitud],
			        zoom:_zoom,
			        mapTypeId: google.maps.MapTypeId.ROADMAP,
			        streetViewControlOptions: {
			            position: google.maps.ControlPosition.LEFT_CENTER
			        },
			        zoomControlOptions: {
			          position: google.maps.ControlPosition.LEFT_CENTER
			      	}
			      }
		}
    });
	
}

function crearBuscadorMapas(){
	var buscador = jQuery("#busq_edo_mcpio");
	buscador.autocomplete({
			delay: 100,
			minLength: 1,
			autoFocus: true,
			source: busca_edo_munic_cp,
			select:selecciona_elemento_busqueda
		});
}
function selecciona_elemento_busqueda(event, ui){
	var localizacion = ui.item;
	if(tipoVista == 1) {
		buscarSucursales(localizacion);
	} else {
		buscaTiendasPorCedis(localizacion);
	}
	$("#busq_edo_mcpio").select();
}
Number.prototype.toFixedDown = function(digits) {
	  var n = this - Math.pow(10, -digits)/2;
	  n += n / Math.pow(2, 53); 
	  return n.toFixed(digits);
};
function buscarSucursales(localizacion){
	tipoVista= 1;
	if(cargaInicial){
		listaSucursales = [];
		$("#listaRegiones").html("");
	}
	ocultarTodasTiendasXRegionCedis(-1);
	for(var i = 0; i < opcionesPoligonoCedis.length; i++) {
		if(opcionesPoligonoCedis[i] != undefined) {
			opcionesPoligonoCedis[i].setMap(null);
		}
	}
	var coordenadasPoligonoInicial = [];
	var latitudes 	= [];
	var longitudes 	= [];
	parametros = "&accion=" + OPERACION.BUSCA_SUCURSALES + 
				 "&estado=" + localizacion.data[0] + 
				 "&poblacion=" +  localizacion.data[1] + 
				 "&cp=" +  localizacion.data[2];
				 "&tiendaID=" +  localizacion.data[3];
				 
	bloquearPantalla("<img src='imagenes/netoOnline/loading.gif'><br/>Localizando sucursales...");

	$.ajax({
		type : "POST",
		url : "DatosSucursales",
		data : parametros,
	    dataType: "json",
		success : function(respuesta) {
			count=0;
			countMal = 0;
			for ( var i=0; i<respuesta.length; i++ ){
				
				if(localizacion.data[3] != undefined && localizacion.data[3] != "" && localizacion.data[3] > -1) {
					if(parseFloat(respuesta[i].latitud)>10 &&
							   parseFloat(respuesta[i].latitud)<30 && 
							   parseFloat(respuesta[i].longitud) > -130 && 
							   parseFloat(respuesta[i].longitud) < -80 && parseFloat(respuesta[i].tiendaId) == localizacion.data[3]) {
							   var regionID = parseInt(respuesta[i].regionId);
							   var esTienda ; 
							   respuesta[i].indicaTienda == 0?esTienda=false:esTienda=true;
							   
							   if(cargaInicial){
									var latitud  = parseFloat(respuesta[i].latitud);
									var longitud = parseFloat(respuesta[i].longitud);
									
									//- Crear marcadores
									crearMarcadores(respuesta[i]);
									
									//- Regiones
									if (coordenadasPoligonoInicial[regionID] == undefined){
										coordenadasPoligonoInicial[regionID] = [];
										nombreRegiones[regionID]    = [];
										nombreRegiones[regionID][1] = 0;
										nombreZonas[regionID]=[];
									}
									var nombreRegion = respuesta[i].region.toUpperCase();
									nombreRegiones[regionID][0] = nombreRegion;
									nombreRegiones[regionID][1]++;
									coordenadasPoligonoInicial[regionID].push(new google.maps.LatLng(latitud,longitud));
									
									//- Zonas
									var zona = new Zona(respuesta[i].zonaId,respuesta[i].zona);
									var idxZona = zonaEnArr(zona,nombreZonas[regionID]); 
									if(idxZona == -1 ){
										idxZona = respuesta[i].zonaId;
										nombreZonas[regionID][idxZona] = zona;
									}
									nombreZonas[regionID][idxZona].incrementarZona(new google.maps.LatLng(latitud,longitud));
								}
							    if(!esTienda) {continue;}
							   	latitudes[count]  = parseFloat(respuesta[i].latitud);
								longitudes[count] = parseFloat(respuesta[i].longitud);
								count++;
							}
				} else {
					if(parseFloat(respuesta[i].latitud)>10 &&
							   parseFloat(respuesta[i].latitud)<30 && 
							   parseFloat(respuesta[i].longitud) > -130 && 
							   parseFloat(respuesta[i].longitud) < -80){
							   var regionID = parseInt(respuesta[i].regionId);
							   var esTienda ; 
							   respuesta[i].indicaTienda == 0?esTienda=false:esTienda=true;
							   
							   if(cargaInicial){
									var latitud  = parseFloat(respuesta[i].latitud);
									var longitud = parseFloat(respuesta[i].longitud);
									
									//- Crear marcadores
									crearMarcadores(respuesta[i]);
									
									//- Regiones
									if (coordenadasPoligonoInicial[regionID] == undefined){
										coordenadasPoligonoInicial[regionID] = [];
										nombreRegiones[regionID]    = [];
										nombreRegiones[regionID][1] = 0;
										nombreZonas[regionID]=[];
									}
									var nombreRegion = respuesta[i].region.toUpperCase();
									nombreRegiones[regionID][0] = nombreRegion;
									nombreRegiones[regionID][1]++;
									coordenadasPoligonoInicial[regionID].push(new google.maps.LatLng(latitud,longitud));
									
									//- Zonas
									var zona = new Zona(respuesta[i].zonaId,respuesta[i].zona);
									var idxZona = zonaEnArr(zona,nombreZonas[regionID]); 
									if(idxZona == -1 ){
										idxZona = respuesta[i].zonaId;
										nombreZonas[regionID][idxZona] = zona;
									}
									nombreZonas[regionID][idxZona].incrementarZona(new google.maps.LatLng(latitud,longitud));
								}
							    if(!esTienda) {continue;}
							   	latitudes[count]  = parseFloat(respuesta[i].latitud);
								longitudes[count] = parseFloat(respuesta[i].longitud);
								count++;
							}
				}
			}
			//- Buscar poligono exterior para dibujar la región
			if(cargaInicial){
				calcularPoligonoExterior(coordenadasPoligonoInicial);
				calcularPoligonoExteriorZonas();
			}
			
			if (count>0){
				promedio = promedioCoordenadas(latitudes,longitudes);
				ultimasCoordenadas[0]=promedio[0];
				ultimasCoordenadas[1]=promedio[1];
				ultimoZoom=promedio[2];
				if(cargaInicial){
					initMapa(promedio[0], promedio[1], promedio[2]);
					mapa = $('#googleMap').gmap3("get");
					mostrarTodasRegiones();
					cargarRegiones();
					cargarZonas();
					setMarcadoresMapa();
					setMarcadoresCEDIS();
				}else{
					hacerZoomMapa(ultimasCoordenadas[0], ultimasCoordenadas[1], ultimoZoom);
				}
			}
			else{
				bloquearPantalla("<img src='imagenes/netoOnline/icoAlerta.png'><br/>No se encontraron sucursales!", "error");
				setTimeout($.unblockUI, 1500);
			}
		},
		complete: function(){
			jQuery.unblockUI();
			if(banderaInicial){
				$('#maximizarMapa').trigger('click');
			}
			cargaInicial = false;
			banderaInicial = false;
			busquedaCriterio = true;
		},
		error : function( jqXHR, textStatus, errorThrown ) {
			 error="Ha ocurrido un error al realizar la petición al Servidor. Por favor volver a intentarlo";
			 bloquearPantalla("<img src='imagenes/netoOnline/icoAlerta.png'><br/>" + error, "error");
			 setTimeout($.unblockUI, 1500);
		}
	});
}

function buscaTiendasPorCedis(localizacion){
	tipoVista = 2;
	if(busquedaCriterio){
		listaSucursales = [];
		$("#listaRegiones").html("");
	}
	ocultarTodasTiendasXRegion(-1);
	for(var i = 0; i < opcionesPoligonoRegion.length; i++) {
		if(opcionesPoligonoRegion[i] != undefined) {
			opcionesPoligonoRegion[i].setMap(null);
		}
	}
	var coordenadasPoligonoInicialCedis = [];
	var latitudesCedis 	= [];
	var longitudesCedis 	= [];
	parametros = "&accion=" + OPERACION.BUSCA_DATOS_CEDIS + 
				 "&estado=" + localizacion.data[0] + 
				 "&poblacion=" +  localizacion.data[1] + 
				 "&cp=" +  localizacion.data[2];
	bloquearPantalla("<img src='imagenes/netoOnline/loading.gif'><br/>Localizando sucursales...");

	$.ajax({
		type : "POST",
		url : "DatosSucursales",
		data : parametros,
	    dataType: "json",
		success : function(respuesta) {
			count=0;
			countMal = 0;
			for ( var i=0; i<respuesta.length; i++ ){
				if(parseFloat(respuesta[i].latitud)>10 &&
				   parseFloat(respuesta[i].latitud)<30 && 
				   parseFloat(respuesta[i].longitud) > -130 && 
				   parseFloat(respuesta[i].longitud) < -80){
				   var cedisID = parseInt(respuesta[i].regionId);
				   var esTienda ; 
				   respuesta[i].indicaTienda == 0?esTienda=false:esTienda=true;
				   
				   if(busquedaCriterio){
						var latitud  = parseFloat(respuesta[i].latitud);
						var longitud = parseFloat(respuesta[i].longitud);
						
						//- Crear marcadores
						crearMarcadoresCedis(respuesta[i]);
						
						//- Regiones
						if (coordenadasPoligonoInicialCedis[cedisID] == undefined){
							coordenadasPoligonoInicialCedis[cedisID] = [];
							nombresCedis[cedisID] = [];
							nombresCedis[cedisID][1] = 0;
						}
						var nombreCedis = respuesta[i].region.toUpperCase();
						nombresCedis[cedisID][0] = nombreCedis;
						nombresCedis[cedisID][1]++;
						coordenadasPoligonoInicialCedis[cedisID].push(new google.maps.LatLng(latitud,longitud));
					}
				    if(!esTienda) {continue;}
				   	latitudesCedis[count]  = parseFloat(respuesta[i].latitud);
					longitudesCedis[count] = parseFloat(respuesta[i].longitud);
					count++;
				}
			}
			//- Buscar poligono exterior para dibujar la región
			if(busquedaCriterio){
				calcularPoligonoExteriorCedis(coordenadasPoligonoInicialCedis);
			}
			
			if (count>0){
				promedio = promedioCoordenadas(latitudesCedis,longitudesCedis);
				ultimasCoordenadas[0]=promedio[0];
				ultimasCoordenadas[1]=promedio[1];
				ultimoZoom=promedio[2];
				if(busquedaCriterio){
					initMapa(promedio[0], promedio[1], promedio[2]);
					mapa = $('#googleMap').gmap3("get");
					mostrarTodosCedis();
					cargarCedis();
					setMarcadoresMapaCedis();
					setMarcadoresCEDISCedis();
				}else{
					hacerZoomMapa(ultimasCoordenadas[0], ultimasCoordenadas[1], ultimoZoom);
				}
			}
			else{
				bloquearPantalla("<img src='imagenes/netoOnline/icoAlerta.png'><br/>No se encontraron sucursales!", "error");
				setTimeout($.unblockUI, 1500);
			}
		},
		complete: function(){
			jQuery.unblockUI();
			/*if(cargaInicial){
				$('#maximizarMapa').trigger('click');
			}*/
			busquedaCriterio = false;
			cargaInicial = true;
		},
		error : function( jqXHR, textStatus, errorThrown ) {
			 error="Ha ocurrido un error al realizar la petición al Servidor. Por favor volver a intentarlo";
			 bloquearPantalla("<img src='imagenes/netoOnline/icoAlerta.png'><br/>" + error, "error");
			 setTimeout($.unblockUI, 1500);
		}
	});
}



function recortarString( str,cantCaracteres){
	if(str.length > cantCaracteres){
		str = str.substring(0,cantCaracteres) + "...";
	}
    return str;
}
function zonaEnArr(zona, arrZona){
	var zonaEncontrada = -1;
	for(var z in arrZona){
		if (arrZona[z].idZona == zona.idZona){
			zonaEncontrada = z;
			break;
		}
	}
	return zonaEncontrada;
}

function Zona(_idZona,_nombreZona){
	this.idZona        = _idZona;
	this.nombreZona    = toTitleCase(_nombreZona);
	this.cantidadZonas = 0;
	this.coordenadas   = [];
	this.poligonoExterno = "";
	
	this.incrementarZona = function(objLatLng) {
		this.cantidadZonas++;
		this.coordenadas.push(objLatLng);
	};
	
	this.toString = function() {
        return "[ idZona:" + this.idZona + ", nombreZona:" + this.nombreZona + ", cantidadZonas:" + this.cantidadZonas + "]";
    };
}

function toTitleCase(str) {
	str = str.toLowerCase();
	return str.replace(/(?:^|\s)\w/g, function(match) {
        return match.toUpperCase();
    });
}
function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}
function ocultarRegion( idRegion ){
	opcionesPoligonoRegion[idRegion].setMap(null);
	$("#region" + idRegion).children(".toggle_region").children("img").attr("src","imagenes/netoOnline/blank.png");
	$("#region" + idRegion).children(".toggle_region").removeClass("r_Visible");
	$("#region" + idRegion).children(".toggle_region").attr("title","Mostrar región");
}
function ocultarCedis( idCedis ){
	opcionesPoligonoCedis[idCedis].setMap(null);
	$("#region" + idCedis).children(".toggle_region").children("img").attr("src","imagenes/netoOnline/blank.png");
	$("#region" + idCedis).children(".toggle_region").removeClass("r_Visible");
	$("#region" + idCedis).children(".toggle_region").attr("title","Mostrar cedis");
}
function mostrarRegion( idRegion ){
	opcionesPoligonoRegion[idRegion].setMap(mapa);
	$("#region" + idRegion).children(".toggle_region").addClass("r_Visible");
	$("#region" + idRegion).children(".toggle_region").attr("title","Ocultar región");
	$("#region" + idRegion).children(".toggle_region").children("img").attr("src","imagenes/netoOnline/mostrarRegion.png");
}
function mostrarCedis( idCedis ){
	opcionesPoligonoCedis[idCedis].setMap(mapa);
	$("#region" + idCedis).children(".toggle_region").addClass("r_Visible");
	$("#region" + idCedis).children(".toggle_region").attr("title","Ocultar cedis");
	$("#region" + idCedis).children(".toggle_region").children("img").attr("src","imagenes/netoOnline/mostrarRegion.png");
}
var infoWindowRegion = new google.maps.InfoWindow();
var infoWindowCedis = new google.maps.InfoWindow();
function mostrarTodasRegiones(){
	for (var k in opcionesPoligonoRegion){
		mostrarRegion( k );
		if(cargaInicial){
			tooltipRegiones(k);	
		}
	}
}
function mostrarTodosCedis(){
	for (var k in opcionesPoligonoCedis){
		mostrarCedis( k );
		if(busquedaCriterio){
			tooltipCedis(k);	
		}
	}
}
function tooltipRegiones(idRegion) {
	google.maps.event.addListener(opcionesPoligonoRegion[idRegion], 'click', function(event) {
		  var contentString = "<div style='color:"+colors[idRegion-1]+"' class='poligonoRegionTooltip'>Región " + nombreRegiones[idRegion][0] + "</div>";
		  infoWindowRegion.setContent(contentString);
		  infoWindowRegion.setPosition(event.latLng);
		  infoWindowRegion.open(mapa);
    });
}
var ckCed = 0;
function tooltipCedis(idCedis) {
	google.maps.event.addListener(opcionesPoligonoCedis[idCedis], 'click', function(event) {
		  var contentString = "<div style='color:"+colors[ckCed]+"' class='poligonoRegionTooltip'>" + nombresCedis[idCedis][0] + "</div>";
		  ckCed++;
		  infoWindowCedis.setContent(contentString);
		  infoWindowCedis.setPosition(event.latLng);
		  infoWindowCedis.open(mapa);
    });
}

function ocultarTodasRegiones(idRegionExcluida){
	for (var k in opcionesPoligonoRegion){
		if(idRegionExcluida != k){
			ocultarRegion( k );
		}
	}
}
function ocultarTodosCedis(idRegionExcluida){
	for (var k in opcionesPoligonoCedis){
		if(idRegionExcluida != k){
			ocultarCedis( k );
		}
	}
}
function mostrarZona(regionId,zonaId){
	nombreZonas[regionId][zonaId].poligonoExterno.setMap(mapa);
	$("#zonas_region" + regionId).children("#zona" + zonaId).children(".toggle_zona").attr("title","Ocultar zona");
}
function ocultarZona(regionId,zonaId){
	nombreZonas[regionId][zonaId].poligonoExterno.setMap(null);
	$("#zonas_region" + regionId).children("#zona" + zonaId).children(".toggle_zona").attr("title","Mostrar zona");
}
function mostrarTodasZonas(regionId){
	for (var z in nombreZonas[regionId]){
		mostrarZona(regionId,z);
		tooltipZonas(regionId, z);
	}
}
var infoWindowZona = new google.maps.InfoWindow();;
function tooltipZonas(regionId, zonaId) {
	google.maps.event.addListener(nombreZonas[regionId][zonaId].poligonoExterno, 'click', function(event) {
		  var contentString = "<div style='color:"+colors[regionId-1]+
		                      "' class='poligonoZonaTooltip'>Región: " + nombreRegiones[regionId][0] + 
		                      " &raquo; Zona: " + nombreZonas[regionId][zonaId].nombreZona + "</div>";
		  infoWindowZona.setContent(contentString);
		  infoWindowZona.setPosition(event.latLng);
		  infoWindowZona.open(mapa);
    });
}
function etiquetarTiendasXZona( idRegion, mostrarTiendas ){
	var contador_zona = 0;
	for( var z in listaMarcadores[idRegion]){ //- Zona
		if(etiquetasMarcadores[idRegion]==undefined) etiquetasMarcadores[idRegion] = [];
		contador_zona ++;
		for( var t in listaMarcadores[idRegion][z]){ //- Tienda
			listaMarcadores[idRegion][z][t].setMap(null);
			if(etiquetasMarcadores[idRegion][z]==undefined) etiquetasMarcadores[idRegion][z] = [];
			if ( etiquetasMarcadores[idRegion][z][t] == undefined ){
				var marcador = new MarkerWithLabel({
					position: listaMarcadores[idRegion][z][t].getPosition(),
					icon:"imagenes/netoOnline/marcador_ZR" + idRegion + ".png",
					labelContent:  contador_zona ,
					labelAnchor: new google.maps.Point(10.5, 34),
					labelClass: "labels", // the CSS class for the label
					labelStyle: {color: colors[idRegion-1]}
				});
				addListenersMarcador(marcador, listaMarcadores[idRegion][z][t]);
				etiquetasMarcadores[idRegion][z][t] = marcador;
			}
			if(mostrarTiendas){
				etiquetasMarcadores[idRegion][z][t].setMap(mapa);
			}
		}
	}
}

function addListenersMarcador(marcadorListener, marcadorDatos){
	var calle = marcadorDatos.get("calle");
    var codigoPostal = marcadorDatos.get("codigoPostal");
    var nombreTda = marcadorDatos.get("nombreTda");
    var region = marcadorDatos.get("region");
    var regionId = parseInt(marcadorDatos.get("regionId"))-1;
    var telefono1 = marcadorDatos.get("telefono1");
    var tiendaId = marcadorDatos.get("tiendaId");
    var tipoTienda = marcadorDatos.get("tipoTienda");
    var zona = marcadorDatos.get("zona");
    var colonia = marcadorDatos.get("colonia");
    var estado = marcadorDatos.get("estado");
    var telefono2=marcadorDatos.get("telefono2");
    colonia == "" ? colonia = "": colonia = ", COLONIA " + colonia;
	google.maps.event.addListener(marcadorListener, 'click',  function(marker, event, context){
	    infowindow = $(this).gmap3({get:{name:"infowindow"}});	    
	    tooltip_content =  "<div style='width: 350px;font-size:13px;font-family: Verdana, Helvetica,sans-serif,Arial;border:1px solid #efb45c;border-right:none;border-top:none;border-left:none;'>" + 
								  "<div style='padding-bottom:8px;border:1px solid #efb45c;border-right:none;border-top:none;border-left:none;'>" +
									 "<span style='color:#ff6600;text-align:left;font-weight:bold;'>"+tipoTienda+" </span>" +
									 "<span style='color:#6a6a6a;text-align:left;font-weight:bold;'>"+nombreTda+"</span>" +
									 "<span style='color:#6a6a6a;text-align:left;padding-left:10px;'> </span>" +
									 "<span style='color:#6a6a6a;text-align:left;'>["+tiendaId+"]</span>" +
								  "</div>" +
								  "<div style='color:"+colors[regionId]+";' style='padding:15px 7px 0px 7px;color:#333;font-weight:bold;'>" + region + " &raquo; " + zona + "</div>"+
								  "<div style='padding:15px 7px 10px 7px;color:#333;'>" +
									 calle + 
									 colonia + 
									 ", " + estado + 
									 ", C.P. " + codigoPostal +
								  "</div>";
		  
		  if(telefono1 != undefined && telefono1 != ""){
			  tooltip_content +=  "<div style='color:#6a6a6a;padding:0px 7px 10px 7px;'>" + "Teléfono: " + telefono1;  
			  if(telefono2 != undefined && telefono2 != ""){
				tooltip_content +=      ", " + telefono2;  
			  }
			  tooltip_content +=  "</div>";
		  }			     
	      tooltip_content +=  "</div>";
	      
	      if (infowindow){
	    	  infowindow.open(mapa, marcadorListener);
	    	  infowindow.setContent(tooltip_content);
	      } else {
	    	  $("#googleMap").gmap3({ infowindow:{anchor:marcadorListener, options:{content: tooltip_content}}});
	      }
	});

	google.maps.event.addListener(marcadorListener, 'mouseout', function(){
	      var infowindow = $("#googleMap").gmap3({get:{name:"infowindow"}});
	      if (infowindow){
	        infowindow.close();
	      }
	});
}

function eliminarEtiquetasXRegion(idRegion){
	for( var z in listaMarcadores[idRegion]){ //- Zona
		for( var t in listaMarcadores[idRegion][z]){ //- Tienda
			listaMarcadores[idRegion][z][t].setMap(mapa);
			etiquetasMarcadores[idRegion][z][t].setMap(null);
		}
	}
}
function ocultarTodasZonas(regionId){
	//-- Ocultar Todas las Zonas (regionId==-1)
	if(regionId == -1){
		for(var r in nombreZonas){
			for (var z in nombreZonas[r]){
				nombreZonas[r][z].poligonoExterno.setMap(null);
			}
		}
		return;
	}
	
	for (var z in nombreZonas[regionId]){
		nombreZonas[regionId][z].poligonoExterno.setMap(null);
	}
}
function cargarRegiones(){
	
	
	regionesDivs= new Array(nombreRegiones.length);
	
	for (var k in nombreRegiones){
		var nombreRegion = nombreRegiones[k][0];
		var title = "";
		if(nombreRegion.length > 8){
			title = nombreRegion;
		}
		
		regionesDivs[k]=['<div class="region" id="region'+ k + '">' + 
		          					  '<div title="Ocultar región" class="toggle_region r_Visible" style="background:url(imagenes/netoOnline/icoBackRegion' + k + '.png) no-repeat;" >'+
		  					        '<img src="imagenes/netoOnline/mostrarRegion.png">' +  
		  					  '</div>'+
		  					  '<div class="nombre_region" >'+
		  					  		'<div class="txt_Region">' + 
		  					  			  '<img title="Ocultar tiendas de la región" id="tiendas_region' + k + '" class="toggle_tiendas mostrandoTiendas" src="imagenes/netoOnline/icoRegion' + k + '.png">' +
		  					  			  '<span title="' + title + '">' + recortarString(nombreRegion,12) + '</span>' + 
		  					  			  '<div title="Mostrar zonas" class="infoZonas masInfo"  id="verZonasRegion' + k + '"></div>'+
		  					  			  '<div class="cantidadTdasRegion" title="Cantidad de tiendas en la región">' + nombreRegiones[k][1] + '</div>'+
		  					  		'</div>'+
		  					  '</div>'+
		  			    '</div>'+
		  			    '<div class="zonasRegion" id="zonas_region' + k + '" >'+
		  			    '</div>',nombreRegiones[k][1]];
		
		

	}
	
	regionesDivs.sort(Comparator);
	
	for (var k in regionesDivs){
		div=regionesDivs[k];
	$("#listaRegiones").append(div[0]);
	}
	
	$("#listaRegiones").show(900);
	initRegionesArea();
	initAccionesRegiones();
	initMostrarOcultarTiendas();
}

function cargarCedis(){
	
	
	cedisDivs= new Array(nombresCedis.length);
	
	for (var k in nombresCedis){
		var nombreRegion = nombresCedis[k][0];
		var title = "";
		if(nombreRegion.length > 8){
			title = nombreRegion;
		}
		
		cedisDivs[k]=['<div class="region" id="region'+ k + '">' + 
		          					  '<div title="Ocultar región" class="toggle_region r_Visible" style="background:url(imagenes/netoOnline/icoBackRegion' + k + '.png) no-repeat;" >'+
		  					        '<img src="imagenes/netoOnline/mostrarRegion.png">' +  
		  					  '</div>'+
		  					  '<div class="nombre_region" >'+
		  					  		'<div class="txt_Region">' + 
		  					  			  '<img title="Ocultar tiendas de la región" id="tiendas_region' + k + '" class="toggle_tiendas mostrandoTiendas" src="imagenes/netoOnline/icoRegion' + k + '.png">' +
		  					  			  '<span title="' + title + '">' + recortarString(nombreRegion,12) + '</span>' + 
		  					  			  //'<div title="Mostrar zonas" class="infoZonas masInfo"  id="verZonasRegion' + k + '"></div>'+
		  					  			  '<div class="cantidadTdasRegion" title="Cantidad de tiendas en la región">' + nombresCedis[k][1] + '</div>'+
		  					  		'</div>'+
		  					  '</div>'+
		  			    '</div>'+
		  			    '<div class="zonasRegion" id="zonas_region' + k + '" >'+
		  			    '</div>',nombresCedis[k][1]];
		
		

	}
	
	cedisDivs.sort(Comparator);
	
	for (var k in cedisDivs){
		div=cedisDivs[k];
	$("#listaRegiones").append(div[0]);
	}
	
	$("#listaRegiones").show(900);
	initRegionesArea();
	initAccionesRegiones();
	initMostrarOcultarTiendas();
}

function Comparator(a,b){
	  if (a[1] < b[1]) return 1;
	  if (a[1] > b[1]) return -1;
	  return 0;
	  }

function cargarZonas(){
	for (var k in nombreZonas){
		var zonasOrdenadas = nombreZonas[k];//.sort(ordenarZonas);
		for (var z in zonasOrdenadas){
			var zonaID = parseInt(z);
			var nombreZona = zonaID + "." + zonasOrdenadas[z].nombreZona;
			var title = "";
			if(nombreZona.length > 12){
				title = nombreZona;
			}
			
			$("#zonas_region" + k).append(
					'<div class="zonas" id="zona' + z + '">' + 
					  '<div title="Ocultar zona" class="toggle_zona z_Visible"></div>' +
					  '<div class="nombre_zona" >' +
					  		'<div class="txt_Zona" title="'+title+'">' +
					  			recortarString(nombreZona,20) +
					  			'<div title="Cantidad de tiendas en la zona" class="txt_Cantidad"> '+ zonasOrdenadas[z].cantidadZonas +' </div>' +
					  		'</div>' +
					  '</div>' +
			     '</div>'
			);
		}
	}
	initAccionesZonas();
}
function ordenarZonas(z1, z2){
	return z1.nombreZona > z2.nombreZona ? 1 : -1;
}
function promedioCoordenadasLatLon(latLon){
	var latitudes = [];
	var longitudes = [];
	var numPaths = latLon.getPaths().getLength();
	for(var p = 0; p < numPaths; p++) {
		var path = latLon.getPaths().getAt(p);
		var numPuntos = path.getLength();
		for(var i=0; i < numPuntos; i++) {
	        var punto = path.getAt(i);
	        latitudes.push(punto.lat());
			longitudes.push(punto.lng());
		}
	}
	return promedioCoordenadas(latitudes,longitudes);
}

function promedioCoordenadas(latitudes,longitudes)
{	var total = latitudes.length;
	if( total == 1 ){
		return [latitudes[0],longitudes[0],15];
	}
		
    var X = 0;
    var Y = 0;
    var Z = 0;
    for ( var i=0; i < latitudes.length; i++ ){
    	lat = latitudes[i]  * Math.PI / 180;
    	lon = longitudes[i] * Math.PI / 180;
    	_x = Math.cos(lat) * Math.cos(lon);
    	_y = Math.cos(lat) * Math.sin(lon);
    	_z = Math.sin(lat);
    	X += _x;
        Y += _y;
        Z += _z;
    }
    
    X = X / total;
    Y = Y / total;
    Z = Z / total;
    
    var Lon = Math.atan2(Y, X)*180/Math.PI ;
    var Hyp = Math.sqrt(X * X + Y * Y);
    var Lat = Math.atan2(Z, Hyp)*180/Math.PI;
    
    latitudes  = sort(latitudes);  
    longitudes = sort(longitudes); 
    maxLat = latitudes[latitudes.length-1];
    minLat = latitudes[0];
    maxLng = longitudes[longitudes.length-1];
    minLng = longitudes[0];
    var w = new Array();
    if($('#googleMap').css("width") != undefined) {
    	w = $('#googleMap').css("width").split("px");
    } else {
    	w[0] = 0;
    }
    
    zoom = calcularZoom(minLng, maxLng, minLat, maxLat, parseInt(w[0]), 0);
    
    return[Lat ,Lon, zoom];
}
function calcularZoom(minLng, maxLng, minLat, maxLat, mapWidth, _delta){
	 	var GLOBE_WIDTH = 256; 
	    var west = minLng;
	    var east = maxLng;
	    var angle = east - west;
	    var north = maxLat;
	    var south = minLat;
	    var angle2 = north - south;
	    var delta = 0;
	   
	    if(angle2 > angle) {
	        angle = angle2;
	        delta = _delta;
	    }
	    if (angle < 0) {
	        angle += 360;
	    }
	    
	    return Math.floor(Math.log(mapWidth * 360 / angle / GLOBE_WIDTH) / Math.LN2) - 1 - delta;
}
function busca_edo_munic_cp(request, response_cb){
	var dataParameters = "&buscadorId=" + BUSCADOR.EDO_MUNIC_CP + "&txtBuscar=" + $("#busq_edo_mcpio").val();
	var arrResultado   = [];
	var contexto = { response_cb: response_cb };
	jQuery.ajax('Buscador', {
		type: 'POST',
		data: dataParameters,
		scriptCharsetString: 'UTF-8',
		dataType: 'json',
		success: function( respuesta ){
			if (respuesta.cantResultados == 0){
				$("#busq_edo_mcpio").addClass("sinDatos");
        	}
        	else{
        		$("#busq_edo_mcpio").removeClass("sinDatos");
        		var mcpio_edo_cp  = "";
            	var mcpio      = "";
            	var estado 	   = "";
            	var tienda 	   = "";
            	var cp   	   = "";
            	var valor_busq = "";
            	var resultados = respuesta.resultados;
            	
            	for ( var i=0; i<resultados.length; i++ ){
            		var tiendaID   = -1;
            		
        			for (var j=0; j<resultados[i].valoresBusqueda.length; j++){        				
        				
        				if (resultados[i].valoresBusqueda[j].campo == "estado"){
        					estado = mcpio_edo_cp = valor_busq = resultados[i].valoresBusqueda[j].Valor;
        				}
        				
        				if (resultados[i].valoresBusqueda[j].campo == "municipio")
        				{
        					mcpio = resultados[i].valoresBusqueda[j].Valor;
        					if ( mcpio != "" ){
        						mcpio_edo_cp = mcpio + ", " + estado ;
        						valor_busq   = mcpio;
        					}
        					
        				}
        				
        				if (resultados[i].valoresBusqueda[j].campo == "cp")
        				{
        					cp = resultados[i].valoresBusqueda[j].Valor;
        					if ( cp != "" ){
        						mcpio_edo_cp = "C\u00f3digo Postal: " + cp;
        						valor_busq   =  cp;
        					}
        					
        				}
        				
        				if (resultados[i].valoresBusqueda[j].campo == "tienda" )
        				{
        					tienda = resultados[i].valoresBusqueda[j].Valor;
        					if ( tienda != "" ){
        						mcpio_edo_cp = "Tienda: " + tienda;
        					}
        				}
        				
        				if (tienda != "" && resultados[i].valoresBusqueda[j].campo == "tiendaID" ){
        					tiendaID  = resultados[i].valoresBusqueda[j].Valor;
        					valor_busq  = tienda;
        					
        				}
        				
        				if( mcpio == "NULL" && cp == "-1" && estado != ""){
        					mcpio_edo_cp = valor_busq  = estado;
        					cp=estado=mcpio="";
        				}
        			}
        			arrResultado[i] = {label: mcpio_edo_cp, value: valor_busq, data:[estado,mcpio,cp,tiendaID]};
            	}
        	}
		},
		error: function(){},
		complete: function(){
			contexto.response_cb( arrResultado );
		}
	});
}
function hacerZoomMapa(_cLatitud, _cLongitud, _zoom){
	ultimasCoordenadas[0] = _cLatitud;
	ultimasCoordenadas[1] = _cLongitud;
	ultimoZoom            = _zoom;
	var latLng = new google.maps.LatLng (_cLatitud,_cLongitud);
	mapa.setCenter(latLng);
	mapa.setZoom(_zoom);
}

//- Ordenar coordenadas -
//-------------------------------------------------------------------------------------------------------------------------------
function ordenarCoordenadas(coordenadasXRegion){
	coordenadasXRegion.pop(); //- Quitar el ultimo elemento(es igual al primero)
	upper = upperLeft(coordenadasXRegion);
	coordenadasXRegion.sort(pointSort);
	coordenadasXRegion.push(coordenadasXRegion[0]); //- Agregar el primer elemento para cerrar el polígono
	var coordenadasPoligono = [];
	for (var punto in coordenadasXRegion){
		if(coordenadasXRegion[punto] != undefined){
			coordenadasPoligono.push(new google.maps.LatLng(parseFloat(coordenadasXRegion[punto].lat),parseFloat(coordenadasXRegion[punto].lon)));
		}
	}	
	return coordenadasPoligono;
}

function latLngEnArr(latLng, arreglo){
	var latLngEncontrada = -1;
	for(var l in arreglo){
		if( arreglo[l].lat() == undefined ) continue;
		if (arreglo[l].lat() == latLng.lat() && arreglo[l].lng() == latLng.lng()){
			latLngEncontrada = l;
			break;
		}
	}
	return latLngEncontrada;
}

//- Colores de las regiones
var colors = new Array("#ff0000","#ff7400","#009999","#00cc00","#4c10ae","#a69300","#21405f","#0000FF","#febf00","#01deff","#e401ff","#511b1b","#018aff","#9a0400","#71ae10");
function calcularPoligonoExteriorZonas(){
	for (var k in nombreZonas){
		for (var z in nombreZonas[k]){
			var coordenadasPoligonoInicial = nombreZonas[k][z].coordenadas;
			
			var poligonoExterior = [];
			if (coordenadasPoligonoInicial == undefined || coordenadasPoligonoInicial.length <= 0 ){
				continue;
			}
			
			var extremos = obtenerPuntosExtremos(coordenadasPoligonoInicial);
			extremosPoligono = new Array();
			obtenerPoligonoExteriorXPendiente(extremos[1],extremos[0],0,1,extremos[1]);
			
			
			for(var p in extremosPoligono){
				poligonoExterior.push(new Point(extremosPoligono[p].lat(), extremosPoligono[p].lng()));
			}
			
			var poligonoExteriorOrdenado = ordenarCoordenadas(poligonoExterior);
			nombreZonas[k][z].poligonoExterno = new google.maps.Polygon({
			      strokeWeight: 0,
			      fillColor: colors[k-1],
			      fillOpacity: 0.65,
			      paths:poligonoExteriorOrdenado
			});
		}
	}
}
function calcularPoligonoExterior(coordenadasPoligonoInicial){
	var poligonoExterior;
	for (var k in coordenadasPoligonoInicial){
		poligonoExterior = [];
		if (coordenadasPoligonoInicial[k] == undefined || coordenadasPoligonoInicial[k].length <= 0 ){
			continue;
		}
		var extremos = obtenerPuntosExtremos(coordenadasPoligonoInicial[k]);
		extremosPoligono = new Array();
		obtenerPoligonoExteriorXPendiente(extremos[1],extremos[0],0,1,extremos[1]);
		
		for(var p in extremosPoligono){
			poligonoExterior.push(new Point(extremosPoligono[p].lat(), extremosPoligono[p].lng()));
		}
		
		var poligonoExteriorOrdenado = ordenarCoordenadas(poligonoExterior);
		opcionesPoligonoRegion[k] = new google.maps.Polygon({
		      strokeWeight: 0,
		      fillColor: colors[k-1],
		      fillOpacity: 0.4,
		      paths:poligonoExteriorOrdenado
		});
	}
}
colors[2690]="#948304";
colors[2695]="#3A009E";
colors[2696]="#118987";
colors[2697]="#1AC604";
colors[3707]="#FD5D08";
function calcularPoligonoExteriorCedis(coordenadasPoligonoInicialCedis){
	var poligonoExterior;
	for (var k in coordenadasPoligonoInicialCedis){
		poligonoExterior = [];
		if (coordenadasPoligonoInicialCedis[k] == undefined || coordenadasPoligonoInicialCedis[k].length <= 0 ){
			continue;
		}
		var extremos = obtenerPuntosExtremos(coordenadasPoligonoInicialCedis[k]);
		extremosPoligono = new Array();
		obtenerPoligonoExteriorXPendiente(extremos[1],extremos[0],0,1,extremos[1]);
		
		for(var p in extremosPoligono){
			poligonoExterior.push(new Point(extremosPoligono[p].lat(), extremosPoligono[p].lng()));
		}
		
		var poligonoExteriorOrdenado = ordenarCoordenadas(poligonoExterior);
		opcionesPoligonoCedis[k] = new google.maps.Polygon({
		      strokeWeight: 0,
		      fillColor: colors[k],
		      fillOpacity: 0.4,
		      paths:poligonoExteriorOrdenado
		});
	}
}
//-- El método "obtenerPoligonoExteriorXPendiente" tiene un funcionamiento más eficiente
function obtenerPoligonoExterior(coordenadasXAnalizar, pathExtremos,z){
	var poligonoPuntosNoPertenecen = new Array();	
	var poligonoExtremoTmp =  new google.maps.Polygon({ paths: pathExtremos });
	
	for (var k in coordenadasXAnalizar){
		if (coordenadasXAnalizar[k] == undefined) continue;
		//- El punto no pertenece al poligono
		if( !poligonoExtremoTmp.containsLatLng(coordenadasXAnalizar[k]) ){
			poligonoPuntosNoPertenecen.push(new google.maps.LatLng(coordenadasXAnalizar[k].lat(),coordenadasXAnalizar[k].lng()));
		}
	}
	
	if(extremosPoligono.length==0 && poligonoPuntosNoPertenecen.length == 0){
		extremosPoligono = ordenarPuntos(pathExtremos);
		extremosPoligono.push(extremosPoligono[0]);
	}else if (poligonoPuntosNoPertenecen.length > 0 ){
		var extremo  = obtenerPuntosExtremos(poligonoPuntosNoPertenecen);
		//- Sacar el último elemento (es el mismo que el primero) 
		pathExtremos.pop();
		pathExtremos.push(extremo[0]);
		if(latLngEnArr(extremo[1],pathExtremos) == -1){
			pathExtremos.push(extremo[1]);
		}
		if(latLngEnArr(extremo[2],pathExtremos) == -1){
			pathExtremos.push(extremo[2]);
		}
		if(latLngEnArr(extremo[3],pathExtremos) == -1){
			pathExtremos.push(extremo[3]);
		}
		extremosPoligono = ordenarPuntos(pathExtremos);
		extremosPoligono.push(extremosPoligono[0]);
			
		obtenerPoligonoExterior(extremo[4], extremosPoligono);
	} 	
}
function obtenerPoligonoExteriorXPendiente(coordenadasXAnalizar, pathExtremos, idInicial, idFinal, todasCoordenadasXAnalizar){
	var poligonoPuntosNoPertenecen = new Array();
	var poligonoExtremoTmp =  new google.maps.Polygon({ paths: pathExtremos });
	var puntoInicial = new Point(pathExtremos[idInicial].lat(),pathExtremos[idInicial].lng());
	var puntoFinal   = new Point(pathExtremos[idFinal].lat(),pathExtremos[idFinal].lng());
	var pendiente = calcularPendiente( puntoInicial, puntoFinal);
	var x1 = Math.min(puntoInicial.lon,puntoFinal.lon);
	var x2 = Math.max(puntoInicial.lon,puntoFinal.lon);
	var y1 = Math.min(puntoInicial.lat,puntoFinal.lat);
	var y2 = Math.max(puntoInicial.lat,puntoFinal.lat);
	
	for (var k in coordenadasXAnalizar){
		if (coordenadasXAnalizar[k] == undefined) continue;
		var xPunto = coordenadasXAnalizar[k].lon;
		var yPunto = coordenadasXAnalizar[k].lat;
		if ( xPunto > x1 && xPunto < x2 && yPunto > y1 && yPunto < y2 ){
		   //- El punto no pertenece al poligono
		   if( !poligonoExtremoTmp.containsLatLng(new  google.maps.LatLng(yPunto,xPunto)) ){
			   poligonoPuntosNoPertenecen.push(new Point(yPunto,xPunto));
		   }
		}
	}
	//- Analizar los puntos exteriores
	var pendienteTMP   = pendiente;
	var coordenadasTMP = null;
	var indicePunto = -1;
	for (var p in poligonoPuntosNoPertenecen){
	   var pendientePunto = calcularPendiente( puntoInicial, poligonoPuntosNoPertenecen[p]);
	   if( pendiente < 0 ){ //- Buscar la pendiente menor
	   	if ( Math.abs(pendientePunto) <= Math.abs(pendienteTMP) ){
	   		pendienteTMP  = pendientePunto;
	   	   coordenadasTMP = poligonoPuntosNoPertenecen[p];
	   	   indicePunto    = p;
	   	}
	   }
	   else{ //- Buscar la pendiente mayor
	   	if ( pendientePunto >= pendienteTMP){
	   	   pendienteTMP  = pendientePunto;
	   	   coordenadasTMP = poligonoPuntosNoPertenecen[p];
	   	   indicePunto    = p;
	   	}
	   }
	}
    if (coordenadasTMP != null ){
       	//- Sacar el último elemento (es el mismo que el primero)
		pathExtremos.pop();
		pathExtremos.push(new google.maps.LatLng(coordenadasTMP.lat,coordenadasTMP.lon) );
		extremosPoligono = ordenarPuntos(pathExtremos);
		extremosPoligono.push(extremosPoligono[0]);
		poligonoPuntosNoPertenecen.splice(indicePunto,1);
		idInicial++; idFinal++;
		
		obtenerPoligonoExteriorXPendiente(poligonoPuntosNoPertenecen, extremosPoligono, idInicial, idFinal,todasCoordenadasXAnalizar);
    }else{
       	idInicial++; idFinal++;
       	if((pathExtremos.length-1) > idInicial ){
       		obtenerPoligonoExteriorXPendiente(todasCoordenadasXAnalizar, pathExtremos, idInicial, idFinal, todasCoordenadasXAnalizar);
       	}
       	else if(extremosPoligono.length==0 ){
       		pathExtremos.pop();
    		extremosPoligono = ordenarPuntos(pathExtremos);
    		extremosPoligono.push(extremosPoligono[0]);
    	}
    }
}
function calcularPendiente( punto1, punto2){
 	var dY = punto2.lat - punto1.lat;
        var dX = punto2.lon - punto1.lon;
        return dY / dX;
}

function ordenarPuntos(puntos){
	 var coordenadasXRegion = new Array();
	 for(var p in puntos){
		 coordenadasXRegion.push(new Point(puntos[p].lat(), puntos[p].lng()));
	 }
	 upper = upperLeft(coordenadasXRegion);
	 coordenadasXRegion.sort(pointSort);
	 
	 var coordenadas = new Array();
	 for (var p in coordenadasXRegion){
		 coordenadas.push(new google.maps.LatLng(coordenadasXRegion[p].getLat(),coordenadasXRegion[p].getLng()));
	 }
	 return coordenadas;
	 
}
function obtenerPuntosExtremos(poligonoPuntos) {
	var norte = sur = este = oeste = 0;
	var norteIdx = 0;
	var surIdx   = 2;
	var esteIdx  = 1;
	var oesteIdx = 3;
	var arrIdx = new Array(0, 0, 0, 0);
	for (var k in poligonoPuntos){
		if (poligonoPuntos[k] == undefined ){ continue; }
		if(norte == 0){
			norte = sur = este = oeste = poligonoPuntos[k];
		}
		
		var temp = poligonoPuntos[k];
		//- Norte
		if( temp.lat() > norte.lat() ) {
			norte = temp;
			arrIdx[norteIdx] = k;
        }
		//- Sur			
		if( temp.lat() < sur.lat() ) {
			sur = temp;
			arrIdx[surIdx] = k;
        }
		//- Este
		if( Math.abs(temp.lng()) < Math.abs(este.lng()) ) {
			este = temp;
			arrIdx[esteIdx] = k;
        }
		//- Oeste
		if( Math.abs(temp.lng()) > Math.abs(oeste.lng()) ) {
			oeste = temp;
			arrIdx[oesteIdx] = k;
        }
	}
	arrIdx = arregloNoRepetidos(arrIdx);
	
	var coordExtremos = new Array();
	for(var i=0; i<arrIdx.length; i++){
		coordExtremos.push(poligonoPuntos[arrIdx[i]]);
	}
	coordExtremos.push(coordExtremos[0]);
	
	for(var i=0; i<arrIdx.length; i++){
		poligonoPuntos.splice( arrIdx[i], 1, undefined );
	}
	
	var poligonoPuntosNoPertenecen = new Array();
	for(var np in poligonoPuntos){
		if(poligonoPuntos[np] != undefined){
			poligonoPuntosNoPertenecen.push(new Point(poligonoPuntos[np].lat(),poligonoPuntos[np].lng()));
		}
	}
	
	return new Array(coordExtremos, poligonoPuntosNoPertenecen);
}
function arregloNoRepetidos(arr){
	var arrNoRepetido = new Array();
	for(var i in arr){
		if (jQuery.inArray(arr[i], arrNoRepetido) == -1){
			arrNoRepetido.push(arr[i]);
		}
	}
	return arrNoRepetido;
};

function Point(lat, lon) {

    this.lat = lat;
    this.lon = lon;
    this.x = (lon + 180) * 360;
    this.y = (lat + 90) * 180;

    this.getLat=function() {
        return this.lat;
    };
    this.getLng=function() {
        return this.lon;
    };
    this.getX=function() {
        return this.x;
    };
    this.getY=function() {
        return this.y;
    };
    
    this.distance=function(that) {
        var dX = that.x - this.x;
        var dY = that.y - this.y;
        return Math.sqrt((dX*dX) + (dY*dY));
    };

    this.slope=function(that) {
        var dX = that.x - this.x;
        var dY = that.y - this.y;
        return dY / dX;
    };

    this.toString=function() {
        return "[" + this.lat + "," + this.lon + "]";
    };
}

function muestraCedisRegiones() {
	//if($("#cajaTitulo5FiltroZonas").position().top > 100) {
	//}
	$(".cedisArea").animate({top: '176px'});
}

// A custom sort function that sorts p1 and p2 based on their slope
// that is formed from the upper most point from the array of points.
function pointSort(p1, p2) {
    // Exclude the 'upper' point from the sort (which should come first).
    if(p1 == upper) return -1;
    if(p2 == upper) return 1;

    // Find the slopes of 'p1' and 'p2' when a line is 
    // drawn from those points through the 'upper' point.
    var m1 = upper.slope(p1);
    var m2 = upper.slope(p2);

    // 'p1' and 'p2' are on the same line towards 'upper'.
    if(m1 == m2) {
        // The point closest to 'upper' will come first.
        return p1.distance(upper) < p2.distance(upper) ? -1 : 1;
    }

    // If 'p1' is to the right of 'upper' and 'p2' is the the left.
    if(m1 <= 0 && m2 > 0) return -1;

    // If 'p1' is to the left of 'upper' and 'p2' is the the right.
    if(m1 > 0 && m2 <= 0) return 1;

    // It seems that both slopes are either positive, or negative.
    return m1 > m2 ? -1 : 1;
}

// Find the upper most point. In case of a tie, get the left most point.
function upperLeft(points) {
    var top = points[0];
    for(var i = 1; i < points.length; i++) {
        var temp = points[i];
        if(temp.y > top.y || (temp.y == top.y && temp.x < top.x)) {
            top = temp;
        }
    }
    return top;
}

if (!google.maps.Polygon.prototype.getBounds) {
    google.maps.Polygon.prototype.getBounds = function(latLng) {
      var bounds = new google.maps.LatLngBounds();
      var paths = this.getPaths();
      var path;
      for (var p = 0; p < paths.getLength(); p++) {
        path = paths.getAt(p);
        for (var i = 0; i < path.getLength(); i++) {
          bounds.extend(path.getAt(i));
        }
      }
      return bounds;
    };
}

google.maps.Polygon.prototype.containsLatLng = function(latLng) {
    var bounds = this.getBounds();
    if(bounds != null && !bounds.contains(latLng)) {
      return false;
    }
    var inPoly = false;
    var numPaths = this.getPaths().getLength();
    for(var p = 0; p < numPaths; p++) {
      var path = this.getPaths().getAt(p);
      var numPoints = path.getLength();
      var j = numPoints-1;
      for(var i=0; i < numPoints; i++) {
        var vertex1 = path.getAt(i);
        var vertex2 = path.getAt(j);

        if (vertex1.lng() < latLng.lng() && vertex2.lng() >= latLng.lng() || vertex2.lng() < latLng.lng() && vertex1.lng() >= latLng.lng())  {
          if (vertex1.lat() + (latLng.lng() - vertex1.lng()) / (vertex2.lng() - vertex1.lng()) * (vertex2.lat() - vertex1.lat()) < latLng.lat()) {
            inPoly = !inPoly;
          }
        }
        j = i;
      }
    }
    return inPoly;
  };

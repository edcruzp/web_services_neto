parametrosV4 = {
		'obtieneTiposEntrega'			: {pais: 1, region: -1, zona: -1, semana:  0, servicio: 0, anio: 0, tienda: -1, incHoy: 0},
		'obtieneTiposServicio'			: {pais: 1, region: -1, zona: -1, semana:  0, servicio: 0, anio: 0, tienda: -1, incHoy: 0},
		'obtieneProveedores'			: {pais: 1, region: -1, zona: -1, semana:  0, servicio: 0, anio: 0, tienda: -1, incHoy: 0}
};

var pub_key = "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" +
"7nixruXQqQIDAQAB";

var PUESTO_DIRECTOR_GENERAL		= 17;

var tipoPaginado = 0;
var arrayFechasCompleta = new Array();
var arrayFechas = new Array();
var arrayTiendasActual = new Array();
var arrayTiendasPasado = new Array();
var arrayTotales = new Array();
var arrayVentaObjetivoTot = new Array();
var arrayTotalesPasado = new Array();
var semanasContador;
var tipoConsultaGrafica = 1;
var bar;
var barMovil;

var FECHA_SISTEMA_HOY;


var arrayVentaObjetivo = new Array();
var arrayAnioPasado = new Array();
var arrayTiempoAire = new Array();
var arrayServicios = new Array();
var arrayImpuestos = new Array();
var arrayAnioActual = new Array();


var tipoCategoriaId = 0;
var idRegionBusqueda = 0;
var idZonaBusqueda = -1;
var idTiendaBusqueda = -1;
var nombreNodoBusqueda = "";
var zonaNombreBusqueda = "";
var tiendaNombreBusqueda = "";
var fechaInicialGrafica = "";
var fechaFinalGrafica = "";
var limiteInferiorFechas = new Date();
var limiteSuperiorFechas = new Date();
var regiones = new Array();
var zonas = new Array();
var tiendas = new Array();
var acumuladosVenta = new Array();
var objetoVenta = {};

var TipoEntrega = function(json)
{		
	this.tipoEntrega				    = parseArrayJSON(json.tipoEntrega, 'TipoEntregaBean');	
};

var TipoEntregaBean = function(json)
{
	this.idTipoEntrega	= json.idTipoEntrega;
	this.tipoEntrega	= json.tipoEntrega;
};

var TipoServicio = function(json)
{
	this.codigoError			= json.codigoError;
	this.mensajeError			= json.mensajeError;
	this.tipoServicio			= parseArrayJSON(json.tipoServicio, 'TipoServicioBean');
};

var TipoServicioBean = function(json)
{
	this.idTipoServicio = json.idTipoServicio;
	this.tipoServicio	= json.tipoServicio;
};

var Proveedor = function(json)
{
	this.codigoError			= json.codigoError;
	this.mensajeError			= json.mensajeError;
	this.proveedor			    = parseArrayJSON(json.proveedor, 'ProveedorBean');
};

var ProveedorBean = function(json)
{
	this.idProveedor 		= json.idProveedor;
	this.nombreProveedor	= json.nombreProveedor;
};

var VentaGeneral = function(json) 
{
	this.codigoError			= json.codigo;
	this.mensajeError			= json.mensaje;
	this.ventaPorUbicacion		= parseArrayJSON(json.ventaPorUbicacion, 'VentaGeneralBean');
	this.ventaGeneral			= parseArrayJSON(json.ventaGeneral, 'VentaGeneralBean');
	this.resumenObjetivos		= parseArrayJSON(json.resumenObjetivos, 'ResumenObjetivosBean');
};

var ResumenObjetivosBean = function(json)
{
	this.alto					= json.alto;
	this.bajo					= json.bajo;
	this.medio					= json.medio;
	this.nombre					= json.nombre;
};

var VentaXRegion = function(json)
{
	this.codigoError			= json.codigo;
	this.mensajeError			= json.mensaje;
	this.ventaXRegion			= parseArrayJSON(json.ventaXRegion, 'VentaGeneralBean');
};

var VentaGeneralBean = function(json)  
{
	this.paisId 			= json.paisId;
	this.regionId			= json.regionId;
	this.nombreRegion		= json.nombreRegion;
	this.zonaId				= json.zonaId;
	this.nombreZona			= json.nombreZona;
	this.tiendaId			= json.tiendaId;
	this.nombreTienda		= json.nombreTienda;
	this.montoNeto			= json.montoNeto;
	this.montoCedis			= json.montoCedis;
	this.montoDirectos		= json.montoDirectos;
	this.montoTiempoAire	= json.montoTiempoAire;
	this.montoServicios		= json.montoServicios;
	this.montoImpuestos		= json.montoImpuestos;
	this.porcentajeVentas	= json.porcentajeVentas;
	this.ventaObjetivo		= json.ventaObjetivo;
	this.ticketPromedio		= json.ticketPromedio;
	this.transacciones		= json.transacciones;
	this.numTiendas			= json.numTiendas;
	this.trafico			= json.trafico;
};

var VentaXDiaYSemana = function(json)
{
	this.codigoError			= json.codigo;
	this.mensajeError			= json.mensaje;
	this.ventaAnioActual		= parseArrayJSON(json.ventasAnioActual, 'VentaBean');
	this.ventaAnioPasado		= parseArrayJSON(json.ventasAnioPasado, 'VentaBean');
	this.ventasTotales			= parseArrayJSON(json.ventasTotales, 'VentaBean');
	this.ventasTotalesPasado	= parseArrayJSON(json.ventasTotalesPasado, 'VentaBean');
};

var VentaBean = function(json)
{
	this.fecha 					= json.fecha;
	this.montoGeneral 			= json.montoGeneral;
	this.montoGeneralCedis		= json.montoGeneralCedis;
	this.montoGeneralDirectos	= json.montoGeneralDirectos;
	this.montoServicios 		= json.montoServicios;
	this.montoImpuestos 		= json.montoImpuestos;
	this.montoTiempoAire		= json.montoTiempoAire;
	this.numeroTiendas 			= json.numeroTiendas;
	this.semana 				= json.semana;
	this.ventaObjetivo			= json.ventaObjetivo;
	this.anio					= json.anio;
	this.mes					= json.mes;
	this.transacciones			= json.transacciones;
};

var Tienda = function(json)
{
	this.codigoError			= json.codigo;
	this.mensajeError			= json.mensaje;
	this.tiendas				= parseArrayJSON(json.tiendas, 'TiendaBean');
};

var TiendaBean = function(json)
{
	this.idTienda				= json.idTienda;
	this.nombreTienda			= json.nombreTienda;
	this.idZona					= json.idZona;
	this.idRegion				= json.idRegion;
}

function parseArrayJSON(arr, varName) {
	if(typeof arr === "undefined")
		return new Array();
	if (arr instanceof Array) {
			for(var i = 0; i < arr.length; i++)
		arr[i] = eval('new ' + varName + '(arr[i])');		
	return arr;
	}
	else{
		return [eval('new ' + varName + '(arr)')];	
	}
};

var valTipoPpto = 1;
var auxValTipoPpto = 1;
var auxNombreZona= "";
$(document).ready(function() {
	
});

function fechaCorta() {
	var mes = '';
	var d = new Date(),
    month = (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();
	
	switch(month) {
	case 1: mes = "ENE";
			break;
	case 2: mes = "FEB";
	break;
	case 3: mes = "MAR";
	break;
	case 4: mes = "ABR";
	break;
	case 5: mes = "MAY";
	break;
	case 6: mes = "JUN";
	break;
	case 7: mes = "JUL";
	break;
	case 8: mes = "AGO";
	break;
	case 9: mes = "SEP";
	break;
	case 10: mes = "OCT";
	break;
	case 11: mes = "NOV";
	break;
	case 12: mes = "DEC";
	break;
	}

if (day.length < 2) day = '0' + day;

return [day, mes, year].join(' ');
}

function horaCorta() {
	var fecha = new Date();
	var hora = fecha.getHours();
	var minuto = fecha.getMinutes();
	var segundos = fecha.getSeconds();
	var meridiano = " AM";
	if(hora > 12){hora -= 12; meridiano = " PM";}
	if(hora == 12) {meridiano = " PM";}
	if (hora < 10) {hora = "0" + hora;}
	if (minuto < 10) {minuto = "0" + minuto;}
	var puntos = ":";
	return hora + puntos + minuto + puntos + segundos + meridiano
}

function inicializaFechayHoraEjecucion() {
	FECHA_SISTEMA_HOY = new Date();
	
	$("#fechaSistema").html(fechaCorta());
	$("#fechaSistemaMovil").html(fechaCorta());
	$("#horaSistema").html(horaCorta());
	$("#horaSistemaMovil").html(horaCorta());
}
function checkSession(){
	var params  = {pais: 1};
	obtenerDatos('activaSesion', responseSesion, errorSesion, params);
}

function actualizaFiltros() {
	var fechaHoySistema = new Date();
	fechaHoySistema.setHours(0, 0, 0, 0);
	FECHA_SISTEMA_HOY.setHours(0, 0, 0, 0);
	
	if(fechaHoySistema.getTime() > FECHA_SISTEMA_HOY.getTime()) {
		var FECHA_HOY = $.datepicker.formatDate('dd/mm/yy', new Date());
		
		$("#datepicker1").val(FECHA_HOY);
		$("#datepicker2").val(FECHA_HOY);
		fechaInicialGrafica = "";
		fechaFinalGrafica = "";
		obtieneFechas();
		
		FECHA_SISTEMA_HOY = new Date();
	}
}

function checkVentas() {
	actualizaFiltros();
	
	if(idTiendaBusqueda <= 0) {
		regiones = [];
		zonas = [];
		tiendas = [];
		
		obtieneVentas();
	}
	//$("#horaSistema").html(horaCorta());
	inicializaFechayHoraEjecucion();
}

function checkGrafica() {
	actualizaFiltros();
	obtieneGrafica();
}

function responseSesion() {
	//console.log("sesion validada");
}

function errorSesion() {
	//console.log("error al validar sesion");
}

function ejemploCifrado() {
	var pub_key = "MIIJ+DANBgkqhkiG9w0BAQEFAAOCCeUAMIIJ4AKCCdcJkIOYe5Zj+pOtpduf0fSy" +
"//oIpJ3pvGMwICbQU6UkI18KJAUSbDRQS1/P7K0f9EM7u1smSpQDi3XxeXKjj/" +
"xnPoVNcxWT5V4higsTIvLKUfZ5KZ/xUPK9TyCccCvluqgKV3IXmoE50KGtNvi5" +
"vkugHv8IOGRyk9J3PD1iJokFAjwEO+5qvGaJdCSbre0xEU61oZ7VayDX7rXEXef" +
"/kYnpofKfYpC6Vw34G/CKYHorwiS8aOVUsO4M/GquOGd5noJfjBhM6FpWKFzIQlxofofa" +
"yvNUMixCbnPjpWDRh6qqQEhv3DlWkkriQp+awYXy6v1A+OJgC2q+eT4V7RdNLn9F" +
"MoWkXz4hSsZd32bDPcfkmYjvvX3in2a+mrLPcPmkAlErQLWS7JU30V2MeNpPZ3iP" +
"AENWP/s+9Fl0/CgxNFC8JzBeG5E0yDbxPE39+YFuu420etJK3rOTzy/lBf+I72V4" +
"mr55PLeHVgZmBDkMKkqi0h4f15yDQL6tNX5X8eDHPU/cgKkSp0hlVPXU24onz2Zt" +
"So9gopmxpOYzSJlhlanuETqNf+ipoEcdI5pztEcxtAZ8quSuGlp/UFNTTkYppcIm" +
"lOh1Jyzvoant/59q4dpNPEbEZvzheqzdciYctVPMnNFZ7ZLWLTTdaHRuXP3DVRfF" +
"drdXVwq3iG/W/r7+zgX2FEPRWkupdDdzlOPzWzJjUNEDIIsvHh6degOj+3SLqKYa" +
"QWlS9+MNqsRi2PtE7mfQqoAc3rFf+7ynJbq3uVRXpQxtCZ7CamVIVPn8Ld7nqO9I" +
"cMv9BwBpefFtsNbS3RxO13y0MCYkpMqd1JfvuK01m/1+8X/XOZUOpGCecYhMHQes" +
"dATLLk055/ArKcq9x1gH4CTJH3rr/wMhdm03tffEpmaNbHZqW7YIwP8+0J2+yRp5" +
"SKIRzA0YZzHAvS8qeQefO6Z2RXP8XARp5Fll/xyg1Xucf/c4o2ts8IHo/p6V4Lnh" +
"0N7gio+Ro+cpzRnQ75R+gXXWbVxeyc9eFKiYAOn+NIoEBcQqnlVVgINA274gSMQK" +
"zXYyk+05wO79v5b5aQN86p7uc1zu8a+joD0Yo/e8TaRfgPsjAsGL6i9CnuFl13/x" +
"DjgkppuEUx3WV1vaY/WPUFAPY9FRf8xhOzf1jx+PHCT/nNuVcmA+CclGsQeLqzlL" +
"J/qj/KZtrGFlEBvvRrPzvCGNmILE9HmiaRKexVfRZZPFnNyiokWZri6y1K/P5RZk" +
"LEdaVCTP0CqkKfw7YbE2tUNqVtwNoWRlyD0ofdD4Hhk9OUTdTSKs6N2oXdvMVqf3" +
"mYgL16rwOzRqQbntfmcbCKHaW8ZwNBg4MjJLjpfpJQL+oIjGIA6eY/s/cN4OpTtI" +
"t6nfyR7Pe+qKv1N4HD285jVmPylPkLnvQq466ntFyc7rd7xNWl6OB6HeS0fKylFU" +
"0Ej2SGtWyixo/ZnlVVBYy6HTjCyT+ap2NGdNPkuscGjba7MGx3MOkDXwKiFtKRZi" +
"OC96MYMxZcP8XzVYSEih3JUlca/P1rjlVxYcaXt4Lu0zKdEuVQ78aCao2y22cna5" +
"cnwEWiSAGRt2qHpSOGVXk1UVP+Xb2o9Heu6lUjwXLZ21AKv9qbIyOJ/HdkxXofa0" +
"zjS1K2IqAxeHEgWkkKsMLO4ypCzN61fMQbapgtPzqKriNO1ZnFpKPIFN1BA18urE" +
"5/KaebOSUMhAFsq/PV/roQixuLN3GKKEoau1xnr+GRr6wIZzXKD6fdzEqCULXiz+" +
"aM0l9LObHsmJsqeLZjHRjJKC6W5u3rhBy4j4e2L8eL0XF8ZzrqwOnieo99caMhpV" +
"P66wsQYkfLXrdjETLk7VjIp6rxgjF7rol3UNtCBsGgjuGfz040ENWjRbA1u9iC70" +
"T6Ai0w1odyQs5efeFoDKFWiLVvjVxnuOkkh8ncDCUeW23GYamXe7RX9Kpfc/xPeq" +
"P8OQmBzD7584EVXG9QqcVPnxAauePijQGa6qRTTz/Cy7x2wyxLxwFfTKbR0XB8l1" +
"55CVKjEoL95NYNrZIWAxaoQdQeCmim8yNPDycK3cMq2tYwZpzKz2g02N/ZTy5Chx" +
"CffrIbBLyj0B+EpsuR26GKEDraJF+NFagKfyrm9rW/Q2h6LuYan8Edz3AJQ1B68D" +
"mxilWosLLq+4XQlkCX3aIAUcydMVK2B+ZpZJpr05YurxYzHKajElj9JEGzp0fVBF" +
"+9tzlN9ad4tsjewEdvyeAIDyTOHczFAa/8ER4M7dXDS2b0QspZTeTHWod5h5mL6/" +
"zUhRs1UvHn3Fz5gEbjwy1v94ovuctyWynEvMbNiV5tEbCRZqeYu081MmCET4t9UL" +
"gVwICi4vpXA2ovufOw0Ab4hJyRUEqzlkDpJcQCr91fsVx/Nkd9akvwKaxzRr64n5" +
"ycwKkcDyXw59bbhME2SSoAVdqXX5e9J2u+MUt/m/EfEzie0K4ynLcNyx+Z5dw72o" +
"QFnSblovRc90pOV5IGTybqQsWs83Z7qLoObYYIRtf6/F0v9cJXylvrtQoZSH2vzy" +
"lpj9zwqa9cJwAs4W6m4+Eu0fYwAdS9D2Vmn+4SRf+9yBNG5uGfnZBLS/WkSlMBfb" +
"/snniLAaR/GqgNl3uXDVXXoTjlVYEtL2ASWdhV+cc3GjTczL3T3QYg1Hbb3Uk5VH" +
"G/AVk1jpy5jsWmW2KPsoPuJGDO/QRGSuwR8rvL4h58O4nCOzV7kPlqWEn9knfzJB" +
"xqk6eD9BDPZF8xvbRBtZf5Hjax05rnMRUFJIqqguh0Y3BjN81C9bQZ0sZSmtp4Ax" +
"XLD2ZYfHqwPSj8PnYDautSh07uiU7dbmiFShMVWrq9iixa9MzMahbvr5IHD4yeDx" +
"MW3XWyR2dyd00C+3M6mItc/qDtXKJ+okTnt4coJv4O038X5Sh2aqqyrzT8SN6W4a" +
"b4JWHN0NDsE9XIAOLCaOKuTe9BFgkX3Jsx/LUTmQGcljCYmSeOriBlcZetf4jdvq" +
"sjcvG0L5T5docKNIlLMkCuyRMQ70+XZO9++CfmrMkYuwOqHUt2OjesfaRGSDNg2w" +
"YeTQ9g5TBQLxbBgqW9Md9yRCAlrcKczlwC9Ic17yrFdtk6upTYFDfcwsqSxWLlbY" +
"tOBXo60RH29T3BFKMJxYwAZMjrcdV3hOFyFJOYyt/OJ5+GTLBT6zK73LqEgq+UnP" +
"bXncDyPgrAPqPJI8RAkb3/6ybq8Fl9XK/Nec6lFqlimTJ1h+6fU1Dj7X7gaBCCBs" +
"alztuhuKNacY62hmn7JNzLwd960u8NlShVKda9NHDkjB2RHTIXkBMy0GLkiSjsVP" +
"3zNpb62MG5SQ+oKXuYS0+uyc/fPGXsXartuoDz54eeUhRUJNs7ikylEkI3YJLfQ8" +
"7nixruXQqQIDAQAB";
	var pem = pidCryptUtil.decodeBase64(pub_key);
	var rsa = new pidCrypt.RSA();
	var asn = pidCrypt.ASN1.decode(pidCryptUtil.toByteArray(pem));
	var tree = asn.toHexTree();
	rsa.setPublicKeyFromASN(tree);
	var crypted = rsa.encrypt("CD CHALCO");
	
	//console.log("valor de cifrado:" + crypted + ":FIN");
}

function cifraParametros(param) {
	var pem = pidCryptUtil.decodeBase64(pub_key);
	var rsa = new pidCrypt.RSA();
	var asn = pidCrypt.ASN1.decode(pidCryptUtil.toByteArray(pem));
	var tree = asn.toHexTree();
	rsa.setPublicKeyFromASN(tree);
	var crypted = rsa.encrypt(JSON.stringify(param));
	return {parametros: crypted};
}

function inicializaIndicadores() {
	obtieneTiendasBuscador();
	inicializaCalendarios();
	
	$( ".chosen" ).change(function() {
		buscaPorTienda(this);
	});
	$(".ui-datepicker-trigger").hide();
	inicializaInformacion();
	limpiaCategorias();
	
	$("#tipoConsultaDia").css("color","#000000");
	idRegionBusqueda = 0;
	idZonaBusqueda = -1;
	idTiendaBusqueda = -1;
	regiones = [];
	zonas = [];
	tiendas = [];
	
	tipoCategoriaId = 1;
	fechaFinalGrafica = "";
	fechaInicialGrafica = "";
	obtieneFechas();
	obtieneVentas();
	obtieneGrafica();
}

function inicializaGeografia() {
	
}

function obtieneFechaActual() {
	return formatDate(new Date());
}

function obtieneAnnioActual() {
	var fecha = formatDate(new Date());
	return fecha.split("/")[2];
}

function obtieneFormatoFechaCompleta(dia, mesInt, anio) {
	var mes = "";
	switch(parseInt(mesInt)) {
	case 1:	mes = "Enero";break;
	case 2:	mes = "Febrero";break;
	case 3:	mes = "Marzo";break;
	case 4:	mes = "Abril";break;
	case 5:	mes = "Mayo";break;
	case 6:	mes = "Junio";break;
	case 7:	mes = "Julio";break;
	case 8:	mes = "Agosto";break;
	case 9:	mes = "Septiembre";break;
	case 10:mes = "Octubre";break;
	case 11:mes = "Noviembre";break;
	case 12:mes = "Diciembre";break;
	};
	
	return dia + " de " + mes + " del " + anio;
}

function obtieneFechas() {
	//var tipoConsulta = $("#check-1").is(":checked") ? 2 : 1;
	var index = 2;//tipoConsultaGrafica == 2 ? 15 : 2;
	
	if(tipoConsultaGrafica == 1) {
		index = 2;
	} else if(tipoConsultaGrafica == 2) {
		index = 15;
	} else if(tipoConsultaGrafica == 3) {
		index = 13;
	}
	
	if(fechaFinalGrafica == "" && fechaInicialGrafica == "") {
		fechaFinalGrafica = $("#datepicker2").val();
		fechaInicialGrafica = formatDate(stringToDate($("#datepicker2").val(),"dd/MM/yyyy","/").addDays(-(7 * index)));
		if(tipoConsultaGrafica == 3)  {
			var fecha = new Date();
			var annio = fecha.getFullYear();
			fechaInicialGrafica = "01/01/" + annio;
		}
		limiteInferiorFechas = stringToDate($("#datepicker2").val(),"dd/MM/yyyy","/").addDays(-(30 * index));
		limiteSuperiorFechas = stringToDate(fechaFinalGrafica,"dd/MM/yyyy","/");
		$("#botonAdelanteGrafica").addClass("bloqueaFlechaGrafica");
		$("#botonAtrasGrafica").removeClass("bloqueaFlechaGrafica");
		$("#botonAdelanteGraficaMovil").addClass("bloqueaFlechaGrafica");
		$("#botonAtrasGraficaMovil").removeClass("bloqueaFlechaGrafica");
	}
}

function paginadoGraficaAtras() {
	tipoPaginado = 1;
	//var tipoConsulta = $("#check-1").is(":checked") ? 2 : 1;
	var index = 1;
	if(tipoConsultaGrafica == 1) {
		index = 2;
	} else if(tipoConsultaGrafica == 2) {
		index = 15;
	} else if(tipoConsultaGrafica == 3) {
		index = 25;
	}
	
	var fecha = stringToDate(fechaInicialGrafica,"dd/MM/yyyy","/").addDays(-(7 * index));
	
	if(fecha <= limiteInferiorFechas) {
		$("#botonAtrasGrafica").addClass("bloqueaFlechaGrafica");
		$("#botonAtrasGraficaMovil").addClass("bloqueaFlechaGrafica");
		fechaFinalGrafica = formatDate(new Date(stringToDate(fechaInicialGrafica,"dd/MM/yyyy","/")));
		fechaInicialGrafica = formatDate(limiteInferiorFechas);
	} else {
		$("#botonAdelanteGrafica").removeClass("bloqueaFlechaGrafica");
		$("#botonAdelanteGraficaMovil").removeClass("bloqueaFlechaGrafica");
		fechaFinalGrafica = formatDate(new Date(stringToDate(fechaInicialGrafica,"dd/MM/yyyy","/")));
		fechaInicialGrafica = formatDate(fecha);
	}
	
	obtieneGrafica();
}

function paginadoGraficaAdelante() {
	tipoPaginado = 2;
	//var tipoConsulta = $("#check-1").is(":checked") ? 2 : 1;
	var index = 1;
	if(tipoConsultaGrafica == 1) {
		index = 2;
	} else if(tipoConsultaGrafica == 2) {
		index = 15;
	} else if(tipoConsultaGrafica == 3) {
		index = 25;
	}
	
	var fecha = stringToDate(fechaFinalGrafica,"dd/MM/yyyy","/").addDays(7 * index);
	
	if(fecha >= limiteSuperiorFechas) {
		$("#botonAdelanteGrafica").addClass("bloqueaFlechaGrafica");
		$("#botonAdelanteGraficaMovil").addClass("bloqueaFlechaGrafica");
		fechaFinalGrafica = formatDate(limiteSuperiorFechas);
		fechaInicialGrafica = formatDate(limiteSuperiorFechas.addDays(-(7 * index)));
	} else {
		$("#botonAtrasGrafica").removeClass("bloqueaFlechaGrafica");
		$("#botonAtrasMovil").removeClass("bloqueaFlechaGrafica");
		fechaInicialGrafica = fechaFinalGrafica;
		fechaFinalGrafica = formatDate(fecha);
	}
	
	obtieneGrafica();
}

Date.prototype.addDays = function(days)
{
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
}

function stringToDate(_date,_format,_delimiter)
{
	if(_date != undefined) {
		var formatLowerCase=_format.toLowerCase();
        var formatItems=formatLowerCase.split(_delimiter);
        var dateItems=_date.split(_delimiter);
        var monthIndex=formatItems.indexOf("mm");
        var dayIndex=formatItems.indexOf("dd");
        var yearIndex=formatItems.indexOf("yyyy");
        var month=parseInt(dateItems[monthIndex]);
        month-=1;
        var formatedDate = new Date(dateItems[yearIndex],month,dateItems[dayIndex]);
        return formatedDate;
	}
}

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [day, month, year].join('/');
}

function obtieneLunes( date ) {
    var day = date.getDay() || 7;  
    if( day !== 1 ) 
        date.setHours(-24 * (day - 1)); 
    return date;
}

function obtieneMesActual(fecha) {
	var fechas = fecha.split("/");
	return "01" + "/" + fechas[1] + "/" + fechas[2];
}

function obtieneTiendasBuscador() {
	var params4  = {pais: 1};
	obtenerDatos('obtieneTiendasBuscador', responseTiendas, errorVenta, params4);
}

function obtieneVentas() {
	//var params2  = {pais: 1, region: idRegionBusqueda, zona: idZonaBusqueda, tienda: idTiendaBusqueda, fechaInicio: $("#datepicker1").val(), fechaFin: $("#datepicker2").val(), tipoPpto: 1 };
	
	var params2  = {
		pais: 1, 
		region: idRegionBusqueda, 
		zona: idZonaBusqueda, 
		tienda: idTiendaBusqueda, 
		fechaInicio: $("#datepicker1").val(), 
		fechaFin:$("#datepicker2").val(),  
		tipoPpto: valTipoPpto
	};
	
	muestraLoginRegiones();
	acumuladosVenta = [];
	//obtenerDatos('obtieneVentas', responseVenta, errorVenta, cifraParametros(params2));
	obtenerDatos('obtieneVentas', responseVenta, errorVenta, params2);
}

function obtieneGrafica() {
	//var tipoConsulta = $("#check-1").is(":checked") ? 2 : 1;
	$("#botonAtrasGrafica").hide();
	$("#botonAdelanteGrafica").hide();
	$("#botonAtrasGraficaMovil").hide();
	$("#botonAdelanteGraficaMovil").hide();
	inicializaInfoSemanas();
	
	var idRegion = 0;
	if(idRegionBusqueda == -1) {
		idRegion = 0;
	} else {
		idRegion = idRegionBusqueda;
	}
	
	var idZona = 0;
	if(idZonaBusqueda == -1) {
		idZona = 0;
	} else {
		idZona = idZonaBusqueda;
	}
	
	var idTienda = 0;
	if(idTiendaBusqueda == -1) {
		idTienda = 0;
	} else {
		idTienda = idTiendaBusqueda;
	}
	
	
	//var params3  = {pais: 1, region: idRegion, zona: idZona, tienda: idTienda, tipoConsulta: tipoConsultaGrafica, fechaInicio: fechaInicialGrafica, fechaFin: fechaFinalGrafica, tipoPpto: 1};
	
	var params3  = {
		pais: 1, 
		region: idRegion, 
		zona: idZona, 
		tienda: idTienda, 
		tipoConsulta: tipoConsultaGrafica,     
		fechaInicio: fechaInicialGrafica,  
		fechaFin: fechaFinalGrafica, 
		tipoPpto: valTipoPpto
	};
	
	muestraLoginGraficas();
	//obtenerDatos('obtieneVentasXDiaYSemana', responseVentaXDiaYSemana, errorVentaGrafica, cifraParametros(params3));
	obtenerDatos('obtieneVentasXDiaYSemana', responseVentaXDiaYSemana, errorVentaGrafica, params3);
}

function obtieneGraficaSemDia(valor,o) {
	
	if(tipoConsultaGrafica == valor) {
		return;
	} else if(valor == 1){
		$("#tipoConsultaDia").css("color","#000000");
		$("#tipoConsultaDia").css("font-weight","400");
		$("#tipoConsultaSemana").css("color","#7D7D7D");
		$("#tipoConsultaSemana").css("font-weight","200");
		$("#tipoConsultaMes").css("color","#7D7D7D");
		$("#tipoConsultaMes").css("font-weight","200");
		
		$("#tipoConsultaDiaMovil").css("color","#000000");
		$("#tipoConsultaDiaMovil").css("font-weight","400");
		$("#tipoConsultaSemanaMovil").css("color","#7D7D7D");
		$("#tipoConsultaSemanaMovil").css("font-weight","200");
		$("#tipoConsultaMesMovil").css("color","#7D7D7D");
		$("#tipoConsultaMesMovil").css("font-weight","200");
	} else if(valor == 2){
		$("#tipoConsultaDia").css("color","#7D7D7D");
		$("#tipoConsultaDia").css("font-weight","200");
		$("#tipoConsultaSemana").css("color","#000000");
		$("#tipoConsultaSemana").css("font-weight","400");
		$("#tipoConsultaMes").css("color","#7D7D7D");
		$("#tipoConsultaMes").css("font-weight","200");
		
		$("#tipoConsultaDiaMovil").css("color","#7D7D7D");
		$("#tipoConsultaDiaMovil").css("font-weight","200");
		$("#tipoConsultaSemanaMovil").css("color","#000000");
		$("#tipoConsultaSemanaMovil").css("font-weight","400");
		$("#tipoConsultaMesMovil").css("color","#7D7D7D");
		$("#tipoConsultaMesMovil").css("font-weight","200");
	} else if(valor == 3){
		$("#tipoConsultaDia").css("color","#7D7D7D");
		$("#tipoConsultaDia").css("font-weight","200");
		$("#tipoConsultaSemana").css("color","#7D7D7D");
		$("#tipoConsultaSemana").css("font-weight","200");
		$("#tipoConsultaMes").css("color","#000000");
		$("#tipoConsultaMes").css("font-weight","400");
		
		$("#tipoConsultaDiaMovil").css("color","#7D7D7D");
		$("#tipoConsultaDiaMovil").css("font-weight","200");
		$("#tipoConsultaSemanaMovil").css("color","#7D7D7D");
		$("#tipoConsultaSemanaMovil").css("font-weight","200");
		$("#tipoConsultaMesMovil").css("color","#000000");
		$("#tipoConsultaMesMovil").css("font-weight","400");
	}
	
	$("#divFiltroMenu").addClass("bloqueaFlechaGrafica");
	tipoConsultaGrafica = valor;
	inicializaInformacion();
	
	
	//Establece fechas en los calendarios
	var fechaHoy = new Date();
	
	if(tipoConsultaGrafica == 1) {
		$("#datepicker1").val(formatDate(fechaHoy));
		$("#datepicker2").val(formatDate(fechaHoy));
	} else if(tipoConsultaGrafica == 2) {
		$("#datepicker2").val(formatDate(fechaHoy));
		$("#datepicker1").val(formatDate(obtieneLunes(fechaHoy)));
	} else if(tipoConsultaGrafica == 3) {
		$("#datepicker1").val(obtieneMesActual(formatDate(fechaHoy)));
		$("#datepicker2").val(formatDate(fechaHoy));
	}
	fechaFinalGrafica = "";
	fechaInicialGrafica = "";
	obtieneFechas();
	
	/*
	if(tipoConsultaGrafica == 1) {
		//$("#check-1").prop("checked", false);
		fechaInicialGrafica = formatDate(stringToDate(fechaFinalGrafica,"dd/MM/yyyy","/").addDays(-(7 * 2)));
		limiteInferiorFechas = stringToDate($("#datepicker2").val(),"dd/MM/yyyy","/").addDays(-(30 * 2));
	} else if(tipoConsultaGrafica == 2) {
		//$("#check-1").prop("checked", true);
		fechaInicialGrafica = formatDate(stringToDate(fechaFinalGrafica,"dd/MM/yyyy","/").addDays(-(7 * 15)));
		limiteInferiorFechas = stringToDate($("#datepicker2").val(),"dd/MM/yyyy","/").addDays(-(30 * 15));
	} else if(tipoConsultaGrafica == 3) {
		//$("#check-1").prop("checked", true);
		fechaInicialGrafica = formatDate(stringToDate(fechaFinalGrafica,"dd/MM/yyyy","/").addDays(-(7 * 40)));
		limiteInferiorFechas = stringToDate($("#datepicker2").val(),"dd/MM/yyyy","/").addDays(-(30 * 18));
	}
	
	if(stringToDate(fechaInicialGrafica,"dd/MM/yyyy","/") <= limiteInferiorFechas) {
		$("#botonAtrasGrafica").addClass("bloqueaFlechaGrafica");
		$("#botonAtrasGraficaMovil").addClass("bloqueaFlechaGrafica");
	} else {
		$("#botonAdelanteGrafica").removeClass("bloqueaFlechaGrafica");
		$("#botonAtrasGraficaMovil").removeClass("bloqueaFlechaGrafica");
	}
	if(stringToDate(fechaFinalGrafica,"dd/MM/yyyy","/") >= limiteSuperiorFechas) {
		$("#botonAdelanteGrafica").addClass("bloqueaFlechaGrafica");
		$("#botonAdelanteGraficaMovil").addClass("bloqueaFlechaGrafica");
	} else {
		$("#botonAtrasGrafica").removeClass("bloqueaFlechaGrafica");
		$("#botonAdelanteGraficaMovil").removeClass("bloqueaFlechaGrafica");
	}*/
	
	tipoCategoriaId = 1;
	regiones = [];
	zonas = [];
	tiendas = [];
	idRegionBusqueda = 0;
	idZonaBusqueda = -1;
	idTiendaBusqueda = -1;
	nombreNodoBusqueda = "";
	
	
	obtieneVentas();
	obtieneGrafica();
}

function consultaVentas() {
	esFiltroActivo = false;
	tipoCategoriaId = 1;
	regiones = [];
	zonas = [];
	tiendas = [];
	auxValTipoPpto = valTipoPpto;
	
	$('#tiendasSelect').val(0);
	$('#tiendasSelect').trigger("chosen:updated");
	$('#tiendasSelectMovil').val(0);
	$('#tiendasSelectMovil').trigger("chosen:updated");
	
	idRegionBusqueda = 0;
	idZonaBusqueda = -1;
	idTiendaBusqueda = -1;
	nombreNodoBusqueda = "";
	fechaInicialGrafica = "";
	fechaFinalGrafica = "";
	obtieneFechas();
	inicializaInformacion();
	
	obtieneVentas();
	obtieneGrafica();
	inicializaInformacion();
	ocultaDivFiltro();
	$("#divFiltroMenu").addClass("bloqueaFlechaGrafica");
	$("#cajaTitulo5FiltroRegiones").css("background-color","#F15C22;");
	$("#cajaTitulo5FiltroZonas").css("background-color","#BDBDBD");
	$("#cajaTitulo5FiltroTiendas").css("background-color","#BDBDBD;");
	$("#cajaTitulo5FiltroRegionesMovil").css("background-color","#F15C22;");
	$("#cajaTitulo5FiltroZonasMovil").css("background-color","#BDBDBD");
	$("#cajaTitulo5FiltroTiendasMovil").css("background-color","#BDBDBD;");
}

function inicializaInformacion() {
	//$("#tituloVentaPrincipal").html("VENTA TOTAL");
	//$("#tituloVentaPrincipal2").html("VENTA TOTAL");
	$('span[id="tituloVentaPrincipal"]').html("VENTA TOTAL");
	$("#montoVentaTotal").html("---");
	$("#montoVentaTotalMovil").html("---");
	$("#ventaObjetivo").html("---");
	$("#ticketPromedio").html("---");
	$("#transacciones").html("---");
	$("#numTiendas").html("---");
	$("#ticketPromedioMovil").html("---");
	$("#transaccionesMovil").html("---");
	$("#numTiendasMovil").html("---");
	$("#ventaObjetivoMovil").html("---");
	$("#etiquetaMillones").html("---");
	$("#etiquetaMillonesMovil").html("---");
	$("#montoNeto").html("---");
	$("#montoTiempoAire").html("---");
	$("#montoServicios").html("---");
	$("#montoImpuestos").html("---");
	$("#montoNetoMovil").html("---");
	$("#montoTiempoAireMovil").html("---");
	$("#montoServiciosMovil").html("---");
	$("#montoImpuestosMovil").html("---");
	//bar.animate(0.0);
	animateColorPorcentaje(0.0);
	animateColorPorcentajeMovil(0.0);
	
	$(".cajaTitulo6").css("margin-top","0px");
	$("#cajaTitulo5FiltroZonas").animate({top: '891px'});
	$("#cajaTitulo5FiltroTiendas").animate({top: '925px'});
}

function inicializaInfoSemanas() {
	$("#labelTipoCompara").html("---");
	$("#semanaNombre1").html("---");
	$("#semanaNombre2").html("---");
	$("#semanaNombre3").html("---");
	$("#semanaId1").html("---");
	$("#semanaId2").html("---");
	$("#semanaId3").html("---");
	$("#semanaId4").html("---");
	$("#semanaId5").html("---");
	$("#semanaId6").html("---");
	$("#anioId1").html("---");
	$("#anioId2").html("---");
}

function responseTipoEntrega(data){
	if (data != null && data != "" && data != undefined) {	
		llenarComboTipoEntrega("#filtroselect_tipoEntrega",data.tipoEntrega,"SELECCIONAR TIPO DE ENTREGA");
	}
}

function responseTipoServicio(data){	
	if (data != null && data != "" && data != undefined) {	
		llenarComboTipoServicio("#filtroselect_tipoServicio",data.tipoServicio,"SELECCIONAR TIPO DE SERVICIO");
	}
}

function responseProveedores(data){
	if (data != null && data != "" && data != undefined) {	
		llenarComboProveedores("#filtroselect_proveedor",data.proveedor,"SELECCIONAR PROVEEDOR");
	}
}

function responseTiendas(data) {
	if (data != null && data != "" && data != undefined && data.codigoError != -1) {
		
		$('#tiendasSelect')
	    .find('option')
	    .remove()
	    .end()
	    .append('<option value="0">Buscador por nombre o n&uacute;mero de tienda...</option>')
	    .val('0');
		
		$.each(data.tiendas, function (i, item) {
		    $('#tiendasSelect').append($('<option>', { 
		        value: item.idRegion + "-" + item.idZona + "-" + item.idTienda,
		        text : item.idTienda + " - " + item.nombreTienda 
		    }));
		});
		
		$('#tiendasSelectMovil')
	    .find('option')
	    .remove()
	    .end()
	    .append('<option value="0">Buscador por nombre o n&uacute;mero de tienda...</option>')
	    .val('0');
		
		$.each(data.tiendas, function (i, item) {
		    $('#tiendasSelectMovil').append($('<option>', { 
		        value: item.idRegion + "-" + item.idZona + "-" + item.idTienda,
		        text : item.idTienda + " - " + item.nombreTienda 
		    }));
		});
		
		jQuery(".chosen").chosen();
	}
}

function responseVenta(data){
	$("#divFiltroMenu").removeClass("bloqueaFlechaGrafica");
	
	if (data != null && data != "" && data != undefined && data.codigoError != -1 && data.resumenObjetivos.length > 0) {
		$("#totalAltoRegiones").html(data.resumenObjetivos[0].alto);
		$("#totalAltoZonas").html(data.resumenObjetivos[1].alto);
		$("#totalAltoTiendas").html(data.resumenObjetivos[2].alto);
		$("#totalMedioRegiones").html(data.resumenObjetivos[0].medio);
		$("#totalMedioZonas").html(data.resumenObjetivos[1].medio);
		$("#totalMedioTiendas").html(data.resumenObjetivos[2].medio);
		$("#totalBajoRegiones").html(data.resumenObjetivos[0].bajo);
		$("#totalBajoZonas").html(data.resumenObjetivos[1].bajo);
		$("#totalBajoTiendas").html(data.resumenObjetivos[2].bajo);
		
		$("#totalAltoRegionesMovil").html(data.resumenObjetivos[0].alto);
		$("#totalAltoZonasMovil").html(data.resumenObjetivos[1].alto);
		$("#totalAltoTiendasMovil").html(data.resumenObjetivos[2].alto);
		$("#totalMedioRegionesMovil").html(data.resumenObjetivos[0].medio);
		$("#totalMedioZonasMovil").html(data.resumenObjetivos[1].medio);
		$("#totalMedioTiendasMovil").html(data.resumenObjetivos[2].medio);
		$("#totalBajoRegionesMovil").html(data.resumenObjetivos[0].bajo);
		$("#totalBajoZonasMovil").html(data.resumenObjetivos[1].bajo);
		$("#totalBajoTiendasMovil").html(data.resumenObjetivos[2].bajo);
	} else {
		$("#totalAltoRegiones").html("--");
		$("#totalAltoZonas").html("--");
		$("#totalAltoTiendas").html("--");
		$("#totalMedioRegiones").html("--");
		$("#totalMedioZonas").html("--");
		$("#totalMedioTiendas").html("--");
		$("#totalBajoRegiones").html("--");
		$("#totalBajoZonas").html("--");
		$("#totalBajoTiendas").html("--");
		
		$("#totalAltoRegionesMovil").html("--");
		$("#totalAltoZonasMovil").html("--");
		$("#totalAltoTiendasMovil").html("--");
		$("#totalMedioRegionesMovil").html("--");
		$("#totalMedioZonasMovil").html("--");
		$("#totalMedioTiendasMovil").html("--");
		$("#totalBajoRegionesMovil").html("--");
		$("#totalBajoZonasMovil").html("--");
		$("#totalBajoTiendasMovil").html("--");
	}
	
	if (data != null && data != "" && data != undefined && data.codigoError != -1 && data.ventaPorUbicacion.length > 0) {	
		
		var sumaMontoNeto = 0;
		var sumaMontoTiempoAire = 0;
		var sumaMontoServicios = 0;
		var sumaMontoImpuestos = 0;
		var sumaVentaObjetivo = 0;
		var sumaPorcentaje = 0;
		var sumaTicketPromedio = 0;
		var sumaTransacciones = 0;
		var sumaNumTiendas = 0;
		var traficoWS = 0;
		var porcentajeWS = 0;
		var regsUbicacion = data.ventaPorUbicacion.length;
		if(regsUbicacion == undefined || regsUbicacion == 0) regsUbicacion = 1;
		
		
		for(var i = 0; i < data.ventaPorUbicacion.length; i++) {
			auxNombreZona = data.ventaPorUbicacion[i].nombreZona;
			var nodo = {idNodo:0,
					nombreNodo:'',
					idRegion:data.ventaPorUbicacion[i].regionId,
					nombreRegion:data.ventaPorUbicacion[i].nombreRegion,
					idZona:data.ventaPorUbicacion[i].zonaId,
					nombreZona:data.ventaPorUbicacion[i].nombreZona,
					idTienda:data.ventaPorUbicacion[i].tiendaId,
					nombreTienda:data.ventaPorUbicacion[i].nombreTienda,
					total:data.ventaPorUbicacion[i].montoNeto,
					montoTiempoAire:data.ventaPorUbicacion[i].montoTiempoAire,
					montoServicios:data.ventaPorUbicacion[i].montoServicios,
					montoImpuestos:data.ventaPorUbicacion[i].montoImpuestos,
					porcentaje:data.ventaPorUbicacion[i].porcentajeVentas,
					ventaObjetivo:data.ventaPorUbicacion[i].ventaObjetivo,
					ticketPromedio:data.ventaPorUbicacion[i].ticketPromedio,
					transacciones:data.ventaPorUbicacion[i].transacciones,
					numTiendas:data.ventaPorUbicacion[i].numTiendas,
					trafico:data.ventaPorUbicacion[i].trafico};
			
			if(tipoCategoriaId == 1) {
				nodo.idNodo = data.ventaPorUbicacion[i].regionId;
				nodo.nombreNodo = data.ventaPorUbicacion[i].nombreRegion;
				regiones.push(nodo);
			} else if(tipoCategoriaId == 2) {
				nodo.idNodo = data.ventaPorUbicacion[i].zonaId;
				nodo.nombreNodo = data.ventaPorUbicacion[i].nombreZona;
				zonas.push(nodo);
			} else {
				nodo.idNodo = data.ventaPorUbicacion[i].tiendaId;
				nodo.nombreNodo = data.ventaPorUbicacion[i].nombreTienda;
				tiendas.push(nodo);
			}
			
			sumaMontoNeto += data.ventaPorUbicacion[i].montoNeto;
			sumaMontoTiempoAire += data.ventaPorUbicacion[i].montoTiempoAire;
			sumaMontoServicios += data.ventaPorUbicacion[i].montoServicios;
			sumaMontoImpuestos += data.ventaPorUbicacion[i].montoImpuestos;
			sumaVentaObjetivo += data.ventaPorUbicacion[i].ventaObjetivo;
			sumaPorcentaje += data.ventaPorUbicacion[i].porcentajeVentas;
			sumaTicketPromedio += data.ventaPorUbicacion[i].ticketPromedio;
			sumaTransacciones += data.ventaPorUbicacion[i].transacciones;
			sumaNumTiendas += data.ventaPorUbicacion[i].numTiendas;
		}
		if(data.ventaGeneral.length > 0 && data.ventaGeneral[0].trafico != undefined) {
			traficoWS = data.ventaGeneral[0].trafico;
		}
		objetoVenta = {idNodo: 0, nombreNodo: "", total: sumaMontoNeto, montoTiempoAire: sumaMontoTiempoAire, 
				montoServicios: sumaMontoServicios, montoImpuestos: sumaMontoImpuestos, ventaObjetivo: sumaVentaObjetivo,
				porcentajeVentas: sumaPorcentaje/regsUbicacion, ticketPromedio: sumaTicketPromedio/regsUbicacion, 
				transacciones: sumaTransacciones, numTiendas: sumaNumTiendas, trafico: traficoWS};
		
		if(data.ventaGeneral.length > 1) {
			var acumuladoHoy = {};
			var acumuladoSemActual = {};
			var acumuladoSemAnterior = {};
			var acumuladoAnioPasado = {};
			acumuladosVenta = [];
			
			for(var i = 0; i < data.ventaGeneral.length; i++) {
				if(i == 0) {
					acumuladoHoy = {montoNeto:data.ventaGeneral[i].montoNeto, montoTiempoAire: data.ventaGeneral[i].montoTiempoAire, montoServicios: data.ventaGeneral[i].montoServicios,
						montoImpuestos: data.ventaGeneral[i].montoImpuestos, porcentajeVentas: data.ventaGeneral[i].porcentajeVentas, ventaObjetivo: data.ventaGeneral[i].ventaObjetivo,
						ticketPromedio: data.ventaGeneral[i].ticketPromedio, transacciones: data.ventaGeneral[i].transacciones, numTiendas: data.ventaGeneral[i].numTiendas,
						trafico: data.ventaGeneral[i].trafico};
				} else if(i == 1) {
					acumuladoSemActual = {montoNeto:data.ventaGeneral[i].montoNeto, montoTiempoAire: data.ventaGeneral[i].montoTiempoAire, montoServicios: data.ventaGeneral[i].montoServicios,
						montoImpuestos: data.ventaGeneral[i].montoImpuestos, porcentajeVentas: data.ventaGeneral[i].porcentajeVentas};
				} else if(i == 2) {
					acumuladoSemAnterior = {montoNeto:data.ventaGeneral[i].montoNeto, montoTiempoAire: data.ventaGeneral[i].montoTiempoAire, montoServicios: data.ventaGeneral[i].montoServicios,
						montoImpuestos: data.ventaGeneral[i].montoImpuestos, porcentajeVentas: data.ventaGeneral[i].porcentajeVentas};
				} else if(i == 3) {
					acumuladoAnioPasado = {montoNeto:data.ventaGeneral[i].montoNeto, montoTiempoAire: data.ventaGeneral[i].montoTiempoAire, montoServicios: data.ventaGeneral[i].montoServicios,
						montoImpuestos: data.ventaGeneral[i].montoImpuestos, porcentajeVentas: data.ventaGeneral[i].porcentajeVentas};
				}
			}
			acumuladosVenta = {acumHoy: acumuladoHoy, acumSemActual:acumuladoSemActual, acumSemAnterior:acumuladoSemAnterior, acumAnioPasado: acumuladoAnioPasado};
			
			if(acumuladosVenta != undefined && acumuladosVenta.acumHoy != undefined) {
				var suma = 0;
				if($("#checkMercancias").is(":checked") && acumuladosVenta.acumHoy.montoNeto != undefined) {
					suma += parseFloat(acumuladosVenta.acumHoy.montoNeto);
				}
				if($("#checkTiempoAire").is(":checked") && acumuladosVenta.acumHoy.montoTiempoAire != undefined) {
					suma += parseFloat(acumuladosVenta.acumHoy.montoTiempoAire);
				}
				if($("#checkServicios").is(":checked") && acumuladosVenta.acumHoy.montoServicios != undefined) {
					suma += parseFloat(acumuladosVenta.acumHoy.montoServicios);
				}
				if($("#checkImpuestos").is(":checked") && acumuladosVenta.acumHoy.montoImpuestos != undefined) {
					suma += parseFloat(acumuladosVenta.acumHoy.montoImpuestos);
				}
			
				if(acumuladosVenta.acumHoy.montoNeto != undefined) {
					$("#montoVentaTotal").html("$ " + formato(suma, true));
					$("#montoNeto").html("$ " + formato(parseFloat(acumuladosVenta.acumHoy.montoNeto),true));
					$("#montoTiempoAire").html("$ " + formato(parseFloat(acumuladosVenta.acumHoy.montoTiempoAire),true));
					$("#montoServicios").html("$ " + formato(parseFloat(acumuladosVenta.acumHoy.montoServicios),true));
					$("#montoImpuestos").html("$ " + formato(parseFloat(acumuladosVenta.acumHoy.montoImpuestos),true));
					$("#montoNetoMovil").html("$ " + formato(parseFloat(acumuladosVenta.acumHoy.montoNeto),true));
					$("#montoTiempoAireMovil").html("$ " + formato(parseFloat(acumuladosVenta.acumHoy.montoTiempoAire),true));
					$("#montoServiciosMovil").html("$ " + formato(parseFloat(acumuladosVenta.acumHoy.montoServicios),true));
					$("#montoImpuestosMovil").html("$ " + formato(parseFloat(acumuladosVenta.acumHoy.montoImpuestos),true));
					
					
					$("#ventaObjetivo").html("$ " + formato(parseFloat(acumuladosVenta.acumHoy.ventaObjetivo),true));
					//$("#porcentajeVentaObjetivo").html((parseFloat(acumuladosVenta.acumHoy.porcentajeVentas) * 100).toFixed(0) + "%");
					//bar.animate(acumuladosVenta.acumHoy.porcentajeVentas);
					animateColorPorcentaje(acumuladosVenta.acumHoy.porcentajeVentas);
					$("#ticketPromedio").html("$ " + parseFloat(formatoDecimales(parseFloat(acumuladosVenta.acumHoy.ticketPromedio),true)).toFixed(1));
					$("#transacciones").html(formato(parseFloat(acumuladosVenta.acumHoy.trafico),true));
					$("#numTiendas").html(formato(parseFloat(acumuladosVenta.acumHoy.numTiendas),true));
					$("#ticketPromedioMovil").html("$ " + formato(parseFloat(acumuladosVenta.acumHoy.ticketPromedio),true));
					$("#transaccionesMovil").html(formato(parseFloat(acumuladosVenta.acumHoy.trafico),true));
					$("#numTiendasMovil").html(formato(parseFloat(acumuladosVenta.acumHoy.numTiendas),true));
					$("#ventaObjetivoMovil").html("$ " + formato(parseFloat(acumuladosVenta.acumHoy.ventaObjetivo),true));
					animateColorPorcentajeMovil(acumuladosVenta.acumHoy.porcentajeVentas);
					//validaBarrasPorcentaje(acumuladosVenta.acumHoy.porcentajeVentas);
					
					if(parseFloat(acumuladosVenta.acumHoy.montoNeto) >= 1000000) {
						$("#etiquetaMillones").text("MILLONES");
					} else {
						$("#etiquetaMillones").text("MILES");
					}
					//$('span[id="montoVentaTotal"]').html("$ " + formato(parseFloat(acumuladosVenta.acumHoy.montoNeto) + suma), true);
				} else {
					if(objetoVenta!= undefined && objetoVenta.total != undefined) {
						$("#montoVentaTotal").html("$ " + formato(objetoVenta.total,true));
						$("#montoNeto").html("$ " + formato(parseFloat(objetoVenta.montoNeto),true));
						$("#montoTiempoAire").html("$ " + formato(parseFloat(objetoVenta.montoTiempoAire),true));
						$("#montoServicios").html("$ " + formato(parseFloat(objetoVenta.montoServicios),true));
						$("#montoImpuestos").html("$ " + formato(parseFloat(objetoVenta.montoImpuestos),true));
						$("#montoNetoMovil").html("$ " + formato(parseFloat(objetoVenta.montoNeto),true));
						$("#montoTiempoAireMovil").html("$ " + formato(parseFloat(objetoVenta.montoTiempoAire),true));
						$("#montoServiciosMovil").html("$ " + formato(parseFloat(objetoVenta.montoServicios),true));
						$("#montoImpuestosMovil").html("$ " + formato(parseFloat(objetoVenta.montoImpuestos),true));
						
	
						$("#ventaObjetivo").html("$ " + formato(parseFloat(objetoVenta.ventaObjetivo),true));
						//$("#porcentajeVentaObjetivo").html((parseFloat(objetoVenta.porcentajeVentas) * 100).toFixed(0) + "%");
						//bar.animate(objetoVenta.porcentajeVentas);
						animateColorPorcentaje(objetoVenta.porcentajeVentas);
						$("#ticketPromedio").html("$ " + parseFloat(formatoDecimales(parseFloat(objetoVenta.ticketPromedio),true)).toFixed(1));
						$("#transacciones").html(formato(parseFloat(objetoVenta.trafico),true));
						$("#numTiendas").html(formato(parseFloat(objetoVenta.numTiendas),true));
						$("#ticketPromedioMovil").html("$ " + formato(parseFloat(objetoVenta.ticketPromedio),true));
						$("#transaccionesMovil").html(formato(parseFloat(objetoVenta.trafico),true));
						$("#numTiendasMovil").html(formato(parseFloat(objetoVenta.numTiendas),true));
						$("#ventaObjetivoMovil").html("$ " + formato(parseFloat(objetoVenta.ventaObjetivo),true));
						//validaBarrasPorcentaje(objetoVenta.porcentaje);
						animateColorPorcentajeMovil(objetoVenta.porcentajeVentas);
						
						if(objetoVenta.total >= 1000000) {
							$("#etiquetaMillones").text("MILLONES");
						} else {
							$("#etiquetaMillones").text("MILES");
						}
						//$('span[id="montoVentaTotal"]').html("$ " + formato(objetoVenta.total,true));
					} else {
						$("#montoVentaTotal").html("$ ---");
						$("#ventaObjetivo").html("$ ---");
						$("#ticketPromedio").html("$ ---");
						$("#transacciones").html("---");
						$("#numTiendas").html("---");
						$("#ticketPromedioMovil").html("$ ---");
						$("#transaccionesMovil").html("---");
						$("#numTiendasMovil").html("---");
						//$("#porcentajeVentaObjetivo").html("---");
						//bar.animate(0.0);
						animateColorPorcentaje(0.0);
						animateColorPorcentajeMovil(0.0);
						$("#ventaObjetivoMovil").html("$ ---");
						apagaSemaforo();
						$("#etiquetaMillones").text("---");
						//$('span[id="montoVentaTotal"]').html("$ ---");
					}
				
				}
			}
			
			if(acumuladosVenta != undefined && acumuladosVenta.acumHoy != undefined) {
				var suma = 0;
				if($("#checkMercanciasMovil").is(":checked") && acumuladosVenta.acumHoy.montoNeto != undefined) {
					suma += parseFloat(acumuladosVenta.acumHoy.montoNeto);
				}
				if($("#checkTiempoAireMovil").is(":checked") && acumuladosVenta.acumHoy.montoTiempoAire != undefined) {
					suma += parseFloat(acumuladosVenta.acumHoy.montoTiempoAire);
				}
				if($("#checkServiciosMovil").is(":checked") && acumuladosVenta.acumHoy.montoServicios != undefined) {
					suma += parseFloat(acumuladosVenta.acumHoy.montoServicios);
				}
				if($("#checkImpuestosMovil").is(":checked") && acumuladosVenta.acumHoy.montoImpuestos != undefined) {
					suma += parseFloat(acumuladosVenta.acumHoy.montoImpuestos);
				}
			
				if(acumuladosVenta.acumHoy.montoNeto != undefined) {
					$("#montoVentaTotalMovil").html("$ " + formato(suma, true));
					$("#ventaObjetivo").html("$ " + formato(parseFloat(acumuladosVenta.acumHoy.ventaObjetivo),true));
					//$("#porcentajeVentaObjetivo").html((parseFloat(acumuladosVenta.acumHoy.porcentajeVentas) * 100).toFixed(0) + "%");
					//bar.animate(acumuladosVenta.acumHoy.porcentajeVentas);
					animateColorPorcentaje(acumuladosVenta.acumHoy.porcentajeVentas);
					$("#ticketPromedio").html("$ " + parseFloat(formatoDecimales(parseFloat(acumuladosVenta.acumHoy.ticketPromedio),true)).toFixed(1));
					$("#transacciones").html(formato(parseFloat(acumuladosVenta.acumHoy.trafico),true));
					$("#numTiendas").html(formato(parseFloat(acumuladosVenta.acumHoy.numTiendas),true));
					$("#ticketPromedioMovil").html("$ " + formato(parseFloat(acumuladosVenta.acumHoy.ticketPromedio),true));
					$("#transaccionesMovil").html(formato(parseFloat(acumuladosVenta.acumHoy.trafico),true));
					$("#numTiendasMovil").html(formato(parseFloat(acumuladosVenta.acumHoy.numTiendas),true));
					$("#ventaObjetivoMovil").html("$ " + formato(parseFloat(acumuladosVenta.acumHoy.ventaObjetivo),true));
					//validaBarrasPorcentaje(acumuladosVenta.acumHoy.porcentajeVentas);
					animateColorPorcentajeMovil(acumuladosVenta.acumHoy.porcentajeVentas);
					
					if(parseFloat(acumuladosVenta.acumHoy.montoNeto) > 1000000) {
						$("#etiquetaMillonesMovil").text("MILLONES");
					} else {
						$("#etiquetaMillonesMovil").text("MILES");
					}
					//$('span[id="montoVentaTotal"]').html("$ " + formato(parseFloat(acumuladosVenta.acumHoy.montoNeto) + suma), true);
				} else {
					if(objetoVenta!= undefined && objetoVenta.total != undefined) {
						$("#montoVentaTotalMovil").html("$ " + formato(objetoVenta.total,true));
						$("#ventaObjetivo").html("$ " + formato(parseFloat(objetoVenta.ventaObjetivo),true));
						//$("#porcentajeVentaObjetivo").html((parseFloat(objetoVenta.porcentajeVentas) * 100).toFixed(0) + "%");
						//bar.animate(objetoVenta.porcentajeVentas);
						animateColorPorcentaje(objetoVenta.porcentajeVentas);
						$("#ticketPromedio").html("$ " + parseFloat(formatoDecimales(parseFloat(objetoVenta.ticketPromedio),true)).toFixed(1));
						$("#transacciones").html(formato(parseFloat(objetoVenta.trafico),true));
						$("#numTiendas").html(formato(parseFloat(objetoVenta.numTiendas),true));
						$("#ticketPromedioMovil").html("$ " + formato(parseFloat(objetoVenta.ticketPromedio),true));
						$("#transaccionesMovil").html(formato(parseFloat(objetoVenta.trafico),true));
						$("#numTiendasMovil").html(formato(parseFloat(objetoVenta.numTiendas),true));
						$("#ventaObjetivoMovil").html("$ " + formato(parseFloat(objetoVenta.ventaObjetivo),true));
						//validaBarrasPorcentaje(objetoVenta.porcentaje);
						animateColorPorcentajeMovil(objetoVenta.porcentajeVentas);
						
						if(objetoVenta.total > 1000000) {
							$("#etiquetaMillonesMovil").text("MILLONES");
						} else {
							$("#etiquetaMillonesMovil").text("MILES");
						}
						//$('span[id="montoVentaTotal"]').html("$ " + formato(objetoVenta.total,true));
					} else {
						$("#montoVentaTotalMovil").html("$ ---");
						$("#ventaObjetivo").html("$ ---");
						//$("#porcentajeVentaObjetivo").html("---");
						//bar.animate(0.0);
						animateColorPorcentaje(0.0);
						animateColorPorcentajeMovil(0.0);
						$("#ticketPromedio").html("$ ---");
						$("#transacciones").html("---");
						$("#numTiendas").html("---");
						$("#ticketPromedioMovil").html("$ ---");
						$("#transaccionesMovil").html("---");
						$("#numTiendasMovil").html("---");
						$("#ventaObjetivoMovil").html("$ ---");
						apagaSemaforo();
						$("#etiquetaMillonesMovil").text("MILES");
						//$('span[id="montoVentaTotal"]').html("$ ---");
					}
				
				}
			}
			
			objetoVenta = {idNodo: 0, nombreNodo: "", total: acumuladosVenta.acumHoy.montoNeto, montoTiempoAire: acumuladosVenta.acumHoy.montoTiempoAire, 
					montoServicios: acumuladosVenta.acumHoy.montoServicios, montoImpuestos: acumuladosVenta.acumHoy.montoImpuestos, ventaObjetivo: acumuladosVenta.acumHoy.ventaObjetivo,
					ticketPromedio: acumuladosVenta.acumHoy.ticketPromedio, transacciones: acumuladosVenta.acumHoy.transacciones, numTiendas: acumuladosVenta.acumHoy.numTiendas,
					trafico: acumuladosVenta.acumHoy.trafico};
			recalculaAcumulados();
			recalculaAcumuladosMovil();
		
			
		} else if(data.ventaGeneral.length == 1 && data.ventaPorUbicacion.length > 0) {
			var suma = 0;
			var sumaMovil = 0;
			if($("#checkMercancias").is(":checked")) {
				suma += parseFloat(data.ventaGeneral[0].montoNeto);
			}
			if($("#checkTiempoAire").is(":checked")) {
				suma += parseFloat(data.ventaGeneral[0].montoTiempoAire);
			}
			if($("#checkServicios").is(":checked")) {
				suma += parseFloat(data.ventaGeneral[0].montoServicios);
			}
			if($("#checkImpuestosMovil").is(":checked")) {
				suma += parseFloat(data.ventaGeneral[0].montoImpuestos);
			}
			if($("#checkMercanciasMovil").is(":checked")) {
				sumaMovil += parseFloat(data.ventaGeneral[0].montoNeto);
			}
			if($("#checkTiempoAireMovil").is(":checked")) {
				sumaMovil += parseFloat(data.ventaGeneral[0].montoTiempoAire);
			}
			if($("#checkServiciosMovil").is(":checked")) {
				sumaMovil += parseFloat(data.ventaGeneral[0].montoServicios);
			}
			if($("#checkImpuestosMovil").is(":checked")) {
				sumaMovil += parseFloat(data.ventaGeneral[0].montoImpuestos);
			}
			
			$("#montoVentaTotal").html("$ " + formato(suma,true));
			$("#montoVentaTotalMovil").html("$ " + formato(sumaMovil,true));
			$("#montoNeto").html("$ " + formato(parseFloat(data.ventaGeneral[0].montoNeto),true));
			$("#montoTiempoAire").html("$ " + formato(parseFloat(data.ventaGeneral[0].montoTiempoAire),true));
			$("#montoServicios").html("$ " + formato(parseFloat(data.ventaGeneral[0].montoServicios),true));
			$("#montoImpuestos").html("$ " + formato(parseFloat(data.ventaGeneral[0].montoImpuestos),true));
			$("#montoNetoMovil").html("$ " + formato(parseFloat(data.ventaGeneral[0].montoNeto),true));
			$("#montoTiempoAireMovil").html("$ " + formato(parseFloat(data.ventaGeneral[0].montoTiempoAire),true));
			$("#montoServiciosMovil").html("$ " + formato(parseFloat(data.ventaGeneral[0].montoServicios),true));
			$("#montoImpuestosMovil").html("$ " + formato(parseFloat(data.ventaGeneral[0].montoImpuestos),true));
			

			$("#ventaObjetivo").html("$ " + formato(parseFloat(data.ventaGeneral[0].ventaObjetivo),true));
			//$("#porcentajeVentaObjetivo").html((parseFloat(objetoVenta.porcentajeVentas) * 100).toFixed(0) + "%");
			//bar.animate(objetoVenta.porcentajeVentas);
			animateColorPorcentaje(data.ventaGeneral[0].porcentajeVentas);
			animateColorPorcentajeMovil(data.ventaGeneral[0].porcentajeVentas);
			$("#ticketPromedio").html("$ " + parseFloat(formatoDecimales(parseFloat(data.ventaGeneral[0].ticketPromedio),true)).toFixed(1));
			$("#transacciones").html(formato(parseFloat(data.ventaGeneral[0].trafico),true));
			$("#numTiendas").html(formato(parseFloat(data.ventaGeneral[0].numTiendas),true));
			$("#ticketPromedioMovil").html("$ " + formato(parseFloat(data.ventaGeneral[0].ticketPromedio),true));
			$("#transaccionesMovil").html(formato(parseFloat(data.ventaGeneral[0].trafico),true));
			$("#numTiendasMovil").html(formato(parseFloat(data.ventaGeneral[0].numTiendas),true));
			$("#ventaObjetivoMovil").html("$ " + formato(parseFloat(data.ventaGeneral[0].ventaObjetivo),true));
			//validaBarrasPorcentaje(objetoVenta.porcentaje);
			
			if(data.ventaGeneral[0].montoNeto >= 1000000) {
				$("#etiquetaMillones").text("MILLONES");
				$("#etiquetaMillonesMovil").text("MILLONES");
			} else {
				$("#etiquetaMillones").text("MILES");
				$("#etiquetaMillonesMovil").text("MILES");
			}
		} else {
			$("#totalAcumSem").html("$ ---");
			$("#totalAcumSemAnterior").html("$ ---");
			$("#totalAcumSemAnioAnterior").html("$ ---");
			$("#totalAcumSemMovil").html("$ ---");
			$("#totalAcumSemAnteriorMovil").html("$ ---");
			$("#totalAcumSemAnioAnteriorMovil").html("$ ---");
			recalculaTotal();
			recalculaTotalMovil();
		}
		
		limpiaCategorias();
		imprimeNodos(tipoCategoriaId);
	} else {
		$("#contenedorRegionesZonasTiendas").html("<div style='padding-top: 200px;padding-left: 27px;'><div style='float: left;'><img src='images/noData.png' width='40px' /></div>" +
				"<div style='float: left;padding-top: 12px;padding-left: 5px;'><label> No se encontraron resultados</label></div></div>");
		$("#contenedorRegionesZonasTiendas2").html("<div style='padding-top: 130px;padding-left: 10px;'><div style='float: left;'><img src='images/noData.png' width='30px' /></div>" +
				"<div style='float: left;padding-top: 12px;padding-left: 5px;'><label> No se encontraron resultados</label></div></div>");
	}
}

function redibujaGrafica() {
	var chart = $('#container').highcharts();
	//var tipoConsulta = $("#check-1").is(":checked") ? 2 : 1;
	if(chart != undefined) {
		
		while(chart.series.length > 0) {
			chart.series[chart.series.length - 1].remove();
		}
		
		if($("#checkMercancias").is(":checked")) {
			chart.addSeries({
				type: 'spline',
          	  	name: 'Venta objetivo',
          	  	data: arrayVentaObjetivo,
          	  	color: '#106FAD',
          	  	marker: {
          	  		lineWidth: 3,
          	  		lineColor: '#106FAD',
          	  		fillColor: 'white',
          	  		symbol: 'circle'
              	}
		    });
			
			chart.addSeries({
				type: 'areaspline',
        		name: 'A\u00F1o anterior',
        		data: arrayAnioPasado,
        		showInLegend : false,
        		marker: {
            		lineWidth: 3,
            		lineColor: '#FD7925',
            		fillColor: 'white',
            		symbol: 'circle'
            	},
            	lineColor: '#FD7925',
                color: '#E7CEBC'
		    });
		}
		
		if($("#checkTiempoAire").is(":checked")) {
			chart.addSeries({
		    	type: 'column',
		       	name: 'Tiempo Aire',
		       	color: '#FED558',
		       	data: arrayTiempoAire,
		       	pointWidth: 20,
		       	showInLegend: true
		    });
		}
		if($("#checkServicios").is(":checked")) {
			chart.addSeries({
				type: 'column',
	           	name: 'Servicios',
	           	color: '#6AD8BE',
	           	data: arrayServicios,
	           	pointWidth: 20,
	           	showInLegend: true
		    });
		}
		if($("#checkImpuestos").is(":checked")) {
			chart.addSeries({
				type: 'column',
	           	name: 'Impuestos',
	           	color: '#94E1FF',
	           	data: arrayImpuestos,
	           	pointWidth: 20,
	           	showInLegend: true
		    });
		}
		
		if($("#checkMercancias").is(":checked")) {
			
			
			chart.addSeries({
				type: 'column',
            	name: 'D\u00EDa actual',
            	color: '#000000',
            	data: [],
            	pointWidth: 1
		    });
			
			chart.addSeries({
				type: 'column',
            	name: 'Venta real',
            	color: '#B3CC44',
            	data: arrayAnioActual,
            	pointWidth: 20
		    });
			
			chart.addSeries({
				type: 'spline',
            	name: 'A\u00F1o anterior',
            	color: '#FD630C',
            	data: [],
            	pointWidth: 1,
    	       	marker: {
        			lineWidth: 3,
        			lineColor: '#FD7925',
        			fillColor: 'white',
        			symbol: 'circle'
        		}
		    });
		}
		
		
		
		
		
		
		
		
		/*
		 * 
		 * 
		 * 
		
		{
            	  type: 'spline',
            	  name: 'Venta objetivo',
            	  data: arrayVentaObjetivo,
            	  marker: {
            	  	lineWidth: 3,
            	  	lineColor: '#106FAD',
            	  	fillColor: 'white'
              	  }
            },
            {
        		type: 'areaspline',
        		name: 'Aanterior',
        		data: arrayAnioAnterior,
        		showInLegend : false,
        		marker: {
            		lineWidth: 3,
            		lineColor: '#FD7925',
            		fillColor: 'white',
            		symbol: 'circle'
            	},
            	lineColor: '#FD7925',
                color: '#E7CEBC'
        	},
        	{
            	type: 'column',
            	name: 'D\u00EDa actual',
            	color: '#000000',
            	data: [],
            	pointWidth: 1
        	},
        	{
            	type: 'column',
            	name: 'Venta real',
            	color: '#B3CC44',
            	data: arrayVentaReal,
            	pointWidth: 20
        	},
        	{
            	type: 'spline',
            	name: 'Ano anterior',
            	color: '#FD630C',
            	data: [],
            	pointWidth: 1,
    	       	marker: {
        			lineWidth: 3,
        			lineColor: '#FD7925',
        			fillColor: 'white',
        			symbol: 'circle'
        		}
        	},




		if(chart.series.length == 8) {
			chart.series[7].remove();
			chart.series[6].remove();
			chart.series[5].remove();
			chart.series[4].remove();
			chart.series[3].remove();
		} else if(chart.series.length == 7) {
			chart.series[6].remove();
			chart.series[5].remove();
			chart.series[4].remove();
			chart.series[3].remove();
		} else if(chart.series.length == 6) {
			chart.series[5].remove();
			chart.series[4].remove();
			chart.series[3].remove();
		} else {
			chart.series[chart.series.length - 1].remove();
			chart.series[chart.series.length - 1].remove();
		}

		if($("#checkTiempoAire").is(":checked")) {
			chart.addSeries({
		    	type: 'column',
		       	name: 'Tiempo Aire',
		       	color: '#FED558',
		       	data: arrayTiempoAire,
		       	pointWidth: 20,
		       	showInLegend: true
		    });
		}
		if($("#checkServicios").is(":checked")) {
			chart.addSeries({
				type: 'column',
	           	name: 'Servicios',
	           	color: '#6AD8BE',
	           	data: arrayServicios,
	           	pointWidth: 20,
	           	showInLegend: true
		    });
		}
		if($("#checkImpuestos").is(":checked")) {
			chart.addSeries({
				type: 'column',
	           	name: 'Impuestos',
	           	color: '#94E1FF',
	           	data: arrayImpuestos,
	           	pointWidth: 20,
	           	showInLegend: true
		    });
		}
		if($("#checkMercancias").is(":checked")) {
			chart.addSeries({
		    	type: 'column',
		       	name: 'Venta real',
		       	color: '#B3CC44',
		       	data: arrayAnioActual,
		       	pointWidth: 20
		    });
		} else {
			chart.addSeries({
		    	type: 'column',
		       	name: 'Venta real',
		       	color: '#B3CC44',
		       	data: [],
		       	pointWidth: 20
		    });
		}
		chart.addSeries({
	    	type: 'spline',
	       	name: 'Aanterior',
	       	color: '#FD7925',
	       	data: [],
	       	pointWidth: 1,
	       	marker: {
    			lineWidth: 3,
    			lineColor: '#FD7925',
    			fillColor: 'white',
    			symbol: 'circle'
    		}
	    });*/
		
		cargaTotalesPorSemana();
	}
	
	
	var chartMovil = $('#containerSmall').highcharts();
	if(chartMovil != undefined) {
		if(chartMovil.series.length == 8) {
			chartMovil.series[7].remove();
			chartMovil.series[6].remove();
			chartMovil.series[5].remove();
			chartMovil.series[4].remove();
			chartMovil.series[3].remove();
		} else if(chartMovil.series.length == 7) {
			chartMovil.series[6].remove();
			chartMovil.series[5].remove();
			chartMovil.series[4].remove();
			chartMovil.series[3].remove();
		} else if(chartMovil.series.length == 6) {
			chartMovil.series[5].remove();
			chartMovil.series[4].remove();
			chartMovil.series[3].remove();
		} else {
			chartMovil.series[chartMovil.series.length - 1].remove();
			chartMovil.series[chartMovil.series.length - 1].remove();
		}
		
		if($("#checkTiempoAireMovil").is(":checked")) {
			chartMovil.addSeries({
		    	type: 'column',
		       	name: 'Tiempo Aire',
		       	color: '#FED558',
		       	data: arrayTiempoAire,
		       	pointWidth: 12,
		       	showInLegend: true
		    });
		}
		if($("#checkServiciosMovil").is(":checked")) {
			chartMovil.addSeries({
				type: 'column',
	           	name: 'Servicios',
	           	color: '#6AD8BE',
	           	data: arrayServicios,
	           	pointWidth: 12,
	           	showInLegend: true
		    });
		}
		if($("#checkImpuestosMovil").is(":checked")) {
			chartMovil.addSeries({
				type: 'column',
	           	name: 'Impuestos',
	           	color: '#94E1FF',
	           	data: arrayImpuestos,
	           	pointWidth: 12,
	           	showInLegend: true
		    });
		}
		if($("#checkMercanciasMovil").is(":checked")) {
			chartMovil.addSeries({
		    	type: 'column',
		       	name: 'Venta real',
		       	color: '#B3CC44',
		       	data: arrayAnioActual,
		       	pointWidth: 12
		    });
		} else {
			chartMovil.addSeries({
		    	type: 'column',
		       	name: 'Venta real',
		       	color: '#B3CC44',
		       	data: [],
		       	pointWidth: 12
		    });
		}
		chartMovil.addSeries({
	    	type: 'spline',
	       	name: 'A\u00F1o anterior',
	       	color: '#FD7925',
	       	data: [],
	       	pointWidth: 1,
	       	marker: {
    			lineWidth: 3,
    			lineColor: '#FD7925',
    			fillColor: 'white',
    			symbol: 'circle'
    		}
	    });
		
		if(tipoConsultaGrafica == 1) {
			cargaTotalesPorSemanaMovil();
			/*
			var suma1 = 0;
			var suma2 = 0;
			var suma3 = 0;
			if($("#checkMercanciasMovil").is(":checked")) {
				if(arrayTotales[0].total != undefined) {
					suma1 += parseFloat(arrayTotales[0].total);
				}
				if(arrayTotales[1].total != undefined) {
					suma2 += parseFloat(arrayTotales[1].total);
				}
				if(arrayTotales[2].total != undefined) {
					suma3 += parseFloat(arrayTotales[2].total);
				}
			}
			if($("#checkTiempoAireMovil").is(":checked")) {
				if(arrayTotales[0].montoTiempoAire != undefined) {
					suma1 += parseFloat(arrayTotales[0].montoTiempoAire);
				}
				if(arrayTotales[1].montoTiempoAire != undefined) {
					suma2 += parseFloat(arrayTotales[1].montoTiempoAire);
				}
				if(arrayTotales[2].montoTiempoAire != undefined) {
					suma3 += parseFloat(arrayTotales[2].montoTiempoAire);
				}
			}
			if($("#checkServiciosMovil").is(":checked")) {
				if(arrayTotales[0].montoServicios != undefined) {
					suma1 += parseFloat(arrayTotales[0].montoServicios);
				}
				if(arrayTotales[1].montoServicios != undefined) {
					suma2 += parseFloat(arrayTotales[1].montoServicios);
				}
				if(arrayTotales[2].montoServicios != undefined) {
					suma3 += parseFloat(arrayTotales[2].montoServicios);
				}
			}
			if($("#checkImpuestosMovil").is(":checked")) {
				if(arrayTotales[0].montoImpuestos != undefined) {
					suma1 += parseFloat(arrayTotales[0].montoImpuestos);
				}
				if(arrayTotales[1].montoImpuestos != undefined) {
					suma2 += parseFloat(arrayTotales[1].montoImpuestos);
				}
				if(arrayTotales[2].montoImpuestos != undefined) {
					suma3 += parseFloat(arrayTotales[2].montoImpuestos);
				}
			}
			
			$("#semanaId1Movil").html("$ " + formato(suma1, true));
			$("#semanaId2Movil").html("$ " + formato(suma2, true));
			$("#semanaId3Movil").html("$ " + formato(suma3, true));*/
		}
	}
}

function recalculaTotal() {
	redibujaGrafica();
	recalculaAcumulados();
	imprimeNodos(idCategoriaActiva);
	var suma = 0;
	var sumaPorcentaje = objetoVenta.total;
	var porcentaje = (sumaPorcentaje) / objetoVenta.ventaObjetivo;
	if($("#checkMercancias").is(":checked")) {
		suma += parseFloat(objetoVenta.total);
	}
	if($("#checkTiempoAire").is(":checked")) {
		suma += parseFloat(objetoVenta.montoTiempoAire);
	}
	if($("#checkServicios").is(":checked")) {
		suma += parseFloat(objetoVenta.montoServicios);
	}
	if($("#checkImpuestos").is(":checked")) {
		suma += parseFloat(objetoVenta.montoImpuestos);
	}
	$("#montoVentaTotal").html("$ " + formato(parseFloat(suma), true));
	$("#ventaObjetivo").html("$ " + formato(parseFloat(objetoVenta.ventaObjetivo), true));
	//$("#porcentajeVentaObjetivo").html((parseFloat(porcentaje) * 100).toFixed(0) + "%");
	//bar.animate(porcentaje);
	animateColorPorcentaje(porcentaje);
	animateColorPorcentajeMovil(porcentaje);
	$("#ticketPromedio").html("$ " + parseFloat(formatoDecimales(parseFloat(objetoVenta.ticketPromedio),true)).toFixed(1));
	$("#transacciones").html(formato(parseFloat(objetoVenta.trafico),true));
	$("#numTiendas").html(formato(parseFloat(objetoVenta.numTiendas),true));
	$("#ticketPromedioMovil").html("$ " + formato(parseFloat(objetoVenta.ticketPromedio),true));
	$("#transaccionesMovil").html(formato(parseFloat(objetoVenta.trafico),true));
	$("#numTiendasMovil").html(formato(parseFloat(objetoVenta.numTiendas),true));
	$("#ventaObjetivoMovil").html("$ " + formato(parseFloat(objetoVenta.ventaObjetivo), true));
	//validaBarrasPorcentaje(porcentaje);
	$("#montoNeto").html("$ " + formato(parseFloat(objetoVenta.total), true));
	$("#montoTiempoAire").html("$ " + formato(parseFloat(objetoVenta.montoTiempoAire), true));
	$("#montoServicios").html("$ " + formato(parseFloat(objetoVenta.montoServicios), true));
	$("#montoImpuestos").html("$ " + formato(parseFloat(objetoVenta.montoImpuestos), true));
	$("#montoNetoMovil").html("$ " + formato(parseFloat(objetoVenta.total), true));
	$("#montoTiempoAireMovil").html("$ " + formato(parseFloat(objetoVenta.montoTiempoAire), true));
	$("#montoServiciosMovil").html("$ " + formato(parseFloat(objetoVenta.montoServicios), true));
	$("#montoImpuestosMovil").html("$ " + formato(parseFloat(objetoVenta.montoImpuestos), true));
	
	
	if(parseFloat(suma) > 1000000) {
		$("#etiquetaMillones").text("MILLONES");
	} else {
		$("#etiquetaMillones").text("MILES");
	}	
	
}

function recalculaTotalMovil() {
	redibujaGrafica();
	imprimeNodos(idCategoriaActiva);
	var suma = 0;
	var sumaPorcentaje = objetoVenta.total;
	var porcentaje = (sumaPorcentaje) / objetoVenta.ventaObjetivo;
	if($("#checkMercanciasMovil").is(":checked")) {
		suma += parseFloat(objetoVenta.total);
	}
	if($("#checkTiempoAireMovil").is(":checked")) {
		suma += parseFloat(objetoVenta.montoTiempoAire);
	}
	if($("#checkServiciosMovil").is(":checked")) {
		suma += parseFloat(objetoVenta.montoServicios);
	}
	if($("#checkImpuestosMovil").is(":checked")) {
		suma += parseFloat(objetoVenta.montoImpuestos);
	}
	$("#montoVentaTotalMovil").html("$ " + formato(parseFloat(suma), true));
	$("#ventaObjetivoMovil").html("$ " + formato(parseFloat(objetoVenta.ventaObjetivo), true));
	animateColorPorcentajeMovil(porcentaje);
	$("#ticketPromedioMovil").html("$ " + formato(parseFloat(objetoVenta.ticketPromedio),true));
	$("#transaccionesMovil").html(formato(parseFloat(objetoVenta.trafico),true));
	$("#numTiendasMovil").html(formato(parseFloat(objetoVenta.numTiendas),true));
	$("#ventaObjetivoMovil").html("$ " + formato(parseFloat(objetoVenta.ventaObjetivo), true));
	$("#montoNetoMovil").html("$ " + formato(parseFloat(objetoVenta.total), true));
	$("#montoTiempoAireMovil").html("$ " + formato(parseFloat(objetoVenta.montoTiempoAire), true));
	$("#montoServiciosMovil").html("$ " + formato(parseFloat(objetoVenta.montoServicios), true));
	$("#montoImpuestosMovil").html("$ " + formato(parseFloat(objetoVenta.montoImpuestos), true));
	
	
	if(parseFloat(suma) > 1000000) {
		$("#etiquetaMillonesMovil").text("MILLONES");
	} else {
		$("#etiquetaMillonesMovil").text("MILES");
	}	
	
}

function recalculaAcumulados() {
	//Establece valores de venta

	if(acumuladosVenta != undefined && acumuladosVenta.acumSemActual != undefined) {
		var suma = 0;
		if($("#checkMercancias").is(":checked") && acumuladosVenta.acumSemActual.montoNeto != undefined) {
			suma += parseFloat(acumuladosVenta.acumSemActual.montoNeto);
		}
		if($("#checkTiempoAire").is(":checked") && acumuladosVenta.acumSemActual.montoTiempoAire != undefined) {
			suma += parseFloat(acumuladosVenta.acumSemActual.montoTiempoAire);
		}
		if($("#checkServicios").is(":checked") && acumuladosVenta.acumSemActual.montoServicios != undefined) {
			suma += parseFloat(acumuladosVenta.acumSemActual.montoServicios);
		}
		if($("#checkImpuestos").is(":checked") && acumuladosVenta.acumSemActual.montoImpuestos != undefined) {
			suma += parseFloat(acumuladosVenta.acumSemActual.montoImpuestos);
		}
	
		if(acumuladosVenta.acumSemActual.montoNeto != undefined) {
			$("#totalAcumSem").html("$ " + formato(parseFloat(acumuladosVenta.acumSemActual.montoNeto) + suma), true);
			//$('span[id="totalAcumSem"]').html("$ " + formato(parseFloat(acumuladosVenta.acumSemActual.montoNeto) + suma), true);
		} else {
			$("#totalAcumSem").html("$ ---"); 
			//$('span[id="totalAcumSem"]').html("$ ---");
		}
	}

	if(acumuladosVenta != undefined && acumuladosVenta.acumSemAnterior != undefined) {
		var suma = 0;
		if($("#checkTiempoAire").is(":checked") && acumuladosVenta.acumSemAnterior.montoTiempoAire != undefined) {
			suma += parseFloat(acumuladosVenta.acumSemAnterior.montoTiempoAire);
		}
		if($("#checkServicios").is(":checked") && acumuladosVenta.acumSemAnterior.montoServicios != undefined) {
			suma += parseFloat(acumuladosVenta.acumSemAnterior.montoServicios);
		}
		if($("#checkImpuestos").is(":checked") && acumuladosVenta.acumSemAnterior.montoImpuestos != undefined) {
			suma += parseFloat(acumuladosVenta.acumSemAnterior.montoImpuestos);
		}
	
		if(acumuladosVenta.acumSemAnterior.montoNeto != undefined) {
			$("#totalAcumSemAnterior").html("$ " + formato(parseFloat(acumuladosVenta.acumSemAnterior.montoNeto) + suma), true);
			//$('span[id="totalAcumSemAnterior"]').html("$ " + formato(parseFloat(acumuladosVenta.acumSemAnterior.montoNeto) + suma), true);
		} else {
			$("#totalAcumSemAnterior").html("$ ---");
			//$('span[id="totalAcumSemAnterior"]').html("$ ---");
		}
	}

	if(acumuladosVenta != undefined && acumuladosVenta.acumAnioPasado != undefined) {
		var suma = 0;
		if($("#checkMercancias").is(":checked") && acumuladosVenta.acumAnioPasado.montoNeto != undefined) {
			suma += parseFloat(acumuladosVenta.acumAnioPasado.montoTiempoAire);
		}
		if($("#checkTiempoAire").is(":checked") && acumuladosVenta.acumAnioPasado.montoTiempoAire != undefined) {
			suma += parseFloat(acumuladosVenta.acumAnioPasado.montoTiempoAire);
		}
		if($("#checkServicios").is(":checked") && acumuladosVenta.acumAnioPasado.montoServicios != undefined) {
			suma += parseFloat(acumuladosVenta.acumAnioPasado.montoServicios);
		}
		if($("#checkImpuestos").is(":checked") && acumuladosVenta.acumAnioPasado.montoImpuestos != undefined) {
			suma += parseFloat(acumuladosVenta.acumAnioPasado.montoImpuestos);
		}
	
		if(acumuladosVenta.acumAnioPasado.montoNeto != undefined) {
			$("#totalAcumSemAnioAnterior").html("$ " + formato(parseFloat(acumuladosVenta.acumAnioPasado.montoNeto) + suma), true);
			//$('span[id="totalAcumSemAnioAnterior"]').html("$ " + formato(parseFloat(acumuladosVenta.acumAnioPasado.montoNeto) + suma), true);
		} else {
			$("#totalAcumSemAnioAnterior").html("$ ---");
			//$('span[id="totalAcumSemAnioAnterior"]').html("$ ---");
		}
	}
}

function recalculaAcumuladosMovil() {
	//Establece valores de venta

	if(acumuladosVenta != undefined && acumuladosVenta.acumSemActual != undefined) {
		var suma = 0;
		if($("#checkMercanciasMovil").is(":checked") && acumuladosVenta.acumSemActual.montoNeto != undefined) {
			suma += parseFloat(acumuladosVenta.acumSemActual.montoNeto);
		}
		if($("#checkTiempoAireMovil").is(":checked") && acumuladosVenta.acumSemActual.montoTiempoAire != undefined) {
			suma += parseFloat(acumuladosVenta.acumSemActual.montoTiempoAire);
		}
		if($("#checkServiciosMovil").is(":checked") && acumuladosVenta.acumSemActual.montoServicios != undefined) {
			suma += parseFloat(acumuladosVenta.acumSemActual.montoServicios);
		}
		if($("#checkImpuestosMovil").is(":checked") && acumuladosVenta.acumSemActual.montoImpuestos != undefined) {
			suma += parseFloat(acumuladosVenta.acumSemActual.montoImpuestos);
		}
	
		if(acumuladosVenta.acumSemActual.montoNeto != undefined) {
			$("#totalAcumSemMovil").html("$ " + formato(parseFloat(acumuladosVenta.acumSemActual.montoNeto) + suma), true);
			//$('span[id="totalAcumSem"]').html("$ " + formato(parseFloat(acumuladosVenta.acumSemActual.montoNeto) + suma), true);
		} else {
			$("#totalAcumSemMovil").html("$ ---"); 
			//$('span[id="totalAcumSem"]').html("$ ---");
		}
	}

	if(acumuladosVenta != undefined && acumuladosVenta.acumSemAnterior != undefined) {
		var suma = 0;
		if($("#checkMercanciasMovil").is(":checked") && acumuladosVenta.acumSemAnterior.montoNeto != undefined) {
			suma += parseFloat(acumuladosVenta.acumSemAnterior.montoNeto);
		}
		if($("#checkTiempoAireMovil").is(":checked") && acumuladosVenta.acumSemAnterior.montoTiempoAire != undefined) {
			suma += parseFloat(acumuladosVenta.acumSemAnterior.montoTiempoAire);
		}
		if($("#checkServiciosMovil").is(":checked") && acumuladosVenta.acumSemAnterior.montoServicios != undefined) {
			suma += parseFloat(acumuladosVenta.acumSemAnterior.montoServicios);
		}
		if($("#checkImpuestosMovil").is(":checked") && acumuladosVenta.acumSemAnterior.montoImpuestos != undefined) {
			suma += parseFloat(acumuladosVenta.acumSemAnterior.montoImpuestos);
		}
	
		if(acumuladosVenta.acumSemAnterior.montoNeto != undefined) {
			$("#totalAcumSemAnteriorMovil").html("$ " + formato(parseFloat(acumuladosVenta.acumSemAnterior.montoNeto) + suma), true);
			//$('span[id="totalAcumSemAnterior"]').html("$ " + formato(parseFloat(acumuladosVenta.acumSemAnterior.montoNeto) + suma), true);
		} else {
			$("#totalAcumSemAnteriorMovil").html("$ ---");
			//$('span[id="totalAcumSemAnterior"]').html("$ ---");
		}
	}

	if(acumuladosVenta != undefined && acumuladosVenta.acumAnioPasado != undefined) {
		var suma = 0;
		if($("#checkMercanciasMovil").is(":checked") && acumuladosVenta.acumAnioPasado.montoNeto != undefined) {
			suma += parseFloat(acumuladosVenta.acumAnioPasado.montoNeto);
		}
		if($("#checkTiempoAireMovil").is(":checked") && acumuladosVenta.acumAnioPasado.montoTiempoAire != undefined) {
			suma += parseFloat(acumuladosVenta.acumAnioPasado.montoTiempoAire);
		}
		if($("#checkServiciosMovil").is(":checked") && acumuladosVenta.acumAnioPasado.montoServicios != undefined) {
			suma += parseFloat(acumuladosVenta.acumAnioPasado.montoServicios);
		}
		if($("#checkImpuestosMovil").is(":checked") && acumuladosVenta.acumAnioPasado.montoImpuestos != undefined) {
			suma += parseFloat(acumuladosVenta.acumAnioPasado.montoImpuestos);
		}
	
		if(acumuladosVenta.acumAnioPasado.montoNeto != undefined) {
			$("#totalAcumSemAnioAnteriorMovil").html("$ " + formato(parseFloat(acumuladosVenta.acumAnioPasado.montoNeto) + suma), true);
			//$('span[id="totalAcumSemAnioAnterior"]').html("$ " + formato(parseFloat(acumuladosVenta.acumAnioPasado.montoNeto) + suma), true);
		} else {
			$("#totalAcumSemAnioAnteriorMovil").html("$ ---");
			//$('span[id="totalAcumSemAnioAnterior"]').html("$ ---");
		}
	}
}

function responseVentaXDiaYSemana(data){
	//console.log("LA DATA", data);
	if (data != null && data != "" && data != undefined && data.codigoError != -1 && data.ventaAnioActual.length > 0) {
		
		arrayAnioActual = new Array();
		arrayTiempoAire = new Array();
		arrayServicios = new Array();
		arrayImpuestos = new Array();
		
		arrayFechasCompleta = new Array();
		arrayFechas = new Array();
		arrayVentaObjetivo = new Array();
		arrayAnioPasado = new Array();
		arrayTiendasActual = new Array();
		arrayTiendasPasado = new Array();
		arrayTotales = [{semana: 0, total: 0}, {semana: 0, total: 0}, {semana: 0, total: 0}];
		//var tipoConsulta = $("#check-1").is(":checked") ? 2 : 1;
		$('#checkTipoConsulta').show();
		$('#checkTipoConsultaText').show();
		$('#checkTipoConsultaMovil').show();
		var fechaActual = obtieneFechaActual();
		var anioActual = obtieneAnnioActual();
		var contadorSemana1 = 0;
		var contadorSemana2 = 0;
		var contadorSemana3 = 0;
		var semana1 = "";
		var semana2 = "";
		var semana3 = "";
		
		if(data.ventasTotales != undefined && data.ventasTotales.length > 0) {
			arrayTotales = [];
			arrayVentaObjetivoTot = [];
			for(var i = 0; i < data.ventasTotales.length; i++) {
				arrayTotales.push({semana: data.ventasTotales[i].semana, total: data.ventasTotales[i].montoGeneral, montoImpuestos: data.ventasTotales[i].montoImpuestos,
					montoTiempoAire: data.ventasTotales[i].montoTiempoAire, montoServicios: data.ventasTotales[i].montoServicios, anio: data.ventasTotales[i].anio});
				arrayVentaObjetivoTot.push({semana: data.ventasTotales[i].semana, ventaObjetivo: data.ventasTotales[i].ventaObjetivo});
				if(i == 0) {
					semana1 = data.ventasTotales[i].semana;
				} else if(i == 1) {
					semana2 = data.ventasTotales[i].semana;
				} else {
					semana3 = data.ventasTotales[i].semana;
				}
			}
		}
		if(data.ventasTotalesPasado != undefined && data.ventasTotalesPasado.length > 0) {
			arrayTotalesPasado = []
			for(var i = 0; i < data.ventasTotalesPasado.length; i++) {
				arrayTotalesPasado.push({semana: data.ventasTotalesPasado[i].semana, total: data.ventasTotalesPasado[i].montoGeneral, montoImpuestos: data.ventasTotalesPasado[i].montoImpuestos,
					montoTiempoAire: data.ventasTotalesPasado[i].montoTiempoAire, montoServicios: data.ventasTotalesPasado[i].montoServicios, anio: data.ventasTotalesPasado[i].anio});
			}
		}
		
		for(var i = 0; i < data.ventaAnioActual.length; i++) {
			var anioDatos = "";
			if(tipoConsultaGrafica == 1) {
				var fecha = "-";
				var fechaC = "-";
				var fechas;
				if(data.ventaAnioActual[i].semana != undefined && data.ventaAnioActual[i].semana > 0) {
					var fechas = data.ventaAnioActual[i].fecha.split("/");
					fecha = fechas[0] + "/" + fechas[1];
					fechaC = obtieneFormatoFechaCompleta(fechas[0], fechas[1], fechas[2]);
					anioDatos = fechas[2];
				}
				arrayFechas.push(fecha);
				arrayFechasCompleta.push(fechaC);
			} else  if(tipoConsultaGrafica == 2) {
				var fecha = "-";
				var fechaCompleta = "";
				if(data.ventaAnioActual[i].semana != undefined && data.ventaAnioActual[i].semana.length > 0) {
					var fechas = data.ventaAnioActual[i].semana.split("|");
					fecha = fechas[0] + "/" + fechas[1];
					anioDatos = fechas[1];
					fechaCompleta = "Semana " + fechas[0] + " del " + fechas[1];
				}
				arrayFechas.push(fecha);
				arrayFechasCompleta.push(fechaCompleta);
			} else {
				var fecha = "-";
				var fechaCompleta = "";
				if(data.ventaAnioActual[i].mes != undefined && data.ventaAnioActual[i].mes > 0) {
					fecha = data.ventaAnioActual[i].mes + "/" + data.ventaAnioActual[i].anio;
					anioDatos = data.ventaAnioActual[i].anio;
					fechaCompleta = "Mes " + data.ventaAnioActual[i].mes + " del " + data.ventaAnioActual[i].anio;
				}
				arrayFechas.push(fecha);
				arrayFechasCompleta.push(fechaCompleta);
			}
			
			if(data.ventaAnioActual[i].fecha == fechaActual) {
				arrayAnioActual.push({y: data.ventaAnioActual[i].montoGeneral, color: '#000000'});
			} else if(parseInt(anioDatos) < parseInt(anioActual)) {
				arrayAnioActual.push({y: data.ventaAnioActual[i].montoGeneral, color: '#F3C167'});
			} else {
				arrayAnioActual.push(data.ventaAnioActual[i].montoGeneral);
			}
			arrayTiempoAire.push({x: i, y: data.ventaAnioActual[i].montoTiempoAire});
			arrayServicios.push({x: i, y: data.ventaAnioActual[i].montoServicios});
			arrayImpuestos.push({x: i, y: data.ventaAnioActual[i].montoImpuestos});
			arrayVentaObjetivo.push(data.ventaAnioActual[i].ventaObjetivo);
			arrayTiendasActual.push(data.ventaAnioActual[i].numeroTiendas);
			
			if(semana1 == data.ventaAnioActual[i].semana) {
				contadorSemana1++;
			}
			if(semana2 == data.ventaAnioActual[i].semana) {
				contadorSemana2++;
			}
			if(semana3 == data.ventaAnioActual[i].semana) {
				contadorSemana3++;
			}
		}
		semanasContador = {semana1: contadorSemana1, semana2: contadorSemana2, semana3: contadorSemana3};
		
		for(var i = 0; i < data.ventaAnioPasado.length; i++) {
			arrayAnioPasado.push(data.ventaAnioPasado[i].montoGeneral);
			arrayTiendasPasado.push(data.ventaAnioPasado[i].numeroTiendas);
		}
		
		imprimeGrafica(arrayFechasCompleta, arrayFechas, arrayVentaObjetivo, arrayAnioActual, arrayAnioPasado, arrayTiendasActual, arrayTiendasPasado, 
				tipoConsultaGrafica, arrayTotales, semanasContador, arrayTiempoAire, arrayServicios, arrayImpuestos);
		redibujaGrafica();
	} else if(data != undefined && data.codigoError != undefined && data.codigoError == 1 && data.ventaAnioActual != undefined && data.ventaAnioActual.length == 0) {
		$('#checkTipoConsulta').show();
		$('#checkTipoConsultaText').show();
		$('#checkTipoConsultaMovil').show();
		//var tipoConsulta = $("#check-1").is(":checked") ? 2 : 1;
		var index = 1;
		
		if(tipoConsultaGrafica == 1) {
			index = 2;
		} else if(tipoConsultaGrafica == 2) {
			index = 15;
		} else {
			index = 25;
		}
		
		if(tipoPaginado == 1) {
			var fecha = stringToDate(fechaFinalGrafica,"dd/MM/yyyy","/").addDays(7 * index);
			
			if(fecha >= limiteSuperiorFechas) {
				$("#botonAdelanteGrafica").addClass("bloqueaFlechaGrafica");
				$("#botonAdelanteGraficaMovil").addClass("bloqueaFlechaGrafica");
				fechaFinalGrafica = formatDate(limiteSuperiorFechas);
				fechaInicialGrafica = formatDate(limiteSuperiorFechas.addDays(-(7 * index)));
			} else {
				$("#botonAtrasGrafica").removeClass("bloqueaFlechaGrafica");
				$("#botonAtrasMovil").removeClass("bloqueaFlechaGrafica");
				fechaInicialGrafica = fechaFinalGrafica;
				fechaFinalGrafica = formatDate(fecha);
			}
		} else {
			var fecha = stringToDate(fechaInicialGrafica,"dd/MM/yyyy","/").addDays(-(7 * index));
			
			if(fecha <= limiteInferiorFechas) {
				$("#botonAtrasGrafica").addClass("bloqueaFlechaGrafica");
				$("#botonAtrasGraficaMovil").addClass("bloqueaFlechaGrafica");
				fechaFinalGrafica = formatDate(new Date(stringToDate(fechaInicialGrafica,"dd/MM/yyyy","/")));
				fechaInicialGrafica = formatDate(limiteInferiorFechas);
			} else {
				$("#botonAdelanteGrafica").removeClass("bloqueaFlechaGrafica");
				$("#botonAdelanteGraficaMovil").removeClass("bloqueaFlechaGrafica");
				fechaFinalGrafica = formatDate(new Date(stringToDate(fechaInicialGrafica,"dd/MM/yyyy","/")));
				fechaInicialGrafica = formatDate(fecha);
			}
		}
		
		imprimeGrafica(arrayFechasCompleta, arrayFechas, arrayVentaObjetivo, arrayAnioActual, arrayAnioPasado, arrayTiendasActual, arrayTiendasPasado, 
				tipoConsultaGrafica, arrayTotales, semanasContador, arrayTiempoAire, arrayServicios, arrayImpuestos);
		redibujaGrafica();
		
		$(".contenedor_botones_alert>.aceptar_btn").show();
		$(".contenedor_botones_alert>.si_btn").hide();
		$(".contenedor_botones_alert>.no_btn").hide();
		mensajePop2("No existe informaci&oacute;n para este rango de fechas");
	}else {
		$('#checkTipoConsulta').hide();
		$('#checkTipoConsultaText').hide();
		$('#checkTipoConsultaMovil').hide();
		$("#container").html("<div style='padding-top: 100px;padding-left: 200px;'><div style='float: left;'><img src='images/noData.png' width='40px' /></div>" +
		"<div style='float: left;padding-top: 12px;padding-left: 5px;'><label> No se encontraron resultados</label></div></div>");
		$("#containerSmall").html("<div style='padding-top: 100px;padding-left: 50px;'><div style='float: left;'><img src='images/noData.png' width='40px' /></div>" +
		"<div style='float: left;padding-top: 12px;padding-left: 5px;'><label> No se encontraron resultados</label></div></div>");
	}
}

function errorVenta(data) {
	$(".contenedor_botones_alert>.aceptar_btn").show();
	$(".contenedor_botones_alert>.si_btn").hide();
	$(".contenedor_botones_alert>.no_btn").hide();
	mensajePop2("Error al consultar el detalle de ventas por regi&oacute;n: " + data.mensajeError);
}

function errorVentaGrafica(data) {
	$(".contenedor_botones_alert>.aceptar_btn").show();
	$(".contenedor_botones_alert>.si_btn").hide();
	$(".contenedor_botones_alert>.no_btn").hide();
	mensajePop2("Error al consultar el detalle de ventas por d&iacute;a/Semana: " + data.mensajeError);
}

function imprimeGrafica(arrayFechaCompleta, arrayLabels, arrayVentaObjetivo, arrayVentaReal, arrayAnioAnterior, arrayTiendasActual, 
		arrayTiendasPasado, tipoConsulta, arrayTotales, semanasContador, arrayTiempoAire, arrayServicios, arrayImpuestos) {
	$("#container").html();
	$("#botonAtrasGrafica").show();
	$("#botonAdelanteGrafica").show();
	$("#botonAtrasGraficaMovil").show();
	$("#botonAdelanteGraficaMovil").show();
	$('#container').highcharts({
        title: {
            text: ''//'VENTAS DEL: ' + fechaInicialGrafica + " AL: " +  fechaFinalGrafica,
            //align: 'center',
            //x: -30
        },
        legend: {
        	align: "center",
            x: -50, // = marginLeft - default spacingLeft
            width: 400
        },
        chart: {
            backgroundColor: {
                linearGradient: [0, 0, 500, 500],
                stops: [
                    [0, 'rgb(255, 255, 255)'],
                    [1, 'rgb(226, 227, 233)']
                ]
            },
            renderTo: 'container',
            type: 'column',
            width: 630,
            height: 420,
            marginTop: 50,
            marginBottom: 100,
            spacingLeft: 100,
            marginLeft: 50,
            marginRight: 60
        },
        yAxis: [{ // Primary yAxis
            labels: {
            	formatter : function(){
                	if(this.value > 999999)
                		return this.value / 1000000 + ' mdp';
                	else if(this.value > 999 && this.value < 999999)
                		return this.value / 1000 + ' mil';
                	else
                		return this.value;
                },
                style: {
                    color: '#9C9C9C'
                }
            },
            title: {
                text: '',
                offset:0,
                rotation:0,
                align:'high',
                y: -10,
                x:50,
                style: {
                    color: '#9C9C9C'
                }
            },
            opposite: true

        }],
        xAxis: {
            categories: arrayLabels,
            plotLines: [{
                color: '#19243C',
                width: 2,
                value: parseInt(semanasContador.semana1) - 0.5,
                zIndex: 7
            },
            {
                color: '#19243C',
                width: 2,
                value: parseInt(semanasContador.semana1) + parseInt(semanasContador.semana2) - 0.5,
                zIndex: 7
            }],
            labels: {
                rotation: -45
            }
        },
        labels: {
            items: [{
                html: '',
                style: {
                    left: '50px',
                    top: '18px',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            }]
        },
        tooltip: {
        	borderColor: Highcharts.getOptions().colors[0],
        	formatter: function () {
        		var s = ''; 
        		var index = this.points[0].point.x;
        		var fecha = this.points[0].point.category;
        		
        		if(tipoConsulta == 1) {
        			s += "<b>D\u00EDa: </b> " + arrayFechaCompleta[index];
        		} else {
        			s += "<b>Semana: </b> " + arrayFechaCompleta[index];
        		}
        		s += "<br/>";
        		
        		var ventaRealGraf = arrayVentaReal[index] != undefined ? arrayVentaReal[index] : "-";
        		if(ventaRealGraf.y != undefined) {
        			ventaRealGraf = ventaRealGraf.y;
        		}
        		var tiendasGraf = arrayTiendasActual[index] != undefined ? arrayTiendasActual[index] : "-";
        		var ventaAnioAntGraf = arrayAnioAnterior[index] !=  undefined ? arrayAnioAnterior[index] : "-";
        		var tiendasPasadoGraf = arrayTiendasPasado[index] != undefined ? arrayTiendasPasado[index] : "-";
        		var ventaObjGraf = arrayVentaObjetivo[index] != undefined ? arrayVentaObjetivo[index] : "-";
        		
        		s += "<b><span style='color:green;' class='verde'>Venta real: </span></b> $ " + formato(ventaRealGraf, true);
        		s += "<br/>";
        		s += "<span style='color:#B3CC44'>N\u00FAmero de tiendas: </span> " + tiendasGraf;
        		s += "<br/>";
        		s += "<b><span style='color:#FD63OC'>Venta a\u00F1o anterior: </span></b> $ " +  formato(ventaAnioAntGraf, true);
        		s += "<br/>";
        		s += "<b><span style='color:#FD63OC'>Tiendas a\u00F1o anterior: </span></b> " +  tiendasPasadoGraf;
        		s += "<br/>";
        		s += "<b><span style='color:#0B589F'>Venta objetivo: </span></b> $ " +  formato(ventaObjGraf, true);
        		
                return s;
            },
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },
        series: [
              {
            	  type: 'spline',
            	  name: 'Venta objetivo',
            	  data: arrayVentaObjetivo,
            	  marker: {
            	  	lineWidth: 3,
            	  	lineColor: '#106FAD',
            	  	fillColor: 'white'
              	  }
            },
            {
        		type: 'areaspline',
        		name: 'A\u00F1o anterior',
        		data: arrayAnioAnterior,
        		showInLegend : false,
        		marker: {
            		lineWidth: 3,
            		lineColor: '#FD7925',
            		fillColor: 'white',
            		symbol: 'circle'
            	},
            	lineColor: '#FD7925',
                color: '#E7CEBC'
        	},
        	{
            	type: 'column',
            	name: 'D\u00EDa actual',
            	color: '#000000',
            	data: [],
            	pointWidth: 1
        	},
        	{
            	type: 'column',
            	name: 'Venta real',
            	color: '#B3CC44',
            	data: arrayVentaReal,
            	pointWidth: 20
        	},
        	{
            	type: 'spline',
            	name: 'A\u00F1o anterior',
            	color: '#FD630C',
            	data: [],
            	pointWidth: 1,
    	       	marker: {
        			lineWidth: 3,
        			lineColor: '#FD7925',
        			fillColor: 'white',
        			symbol: 'circle'
        		}
        	},
          ]
    	},
    	function(chart) { // on complete
    		cargaTotalesPorSemana();
    	}
    	);
	
	$("#containerSmall").html();
	$('#containerSmall').highcharts({
        title: {
            text: ''
        },
        legend: {
        	align: "center",
            x: -10, // = marginLeft - default spacingLeft
            width: 300,
            itemStyle: {
                fontSize: "8px"
            }
        },
        chart: {
            backgroundColor: {
                linearGradient: [0, 0, 500, 500],
                stops: [
                    [0, 'rgb(255, 255, 255)'],
                    [1, 'rgb(226, 227, 233)']
                ]
            },
            type: 'line',
            width: 350,
            height: 295,
            spacingLeft: 30,
            marginLeft: 45,
            marginRight: 35,
            marginTop: 50
        },
        yAxis: [{ // Primary yAxis
            labels: {
            	formatter : function(){
                	if(this.value > 999999)
                		return this.value / 1000000 + ' mdp';
                	else if(this.value > 999 && this.value < 999999)
                		return this.value / 1000 + ' mil';
                	else
                		return this.value;
                },
                style: {
                    color: '#9C9C9C',
                    fontSize: "8px"
                }
            },
            title: {
                text: '',
                offset:0,
                rotation:0,
                align:'high',
                y: -20,
                x:20,
                style: {
                    color: '#9C9C9C'
                }
            },
            opposite: true

        }],
        xAxis: {
            categories: arrayLabels,
            plotLines: [{
                color: '#19243C',
                width: 3,
                value: parseInt(semanasContador.semana1) - 1.5,
                zIndex: 7
            },
            {
                color: '#19243C',
                width: 3,
                value: parseInt(semanasContador.semana1) + parseInt(semanasContador.semana2) - 1.5,
                zIndex: 7
            }],
            labels: {
                rotation: -45,
                style: {
                    fontSize: "8px"
                }
            }
        },
        labels: {
            items: [{
                html: '',
                style: {
                    left: '50px',
                    top: '18px',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            }]
        },
        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },
        series: [
              {
            	  type: 'spline',
            	  name: 'Venta objetivo',
            	  data: arrayVentaObjetivo,
            	  marker: {
            	  	lineWidth: 3,
            	  	lineColor: '#106FAD',
            	  	fillColor: 'white'
              	  }
            },
            {
        		type: 'areaspline',
        		name: 'A\u00F1o anterior',
        		data: arrayAnioAnterior,
        		marker: {
                	lineWidth: 3,
                	lineColor: '#FD7925',
                	fillColor: 'white'
            	},
            	lineColor: '#FD7925',
                color: '#E7CEBC'
        	},
        	{
            	type: 'column',
            	name: 'D\u00EDa actual',
            	color: '#000000',
            	data: [],
            	pointWidth: 1
        	},
        	{
            	type: 'column',
            	name: 'Venta real',
            	color: '#B3CC44',
            	data: arrayVentaReal,
            	pointWidth: 12
        	},
        	{
            	type: 'spline',
            	name: 'A\u00F1o anterior',
            	color: '#FD630C',
            	data: [],
            	pointWidth: 1
        	},
          ]
    	},
    	function(chart) { // on complete
    		
    		cargaTotalesPorSemanaMovil();
    		/*
    		if(tipoConsulta == 1) {
    			if(arrayTotales[0] != undefined && arrayTotales[0].semana != undefined){
        			chart.renderer.text('<div>Semana ' + arrayTotales[0].semana + '</div>', 30, 20)
        	        .css({
        	            color: '#4572A7',
        	            fontSize: '10px'
        	        }).add();
        		}
        		
        		if(arrayTotales[1] != undefined && arrayTotales[1].semana != undefined){
        			chart.renderer.text('<div>Semana ' + arrayTotales[1].semana + '</div>', 140, 20)
    	        	.css({
    	        		color: '#4572A7',
    	        		fontSize: '10px'
    	        	}).add();
        		}
        		
        		if(arrayTotales[2] != undefined && arrayTotales[2].semana != undefined){
        			chart.renderer.text('<div>Semana ' + arrayTotales[2].semana + '</div>', 250, 20)
    	        	.css({
    	        		color: '#4572A7',
    	        		fontSize: '10px'
    	        	}).add();
        		}
        		
        		if(arrayTotales[0] != undefined && arrayTotales[0].total != undefined){
        			chart.renderer.text('<div id="semanaId1Movil">$ ' + formato(arrayTotales[0].total, true) + '</div>', 15, 30)
    	        	.css({
    	        		color: '#FD7A25',
    	        		fontSize: '10px'
    	        	}).add();
        		}
        		
        		if(arrayTotales[1] != undefined && arrayTotales[1].total != undefined){
        			chart.renderer.text('<div id="semanaId2Movil">$ ' + formato(arrayTotales[1].total, true) + '</div>', 125, 30)
            		.css({
            			color: '#FD7A25',
            			fontSize: '10px'
            		}).add();
        		}
        		
        		if(arrayTotales[2] != undefined && arrayTotales[2].total != undefined){
        			chart.renderer.text('<div id="semanaId3Movil">$ ' + formato(arrayTotales[2].total, true) + '</div>', 235, 30)
            		.css({
            			color: '#FD7A25',
            			fontSize: '10px'
            		}).add();
        		}
    		}*/
    	}
    	);
}

function cargaTotalesPorSemana() {
	    //console.log("ENTRA A RECALCULA POR SEMANA");
	    loadOff();
		var suma1 = 0;
		var suma2 = 0;
		var suma3 = 0;
		var suma4 = 0;
		var suma5 = 0;
		var suma6 = 0;
		var sumaObjetivo1 = 0;
		var sumaObjetivo2 = 0;
		var sumaObjetivo3 = 0;
		if($("#checkMercancias").is(":checked")) {
			if(arrayTotales.length > 0 && arrayTotales[0].total != undefined) {
				suma1 += parseFloat(arrayTotales[0].total);
			}
			if(arrayTotales.length > 1 && arrayTotales[1].total != undefined) {
				suma2 += parseFloat(arrayTotales[1].total);
			}
			if(arrayTotales.length > 2 && arrayTotales[2].total != undefined) {
				suma3 += parseFloat(arrayTotales[2].total);
			}
			if(arrayTotalesPasado.length > 0 && arrayTotalesPasado[0].total != undefined) {
				suma4 += parseFloat(arrayTotalesPasado[0].total);
			}
			if(arrayTotalesPasado.length > 1 && arrayTotalesPasado[1].total != undefined) {
				suma5 += parseFloat(arrayTotalesPasado[1].total);
			}
			if(arrayTotalesPasado.length > 2 && arrayTotalesPasado[2].total != undefined) {
				suma6 += parseFloat(arrayTotalesPasado[2].total);
			}
		}
		if($("#checkTiempoAire").is(":checked")) {
			if(arrayTotales.length > 0 && arrayTotales[0].montoTiempoAire != undefined) {
				suma1 += parseFloat(arrayTotales[0].montoTiempoAire);
			}
			if(arrayTotales.length > 1 && arrayTotales[1].montoTiempoAire != undefined) {
				suma2 += parseFloat(arrayTotales[1].montoTiempoAire);
			}
			if(arrayTotales.length > 2 && arrayTotales[2].montoTiempoAire != undefined) {
				suma3 += parseFloat(arrayTotales[2].montoTiempoAire);
			}
			if(arrayTotalesPasado.length > 0 && arrayTotalesPasado[0].montoTiempoAire != undefined) {
				suma4 += parseFloat(arrayTotalesPasado[0].montoTiempoAire);
			}
			if(arrayTotalesPasado.length > 1 && arrayTotalesPasado[1].montoTiempoAire != undefined) {
				suma5 += parseFloat(arrayTotalesPasado[1].montoTiempoAire);
			}
			if(arrayTotalesPasado.length > 2 && arrayTotalesPasado[2].montoTiempoAire != undefined) {
				suma6 += parseFloat(arrayTotalesPasado[2].montoTiempoAire);
			}
		}
		if($("#checkServicios").is(":checked")) {
			if(arrayTotales.length > 0 && arrayTotales[0].montoServicios != undefined) {
				suma1 += parseFloat(arrayTotales[0].montoServicios);
			}
			if(arrayTotales.length > 1 && arrayTotales[1].montoServicios != undefined) {
				suma2 += parseFloat(arrayTotales[1].montoServicios);
			}
			if(arrayTotales.length > 2 && arrayTotales[2].montoServicios != undefined) {
				suma3 += parseFloat(arrayTotales[2].montoServicios);
			}
			if(arrayTotalesPasado.length > 0 && arrayTotalesPasado[0].montoServicios != undefined) {
				suma4 += parseFloat(arrayTotalesPasado[0].montoServicios);
			}
			if(arrayTotalesPasado.length > 1 && arrayTotalesPasado[1].montoServicios != undefined) {
				suma5 += parseFloat(arrayTotalesPasado[1].montoServicios);
			}
			if(arrayTotalesPasado.length > 2 && arrayTotalesPasado[2].montoServicios != undefined) {
				suma6 += parseFloat(arrayTotalesPasado[2].montoServicios);
			}
		}
		if($("#checkImpuestos").is(":checked")) {
			if(arrayTotales.length > 0 && arrayTotales[0].montoImpuestos != undefined) {
				suma1 += parseFloat(arrayTotales[0].montoImpuestos);
			}
			if(arrayTotales.length > 1 && arrayTotales[1].montoImpuestos != undefined) {
				suma2 += parseFloat(arrayTotales[1].montoImpuestos);
			}
			if(arrayTotales.length > 2 && arrayTotales[2].montoImpuestos != undefined) {
				suma3 += parseFloat(arrayTotales[2].montoImpuestos);
			}
			if(arrayTotalesPasado.length > 0 && arrayTotalesPasado[0].montoImpuestos != undefined) {
				suma4 += parseFloat(arrayTotalesPasado[0].montoImpuestos);
			}
			if(arrayTotalesPasado.length > 1 && arrayTotalesPasado[1].montoImpuestos != undefined) {
				suma5 += parseFloat(arrayTotalesPasado[1].montoImpuestos);
			}
			if(arrayTotalesPasado.length > 2 && arrayTotalesPasado[2].montoImpuestos != undefined) {
				suma6 += parseFloat(arrayTotalesPasado[2].montoImpuestos);
			}
		}
		if(arrayVentaObjetivoTot.length > 0 && arrayVentaObjetivoTot[0].ventaObjetivo != undefined) {
			sumaObjetivo1 += parseFloat(arrayVentaObjetivoTot[0].ventaObjetivo);
		}
		if(arrayVentaObjetivoTot.length > 1 && arrayVentaObjetivoTot[1].ventaObjetivo != undefined) {
			sumaObjetivo2 += parseFloat(arrayVentaObjetivoTot[1].ventaObjetivo);
		}
		if(arrayVentaObjetivoTot.length > 2 && arrayVentaObjetivoTot[2].ventaObjetivo != undefined) {
			sumaObjetivo3 += parseFloat(arrayVentaObjetivoTot[2].ventaObjetivo);
		}
		
		if(arrayTotales[0] != undefined){
			$("#anioId1").html(arrayTotales[0].anio);
			$("#semanaNombre1").html("Semana " + arrayTotales[0].semana );
			$("#semanaId1").html("$ " + formato(suma1, true) );
		}
		
		if(arrayTotales[1] != undefined){
			$("#anioId1").html(arrayTotales[1].anio);
			$("#semanaNombre2").html("Semana " + arrayTotales[1].semana );
			$("#semanaId2").html("$ " + formato(suma2, true) );
		}
		
		if(arrayTotales[2] != undefined){
			$("#anioId1").html(arrayTotales[2].anio);
			$("#semanaNombre3").html("Semana " + arrayTotales[2].semana );
			$("#semanaId3").html("$ " + formato(suma3, true) );
		}
		
		if( $("#roundedOne2").is(":checked")) {
			$("#anioId1").html("Real");
			$("#labelTipoCompara").html("Venta");
			
			if( auxValTipoPpto == 1 ) {
				$("#anioId2").html("Ppto Operativo");
			}
			else if(auxValTipoPpto == 2){
				$("#anioId2").html("Ppto Financiero");
			}
			
			if(arrayTotalesPasado[0] != undefined){
				$("#semanaId4").html("$ " + formato(sumaObjetivo1, true) );
			}
			if(arrayTotalesPasado[1] != undefined){
				$("#semanaId5").html("$ " + formato(sumaObjetivo2, true) );
			
			}
			if(arrayTotalesPasado[2] != undefined){
				$("#semanaId6").html("$ " + formato(sumaObjetivo3, true) );
			}
		} else if( $("#roundedOne3").is(":checked")) {
			$("#anioId2").html(arrayTotalesPasado[0].anio);
			$("#labelTipoCompara").html("&nbsp;");
			
			if(arrayTotalesPasado[0] != undefined){
				$("#semanaId4").html("$ " + formato(suma4, true) );
				
			}
			if(arrayTotalesPasado[1] != undefined){
				$("#semanaId5").html("$ " + formato(suma5, true) );
			
			}
			if(arrayTotalesPasado[2] != undefined){
				$("#semanaId6").html("$ " + formato(suma6, true) );
			}
		}
}

function cargaTotalesPorSemanaMovil() {
	var suma1 = 0;
	var suma2 = 0;
	var suma3 = 0;
	var suma4 = 0;
	var suma5 = 0;
	var suma6 = 0;
	var sumaObjetivo1 = 0;
	var sumaObjetivo2 = 0;
	var sumaObjetivo3 = 0;
	if($("#checkMercanciasMovil").is(":checked")) {
		if(arrayTotales.length > 0 && arrayTotales[0].total != undefined) {
			suma1 += parseFloat(arrayTotales[0].total);
		}
		if(arrayTotales.length > 1 && arrayTotales[1].total != undefined) {
			suma2 += parseFloat(arrayTotales[1].total);
		}
		if(arrayTotales.length > 2 && arrayTotales[2].total != undefined) {
			suma3 += parseFloat(arrayTotales[2].total);
		}
		if(arrayTotalesPasado.length > 0 && arrayTotalesPasado[0].total != undefined) {
			suma4 += parseFloat(arrayTotalesPasado[0].total);
		}
		if(arrayTotalesPasado.length > 1 && arrayTotalesPasado[1].total != undefined) {
			suma5 += parseFloat(arrayTotalesPasado[1].total);
		}
		if(arrayTotalesPasado.length > 2 && arrayTotalesPasado[2].total != undefined) {
			suma6 += parseFloat(arrayTotalesPasado[2].total);
		}
	}
	if($("#checkTiempoAireMovil").is(":checked")) {
		if(arrayTotales.length > 0 && arrayTotales[0].montoTiempoAire != undefined) {
			suma1 += parseFloat(arrayTotales[0].montoTiempoAire);
		}
		if(arrayTotales.length > 1 && arrayTotales[1].montoTiempoAire != undefined) {
			suma2 += parseFloat(arrayTotales[1].montoTiempoAire);
		}
		if(arrayTotales.length > 2 && arrayTotales[2].montoTiempoAire != undefined) {
			suma3 += parseFloat(arrayTotales[2].montoTiempoAire);
		}
		if(arrayTotalesPasado.length > 0 && arrayTotalesPasado[0].montoTiempoAire != undefined) {
			suma4 += parseFloat(arrayTotalesPasado[0].montoTiempoAire);
		}
		if(arrayTotalesPasado.length > 1 && arrayTotalesPasado[1].montoTiempoAire != undefined) {
			suma5 += parseFloat(arrayTotalesPasado[1].montoTiempoAire);
		}
		if(arrayTotalesPasado.length > 2 && arrayTotalesPasado[2].montoTiempoAire != undefined) {
			suma6 += parseFloat(arrayTotalesPasado[2].montoTiempoAire);
		}
	}
	if($("#checkServiciosMovil").is(":checked")) {
		if(arrayTotales.length > 0 && arrayTotales[0].montoServicios != undefined) {
			suma1 += parseFloat(arrayTotales[0].montoServicios);
		}
		if(arrayTotales.length > 1 && arrayTotales[1].montoServicios != undefined) {
			suma2 += parseFloat(arrayTotales[1].montoServicios);
		}
		if(arrayTotales.length > 2 && arrayTotales[2].montoServicios != undefined) {
			suma3 += parseFloat(arrayTotales[2].montoServicios);
		}
		if(arrayTotalesPasado.length > 0 && arrayTotalesPasado[0].montoServicios != undefined) {
			suma4 += parseFloat(arrayTotalesPasado[0].montoServicios);
		}
		if(arrayTotalesPasado.length > 1 && arrayTotalesPasado[1].montoServicios != undefined) {
			suma5 += parseFloat(arrayTotalesPasado[1].montoServicios);
		}
		if(arrayTotalesPasado.length > 2 && arrayTotalesPasado[2].montoServicios != undefined) {
			suma6 += parseFloat(arrayTotalesPasado[2].montoServicios);
		}
	}
	if($("#checkImpuestosMovil").is(":checked")) {
		if(arrayTotales.length > 0 && arrayTotales[0].montoImpuestos != undefined) {
			suma1 += parseFloat(arrayTotales[0].montoImpuestos);
		}
		if(arrayTotales.length > 1 && arrayTotales[1].montoImpuestos != undefined) {
			suma2 += parseFloat(arrayTotales[1].montoImpuestos);
		}
		if(arrayTotales.length > 2 && arrayTotales[2].montoImpuestos != undefined) {
			suma3 += parseFloat(arrayTotales[2].montoImpuestos);
		}
		if(arrayTotalesPasado.length > 0 && arrayTotalesPasado[0].montoImpuestos != undefined) {
			suma4 += parseFloat(arrayTotalesPasado[0].montoImpuestos);
		}
		if(arrayTotalesPasado.length > 1 && arrayTotalesPasado[1].montoImpuestos != undefined) {
			suma5 += parseFloat(arrayTotalesPasado[1].montoImpuestos);
		}
		if(arrayTotalesPasado.length > 2 && arrayTotalesPasado[2].montoImpuestos != undefined) {
			suma6 += parseFloat(arrayTotalesPasado[2].montoImpuestos);
		}
	}
	if(arrayVentaObjetivoTot.length > 0 && arrayVentaObjetivoTot[0].ventaObjetivo != undefined) {
		sumaObjetivo1 += parseFloat(arrayVentaObjetivoTot[0].ventaObjetivo);
	}
	if(arrayVentaObjetivoTot.length > 1 && arrayVentaObjetivoTot[1].ventaObjetivo != undefined) {
		sumaObjetivo2 += parseFloat(arrayVentaObjetivoTot[1].ventaObjetivo);
	}
	if(arrayVentaObjetivoTot.length > 2 && arrayVentaObjetivoTot[2].ventaObjetivo != undefined) {
		sumaObjetivo3 += parseFloat(arrayVentaObjetivoTot[2].ventaObjetivo);
	}
	
	if(arrayTotales[0] != undefined){
		$("#anioId1Movil").html(arrayTotales[0].anio);
		$("#semanaNombre1Movil").html("Semana " + arrayTotales[0].semana );
		$("#semanaId1Movil").html("$ " + formato(suma1, true) );
	}
	
	if(arrayTotales[1] != undefined){
		$("#anioId1Movil").html(arrayTotales[1].anio);
		$("#semanaNombre2Movil").html("Semana " + arrayTotales[1].semana );
		$("#semanaId2Movil").html("$ " + formato(suma2, true) );
	}
	
	if(arrayTotales[2] != undefined){
		$("#anioId1").html(arrayTotales[2].anio);
		$("#semanaNombre3Movil").html("Semana " + arrayTotales[2].semana );
		$("#semanaId3Movil").html("$ " + formato(suma3, true) );
	}
	
	if( $("#roundedOne2").is(":checked")) {
		$("#anioId1Movil").html("Real");
		$("#anioId2Movil").html("Pres.");
		$("#labelTipoComparaMovil").html("Venta");
		
		if(arrayTotalesPasado[0] != undefined){
			$("#semanaId4Movil").html("$ " + formato(sumaObjetivo1, true) );
		}
		if(arrayTotalesPasado[1] != undefined){
			$("#semanaId5Movil").html("$ " + formato(sumaObjetivo2, true) );
		
		}
		if(arrayTotalesPasado[2] != undefined){
			$("#semanaId6Movil").html("$ " + formato(sumaObjetivo3, true) );
		}
	} else if( $("#roundedOne3").is(":checked")) {
		$("#anioId2Movil").html(arrayTotalesPasado[0].anio);
		$("#labelTipoComparaMovil").html("&nbsp;");
		
		if(arrayTotalesPasado[0] != undefined){
			$("#semanaId4Movil").html("$ " + formato(suma4, true) );
			
		}
		if(arrayTotalesPasado[1] != undefined){
			$("#semanaId5Movil").html("$ " + formato(suma5, true) );
		
		}
		if(arrayTotalesPasado[2] != undefined){
			$("#semanaId6Movil").html("$ " + formato(suma6, true) );
		}
	}
}

/*$(".mostrar_filtrosConsultAbast").click(function(){
	$("#btnMuestraDviFiltro").show();
	$("#cabero_tablaIndicadores").hide("slide", {direction: "right" }, 300);

});

$("#btnMuestraDviFiltro" ).click(function(){ 	
			
	
});*/

$(function() {
    $( "#datepicker1" ).datepicker();
  });

var esFiltroActivo = false;

function muestraDivFiltro() {
	//$("#btnMuestraDviFiltro").hide();
	if(esFiltroActivo) {
		$("#cabero_tablaIndicadores").hide("slide", {direction: "right" }, 400);
		esFiltroActivo = false;
	} else {
		$("#cabero_tablaIndicadores").show("slide", {direction: "right" }, 400);
		esFiltroActivo = true;
	}
}

function ocultaDivFiltro() {
	//$("#btnMuestraDviFiltro").show();
	$("#cabero_tablaIndicadores").hide("slide", {direction: "right" }, 400);
}

function inicializaBarra() {
	bar = new ProgressBar.Circle(containerProgress, {
		  color: '#aaa',
		  // This has to be the same size as the maximum width to
		  // prevent clipping
		  strokeWidth: 4,
		  trailWidth: 5,
		  easing: 'easeInOut',
		  duration: 1400,
		  text: {
		    autoStyleContainer: false
		  },
		  from: { color: '#FF0000', width: 5 },
		  to: { color: '#B3E55E', width: 5 },
		  // Set default step function for all animate calls
		  step: function(state, circle) {
		    circle.path.setAttribute('stroke', state.color);
		    circle.path.setAttribute('stroke-width', state.width);

		    var value = Math.round(circle.value() * 100);
		    if (value === 0) {
		      circle.setText('');
		    } else {
		      circle.setText(value + "%");
		    }

		  }
		});
		bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
		bar.text.style.fontSize = '2rem';
		//bar.animate(0.0);
		animateColorPorcentaje(0.0);
		
		barMovil = new ProgressBar.Circle(containerProgressMovil, {
			  color: '#aaa',
			  // This has to be the same size as the maximum width to
			  // prevent clipping
			  strokeWidth: 4,
			  trailWidth: 5,
			  easing: 'easeInOut',
			  duration: 1400,
			  text: {
			    autoStyleContainer: false
			  },
			  from: { color: '#FF0000', width: 5 },
			  to: { color: '#B3E55E', width: 5 },
			  // Set default step function for all animate calls
			  step: function(state, circle) {
			    circle.path.setAttribute('stroke', state.color);
			    circle.path.setAttribute('stroke-width', state.width);

			    var value = Math.round(circle.value() * 100);
			    if (value === 0) {
			      circle.setText('');
			    } else {
			      circle.setText(value + "%");
			    }

			  }
			});
			barMovil.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
			barMovil.text.style.fontSize = '2rem';
			barMovil.animate(0.0);
}

function inicializaCalendarios() {
	var dateHoy = new Date();
	var FECHA_HOY = $.datepicker.formatDate('dd/mm/yy',dateHoy);
	
	$( "#datepicker1").datepicker({
		maxDate:0,
		autoSize : true,
		showOn: 'both',
		showAnim: 'slideDown',
        buttonImageOnly: true,
        beforeShow: function (input, inst) {
            var offset = $(input).offset();
            var height = $(input).height();
            window.setTimeout(function () {
                inst.dpDiv.css({ top: (offset.top + height + 4 - 57 - 47) + 'px', left: offset.left - 125 + 'px' });
            }, 1);
        },
        onClose: function( selectedDate ) {
        	var date = $(this).datepicker('getDate');			
        	var endDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 9);
		
        	$("#datepicker2").datepicker( "option", "minDate", selectedDate );
        	//$("#datepicker2").datepicker( "option", "maxDate", $.datepicker.formatDate('dd/mm/yy',endDate) );
        }
	});
	
	$( "#datepicker2").datepicker({
		maxDate:0,
		autoSize : true,
		showOn: 'both',
		showAnim: 'slideDown',
        buttonImageOnly: true ,
        beforeShow: function (input, inst) {
            var offset = $(input).offset();
            var height = $(input).height();
            window.setTimeout(function () {
                inst.dpDiv.css({ top: (offset.top + height + 4 - 57 - 47) + 'px', left: offset.left - 125 + 'px' });
            }, 1);
        }
	});
	
	$("#datepicker1").datepicker.dateFormat = 'dd/MM/yy';
	$("#datepicker1").val(FECHA_HOY);
	
	$("#datepicker2").datepicker.dateFormat = 'dd/MM/yy';
	$("#datepicker2").val(FECHA_HOY);
}

function abreFechaFinal() {
	
}

function muestraFiltroSmall() {
	//$("#btnMuestraDviFiltro").hide();
	$("#cabero_tablaIndicadores").css("margin-left","359px");
	$("#cabero_tablaIndicadores").show("slide", {direction: "right" }, 400);
}

var idCategoriaActiva = 0;

function muestraLoginRegiones() {
	$("#contenedorRegionesZonasTiendas").html('<div id="canvasloader-container" class="wrapper" style="position: relative;margin: 0 auto;width: 55px;top: 40%;">' + 
			'<div id="canvasLoader" style="display: block; position: absolute; top: -27.5px; left: -27.5px;"><canvas width="55" height="55"></canvas>' + 
			'<canvas width="55" height="55" style="display: none;"></canvas></div></div>');
	var cl = new CanvasLoader('canvasloader-container');
	cl.setColor('#0b4b84'); // default is '#000000'
	cl.setShape('spiral'); // default is 'oval'
	cl.setDiameter(55); // default is 40
	cl.setDensity(57); // default is 40
	cl.setRange(1.1); // default is 1.3
	cl.show(); // Hidden by default
	
	// This bit is only for positioning - not necessary
	 var loaderObj = document.getElementById("canvasLoader");
	loaderObj.style.position = "absolute";
	loaderObj.style["top"] = cl.getDiameter() * -0.5 + "px";
	loaderObj.style["left"] = cl.getDiameter() * -0.5 + "px";
	
	$("#contenedorRegionesZonasTiendas2").html('<div id="canvasloader-container2" class="wrapper"><div id="canvasLoader" style="display: block; position: absolute; top: -27.5px; left: -27.5px;">' + 
			'<canvas width="55" height="55"></canvas><canvas width="55" height="55" style="display: none;"></canvas></div></div>');
	var cl = new CanvasLoader('canvasloader-container2');
	cl.setColor('#0b4b84'); // default is '#000000'
	cl.setShape('spiral'); // default is 'oval'
	cl.setDiameter(55); // default is 40
	cl.setDensity(57); // default is 40
	cl.setRange(1.1); // default is 1.3
	cl.show(); // Hidden by default
	
	// This bit is only for positioning - not necessary
	 var loaderObj = document.getElementById("canvasLoader");
	loaderObj.style.position = "absolute";
	loaderObj.style["top"] = cl.getDiameter() * -0.5 + "px";
	loaderObj.style["left"] = cl.getDiameter() * -0.5 + "px";
}

function muestraLoginGraficas() {
	loadOn();
	$('#checkTipoConsulta').hide();
	$('#checkTipoConsultaText').hide();
	$('#checkTipoConsultaMovil').hide();
	$("#container").html('<div id="canvasloader-container3" class="wrapper"><div id="canvasLoader" style="display: block; position: absolute; top: -27.5px; left: -27.5px;">' + 
			'<canvas width="55" height="55"></canvas><canvas width="55" height="55" style="display: none;"></canvas></div></div>');
	var cl = new CanvasLoader('canvasloader-container3');
	cl.setColor('#0b4b84'); // default is '#000000'
	cl.setShape('spiral'); // default is 'oval'
	cl.setDiameter(55); // default is 40
	cl.setDensity(57); // default is 40
	cl.setRange(1.1); // default is 1.3
	cl.show(); // Hidden by default
	
	// This bit is only for positioning - not necessary
	 var loaderObj = document.getElementById("canvasLoader");
	loaderObj.style.position = "absolute";
	loaderObj.style["top"] = cl.getDiameter() * -0.5 + "px";
	loaderObj.style["left"] = cl.getDiameter() * -0.5 + "px";
	
	$("#containerSmall").html('<div id="canvasloader-container4" class="wrapper"><div id="canvasLoader" style="display: block; position: absolute; top: -27.5px; left: -27.5px;">' + 
			'<canvas width="55" height="55"></canvas><canvas width="55" height="55" style="display: none;"></canvas></div></div>');
	var cl = new CanvasLoader('canvasloader-container4');
	cl.setColor('#0b4b84'); // default is '#000000'
	cl.setShape('spiral'); // default is 'oval'
	cl.setDiameter(55); // default is 40
	cl.setDensity(57); // default is 40
	cl.setRange(1.1); // default is 1.3
	cl.show(); // Hidden by default
	
	// This bit is only for positioning - not necessary
	 var loaderObj = document.getElementById("canvasLoader");
	loaderObj.style.position = "absolute";
	loaderObj.style["top"] = cl.getDiameter() * -0.5 + "px";
	loaderObj.style["left"] = cl.getDiameter() * -0.5 + "px";
}

function convierteDecimal(cantidad) {
	return parseFloat(cantidad / 1000000).toFixed(2);
}

function reimprimeNodos() {
	imprimeNodos(idCategoriaActiva);
}

function imprimeComparativo(combo) {
	if(combo == 'roundedOne2') {
		$("#roundedOne2").prop("checked", true); 
		$("#roundedOne3").prop("checked", false); 
	} else if(combo == 'roundedOne3') {
		$("#roundedOne2").prop("checked", false); 
		$("#roundedOne3").prop("checked", true);
	}
	cargaTotalesPorSemana();
	cargaTotalesPorSemanaMovil();
}

function checkTipoPpto(combo) {
	if(combo == 'pptoOperativo') {
		$("#pptoOperativo").prop("checked", true); 
		$("#pptoFinanciero").prop("checked", false); 
		
		valTipoPpto = 1;
	} 
	else if(combo == 'pptoFinanciero') {
		$("#pptoOperativo").prop("checked", false); 
		$("#pptoFinanciero").prop("checked", true);
		
		valTipoPpto =  2;
	}
	cargaTotalesPorSemana();
	cargaTotalesPorSemanaMovil();
}

function imprimeNodos(idCategoria) {
	
	var temp = [];
	$("#contenedorRegionesZonasTiendas").html("");
	$("#contenedorRegionesZonasTiendas2").html("");
	var tipoInformacion = $("#roundedOne").is(":checked") ? 1 : 0;
	idCategoriaActiva = idCategoria;
	if(idCategoria == 1) {
		temp = regiones;
		$(".botonRegresaCategorias").hide();
		//$(".tituloCategorias").html("Venta por regi&oacute;n");
	} else if(idCategoria == 2) {
		temp = zonas;
		//$(".botonRegresaCategorias").show();
		//$(".tituloCategorias").html("Venta por zona");
	} else if(idCategoria == 3) {
		temp = tiendas;
		//$(".botonRegresaCategorias").show();
		//$(".tituloCategorias").html("Venta por tienda");
	}
	
	/*$("#contenedorRegionesZonasTiendas").append('<div style="color:#797979;float: left;padding-left: 63px;"><div id="circleVerde"></div>&nbsp;<span>100%</span></div>');
	$("#contenedorRegionesZonasTiendas").append('<div style="color:#797979;float: left;padding-left: 25px;"><div id="circleAmarillo"></div>&nbsp;<span>80-99%</span></div>');
	$("#contenedorRegionesZonasTiendas").append('<div style="color:#797979;float: left;padding-left: 25px;"><div id="circleRojo"></div>&nbsp;<span>-80%</span></div>');
	$("#contenedorRegionesZonasTiendas").append('<div style="height:25px;"></div>');
	$("#contenedorRegionesZonasTiendas2").append('<div style="color:#797979;float: left;padding-left: 20px;"><div id="circleVerde"></div>&nbsp;<span>100%</span></div>');
	$("#contenedorRegionesZonasTiendas2").append('<div style="color:#797979;float: left;padding-left: 15px;"><div id="circleAmarillo"></div>&nbsp;<span>80-99%</span></div>');
	$("#contenedorRegionesZonasTiendas2").append('<div style="color:#797979;float: left;padding-left: 13px;"><div id="circleRojo"></div>&nbsp;<span>-80%</span></div>');*/
	if(tipoInformacion == 0) {
		$("#contenedorRegionesZonasTiendas").append('<div style="width:350px;height:25px;font-size:12px;float: left;padding-right: 20px;position: relative;"><span style="float: right;color: #797979;">Venta objetivo</span></div>');
		$("#contenedorRegionesZonasTiendas2").append('<div style="width:239px;height:16px;font-size:12px;margin-top: 25px;margin-bottom: -25px;"><span style="float: right;color: #797979;">Venta objetivo</span></div>');
	} else {
		$("#contenedorRegionesZonasTiendas").append('<div style="width:350px;height:25px;font-size:12px;float: left;padding-right: 20px;position: relative;"><span style="float: right;color: #797979;">Real &nbsp;&nbsp; Objetivo</span></div>');
		$("#contenedorRegionesZonasTiendas2").append('<div style="width:239px;height:16px;font-size:12px;margin-top: 7px;margin-bottom: -25px;"><span style="float: right;color: #797979;">Real &nbsp;&nbsp; Objetivo</span></div>');
	}
	
	
	for(var i = 0; i < temp.length; i++) {
		var nombreNodoDiv = temp[i].nombreNodo.length > 23 ? (temp[i].nombreNodo.substring(0,23) + "...") : temp[i].nombreNodo;
		var div = document.createElement('div');
		var suma = 0;
		var nombreParents = "";
		var porcentaje = 0;
		var montoCadena = "";
		var tipoCirculo = "circle";
		var colorBarra = "";
		
		if($("#checkMercancias").is(":checked")) {
			suma += parseFloat(temp[i].total);
		}
		if($("#checkTiempoAire").is(":checked")) {
			suma += parseFloat(temp[i].montoTiempoAire);
		}
		if($("#checkServicios").is(":checked")) {
			suma += parseFloat(temp[i].montoServicios);
		}
		if($("#checkImpuestos").is(":checked")) {
			suma += parseFloat(temp[i].montoImpuestos);
		}
		if(idCategoria == 2) {
			nombreParents = temp[i].nombreRegion;
		} else if(idCategoria == 3) {
			nombreParents = temp[i].nombreRegion + "-" + temp[i].nombreZona;
		}
		if(temp[i].porcentaje > 1) {
			porcentaje = 100;
		} else {
			porcentaje = temp[i].porcentaje * 100;
		}
		if(porcentaje >= 100) {
			tipoCirculo = "circleVerde";
			colorBarra = "#1CD000";
		} else if(porcentaje >= 80 && porcentaje < 100) {
			tipoCirculo = "circleAmarillo";
			colorBarra = "#F4A419";
		} else {
			tipoCirculo = "circleRojo";
			colorBarra = "#FB3842";
		}
		var tamLoadPorcentaje = '';
		var maxBarra = 0;
		var valorVentaObj = '';
		if(tipoInformacion == 0) {
			montoCadena =  '<div style="float:right;padding-right:20px;">$ ' + formato(temp[i].ventaObjetivo,true) + '</div>';
			tamLoadPorcentaje = 'width:320px;';
			maxBarra = 3.2;
		} else {
			montoCadena = '<div style="float:right;padding-right:60px;">$ ' + convierteDecimal(suma) + '</div>';
			maxBarra = 2.65;
			valorVentaObj = '<span>$ ' + convierteDecimal(temp[i].ventaObjetivo) + '</span>';
		}
		
		
	    div.className = 'cajaTitulo7';
	    div.id = idCategoria;
	    div.innerHTML = '<div id="' + temp[i].idNodo + '" style="float:left;color: #3A84B0; font-size: 12px;font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif;cursor:pointer;" onclick="buscaCategoria(this.parentNode.id,this.id,' + 
		 					temp[i].idNodo + ',' +
		 					'\'' + temp[i].nombreNodo + '\',' + 
		 					temp[i].total + ',' + 
		 					temp[i].montoTiempoAire + ',' + 
		 					temp[i].montoServicios + ',' + 
		 					temp[i].montoImpuestos + ',' +
		 					temp[i].idRegion + ',' +
		 					temp[i].idZona + ',' +
		 					temp[i].ventaObjetivo + ',' +
		 					temp[i].porcentaje + ',' +
		 					temp[i].ticketPromedio + ',' +
		 					temp[i].trafico + ',' +
		 					temp[i].numTiendas + 
		 					')">' +
							'<div style="float: left;width: 225px;">&nbsp;&nbsp;&nbsp;<div style="float: left;padding-left: 10px;">' + nombreNodoDiv + 
								'</div><div style="float:left;padding-left:25px;width:400px;"><span style="color: #FF9235;font-size: 10px;">' + '</span></div></div>' +
							'<div style="width:115px;float:right;padding-left:0px;color: #797979; font-size: 12px;font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif;position: relative;">' + montoCadena + '</div>' +
							'<div class="popPorcentaje" id="popPorcentaje' + temp[i].idRegion + '-' + temp[i].idZona + '-' + temp[i].idTienda + '" style="display:none;"><span id="valorPopPorcentaje">' + Math.round((parseFloat(temp[i].porcentaje) * 100),2) + '%</span></div>' +
							'<div class="loadPorcentaje" style="' + tamLoadPorcentaje + '"><div class="porcentajeInner" style="background: ' + colorBarra +';width:' + Math.round(porcentaje*maxBarra) + 'px" id="' + temp[i].idNodo + '" onmouseover="muestraPorcentaje(\'popPorcentaje' + temp[i].idRegion + '-' + temp[i].idZona + '-' + temp[i].idTienda + '\');" ' +
								'onmouseout="ocultaPorcentaje(\'popPorcentaje' + temp[i].idRegion + '-' + temp[i].idZona + '-' + temp[i].idTienda + '\');" onclick="buscaCategoria(this,' + 
								 temp[i].idNodo + ',' + 
								'\'' + temp[i].nombreNodo + '\',' + 
								temp[i].total + ',' + 
								temp[i].montoTiempoAire + ',' + 
								temp[i].montoServicios + ',' + 
								temp[i].montoImpuestos + ',' +
								temp[i].ventaObjetivo + 
								')"></div></div><div style="float: right;width: 70px;padding-right: 20px;">' + valorVentaObj + '</div>';
	    $("#contenedorRegionesZonasTiendas").append(div);
	}
	
	for(var i = 0; i < temp.length; i++) {
		var div = document.createElement('div');
		var suma = 0;
		var porcentaje = 0;
		var montoCadena = "";
		var tipoCirculo = "circle";
		var colorBarra = "";
		
		if($("#checkMercanciasMovil").is(":checked")) {
			suma += parseFloat(temp[i].total);
		}
		if($("#checkTiempoAireMovil").is(":checked")) {
			suma += parseFloat(temp[i].montoTiempoAire);
		}
		if($("#checkServiciosMovil").is(":checked")) {
			suma += parseFloat(temp[i].montoServicios);
		}
		if($("#checkImpuestosMovil").is(":checked")) {
			suma += parseFloat(temp[i].montoImpuestos);
		}
		if(temp[i].porcentaje > 1) {
			porcentaje = 100;
		} else {
			porcentaje = temp[i].porcentaje * 100;
		}
		if(porcentaje >= 100) {
			tipoCirculo = "circleVerde";
			colorBarra = "#1CD000";
		} else if(porcentaje >= 80 && porcentaje < 100) {
			tipoCirculo = "circleAmarillo";
			colorBarra = "#F4A419";
		} else {
			tipoCirculo = "circleRojo";
			colorBarra = "#FB3842";
		}
		var tamLoadPorcentaje = '';
		var maxBarra = 0;
		var valorVentaObj = '';
		if(tipoInformacion == 0) {
			montoCadena =  '<div style="float:right;padding-right:10px;">$ ' + formato(temp[i].ventaObjetivo,true) + '</div>';
			tamLoadPorcentaje = 'width:320px;';
			maxBarra = 2.4;
		} else {
			montoCadena = '<div style="float:right;padding-right:10px;">$ ' + convierteDecimal(suma) + '</div>';
			maxBarra = 2.0;
			valorVentaObj = '<span>$ ' + convierteDecimal(temp[i].ventaObjetivo) + '</span>';
		}
		
	    div.className = 'cajaTitulo7-1';
	    div.id = idCategoria;
	    div.innerHTML = '<div id="' + temp[i].idNodo + '" style="float:left;color: #3A84B0; font-size: 10px;font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif;" onclick="buscaCategoria(this.parentNode.id,this.id,' + 
						temp[i].idNodo + ',' + 
						'\'' + temp[i].nombreNodo + '\',' + 
						temp[i].total + ',' + 
						temp[i].montoTiempoAire + ',' + 
						temp[i].montoServicios + ',' + 
						temp[i].montoImpuestos + ',' +
						temp[i].idRegion + ',' +
	 					temp[i].idZona + ',' +
	 					temp[i].ventaObjetivo + ',' +
	 					temp[i].porcentaje + ',' +
	 					temp[i].ticketPromedio + ',' +
	 					temp[i].trafico + ',' +
	 					temp[i].numTiendas + 
						')">' +
							'<div style="float: left;width: 120px;"><div id="' + tipoCirculo + '"></div>&nbsp;&nbsp;&nbsp;' + temp[i].nombreNodo + '</div>' +
							'<div style="width:120px;float:right;color: #797979; font-size: 11px;font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif;"><div style="float:right;">' + montoCadena + '</div></div>' +
							'<div class="popPorcentaje" id="popPorcentaje' + temp[i].idNodo + '" style="display:none"></div>' +
							'<div class="loadPorcentaje" style="width:200px"><div class="porcentajeInner" style="background: ' + colorBarra +';width:' + Math.round(porcentaje*maxBarra) + 'px" id="' + temp[i].idNodo + '" onmouseover="muestraPorcentaje(popPorcentaje' + temp[i].idNodo + ');" ' +
								'onmouseout="ocultaPorcentaje(popPorcentaje' + temp[i].idNodo + ');" onclick="buscaCategoria(this,' + 
								temp[i].idNodo + ',' + 
								'\'' + temp[i].nombreNodo + '\',' + 
								temp[i].total + ',' + 
								temp[i].montoTiempoAire + ',' + 
								temp[i].montoServicios + ',' + 
								temp[i].montoImpuestos + ',' +
								temp[i].ventaObjetivo + 
								')"></div></div><div style="float: right;width: 40px;">' + valorVentaObj + '</div>';
	    $("#contenedorRegionesZonasTiendas2").append(div);
	}
}

var mouseX;
var mouseY;
$(document).mousemove( function(e) {
   mouseX = e.pageX; 
   mouseY = e.pageY;
});

function muestraPorcentaje(popPorcentaje) {
	 $("#" + popPorcentaje).css({'top':(0),'left':(mouseX-850)}).fadeIn('fast');
}

function ocultaPorcentaje(popPorcentaje) {
	$("#" + popPorcentaje ).css("display","none");
}

//objetoVenta = {idNodo: 0, nombreNodo: "", total: sumaMontoNeto, montoTiempoAire: sumaMontoTiempoAire, montoServicios: sumaMontoServicios, montoImpuestos: sumaMontoImpuestos};

/*var nodo = {idNodo:0,
		nombreNodo:'',
		idRegion:data.ventaPorUbicacion[i].regionId,
		nombreRegion:data.ventaPorUbicacion[i].nombreRegion,
		idZona:data.ventaPorUbicacion[i].zonaId,
		nombreZona:data.ventaPorUbicacion[i].nombreZona,
		idTienda:data.ventaPorUbicacion[i].tiendaId,
		nombreTienda:data.ventaPorUbicacion[i].nombreTienda,
		total:data.ventaPorUbicacion[i].montoNeto,
		montoTiempoAire:data.ventaPorUbicacion[i].montoTiempoAire,
		montoServicios:data.ventaPorUbicacion[i].montoServicios,
		montoImpuestos:data.ventaPorUbicacion[i].montoImpuestos,
		porcentaje:data.ventaPorUbicacion[i].porcentajeVentas};*/

function validaBarrasPorcentaje(valor) {
	var porcentaje = (parseFloat(valor) * 100).toFixed(0);
	
	if(porcentaje >= 100) {
		$("#semaforoL").children().css( "background-color", "#1CD000" );
		$("#semaforoLMovil").children().css( "background-color", "#1CD000" );
	} else if(porcentaje >= 80 && porcentaje < 100) {
		$("#semaforoL").children().css( "background-color", "#F4A419" );
		$("#semaforoLMovil").children().css( "background-color", "#F4A419" );
	} else {
		$("#semaforoL").children().css( "background-color", "#FB3842" );
		$("#semaforoLMovil").children().css( "background-color", "#FB3842" );
	}
}

function apagaSemaforo() {
	$("#semaforoL").children().css( "background-color", "#909090" );
	$("#semaforoLMovil").children().css( "background-color", "#909090" );
}

function animateColorPorcentaje(porcentaje) {
	var colorFinal = '';
	var colorInicial = '#FFFFFF';
	
	if(porcentaje >= 1) {
		colorFinal = '#19CE00';
	} else if(porcentaje >= 0.8 && porcentaje < 1) {
		colorFinal = '#F29500'; 
	} else if(porcentaje < 0.8) {
		colorFinal = '#FA1A2E';
	}
	
	bar.animate(Math.floor(porcentaje*100)/100, {
	    from: {color: colorInicial, width: 5},
	    to: {color: colorFinal, width: 5},
	    step: function(state, circle) {
		    circle.path.setAttribute('stroke', state.color);
		    circle.path.setAttribute('stroke-width', state.width);

		    var value = Math.round(circle.value() * 100);
		    if (value === 0) {
		      circle.setText('');
		    } else {
		      circle.setText(value + "%");
		    }
		  }
	});
}

function animateColorPorcentajeMovil(porcentaje) {
	var colorFinal = '';
	var colorInicial = '#FFFFFF';
	
	if(porcentaje >= 1) {
		colorFinal = '#19CE00';
	} else if(porcentaje >= 0.8 && porcentaje < 1) {
		colorFinal = '#F29500'; 
	} else if(porcentaje < 0.8) {
		colorFinal = '#FA1A2E';
	}
	
	barMovil.animate(Math.floor(porcentaje*100)/100, {
	    from: {color: colorInicial, width: 5},
	    to: {color: colorFinal, width: 5},
	    step: function(state, circle) {
		    circle.path.setAttribute('stroke', state.color);
		    circle.path.setAttribute('stroke-width', state.width);

		    var value = Math.round(circle.value() * 100);
		    if (value === 0) {
		      circle.setText('');
		    } else {
		      circle.setText(value + "%");
		    }

		  }
	});
	
}

function buscaNombreRegion(idRegion) {
	for(var i = 0; i < regiones.length; i++) {
		if(idRegion == regiones[i].idRegion) {
			return regiones[i].nombreRegion;
		}
	}
}

function buscaNombreZona(idRegion, idZona) {
	for(var i = 0; i < zonas.length; i++) {
		if(idRegion == zonas[i].idRegion && idZona == zonas[i].idZona) {
			return zonas[i].nombreZona;
		}
	}
}

var oIdCategoriaRegion;
var oIdElementoRegion;
var idNodoRegion;
var nombreNodoRegion;
var totalRegion;
var montoTiempoAireRegion;
var montoServiciosRegion;
var montoImpuestosRegion;
var idRegionRegion;
var idZonaRegion;
var ventaObjetivoRegion;
var porcentajeRegion;
var ticketPromedioRegion;
var transaccionesRegion;
var numTiendasRegion;
var oIdCategoriaZona;
var oIdElementoZona;
var idNodoZona;
var nombreNodoZona;
var totalZona;
var montoTiempoAireZona;
var montoServiciosZona;
var montoImpuestosZona;
var idRegionZona;
var idZonaZona;
var ventaObjetivoZona;
var porcentajeZona;
var ticketPromedioZona;
var transaccionesZona;
var numTiendasZona;

function buscaCategoria(idCategoriaL, idElementoL, idNodo, nombreNodo, total, montoTiempoAire, montoServicios, montoImpuestos, idRegion, idZona, ventaObjetivo, porcentaje,ticketPromedio,transacciones,numTiendas) {
	var idCategoria = idCategoriaL;//o.parentNode.id;
	var idElemento = idElementoL;//o.id;
	
	//Actualiza objetoVenta
	objetoVenta = {idNodo: idNodo, nombreNodo: nombreNodo, total: total, montoTiempoAire: montoTiempoAire, 
			montoServicios: montoServicios, montoImpuestos: montoImpuestos};
	//$("#tituloVentaPrincipal").html("VENTA: " + nombreNodo);
	//$("#tituloVentaPrincipal2").html("VENTA: " + nombreNodo);
	nombreNodoBusqueda = nombreNodo;
	
	var trama = "";
	if(idCategoria == 1) {
		oIdCategoriaRegion = idCategoria;
		oIdElementoRegion = idElemento;
		idNodoRegion = idNodo;
		nombreNodoRegion = nombreNodo;
		totalRegion = total;
		montoTiempoAireRegion = montoTiempoAire;
		montoServiciosRegion = montoServicios;
		montoImpuestosRegion = montoImpuestos;
		idRegionRegion = idRegion;
		idZonaRegion = idZona;
		ventaObjetivoRegion = ventaObjetivo;
		porcentajeRegion = porcentaje;
		ticketPromedioRegion = ticketPromedio;
		transaccionesRegion = transacciones;
		numTiendasRegion = numTiendas;
		trama = "<span class=''>" + nombreNodo + "</span>";
	} 
	else if(idCategoria == 2) {
		oIdCategoriaZona = idCategoria;
		oIdElementoZona = idElemento;
		idNodoZona = idNodo;
		nombreNodoZona = nombreNodo;
		totalZona = total;
		montoTiempoAireZona = montoTiempoAire;
		montoServiciosZona = montoServicios;
		montoImpuestosZona = montoImpuestos;
		idRegionZona = idRegion;
		idZonaZona = idZona;
		ventaObjetivoZona = ventaObjetivo;
		porcentajeZona = porcentaje;
		ticketPromedioZona = ticketPromedio;
		transaccionesZona = transacciones;
		numTiendasZona = numTiendas;
		trama = "<span class=''>" + buscaNombreRegion(idRegion) + "</span> > " +
		 		"<span class=''>" + nombreNodo + "</span>";
	} 
	else {
		if(oIdCategoriaRegion == undefined || oIdCategoriaZona == undefined) {
			trama = "<span style='font-size: 20px;'>" + nombreNodo + "</span>";
		} else {
			trama =
				"<span class='' style='font-size: 20px;'>" + buscaNombreRegion(idRegion) + "</span> > " +
		 		"<span class='' style='font-size: 20px;'>" + auxNombreZona  + "</span> > " +
				"<span style='font-size: 20px;'>" + nombreNodo + "</span>";
		}
	}
	
	$('span[id="tituloVentaPrincipal"]').html(trama);
	$("#montoVentaTotal").html("$ " + formato(total,true));
	$("#ventaObjetivo").html("$ " + formato(ventaObjetivo,true));
	//$("#porcentajeVentaObjetivo").html((parseFloat(porcentaje) * 100).toFixed(0) + "%");
	//bar.animate(porcentaje);
	animateColorPorcentaje(porcentaje);
	animateColorPorcentajeMovil(porcentaje);
	$("#ticketPromedio").html("$ " + parseFloat(formatoDecimales(parseFloat(ticketPromedio),true)).toFixed(1));
	$("#transacciones").html(formato(parseFloat(transacciones),true));
	$("#numTiendas").html(formato(parseFloat(numTiendas),true));
	$("#ticketPromedioMovil").html("$ " + formato(parseFloat(ticketPromedio),true));
	$("#transaccionesMovil").html(formato(parseFloat(transacciones),true));
	$("#numTiendasMovil").html(formato(parseFloat(numTiendas),true));
	$("#ventaObjetivoMovil").html("$ " + formato(ventaObjetivo,true));
	//validaBarrasPorcentaje(porcentaje);
	$("#montoNeto").html("$ " + formato(parseFloat(objetoVenta.total), true));
	$("#montoTiempoAire").html("$ " + formato(parseFloat(montoTiempoAire), true));
	$("#montoServicios").html("$ " + formato(parseFloat(montoServicios), true));
	$("#montoImpuestos").html("$ " + formato(parseFloat(montoImpuestos), true));
	$("#montoNetoMovil").html("$ " + formato(parseFloat(objetoVenta.total), true));
	$("#montoTiempoAireMovil").html("$ " + formato(parseFloat(montoTiempoAire), true));
	$("#montoServiciosMovil").html("$ " + formato(parseFloat(montoServicios), true));
	$("#montoImpuestosMovil").html("$ " + formato(parseFloat(montoImpuestos), true));
	$("#montoVentaTotalMovil").html("$ " + formato(total,true));
	if(total > 1000000) {
		$("#etiquetaMillones").text("MILLONES");
		$("#etiquetaMillonesMovil").text("MILLONES");
	} else {
		$("#etiquetaMillones").text("MILES");
		$("#etiquetaMillonesMovil").text("MILES");
	}
	//$('span[id="montoVentaTotal"]').html("$ " + formato(total,true));
	
	if(idCategoria == 1) {
		//Busca zonas
		limpiaCategorias();
		zonas = [];
		idRegionBusqueda = idRegion;
		idZonaBusqueda = 0;
		idTiendaBusqueda = -1;
		
		obtieneVentas();
		obtieneGrafica();
		muestraZonasPorDiv();
		muestraZonasPorDivMovil();
		
		tipoCategoriaId = 2;
		
		//imprimeNodos(2);
	} else if(idCategoria == 2) {
		//Busca tiendas
		limpiaCategorias();
		tiendas = [];
		idRegionBusqueda = idRegion;
		idZonaBusqueda = idZona;
		idTiendaBusqueda = 0;
		zonaNombreBusqueda = nombreNodo;
		
		obtieneVentas();
		obtieneGrafica();
		muestraTiendasPorDiv();
		muestraTiendasPorDivMovil();
		
		tipoCategoriaId = 3;
		
		//imprimeNodos(3);
	} else if(idCategoria == 3) {
		if(idTiendaBusqueda != idElemento) {
			idRegionBusqueda = idRegion;
			idZonaBusqueda = idZona;
			idTiendaBusqueda = idElemento;
			tiendaNombreBusqueda = nombreNodo;
			
			obtieneGrafica();
		}
	}
}

function buscaPorTienda(o) {
	
	if(o.value != undefined && o.value.length > 0) {
		var ids = o.value.split("-");
		
		$('span[id="tituloVentaPrincipal"]').html("VENTA TOTAL");
		limpiaCategorias();
		tiendas = [];
		idRegionBusqueda = ids[0];
		idZonaBusqueda = ids[1];
		idTiendaBusqueda = ids[2];
		
		obtieneVentas();
		muestraTiendasPorDiv();
		muestraTiendasPorDivMovil();
		obtieneGrafica();
		tipoCategoriaId = 3;
	}
}

function regresaCategoria() {
	idCategoriaActiva--;
	
	if(idCategoriaActiva == 1) {
		idZonaBusqueda = 0;
		idTiendaBusqueda = 0;
		tipoCategoriaId = 1;
		limpiaCategorias();
		nombreNodoBusqueda = "";
		
		consultaVentas();
		
		//imprimeNodos(1);
	} else if(idCategoriaActiva == 2) {
		idTiendaBusqueda = 0;
		tiendas = [];
		limpiaCategorias();
		tipoCategoriaId = 2;
		$('span[id="tituloVentaPrincipal"]').html("VENTA: " + zonaNombreBusqueda);
		nombreNodoBusqueda = zonaNombreBusqueda;
		
		obtieneVentas();
		obtieneGrafica();
		//inicializaInformacion();
		
		//imprimeNodos(2);
	} else if(idCategoriaActiva == 3) {
		limpiaCategorias();
		imprimeNodos(3);
	}
}

function limpiaCategorias() {
	$(".cajaTitulo7").remove();
	$(".cajaTitulo7-1").remove();
}

function llenarComboTipoEntrega(comboBox_,ARRAY_ESTATUS,texto){
	if(ARRAY_ESTATUS == null){
		$(comboBox_).html("");
		$(comboBox_).append("<option value=\""+-0+"\">Sin datos...</option>");	
	}else{
	$(comboBox_).html("");
	$(comboBox_).append("<option value=\""+-2+"\" disabled>" + texto + "</option>");	
		jQuery.each(ARRAY_ESTATUS, function(index, item) {
			$(comboBox_).append("<option value=\""+item.idTipoEntrega+"\">"+item.tipoEntrega+"</option>");
		});
	}
	$(comboBox_).val(-2);
}

function llenarComboTipoServicio(comboBox_,ARRAY_ESTATUS,texto){
	if(ARRAY_ESTATUS == null){
		$(comboBox_).html("");
		$(comboBox_).append("<option value=\""+-0+"\">Sin datos...</option>");	
	}else{
	$(comboBox_).html("");
	$(comboBox_).append("<option value=\""+-2+"\" disabled>" + texto + "</option>");	
		jQuery.each(ARRAY_ESTATUS, function(index, item) {
			$(comboBox_).append("<option value=\""+item.idTipoServicio+"\">"+item.tipoServicio+"</option>");
		});
	}
	$(comboBox_).val(-2);
}

function llenarComboProveedores(comboBox_,ARRAY_ESTATUS,texto){
	if(ARRAY_ESTATUS == null){
		$(comboBox_).html("");
		$(comboBox_).append("<option value=\""+-0+"\">Sin datos...</option>");	
	}else{
	$(comboBox_).html("");
	$(comboBox_).append("<option value=\""+-2+"\" disabled>" + texto + "</option>");	
		jQuery.each(ARRAY_ESTATUS, function(index, item) {
			$(comboBox_).append("<option value=\""+item.idProveedor+"\">"+item.nombreProveedor+"</option>");
		});
	}
	$(comboBox_).val(-2);
}

function muestraRegionesPorDiv(o) {
	if(tipoCategoriaId == 1) {
		return;
	}
	idRegionBusqueda = 0;
	idZonaBusqueda = -1;
	idTiendaBusqueda = -1;
	$("#cajaTitulo5FiltroZonas").animate({top: '891px'});
	$("#cajaTitulo5FiltroTiendas").animate({top: '925px'});
	$(".cajaTitulo6").css("margin-top","0px");
	
	$("#cajaTitulo5FiltroRegiones").css("background-color","#F15C22");
	$("#cajaTitulo5FiltroZonas").css("background-color","#BDBDBD");
	$("#cajaTitulo5FiltroTiendas").css("background-color","#BDBDBD");
	
	if(o != undefined) {
		tipoCategoriaId = 1;
		limpiaCategorias();
		regiones = [];
		$('#tiendasSelect').val(0);
		$('#tiendasSelect').trigger("chosen:updated");
		$("#tituloVentaPrincipal").text("VENTA TOTAL");
		$("#imgInvierteZonas").attr("src","images/downSort.png");
		$("#imgInvierteTiendas").attr("src","images/downSort.png");
		
		obtieneVentas();
		obtieneGrafica();
	}
}

function muestraRegionesPorDivMovil(o) {
	if(tipoCategoriaId == 1) {
		return;
	}
	idRegionBusqueda = 0;
	idZonaBusqueda = -1;
	idTiendaBusqueda = -1;
	$("#cajaTitulo5FiltroZonasMovil").animate({top: '390px'});
	$("#cajaTitulo5FiltroTiendasMovil").animate({top: '420px'});
	$(".cajaTitulo6-1").css("margin-top","0px");
	
	$("#cajaTitulo5FiltroRegionesMovil").css("background-color","#F15C22");
	$("#cajaTitulo5FiltroZonasMovil").css("background-color","#BDBDBD");
	$("#cajaTitulo5FiltroTiendasMovil").css("background-color","#BDBDBD");
	
	if(o != undefined) {
		tipoCategoriaId = 1;
		limpiaCategorias();
		regiones = [];
		$('#tiendasSelectMovil').val(0);
		$('#tiendasSelectMovil').trigger("chosen:updated");
		$("#tituloVentaPrincipalMovil").text("VENTA TOTAL");
		$("#imgInvierteZonasMovil").attr("src","images/downSort.png");
		$("#imgInvierteTiendasMovil").attr("src","images/downSort.png");
		
		obtieneVentas();
	}
}

function muestraZonasPorDiv(o) {
	if(tipoCategoriaId == 2) {
		return;
	}
	if($("#cajaTitulo5FiltroZonas").position().top > 800) {
		$("#cajaTitulo5FiltroZonas").animate({top: '490px'});
	} else {
		//$("#cajaTitulo5FiltroZonas").animate({top: '791px'});
	}
	$("#cajaTitulo5FiltroTiendas").animate({top: '925px'});
	$(".cajaTitulo6").css("margin-top","35px");
	
	$("#cajaTitulo5FiltroRegiones").css("background-color","#BDBDBD;");
	$("#cajaTitulo5FiltroZonas").css("background-color","#F15C22");
	$("#cajaTitulo5FiltroTiendas").css("background-color","#BDBDBD;");
	
	
	if(o != undefined) {
		idRegionBusqueda = -1;
		idZonaBusqueda = 0;
		idTiendaBusqueda = -1;
		
		tipoCategoriaId = 2;
		limpiaCategorias();
		zonas = [];
		$('#tiendasSelect').val(0);
		$('#tiendasSelect').trigger("chosen:updated");
		$("#tituloVentaPrincipal").text("VENTA TOTAL");
		$("#imgInvierteRegiones").attr("src","images/downSort.png");
		$("#imgInvierteTiendas").attr("src","images/downSort.png");
		
		obtieneVentas();
		obtieneGrafica();
	}
}

function muestraZonasPorDivMovil(o) {
	if(tipoCategoriaId == 2) {
		return;
	}
	
	if($("#cajaTitulo5FiltroZonasMovil").position().top > 100) {
		$("#cajaTitulo5FiltroZonasMovil").animate({top: '100px'});
	} else {
		//$("#cajaTitulo5FiltroZonas").animate({top: '791px'});
	}
	$("#cajaTitulo5FiltroTiendasMovil").animate({top: '420px'});
	$(".cajaTitulo6-1").css("margin-top","30px");
	
	$("#cajaTitulo5FiltroRegionesMovil").css("background-color","#BDBDBD;");
	$("#cajaTitulo5FiltroZonasMovil").css("background-color","#F15C22");
	$("#cajaTitulo5FiltroTiendasMovil").css("background-color","#BDBDBD;");
	
	if(o != undefined) {
		idRegionBusqueda = -1;
		idZonaBusqueda = 0;
		idTiendaBusqueda = -1;
		
		tipoCategoriaId = 2;
		limpiaCategorias();
		zonas = [];
		$('#tiendasSelectMovil').val(0);
		$('#tiendasSelectMovil').trigger("chosen:updated");
		$("#tituloVentaPrincipalMovil").text("VENTA TOTAL");
		$("#imgInvierteRegionesMovil").attr("src","images/downSort.png");
		$("#imgInvierteTiendasMovil").attr("src","images/downSort.png");
		
		obtieneVentas();
	}
}

function muestraTiendasPorDiv(o) {
	if(tipoCategoriaId == 3) {
		return;
	}
	
	if($("#cajaTitulo5FiltroTiendas").position().top > 800) {
		$("#cajaTitulo5FiltroZonas").animate({top: '490px'});
		$("#cajaTitulo5FiltroTiendas").animate({top: '521px'});
	} else {
		//$("#cajaTitulo5FiltroZonas").animate({top: '791px'});
		//$("#cajaTitulo5FiltroTiendas").animate({top: '850px'});
	}
	$(".cajaTitulo6").css("margin-top","65px");
	
	$("#cajaTitulo5FiltroRegiones").css("background-color","#BDBDBD");
	$("#cajaTitulo5FiltroZonas").css("background-color","#BDBDBD");
	$("#cajaTitulo5FiltroTiendas").css("background-color","#F15C22");
	
	
	if(o != undefined) {
		idRegionBusqueda = -1;
		idZonaBusqueda = -1;
		idTiendaBusqueda = 0;
		
		tipoCategoriaId = 3;
		limpiaCategorias();
		tiendas = [];
		$('#tiendasSelect').val(0);
		$('#tiendasSelect').trigger("chosen:updated");
		$("#tituloVentaPrincipal").text("VENTA TOTAL");
		$("#imgInvierteRegiones").attr("src","images/downSort.png");
		$("#imgInvierteZonas").attr("src","images/downSort.png");
		
		obtieneVentas();
		obtieneGrafica();
	}
}

function muestraTiendasPorDivMovil(o) {
	if(tipoCategoriaId == 3) {
		return;
	}
	
	if($("#cajaTitulo5FiltroTiendasMovil").position().top > 159) {
		$("#cajaTitulo5FiltroZonasMovil").animate({top: '100px'});
		$("#cajaTitulo5FiltroTiendasMovil").animate({top: '130px'});
	} else {
		//$("#cajaTitulo5FiltroZonas").animate({top: '791px'});
		//$("#cajaTitulo5FiltroTiendas").animate({top: '850px'});
	}
	$(".cajaTitulo6-1").css("margin-top","60px");
	
	$("#cajaTitulo5FiltroRegionesMovil").css("background-color","#BDBDBD");
	$("#cajaTitulo5FiltroZonasMovil").css("background-color","#BDBDBD");
	$("#cajaTitulo5FiltroTiendasMovil").css("background-color","#F15C22");
	
	if(o != undefined) {
		idRegionBusqueda = -1;
		idZonaBusqueda = -1;
		idTiendaBusqueda = 0;
		
		tipoCategoriaId = 3;
		limpiaCategorias();
		tiendas = [];
		$('#tiendasSelectMovil').val(0);
		$('#tiendasSelectMovil').trigger("chosen:updated");
		$("#tituloVentaPrincipalMovil").text("VENTA TOTAL");
		$("#imgInvierteRegionesMovil").attr("src","images/downSort.png");
		$("#imgInvierteZonasMovil").attr("src","images/downSort.png");
		
		obtieneVentas();
	}
}

function invierteOrden(o,tipo) {
	var imgName = o.src;
	
	if(tipo != tipoCategoriaId) {
		return;
	}
	if(tipo == 1 && regiones.length == 0) return;
	if(tipo == 2 && zonas.length == 0) return;
	if(tipo == 3 && tiendas.length == 0) return;
	
	if(imgName.indexOf("downSort.png") > 0) {
		o.src = "images/upSort.png";
		
		if(tipo == 1) {
			regiones.sort(function (a,b) {
				return (a.porcentaje - b.porcentaje);
			});
		} else if(tipo == 2) {
			zonas.sort(function (a,b) {
				return (a.porcentaje - b.porcentaje);
			});
		} else {
			tiendas.sort(function (a,b) {
				return (a.porcentaje - b.porcentaje);
			});
		}
		
	} else {
		o.src = "images/downSort.png";
		
		if(tipo == 1) {
			regiones.sort(function (a,b) {
				return (b.porcentaje - a.porcentaje);
			});
		} else if(tipo == 2) {
			zonas.sort(function (a,b) {
				return (b.porcentaje - a.porcentaje);
			});
		} else {
			tiendas.sort(function (a,b) {
				return (b.porcentaje - a.porcentaje);
			});
		}
	}
	imprimeNodos(tipo);
}

function toggleMercancias(o) {
	if($("#checkMercancias").is(":checked")) {
		$(o).removeClass("spanSeleccionado");
		$("#txtMercancias").removeClass("spanSeleccionado");
		$("#checkMercancias").prop( "checked", false );
	} else {
		$(o).addClass("spanSeleccionado");
		$("#txtMercancias").addClass("spanSeleccionado");
		$("#checkMercancias").prop( "checked", true );
	}
	recalculaTotal();
}

function toggleTiempoAire(o) {
	if($("#checkTiempoAire").is(":checked")) {
		$(o).removeClass("spanSeleccionado");
		$("#txtTiempoAire").removeClass("spanSeleccionado");
		$("#checkTiempoAire").prop( "checked", false );
	} else {
		$(o).addClass("spanSeleccionado");
		$("#txtTiempoAire").addClass("spanSeleccionado");
		$("#checkTiempoAire").prop( "checked", true );
	}
	recalculaTotal();
}

function toggleServicios(o) {
	if($("#checkServicios").is(":checked")) {
		$(o).removeClass("spanSeleccionado");
		$("#txtServicios").removeClass("spanSeleccionado");
		$("#checkServicios").prop( "checked", false );
	} else {
		$(o).addClass("spanSeleccionado");
		$("#txtServicios").addClass("spanSeleccionado");
		$("#checkServicios").prop( "checked", true );
	}
	recalculaTotal();
}

function toggleImpuestos(o) {
	if($("#checkImpuestos").is(":checked")) {
		$(o).removeClass("spanSeleccionado");
		$("#txtImpuestos").removeClass("spanSeleccionado");
		$("#checkImpuestos").prop( "checked", false );
	} else {
		$(o).addClass("spanSeleccionado");
		$("#txtImpuestos").addClass("spanSeleccionado");
		$("#checkImpuestos").prop( "checked", true );
	}
	recalculaTotal();
}

function obtenerDatos(m, onSuccess, onError, params){	
	
	if(typeof params === "undefined")
		params = parametrosV4[m];
	
	$.ajax({		   
		  type			: 'POST',		  
		  url			: ctx2() + m,
		  data			: params,
		  success		: success,
		  error			: onError		                                    
		});
	
	function success(data)
	{
		if(data['return'] != undefined) {
			var className = data['return']["@type"];
			if(className != undefined) {
				className = className.substring(className.indexOf(':') + 1);
			}
			var respuesta = eval("new " + className + "(data['return'])");
			onSuccess(respuesta);
			data = null;
		} else if(data != undefined && (data.indexOf('Acceso Denegado') > -1  || data.indexOf('ha Caducado !!!') > -1)){
			document.location.href='SesionCaducada';
		}
	}
	
	function onError(data) {
		//console.log(data);
		console.log("ERROR");
	}
}

function ctx2() {
    var base = document.getElementsByTagName('base')[0];
    if (base && base.href && (base.href.length > 0)) {
        base = base.href;
    } else {
        base = document.URL;
    }        
   return base.substr(0, base.indexOf("/", base.indexOf("/", base.indexOf("//") + 2) + 1)) + '/consulta?'; 
};

function formato(cnt, cents) {
	cnt = cnt.toString().replace(/\$|\u20AC|\,/g,'');
	if (isNaN(cnt))
		return 0;	
	var sgn = (cnt == (cnt = Math.abs(cnt)));
	cnt = Math.floor(cnt * 100 + 0.5);
	cvs = cnt % 100;
	cnt = Math.floor(cnt / 100).toString();
	if (cvs < 10)
	cvs = '0' + cvs;
	for (var i = 0; i < Math.floor((cnt.length - (1 + i)) / 3); i++)
		cnt = cnt.substring(0, cnt.length - (4 * i + 3)) + ',' 
                        + cnt.substring(cnt.length - (4 * i + 3));

	return (((sgn) ? '' : '-') + cnt);// + ( cents ?  '.' + cvs : '');
}

function formatoDecimales(cnt, cents) {
	cnt = cnt.toString().replace(/\$|\u20AC|\,/g,'');
	if (isNaN(cnt))
		return 0;	
	var sgn = (cnt == (cnt = Math.abs(cnt)));
	cnt = Math.floor(cnt * 100 + 0.5);
	cvs = cnt % 10;
	cnt = Math.floor(cnt / 100).toString();
	if (cvs < 10)
	cvs = '0' + cvs;
	for (var i = 0; i < Math.floor((cnt.length - (1 + i)) / 3); i++)
		cnt = cnt.substring(0, cnt.length - (4 * i + 3)) + ',' 
                        + cnt.substring(cnt.length - (4 * i + 3));

	return (((sgn) ? '' : '-') + cnt) + ( cents ?  '.' + cvs : '');
}

function mensajePop2(mensaje, funcion) {
	
	$(".dataNotFound_abastoPedidos .titulo3").html(mensaje);
	
	$(".dataNotFound_abastoPedidos").lightbox_me({
		centered : true,
		overlayCSS : {
			opacity : 0.70,
			background : 'black'
		},
		appearEffect : 'fadeIn',
		showOverlay : true,
		closeClick : false,
		closeEsc : false,
		onLoad : function() {
			$(".dataNotFound_abastoPedidos .aceptar_btn").unbind("click");
			$(".dataNotFound_abastoPedidos .aceptar_btn").click(function(){
				$(".dataNotFound_abastoPedidos").trigger('close');
				
				if(funcion != undefined && funcion != "") {
					eval(funcion);
				}
			});
			$(".dataNotFound_abastoPedidos .no_btn").click(function(){
				$(".dataNotFound_abastoPedidos").trigger('close');
				
				if(funcion != undefined && funcion != "") {
					eval(funcion);
				}
			});
			
		}
	});	
}

function loadOn(){
	$.busyLoadFull("show", {
		maxSize: "70px",
		minSize: "70px",
		text: "CARGANDO...",
		textPosition: "bottom",
		textMargin: "1rem",
		fontSize: "1.3rem"
	});
}

function loadOff(){
	$.busyLoadFull("hide", {});
}
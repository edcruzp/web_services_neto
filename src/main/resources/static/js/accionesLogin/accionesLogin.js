/*
 *  accionesLogin.js: Acciones JavaScript que se ejecutan desde el Login
 */
kaptchaR= 0;
reconnect=0;

var pub_key = "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" +
"7nixruXQqQIDAQAB";

$(document).ready(function() {
	
	$("#usuarioId").focus();
    $("#passId").keypress(function(e) {
    		kc = e.keyCode?e.keyCode:e.which; 
    		sk = e.shiftKey?e.shiftKey:((kc == 16)?true:false);
    		if(((kc >= 65 && kc <= 90) && !sk)||((kc >= 97 && kc <= 122) && sk)){
    			bloqMayusActivado = true;
    		} 
    		else if(((kc >= 65 && kc <= 90) && !sk)) {
    			bloqMayusActivado = false;
    		}
    		mostrarBloqMayus();
    });

    $('#captchaIMG').click(function () { 
        $(this).hide()
          .attr('src', 'kaptcha.jpg?' + (++kaptchaR) )
          .fadeIn(); 
      });
    
    $('#captchaIMGre').click(function () { 
        $('#captchaIMG').hide()
        .attr('src', 'kaptcha.jpg?' + (++kaptchaR) )
        .fadeIn(); 
    });
    
    //$.LoadingOverlay("show");
    
    
    /*$.LoadingOverlay("show", {
        image       : "",
        fontawesome : "fa fa-spinner fa-spin"
    });*/
});
//-----------------------------------------------------------------------------------
var bloqMayusActivado;
document.onkeydown = checkBloqMayus;
function mostrarBloqMayus(){	
/*
 *  Mostrar y Ocultar Alerta de May�sculas 
 * */	
	bloqMayusActivado?$("#bloqMayusIndicador").show():$("#bloqMayusIndicador").hide();
}
function checkBloqMayus(e) {
    if (bloqMayusActivado != undefined){
	    var keycode="";
		if (window.event) keycode = window.event.keyCode;
		else if (e) keycode = e.which;		
		if (keycode == 20){
		   bloqMayusActivado?bloqMayusActivado=false:bloqMayusActivado=true;
		   mostrarBloqMayus();
		}
	}
}
ingresando = false;
function ingresar()
/*
 * Funci�n encargada de realizar la petici�n ajax y redireccionar al menu
 * */
{
	if ( validarCampos() ){
		console.log("Bienvenido");
		ingresando = true;
		parametros = "&usuarioId=" + $("#usuarioId").val() + "&pass=" + $("#passId").val()+ "&tipoVerificacion=0";
		//parametros = "&usuarioId=" + $("#usuarioId").val() + "&pass=" + $("#passId").val()+ "&tipoVerificacion=0"+ "&captcha=" + $("#captcha").val();
		//parametros = {usuarioId: $("#usuarioId").val(), pass: $("#passId").val(), tipoVerificacion: 0, captcha: $("#captcha").val()};
		$.LoadingOverlay("show");		
		   $.ajax({
	           type: "POST",
	           url :  "Autorizador",
	           data: parametros,
	           dataType: "xml",
	           success: redireccionarMenu,
	           error  : manejarError
	   });
		
	}	
}

function redireccionarMenu(respuesta)
{	
	reconnect=0;
	var autorizado = parseInt($(respuesta).find('autorizado').text());
	var msjError   = $(respuesta).find('mensajeError').text();
	
	$("#nombreUsuario").text("");
	
	$('#loginBoton').html("ENTRAR");
	$.LoadingOverlay("hide");
	if ( autorizado == 0 ){
		location.replace("inicio.jsp");
	}
	else{
		if(autorizado==3){
			$('#captchaIMG').hide().attr('src', 'kaptcha.jpg?' + (++kaptchaR) ).fadeIn();
			$("#captcha").val("");
		}
		$('#errorMsj').html(msjError);
		$("#errorMsj").shake(100,10,3);
		ingresando= false;
	}
}

function manejarError(){
	
	if(reconnect==3){
		reconnect=0;
		$('#errorMsj').html("Ha ocurrido un error al realizar la petici\u00f3n al Servidor");
		$("#errorMsj").shake(100,10,3);
		ingresando = false;
		$('#loginBoton').html("ENTRAR");
		$.LoadingOverlay("hide");
	}else{
		reconnect++;
		ingresar();
	}
	
}
//-----------------------------------------------------------------------------------
function validarCampos(){
	errorUser = validarUser();
	if ( vacio($("#passId").val()) ){
		if (errorUser == "") $("#passId").focus();
		errorUser += "<br/>- Ingrese la Contrase\u00f1a";
	}
	
	//if ( vacio($("#captcha").val()) ){
		//if (errorUser == "") $("#captcha").focus();
		//errorUser += "<br/>- Ingrese los caracteres de la imagen";
	//}
	
	if ( errorUser != ""){
		$('#errorMsj').html(errorUser);
		$("#errorMsj").shake(100,10,3);
		return false;
	}
		
	return true;
}
//-----------------------------------------------------------------------------------
function validarUser(){
	errorUser = ""; 
	if ( vacio($("#usuarioId").val()) ){
		$("#usuarioId").focus();
		errorUser = "- Ingrese el Usuario";
	}
	else if( isNaN($("#usuarioId").val()) ){
		$("#usuarioId").val("");
		$("#usuarioId").focus();
		errorUser = "- Ingrese un valor num\u00e9rico en el campo Usuario";
	}
	return errorUser;
}

//-----------------------------------------------------------------------------------
function presionaEnter(opcion,event){
	if (event.keyCode=='13'){
		switch(opcion){
		case 1:
			error = validarUser();
			if ( error == "")
			   $("#passId").focus();
			else {
				$('#errorMsj').html(errorUser);
				$("#errorMsj").shake(100,10,3);
			}
			break;
		case 2:
		case 3:	
	    case 4:
			if(!ingresando) ingresar();
			break;
		}
	}
}

function soloNumeros(e) {
	var keynum = window.event ? window.event.keyCode : e.which;
	if ((keynum == 8) || (keynum == 46) || (keynum == 0))
		return true;
	return /\d/.test(String.fromCharCode(keynum));
}
//-----------------------------------------------------------------------------------------------------

function vacio( valor )
/*
 *   Valida que "valor" no est� vac�o o solo con espacios en blanco
 */
{
     if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) return true;
     else return false;
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

jQuery.fn.shake = function(interval,distance,times){
	   interval = typeof interval == "undefined" ? 100 : interval;
	   distance = typeof distance == "undefined" ? 10 : distance;
	   times = typeof times == "undefined" ? 3 : times;
	   var jTarget = $(this);
	   jTarget.css('position','relative');
	   for(var iter=0;iter<(times+1);iter++){
	      jTarget.animate({ left: ((iter%2==0 ? distance : distance*-1))}, interval);
	   }
	   return jTarget.animate({ left: 0},interval);
	}


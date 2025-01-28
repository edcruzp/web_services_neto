//-----------------------------------------------------------------------------------
function cerrarSesion(paginaInicio)
/*
 * Función encargada de realizar la petición ajax y redireccionar al menu
 * */
{
	if (paginaInicio == undefined)
	     ejecuta_modulo("CerrarSesion", "", redireccionarLogin, manejarError, "xml");	
	else ejecuta_modulo("CerrarSesion", "", sesionCerrada, manejarError, "xml");
}
function sesionCerrada(){}
function redireccionarLogin(respuesta)
{
	window.location.replace("indexFlat.html");
}
function manejarError(){
	ingresando = false;
}

function ejecuta_modulo(url, parametros, post_funcion, error_funcion, tipoDato)
/* Ejecuta el archivo en
 * 	"url" transfiere los parametros "parametros" y ejecuta la funcion
 *	"post_funcion" al finalizar la ejecución del modulo,
 *	si existe algun error en la petición se llama la funcion "error_funcion"
 **/
{
   $.ajax({
           type: "POST",
           url :  url,
           data: parametros,
           dataType: tipoDato,
           success: post_funcion,
           error  : error_funcion
   });
}
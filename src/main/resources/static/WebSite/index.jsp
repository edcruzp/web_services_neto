<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page errorPage="/jsp_error/exception_handler.jsp"%>
<%@taglib prefix="c" uri="/WEB-INF/tld/c.tld"%>
<!DOCTYPE html>

<html>
<head>

<meta http-equiv="Content-type" content="text/html; charset=UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
<meta name="viewport" content="width=device-width">
<title>Indicadores NETO</title>

<link rel="stylesheet" href="<c:url value="/js/libs/foundation/css/normalize.css" />">
<link rel="stylesheet" href="<c:url value="/js/libs/foundation/css/foundation.css"/>">
<link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
<link rel="stylesheet" href="<c:url value="/css/calendariosEstilos.css"/>">
<link rel="stylesheet" href="<c:url value="/css/lc_switch.css"/>">
<link rel="stylesheet" type="text/css" href="<c:url value="/css/netoOnline/netoOnline.css"/>">
<link rel="stylesheet" href="<c:url value="/css/chosen.css"/>">
<link rel="stylesheet" href="<c:url value="/css/chosen.min.css"/>">
<link rel="stylesheet" href="<c:url value="/css/app.css"/>">


<script src="<c:url value="/js/libs/foundation/js/vendor/jquery.js"/>"></script>
<script src="<c:url value="/js/libs/foundation/js/vendor/custom.modernizr.min.js"/>"></script>
<script src="<c:url value="/js/libs/backbone/underscore-min.js"/>"></script>
<script src="<c:url value="/js/libs/backbone/backbone-min.js"/>"></script>
<script src="<c:url value="/js/libs/foundation/js/foundation.min.js"/>"></script>
<link rel="stylesheet" href="<c:url value="/css/stiloIndicadores.css"/>">

<script src="<c:url value="/js/libs/charts/highstock.js"/>"></script>
<script src="<c:url value="/js/libs/charts/jquery.nicescroll.min.js"/>"></script>
<script src="<c:url value="/js/indicadores/re_graficas.js"/>"></script>
<script src="<c:url value="/js/indicadores/util.js"/>"></script>
<script src="<c:url value="/js/indicadores/cliente.js"/>"></script>
<script src="<c:url value="/js/indicadores/model.js"/>"></script>
<script type="text/javascript" src="js/indicadores/cerrarSesion.js"> </script>

<!-- Backbone -->
<script src="<c:url value="/js/indicadores/app.js"/>"></script>
<script src="<c:url value="/js/indicadores/views.js"/>"></script>
<script src="<c:url value="/js/indicadores/accionesIndicadores.js"/>"></script>

<script src="http://maps.googleapis.com/maps/api/js?sensor=false" type="text/javascript"></script>
    <script src="js/jquery/google.maps.utility.library.js" type="text/javascript"></script>
    <script type="text/javascript" src="js/jquery/gmap3.min.js"></script> 
    <script type="text/javascript" src="js/jquery/jquery.blockUI.js"></script>
    <script type="text/javascript" src="js/jquery/jquery.nicescroll.min.js"></script>
    <script type="text/javascript" src="js/utilesGenerales/funciones_generales.js"></script>
    <script type="text/javascript" src="js/netoOnline/neto.js"></script>

<script src="<c:url value="/js/libs/foundation/js/jquery-ui.js"/>"></script>
<script src="<c:url value="/js/libs/foundation/js/jquery.ui.datepicker-es.js"/>"></script>
<script src="http://code.highcharts.com/highcharts.js"></script>
 <!--  <script src="http://heartcode-canvasloader.googlecode.com/files/heartcode-canvasloader-min-0.9.1.js"></script>-->
<script src="<c:url value="/js/libs/heartcode-canvasloader-min-0.9.1.js"/>"></script>
<script src="<c:url value="/js/libs/lc_switch.js"/>"></script>
<script src="<c:url value="/js/libs/jquery.lightbox_me.js"/>"></script>
<script src="<c:url value="/js/libs/progressbar.js"/>"></script>
<script src="<c:url value="/js/libs/chosen.jquery.js"/>"></script>
<script src="<c:url value="/js/libs/chosen.jquery.min.js"/>"></script>
<script src="<c:url value="/js/libs/app.js"/>"></script>

<script src="<c:url value="/js/crypt/pidcrypt.js"/>"></script>
<script src="<c:url value="/js/crypt/pidcrypt_util.js"/>"></script>
<script src="<c:url value="/js/crypt/asn1.js"/>"></script>
<script src="<c:url value="/js/crypt/jsbn.js"/>"></script>
<script src="<c:url value="/js/crypt/rng.js"/>"></script>
<script src="<c:url value="/js/crypt/prng4.js"/>"></script>
<script src="<c:url value="/js/crypt/rsa.js"/>"></script>


<script >
	var webIpad='<c:out value="${urlUpdate}"></c:out>';
	var webManifestIpad='<c:out value="${urlManifestIpad}"></c:out>';
	var webManifestIphone='<c:out value="${urlManifestIphone}"></c:out>';
	var nombreUsuario = '<c:out value="${netoSession.nombre}"></c:out>';
	var apUsuario = '<c:out value="${netoSession.apellidoPaterno}"></c:out>';
	var amUsuario = '<c:out value="${netoSession.apellidoMaterno}"></c:out>';
	var userId = '<c:out value="${netoSession.numeroEmpleado}"></c:out>';
	var puestoId = '<c:out value="${netoSession.puesto}"></c:out>';

</script>

</head>
<body>

	<div id="modulo"></div>
  	<script>   
    $(document).foundation();    
  </script>
</body>
</html>

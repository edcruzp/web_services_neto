<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>

<%@ page isErrorPage="true" import="java.io.PrintWriter"%>
<%@ page isErrorPage="true" import="java.io.StringWriter"%>

<html>
<head>
<title>Ha ocurrido un evento excepcional !!!</title>
<script type="text/javascript" src="js/jquery/jquery.js">
	
</script>
<style>
body,p {
	font-family: Tahoma;
	font-size: 10pt;
	padding-left: 30;
}

pre {
	font-size: 8pt;
}
.msjError{
    font-size:18px;
    color: red;
    font-weight:bold;
}
.contacto{
    font-size:16px;
    color: #888888;
    font-weight:bold;
}
#verDetalle{
    width:130px;
    font-weight:bold;
    color:blue;
}
#mensajeError{
    display: block; 
    background-color: #F2F2F2; 
    font: 13px  Courier, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
    padding-left:10px;
}
.mensajeErrorEncab{
     font-weight:bold;
     background:#dddddd; 
     font: 15px  Courier, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
     padding-left:10px; 
}
.btn_inicio{
     font-weight:bold;
     color: green;
     width:130px;
}
</style>
<script type="text/javascript">
		$(document).ready(function() {
			
			$("#verDetalle").toggle(function() {
				$("#mensajeError").hide('slow');
				$("#verDetalle").val('Ver detalle');				
			}, function() {
				$("#mensajeError").show('slow');
				$("#verDetalle").val('Ocultar detalle');
			});

		});
</script>
	
</head>
<body>
	<table style="width: 95%;" >
		<tbody>
			<tr style="background:#ffe8e8;">
				<td style="width: 100px; text-align:center; ">
				    <img src="imagenes/icoAlerta.png" />
				</td>
				<td style="padding:5px;">
				    <span class="msjError">Ha ocurrido un error en la página solicitada ....</span><br/>
				    <span class="contacto">Favor de contactar con Soporte de Neto</span>
				</td>
			</tr>
			
			<tr>
				<td class="opcionError" style="vertical-align: top; text-align:center; background-color: #F2F2F2; padding:10px;">
				    <input type="button" value="Ocultar detalle" id="verDetalle" >
				    <div style="padding-top:10px;">
				    <input type="button" value="::: Ir a Inicio :::" class="btn_inicio"
				    onclick="location.href='<%=request.getContextPath()%>'">
				    </div>
				</td>
				<td colspan="2">
					<DIV class="mensajeErrorEncab">
					    <%=exception.toString()%><br>
					</DIV>
					<div id="mensajeError">
						<h1>Si el error persiste, contacte a soporte</h1>
					</div>
				</td>
			</tr>
		</tbody>
	</table>
</body>
</html>
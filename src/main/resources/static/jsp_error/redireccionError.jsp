<%@ page language="java" contentType="text/html; charset=ISO-8859-1"  pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width">
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta http-equiv="refresh" content="2; url=<%=request.getContextPath()%>/" />
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<title>Neto:::<c:out value="${errorAcceso.descripcion}" /></title>
<link rel="stylesheet" href="js/libs/foundation/css/normalize.css">
<link rel="stylesheet" href="js/libs/foundation/css/foundation.css">
<link rel="stylesheet" href="css/login/login.css">
<script src="js/libs/foundation/js/vendor/jquery.js"></script>
<script src="js/libs/foundation/js/vendor/custom.modernizr.min.js"></script>
<script src="js/libs/foundation/js/foundation.min.js"></script>
<script type="text/javascript">
$(document).foundation();
</script>
</head>
<body>



<!-- <header class="full-width header-area">
		<nav class="top-bar">
			<ul class="">
				<li class="name">
				<div style="width: 100px; height: 45px;background: #FFFFFF;float:left;left:50%;">
					<a href="#">
						<img id="logoNeto" src="images/flat/img_Logo.png">
					</a>
				</div>
				</li>
			</ul>
		</nav>
</header> -->

<div style="background: #21314C;height: 45px;width:auto;">
	<div style="width: 100px; height: 45px;background: #FFFFFF;margin-left: auto;margin-right: auto;">
		<a href="#">
			<img id="logoNeto" src="images/flat/img_Logo.png">
		</a>
	</div>
</div>

	<div id="contenedorPrincipal" class="row large-6 small-9">
		<br/>
		<h1 style="color:red;"><c:out value="${errorAcceso.descripcion}" /></h1>
	</div>
</body>
</html>
<%@page import="java.io.FileReader"%>
<%@page import="java.io.BufferedReader"%>
<%@page import="java.util.regex.Matcher"%>
<%@page import="java.util.regex.Pattern"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>DWL--</title>
</head>
<body>
	<%
	BufferedReader reader = null;
	try {
		String basedir = System.getProperty("jboss.server.base.dir");
		String fileConfigLog = pageContext.getServletContext().getInitParameter("file.config.log");
		String appName = fileConfigLog.replace(".xml", "");
		String filepath = "";

		reader = new BufferedReader(new FileReader(basedir + "/config/" + fileConfigLog));

		String line = null;
		Pattern pattern = Pattern.compile("<file>(.*?)</file>");
		Matcher matcher = null;

		while ((line = reader.readLine()) != null) {
			matcher = pattern.matcher(line);
			if (matcher.find()) {
				filepath = matcher.group(1).replace("${jboss.server.base.dir}", basedir).replace("${APP_NAME}", appName);
				break;
			}
		}

		String filename = appName + ".log";
		response.setContentType("APPLICATION/OCTET-STREAM");
		response.setHeader("Content-Disposition", "attachment; filename=\"" + filename + "/");

		java.io.FileInputStream fileInputStream = new java.io.FileInputStream(filepath);

		int i;
		while ((i = fileInputStream.read()) != -1) {
			out.write(i);
		}
		fileInputStream.close();

	} catch (Exception e) {
		// TODO: handle exception
	} finally {
		if(reader != null){
			reader.close();
		}
	}
	%>
</body>
</html>
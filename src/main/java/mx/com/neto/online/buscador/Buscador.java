//package mx.com.neto.online.buscador;
//
//import java.io.IOException;
//import java.net.URL;
//import java.net.URLConnection;
//import java.util.ArrayList;
//import java.util.List;
//import java.util.Scanner;
//
//import javax.servlet.http.HttpServlet;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//
//import neto.sion.genericos.log.Logeo;
//
//import org.json.JSONArray;
//import org.json.JSONException;
//import org.json.JSONObject;
//
//import Com.Elektra.Definition.Config.ConfigSION;
//
//import com.untzuntz.ustack.exceptions.InputValidationException;
//
//public class Buscador extends HttpServlet {
//	private static final long serialVersionUID = 1L;
//	
//	protected void doPost(HttpServletRequest request, HttpServletResponse response) 
//    {   
//		String charset = "ISO-8859-1";
//		String url;
//			url = ConfigSION.obtenerParametro("neto.indicadores.servicio.url");		
//		
//		if(!url.endsWith("/"))
//			url += "/";
//		url += "obtieneDatosBuscador" + new StringBuilder("?response=application/json&Content-Type:text/xml&charset=ISO-8859-1&cadenaBuscador=")
//		.append(request.getParameter("txtBuscar"));
//		
//		
//		Scanner sc = null;
//		try
//		{
//			URLConnection connection = new URL(url).openConnection();
//			connection.setDoOutput(true); // Triggers POST.
//			connection.setRequestProperty("Accept", charset);
//			connection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded; charset="+charset);
//			
//			sc = new Scanner(connection.getInputStream());
//			String cadena = "";
//			while(sc.hasNextLine()) {
//				cadena = sc.nextLine();
//				
//				if(cadena.contains("execute") || cadena.contains("doPost") || cadena.contains("doGet")) {
//					throw new InputValidationException();
//				}
//			}
//			JSONObject jsonObj = new JSONObject(cadena);
//			String resultado = jsonObj.getString("return");
//			response.getWriter().println(resultado);
//			
//		}	
//		catch (IOException e) {
//			Logeo.log("Ocurrio un problema al consumir el servicio. " + e);
//		} catch(InputValidationException ive) {
//			Logeo.log("Ocurrio un problema al validar la informacion del servicio. " + ive);
//		} catch(JSONException je) {
//			Logeo.log("Ocurrio un problema al convertir la informacion del servicio. " + je);
//		}
//		finally {
//			if(sc != null) {
//				sc.close();
//			}
//		}
//    }
//	
//}
//

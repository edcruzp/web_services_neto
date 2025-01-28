//package mx.com.neto.online.mapas;
//
//import java.io.IOException;
//import java.io.PrintWriter;
//import java.net.URL;
//import java.net.URLConnection;
//import java.net.URLEncoder;
//import java.nio.charset.StandardCharsets;
//import java.util.Scanner;
//
//import javax.servlet.http.HttpServlet;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//
//import neto.sion.genericos.log.Logeo;
//
//import org.json.JSONException;
//import org.json.JSONObject;
//
//import Com.Elektra.Definition.Config.ConfigSION;
//
//import com.untzuntz.ustack.exceptions.InputValidationException;
//public class DatosSucursales extends HttpServlet {
//	private static final long serialVersionUID 			  = 1L;
//	private static final int OPERACION_BUSCA_EDOS_MCPIOS  = 1;
//	private static final int OPERACION_BUSCA_SUCURSALES   = 2;
//	private static final int OPERACION_BUSCA_DATOS_INIT   = 3;
//	private static final int OPERACION_BUSCA_DATOS_CEDIS  = 4;
//	
//	
//    public DatosSucursales() {
//        super();
//    }
//
//	protected void doGet(HttpServletRequest request, HttpServletResponse response) {
//		doPost( request,  response);
//	}
//   
//	protected void doPost(HttpServletRequest request, HttpServletResponse response) {
//		String respuesta = "";
//		String charset = "ISO-8859-1";
//		String url;
//			url = ConfigSION.obtenerParametro("neto.indicadores.servicio.url");
//		String estado = request.getParameter("estado") == null ? "": request.getParameter("estado");
//		String poblacion = request.getParameter("poblacion") == null ? "": request.getParameter("poblacion");
//		String cp = request.getParameter("cp") == null ? "": request.getParameter("cp");
//		
//		if(!url.endsWith("/"))
//			url += "/";
//		url += "obtieneSucursales";
//		
//		StringBuilder parametrosNuevos = new StringBuilder("?response=application/json&Content-Type:text/xml&charset=ISO-8859-1&parametroAccion=").append(request.getParameter("accion"));
//		Scanner sc = null;
//		try
//		{
//			if(estado != null && !estado.equals("") && !estado.equals("undefined")) {
//				parametrosNuevos = parametrosNuevos.append("&estado=").append(URLEncoder.encode(estado, StandardCharsets.UTF_8.toString()).replace("+", "%20"));
//			} else {
//				parametrosNuevos = parametrosNuevos.append("&estado=");
//			}
//			if(poblacion != null && !poblacion.equals("") && !poblacion.equals("undefined")) {
//				parametrosNuevos = parametrosNuevos.append("&poblacion=").append(URLEncoder.encode(poblacion,StandardCharsets.UTF_8.toString()).replace("+", "%20"));
//			} else {
//				parametrosNuevos = parametrosNuevos.append("&poblacion=");
//			}
//			if(cp != null && !cp.equals("") && !cp.equals("undefined")) {
//				parametrosNuevos = parametrosNuevos.append("&cp=").append(URLEncoder.encode(cp,StandardCharsets.UTF_8.toString()).replace("+", "%20"));
//			} else {
//				parametrosNuevos = parametrosNuevos.append("&cp=");
//			}
//			url += parametrosNuevos;
//
//			URLConnection connection = new URL(url).openConnection();
//			connection.setDoOutput(true); // Triggers POST.
//			connection.setRequestProperty("Accept", charset);
//			connection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded; charset="+charset);
//			
//			sc = new Scanner(connection.getInputStream());
//			String cadena = "";
//			while(sc.hasNextLine()) {
//				cadena = sc.nextLine();
//				if(cadena.contains("execute") || cadena.contains("doPost") || cadena.contains("doGet")) {
//					throw new InputValidationException();
//				}
//			}
//			
//			JSONObject jsonObj = new JSONObject(cadena);
//			respuesta = jsonObj.getString("return");
//			enviarRespuesta(response, respuesta);
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
//	}
//	
//	private void enviarRespuesta(HttpServletResponse response, String datos){
//		PrintWriter out;
//		try {		
//			response.setContentType("application/json; charset=ISO-8859-1");
//			response.setCharacterEncoding("ISO-8859-1");
//			out = response.getWriter();		
//			out.write(datos);
//		} catch (IOException e) {
//			Logeo.logearExcepcion(e, "ERROR al enviar la respuesta de los Datos de las sucursales");
//		}
//		
//	}
//
//}

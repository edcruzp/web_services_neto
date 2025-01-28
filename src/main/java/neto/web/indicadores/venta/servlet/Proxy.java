//package neto.web.indicadores.venta.servlet;
//
//import java.io.BufferedReader;
//import java.io.IOException;
//import java.io.InputStreamReader;
//import java.net.URL;
//import java.net.URLConnection;
//import java.security.KeyPair;
//import java.security.interfaces.RSAPrivateKey;
//import java.util.Hashtable;
//import java.util.Map;
//import java.util.Scanner;
//
//import javax.crypto.Cipher;
//import javax.servlet.http.HttpServlet;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//
//import mx.com.neto.online.sesiones.util.LlavePublica;
//import neto.sion.genericos.log.Logeo;
//
//import org.apache.commons.codec.binary.Base64;
//import org.apache.commons.codec.binary.Hex;
//
//import Com.Elektra.Definition.Config.ConfigSION;
//
//import com.untzuntz.ustack.exceptions.InputValidationException;
//
///**
// * Servlet implementation class Proxy
// */
//public class Proxy extends HttpServlet {
//	private static final long serialVersionUID = 1L;
//	
//	private static Map<String, String> serviceMethods;
//       
//    /**
//     * @see HttpServlet#HttpServlet()
//     */
//    public Proxy() {
//        super();
//       if(serviceMethods == null)
//       {
//    	   serviceMethods = new Hashtable<String, String>();
//    	   serviceMethods.put("obtieneTiposEntrega", "obtieneTipoEntrega");
//    	   serviceMethods.put("obtieneTiposServicio", "obtieneTipoServicio");
//    	   serviceMethods.put("obtieneProveedores", "obtieneProveedor");
//    	   serviceMethods.put("obtieneVentas", "consultaReporteVenta");
//    	   serviceMethods.put("obtieneVentasXRegion", "consultaReporteVentaXRegion");
//    	   serviceMethods.put("obtieneVentasXDiaYSemana", "consultaVentasXDiaYSemana");
//    	   serviceMethods.put("obtieneTiendasBuscador", "obtieneTiendas");
//       }
//    }
//   
//	/**
//	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
//	 */
//protected void doPost(HttpServletRequest request, HttpServletResponse response){	
//		
//		String servicio = request.getQueryString();
//		
//		//try {
//		
//		if(servicio == null || request.getParameter("pais") == null)
//		{
//			Logeo.log("Parametros incompletos: {servicio:" + servicio + ", pais: " + request.getParameter("pais") + "}");
//			response.setStatus(404);
//			return;
//		}
//		
//		String metodo = serviceMethods.get(servicio);
//		StringBuilder parametros = new StringBuilder("?response=application/json&Content-Type:text/xml&charset=UTF-8&pais=")
//		.append(request.getParameter("pais"))
//		.append("&origen=1");							
//						
//		if(servicio.equals("obtieneTiposEntrega")){
//			parametros = new StringBuilder("?response=application/json&Content-Type:text/xml&charset=UTF-8&paisId=")
//			.append(request.getParameter("pais"));
//		} else if(servicio.equals("obtieneTiposServicio")) {
//			parametros = new StringBuilder("?response=application/json&Content-Type:text/xml&charset=UTF-8&paisId=")
//			.append(request.getParameter("pais"));
//		} else if(servicio.equals("obtieneProveedores")) {
//			parametros = new StringBuilder("?response=application/json&Content-Type:text/xml&charset=UTF-8&paisId=")
//			.append(request.getParameter("pais"));
//		} else if(servicio.equals("obtieneVentas")) {
//			parametros = new StringBuilder("?response=application/json&Content-Type:text/xml&charset=ISO-8859-1&paisId=")
//			.append(request.getParameter("pais"))
//			.append("&regionId=").append(request.getParameter("region"))
//			.append("&zonaId=").append(request.getParameter("zona"))
//			.append("&tiendaId=").append(request.getParameter("tienda"))
//			.append("&fechaInicio=").append(request.getParameter("fechaInicio"))
//			.append("&fechaFin=").append(request.getParameter("fechaFin"))
//			.append("&tipoPpto=").append(request.getParameter("tipoPpto"));
//			/*String paramCifrados = request.getParameter("parametros");
//			String paramPlain = decifraCadena(paramCifrados);
//			
//	        JSONObject jsonObj = new JSONObject(paramPlain);
//	        int paisWS = jsonObj.getInt("pais");
//	        int regionWS = jsonObj.getInt("region");
//	        int zonaWS = jsonObj.getInt("zona");
//	        int tiendaWS = jsonObj.getInt("tienda");
//	        String fechaInicioWS = jsonObj.getString("fechaInicio");
//	        String fechaFinWS = jsonObj.getString("fechaFin");
//			
//			parametros = new StringBuilder("?response=application/json&Content-Type:text/xml&charset=UTF-8&paisId=")
//			.append(paisWS)
//			.append("&regionId=").append(regionWS)
//			.append("&zonaId=").append(zonaWS)
//			.append("&tiendaId=").append(tiendaWS)
//			.append("&fechaInicio=").append(fechaInicioWS)
//			.append("&fechaFin=").append(fechaFinWS);*/
//		} else if(servicio.equals("obtieneVentasXDiaYSemana")) {
//		parametros = new StringBuilder("?response=application/json&Content-Type:text/xml&charset=ISO-8859-1&paisId=")
//			.append(request.getParameter("pais"))
//			.append("&regionId=").append(request.getParameter("region"))
//			.append("&zonaId=").append(request.getParameter("zona"))
//			.append("&tiendaId=").append(request.getParameter("tienda"))
//			.append("&tipoConsulta=").append(request.getParameter("tipoConsulta")) 
//			.append("&fechaInicio=").append(request.getParameter("fechaInicio"))
//			.append("&fechaFin=").append(request.getParameter("fechaFin"))
//			.append("&tipoPpto=").append(request.getParameter("tipoPpto"));
//			
//			/*String paramCifrados = request.getParameter("parametros");
//			String paramPlain = decifraCadena(paramCifrados);
//			
//			JSONObject jsonObj = new JSONObject(paramPlain);
//	        int paisWS = jsonObj.getInt("pais");
//	        int regionWS = jsonObj.getInt("region");
//	        int zonaWS = jsonObj.getInt("zona");
//	        int tiendaWS = jsonObj.getInt("tienda");
//	        int tipoConsultaWS = jsonObj.getInt("tipoConsulta");
//	        String fechaInicioWS = jsonObj.getString("fechaInicio");
//	        String fechaFinWS = jsonObj.getString("fechaFin");
//			
//			parametros = new StringBuilder("?response=application/json&Content-Type:text/xml&charset=UTF-8&paisId=")
//			.append(paisWS)
//			.append("&regionId=").append(regionWS)
//			.append("&zonaId=").append(zonaWS)
//			.append("&tiendaId=").append(tiendaWS)
//			.append("&tipoConsulta=").append(tipoConsultaWS)
//			.append("&fechaInicio=").append(fechaInicioWS)
//			.append("&fechaFin=").append(fechaFinWS);*/
//		} else if(servicio.equals("obtieneTiendasBuscador")) {
//				parametros = new StringBuilder("?response=application/json&Content-Type:text/xml&charset=UTF-8");
//		} else if(servicio.equals("activaSesion")) {
//			
//		}
//		else{
//			Logeo.log("Parametros incompletos: {servicio:" + servicio + ", pais: " + request.getParameter("pais") + ", metodo: " + metodo +"}");
//			response.setStatus(404);			
//			return;
//		}														
//		
//		String charset = "UTF-8";
//		String url;
//			url = ConfigSION.obtenerParametro("neto.indicadores.servicio.url");		
//		
//		if(!url.endsWith("/"))
//			url += "/";
//		url += metodo + parametros.toString();
//
//		Scanner sc = null;
//		try
//		{
//			URLConnection connection = new URL(url).openConnection();
//			connection.setDoOutput(true); // Triggers POST.
//			connection.setRequestProperty("Accept", charset);
//			connection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded; charset="+charset);
//			
//			response.setContentType("application/json; charset=UTF-8");	
//			
//			sc = new Scanner(connection.getInputStream(),"UTF-8");		
//			while(sc.hasNextLine()) {
//				String cadena = sc.nextLine();
//				if(cadena.contains("execute") || cadena.contains("doPost") || cadena.contains("doGet")) {
//					throw new InputValidationException();
//				}
//				
//				response.getWriter().println(cadena);
//			}
//		}	
//		catch (IOException e) {
//			Logeo.log("Ocurrio un problema al consumir el servicio. " + e);
//		} catch(InputValidationException ive) {
//			Logeo.log("Ocurrio un problema al validar la informacion del servicio. " + ive);
//		} finally {
//			if(sc != null) {
//				sc.close();
//			}
//		}
//		//} catch(JSONException je) {
//			//Logeo.log("Ocurrio un problema al obtener los parametros. " + je);
//		//}
//	}
//
//public String decifraCadena(String cadena) {
//	String plainText = "";
//	try {
//		//System.out.println("** cadena: " + cadena);
//	    //Security.addProvider(new org.bouncycastle.jce.provider.BouncyCastleProvider());
//		//System.out.println("** 1 **");
////	    Cipher cipher = Cipher.getInstance("RSA/ECB/PKCS1Padding", "BC");
//	    Cipher cipher = Cipher.getInstance("RSA/None/OAEPWithSHA-1AndMGF1Padding", "BC");
//	    //System.out.println("** 2 **");
//	    KeyPair ks = LlavePublica.llavePublica;
//	    //System.out.println("****** Llave usada: " + LlavePublica.llavePublica.getPublic().getAlgorithm());
//	    //System.out.println("** 3 **");
//	    RSAPrivateKey privKey = (RSAPrivateKey) ks.getPrivate();
//	    //System.out.println("** 4 **");
//	    byte[] cipherText = Hex.decodeHex(cadena.toCharArray());
//	    //System.out.println("** 5 **");
//	    cipher.init(Cipher.DECRYPT_MODE, privKey);
//	    //System.out.println("** 6 **");
//	    byte[] plain = cipher.doFinal(cipherText);
//	    //System.out.println("** 7 **");
//	    plainText = new String(Base64.decodeBase64(plain));
//	    //System.out.println("** 8 **");
//	} catch(Exception e) {
//		//e.printStackTrace();
//		Logeo.log("Ocurrio un problema al descifrar la informacide entrada. " + e);
//	}
//	return plainText;
//}
//}
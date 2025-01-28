//package neto.sion.web.seguridad;
//
//import java.io.FileReader;
//import java.io.IOException;
//import java.io.PrintWriter;
//import java.io.UnsupportedEncodingException;
//import java.net.URL;
//import java.net.URLConnection;
//import java.net.URLEncoder;
//import java.security.KeyPair;
//import java.security.Security;
//import java.security.interfaces.RSAPrivateKey;
//import java.util.ArrayList;
//import java.util.Scanner;
//
//import javax.crypto.Cipher;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import javax.servlet.http.HttpSession;
//
//import org.apache.axis2.AxisFault;
//import org.apache.commons.codec.binary.Hex;
//import org.apache.tomcat.util.codec.binary.Base64;
//import org.bouncycastle.openssl.PEMDecryptorProvider;
//import org.bouncycastle.openssl.PEMEncryptedKeyPair;
//import org.bouncycastle.openssl.PEMParser;
//import org.bouncycastle.openssl.jcajce.JcaPEMKeyConverter;
//import org.bouncycastle.openssl.jcajce.JcePEMDecryptorProviderBuilder;
//import org.json.JSONException;
//import org.json.JSONObject;
//
//import com.untzuntz.ustack.exceptions.InputValidationException;
//
//import Com.Elektra.Definition.Config.ConfigSION;
//import mx.com.neto.online.sesiones.util.LlavePublica;
//import neto.sion.genericos.log.Logeo;
//import neto.sion.web.autorizador.datosUsuario.DatosSession;
//import neto.sion.web.permisos.dto.OpcionDto;
//import neto.sion.web.permisos.dto.OpcionesUsuarioDto;
//import neto.sion.web.permisos.dto.PeticionDto;
//import neto.sion.web.permisos.dto.RespuestaOpcionesUsuarioDto;
//import neto.sion.web.permisos.serviceFacade.PermisosUsuarioImpl;
//
//public class AutorizadorHandler {
//
//	//- Parametros de Entrada
//	private String numeroEmpleado;
//	private String passMD5="";
//	private int tipoVerificacion;
//	private String pass;
//	//-- Parde Salida
//	private TipoResultadoAutorizador resultadoAutorizacion = TipoResultadoAutorizador.ERROR_DESCONOCIDO;
//	
//	public static void main() throws Exception {
//		AutorizadorHandler ah = new AutorizadorHandler();
//		ah.getKeyPairPEM("/Users/yruizm/Desktop/Antonio/workspaces/workspaceIntegracionHome/WebIndicadoresVenta/WebContent/resources/clave.pem");
//	}
//	
//	private KeyPair getKeyPairPEM(String path) throws Exception {
//		Security.addProvider(new org.bouncycastle.jce.provider.BouncyCastleProvider());
//	    FileReader fileReader = new FileReader(path);//"/Users/yruizm/Desktop/Antonio/workspaces/workspaceIntegracionHome/WebIndicadoresVenta/WebContent/resourcess/clave.pem");
//	    PEMParser pemParser = new PEMParser(fileReader);
//	    Object pemKeyPair = (Object) pemParser.readObject();
//	    PEMDecryptorProvider decProv = new JcePEMDecryptorProviderBuilder().build("WebIndicadoresVenta".toCharArray());
//	    JcaPEMKeyConverter converter = new JcaPEMKeyConverter();
//	    KeyPair keyPair = converter.getKeyPair(((PEMEncryptedKeyPair)pemKeyPair).decryptKeyPair(decProv));
//	    pemParser.close();
//	    return keyPair;
//	 }
//	
//	public String decifraCadena(String cadena) {
//		String plainText = "";
//		try {
//		    //Security.addProvider(new org.bouncycastle.jce.provider.BouncyCastleProvider());
////		    Cipher cipher = Cipher.getInstance("RSA/ECB/PKCS1Padding", "BC");
//		    Cipher cipher = Cipher.getInstance("RSA/None/OAEPWithSHA-1AndMGF1Padding", "BC");
//		    KeyPair ks = LlavePublica.llavePublica;
//		    RSAPrivateKey privKey = (RSAPrivateKey) ks.getPrivate();
//		    byte[] cipherText = Hex.decodeHex(cadena.toCharArray());
//		    cipher.init(Cipher.DECRYPT_MODE, privKey);
//		    byte[] plain = cipher.doFinal(cipherText);
//		    plainText = new String(Base64.decodeBase64(plain));
//		} catch(Exception e) {
//			Logeo.log("Ocurrio un problema al descifrar la informacide entrada. " + e);
//		}
//		return plainText;
//	}
//	
//	public void handle(HttpServletRequest request, HttpServletResponse response, String path)  {
//		try {
//			// -- Recibiendo Par---
//			/*LlavePublica.llavePublica = getKeyPairPEM(path);
//			
//			String paramCifrados = request.getParameter("parametros");
//			String paramPlain = decifraCadena(paramCifrados);
//			
//			System.out.println("--- 0 ---");
//			JSONObject jsonObj = new JSONObject(paramPlain);
//			System.out.println("--- 0.1 ---");
//	        String usuarioIdWS = jsonObj.getString("usuarioId");
//	        System.out.println("--- 0.2 ---");
//	        String passWS = jsonObj.getString("pass");
//	        System.out.println("--- 0.3 ---");
//	        String captchaWS = jsonObj.getString("captcha");
//	        System.out.println("--- 0.4 ---");
//	        int tipoVerificacionWS = jsonObj.getInt("tipoVerificacion");*/
//			
//			
//			if ((request.getParameter("usuarioId") != null)&& (request.getParameter("pass") != null)) {
//	        //if (usuarioIdWS != null && passWS != null) {
//				numeroEmpleado = request.getParameter("usuarioId");//usuarioIdWS;
//				pass = request.getParameter("pass");//passWS;
//				
//				tipoVerificacion = Integer.parseInt(request.getParameter("tipoVerificacion"));//tipoVerificacionWS;
//				validarClave(request, response, path);
//
//				/*String kaptchaExpected = (String) request.getSession().getAttribute(com.google.code.kaptcha.Constants.KAPTCHA_SESSION_KEY);
//				String kaptchaReceived = request.getParameter("captcha");
//
//				if (kaptchaReceived == null || !kaptchaReceived.equalsIgnoreCase(kaptchaExpected)) {
//					resultadoAutorizacion = TipoResultadoAutorizador.CAPTCHA_INCORRECTO;
//					enviarRespuesta(response);
//				} else {
//					tipoVerificacion = Integer.parseInt(request.getParameter("tipoVerificacion"));//tipoVerificacionWS;
//
//					// --- Validacipor Contrase---
//					validarClave(request, response, path);
//				}*/
//			}
//			else{
//				enviarRespuesta(response);
//			}
//		} catch (IllegalArgumentException e) {
//			Logeo.logearExcepcion(e,
//					"ERROR al Solicitar Autorizacion, Servlet: AutorizadorServlet");
//		} //catch(JSONException je) {
//			//Logeo.log("Ocurrio un problema al obtener los parametros. " + je);
//		catch(Exception ex) {
//			Logeo.logearExcepcion(ex, "ERROR al codificar la peticial servicio: " + ex.getMessage());
//		}
//	}
//	
//	/**
//	 * Validacipor Contrase
//	 * 
//	 */
//	private void validarClave(HttpServletRequest request, HttpServletResponse response, String path)  {
//		
//		//--- Validacipor Contrase---
//		resultadoAutorizacion = TipoResultadoAutorizador.ERROR_PASS;
//		try{
//			//-- Consultar Servicio (Obtener Datos del Usuario en Central)---
//			PermisosUsuarioImpl permisosUsuario = new PermisosUsuarioImpl();
//			PeticionDto peticion = new PeticionDto();
//			peticion.setUsuaiorId(Integer.parseInt(numeroEmpleado));
//			RespuestaOpcionesUsuarioDto respuesta = new RespuestaOpcionesUsuarioDto();
//			respuesta = permisosUsuario.obtenerPerfilesDeUsuarioCentral(peticion);
//			
//			int error = respuesta.getError();
//			if ( error == 0) {
//					
//				boolean esUsuarioValido = false;
//				
//				String charset = "ISO-8859-1";
//				String url;
//					url = ConfigSION.obtenerParametro("neto.indicadores.servicio.url");		
//				
//				if(!url.endsWith("/"))
//					url += "/";
//				url += "comprobarPass" + new StringBuilder("?response=application/json&Content-Type:text/xml&charset=ISO-8859-1&userPass=")
//				.append(URLEncoder.encode(pass, "UTF-8"))
//				.append("&passBD=").append(URLEncoder.encode(respuesta.getOpcionesUsuario().getContrasena(),"UTF-8"));
//				
//				
//				Scanner sc = null;
//				try
//				{
//					URLConnection connection = new URL(url).openConnection();
//					connection.setDoOutput(true); // Triggers POST.
//					connection.setRequestProperty("Accept", charset);
//					connection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded; charset="+charset);
//					
//					sc = new Scanner(connection.getInputStream());
//					String cadena = "";
//					while(sc.hasNextLine()) {
//						cadena = sc.nextLine();
//						if(cadena.contains("execute") || cadena.contains("doPost") || cadena.contains("doGet")) {
//							throw new InputValidationException();
//						}
//					}
//					
//					JSONObject jsonObj = new JSONObject(cadena);
//					esUsuarioValido = jsonObj.getBoolean("return");
//				}	
//				catch (IOException e) {
//					Logeo.log("Ocurrio un problema al consumir el servicio. " + e);
//				} catch(InputValidationException ive) {
//					Logeo.log("Ocurrio un problema al validar la informacion del servicio. " + ive);
//				} catch(JSONException je) {
//					Logeo.log("Ocurrio un problema al convertir la informacion del servicio. " + je);
//				}
//				finally {
//					if(sc != null) {
//						sc.close();
//					}
//				}
//				
//				
//				
//				//if ( comprobarPass(pass,respuesta.getOpcionesUsuario().getContrasena()) ){
//				if ( esUsuarioValido ){
//					//System.out.println("****** Antes de generar la llave *****");
//					   //LlavePublica.llavePublica = getKeyPairPEM(path);
//					   //System.out.println("****** Se generla llave *****" + LlavePublica.llavePublica.getPublic().getAlgorithm());
//  				   //Autorizado
//					resultadoAutorizacion = TipoResultadoAutorizador.USUARIO_CORRECTO;
//  				   //Crear Sesi
//				   crearSesion( respuesta,  request,  numeroEmpleado);
//				}
//				else{
//					resultadoAutorizacion = TipoResultadoAutorizador.USU_PASS_INCORRECTO;
//				}
//			} 
//			else { 
//				//Usuario no Registrado en Central
//				resultadoAutorizacion = TipoResultadoAutorizador.NO_REGISTRADO_CENTRAL;
//			}
//		}
//		catch(AxisFault e){
//			Logeo.logearExcepcion(e, "ERROR al Solicitar Autorizacion(CONTRASEServlet: AutorizadorServlet");
//		}
//		catch(IllegalArgumentException e){
//			Logeo.logearExcepcion(e, "ERROR al Solicitar Autorizacion(CONTRASEServlet: AutorizadorServlet");
//		}
//		catch(UnsupportedEncodingException ue) {
//			Logeo.logearExcepcion(ue, "ERROR al codificar la peticial servicio");
//		} catch(Exception ex) {
//			Logeo.logearExcepcion(ex, "ERROR al codificar la peticial servicio: " + ex.getMessage());
//		}
//		finally{
//			enviarRespuesta(response);
//		}
//	}
//
//	
//	private void enviarRespuesta(HttpServletResponse response){
//		PrintWriter out;
//		try {	
//			out = response.getWriter();		
//			response.setContentType("text/xml");
//			out.write("<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?>" +
//					  "<autorizadorResp><autorizado>" + resultadoAutorizacion.getCodigo() + "</autorizado>" +
//					  "<mensajeError>"+ resultadoAutorizacion.getDescripcion() + "</mensajeError>" +
//					  "</autorizadorResp>");
//		} catch (IOException e) {
//			Logeo.logearExcepcion(e, "ERROR al Enviar respuesta de Autorizacion, Servlet: AutorizadorServlet");
//		}
//		
//	}
//	
//	private void crearSesion(RespuestaOpcionesUsuarioDto respuesta, HttpServletRequest request, String numeroEmpleado){
//		try{
//			//Crear Sesi
//			DatosSession datosSession = new DatosSession();
//			datosSession.setNumeroEmpleado(numeroEmpleado);
//			datosSession.setNombre(respuesta.getOpcionesUsuario().getNombre());
//			datosSession.setApellidoPaterno(respuesta.getOpcionesUsuario().getApellidoPaterno());
//			datosSession.setApellidoMaterno(respuesta.getOpcionesUsuario().getApellidoMaterno());
//			datosSession.setPuesto(respuesta.getOpcionesUsuario().getPuestoId());
//			datosSession.setPaisId(respuesta.getOpcionesUsuario().getPaisId());
//
//			OpcionesUsuarioDto opcionesUsuario = respuesta.getOpcionesUsuario();
//			OpcionDto[] opcionesDto = opcionesUsuario.getOpciones();
//			ArrayList<String> permisos = new ArrayList<String>();
//			String permiso = "";
//			if (opcionesDto != null ){
//				for (OpcionDto o: opcionesDto){
//					permiso = o.getSistema() + "," + o.getModulo() + "," + o.getSubmodulo() + "," + o.getOpcion();
//					permisos.add(permiso);
//				}
//			}
//			if ( permisos.contains(ConfigSION.obtenerParametro("ACCESO.PORTAL"))){
//				Logeo.log("CREANDO Sesidel Usuario " +  numeroEmpleado );
//				datosSession.setPermiso(permisos);
//				HttpSession session = request.getSession();
//				session.setMaxInactiveInterval(Integer.parseInt(ConfigSION.obtenerParametro("SEGURIDAD.TIEMPO_VIDA_SESION")));
//				session.setAttribute("netoSession", datosSession);
//				session.setAttribute("user", numeroEmpleado);
//				session.setAttribute("token", passMD5);
//			}
//			else{
//				resultadoAutorizacion = TipoResultadoAutorizador.SIN_PERMISOS;
//			}		
//		}
//		catch(IllegalArgumentException e){
//			resultadoAutorizacion = TipoResultadoAutorizador.ERROR_SESION;
//			Logeo.logearExcepcion(e, "ERROR al crear Sesidel usuario: " + numeroEmpleado + ", Servlet: AutorizadorServlet");
//		}
//		catch (Exception e) {
//			resultadoAutorizacion = TipoResultadoAutorizador.ERROR_DESCONOCIDO;
//			Logeo.logearExcepcion(e, "ERROR al crear Sesidel usuario: " + numeroEmpleado + ", Servlet: AutorizadorServlet");
//		}
//	}	
//
//
//}

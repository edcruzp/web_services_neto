//package neto.web.servlets;
//
//import java.io.IOException;
//import javax.servlet.ServletException;
//import javax.servlet.http.HttpServlet;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//
//import neto.sion.genericos.log.Logeo;
//
//import mx.com.neto.central.util.MensajesGenericosJSON;
//import mx.com.neto.central.util.TipoResultado;
//
///**
// * Servlet implementation class SesionCaducada
// */
//public class SesionCaducada extends HttpServlet {
//	private static final long serialVersionUID = 1L;
//       
//    /**
//     * @see HttpServlet#HttpServlet()
//     */
//    public SesionCaducada() {
//        super();
//        // TODO Auto-generated constructor stub
//    }
//
//	/**
//	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
//	 */
//	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//		// TODO Auto-generated method stub
//		cierraSesion(request, response);
//	}
//
//	/**
//	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
//	 */
//	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//		// TODO Auto-generated method stub
//		cierraSesion(request, response);
//	}
//	
//	public void cierraSesion(HttpServletRequest request, HttpServletResponse response) {
//		TipoResultado resultado= TipoResultado.SESION_CADUCA;
//		try {
//			request.setAttribute("errorAcceso", resultado);
//			//-- Llamadas desde Ajax
//			String paginaError = "/jsp_error/redireccionError.jsp";
//			request.getRequestDispatcher(paginaError).forward(request, response);
//			
//		} catch (Exception e) {
//			Logeo.logearExcepcion(e, "ERROR al Redireccionar, Filtro: FiltroSesiones.java");
//		} 
//		
//	}
//
//}

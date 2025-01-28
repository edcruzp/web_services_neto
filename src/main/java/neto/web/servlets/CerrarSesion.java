//package neto.web.servlets;
//
//import java.io.IOException;
//import java.io.PrintWriter;
//import javax.servlet.ServletException;
//import javax.servlet.http.HttpServlet;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import javax.servlet.http.HttpSession;
//
//import neto.sion.genericos.log.Logeo;
//
///**
// * Servlet implementation class CerrarSesion
// */
//public class CerrarSesion extends HttpServlet {
//	private static final long serialVersionUID = 1L;
//       
//    /**
//     * @see HttpServlet#HttpServlet()
//     */
//    public CerrarSesion() {
//        super();
//    }
//
//	/**
//	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
//	 */
//	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//		try{
//		    HttpSession session = request.getSession( false );
//		    if (session != null){
//		    	session.invalidate();
//		    }
//			PrintWriter out = response.getWriter();
//			out.write("<?xml version=\"1.0\" encoding=\"UTF-8\"?>" +
//					  "<cerrarSesion>1</cerrarSesion>");
//		}
//		catch(IOException e){
//			Logeo.logearExcepcion(e, "Error al Cerrar la SesiServlet: Cerrar Sesi");
//			throw e;
//		}
//	}
//
//}

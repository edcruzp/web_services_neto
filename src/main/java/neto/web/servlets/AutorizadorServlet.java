//package neto.web.servlets;
//
//import java.io.IOException;
//
//import javax.servlet.ServletException;
//import javax.servlet.http.HttpServlet;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//
//import neto.sion.web.seguridad.AutorizadorHandler;
//
//
//
///**
// * Servlet implementation class AutorizadorServlet
// */
//
//public class AutorizadorServlet extends HttpServlet {
//
//	private static final long serialVersionUID = 1L;
//
//  
//    /**
//     * @see HttpServlet#HttpServlet()
//     */
//    public AutorizadorServlet() {
//        super();
//    }
//
//	/**
//	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
//	 */
//	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//		AutorizadorHandler aHandler= new AutorizadorHandler();
//		String path = getServletContext().getRealPath("/resources/clave.pem");
//		aHandler.handle(request, response, path);
//	}
//}

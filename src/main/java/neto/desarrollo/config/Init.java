//package neto.desarrollo.config;
//
//import java.io.IOException;
//
//import javax.naming.Context;
//import javax.naming.InitialContext;
//import javax.servlet.ServletException;
//import javax.servlet.http.HttpServlet;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import javax.sql.DataSource;
//
//import neto.sion.genericos.log.Logeo;
//
///**
// * Servlet implementation class Init
// */
//public class Init extends HttpServlet {
//	private static final long serialVersionUID = 1L;
//       
//    /**
//     * @see HttpServlet#HttpServlet()
//     */
//    public Init() {
//        super(); 
//        //System.setProperty("oracle.j2ee.home", "E:\\Users\\emendez\\workspace_desarrollo\\WebIndicadoresVenta\\");
//        //System.setProperty("oracle.j2ee.home", "E:\\Users\\emadridc\\Documents\\workspace\\WebIndicadores");
//        //System.setProperty("oracle.j2ee.home", "/Users/davidserrano/Downloads/jboss-eap-6.1/domain");
//        //System.setProperty("oracle.j2ee.home", "C:\\Users\\azafra\\Documents\\Workspaces\\Indigo\\WebIndicadores");
//    }
//
//	/**
//	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
//	 */
//	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//		response.getOutputStream().println(System.getProperty("oracle.j2ee.home"));
//		
//	}
//
//	/**
//	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
//	 */
//	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//
//	}
//
//}

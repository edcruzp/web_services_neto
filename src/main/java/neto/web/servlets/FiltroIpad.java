//package neto.web.servlets;
//
//
//
//import javax.servlet.Filter;
//import javax.servlet.FilterChain;
//import javax.servlet.FilterConfig;
//import javax.servlet.ServletException;
//import javax.servlet.ServletRequest;
//import javax.servlet.ServletResponse;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpSession;
//
//import Com.Elektra.Definition.Config.ConfigSION;
//import mx.com.neto.central.filter.BaseFilter;
//
//import neto.sion.genericos.log.Logeo;
//
//
///**
// * Servlet Filter implementation class FiltroSesiones
// */
//public class FiltroIpad extends BaseFilter {
//
//	public FiltroIpad() { }
//	/**
//	 * @see Filter#destroy()
//	 */
//	public void destroy() {	}
//	/**
//	 * @see Filter#doFilter(ServletRequest, ServletResponse, FilterChain)
//	 */
//	
//	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) {
//			
//		if(ignoreAndPass(request, response, chain)) return;	
//		HttpServletRequest req = (HttpServletRequest) request;
//		HttpSession session = req.getSession(false);
//		try{
//				session.setAttribute("urlUpdate",ConfigSION.obtenerParametro("URL.ACTUALIZACIONES"));
//				session.setAttribute("urlManifestIpad",ConfigSION.obtenerParametro("URL.MANIFEST.IPAD"));
//				session.setAttribute("urlManifestIphone",ConfigSION.obtenerParametro("URL.MANIFEST.IPHONE"));
//				chain.doFilter(req, response);	
//		}
//		catch(Exception e){
//			Logeo.logearExcepcion(e, "ERROR al establecer variables, Filtro: FiltroIpad.java");
//		}
//	}
//
//
//	/**
//	 * @see Filter#init(FilterConfig)
//	 */
//	public void init(FilterConfig fConfig) throws ServletException
//	{
//		super.init(fConfig);
//	}
//}

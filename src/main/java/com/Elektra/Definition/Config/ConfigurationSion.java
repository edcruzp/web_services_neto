////package neto.ws.genericos.movil.config;
////
////import org.springframework.stereotype.Component;
////
////import neto.app.central.gen.config.Configuracion;
////import neto.sion.gen.log.Logs;
////import neto.sion.gen.log.LogsImpl;
////
////@Component
////public class ConfigurationSion {
////		
////	//Obtiene propiedades de WSGENERICOSMOVIL.properties variable tipo ConfiguracionInicial
////	public ConfiguracionInicial WSGENERICOSMOVIL_PROPIEDADES = new ConfiguracionInicial(
////			InitConfig.WSGENERICOSMOVIL);
////
////	//Obtiene propiedades de WSGENERICOSMOVIL_Log.properties variable tipo ConfiguracionInicial
////	public ConfiguracionInicial WSGENERICOSMOVIL_LOG_PROPIEDADES = new ConfiguracionInicial(
////			InitConfig.WSGENERICOSMOVIL_LOG);
////
////	public String obtenerParametro(String _parametro) {
////
////		return WSGENERICOSMOVIL_PROPIEDADES.obtenerParametro(_parametro);
////	}
////
////	public String obtenerParametroLog(String _parametro) {
////		return WSGENERICOSMOVIL_LOG_PROPIEDADES.obtenerParametro(_parametro);
////	}
////}
//
//
//package Com.Elektra.Definition.Config;
//
//import javax.annotation.PostConstruct;
//
//import org.springframework.stereotype.Component;
//
//import com.example.WebServicesNeto.constantes.Constantes;
//
///**
// * ConfigurationSion
// * Configuración específica para la aplicación, cargando propiedades de archivos.
// */
//@Component
//public class ConfigurationSion {
//
//    // Carga propiedades de WSGENERICOSMOVIL.properties
//    private ConfiguracionInicial propiedadesMovilRest = new ConfiguracionInicial();
//
//    // Carga propiedades de WSGENERICOSMOVIL_Log.properties
//    private ConfiguracionInicial propiedadesMovilRestLog = new ConfiguracionInicial();
//
//    
//    /**
//    Para inicializar automáticamente el método inicializar cuando se cree un objeto de la clase ConfigurationSion, 
//    puedes usar la anotación @PostConstruct de Java. Esto asegura que el método se ejecutará después de que 
//    Spring cree el bean y configure sus dependencias.
//    */
//    @PostConstruct
//    public void inicializar() {
//        propiedadesMovilRest.inicializar(Constantes.WSMOVILREST);
//        propiedadesMovilRestLog.inicializar(Constantes.WSMovilRESTLOG);
//    }
//    
//    // Obtiene un parámetro de las propiedades de WSGENERICOSMOVIL
//    public String obtenerParametro(String parametro) {
//        return propiedadesMovilRest.obtenerParametro(parametro);
//    }
//
//    // Obtiene un parámetro de las propiedades de WSGENERICOSMOVIL_Log
//    public String obtenerParametroLog(String parametro) {
//        return propiedadesMovilRestLog.obtenerParametro(parametro);
//    }
//}

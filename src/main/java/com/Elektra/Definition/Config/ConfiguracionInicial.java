//package Com.Elektra.Definition.Config;
//
//import java.io.File;
//import java.io.FileInputStream;
//import java.io.IOException;
//import java.util.Properties;
//
//import org.springframework.stereotype.Component;
//
//import come.example.WebServicesNeto.constantes.Constantes;
//
///**
// * ConfiguracionInicial Carga propiedades desde un archivo específico.
// */
//@Component
//public class ConfiguracionInicial extends BaseLogs {
//
//	public Properties configuracion;
//
//	public ConfiguracionInicial() {
//		this.configuracion = new Properties();
//	}
//
//	// Constructor que recibe el nombre del archivo de propiedades
//	public void inicializar(String nombreArchivoPropiedades) {
//		this.configuracion = cargarPropiedadesDesdeArchivo(new File(System.getProperty(Constantes.JBOSS_PATH)
//				+ File.separator + "config" + File.separator + nombreArchivoPropiedades));
//	}
//
//	// Carga propiedades desde un archivo
//	public Properties cargarPropiedadesDesdeArchivo(File archivo) {
//		Properties properties = new Properties();
//		try (FileInputStream fileInputStream = new FileInputStream(archivo)) {
//			properties.load(fileInputStream);
//		} catch (IOException e) {
//			// Manejo de excepciones (logear si es necesario)
//			if (logeo != null) {
//				logeo.logearExcepcion(e, new String[] { "El archivo no fue encontrado: " + archivo.getAbsolutePath() });
//			} else {
//				System.err.println("Archivo no inicializado. Error: " + e.getMessage());
//			}
//
//		}
//		return properties;
//	}
//
//	// Obtiene un parámetro específico
//	public String obtenerParametro(String parametro) {
//		return this.configuracion.getProperty(parametro);
//	}
//}
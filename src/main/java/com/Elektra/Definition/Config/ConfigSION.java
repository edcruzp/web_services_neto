//
// * NOTA	IMPORTANTE:
// * NO AGREGAR ESTE PAQUETE AL EXPORTAR EL JAR, LA PLATILLA AppWS_SION 
// * YA LO CONTIENE
// * 

package Com.Elektra.Definition.Config;


import neto.sion.genericos.utilidades.Configuracion;

public class ConfigSION {		
	private final static Configuracion CONFIG_PROPIEDADES = new Configuracion(InitConfig.ARCHIVO_PROPIEDADES);
	
	/**
	 * Obtiene una propiedad de configuracidel Sistema Central SION
	 * */	
	public static String obtenerParametro(String _parametro)
	{		
		return CONFIG_PROPIEDADES.obtenerParametro(_parametro);
	}
}

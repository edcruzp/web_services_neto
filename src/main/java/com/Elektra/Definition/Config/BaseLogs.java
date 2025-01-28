//package Com.Elektra.Definition.Config;
//
//import javax.annotation.PostConstruct;
//
//import org.springframework.stereotype.Component;
//
//import lombok.Data;
//import neto.sion.gen.config.Configuracion;
//import neto.sion.gen.log.Logs;
//import neto.sion.gen.log.LogsImpl;
//
//@Component
//@Data
//public class BaseLogs {
//
//    public Logs logeo;
//
//    @PostConstruct
//    public void init() {
//        // LOG LOCATION
//        this.logeo = new LogsImpl(Configuracion.obtenerUbicacionLogs(), "WebIndicadoresVenta", "ON");
//        this.logeo.setIdLog(LogsImpl.getIdentificador());
//    }
//
////    public Logs getLogeo() {
////        return logeo;
////    }
//}

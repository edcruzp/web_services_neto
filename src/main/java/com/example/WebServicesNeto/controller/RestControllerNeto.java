package Com.example.WebServicesNeto.controller;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import come.example.WebServicesNeto.response.ResponsePares;
import come.example.WebServicesNeto.services.AutorizadorHandler;

@RestController
public class RestControllerNeto {


    @Autowired
    private AutorizadorHandler autorizadorHandler;
    
    
    @PostMapping("/Autorizador")
    @ResponseBody
    public ResponseEntity<String> autorizar(@RequestParam String usuarioId,
                                            @RequestParam String pass,
                                            HttpServletRequest request,
                                            HttpServletResponse response) throws IOException {
        
    	
    	System.out.println("Empieza nuevo");
    	
        // Ruta del archivo de clave
//        String path = request.getServletContext().getRealPath("resources/static/resources/clave.pem");
        
    	String path = "E:\\Desarrollos\\Repositorios\\web_services_neto\\src\\main\\resources\\static\\resources\\clave.pem";
        
        System.out.println("path::"+path);

        // Procesar la solicitud con AutorizadorHandler
        autorizadorHandler.handle(request, response, path);

        // Puedes verificar si la autenticación fue exitosa y devolver un mensaje o redirigir
        // Aquí solo retornamos un mensaje de éxito para simular el comportamiento
        return ResponseEntity.ok("Autenticación exitosa");
    }

	

	@PostMapping("/tuproyecto/pares")
	public ResponsePares parNumbers(@RequestBody List<Integer> numberos) {
		List<Integer> parNumbers = numberos.
				stream().
				filter(n -> n % 2 == 0).
				collect(Collectors.toList());

		List<Integer> imparNumbers = numberos.
				stream().
				filter(n -> n % 2 != 0).
				collect(Collectors.toList());
		
//		for (Iterator iterator = imparNumbers.iterator(); iterator.hasNext();) {
//			Integer integer = (Integer) iterator.next();
//			System.out.println(iterator.forEachRemaining(t -> ));
//		}

		ResponsePares respuesta = new ResponsePares();

		respuesta.setImpares(imparNumbers);
		respuesta.setPares(parNumbers);

		return respuesta;

	}
	
	

}

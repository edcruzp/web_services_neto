package Com.example.WebServicesNeto.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ReversoTACronControladorView {

	@GetMapping("/hello")
    public String hello() {
        return "indexH";  // Se espera que esta vista esté en "src/main/resources/templates/index.html"
    }

	
	@GetMapping("/indexFlat")
    public String indexFlat() {
        return "neto/indexFlat";  // Se espera que este archivo esté en /templates/indexFlat.html
    }
	

	
}

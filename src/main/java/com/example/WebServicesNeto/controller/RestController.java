package com.example.WebServicesNeto.controller;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.WebServicesNeto.model.Correo;
import com.example.WebServicesNeto.model.Persona;
import com.example.WebServicesNeto.response.ResponsePares;

import jakarta.validation.Valid;

@org.springframework.web.bind.annotation.RestController
public class RestController {


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
	
	@PostMapping("/tuproyecto/validacorreo")
    public ResponseEntity<String> validateEmail(@Valid @RequestBody Correo correo,BindingResult result) {
		
		if (result.hasErrors()) {
            StringBuilder errorMessages = new StringBuilder();
            result.getAllErrors().forEach(error -> errorMessages.append(error.getDefaultMessage()).append("; "));
            return ResponseEntity.badRequest().body("Direccion correo invalida: " + errorMessages.toString());
        }
		
        return ResponseEntity.ok("Direccion correo valida.");
    }

	@PostMapping("/tuproyecto/creaArchivo")
    public ResponseEntity<String> savePersonas(@RequestBody List<Persona> personas) {
        String fileName = "src/main/resources/personas.txt";

        try (BufferedWriter writer = new BufferedWriter(new FileWriter(fileName))) {
            for (Persona persona : personas) {
            	
            	String linea = String.format("%s|%s|%s|%s|%s", 
            			persona.getId(),
            			persona.getNombre(),
            			persona.getApellidoPaterno(),
            			persona.getApellidoMaterno(),
            			persona.getEdad()
            			);
                writer.write(linea);
                writer.newLine();
            }
            return ResponseEntity.ok("Archivo creado con exito, revisar :" + fileName);
        } catch (IOException e) {
            return ResponseEntity.status(500).body("Erroe en archivo: " + e.getMessage());
        }
    }
	
	

}

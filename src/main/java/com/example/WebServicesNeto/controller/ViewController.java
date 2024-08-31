package com.example.WebServicesNeto.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.WebServicesNeto.model.Correo;
import com.example.WebServicesNeto.model.Persona;
import com.example.WebServicesNeto.services.PersonaService;
import com.example.WebServicesNeto.utils.Utils;

@Controller
public class ViewController {

	@Autowired
	private PersonaService personaService;

	@GetMapping("/tuproyecto/numeros")
	public String listPersonas(Model model) {
		List<Integer> randomNumbers = Utils.generaNumberosAzar(10);
		model.addAttribute("personas", randomNumbers);
		return "personas";

	}

	

	@GetMapping("/formRegistraUsuario")
	public String showForm() {
		return "formRegistraUsuario";
	}

	@PostMapping("/tuproyecto/registraUsuario")
	public String submitForm(@RequestParam String nombre, @RequestParam String apellidoPaterno,
			@RequestParam String apellidoMaterno, @RequestParam Integer edad, Model model) {
		Persona personaBDD = new Persona();
		Persona personaForm = new Persona();
		personaForm.setApellidoMaterno(apellidoMaterno);
		personaForm.setApellidoPaterno(apellidoPaterno);
		personaForm.setNombre(nombre);
		personaForm.setEdad(edad);
		personaBDD = personaService.insertarPersonas(personaForm);
		model.addAttribute("id", personaBDD.getId());
		return "resultadoEnviado";
	}

	@PostMapping("/correo")
	public ResponseEntity<String> validateEmail(Model model) {

		model.addAttribute("emailForm", new Correo());

		return ResponseEntity.ok("email valido");
	}

}

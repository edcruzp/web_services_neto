package com.example.WebServicesNeto.model;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class Correo {

	@NotBlank(message = "No puede ser vacio")
	@Email(message = "Email invalido errores en contenido")
	private String correo;

}

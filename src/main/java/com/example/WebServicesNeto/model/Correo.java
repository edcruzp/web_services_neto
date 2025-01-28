package Com.example.WebServicesNeto.model;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import lombok.Data;

@Data
public class Correo {

	@NotBlank(message = "No puede ser vacio")
	@Email(message = "Email invalido errores en contenido")
	private String correo;

}

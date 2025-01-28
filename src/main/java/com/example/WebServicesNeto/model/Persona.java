package Com.example.WebServicesNeto.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name= "TAUSUARIOSTEST")
public class Persona {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public Integer id;
	public String nombre;
	public String apellidoPaterno;
	public String apellidoMaterno;
	public Integer edad;

}

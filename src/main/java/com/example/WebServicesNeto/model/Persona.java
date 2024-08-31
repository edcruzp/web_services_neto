package com.example.WebServicesNeto.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
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

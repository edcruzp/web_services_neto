//package come.example.WebServicesNeto.services;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import come.example.WebServicesNeto.model.Persona;
//import come.example.WebServicesNeto.repository.PersonaRepository;
//
//@Service
//public class PersonaService {
//
//	@Autowired
//	public PersonaRepository personaRepository;
//
//	public List<Persona> obtenerPersonas() {
//		return personaRepository.findAll();
//	}
//
//	public Persona insertarPersonas(Persona persona) {
//
//		return personaRepository.save(persona);
//	}
////
////	public boolean eliminarPersonas(Long id) {
////
////		if (personaRepository.existsById(id)) {
////			personaRepository.deleteById(id);
////			return true;
////		} else {
////			return false;
////		}
////
////	}
//
//}

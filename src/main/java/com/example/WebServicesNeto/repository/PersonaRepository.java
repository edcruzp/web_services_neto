package com.example.WebServicesNeto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.WebServicesNeto.model.Persona;

@Repository
public interface PersonaRepository extends JpaRepository<Persona, Integer> {

}

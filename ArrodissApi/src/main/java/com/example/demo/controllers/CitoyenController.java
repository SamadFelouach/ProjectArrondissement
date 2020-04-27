package com.example.demo.controllers;

import com.example.demo.dao.CitoyenRepository;
import com.example.demo.entities.Citoyen;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/Myapi")
public class CitoyenController {

    @Autowired
    private CitoyenRepository citoyenRepository;

    @GetMapping(value = "/citoyens")
    public List<Citoyen> getcitoyens() {

        return citoyenRepository.findAll();
    }

    @GetMapping(value = "/citoyens/{id}")
    public Citoyen getitoyen(@PathVariable(name = "id") Long id) {
        return citoyenRepository.findById(id).get();
    }

    @PostMapping("/citoyens")
    public Citoyen ajouterCitoyen(@RequestBody Citoyen nvcitoyen) {
        return citoyenRepository.save(nvcitoyen);
    }

    @PutMapping("/updatecitoyen")
    public Citoyen updateCitoyen(@RequestBody Citoyen nvcitoyen) {
        return citoyenRepository.save(nvcitoyen);
    }

    @DeleteMapping(value = "/deletcioyen/{id}")
    public boolean deletCitoyen(@PathVariable(name = "id") Long id) {
        citoyenRepository.deleteById(id);
        return true;
    }


}

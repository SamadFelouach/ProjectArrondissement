package com.example.demo.dao;

import com.example.demo.entities.Citoyen;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;


@RepositoryRestResource
public interface CitoyenRepository extends JpaRepository<Citoyen, Long> {

    @RestResource(path = "/Bycin")
    public List<Citoyen> findByCinContains(@Param("cin") String cin);

    @RestResource(path = "/ByCinPage")
    public Page<Citoyen> findByCinContains(@Param("cin") String cin, Pageable pageable);
}

package com.example.demo;

import com.example.demo.dao.CitoyenRepository;
import com.example.demo.dao.MessageRep;
import com.example.demo.entities.AppRole;
import com.example.demo.entities.AppUser;
import com.example.demo.entities.Citoyen;
import com.example.demo.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {

    @Autowired
    private CitoyenRepository citoyenRepository;
    @Autowired
    private MessageRep messageRep;
    @Autowired
    private RepositoryRestConfiguration repositoryRestConfiguration;

    @Autowired
    private AccountService accountService;

    public static void main(String[] args) {

        SpringApplication.run(DemoApplication.class, args);
    }

    @Bean
    public BCryptPasswordEncoder getBCPE() {

        return new BCryptPasswordEncoder();
    }

    @Override
    public void run(String... args) throws Exception {
        // messageRep.save(new Message(null, "Consultation","Hello from user"));


        // citoyenRepository.save(new Citoyen (null,"Felouach","Samad","BB1257499", "1513354045"));
        //citoyenRepository.save(new Citoyen (null,"Felouach","Abdessamad","BB139705", "1513354045"));
/*
		accountService.saveUser(new AppUser( null, "admin", "1234" , null));
		accountService.saveUser(new AppUser( null, "user", "1234" , null));
		accountService.saveRole(new AppRole( null , "ADMIN"));
		accountService.saveRole(new AppRole( null , "USER"));
		accountService.addRoleRoUser("admin","ADMIN");
		accountService.addRoleRoUser("user","USER");
*/
        repositoryRestConfiguration.exposeIdsFor(Citoyen.class);
        System.out.println("succes");
        // citoyenRepository.findAll().forEach( p->{
        //System.out.println( p.toString() );
        // });
    }
}

package com.example.demo.web;

import com.example.demo.entities.AppUser;
import com.example.demo.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccountRestController {
    @Autowired
    private AccountService accountService;

    @PostMapping("/register")
    public AppUser register(@RequestBody RegisterForm userForm) {
        if (!userForm.getPassword().equals(userForm.getRepassword())) throw
                new RuntimeException("You must comfirm your password ");
        AppUser user = accountService.findUserByUsername(userForm.getUsername());
        if (user != null) throw new RuntimeException("username already exist");
        AppUser appUser = new AppUser();
        appUser.setUsername(userForm.getUsername());
        appUser.setPassword(userForm.getPassword());
        return accountService.saveUser(appUser);
    }
}

package com.example.demo.controllers;

import com.example.demo.dao.MessageRep;
import com.example.demo.entities.Message;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(name = "/messages")
public class MessageController {
    private MessageRep messageRep;

    @GetMapping(value = "/messages")
    public List<Message> getMessages() {
        return messageRep.findAll();
    }

    @PostMapping
    public Message sendMessage(@RequestBody Message newMessage) {
        return messageRep.save(newMessage);

    }

    @DeleteMapping(value = "/deletmessage/{id}")
    public boolean deletMessage(@PathVariable(name = "id") Long id) {
        messageRep.deleteById(id);
        return true;
    }
}

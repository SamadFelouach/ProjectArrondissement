package com.example.demo.entities;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Message implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idMessage;
    private String objet;
    private String message;
}

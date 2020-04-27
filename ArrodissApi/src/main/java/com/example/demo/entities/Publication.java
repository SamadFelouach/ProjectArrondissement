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
public class Publication implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long PubId;
    private String Titre;
    private String Text;

    //  @Lob
    //@Column(name="Pub_Image", nullable=false, columnDefinition="mediumblob")
    //  private byte[] image;

}

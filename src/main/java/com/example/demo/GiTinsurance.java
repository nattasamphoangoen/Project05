package com.example.demo;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.util.Date;
import javax.validation.constraints.*;

@Data
@Entity
public class GiTinsurance {
    private @Id
    @GeneratedValue
    Long id;
    @Pattern (regexp = "\\w{3}\\d{7}\\w{2}")
    @NotNull
    @Size(min = 5, max = 12)
    private String trackNumber;
    private String insurStatus;  
    private String userSender;
    private Date time;

    @ManyToOne
    private User createUser;
    

    private GiTinsurance() {}

    public GiTinsurance(User createUser, String trackNumber, String insurStatus, String userSender, Date time) {
        this.createUser = createUser;
        this.trackNumber = trackNumber;
        this.insurStatus = insurStatus;
        this.userSender = userSender;
        this.time = time;
    }
}
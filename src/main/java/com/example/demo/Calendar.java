package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
//import javax.persistence.ManyToMany;
import javax.validation.constraints.*;
import lombok.Data;

import java.util.Date;


@Data
@Entity
public class Calendar {
    private @Id @GeneratedValue Long id;
    @NotNull
    @Size(min = 6, max = 20)
    private String title;
    @NotNull
    private Date dateTime;
    @ManyToOne
    private User createUser;

    private Calendar() {}

    public Calendar(User createUser, String title, Date dateTime) {
        this.title = title;
        this.dateTime = dateTime;        
        this.createUser = createUser;

    }

}

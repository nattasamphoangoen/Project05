package com.example.demo;

import com.example.demo.Event;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.Data;
import java.util.Date;

@Data
@Entity
public class Sumcalendaractivity {
    private @Id @GeneratedValue Long id;
    private String title;
    private String month;
    private Date dateTime;
    @ManyToOne
    private User createUser;


    private Sumcalendaractivity() {}

    public Sumcalendaractivity(User createUser, String title, Date dateTime,String month) {
        this.title = title;
        this.month = month;
        this.dateTime = dateTime;
        this.createUser = createUser;
    }

}
 

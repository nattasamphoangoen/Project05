package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.Data;

import java.util.Date;


@Data
@Entity
public class Event {
    private @Id @GeneratedValue Long id;
    private String title;
    private Date dateTime;
    private String type;
    private String desc;
    @ManyToOne
    private User createUser;

    private Event() {}

    public Event(User createUser, String title, Date dateTime, String type, String desc) {
        this.title = title;
        this.dateTime = dateTime;
        this.type = type;
        this.desc = desc;
        this.createUser = createUser;

    }

}

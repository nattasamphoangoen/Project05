package com.example.demo;

import com.example.demo.Event;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;


@Data
@Entity
public class EventTransaction {
    private @Id @GeneratedValue Long id;
    private String title;
    private String type;
    private Date dateTime;
    private String customername;
    private BigDecimal amount;
    @ManyToOne
    private User createUser;


    private EventTransaction() {}

    public EventTransaction(User createUser, String title,String type, String customername, BigDecimal amount, Date dateTime) {
        this.title = title;
        this.type = type;
        this.dateTime = dateTime;
        this.customername = customername;
        this.amount = amount;
        this.createUser = createUser;

    }

}

package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
//import javax.persistence.ManyToOne;
import lombok.Data;

@Data
@Entity
public class Customer {
    private @Id @GeneratedValue Long id;
    private String username;
    public String password;
    private String position;
    private String type;

    private Customer() {}

    public Customer(String username, String password, String position, String type) {
        this.username = username;
        this.password = password;
        this.position = position;
        this.type = type;
    }
}

package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class User {
    private @Id @GeneratedValue Long id;
    private String username;
    public String password;
    private String position;
    private String type;

    private User() {}

    public User(String username, String password, String position, String type) {
        this.username = username;
        this.password = password;
        this.position = position;
        this.type = type;
    }
}

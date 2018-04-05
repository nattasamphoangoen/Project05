package com.example.demo;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Data
@Entity
public class Category {
    private @Id @GeneratedValue Long id;
    private String category;
    private String userone;
    private String usertwo;
    private String tracknum;
    @ManyToOne
    private User createUser;

    private Category() {}

    public Category(User createUser, String category, String userone, String usertwo, String tracknum) {
        this.category = category;
        this.userone = userone;
        this.usertwo = usertwo;
        this.tracknum = tracknum;
        this.createUser = createUser;

    }
}



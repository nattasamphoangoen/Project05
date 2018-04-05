package com.example.demo;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Data
@Entity
public class TruckDriver {
    private @Id
    @GeneratedValue
    Long id;

    @NotNull
    private String firstName;
    @NotNull
    private String lastName;

    private TruckDriver() {}

    public TruckDriver(String firstName, String lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

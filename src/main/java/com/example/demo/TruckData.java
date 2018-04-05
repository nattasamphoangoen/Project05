package com.example.demo;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

@Data
@Entity
public class TruckData {
    private @Id
    @GeneratedValue
    Long id;

    @NotNull
    @Pattern(regexp="[A-Z]{2}\\d{4}$")
    private String truckNo;

    @NotNull
    private String truckBrand;

    private TruckData() {}

    public TruckData(String truckNo, String truckBrand){
        this.truckNo = truckNo;
        this.truckBrand = truckBrand;
    }
}


package com.example.demo;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.sql.Timestamp;
import java.util.Date;

@Data
@Entity
@Table(uniqueConstraints={@UniqueConstraint(columnNames={"timeStart"})})
public class TruckUsageData {

    private @Id
    @GeneratedValue
    Long id;
//Timestamp
//@Pattern(regexp="^\\d{4}-\\d{2}-\\d{2}$")
    @Column(name = "timeStart")
    private Timestamp timeStart;

    @ManyToOne
    private TruckData truckData;
    @ManyToOne
    private TruckDriver truckDriver;

    @NotNull
    @Size(min = 5, max = 20)
    @Pattern(regexp="[^\\*]+")
    private String location;

    @ManyToOne
    private User createUser;


    private TruckUsageData() {}

    public TruckUsageData(User createUser, Timestamp timeStart, String location, TruckData truckData, TruckDriver truckDriver){
        this.createUser = createUser;
        this.timeStart = timeStart;
        this.location = location;
        this.truckData = truckData;
        this.truckDriver = truckDriver;
    }
}

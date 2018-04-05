package com.example.demo;

import lombok.Data;
import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.util.Date;
import javax.validation.constraints.*;

@Data
@Entity
public class StatusNotification {
    private @Id
    @GeneratedValue
    Long id;

    //@Pattern(regexp="(NOR)\\d{7}(TH)|(EMS)\\d{7}(TH)")
    //@Size(min = 1)
    @ManyToOne
    private Category trackNumber;
    private Date time;

    @NotNull
    @Pattern(regexp="[^0-9]+")
    @Size(min = 3, max = 50)
    private String status;
    @ManyToOne
    private User createUser;

    private StatusNotification() {}

    public StatusNotification(User createUser, Category trackNumber, Date time, String status) {
        this.createUser = createUser;
        this.trackNumber = trackNumber;
        this.time = time;
        this.status = status;
    }
}
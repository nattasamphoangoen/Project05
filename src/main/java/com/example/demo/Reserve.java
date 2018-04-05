package com.example.demo;

import lombok.Data;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.validation.constraints.*;



@Data
@Entity
public class Reserve {

        private @Id @GeneratedValue Long id;
        @NotNull
        //@Pattern (regexp = "\\w{50}")
        @Size(min = 5, max = 50)
        private String nameCompany;
        private String type;
        @NotNull
        @Pattern (regexp = "\\d{3}")
        private String total;
        private Date datetime;
        


        @ManyToOne
        private User createUser;
        
        private Reserve() {}

        public Reserve(User createUser, String nameCompany, String type, String total, Date datetime) {
        this.nameCompany = nameCompany;   
        this.type = type;
        this.total = total;
        this.datetime = datetime;
        
        this.createUser = createUser;

    }

}

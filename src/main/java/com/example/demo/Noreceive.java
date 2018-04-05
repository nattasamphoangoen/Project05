package com.example.demo;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.validation.constraints.*;


@Data
@Entity

public class Noreceive {

        private @Id
        @GeneratedValue
        Long id;

        private String status;
        private String name;


        //bats
        @NotNull
        @Pattern (regexp = "\\w{3}\\d{7}\\w{2}")
        @Size(min = 5, max = 12)
         private String tracknum;

        @ManyToOne
        private User user;


        private Noreceive() {}

        public Noreceive(String status,User user,String name,String tracknum) {
            this.status = status;
            this.user = user;
            this.name = name;
            this.tracknum = tracknum;

        }
}

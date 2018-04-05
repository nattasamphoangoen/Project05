package com.example.demo;

import lombok.Data;

import javax.persistence.*;
@Data
@Entity

public class HomeDelivery {

        private @Id
        @GeneratedValue
        Long id;
        private String status;
        private String name;
         private String tracknum;

        @ManyToOne
        private User User;


        private HomeDelivery() {}

        public HomeDelivery(String status,User User,String name,String tracknum) {
            this.status = status;
            this.User = User;
            this.name = name;
            this.tracknum = tracknum;

        }
}

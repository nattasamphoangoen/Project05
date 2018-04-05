package com.example.demo;

    import lombok.Data;

import javax.persistence.*;
    @Data
    @Entity

    public class Promotion {

        private @Id
        @GeneratedValue
        Long id;
        private String count;
        private String total;
        private String name;
        private String tracknum;

        @ManyToOne
        private User User;


        private Promotion() {}

        public Promotion(String count,User User,String total,String name,String tracknum) {
            this.count = count;
            this.total = total;
            this.User = User;
            this.name = name;
            this.tracknum = tracknum;

        }
    }



package com.example.demo;
import org.springframework.data.repository.CrudRepository;

public interface SumcalendaractivityRepository extends CrudRepository <Sumcalendaractivity, Long>{
   SumcalendaractivityRepository findByTitle(String title);
   //SumcalendaractivityRepository findByTitle(String title);
}

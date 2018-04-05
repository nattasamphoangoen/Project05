package com.example.demo;
import org.springframework.data.repository.CrudRepository;

public interface EventRepository extends CrudRepository <Event, String>{
    Event findByTitle(String title);
    Event findByType(String type);
}

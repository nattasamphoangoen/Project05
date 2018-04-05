package com.example.demo;
import org.springframework.data.repository.CrudRepository;

public interface EventTransactionRepository extends CrudRepository <EventTransaction, Long>{
    EventTransactionRepository findByTitle(String title);
}

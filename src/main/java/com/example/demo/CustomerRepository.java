package com.example.demo;
import org.codehaus.groovy.util.ListHashMap;
import org.springframework.data.repository.CrudRepository;


public interface CustomerRepository extends CrudRepository<Customer, Long> {

Customer findByUsername(String userName);
//Customer findByUsername(String userName);
}

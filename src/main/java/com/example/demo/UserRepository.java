package com.example.demo;
import org.codehaus.groovy.util.ListHashMap;
import org.springframework.data.repository.CrudRepository;


public interface UserRepository extends CrudRepository<User, Long> {

    User findByUsername(String userName);

}

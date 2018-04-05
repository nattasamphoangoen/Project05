package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.web.PagedResourcesAssembler;
import org.springframework.hateoas.PagedResources;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@Controller
public class ShoppingController {

    @Autowired
    CustomerRepository cusRepository;

    @Autowired
    OrRepository orRepository;
    
    @ResponseBody
    
    @RequestMapping(path = "/Id/{userId}/n/{poke}", method = RequestMethod.GET)
    public String create(@PathVariable Long userId,@PathVariable String poke) {
        Customer customer = cusRepository.findOne(userId);
        Or event = new Or(customer,poke);
        orRepository.save(event);
        return "mark";
    }
}

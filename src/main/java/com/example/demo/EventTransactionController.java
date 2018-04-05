package com.example.demo;

import com.example.demo.EventTransaction;
import com.example.demo.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.web.PagedResourcesAssembler;
import org.springframework.hateoas.PagedResources;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;


import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@Controller
public class EventTransactionController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    EventRepository eventRepository;

    @Autowired
    EventTransactionRepository eventTransactionRepository;

    @ResponseBody
    @RequestMapping(path = "/eventtransaction/{userId}/create/{title}/{type}/{customername}/{amount}", method = RequestMethod.GET)
    public String create(@PathVariable Long userId,@PathVariable String title, @PathVariable String type, @PathVariable String customername, @PathVariable BigDecimal amount) {
        User user = userRepository.findOne(userId);
        Event titlename = eventRepository.findByTitle(title);
        Event etype = eventRepository.findByType(type);
        //(User createUser, String title,String type, Date dateTime, String customername, BigDecimal amount)
        EventTransaction eventtrnsctn = new EventTransaction(user, title, type, customername, amount,new Date());
        eventTransactionRepository.save(eventtrnsctn);
        return "mark";
    }
}

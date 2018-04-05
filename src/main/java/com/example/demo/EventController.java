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
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;


import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@Controller
public class EventController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    EventRepository eventRepository;


    

    @ResponseBody
    @RequestMapping(path = "/event/{userId}/create/{title}/{type}/{eventDate}/{desc}", method = RequestMethod.GET)
    public String create(@PathVariable Long userId,@PathVariable String title, @PathVariable String type, @PathVariable String eventDate, @PathVariable String desc) {
        User user = userRepository.findOne(userId);
        
      
        Event event = new Event(user, title, new Date(), type, desc);
        eventRepository.save(event);
        return "mark";
    }
}

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
public class CalendarController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    CalendarRepository calendarRepository;

    @ResponseBody
    @RequestMapping(path = "/event/{userId}/create/{title}/{eventDate}", method = RequestMethod.GET)
    public String create(@PathVariable Long userId,@PathVariable String title, @PathVariable String eventDate) {
        User user = userRepository.findOne(userId);
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        Date date = new Date();
        try {
             date = formatter.parse(eventDate);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        Calendar event = new Calendar(user, title, date);
        calendarRepository.save(event);
        return "mark";
    }
}

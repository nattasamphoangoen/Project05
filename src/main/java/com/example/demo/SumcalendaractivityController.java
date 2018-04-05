package com.example.demo;

import com.example.demo.Sumcalendaractivity;
import com.example.demo.CalendarRepository;
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
public class SumcalendaractivityController {

    @Autowired
    UserRepository userRepository;

    // @Autowired
    // CalendarRepository eventRepository;

    @Autowired
    SumcalendaractivityRepository eventTransactionRepository;

    @ResponseBody
    @RequestMapping(path = "/eventtran/{userId}/create/{title}/{dateTime}/{month}", method = RequestMethod.GET)
    public String create(@PathVariable Long userId,@PathVariable String title,@PathVariable String dateTime,@PathVariable String month) {
        User user = userRepository.findOne(userId);
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        Date date = new Date();
        try {
             date = formatter.parse(dateTime);
        } catch (ParseException e) {
            e.printStackTrace();
        }
    
        Sumcalendaractivity eventtrnsctn = new Sumcalendaractivity(user, title, date ,month );
        eventTransactionRepository.save(eventtrnsctn);
        return "mark";
    }
}

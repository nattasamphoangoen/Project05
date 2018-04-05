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
public class ReserveController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    ReserveReposity reserveRepository;
//'/reserve/'+userId+'/nameCompany/'+this.state.name+'type/'+this.state.type+'/total/'+this.state.num+'/time/'+this.state.time
    @ResponseBody
    @RequestMapping(path = "/reserve/{userId}/name/{name}/type/{type}/num/{num}/time/{time}", method = RequestMethod.GET)
   
    public String create(@PathVariable Long userId,
                        @PathVariable String name, 
                        @PathVariable String type, 
                        @PathVariable String num, 
                        @PathVariable String time) {

        User user = userRepository.findOne(userId);

        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        Date date = new Date();
        try {
             date = formatter.parse(time);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        
        Reserve reserve = new Reserve(user, name, type, num ,date);
        reserveRepository.save(reserve);
        return "anyarin";
    }
}

package com.example.demo;

import com.example.demo.StatusNotification;
import com.example.demo.StatusNotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import java.util.Date;

@Controller
public class StatusNotificationController {

    @Autowired
    StatusNotificationRepository statusnotiRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    CategoryRepository categoryRepository;

    @ResponseBody
    @RequestMapping(path="/statusSystem/{userID}/tracknum/{number1}/status1/{status1}", method = RequestMethod.GET)
    public String statusnotific1(@PathVariable Long userID,@PathVariable String number1,@PathVariable String status1){
        User user = userRepository.findOne(userID);
        Category cat = categoryRepository.findByTracknum(number1);
        if(cat != null) {
            StatusNotification stanoti1 = new StatusNotification(user, cat, new Date(), status1);
            statusnotiRepository.save(stanoti1);
            return "{\"status\":\"Success!\"}";
        }else{
            return "{\"status\":\"Failed: Tracking number doesn\'t match\"}";
        }
    }

    @ResponseBody
    @RequestMapping(path="/statusSystem/{userID}/tracknum/{number2}/status2/{status2}", method = RequestMethod.GET)
    public String statusnotific2(@PathVariable Long userID,@PathVariable String number2,@PathVariable String status2){
        User user = userRepository.findOne(userID);
        Category cat = categoryRepository.findByTracknum(number2);
        if(cat != null) {
            StatusNotification stanoti2 = new StatusNotification(user, cat, new Date(), status2);
            statusnotiRepository.save(stanoti2);
            return "{\"status\":\"Success!\"}";
        }else{
            return "{\"status\":\"Failed: Tracking number doesn\'t match\"}";
        }
    }

    @ResponseBody
    @RequestMapping(path="/statusSystem/{userID}/tracknum/{number3}/status3/{status3}", method = RequestMethod.GET)
    public String statusnotific3(@PathVariable Long userID,@PathVariable String number3,@PathVariable String status3){
        User user = userRepository.findOne(userID);
        Category cat = categoryRepository.findByTracknum(number3);
        if(cat != null) {
            StatusNotification stanoti3 = new StatusNotification(user, cat, new Date(), status3);
            statusnotiRepository.save(stanoti3);
            return "{\"status\":\"Success!\"}";
        }else{
            return "{\"status\":\"Failed: Tracking number doesn\'t match\"}";
        }
    }

    @ResponseBody
    @RequestMapping(path="/statusSystem/{userID}/tracknum/{number4}/status4/{status4}", method = RequestMethod.GET)
    public String statusnotific4(@PathVariable Long userID,@PathVariable String number4,@PathVariable String status4){
        User user = userRepository.findOne(userID);
        Category cat = categoryRepository.findByTracknum(number4);
        if(cat != null) {
            StatusNotification stanoti4 = new StatusNotification(user, cat, new Date(), status4);
            statusnotiRepository.save(stanoti4);
            return "{\"status\":\"Success!\"}";
        }else{
            return "{\"status\":\"Failed: Tracking number doesn\'t match\"}";
        }
    }
}
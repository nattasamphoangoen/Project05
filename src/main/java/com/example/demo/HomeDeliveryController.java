package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeDeliveryController {

        @Autowired
        HomeDeliveryRepository HomeDeliveryRepository;

        @Autowired
        UserRepository userRepository;

        @ResponseBody
        @RequestMapping(path = "/status/{status}/user/{user}/name/{name}/tracknum/{tracknum}", method = RequestMethod.GET)
        public String HomeDelivery( @PathVariable Long user,@PathVariable String status,@PathVariable String name,@PathVariable String tracknum) {

            User user1 = userRepository.findOne(user);
            HomeDelivery hom = new HomeDelivery(status,user1,name,tracknum);
            HomeDeliveryRepository.save(hom);
            return "success";
        }
}

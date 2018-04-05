package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class NoreceiveController {

        @Autowired
        NoreceiveRepository NoreceiveRepository;

        @Autowired
        UserRepository userRepository;

        @ResponseBody
        @RequestMapping(path = "/statussp2/{status}/user/{user}/name/{name}/tracknum/{tracknum}", method = RequestMethod.GET)
        public String Noreceive( @PathVariable Long user,@PathVariable String status,@PathVariable String name,@PathVariable String tracknum) {

            User user1 = userRepository.findOne(user);
            Noreceive nor = new Noreceive(status,user1,name,tracknum);
            NoreceiveRepository.save(nor);
            return "success";
        }
}

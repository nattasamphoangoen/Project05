package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class PromotionController {

    @Autowired
    PromotionRepository promotionRepository;

    @Autowired
    UserRepository userRepository;
// '/User/'+userId+'/name/'+data.userone+'/total/'+total+'/tracknum/'+data.tracknum+'/count/'+count})
    @ResponseBody
    @RequestMapping(path = "/User/{user}/name/{name}/total/{total}/tracknum/{tracknum}/count/{count}", method = RequestMethod.GET)
    public String Promotion ( @PathVariable Long user,
                                @PathVariable String count,
                                @PathVariable String total,
                                @PathVariable String name,
                                @PathVariable String tracknum) {
  //(String count,User User,String total,String name,String tracknum)
        User user1 = userRepository.findOne(user);
        Promotion pro = new Promotion(count,user1,total,name,tracknum);
        promotionRepository.save(pro);
        return "success";
    }
}
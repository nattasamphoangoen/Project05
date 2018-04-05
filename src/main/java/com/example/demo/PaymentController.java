package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class PaymentController {

    @Autowired
    PaymentRepository paymentRepository;

    @Autowired
    UserRepository userRepository;

   

// '/User/'+userId+'/name/'+data.userone+'/total/'+total+'/tracknum/'+data.tracknum+'/count/'+count})
    @ResponseBody
    @RequestMapping(path = "/User/{user}/name/{name}/tracknum/{tracknum}/total/{total}/count/{count}/price/{price}/discount/{discount}/amount/{amount}", method = RequestMethod.GET)
   
    public String Payment ( @PathVariable Long user,
                                @PathVariable String name,
                                @PathVariable String tracknum,
                                @PathVariable String total,
                                @PathVariable String count,
                                @PathVariable String price,
                                @PathVariable String discount,
                                @PathVariable String amount ) {


  //(String count,User User,String total,String name,String tracknum)
        User user1 = userRepository.findOne(user);
        
        Payment pay = new Payment(name,user1,tracknum,total,count,price,discount,amount);
        paymentRepository.save(pay);
        return "success";
    }
}
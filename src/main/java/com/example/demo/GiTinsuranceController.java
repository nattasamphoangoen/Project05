package com.example.demo;

import com.example.demo.GiTinsurance;
import com.example.demo.GiTinsuranceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import java.util.Date;
//add
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;



@Controller
public class GiTinsuranceController {

    // @PersistenceContext
    // private EntityManager manager;

    @Autowired
    GiTinsuranceRepository gitRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    CategoryRepository categoryRepository;


///'/gitinsurance/'+userID+'/tracknum/'+trackNumber+'cusdtl'+cusDetail+'/reg/'+insurStatus
    @ResponseBody
    @RequestMapping(path="/gitinsurance/{userID}/tracknum/{trcknum}/cussnd/{usersender}/reg/{warranty}", method = RequestMethod.GET)
    public String gitRegister(@PathVariable Long userID,@PathVariable String trcknum,@PathVariable String usersender,@PathVariable String warranty){
        User user = userRepository.findOne(userID);
        Category cat = categoryRepository.findByTracknum(trcknum);
        // Category cussndr = categoryRepository.findByUserone(usersender);
        if(cat != null) {
            GiTinsurance gitisurtrnscpt = new GiTinsurance(user, trcknum, warranty , usersender ,new Date());
            gitRepository.save(gitisurtrnscpt);
            return "{\"insurStatus\":\"Success!\"}";
        }else{
            return "{\"insurStatus\":\"Failed: Tracking number doesn\'t match\"}";
        }
    }

    @ResponseBody
    @RequestMapping(path="/gitinsurance/{userID}/tracknum/{trcknum}/cussnd/{usersender}/clm/{exp}", method = RequestMethod.GET)
    public String gitClaim(@PathVariable Long userID,@PathVariable String trcknum,@PathVariable String usersender,@PathVariable String exp){
        User user = userRepository.findOne(userID);
        Category cat = categoryRepository.findByTracknum(trcknum);
        // Category cussndr = categoryRepository.findByUserone(usersender);
        if(cat != null) {
            GiTinsurance gitisurtrnscpt = new GiTinsurance(user, trcknum, exp , usersender ,new Date());
            gitRepository.save(gitisurtrnscpt);
            return "{\"insurStatus\":\"Success!\"}";
        }else{
            return "{\"insurStatus\":\"Failed: Tracking number doesn\'t match\"}";
        }
    }


}

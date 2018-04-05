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
import java.util.Random;



import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@Controller
public class CategoryController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    CategoryRepository categoryRepository;

    @ResponseBody
    @RequestMapping(path = "/cateSystem/{userId}/category/{name}/user1/{user}/user2/{pass}", method = RequestMethod.GET)
    public String cate(@PathVariable Long userId,@PathVariable String name, @PathVariable String user, @PathVariable String pass) {
        User userid = userRepository.findOne(userId);
        Random rand = new Random();
        int  n = rand.nextInt(10000000);
        String trackNumber =  Integer.toString(n);
        trackNumber = "NOR" + trackNumber + "TH";
        Category ct = new Category(userid, name, user, pass, trackNumber );
        categoryRepository.save(ct);
        return "success";
    }
    @ResponseBody
    @RequestMapping(path = "/cateSystem/{userId}/category1/{name}/user1/{user1}/user2/{pass1}", method = RequestMethod.GET)
    public String cate2(@PathVariable Long userId,@PathVariable String name, @PathVariable String user1, @PathVariable String pass1) {
        User userid = userRepository.findOne(userId);
        Random rand = new Random();
        int  n = rand.nextInt(10000000);
        String trackNumber =  Integer.toString(n);
        trackNumber = "EMS" + trackNumber + "TH";
        Category ct = new Category(userid, name, user1, pass1, trackNumber );
        categoryRepository.save(ct);
        return "success";
    }

}

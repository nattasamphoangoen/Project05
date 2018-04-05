package com.example.demo;

import com.fasterxml.jackson.databind.JsonSerializable;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Controller
public class TruckUsageDataController {

    private final Logger LOGGER = LoggerFactory.getLogger(TruckUsageDataController.class);

    @Autowired
    UserRepository userRepository;
    @Autowired
    TruckDataRepository truckDataRepository;
    @Autowired
    TruckDriverRepository truckDriverRepository;
    @Autowired
    TruckUsageDataRepository truckUsageDataRepository;

    @ResponseBody
    @GetMapping(value = "/saveTrackUsageData",produces = "text/html; charset=utf-8;",headers = "Accept=application/json; charset=utf-8")
    public ResponseEntity<String> saveTrackUsageData(@RequestParam("userID") Long userID,
                                                     @RequestParam("driver") Long driver,
                                                     @RequestParam("truck") Long truck,
                                                     @RequestParam("tst") String tst,
                                                     @RequestParam("lc") String location
                                                     ){
        HttpHeaders headers = new HttpHeaders();
        ObjectMapper objectMapper = new ObjectMapper();
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
            try {
            User user = userRepository.findOne(userID);
            TruckData tck = truckDataRepository.findOne(truck);
            TruckDriver tckd = truckDriverRepository.findOne(driver);

//            List<TruckData> truckno = truckDataRepository.findByTruckNo(Long.toString(truck));
//            TruckUsageData timestart = truckUsageDataRepository.findByTimeStart(tst);
            Timestamp date = Timestamp.valueOf(tst);
            TruckUsageData truckUsageData = new TruckUsageData(user, date, location, tck, tckd);
            truckUsageDataRepository.save(truckUsageData);
            headers.add("Content-Type","application/json; charset=utf-8");
            LOGGER.info("saveTrackUsageData successfully");
            return new ResponseEntity<>("successfully",headers, HttpStatus.OK);

            } catch (Exception e) {
                LOGGER.error(e.getMessage());
                return new ResponseEntity<>("fails",headers, HttpStatus.INTERNAL_SERVER_ERROR);
            }
    }//    @RequestMapping(path="/truckUsageSystem/{userID}/driver/{driver}/truckNo/{truck}/timeStart/{tst}/timeEnd/{tnd}", method = RequestMethod.GET)
//    public String truckUsage(@PathVariable Long userID,
//                             @PathVariable Long driver,
//                             @PathVariable Long truck,
//                             @PathVariable String tst,
//                             @PathVariable String tnd){
//        User user = userRepository.findOne(userID);
//        TruckData tck = truckDataRepository.findOne(truck);
//        TruckDriver tckd = truckDriverRepository.findOne(driver);
//        TruckUsageData truckUsageData = new TruckUsageData(user, tst, tnd, tck, tckd);
//        truckUsageDataRepository.save(truckUsageData);
//        return "{\"status\":\"Success!\"}";
//    }

}

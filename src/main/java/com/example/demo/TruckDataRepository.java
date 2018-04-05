package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TruckDataRepository extends CrudRepository<TruckData, Long>{
    List<TruckData> findByTruckNo(@Param("truckNo") String truckNo);
}

package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TruckDriverRepository extends CrudRepository<TruckDriver, Long>{
    List<TruckDriver> findByFirstName(@Param("driverName") String driverName);
}

package com.example.demo;

import org.springframework.data.repository.*;
import org.springframework.data.repository.query.Param;

public interface TruckUsageDataRepository extends CrudRepository<TruckUsageData, Long>,PagingAndSortingRepository<TruckUsageData, Long> {
    TruckUsageData findByTimeStart(@Param("tst") String timeStart);
}

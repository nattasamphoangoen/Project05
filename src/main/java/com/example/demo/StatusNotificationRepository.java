package com.example.demo;

import com.example.demo.StatusNotification;
import org.springframework.data.repository.*;

public interface StatusNotificationRepository extends CrudRepository<StatusNotification, Long>,PagingAndSortingRepository<StatusNotification, Long>{
}

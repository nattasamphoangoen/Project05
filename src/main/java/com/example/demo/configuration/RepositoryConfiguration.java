package com.example.demo.configuration;


import com.example.demo.TruckData;
import com.example.demo.TruckDriver;
import com.example.demo.TruckUsageData;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;
import org.springframework.data.rest.webmvc.config.RepositoryRestMvcConfiguration;

@Configuration
public class RepositoryConfiguration extends RepositoryRestConfigurerAdapter {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.exposeIdsFor(TruckData.class);
        config.exposeIdsFor(TruckDriver.class);
        config.exposeIdsFor(TruckUsageData.class);
    }
}

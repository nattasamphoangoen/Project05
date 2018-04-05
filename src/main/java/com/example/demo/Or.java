package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
//import javax.persistence.ManyToMany;
import lombok.Data;

@Data
@Entity
public class Or {

	private @Id @GeneratedValue Long id;

	@ManyToOne
	private Customer customer;	
	 private String product;	
 

	private Or() {}

	public Or(Customer customer,String product) {
		this.customer = customer;
	 this.product = product;
		
	}
}
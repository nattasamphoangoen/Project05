package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
//import javax.persistence.ManyToMany;

import lombok.Data;

@Data
@Entity
public class Product {

	private @Id @GeneratedValue Long id;
	private String Name;
	private String size;
	private String price;
	

	private Product() {}

	public Product(String Name,String size, String price) {
		this.Name = Name;
		this.size = size;
		this.price = price;
		
	}
}
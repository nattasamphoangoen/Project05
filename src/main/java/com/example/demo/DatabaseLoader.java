// package com.example.demo;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.boot.CommandLineRunner;
// import org.springframework.stereotype.Component;

// @Component
// public class DatabaseLoader implements CommandLineRunner {

// 	private final ProductRepository repository;

// 	@Autowired
// 	public DatabaseLoader(ProductRepository repository) {
// 		this.repository = repository;
// 	}

// 	@Override
// 	public void run(String... strings) throws Exception {
// 		this.repository.save(new Product("กล่อง ก" , "17*20*6 ซม.", 5.00));
// 		this.repository.save(new Product("กล่อง ข" , "17*25*9 ซม.", 7.50));
// 		this.repository.save(new Product("กล่อง ค" , "20*31*11 ซม.", 10.50));
// 		this.repository.save(new Product("กล่อง ง" , "22*35*14 ซม.", 15.00));
// 		this.repository.save(new Product("ซอง เล็ก" , "10*15 นิ้ว", 2.00));
// 		this.repository.save(new Product("ซอง กลาง" , "11*16 นิ้ว", 3.00));
// 		this.repository.save(new Product("ซอง ใหญ่", "12*17 นิ้ว", 4.00 ));
// 	}
// }
package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;


@Component
public class DatabaseLoader implements CommandLineRunner {

	private final EmployeeRepository repository;
	private final UserRepository userRepository;
	private final ProductRepository proRepository;
	private final TruckDataRepository truckDataRepository;
	private final TruckDriverRepository truckDriverRepository;
private final CustomerRepository orRepository;

	@Autowired
	public DatabaseLoader(EmployeeRepository repository,
						  UserRepository userRepository,
						  ProductRepository proRepository,
						  TruckDataRepository truckDataRepository,
						  TruckDriverRepository truckDriverRepository,
						  CustomerRepository orRepository) {
		this.repository = repository;
		this.userRepository = userRepository;
		this.proRepository = proRepository;
		this.truckDataRepository = truckDataRepository;
		this.truckDriverRepository = truckDriverRepository;
		this.orRepository = orRepository;

	}

	@Override
	public void run(String... strings) throws Exception {
		this.repository.save(new Employee("Frodo", "Baggins", "ring bearer"));
		this.userRepository.save(new User("1", "1", "HR", "admin"));
		this.userRepository.save(new User("User2", "123456th", "HR", "admin"));
		this.userRepository.save(new User("User3", "123456th", "HR", "admin"));
		this.userRepository.save(new User("User4", "123456th", "HR", "admin"));
		this.userRepository.save(new User("User5", "123456th", "HR", "admin"));

		this.proRepository.save(new Product("กล่อง ก" , "17*20*6 ซม.", "5.00"));
		this.proRepository.save(new Product("กล่อง ข" , "17*25*9 ซม.", "7.50"));
		this.proRepository.save(new Product("กล่อง ค" , "20*31*11 ซม.", "10.50"));
		this.proRepository.save(new Product("กล่อง ง" , "22*35*14 ซม.", "15.00"));
		this.proRepository.save(new Product("ซอง เล็ก" , "10*15 นิ้ว", "2.00"));
		this.proRepository.save(new Product("ซอง กลาง" , "11*16 นิ้ว", "3.00"));
		this.proRepository.save(new Product("ซอง ใหญ่", "12*17 นิ้ว", "4.00" ));

		this.truckDataRepository.save(new TruckData("AB1234", "Nisson"));
		this.truckDataRepository.save(new TruckData("SX8856", "Nisson"));

		this.truckDriverRepository.save(new TruckDriver("Peter", "Attwood"));
		this.truckDriverRepository.save(new TruckDriver("Albert", "Bennet"));

		this.orRepository.save(new Customer("1", "1", "HR", "admin"));

	}
}
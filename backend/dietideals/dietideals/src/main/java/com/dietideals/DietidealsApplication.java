package com.dietideals;

import lombok.extern.java.Log;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@Log
public class DietidealsApplication {

	public static void main(String[] args) {
		SpringApplication.run(DietidealsApplication.class, args);
	}
}

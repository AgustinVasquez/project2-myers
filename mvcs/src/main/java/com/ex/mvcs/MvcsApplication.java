package com.ex.mvcs;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MvcsApplication {

	public static void main(String[] args) {
		SpringApplication.run(MvcsApplication.class, args);
		System.out.println("New Build");

	}
}

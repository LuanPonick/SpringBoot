package com.helloWorld.helloWorld;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		System.out.println("teste");
		SpringApplication.run(Application.class, args);
		System.out.println("fim");
	}

	// @Bean
	// public CommandLineRunner commandLineRunner(ApplicationContext ctx) {
	// 	return args -> {

	// 		// System.out.println("Let's inspect the beans provided by Spring Boot:");

	// 		// String[] beanNames = ctx.getBeanDefinitionNames();
	// 		// Arrays.sort(beanNames);
	// 		// for (String beanName : beanNames) {
	// 		// 	System.out.println(beanName);
	// 		// }

	// 	};
	// }

}
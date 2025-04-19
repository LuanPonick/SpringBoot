package com.helloWorld.helloWorld;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

	@GetMapping("/")
	public String index() {
		System.out.println("********");
		System.out.println("********");
		System.out.println("*teste");
		System.out.println("********");
		System.out.println("********");
		return "sdfçoikgjhsadfiklhg";
	}

}
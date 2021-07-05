package com.example.demo.controllers;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
@RestController
//@Controller
//@ResponseBody
//@RequestMapping("/first")
// http://localhost:8080/demo-0.0.1-SNAPSHOT/hello
public class FirstController {
    public static void main(String[] args) {
        SpringApplication.run(FirstController.class, args);
    }

    @GetMapping("/hello")
    public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
        return String.format("Hello %s !!!", name);
    }

    @GetMapping("/hello1")
    public String hello_1() {
        return String.format("Здравствуй небо голубое, здравствуй солнце золотое ...");
    }

    @GetMapping("/hello2")
    public String hello_2() {
        return "Здравствуй небо , здравствуй солнце  ...";
    }

    @GetMapping("/hello3")
    public String hello_3() {
        return "first/hello";
    }

    @GetMapping("/hello4")
    public String hello_4() {
        return "look";
    }
}

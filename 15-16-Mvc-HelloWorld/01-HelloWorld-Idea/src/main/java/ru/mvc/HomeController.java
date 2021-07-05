package ru.mvc;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

// http://localhost:8080/01-HelloWorld/hello-world
@Controller
public class HomeController {
	@GetMapping("/hello-world")
    public String sayHello() {
        return "hello_world";
    }
}

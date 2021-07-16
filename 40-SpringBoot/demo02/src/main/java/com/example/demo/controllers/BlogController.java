package com.example.demo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class BlogController {

    @GetMapping("/blog")
    public String blog(Model model) {
        model.addAttribute("title", "Страница блог");
        model.addAttribute("body1", "url: http://localhost:8081/blog");
        return "blog";
    }
}

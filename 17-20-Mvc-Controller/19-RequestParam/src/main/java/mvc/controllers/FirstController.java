package mvc.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;

/**
 * @author Neil Alishev
 */
@Controller
@RequestMapping("/first")
// http://localhost:8080/my.mvc.test/first/hello
// http://localhost:8080/my.mvc.test/first/hello1?name=Tom&surname=Soyer
// http://localhost:8080/my.mvc.test/first/hello2?name=Gecklberry&surname=Finn
public class FirstController {

    @GetMapping("/hello")
    public String helloPage() {
        return "first/hello";
    }

    @GetMapping("/goodbye")
    public String goodByePage() {
        return "first/goodbye";
    }

    @GetMapping("/hello1")
    public String hello1Page(HttpServletRequest request){
        String name = request.getParameter("name");
        String surname = request.getParameter("surname");

        System.out.println("----------------------------------------------------");
        System.out.println("");
        System.out.println("Hello - " + name + " " + surname + " (request)");
        System.out.println("");
        System.out.println("----------------------------------------------------");

        return "first/hello";
    }

    @GetMapping("/hello2")
    public String hello2Page(@RequestParam(value = "name", required = false) String name,
                            @RequestParam(value = "surname", required = false) String surname) {

        System.out.println("----------------------------------------------------");
        System.out.println("");
        System.out.println("Hello - " + name + " " + surname + " (@RequestParam)");
        System.out.println("");
        System.out.println("----------------------------------------------------");

        return "first/hello";
    }
}
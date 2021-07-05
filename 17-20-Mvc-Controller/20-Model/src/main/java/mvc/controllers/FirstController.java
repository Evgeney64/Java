package mvc.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
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
// http://localhost:8080/my.mvc.test/first/calculator?a=10&b=3&action=division
// http://localhost:8080/my.mvc.test/first/calculator?a=10&b=2&action=multiplication
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
    public String hello1Page(@RequestParam(value = "name", required = false) String name,
                            @RequestParam(value = "surname", required = false) String surname,
                             Model model) {
        model.addAttribute("message", "Hello, " + name + " " + surname);
        return "first/hello";
    }

    @GetMapping("/calculator")
    public String calculator(@RequestParam("a") int a,
                             @RequestParam("b") int b,
                             @RequestParam("action") String action,
                             Model model) {
//        http://localhost:8080/my.mvc.test/first/calculator?a=10&b=3&action=division
//        http://localhost:8080/my.mvc.test/first/calculator?a=10&b=2&action=multiplication
        double result;
        switch (action) {
            case "multiplication":
                result = a * b;
                break;
            case "division":
                result = a / (double) b;
                break;
            case "subtraction":
                result = a - b;
                break;
            case "addition":
                result = a + b;
                break;
            default:
                result = 0;
                break;
        }
        model.addAttribute("result", result);

        return "first/calculator";
    }
}
package mvc.dao;

import org.springframework.stereotype.Component;
import mvc.models.Person;

import java.util.ArrayList;
import java.util.List;

/**
 * @author Neil Alishev
 */
@Component
public class PersonDAO {
    private static int PEOPLE_COUNT;
    private List<Person> people;

    {
        people = new ArrayList<>();

        people.add(new Person(++PEOPLE_COUNT, "Андрей", 1986));
        people.add(new Person(++PEOPLE_COUNT, "Ирина", 1987));
        people.add(new Person(++PEOPLE_COUNT, "Алиса", 2014));
        people.add(new Person(++PEOPLE_COUNT, "Мила", 2018));
    }

    public List<Person> index() {
        return people;
    }

    public Person show(int id) {
        return people.stream().filter(person -> person.getId() == id).findAny().orElse(null);
    }
}
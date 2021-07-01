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

    public Person getById(int id) {
        return people.stream().filter(person -> person.getId() == id).findAny().orElse(null);
    }

    public void save(Person person) {
        person.setId(++PEOPLE_COUNT);
        people.add(person);
    }

    public void update(int id, Person _person) {
        Person person = getById(id);

        person.setName(_person.getName());
        person.setYear(_person.getYear());
    }

    public void delete(int id) {
        people.removeIf(p -> p.getId() == id);
    }
}
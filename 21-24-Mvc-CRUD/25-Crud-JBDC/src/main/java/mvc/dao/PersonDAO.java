package mvc.dao;

import org.springframework.stereotype.Component;
import mvc.models.Person;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Component
public class PersonDAO {

    private static Connection connection;

    private static int PEOPLE_COUNT;
    private static List<Person> people;

    static {
        try {
            Class.forName("org.postgresql.Driver");
        } catch (ClassNotFoundException ex) {
        }

        try {
            String URL = "jdbc:postgresql://sql2008:5432/BillBerry";
            String USERNAME = "BillBerry";
            String PASSWORD = "123";
            connection = DriverManager.getConnection(URL, USERNAME, PASSWORD);
        } catch (SQLException ex) {
        }
    }

    public List<Person> index() {
        List<Person> people = new ArrayList<>();

        try (Statement stmt = connection.createStatement();) {
            String sql = "SELECT * FROM \"NSI_CALC\" ";
            ResultSet executeQuery = stmt.executeQuery(sql);
            // Обход результатов выборки
            while(executeQuery.next()) {
                Person person = new Person();

                person.setId(executeQuery.getInt("NCALC_ID"));
                person.setName(executeQuery.getString("NCALC_NAME"));
                person.setYear(executeQuery.getInt("NPRODUCT_ID"));
                people.add(person);
            }

            // Закрываем соединение
            executeQuery.close();
            stmt.close();

        } catch (SQLException ex) {
        }

        return people;
    }


    public Person getById(int id) {
//        return people.stream().filter(person -> person.getId() == id).findAny().orElse(null);
        return null;
    }

    public void save(Person person) {
        person.setId(++PEOPLE_COUNT);
//        people.add(person);
    }

    public void update(int id, Person _person) {
        Person person = getById(id);

        person.setName(_person.getName());
        person.setYear(_person.getYear());
    }

    public void delete(int id) {
//        people.removeIf(p -> p.getId() == id);
    }
}
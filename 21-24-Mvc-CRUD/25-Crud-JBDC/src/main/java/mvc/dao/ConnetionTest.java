package mvc.dao;

import mvc.models.Person;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class ConnetionTest {
    public Connection getConnection()  {

        String connectionUrl
                = "jdbc:sqlserver://192.168.168.175:1433;"
                + "database=renovation_web;"
                + "user=renovation_web;"
                + "password=123;"
                + "encrypt=false;"
                + "trustServerCertificate=false;"
                + "loginTimeout=30;";

        Connection connection = null;

        try {
            connection = DriverManager.getConnection(connectionUrl);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return connection;
    }

    public ArrayList<Person> getItems(Connection connection){
        ArrayList<Person> people = new ArrayList<>();
        if (connection == null)
            connection = getConnection();

        int PEOPLE_COUNT = 0;

        try {
            String selectSql = "SELECT * from NSI_CALC_TYPE";
            Statement statement = connection.createStatement();
            {
                ResultSet resultSet = statement.executeQuery(selectSql);

                while (resultSet.next()) {
                    people.add(new Person(++PEOPLE_COUNT, resultSet.getString(2) + " " + resultSet.getString(3), 2021));
                }
            }
        } catch (SQLException e) {
            people.add(new Person(++PEOPLE_COUNT, "SQLException e", 2021));
            e.printStackTrace();
        }
        return people;
    }
}

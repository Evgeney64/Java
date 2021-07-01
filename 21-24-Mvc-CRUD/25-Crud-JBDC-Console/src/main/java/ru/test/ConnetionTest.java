package ru.test;

import java.sql.*;

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

    public void getItems(Connection connection){
        if (connection == null)
            connection = getConnection();

        try {
            String selectSql = "SELECT * from NSI_CALC_TYPE";
            Statement statement = connection.createStatement();
            {
                ResultSet resultSet = statement.executeQuery(selectSql);

                while (resultSet.next()) {
                    System.out.println(resultSet.getString(2) + " " + resultSet.getString(3));
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

}

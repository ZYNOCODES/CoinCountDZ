package com.example.fintech.Database;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class MySQLConnection {






    public static Connection connect() {
        Connection connection = null;
        try {
            // Define the URL to the MySQL database on ngrok

            String id ="172.1.1.0";

            String port ="172.1.1.0";

            String uname = "root";

            String pass = "";

            String database = "fittechdb";

            String url = "jdbc:jtds:sqlserver://"+ id + ":"+ port+";"+ "databasename="+ database+";user="+uname+";password="+pass+";";


            // Register the MySQL driver
            Class.forName("com.mysql.cj.jdbc.Driver");




            // Create the database connection
            connection = DriverManager.getConnection(url, uname, pass);

            connection.createStatement();

        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        }
        return connection;
    }
}
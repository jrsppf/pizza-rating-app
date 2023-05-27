package pizzaratingapp.com.pizzarating.dao;

import org.springframework.stereotype.Repository;
import pizzaratingapp.com.pizzarating.model.Restaurant;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Repository
public class JDBCRestaurantDao {
    private final Connection connection;

    public JDBCRestaurantDao(Connection connection) {
        this.connection = connection;
    }

    public void create(Restaurant restaurant) throws SQLException {
        String query = "INSERT INTO restaurants (name, neighborhood, address, phone_number, website) " +
                "VALUES (?, ?, ?, ?, ?)";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setString(1, restaurant.getName());
            statement.setString(2, restaurant.getNeighborhood());
            statement.setString(3, restaurant.getAddress());
            statement.setString(4, restaurant.getPhoneNumber());
            statement.setString(5, restaurant.getWebsite());

            statement.executeUpdate();
        }
    }

    public List<Restaurant> getAllRestaurants() throws SQLException {
        List<Restaurant> restaurants = new ArrayList<>();
        String query = "SELECT * FROM restaurants";
        try (Statement statement = connection.createStatement()) {
            ResultSet resultSet = statement.executeQuery(query);
            while (resultSet.next()) {
                Restaurant restaurant = extractRestaurantFromResultSet(resultSet);
                restaurants.add(restaurant);
            }
        }
        return restaurants;
    }

    private Restaurant extractRestaurantFromResultSet(ResultSet resultSet) throws SQLException {
        Restaurant restaurant = new Restaurant();
        restaurant.setName(resultSet.getString("name"));
        restaurant.setNeighborhood(resultSet.getString("neighborhood"));
        restaurant.setAddress(resultSet.getString("address"));
        restaurant.setPhoneNumber(resultSet.getString("phone_number"));
        restaurant.setWebsite(resultSet.getString("website"));
        return restaurant;
    }
}
package pizzaratingapp.com.pizzarating.dao;

import org.springframework.stereotype.Repository;
import pizzaratingapp.com.pizzarating.model.PizzaReview;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Repository
public class JDBCPizzaReviewDao {
    private final Connection connection;

    public JDBCPizzaReviewDao(Connection connection) {
        this.connection = connection;
    }

    public JDBCPizzaReviewDao() {
        this.connection = null;
    }
    public void create(PizzaReview pizzaReview) throws SQLException {
        String query = "INSERT INTO pizza_reviews (restaurant, neighborhood, address, jacob_rating, leah_rating, " +
                "pizza_ordered, price, restaurant_atmosphere, bonus_points, review_comment, review_date) " +
                "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setString(1, pizzaReview.getRestaurant());
            statement.setString(2, pizzaReview.getNeighborhood());
            statement.setString(3, pizzaReview.getAddress());
            statement.setInt(4, pizzaReview.getJacobRating());
            statement.setInt(5, pizzaReview.getLeahRating());
            statement.setString(6, pizzaReview.getPizzaOrdered());
            statement.setDouble(7, pizzaReview.getPrice());
            statement.setString(8, pizzaReview.getRestaurantAtmosphere());
            statement.setString(9, pizzaReview.getBonusPoints());
            statement.setString(10, pizzaReview.getReviewComment());
            statement.setDate(11, Date.valueOf(pizzaReview.getReviewDate()));

            statement.executeUpdate();
        }
    }

    public List<PizzaReview> getAllReviews() throws SQLException {
        List<PizzaReview> reviews = new ArrayList<>();
        String query = "SELECT * FROM pizza_reviews";
        try (Statement statement = connection.createStatement()) {
            ResultSet resultSet = statement.executeQuery(query);
            while (resultSet.next()) {
                PizzaReview review = extractReviewFromResultSet(resultSet);
                reviews.add(review);
            }
        }
        return reviews;
    }

    private PizzaReview extractReviewFromResultSet(ResultSet resultSet) throws SQLException {
        PizzaReview review = new PizzaReview();
        review.setRestaurant(resultSet.getString("restaurant"));
        review.setNeighborhood(resultSet.getString("neighborhood"));
        review.setAddress(resultSet.getString("address"));
        review.setJacobRating(resultSet.getInt("jacob_rating"));
        review.setLeahRating(resultSet.getInt("leah_rating"));
        review.setPizzaOrdered(resultSet.getString("pizza_ordered"));
        review.setPrice(resultSet.getDouble("price"));
        review.setRestaurantAtmosphere(resultSet.getString("restaurant_atmosphere"));
        review.setBonusPoints(resultSet.getString("bonus_points"));
        review.setReviewComment(resultSet.getString("review_comment"));
        review.setReviewDate(resultSet.getDate("review_date").toLocalDate());
        return review;
    }
}
package pizzaratingapp.com.pizzarating.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pizzaratingapp.com.pizzarating.dao.JDBCPizzaReviewDao;
import pizzaratingapp.com.pizzarating.dao.JDBCRestaurantDao;
import pizzaratingapp.com.pizzarating.model.PizzaReview;
import pizzaratingapp.com.pizzarating.model.Restaurant;


import java.sql.SQLException;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class Controller {

    private final JDBCPizzaReviewDao pizzaReviewDao;
    private final JDBCRestaurantDao restaurantDao;

    @Autowired
    public Controller(JDBCPizzaReviewDao pizzaReviewDao, JDBCRestaurantDao restaurantDao) {
        this.pizzaReviewDao = pizzaReviewDao;
        this.restaurantDao = restaurantDao;
    }

    @GetMapping("/reviews")
    public List<PizzaReview> getAllReviews() throws SQLException {
        return pizzaReviewDao.getAllReviews();
    }

    @PostMapping("/reviews")
    public void createReview(@RequestBody PizzaReview review) throws SQLException {
        pizzaReviewDao.create(review);
    }

    @GetMapping("/restaurants")
    public List<Restaurant> getAllRestaurants() throws SQLException {
        return restaurantDao.getAllRestaurants();
    }

    @PostMapping("/restaurants")
    public void createRestaurant(@RequestBody Restaurant restaurant) throws SQLException {
        restaurantDao.create(restaurant);
    }
}

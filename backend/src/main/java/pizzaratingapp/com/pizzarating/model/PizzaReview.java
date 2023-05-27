package pizzaratingapp.com.pizzarating.model;

import java.time.LocalDate;

public class PizzaReview {
    private String restaurant;
    private String neighborhood;
    private String address;
    private int jacobRating;
    private int leahRating;
    private String pizzaOrdered;
    private double price;
    private String restaurantAtmosphere;
    private String bonusPoints;
    private String reviewComment;
    private LocalDate reviewDate;

    // Constructors
    public PizzaReview() {
        // Default constructor
    }

    public PizzaReview(String restaurant, String neighborhood, String address, int jacobRating, int leahRating,
                       String pizzaOrdered, double price, String restaurantAtmosphere, String bonusPoints,
                       String reviewComment, LocalDate reviewDate) {
        this.restaurant = restaurant;
        this.neighborhood = neighborhood;
        this.address = address;
        this.jacobRating = jacobRating;
        this.leahRating = leahRating;
        this.pizzaOrdered = pizzaOrdered;
        this.price = price;
        this.restaurantAtmosphere = restaurantAtmosphere;
        this.bonusPoints = bonusPoints;
        this.reviewComment = reviewComment;
        this.reviewDate = reviewDate;
    }

    // Getters and Setters
    public String getRestaurant() {
        return restaurant;
    }

    public void setRestaurant(String restaurant) {
        this.restaurant = restaurant;
    }

    public String getNeighborhood() {
        return neighborhood;
    }

    public void setNeighborhood(String neighborhood) {
        this.neighborhood = neighborhood;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int getJacobRating() {
        return jacobRating;
    }

    public void setJacobRating(int jacobRating) {
        this.jacobRating = jacobRating;
    }

    public int getLeahRating() {
        return leahRating;
    }

    public void setLeahRating(int leahRating) {
        this.leahRating = leahRating;
    }

    public String getPizzaOrdered() {
        return pizzaOrdered;
    }

    public void setPizzaOrdered(String pizzaOrdered) {
        this.pizzaOrdered = pizzaOrdered;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getRestaurantAtmosphere() {
        return restaurantAtmosphere;
    }

    public void setRestaurantAtmosphere(String restaurantAtmosphere) {
        this.restaurantAtmosphere = restaurantAtmosphere;
    }

    public String getBonusPoints() {
        return bonusPoints;
    }

    public void setBonusPoints(String bonusPoints) {
        this.bonusPoints = bonusPoints;
    }

    public String getReviewComment() {
        return reviewComment;
    }

    public void setReviewComment(String reviewComment) {
        this.reviewComment = reviewComment;
    }

    public LocalDate getReviewDate() {
        return reviewDate;
    }

    public void setReviewDate(LocalDate reviewDate) {
        this.reviewDate = reviewDate;
    }
}
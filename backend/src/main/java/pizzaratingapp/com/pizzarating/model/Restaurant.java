package pizzaratingapp.com.pizzarating.model;

public class Restaurant {
    private String name;
    private String neighborhood;
    private String address;
    private String phoneNumber;
    private String website;

    // Constructors
    public Restaurant() {
        // Default constructor
    }

    public Restaurant(String name, String neighborhood, String address, String phoneNumber, String website) {
        this.name = name;
        this.neighborhood = neighborhood;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.website = website;
    }

    // Getters and Setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }
}
-- Create Users table
CREATE TABLE Users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  registration_date TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Create Restaurants table
CREATE TABLE Restaurants (
  restaurant_id SERIAL PRIMARY KEY,
  restaurant_name VARCHAR(100) NOT NULL,
  neighborhood VARCHAR(100) NOT NULL,
  address VARCHAR(200) NOT NULL,
  phone_number VARCHAR(20),
  website_url VARCHAR(200)
);

-- Create Pizzas table
CREATE TABLE Pizzas (
  pizza_id SERIAL PRIMARY KEY,
  restaurant_id INT REFERENCES Restaurants(restaurant_id),
  user_id INT REFERENCES Users(user_id),
  pizza_name VARCHAR(100) NOT NULL,
  pizza_description TEXT,
  pizza_picture_url VARCHAR(200),
  price NUMERIC(8, 2)
);

-- Create Ratings table
CREATE TABLE Ratings (
  rating_id SERIAL PRIMARY KEY,
  pizza_id INT REFERENCES Pizzas(pizza_id),
  user_id INT REFERENCES Users(user_id),
  jacob_rating INT,
  leah_rating INT,
  atmosphere_rating INT,
  bonus_points INT
);

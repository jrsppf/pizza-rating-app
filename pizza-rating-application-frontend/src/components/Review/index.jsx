import React from "react";
import { Container, Cover, RestaurantName, ShortReview } from "./styles";

const Review = ({ review }) => (
  <Container>
    <Cover src={review.image} alt="" />
    <RestaurantName>{review.restaurantName}</RestaurantName>
    <ShortReview>{review.shortReview}</ShortReview>
  </Container>
);

export default Review;

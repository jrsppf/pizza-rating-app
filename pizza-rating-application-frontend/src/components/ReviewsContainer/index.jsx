import React from "react";
import { Container, H2, ReviewList } from "./styles";
import Review from "../Review";

const ReviewsContainer = ({ reviews }) => {
  return (
    <Container>
      <H2>All Reviews {console.log(reviews)}</H2>
      <ReviewList>
    {reviews.map((review) => (
      <Review key={review.id} review={review} />
    ))}
      </ReviewList>
    </Container>
  );
};

export default ReviewsContainer;

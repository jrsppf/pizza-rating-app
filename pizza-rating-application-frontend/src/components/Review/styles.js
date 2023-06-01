import styled from "styled-components";

export const Container = styled.figure`
  margin: 0;
`;

export const Cover = styled.img`
  cursor: pointer;

  border: 2px solid #000;
  object-fit: cover;
  aspect-ratio: 2 / 3;
  width: 100%;
  margin-bottom: 16px;
`;

export const RestaurantName = styled.h3`
  font-size: 28px;
  margin: 0 0 10px 0;
  line-height: 1.3;
`;

export const ShortReview = styled.h4`
  font-size: 16px;
  margin: 0;
  line-height: 1.6;
  font-style: italic;
`;

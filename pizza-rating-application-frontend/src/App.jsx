import React, { useState, useEffect } from "react";
import ReviewsContainer from "./components/ReviewsContainer";
import Header from "./components/Header";
import Image1 from "./assests/nannie_francos_pizza_1.jpg";
import { GlobalStyle } from "./styles";

const App = () => {
  // const [reviews, setReviews] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://book-club-json.herokuapp.com/books"
  //       );
  //       const reviews = await response.json();
  //       setReviews(reviews);
  //     } catch (errors) {
  //       console.log(errors);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const reviews = [
    {
      id: 1,
      category: "italian-market",
      image: Image1,
      restaurantName: "Nannie Franco's",
      restaurantDescription:
        "Our family has over 25 years of experience and we pride ourselves in making all our ingredients fresh daily! From our dough to our sauces... everything is made fresh daily!",
      fullReview: "Very good pizza, crispy crust",
      shortReview: "fjds;ajflk;a;s",
      jacobRating: "5 stars",
      leahRating: "6 stars",
      neighborhood: "italian-market",
      restaurantAtmosphere: "100 stars",
      pricePoint: "$3 a slice",
      address: "910 S 9th St, Philadelphia, PA 19147",
      website: "https://www.nanniefrancospizzamenu.com/",
      additionalDetails: "Cash or Venmo",
      deliveryOption: "yes",
      orderLink:
        "https://slicelife.com/restaurants/pa/philadelphia/19147/nannie-franco-s-pizza/menu?ajs_aid=c6cbe5ab-597b-4c5f-9b83-ab9a6a9ca7bf&direct_web_delivery_preference_modal=true&dw_hamburger_additional_links=true&utm_campaign=direct_websites",
    },

    {
      id: 2,
      category: "italian-market",
      image: Image1,
      restaurantName: "Pizza Planet",
      restaurantDescription:
        "Our family has over 25 years of experience and we pride ourselves in making all our ingredients fresh daily! From our dough to our sauces... everything is made fresh daily!",
      fullReview: "Very good pizza, crispy crust",
      shortReview: "fjds;ajflk;a;s",
      jacobRating: "5 stars",
      leahRating: "6 stars",
      neighborhood: "italian-market",
      restaurantAtmosphere: "100 stars",
      pricePoint: "$3 a slice",
      address: "910 S 9th St, Philadelphia, PA 19147",
      website: "https://www.nanniefrancospizzamenu.com/",
      additionalDetails: "Cash or Venmo",
      deliveryOption: "yes",
      orderLink:
        "https://slicelife.com/restaurants/pa/philadelphia/19147/nannie-franco-s-pizza/menu?ajs_aid=c6cbe5ab-597b-4c5f-9b83-ab9a6a9ca7bf&direct_web_delivery_preference_modal=true&dw_hamburger_additional_links=true&utm_campaign=direct_websites",
    },
  ];

  return (
    <>
      <GlobalStyle />
      <Header />
      <ReviewsContainer reviews={reviews} />
    </>
  );
};

export default App;

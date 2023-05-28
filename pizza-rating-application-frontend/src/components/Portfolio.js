import PizzaCards from "./PizzaCards";
import pizzaReviewData from "./pizzaReviewData";
import { useState } from "react";

const Portfolio = () => {
  const [pizzaReviews, setPizzaReviews] = useState(pizzaReviewData);


  return (
    <section id="pizzaReviewsPortfolio">
      <h2>Recent Reviews</h2>
      <p>Check out some of our reviews.</p>
      <div className="container portfolio__container">
        <PizzaCards pizzaReviews={pizzaReviews} />
      </div>
    </section>
  );
};

export default Portfolio;

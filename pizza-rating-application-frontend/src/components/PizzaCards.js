import PizzaCard from "./PizzaCard";

const PizzaCards = ({ pizzaReviews }) => {
  return (
    <div className="portfolio__projects">
        {pizzaReviews.map(pizzaReview => {
            <PizzaCard  />
        })}
    </div>
  );
};

export default PizzaCards;

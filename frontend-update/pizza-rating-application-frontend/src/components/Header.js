import "../index.css";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header>
      <div>
        <h1>{title}</h1>
        {/* <img src={HeaderImage} alt="picture of the couple" /> */}
        <p>
          Sliceadelphia is a pizza project started by Leah and Jacob in 2023.
          Keep up with us keeping track of all the pizzas we've tried in the
          Philadelphia area. Rate and review your favorite pizzas, share
          mouth-watering pictures, and discover new pizzerias in town.
        </p>
      </div>
    </header>
  );
};

Header.defaultProps = {
  title: "Sliceadelphia",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;

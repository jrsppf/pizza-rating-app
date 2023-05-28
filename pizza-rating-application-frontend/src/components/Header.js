import "../index.css";


const Header = ({ title }) => {
  return (
    <header id="header">
      <div className="container header__container">
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


export default Header;

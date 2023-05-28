import Logo from '../assests/logo.jpg';
import navBarData from './NavBarData';

const NavBar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className='nav__logo'>
          {/* <img src={Logo} alt="Logo" /> */}
        </a>
        <ul className='nav__menu'>
          {
            navBarData.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
          }
        </ul>
      </div>
    </nav>
  )
}


export default NavBar
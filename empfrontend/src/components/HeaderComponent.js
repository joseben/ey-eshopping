import React from 'react';
import "../Header.css";
import logo from '../images/logo.png';


const HeaderComponent = () => {
    //const [toggleMenu, setToggleMenu] = useState(false);
    //const handleNavbar = () => setToggleMenu(!toggleMenu);
    return (
              <header className="header">
              <div className="logo">
              <img src={logo} alt="Logo" />
                <span className="name">BOOKHUB</span>
              </div>
              <nav>
                <ul className="nav-links">
                  <li><a href="/">HOME</a></li>
                  <li><a href="/about">ABOUT</a></li>
                  <a href="/shoppingcart" class="shopping-cart">
                  <i class="bi bi-cart3"></i>
                  </a>
                 
                </ul>
              </nav>
              </header>

      )
    }

export default HeaderComponent


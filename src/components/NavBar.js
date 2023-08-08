import React from 'react';
import style from './NavBar.module.css';
import logo from '../images/logo.jpg';
function NavBar() {

    return (
      <div className={style.navbar}>
        <div className={style.menu}>
          <li>Home Page</li>
          <li>Products</li>
          <li>About Us</li>
        </div>
        <img src={logo} className={style.logo} alt='logo'/>
      </div>
    )
  
}
export default NavBar;

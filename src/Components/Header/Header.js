import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../Images/movie-tracker-logo.png';
import './Header.scss'


const Header = () => {
    return (
      <div className='header'>
        <Link to="/" className='logo'>
          <img src={Logo} alt='Movie Tracker Logo' />
        </Link>
        <nav>
          <NavLink exact={true} to="/" activeClassName='current-nav' className='nav-button'><h4>Browse</h4></NavLink>
          <NavLink activeClassName='current-nav' to="/Login" className='nav-button'><h4>Log In</h4></NavLink>
          <NavLink activeClassName='current-nav' to="/SignUp" className='nav-button'><h4>Sign Up</h4></NavLink>
        </nav>
      </div>
    );
}


export default Header;
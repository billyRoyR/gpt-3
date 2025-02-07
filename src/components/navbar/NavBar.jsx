import React from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './navbar.css';
import logo from '../../assets/logo.svg';

const NavBar = () => {
   return (
      <div className='gpt3__navbar'>
         <div className="gpt3__navbar-links">
            <div className="gpt3__navbar-links_logo">
               <img src={logo} alt="" />
            </div>
         </div>
      </div>
   );
}

export default NavBar;

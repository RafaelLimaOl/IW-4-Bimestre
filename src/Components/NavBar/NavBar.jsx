// Imports:

import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from "../../App";

import LogoCosts from "../../Assets/Logo.png";
import '../Global.css';
import './NavBar.css';

function NavBar() {

  const { user, setUser } = useContext(UserContext);

  return (
    <div className='navBar'>

      <div className="navLogo">
        <img src={LogoCosts} alt="Logo" className='logo'/>
      </div>

      <div className="navItens">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>

      </div>
    </div>
  )
}

export default NavBar
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import  Nav  from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import AuthNav from './AuthNav';
import './Header.css';
const Header = () => {
    
return (
      <>
      <div id="header-img">
      <Navbar id="navbar"  variant="dark">
        <Navbar.Brand>
        &nbsp; <img src="./lotus-white.png"
          alt="lotus-icon-transparent"
          style={{width: '150px', height: '150px', color: 'white', zIndex: '100%'}} /> &nbsp;
         
          Numerology</Navbar.Brand>
        <Nav>
    
        <Nav.Item><Link to="/Profiles" className="nav-link">Profiles</Link></Nav.Item>
        <Nav.Item><Link to="/LifePaths" className="nav-link">Life Paths</Link></Nav.Item>
        <Nav.Item><Link to="/About" className="nav-link">About</Link></Nav.Item>
        <AuthNav />
      
        </Nav>

      </Navbar>
        </div>
      </>
    )
  
  }


export default Header;
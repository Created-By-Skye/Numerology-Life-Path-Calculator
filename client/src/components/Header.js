import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import  Nav  from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

const Header = () => {
    
    

    return (
      <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Numerology</Navbar.Brand>
        <Nav>
        <Nav.Item><Link to="/" className="nav-link">Home</Link></Nav.Item>
        <Nav.Item><Link to="/CreateProfile" className="nav-link">Create Profile</Link></Nav.Item>
        <Nav.Item><Link to="/Profiles" className="nav-link">Profiles</Link></Nav.Item>
        <Nav.Item><Link to="/LifePaths" className="nav-link">Life Paths</Link></Nav.Item>
        <Nav.Item><Link to="/About" className="nav-link">About</Link></Nav.Item>
      
      
        </Nav>

      </Navbar>

      </>
    )
  
  }


export default Header;
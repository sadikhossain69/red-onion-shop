import "./Header.css";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo2 from '../../Photos/logo2.png'
import { Link } from "react-router-dom";
import { BsCart2 } from 'react-icons/bs'

const Header = () => {
  return (
    <>
        <header>
      <Navbar collapseOnSelect expand="lg" >
        <Container>
          <Link to='/' >
            <Navbar.Brand>
                <img style={{height: '35px'}} src={logo2} alt="" />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link style={{display: 'none'}} href="#features">Features</Nav.Link>
              <Nav.Link style={{display: 'none'}} href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Nav>
              <span className="mx-3 shopping-cart-icon" ><BsCart2/></span>
              <Link className="mx-3 login-button" to='/login' >Login</Link>
              <Link className="mx-3 signup-button" to='/register' >Sign Up</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
    </>
  );
};

export default Header;

import "./Header.css";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo2 from '../../Photos/logo2.png'
import { Link } from "react-router-dom";

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
              <Link to='/login' >Login</Link>
              <Link className="ms-3" to='/register' >Register</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
    </>
  );
};

export default Header;

import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import "../css/NavigationBar.css";

function NavigationBar() {
  return (
    <Navbar fixed="top" className="color navbar navbar-dark" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav.Item className="p-1 pl-2">
            <NavLink to="/" className="textcolor"></NavLink>
            <NavLink to="/" className="textcolor">
              Home
            </NavLink>
          </Nav.Item>
          <Nav.Item className="p-1 pl-2">
            <NavLink to="/contactus" className="textcolor">
              Contact us
            </NavLink>
          </Nav.Item>
          <Nav.Item className="p-1 pl-2">
            <NavLink to="/donate" className="textcolor">
              Donate
            </NavLink>
          </Nav.Item>
          <Nav.Item className="ms-auto p-1">
            <NavLink to="/logout" className="textcolor">
              Logout
            </NavLink>
          </Nav.Item>
          <Nav.Item className="ms-auto p-1">
            <NavLink to="/recycle" className="textcolor">
              Recycle
            </NavLink>
          </Nav.Item>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;

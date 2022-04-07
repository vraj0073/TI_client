import React from "react";
import {
  Card,
  Container,
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Row,
  Col,
} from "react-bootstrap";
import "../css/Home.css";

export default function Header() {
  return (
    <div>
      <div className="header">
        <div className="header-items">
          <Row>
            <Col>
              <Row>
                <h1>Saveit</h1>
              </Row>
            </Col>

            <Col>
              <Navbar collapseOnSelect expand="lg">
                <Container className="container" id="homenavigation">
                  <Navbar.Brand href="#home" className="header-navbar">
                    Home
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link href="/donate" className="header-content">
                        Donate
                      </Nav.Link>
                      <Nav.Link href="#pricing" className="header-content">
                        About
                      </Nav.Link>
                      <Nav.Link href="#pricing" className="header-content">
                        Contact
                      </Nav.Link>
                      <NavDropdown
                        title="Login"
                        id="title"
                        className="dropleft header-content"
                      >
                        <NavDropdown.Item href="Register">
                          Sign Up
                        </NavDropdown.Item>
                        <NavDropdown.Item href="Login">
                          Sign In
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

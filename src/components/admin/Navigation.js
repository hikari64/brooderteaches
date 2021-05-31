import React from "react";

import "./index.css";

// auth import
import { auth } from "../../firebase";

// react router dom
import { Link } from "react-router-dom";

import { Container, NavDropdown, Row, Navbar, Nav } from "react-bootstrap";

export default function Navigation(props) {
  return (
    <Row>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>
            {" "}
            <Link to="/dashboard">BrooderHall Admin</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>
                <Link to="/students">Students </Link>{" "}
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link to="/tutors">Tutors </Link>{" "}
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link to="/courses">Courses </Link>{" "}
              </Nav.Link>
              <NavDropdown title={props.email} id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <span className="text-dark" onClick={logout}>
                    Sign Out
                  </span>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
}

const logout = () => {
  return auth.signOut();
};

import React from "react";

// auth import
import { auth } from "../../firebase";

import { Container, NavDropdown, Row, Navbar, Nav } from "react-bootstrap";

export default function Navigation(props) {
  return (
    <Row>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">BrooderHall Admin</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#features">Students</Nav.Link>
              <Nav.Link href="#pricing">Tutors</Nav.Link>
              <Nav.Link href="#pricing">Courses</Nav.Link>
              <NavDropdown title={props.email} id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <h6 onClick={logout}>Sign Out</h6>
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

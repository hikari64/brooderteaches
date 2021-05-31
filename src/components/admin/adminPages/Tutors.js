import React from "react";

import Navigation from "../Navigation";

// footer import
import Footer from "../../Footer/index";

import { Container, Row, Col } from "react-bootstrap";

export default function Tutors(props) {
  return (
    <React.Fragment>
      <Container fluid>
        <Navigation email={props.email} />

        <Container id="admin-body">
          <Row>
            <Col md={12}></Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

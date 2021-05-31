import React from "react";

import "../index.css";
// auth import
import { auth } from "../../../firebase";

import Navigation from "../Navigation";

// footer import
import Footer from "../../Footer/index";

import { Container, Row, Col } from "react-bootstrap";

export default function Dashboard(props) {
  console.log("props", props.email);
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

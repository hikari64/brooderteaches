import React from "react";

import "../index.css";

import Navigation from "../Navigation";

// footer import
import Footer from "../../Footer/index";

import { Container, Card, Row, Col } from "react-bootstrap";

// summary cards
import TutorSum from "../TutorSum";
import StudentSum from "../StudentSum";
import CoursesSum from "../CoursesSum";

export default function Dashboard(props) {
  return (
    <React.Fragment>
      <Container fluid>
        <Navigation email={props.email} />

        <Container id="admin-body">
          <Row>
            <Col md={12}>
              <h2 className="ml-3">Overview</h2>
            </Col>
          </Row>

          {/* ROW OF SUMMARIES  */}
          <Row className="mt-4 mb-4">
            <Col>
              <StudentSum />
            </Col>

            {/* TUTORS */}
            <Col>
              <TutorSum />
            </Col>

            {/* COURSES */}
            <Col>
              <CoursesSum />
            </Col>
          </Row>

          {/* ROW OF ACTIONS */}
        </Container>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

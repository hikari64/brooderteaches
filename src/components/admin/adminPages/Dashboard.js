import React from "react";

import "../index.css";

import Navigation from "../Navigation";

// footer import
import Footer from "../../Footer/index";

import { Container, Card, Row, Col } from "react-bootstrap";

// image imports
import head from "../../../images/img-1.png";
import another from "../../../images/img-2.png";
import third from "../../../images/img-3.png";

export default function Dashboard(props) {
  console.log("props", props.email);
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
              <Card className="admin-card">
                <Card.Body>
                  <Row>
                    <Col>
                      <img
                        src={head}
                        alt="admin card peek"
                        className="admin-card-img"
                      />
                    </Col>
                    <Col className="my-auto">
                      <h1>
                        <strong>67</strong>
                      </h1>
                      <Card.Title>Students</Card.Title>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>

            {/* TUTORS */}
            <Col>
              <Card className="admin-card">
                <Card.Body>
                  <Row>
                    <Col>
                      <img
                        src={another}
                        alt="admin card peek"
                        className="admin-card-img"
                      />
                    </Col>
                    <Col className="my-auto">
                      <h1>
                        <strong>59</strong>
                      </h1>
                      <Card.Title>Tutors</Card.Title>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>

            {/* COURSES */}
            <Col>
              <Card className="admin-card">
                <Card.Body>
                  <Row>
                    <Col>
                      <img
                        src={third}
                        alt="admin card peek"
                        className="admin-card-img"
                      />
                    </Col>
                    <Col className="my-auto">
                      <h1>
                        <strong>890</strong>
                      </h1>
                      <Card.Title>Courses</Card.Title>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* ROW OF ACTIONS */}
        </Container>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

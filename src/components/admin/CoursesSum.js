import React from "react";

import { Card, Row, Col } from "react-bootstrap";

import another from "../../images/img-3.png";

export default function CoursesSum() {
  return (
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
            <Card.Title>Courses</Card.Title>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

import React from "react";

import { Card, Row, Col } from "react-bootstrap";

import another from "../../images/img-1.png";

// hooks
import useFetchTutors from "./hooks/useFetchTutors";

export default function TutorSum() {
  const { loading, tutors } = useFetchTutors();
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
              {loading ? <h6>Loading</h6> : <strong>{tutors.length}</strong>}
            </h1>
            <Card.Title>Tutors</Card.Title>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

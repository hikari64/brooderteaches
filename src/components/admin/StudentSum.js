import React from "react";

import { Card, Row, Col } from "react-bootstrap";

import another from "../../images/img-2.png";

// hooks
import useFetchStudents from "./hooks/useFetchStudents";

export default function StudentSum() {
  const { loading, students } = useFetchStudents();
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
              {loading ? <h6>Loading</h6> : <strong>{students.length}</strong>}
            </h1>
            <Card.Title>Students</Card.Title>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

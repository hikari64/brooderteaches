import React from "react";

import { Card, Row, Col } from "react-bootstrap";

import another from "../../images/img-3.png";

// hooks
import useFetchCourses from "./hooks/useFetchCourses";

export default function CoursesSum() {
  const { loading, courses } = useFetchCourses();
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
              {loading ? <h6>Loading</h6> : <strong>{courses.length}</strong>}
            </h1>
            <Card.Title>Courses</Card.Title>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

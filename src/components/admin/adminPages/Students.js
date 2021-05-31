import React from "react";

import Navigation from "../Navigation";

// footer import
import Footer from "../../Footer/index";

// hooks
import useFetchStudents from "../hooks/useFetchStudents";

import { Container, Table, Card, Row, Col } from "react-bootstrap";

// image imports
import head from "../../../images/img-1.png";

export default function Students(props) {
  const { loading, students } = useFetchStudents();

  return (
    <React.Fragment>
      <Container fluid>
        <Navigation email={props.email} />

        <Container id="admin-body">
          <Row className="mb-4">
            <h2>Summary</h2>
          </Row>

          <Row>
            <Col md={12}>
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
                        {loading ? (
                          <h6>Loading</h6>
                        ) : (
                          <strong>{students.length}</strong>
                        )}
                      </h1>
                      <Card.Title>Students</Card.Title>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <h2>
              {" "}
              <Row>
                <h2>Students</h2>
              </Row>
            </h2>
          </Row>

          {/* STUDENTS TABLE */}
          <Row>
            {loading ? (
              <h2>Loading</h2>
            ) : (
              <Col md={12}>
                <Table striped hover>
                  <thead>
                    <tr>
                      {/* <th>#</th> */}
                      <th>Full Name</th>
                      <th>Email</th>
                      <th>Contact</th>
                      <th>Number of Courses Taken</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student) => {
                      return (
                        <tr>
                          {/* <td>{student.id}</td> */}
                          <td>{student.name}</td>
                          <td>{student.email}</td>
                          <td>{student.contact}</td>
                          <td>{student.courses.length}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Col>
            )}
          </Row>
        </Container>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

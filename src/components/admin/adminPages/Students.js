import React from "react";

import Navigation from "../Navigation";

// footer import
import Footer from "../../Footer/index";

// hooks
import useFetchStudents from "../hooks/useFetchStudents";

import { Container, Table, Row, Col } from "react-bootstrap";

// image imports
import StudentSum from "../StudentSum";

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
              <StudentSum />
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
            {loading && students !== undefined ? (
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
                          <td>
                            {student.courses ? student.courses.length : 0}
                          </td>
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

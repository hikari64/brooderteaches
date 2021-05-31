import React from "react";

import Navigation from "../Navigation";

// footer import
import Footer from "../../Footer/index";

// hooks
import useFetchTutors from "../hooks/useFetchTutors";

import { Container, Table, Card, Row, Col } from "react-bootstrap";

// image imports
import another from "../../../images/img-2.png";

export default function Tutors(props) {
  const { loading, tutors } = useFetchTutors();

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
                        src={another}
                        alt="admin card peek"
                        className="admin-card-img"
                      />
                    </Col>
                    <Col className="my-auto">
                      <h1>
                        {loading ? (
                          <h6>Loading</h6>
                        ) : (
                          <strong>{tutors.length}</strong>
                        )}
                      </h1>
                      <Card.Title>Tutors</Card.Title>
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
                <h2>Tutors</h2>
              </Row>
            </h2>
          </Row>

          {/* tutorS TABLE */}
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
                      <th>Number of Courses Authored</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tutors.map((tutor) => {
                      return (
                        <tr>
                          {/* <td>{tutor.id}</td> */}
                          <td>{tutor.name}</td>
                          <td>{tutor.email}</td>
                          <td>{tutor.contact}</td>
                          <td>-</td>
                          <td>View More</td>
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

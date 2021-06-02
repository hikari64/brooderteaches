import React from "react";

import { Container, Table, Button, Card, Row, Col } from "react-bootstrap";

// hooks
import useFetchTutors from "./hooks/useFetchUnverifiedTutors";
export default function Unverified() {
  const { loading, tutors } = useFetchTutors();

  return (
    <React.Fragment>
      <Row className="mt-4 pt-4">
        <h2>
          {" "}
          <Row>
            <h2>Pending Verification</h2>
          </Row>
        </h2>
      </Row>

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
    </React.Fragment>
  );
}

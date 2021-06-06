import React from "react";

// verify tutor
import { verifyTutor } from "../../firebase";

// booststrap imports
import { BsFillPersonCheckFill } from "react-icons/bs";

import { Button, Modal, Container, Table, Row, Col } from "react-bootstrap";

export default function SingleTutor(props) {
  const tutor = props.tutor;

  const [modalShow, setModalShow] = React.useState(false);
  return (
    <React.Fragment>
      <tr>
        {/* <td>{tutor.id}</td> */}
        <td>
          {tutor.lastName} {tutor.firstName}
        </td>
        <td>{tutor.email}</td>
        <td>{tutor.contact}</td>
        <td>-</td>

        <td>
          <Button variant="light" onClick={() => setModalShow(true)}>
            View More
          </Button>
        </td>
      </tr>

      {/* modal */}
      <Modal
        size="lg"
        show={modalShow}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <Container fluid className="px-4">
              {tutor.firstName}'s Profile
            </Container>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-main">
          <Container fluid className="px-4">
            {/* Name and verification */}
            <Row>
              <Col>
                <h1>
                  {tutor.lastName}, {tutor.firstName}
                </h1>
                <div>{tutor.email}</div>
              </Col>
              <Col>
                {tutor.verified ? (
                  <React.Fragment>
                    <div>
                      <BsFillPersonCheckFill size={40} color="#75DDDD" />{" "}
                      <span className="ms-2">
                        <strong>Verified</strong>
                      </span>
                    </div>
                  </React.Fragment>
                ) : (
                  <Button variant="success" onClick={() => verifyTutor(tutor)}>
                    Verify Tutor
                  </Button>
                )}
              </Col>
            </Row>
            <hr className="mt-4 mb-4" />
            <Row>
              <h4>Identification Card</h4>
            </Row>
            <hr className="mt-4 mb-4" />
            {/* personal details */}
            <Row>
              <h4>Other details</h4>
              <p>Contact: {tutor.contact}</p>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

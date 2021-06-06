import React from "react";

// booststrap imports

import { Button, Modal } from "react-bootstrap";

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
            {tutor.name}'s Profile
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-main"></Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

import React, { useEffect, useState } from "react";

// boostrap impots
import { Row, Button, Col } from "react-bootstrap";

// material ui imports
import { DropzoneArea } from "material-ui-dropzone";

import { SignUpH1 } from "./signupElements.js";

export default function Verification(props) {
  const [file, setFile] = useState(null);

  const handleChange = (File) => {
    let val = File[File.length - 1];
    let nam = "verificationID";
    console.log(`val`, val);
    setFile(val);
    props.updateData(nam, val);
  };

  const Proceed = () => {
    if (file) {
      props.nextStep();
      props.Submit();
    }
  };

  return (
    <div>
      <Row className="mt-4 mb-4 text-center">
        <SignUpH1 className="text-center mb-5">Verification</SignUpH1>

        <Col md={8} className="mx-auto">
          <h5 className="mb-4 mt-2">
            *Upload any valid National Identification Card for successful
            verification
          </h5>
          <DropzoneArea onChange={handleChange} />
          <Button onClick={props.prevStep} className="primary-button">
            Go Back
          </Button>
          <Button
            onClick={Proceed}
            className="primary-button"
            disabled={file ? false : true}
          >
            Proceed
          </Button>
        </Col>
      </Row>
    </div>
  );
}

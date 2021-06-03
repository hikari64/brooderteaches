import React, {  useEffect } from "react";


// boostrap impots
import { Row, Button, Col } from "react-bootstrap";

// material ui imports
import { DropzoneArea } from "material-ui-dropzone";

import {SignUpH1} from "./signupElements.js";


export default function Verification(props) {
 
  
 const handleChange=(File)=>{
    let val = File[0]
    let nam = "verificationID"

    props.updateData(nam,val);

  }

  const Proceed = ()=>{
   props.nextStep();
    props.Submit();
  }

  return (
    <div>
    
        <Row className="mt-4 mb-4 text-center">
          <SignUpH1 className="text-center mb-5">
            Verification
          </SignUpH1>
          
          <Col md={8} className="mx-auto">
            <h5 className="mb-4 mt-2">
              *Upload any valid National Identification Card for successful
              verification
            </h5>
            <DropzoneArea onChange={handleChange} />
            <Button onClick={props.prevStep} className="primary-button">
              Go Back
            </Button>
            <Button onClick={Proceed} className="primary-button">
              Proceed
            </Button>
          </Col>
        </Row>
    </div>
  );
}


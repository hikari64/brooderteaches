import React, { useState, useEffect } from "react";

// PAYSTACK BUTTON IMPORT
import { PaystackButton } from "react-paystack";

// call update user hook
import UpdateTutor from "../hooks/useUpdateTutor.js";
// boostrap impots
import { Container, Row, Col, Button } from "react-bootstrap";

// IMPORT STYLED ELEMENTS
import { SignUpH1 } from "./signupElements.js";
import { useAuth } from "../../../contexts/TutorContext.js";

export default function Payments(props) {
  const { userID,setCurrentUser,logout } = useAuth()

  // NAVBAR CONTROLS
  const [isOpen, setIsOpen] = useState(false);
  const [tutorData, setTutorData] = useState({
    state:4
    });

  const UpdateData = (item, value) => {

    setTutorData((tutorData) => ({ ...tutorData, [item]: value }));
  };
  
  async function RecordPayment(){
      const {newdata,error} = await UpdateTutor(tutorData,userID);
      setCurrentUser(newdata)
      // console.log("payment recorded succesfully")
    }
  
 

  // PAYSTACK INTEGRATION
  // const config = {
  //   reference: new Date().getTime(),
  //   currency: "GHS",
  //   email: "user@example.com",
  //   amount: 100*100,
  //   publicKey: "pk_live_2bbc47bbdc506caec19278c6f7384d1eb25ccf40",
  // };

  // SUCCESSFULLY PAID
  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    let nam = 'paymentReference';
    UpdateData(nam, reference);
  //  await UpdateTutor(tutorData,userID)

    console.log(reference);
  };

  // you can call this function anything
  const handlePaystackCloseAction =  () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    
  //  await UpdateTutor(tutorData,userID)
    console.log(tutorData);
  };

  // const componentProps = {
  //   ...config,
  //   text: "Pay Ghs100",
  //   onSuccess: (reference) => handlePaystackSuccessAction(reference),
  //   onClose: () => handlePaystackCloseAction(),
  // };

  return (
    <div>
      <Row className="mt-4 mb-4">
        <SignUpH1 className="text-center mb-5">Complete Registration</SignUpH1>
        <Col md={8} className="mx-auto text-center">
          <h3>Congratulations, you're almost done</h3>
          {/* <p  className="text-info">
            You're on your way to becoming a tutor. You are required to
            pay a registration fee of Ghs100 to complete your registration.
            After this one time fee, you can create unlimited courses
          </p>
        </Col>
        <Col md={8} className="mx-auto text-center mt-4">
          <h4>Pay Via Mobile Money / Credit Card</h4>

          <Row>
            <Col md={8} className="mx-auto">
              <PaystackButton className="paystack-button" {...componentProps} />
            </Col>
          </Row> */}
          <h4 className="header p-1 ">You have come this far there is only a click left!</h4>
              <p>After this our team will get intouch with you shortly!</p>

             
              <Col  className="text-center ">
                
                   <Button onClick={()=>  RecordPayment()}
                    className="primary-button"
                    >
                   Complete Registration
                  </Button>
              </Col>
          <Button onClick={props.prevStep} className="primary-button">
            Go back
          </Button>
        </Col>
      </Row>
    </div>
  );
}

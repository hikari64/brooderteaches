import React from "react";

// css import
import "./index.css";

// boostraP IMPOTS
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function TutorSignUp() {
  return (
    <Container fluid>
      <Row>
        <Col md={6} className="hide-on-mobile side-bg"></Col>
        <Col md={6}>
          <Container fluid className="my-auto">
            <Row className="height-full">
              <Col md={10} className="mx-auto my-auto text-center">
                <h2 className="header">Become A Tutor</h2>
                <p>
                  Terms and conditions of being a tutor and pricing should go
                  here Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Proin imperdiet ligula a lacus commodo, ut tincidunt magna
                  pellentesque. Aenean eu arcu ut ligula vehicula semper id
                  sodales sapien. Vestibulum lobortis blandit sem, nec molestie
                  velit hendrerit vitae. Donec fringilla neque iaculis rhoncus
                  aliquam. Praesent suscipit ac nisi vel luctus. Mauris id
                  pretium justo, a imperdiet dolor. Phasellus non purus sed
                  ligula ornare porta quis ut erat. Integer ut dui maximus,
                  aliquet lectus eget, gravida ipsum. Aliquam erat volutpat.
                  Nunc id libero enim. Sed a lectus a elit scelerisque iaculis
                  sed egestas ipsum. In nunc lectus, porta consequat consectetur
                  at, fermentum ac ante. Vivamus nec ultrices felis. Nullam
                  fermentum dapibus iaculis. Praesent vel efficitur leo. Donec
                  vestibulum lobortis orci, at malesuada tellus varius in.
                  Mauris sollicitudin ante ut mi tristique imperdiet. Sed
                  efficitur ultricies nibh, a semper ex auctor et. Proin ac
                  rutrum nibh. Aenean vitae metus eget neque feugiat blandit.
                  Sed molestie maximus nulla. In bibendum sem in odio molestie
                  fermentum ut sit amet ante.
                </p>

                <Button
                  variant="primary"
                  className="primary-button"
                  type="submit"
                >
                  Continue
                </Button>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import LoginForm from "../components/loginForm";


function RegisterPage() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col />
          <Col lg="8">
            <div>
              <h3>
                <u>Login Form</u>
              </h3>
              <hr />
              <Card>
                <CardBody>
                  <LoginForm />
                </CardBody>
              </Card>
            </div>
          </Col>
          <Col />
        </Row>
      </Container>
    </div>
  );
}

export default RegisterPage;

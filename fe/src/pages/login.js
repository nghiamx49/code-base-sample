import React, { useState } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/loginForm";
import {connect} from 'react-redux'
import {saveDataToRedux} from '../redux/action/auth-action'
import {login} from '../api'
function LoginPage({ loginSuccess }) {
  const [loginData, setLoginData] = useState({});

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const navigator = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    const { data, status } = await login(loginData);
    if (status === 200) {
        loginSuccess({
            user: data.user,
            token: data.token,
            isAuthenticated: data.isAuthenticated
        })
        navigator('/')
    }
  };

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
                  <LoginForm
                    handleChange={handleChange}
                    handleLogin={handleLogin}
                  />
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

const mapDispatchToProps = (dispatch) => {
    return {
        loginSuccess: (data) => dispatch(saveDataToRedux(data))
    }
}

export default connect(null, mapDispatchToProps)(LoginPage);

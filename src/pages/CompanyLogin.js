import React from 'react';
import '../App.css';
import logo from '../logo.svg';
import { Button, Form } from 'react-bootstrap';
const CompanyLogin = ({ history }) => {
    return (
        <div className="App">
            <div className="AppAll">
                <header className="AppHeader">
                    <h1>Login</h1>
                    <h2>로그인하세요!</h2>
                    <hr></hr>
                </header>
                <div className="AppBody">
                    <Form className="login-form">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

                </div>
            </div>
        </div>
    );
}

export default CompanyLogin;
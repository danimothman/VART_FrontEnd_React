import React from 'react';
import '../App.css';
import logo from '../logo.svg';
import { Button, Form } from 'react-bootstrap';
const CompanyLogin = ({ history }) => {
    return (
        <div className="App">
            <div className="App-header">
                <h1>Login</h1>
                <h2>로그인하세요!</h2>
                <hr></hr>
            </div>
            <Form className="login-form">
                {/* <Form className="login-form" onSubmit={this.onSubmit}>                 */}
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>이더리움 계좌로 로그인</Form.Label>

                    <Form.Control type="text" placeholder=" 현재 이더리움 네트워크에 연결된 계좌를 입력하세요" />
                    {/* <Form.Control type="text" placeholder=" 현재 이더리움 네트워크에 연결된 계좌를 입력하세요" value={this.state.eth_account} onChange={this.handleChange} /> */}

                </Form.Group>

                <Button variant="primary" type="submit" >
                    Submit
      </Button>
            </Form>
        </div>

    );
}

export default CompanyLogin;
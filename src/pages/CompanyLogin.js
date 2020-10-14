import React from 'react';
import '../App.css';
import logo from '../logo.svg';
import { Button, Form } from 'react-bootstrap';
const CompanyLogin = ({ history }) => {
    return (
        <div className="App">
            <header className="App-header">
                <div className="App-body">
                    <Form className="login-form">
                        {/* <Form className="login-form" onSubmit={this.onSubmit}>                 */}
                        <Form.Group controlId="formBasicEmail" className="form-group2">
                            <Form.Label>아이디 입력</Form.Label>
                            <Form.Control type="text" placeholder=" 아이디 입력하세요" />
                            {/* <Form.Control type="text" placeholder=" 현재 이더리움 네트워크에 연결된 계좌를 입력하세요" value={this.state.eth_account} onChange={this.handleChange} /> */}
                            <Form.Label>비밀번호 입력</Form.Label>
                            <Form.Control type="password" placeholder="비밀번호 입력하세요" />
                        </Form.Group>
                        <Button variant="primary" type="submit" >
                            Submit
                        </Button>
                    </Form>
                </div>
            </header>
        </div>
    );
}

export default CompanyLogin;
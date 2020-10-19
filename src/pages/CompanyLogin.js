import React from 'react';
import '../App.css';
import logo from '../logo.svg';
import { ESPIPE } from 'constants';
import { CookieStorage } from "cookie-storage";
import { Button, Container, Form } from 'react-bootstrap';
const CompanyLogin = ({ history }) => {

    const [userEmail, setUserEmail] = React.useState("")
    const [pwd, setUserPwd] = React.useState("")
    ////////////////////////////////////////////////////////
    const sumbitLogin = React.useCallback((userEmail, pwd) => {
        const data = {
            email: userEmail,
            password: pwd,
        }
        console.log(JSON.stringify(data))
        fetch('http://localhost:3001/user/login', {
            // mode: 'cors',
            method: 'POST',
            body: JSON.stringify(data),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',

                // Cookie: 'connect.sid=s%3AloCrOja46Nchf97zoGprirRZBZzciRxA.5v0bt7qq%2Bdufb78G5l4VLi1qrtDO2%2BC71kJQWdqv8Uw'
            }

        }).then(resp => {
            console.log(resp.headers);
            console.log(resp)
            return resp.json()
            // return resp.json();
        }).then(data => {
            const cookieStorage = new CookieStorage();
            console.log(cookieStorage.getItem('connect.sid'));
        })
    }, [])

    const sample = () => {
        const cookieStorage = new CookieStorage();
        const sid = cookieStorage.getItem('connect.sid');
        fetch('http://localhost:3001/user/find', {
            mode: 'cors',
            method: "GET",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            }
        }).then(resp => resp.json()).then(data => { console.log(data) })
    }


    return (
        <div className="App">
            <button onClick={e => sample()} >sample</button>
            <div className="AppAll">
                <header className="AppHeader">
                    <h1>Login</h1>
                    <h2>로그인하세요!</h2>
                    <hr></hr>
                </header>
                <div className="AppBody">
                    <Container>
                        <Form>
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
                            <Button variant="primary" type="submit" href="./CompanyLoginCompleted">
                                Submit
                        </Button>
                            <Button variant="primary" onClick={
                                (e) => {
                                    e.preventDefault();
                                    sumbitLogin(userEmail, pwd)
                                }
                            } >
                                Submit
                        </Button>
                        </Form>
                    </Container>
                </div>

            </div>
        </div>
    );
}

export default CompanyLogin;
import React from 'react';
import '../App.css';
import logo from '../logo.svg';
import { Button, Card, Nav, Accordion, Container } from 'react-bootstrap';
const Faq = ({ history }) => {
    return (
        <div className="App">
            <div className="AppAll">
                <header className="AppHeader">
                    <div>
                        고객센터
                    </div>
                </header>
                <div className="FaqBody">
                    <Container>
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    Click me!
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>Hello! I'm the body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Container>
                </div>
                <div className="FaqBody">
                    <Container>
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    Click me!
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>Hello! I'm the body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default Faq;
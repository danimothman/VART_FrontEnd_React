import React from 'react';
import '../App.css';
import logo from '../logo.svg';
import { Button, Card } from 'react-bootstrap';
const Service = ({ history }) => {
    return (
        <div className="App">
            <div className="AppAll">
                <header className="AppHeader">
                    <div>
                        서비스
                    </div>
                </header>
                <div className="AppBody">
                    <div className="ServiceForm">
                        <tr>
                            <td><Card>죄측</Card></td>
                            <td><Card>최근 공시</Card></td>
                            <td><Card>우측</Card></td>
                        </tr>
                        <tr>
                            <td>
                                <Card className="ServiceCardForm">
                                    <Card.Img variant="top" src="../images/kakao.jpg" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                    </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </td>
                            <td>
                                <Card className="ServiceCardForm">
                                    <Card.Img variant="top" src="../images/kakao.jpg" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                    </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </td>
                            <td>
                                <Card className="ServiceCardForm">
                                    <Card.Img variant="top" src="../images/kakao.jpg" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                    </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </td>
                        </tr>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Service;
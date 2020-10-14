import React from 'react';
import '../App.css';
import logo from '../logo.svg';
import { Button, Card } from 'react-bootstrap';
const About = ({ history }) => {
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <div>소개</div>
                    <div>저희 회사는 무결성 공시정보 개시를 목적으로 추구합니다.</div>

                </div>
                <div>
                    <div>서비스소개</div>
                    <div>블록체인을 이용힌 투명한 가상자산 공시 플랫폼</div>
                </div>
                <div>
                    <tr>
                        <td>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="../images/kakao.jpg" />
                                <Card.Body>
                                    <Card.Title>정유진</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </td>
                        <td>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="../images/kakao.jpg" />
                                <Card.Body>
                                    <Card.Title>이상호</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </td>
                        <td>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="../images/kakao.jpg" />
                                <Card.Body>
                                    <Card.Title>김환국</Card.Title>
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

            </header>
        </div>
    );
}

export default About;
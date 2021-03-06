import React from 'react';
import '../App.css';
import { Button, Card, Container } from 'react-bootstrap';
const About = ({ history }) => {
    return (
        <div className="App">
            <header className="app-header">
                <div>

                    <div>
                        <div>소개</div>
                        <div>저희 회사는 무결성 공시정보 개시를 목적으로 추구합니다.</div>

                    </div>
                    <div>
                        <div>서비스소개</div>
                        <div>블록체인을 이용힌 투명한 가상자산 공시 플랫폼</div>
                    </div>
                </div>
            </header>
            <div className="app-body">
                <Container>
                    <tr>
                        <td>
                            <Card className="about-form">
                                <Card.Img variant="top" src="../images/kakao.jpg" />
                                <Card.Body>
                                    <Card.Title>정유진</Card.Title>
                                    <Card.Text>
                                        블록체인 전자공시시스템 VART 개발 백 엔드 담당 조장
                                        </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </td>
                        <td>
                            <Card className="about-form">
                                <Card.Img variant="top" src="../images/kakao.jpg" />
                                <Card.Body>
                                    <Card.Title>이상호</Card.Title>
                                    <Card.Text>
                                        블록체인 전자공시시스템 VART 개발 하이퍼 레저 담당 팀원
                                        </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </td>
                        <td>
                            <Card className="about-form">
                                <Card.Img variant="top" src="../images/kakao.jpg" />
                                <Card.Body>
                                    <Card.Title>김환국</Card.Title>
                                    <Card.Text>
                                        블록체인 전자공시시스템 VART 개발 프론트 엔드 담당 팀원
                                        </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </td>
                    </tr>
                </Container>
            </div>

        </div>
    );
}

export default About;
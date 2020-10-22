// useRef를 활용한 Component안에 변수 만들기
import React, { useEffect } from 'react'
import { Navbar, Container, Button, FormControl, Nav, Form, NavDropdown, Table, Col, Row } from 'react-bootstrap';
import '../../App.css'
import './selectCompanyUser.css'
var User = ({ user, onToggle, onRemove }) => {
    useEffect(() => {
        console.log('user값이 나타남')
        console.log(user)
        // return ()=>{
        //     console.log('user 값이 바뀌기 전')
        //     console.log(user)
        // }
    }, [])

    return (
        <div>
            <Container className="App-background-color">
                <div className="scu-body">
                    <Form.Group as={Row} controlId="">
                        <Form.Label column sm={2} className="ccu-form-label">계정정보</Form.Label>
                        <Col sm={10}>
                            <Form.Text>

                            </Form.Text>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="">
                        <Form.Label column sm={2} className="scu-form-label-text">아이디 값</Form.Label>
                        <Col sm={10}>
                            <Form.Text Key={user.id} style={{}}>{user.id}</Form.Text>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="">
                        <Form.Label column sm={2} className="scu-form-label-text">계정명</Form.Label>
                        <Col sm={10}>
                            <Form.Text><b style={{ cursor: 'pointer', color: user.active ? 'green' : 'blue' }} onClick={() => onToggle(user.id)}>{user.username}</b></Form.Text>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="">
                        <Form.Label column sm={2} className="scu-form-label-text">이메일</Form.Label>
                        <Col sm={10}>
                            <Form.Text>{user.email}</Form.Text>
                        </Col>
                    </Form.Group>


                </div>

                <div className="scu-body">
                    <Form.Group as={Row} controlId="">
                        <Form.Label column sm={2} className="ccu-form-label">토큰정보</Form.Label>
                        <Col sm={10}>
                            <Form.Text>

                            </Form.Text>
                        </Col>
                    </Form.Group>
                    {/* <Form.Group as={Row} controlId="">
                <Form.Label column sm={2} className="scu-form-label-text">토큰 로고</Form.Label>
                <Col sm={10}>
                    <Form.Text>{user.tokenLogo}</Form.Text>
                </Col>
                </Form.Group> */}
                    <Form.Group as={Row} controlId="">
                        <Form.Label column sm={2} className="scu-form-label-text">토큰 이름</Form.Label>
                        <Col sm={10}>
                            <Form.Text>{user.tokenName}</Form.Text>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="">
                        <Form.Label column sm={2} className="scu-form-label-text">프로젝트 종류</Form.Label>
                        <Col sm={10}>
                            <Form.Text>{user.projectType}</Form.Text>
                        </Col>
                    </Form.Group>
                </div>

                <div className="scu-body">
                    <Form.Group as={Row} controlId="">
                        <Form.Label column sm={2} className="ccu-form-label">공시정보</Form.Label>
                        <Col sm={10}>
                            <Form.Text>

                            </Form.Text>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="">
                        <Form.Label column sm={2} className="scu-form-label-text">회사 이름</Form.Label>
                        <Col sm={10}>
                            <Form.Text>{user.companyName}</Form.Text>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="">
                        <Form.Label column sm={2} className="scu-form-label-text">회사 설립일</Form.Label>
                        <Col sm={10}>
                            <Form.Text>{user.companyEstablishment}</Form.Text>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="">
                        <Form.Label column sm={2} className="scu-form-label-text">회사 위치</Form.Label>
                        <Col sm={10}>
                            <Form.Text>{user.companyLocation}</Form.Text>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="">
                        <Form.Label column sm={2} className="scu-form-label-text">법인 관할자</Form.Label>
                        <Col sm={10}>
                            <Form.Text>{user.stateJurisdiction}</Form.Text>
                        </Col>
                    </Form.Group>
                </div>


                <div className="scu-body">
                    <Form.Group as={Row} controlId="">
                        <Form.Label column sm={2} className="ccu-form-label">경영진</Form.Label>
                        <Col sm={10}>
                            <Form.Text>

                            </Form.Text>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="">
                        <Form.Label column sm={2} className="scu-form-label-text">경영진 이름</Form.Label>
                        <Col sm={10}>
                            <Form.Text>{user.memberName}</Form.Text>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="">
                        <Form.Label column sm={2} className="scu-form-label-text">경영진 학력</Form.Label>
                        <Col sm={10}>
                            <Form.Text>{user.memberEducation}</Form.Text>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="">
                        <Form.Label column sm={2} className="scu-form-label-text">경영진 경력</Form.Label>
                        <Col sm={10}>
                            <Form.Text>{user.memberExperience}</Form.Text>
                        </Col>
                    </Form.Group>
                </div>

                <div className="scu-body">
                    <Form.Group as={Row} controlId="">
                        <Form.Label column sm={2} className="ccu-form-label">개발자리더</Form.Label>
                        <Col sm={10}>
                            <Form.Text>

                            </Form.Text>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="">
                        <Form.Label column sm={2} className="scu-form-label-text">개발자 이름</Form.Label>
                        <Col sm={10}>
                            <Form.Text>{user.developerLeaderName}</Form.Text>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="">
                        <Form.Label column sm={2} className="scu-form-label-text">개발자 학력</Form.Label>
                        <Col sm={10}>
                            <Form.Text>{user.developerLeaderEducation}</Form.Text>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="">
                        <Form.Label column sm={2} className="scu-form-label-text">개발자 경력</Form.Label>
                        <Col sm={10}>
                            <Form.Text>{user.developerLeaderExperience}</Form.Text>
                        </Col>
                    </Form.Group>
                </div>
                <Button variant="Dark" onClick={() => onRemove(user.id)} >삭제</Button>
            </Container>
        </div>


    )
}
function selectCompanyUser({ users, onToggle, onRemove }) {
    return (
        <div>
            {users.map(user => (
                <User user={user} onRemove={onRemove} onToggle={onToggle} />
            ))
            }
        </div>
    )
}

export default selectCompanyUser;



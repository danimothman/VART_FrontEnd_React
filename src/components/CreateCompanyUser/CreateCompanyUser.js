import React from 'react'
import { Navbar, Button, FormControl, Nav, Form, Col, Row, Container } from 'react-bootstrap';
import './CreateCompanyUser.css'
function CreateCompanyUser({
    user, useremail,
    // tokenlogo, 
    tokenname, projecttype,
    companyname, companyestablishment, companylocation, statejurisdiction,
    membername, membereducation, memberexperience,
    developerleadername, developerleadereducation, developerleaderexperience,
    // mkname, mklocation, mkcpdate, mkfounder,
    // milestone, movenum, mywallet,
    onChange, onCreate
}) {
    return (
        <div>
            {/* <div aria-disabled>
                <Form.Group as={Row} controlId="" className="ccu-body-title">
                    <Form.Label column sm={3} className="">계정정보</Form.Label>
                    <Col sm={9}>
                        <Form.Text>

                        </Form.Text>
                    </Col>
                </Form.Group>
                <div className="ccu-body">
                    <Form.Group as={Row} controlId="formBasicEmail" className="">
                        <Form.Label column sm={3} className="ccu-form-label">계정명</Form.Label>
                        <Col sm={9}>
                            <Form.Control
                                name="username"
                                placeholder="계정명"
                                onChange={onChange}
                                value={user}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="">
                        <Form.Label column sm={3} className="ccu-form-label">이메일</Form.Label>
                        <Col sm={9}>
                            <Form.Control
                                name="email"
                                placeholder="이메일"
                                onChange={onChange}
                                value={useremail}
                            />
                        </Col>
                    </Form.Group>
                </div>
            </div> */}


            <div>
                <Form.Group as={Row} controlId="" className="ccu-body-title">
                    <Form.Label column sm={3} className="">토큰정보</Form.Label>
                    <Col sm={9}>
                        <Form.Text>

                        </Form.Text>
                    </Col>
                </Form.Group>
            </div>
            <div className="ccu-body">
                {/* <Form.Group as={Row} controlId="">
                    <Form.Label column sm={3} className="ccu-form-label">토큰로고</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="tokenLogo"
                            placeholder="토큰 로고"
                            onChange={onChange}
                            value={tokenlogo}
                        />
                    </Col>
                </Form.Group> */}
                <Form.Group as={Row} controlId="">
                    <Form.Label column sm={3} className="ccu-form-label">토큰이름</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="tokenName"
                            placeholder="토큰이름"
                            onChange={onChange}
                            value={tokenname}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="">
                    <Form.Label column sm={3} className="ccu-form-label">프로젝트종류</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="projectType"
                            placeholder="프로젝트종류"
                            onChange={onChange}
                            value={projecttype}
                        />
                    </Col>
                </Form.Group>
            </div>

            <div>
                <Form.Group as={Row} controlId="" className="ccu-body-title">
                    <Form.Label column sm={3} className="">공시정보</Form.Label>
                    <Col sm={9}>
                        <Form.Text>

                        </Form.Text>
                    </Col>
                </Form.Group>
            </div>
            <div className="ccu-body">
                <Form.Group as={Row} controlId="">
                    <Form.Label column sm={3} className="ccu-form-label">회사이름</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="companyName"
                            placeholder="회사이름"
                            onChange={onChange}
                            value={companyname}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="">
                    <Form.Label column sm={3} className="ccu-form-label">회사설립일</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="companyEstablishment"
                            placeholder="회사설립일"
                            onChange={onChange}
                            value={companyestablishment}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="">
                    <Form.Label column sm={3} className="ccu-form-label">회사위치</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="companyLocation"
                            placeholder="회사위치"
                            onChange={onChange}
                            value={companylocation}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="">
                    <Form.Label column sm={3} className="ccu-form-label">법인 관할자 위치</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="stateJurisdiction"
                            placeholder="법인 관할자(Corporate jurisdiction) 위치"
                            onChange={onChange}
                            value={statejurisdiction}
                        />
                    </Col>
                </Form.Group>
            </div>

            <div>
                <Form.Group as={Row} controlId="" className="ccu-body-title">
                    <Form.Label column sm={3} className="">경영진</Form.Label>
                    <Col sm={9}>
                        <Form.Text>

                        </Form.Text>
                    </Col>
                </Form.Group>
            </div>
            <div className="ccu-body">
                <Form.Group as={Row} controlId="">
                    <Form.Label column sm={3} className="ccu-form-label">경영진이름</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="memberName"
                            placeholder="경영진이름"
                            onChange={onChange}
                            value={membername}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="">
                    <Form.Label column sm={3} className="ccu-form-label">경영진학력</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="memberEducation"
                            placeholder="경영진학력"
                            onChange={onChange}
                            value={membereducation}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="">
                    <Form.Label column sm={3} className="ccu-form-label">경영진경력</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="memberExperience"
                            placeholder="경영진경력"
                            onChange={onChange}
                            value={memberexperience}
                        />
                    </Col>
                </Form.Group>
            </div>

            <div>
                <Form.Group as={Row} controlId="" className="ccu-body-title">
                    <Form.Label column sm={3} className="">개발자리더</Form.Label>
                    <Col sm={9}>
                        <Form.Text>

                        </Form.Text>
                    </Col>
                </Form.Group>
            </div>
            <div className="ccu-body">
                <Form.Group as={Row} controlId="">
                    <Form.Label column sm={3} className="ccu-form-label">개발자이름</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="developerLeaderName"
                            placeholder="개발자이름"
                            onChange={onChange}
                            value={developerleadername}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="">
                    <Form.Label column sm={3} className="ccu-form-label">개발자학력</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="developerLeaderEducation"
                            placeholder="개발자학력"
                            onChange={onChange}
                            value={developerleadereducation}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="">
                    <Form.Label column sm={3} className="ccu-form-label">개발자경력</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="developerLeaderExperience"
                            placeholder="개발자경력"
                            onChange={onChange}
                            value={developerleaderexperience}
                        />
                    </Col>
                </Form.Group>
            </div>
            <div>
                <Button className="ccu-form-button" onClick={onCreate} >공시 정보 등록</Button>
            </div>
        </div>
    )
}

export default CreateCompanyUser;

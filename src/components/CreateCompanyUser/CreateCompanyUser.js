import React from 'react'
// import { onFocus } from 'react-dom'
import { Navbar, Button, FormControl, Nav, Form, Col, Row, Container } from 'react-bootstrap';
import './CreateCompanyUser.css'


function CreateCompanyUser({
    // tokenlogo, 
    tokenName, projectType,
    companyName, establishmentDate, location, jurisdiction,
    executiveName, executiveEducation, executiveExperience,
    developerleaderName, developerleaderEducation, developerleaderExperience,
    onChange, onCreate,
}) {
    return (
        <div className="">
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
                            placeholder="토큰로고"
                            onChange={onChange}
                            value={tokenlogo}
                            className="ccu-form-input"
                            onFocus={(e) => {
                                e.target.placeholder = ''
                            }}
                            onBlur={e => {
                                e.target.placeholder = '토큰로고'
                            }}                            
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
                            value={tokenName}
                            className="ccu-form-input"
                            onFocus={(e) => {
                                e.target.placeholder = ''
                            }}
                            onBlur={e => {
                                e.target.placeholder = '토큰이름'
                            }}
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
                            value={projectType}
                            className="ccu-form-input"
                            onFocus={(e) => {
                                e.target.placeholder = ''
                            }}
                            onBlur={e => {
                                e.target.placeholder = '프로젝트종류'
                            }}
                        />
                    </Col>
                </Form.Group>
            </div>

            <div>
                <Form.Group as={Row} controlId="" className="ccu-body-title">
                    <Form.Label column sm={3} className="">회사정보</Form.Label>
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
                            value={companyName}
                            className="ccu-form-input"
                            onFocus={(e) => {
                                e.target.placeholder = ''
                            }}
                            onBlur={e => {
                                e.target.placeholder = '회사이름'
                            }}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="">
                    <Form.Label column sm={3} className="ccu-form-label">회사설립일</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="establishmentDate"
                            placeholder="회사설립일"
                            onChange={onChange}
                            value={establishmentDate}
                            className="ccu-form-input"
                            onFocus={(e) => {
                                e.target.placeholder = ''
                            }}
                            onBlur={e => {
                                e.target.placeholder = '회사설립일'
                            }}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="">
                    <Form.Label column sm={3} className="ccu-form-label">회사위치</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="location"
                            placeholder="회사위치"
                            onChange={onChange}
                            value={location}
                            className="ccu-form-input"
                            onFocus={(e) => {
                                e.target.placeholder = ''
                            }}
                            onBlur={e => {
                                e.target.placeholder = '회사위치'
                            }}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="">
                    <Form.Label column sm={3} className="ccu-form-label">법인 관할자 위치</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="jurisdiction"
                            placeholder="법인 관할자(Corporate jurisdiction) 위치"
                            onChange={onChange}
                            value={jurisdiction}
                            className="ccu-form-input"
                            onFocus={(e) => {
                                e.target.placeholder = ''
                            }}
                            onBlur={e => {
                                e.target.placeholder = '법인 관할자 위치'
                            }}
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
                            name="executiveName"
                            placeholder="경영진이름"
                            onChange={onChange}
                            value={executiveName}
                            className="ccu-form-input"
                            onFocus={(e) => {
                                e.target.placeholder = ''
                            }}
                            onBlur={e => {
                                e.target.placeholder = '경영진이름'
                            }}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="">
                    <Form.Label column sm={3} className="ccu-form-label">경영진학력</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="executiveEducation"
                            placeholder="경영진학력"
                            onChange={onChange}
                            value={executiveEducation}
                            className="ccu-form-input"
                            onFocus={(e) => {
                                e.target.placeholder = ''
                            }}
                            onBlur={e => {
                                e.target.placeholder = '경영진학력'
                            }}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="">
                    <Form.Label column sm={3} className="ccu-form-label">경영진경력</Form.Label>
                    <Col sm={9}>
                        <Form.Control

                            name="executiveExperience"
                            placeholder="경영진경력"
                            onChange={onChange}
                            value={executiveExperience}
                            className="ccu-form-input"
                            onFocus={(e) => {
                                e.target.placeholder = ''
                            }}
                            onBlur={e => {
                                e.target.placeholder = '경영진경력'
                            }}
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
                            name="developerleaderName"
                            placeholder="개발자이름"
                            onChange={onChange}
                            value={developerleaderName}
                            className="ccu-form-input"
                            onFocus={(e) => {
                                e.target.placeholder = ''
                            }}
                            onBlur={e => {
                                e.target.placeholder = '개발자이름'
                            }}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="">
                    <Form.Label column sm={3} className="ccu-form-label">개발자학력</Form.Label>
                    <Col sm={9}>

                        <Form.Control
                            name="developerleaderEducation"
                            placeholder="개발자학력"
                            onChange={onChange}
                            value={developerleaderEducation}
                            className="ccu-form-input"
                            onFocus={(e) => {
                                e.target.placeholder = ''
                            }}
                            onBlur={e => {
                                e.target.placeholder = '개발자학력'
                            }}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="">
                    <Form.Label column sm={3} className="ccu-form-label">개발자경력</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="developerleaderExperience"
                            placeholder="개발자경력"
                            onChange={onChange}
                            value={developerleaderExperience}
                            className="ccu-form-input"
                            onFocus={(e) => {
                                e.target.placeholder = ''
                            }}
                            onBlur={e => {
                                e.target.placeholder = '개발자경력'
                            }}
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

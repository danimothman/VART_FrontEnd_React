import React from 'react'
import { Navbar, Button, FormControl, Nav, Form } from 'react-bootstrap';
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
            <form>
                <br></br>
                <div>

                    <Form>
                        <Form.Label>계정정보</Form.Label>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>계정명</Form.Label>
                            <Form.Control
                                name="username"
                                placeholder="계정명"
                                onChange={onChange}
                                value={user}
                            />
                            <Form.Label>이메일</Form.Label>
                            <Form.Control
                                name="email"
                                placeholder="이메일"
                                onChange={onChange}
                                value={useremail}
                            />
                        </Form.Group>
                    </Form>
                    <Form>
                        <Form.Label>토큰정보</Form.Label>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            {/* <Form.Label>토큰 로고</Form.Label>
                            <Form.Control
                                name="tokenLogo"
                                placeholder="토큰 로고"
                                onChange={onChange}
                                value={tokenlogo}
                            /> */}
                            <Form.Label>토큰 이름</Form.Label>
                            <Form.Control
                                name="tokenName"
                                placeholder="토큰 이름"
                                onChange={onChange}
                                value={tokenname}
                            />
                            <Form.Label>프로젝트 종류</Form.Label>
                            <Form.Control
                                name="projectType"
                                placeholder="프로젝트 종류"
                                onChange={onChange}
                                value={projecttype}
                            />
                        </Form.Group>
                    </Form>
                    <Form>
                        <Form.Label>공시정보</Form.Label>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>회사이름</Form.Label>
                            <Form.Control
                                name="companyName"
                                placeholder="회사이름"
                                onChange={onChange}
                                value={companyname}
                            />
                            <Form.Label>회사 설립일</Form.Label>
                            <Form.Control
                                name="companyEstablishment"
                                placeholder="회사 설립일"
                                onChange={onChange}
                                value={companyestablishment}
                            />
                            <Form.Label>회사 위치</Form.Label>
                            <Form.Control
                                name="companyLocation"
                                placeholder="회사 위치"
                                onChange={onChange}
                                value={companylocation}
                            />
                            <Form.Label>법인 관할자(Corporate jurisdiction) 위치</Form.Label>
                            <Form.Control
                                name="stateJurisdiction"
                                placeholder="법인 관할자(Corporate jurisdiction) 위치"
                                onChange={onChange}
                                value={statejurisdiction}
                            />
                        </Form.Group>
                    </Form>
                    <Form>
                        <Form.Label>경영진</Form.Label>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>경영진 이름</Form.Label>
                            <Form.Control
                                name="memberName"
                                placeholder="경영진 이름"
                                onChange={onChange}
                                value={membername}
                            />
                            <Form.Label>경영진 학력</Form.Label>
                            <Form.Control
                                name="memberEducation"
                                placeholder="경영진 학력"
                                onChange={onChange}
                                value={membereducation}
                            />
                            <Form.Label>경영진 경력</Form.Label>
                            <Form.Control
                                name="memberExperience"
                                placeholder="경영진 경력"
                                onChange={onChange}
                                value={memberexperience}
                            />
                        </Form.Group>
                    </Form>
                    <Form>
                        <Form.Label>개발자리더</Form.Label>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>개발자 이름</Form.Label>
                            <Form.Control
                                name="developerLeaderName"
                                placeholder="개발자 이름"
                                onChange={onChange}
                                value={developerleadername}
                            />
                            <Form.Label>개발자 학력</Form.Label>
                            <Form.Control
                                name="developerLeaderEducation"
                                placeholder="개발자 학력"
                                onChange={onChange}
                                value={developerleadereducation}
                            />
                            <Form.Label>개발자 경력</Form.Label>
                            <Form.Control
                                name="developerLeaderExperience"
                                placeholder="개발자 경력"
                                onChange={onChange}
                                value={developerleaderexperience}
                            />
                        </Form.Group>
                    </Form>
                    {/* <Form>
                        <Form.Label>Onchain</Form.Label>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>마켓 이름</Form.Label>
                            <Form.Control
                                name="mkName"
                                placeholder="마켓 이름"
                                onChange={onChange}
                                value={mkname}
                            />
                            <Form.Label>마켓 위치</Form.Label>
                            <Form.Control
                                name="mkLocation"
                                placeholder="마켓 위치"
                                onChange={onChange}
                                value={mklocation}
                            />
                            <Form.Label>마켓 cpdate</Form.Label>
                            <Form.Control
                                name="mkCpdate"
                                placeholder="마켓 cpdate"
                                onChange={onChange}
                                value={mkcpdate}
                            />
                            <Form.Label>마켓 설립자</Form.Label>
                            <Form.Control
                                name="mkFounder"
                                placeholder="마켓 설립자"
                                onChange={onChange}
                                value={mkfounder}
                            />
                        </Form.Group>
                    </Form>
                    <Form>
                        <Form.Label>지갑정보</Form.Label>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>milestone</Form.Label>
                            <Form.Control
                                name="mileStone"
                                placeholder="milestone"
                                onChange={onChange}
                                value={milestone}
                            />
                            <Form.Label>movenum</Form.Label>
                            <Form.Control
                                name="moveNum"
                                placeholder="movenum"
                                onChange={onChange}
                                value={movenum}
                            />
                            <Form.Label>wallet</Form.Label>
                            <Form.Control
                                name="myWallet"
                                placeholder="wallet"
                                onChange={onChange}
                                value={mywallet}
                            />
                        </Form.Group>
                    </Form> */}
                </div>
                <br></br>
                <button onClick={onCreate} >공시 정보 등록</button>
            </form>
            {/* <button onClick={onCreate} >공시 정보 등록</button> */}
        </div>
    )
}

export default CreateCompanyUser;

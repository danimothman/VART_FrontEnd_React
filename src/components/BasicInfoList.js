// useRef를 활용한 Component안에 변수 만들기
import React, { useEffect } from 'react'
import { Navbar, Container, Button, FormControl, Nav, Form, NavDropdown, Table } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import '../App.css'

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
        <tr className="table-font">
            <td Key={user.id} style={{}}>{user.id}</td>
            <td><b style={{ cursor: 'pointer', color: user.active ? 'green' : 'blue' }} onClick={() => onToggle(user.id)}>{user.username}</b></td>
            <td> {user.email}</td>
            {/* <td> {user.tokenLogo}</td> */}
            <td> <Nav.Link href="/ProjectItem">{user.tokenName}</Nav.Link></td>
            <td> {user.projectType}</td>
            <td> {user.companyName}</td>
            <td> {user.companyEstablishment}</td>
            <td> {user.companyLocation}</td>
            <td> {user.stateJurisdiction}</td>
            {/* <td> {user.memberName}</td>
            <td> {user.memberEducation}</td>
            <td> {user.memberExperience}</td>
            <td> {user.developerLeaderName}</td>
            <td> {user.developerLeaderEducation}</td>
            <td> {user.developerLeaderExperience}</td> */}
            {/* <td> {user.mkName}</td>
                <td> {user.mkLocation}</td>
                <td> {user.mkCpdate}</td>
                <td> {user.mkFounder}</td>
                <td> {user.mileStone}</td>
                <td> {user.moveNum}</td>
                <td> {user.myWallet}</td> */}
            <Button variant="Dark" onClick={() => onRemove(user.id)} >삭제</Button>
        </tr>

    )
}
function BasicInfoList({ users, onToggle, onRemove }) {
    return (
        <div>
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>순번</th>
                        <th>이름</th>
                        <th>이메일</th>
                        <th>토큰 이름</th>

                        <th>프로젝트 종류</th>

                        <th>회사 이름</th>
                        <th>회사 설립일</th>
                        <th>회사 위치</th>
                        <th>법인 관할자(Corporate jurisdiction)</th>
                        {/* <th>경영진 이름</th>
                        <th>경영진 학력</th>
                        <th>경영진 경력</th>
                        <th>개발자 이름</th>
                        <th>개발자 학력</th>
                        <th>개발자 경력</th> */}
                        <th>삭제 여부</th>

                    </tr>
                </thead>
                < tbody >
                    {users.map(user => (
                        <User user={user} onRemove={onRemove} onToggle={onToggle} />
                    ))
                    }

                </ tbody >
            </Table >
        </div>
    )
}

export default BasicInfoList;



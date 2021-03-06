// useRef를 활용한 Component안에 변수 만들기
import React, { useEffect } from 'react'
import { Navbar, Container, Button, FormControl, Nav, Form, NavDropdown, Table } from 'react-bootstrap';
import '../../App.css'
import './BasicInfoList.css'

const User = ({ user }) => {
    console.log(user)
    return (
        <tr className="table-font">
            <td> <Nav.Link className="bil-form" href="/ProjectItem">{user.Token.name}</Nav.Link></td>
            <td className="bil-form">{user.name}</td>
            <td className="bil-form">{user.establishmentdate}</td>
        </tr>
    )
}
function BasicInfoList({ users }) {
    console.log(users)
    return (
        <div>
            <Table responsive="sm">
                <thead className="table-font-title">
                    <tr>
                        <th>토큰 이름</th>
                        <th>회사 이름</th>
                        <th>회사 설립일</th>
                    </tr>
                </thead>
                < tbody>
                    {users.map((user, name) => (
                        <User user={user} key={user.id} />
                    ))
                    }
                </ tbody >
            </Table >
        </div>
    )
}

export default BasicInfoList;



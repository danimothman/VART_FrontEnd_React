import React, { useState, useMemo, useCallback, useRef } from 'react';
import { Navbar, Container, Button, FormControl, Nav, Form, NavDropdown, Table } from 'react-bootstrap';
//회사 가짜 데이터 공시정보 입력경로
import { ccuData } from '../data/ccuData';
//공시 정보 리스트 출력 경로
import SelectCompanyUser from '../components/selectCompanyUser/selectCompanyUser';
//공시정보 작성 경로
import CreateCompanyUser from '../components/CreateCompanyUser';
// import { Link } from 'react-router-dom';
import '../../App.css'
import './BasicInfoList.css'



// onFocus={(e) => {
//     e.target.placeholder = ''
// }}
// onBlur={e => {
//     e.target.placeholder = '토큰이름'
// }}

////참조용
// var User = ({ user, onToggle, onRemove }) => {
//     useEffect(() => {
//         console.log('user값이 나타남')
//         console.log(user)
//     }, [])
//     return (
//         <tr className="table-font">
//             <td Key={user.id} style={{}} className=""> <Nav.Item className="bil-form">{user.id}</Nav.Item></td>
//             <td> <Nav.Link className="bil-form" href="/ProjectItem">{user.tokenName}</Nav.Link></td>
//             <td> <Nav.Item className="bil-form">{user.companyName}</Nav.Item></td>
//             <td> <Nav.Item className="bil-form">{user.companyEstablishment}</Nav.Item></td>
//         </tr>
//     )
// }
function ccuJs({ users, onToggle, onRemove }) {
    return (
        <div>
            {/* 참조용 */}
            {/* 
                <Table responsive="sm">
                <thead className="table-font-title">
                    <tr>
                        <th>순번</th>
                        <th>토큰 이름</th>
                        <th>회사 이름</th>
                        <th>회사 설립일</th>
                    </tr>
                </thead>
                < tbody>
                    {users.map(user => (
                        <User user={user} onRemove={onRemove} onToggle={onToggle} />
                    ))
                    }
                </ tbody >
            </Table > */}
        </div>
    )
}
export default ccuJs;
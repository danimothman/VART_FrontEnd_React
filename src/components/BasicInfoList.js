// useRef를 활용한 Component안에 변수 만들기
import React, { useEffect } from 'react'

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
        <li Key={user.id}><b style={{ cursor: 'pointer', color: user.active ? 'green' : 'blue' }} onClick={() => onToggle(user.id)}>
            {user.username} : </b>
            <span> {user.email}</span>
            <span> {user.tokenlogo}</span>
            <span> {user.tokenname}</span>
            <span> {user.projecttype}</span>
            <span> {user.companyname}</span>
            <span> {user.companyestablishment}</span>
            <span> {user.companylocation}</span>
            <span> {user.statejurisdiction}</span>
            <span> {user.membername}</span>
            <span> {user.membereducation}</span>
            <span> {user.memberexperience}</span>
            <span> {user.developerleadername}</span>
            <span> {user.developerleadereducation}</span>
            <span> {user.developerleaderexperience}</span>
            <span> {user.mkname}</span>
            <span> {user.mklocation}</span>
            <span> {user.mkcpdate}</span>
            <span> {user.mkfounder}</span>
            <span> {user.milestone}</span>
            <span> {user.movenum}</span>
            <span> {user.mywallet}</span>
            <button onClick={() => onRemove(user.id)} >삭제</button>
        </li>

    )
}


function BasicInfoList({ users, onToggle, onRemove }) {
    return (
        <div>
            <ul>
                {users.map(user => (
                    <User user={user} onRemove={onRemove} onToggle={onToggle} />
                ))
                }
            </ul>
        </div>
    )
}

export default BasicInfoList;



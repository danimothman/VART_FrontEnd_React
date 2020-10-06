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
            <span> {user.tokenLogo}</span>
            <span> {user.tokenName}</span>
            <span> {user.projectType}</span>
            <span> {user.companyName}</span>
            <span> {user.companyEstablishment}</span>
            <span> {user.companyLocation}</span>
            <span> {user.stateJurisdiction}</span>
            <span> {user.memberName}</span>
            <span> {user.memberEducation}</span>
            <span> {user.memberExperience}</span>
            <span> {user.developerLeaderName}</span>
            <span> {user.developerLeaderEducation}</span>
            <span> {user.developerLeaderExperience}</span>
            <span> {user.mkName}</span>
            <span> {user.mkLocation}</span>
            <span> {user.mkCpdate}</span>
            <span> {user.mkFounder}</span>
            <span> {user.mileStone}</span>
            <span> {user.moveNum}</span>
            <span> {user.myWallet}</span>
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



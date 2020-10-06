import React, { useState, useMemo, useCallback, useRef } from 'react'

//회사 가짜 데이터 공시정보 입력경로
import { CompanyData } from './../data/companyData'
import BasicInfoList from '../components/BasicInfoList'
import CreateCompanyUser from '../components/CreateCompanyUser'

function ProjectItemScreen() {
    const countActiveUsers = (users) => {
        console.log('활성화 사용자 수를 체크 하는 중')
        return users.filter(user => user.active).length;
    }
    const [users, setUsers] = useState(CompanyData)

    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        tokenlogo: '',
        tokenname: '',
        projecttype: '',
        companyname: '',
        companyestablishment: '',
        companylocation: '',
        statejurisdiction: '',
        membername: '',
        membereducation: '',
        memberexperience: '',
        developerleadername: '',
        developerleadereducation: '',
        developerleaderexperience: '',
        mkname: '',
        mklocation: '',
        mkcpdate: '',
        mkfounder: '',
        milestone: '',
        movenum: '',
        mywallet: ''
    })

    const { username, email,
        tokenlogo, tokenname, projecttype,
        companyname, companyestablishment, companylocation, statejurisdiction,
        membername, membereducation, memberexperience,
        developerleadername, developerleadereducation, developerleaderexperience,
        mkname, mklocation, mkcpdate, mkfounder,
        milestone, movenum, mywallet
    } = inputs
    const nextId = useRef(4)

    const onChangeInput = (e) => {
        // console.log(e.target)
        const { name, value } = e.target
        setInputs({
            ...inputs,
            [name]: value
        });
    }
    //useCallback 함수를 지우고 쓰는 기능(※[비권장]해당하는 방법은 메모리를 지우고 다시 쓰는 방식으로 진행되서 메모리 효율이 좋은 편이 아님)
    const onCreate = useCallback(() => {
        const user = {
            id: nextId.current,
            username,
            email,
            tokenlogo, tokenname, projecttype,
            companyname, companyestablishment, companylocation, statejurisdiction,
            membername, membereducation, memberexperience,
            developerleadername, developerleadereducation, developerleaderexperience,
            mkname, mklocation, mkcpdate, mkfounder,
            milestone, movenum, mywallet
        }
        setUsers([...users, user])


        setInputs({
            username: '',
            email: '',
            tokenlogo: '',
            tokenname: '',
            projecttype: '',
            companyname: '',
            companyestablishment: '',
            companylocation: '',
            statejurisdiction: '',
            membername: '',
            membereducation: '',
            memberexperience: '',
            developerleadername: '',
            developerleadereducation: '',
            developerleaderexperience: '',
            mkname: '',
            mklocation: '',
            mkcpdate: '',
            mkfounder: '',
            milestone: '',
            movenum: '',
            mywallet: ''
        })
        nextId.current += 1
    }, [users, inputs])
    // 삭제 함수
    const onRemove = (id) => {
        console.log("delete")
        setUsers(users.filter(user => user.id !== id))
        console.log(users)
    }
    // 아이디 토글 함수
    const onToggleFunc = useCallback((id) => {
        setUsers(users.map(
            user => user.id === id ? { ...user, active: !user.active } : user
        ))
    }, [users])

    const count = useMemo(() => countActiveUsers(users), [users])
    return (
        <div>
            <CreateCompanyUser
                user={username} useremail={email}
                // tokenlogo={tokenlogo} tokenname={tokenname} projecttype={projecttype}
                // companyname={companyname} companyestablishment={companyestablishment} companylocation={companyestablishment} statejurisdiction={statejurisdiction}
                // membername={membername} membereducation={membereducation} memberexperience={memberexperience}
                // developerleadername={developerleadername} developerleadereducation={developerleadereducation} developerleaderexperience={developerleaderexperience}
                // mkname={mkname} mklocation={mklocation} mkcpdate={mkcpdate} mkfounder={mkfounder}
                // milestone={milestone} movenum={movenum} mywallet={mywallet}
                onChange={onChangeInput} onCreate={onCreate} />
            <BasicInfoList users={users} onRemove={onRemove} onToggle={onToggleFunc} />
            <div>활성자 수 : {count}</div>
        </div>
    )
}

export default ProjectItemScreen;
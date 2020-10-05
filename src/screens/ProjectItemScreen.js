import React, { useState, useMemo, useCallback, useRef } from 'react'
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
    }, [inputs])

    const onRemove = (id) => {
        setUsers(users.filter(user => user.id !== id))
    }

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
                tokenlogo={tokenlogo} tokenname={tokenname} projecttype={projecttype}
                companyname={companyname} companyestablishment={companyestablishment} companylocation={companyestablishment} statejurisdiction={statejurisdiction}
                membername={membername} membereducation={membereducation} memberexperience={memberexperience}
                developerleadername={developerleadername} developerleadereducation={developerleadereducation} developerleaderexperience={developerleaderexperience}
                mkname={mkname} mklocation={mklocation} mkcpdate={mkcpdate} mkfounder={mkfounder}
                milestone={milestone} movenum={movenum} mywallet={mywallet}
                onChange={onChangeInput} onCreate={onCreate} />
            <BasicInfoList users={users} onRemove={onRemove} onToggle={onToggleFunc} />
            <div>활성자 수 : {count}</div>
        </div>
    )
}

export default ProjectItemScreen;
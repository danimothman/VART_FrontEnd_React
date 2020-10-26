import React, { useState, useMemo, useCallback, useRef } from 'react'

//회사 가짜 데이터 공시정보 입력경로
import { CompanyData } from './../data/companyData'
//공시 정보 리스트 출력 경로
import BasicInfoList from '../components/BasicInfoList/BasicInfoList'
//공시정보 작성 경로
import CreateCompanyUser from '../components/CreateCompanyUser'
import { Container } from 'react-bootstrap'

function ProjectItemScreen() {
    const countActiveUsers = (users) => {
        console.log('활성화 사용자 수를 체크 하는 중')
        return users.filter(user => user.active).length;
    }
    const [users, setUsers] = useState(CompanyData)

    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        // tokenLogo: '',
        tokenName: '',
        projectType: '',
        companyName: '',
        companyEstablishment: '',
        companyLocation: '',
        stateJurisdiction: '',
        memberName: '',
        memberEducation: '',
        memberExperience: '',
        developerLeaderName: '',
        developerLeaderEducation: '',
        developerLeaderExperience: '',
    })

    const { username, email,
        // tokenLogo, 
        tokenName, projectType,
        companyName, companyEstablishment, companyLocation, stateJurisdiction,
        memberName, memberEducation, memberExperience,
        developerLeaderName, developerLeaderEducation, developerLeaderExperience,
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

    // 서버에 POST요청만(fetch) 보낸다.
    const onCreate = useCallback((e) => {
        e.preventDefault();
        const user = {
            id: nextId.current,
            username,
            email,
            // tokenLogo, 
            tokenName, projectType,
            companyName, companyEstablishment, companyLocation, stateJurisdiction,
            memberName, memberEducation, memberExperience,
            developerLeaderName, developerLeaderEducation, developerLeaderExperience,
        }
        setUsers([...users, user])


        setInputs({
            username: '',
            email: '',
            // tokenLogo: '',
            tokenName: '',
            projectType: '',
            companyName: '',
            companyEstablishment: '',
            companyLocation: '',
            stateJurisdiction: '',
            memberName: '',
            memberEducation: '',
            memberExperience: '',
            developerLeaderName: '',
            developerLeaderEducation: '',
            developerLeaderExperience: '',
        })
        //==========JSON변환 코드s==========
        const data = {
            basicinfo: {
                companyname: companyName,
                establishment: companyEstablishment,
                location: companyLocation,
                statejurisdiction: stateJurisdiction
            },
            tokenprofile: {
                tokenname: tokenName,
                projecttype: projectType
            },
            executives: {
                name: memberName,
                education: memberEducation,
                experience: memberExperience
            },
            developerleaders: {
                name: developerLeaderName,
                education: developerLeaderEducation,
                experience: developerLeaderExperience
            }

        }
        fetch('https://localhost.com', {
            method: 'POST',
            body: JSON.stringify(data)
        })
        //==========JSON변환 코드e==========
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
        <div className="app-body">
            <Container>
                <BasicInfoList users={users} onRemove={onRemove} onToggle={onToggleFunc} />
                <div>활성자 수 : {count}</div>
            </Container>
        </div>


    )
}

export default ProjectItemScreen;
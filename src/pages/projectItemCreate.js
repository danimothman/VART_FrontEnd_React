import React, { useState, useMemo, useCallback, useRef } from 'react'
import '../App.css';
import logo from '../logo.svg';
import { Button, Container } from 'react-bootstrap';
//회사 가짜 데이터 공시정보 입력경로
import { CompanyData } from './../data/companyData'
//공시정보 작성 경로
import CreateCompanyUser from '../components/CreateCompanyUser'


const ProjectItemCreate = ({ history }) => {
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
        // mkName: '',
        // mkLocation: '',
        // mkCpdate: '',
        // mkFounder: '',
        // mileStone: '',
        // moveNum: '',
        // myWallet: ''
    })

    const { username, email,
        // tokenLogo, 
        tokenName, projectType,
        companyName, companyEstablishment, companyLocation, stateJurisdiction,
        memberName, memberEducation, memberExperience,
        developerLeaderName, developerLeaderEducation, developerLeaderExperience,
        // mkName, mkLocation, mkCpdate, mkFounder,
        // mileStone, moveNum, myWallet
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
            // mkName, mkLocation, mkCpdate, mkFounder,
            // mileStone, moveNum, myWallet
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
            // mkName: '',
            // mkLocation: '',
            // mkCpdate: '',
            // mkFounder: '',
            // mileStone: '',
            // moveNum: '',
            // myWallet: ''
        })

        //=============================[JSON변환파일s]=============================
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
        // 체인코드 설정
        // "infoKey":"Publicinfo4",
        // basicinfo: {
        //   companyname: "",
        //   establishment: "",
        //   location: "",
        //   statejurisdiction:"", 
        // },
        // tokenprofile: {
        //   tokenname: "",
        //   projecttype:"", 
        // },
        // executives: {
        //   name: "",
        //   education: "",
        //   experience: "",
        // },
        // developerleaders: {
        //   name: "",
        //   education: "",
        //   experience: "",
        //=============================[JSON변환파일e]=============================
        nextId.current += 1
    }, [users, inputs])

    return (
        <div className="App">
            <header className="app-header">
                <div>
                    공시등록
                </div>
            </header>
            <div className="app-body">
                <Container>
                    <CreateCompanyUser
                        user={username} useremail={email}
                        // tokenlogo={tokenLogo} 
                        tokenname={tokenName} projecttype={projectType}
                        companyname={companyName} companyestablishment={companyEstablishment} companylocation={companyLocation} statejurisdiction={stateJurisdiction}
                        membername={memberName} membereducation={memberEducation} memberexperience={memberExperience}
                        developerleadername={developerLeaderName} developerleadereducation={developerLeaderEducation} developerleaderexperience={developerLeaderExperience}
                        // mkname={mkName} mklocation={mkLocation} mkcpdate={mkCpdate} mkfounder={mkFounder}
                        // milestone={mileStone} movenum={moveNum} mywallet={myWallet}
                        onChange={onChangeInput} onCreate={onCreate} />
                </Container>
            </div>
        </div>
    );
}

export default ProjectItemCreate;
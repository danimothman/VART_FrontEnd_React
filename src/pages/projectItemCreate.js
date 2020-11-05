import React, { useState, useMemo, useCallback, useRef } from 'react'
import '../App.css';
import { Button, Container } from 'react-bootstrap';
//공시정보 작성 경로
import CreateCompanyUser from '../components/CreateCompanyUser'


const ProjectItemCreate = ({ history }) => {
    const [inputs, setInputs] = useState({
        // tokenLogo: '',
        tokenName: '',
        projectType: '',
        companyName: '',
        establishmentDate: '',
        location: '',
        jurisdiction: '',
        executiveName: '',
        executiveEducation: '',
        executiveExperience: '',
        developerleaderName: '',
        developerleaderEducation: '',
        developerleaderExperience: '',
    })

    const {
        // tokenLogo, 
        tokenName, projectType,
        companyName, establishmentDate, location, jurisdiction,
        executiveName, executiveEducation, executiveExperience,
        developerleaderName, developerleaderEducation, developerleaderExperience,
    } = inputs

    const onChangeInput = (e) => {
        // console.log(e.target)
        const { value, name } = e.target
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    //useCallback 함수를 지우고 쓰는 기능(※[비권장]해당하는 방법은 메모리를 지우고 다시 쓰는 방식으로 진행되서 메모리 효율이 좋은 편이 아님)
    const onCreate = useCallback((e) => {
        e.preventDefault();
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })

        //=============================[JSON변환파일s]=============================
        const data = {
            name: companyName,
            establishmentDate: establishmentDate,
            location: location,
            jurisdiction: jurisdiction,
            token: {
                name: tokenName,
                projectType: projectType
            },
            executive: {
                name: executiveName,
                education: executiveEducation,
                experience: executiveExperience
            },
            developerleader: {
                name: developerleaderName,
                education: developerleaderEducation,
                experience: developerleaderExperience
            }
        }
        fetch('http://localhost:3001/publicinfo/invoke', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log(data)
            if (res.status == 200) {
                history.push('./Project');
                alert("업로드 성공")
                console.log(value.name);
            } else {
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err) => {
            console.log(err);
            alert("업로드 에러")
            console.log(value.name);
        });
    })

    return (
        <div className="App">
            <header className="app-header">
                <div>
                    공시등록
                </div>
            </header>
            <Container>
                <CreateCompanyUser
                    // tokenlogo={tokenLogo} 
                    tokenName={tokenName} projectType={projectType}
                    companyName={companyName} establishmentDate={establishmentDate} location={location} jurisdiction={jurisdiction}
                    executiveName={executiveName} executiveEducation={executiveEducation} executiveExperience={executiveExperience}
                    developerleaderName={developerleaderName} developerleaderEducation={developerleaderEducation} developerleaderExperience={developerleaderExperience}
                    onChange={onChangeInput} onCreate={onCreate} />
            </Container>

        </div>
    );
}

export default ProjectItemCreate;
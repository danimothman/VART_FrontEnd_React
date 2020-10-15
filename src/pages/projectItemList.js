import React, { useState, useMemo, useCallback, useRef } from 'react'
//회사 가짜 데이터 공시정보 입력경로
import { CompanyData } from './../data/companyData'
//공시 정보 리스트 출력 경로
import BasicInfoList from '../components/BasicInfoList'
//공시정보 작성 경로
import CreateCompanyUser from '../components/CreateCompanyUser'
function projectItemList() {
    const countActiveUsers = (users) => {
        console.log('활성화 사용자 수를 체크 하는 중')
        return users.filter(user => user.active).length;
    }
    const [users, setUsers] = useState(CompanyData)

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
        <div className="App">
            <header className="AppHeader">
                <BasicInfoList users={users} onRemove={onRemove} onToggle={onToggleFunc} />
                <div>활성자 수 : {count}</div>
            </header>
        </div>

    );
}

export default projectItemList;
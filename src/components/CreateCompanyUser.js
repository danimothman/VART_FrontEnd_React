import React from 'react'

function CreateCompanyUser({
    user, useremail,
    tokenLogo, tokenName, projectType,
    companyName, companyEstablishment, companyLocation, stateJurisdiction,
    memberName, memberEducation, memberExperience,
    developerLeaderName, developerLeaderEducation, developerLeaderExperience,
    mkName, mkLocation, mkCpdate, mkFounder,
    mileStone, moveNum, myWallet,
    onChange, onCreate
}) {
    return (
        <div>
            <form>
                <br></br>
                <div>
                    <label>계정정보</label>
                    <input
                        name="username"
                        placeholder="계정명"
                        onChange={onChange}
                        value={user}
                    />
                    <input
                        name="email"
                        placeholder="이메일"
                        onChange={onChange}
                        value={useremail}
                    />
                </div>

                <br></br>
                <div>
                    <label>토큰정보</label>
                    <input
                        name="tokenlogo"
                        placeholder="토큰 로고"
                        onChange={onChange}
                        value={tokenLogo}
                    />
                    <input
                        name="tokenname"
                        placeholder="토큰 이름"
                        onChange={onChange}
                        value={tokenName}
                    />
                    <input
                        name="projecttype"
                        placeholder="프로젝트 종류"
                        onChange={onChange}
                        value={projectType}
                    />
                </div>

                <br></br>
                <div>
                    <label>공시정보</label>
                    <input
                        name="companyname"
                        placeholder="회사이름"
                        onChange={onChange}
                        value={companyName}
                    />
                    <input
                        name="companyestablishment"
                        placeholder="회사 설립일"
                        onChange={onChange}
                        value={companyEstablishment}
                    />
                    <input
                        name="companylocation"
                        placeholder="회사 위치"
                        onChange={onChange}
                        value={companyLocation}
                    />
                    <input
                        name="statejurisdiction"
                        placeholder="법인 관할자(Corporate jurisdiction) 위치"
                        onChange={onChange}
                        value={stateJurisdiction}
                    />
                </div>

                <br></br>
                <div>
                    <label>경영진</label>
                    <input
                        name="membername"
                        placeholder="경영진 이름"
                        onChange={onChange}
                        value={memberName}
                    />
                    <input
                        name="membereducation"
                        placeholder="경영진 학력"
                        onChange={onChange}
                        value={memberEducation}
                    />
                    <input
                        name="memberexperience"
                        placeholder="경영진 경력"
                        onChange={onChange}
                        value={memberExperience}
                    />
                </div>

                <br></br>
                <div>
                    <label>개발자리더</label>
                    <input
                        name="developerleadername"
                        placeholder="개발자 이름"
                        onChange={onChange}
                        value={developerLeaderName}
                    />
                    <input
                        name="developerleadereducation"
                        placeholder="개발자 학력"
                        onChange={onChange}
                        value={developerLeaderEducation}
                    />
                    <input
                        name="developerleaderexperience"
                        placeholder="개발자 경력"
                        onChange={onChange}
                        value={developerLeaderExperience}
                    />
                </div>

                <br></br>
                <div>
                    <label>Onchain</label>
                    <input
                        name="mkname"
                        placeholder="마켓 이름"
                        onChange={onChange}
                        value={mkName}
                    />
                    <input
                        name="mklocation"
                        placeholder="마켓 위치"
                        onChange={onChange}
                        value={mkLocation}
                    />
                    <input
                        name="mkcpdate"
                        placeholder="마켓 cpdate"
                        onChange={onChange}
                        value={mkCpdate}
                    />
                    <input
                        name="mkfounder"
                        placeholder="마켓 설립자"
                        onChange={onChange}
                        value={mkFounder}
                    />
                </div>

                <br></br>
                <div>
                    <label>계정정보</label>
                    <input
                        name="milestone"
                        placeholder="milestone"
                        onChange={onChange}
                        value={mileStone}
                    />
                    <input
                        name="movenum"
                        placeholder="movenum"
                        onChange={onChange}
                        value={moveNum}
                    />
                    <input
                        name="mywallet"
                        placeholder="wallet"
                        onChange={onChange}
                        value={myWallet}
                    />
                </div>

                <br></br>
            </form>
            <button onClick={onCreate} >공시 정보 등록</button>
        </div>
    )
}

export default CreateCompanyUser;

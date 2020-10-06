import React from 'react'

function CreateCompanyUser({
    user, useremail,
    tokenlogo, tokenname, projecttype,
    companyname, companyestablishment, companylocation, statejurisdiction,
    membername, membereducation, memberexperience,
    developerleadername, developerleadereducation, developerleaderexperience,
    mkname, mklocation, mkcpdate, mkfounder,
    milestone, movenum, mywallet,
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
                        name="tokenLogo"
                        placeholder="토큰 로고"
                        onChange={onChange}
                        value={tokenlogo}
                    />
                    <input
                        name="tokenName"
                        placeholder="토큰 이름"
                        onChange={onChange}
                        value={tokenname}
                    />
                    <input
                        name="projectType"
                        placeholder="프로젝트 종류"
                        onChange={onChange}
                        value={projecttype}
                    />
                </div>

                <br></br>
                <div>
                    <label>공시정보</label>
                    <input
                        name="companyName"
                        placeholder="회사이름"
                        onChange={onChange}
                        value={companyname}
                    />
                    <input
                        name="companyEstablishment"
                        placeholder="회사 설립일"
                        onChange={onChange}
                        value={companyestablishment}
                    />
                    <input
                        name="companyLocation"
                        placeholder="회사 위치"
                        onChange={onChange}
                        value={companylocation}
                    />
                    <input
                        name="stateJurisdiction"
                        placeholder="법인 관할자(Corporate jurisdiction) 위치"
                        onChange={onChange}
                        value={statejurisdiction}
                    />
                </div>

                <br></br>
                <div>
                    <label>경영진</label>
                    <input
                        name="memberName"
                        placeholder="경영진 이름"
                        onChange={onChange}
                        value={membername}
                    />
                    <input
                        name="memberEducation"
                        placeholder="경영진 학력"
                        onChange={onChange}
                        value={membereducation}
                    />
                    <input
                        name="memberExperience"
                        placeholder="경영진 경력"
                        onChange={onChange}
                        value={memberexperience}
                    />
                </div>

                <br></br>
                <div>
                    <label>개발자리더</label>
                    <input
                        name="developerLeaderName"
                        placeholder="개발자 이름"
                        onChange={onChange}
                        value={developerleadername}
                    />
                    <input
                        name="developerLeaderEducation"
                        placeholder="개발자 학력"
                        onChange={onChange}
                        value={developerleadereducation}
                    />
                    <input
                        name="developerLeaderExperience"
                        placeholder="개발자 경력"
                        onChange={onChange}
                        value={developerleaderexperience}
                    />
                </div>

                <br></br>
                <div>
                    <label>Onchain</label>
                    <input
                        name="mkName"
                        placeholder="마켓 이름"
                        onChange={onChange}
                        value={mkname}
                    />
                    <input
                        name="mkLocation"
                        placeholder="마켓 위치"
                        onChange={onChange}
                        value={mklocation}
                    />
                    <input
                        name="mkCpdate"
                        placeholder="마켓 cpdate"
                        onChange={onChange}
                        value={mkcpdate}
                    />
                    <input
                        name="mkFounder"
                        placeholder="마켓 설립자"
                        onChange={onChange}
                        value={mkfounder}
                    />
                </div>

                <br></br>
                <div>
                    <label>계정정보</label>
                    <input
                        name="mileStone"
                        placeholder="milestone"
                        onChange={onChange}
                        value={milestone}
                    />
                    <input
                        name="moveNum"
                        placeholder="movenum"
                        onChange={onChange}
                        value={movenum}
                    />
                    <input
                        name="myWallet"
                        placeholder="wallet"
                        onChange={onChange}
                        value={mywallet}
                    />
                </div>

                <br></br>
                <button onClick={onCreate} >공시 정보 등록</button>
            </form>
            {/* <button onClick={onCreate} >공시 정보 등록</button> */}
        </div>
    )
}

export default CreateCompanyUser;



import React from 'react';
import '../App.css';
import logo from '../logo.svg';
// import logo from './logo.svg';
// import TutorLogin from "./components/TutorLogin";
import { Button } from 'react-bootstrap';
import HelloScreen from '../screens/HelloScreen'
import CounterScreen, { } from '../screens/CounterScreen'
import UserScreen1 from '../screens/UserScreen'
const Test = ({ history }) => {
    return (
        <div className="App">
            <header className="App-header">

                <h1>
                    React를 활용한 과외매칭DApp입니다
                </h1>
                <br></br>
                <img src={logo} className="App-logo" alt="logo" />
                <br></br>
                <HelloScreen />
                <CounterScreen />
                <UserScreen1 />
                <div>
                    <div >
                        <div class="itemCompanyCursor">회사이름</div>
                        <div class="itemFounderCursor">설립자</div>
                        <div class="itemLocationCursor">위치</div>
                        <div class="itemCorporateJurisdictionCursor">법인 관할건</div>
                        <div class="itemVirtualAssetNameCursor">가상자산(이름)</div>
                        <div class="itemVirtualAssetLogCursor">가상자산(로그)</div>
                        <div class="itemDeveloperCursor">주요 개발자</div>
                    </div>
                    <div>
                        <div class="itemCompany">써트온</div>
                        <div class="itemFounder">Sergey Nazarov</div>
                        <div class="itemLocation">
                            Strathvale House, 90 North Church Street, George Town, KY1-1102, Grand Cayman, Cayman Islands
                        </div>
                        <div class="itemCorporateJurisdiction">케이맨섬</div>
                        <div class="itemVirtualAssetName">Chainlink</div>
                        <div class="itemVirtualAssetLog">Chainlink(Log)</div>
                        <div class="itemDeveloper">Steve Ellis</div>
                    </div>
                </div>
            </header>
        </div>

    );
}

export default Test;
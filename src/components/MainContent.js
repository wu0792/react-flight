import React, { Component } from 'react';
import TipContainer from './TipContainer'
import PassengerList from './PassengerList'
import SideBar from './SideBar';
import Contact from './Contact';
import NextStepBtn from './NextStepBtn';

class MainContent extends Component {
    render() {
        return (
            <div className="container">
                <div className="main" id="J_main">
                    <div id="J_step1">
                        <TipContainer />
                        <PassengerList />
                        <Contact />
                        <NextStepBtn />
                    </div>
                </div>
                <SideBar />
            </div>
        );
    }
}

export default MainContent;
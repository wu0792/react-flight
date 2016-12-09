import React, { Component } from 'react';
import Passenger from './Passenger'
import AddPassenger from './AddPassenger'

class MainContent extends Component {
    render() {
        return (
            <div className="passenger-box">
                <div className="box-tit" id="J_passengerHeader">
                    <h2>乘客</h2>
                    <div id="J_psgAlert" className="notice-tips"></div>
                </div>
                <div id="J_passengerList">
                    <div id="passengerMain" className="c-slidedown_14">
                        <Passenger />
                        <Passenger />
                        <AddPassenger />                        
                    </div>
                </div>
            </div>
        );
    }
}

export default MainContent;
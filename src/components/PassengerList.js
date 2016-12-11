import React, { Component } from 'react';
import Passenger from './Passenger'
import AddPassenger from './AddPassenger'
import AreaHeader from './AreaHeader'

class MainContent extends Component {
    render() {
        return (
            <div className="passenger-box">
                <div id="J_passengerList">
                    <AreaHeader title="乘客" />
                    <div id="passengerMain" className="c-slidedown_14">
                        <Passenger num="1" />
                        <Passenger num="2"/>
                        <AddPassenger />
                    </div>
                </div>
            </div>
        );
    }
}

export default MainContent;
import React, { Component } from 'react';
import Passenger from './Passenger'
import AddPassenger from './AddPassenger'
import AreaHeader from './AreaHeader'

class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passengerCount: 1,
            removedIdList: []
        };
    }

    onAddPassenger() {
        if (this.canAddMore()) {
            this.setState({ passengerCount: this.state.passengerCount + 1 });
        }
    }

    onRemovePassenger(id) {
        this.state.removedIdList.push(id);
    }

    getPassengerList() {
        let passengerList = [];
        for (let i = 0; i < this.state.passengerCount; i++) {
            let passenger = React.createElement(Passenger, { key: i + 1, num: i + 1, onRemovePassenger: this.onRemovePassenger.bind(this) });
            if (!passenger.state || this.state.removedIdList.indexOf(passenger.state.id) < 0) {
                passengerList.push(passenger);
            }
        }

        return passengerList;
    }

    canAddMore() {
        return this.state.passengerCount <= 2;
    }

    render() {
        return (
            <div className="passenger-box">
                <div id="J_passengerList">
                    <AreaHeader title="乘客" />
                    <div className="c-slidedown_14">
                        {[...this.getPassengerList()]}
                        <AddPassenger onAdd={this.onAddPassenger.bind(this)} enabled={this.canAddMore()} />
                    </div>
                </div>
            </div>
        );
    }
}

export default MainContent;
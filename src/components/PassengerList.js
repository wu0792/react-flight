import React, { Component } from 'react';
import Passenger from './Passenger'
import AddPassenger from './AddPassenger'
import AreaHeader from './AreaHeader';
import MiniContactList from './MiniContactList';
import MiniContact from './MiniContact';

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

    addPassenger() {
        this.setState({
            passengerCount: this.state.passengerCount + 1
        });
    }

    getPassengerList() {
        let existingPassengerList = this.existingPassengerList ? this.existingPassengerList : [];
        if (!this.existingPassengerList) {
            this.existingPassengerList = [];
        }

        for (let i = 0; i < this.existingPassengerList.length; i++) {
            let passenger = this.existingPassengerList[i];
            if (passenger.state && passenger.state.id && this.state.removedIdList.indexOf(passenger.state.id) >= 0) {
                this.existingPassengerList.splice(i, 1);
            }
        }

        for (let i = existingPassengerList.length; i < this.state.passengerCount; i++) {
            let passenger = React.createElement(Passenger, {
                key: i + 1,
                num: i + 1,
                onRemovePassenger: this.onRemovePassenger.bind(this)
            });
            if (!passenger.state || this.state.removedIdList.indexOf(passenger.state.id) < 0) {
                this.existingPassengerList.push(passenger);
            }
        }

        return this.existingPassengerList;
    }

    canAddMore() {
        return this.state.passengerCount <= 2;
    }

    render() {
        return (
            <div className="passenger-box">
                <div id="J_passengerList">
                    <AreaHeader title="乘客" />
                    <MiniContactList>
                        <MiniContact selected={true} />
                        <MiniContact />
                        <MiniContact />
                        <MiniContact />
                        <MiniContact />
                        <MiniContact />
                        <MiniContact />
                        <MiniContact />
                        <MiniContact />
                        <MiniContact />
                        <MiniContact />
                        <MiniContact />
                        <MiniContact />
                        <MiniContact />
                        <MiniContact />
                        <MiniContact />
                        <MiniContact />
                        <MiniContact />
                        <MiniContact />
                        <MiniContact />
                        <MiniContact />
                        <MiniContact />
                        <MiniContact />
                        <MiniContact />
                    </MiniContactList>
                    <div className="c-slidedown_14" ref={e => this.container = e}>
                        {[...this.getPassengerList()]}
                        <AddPassenger onAdd={this.onAddPassenger.bind(this)} enabled={this.canAddMore()} />
                    </div>
                </div>
            </div>
        );
    }
}

export default MainContent;
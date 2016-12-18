import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Passenger from './Passenger'
import AddPassenger from './AddPassenger'
import AreaHeader from './AreaHeader';
import MiniContactList from './MiniContactList';
import MiniContact from './MiniContact';

let maxId = 0;
class PassengerList extends Component {
    constructor(props) {
        super(props);
        this.toRemoveIdList = [];
        this.state = {
            passengerIdList: [maxId++]
        };
    }

    onAddPassenger() {
        if (this.canAddMore()) {
            let newPassengerIdList = this.state.passengerIdList.slice();
            newPassengerIdList.push(maxId++);
            this.setState({ passengerIdList: newPassengerIdList });
        }
    }

    onRemovePassenger(id) {
        let index = this.state.passengerIdList.indexOf(id);
        if (index >= 0) {
            let newPassengerIdList = this.state.passengerIdList.slice();
            newPassengerIdList.splice(index, 1);
            this.setState({ passengerIdList: newPassengerIdList });
        }
    }

    addPassenger(id) {
        let index = this.state.passengerIdList.indexOf(id);
        if (index < 0) {
            let newPassengerIdList = this.state.passengerIdList.slice();
            newPassengerIdList.push(id);
            this.setState({ passengerIdList: newPassengerIdList });
        }
    }

    getPassengerList() {
        let passengerList = [];
        for (let i = 0; i < this.state.passengerIdList.length; i++) {
            let passenger = React.createElement(Passenger, {
                key: this.state.passengerIdList[i],
                onRemovePassenger: this.onRemovePassenger.bind(this),
                idNum: this.state.passengerIdList[i],
                displayNum: i
            });

            passengerList.push(passenger);
        }

        return passengerList;
    }

    canAddMore() {
        return this.state.passengerIdList.length <= 3;
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

export default PassengerList;
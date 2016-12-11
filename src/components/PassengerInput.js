import React, { Component } from 'react';
let classNames = require('classnames');
let incId = 0;

class PassengerInput extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    getId(){
        return `passenger_input_${incId++}`;
    }

    render() {
        let id = this.getId();
        return (
            <div className={this.props.className}>
                <input type="text" id={id} maxLength={this.props.maxLength || ''} className="form-input" />
                <label htmlFor={id} className="form-input-hint">{this.props.placeholder}</label>
            </div>
        );
    }
}

export default PassengerInput;
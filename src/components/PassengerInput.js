import React, { Component } from 'react';
let classNames = require('classnames');
let incId = 0;

class PassengerInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: true,
            errorMsg: []
        };
    }

    getId() {
        return `passenger_input_${incId++}`;
    }

    render() {
        let id = this.getId();
        let rootClassName = classNames({ 'form-error': this.state.hasError }, this.props.className)
        let errorClassName = classNames('form-error-msg', { 'none': !this.state.hasError })

        return (
            <div className={rootClassName}>
                <input type="text" id={id} maxLength={this.props.maxLength || ''} className="form-input" />
                <label htmlFor={id} className="form-input-hint">{this.props.placeholder}</label>
                <div className={errorClassName} >
                    <i className="ico-error"></i>
                    <span>请填写正确的简体中文姓名，中文姓名的第一个字必须为汉字。</span>
                </div>
            </div>
        );
    }
}

export default PassengerInput;
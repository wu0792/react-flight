import React, { Component } from 'react';
import { ERROR_LEVEL } from '../generic/enum';
let classNames = require('classnames');
let incId = 0;

class PassengerInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFocused: false,
            value: '',
            hasError: false,
            errorList: []
        };
    }

    addError(err) {
        let newErrorList = [...this.state.errorList, err];
        this.setState({
            hasError: true,
            errorList: newErrorList
        });
    }

    setErrorList(errorList) {
        this.setState({
            hasError: !!errorList.length,
            errorList: errorList
        });
    }

    reset() {
        this.input.value = '';
        this.setState({
            hasError: false,
            value: '',
            errorList: []
        });
    }

    focus() {
        this.input.focus();
    }

    getIcoRootClassName(error) {
        return classNames(
            { 'form-error-msg': error.level === ERROR_LEVEL.ERROR },
            { 'form-hint-msg': error.level === ERROR_LEVEL.WARN || error.level === ERROR_LEVEL.INFO },
            { 'none': !this.state.hasError }
        )
    }

    getIcoClassName(error) {
        return classNames(
            { 'ico-error': error.level === ERROR_LEVEL.ERROR },
            { 'ico-info': error.level === ERROR_LEVEL.WARN || error.level === ERROR_LEVEL.INFO }
        )
    }

    onChange(event) {
        this.setState({ value: event.target.value });
        this.props.onChange && this.props.onChange(event.target, this);
    }

    onFocus(event) {
        this.setState({ isFocused: true });
        this.props.onFocus && this.props.onFocus(event.target, this);
    }

    onBlur(event) {
        this.setState({ isFocused: false });
        this.props.onBlur && this.props.onBlur(event.target, this);
    }

    render() {
        let id = `passenger_input_${incId++}`;
        let rootClassName = classNames({ 'form-error': this.state.hasError }, this.props.className)
        let _this = this;

        return (
            <div className={rootClassName}>
                <input type="text" id={id} maxLength={this.props.maxLength || ''} className="form-input" ref={e => this.input = e}
                    onChange={this.onChange.bind(this)} onFocus={this.onFocus.bind(this)} onBlur={this.onBlur.bind(this)} />
                <label htmlFor={id} className="form-input-hint">{(this.state.isFocused || !this.state.value) ? this.props.placeholder : ""}</label>
                {
                    this.state.errorList.map((e, index) =>
                        (<div key={index} className={_this.getIcoRootClassName(e)} >
                            <i className={_this.getIcoClassName(e)}></i>
                            <span>{e.message}</span>
                        </div>)
                    )
                }
            </div>
        );
    }
}

export default PassengerInput;
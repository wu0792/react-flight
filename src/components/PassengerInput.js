import React, { Component } from 'react';
import { ERROR_LEVEL } from '../generic/enum';
import DatePicker from 'react-datepicker';
require('react-datepicker/dist/react-datepicker.css');

let classNames = require('classnames');
let incId = 0;

class PassengerInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFocused: false,
            value: '',
            dateValue: null,
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

    onInputChange(event) {
        this.setState({ value: event.target.value });
        this.props.onChange && this.props.onChange(event.target, this);
    }

    onDateChange(value) {
        this.setState({ dateValue: value, isFocused: false });
        this.props.onChange && this.props.onChange(value.toDate(), this);
    }

    onInputFocus(event) {
        this.setState({ isFocused: true });
        this.props.onFocus && this.props.onFocus(event.target, this);
    }

    onDateFocus(value) {
        if (this.labelForDatePicker) {
            let existFakeInput = this.labelForDatePicker.previousSibling && this.labelForDatePicker.previousSibling.tagName === 'INPUT';
            if (!existFakeInput) {
                let parentNode = this.labelForDatePicker.parentNode;
                let newInput = document.createElement('input');
                newInput.className = 'form-input fake-input';
                newInput.style.width = "0";
                newInput.style.height = "0";
                parentNode.insertBefore(newInput, this.labelForDatePicker);
                newInput.focus();
            } else {
                this.labelForDatePicker.previousSibling.focus();
            }
        }

        this.setState({ isFocused: true });
        this.props.onFocus && this.props.onFocus(event.target, this);
    }

    onBlur(event) {
        this.setState({ isFocused: false });
        this.props.onBlur && this.props.onBlur(event.target, this);
    }

    getDatePlaceHolder() {
        return (this.state.isFocused || !this.state.dateValue) ? this.props.placeholder : "";
    }

    render() {
        let id = `passenger_input_${incId++}`;
        let rootClassName = classNames({ 'form-error': this.state.hasError }, this.props.className)
        let _this = this;

        return (
            <div className={rootClassName}>
                {this.props.children}
                {this.props.datePicker ?
                    [<DatePicker key="datePicker" id={id} selected={this.state.dateValue} maxLength={this.props.maxLength || ''} className="form-input" ref={e => this.input = e}
                        dateFormat="YYYY-MM-DD"
                        onChange={this.onDateChange.bind(this)} onFocus={this.onDateFocus.bind(this)} onBlur={this.onBlur.bind(this)} />,
                    <label key="label" htmlFor={id} ref={e => this.labelForDatePicker = e} className="form-input-hint">{this.getDatePlaceHolder()}</label>]
                    :
                    [<input type="text" key="input" id={id} maxLength={this.props.maxLength || ''} className="form-input" ref={e => this.input = e}
                        onChange={this.onInputChange.bind(this)} onFocus={this.onInputFocus.bind(this)} onBlur={this.onBlur.bind(this)} />,
                    <label key="label" htmlFor={id} className="form-input-hint">{(this.state.isFocused || !this.state.value) ? this.props.placeholder : ""}</label>
                    ]
                }
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
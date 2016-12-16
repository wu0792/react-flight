import React, { Component } from 'react';
let classNames = require('classnames');

class MiniContact extends Component {
    onAreaNumChange(event) {

    }

    render() {
        let aClassName = classNames('passenger', { 'current': this.props.selected === true });
        return (
            <li>
                <i className="ico-frequent-flyer  hide " />
                <a title="" href="javascript:;" className={aClassName} >崔永远<i className="ico-pass-selected" />
                </a>
            </li>
        );
    }
}

export default MiniContact;
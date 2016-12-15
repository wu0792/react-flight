import React, { Component } from 'react';
let classNames = require('classnames');

class AddPassenger extends Component {
    onAdd() {
        this.props.onAdd && this.props.onAdd();
    }

    render() {
        let aClassName = classNames(['button', 'basic'], { 'disabled': !this.props.enabled });
        let hintClassName = classNames('add-passenger-hint', { 'none': this.props.enabled });
        let content = this.props.enabled ? '+ 添加乘客' : '最多添加9名乘客';
        return (
            <div className="add-passenger">
                <a style={{ cursor: "pointer" }} className={aClassName} onClick={this.onAdd.bind(this)}>{content}</a>
                <span className={hintClassName}>您最多只能预订9位乘客，您已订满，无法继续添加乘客。</span>
            </div>
        );
    }
}

export default AddPassenger;
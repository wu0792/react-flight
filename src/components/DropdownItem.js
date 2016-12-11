import React, { Component } from 'react';

class DropdownItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSelected: false
        }
    }

    onSelect() {
        this.props.onSelect(this);
    }

    render() {
        return (
            <li onClick={() => this.props.onSelect(this)}>
                <span>{this.props.text}</span>
                <span>&nbsp;</span>
            </li>
        );
    }
}

export default DropdownItem;
import React, { Component } from 'react';
import MiniContact from './MiniContact';

class MiniContactList extends Component {
    render() {
        return (
            <div className="passengers-list">
                <ul className="passengers c-repeat_10">
                    {this.props.children}
                </ul>
            </div>
        );
    }
}

export default MiniContactList;
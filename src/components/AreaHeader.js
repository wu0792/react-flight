import React, { Component } from 'react';

class Tip extends Component {
    render() {
        return (
            <div className="box-tit">
                <h2>{this.props.title}</h2>
                <div className="notice-tips"></div>
            </div>
        );
    }
}

export default Tip;
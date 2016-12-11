import React, { Component } from 'react';

class MsgTip extends Component {
    render() {
        return (
            <div className="basic-hint">
                <i className="ico-attention"></i> {this.props.msg}
            </div>
        );
    }
}

export default MsgTip;
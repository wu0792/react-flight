import React, { Component } from 'react';

class AddPassenger extends Component {
    render() {
        return (
            <div className="add-passenger">
                <a style={{ cursor: "pointer" }} className="button basic c-ubt_11">+ 添加乘客</a>
                <span className="add-passenger-hint"></span>
            </div>
        );
    }
}

export default AddPassenger;
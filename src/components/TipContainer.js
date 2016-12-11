import React, { Component } from 'react';
import MsgTip from './MsgTip'

class TipContainer extends Component {
    render() {
        return (
            <div id="J_bookAttention"> 
                <div className="hint-board">
                    <MsgTip msg="目前该舱位仅剩8个座位，请尽快完成预订。" />
                    <MsgTip msg="当前航班仅支持成人、儿童票。"/>
                    <MsgTip msg="我们将会为您自动值机，座位随机。" />
                </div>
            </div>
        );
    }
}

export default TipContainer;
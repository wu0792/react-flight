import React, { Component } from 'react';

class MessageContainer extends Component {
    render() {
        return (
            <div id="J_bookAttention"> 
                <div className="hint-board">
                    <div className="basic-hint">
                    <i className="ico-attention"></i> 目前该舱位仅剩8个座位，请尽快完成预订。
                    </div>
                    <div className="basic-hint">
                    <i className="ico-attention"></i> 当前航班仅支持成人、儿童票。
                    </div>
                </div>
            </div>
        );
    }
}

export default MessageContainer;
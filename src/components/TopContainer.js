import React, { Component } from 'react';

class TopContainer extends Component {
    render() {
        return (
<div className="header-wrapper">
        <div className="header" id="J_hd">
                <div className="xxtriplogo"><a href="#">xx旅行网</a></div>
            <div className="order-progress">
                <div className="prog-step prog-current">
                    <div className="progress-line"></div>
                    <h4>乘机信息<i className="icon ico-step"></i></h4>
                </div>
                <div className="prog-step">
                    <div className="progress-line"></div>
                    <h4>增值服务</h4>
                </div>
                <div className="prog-step">
                    <div className="progress-line"></div>
                    <h4>支付</h4>
                </div>
                <div className="prog-step prog-last">
                    <h4>完成</h4>
                </div>
            </div>
                <div className="loginbar">
					<span id="J_quickUserName" className="xxtrip-username" style={{display:'none'}}>尊敬的会员</span>
					<a id="J_quickLogin" href="javascript:__SSO_loginShow('refresh', true, 0, true);" className="xxtrip-username">登录</a>
                    <a href="#" target="_blank" className="callcenter">客服中心</a>
                </div>
        </div>
    </div>
        );
    }
}

export default TopContainer;
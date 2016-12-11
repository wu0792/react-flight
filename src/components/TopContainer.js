import React, { Component } from 'react';
import TopStage from './TopStage'

class TopContainer extends Component {
    render() {
        return (
            <div className="header-wrapper">
                <div className="header" id="J_hd">
                    <div className="xxtriplogo"><a href="#">xx旅行网</a></div>
                    <div className="order-progress">
                        <TopStage current="true" title="乘机信息" />
                        <TopStage current="false" title="增值服务" />
                        <TopStage current="false" title="支付" />
                        <TopStage current="false" title="完成" />
                    </div>
                    <div className="loginbar">
                        <a className="xxtrip-username">登录</a>
                        <a href="#" target="_blank" className="callcenter">客服中心</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopContainer;
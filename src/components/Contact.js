import React, { Component } from 'react';
import AreaHeader from './AreaHeader';
import PassengerInput from './PassengerInput';

class Contact extends Component {
    render() {
        return (
            <div id="J_contact">
                <div className="contact-box">
                    <AreaHeader title="联系人" />
                    <div className="basic-card">
                        <div className="form-line">
                            <PassengerInput className="form-item contact-name c-dropdown_2" placeholder="中文或英文姓名" />
                            <div className="form-item contact-phone">
                                <div className="form-select c-dropdown_2">
                                    <div className="form-select-txt">
                                        <span>+86</span>
                                        <i className="ico-caret-down"></i>
                                    </div>
                                </div>
                                <input id="I_contact_phone" type="text" className="form-input c-formatter_3 c-input_4" />
                                <label htmlFor="I_contact_phone" className="form-input-hint">手机号码，接收航班信息</label>
                                <div className="form-error-msg hide c-errorstyle_15">
                                    <i className="ico-error"></i>
                                    <span>请填写正确的手机号码，以便接收信息</span>
                                </div>
                                <div className="form-hint-msg hide" >
                                    <i className="ico-info"></i>
                                    <span>该号码已绑定携程账号，<a id="linkLogin" href="#">登录</a>后预订成功可享会员服务</span>
                                </div>
                            </div>
                            <PassengerInput className="form-item contact-mail" placeholder="Email(选填，接收航班信息）" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
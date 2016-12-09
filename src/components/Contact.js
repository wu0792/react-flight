import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div id="J_contact">
                <div className="contact-box">
                    <div className="box-tit">
                        <h2>联系人</h2>
                    </div>
                    <div className="basic-card">
                        <div className="form-line">
                            <div className="form-item contact-name c-dropdown_2">
                                <input id="I_contact_name" type="text" className="form-input c-input_4" />
                                <label htmlFor="I_contact_name" className="form-input-hint">中文或英文姓名</label>
                                <div className="form-error-msg hide c-errorstyle_15">
                                    <i className="ico-error"></i>
                                    <span>请填写正确的中文或英文联系人姓名</span>
                                </div>
                            </div>
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
                                    <span>该号码已绑定携程账号，<a id="linkLogin" href="javascript:;">登录</a>后预订成功可享会员服务</span>
                                </div>
                            </div>
                            <div className="form-item contact-mail">
                                <input id="I_contact_mail" type="text" className="form-input" />
                                <label htmlFor="I_contact_mail" className="form-input-hint">Email(选填，接收航班信息）</label>
                                <div className="form-error-msg hide c-errorstyle_15">
                                    <i className="ico-error"></i>
                                    <span>请填写正确的Email地址，格式：a@b.c</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
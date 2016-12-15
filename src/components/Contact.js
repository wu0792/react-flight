import React, { Component } from 'react';
import AreaHeader from './AreaHeader';
import PassengerInput from './PassengerInput';
import DropdownList from './DropdownList';
import DropdownItem from './DropdownItem';

class Contact extends Component {
    onAreaNumChange(event) {
        this.phoneNum.focus();
    }

    render() {
        return (
            <div id="J_contact">
                <div className="contact-box">
                    <AreaHeader title="联系人" />
                    <div className="basic-card">
                        <div className="form-line">
                            <PassengerInput className="form-item contact-name c-dropdown_2" placeholder="中文或英文姓名" />
                            <PassengerInput className="form-item contact-phone" placeholder="手机号码，接收航班信息" ref={e => this.phoneNum = e}>
                                <DropdownList defaultValue="86" ref={e => this.areaNum = e} onChange={this.onAreaNumChange.bind(this)}>
                                    <DropdownItem value="86" text="+86" />
                                    <DropdownItem value="886" text="+886" />
                                </DropdownList>
                            </PassengerInput>
                            <PassengerInput className="form-item contact-mail" placeholder="Email(选填，接收航班信息）" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
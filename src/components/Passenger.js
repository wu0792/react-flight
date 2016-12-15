import React, { Component } from 'react';
import { setTooltip, hideTooltip, revertHideTooltip } from '../generic/eventUtil';
import PassengerNameHover from './PassengerNameHover';
import DropdownList from './DropdownList';
import DropdownItem from './DropdownItem';
import ToggleEnChs from './ToggleEnChs';
import PassengerInput from './PassengerInput';
import { ERROR_LEVEL } from '../generic/enum';
import TipError from '../generic/TipError';

let id = 0;
class Passenger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lang: 'ch',
      id: id++
    };
  }

  onLangChanged(lang) {
    this.setState({ lang: lang });
    this.cardNum.reset();
  }

  onPassengerNameChange(el, passengerName) {
    let errorList = [];
    if (/[a-zA-Z0-9]+/.test(el.value)) {
      errorList.push(new TipError(ERROR_LEVEL.ERROR, "请填写正确的简体中文姓名，中文姓名的第一个字必须为汉字。"));
    }

    passengerName.setErrorList(errorList);
  }

  onCardTypeChange(newItem, oldItem, cardType) {
    this.cardNum.reset();
    this.cardNum.focus();
  }

  onCardNumChanged(el, cardNum) {
    let cardTypeValue = this.cardType.state.selectedValue;
    let errorList = [];
    //证件类型不同校验逻辑不同
    switch (cardTypeValue) {
      case 'id':
        if (!/[0-9]+/.test(el.value)) {
          errorList.push(new TipError(ERROR_LEVEL.ERROR, "请填写正确的18位身份证号码"));
        }
        break;
      case 'passport':
        if (!/^[a-zA-Z0-9]*$/.test(el.value)) {
          errorList.push(new TipError(ERROR_LEVEL.ERROR, "请填写正确的护照号码，号码中只能包含数字或字母"));
        }
        break;
      default:
        break;
    }

    cardNum.setErrorList(errorList);
  }

  onRemovePassenger(el) {
    this.props.onRemovePassenger && this.props.onRemovePassenger(this.state.id);
  }

  render() {
    let isLangCh = this.state.lang === 'ch';
    return (
      <div className="basic-card J_passenger">
        <div className="passenger-info">
          <div className="form">
            <div className="form-line J_lang">
              {isLangCh &&
                <PassengerInput className="J_passenger_name_zh" maxLength="15" placeholder="姓名，请与登机证件姓名保持一致"
                  onChange={this.onPassengerNameChange.bind(this)} />}
              {!isLangCh && [
                <PassengerInput key="first-name" className={['form-item', 'passenger-name-en', 'J_passenger_name_en']} maxLength="15" placeholder="姓（拼音） Surname" />,
                <PassengerInput key="given-name" className={['form-item', 'passenger-name-en', 'J_passenger_name_en']} maxLength="15" placeholder="名（拼音） Given name" />
              ]}

              <ToggleEnChs lang={this.state.lang} onLangChanged={this.onLangChanged.bind(this)} />

              <i className="ico-help c-pop_9"
                ref={(el) => { this.passportIcon = el; } }
                onMouseOver={(el) => setTooltip(this.passportIcon, this.passportHover)}
                onMouseOut={(el) => hideTooltip(this.passportHover)}>
              </i>
              <PassengerNameHover
                revertHideTooltip={() => revertHideTooltip(this.passportHover)}
                hideTooltip={() => hideTooltip(this.passportHover)}
                ref={(el) => { if (el) { this.passportHover = el.hoverTip; } } } />

            </div>
            <div className="form-line passenger-identity">
              {
                isLangCh &&
                <DropdownList defaultValue="id" ref={e => this.cardType = e} onChange={this.onCardTypeChange.bind(this)}>
                  <DropdownItem value="id" text="身份证" />
                  <DropdownItem value="hkb" text="户口本" />
                  <DropdownItem value="passport" text="护照" />
                  <DropdownItem value="other" text="其他" />
                </DropdownList>
              }
              {
                !isLangCh &&
                <DropdownList defaultValue="passport" ref={e => this.cardType = e} onChange={this.onCardTypeChange.bind(this)}>
                  <DropdownItem value="id" text="身份证" />
                  <DropdownItem value="passport" text="护照" />
                </DropdownList>
              }

              &nbsp;
              <PassengerInput ref={e => this.cardNum = e} className="form-item" maxLength="18" placeholder="登机证件号码" onChange={this.onCardNumChanged.bind(this)} />
            </div>

            {
              !isLangCh &&
              <PassengerInput className="form-line" maxLength="10" placeholder="出生日期，YYYY-MM-DD" />
            }
          </div>

        </div>
        <div className="extra-box">
          <div className="extra-info">
            <div className="ico-slogan">
              <h4>
                订票无忧
              </h4>
              <p>
                价格保障，确保成行
              </p>
            </div>
          </div>
        </div>
        <a className="delete" onClick={this.onRemovePassenger.bind(this)}>
          <i className="close">×</i>
          <span>
            删除
          </span>
        </a>
        <div className="passenger-num">
          <i className={`ico-num-${this.props.num}`}>
            {this.props.num}
          </i>
        </div>
      </div>
    );
  }
}

export default Passenger;
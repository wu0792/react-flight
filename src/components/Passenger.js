import React, { Component } from 'react';
import { setTooltip, hideTooltip, revertHideTooltip } from '../generic/eventUtil';
import PassengerNameHover from './PassengerNameHover'
import DropdownList from './DropdownList'
import DropdownItem from './DropdownItem'

class Passenger extends Component {
  render() {
    return (
      <div className="basic-card J_passenger">
        <div className="passenger-info">
          <div className="form">
            <div className="form-line J_lang">
              <div className="J_passenger_name_zh">
                <input id="p_name_0" maxLength="15" className="form-input form-input-block J_inputName c-input_4 p-autocomplete_19"
                  type="text" />
                <label htmlFor="p_name_0" className="form-input-hint">
                  姓名，请与登机证件姓名保持一致
          </label>
              </div>
              <div className="form-toggle c-ubt_11">
                <a>
                  <span>
                    英
            </span>
                </a>
                <a className="current">
                  <span>
                    中
            </span>
                </a>
                <i className="J_langIcon current-icon">
                </i>
              </div>
              <i className="ico-help c-pop_9"
                ref={(el) => { this.passportIcon = el; } }
                onMouseOver={(el) => setTooltip(this.passportIcon, this.passportHover)}
                onMouseOut={(el) => hideTooltip(this.passportHover)}>
              </i>
              <PassengerNameHover
                revertHideTooltip={() => revertHideTooltip(this.passportHover)}
                hideTooltip={() => hideTooltip(this.passportHover)}
                ref={(el) => { this.passportHover = el.hoverTip; } } />
            </div>
            <div className="form-line passenger-identity">

              <DropdownList selectFirst="true">
                <DropdownItem value="id" text="身份证" />
                <DropdownItem value="hkb" text="户口本" />
                <DropdownItem value="passport" text="护照" />
                <DropdownItem value="other" text="其他" />
              </DropdownList>
              &nbsp;
        <div className="form-item">
                <input id="p_card_no_0" className="form-input J_input text-transform-uppercase c-input_4 c-formatter_3"
                  type="text" maxLength="18" />
                <label htmlFor="p_card_no_0" className="form-input-hint">
                  登机证件号码
                </label>
                <div className="c-repeat_10" style={{ display: "none" }}>
                </div>
              </div>
            </div>
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
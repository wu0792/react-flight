import React, { Component } from 'react';
import {setTooltip, hideTooltip, revertHideTooltip} from '../generic/eventUtil';
import PassengerNameHover from './PassengerNameHover'

class Passenger extends Component {
    render() {
        return (
<div className="basic-card J_passenger">
  <div className="passenger-info">
    <div className="form">
      <div className="form-line J_lang">
        <div className="J_passenger_name_zh">
          <input id="p_name_0" maxLength="15" className="form-input form-input-block J_inputName c-input_4 p-autocomplete_19"
          type="text"/>
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
           ref={(el) => {this.icon1=el;}} 
           onMouseOver={(el) => setTooltip(this.icon1, this.tip1Msg)}
           onMouseOut={(el) => hideTooltip(this.tip1Msg)}>
        </i>
        <PassengerNameHover
          revertHideTooltip={() => revertHideTooltip(this.tip1Msg)}
          hideTooltip={() => hideTooltip(this.tip1Msg)}
          ref={(el) => {this.tip1Msg=el.hoverTip;}}/>
      </div>
      <div className="form-line passenger-identity">
        <div className="form-item">
          <div className="form-select c-dropdown_2">
            <div className="form-select-txt">
              <span>
                身份证
              </span>
              <i className="ico-caret-down">
              </i>
            </div>
          </div>
        </div>
        &nbsp;
        <div className="form-item">
          <input id="p_card_no_0" className="form-input J_input text-transform-uppercase c-input_4 c-formatter_3"
          type="text" maxLength="18"/>
          <label htmlFor="p_card_no_0" className="form-input-hint">
            登机证件号码
          </label>
          <div className="c-repeat_10" style={{display: "none"}}>
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
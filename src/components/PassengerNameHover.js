import React, { Component } from 'react';
let classNames = require('classnames');

class PassengerNameHover extends Component {
    constructor(props){
      super(props);
      this.state = {
        activeIndex: 0
      };
    }

    clickHeaderHandler(i){
        this.setState({activeIndex: i});
        // debugger;
        this.forceUpdate();
    }

    render() {
        const imgPassportOld = require('../images/passport_old.png')
        const imgPassport = require('../images/passport.png')
        const imgHKPassport = require('../images/hk_passport.png')
        const imgTWPassport = require('../images/tw_passport.png')
        const imgTWNativePassport = require('../images/tw_native_passport.png')

        const getHeaderClass = (i) => {
            return classNames({ 'current': this.state.activeIndex === i });
        }

        const getContentClass = (i) => {
            return classNames('tab-panel', { 'none': this.state.activeIndex !== i });
        }

        return (
<div className="tooltip tooltip-licence tipMsg none"
 onMouseOver={ () => this.props.revertHideTooltip()} 
 onMouseOut={() => this.props.hideTooltip()}
 ref={(el) => this.hoverTip = el}>
           <div className="tab-menu">
    <a className={getHeaderClass(0)} onClick={() => this.clickHeaderHandler(0)}>填写说明</a>
    <a className={getHeaderClass(1)} onClick={() => this.clickHeaderHandler(1)}>老版护照</a> 
    <a className={getHeaderClass(2)} onClick={() => this.clickHeaderHandler(2)}>新版护照</a> 
    <a className={getHeaderClass(3)} onClick={() => this.clickHeaderHandler(3)}>港澳通行证</a> 
    <a className={getHeaderClass(4)} onClick={() => this.clickHeaderHandler(4)}>台湾通行证</a> 
    <a className={getHeaderClass(5)} onClick={() => this.clickHeaderHandler(5)}>台胞证</a> 

   </div>
   <div className="tab-cont">
    <div className={getContentClass(0)}>
     <ol>
      <li>乘客姓名需与登机所持证件上的名字一致。</li>
      <li>中文姓名：
       <ul>
        <li>请在中文姓名模式下输入。</li>
        <li>若持护照登机，必须确认护照上有中文姓名。</li>
        <li>生僻字可用拼音代替，例如：“王鬳”可输入为“王yan”。</li>
        <li>姓名中含特殊符号“&middot;&middot;”“_”等，可不用输入，例如：<br />“汉祖然&middot;买买提”可输入为汉祖然买买提。</li>
        <li>香港、台湾、澳门的护照不支持国内航班，请改用其他证件。</li>
       </ul></li>
      <li>英文姓名:
       <ul>
        <li>请在英文姓名模式下输入。</li>
        <li>若持护照登机，必须按照护照顺序区分姓与名。Middlename 填写在Given name（名）中，不区分大小写。如potter（姓）/joe jerad，在Surname（姓）中填写potter，在Given name（名）中输入joe jerad。</li>
        <li>姓与名总长度≤26个字符，若过长请使用缩写。</li>
       </ul></li>
     </ol>
    </div>
    <div className={getContentClass(1)}>
     <p className="tit">请严格按照登记时所用证件信息填写。</p>
     <img src={imgPassportOld} alt="老版护照" />
    </div>
    <div className={getContentClass(2)}>
     <p className="tit">请严格按照登记时所用证件信息填写。</p>
     <img src={imgPassport} alt="新版护照" />
    </div>
    <div className={getContentClass(3)}>
     <p className="tit">请严格按照登记时所用证件信息填写。</p>
     <img src={imgHKPassport} alt="港澳通行证" />
    </div>
    <div className={getContentClass(4)}>
     <p className="tit">请严格按照登记时所用证件信息填写。</p>
     <img src={imgTWPassport} alt="台湾通行证" />
    </div>
    <div className={getContentClass(5)}>
     <p className="tit">请严格按照登记时所用证件信息填写。</p>
     <img src={imgTWNativePassport} alt="台胞证" />
    </div>
   </div>             
        </div>
        );
    }
}

export default PassengerNameHover;
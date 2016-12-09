import React, { Component } from 'react';

class SideBar extends Component {
    render() {
      let muImg = require('../images/mu.png');

        return (
  <div className="sidebar" id="J_sidebar">
   <div className="sidebar-cont" id="J_sidebar_cont" style={{position: "static"}}>
    <div id="J_flightInfo">
     <div className="flight-info ">
      <div className="flight-city"> 
       <div className="flt-date">
        12-09
        <span className="week">周五</span>
       </div>
       <div className="flt-depart">
        上海
       </div>&nbsp;
       <div className="flt-arrow">
        <i className="ico-arrow"></i>
       </div>&nbsp;
       <div className="flt-arrive">
        广州
       </div>
      </div> 
      <div className="flight-tit"> 
       <span className="flt-airline"><img alt="" height="16" width="16" src={muImg} /> 东方航空 MU5301 </span>
       <span className="plane-type">波音737-800</span> 
       <span className="flt-seat">经济舱</span> 
      </div> 
      <div className="flight-detail">
       <div className="flt-depart">
        <span className="time">07:30</span> 
        <span className="airport">虹桥国际机场T2</span>
       </div>
       <div className="flt-arrow flt-non-stop">
        <div className="cost-time">
         <i className="ico-clock"></i>2h35m
        </div>
        <div className="timeline"> 
         <i className="ico-airport"></i> 
         <i className="dot"></i> 
         <i className="dot dot-end"></i>
        </div>
       </div> 
       <div className="flt-arrive">
        <span className="time">10:05</span>
        <div id="arriveTime_1_1" style={{display: "none"}}>
         到达时间为第2天，2016年12月09日 10时05分
        </div>
        <span className="airport">白云国际机场</span>
       </div>
      </div> 
      <i className="ico-supplier"></i>
      <div id="supplier1" style={{display:"none",margin:"0 20px",width:"200px"}}>
       <h4>产品供应商：</h4>
       <p>东航直营店</p>
       <p>08309276</p>
      </div>
     </div>
    </div>
    <div id="J_priceInfo">
     <div className="flight-cost"> 
      <div className="cost-detail">
       <div className="cost-row">
        <div className="cost-tit"> 
         <span className="cost-package"> <span>成人票套餐</span> <i className="ico-caret-up"></i> </span> 
         <span className="abbr">退改<dfn>&yen;</dfn>123起</span> 
         <div id="TGTable_0_0" style={{display: "none"}}>
          <div className="tab-cont" id="flightTGQ_0_0">
           <table>
            <tbody>
             <tr>
              <th rowSpan="4" className="tit">成人票</th>
              <td className="sub-tit"></td>
              <td className="sub-table">
               <table>
                <tbody>
                 <tr>
                  <th className="col-1" style={{width:"80px"}}>起飞前2小时前</th>
                  <th className="col-1" style={{width:"80px"}}>起飞前2小时后</th>
                 </tr>
                </tbody>
               </table></td>
             </tr>
             <tr>
              <td className="sub-tit">套餐退订费</td>
              <td className="sub-table">
               <table>
                <tbody>
                 <tr>
                  <td className="col-1" style={{width:"80px"}}><span className="price"><dfn>&yen;</dfn>246</span>/人</td>
                  <td className="col-1" style={{width:"80px"}}><span className="price"><dfn>&yen;</dfn>369</span>/人</td>
                 </tr>
                </tbody>
               </table></td>
             </tr>
             <tr>
              <td className="sub-tit">同舱改期费</td>
              <td className="sub-table">
               <table>
                <tbody>
                 <tr>
                  <td className="col-1" style={{width:"80px"}}><span className="price"><dfn>&yen;</dfn>123</span>/人</td>
                  <td className="col-1" style={{width:"80px"}}><span className="price"><dfn>&yen;</dfn>246</span>/人</td>
                 </tr>
                </tbody>
               </table></td>
             </tr>
             <tr className="">
              <td className="sub-tit">签转条件</td>
              <td>不得产品签转</td>
             </tr>
            </tbody>
           </table> 
           <table className="table-and">
            <tbody>
             <tr>
              <th className="tit">备注</th>
              <td>
               <div>
                舱位（M）：票面
                <dfn>&yen;</dfn>1230/人。
               </div></td>
             </tr>
            </tbody>
           </table>
          </div>
         </div>
        </div>
        <div className="corner">
         <span className="price"><dfn>&yen;</dfn>1258</span>
         <span className="num">x 1</span>
        </div> 
       </div>
       <ul id="subItems_0_0" className="cost-list" >
        <li className="cost-row">
         <div className="cost-tit">
          成人票 
         </div>
         <div id="creditTip_0_0_0" style={{display: "none"}}>
          <div style={{display:"inline-block",margin:"0 20px 10px"}}>
           <h4>价值积分的旅游优惠券一张</h4>
           <div>
            <strong>旅游优惠券使用说明：</strong>
           </div>
           <div></div>
          </div>
         </div>
         <div className="corner">
          <span className="price"><dfn>&yen;</dfn>1230</span>
          <span className="num">x 1</span>
         </div></li>
        <li className="cost-row">
         <div className="cost-tit"> 
         </div>
         <div id="creditTip_0_0_1" style={{display: "none"}}>
          <div style={{display:"inline-block",margin:"0 20px 10px"}}>
           <h4>价值积分的旅游优惠券一张</h4>
           <div>
            <strong>旅游优惠券使用说明：</strong>
           </div>
           <div></div>
          </div>
         </div>
         <div className="cost-tit"> 
          <span className="abbr">酒店优惠券</span>
          <div id="packageTip_0_0_1_0" style={{display: "none"}}>
           <div style={{display:"inline-block",margin:"0 20px 10px"}}>
            <div>
             <div>
              <strong>酒店优惠券使用说明：</strong>
              <br />1.每位乘客包含1张100元酒店优惠券。
              <br />2.适用于单价大于300元的国内酒店（含港澳台）房型（旅行社、团购、小时房、特价房除外）。
              <br />3.使用优惠券成功预订并入住、在订单成交后3个工作日内，100元将返还至您的携程账户。
              <br />4.每张优惠券限用一次，每张订单限用一张优惠券，优惠券不得转赠他人。
              <br />5.优惠券自发放之日起30天内有效。
              <br />6.优惠券在有效期内未使用可随机票一起退订，若优惠券已使用或超过使用有效期限，订单发生退订时须返还相应优惠券金额。
              <br />7.对于以不正当方式使用优惠券的用户，包括但不限于恶意套现、恶意下单、利用程序漏洞等行为，携程旅行网有权在不事先通知的情况下作废其优惠券。
             </div>
            </div>
           </div>
          </div>
         </div>
         <div className="corner">
          <span className="price"><dfn>&yen;</dfn>28</span>
          <span className="num">x 1</span>
         </div></li> 
       </ul> 
       <div className="cost-row">
        <div className="cost-tit"> 
         <span>机建（成人）</span> 
        </div>
        <div className="corner">
         <span className="price"><dfn>&yen;</dfn>50</span>
         <span className="num">x 1</span>
        </div> 
       </div> 
       <div className="cost-row">
        <div className="cost-tit"> 
         <span>燃油税（成人）</span> 
        </div>
        <div className="corner">
         免费
        </div> 
       </div> 
      </div> 
      <div className="total-price"> 
       <span id="J_totalPrice"><dfn>&yen;</dfn>1308</span>
      </div>
     </div>
    </div>
    <div id="J_TGQCompareInfo">
     <div id="TGCompareTable" style={{display: "none"}}>
      <div id="TGCompareTable_1" className="tab-cont"> 
       <table className="">
        <tbody>
         <tr>
          <th rowSpan="4" className="tit">成人票</th>
          <td className="sub-tit"></td>
          <td className="sub-table">
           <table>
            <tbody>
             <tr>
              <th className="col-1" style={{width:"80px"}}>起飞前2小时前</th>
              <th className="col-1" style={{width:"80px"}}>起飞前2小时后</th>
             </tr>
            </tbody>
           </table></td>
         </tr>
         <tr>
          <td className="sub-tit">退票费</td>
          <td className="sub-table">
           <table>
            <tbody>
             <tr>
              <td className="col-1" style={{width:"80px"}}><span className="price"><dfn>&yen;</dfn>246</span>/人</td>
              <td className="col-1" style={{width:"80px"}}><span className="price"><dfn>&yen;</dfn>369</span>/人</td>
             </tr>
            </tbody>
           </table></td>
         </tr>
         <tr>
          <td className="sub-tit">同舱改期费</td>
          <td className="sub-table">
           <table>
            <tbody>
             <tr>
              <td className="col-1" style={{width:"80px"}}><span className="price"><dfn>&yen;</dfn>123</span>/人</td>
              <td className="col-1" style={{width:"80px"}}><span className="price"><dfn>&yen;</dfn>246</span>/人</td>
             </tr>
            </tbody>
           </table></td>
         </tr>
         <tr>
          <td className="sub-tit">签转条件</td>
          <td>不得产品签转</td>
         </tr>
        </tbody>
       </table> 
       <table className="table-and">
        <tbody>
         <tr>
          <th className="tit">备注</th>
          <td>
           <div>
            舱位（M）：票面
            <dfn>&yen;</dfn>1230/人。
           </div></td>
         </tr>
        </tbody>
       </table> 
       <table className="table-and">
        <tbody>
         <tr>
          <th rowSpan="4" className="tit">儿童票</th>
          <td className="sub-tit"></td>
          <td className="sub-table">
           <table>
            <tbody>
             <tr>
              <th className="col-1" style={{width:"80px"}}>起飞前2小时前</th>
              <th className="col-1" style={{width:"80px"}}>起飞前2小时后</th>
             </tr>
            </tbody>
           </table></td>
         </tr>
         <tr>
          <td className="sub-tit">退票费</td>
          <td className="sub-table">
           <table>
            <tbody>
             <tr>
              <td className="col-1" style={{width:"80px"}}><span className="price"><dfn>&yen;</dfn>34</span>/人</td>
              <td className="col-1" style={{width:"80px"}}><span className="price"><dfn>&yen;</dfn>68</span>/人</td>
             </tr>
            </tbody>
           </table></td>
         </tr>
         <tr>
          <td className="sub-tit">同舱改期费</td>
          <td className="sub-table">
           <table>
            <tbody>
             <tr>
              <td className="col-1" style={{width:"80px"}}>免费</td>
              <td className="col-1" style={{width:"80px"}}><span className="price"><dfn>&yen;</dfn>34</span>/人</td>
             </tr>
            </tbody>
           </table></td>
         </tr>
         <tr>
          <td className="sub-tit">签转条件</td>
          <td>可以产品签转</td>
         </tr>
        </tbody>
       </table> 
       <table className="table-and">
        <tbody>
         <tr>
          <th className="tit">备注</th>
          <td>
           <div>
            舱位（M）：票面
            <dfn>&yen;</dfn>1230/人。
           </div></td>
         </tr>
        </tbody>
       </table> 
      </div>
     </div>
    </div>
   </div>
  </div>
        );
    }
}

export default SideBar;
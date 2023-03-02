(function(){var e={9181:function(e){function t(e){const t=e.hours+Math.floor(e.minutes/36)<6&&e.minutes<36?e.minutes:0,a=e.hours+Math.floor(e.minutes/36)<6?e.hours+Math.floor(e.minutes/36):0,l=e.days+(e.hours+Math.floor(e.minutes/36)<6?0:1),n=parseFloat("99.99")*l,u=parseFloat("16.99")*a,s=parseFloat("0.45")*t;return{days:n,hours:u,minutes:s,tripCost:n+u+s}}function a(e){return e*parseFloat("1.50")}function l(e,t){return{bcaa:e?.1*t:0}}function n(e,t,a){return{tripGst:e*parseFloat("5")/100,tripPst:e*parseFloat("7")/100,pvrtGst:t*parseFloat("5")/100,accessFeeGst:a*parseFloat("5")/100,accessFeePst:a*parseFloat("7")/100}}e.exports={calculateTripCost:t,calculateDiscounts:l,calculatePvrtCost:a,calculateTax:n}},5913:function(e){function t(e,t){e.setSeconds(0),t.setSeconds(0),e.setMilliseconds(0),t.setMilliseconds(0);const a=e.getTimezoneOffset()-t.getTimezoneOffset(),l=t-e+6e4*a,n=Math.floor(l/864e5),u=Math.floor(l/36e5)-24*n,s=Math.floor(l/6e4)-24*n*60-60*u;return{days:parseInt(n),hours:parseInt(u),minutes:parseInt(s)}}function a(e){const t=1440*e.days+60*e.hours+e.minutes;return t>480?Math.ceil(t/1440):0}e.exports={calculateTripDuration:t,calculatePvrtDays:a}},4879:function(e,t,a){"use strict";var l=a(9242),n=a(3396),u=a(7139),s=a(4870),o={__name:"DatetimeInput",props:{datetime:{type:Date},onChange:{type:Function}},setup(e){const t=e,a=(0,s.iH)("");function u(e){const t=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),l=String(e.getDate()).padStart(2,"0"),n=String(e.getHours()).padStart(2,"0"),u=String(e.getMinutes()).padStart(2,"0");return`${t}-${a}-${l} ${n}:${u}`}function o(){const e=new Date(a.value);t.onChange(e)}return(0,n.bv)((()=>{a.value=u(t.datetime)})),(e,t)=>(0,n.wy)(((0,n.wg)(),(0,n.iD)("input",{type:"datetime-local","onUpdate:modelValue":t[0]||(t[0]=e=>a.value=e),onChange:o},null,544)),[[l.nr,a.value]])}};const c=o;var r=c;const i={class:"tripInputItem__container"};var v={__name:"TripInputItem",props:{label:{type:String}},setup(e){return(t,a)=>((0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("div",null,(0,u.zw)(e.label),1),(0,n.WI)(t.$slots,"default")]))}},d=a(89);const p=(0,d.Z)(v,[["__scopeId","data-v-fd335570"]]);var m=p;const _={class:"tripInputs__container"},f=["checked"],b=["checked"];var g={__name:"TripInputs",props:{startDatetime:{type:Date},endDatetime:{type:Date},onChange:{type:Function},isBcaaMember:{type:Boolean,default:!1},includeAccessFee:{type:Boolean,default:!0},toggleBcaaMember:{type:Function},toggleAccessFee:{type:Function}},setup(e){const t=e;function a(e,a=1){a?t.onChange(e,t.endDatetime):t.onChange(t.startDatetime,e)}return(t,l)=>((0,n.wg)(),(0,n.iD)("div",_,[(0,n.Wm)(m,{label:"Start time"},{default:(0,n.w5)((()=>[(0,n.Wm)(r,{datetime:e.startDatetime,"on-change":e=>a(e,1)},null,8,["datetime","on-change"])])),_:1}),(0,n.Wm)(m,{label:"End time"},{default:(0,n.w5)((()=>[(0,n.Wm)(r,{datetime:e.endDatetime,"on-change":e=>a(e,0)},null,8,["datetime","on-change"])])),_:1}),(0,n.Wm)(m,{label:"BCAA member discount"},{default:(0,n.w5)((()=>[(0,n._)("input",{class:"tripInputs__checkbox",id:"is-bcaa-member",type:"checkbox",checked:e.isBcaaMember,onChange:l[0]||(l[0]=(...t)=>e.toggleBcaaMember&&e.toggleBcaaMember(...t))},null,40,f)])),_:1}),(0,n.Wm)(m,{label:"Include access fee"},{default:(0,n.w5)((()=>[(0,n._)("input",{class:"tripInputs__checkbox",id:"include-access-fee",type:"checkbox",checked:e.includeAccessFee,onChange:l[1]||(l[1]=(...t)=>e.toggleAccessFee&&e.toggleAccessFee(...t))},null,40,b)])),_:1})]))}};const h=(0,d.Z)(g,[["__scopeId","data-v-0f449d11"]]);var y=h;const F={class:"costDetails__container"};var C={__name:"CostDetails",props:{items:{type:Array}},setup(e){return(t,a)=>((0,n.wg)(),(0,n.iD)("div",F,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.items,(e=>((0,n.wg)(),(0,n.iD)("div",{key:e.label,class:"costDetails__item"},[(0,n._)("div",null,(0,u.zw)(e.label),1),(0,n._)("div",null,(0,u.zw)(e.value),1)])))),128))]))}};const $=(0,d.Z)(C,[["__scopeId","data-v-4b2635e0"]]);var D=$;const w={class:"costItem__value"};var T={__name:"CostSummaryItem",props:{label:{type:String},value:{type:String},tooltip:{type:Object},isTotal:{type:Boolean,default:!1}},setup(e){const t=e,a=(0,n.Fl)((()=>t.isTotal?"costItem__total":""));return(t,l)=>((0,n.wg)(),(0,n.iD)("div",{class:(0,u.C_)(["costItem__container",(0,s.SU)(a)])},[(0,n._)("div",null,(0,u.zw)(e.label),1),(0,n._)("div",w,(0,u.zw)(e.value),1),e.tooltip?((0,n.wg)(),(0,n.j4)(D,{key:0,class:"costItem__tooltip",items:e.tooltip},null,8,["items"])):(0,n.kq)("",!0)],2))}};const x=(0,d.Z)(T,[["__scopeId","data-v-0816b644"]]);var I=x;const j={class:"costSummary__container"};var k={__name:"CostSummary",props:{costItems:{type:Array}},setup(e){return(t,a)=>((0,n.wg)(),(0,n.iD)("div",j,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.costItems,(e=>((0,n.wg)(),(0,n.j4)(I,{key:e.label,label:e.label,value:e.value,"is-total":e.isTotal,tooltip:e.tooltip},null,8,["label","value","is-total","tooltip"])))),128))]))}};const S=(0,d.Z)(k,[["__scopeId","data-v-2c58318a"]]);var O=S,A=a(5913),M=a(9181);const P=e=>((0,n.dD)("data-v-b140d6a8"),e=e(),(0,n.Cn)(),e),W={class:"adjustmentCalculator__container"},H=P((()=>(0,n._)("div",{class:"adjustmentCalculator__heading"},"Trip adjustment",-1))),B=["checked"],z=["checked"],G={class:"adjustmentCalculator__duration"};var U={__name:"AdjustmentCalculator",props:{startDatetime:{type:Date},originalCost:{type:Number}},setup(e){const t=e,a=(0,s.iH)(new Date),l=(0,s.iH)(!1),o=(0,s.iH)(!0);function c(){l.value=!l.value}function i(){o.value=!o.value}function v(e){a.value=e}const d=(0,n.Fl)((()=>(0,A.calculateTripDuration)(t.startDatetime,a.value))),p=(0,n.Fl)((()=>{const e=(0,M.calculateTripCost)(d.value),t=o.value?1:0,a=(0,M.calculatePvrtCost)((0,A.calculatePvrtDays)(d.value)),n=Object.values((0,M.calculateDiscounts)(l.value,e.tripCost)).reduce(((e,t)=>e+t)),u=Object.values((0,M.calculateTax)(e.tripCost-n,a,t)).reduce(((e,t)=>e+t));return e.tripCost-n+t+a+u})),_=(0,n.Fl)((()=>{if(Object.values(d.value).some((e=>e<0||isNaN(e))))return"Invalid time range";const e=1==d.value.days?"day":"days",t=1==d.value.hours?"hour":"hours",a=1==d.value.minutes?"minute":"minutes";return`${d.value.days} ${e} ${d.value.hours} ${t} ${d.value.minutes} ${a}`})),f=(0,n.Fl)((()=>{const e=p.value-t.originalCost;return e>=0?`$${e.toFixed(2)}`:`-$${Math.abs(e).toFixed(2)}`})),b=(0,n.Fl)((()=>[{label:"Original total cost",value:`$${t.originalCost.toFixed(2)}`},{label:"Adjusted total cost",value:`$${p.value.toFixed(2)}`},{label:"Adjustment amount",value:f.value,isTotal:!0}]));return(e,t)=>((0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",W,[H,(0,n.Wm)(m,{label:"Adjusted end time"},{default:(0,n.w5)((()=>[(0,n.Wm)(r,{datetime:a.value,"on-change":v},null,8,["datetime"])])),_:1}),(0,n.Wm)(m,{label:"BCAA member discount"},{default:(0,n.w5)((()=>[(0,n._)("input",{class:"adjustmentsCalculator__checkbox",id:"is-bcaa-member",type:"checkbox",checked:l.value,onChange:c},null,40,B)])),_:1}),(0,n.Wm)(m,{label:"Include access fee"},{default:(0,n.w5)((()=>[(0,n._)("input",{class:"adjustmentsCalculator__checkbox",id:"include-access-fee",type:"checkbox",checked:o.value,onChange:i},null,40,z)])),_:1})]),(0,n._)("div",G," Adjusted trip duration: "+(0,u.zw)((0,s.SU)(_)),1),(0,n.Wm)(O,{"cost-items":(0,s.SU)(b)},null,8,["cost-items"])],64))}};const Z=(0,d.Z)(U,[["__scopeId","data-v-b140d6a8"]]);var N=Z;const V=e=>((0,n.dD)("data-v-3cbc282a"),e=e(),(0,n.Cn)(),e),Y={class:"costCalculator__container"},R=V((()=>(0,n._)("div",{class:"costCalculator__heading"},"Cost summary",-1))),E={class:"costCalculator__inputs"},K=V((()=>(0,n._)("hr",{class:"costCalculator__divider"},null,-1))),q={class:"costCalculator__duration"},J=V((()=>(0,n._)("hr",{class:"costCalculator__divider"},null,-1)));var L={__name:"CostCalculator",setup(e){const t=(0,s.iH)(new Date),a=(0,s.iH)(new Date),l=(0,s.iH)(!1),o=(0,s.iH)(!0);function c(){l.value=!l.value}function r(){o.value=!o.value}function i(e,l){t.value=e,a.value=l}const v=(0,n.Fl)((()=>(0,A.calculateTripDuration)(t.value,a.value))),d=(0,n.Fl)((()=>(0,M.calculateTripCost)(v.value))),p=(0,n.Fl)((()=>(0,M.calculateDiscounts)(l.value,d.value.tripCost))),m=(0,n.Fl)((()=>o.value?1:0)),_=(0,n.Fl)((()=>(0,A.calculatePvrtDays)(v.value))),f=(0,n.Fl)((()=>(0,M.calculatePvrtCost)(_.value))),b=(0,n.Fl)((()=>{const e=d.value.tripCost-g.value;return(0,M.calculateTax)(e,f.value,m.value)})),g=(0,n.Fl)((()=>Object.values(p.value).reduce(((e,t)=>e+t)))),h=(0,n.Fl)((()=>Object.values(b.value).reduce(((e,t)=>e+t)))),F=(0,n.Fl)((()=>d.value.tripCost-g.value+m.value+f.value+h.value)),C=(0,n.Fl)((()=>{if(Object.values(v.value).some((e=>e<0||isNaN(e))))return"Invalid time range";const e=1==v.value.days?"day":"days",t=1==v.value.hours?"hour":"hours",a=1==v.value.minutes?"minute":"minutes";return`${v.value.days} ${e} ${v.value.hours} ${t} ${v.value.minutes} ${a}`})),$=(0,n.Fl)((()=>[{label:"Day rate",value:`$${d.value.days.toFixed(2)}`},{label:"Hour rate",value:`$${d.value.hours.toFixed(2)}`},{label:"Minute rate",value:`$${d.value.minutes.toFixed(2)}`}])),D=(0,n.Fl)((()=>{const e={bcaa:"BCAA"};return Object.keys(p.value).map((t=>({label:e[t],value:`$${p.value[t].toFixed(2)}`})))})),w=(0,n.Fl)((()=>[{label:"PVRT days",value:`${_.value}`},{label:"PVRT rate",value:"$1.50"}])),T=(0,n.Fl)((()=>{const e={tripGst:"GST on trip",tripPst:"PST on trip",pvrtGst:"GST on PVRT",accessFeeGst:"GST on access fee",accessFeePst:"PST on access fee"};return Object.keys(b.value).map((t=>({label:e[t],value:`$${b.value[t].toFixed(2)}`})))})),x=(0,n.Fl)((()=>[{label:"Trip cost",value:`$${d.value.tripCost.toFixed(2)}`,tooltip:$.value},{label:"Discounts",value:`-$${g.value.toFixed(2)}`,tooltip:D.value},{label:"Access fee",value:`$${m.value.toFixed(2)}`},{label:"PVRT",value:`$${f.value.toFixed(2)}`,tooltip:w.value},{label:"Tax",value:`$${h.value.toFixed(2)}`,tooltip:T.value},{label:"Total cost",value:`$${F.value.toFixed(2)}`,isTotal:!0}]));return(e,v)=>((0,n.wg)(),(0,n.iD)("div",Y,[R,(0,n._)("div",E,[(0,n.Wm)(y,{"start-datetime":t.value,"end-datetime":a.value,"on-change":i,"is-bcaa-member":l.value,"include-access-fee":o.value,"toggle-bcaa-member":c,"toggle-access-fee":r},null,8,["start-datetime","end-datetime","is-bcaa-member","include-access-fee"])]),K,(0,n._)("div",q," Trip duration: "+(0,u.zw)((0,s.SU)(C)),1),(0,n.Wm)(O,{"cost-items":(0,s.SU)(x)},null,8,["cost-items"]),J,(0,n.Wm)(N,{"start-datetime":t.value,"original-cost":(0,s.SU)(F)},null,8,["start-datetime","original-cost"])]))}};const Q=(0,d.Z)(L,[["__scopeId","data-v-3cbc282a"]]);var X=Q;const ee={class:"navBar__container"};function te(e,t){return(0,n.wg)(),(0,n.iD)("div",ee)}const ae={},le=(0,d.Z)(ae,[["render",te],["__scopeId","data-v-f2a7cc66"]]);var ne=le,ue={__name:"App",setup(e){return(e,t)=>((0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(ne),(0,n.Uk)(" hi "),(0,n.Wm)(X)],64))}};const se=ue;var oe=se;(0,l.ri)(oe).mount("#app")}},t={};function a(l){var n=t[l];if(void 0!==n)return n.exports;var u=t[l]={exports:{}};return e[l](u,u.exports,a),u.exports}a.m=e,function(){var e=[];a.O=function(t,l,n,u){if(!l){var s=1/0;for(i=0;i<e.length;i++){l=e[i][0],n=e[i][1],u=e[i][2];for(var o=!0,c=0;c<l.length;c++)(!1&u||s>=u)&&Object.keys(a.O).every((function(e){return a.O[e](l[c])}))?l.splice(c--,1):(o=!1,u<s&&(s=u));if(o){e.splice(i--,1);var r=n();void 0!==r&&(t=r)}}return t}u=u||0;for(var i=e.length;i>0&&e[i-1][2]>u;i--)e[i]=e[i-1];e[i]=[l,n,u]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,l){var n,u,s=l[0],o=l[1],c=l[2],r=0;if(s.some((function(t){return 0!==e[t]}))){for(n in o)a.o(o,n)&&(a.m[n]=o[n]);if(c)var i=c(a)}for(t&&t(l);r<s.length;r++)u=s[r],a.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return a.O(i)},l=self["webpackChunktrip_calculator"]=self["webpackChunktrip_calculator"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=a.O(void 0,[998],(function(){return a(4879)}));l=a.O(l)})();
//# sourceMappingURL=app.9244a084.js.map
(this["webpackJsonppace-calculator"]=this["webpackJsonppace-calculator"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){"use strict";a.r(n);var t=a(0),c=a(1),s=a(7),l=a.n(s),u=a(4),r=a(8),i=a(5),o=a.n(i),d=(a(14),function(e){var n=Object(c.useState)(!1),a=Object(u.a)(n,2),s=a[0],l=a[1],r=function(n){return e.pad?n.toString().padStart(parseInt(e.pad,10),"0"):n.toString()},i=function(n){var a=n.currentTarget.getAttribute("data-value");null!==a&&(l(!1),e.onChange(parseInt(a,10)))},d=function(e){var n=e.target;n.classList.contains("number-select__option")||n.classList.contains("number-select__value")||l(!1)};return Object(c.useEffect)((function(){return document.addEventListener("mousedown",d,!1),function(){document.removeEventListener("mousedown",d,!1)}})),Object(t.jsx)("div",{className:o()({"number-select":!0,"number-select--active":s}),children:Object(t.jsxs)("div",{className:"number-select__wrapper",children:[Object(t.jsx)("div",{className:"number-select__value",onClick:function(){return l((function(e){return!e}))},children:r(e.value)}),Object(t.jsx)("div",{className:"number-select__options",children:function(){for(var n=[],a=0;a<=parseInt(e.max,10);a++)n.push({displayValue:r(a),value:a});return n.map((function(n){return Object(t.jsx)("div",{className:o()({"number-select__option":!0,"number-select__option--selected":n.value===e.value}),"data-value":n.value,onClick:i,children:n.displayValue},n.displayValue)}))}()})]})})}),v=(a(15),function(e){var n=new Date(1e3*e);return{hours:n.getUTCHours(),minutes:n.getUTCMinutes(),seconds:n.getSeconds()}}),j=function(e){var n=function(n,a){var t=v(e.value);t[n]=a,e.onChange(function(e){return 3600*e.hours+60*e.minutes+e.seconds}(t))},a=v(e.value);return Object(t.jsxs)("div",{className:"duration-select",children:[Object(t.jsx)("div",{className:"duration-select__label",children:e.label}),Object(t.jsxs)("div",{className:"duration-select__input",children:[Object(t.jsx)(d,{name:"hours",value:a.hours,max:"23",onChange:function(e){return n("hours",e)}}),Object(t.jsx)("span",{className:"duration-select__value-label",children:"hrs"}),Object(t.jsx)(d,{name:"minutes",value:a.minutes,max:"59",pad:"2",onChange:function(e){return n("minutes",e)}}),Object(t.jsx)("span",{className:"duration-select__value-label",children:"min"}),Object(t.jsx)(d,{name:"seconds",value:a.seconds,max:"59",pad:"2",onChange:function(e){return n("seconds",e)}}),Object(t.jsx)("span",{className:"duration-select__value-label",children:"sec"})]})]})},m=(a(16),function(e){var n=function(e){return{km:Math.floor(e/1e3),m:e%1e3}},a=function(a,t){var c=n(e.value);c[a]=t,e.onChange(function(e){return 1e3*e.km+e.m}(c))},c=n(e.value);return Object(t.jsxs)("div",{className:"distance-select",children:[Object(t.jsx)("div",{className:"distance-select__label",children:e.label}),Object(t.jsxs)("div",{className:"distance-select__input",children:[Object(t.jsx)(d,{name:"km",value:c.km,max:"100",onChange:function(e){return a("km",e)}}),Object(t.jsx)("span",{className:"distance-select__separator",children:"."}),Object(t.jsx)(d,{name:"m",value:c.m,max:"999",pad:"3",onChange:function(e){return a("m",e)}}),Object(t.jsx)("span",{className:"distance-select__value-label",children:"m"})]})]})}),b=(a(17),function(e){return{minutes:Math.floor(e/60),seconds:e%60}}),h=function(e){var n=function(n,a){var t,c=b(e.value);c[n]=a,e.onChange(60*(t=c).minutes+t.seconds)},a=b(e.value);return Object(t.jsxs)("div",{className:"pace-select",children:[Object(t.jsx)("div",{className:"pace-select__label",children:e.label}),Object(t.jsxs)("div",{className:"pace-select__input",children:[Object(t.jsx)(d,{name:"minutes",value:a.minutes,max:"59",onChange:function(e){return n("minutes",e)}}),Object(t.jsx)("span",{className:"pace-select__separator",children:":"}),Object(t.jsx)(d,{name:"seconds",value:a.seconds,max:"59",pad:"2",onChange:function(e){return n("seconds",e)}}),Object(t.jsx)("span",{className:"pace-select__value-label",children:"min/km"})]})]})},p=(a(18),function(e,n){var a=e/60/(n/60);return Math.round(1e3*a)}),f=function(e,n){var a=e/1e3*(n/60);return Math.round(60*a)},x=function(e,n){var a=e/60/(n/1e3);return Math.round(60*a)},O=function(){var e={duration:0,distance:0,pace:0,changedFields:[]},n=Object(c.useReducer)((function(n,a){var t,c,s;switch(a.type){case"calculator/clear":return e;case"calculator/change":var l=(null===(t=a.payload)||void 0===t?void 0:t.field)?null===(c=a.payload)||void 0===c?void 0:c.field:"",u=null===(s=a.payload)||void 0===s?void 0:s.value,i=function(e){var a=l===e?u:n[e];return a||0},o=i("duration"),d=i("distance"),v=i("pace"),j=[].concat(Object(r.a)(n.changedFields.filter((function(e){return e!==l})).slice(-1)),[l]),m=function(e){return!(j.length<2)&&!j.find((function(n){return n===e}))};return{duration:m("duration")?f(d,v):o,distance:m("distance")?p(o,v):d,pace:m("pace")?x(o,d):v,changedFields:j};default:throw new Error}}),e),a=Object(u.a)(n,2),s=a[0],l=a[1];return Object(t.jsxs)("div",{className:"calculator",children:[Object(t.jsxs)("div",{className:"calculator__header",children:[Object(t.jsx)("div",{children:"Pace Calculator"}),Object(t.jsx)("button",{onClick:function(){return l({type:"calculator/clear"})},children:"Clear"})]}),Object(t.jsx)(j,{label:"Time",value:null===s||void 0===s?void 0:s.duration,onChange:function(e){return l({type:"calculator/change",payload:{field:"duration",value:e}})}}),Object(t.jsx)(m,{label:"Distance",value:null===s||void 0===s?void 0:s.distance,onChange:function(e){return l({type:"calculator/change",payload:{field:"distance",value:e}})}}),Object(t.jsx)(h,{label:"Pace",value:null===s||void 0===s?void 0:s.pace,onChange:function(e){return l({type:"calculator/change",payload:{field:"pace",value:e}})}})]})},_=(a(19),function(){return Object(t.jsx)("div",{className:"app",children:Object(t.jsx)(O,{})})});l.a.render(Object(t.jsx)(_,{}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.9e71a302.chunk.js.map
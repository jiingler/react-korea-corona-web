(this["webpackJsonpreact-korea-corona-web"]=this["webpackJsonpreact-korea-corona-web"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),s=n(8),o=n.n(s),i=(n(16),n(6)),l=n.n(i),j=n(10),u=n(7),d=n(9),b=n(4),m=(n(18),function(){return Object(c.jsxs)("div",{className:"footer",children:[Object(c.jsx)("button",{className:"btn",children:"\uc804\uad6d"}),Object(c.jsx)("button",{className:"btn",children:"\ub3c4\uc2dc\ubcc4"})]})}),h=function(){return Object(c.jsx)("div",{className:"navbar",children:"\uc2e4\uc2dc\uac04 \ucf54\ub85c\ub098 \ub370\uc774\ud130"})},O=function(e){var t=e.regionName,n=e.refreshDateTime;return Object(c.jsxs)("div",{className:"region-title p-3 mb-2",children:[Object(c.jsxs)("h2",{className:"position-title",children:[t," \ud604\ud669"]}),Object(c.jsx)("p",{className:"refresh-datetime",children:n})]})},x=function(e){var t=e.amount;return Object(c.jsx)("p",{className:"amount-sm",children:t})},f=function(e){var t=e.title;return Object(c.jsx)("h5",{className:"title-sm",children:t})},v=function(e){var t=e.title,n=e.amount;return Object(c.jsxs)("div",{className:"p-3 bg-light",children:[Object(c.jsx)(f,{title:t}),Object(c.jsx)(x,{amount:n})]})},p=function(e){var t=e.amount;return Object(c.jsx)("p",{className:"amount-lg",children:t})},N=function(e){var t=e.title;return Object(c.jsx)("h3",{className:"title-lg",children:t})},g=function(e){var t=e.title,n=e.amount;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(N,{title:t}),Object(c.jsx)(p,{amount:n})]})},y=function(e){var t=e.entireCountryData,n=t.updateTime,a=t.todayCase,r=t.totalCase,s=t.nowCase,o=t.totalRecovered,i=t.todayRecovered,l=t.totalDeath,j=t.todayDeath;return Object(c.jsxs)("div",{className:"content text-center px-0",children:[Object(c.jsx)(O,{regionName:"\uc804\uad6d",refreshDateTime:n}),Object(c.jsxs)("div",{className:"row gx-0",children:[Object(c.jsx)("div",{className:"col-12 p-3 mb-3 bg-light",children:Object(c.jsx)(g,{title:"\uc2e0\uaddc\ud655\uc9c4\uc790",amount:a})}),Object(c.jsx)("div",{className:"col-6 p-3 mb-3 bg-light",children:Object(c.jsx)(v,{title:"\ud655\uc9c4\uc790",amount:r})}),Object(c.jsx)("div",{className:"col-6 p-3 mb-3 bg-light",children:Object(c.jsx)(v,{title:"\uaca9\ub9ac\uc9c4\ud589\uc911",amount:s})}),Object(c.jsxs)("div",{className:"col-6 p-3 bg-light",children:[Object(c.jsx)("div",{className:"mb-3",children:Object(c.jsx)(v,{title:"\ucd1d \uc644\uce58\uc790\uc218",amount:o})}),Object(c.jsx)("div",{children:Object(c.jsx)(v,{title:"\uc624\ub298 \uc644\uce58\uc790\uc218",amount:i})})]}),Object(c.jsxs)("div",{className:"col-6 p-3 bg-light",children:[Object(c.jsx)("div",{className:"mb-3",children:Object(c.jsx)(v,{title:"\ucd1d \uc0ac\ub9dd\uc790\uc218",amount:l})}),Object(c.jsx)("div",{children:Object(c.jsx)(v,{title:"\uc624\ub298 \uc0ac\ub9dd\uc790\uc218",amount:j})})]})]})]})},C=function(e){return fetch(e,{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS"}}).then((function(e){return e.json()}))},T="7e7c57e81fdf04a63f2a64645c11e1780",w="https://api.corona-19.kr/korea/?serviceKey=".concat(T),D="https://api.corona-19.kr/korea/country/new/?serviceKey=".concat(T);var k=function(){var e=Object(a.useState)({updateTime:"1970/01/01 00:00:00",todayCase:0,totalCase:0,nowCase:0,totalRecovered:0,todayRecovered:0,totalDeath:0,todayDeath:0}),t=Object(b.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)([]),o=Object(b.a)(s,2),i=(o[0],o[1]);return Object(a.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){var t,n,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([C(w).then((function(e){return{updateTime:e.updateTime,todayCase:0,totalCase:e.TotalCase,nowCase:e.NowCase,totalRecovered:e.TotalRecovered,todayRecovered:e.TodayRecovered,totalDeath:e.TotalDeath,todayDeath:e.TodayDeath}})),C(D).then((function(e){return console.log(e),Object.values(e).filter((function(e){return e.countryName&&!["\uac80\uc5ed"].includes(e.countryName)}))}))]);case 2:t=e.sent,n=Object(b.a)(t,2),c=n[0],a=n[1],c.todayCase=a.filter((function(e){return"\ud569\uacc4"===e.countryName}))[0].newCase,a=Object(u.a)(a.filter((function(e){return"\ud569\uacc4"!==e.countryName}))),r(Object(j.a)({},c)),i(Object(u.a)(a));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(h,{}),Object(c.jsx)("div",{className:"container",children:Object(c.jsx)(y,{entireCountryData:n})}),Object(c.jsx)(m,{})]})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(k,{})}),document.getElementById("root")),R()}},[[19,1,2]]]);
//# sourceMappingURL=main.84e394e3.chunk.js.map
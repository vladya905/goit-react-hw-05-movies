"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[22],{22:function(t,e,r){r.r(e),r.d(e,{default:function(){return l}});var n=r(439),a=r(791),c=r(689),u=r(87),s=r(910),o="PageHeading_title__1wPIF",i=r(184);function p(t){var e=t.text;return(0,i.jsx)("h1",{className:o,children:e})}function l(){var t=(0,c.TH)(),e=(0,a.useState)(null),r=(0,n.Z)(e,2),o=r[0],l=r[1];return(0,a.useEffect)((function(){(0,s.$9)("day").then(l)}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(p,{text:"Trending today"}),o&&(0,i.jsx)("ul",{children:o.map((function(e){return(0,i.jsx)("li",{children:(0,i.jsx)(u.rU,{to:"movies/".concat(e.id),state:{from:t,label:"Go to Home"},children:e.title})},e.id)}))})]})}},910:function(t,e,r){r.d(e,{$9:function(){return i},Jx:function(){return s},LI:function(){return h},Ts:function(){return l}});var n=r(861),a=r(757),c=r.n(a),u=r(243),s={IMG:"https://image.tmdb.org/t/p/w342",PATH:"movie",HOME:"trending",SEARCH:"search"},o=u.Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"666f674b2147a48db5c31afa3c61145a"}});function i(t){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.get("".concat(s.HOME,"/").concat(s.PATH,"/").concat(e));case 3:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",Error(t.t0));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function l(t){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.get("".concat(s.SEARCH,"/").concat(s.PATH),{params:{language:"en-US",query:e,include_adult:!1}});case 3:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function h(t,e){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function t(e,r){var n,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.get("".concat(s.PATH,"/").concat(r).concat(e),{params:{language:"en-US"}});case 3:return n=t.sent,a=n.data,t.abrupt("return",a);case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=22.8b17972c.chunk.js.map
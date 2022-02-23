"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[806,338,929,214],{3338:function(n,t,e){e.r(t),e.d(t,{default:function(){return i}});var r=e(3929),u=e(6871),a=e(184);function i(n){var t=n.item,e=t.id,i=t.title,c=t.name,o={from:(0,u.TH)()};return(0,a.jsx)(r.ListItemStyled,{children:(0,a.jsx)(r.Link,{to:"/movies/".concat(e),state:o,children:i||c})})}},3929:function(n,t,e){e.r(t),e.d(t,{ListItemStyled:function(){return o},Link:function(){return s}});var r,u,a=e(168),i=e(5751),c=e(501),o=i.ZP.li(r||(r=(0,a.Z)(["\n  max-width: 200px;\n"]))),s=(0,i.ZP)(c.rU)(u||(u=(0,a.Z)(["\n  text-decoration: none;\n  color: black;\n\n  &:hover {\n    color: blue;\n    text-decoration: underline;\n  }\n"])))},3806:function(n,t,e){e.r(t),e.d(t,{default:function(){return p}});var r=e(885),u=e(2791),a=e(577),i=e(4697),c=e(3338),o=e(6214),s=e(184);function p(n){var t,e=n.page,p=(0,u.useState)(null),f=(0,r.Z)(p,2),l=f[0],d=f[1];(0,u.useEffect)((function(){(0,i.hK)(e).then(d).catch((function(n){return(0,a.Am)("No results, please try again")}))}),[e]);var h=(null===l||void 0===l||null===(t=l.results)||void 0===t?void 0:t.length)>0;return(0,s.jsx)(o.HomeListDivStyled,{children:h&&(0,s.jsx)(o.HomeListStyled,{children:l.results.map((function(n){return(0,s.jsx)(c.default,{item:n},n.id)}))})})}},6214:function(n,t,e){e.r(t),e.d(t,{HomeListStyled:function(){return c},HomeListDivStyled:function(){return o}});var r,u,a=e(168),i=e(5751),c=i.ZP.ul(r||(r=(0,a.Z)(["\n  list-style: none;\n  background: linear-gradient(45deg, #fff1eb, #ace0f9);\n  opacity: 0.9;\n  border-radius: 8px;\n  width: fit-content;\n  padding: 40px;\n"]))),o=i.ZP.div(u||(u=(0,a.Z)(["\n  margin-top: 20px;\n  margin-bottom: 20px;\n  margin-left: 40px;\n"])))},4697:function(n,t,e){e.d(t,{hK:function(){return f},V0:function(){return d},TP:function(){return v},zv:function(){return y},tx:function(){return g}});var r=e(5861),u=e(7757),a=e.n(u),i=e(4569),c=e.n(i);c().defaults.baseURL="https://api.themoviedb.org/3";var o="a89b03c28f1cd3b25a7da78bf74e4fe0";function s(n){return p.apply(this,arguments)}function p(){return p=(0,r.Z)(a().mark((function n(t){var e,r,u=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=u.length>1&&void 0!==u[1]?u[1]:"",n.next=3,c().get(t);case 3:return r=n.sent,n.abrupt("return",null!==r&&void 0!==r&&r.data?r.data:Promise.reject(new Error("No results for query ".concat(e))));case 5:case"end":return n.stop()}}),n)}))),p.apply(this,arguments)}function f(){return l.apply(this,arguments)}function l(){return l=(0,r.Z)(a().mark((function n(){var t,e=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.length>0&&void 0!==e[0]?e[0]:1,n.next=3,s("/trending/movie/day?api_key=".concat(o,"&page=").concat(t,"&include_adult=false"));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)}))),l.apply(this,arguments)}function d(n){return h.apply(this,arguments)}function h(){return h=(0,r.Z)(a().mark((function n(t){var e,r=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=r.length>1&&void 0!==r[1]?r[1]:1,n.next=3,s("/search/movie?query=".concat(t,"&api_key=").concat(o,"&page=").concat(e,"&include_adult=false"));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)}))),h.apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s("/movie/".concat(t,"?api_key=").concat(o));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function y(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s("/movie/".concat(t,"/credits?api_key=").concat(o));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return w.apply(this,arguments)}function w(){return w=(0,r.Z)(a().mark((function n(t){var e,r=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=r.length>1&&void 0!==r[1]?r[1]:1,n.next=3,s("/movie/".concat(t,"/reviews?api_key=").concat(o,"&page=").concat(e));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)}))),w.apply(this,arguments)}}}]);
//# sourceMappingURL=806.3e6baf3c.chunk.js.map
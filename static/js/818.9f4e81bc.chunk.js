"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[818,432,922,338,929],{3432:function(t,n,e){e.r(n),e.d(n,{default:function(){return f}});var r=e(8152),u=e(2791),a=e(577),c=e(4697),i=e(3338),o=e(922),s=e(184);function f(t){var n,e=t.page,f=(0,u.useState)(null),p=(0,r.Z)(f,2),l=p[0],d=p[1];(0,u.useEffect)((function(){(0,c.hK)(e).then(d).catch((function(t){return(0,a.Am)("No results, please try again")}))}),[e]);var v=(null===l||void 0===l||null===(n=l.results)||void 0===n?void 0:n.length)>0;return(0,s.jsx)(o.HomeListDivStyled,{children:(0,s.jsx)(o.HomeListStyled,{children:v&&l.results.map((function(t){return(0,s.jsx)(i.default,{item:t},t.id)}))})})}},922:function(t,n,e){e.r(n),e.d(n,{HomeListStyled:function(){return i},HomeListDivStyled:function(){return o}});var r,u,a=e(168),c=e(5751),i=c.ZP.ul(r||(r=(0,a.Z)(["\n  list-style: none;\n"]))),o=c.ZP.div(u||(u=(0,a.Z)(["\n  margin-top: 20px;\n  margin-bottom: 20px;\n"])))},8818:function(t,n,e){e.r(n),e.d(n,{default:function(){return r.default}});var r=e(3432)},3338:function(t,n,e){e.r(n),e.d(n,{default:function(){return a}});var r=e(3929),u=e(184);function a(t){var n=t.item,e=n.id,a=n.title,c=n.name;return(0,u.jsx)(r.ListItemStyled,{children:(0,u.jsx)(r.Link,{to:"/movies/".concat(e),children:a||c})})}},3929:function(t,n,e){e.r(n),e.d(n,{ListItemStyled:function(){return o},Link:function(){return s}});var r,u,a=e(168),c=e(5751),i=e(3504),o=c.ZP.li(r||(r=(0,a.Z)(["\n  max-width: 200px;\n"]))),s=(0,c.ZP)(i.rU)(u||(u=(0,a.Z)(["\n  text-decoration: none;\n"])))},4697:function(t,n,e){e.d(n,{hK:function(){return p},V0:function(){return d},TP:function(){return h},zv:function(){return y},tx:function(){return w}});var r=e(5861),u=e(7757),a=e.n(u),c=e(4569),i=e.n(c);i().defaults.baseURL="https://api.themoviedb.org/3";var o="a89b03c28f1cd3b25a7da78bf74e4fe0";function s(t){return f.apply(this,arguments)}function f(){return f=(0,r.Z)(a().mark((function t(n){var e,r,u=arguments;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=u.length>1&&void 0!==u[1]?u[1]:"",t.next=3,i().get(n);case 3:return r=t.sent,t.abrupt("return",null!==r&&void 0!==r&&r.data?r.data:Promise.reject(new Error("No results for query ".concat(e))));case 5:case"end":return t.stop()}}),t)}))),f.apply(this,arguments)}function p(){return l.apply(this,arguments)}function l(){return l=(0,r.Z)(a().mark((function t(){var n,e=arguments;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.length>0&&void 0!==e[0]?e[0]:1,t.next=3,s("/trending/movie/day?api_key=".concat(o,"&page=").concat(n,"&include_adult=false"));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)}))),l.apply(this,arguments)}function d(t){return v.apply(this,arguments)}function v(){return v=(0,r.Z)(a().mark((function t(n){var e,r=arguments;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.length>1&&void 0!==r[1]?r[1]:1,t.next=3,s("/search/movie?query=".concat(n,"&api_key=").concat(o,"&page=").concat(e,"&include_adult=false"));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)}))),v.apply(this,arguments)}function h(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s("/movie/".concat(n,"?api_key=").concat(o));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s("/movie/".concat(n,"/credits?api_key=").concat(o));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t){return g.apply(this,arguments)}function g(){return g=(0,r.Z)(a().mark((function t(n){var e,r=arguments;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.length>1&&void 0!==r[1]?r[1]:1,t.next=3,s("/movie/".concat(n,"/reviews?api_key=").concat(o,"&page=").concat(e));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)}))),g.apply(this,arguments)}}}]);
//# sourceMappingURL=818.9f4e81bc.chunk.js.map
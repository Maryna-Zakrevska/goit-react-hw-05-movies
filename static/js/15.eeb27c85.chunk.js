"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[15,785,559],{6785:function(n,e,t){t.r(e),t.d(e,{default:function(){return p}});var r=t(885),i=t(2791),u=t(577),a=t(6871),c=t(4697),o=t(559),s=t(184);function p(){var n,e=(0,i.useState)(null),t=(0,r.Z)(e,2),p=t[0],d=t[1],f=(0,a.UO)().movieId;(0,i.useEffect)((function(){(0,c.tx)(f).then(d).catch((function(n){return(0,u.Am)("No results, please try again")}))}),[f]);var l=(null===p||void 0===p||null===(n=p.results)||void 0===n?void 0:n.length)>0;return(0,s.jsx)(o.ReviewsDivStyled,{id:"reviews",children:l?(0,s.jsx)(o.ReviewsListStyled,{children:p.results.map((function(n){var e=n.id,t=n.author,r=n.content;return(0,s.jsxs)(o.ReviewsListItemStyled,{children:[(0,s.jsxs)(o.ReviewAuthorNameStyled,{children:["Author: ",t]}),(0,s.jsx)(o.ReviewContentStyled,{children:r})]},e)}))}):(0,s.jsx)("div",{children:(0,s.jsx)("p",{children:"We don't have any reviews for this movie"})})})}},559:function(n,e,t){t.r(e),t.d(e,{ReviewsDivStyled:function(){return p},ReviewsListStyled:function(){return d},ReviewsListItemStyled:function(){return f},ReviewAuthorNameStyled:function(){return l},ReviewContentStyled:function(){return v}});var r,i,u,a,c,o=t(168),s=t(5751),p=s.ZP.div(r||(r=(0,o.Z)(["\n  margin: 0 20px 20px 40px;\n  border: 4px ridge rgba(33, 33, 33, 0.21);\n  border-radius: 8px;\n  background: linear-gradient(45deg, #ace0f9, #fff1eb);\n  opacity: 0.9;\n  padding: 0 12px 0 12px;\n  width: fit-content;\n"]))),d=s.ZP.ul(i||(i=(0,o.Z)(["\n  padding: 6px;\n  list-style: none;\n"]))),f=s.ZP.li(u||(u=(0,o.Z)(["\n  padding: 6px;\n  border: 4px ridge rgba(33, 33, 33, 0.21);\n  border-radius: 4px;\n"]))),l=s.ZP.b(a||(a=(0,o.Z)(["\n  padding: 4px;\n  margin: 4px;\n  font-weight: 700;\n"]))),v=s.ZP.p(c||(c=(0,o.Z)(["\n  padding: 4px;\n  margin: 4px;\n"])))},1015:function(n,e,t){t.r(e),t.d(e,{default:function(){return r.default}});var r=t(6785)},4697:function(n,e,t){t.d(e,{hK:function(){return d},V0:function(){return l},TP:function(){return h},zv:function(){return y},tx:function(){return g}});var r=t(5861),i=t(7757),u=t.n(i),a=t(4569),c=t.n(a);c().defaults.baseURL="https://api.themoviedb.org/3";var o="a89b03c28f1cd3b25a7da78bf74e4fe0";function s(n){return p.apply(this,arguments)}function p(){return p=(0,r.Z)(u().mark((function n(e){var t,r,i=arguments;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=i.length>1&&void 0!==i[1]?i[1]:"",n.next=3,c().get(e);case 3:return r=n.sent,n.abrupt("return",null!==r&&void 0!==r&&r.data?r.data:Promise.reject(new Error("No results for query ".concat(t))));case 5:case"end":return n.stop()}}),n)}))),p.apply(this,arguments)}function d(){return f.apply(this,arguments)}function f(){return f=(0,r.Z)(u().mark((function n(){var e,t=arguments;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.length>0&&void 0!==t[0]?t[0]:1,n.next=3,s("/trending/movie/day?api_key=".concat(o,"&page=").concat(e,"&include_adult=false"));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)}))),f.apply(this,arguments)}function l(n){return v.apply(this,arguments)}function v(){return v=(0,r.Z)(u().mark((function n(e){var t,r=arguments;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>1&&void 0!==r[1]?r[1]:1,n.next=3,s("/search/movie?query=".concat(e,"&api_key=").concat(o,"&page=").concat(t,"&include_adult=false"));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)}))),v.apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(u().mark((function n(e){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s("/movie/".concat(e,"?api_key=").concat(o));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function y(n){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(u().mark((function n(e){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s("/movie/".concat(e,"/credits?api_key=").concat(o));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return m.apply(this,arguments)}function m(){return m=(0,r.Z)(u().mark((function n(e){var t,r=arguments;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>1&&void 0!==r[1]?r[1]:1,n.next=3,s("/movie/".concat(e,"/reviews?api_key=").concat(o,"&page=").concat(t));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)}))),m.apply(this,arguments)}}}]);
//# sourceMappingURL=15.eeb27c85.chunk.js.map
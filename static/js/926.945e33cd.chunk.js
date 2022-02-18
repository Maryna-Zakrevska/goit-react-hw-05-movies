"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[926,338,929,848],{3338:function(n,t,e){e.r(t),e.d(t,{default:function(){return o}});var r=e(3929),i=e(184);function o(n){var t=n.item,e=t.id,o=t.title,a=t.name;return(0,i.jsx)(r.ListItemStyled,{children:(0,i.jsx)(r.Link,{to:"/movies/".concat(e),children:o||a})})}},3929:function(n,t,e){e.r(t),e.d(t,{ListItemStyled:function(){return c},Link:function(){return s}});var r,i,o=e(168),a=e(5751),u=e(501),c=a.ZP.li(r||(r=(0,o.Z)(["\n  max-width: 200px;\n"]))),s=(0,a.ZP)(u.rU)(i||(i=(0,o.Z)(["\n  text-decoration: none;\n"])))},1926:function(n,t,e){e.r(t),e.d(t,{default:function(){return x}});var r=e(885),i=e(2791),o=e(577),a=e(9135),u=e(3338),c=e(3796),s=e(6871),p=e(501),l=e(5848),d=e(4697),f=e(184);function h(n){var t=n.status,e=(0,i.useState)(""),u=(0,r.Z)(e,2),c=u[0],s=u[1],d=(0,p.lr)(),h=(0,r.Z)(d,2)[1];return(0,f.jsx)(l.SearchbarStyled,{children:(0,f.jsxs)(l.SearchFormStyled,{onSubmit:function(n){n.preventDefault();var t=c.trim();if(""===t)return h({}),void o.Am.error("Please type your query request");h({query:t}),s("")},children:[(0,f.jsx)(l.SearchFormButtonLabelStyled,{children:(0,f.jsx)(l.SearchFormInputStyled,{name:"searchQuery",value:c,onChange:function(n){s(n.target.value.toLowerCase())},type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"})}),(0,f.jsxs)(l.SearchFormButtonStyled,{type:"submit",disabled:"pending"===t,children:[(0,f.jsx)(a.U41,{}),(0,f.jsx)(l.SearchFormButtonSpanStyled,{children:"Search"})]})]})})}function x(n){var t,e,a,l=n.onSubmit,x=n.status,v=n.page,m=n.setStatus,y=(0,i.useState)(null),b=(0,r.Z)(y,2),g=b[0],S=b[1],w=(0,s.TH)(),k=(0,p.lr)(),Z=(0,r.Z)(k,1)[0].get("query");(0,i.useEffect)((function(){""!==Z&&(m(c.q.PENDING),(0,d.V0)(Z,v).then((function(n){var t;null!==n&&void 0!==n&&null!==(t=n.results)&&void 0!==t&&t.length||(0,o.Am)("No results for ".concat(Z)),S(n),m(c.q.RESOLVED)})).catch((function(n){return(0,o.Am)("No results, please try again")})))}),[v,Z,m]),(0,i.useEffect)((function(){return function(){S(null)}}),[]);var j=(null===g||void 0===g||null===(t=g.results)||void 0===t?void 0:t.length)>0,_=null!==(e=null===w||void 0===w||null===(a=w.state)||void 0===a?void 0:a.from)&&void 0!==e?e:"/";return(0,f.jsxs)("div",{children:[(0,f.jsx)(h,{onSubmit:l,status:x}),(0,f.jsx)(p.rU,{to:_,children:"\u21d0 Go back"}),(0,f.jsx)("ul",{children:j&&g.results.map((function(n){return(0,f.jsx)(u.default,{item:n},n.id)}))})]})}},5848:function(n,t,e){e.r(t),e.d(t,{SearchbarStyled:function(){return l},SearchFormStyled:function(){return d},SearchFormButtonStyled:function(){return f},SearchFormButtonSpanStyled:function(){return h},SearchFormInputStyled:function(){return v},SearchFormButtonLabelStyled:function(){return x}});var r,i,o,a,u,c,s=e(168),p=e(5751),l=p.ZP.header(r||(r=(0,s.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),\n    0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),d=p.ZP.form(i||(i=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),f=p.ZP.button(o||(o=(0,s.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  :hover {\n    opacity: 1;\n  }\n"]))),h=p.ZP.span(a||(a=(0,s.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),x=p.ZP.label(u||(u=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n"]))),v=p.ZP.input(c||(c=(0,s.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 16px;\n  padding-right: 4px;\n\n  ::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"])))},4697:function(n,t,e){e.d(t,{hK:function(){return l},V0:function(){return f},TP:function(){return x},zv:function(){return m},tx:function(){return b}});var r=e(5861),i=e(7757),o=e.n(i),a=e(4569),u=e.n(a);u().defaults.baseURL="https://api.themoviedb.org/3";var c="a89b03c28f1cd3b25a7da78bf74e4fe0";function s(n){return p.apply(this,arguments)}function p(){return p=(0,r.Z)(o().mark((function n(t){var e,r,i=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=i.length>1&&void 0!==i[1]?i[1]:"",n.next=3,u().get(t);case 3:return r=n.sent,n.abrupt("return",null!==r&&void 0!==r&&r.data?r.data:Promise.reject(new Error("No results for query ".concat(e))));case 5:case"end":return n.stop()}}),n)}))),p.apply(this,arguments)}function l(){return d.apply(this,arguments)}function d(){return d=(0,r.Z)(o().mark((function n(){var t,e=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.length>0&&void 0!==e[0]?e[0]:1,n.next=3,s("/trending/movie/day?api_key=".concat(c,"&page=").concat(t,"&include_adult=false"));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)}))),d.apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return h=(0,r.Z)(o().mark((function n(t){var e,r=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=r.length>1&&void 0!==r[1]?r[1]:1,n.next=3,s("/search/movie?query=".concat(t,"&api_key=").concat(c,"&page=").concat(e,"&include_adult=false"));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)}))),h.apply(this,arguments)}function x(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(o().mark((function n(t){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s("/movie/".concat(t,"?api_key=").concat(c));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(o().mark((function n(t){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s("/movie/".concat(t,"/credits?api_key=").concat(c));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function b(n){return g.apply(this,arguments)}function g(){return g=(0,r.Z)(o().mark((function n(t){var e,r=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=r.length>1&&void 0!==r[1]?r[1]:1,n.next=3,s("/movie/".concat(t,"/reviews?api_key=").concat(c,"&page=").concat(e));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)}))),g.apply(this,arguments)}}}]);
//# sourceMappingURL=926.945e33cd.chunk.js.map
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[541,98,203,430],{2541:function(n,e,t){t.r(e),t.d(e,{default:function(){return l}});var r=t(885),i=t(2791),a=t(4697),o=t(577),c=t(6871),u=t(9203),s=t(9098),d=t(184);function l(){var n,e=(0,i.useState)(null),t=(0,r.Z)(e,2),l=t[0],p=t[1],f=(0,c.UO)().movieId;(0,i.useEffect)((function(){(0,a.zv)(f).then(p).catch((function(n){return(0,o.Am)("No results, please try again")}))}),[f]);var h=(null===l||void 0===l||null===(n=l.cast)||void 0===n?void 0:n.length)>0;return(0,d.jsx)(s.CastDivStyled,{id:"cast",children:h?(0,d.jsx)(s.CastListStyled,{children:l.cast.map((function(n){var e=n.id,t=n.character,r=n.name,i=n.profile_path;return(0,d.jsxs)("li",{children:[i?(0,d.jsx)(s.CastImgStyled,{width:200,height:"auto",src:(0,u.makeImagePath)(i),alt:r||"actor image"}):(0,d.jsx)(u.PlaceholderIcon,{width:"200",height:"300",fill:"white"}),(0,d.jsx)(s.CastNameStyled,{children:r}),(0,d.jsxs)(s.CastCharacterStyled,{children:["Character: ",t]})]},e)}))}):(0,d.jsx)("div",{children:(0,d.jsx)("p",{children:"We don't have cast information about this movie"})})})}},9098:function(n,e,t){t.r(e),t.d(e,{CastDivStyled:function(){return d},CastListStyled:function(){return l},CastImgStyled:function(){return p},CastNameStyled:function(){return f},CastCharacterStyled:function(){return h}});var r,i,a,o,c,u=t(168),s=t(5751),d=s.ZP.div(r||(r=(0,u.Z)(["\n  margin: 0 20px 20px 40px;\n  border: 4px ridge rgba(33, 33, 33, 0.21);\n  border-radius: 8px;\n  background: linear-gradient(45deg, #ace0f9, #fff1eb);\n  opacity: 0.9;\n  padding: 0 12px 0 12px;\n  width: fit-content;\n"]))),l=s.ZP.ul(i||(i=(0,u.Z)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 8px 8px;\n  padding: 6px;\n  list-style: none;\n"]))),p=s.ZP.img(a||(a=(0,u.Z)(["\n  border-radius: 8px;\n"]))),f=s.ZP.p(o||(o=(0,u.Z)(["\n  padding: 4px;\n  margin: 4px;\n  font-weight: 700;\n"]))),h=s.ZP.p(c||(c=(0,u.Z)(["\n  padding: 4px;\n  margin: 4px;\n"])))},9203:function(n,e,t){t.r(e),t.d(e,{PlaceholderIcon:function(){return x},default:function(){return m},makeImagePath:function(){return g}});var r,i,a=t(885),o=t(430),c=t(2791),u=t(4697),s=t(577),d=t(6871),l=["title","titleId"];function p(){return p=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},p.apply(this,arguments)}function f(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function h(n,e){var t=n.title,a=n.titleId,o=f(n,l);return c.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",id:"icon-placeholder",fill:"none",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,strokeWidth:.51,viewBox:"0 0 32 32",ref:e,"aria-labelledby":a},o),t?c.createElement("title",{id:a},t):null,r||(r=c.createElement("path",{d:"m10.68 8.24 13.26-2.76.56 2.76M5.4 19.76 3.33 9.78l2.07-.44M16.95 24.4 6.8 26.5l-.44-2.1m19.61-9.17 1.44 7-1.46.3M5.4 24.4h20.58V8.24m-1.46 0H5.4v14.67"})),i||(i=c.createElement("path",{d:"m8.8 20.38 3.15-8.4 2.9 3.64m.66.79 1.44 1.77 2.48-1.87 3.71 5.58H8.44m13.93-10.8a1.87 1.87 0 0 1-1.1 3.35c-.76 0-1.43-.46-1.71-1.13m-.1-1.02a1.85 1.85 0 0 1 2.08-1.54h-.01m7.91-5.25-26.88 21"})))}var x=c.forwardRef(h),v=(t.p,t(184));function g(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n&&"https://image.tmdb.org/t/p/w342".concat(n)}function m(){var n=(0,c.useState)({poster_path:"",original_title:"",title:"",genres:[],vote_average:0,overview:"",release_date:""}),e=(0,a.Z)(n,2),t=e[0],r=e[1],i=(0,d.UO)().movieId;(0,c.useEffect)((function(){(0,u.TP)(i).then(r).catch((function(n){return(0,s.Am)("No results, please try again")}))}),[i]);var l=(0,d.TH)(),p=(0,c.useRef)(l),f=(0,d.s0)(),h=t.poster_path,m=t.original_title,y=t.title,b=t.genres,w=t.vote_average,j=t.overview,k=t.release_date,Z="(".concat(null===k||void 0===k?void 0:k.slice(0,4),")"),S=(null===b||void 0===b?void 0:b.length)>0?b.map((function(n){return n.name})).join(", "):"";return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(o.GoBackButton,{type:"button",onClick:function(){var n,e,t;f(null!==(n=null===p||void 0===p||null===(e=p.current)||void 0===e||null===(t=e.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/")},children:"\u21d0 Go back"}),(0,v.jsxs)(o.MovieDetailsPageDivStyled,{children:[(0,v.jsx)("div",{children:h?(0,v.jsx)(o.MovieImageStyled,{src:g(h),alt:y||m||"poster image"}):(0,v.jsx)(x,{width:"121",height:"121",fill:"white"})}),(0,v.jsxs)(o.MovieInfoDivStyled,{children:[(0,v.jsxs)(o.TitleMovieStyled,{children:[y||m||"Title"," ",(0,v.jsx)("span",{children:Z})]}),(0,v.jsxs)("p",{children:["User Score: ",10*w,"%"]}),(0,v.jsx)("h2",{children:"Overview"}),(0,v.jsx)("p",{children:j}),(0,v.jsx)("h3",{children:"Genres"}),(0,v.jsx)("p",{children:S})]})]}),(0,v.jsxs)(o.MovieAddInfoDivStyled,{children:[(0,v.jsx)("h3",{children:"Additional information"}),(0,v.jsxs)(o.AddInfoListStyled,{children:[(0,v.jsx)("li",{children:(0,v.jsx)(o.NavLink,{to:"cast#cast",children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(o.NavLink,{to:"reviews#reviews",children:"Reviews"})})]})]}),(0,v.jsx)(d.j3,{})]})}},430:function(n,e,t){t.r(e),t.d(e,{GoBackButton:function(){return h},MovieDetailsPageDivStyled:function(){return x},MovieImageStyled:function(){return v},MovieInfoDivStyled:function(){return g},TitleMovieStyled:function(){return m},MovieAddInfoDivStyled:function(){return y},AddInfoListStyled:function(){return b},NavLink:function(){return w}});var r,i,a,o,c,u,s,d,l=t(168),p=t(5751),f=t(501),h=p.ZP.button(r||(r=(0,l.Z)(["\n  align-items: center;\n  width: 150px;\n  padding: 6px 6px 6px 6px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  margin-left: 40px;\n  border-radius: 8px;\n  box-shadow: 2px 3px 4px 1px rgba(33, 33, 33, 0.21);\n  font-weight: 700;\n  text-decoration: none;\n  text-transform: uppercase;\n  background: linear-gradient(45deg, #fff1eb, #ace0f9);\n  border: 4px ridge rgba(33, 33, 33, 0.21);\n  cursor: pointer;\n\n  &:hover {\n    color: #2156f0;\n    background: white;\n  }\n"]))),x=p.ZP.div(i||(i=(0,l.Z)(["\n  display: flex;\n  flex-direction: row;\n  margin: 0 20px 20px 40px;\n  border: 4px ridge rgba(33, 33, 33, 0.21);\n  border-radius: 8px;\n  background: linear-gradient(45deg, #ace0f9, #fff1eb);\n  opacity: 0.9;\n"]))),v=p.ZP.img(a||(a=(0,l.Z)(["\n  margin: 0;\n  border-radius: 8px;\n"]))),g=p.ZP.div(o||(o=(0,l.Z)(["\n  padding: 0 12px 0 12px;\n"]))),m=p.ZP.h1(c||(c=(0,l.Z)(["\n  display: inline-box;\n  margin: 0;\n  font-size: 28px;\n  box-shadow: 2px 3px 4px 1px rgba(33, 33, 33, 0.21);\n  border-radius: 8px;\n  padding: 8px 8px 8px 0;\n  max-width: fit-content;\n"]))),y=p.ZP.div(u||(u=(0,l.Z)(["\n  display: flex;\n  flex-direction: row;\n  margin: 0 20px 20px 40px;\n  border: 4px ridge rgba(33, 33, 33, 0.21);\n  border-radius: 8px;\n  background: linear-gradient(45deg, #ace0f9, #fff1eb);\n  opacity: 0.9;\n  padding: 0 12px 0 12px;\n"]))),b=p.ZP.ul(s||(s=(0,l.Z)(["\n  list-style: none;\n  justify-content: center;\n"]))),w=(0,p.ZP)(f.OL)(d||(d=(0,l.Z)(["\n  text-decoration: none;\n  font-weight: 700;\n  color: black;\n  &.active {\n    text-decoration: underline;\n    color: #2196f3;\n  }\n  &:hover {\n    color: #2196f3;\n  }\n"])))},4697:function(n,e,t){t.d(e,{hK:function(){return l},V0:function(){return f},TP:function(){return x},zv:function(){return g},tx:function(){return y}});var r=t(5861),i=t(7757),a=t.n(i),o=t(4569),c=t.n(o);c().defaults.baseURL="https://api.themoviedb.org/3";var u="a89b03c28f1cd3b25a7da78bf74e4fe0";function s(n){return d.apply(this,arguments)}function d(){return d=(0,r.Z)(a().mark((function n(e){var t,r,i=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=i.length>1&&void 0!==i[1]?i[1]:"",n.next=3,c().get(e);case 3:return r=n.sent,n.abrupt("return",null!==r&&void 0!==r&&r.data?r.data:Promise.reject(new Error("No results for query ".concat(t))));case 5:case"end":return n.stop()}}),n)}))),d.apply(this,arguments)}function l(){return p.apply(this,arguments)}function p(){return p=(0,r.Z)(a().mark((function n(){var e,t=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.length>0&&void 0!==t[0]?t[0]:1,n.next=3,s("/trending/movie/day?api_key=".concat(u,"&page=").concat(e,"&include_adult=false"));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)}))),p.apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return h=(0,r.Z)(a().mark((function n(e){var t,r=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>1&&void 0!==r[1]?r[1]:1,n.next=3,s("/search/movie?query=".concat(e,"&api_key=").concat(u,"&page=").concat(t,"&include_adult=false"));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)}))),h.apply(this,arguments)}function x(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function n(e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s("/movie/".concat(e,"?api_key=").concat(u));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function n(e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s("/movie/".concat(e,"/credits?api_key=").concat(u));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function y(n){return b.apply(this,arguments)}function b(){return b=(0,r.Z)(a().mark((function n(e){var t,r=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>1&&void 0!==r[1]?r[1]:1,n.next=3,s("/movie/".concat(e,"/reviews?api_key=").concat(u,"&page=").concat(t));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)}))),b.apply(this,arguments)}}}]);
//# sourceMappingURL=541.9e87e6c5.chunk.js.map
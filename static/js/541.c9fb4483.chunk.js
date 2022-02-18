"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[541,203,430],{2541:function(n,e,t){t.r(e),t.d(e,{default:function(){return s}});var r=t(885),i=t(2791),a=t(4697),o=t(577),c=t(6871),l=t(9203),u=t(184);function s(){var n,e=(0,i.useState)(null),t=(0,r.Z)(e,2),s=t[0],d=t[1],p=(0,c.UO)().movieId;(0,i.useEffect)((function(){(0,a.zv)(p).then(d).catch((function(n){return(0,o.Am)("No results, please try again")}))}),[p]);var f=(null===s||void 0===s||null===(n=s.cast)||void 0===n?void 0:n.length)>0;return(0,u.jsx)("div",{children:f?(0,u.jsx)("ul",{children:s.cast.map((function(n){var e=n.id,t=n.character,r=n.name,i=n.profile_path;return(0,u.jsxs)("li",{children:[i?(0,u.jsx)("img",{width:121,height:"auto",src:(0,l.makeImagePath)(i),alt:r||"actor image"}):(0,u.jsx)(l.PlaceholderIcon,{width:"121",height:"121",fill:"white"}),(0,u.jsx)("p",{children:r}),(0,u.jsxs)("p",{children:["Character: ",t]})]},e)}))}):(0,u.jsx)("div",{children:(0,u.jsx)("p",{children:"We don't have cast information about this movie"})})})}},9203:function(n,e,t){t.r(e),t.d(e,{PlaceholderIcon:function(){return v},default:function(){return g},makeImagePath:function(){return m}});var r,i,a=t(885),o=t(430),c=t(2791),l=t(4697),u=t(577),s=t(6871),d=["title","titleId"];function p(){return p=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},p.apply(this,arguments)}function f(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function h(n,e){var t=n.title,a=n.titleId,o=f(n,d);return c.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",id:"icon-placeholder",fill:"none",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,strokeWidth:.51,viewBox:"0 0 32 32",ref:e,"aria-labelledby":a},o),t?c.createElement("title",{id:a},t):null,r||(r=c.createElement("path",{d:"m10.68 8.24 13.26-2.76.56 2.76M5.4 19.76 3.33 9.78l2.07-.44M16.95 24.4 6.8 26.5l-.44-2.1m19.61-9.17 1.44 7-1.46.3M5.4 24.4h20.58V8.24m-1.46 0H5.4v14.67"})),i||(i=c.createElement("path",{d:"m8.8 20.38 3.15-8.4 2.9 3.64m.66.79 1.44 1.77 2.48-1.87 3.71 5.58H8.44m13.93-10.8a1.87 1.87 0 0 1-1.1 3.35c-.76 0-1.43-.46-1.71-1.13m-.1-1.02a1.85 1.85 0 0 1 2.08-1.54h-.01m7.91-5.25-26.88 21"})))}var v=c.forwardRef(h),x=(t.p,t(184));function m(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n&&"https://image.tmdb.org/t/p/w342".concat(n)}function g(){var n,e,t=(0,c.useState)({poster_path:"",original_title:"",title:"",genres:[],vote_average:0,overview:"",release_date:""}),r=(0,a.Z)(t,2),i=r[0],d=r[1],p=(0,s.UO)().movieId;(0,c.useEffect)((function(){(0,l.TP)(p).then(d).catch((function(n){return(0,u.Am)("No results, please try again")}))}),[p]);var f=(0,s.TH)(),h=i.poster_path,g=i.original_title,y=i.title,w=i.genres,j=i.vote_average,b=i.overview,k=i.release_date,Z="(".concat(null===k||void 0===k?void 0:k.slice(0,4),")"),_=(null===w||void 0===w?void 0:w.length)>0?w.map((function(n){return n.name})).join(", "):"",P=null!==(n=null===f||void 0===f||null===(e=f.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies";return(0,x.jsxs)(o.MovieDetailsPageDivStyled,{children:[(0,x.jsx)(o.GoBackLink,{to:P,children:"\u21d0 Go back"}),(0,x.jsx)("div",{children:h?(0,x.jsx)(o.MovieImageStyled,{src:m(h),alt:y||g||"poster image"}):(0,x.jsx)(v,{width:"121",height:"121",fill:"white"})}),(0,x.jsxs)(o.MovieInfoDivStyled,{children:[(0,x.jsxs)(o.TitleMovieStyled,{children:[y||g||"Title"," ",(0,x.jsx)("span",{children:Z})]}),(0,x.jsxs)("p",{children:["User Score: ",10*j,"%"]}),(0,x.jsx)("h2",{children:"Overview"}),(0,x.jsx)("p",{children:b}),(0,x.jsx)("h3",{children:"Genres"}),(0,x.jsx)("p",{children:_})]}),(0,x.jsxs)(o.MovieAddInfoDivStyled,{children:[(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("h3",{children:"Additional information"})}),(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(o.AddInfoListStyled,{children:[(0,x.jsx)("li",{children:(0,x.jsx)(o.NavLink,{to:"cast",children:"Cast"})}),(0,x.jsx)("li",{children:(0,x.jsx)(o.NavLink,{to:"reviews",children:"Reviews"})})]})})]}),(0,x.jsx)(s.j3,{})]})}},430:function(n,e,t){t.r(e),t.d(e,{MovieDetailsPageDivStyled:function(){return h},GoBackLink:function(){return v},MovieImageStyled:function(){return x},MovieInfoDivStyled:function(){return m},TitleMovieStyled:function(){return g},MovieAddInfoDivStyled:function(){return y},AddInfoListStyled:function(){return w},NavLink:function(){return j}});var r,i,a,o,c,l,u,s,d=t(168),p=t(5751),f=t(501),h=p.ZP.div(r||(r=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin: 40px auto 20px 40px;\n"]))),v=(0,p.ZP)(f.rU)(i||(i=(0,d.Z)(["\n  display: inline-flex;\n  align-items: center;\n  width: 80px;\n  padding: 8px 8px 8px 8px;\n  margin-bottom: 20px;\n  border-radius: 4px;\n  box-shadow: 2px 3px 4px 1px rgba(33, 33, 33, 0.21);\n  font-weight: 600;\n  text-decoration: none;\n  &.active {\n    color: #2196f3;\n  }\n  &:hover {\n    color: black;\n  }\n"]))),x=p.ZP.img(a||(a=(0,d.Z)(["\n  margin: 0 auto;\n  border-radius: 12px;\n"]))),m=p.ZP.div(o||(o=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),g=p.ZP.h1(c||(c=(0,d.Z)(["\n  display: inline-flex;\n  font-size: 28px;\n  border-radius: 4px;\n  box-shadow: 2px 3px 4px 1px rgba(33, 33, 33, 0.21);\n  padding: 8px 8px 8px 8px;\n  max-width: fit-content;\n"]))),y=p.ZP.div(l||(l=(0,d.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]))),w=p.ZP.ul(u||(u=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n  justify-content: center;\n"]))),j=(0,p.ZP)(f.OL)(s||(s=(0,d.Z)(["\n  text-decoration: none;\n  font-weight: 600;\n  &.active {\n    text-decoration: underline;  \n    color: #2196f3;\n  }\n  &:hover {\n    color: black;\n  }\n"])))},4697:function(n,e,t){t.d(e,{hK:function(){return d},V0:function(){return f},TP:function(){return v},zv:function(){return m},tx:function(){return y}});var r=t(5861),i=t(7757),a=t.n(i),o=t(4569),c=t.n(o);c().defaults.baseURL="https://api.themoviedb.org/3";var l="a89b03c28f1cd3b25a7da78bf74e4fe0";function u(n){return s.apply(this,arguments)}function s(){return s=(0,r.Z)(a().mark((function n(e){var t,r,i=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=i.length>1&&void 0!==i[1]?i[1]:"",n.next=3,c().get(e);case 3:return r=n.sent,n.abrupt("return",null!==r&&void 0!==r&&r.data?r.data:Promise.reject(new Error("No results for query ".concat(t))));case 5:case"end":return n.stop()}}),n)}))),s.apply(this,arguments)}function d(){return p.apply(this,arguments)}function p(){return p=(0,r.Z)(a().mark((function n(){var e,t=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.length>0&&void 0!==t[0]?t[0]:1,n.next=3,u("/trending/movie/day?api_key=".concat(l,"&page=").concat(e,"&include_adult=false"));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)}))),p.apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return h=(0,r.Z)(a().mark((function n(e){var t,r=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>1&&void 0!==r[1]?r[1]:1,n.next=3,u("/search/movie?query=".concat(e,"&api_key=").concat(l,"&page=").concat(t,"&include_adult=false"));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)}))),h.apply(this,arguments)}function v(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function n(e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u("/movie/".concat(e,"?api_key=").concat(l));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function n(e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u("/movie/".concat(e,"/credits?api_key=").concat(l));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function y(n){return w.apply(this,arguments)}function w(){return w=(0,r.Z)(a().mark((function n(e){var t,r=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>1&&void 0!==r[1]?r[1]:1,n.next=3,u("/movie/".concat(e,"/reviews?api_key=").concat(l,"&page=").concat(t));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)}))),w.apply(this,arguments)}}}]);
//# sourceMappingURL=541.c9fb4483.chunk.js.map
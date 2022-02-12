"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[668,278],{7278:function(e,t,n){n.r(t),n.d(t,{PlaceholderIcon:function(){return v},default:function(){return g},makeImagePath:function(){return x}});var r,i,a=n(8152),c=n(2791),o=n(4697),u=n(577),s=n(6871),l=n(3504),p=["title","titleId"];function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function h(e,t){var n=e.title,a=e.titleId,o=f(e,p);return c.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",id:"icon-placeholder",fill:"none",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,strokeWidth:.51,viewBox:"0 0 32 32",ref:t,"aria-labelledby":a},o),n?c.createElement("title",{id:a},n):null,r||(r=c.createElement("path",{d:"m10.68 8.24 13.26-2.76.56 2.76M5.4 19.76 3.33 9.78l2.07-.44M16.95 24.4 6.8 26.5l-.44-2.1m19.61-9.17 1.44 7-1.46.3M5.4 24.4h20.58V8.24m-1.46 0H5.4v14.67"})),i||(i=c.createElement("path",{d:"m8.8 20.38 3.15-8.4 2.9 3.64m.66.79 1.44 1.77 2.48-1.87 3.71 5.58H8.44m13.93-10.8a1.87 1.87 0 0 1-1.1 3.35c-.76 0-1.43-.46-1.71-1.13m-.1-1.02a1.85 1.85 0 0 1 2.08-1.54h-.01m7.91-5.25-26.88 21"})))}var v=c.forwardRef(h),m=(n.p,n(184));function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e&&"https://image.tmdb.org/t/p/w342".concat(e)}function g(){var e,t,n=(0,c.useState)({poster_path:"",original_title:"",title:"",genres:[],vote_average:0,overview:"",release_date:""}),r=(0,a.Z)(n,2),i=r[0],p=r[1],d=(0,s.UO)().movieId;(0,c.useEffect)((function(){(0,o.TP)(d).then(p).catch((function(e){return(0,u.Am)("No results, please try again")}))}),[d]);var f=(0,s.TH)(),h=i.poster_path,g=i.original_title,w=i.title,y=i.genres,j=i.vote_average,b=i.overview,k=i.release_date,_="(".concat(null===k||void 0===k?void 0:k.slice(0,4),")"),O=(null===y||void 0===y?void 0:y.length)>0?y.map((function(e){return e.name})).join(", "):"",P=null!==(e=null===f||void 0===f||null===(t=f.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,m.jsxs)("div",{children:[(0,m.jsx)(l.rU,{to:P,children:"\u21d0 Go back"}),(0,m.jsx)("div",{children:h?(0,m.jsx)("img",{src:x(h),alt:w||g||"poster image"}):(0,m.jsx)(v,{width:"121",height:"121",fill:"white"})}),(0,m.jsxs)("div",{children:[(0,m.jsxs)("h1",{children:[w||g||"Title"," ",(0,m.jsx)("span",{children:_})]}),(0,m.jsxs)("p",{children:["User Score: ",10*j,"%"]}),(0,m.jsx)("h2",{children:"Overview"}),(0,m.jsx)("p",{children:b}),(0,m.jsx)("h3",{children:"Genres"}),(0,m.jsx)("p",{children:O})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("h3",{children:"Additional information"}),(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:(0,m.jsx)(l.OL,{to:"cast",children:"Cast"})}),(0,m.jsx)("li",{children:(0,m.jsx)(l.OL,{to:"reviews",children:"Reviews"})})]})]}),(0,m.jsx)(s.j3,{})]})}},1668:function(e,t,n){n.r(t),n.d(t,{default:function(){return r.default}});var r=n(7278)},4697:function(e,t,n){n.d(t,{hK:function(){return p},V0:function(){return f},TP:function(){return v},zv:function(){return x},tx:function(){return w}});var r=n(5861),i=n(7757),a=n.n(i),c=n(4569),o=n.n(c);o().defaults.baseURL="https://api.themoviedb.org/3";var u="a89b03c28f1cd3b25a7da78bf74e4fe0";function s(e){return l.apply(this,arguments)}function l(){return l=(0,r.Z)(a().mark((function e(t){var n,r,i=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:"",e.next=3,o().get(t);case 3:return r=e.sent,e.abrupt("return",null!==r&&void 0!==r&&r.data?r.data:Promise.reject(new Error("No results for query ".concat(n))));case 5:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function p(){return d.apply(this,arguments)}function d(){return d=(0,r.Z)(a().mark((function e(){var t,n=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:1,e.next=3,s("/trending/movie/day?api_key=".concat(u,"&page=").concat(t,"&include_adult=false"));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return h=(0,r.Z)(a().mark((function e(t){var n,r=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:1,e.next=3,s("/search/movie?query=".concat(t,"&api_key=").concat(u,"&page=").concat(n,"&include_adult=false"));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function v(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s("/movie/".concat(t,"?api_key=").concat(u));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s("/movie/".concat(t,"/credits?api_key=").concat(u));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return y.apply(this,arguments)}function y(){return y=(0,r.Z)(a().mark((function e(t){var n,r=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:1,e.next=3,s("/movie/".concat(t,"/reviews?api_key=").concat(u,"&page=").concat(n));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),y.apply(this,arguments)}}}]);
//# sourceMappingURL=668.5331082a.chunk.js.map
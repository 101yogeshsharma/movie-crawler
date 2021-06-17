(this.webpackJsonpchallenge4=this.webpackJsonpchallenge4||[]).push([[0],{108:function(e,t,s){},127:function(e,t,s){},131:function(e,t,s){},132:function(e,t,s){},133:function(e,t,s){},134:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s.n(c),i=s(48),n=s.n(i),o=s(90),r=s(15),l=s(151),d=(s(108),s(62)),j=[];var u=Object(d.a)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return console.log("logging in",t.payload),e=t.payload;case"LOGOUT":return console.log("logging out",t.payload),e=t.payload;default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_BY_ID":return console.log("search id",t.payload),e=t.payload;case"SEARCH_BY_KEYWORD":return e=t.payload;default:return e}}}),h=Object(d.b)(u),b=s(7),m=s(29),O=s.n(m),v=(s(127),s(142)),x=s(144),f=s(152),p=s(145),g=function(e){return{type:"SEARCH_BY_ID",payload:e}},y=s(2);function N(){var e=Object(b.f)(),t=Object(r.b)();return Object(y.jsxs)("div",{className:"main-header-div",children:[Object(y.jsx)("h1",{children:"IMDB Crawler"}),Object(y.jsxs)("form",{className:"header-search-form",onSubmit:function(s){return function(s){if(s.preventDefault(),console.log(s.target.tag.value),"id"==s.target.tag.value){var c={id:s.target.keyword.value};O.a.post("/c5/getMovies",c).then((function(s){200===s.status&&(console.log("result by id",s.data.movieList),console.log("response",s.data.movieList),t(g([s.data.movieList])),e.push("/movies/"+c.id))}))}else{var a={keyword:s.target.keyword.value};O.a.post("/c5/getMovies",a).then((function(s){200===s.status&&(console.log("result by name",s.data.movieList),t({type:"SEARCH_BY_KEYWORD",payload:s.data.movieList}),e.push("/search/?q="+a.keyword))})),e.push("/search")}}(s)},children:[Object(y.jsxs)(v.a,{id:"tag",placeholder:"Select Tag",children:[Object(y.jsx)("option",{value:"name",children:"Name"}),Object(y.jsx)("option",{value:"id",children:"ID"})]}),Object(y.jsx)(x.a,{id:"keyword",type:"text",style:{width:"70%"}}),Object(y.jsx)(f.a,{type:"submit",ml:2,mb:1,children:"Search"})]}),Object(y.jsx)(p.a,{mr:2,ml:"auto"})]})}var w=s(3),S=(s(131),s(146)),k=s(147),L=s(148);function R(){var e=Object(c.useState)([]),t=Object(w.a)(e,2),s=t[0],a=t[1],i=Object(c.useState)(1),n=Object(w.a)(i,2),o=n[0],l=n[1],d=Object(r.b)(),j=Object(b.f)();return Object(c.useEffect)((function(){!function(){var e={page:o};O.a.post("/c5/listMovies",e).then((function(e){(e.status=200)&&a(e.data.movieList)}))}()}),[o]),Object(y.jsxs)("div",{className:"home-main-div",children:[Object(y.jsx)("div",{className:"movie-list-div",children:s?s.map((function(e,t){return Object(y.jsxs)(S.a,{m:2,maxW:"200",borderWidth:"1px",borderRadius:"lg",overflow:"hidden",onClick:function(){return function(e){var t={id:e};O.a.post("c5/getMovies",t).then((function(t){200===t.status&&(console.log("resposne",t.data.movieList),d(g([t.data.movieList])),j.push("/movies/"+e))}))}(e.imdbID)},children:[Object(y.jsx)(k.a,{src:e.Poster,alt:"poster not available"}),Object(y.jsxs)(S.a,{p:"6",children:[Object(y.jsxs)(S.a,{d:"flex",alignItems:"baseline",children:[Object(y.jsx)(L.a,{borderRadius:"full",px:"2",colorScheme:"teal",children:"New"}),Object(y.jsxs)(S.a,{color:"gray.500",fontWeight:"semibold",letterSpacing:"wide",fontSize:"xs",textTransform:"uppercase",ml:"2",children:[e.Runtime," \u2022 ",e.Year]})]}),Object(y.jsx)(S.a,{mt:"1",fontWeight:"semibold",as:"h4",lineHeight:"tight",isTruncated:!0,children:e.Title}),Object(y.jsxs)(S.a,{children:[e.BoxOffice,Object(y.jsx)(S.a,{as:"span",color:"gray.600",fontSize:"sm",children:"/ wk"})]})]})]},t)})):Object(y.jsx)("p",{children:"No MOvies Found"})}),Object(y.jsxs)("div",{className:"pagination-div",children:[Object(y.jsx)(f.a,{isDisabled:1===o,onClick:function(){return l(o-1)},children:"Previous"}),Object(y.jsx)(f.a,{onClick:function(){return l(o+1)},children:"Next"})]})]})}var D=s(149);s(132);function I(){var e=Object(r.c)((function(e){return e.search})),t=Object(r.b)(),s=Object(b.f)();return Object(y.jsxs)("div",{className:"search-main-div",children:[Object(y.jsxs)(D.a,{size:"md",mb:3,children:[e.length," Result Found "]}),Object(y.jsx)("div",{className:"search-result-div",children:e?e.map((function(e,c){return Object(y.jsxs)(S.a,{m:2,maxW:"200",borderWidth:"1px",borderRadius:"lg",overflow:"hidden",onClick:function(){return function(e){var c={id:e};O.a.post("/c5/getMovies",c).then((function(c){200===c.status&&(console.log("movie",c.data.movieList),t(g([c.data.movieList])),s.push("/movies/"+e))}))}(e.imdbID)},children:[console.log(e.Poster),Object(y.jsx)(k.a,{size:"sm",src:e.Poster,alt:"poster not available"}),Object(y.jsxs)(S.a,{p:"6",children:[Object(y.jsxs)(S.a,{d:"flex",alignItems:"baseline",children:[Object(y.jsx)(L.a,{borderRadius:"full",px:"2",colorScheme:"teal",children:"New"}),Object(y.jsxs)(S.a,{color:"gray.500",fontWeight:"semibold",letterSpacing:"wide",fontSize:"xs",textTransform:"uppercase",ml:"2",children:[e.Runtime," \u2022 ",e.Year]})]}),Object(y.jsx)(S.a,{mt:"1",fontWeight:"semibold",as:"h4",lineHeight:"tight",isTruncated:!0,children:e.Title}),Object(y.jsxs)(S.a,{children:[e.BoxOffice,Object(y.jsx)(S.a,{as:"span",color:"gray.600",fontSize:"sm",children:"/ wk"})]})]})]},c)})):Object(y.jsx)("p",{children:"No MOvies Found"})})]})}s(133);var C=s(150);function W(){var e=Object(r.c)((function(e){return e.search}));console.log("movies",e);var t=e[0];return console.log(e),Object(y.jsxs)("div",{className:"movie-main-div",children:[Object(y.jsx)("div",{className:"movie-info",children:Object(y.jsx)(k.a,{className:"movie-poster",src:t.Poster})}),Object(y.jsxs)("div",{className:"movie-extras",children:[Object(y.jsx)("div",{className:"movie-title",children:Object(y.jsx)(D.a,{size:"2xl",children:t.Title})}),Object(y.jsxs)("div",{className:"movie-details",children:[Object(y.jsx)(D.a,{mt:5,size:"md",children:"Year:"}),Object(y.jsx)(C.a,{ml:10,size:"2xl",children:t.Year})]})]})]})}var Y=function(){Object(r.c)((function(e){return e.login}));var e=Object(r.b)();return Object(c.useEffect)((function(){O.a.post("/c5/getUserData",{withCredentials:!0}).then((function(t){200===t.status&&e({type:"LOGIN",payload:!0})}))})),Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("div",{className:"app-main-div",children:[Object(y.jsx)(N,{}),Object(y.jsxs)(b.c,{children:[Object(y.jsx)(b.a,{path:"/",exact:!0,component:R}),Object(y.jsx)(b.a,{path:"/search",component:I}),Object(y.jsx)(b.a,{path:"/movies",component:W})]})]})})};n.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(r.a,{store:h,children:Object(y.jsx)(o.a,{children:Object(y.jsx)(l.a,{children:Object(y.jsx)(Y,{})})})})}),document.getElementById("root"))}},[[134,1,2]]]);
//# sourceMappingURL=main.8358d40f.chunk.js.map
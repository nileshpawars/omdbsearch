(this.webpackJsonpfilmography=this.webpackJsonpfilmography||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o),i=(a(13),a(1)),s=a(2),l=a(4),m=a(3),u=a(5),h=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).keywordChanged=function(t){return e.setState({keyword:t.target.value})},e.searchMovie=function(){return fetch("https://www.omdbapi.com/?apikey=d819527d&s=".concat(e.state.keyword)).then((function(e){return e.json()})).then(e.renderMovies)},e.renderMovies=function(t){return e.setState({movies:t.Search})},e.state={keyword:"",movies:[]},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Search Movies"),r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{value:this.state.keyword,onChange:this.keywordChanged,className:"form-control",type:"text",placeholder:"Enter movie name"}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{onClick:this.searchMovie,className:"btn- btn-primary"},"Search"))),r.a.createElement("div",{className:"row"},this.state.movies.map((function(e){return r.a.createElement("div",{className:"col-md-4 movieBox"},r.a.createElement("div",{className:"movePoster"},r.a.createElement("img",{src:e.Poster,className:"img-fluid"})),r.a.createElement("h3",{className:"moveTitle"},e.Title),r.a.createElement("div",{className:"moveYear"},e.Year),r.a.createElement("div",{className:"moveType"},e.Type))}))))}}]),t}(r.a.Component),d=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"pageTitle"},"OMDb Client"),r.a.createElement(h,null))}}]),t}(r.a.Component),v=(a(14),function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.8747e99b.chunk.js.map
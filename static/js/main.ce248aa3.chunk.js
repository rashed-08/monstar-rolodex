(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),s=(n(14),n(1)),i=n(2),l=n(4),u=n(3),h=n(5),m=(n(15),n(16),n(17),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(this.props.monstar.id,"?set=set2&size=180x180")}),r.a.createElement("h2",null,this.props.monstar.name),r.a.createElement("p",null,this.props.monstar.email))}}]),t}(a.Component)),p=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"cardlist"},this.props.monsters.map(function(e){return r.a.createElement(m,{key:e.id,monstar:e})}))}}]),t}(a.Component),d=(n(18),function(e){var t=e.placeholder,n=e.handleChange;return r.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n})}),f=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={monsters:[],searchField:""},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({monsters:t})})}},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,a=t.searchField,c=n.filter(function(e){return e.name.toLowerCase().includes(a.toLowerCase())});return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Monstar Rolodex"),r.a.createElement(d,{placeholder:"Search monstar",handleChange:function(t){e.setState({searchField:t.target.value})}}),r.a.createElement(p,{monsters:c}))}}]),t}(a.Component);o.a.render(r.a.createElement(f,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.ce248aa3.chunk.js.map
(this["webpackJsonpreactEmployeeDirectory.io"]=this["webpackJsonpreactEmployeeDirectory.io"]||[]).push([[0],{36:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},64:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(0),s=c.n(r),a=c(23),i=c.n(a),l=c(26),j=c(2),o=c(10),d=c(28);var h=function(e){return Object(n.jsx)("div",Object(d.a)({className:"container".concat(e.fluid?"-fluid":"")},e))},u=c(24),m=c.n(u);c(36);var b=function(e){return Object(n.jsx)("div",{children:Object(n.jsxs)("table",{className:"emp-list",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"col",children:"Image"}),Object(n.jsx)("th",{scope:"col",children:"Name"}),Object(n.jsx)("th",{scope:"col",children:"Phone"}),Object(n.jsx)("th",{scope:"col",children:"Email"}),Object(n.jsx)("th",{scope:"col",children:"DOB"})]})}),Object(n.jsx)("tbody",{children:e.results.map((function(e,t){return Object(n.jsxs)("tr",{className:"employee-data",children:[Object(n.jsx)("td",{className:"emp-list-img",children:Object(n.jsx)("img",{alt:e.title,className:"img.fluid",src:e.picture.medium})},e.index),Object(n.jsx)("td",{className:"emp-list-name",children:Object(n.jsxs)("p",{children:[e.name.first," ",e.name.last]})},e.index),Object(n.jsx)("td",{className:"emp-list-phone",children:Object(n.jsx)("p",{children:e.cell})},e.index),Object(n.jsx)("td",{className:"emp-list-email",children:Object(n.jsx)("p",{children:e.email})},e.index),Object(n.jsx)("td",{className:"emp-list-bday",children:Object(n.jsx)(m.a,{date:e.dob.date,format:"MM/DD/YYYY"})},e.index)]})}))})]})})},O=c(25),x=c.n(O),p=function(){return x.a.get("https://randomuser.me/api/?results=200&nat=us")};c(54);var f=function(e){return Object(n.jsx)("form",{className:"search",children:Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"language",children:"Search Term:"}),Object(n.jsx)("input",{value:e.search,onChange:e.handleInputChange,name:"term",list:"term",type:"text",className:"form-control",placeholder:"Search by First Name",id:"term"})]})})};var g=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(r.useState)(""),i=Object(o.a)(a,2),l=i[0],j=i[1],d=Object(r.useState)(""),u=Object(o.a)(d,2),m=u[0],O=u[1],x=Object(r.useState)([]),g=Object(o.a)(x,2),v=g[0],N=g[1];function y(e){return c.filter((function(t){return t.name.first.toLowerCase().includes(e)}))}return Object(r.useEffect)((function(){if(!l)return p().then((function(e){if(console.log(e),0===e.data.length)throw new Error("please enter a parameter");if("error"===e.data.status)throw new Error(e.data.message);s(e.data.results),N(e.data.results)})).catch((function(e){return O(e)}));y(l)}),[l]),Object(n.jsxs)("div",{children:["Home",Object(n.jsxs)(h,{style:{minHeight:"100vh"},children:[Object(n.jsx)("h1",{className:"text-center",children:"Search Employee Info"}),Object(n.jsx)(f,{handleInputChange:function(e){e.preventDefault(),j(e.target.value),N(y(l))},results:l}),m,Object(n.jsx)(b,{results:v})]})]})};c(55);var v=function(e){return Object(n.jsx)("main",{className:"wrapper",children:e.children})};var N=function(){return Object(n.jsx)(l.a,{children:Object(n.jsx)("div",{children:Object(n.jsx)(v,{children:Object(n.jsx)(j.a,{exact:!0,path:"/",component:g})})})})};c(64),c(65);i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(N,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.5e85558c.chunk.js.map
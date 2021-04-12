(this["webpackJsonpdashboard-react"]=this["webpackJsonpdashboard-react"]||[]).push([[0],{29:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(32),n=c.n(s),r=c(14),i=c(2),l=c(17),o=c.n(l),d=c(33),j=c(34),b=c(35),h=c(39),u=c(38),m=c(13),x=c.n(m),O=c(0),p=function(e){var t=e.title,c=e.children;return Object(O.jsx)("div",{className:"col-lg-6 mb-4",children:Object(O.jsxs)("div",{className:"card shadow mb-4",children:[Object(O.jsx)("div",{className:"card-header py-3",children:Object(O.jsx)("h6",{className:"m-0 font-weight-bold text-primary",children:t})}),Object(O.jsx)("div",{className:"card-body",children:c})]})})},f=function(e){return Object(O.jsx)("div",{className:"col-lg-6 mb-4",children:Object(O.jsxs)("div",{className:"card bg-info text-white shadow",children:[Object(O.jsx)("div",{className:"card-body",children:e.title}),Object(O.jsxs)("div",{className:"card-body",children:["Total de proveedores: ",e.count]})]})})},v=function(){return Object(O.jsx)("footer",{className:"sticky-footer main__container--bg",children:Object(O.jsx)("div",{className:"container my-auto",children:Object(O.jsx)("div",{className:"copyright text-center my-auto",children:Object(O.jsx)("span",{children:"Copyright \xa9 Dashboard Azvi 2021  \ud83d\ude0e"})})})})},g=c.p+"static/media/dummy-avatar.538b0c2d.jpg",N=function(){return Object(O.jsxs)("nav",{className:"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow",children:[Object(O.jsx)("button",{id:"sidebarToggleTop",className:"btn btn-link d-md-none rounded-circle mr-3",children:Object(O.jsx)("i",{className:"fa fa-bars"})}),Object(O.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(O.jsx)("li",{className:"nav-item dropdown no-arrow mx-1",children:Object(O.jsxs)("a",{className:"nav-link dropdown-toggle",href:"/",id:"alertsDropdown",children:[Object(O.jsx)("i",{className:"fas fa-bell fa-fw"}),Object(O.jsx)("span",{className:"badge badge-danger badge-counter",children:"3+"})]})}),Object(O.jsx)("li",{className:"nav-item dropdown no-arrow mx-1",children:Object(O.jsxs)("a",{className:"nav-link dropdown-toggle",href:"/",id:"messagesDropdown",children:[Object(O.jsx)("i",{className:"fas fa-envelope fa-fw"}),Object(O.jsx)("span",{className:"badge badge-danger badge-counter",children:"7"})]})}),Object(O.jsx)("div",{className:"topbar-divider d-none d-sm-block"}),Object(O.jsx)("li",{className:"nav-item dropdown no-arrow",children:Object(O.jsxs)("a",{className:"nav-link dropdown-toggle",href:"/",id:"userDropdown",children:[Object(O.jsx)("span",{className:"mr-2 d-none d-lg-inline text-gray-600 small",children:"Walter White"}),Object(O.jsx)("img",{className:"img-profile rounded-circle",src:g,width:"60",alt:"profile"})]})})]})]})},w=function(e){var t=e.border,c=e.text,a=e.icon,s=e.title,n=e.value,r="card border-left-".concat(null!==t&&void 0!==t?t:""," shadow h-100 py-2"),i="text-xs font-weight-bold text-".concat(null!==c&&void 0!==c?c:""," text-uppercase mb-1"),l="".concat(a," fa-2x text-gray-300");return Object(O.jsx)("div",{className:"col-md-4 mb-4",children:Object(O.jsx)("div",{className:r,children:Object(O.jsx)("div",{className:"card-body",children:Object(O.jsxs)("div",{className:"row no-gutters align-items-center",children:[Object(O.jsxs)("div",{className:"col mr-2",children:[Object(O.jsx)("div",{className:i,children:s}),Object(O.jsx)("div",{className:"h5 mb-0 font-weight-bold text-gray-800",children:n})]}),Object(O.jsx)("div",{className:"col-auto",children:Object(O.jsx)("i",{className:l})})]})})})})},_=function(e){var t=e.title,c=e.countProducts,a=e.countCategories,s=e.countUsers;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"d-sm-flex align-items-center justify-content-between mb-4",children:Object(O.jsx)("h1",{className:"h3 mb-0 main__title",children:t})}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)(w,{border:"primary",text:"primary",icon:"fas fa-clipboard-list",title:"Total de productos",value:c}),Object(O.jsx)(w,{border:"success",text:"success",icon:"fas fa-dollar-sign",title:"Cantidad de usuarios",value:s}),Object(O.jsx)(w,{border:"warning",text:"warning",icon:"fas fa-user-check",title:"Cantidad de categorias",value:a})]})]})},k=(c(64),function(e){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(p,{title:"Ultimo provedor en la base de datos",children:[Object(O.jsx)("div",{className:"text-center",children:Object(O.jsx)("img",{className:"img-fluid px-3 px-sm-4 mt-3 mb-4",style:{width:"25rem"},src:"https://azvi.herokuapp.com/".concat(e.image),alt:"El usuario no posee foto"})}),Object(O.jsxs)("p",{children:["El ultimo es ",e.name," ",e.lastname]}),Object(O.jsxs)("p",{className:"providerDetail ",children:[" ",Object(O.jsx)("u",{children:"Detalles del Ultimo proveedor"})," "]}),Object(O.jsx)("div",{id:"Details",className:" unShowDetails showDetails",children:Object(O.jsxs)("ul",{children:[Object(O.jsxs)("li",{children:[e.location," "]}),Object(O.jsxs)("li",{children:[e.cellphone," "]}),Object(O.jsxs)("li",{children:[e.email," "]})]})})]})})}),y=(c(65),function(e){Object(h.a)(c,e);var t=Object(u.a)(c);function c(){var e;return Object(j.a)(this,c),(e=t.call(this)).state={categories:[],countProducts:"",countCategories:"",countUsers:"",countProvider:[]},e}return Object(b.a)(c,[{key:"componentDidMount",value:function(){var e=Object(d.a)(o.a.mark((function e(){var t,c,a,s,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("https://azvi.herokuapp.com/api/categories");case 3:return t=e.sent,e.next=6,x.a.get("https://azvi.herokuapp.com/api/products");case 6:return c=e.sent,a=c.data.count,e.next=10,x.a.get("https://azvi.herokuapp.com/api/users");case 10:return s=e.sent,e.next=13,x.a.get("https://azvi.herokuapp.com/api/products/latest");case 13:n=e.sent,console.log(n.data),this.setState({categories:t.data,countProducts:a,countCategories:t.data.length,countUsers:s.data.count,countProvider:n.data}),console.log(t.data),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),console.log(e.t0);case 22:case"end":return e.stop()}}),e,this,[[0,19]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(O.jsxs)("div",{id:"content-wrapper",className:"d-flex flex-column main__container--bg",children:[Object(O.jsxs)("div",{id:"content ",className:"main__container--bg",children:[Object(O.jsx)(N,{}),Object(O.jsxs)("div",{className:"container-fluid",children:[Object(O.jsx)(_,{countProducts:this.state.countProducts,countCategories:this.state.countCategories,title:"App dashboard",countUsers:this.state.countUsers}),Object(O.jsxs)("div",{className:"row",children:[this.state.countProvider.map((function(e,t){return Object(O.jsx)(k,{name:e.name,lastname:e.lastname,image:e.image,location:e.location,cellphone:e.cellphone,email:e.email},e.id)})),Object(O.jsx)(p,{title:"Categorias",children:Object(O.jsx)("div",{className:"row",children:this.state.categories.map((function(e,t){return Object(O.jsx)(f,{title:e.name,count:e.providers.length},e.name)}))})})]})]})]}),Object(O.jsx)(v,{})]})}}]),c}(a.Component));var C=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(y,{})})},D=c(12),S=c(11),P=c(8),z=c.n(P),A=function(){var e=Array(15).fill("");return Object(O.jsx)(O.Fragment,{children:e.map((function(e,t){var c;return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:Object(O.jsx)(P.SkeletonTheme,{color:"#ff52529f",highlightColor:"#ff5252",children:Object(O.jsx)(z.a,{height:16,count:1,width:100})})}),Object(O.jsx)("td",{children:Object(O.jsx)(P.SkeletonTheme,{color:"#ff52529f",highlightColor:"#ff5252",children:Object(O.jsx)(z.a,{height:16,count:1,width:100})})}),Object(O.jsx)("td",{children:Object(O.jsx)(P.SkeletonTheme,{color:"#ff52529f",highlightColor:"#ff5252",children:Object(O.jsx)(z.a,{height:16,count:1,width:300})})}),Object(O.jsx)("td",{children:Object(O.jsx)(P.SkeletonTheme,{color:"#ff52529f",highlightColor:"#ff5252",children:Object(O.jsx)(z.a,(c={height:16,circle:!0},Object(S.a)(c,"height",40),Object(S.a)(c,"width",40),c))})})]},t)}))})},U=(c(69),function(e){var t=e.users;return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("table",{className:"table   table-striped  table-bordered table-hover",width:"100%",cellSpacing:"0",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Nombre"}),Object(O.jsx)("th",{children:"Apellido"}),Object(O.jsx)("th",{children:"Email"}),Object(O.jsx)("th",{children:"Avatar"})]})}),Object(O.jsx)("tbody",{children:t.length?t.map((function(e){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.name}),Object(O.jsx)("td",{children:e.lastname}),Object(O.jsx)("td",{children:e.email}),Object(O.jsx)("td",{children:Object(O.jsx)("img",{className:"table__avatar",src:"https://azvi.herokuapp.com/images/users/".concat(e.image),alt:""})})]},"".concat(e.name).concat(e.lastname))})):Object(O.jsx)(A,{})})]})})}),I=(c(70),function(){var e=Object(a.useState)([]),t=Object(D.a)(e,2),c=t[0],s=t[1];return Object(a.useEffect)((function(){fetch("https://azvi.herokuapp.com/api/users").then((function(e){return e.json()})).then((function(e){var t=e.users;s(t)}))}),[]),Object(O.jsxs)("div",{className:"users__container",children:[Object(O.jsx)("h1",{className:"users__title",children:"Usuarios"}),Object(O.jsx)(U,{users:c})]})}),T=c(36),E=(c(29),function(e){var t=e.name,c=e.lastname,a=e.description,s=e.image,n=e.detail;return Object(O.jsxs)("div",{className:"products__card card animate__animated animate__fadeIn ",children:["".concat(t," ").concat(c),Object(O.jsxs)("div",{className:"card-body",children:[Object(O.jsx)("img",{className:"card__img",src:s,alt:""}),Object(O.jsx)("p",{className:"card-text",children:a}),Object(O.jsx)("a",{href:n,className:"products__buttonDetail btn",target:"_blank",children:"Ver detalle"})]})]})}),F=function(){var e=Object(a.useState)({products:[]}),t=Object(D.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(0),r=Object(D.a)(n,2),i=r[0],l=r[1],o=c.next,d=c.previous,j=c.products;return Object(a.useEffect)((function(){fetch("https://azvi.herokuapp.com/api/products?page=".concat(i)).then((function(e){return e.json()})).then((function(e){s(e)}))}),[i]),Object(O.jsxs)("div",{id:"content-wrapper",className:"products__container",children:[Object(O.jsx)("h3",{className:"products__title",children:"Proveedores"}),Object(O.jsxs)("div",{className:"products__buttons",children:[Object(O.jsx)("button",{className:"btn btn-success",disabled:!d,onClick:function(){return l(i-1)},children:"Anterior"}),Object(O.jsx)("button",{className:"btn btn-primary",disabled:!o,onClick:function(){return l(i+1)},children:"Siguiente"})]}),Object(O.jsx)("div",{className:"d-flex flex-wrap  ",children:j.map((function(e,t){return Object(O.jsx)(E,Object(T.a)({},e),"".concat(t).concat(e.lastname))}))})]})},J=function(e){var t=e.classIcon,c=e.title,a=(e.active,e.route);return Object(O.jsxs)(r.b,{className:"text-light m-2",to:a,children:[Object(O.jsx)("i",{className:t}),c]})};J.defaultProps={title:"Dashboard"};var W=J,B=[{classIcon:"fas fa-fw fa-folder",title:"Usuarios",route:"/users"},{classIcon:"fas fa-fw fa-chart-area",title:"Provedores",route:"/products"}],M=(c(76),c.p+"static/media/logoAzvi.83904e29.png"),V=function(){return Object(O.jsxs)("ul",{className:"sidebar__container navbar-nav sidebar__background sidebar sidebar-dark accordion",id:"accordionSidebar",children:[Object(O.jsxs)("div",{className:"sidebar-brand d-flex align-items-center justify-content-center",href:"/",children:[Object(O.jsx)("div",{className:"sidebar-brand-icon",children:Object(O.jsx)("img",{className:"sidebar__logo",src:M,alt:""})}),Object(O.jsx)("div",{className:"sidebar-brand-text mx-3",children:"Admin"})]}),Object(O.jsx)("hr",{className:"sidebar-divider my-0"}),Object(O.jsx)(W,{classIcon:"fas fa-fw fa-tachometer-alt",title:"Dashboard",active:"active",route:"/"}),Object(O.jsx)("hr",{className:"sidebar-divider"}),Object(O.jsx)("div",{className:"sidebar-heading",children:"Actions"}),B.map((function(e){return Object(O.jsx)(W,{classIcon:e.classIcon,title:e.title,active:e.active,route:e.route},e.title)})),Object(O.jsx)("hr",{className:"sidebar-divider d-none d-md-block"})]})},q=function(){return Object(O.jsxs)(r.a,{children:[Object(O.jsx)(V,{}),Object(O.jsxs)(i.c,{children:[Object(O.jsx)(i.a,{path:"/",exact:!0,component:C}),Object(O.jsx)(i.a,{path:"/products",exact:!0,component:F}),Object(O.jsx)(i.a,{path:"/users",exact:!0,component:I}),Object(O.jsx)(i.a,{component:C})]})]})},G=(c(77),document.getElementById("wrapper"));n.a.render(Object(O.jsx)(q,{}),G)}},[[78,1,2]]]);
//# sourceMappingURL=main.8ad1a63b.chunk.js.map
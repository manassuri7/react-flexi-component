(this["webpackJsonpreact-flexi-component"]=this["webpackJsonpreact-flexi-component"]||[]).push([[0],{26:function(e,n,t){e.exports=t(37)},31:function(e,n,t){var a={"./Text":8,"./Text/":8,"./Text/index":8,"./Text/index.js":8,"./TextArea":9,"./TextArea/":9,"./TextArea/index":9,"./TextArea/index.js":9};function r(e){var n=c(e);return t(n)}function c(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id=31},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(22),i=t.n(c),l=t(23),o=t(5),u=t(10),s=t(11),m=t(14),p=t(12),h=t(15),d=function(e){var n=e.config,a=function(e){return e.map((function(e){return c(e)}))},c=function(n){var c=[];n.children&&(c=a(n.children));var i=t(31)("./".concat(n.inputType)).default;return r.a.createElement("div",null,r.a.createElement(i,{props:n,handleChange:e.handleChange}),c)};return r.a.createElement("div",null,a(n))},f=t(13),b=t(17),v=function(e){return function(n){return function(t){function a(){var e,n;Object(u.a)(this,a);for(var t=arguments.length,r=new Array(t),c=0;c<t;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={dataChange:{}},n.handleChange=function(e,t){var a=n.state.dataChange;n.setState(Object(b.a)({},n.state,{dataChange:Object(b.a)({},a,Object(f.a)({},t,e))}))},n.onFlexiSubmit=function(e){e.preventDefault(),console.log(n.state.dataChange)},n}return Object(h.a)(a,t),Object(s.a)(a,[{key:"render",value:function(){var t=this.handleChange,a=this.onFlexiSubmit;return r.a.createElement("div",null,r.a.createElement(n,Object.assign({config:e,handleChange:t,onFlexiSubmit:a},this.props)))}}]),a}(r.a.Component)}},x=[{name:"userName",inputType:"Text",value:"Adam",children:[{name:" Permanent address",inputType:"TextArea",value:"",children:[{name:"Correspondence Address",inputType:"TextArea",value:""},{name:"Mobile",inputType:"Text",value:""}]},{name:"Phone Number",inputType:"Text",value:""}]}],g=function(e){function n(){return Object(u.a)(this,n),Object(m.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(h.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d,{config:this.props.config,handleChange:this.props.handleChange,onFlexiSubmit:this.props.onFlexiSubmit}),r.a.createElement("button",{className:"btn btn-primary",onClick:this.props.onFlexiSubmit},"Submit"))}}]),n}(r.a.Component),E=v(x)(g);var T=function(){return r.a.createElement("div",null,r.a.createElement(l.a,null,r.a.createElement(o.a,{exact:!0,path:"/",component:E})))},C=document.getElementById("root");i.a.render(r.a.createElement(T,null),C)},8:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a);n.default=function(e){var n=e.props,t=e.handleChange;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"label-primary"},n.name),r.a.createElement("input",{type:n.inputType,className:"form-control",onChange:function(e){return t(e.target.value,n.name)}}))}},9:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a);n.default=function(e){var n=e.props,t=e.handleChange;return r.a.createElement("form",{className:"form-group"},r.a.createElement("label",{className:"label-primary"},n.name),r.a.createElement("textarea",{className:"form-control",onChange:function(e){return t(e.target.value,n.name)}}))}}},[[26,1,2]]]);
//# sourceMappingURL=main.b50779a0.chunk.js.map
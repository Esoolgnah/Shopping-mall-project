(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{102:function(e,t,c){},108:function(e,t,c){"use strict";c.r(t);var n,i,s=c(12),a=c(6),o=c(101),l=c(46),j=c.n(l),r=c(100),d=c(0),h=c(9),b=c(103),u=(c(102),c(29)),p=c(97),O=c(1),f=[],m=b.a.div(n||(n=Object(o.a)(["\n  padding: 20px;\n"]))),x=b.a.h4(i||(i=Object(o.a)(["\n  font-size: 25px;\n  color: ",";\n"])),(function(e){return e.\uc0c9\uc0c1}));function g(e){return Object(d.useEffect)((function(){e.\uc2a4\uc704\uce58\ubcc0\uacbd(!0)})),0===e.\ub204\ub978\ud0ed?Object(O.jsx)("div",{children:"0\ubc88\uc9f8 \ub0b4\uc6a9"}):1===e.\ub204\ub978\ud0ed?Object(O.jsx)("div",{children:"1\ubc88\uc9f8 \ub0b4\uc6a9"}):2===e.\ub204\ub978\ud0ed?Object(O.jsx)("div",{children:"2\ubc88\uc9f8 \ub0b4\uc6a9"}):void 0}t.default=function(e){var t=Object(h.f)(),c=Object(u.b)(),n=Object(h.g)().id,i=e.shoes.find((function(e){return e.id==n})),o=Object(d.useState)(!0),l=Object(a.a)(o,2),b=l[0],v=l[1],N=Object(d.useState)(0),y=Object(a.a)(N,2),k=y[0],S=y[1],w=Object(d.useState)(!1),I=Object(a.a)(w,2),J=I[0],C=I[1],E=Object(d.useState)([]),T=Object(a.a)(E,2),K=T[0],L=T[1];Object(d.useEffect)((function(){var e=setTimeout((function(){v(!1)}),2e3);return function(){clearTimeout(e)}}),[]),Object(d.useEffect)((function(){var e=localStorage.getItem("watched"),t=(e=null===e?[]:JSON.parse(e)).indexOf(n);t>-1?(e.splice(t,1),e.unshift(n)):e.unshift(n),e.length>3&&(e=[e[0],e[1],e[2]]),f=e,localStorage.setItem("watched",JSON.stringify(e))}),[]);var q=function(c){!function(t){e.shoes.length<4&&j.a.get("https://codingapple1.github.io/shop/data2.json").then((function(t){t.data&&e.shoes\ubcc0\uacbd([].concat(Object(s.a)(e.shoes),Object(s.a)(t.data)))})).catch((function(){console.log("\uc2e4\ud328")}));var c=localStorage.getItem("watched"),n=(c=null===c?[]:JSON.parse(c)).indexOf(t);n>-1?(c.splice(n,1),c.unshift(t)):c.unshift(t),c.length>3&&(c=[c[0],c[1],c[2]]),f=c,localStorage.setItem("watched",JSON.stringify(c)),v(!0);var i=setTimeout((function(){v(!1)}),2e3)}(c),setTimeout((function(){t.push("/detail/"+c)}),100)};return Object(d.useEffect)((function(){L(f)}),[f]),Object(O.jsxs)("div",{className:"container",children:[Object(O.jsxs)("div",{id:"recentBox",children:[Object(O.jsx)("p",{className:"title",children:"Recently Viewed"}),K.map((function(e,t){return Object(O.jsx)("div",{className:"imgWrapper",children:Object(O.jsx)("img",{className:"img",src:"https://codingapple1.github.io/shop/shoes".concat(Number(e)+1,".jpg"),onClick:function(){q(e)}})},e)}))]}),Object(O.jsx)(m,{children:Object(O.jsx)(x,{className:"red",children:"Detail"})}),Object(O.jsx)("div",{className:b?"my-alert":"my-alert-hide",children:Object(O.jsx)("p",{children:"\uc7ac\uace0\uac00 \uc5bc\ub9c8 \ub0a8\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."})}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"col-md-6",children:Object(O.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes".concat(i.id+1,".jpg"),width:"100%"})}),Object(O.jsxs)("div",{className:"col-md-6 mt-4",children:[Object(O.jsx)("h4",{className:"pt-5",children:i.title}),Object(O.jsx)("p",{children:i.content}),Object(O.jsxs)("p",{children:[i.price,"\uc6d0"]}),Object(O.jsx)("button",{className:"btn btn-primary opacity",onClick:function(){c({type:"\ud56d\ubaa9\ucd94\uac00","\ub370\uc774\ud130":{id:i.id,name:i.title,quan:1,image:"https://codingapple1.github.io/shop/shoes".concat(i.id+1,".jpg"),price:i.price}}),t.push("/cart")},children:"\uc7a5\ubc14\uad6c\ub2c8\uc5d0 \ub2f4\uae30"}),"\xa0",Object(O.jsx)("button",{className:"btn btn-primary opacity",onClick:function(){t.push("/")},children:"\ub4a4\ub85c\uac00\uae30"}),Object(O.jsxs)(r.a,{className:"mt-5",variant:"tabs",defaultActiveKey:"/home",children:[Object(O.jsx)(r.a.Item,{children:Object(O.jsx)(r.a.Link,{eventKey:"link-0",style:{color:"black"},onClick:function(){C(!1),S(0)},children:"0"})}),Object(O.jsx)(r.a.Item,{children:Object(O.jsx)(r.a.Link,{eventKey:"link-1",style:{color:"black"},onClick:function(){C(!1),S(1)},children:"1"})})]}),Object(O.jsx)(p.a,{in:J,classNames:"wow",timeout:500,children:Object(O.jsx)(g,{"\ub204\ub978\ud0ed":k,"\uc2a4\uc704\uce58\ubcc0\uacbd":C})})]})]})]})}}}]);
//# sourceMappingURL=4.a34285f4.chunk.js.map
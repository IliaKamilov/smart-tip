(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{102:function(e,t,n){},108:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n(0),c=n.n(i),o=n(10),a=n.n(o),l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,190)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),i(e),c(e),o(e)}))},s=(n(102),n(56)),d=n(44),u=n(66),j="SET_AUTH",b="UNSET_AUTH",f={loading:!0},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return t.payload;case b:return{loading:!1};default:return e}},h=n(31),m=n(12),p=new Date,O=(new Date(p.setHours(10,0,0,0)),new Date(p.setHours(11,0,0,0)),{date:new Date,employees:[],tip:{cash:0,credit:0},type:"\u05d1\u05d5\u05e7\u05e8"}),g=Object(d.c)(O,{SET_SHIFT:function(e,t){return t},SET_WAGE:function(e,t){return Object(m.a)(Object(m.a)({},e),{},{tip:t.wage})},ADD_EMPLOYEE:function(e,t){return console.log(t),Object(m.a)(Object(m.a)({},e),{},{employees:[].concat(Object(h.a)(e.employees),[t.employee])})},UPDATE_EMPLOYEE:function(e,t){return e.employees=e.employees.map((function(e){return e.name===t.name&&(e=t.data),e})),e},DELETE_EMPLOYEE:function(e,t){return e.employees=e.employees.filter((function(e){return e.name!==t.name})),e}}),v=Object(s.b)({auth:x,shift:g}),y=Object(d.a)({reducer:v,enhancers:undefined}),S=u.c,N=function(){return Object(u.b)()},w=function(e){var t=e.children;return Object(r.jsx)(u.a,{store:y,children:t})},C=n(84),k=n(183),E=n(189),I=n(141),D=n(20),z=n(79),T=n.n(z),B=Object(C.a)({direction:"rtl"}),F=Object(D.b)({plugins:[].concat(Object(h.a)(Object(k.a)().plugins),[T()()])}),L=function(e){var t=e.children;return Object(r.jsx)(E.b,{jss:F,children:Object(r.jsx)(I.a,{theme:B,children:t})})},M=n(53),H=n(17),R=n(33),W=n(13),A=n(185),P=n(152),Y=n(180),_=n(181),G=n(54),U=n(164);var K=Object(d.b)((function(e){return e.shift}),(function(e){if(e){var t=Object(m.a)(Object(m.a)({},e),{},{employees:e.employees.map((function(e){return Object(m.a)(Object(m.a)({},e),{},{get id(){return"W".concat(t.employees.length)},get hours(){var e=this.start.getHours()+this.start.getMinutes()/60,t=this.end.getHours()+this.end.getMinutes()/60,n=(e>t?24-e+t:(+this.end-+this.start)/1e3/3600)||0;return this.percent/100*n},get tip(){return{cash:t.perhour.cash*this.hours,credit:t.perhour.credit*this.hours,get total(){return this.cash+this.credit}}}})})),get hours(){return Object.values(this.employees).reduce((function(e,t){return e+t.hours}),0)},get perhour(){return{cash:this.hours>0?this.tip.cash/this.hours:0,credit:this.hours>0?this.tip.credit/this.hours:0,get total(){return Math.round(this.cash+this.credit)}}}});return t}})),q=n(171),J=n(186),X=n(172),Z=n(182),$=n(168),Q=n(148),V=n(169),ee=n(146),te=n(158),ne=n(170),re=n(5),ie=n(85),ce=n(187),oe=n(150),ae=n(151),le=n(188),se=n(154),de=n(156),ue=n(162),je=n(163),be=n(3),fe=n(142),xe=n(145),he=n(153),me=n(155),pe=n(157),Oe=n(159),ge=n(160),ve=n(161),ye=function(){return Object(r.jsxs)("div",{style:{position:"relative"},children:[Object(r.jsx)(fe.a,{style:{color:"darkGreen"}}),Object(r.jsx)("div",{style:{position:"absolute",bottom:0,right:4},children:Object(r.jsx)(xe.a,{style:{background:"rgba(255,255,255,7)",border:".5px solid darkGreen",width:12,height:12,color:"darkGreen",borderRadius:4}})})]})},Se=function(){return Object(r.jsxs)("div",{style:{position:"relative"},children:[Object(r.jsx)(fe.a,{style:{color:"tomato"}}),Object(r.jsx)("div",{style:{position:"absolute",bottom:0,right:4},children:Object(r.jsx)(ee.a,{style:{background:"rgba(255,255,255,7)",border:".5px solid tomato",width:12,height:12,color:"tomato",borderRadius:4}})})]})},Ne=function(e){var t=e.label,n=e.children,i=c.a.useState(null),o=Object(W.a)(i,2),a=o[0],l=o[1],s=Boolean(a);return Object(r.jsx)(A.a,{open:s,onClose:function(){return l(null)},title:t||"",arrow:!0,disableFocusListener:!0,children:Object(r.jsx)(Q.a,{onClick:function(e){l(e.currentTarget)},children:n})})},we=Object(re.a)({paper:{border:"1px solid #999"}})((function(e){return Object(r.jsx)(ie.a,Object(m.a)({elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},e))})),Ce=Object(re.a)((function(e){return{root:{"&:focus":{backgroundColor:"#ebebeb","& .MuiListItemIcon-root, & .MuiListItemText-primary":{color:e.palette.getContrastText("#ebebeb")}}}}}))(ce.a),ke=c.a.forwardRef((function(e,t){return Object(r.jsx)(oe.a,Object(m.a)({direction:"up",ref:t},e))})),Ee=Object(U.a)((function(e){return{card:{margin:e.spacing(.5,0),boxSizing:"border-box",display:"flex",flexDirection:"column"},body:{width:"100%",padding:e.spacing(.5,1),display:"flex",flexDirection:"column"},header:{background:"#fff",color:"#333",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid #dbdbdb"},row:{display:"flex"},column:{display:"flex",flexDirection:"column"},fullWidth:{width:"100%"},spaceItems:{justifyContent:"space-around"},primaryText:{color:"#0089c0",fontWeight:700},rowLtr:{direction:"ltr",flexDirection:"row-reverse"},centered:{alignItems:"center",justifyContent:"center"},spaced:{boxSizing:"border-box"}}})),Ie=function(e){var t=e.employee,n=Ee(),i=N(),o=c.a.useState(null),a=Object(W.a)(o,2),l=a[0],s=a[1],d=c.a.useState(!1),u=Object(W.a)(d,2),j=u[0],b=u[1],f=c.a.useState(!1),x=Object(W.a)(f,2),h=x[0],m=x[1],p=function(e){var t=e.value,n=t.getHours(),i=t.getMinutes();return Object(r.jsxs)(r.Fragment,{children:[n<10?"0".concat(n):n,":",i<10?"0".concat(i):i]})},O=Boolean(l),g=function(){b(!1)},v=function(){return m(!1)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(ae.a,{className:n.card,children:[Object(r.jsxs)("div",{className:Object(be.a)(n.row,n.fullWidth,n.header),children:[Object(r.jsxs)("div",{className:n.row,style:{alignItems:"center"},children:[Object(r.jsx)("div",{style:{padding:8},children:Object(r.jsx)(le.a,{})}),Object(r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexDirection:"column"},children:[Object(r.jsx)("div",{style:{fontWeight:600,fontSize:16},children:t.name}),Object(r.jsxs)("div",{style:{fontSize:12},children:[t.type," ",Object(r.jsxs)("span",{style:{fontWeight:600},children:[t.percent,"%"]})]})]})]}),Object(r.jsx)(P.a,{onClick:function(e){s(e.currentTarget)},children:Object(r.jsx)(he.a,{})}),Object(r.jsxs)(we,{open:O,anchorEl:l,onClose:function(){return s(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:[Object(r.jsxs)(Ce,{onClick:function(){b(!0),s(null)},children:[Object(r.jsx)(se.a,{children:Object(r.jsx)(me.a,{})}),Object(r.jsx)(de.a,{primary:"\u05e2\u05e8\u05d5\u05da"})]}),Object(r.jsxs)(Ce,{onClick:function(){m(!0),s(null)},children:[Object(r.jsx)(se.a,{children:Object(r.jsx)(pe.a,{})}),Object(r.jsx)(de.a,{primary:"\u05de\u05d7\u05e7"})]})]})]}),Object(r.jsx)("div",{className:n.body,children:Object(r.jsxs)("div",{className:Object(be.a)(n.column,n.spaceItems),children:[Object(r.jsxs)("div",{className:Object(be.a)(n.row,n.spaceItems,n.fullWidth),children:[Object(r.jsx)(Ne,{label:"\u05e9\u05e2\u05ea \u05db\u05e0\u05d9\u05e1\u05d4",children:Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(r.jsx)(ye,{}),Object(r.jsx)("span",{children:Object(r.jsx)(p,{value:t.start})})]})}),Object(r.jsx)(Ne,{label:"\u05e9\u05e2\u05ea \u05d9\u05e6\u05d9\u05d0\u05d4",children:Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(r.jsx)(Se,{}),Object(r.jsx)("span",{children:Object(r.jsx)(p,{value:t.end})})]})}),Object(r.jsx)(Ne,{label:"\u05e9\u05e2\u05d5\u05ea \u05e2\u05d5\u05d1\u05d3 \u05d1\u05d7\u05d9\u05e9\u05d5\u05d1 ".concat(t.percent,"%"),children:Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(r.jsx)(te.a,{style:{height:31,color:"#999"}}),Object(r.jsx)("span",{style:{color:"#333"},children:t.hours.toFixed(2)})]})})]}),Object(r.jsxs)("div",{className:Object(be.a)(n.row,n.spaceItems,n.fullWidth),children:[Object(r.jsx)(Ne,{label:'\u05e1\u05d4"\u05db \u05de\u05d6\u05d5\u05de\u05df \u05dc'.concat(t.name),children:Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(r.jsx)(Oe.a,{style:{height:31,color:"#0089c0"}}),Object(r.jsx)("span",{style:{color:"#333",fontSize:16},children:t.tip.cash.toFixed(2)}),Object(r.jsx)("span",{style:{fontSize:11,marginTop:-6,color:"#999"},children:"\u05de\u05d6\u05d5\u05de\u05df"})]})}),Object(r.jsx)(Ne,{label:'\u05e1\u05d4"\u05db \u05d0\u05e9\u05e8\u05d0\u05d9 \u05dc'.concat(t.name),children:Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(r.jsx)(ge.a,{style:{height:31,color:"#0089c0"}}),Object(r.jsx)("span",{style:{color:"#333",fontSize:16},children:t.tip.credit.toFixed(2)}),Object(r.jsx)("span",{style:{fontSize:11,marginTop:-6,color:"#999"},children:"\u05d0\u05e9\u05e8\u05d0\u05d9"})]})}),Object(r.jsx)(Ne,{label:'\u05e1\u05d4"\u05db \u05d0\u05e9\u05e8\u05d0\u05d9 \u05d5\u05de\u05d6\u05d5\u05de\u05df',children:Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(r.jsx)(ve.a,{style:{height:31,color:"#0089c0"}}),Object(r.jsx)("span",{style:{color:"#333",fontSize:16},children:(t.tip.cash+t.tip.credit).toFixed(2)}),Object(r.jsx)("span",{style:{fontSize:11,marginTop:-6,color:"#999"},children:'\u05e1\u05d4"\u05db'})]})})]})]})})]}),Object(r.jsx)(J.a,{open:j,TransitionComponent:ke,onClose:function(){return b(!1)},children:Object(r.jsx)(Ze,{onCancel:g,employee:t,onSuccess:g})}),Object(r.jsxs)(J.a,{open:h,TransitionComponent:ke,onClose:function(){return m(!1)},children:[Object(r.jsxs)(ue.a,{children:["\u05d4\u05d0\u05dd \u05d0\u05ea\u05d4 \u05d1\u05d8\u05d5\u05d7 \u05e9\u05d1\u05e8\u05e6\u05d5\u05e0\u05da \u05dc\u05de\u05d7\u05d5\u05e7 \u05d0\u05ea ",t.name,"?"]}),Object(r.jsxs)(je.a,{children:[Object(r.jsx)(Q.a,{onClick:v,color:"primary",children:"\u05dc\u05d0"}),Object(r.jsx)(Q.a,{onClick:function(){i({type:"DELETE_EMPLOYEE",name:t.name}),v()},color:"secondary",children:"\u05db\u05df"})]})]})]})},De=n(149),ze=n(165),Te=n(166),Be=n(167),Fe="Backspace",Le="Delete",Me="Enter",He=function(e){var t,n=e.value,i=e.onConfirm,o=e.max,a=e.label,l=Re(),s=c.a.useState((null===n||void 0===n?void 0:n.toString())||"0"),d=Object(W.a)(s,2),u=d[0],j=d[1],b=[[1,2,3],[4,5,6],[7,8,9],[".",0,Me]];function f(e){var t=isNaN(Number(e.key))?e.key:Number(e.key);if(Boolean(Array.from(b,(function(e){return e.includes(t)})).find((function(e){return!0===e})))||[Le,Fe].includes(t.toString())){var n=document.getElementById(t.toString());null===n||void 0===n||n.click()}}c.a.useEffect((function(){return document.addEventListener("keyup",f),function(){return document.removeEventListener("keyup",f)}}));var x=function(e){switch(o=o||9999,e.currentTarget.value){case Fe:return j(u.toString().slice(0,-1));case Le:return j("0");case Me:return null===i||void 0===i?void 0:i(Number(u));case".":return j("".concat(u,"."));default:return Number(u+e.currentTarget.value)>o?j(o.toString()):j(Number(u+e.currentTarget.value).toString())}};return Object(r.jsxs)("div",{className:l.pad,style:{position:"relative"},children:[Object(r.jsxs)("div",{className:l.padRow,children:[Object(r.jsxs)("div",{className:l.padInput,children:[Object(r.jsx)("div",{style:{direction:"ltr"},children:u.toLocaleString()}),a&&Object(r.jsx)("div",{className:l.padMax,children:a}),!a&&o&&Object(r.jsxs)("div",{className:l.padMax,children:["max ",null===(t=o)||void 0===t?void 0:t.toLocaleString()]})]}),""!==u&&"0"!==u&&Object(r.jsx)("button",{className:Object(be.a)(l.actionButton),id:Le,value:Le,onClick:x,children:Object(r.jsx)(ze.a,{fontSize:"inherit"})}),Object(r.jsx)("button",{className:Object(be.a)(l.actionButton),id:Fe,value:Fe,onClick:x,children:Object(r.jsx)(Te.a,{fontSize:"inherit"})})]}),b.map((function(e,t){return Object(r.jsx)("div",{className:l.padRow,children:e.map((function(e,t){return Object(r.jsxs)("button",{className:Object(be.a)(l.padItem,e===Me&&l.confirmItem,e===Le&&l.clearItem),value:e,onClick:x,id:e.toString(),children:["."===e&&".","number"===typeof e&&e.toString(),e===Me&&Object(r.jsx)(Be.a,{fontSize:"inherit"}),e===Le&&e[0]]},t)}))},t)}))]})},Re=Object(U.a)((function(e){return{root:{width:"100%"},input:{width:"100%",color:"inherit"},pad:{display:"flex",flexDirection:"column",border:"1px solid #efefef"},padOuter:{},padRow:{display:"flex",flexDirection:"row-reverse","&:not(:last-child)":{borderBottom:"1px solid #efefef"}},padItem:{display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",border:0,boxSizing:"border-box",fontSize:18,background:"transparent",width:75,height:75,outline:"none","&:not(:last-child)":{borderLeft:"1px solid #efefef"}},padIcon:{color:"inherit"},padInput:{display:"flex",flexDirection:"column",padding:e.spacing(0,1),flex:1,position:"relative",alignItems:"flex-end",fontSize:24,justifyContent:"center"},padMax:{position:"absolute",bottom:2,fontSize:10,color:"#999"},actionButton:{height:75,border:0,background:"transparent",color:"#999",fontSize:24,outline:"none"},confirmItem:{color:e.palette.info.main,fontSize:28},clearItem:{},label:{color:"#999",fontSize:11}}})),We=function(e){var t=e.value,n=e.onChange,i=e.max,o=e.label,a=e.icon,l=e.id,s=Re(),d=c.a.useState(null),u=Object(W.a)(d,2),j=u[0],b=u[1],f=c.a.useState(t||0),x=Object(W.a)(f,2),h=x[0],m=x[1],p=Boolean(j);return Object(r.jsxs)("div",{className:s.root,children:[Object(r.jsx)(Q.a,{id:l,className:s.input,onClick:function(e){return b(e.currentTarget)},style:{fontSize:18},children:Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[a,Object(r.jsx)("div",{children:h.toLocaleString()}),o&&Object(r.jsx)("span",{className:s.label,children:o})]})}),Object(r.jsx)(De.a,{open:p,anchorEl:j,onClose:function(){return b(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:Object(r.jsx)(He,{label:o,max:i,value:h,onConfirm:function(e){null===n||void 0===n||n(e),m(e),b(null)}})})]})},Ae="Backspace",Pe="Delete",Ye="Enter",_e=function(e){var t=e.value,n=e.onConfirm,i=e.label,o=Ge(),a=c.a.useState(t||["00","00"]),l=Object(W.a)(a,2),s=l[0],d=l[1],u=c.a.useState("hour"),j=Object(W.a)(u,2),b=j[0],f=j[1],x=c.a.useState(void 0),h=Object(W.a)(x,2),m=h[0],p=h[1],O=[[1,2,3],[4,5,6],[7,8,9],[Pe,0,Ye]];function g(e){var t=isNaN(Number(e.key))?e.key:Number(e.key);if(Boolean(Array.from(O,(function(e){return e.includes(t)})).find((function(e){return!0===e})))||[Pe,Ae].includes(t.toString())){var n=document.getElementById(t.toString());null===n||void 0===n||n.click()}}c.a.useEffect((function(){return document.addEventListener("keyup",g),function(){return document.removeEventListener("keyup",g)}}));var v=function(e){if(e.currentTarget.value===Ae)return s[1]?(f("min"),s[1]=s[1].slice(0,-1)):(f("hour"),s[0]=s[0].slice(0,-1)),d([s[0],s[1]]);if("hour"===b){if(e.currentTarget.value===Ae)return d([s[0].slice(0,-1),s[1]]);if(e.currentTarget.value===Pe)return d(["",s[1]]);if(e.currentTarget.value===Ye)return""===s[0]?(d(["00",s[1]||"00"]),null===n||void 0===n?void 0:n(["00",s[1]||"00"])):(d([1===s[0].length?"0".concat(s[0]):s[0],1===s[1].length?"0".concat(s[1]):s[1]]),f("min"));var t=Number(e.currentTarget.value),r=Number(s[0]),i=Number("".concat(r).concat(t));if("hour"===m)return p(void 0),t>2?(f("min"),d(["0".concat(t.toString()),s[1]])):d([t.toString(),s[1]]);if(24===i)return f("min"),d(["00",s[1]]);if(i>24){if(t<=2)return d([t.toString(),s[1]]);if(t>2&&!m)return f("min"),d([t<10?"0".concat(t.toString()):t.toString(),s[1]]);if(t>2)return console.log("asd")}if(0===r&&t>=3)return f("min"),d(["0".concat(t),s[1]]);if(0===t&&"0"===s[0])return f("min"),d(["0".concat(i.toString()),s[1]]);i>9&&f("min"),d([i.toString(),s[1]])}if("min"===b){if(e.currentTarget.value===Ae)return""===s[1]&&f("hour"),d([s[0],s[1].slice(0,-1)]);if(e.currentTarget.value===Pe)return d([s[0],""]);if(e.currentTarget.value===Ye)return s[0]=s[0]||"0",s[1]=s[1]||"0",d([1===s[0].length?"0".concat(s[0]):s[0],1===s[1].length?"0".concat(s[1]):s[1]]),null===n||void 0===n?void 0:n([1===s[0].length?"0".concat(s[0]):s[0],1===s[1].length?"0".concat(s[1]):s[1]]);var c=Number(e.currentTarget.value),o=Number(s[1]),a=Number("".concat(o).concat(c));if(a>=60)return d([s[0],"0".concat(c.toString())]);d([s[0],a.toString()]),2===a.toString().length&&(null===n||void 0===n||n([s[0],a.toString()]))}},y=function(e){p(e),f(e),d([1===s[0].length?"0".concat(s[0]):s[0],1===s[1].length?"0".concat(s[1]):s[1]])};return Object(r.jsxs)("div",{className:o.pad,style:{position:"relative"},children:[Object(r.jsxs)("div",{className:o.padRow,children:[Object(r.jsxs)("div",{className:o.padInput,children:[Object(r.jsxs)("div",{style:{direction:"ltr",display:"flex"},children:[Object(r.jsx)("div",{onClick:function(){return y("hour")},style:{background:"hour"===b?"#efefef":"transparent"},children:s[0]}),":",Object(r.jsx)("div",{onClick:function(){return y("min")},style:{background:"min"===b?"#efefef":"transparent"},children:s[1]})]}),Object(r.jsx)("div",{className:o.padLabel,children:i})]}),Object(r.jsx)("button",{id:Ae,className:Object(be.a)(o.padItem,o.backspaceButton),value:Ae,onClick:v,children:Object(r.jsx)(Te.a,{fontSize:"inherit"})})]}),O.map((function(e,t){return Object(r.jsx)("div",{className:o.padRow,children:e.map((function(e,t){return Object(r.jsxs)("button",{className:Object(be.a)(o.padItem,e===Ye&&o.confirmItem,e===Pe&&o.clearItem),value:e,onClick:v,id:e.toString(),children:["number"===typeof e&&e.toString(),e===Ye&&Object(r.jsx)(Be.a,{fontSize:"inherit"}),e===Pe&&e[0]]},t)}))},t)}))]})},Ge=Object(U.a)((function(e){return{root:{},input:{},pad:{display:"flex",flexDirection:"column",border:"1px solid #efefef"},padRow:{display:"flex",flexDirection:"row-reverse","&:not(:last-child)":{borderBottom:"1px solid #efefef"}},padItem:{display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",border:0,boxSizing:"border-box",fontSize:18,background:"transparent",width:75,height:75,outline:"none","&:not(:last-child)":{borderLeft:"1px solid #efefef"}},padItemIcon:{},padInput:{display:"flex",flexDirection:"column",padding:e.spacing(0,1),flex:1,position:"relative",alignItems:"flex-end",fontSize:24,justifyContent:"center"},padMax:{position:"absolute",bottom:2,fontSize:10,color:"#999"},backspaceButton:{},confirmItem:{color:e.palette.info.main,fontSize:28},clearItem:{},label:{color:"#999",fontSize:11},padLabel:{position:"absolute",color:"#999",fontSize:12,bottom:2}}})),Ue=function(e){var t=e.value,n=e.onChange,i=e.icon,o=e.label,a=e.id,l=Ge(),s=c.a.useState((null===t||void 0===t?void 0:t.split(":"))||["00","00"]),d=Object(W.a)(s,2),u=d[0],j=d[1],b=c.a.useState(null),f=Object(W.a)(b,2),x=f[0],h=f[1],m=function(){return h(null)},p=function(e){var t=e?e.map((function(e){return Number(e)})):[Number(u[0]),Number(u[1])],r=[t[0],t[1],0,0];null===n||void 0===n||n(r)},O=Boolean(x);return Object(r.jsxs)("div",{className:l.root,children:[Object(r.jsx)(Q.a,{className:l.input,onClick:function(e){return h(e.currentTarget)},style:{fontSize:18},id:a,children:Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[i,Object(r.jsxs)("div",{children:[u[0],":",u[1]]}),o&&Object(r.jsx)("span",{className:l.label,children:o})]})}),Object(r.jsx)(De.a,{open:O,anchorEl:x,onClose:m,children:Object(r.jsx)(_e,{label:o,value:u,onConfirm:function(e){j(e),p(e),m()}})})]})},Ke=n.p+"static/media/percentage.a11cd316.svg",qe=n(184),Je=new Date;Je.setHours(0,0,0,0);var Xe=Object(U.a)((function(e){return{root:Object(R.a)({overflow:"hidden",outline:"none",boxSizing:"border-box"},e.breakpoints.up(400),{width:350}),header:{width:"100%",background:"#fff",borderBottom:"1px solid #ebebeb",display:"flex",alignItems:"center",justifyContent:"space-between"},item:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",boxSizing:"border-box"},field:{width:"100%",overflow:"hidden",boxSizing:"border-box",padding:e.spacing(1,2),"&:first-child":{}},items:{position:"relative",width:"100%",display:"flex",alignItems:"flex-start",justifyContent:"space-around",boxSizing:"border-box"},submit:{background:"lightGreen",boxSizing:"border-box",height:60,borderRadius:0,transition:e.transitions.create(["background-color"],{easing:e.transitions.easing.easeInOut}),"&:hover":{background:"lightGreen"}},submitDisabled:{backgroundColor:e.palette.grey[100]},itemLabel:{color:"#999",fontSize:11},mainError:{marginBottom:e.spacing(1)}}})),Ze=function(e){var t,n,i=e.employee,o=e.onSuccess,a=e.onCancel,l=Xe(),s=S((function(e){return e.shift})).employees,d=N(),u=c.a.useState({name:(null===i||void 0===i?void 0:i.name)||"",start:(null===i||void 0===i?void 0:i.start)||Je,end:(null===i||void 0===i?void 0:i.end)||Je,percent:(null===i||void 0===i?void 0:i.percent)||100,type:(null===i||void 0===i?void 0:i.type)||"\u05de\u05dc\u05e6\u05e8"}),j=Object(W.a)(u,2),b=j[0],f=j[1],x=c.a.useState({loading:!1,errors:[]}),p=Object(W.a)(x,2),O=p[0],g=p[1],v=function(e,t){if(O.errors.find((function(t){return t.target===e}))&&g(Object(m.a)(Object(m.a)({},O),{},{errors:O.errors.filter((function(t){return t.target!==e}))})),f(Object(m.a)(Object(m.a)({},b),{},Object(R.a)({},e,t))),["name","type"].includes(e)){if(""===t)return O.errors=O.errors.filter((function(t){return t.target!==e})),g(Object(m.a)(Object(m.a)({},O),{},{errors:[].concat(Object(h.a)(O.errors),[{target:e,text:"\u05e9\u05d3\u05d4 \u05d7\u05d5\u05d1\u05d4."}])}));if(!new RegExp(/^[a-zA-Z\u05d0-\u05ea]+$/).test(t))return O.errors=O.errors.filter((function(t){return t.target!==e})),g(Object(m.a)(Object(m.a)({},O),{},{errors:[].concat(Object(h.a)(O.errors),[{target:e,text:"\u05e9\u05d3\u05d4 \u05d6\u05d4 \u05d9\u05db\u05d5\u05dc \u05dc\u05d4\u05db\u05d9\u05dc \u05d0\u05d5\u05ea\u05d9\u05d5\u05ea \u05d1\u05dc\u05d1\u05d3."}])}))}},y=function(e,t){var n=new Date;n.setHours.apply(n,Object(h.a)(t)),v(e,n),i||"start"!==e||setTimeout((function(){var e;null===(e=document.getElementById("leave"))||void 0===e||e.click()}),300),i||"end"!==e||setTimeout((function(){var e;null===(e=document.getElementById("percent"))||void 0===e||e.click()}),300)},w=function(){var e=b.start.getHours()+b.start.getMinutes()/60,t=b.end.getHours()+b.end.getMinutes()/60,n=(e>t?24-e+t:(+b.end-+b.start)/1e3/3600)||0;return{before:n,after:b.percent/100*n}},C=function(e){var t=b[e];return"".concat(t.getHours()<10?"0".concat(t.getHours()):t.getHours().toString(),":").concat(t.getMinutes()<10?"0".concat(t.getMinutes()):t.getMinutes().toString())},k=function(){return!(!(O.loading||!b.name||!b.type||b.percent>100||b.percent<0)&&b.start&&b.end&&0!==w().before)},E=function(e){var t=document.getElementsByName("type")[0],n=e.currentTarget.querySelector("input");if("Enter"===e.key&&"name"===(null===n||void 0===n?void 0:n.name)){if(""===n.value)return g({loading:!1,errors:[].concat(Object(h.a)(O.errors),[{target:"name",text:"\u05d7\u05d5\u05d1\u05d4 \u05dc\u05d4\u05d6\u05d9\u05df \u05e9\u05dd \u05e2\u05d5\u05d1\u05d3"}])});if(!i)return null===t||void 0===t?void 0:t.focus();e.preventDefault(),null===n||void 0===n||n.blur()}if("Enter"===e.key&&"type"===(null===n||void 0===n?void 0:n.name)){if(""===n.value)return g(Object(m.a)(Object(m.a)({},O),{},{errors:[].concat(Object(h.a)(O.errors),[{target:"type",text:"\u05d9\u05e9 \u05dc\u05d4\u05d6\u05d9\u05df \u05ea\u05e4\u05e7\u05d9\u05d3. \u05d3\u05d5\u05d2\u05de\u05d4: \u05de\u05dc\u05e6\u05e8, \u05d1\u05e8\u05de\u05df"}])}));e.preventDefault(),null===n||void 0===n||n.blur(),i||setTimeout((function(){var e;null===(e=document.getElementById("enter"))||void 0===e||e.click()}),500)}};return Object(r.jsxs)("form",{onSubmit:function(e){return e.preventDefault(),O.errors.length>0?g(Object(m.a)(Object(m.a)({},O),{},{mainError:"\u05d9\u05e9 \u05dc\u05ea\u05e7\u05df \u05d0\u05ea \u05d4\u05e9\u05d2\u05d9\u05d0\u05d5\u05ea \u05e7\u05d5\u05d3\u05dd."})):b.name&&b.type&&b.start&&b.end?0===w().before?g({loading:!1,errors:[],mainError:"\u05d0\u05d9\u05df \u05d0\u05e4\u05e9\u05e8\u05d5\u05ea \u05dc\u05d4\u05d5\u05e1\u05d9\u05e3 \u05e2\u05d5\u05d1\u05d3 \u05e2\u05dd 0 \u05e9\u05e2\u05d5\u05ea."}):!i&&s.find((function(e){return e.name===b.name}))?g({loading:!1,errors:[],mainError:'"'.concat(b.name,'" \u05db\u05d1\u05e8 \u05e7\u05d9\u05d9\u05dd \u05d1\u05e8\u05e9\u05d9\u05de\u05d4.')}):(g({loading:!0,errors:[]}),void setTimeout((function(){if(i){var e={type:"UPDATE_EMPLOYEE",name:i.name,data:b};return e?(d(e),null===o||void 0===o?void 0:o()):g({loading:!1,errors:[],mainError:"\u05de\u05e9\u05d4\u05d5 \u05d4\u05e9\u05ea\u05d1\u05e9 \u05d9\u05e9 \u05dc\u05e0\u05e1\u05d5\u05ea \u05e9\u05d5\u05d1."})}d(function(e){return{type:"ADD_EMPLOYEE",employee:e}}(b)),null===o||void 0===o||o()}),400)):g({loading:!1,errors:[],mainError:"\u05d9\u05e9 \u05dc\u05d5\u05d5\u05d3\u05d0 \u05e9\u05db\u05dc \u05d4\u05e4\u05e8\u05d8\u05d9\u05dd \u05d4\u05d5\u05d6\u05e0\u05d5."})},className:l.root,children:[Object(r.jsxs)("div",{className:l.header,children:[Object(r.jsx)(G.a,{style:{padding:"0 16px"},variant:"h6",component:"h1",children:i?"\u05e2\u05e8\u05d9\u05db\u05ea \u05e2\u05d5\u05d1\u05d3":"\u05d4\u05d5\u05e1\u05e4\u05ea \u05e2\u05d5\u05d1\u05d3"}),Object(r.jsx)(P.a,{onClick:function(){null===a||void 0===a||a()},children:Object(r.jsx)(ee.a,{})})]}),O.mainError&&Object(r.jsx)(qe.a,{className:l.mainError,severity:"error",children:O.mainError}),Object(r.jsx)("div",{className:l.field,children:Object(r.jsx)(Z.a,{fullWidth:!0,autoComplete:"off",variant:"outlined",type:"text",label:"\u05e9\u05dd \u05e2\u05d5\u05d1\u05d3",name:"name",required:!0,value:b.name,onChange:function(e){return v("name",e.currentTarget.value)},autoFocus:!0,onKeyPress:E,error:Boolean(null===(t=O.errors)||void 0===t?void 0:t.find((function(e){return"name"===e.target}))),helperText:Object(r.jsx)(r.Fragment,{children:O.errors.filter((function(e){return"name"===e.target})).map((function(e,t){return Object(r.jsxs)("b",{children:["* ",e.text,Object(r.jsx)("br",{})]},t)}))}),inputProps:{enterKeyHint:"enter"}})}),Object(r.jsx)("div",{className:l.field,children:Object(r.jsx)(Z.a,{fullWidth:!0,autoComplete:"off",variant:"outlined",type:"text",name:"type",label:"\u05ea\u05e4\u05e7\u05d9\u05d3",required:!0,value:b.type,onKeyPress:E,error:Boolean(null===(n=O.errors)||void 0===n?void 0:n.find((function(e){return"type"===e.target}))),helperText:Object(r.jsx)(r.Fragment,{children:O.errors.filter((function(e){return"type"===e.target})).map((function(e,t){return Object(r.jsxs)("b",{children:["* ",e.text,Object(r.jsx)("br",{})]},t)}))}),onChange:function(e){return v("type",e.currentTarget.value)}})}),Object(r.jsxs)("div",{className:Object(be.a)(l.field,l.items),children:[Object(r.jsx)("div",{className:l.item,children:Object(r.jsx)(Ue,{value:C("start"),onChange:function(e){return y("start",e)},icon:Object(r.jsx)(ye,{}),label:"\u05db\u05e0\u05d9\u05e1\u05d4",id:"enter"})}),Object(r.jsx)("div",{className:l.item,children:Object(r.jsx)(Ue,{value:C("end"),onChange:function(e){return y("end",e)},icon:Object(r.jsx)(Se,{}),label:"\u05d9\u05e6\u05d9\u05d0\u05d4",id:"leave"})})]}),Object(r.jsxs)("div",{className:Object(be.a)(l.field,l.items),children:[Object(r.jsx)("div",{className:l.item,children:Object(r.jsx)("div",{children:Object(r.jsx)(We,{max:100,onChange:function(e){return v("percent",e)},icon:Object(r.jsx)($.a,{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(r.jsx)("img",{alt:"\u05d0\u05d7\u05d5\u05d6 \u05ea\u05e9\u05e8",src:Ke,width:20,height:20,color:"red"})}),label:"\u05d0\u05d7\u05d5\u05d6 \u05ea\u05e9\u05e8",value:b.percent,id:"percent"})})}),Object(r.jsx)("div",{className:l.item,children:Object(r.jsx)(Q.a,{disabled:!0,style:{fontSize:18},children:Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[Object(r.jsx)(te.a,{style:{color:"#999"}}),Object(r.jsx)("div",{children:w().before.toFixed(2)}),Object(r.jsx)("span",{className:l.itemLabel,children:b.percent<100?Object(r.jsxs)("div",{style:{fontSize:12},children:[Object(r.jsxs)("b",{children:[b.percent,"%"]}),Object(r.jsxs)("div",{children:[w().after.toFixed(2),"\u05e9'"]})]}):'\u05e1\u05d4"\u05db \u05e9\u05e2\u05d5\u05ea'})]})})})]}),Object(r.jsx)(Q.a,{disableFocusRipple:!0,disableRipple:!0,disableElevation:!0,fullWidth:!0,type:"submit",disabled:k(),variant:"contained",className:Object(be.a)(l.submit,k()&&l.submitDisabled),children:O.loading?Object(r.jsx)(V.a,{style:{color:"#999",width:25,height:25}}):Object(r.jsx)(ne.a,{})})]})},$e=Object(U.a)((function(e){return{root:{display:"flex",flexDirection:"column",position:"relative",overflowY:"auto",overflowX:"hidden",width:"100%"},container:{display:"flex",flexDirection:"column",flex:1},row:{display:"flex",width:"100%",position:"relative",minHeight:50,margin:e.spacing(.5,0)},addButton:{margin:e.spacing(1,"auto"),border:"1px solid rgba(0,0,0,0.54)"},addForm:{}}})),Qe=function(){var e=$e(),t=S(K),n=c.a.useState(!1),i=Object(W.a)(n,2),o=i[0],a=i[1];if(!t)return Object(r.jsx)("div",{children:"\u05dc\u05d0 \u05e7\u05d9\u05d9\u05dd \u05e8\u05d9\u05e9\u05d5\u05dd"});var l=function(){return a(!1)};return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(q.a,{className:e.container,children:[Object(r.jsxs)("div",{className:e.row,children:[Object(r.jsx)(P.a,{className:e.addButton,onClick:function(){return a(!0)},disabled:o,children:Object(r.jsx)(X.a,{})}),Object(r.jsx)(J.a,{open:o,onClose:l,TransitionComponent:ke,children:Object(r.jsx)(Ze,{onSuccess:l,onCancel:l})})]}),t.employees.map((function(e,t){return Object(r.jsx)(Ie,{employee:e},t)}))]})})},Ve=n(173),et=n(174),tt=n(175),nt=n(176),rt=n(177),it=function(e){var t=ct(),n=c.a.useState(!1),i=Object(W.a)(n,2),o=i[0],a=i[1];return Object(r.jsx)(A.a,{open:o,onClose:function(){return a(!1)},arrow:!0,title:e.label,placement:"left",children:Object(r.jsxs)(Q.a,{onClick:function(){return a(!0)},className:t.item,children:[Object(r.jsx)("div",{className:"icon",children:e.icon}),Object(r.jsx)("div",{className:"value",children:e.value}),Object(r.jsx)("div",{className:"title",children:e.title})]})})},ct=Object(U.a)((function(e){return{root:{position:"relative",height:"100%",overflowY:"auto",boxSizing:"border-box",background:"#fff",color:e.palette.getContrastText("#fff"),borderRight:"1px solid #eaeaea",display:"flex",flexDirection:"column",userSelect:"none",overflowX:"hidden"},item:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",padding:e.spacing(1,2),"& span":{display:"flex",flexDirection:"column"},"& .title, & .icon":{fontSize:"11px",color:"#999"},"& .icon svg":{width:25,height:25},"& .value":{fontSize:12}}}})),ot=function(){var e=ct(),t=S(K);if(!t)return Object(r.jsx)(r.Fragment,{});var n=[{title:"\u05e2\u05d5\u05d1\u05d3\u05d9\u05dd",value:t.employees.length,icon:Object(r.jsx)(Ve.a,{}),label:'\u05e1\u05d4"\u05db \u05e2\u05d5\u05d1\u05d3\u05d9\u05dd \u05d1\u05de\u05e9\u05de\u05e8\u05ea'},{title:"\u05e9\u05e2\u05d5\u05ea",value:t.hours.toFixed(2),icon:Object(r.jsx)(et.a,{}),label:'\u05e1\u05d4"\u05db \u05e9\u05e2\u05d5\u05ea \u05de\u05e9\u05de\u05e8\u05ea'},{title:"\u05de\u05d6\u05d5\u05de\u05df",value:t.perhour.cash.toFixed(2),icon:Object(r.jsx)(tt.a,{}),label:"\u05de\u05d6\u05d5\u05de\u05df \u05dc\u05e9\u05e2\u05d4"},{title:"\u05d0\u05e9\u05e8\u05d0\u05d9",value:t.perhour.credit.toFixed(2),icon:Object(r.jsx)(nt.a,{}),label:"\u05d0\u05e9\u05e8\u05d0\u05d9 \u05dc\u05e9\u05e2\u05d4"},{title:'\u05e1\u05d4"\u05db',value:(t.perhour.cash+t.perhour.credit).toFixed(2),icon:Object(r.jsx)(rt.a,{}),label:'\u05e1\u05d4"\u05db \u05de\u05d6\u05d5\u05de\u05df \u05d5\u05d0\u05e9\u05e8\u05d0\u05d9'}];return Object(r.jsx)("div",{className:e.root,children:n.map((function(e,t){return Object(r.jsx)(it,Object(m.a)({},e),t)}))})},at=n(178),lt=Object(U.a)((function(e){return{root:{width:"100%",height:"100px",position:"relative",display:"flex",flex:1,padding:e.spacing(1,0),alignItems:"center",justifyContent:"space-between",background:"#fff",borderBottom:"1px solid #eaeaea",paddingRight:6},container:{display:"flex",width:"100%",alignItems:"stretch",justifyContent:"space-between"},field:{width:"100%",margin:e.spacing(0,2),boxSizing:"border-box",border:"1px solid #ebebeb",display:"flex",flexDirection:"row-reverse",alignItems:"flex-start",fontSize:20,fontWeight:300,color:"#333",borderRadius:e.shape.borderRadius},icon:{color:"#bbb",width:25,height:25},active:{color:"#0089c0!important"},itemText:{fontSize:13,color:"#bbb",textAlign:"center"}}})),st=function(){var e=lt(),t=S(K),n=N(),i=c.a.useState(null),o=Object(W.a)(i,2),a=o[0],l=o[1];if(!t)return Object(r.jsx)(r.Fragment,{});var s=t.tip,d=function(e){if(a)return a.label===e?a.target:void 0};return Object(r.jsx)("div",{className:e.root,children:Object(r.jsx)(q.a,{maxWidth:"lg",className:e.container,children:Object.keys({cash:"\u05de\u05d6\u05d5\u05de\u05df \u05dc\u05de\u05e9\u05de\u05e8\u05ea",credit:"\u05d0\u05e9\u05e8\u05d0\u05d9 \u05dc\u05de\u05e9\u05de\u05e8\u05ea"}).map((function(i,c){return Object(r.jsx)("div",{className:Object(be.a)(e.field,s[i]>0&&e.active),children:Object(r.jsx)(We,{open:d(i),max:1e4,value:s[i],onChange:function(e){return function(e,r){n({type:"SET_WAGE",wage:Object(m.a)(Object(m.a)({},t.tip),{},Object(R.a)({},e,r))}),l(null)}(i,e)},icon:"cash"===i?Object(r.jsx)(tt.a,{className:Object(be.a)(e.icon,s[i]>0&&e.active),fontSize:"inherit"}):Object(r.jsx)(at.a,{className:Object(be.a)(e.icon,s[i]>0&&e.active),fontSize:"inherit"}),label:"cash"===i?"\u05de\u05d6\u05d5\u05de\u05df \u05de\u05e9\u05de\u05e8\u05ea":"\u05d0\u05e9\u05e8\u05d0\u05d9 \u05de\u05e9\u05de\u05e8\u05ea"})},c)}))})})},dt=n(179),ut=function(e){var t=e.value||new Date,n=c.a.useState(null),i=Object(W.a)(n,2),o=i[0],a=i[1],l=Boolean(o);return Object(r.jsx)(A.a,{arrow:!0,onClose:function(){return a(null)},open:l,disableFocusListener:!0,title:"\u05d9\u05d5\u05dd ".concat(["\u05e8\u05d0\u05e9\u05d5\u05df","\u05e9\u05e0\u05d9","\u05e9\u05dc\u05d9\u05e9\u05d9","\u05e8\u05d1\u05d9\u05e2\u05d9","\u05d7\u05de\u05d9\u05e9\u05d9","\u05e9\u05d9\u05e9\u05d9","\u05e9\u05d1\u05ea"][t.getDay()],", ").concat(t.getDate()," \u05dc").concat(["\u05d9\u05e0\u05d5\u05d0\u05e8","\u05e4\u05d1\u05e8\u05d5\u05d0\u05e8","\u05de\u05e8\u05e5","\u05d0\u05e4\u05e8\u05d9\u05dc","\u05de\u05d0\u05d9","\u05d9\u05d5\u05e0\u05d9","\u05d9\u05d5\u05dc\u05d9","\u05d0\u05d5\u05d2\u05d5\u05e1\u05d8","\u05e1\u05e4\u05d8\u05de\u05d1\u05e8","\u05d0\u05d5\u05e7\u05d8\u05d5\u05d1\u05e8","\u05e0\u05d5\u05d1\u05de\u05d1\u05e8","\u05d3\u05e6\u05de\u05d1\u05e8"][t.getMonth()]," ").concat(t.getFullYear()),children:Object(r.jsxs)(P.a,{onClick:function(e){return a(e.currentTarget)},size:"small",style:{margin:"0 11px",position:"absolute"},children:[Object(r.jsx)(dt.a,{style:{width:35,height:35,color:"#999"}}),Object(r.jsx)("div",{style:{position:"absolute",fontSize:14,fontWeight:700,bottom:7,color:"#999"},children:t.getDate()})]})})},jt=Object(U.a)((function(e){return{root:{width:"100%",position:"relative",display:"flex",flexDirection:"column",overflow:"hidden",height:"100%"},appBar:{backgroundColor:"#fff",color:e.palette.getContrastText("#fff"),boxShadow:e.shadows[0],borderBottom:"1px solid #eaeaea"},toolbar:{display:"flex",justifyContent:"space-between"},container:Object(R.a)({width:"100%",position:"relative",display:"flex",background:"#efefef",height:"calc(100% - 64px)"},e.breakpoints.down(600),{height:"calc(100% - ".concat(e.mixins.toolbar.minHeight,"px)")}),wage:{position:"relative",boxShadow:"1px 1px 3px rgba(0,0,0,.1)",zIndex:100},main:{display:"flex",flexDirection:"column",width:"100%"},content:{position:"relative",display:"flex",flexDirection:"column",flex:1,order:2,overflowY:"scroll"},item:{height:"200px"},employeeButton:{width:"100%",border:0,background:"transparent"},footer:{width:"100%",flex:1,display:"flex",alignSelf:"flex-end",alignItems:"flex-end",justifyContent:"center",padding:e.spacing(.5,0)}}})),bt=function(){var e=jt(),t=S(K);return t?Object(r.jsxs)("div",{className:e.root,children:[Object(r.jsx)(Y.a,{position:"fixed",className:e.appBar,children:Object(r.jsxs)(_.a,{className:e.toolbar,disableGutters:!0,children:[Object(r.jsx)(ut,{value:t.date}),Object(r.jsx)(G.a,{variant:"h6",component:"h1",style:{textAlign:"center",width:"100%",fontWeight:700,color:"#999"},children:"Smart Tip"})]})}),Object(r.jsx)(_.a,{}),Object(r.jsxs)("div",{className:e.container,children:[Object(r.jsx)(ot,{}),Object(r.jsxs)("div",{className:e.main,children:[Object(r.jsx)("div",{style:{order:1},children:Object(r.jsx)(st,{})}),Object(r.jsxs)("div",{className:e.content,children:[Object(r.jsx)(Qe,{}),Object(r.jsx)("div",{className:e.footer,children:Object(r.jsxs)("div",{style:{direction:"ltr",textAlign:"center",fontSize:11,color:"#999"},children:[Object(r.jsx)(M.b,{to:"/about",style:{color:"#333",textDecoration:"none"},children:"Smart Tip"})," beta 1.2",Object(r.jsxs)("div",{children:[Object(r.jsx)(M.b,{to:"/contact",style:{color:"#333",textDecoration:"none"},children:"Ilia Kamilov"})," ",(new Date).getFullYear()," \xa9"]})]})})]})]})]})]}):Object(r.jsx)("div",{children:"\u05d0\u05d9\u05df \u05de\u05e9\u05de\u05e8\u05ea"})},ft=function(){return Object(r.jsx)("div",{children:"About"})},xt=function(){return Object(r.jsx)("div",{children:"Contact"})},ht=function(){return Object(r.jsx)("div",{children:"Not Found"})},mt=function(){return Object(r.jsx)(M.a,{basename:"/smart-tip",children:Object(r.jsxs)(H.c,{children:[Object(r.jsx)(H.a,{exact:!0,path:"/",children:Object(r.jsx)(bt,{})}),Object(r.jsx)(H.a,{exact:!0,path:"/about",children:Object(r.jsx)(ft,{})}),Object(r.jsx)(H.a,{exact:!0,path:"/contact",children:Object(r.jsx)(xt,{})}),Object(r.jsx)(H.a,{status:404,children:Object(r.jsx)(ht,{})})]})})};a.a.render(Object(r.jsx)(w,{children:Object(r.jsx)(L,{children:Object(r.jsx)(mt,{})})}),document.getElementById("root")),l()}},[[108,1,2]]]);
//# sourceMappingURL=main.371170a4.chunk.js.map
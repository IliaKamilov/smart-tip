(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{112:function(e,t,n){},113:function(e,t,n){"use strict";n.r(t);var i=n(2),r=n(0),a=n.n(r),c=n(11),o=n.n(c),l=n(156),s=n(149),d=n(116),u=n(157),j=n(147),b=n(55),h=n(43),p=n(65),m="SET_AUTH",x="UNSET_AUTH",f={loading:!0},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return t.payload;case x:return{loading:!1};default:return e}},v=n(64),g=n(14),y=new Date,w=(new Date(y.setHours(10,0,0,0)),new Date(y.setHours(11,0,0,0)),{date:new Date,employees:[],tip:{cash:0,credit:0},type:"\u05d1\u05d5\u05e7\u05e8"}),N=Object(h.c)(w,{SET_SHIFT:function(e,t){return t},SET_WAGE:function(e,t){return Object(g.a)(Object(g.a)({},e),{},{tip:t.wage})},ADD_EMPLOYEE:function(e,t){return console.log(t),Object(g.a)(Object(g.a)({},e),{},{employees:[].concat(Object(v.a)(e.employees),[t.employee])})},UPDATE_EMPLOYEE:function(e,t){return e.employees=e.employees.map((function(e){return e.name===t.name&&(e=t.data),e})),e},DELETE_EMPLOYEE:function(e,t){return e.employees=e.employees.filter((function(e){return e.name!==t.name})),e}}),C=Object(b.b)({auth:O,shift:N}),E=Object(h.a)({reducer:C,enhancers:undefined}),S=p.c,D=function(){return Object(p.b)()},T=function(e){var t=e.children;return Object(i.jsx)(p.a,{store:E,children:t})};var F=Object(h.b)((function(e){return e.shift}),(function(e){if(e){var t=Object(g.a)(Object(g.a)({},e),{},{employees:e.employees.map((function(e){return Object(g.a)(Object(g.a)({},e),{},{get id(){return"W".concat(t.employees.length)},get hours(){var e=this.start.getHours()+this.start.getMinutes()/60,t=this.end.getHours()+this.end.getMinutes()/60,n=(e>t?24-e+t:(+this.end-+this.start)/1e3/3600)||0;return this.percent/100*n},get tip(){return{cash:t.perhour.cash*this.hours,credit:t.perhour.credit*this.hours,get total(){return this.cash+this.credit}}}})})),get hours(){return Object.values(this.employees).reduce((function(e,t){return e+t.hours}),0)},get perhour(){return{cash:this.hours>0?this.tip.cash/this.hours:0,credit:this.hours>0?this.tip.credit/this.hours:0,get total(){return Math.round(this.cash+this.credit)}}}});return t}})),I=n(21),k=n(148),M=n(36),L=n(163),z=n(164),A=n(145),B=n(146),H=n(82),P=n(13),W=n(159),Y=n(3),_=n(161),R=new Date,q={name:"",percent:100,type:"\u05de\u05dc\u05e6\u05e8",start:new Date(R.getFullYear(),R.getMonth(),R.getDate(),0,0,0,0),end:new Date(R.getFullYear(),R.getMonth(),R.getDate(),0,0,0,0)},U=Object(j.a)((function(e){return{form:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%"},row:{display:"flex",height:"100%"},field:{flex:1,display:"flex",alignItems:"flex-start",justifyContent:"flex-start",margin:e.spacing(1,0)},input:{display:"flex",alignItems:"center",justifyContent:"center"},submit:{justifyContent:"flex-end",margin:e.spacing(1,0)},error:{marginBottom:e.spacing(1)}}})),G=function(e){var t=e.employee,n=e.confirmText,r=e.cancelText,c=e.onConfirm,o=e.onCancel,l=e.onError,s=U(),d=D(),u=S((function(e){return e.shift})).employees,j=a.a.useState(t||q),b=Object(I.a)(j,2),h=b[0],p=b[1],m=a.a.useState({loading:!1}),x=Object(I.a)(m,2),f=x[0],O=x[1],v=h.start.getHours()+h.start.getMinutes()/60,y=h.end.getHours()+h.end.getMinutes()/60,w=(v>y?24-v+y:(+h.end-+h.start)/1e3/3600)||0,N=function(e){null===l||void 0===l||l(e),O({loading:!1,error:e})},C=function(e){if(f.error&&(null===l||void 0===l||l(void 0),O({loading:!1})),"percent"===e.currentTarget.name){var t=Number(e.currentTarget.value);if(t>100)return N("\u05d0\u05d7\u05d5\u05d6 \u05ea\u05e9\u05e8 \u05d7\u05d9\u05d9\u05d1 \u05dc\u05d4\u05d9\u05d5\u05ea \u05d1\u05d9\u05df 0-100.");e.currentTarget.value=t.toString()}if("name"===e.currentTarget.name){if(!new RegExp(/[\u05d0-\u05ea]+$/gi).test(e.currentTarget.value))return N("\u05e9\u05dd \u05d9\u05db\u05d5\u05dc \u05dc\u05d4\u05d9\u05d5\u05ea \u05d1\u05e2\u05d1\u05e8\u05d9\u05ea \u05d1\u05dc\u05d1\u05d3.");if(e.currentTarget.value.length>20)return N("\u05e9\u05dd \u05d9\u05db\u05d5\u05dc \u05dc\u05d4\u05db\u05d9\u05dc 20 \u05ea\u05d5\u05d5\u05d9\u05dd \u05d1\u05dc\u05d1\u05d3.")}p(Object(g.a)(Object(g.a)({},h),{},Object(M.a)({},e.currentTarget.name,e.currentTarget.value)))},E=function(e,t){t&&p(Object(g.a)(Object(g.a)({},h),{},Object(M.a)({},e,new Date(t))))};return Object(i.jsx)(P.a,{utils:H.a,children:Object(i.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"column"},children:[f.error&&!l&&Object(i.jsx)(_.a,{className:s.error,severity:"error",children:f.error}),Object(i.jsxs)("form",{onSubmit:function(e){return e.preventDefault(),h.name&&h.type&&h.start&&h.end?w<=0?N("\u05e9\u05d2\u05d9\u05d0\u05d4 \u05d1\u05d4\u05d6\u05e0\u05ea \u05e9\u05e2\u05d5\u05ea \u05e2\u05d5\u05d1\u05d3."):!t&&u.find((function(e){return e.name===h.name}))?N('\u05e2\u05d5\u05d1\u05d3 \u05d1\u05e9\u05dd "'.concat(h.name,'" \u05db\u05d1\u05e8 \u05e7\u05d9\u05d9\u05dd \u05d1\u05e8\u05e9\u05d9\u05de\u05d4.')):(O({loading:!0}),void setTimeout((function(){if(t){var e={type:"UPDATE_EMPLOYEE",name:t.name,data:h};return e?(d(e),null===c||void 0===c?void 0:c(h)):(console.log("asd"),null===l||void 0===l?void 0:l("\u05de\u05e9\u05d4\u05d5 \u05d4\u05e9\u05ea\u05d1\u05e9"))}d(function(e){return{type:"ADD_EMPLOYEE",employee:e}}(h)),null===c||void 0===c||c(h)}),400)):N("\u05d7\u05d5\u05d1\u05d4 \u05dc\u05de\u05dc\u05d0 \u05d0\u05ea \u05db\u05dc \u05d4\u05e4\u05e8\u05d8\u05d9\u05dd.")},className:s.form,autoComplete:"off",children:[Object(i.jsxs)("div",{className:s.row,children:[Object(i.jsx)("div",{className:s.field,style:{flex:2},children:Object(i.jsxs)(L.a,{required:!0,fullWidth:!0,disabled:f.loading,children:[Object(i.jsx)(z.a,{htmlFor:"name",children:"\u05e9\u05dd"}),Object(i.jsx)(A.a,{autoFocus:!0,type:"text",name:"name",id:"name",value:h.name,onChange:C})]})}),Object(i.jsx)("div",{className:s.field,children:Object(i.jsxs)(L.a,{required:!0,disabled:f.loading,children:[Object(i.jsx)(z.a,{htmlFor:"type",children:"\u05ea\u05e4\u05e7\u05d9\u05d3"}),Object(i.jsx)(A.a,{required:!0,type:"text",name:"type",id:"type",value:h.type,onChange:C})]})}),Object(i.jsx)("div",{className:s.field,children:Object(i.jsxs)(L.a,{required:!0,disabled:f.loading,style:{width:"100%"},children:[Object(i.jsx)(z.a,{htmlFor:"percent",children:"\u05d0\u05d7\u05d5\u05d6 \u05ea\u05e9\u05e8"}),Object(i.jsx)(A.a,{type:"number",onKeyUp:function(e){if("Enter"===e.key)return e.currentTarget.blur()},name:"percent",id:"percent",value:h.percent,onChange:C,inputProps:{min:0,max:100},endAdornment:Object(i.jsx)(B.a,{position:"end",children:"%"})})]})})]}),Object(i.jsxs)("div",{className:s.row,children:[Object(i.jsx)("div",{className:s.field,style:{flex:2},children:Object(i.jsx)(W.a,{required:!0,disabled:f.loading,autoOk:!0,okLabel:"\u05d0\u05d9\u05e9\u05d5\u05e8",cancelLabel:"\u05d1\u05d8\u05dc",variant:"dialog",name:"start",label:"\u05de\u05e9\u05e2\u05d4",ampm:!1,value:h.start,onChange:function(e){return E("start",e)},invalidDateMessage:"\u05e9\u05e2\u05d4 \u05e9\u05d2\u05d5\u05d9\u05d4."})}),Object(i.jsx)("div",{className:s.field,style:{flex:2},children:Object(i.jsx)(W.a,{required:!0,disabled:f.loading,autoOk:!0,okLabel:"\u05d0\u05d9\u05e9\u05d5\u05e8",cancelLabel:"\u05d1\u05d8\u05dc",variant:"dialog",name:"end",label:"\u05e2\u05d3 \u05e9\u05e2\u05d4",ampm:!1,value:h.end,onChange:function(e){return E("end",e)},invalidDateMessage:"\u05e9\u05e2\u05d4 \u05e9\u05d2\u05d5\u05d9\u05d4."})}),Object(i.jsx)("div",{className:s.field,children:Object(i.jsxs)(L.a,{disabled:!0,style:{width:"100%"},children:[Object(i.jsx)(z.a,{htmlFor:"percent",children:"\u05e9\u05e2\u05d5\u05ea"}),Object(i.jsx)(A.a,{type:"number",value:w.toFixed(2)})]})})]}),Object(i.jsxs)("div",{className:Object(Y.a)(s.row,s.submit),children:[Object(i.jsx)(k.a,{disabled:f.loading,type:"submit",color:"primary",children:n||"\u05d4\u05d5\u05e1\u05e3"}),Object(i.jsx)(k.a,{disabled:f.loading,type:"button",color:"secondary",onClick:function(e){null===o||void 0===o||o()},children:r||"\u05d1\u05d8\u05dc"})]})]})]})})},J=Object(j.a)((function(e){return{root:{userSelect:"none"},open:{},openWithError:{},content:{},contentOpen:{},button:{fontWeight:"bold",fontSize:18,margin:e.spacing(1,0)}}})),K=function(){var e=J(),t=a.a.useState(!1),n=Object(I.a)(t,2),r=n[0],c=n[1],o=a.a.useState(),l=Object(I.a)(o,2),s=l[0],d=l[1],u=function(){d(void 0),c(!1)};return Object(i.jsxs)("div",{className:Object(Y.a)(e.root,r&&e.open,s&&e.openWithError),children:[Object(i.jsx)(k.a,{fullWidth:!0,onClick:function(){return c(!0)},disabled:r,color:"primary",className:e.button,variant:r?"text":"contained",disableElevation:!0,children:"\u05d4\u05d5\u05e1\u05e3 \u05e2\u05d5\u05d1\u05d3"}),Object(i.jsx)("div",{className:Object(Y.a)(e.content,r&&e.contentOpen),children:r&&Object(i.jsxs)("div",{className:Object(Y.a)(e.content,r&&e.contentOpen),style:{position:"relative"},children:[Object(i.jsx)("div",{onClick:u,style:{inset:0,top:0,left:0,width:"100%",height:"100%",position:"fixed"}}),Object(i.jsx)("div",{style:{position:"relative"},children:Object(i.jsx)(G,{onError:function(e){return d(e)},onConfirm:u,onCancel:u})})]})}),s&&Object(i.jsx)(_.a,{style:{marginBottom:8},severity:"error",children:s})]})},$=n(115),Q=n(150),V=n(151),X=function(e){return e<10?"0".concat(e):e},Z=Object(j.a)((function(e){return{root:{width:"100%",display:"flex",alignItems:"center"},outer:{position:"fixed",top:0,left:0,width:"100%",height:"100%"},paper:{width:"100%",height:"auto",position:"relative",display:"flex",overflow:"hidden"},content:{position:"relative",width:"100%",right:0,transition:e.transitions.create(["right"])},contentOpen:{right:150},menu:{position:"absolute",width:150,height:"100%",right:-150,transition:e.transitions.create(["right","left","width"],{duration:100}),top:0,display:"flex"},menuOpen:{right:0},deleteMenu:{width:"100%",right:0},menuButton:{display:"flex",flexDirection:"column",borderRadius:0,fontWeight:"bold",transition:e.transitions.create(["width","fontSize"])},deleteButtonFull:{width:"100%",display:"flex",zIndex:1300,fontSize:14}}})),ee=function(e){var t=e.employee,n=e.current,r=e.setCurrent,a=Z(),c=D(),o=n&&n.employee.name===t.name,l=o&&(null===n||void 0===n?void 0:n.edit),s=o&&(null===n||void 0===n?void 0:n.menu),u=o&&(null===n||void 0===n?void 0:n.delete),j=(o&&(null===n||void 0===n||n.error),function(){return o?null===r||void 0===r?void 0:r(void 0):!o&&(null===n||void 0===n?void 0:n.edited)?console.log("cant close!"):void(null===r||void 0===r||r({employee:t,menu:!0}))});return Object(i.jsxs)("div",{className:a.root,style:{userSelect:"none"},children:[o&&Object(i.jsx)("div",{className:a.outer,onClick:j}),Object(i.jsxs)($.a,{variant:"outlined",style:{padding:8,margin:"8px 0"},className:a.paper,children:[l&&Object(i.jsx)(G,{employee:t,confirmText:"\u05e9\u05de\u05d5\u05e8",onConfirm:function(e){null===r||void 0===r||r(void 0)},onCancel:j}),!l&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:Object(Y.a)(a.menu,s&&a.menuOpen,u&&a.deleteMenu),children:[!u&&Object(i.jsx)(k.a,{onClick:function(){o&&(null===r||void 0===r||r({employee:t,edit:!0}))},disableElevation:!0,variant:"contained",color:"primary",className:a.menuButton,children:Object(i.jsxs)("div",{children:[Object(i.jsx)(Q.a,{}),"\u05e2\u05e8\u05d5\u05da"]})}),Object(i.jsx)(k.a,{disableElevation:!0,variant:"contained",color:"secondary",className:Object(Y.a)(a.menuButton,u&&a.deleteButtonFull),onClick:function(e){return o&&!u?null===r||void 0===r?void 0:r({employee:t,delete:!0}):o&&u?(c({type:"DELETE_EMPLOYEE",name:t.name}),null===r||void 0===r?void 0:r(void 0)):void 0},children:Object(i.jsx)("div",{children:u?Object(i.jsx)(V.a,{}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(V.a,{}),"\u05de\u05d7\u05e7"]})})})]}),Object(i.jsxs)("div",{onClick:j,className:Object(Y.a)(a.content,s&&a.contentOpen),children:[Object(i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",textAlign:"center",alignItems:"center",width:"100%",flexWrap:"wrap"},children:[Object(i.jsx)(d.a,{variant:"h6",component:"h3",children:t.name}),Object(i.jsxs)(d.a,{style:{margin:"0 8px",color:"#333"},variant:"caption",children:["(",t.type," ",Object(i.jsxs)("span",{style:{color:"#0089c0"},children:[t.percent,"%"]}),")"]}),Object(i.jsxs)(d.a,{variant:"caption",component:"h3",style:{color:"#333"},children:["(",Object(i.jsxs)("span",{style:{color:"#0089c0"},children:[t.hours.toFixed(2),"\u05e9"]}),") ",X(t.start.getHours()),":",X(t.start.getMinutes()),"-",X(t.end.getHours()),":",X(t.end.getMinutes())]})]}),Object(i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap",alignItems:"center",textAlign:"center",color:"#0089c0"},children:[Object(i.jsxs)("div",{children:[Object(i.jsx)(d.a,{variant:"subtitle2",style:{color:"#333"},children:"\u05de\u05d6\u05d5\u05de\u05df"}),t.tip.cash.toFixed(2)]}),Object(i.jsxs)("div",{children:[Object(i.jsx)(d.a,{variant:"subtitle2",style:{color:"#333"},children:"\u05d0\u05e9\u05e8\u05d0\u05d9"}),t.tip.credit.toFixed(2)]}),Object(i.jsxs)("div",{children:[Object(i.jsx)(d.a,{variant:"subtitle2",style:{color:"#333"},children:'\u05e1\u05d4"\u05db'}),(t.tip.cash+t.tip.credit).toFixed(2)]})]})]})]})]})]})},te=function(){var e=S(F),t=a.a.useState(),n=Object(I.a)(t,2),r=n[0],c=n[1];if(!e)return Object(i.jsx)("div",{children:"\u05dc\u05d0 \u05e7\u05d9\u05d9\u05dd \u05e8\u05d9\u05e9\u05d5\u05dd"});var o=function(e){c(e)},l=e.employees;return Object(i.jsxs)("div",{style:{display:"flex",flexDirection:"column",paddingBottom:20},children:[0===l.length&&Object(i.jsx)(_.a,{severity:"info",children:'\u05dc\u05d4\u05d5\u05e1\u05e4\u05ea \u05e2\u05d5\u05d1\u05d3\u05d9\u05dd \u05d9\u05e9 \u05dc\u05dc\u05d7\u05d5\u05e5 \u05e2\u05dc "\u05d4\u05d5\u05e1\u05e3 \u05e2\u05d5\u05d1\u05d3"'}),l.map((function(e,t){return Object(i.jsx)("div",{children:Object(i.jsx)(ee,{current:r,setCurrent:o,employee:e})},t)}))]})},ne=Object(j.a)((function(e){return{root:{position:"fixed",height:"100%",overflowY:"auto",boxSizing:"border-box",background:e.palette.primary.dark,color:e.palette.getContrastText(e.palette.primary.dark),display:"flex",flexDirection:"column",flex:1,width:"15%",userSelect:"none",pointerEvents:"none"},item:{padding:e.spacing(1),display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",flexDirection:"column","& .title":{fontSize:"11px"},"&:not(:first-child)":{borderTop:"1px solid #000"},"&:not(:last-child)":{borderBottom:"1px solid #fff"}}}})),ie=function(){var e=ne(),t=S(F);if(!t)return Object(i.jsx)(i.Fragment,{});var n=[{title:"\u05e2\u05d5\u05d1\u05d3\u05d9\u05dd",value:t.employees.length},{title:"\u05e9\u05e2\u05d5\u05ea",value:t.hours.toFixed(2)},{title:"\u05de\u05d6\u05d5\u05de\u05df \u05dc\u05e9\u05e2\u05d4",value:t.perhour.cash.toFixed(2)},{title:"\u05d0\u05e9\u05e8\u05d0\u05d9 \u05dc\u05e9\u05e2\u05d4",value:t.perhour.credit.toFixed(2)},{title:'\u05e1\u05d4"\u05db \u05dc\u05e9\u05e2\u05d4',value:(t.perhour.cash+t.perhour.credit).toFixed(2)}];return Object(i.jsx)("div",{className:e.root,children:n.map((function(t,n){return Object(i.jsxs)("div",{className:e.item,children:[Object(i.jsx)(d.a,{className:"title",variant:"body1",children:t.title}),t.subtitle&&Object(i.jsx)(d.a,{className:"subtitle",variant:"caption",children:t.subtitle}),Object(i.jsx)(d.a,{variant:"body1",className:"value",children:t.value})]},n)}))})},re=n(165),ae=n(152),ce=n(153),oe="BACKSPACE",le="CLEAR",se="CONFIRM",de=function(e){e.value;var t,n=e.onConfirm,r=e.max,c=ue(),o=a.a.useState(0),l=Object(I.a)(o,2),s=l[0],d=l[1],u=[[1,2,3],[4,5,6],[7,8,9],[le,0,se]],j=function(e){switch(r=r||9999,e.currentTarget.value){case oe:return d(Number(s.toString().slice(0,-1)));case le:return d(0);case se:return null===n||void 0===n?void 0:n(s);default:return Number(s+e.currentTarget.value)>r?d(r):d(Number(s+e.currentTarget.value))}};return Object(i.jsxs)("div",{className:c.pad,style:{position:"relative"},children:[Object(i.jsxs)("div",{className:c.padRow,children:[Object(i.jsxs)("div",{className:c.padInput,children:[Object(i.jsx)("div",{style:{direction:"ltr"},children:s.toLocaleString()}),Object(i.jsxs)("div",{className:c.padMax,children:["max ",null===(t=r)||void 0===t?void 0:t.toLocaleString()]})]}),Object(i.jsx)("button",{className:Object(Y.a)(c.padItem,c.backspaceButton),value:oe,onClick:j,children:Object(i.jsx)(ae.a,{fontSize:"inherit"})})]}),u.map((function(e,t){return Object(i.jsx)("div",{className:c.padRow,children:e.map((function(e,t){return Object(i.jsxs)("button",{className:Object(Y.a)(c.padItem,e===se&&c.confirmItem,e===le&&c.clearItem),value:e,onClick:j,children:["number"===typeof e&&e.toString(),e===se&&Object(i.jsx)(ce.a,{fontSize:"inherit"}),e===le&&e[0]]},t)}))},t)}))]})},ue=Object(j.a)((function(e){return{root:{width:"100%"},input:{cursor:"text",width:"100%",textAlign:"center"},pad:{display:"flex",flexDirection:"column",border:"1px solid #efefef"},padOuter:{},padRow:{display:"flex",flexDirection:"row-reverse","&:not(:last-child)":{borderBottom:"1px solid #efefef"}},padItem:{display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",border:0,boxSizing:"border-box",fontSize:18,background:"transparent",width:75,height:75,outline:"none","&:not(:last-child)":{borderLeft:"1px solid #efefef"}},padItemIcon:{},padInput:{display:"flex",flexDirection:"column",padding:e.spacing(0,1),flex:1,position:"relative",alignItems:"flex-end",fontSize:24,justifyContent:"center"},padMax:{position:"absolute",bottom:2,fontSize:10,color:"#999"},backspaceButton:{},confirmItem:{color:e.palette.info.main,fontSize:28},clearItem:{}}})),je=function(e){var t=e.value,n=e.onChange,r=e.max,c=ue(),o=a.a.useState(null),l=Object(I.a)(o,2),s=l[0],d=l[1],u=a.a.useState(t||0),j=Object(I.a)(u,2),b=j[0],h=j[1],p=Boolean(s);return Object(i.jsxs)("div",{className:c.root,children:[Object(i.jsx)("div",{className:c.input,onClick:function(e){return d(e.currentTarget)},children:b.toLocaleString()}),Object(i.jsx)(re.a,{open:p,anchorEl:s,onClose:function(){return d(null)},children:Object(i.jsx)(de,{max:r,value:b,onConfirm:function(e){null===n||void 0===n||n(e),h(e),d(null)}})})]})},be=n(154),he=n(155),pe=Object(j.a)((function(e){return{root:{width:"100%",display:"flex",margin:e.spacing(1,0),alignItems:"flex-start",justifyContent:"space-between"},item:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"30%"},field:{width:"100%",boxSizing:"border-box",border:"1px solid #bbb",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"row-reverse",fontSize:20,fontWeight:300,color:"#0089c0",borderRadius:e.shape.borderRadius},symbol:{color:"#bbb",fontSize:28},symbolActive:{color:"#0089c0"},itemText:{fontSize:13,color:"#bbb"}}})),me=function(){var e=pe(),t=S(F),n=D();if(!t)return Object(i.jsx)(i.Fragment,{});var r=t.tip;return Object(i.jsx)("div",{className:e.root,children:Object.keys({cash:"\u05de\u05d6\u05d5\u05de\u05df \u05dc\u05de\u05e9\u05de\u05e8\u05ea",credit:"\u05d0\u05e9\u05e8\u05d0\u05d9 \u05dc\u05de\u05e9\u05de\u05e8\u05ea"}).map((function(a,c){return Object(i.jsxs)("div",{className:e.item,children:[Object(i.jsx)("div",{className:Object(Y.a)(e.symbol,r[a]>0&&e.symbolActive),children:"cash"===a?Object(i.jsx)(be.a,{fontSize:"inherit"}):Object(i.jsx)(he.a,{fontSize:"inherit"})}),Object(i.jsx)("div",{className:e.field,children:Object(i.jsx)(je,{max:1e4,value:r[a],onChange:function(e){return function(e,i){n({type:"SET_WAGE",wage:Object(g.a)(Object(g.a)({},t.tip),{},Object(M.a)({},e,i))})}(a,e)}})}),Object(i.jsx)("div",{className:e.itemText,children:"cash"===a?"\u05de\u05d6\u05d5\u05de\u05df \u05dc\u05de\u05e9\u05de\u05e8\u05ea":"\u05d0\u05e9\u05e8\u05d0\u05d9 \u05dc\u05de\u05e9\u05de\u05e8\u05ea"})]},c)}))})},xe=Object(j.a)((function(e){return{root:{width:"100vw",height:"100%",position:"relative",display:"flex",flexDirection:"column",overflow:"hidden"},toolbar:{display:"flex",justifyContent:"space-between"},container:{width:"100%",height:"100%",display:"flex"},wage:{position:"relative",boxShadow:"1px 1px 3px rgba(0,0,0,.1)"},main:{display:"flex",flexDirection:"column",flex:1,marginLeft:"15%",width:"75%",height:"100%"},content:{overflowY:"auto",width:"100%",flex:1,paddingBottom:e.mixins.toolbar.minHeight,paddingTop:e.spacing(1),background:e.palette.grey[200]},item:{height:"200px"},employeeButton:{width:"100%",border:0,background:"transparent"}}})),fe=function(){var e=xe(),t=S(F);if(!t)return Object(i.jsx)("div",{children:"\u05d0\u05d9\u05df \u05de\u05e9\u05de\u05e8\u05ea"});var n;return Object(i.jsxs)("div",{className:e.root,children:[Object(i.jsx)(l.a,{position:"relative",children:Object(i.jsx)(s.a,{className:e.toolbar,children:Object(i.jsx)(d.a,{variant:"h6",component:"h1",children:(n=t.date,"\u05d9\u05d5\u05dd ".concat(["\u05e8\u05d0\u05e9\u05d5\u05df","\u05e9\u05e0\u05d9","\u05e9\u05dc\u05d9\u05e9\u05d9","\u05e8\u05d1\u05d9\u05e2\u05d9","\u05d7\u05de\u05d9\u05e9\u05d9","\u05e9\u05d9\u05e9\u05d9","\u05e9\u05d1\u05ea"][n.getDay()],", ").concat(n.getDate()," ").concat(["\u05d9\u05e0\u05d5\u05d0\u05e8","\u05e4\u05d1\u05e8\u05d5\u05d0\u05e8","\u05de\u05e8\u05e5","\u05d0\u05e4\u05e8\u05d9\u05dc","\u05de\u05d0\u05d9","\u05d9\u05d5\u05e0\u05d9","\u05d9\u05d5\u05dc\u05d9","\u05d0\u05d5\u05d2\u05d5\u05e1\u05d8","\u05e1\u05e4\u05d8\u05de\u05d1\u05e8","\u05d0\u05d5\u05e7\u05d8\u05d5\u05d1\u05e8","\u05e0\u05d5\u05d1\u05de\u05d1\u05e8","\u05d3\u05e6\u05de\u05d1\u05e8"][n.getMonth()]," ").concat(n.getFullYear()))})})}),Object(i.jsxs)("div",{className:e.container,children:[Object(i.jsx)(ie,{}),Object(i.jsxs)("div",{className:e.main,children:[Object(i.jsxs)(u.a,{className:e.wage,children:[Object(i.jsx)(me,{}),Object(i.jsx)(K,{})]}),Object(i.jsx)(u.a,{className:e.content,children:Object(i.jsx)(te,{})})]})]})]})},Oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,168)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),i(e),r(e),a(e),c(e)}))},ve=(n(112),n(83)),ge=n(160),ye=n(166),we=n(158),Ne=n(12),Ce=n(81),Ee=n.n(Ce),Se=Object(ve.a)({direction:"rtl"}),De=Object(Ne.b)({plugins:[].concat(Object(v.a)(Object(ge.a)().plugins),[Ee()()])}),Te=function(e){var t=e.children;return Object(i.jsx)(ye.b,{jss:De,children:Object(i.jsx)(we.a,{theme:Se,children:t})})};o.a.render(Object(i.jsx)(T,{children:Object(i.jsx)(Te,{children:Object(i.jsx)(fe,{})})}),document.getElementById("root")),Oe()}},[[113,1,2]]]);
//# sourceMappingURL=main.631c3728.chunk.js.map
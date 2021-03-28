(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{133:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=133},134:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(28),l=n.n(a),s=n(6),r=(n(79),n(3)),i=n(7),o=n(4),u=n(20),d=n.n(u),b=n(33),j="LOGIN_SUCCESS",m="LOGIN_FAILED",h="REGISTER_SUCCESS",x="REGISTER_FAILED",f="LOAD_USER_SUCCESS",p="LOAD_USER_FAILED",g="LOG_OUT",O="ADD_ALERT",v="REMOVE_ALERT",y=n(40),w=n.n(y).a.create({baseURL:"https://room-call-chat-app.herokuapp.com/",headers:{"Content-Type":"application/json; charset=UTF-8"}});w.interceptors.response.use((function(e){return e}),(function(e){return e.response.status,Promise.reject(e)}));var N=w,k=n(135),S=function(e){var t=e.msg,n=e.type,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;return function(e){var a=Object(k.a)();e({type:O,payload:{id:a,msg:t,type:n}}),setTimeout((function(){return e({type:v,payload:{id:a,msg:t}})}),c)}},E=function(){return function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.get("/auth");case 3:n=e.sent,t({type:f,payload:n.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:p});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},A=n(0);var C=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{logout:function(){return{type:g}}})((function(e){var t=e.logout,n=e.isAuthenticated,a=Object(c.useState)(Object(k.a)()),l=Object(o.a)(a,2),i=l[0],u=l[1];return n?Object(A.jsx)("div",{className:"flex h-full bg-img-background bg-cover bg-no-repeat w-full justify-center items-center",children:Object(A.jsx)("div",{className:"flex w-1/2 h-full items-center justify-center",children:Object(A.jsxs)("div",{className:"w-3/4",children:[Object(A.jsxs)("div",{className:"flex justify-center",children:[Object(A.jsx)(s.b,{to:"/join",className:"flex justify-end min-w-3/4 mr-6",children:Object(A.jsxs)("button",{className:"justify-center flex min-w-1/2 items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none",children:[Object(A.jsx)("svg",{width:"2em",height:"2em",viewBox:"0 0 24 24",children:Object(A.jsx)("path",{d:"M3.7 7.7a.996.996 0 0 1 1.41 0L12 14.59l4.29-4.3L14.7 8.7c-.62-.62-.18-1.7.71-1.7H20c.55 0 1 .45 1 1v4.59c0 .89-1.08 1.34-1.71.71l-1.59-1.59l-5 5a.996.996 0 0 1-1.41 0L3.7 9.11c-.38-.38-.38-1.02 0-1.41z",fill:"currentColor"})}),Object(A.jsx)("div",{children:"Join meeting"})]})}),Object(A.jsx)(s.b,{to:"/rooms/".concat(i),className:"flex justify-start min-w-3/4 ml-6",children:Object(A.jsxs)("button",{onClick:function(){u(Object(k.a)())},className:"justify-center focus:outline-none min-w-1/2 flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",children:[Object(A.jsx)("svg",{width:"2em",height:"2em",viewBox:"0 0 24 24",children:Object(A.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",fill:"currentColor"})}),Object(A.jsx)("div",{children:Object(A.jsx)("div",{children:"Create a meeting"})})]})})]}),Object(A.jsx)("div",{className:"flex justify-center mt-6",children:Object(A.jsx)("div",{className:"text-white text-xl text hover:underline cursor-pointer",children:n?Object(A.jsx)(s.b,{to:"/login",onClick:function(){t()},children:"Logout"}):null})})]})})}):Object(A.jsx)(r.a,{to:"/login"})}));var L=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,alerts:e.alerts}}),{login:function(e,t){return function(){var n=Object(b.a)(d.a.mark((function n(c){var a,l;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a={email:e,password:t},n.prev=1,n.next=4,N.post("/login",a);case 4:l=n.sent,c({type:j,payload:l.data}),c(E()),c(S({msg:"Login successful!",type:"success"})),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(1),c({type:m}),c(S({msg:"Login failed!",type:"failed"}));case 14:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(e){return n.apply(this,arguments)}}()}})((function(e){var t=e.login,n=e.isAuthenticated,a=e.alerts,l=Object(c.useState)(""),i=Object(o.a)(l,2),u=i[0],d=i[1],b=Object(c.useState)(""),j=Object(o.a)(b,2),m=j[0],h=j[1];function x(e){"email"===e.target.id?d(e.target.value):h(e.target.value)}return n?Object(A.jsx)(r.a,{to:"/"}):Object(A.jsx)("div",{className:"h-full bg-img-background bg-cover bg-no-repeat",children:Object(A.jsx)("div",{className:"w-full h-full max-w-screen-sm",children:Object(A.jsx)("div",{className:"h-full w-1/2 bg-white bg-opacity-50 shadow-2xl flex items-center justify-center",children:Object(A.jsxs)("form",{className:"flex flex-col items-center rounded",onSubmit:function(e){e.preventDefault(),t(u,m)},children:[Object(A.jsxs)("div",{className:"",children:[Object(A.jsx)("div",{className:"text-6xl mb-12",children:"Sign in"}),Object(A.jsxs)("div",{className:"mb-4",children:[Object(A.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"email",children:"Email"}),Object(A.jsx)("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"email",type:"text",placeholder:"Email",onChange:x,value:u})]}),Object(A.jsxs)("div",{className:"",children:[Object(A.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"password",children:"Password"}),Object(A.jsx)("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",id:"password",type:"password",placeholder:"******************",onChange:x,value:m})]}),Object(A.jsxs)("div",{className:"flex text-xs",children:[Object(A.jsx)("div",{className:"text-black text-opacity-60 mr-2",children:"If you don't have account ?"}),Object(A.jsx)("div",{children:Object(A.jsx)(s.b,{to:"/register",className:"text-blue-500",children:"Sign up"})})]}),Object(A.jsx)("div",{className:"flex items-center justify-center mt-2",children:Object(A.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit",children:"Sign In"})})]}),Object(A.jsx)("div",{className:"w-full mt-3",children:a.map((function(e,t){return"failed"===e.type?Object(A.jsxs)("div",{className:"flex items-center bg-red-200 border border-red-500 text-red-900 rounded text-xl p-2 mb-1",children:[Object(A.jsx)("div",{className:"mr-3 text-xl",children:Object(A.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 12 12",children:Object(A.jsx)("g",{fill:"none",children:Object(A.jsx)("path",{d:"M6 11A5 5 0 1 0 6 1a5 5 0 0 0 0 10zm-.75-2.75a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0zm.258-4.84a.5.5 0 0 1 .984 0l.008.09V6l-.008.09a.5.5 0 0 1-.984 0L5.5 6V3.5l.008-.09z",fill:"currentColor"})})})}),Object(A.jsx)("div",{className:"text-base",children:e.msg})]},t):Object(A.jsxs)("div",{className:"flex items-center bg-green-200 border border-green-500 text-green-900 rounded text-xl p-2 mb-1",children:[Object(A.jsx)("div",{className:"mr-3 text-xl",children:Object(A.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 12 12",children:Object(A.jsx)("g",{fill:"none",children:Object(A.jsx)("path",{d:"M6 11A5 5 0 1 0 6 1a5 5 0 0 0 0 10zm-.75-2.75a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0zm.258-4.84a.5.5 0 0 1 .984 0l.008.09V6l-.008.09a.5.5 0 0 1-.984 0L5.5 6V3.5l.008-.09z",fill:"currentColor"})})})}),Object(A.jsx)("div",{className:"text-base",children:e.msg})]},t)}))})]})})})})})),I=n(31),z=n(5),M=n(13),D=n.n(M);function R(e){var t=e.register,n=e.alerts,a=Object(c.useState)({}),l=Object(o.a)(a,2),r=l[0],i=l[1];function u(e){i(Object(z.a)(Object(z.a)({},r),{},Object(I.a)({},e.target.id,e.target.value)))}return Object(A.jsx)("div",{className:"h-full bg-img-background bg-cover bg-no-repeat",children:Object(A.jsx)("div",{className:"w-full h-full max-w-screen-sm",children:Object(A.jsx)("div",{className:"h-full w-1/2 items-center flex justify-center bg-white bg-opacity-50 shadow-2xl rounded",children:Object(A.jsxs)("form",{className:"max-w-lg",onSubmit:function(e){e.preventDefault(),console.log(r),t(r)},children:[Object(A.jsx)("div",{className:"text-6xl mb-12",children:"Sign up"}),Object(A.jsxs)("div",{className:"mb-4",children:[Object(A.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"name",children:"Full name"}),Object(A.jsx)("input",{className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"name",type:"text",placeholder:"Name",onChange:u})]}),Object(A.jsxs)("div",{className:"mb-4",children:[Object(A.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"email",children:"Email"}),Object(A.jsx)("input",{className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"email",type:"text",placeholder:"Email",onChange:u})]}),Object(A.jsx)("div",{className:"flex flex-wrap -mx-3",children:Object(A.jsxs)("div",{className:"w-full px-3",children:[Object(A.jsx)("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:"password",children:"Password"}),Object(A.jsx)("input",{className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"password",type:"password",placeholder:"******************",onChange:u})]})}),Object(A.jsxs)("div",{className:"flex text-xs mb-1",children:[Object(A.jsx)("div",{className:"text-black text-opacity-60 mr-2",children:"If you have account ?"}),Object(A.jsx)("div",{children:Object(A.jsx)(s.b,{to:"/login",className:"text-blue-500",children:"Login"})})]}),Object(A.jsx)("div",{className:"flex items-center justify-center",children:Object(A.jsx)("button",{className:"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit",children:"Sign up"})}),Object(A.jsx)("div",{className:"w-full mt-3",children:n.map((function(e,t){return"failed"===e.type?Object(A.jsxs)("div",{className:"flex items-center bg-red-200 border border-red-500 text-red-900 rounded text-xl p-2 mb-1",children:[Object(A.jsx)("div",{className:"mr-3 text-xl",children:Object(A.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 12 12",children:Object(A.jsx)("g",{fill:"none",children:Object(A.jsx)("path",{d:"M6 11A5 5 0 1 0 6 1a5 5 0 0 0 0 10zm-.75-2.75a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0zm.258-4.84a.5.5 0 0 1 .984 0l.008.09V6l-.008.09a.5.5 0 0 1-.984 0L5.5 6V3.5l.008-.09z",fill:"currentColor"})})})}),Object(A.jsx)("div",{className:"text-base",children:e.msg})]},t):Object(A.jsxs)("div",{className:"flex items-center bg-green-200 border border-green-500 text-green-900 rounded text-xl p-2 mb-1",children:[Object(A.jsx)("div",{className:"mr-3 text-xl",children:Object(A.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 12 12",children:Object(A.jsx)("g",{fill:"none",children:Object(A.jsx)("path",{d:"M6 11A5 5 0 1 0 6 1a5 5 0 0 0 0 10zm-.75-2.75a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0zm.258-4.84a.5.5 0 0 1 .984 0l.008.09V6l-.008.09a.5.5 0 0 1-.984 0L5.5 6V3.5l.008-.09z",fill:"currentColor"})})})}),Object(A.jsx)("div",{className:"text-base",children:e.msg})]},t)}))})]})})})})}R.prototype={alerts:D.a.array,register:D.a.func.isRequired};var B=Object(i.b)((function(e){return{alerts:e.alerts}}),{register:function(e){var t=e.name,n=e.email,c=e.password;return function(){var e=Object(b.a)(d.a.mark((function e(a){var l,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l={name:t,email:n,password:c},e.next=4,N.post("/register",l);case 4:s=e.sent,a({type:h,payload:s.data}),a(S({msg:"Register successful!",type:"success"})),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),a({type:x}),a(S({msg:"Register failed!",type:"failed"}));case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()}})(R),T=n(32);var U=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,user:e.auth.user}}))((function(e){e.isAuthenticated;var t=e.room,n=e.user,a=e.socket,l=Object(c.useState)([]),s=Object(o.a)(l,2),r=s[0],i=s[1],u=Object(c.useState)(""),d=Object(o.a)(u,2),b=d[0],j=d[1];return Object(c.useEffect)((function(){return a&&a.on("message",(function(e){i([].concat(Object(T.a)(r),[e]));var t=document.getElementById("messages");t.scrollTop=t.scrollHeight})),function(){null===a||void 0===a||a.off("message")}})),Object(A.jsxs)("div",{className:"h-full w-full",children:[Object(A.jsx)("div",{className:"h-full mx-2",children:Object(A.jsx)("div",{id:"messages",className:"h-full pb-16 text-sm pt-2 overflow-y-auto no-scrollbar",children:Object(A.jsx)("div",{className:"",children:null===r||void 0===r?void 0:r.map((function(e,t){return function(e,t){return"Admin"!==e.name?Object(A.jsx)("div",{className:e.name===n.name?"flex justify-end":"flex justify-start",children:Object(A.jsxs)("div",{className:e.name===n.name?"w-auto max-w-full inline-block p-2 rounded-xl bg-blue-500 my-1 text-white":"w-auto max-w-full inline-block p-2 rounded-xl bg-gray-400 my-1",children:[Object(A.jsx)("p",{className:"text-xs font-bold w-auto max-w-full",children:e.name}),Object(A.jsx)("p",{className:"w-auto max-w-full",children:e.msg})]},t)}):Object(A.jsx)("div",{className:"flex justify-center text-gray-400",children:e.msg},t)}(e,t)}))})})}),Object(A.jsx)("div",{className:"fixed bottom-0 w-1/4 bg-white",children:Object(A.jsxs)("form",{className:"h-16 w-full flex border-t p-2 items-center justify-center",onSubmit:function(e){e.preventDefault(),b&&a&&(a.emit("sendMessage",{name:n.name,msg:b,room:t}),j(""))},children:[Object(A.jsx)("div",{className:"h-full w-11/12 p-1 flex items-center",children:Object(A.jsx)("input",{type:"text",name:"message",autoComplete:"off",placeholder:"Ab",value:b,onChange:function(e){e.preventDefault(),j(e.target.value)},className:"h-full w-full text-xs no-scrollbar resize-none outline-none border-gray-400 border rounded-full p-2"})}),Object(A.jsx)("div",{className:"h-full flex items-center w-1/12 text-2xl",children:Object(A.jsx)("button",{type:"submit",className:"focus:outline-none",children:Object(A.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 15 15",children:Object(A.jsx)("g",{fill:"none",children:Object(A.jsx)("path",{d:"M14.5.5l.46.197a.5.5 0 0 0-.657-.657L14.5.5zm-14 6l-.197-.46a.5.5 0 0 0-.06.889L.5 6.5zm8 8l-.429.257a.5.5 0 0 0 .889-.06L8.5 14.5zM14.303.04l-14 6l.394.92l14-6l-.394-.92zM.243 6.93l5 3l.514-.858l-5-3l-.514.858zM5.07 9.757l3 5l.858-.514l-3-5l-.858.514zm3.889 4.94l6-14l-.92-.394l-6 14l.92.394zM14.146.147l-9 9l.708.707l9-9l-.708-.708z",fill:"currentColor"})})})})})]})})]})})),_=n(69),F=n.n(_),V=n(70),G=n.n(V);var H=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,user:e.auth.user}}),{loadUser:E})((function(e){e.isAuthenticated;var t=e.user,n=Object(c.useState)(Object(r.g)().id),a=Object(o.a)(n,1)[0],l=Object(c.useState)(null),s=Object(o.a)(l,2),i=s[0],u=s[1],d=Object(c.useState)([]),b=Object(o.a)(d,2),j=b[0],m=b[1],h=Object(c.useState)(null),x=Object(o.a)(h,2),f=x[0],p=x[1],g=Object(c.useState)(),O=Object(o.a)(g,2),v=O[0],y=O[1];function w(e){for(var t=document.getElementById("videoContainer"),n=[],c=0;c<t.childNodes.length;c++)e.includes(t.childNodes[c].id)||n.push(t.childNodes[c]);n.forEach((function(e){t.removeChild(e)}))}function N(e,t){if(!document.getElementById(e)){var n=document.createElement("video"),c=document.createElement("div"),a=document.getElementById("videoContainer");c.className="max-w-full min-w-min flex justify-center items-center",n.srcObject=t,n.muted="muted",c.id=e;var l=n.play();void 0!==l&&l.then((function(e){})).catch((function(e){console.log(e)})),c.appendChild(n),a&&a.appendChild(c)}}return Object(c.useEffect)((function(){E(),u(F()("https://room-call-chat-app.herokuapp.com/",{transports:["websocket","polling","flashsocket"]})),p(new G.a)}),[]),Object(c.useEffect)((function(){null===f||void 0===f||f.on("open",(function(e){y(e),i.emit("joinRoom",{name:t.name,room:a,peerID:e}),i.on("allMembers",(function(t){var n=document.getElementById("videoContainer");n&&(n.innerHTML=""),m(t),navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(n){N(e,n),t.forEach((function(t){if(t!==e){var c=f.call(t,n);null===c||void 0===c||c.on("stream",(function(e){N(t,e)}))}})),w(t)})),f.on("call",(function(c){n&&(n.innerHTML=""),navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(n){c.answer(n),N(e,n),t.forEach((function(t){t!==e&&(null===c||void 0===c||c.on("stream",(function(e){N(t,e)})))}))})),w(t)})),w(t)}))}))}),[i,a,t,f,j]),Object(c.useEffect)((function(){return function(){null===i||void 0===i||i.emit("peerClose",{peerId:v})}}),[i,v]),Object(c.useEffect)((function(){return function(){null===i||void 0===i||i.close(),null===f||void 0===f||f.destroy()}}),[f]),Object(A.jsxs)("div",{className:"w-full h-full flex",children:[Object(A.jsx)("div",{className:"w-3/4 h-full grid grid-cols-2 gap-2 overflow-y-scroll bg-black bg-opacity-90 p-2",id:"videoContainer"}),Object(A.jsx)("div",{className:"w-1/4 h-full border-l border-gray-300",children:Object(A.jsx)(U,{room:a,socket:i})})]})}));var J=function(){var e=Object(c.useState)(),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(A.jsx)("div",{className:"w-full h-full flex justify-center items-center bg-img-background bg-cover bg-no-repeat",children:Object(A.jsxs)("div",{children:[Object(A.jsx)("div",{className:"text-white text-5xl",children:"Join A Room"}),Object(A.jsx)("div",{children:Object(A.jsxs)("form",{children:[Object(A.jsx)("input",{name:"id",type:"text",value:n,onChange:function(e){e.preventDefault(),a(e.target.value)},placeholder:"Enter room's id ...",className:"border-gray-400 border rounded-lg p-4 outline-none"}),Object(A.jsx)(s.b,{to:"/rooms/".concat(n),children:Object(A.jsx)("button",{type:"submit",className:"bg-blue-500 text-white ml-4 text-xl p-2 rounded-xl",children:"JOIN"})})]})})]})})},P=n(19),q=n(71),W=n(72),K={token:localStorage.getItem("token"),isAuthenticated:!1,user:null,loading:!0};var Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case h:case x:return e;case j:return Object(z.a)(Object(z.a)(Object(z.a)({},e),c),{},{isAuthenticated:!0});case m:return Object(z.a)(Object(z.a)({},e),{},{isAuthenticated:!1,user:null});case f:return Object(z.a)(Object(z.a)(Object(z.a)({},e),c),{},{isAuthenticated:!0,loading:!1});case p:return e;case g:return Object(z.a)(Object(z.a)({},e),{},{user:null,isAuthenticated:!1,token:null,loading:!1});default:return e}},X=[];var Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case O:return[].concat(Object(T.a)(e),[c]);case v:return e.filter((function(e){return e.id!==c.id}));default:return e}},Z=Object(P.combineReducers)({auth:Q,alerts:Y}),$=function(e){e?(N.defaults.headers.common["x-auth-token"]=e,localStorage.setItem("token",e)):(delete N.defaults.headers.common["x-auth-token"],localStorage.removeItem("token"))},ee=Object(P.createStore)(Z,{},Object(q.composeWithDevTools)(Object(P.applyMiddleware)(W.a))),te=ee.getState();ee.subscribe((function(){var e=te;te=ee.getState(),e.auth.token!==te.auth.token&&$(te.auth.token)}));var ne=ee,ce=n(73),ae=function(e){var t=e.component,n=e.auth,c=n.isAuthenticated,a=n.loading,l=Object(ce.a)(e,["component","auth"]);return Object(A.jsx)(r.b,Object(z.a)(Object(z.a)({},l),{},{render:function(e){return a?null:c?Object(A.jsx)(t,Object(z.a)({},e)):Object(A.jsx)(r.a,{to:"/login"})}}))};ae.prototype={auth:D.a.object.isRequired};var le=Object(i.b)((function(e){return{auth:e.auth}}))(ae);var se=function(){return Object(c.useEffect)((function(){localStorage.getItem("token")&&$(localStorage.getItem("token")),ne.dispatch(E())}),[]),Object(A.jsx)(i.a,{store:ne,children:Object(A.jsx)("div",{className:"App h-full font-mono",children:Object(A.jsxs)(r.d,{children:[Object(A.jsx)(r.b,{path:"/login",exact:!0,component:L}),Object(A.jsx)(r.b,{path:"/register",exact:!0,component:B}),Object(A.jsx)(le,{path:"/rooms/:id",component:H}),Object(A.jsx)(le,{path:"/join",component:J}),Object(A.jsx)(r.b,{path:"/",exact:!0,component:C})]})})})};l.a.render(Object(A.jsx)(s.a,{children:Object(A.jsx)(se,{})}),document.getElementById("root"))},79:function(e,t,n){}},[[134,1,2]]]);
//# sourceMappingURL=main.3f866a50.chunk.js.map
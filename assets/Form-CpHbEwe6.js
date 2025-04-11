import{j as d,r as w}from"./index-SPk8WiTg.js";const E={INPUT:1,TEXTAREA:2},j=({label:e,textlabel:t,type:n,id:s,value:r,onChange:a,name:i,placeholder:o,inputType:c})=>{switch(n){case E.INPUT:return d.jsxs("div",{className:"fieldInput",children:[d.jsx("label",{htmlFor:e,children:t}),d.jsx("input",{type:c,id:s,value:r,onChange:a,name:i,placeholder:o,required:!0})]});case E.TEXTAREA:return d.jsxs("div",{className:"fieldTextarea",children:[d.jsx("label",{htmlFor:e,children:t}),d.jsx("textarea",{id:s,name:i,value:r,onChange:a,placeholder:o,rows:"11",required:!0})]})}},O={_origin:"https://api.emailjs.com"},ne=(e,t="https://api.emailjs.com")=>{O._userID=e,O._origin=t},z=(e,t,n)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class U{constructor(t){this.status=t.status,this.text=t.responseText}}const J=(e,t,n={})=>new Promise((s,r)=>{const a=new XMLHttpRequest;a.addEventListener("load",({target:i})=>{const o=new U(i);o.status===200||o.text==="OK"?s(o):r(o)}),a.addEventListener("error",({target:i})=>{r(new U(i))}),a.open("POST",O._origin+e,!0),Object.keys(n).forEach(i=>{a.setRequestHeader(i,n[i])}),a.send(t)}),ae=(e,t,n,s)=>{const r=s||O._userID;return z(r,e,t),J("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:r,service_id:e,template_id:t,template_params:n}),{"Content-type":"application/json"})},se=e=>{let t;if(typeof e=="string"?t=document.querySelector(e):t=e,!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},ie=(e,t,n,s)=>{const r=s||O._userID,a=se(n);z(r,e,t);const i=new FormData(a);return i.append("lib_version","3.2.0"),i.append("service_id",e),i.append("template_id",t),i.append("user_id",r),J("/api/v1.0/email/send-form",i)},N={init:ne,send:ae,sendForm:ie};function g(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function q(e,t){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,s){return n.__proto__=s,n},q(e,t)}function oe(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,q(e,t)}var ce=Object.defineProperty,he=Object.defineProperties,le=Object.getOwnPropertyDescriptors,P=Object.getOwnPropertySymbols,K=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable,L=(e,t,n)=>t in e?ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))K.call(t,n)&&L(e,n,t[n]);if(P)for(var n of P(t))W.call(t,n)&&L(e,n,t[n]);return e},X=(e,t)=>he(e,le(t)),ue=(e,t)=>{var n={};for(var s in e)K.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&P)for(var s of P(e))t.indexOf(s)<0&&W.call(e,s)&&(n[s]=e[s]);return n},p=(e,t,n)=>(L(e,typeof t!="symbol"?t+"":t,n),n),C=(e,t,n)=>new Promise((s,r)=>{var a=c=>{try{o(n.next(c))}catch(h){r(h)}},i=c=>{try{o(n.throw(c))}catch(h){r(h)}},o=c=>c.done?s(c.value):Promise.resolve(c.value).then(a,i);o((n=n.apply(e,t)).next())}),de="hCaptcha-script",T="hCaptchaOnLoad",F="script-error",R="@hCaptcha/loader";function pe(e){return Object.entries(e).filter(([,t])=>t||t===!1).map(([t,n])=>`${encodeURIComponent(t)}=${encodeURIComponent(String(n))}`).join("&")}function G(e){let t=e&&e.ownerDocument||document,n=t.defaultView||t.parentWindow||window;return{document:t,window:n}}function Q(e){return e||document.head}function fe(e){var t;e.setTag("source",R),e.setTag("url",document.URL),e.setContext("os",{UA:navigator.userAgent}),e.setContext("browser",y({},me())),e.setContext("device",X(y({},ve()),{screen_width_pixels:screen.width,screen_height_pixels:screen.height,language:navigator.language,orientation:((t=screen.orientation)==null?void 0:t.type)||"Unknown",processor_count:navigator.hardwareConcurrency,platform:navigator.platform}))}function me(){var e,t,n,s,r,a;let i=navigator.userAgent,o,c;return i.indexOf("Firefox")!==-1?(o="Firefox",c=(e=i.match(/Firefox\/([\d.]+)/))==null?void 0:e[1]):i.indexOf("Edg")!==-1?(o="Microsoft Edge",c=(t=i.match(/Edg\/([\d.]+)/))==null?void 0:t[1]):i.indexOf("Chrome")!==-1&&i.indexOf("Safari")!==-1?(o="Chrome",c=(n=i.match(/Chrome\/([\d.]+)/))==null?void 0:n[1]):i.indexOf("Safari")!==-1&&i.indexOf("Chrome")===-1?(o="Safari",c=(s=i.match(/Version\/([\d.]+)/))==null?void 0:s[1]):i.indexOf("Opera")!==-1||i.indexOf("OPR")!==-1?(o="Opera",c=(r=i.match(/(Opera|OPR)\/([\d.]+)/))==null?void 0:r[2]):i.indexOf("MSIE")!==-1||i.indexOf("Trident")!==-1?(o="Internet Explorer",c=(a=i.match(/(MSIE |rv:)([\d.]+)/))==null?void 0:a[2]):(o="Unknown",c="Unknown"),{name:o,version:c}}function ve(){let e=navigator.userAgent,t;e.indexOf("Win")!==-1?t="Windows":e.indexOf("Mac")!==-1?t="Mac":e.indexOf("Linux")!==-1?t="Linux":e.indexOf("Android")!==-1?t="Android":e.indexOf("like Mac")!==-1||e.indexOf("iPhone")!==-1||e.indexOf("iPad")!==-1?t="iOS":t="Unknown";let n;return/Mobile|iPhone|iPod|Android/i.test(e)?n="Mobile":/Tablet|iPad/i.test(e)?n="Tablet":n="Desktop",{model:t,family:t,device:n}}var ye=class Y{constructor(t){p(this,"_parent"),p(this,"breadcrumbs",[]),p(this,"context",{}),p(this,"extra",{}),p(this,"tags",{}),p(this,"request"),p(this,"user"),this._parent=t}get parent(){return this._parent}child(){return new Y(this)}setRequest(t){return this.request=t,this}removeRequest(){return this.request=void 0,this}addBreadcrumb(t){return typeof t.timestamp>"u"&&(t.timestamp=new Date().toISOString()),this.breadcrumbs.push(t),this}setExtra(t,n){return this.extra[t]=n,this}removeExtra(t){return delete this.extra[t],this}setContext(t,n){return typeof n.type>"u"&&(n.type=t),this.context[t]=n,this}removeContext(t){return delete this.context[t],this}setTags(t){return this.tags=y(y({},this.tags),t),this}setTag(t,n){return this.tags[t]=n,this}removeTag(t){return delete this.tags[t],this}setUser(t){return this.user=t,this}removeUser(){return this.user=void 0,this}toBody(){let t=[],n=this;for(;n;)t.push(n),n=n.parent;return t.reverse().reduce((s,r)=>{var a;return s.breadcrumbs=[...(a=s.breadcrumbs)!=null?a:[],...r.breadcrumbs],s.extra=y(y({},s.extra),r.extra),s.contexts=y(y({},s.contexts),r.context),s.tags=y(y({},s.tags),r.tags),r.user&&(s.user=r.user),r.request&&(s.request=r.request),s},{breadcrumbs:[],extra:{},contexts:{},tags:{},request:void 0,user:void 0})}clear(){this.breadcrumbs=[],this.context={},this.tags={},this.user=void 0}},ge=/^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,be=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js))(?::(\d+))?(?::(\d+))?\s*$/i,xe=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,we=/^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/,S="?",$="An unknown error occurred",_e="0.0.4";function Re(e){for(let t=0;t<e.length;t++)e[t]=Math.floor(Math.random()*256);return e}function f(e){return(e+256).toString(16).substring(1)}function Ee(){let e=Re(new Array(16));return e[6]=e[6]&15|64,e[8]=e[8]&63|128,f(e[0])+f(e[1])+f(e[2])+f(e[3])+"-"+f(e[4])+f(e[5])+"-"+f(e[6])+f(e[7])+"-"+f(e[8])+f(e[9])+"-"+f(e[10])+f(e[11])+f(e[12])+f(e[13])+f(e[14])+f(e[15])}var Ce=[[ge,"chrome"],[xe,"winjs"],[be,"gecko"]];function Oe(e){var t,n,s,r;if(!e.stack)return null;let a=[],i=(s=(n=(t=e.stack).split)==null?void 0:n.call(t,`
`))!=null?s:[];for(let o=0;o<i.length;++o){let c=null,h=null,l=null;for(let[m,b]of Ce)if(h=m.exec(i[o]),h){l=b;break}if(!(!h||!l)){if(l==="chrome")c={filename:(r=h[2])!=null&&r.startsWith("address at ")?h[2].substring(11):h[2],function:h[1]||S,lineno:h[3]?+h[3]:null,colno:h[4]?+h[4]:null};else if(l==="winjs")c={filename:h[2],function:h[1]||S,lineno:+h[3],colno:h[4]?+h[4]:null};else if(l==="gecko")o===0&&!h[5]&&e.columnNumber!==void 0&&a.length>0&&(a[0].column=e.columnNumber+1),c={filename:h[3],function:h[1]||S,lineno:h[4]?+h[4]:null,colno:h[5]?+h[5]:null};else continue;!c.function&&c.lineno&&(c.function=S),a.push(c)}}return a.length?a.reverse():null}function je(e){let t=Oe(e);return{type:e.name,value:e.message,stacktrace:{frames:t??[]}}}function Se(e){let t=we.exec(e),n=t?t.slice(1):[];if(n.length!==6)throw new Error("Invalid DSN");let s=n[5].split("/"),r=s.slice(0,-1).join("/");return n[0]+"://"+n[3]+(n[4]?":"+n[4]:"")+(r?"/"+r:"")+"/api/"+s.pop()+"/envelope/?sentry_version=7&sentry_key="+n[1]+(n[2]?"&sentry_secret="+n[2]:"")}function Ie(e,t,n){var s,r;let a=y({event_id:Ee().replaceAll("-",""),platform:"javascript",sdk:{name:"@hcaptcha/sentry",version:_e},environment:t,release:n,timestamp:Date.now()/1e3},e.scope.toBody());if(e.type==="exception"){a.message=(r=(s=e.error)==null?void 0:s.message)!=null?r:"Unknown error",a.fingerprint=[a.message];let i=[],o=e.error;for(let c=0;c<5&&o&&(i.push(je(o)),!(!o.cause||!(o.cause instanceof Error)));c++)o=o.cause;a.exception={values:i.reverse()}}return e.type==="message"&&(a.message=e.message,a.level=e.level),a}function Te(e){if(e instanceof Error)return e;if(typeof e=="string")return new Error(e);if(typeof e=="object"&&e!==null&&!Array.isArray(e)){let n=e,{message:s}=n,r=ue(n,["message"]),a=new Error(typeof s=="string"?s:$);return Object.assign(a,r)}let t=new Error($);return Object.assign(t,{cause:e})}function Pe(e,t,n){return C(this,null,function*(){var s,r;try{if(typeof fetch<"u"&&typeof AbortSignal<"u"){let a;if(n){let c=new AbortController;a=c.signal,setTimeout(()=>c.abort(),n)}let i=yield fetch(e,X(y({},t),{signal:a})),o=yield i.text();return{status:i.status,body:o}}return yield new Promise((a,i)=>{var o,c;let h=new XMLHttpRequest;if(h.open((o=t==null?void 0:t.method)!=null?o:"GET",e),h.onload=()=>a({status:h.status,body:h.responseText}),h.onerror=()=>i(new Error("XHR Network Error")),t==null?void 0:t.headers)for(let[l,m]of Object.entries(t.headers))h.setRequestHeader(l,m);if(n){let l=setTimeout(()=>{h.abort(),i(new Error("Request timed out"))},n);h.onloadend=()=>{clearTimeout(l)}}h.send((c=t==null?void 0:t.body)==null?void 0:c.toString())})}catch(a){return{status:0,body:(r=(s=a==null?void 0:a.toString)==null?void 0:s.call(a))!=null?r:"Unknown error"}}})}var v,D=(v=class{constructor(e){p(this,"apiURL"),p(this,"dsn"),p(this,"environment"),p(this,"release"),p(this,"sampleRate"),p(this,"debug"),p(this,"_scope"),p(this,"shouldBuffer",!1),p(this,"bufferlimit",20),p(this,"buffer",[]);var t,n,s,r,a;this.environment=e.environment,this.release=e.release,this.sampleRate=(t=e.sampleRate)!=null?t:1,this.debug=(n=e.debug)!=null?n:!1,this._scope=(s=e.scope)!=null?s:new ye,this.apiURL=Se(e.dsn),this.dsn=e.dsn,this.shouldBuffer=(r=e.buffer)!=null?r:!1,this.bufferlimit=(a=e.bufferLimit)!=null?a:20}static init(e){v._instance||(v._instance=new v(e))}static get instance(){if(!v._instance)throw new Error("Sentry has not been initialized");return v._instance}log(...e){this.debug&&console.log(...e)}get scope(){return this._scope}static get scope(){return v.instance.scope}withScope(e){let t=this._scope.child();e(t)}static withScope(e){v.instance.withScope(e)}captureException(e,t){this.captureEvent({type:"exception",level:"error",error:Te(e),scope:t??this._scope})}static captureException(e,t){v.instance.captureException(e,t)}captureMessage(e,t="info",n){this.captureEvent({type:"message",level:t,message:e,scope:n??this._scope})}static captureMessage(e,t="info",n){v.instance.captureMessage(e,t,n)}captureEvent(e){if(Math.random()>=this.sampleRate){this.log("Dropped event due to sample rate");return}if(this.shouldBuffer){if(this.buffer.length>=this.bufferlimit)return;this.buffer.push(e)}else this.sendEvent(e)}sendEvent(e,t=5e3){return C(this,null,function*(){try{this.log("Sending sentry event",e);let n=Ie(e,this.environment,this.release),s={event_id:n.event_id,dsn:this.dsn},r={type:"event"},a=JSON.stringify(s)+`
`+JSON.stringify(r)+`
`+JSON.stringify(n),i=yield Pe(this.apiURL,{method:"POST",headers:{"Content-Type":"application/x-sentry-envelope"},body:a},t);this.log("Sentry response",i.status),i.status!==200&&(console.log(i.body),console.error("Failed to send event to Sentry",i))}catch(n){console.error("Failed to send event",n)}})}flush(e=5e3){return C(this,null,function*(){try{this.log("Flushing sentry events",this.buffer.length);let t=this.buffer.splice(0,this.buffer.length).map(n=>this.sendEvent(n,e));yield Promise.all(t),this.log("Flushed all events")}catch(t){console.error("Failed to flush events",t)}})}static flush(e=5e3){return v.instance.flush(e)}static reset(){v._instance=void 0}},p(v,"_instance"),v),Ae="https://d233059272824702afc8c43834c4912d@sentry.hcaptcha.com/6",ke="2.0.0",qe="production";function Le(e=!0){if(!e)return B();D.init({dsn:Ae,release:ke,environment:qe});let t=D.scope;return fe(t),B(t)}function B(e=null){return{addBreadcrumb:t=>{e&&e.addBreadcrumb(t)},captureRequest:t=>{e&&e.setRequest(t)},captureException:t=>{e&&D.captureException(t,e)}}}function De({scriptLocation:e,query:t,loadAsync:n=!0,crossOrigin:s,apihost:r="https://js.hcaptcha.com",cleanup:a=!0,secureApi:i=!1,scriptSource:o=""}={},c){let h=Q(e),l=G(h);return new Promise((m,b)=>{let u=l.document.createElement("script");u.id=de,o?u.src=`${o}?onload=${T}`:i?u.src=`${r}/1/secure-api.js?onload=${T}`:u.src=`${r}/1/api.js?onload=${T}`,u.crossOrigin=s,u.async=n;let _=(x,A)=>{try{!i&&a&&h.removeChild(u),A(x)}catch(k){b(k)}};u.onload=x=>_(x,m),u.onerror=x=>{c&&c(u.src),_(x,b)},u.src+=t!==""?`&${t}`:"",h.appendChild(u)})}var I=[];function Me(e={cleanup:!0},t){try{t.addBreadcrumb({category:R,message:"hCaptcha loader params",data:e});let n=Q(e.scriptLocation),s=G(n),r=I.find(({scope:i})=>i===s.window);if(r)return t.addBreadcrumb({category:R,message:"hCaptcha already loaded"}),r.promise;let a=new Promise((i,o)=>C(this,null,function*(){try{s.window[T]=()=>{t.addBreadcrumb({category:R,message:"hCaptcha script called onload function"}),i(s.window.hcaptcha)};let c=pe({custom:e.custom,render:e.render,sentry:e.sentry,assethost:e.assethost,imghost:e.imghost,reportapi:e.reportapi,endpoint:e.endpoint,host:e.host,recaptchacompat:e.recaptchacompat,hl:e.hl});yield De(y({query:c},e),h=>{t.captureRequest({url:h,method:"GET"})}),t.addBreadcrumb({category:R,message:"hCaptcha loaded",data:r})}catch{t.addBreadcrumb({category:R,message:"hCaptcha failed to load"});let h=I.findIndex(l=>l.scope===s.window);h!==-1&&I.splice(h,1),o(new Error(F))}}));return I.push({promise:a,scope:s.window}),a}catch(n){return t.captureException(n),Promise.reject(new Error(F))}}function Z(e,t,n=0){return C(this,null,function*(){let s=n<2?"Retry loading hCaptcha Api":"Exceeded maximum retries";try{return yield Me(e,t)}catch(r){return t.addBreadcrumb({category:R,message:s}),n>=2?(t.captureException(r),Promise.reject(r)):(n+=1,Z(e,t,n))}})}function Ue(){return C(this,arguments,function*(e={}){let t=Le(e.sentry);return yield Z(e,t)})}function H(e){var t=e&&e.ownerDocument||document,n=t.defaultView||t.parentWindow||window;return{document:t,window:n}}function V(e){return e||document.head}var Ne=function(e){oe(t,e);function t(s){var r;return r=e.call(this,s)||this,r._hcaptcha=void 0,r.renderCaptcha=r.renderCaptcha.bind(g(r)),r.resetCaptcha=r.resetCaptcha.bind(g(r)),r.removeCaptcha=r.removeCaptcha.bind(g(r)),r.isReady=r.isReady.bind(g(r)),r._onReady=null,r.loadCaptcha=r.loadCaptcha.bind(g(r)),r.handleOnLoad=r.handleOnLoad.bind(g(r)),r.handleSubmit=r.handleSubmit.bind(g(r)),r.handleExpire=r.handleExpire.bind(g(r)),r.handleError=r.handleError.bind(g(r)),r.handleOpen=r.handleOpen.bind(g(r)),r.handleClose=r.handleClose.bind(g(r)),r.handleChallengeExpired=r.handleChallengeExpired.bind(g(r)),r.ref=w.createRef(),r.apiScriptRequested=!1,r.sentryHub=null,r.captchaId="",r.state={isApiReady:!1,isRemoved:!1,elementId:s.id},r}var n=t.prototype;return n.componentDidMount=function(){var r=this,a=V(this.props.scriptLocation),i=H(a);this._hcaptcha=i.window.hcaptcha||void 0;var o=typeof this._hcaptcha<"u";if(o){this.setState({isApiReady:!0},function(){r.renderCaptcha()});return}this.loadCaptcha()},n.componentWillUnmount=function(){var r=this._hcaptcha,a=this.captchaId;this.isReady()&&(r.reset(a),r.remove(a))},n.shouldComponentUpdate=function(r,a){return!(this.state.isApiReady!==a.isApiReady||this.state.isRemoved!==a.isRemoved)},n.componentDidUpdate=function(r){var a=this,i=["sitekey","size","theme","tabindex","languageOverride","endpoint"],o=i.every(function(c){return r[c]===a.props[c]});o||this.removeCaptcha(function(){a.renderCaptcha()})},n.loadCaptcha=function(){if(!this.apiScriptRequested){var r=this.props,a=r.apihost,i=r.assethost,o=r.endpoint,c=r.host,h=r.imghost,l=r.languageOverride,m=r.reCaptchaCompat,b=r.reportapi,u=r.sentry,_=r.custom,x=r.loadAsync,A=r.scriptLocation,k=r.scriptSource,ee=r.secureApi,M=r.cleanup,te=M===void 0?!0:M,re={render:"explicit",apihost:a,assethost:i,endpoint:o,hl:l,host:c,imghost:h,recaptchacompat:m===!1?"off":null,reportapi:b,sentry:u,custom:_,loadAsync:x,scriptLocation:A,scriptSource:k,secureApi:ee,cleanup:te};Ue(re).then(this.handleOnLoad,this.handleError).catch(this.handleError),this.apiScriptRequested=!0}},n.renderCaptcha=function(r){var a=this,i=this.props.onReady,o=this.state.isApiReady,c=this.captchaId;if(!(!o||c)){var h=Object.assign({"open-callback":this.handleOpen,"close-callback":this.handleClose,"error-callback":this.handleError,"chalexpired-callback":this.handleChallengeExpired,"expired-callback":this.handleExpire,callback:this.handleSubmit},this.props,{hl:this.props.hl||this.props.languageOverride,languageOverride:void 0}),l=this._hcaptcha,m=l.render(this.ref.current,h);this.captchaId=m,this.setState({isRemoved:!1},function(){r&&r(),i&&i(),a._onReady&&a._onReady(m)})}},n.resetCaptcha=function(){var r=this._hcaptcha,a=this.captchaId;this.isReady()&&r.reset(a)},n.removeCaptcha=function(r){var a=this,i=this._hcaptcha,o=this.captchaId;this.isReady()&&this.setState({isRemoved:!0},function(){a.captchaId="",i.remove(o),r&&r()})},n.handleOnLoad=function(){var r=this;this.setState({isApiReady:!0},function(){var a=V(r.props.scriptLocation),i=H(a);r._hcaptcha=i.window.hcaptcha,r.renderCaptcha(function(){var o=r.props.onLoad;o&&o()})})},n.handleSubmit=function(r){var a=this.props.onVerify,i=this.state.isRemoved,o=this._hcaptcha,c=this.captchaId;if(!(typeof o>"u"||i)){var h=o.getResponse(c),l=o.getRespKey(c);a&&a(h,l)}},n.handleExpire=function(){var r=this.props.onExpire,a=this._hcaptcha,i=this.captchaId;this.isReady()&&(a.reset(i),r&&r())},n.handleError=function(r){var a=this.props.onError,i=this._hcaptcha,o=this.captchaId;this.isReady()&&i.reset(o),a&&a(r)},n.isReady=function(){var r=this.state,a=r.isApiReady,i=r.isRemoved;return a&&!i},n.handleOpen=function(){!this.isReady()||!this.props.onOpen||this.props.onOpen()},n.handleClose=function(){!this.isReady()||!this.props.onClose||this.props.onClose()},n.handleChallengeExpired=function(){!this.isReady()||!this.props.onChalExpired||this.props.onChalExpired()},n.execute=function(r){var a=this;r===void 0&&(r=null),r=typeof r=="object"?r:null;try{var i=this._hcaptcha,o=this.captchaId;if(!this.isReady()){var c,h=new Promise(function(l,m){a._onReady=function(b){try{var u=a._hcaptcha;r&&r.async?u.execute(b,r).then(l).catch(m):l(u.execute(b,r))}catch(_){m(_)}}});return(c=r)!=null&&c.async?h:null}return i.execute(o,r)}catch(l){return r&&r.async?Promise.reject(l):null}},n.close=function(){var r=this._hcaptcha,a=this.captchaId;if(this.isReady())return r.close(a)},n.setData=function(r){var a=this._hcaptcha,i=this.captchaId;this.isReady()&&(r&&typeof r!="object"&&(r=null),a.setData(i,r))},n.getResponse=function(){var r=this._hcaptcha;return r.getResponse(this.captchaId)},n.getRespKey=function(){var r=this._hcaptcha;return r.getRespKey(this.captchaId)},n.render=function(){var r=this.state.elementId;return w.createElement("div",{ref:this.ref,id:r})},t}(w.Component);const $e=()=>{const[e,t]=w.useState(""),[n,s]=w.useState({prenom:"",nom:"",email:"",message:""}),[r,a]=w.useState(null),i=w.useRef(),o=w.useRef(),[c,h]=w.useState(!1),l=u=>{s({...n,[u.target.name]:u.target.value})},m=()=>{c||h(!0)},b=u=>{if(u.preventDefault(),!r){t("Merci de valider le captcha avant d’envoyer.");return}const _={...n,"h-captcha-response":r};N.init("KUgA4JMsoQ82S_jn-"),N.send("service_carolo","template_7q7eo65",_).then(()=>{t("Message envoyé avec succès !"),i.current.reset(),a(null),o.current.resetCaptcha()},x=>{t("Échec lors de l’envoi."),console.log("Erreur : ",x)})};return d.jsxs("section",{className:"form__container",id:"contact",children:[d.jsx("h2",{children:"Contactez moi !"}),d.jsx("p",{children:"Des questions ? Des projets ? N'hésitez pas à me laisser un message pour pouvoir échanger"}),d.jsxs("form",{className:"form__content",onSubmit:b,method:"POST",ref:i,onFocus:m,children:[d.jsxs("div",{className:"row",children:[d.jsxs("div",{className:"col",children:[d.jsx(j,{type:E.INPUT,inputType:"text",label:"nom",textlabel:"Nom",id:"nom",name:"nom",onChange:l}),d.jsx(j,{type:E.INPUT,inputType:"text",label:"prenom",textlabel:"Prénom",id:"prenom",name:"prenom",onChange:l}),d.jsx(j,{type:E.INPUT,inputType:"email",label:"email",textlabel:"E-mail",id:"email",name:"email",onChange:l})]}),d.jsx("div",{className:"col",children:d.jsx(j,{type:E.TEXTAREA,label:"message",textlabel:"Message",id:"message",name:"message",onChange:l})})]}),c&&d.jsx(Ne,{sitekey:"e130d0a2-efe6-484e-8dc4-a57e09286020",onVerify:a,ref:o,className:"form__content--captcha"}),d.jsx("p",{children:e}),d.jsx("button",{type:"submit",className:"form__content--submit",children:"Envoyer"})]})]})};export{$e as default};

/*! For license information please see commons-e499df66c83ccf6c2982.js.LICENSE.txt */
(self.webpackChunkdrjack0_personal_portfolio=self.webpackChunkdrjack0_personal_portfolio||[]).push([[351],{4184:function(t,e){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var o=typeof r;if("string"===o||"number"===o)t.push(r);else if(Array.isArray(r)){if(r.length){var i=a.apply(null,r);i&&t.push(i)}}else if("object"===o){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){t.push(r.toString());continue}for(var s in r)n.call(r,s)&&r[s]&&t.push(s)}}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):void 0===(r=function(){return a}.apply(e,[]))||(t.exports=r)}()},4852:function(t){"use strict";t.exports=Object.assign},7334:function(t,e,r){"use strict";r.d(e,{QL:function(){return c},Yf:function(){return p},yN:function(){return f},GX:function(){return u},a5:function(){return d},Al:function(){return i},oM:function(){return s},nD:function(){return l}});let n=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce(((t,e)=>t+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"),"");var a=r.p+"static/FitME_HCI_Project-785a1e68040eeee24ed55ef05099724e.pdf",o=r.p+"static/Curriculum_web-96c5092862650e1182737f63c73cca78.pdf";const i={title:"Matteo Giaccone | DrJack0 | Developer",lang:"it",description:"Matteo Giaccone | Developer | Welcome to my personal portfolio",image:r.p+"static/og_logo-2aac25fc178f4b68ee34da84e8f5c6af.png"},s={title:"Hello, my name is",name:"Matteo",subtitle:"I'm a Full Stack Developer",cta:"Know More"},c={img:"profile.jpg",paragraphOne:"Hello world! My name is Matteo Giaccone and I’m an aspiring full stack developer. I finished my Bachelor’s in Software Engineering in December 2020, with a graduation score of 99/110, and, at the moment, I’m studying at “Sapienza University of Rome” to obtain the Master’s Degree in Engineering in Computer Science.",paragraphTwo:"During this years of books, math and coding, I’ve experimented lots of programming languages and architectural approaches, but my way is, no doubt, cloud architectures and Full Stack Developing, with a particular focus on AWS, NoSQL, Javascript and the enormous potential that these three entities, together, can show.",paragraphThree:"My ambition is to be able to continue learning and experimenting in this field, also improving my skills in the field of problem solving and teamwork, so that I can always take new paths and face ever greater challenges.",resume:o},l=[{id:n(),img:"projects/sekkyone.png",title:"Sekkyone - Smart Garbage Bucket",info:"Sekkyone is my individual project for the Internet of Things (IoT) course at Sapienza University of Rome, a smart garbage bucket that gives you information about filling level, internal temperature/humidity and flames presence.",info2:"At the heart of the circuit we have an STM32 Nucleo-64 F401RE, a low-cost development board that utilizes a 32-bit ARM Cortex-M4 processor whose frequency can go as high as 84 MHz while power consumption can go as low as 2.4 uA at standby without RTC. For development purpose only, all sensors (listed below) retrieve data every minute, but we will see how the situation will change with the IoT-Lab testbed and the constraints of LoRa and IPv6 mesh networks.",url:"https://drjack0.medium.com/sekkyone-smart-garbage-bucket-2d1e88ba5505",repo:"https://github.com/drjack0/iot2020-2021"},{id:n(),img:"projects/kloaka.png",title:"Kloaka - Sewer Monitoring System",info:"Kloaka is my group project for the IoT 2021 course @ Sapienza University of Rome, made with Giacomo Priamo and Federico Paglioni.",info2:"We believe there is a tight relationship between the quality of marine waters and the quality and status of those waters that directly flow into the seas. We decided to focus on sewage waters, and in particular we developed Kloaka, a sewer pipes monitoring system that detects changes in the flow of sewage waters, which may be potentially caused by obstructions or leakages and will surely cause negative effects to sea waters (i.e. where this kind of waters flow).",url:"https://1701568-iot.blogspot.com/2021/07/group-project-final-delivery-blog-post.html",repo:"https://github.com/drjack0/kloaka"},{id:n(),img:"projects/pathmaker.png",title:"PathMaker - Scout Group Management",info:"Pathmaker is a web application, therefore accessible, in an agile way, also from mobile, aimed at the management and support of the Scout activity, going to affect for most on the functions of a management software, implementing it to be easy in reading and use for Educators who use it.",info2:"For the realization of the project I relied on Amazon Web Services (hereinafter, AWS), a platform that offers Cloud Computing services. As for the UX, User Experience, the choice was to lean on always to AWS for hosting, implementing everything with the React framework.",url:"https://pathmaker.it",repo:"https://github.com/drjack0/pathmaker-client"},{id:n(),img:"projects/fitme.png",title:"FitME - Calorie Intake Monitoring",info:"FitME is a mobile application that was created, with the collaboration of Hamna Moieez and Francesco Gelsomino, with the aim of simplifying the control of one's diet and aims to educate on healthy and fair eating.",info2:"FitME focuses on the average calorie consumption of certain foods and, thanks to artificial intelligence algorithms and mass use, it will be able to be more and more precise and accurate in the future.",url:a,repo:"https://github.com/hamna-moieez/FitMe"}],f=[{id:n(),title:"High School Diploma",info:'Liceo Scientifico Statale "G.B. Morgagni"',info2:"Graduation Score: 84/100",url:"https://www.liceomorgagni.edu.it",repo:""},{id:n(),title:"Bachelor's Degree - Sapienza University of Rome",info:"Ingegneria Informatica & Automatica",info2:"Graduation Score: 99/110",url:"https://www.uniroma1.it/it",repo:""},{id:n(),title:"Masters's Degree - Sapienza University of Rome",info:"Engineering in Computer Science",info2:"Work in progress...",url:"https://www.uniroma1.it/it",repo:""}],u=[{id:n(),title:"IT - Technical Support",info:"Technical and IT support in the organization of congresses in the medical field",info2:"work for: InventaWide",url:"https://www.inventawide.com/",repo:""},{id:n(),title:"IT - Web Developer",info:"Complete development of the website",info2:"work for: EuroSTA srl",url:"https://eurosta.it",repo:""}],p={cta:"Would you like to work with me? Fill the form!",btn:"Let's talk!",email:"drjackdevelopment@gmail.com"},d={networks:[{id:n(),name:"medium",url:"https://drjack0.medium.com/"},{id:n(),name:"linkedin",url:"https://www.linkedin.com/in/giaccone/"},{id:n(),name:"github",url:"https://github.com/drjack0"}]}},8679:function(t,e,r){"use strict";var n=r(9864),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function c(t){return n.isMemo(t)?i:s[t.$$typeof]||a}s[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[n.Memo]=i;var l=Object.defineProperty,f=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,m=Object.prototype;t.exports=function t(e,r,n){if("string"!=typeof r){if(m){var a=d(r);a&&a!==m&&t(e,a,n)}var i=f(r);u&&(i=i.concat(u(r)));for(var s=c(e),y=c(r),h=0;h<i.length;++h){var g=i[h];if(!(o[g]||n&&n[g]||y&&y[g]||s&&s[g])){var b=p(r,g);try{l(e,g,b)}catch(v){}}}}return e}},4415:function(t,e){"use strict";var r,n=Symbol.for("react.element"),a=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),l=Symbol.for("react.context"),f=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),h=Symbol.for("react.offscreen");function g(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case n:switch(t=t.type){case o:case s:case i:case p:case d:return t;default:switch(t=t&&t.$$typeof){case f:case l:case u:case y:case m:case c:return t;default:return e}}case a:return e}}}r=Symbol.for("react.module.reference"),e.isFragment=function(t){return g(t)===o}},4954:function(t,e,r){"use strict";t.exports=r(4415)},682:function(t,e,r){"use strict";var n=r(7462),a=r(3366),o=r(4184),i=r.n(o),s=r(7294),c=r(6792),l=["bsPrefix","fluid","as","className"],f=s.forwardRef((function(t,e){var r=t.bsPrefix,o=t.fluid,f=t.as,u=void 0===f?"div":f,p=t.className,d=(0,a.Z)(t,l),m=(0,c.vE)(r,"container"),y="string"==typeof o?"-"+o:"-fluid";return s.createElement(u,(0,n.Z)({ref:e},d,{className:i()(p,o?""+m+y:m)}))}));f.displayName="Container",f.defaultProps={fluid:!1},e.Z=f},6792:function(t,e,r){"use strict";r.d(e,{vE:function(){return o}});var n=r(7294),a=n.createContext({});a.Consumer,a.Provider;function o(t,e){var r=(0,n.useContext)(a);return t||r[e]||e}},9590:function(t){var e="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var s,c,l,f;if(Array.isArray(t)){if((s=t.length)!=i.length)return!1;for(c=s;0!=c--;)if(!o(t[c],i[c]))return!1;return!0}if(r&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(f=t.entries();!(c=f.next()).done;)if(!i.has(c.value[0]))return!1;for(f=t.entries();!(c=f.next()).done;)if(!o(c.value[1],i.get(c.value[0])))return!1;return!0}if(n&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(f=t.entries();!(c=f.next()).done;)if(!i.has(c.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((s=t.length)!=i.length)return!1;for(c=s;0!=c--;)if(t[c]!==i[c])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((s=(l=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(c=s;0!=c--;)if(!Object.prototype.hasOwnProperty.call(i,l[c]))return!1;if(e&&t instanceof Element)return!1;for(c=s;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!t.$$typeof)&&!o(t[l[c]],i[l[c]]))return!1;return!0}return t!=t&&i!=i}t.exports=function(t,e){try{return o(t,e)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4593:function(t,e,r){"use strict";r.d(e,{q:function(){return yt}});var n,a,o,i,s=r(5697),c=r.n(s),l=r(3524),f=r.n(l),u=r(9590),p=r.n(u),d=r(7294),m=r(4852),y=r.n(m),h="bodyAttributes",g="htmlAttributes",b="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(t){return v[t]})),"charset"),x="cssText",k="href",S="http-equiv",C="innerHTML",T="itemprop",O="name",A="property",E="rel",j="src",M="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},$="defaultTitle",I="defer",_="encodeSpecialCharacters",N="onChangeClientState",z="titleTemplate",R=Object.keys(P).reduce((function(t,e){return t[P[e]]=e,t}),{}),L=[v.NOSCRIPT,v.SCRIPT,v.STYLE],Y="data-react-helmet",V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},D=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),X=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},H=function(t,e){var r={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r},U=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},W=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},B=function(t){var e=J(t,v.TITLE),r=J(t,z);if(r&&e)return r.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var n=J(t,$);return e||n||void 0},q=function(t){return J(t,N)||function(){}},G=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return X({},t,e)}),{})},K=function(t,e){return e.filter((function(t){return void 0!==t[v.BASE]})).map((function(t){return t[v.BASE]})).reverse().reduce((function(e,r){if(!e.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==t.indexOf(o)&&r[o])return e.concat(r)}return e}),[])},Z=function(t,e,r){var n={};return r.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&nt("Helmet: "+t+' should be of type "Array". Instead found type "'+V(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,r){var a={};r.filter((function(t){for(var r=void 0,o=Object.keys(t),i=0;i<o.length;i++){var s=o[i],c=s.toLowerCase();-1===e.indexOf(c)||r===E&&"canonical"===t[r].toLowerCase()||c===E&&"stylesheet"===t[c].toLowerCase()||(r=c),-1===e.indexOf(s)||s!==C&&s!==x&&s!==T||(r=s)}if(!r||!t[r])return!1;var l=t[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][l]&&(a[r][l]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var s=o[i],c=y()({},n[s],a[s]);n[s]=c}return t}),[]).reverse()},J=function(t,e){for(var r=t.length-1;r>=0;r--){var n=t[r];if(n.hasOwnProperty(e))return n[e]}return null},Q=(n=Date.now(),function(t){var e=Date.now();e-n>16?(n=e,t(e)):setTimeout((function(){Q(t)}),0)}),tt=function(t){return clearTimeout(t)},et="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:r.g.requestAnimationFrame||Q,rt="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||tt:r.g.cancelAnimationFrame||tt,nt=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},at=null,ot=function(t,e){var r=t.baseTag,n=t.bodyAttributes,a=t.htmlAttributes,o=t.linkTags,i=t.metaTags,s=t.noscriptTags,c=t.onChangeClientState,l=t.scriptTags,f=t.styleTags,u=t.title,p=t.titleAttributes;ct(v.BODY,n),ct(v.HTML,a),st(u,p);var d={baseTag:lt(v.BASE,r),linkTags:lt(v.LINK,o),metaTags:lt(v.META,i),noscriptTags:lt(v.NOSCRIPT,s),scriptTags:lt(v.SCRIPT,l),styleTags:lt(v.STYLE,f)},m={},y={};Object.keys(d).forEach((function(t){var e=d[t],r=e.newTags,n=e.oldTags;r.length&&(m[t]=r),n.length&&(y[t]=d[t].oldTags)})),e&&e(),c(t,m,y)},it=function(t){return Array.isArray(t)?t.join(""):t},st=function(t,e){void 0!==t&&document.title!==t&&(document.title=it(t)),ct(v.TITLE,e)},ct=function(t,e){var r=document.getElementsByTagName(t)[0];if(r){for(var n=r.getAttribute(Y),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(e),s=0;s<i.length;s++){var c=i[s],l=e[c]||"";r.getAttribute(c)!==l&&r.setAttribute(c,l),-1===a.indexOf(c)&&a.push(c);var f=o.indexOf(c);-1!==f&&o.splice(f,1)}for(var u=o.length-1;u>=0;u--)r.removeAttribute(o[u]);a.length===o.length?r.removeAttribute(Y):r.getAttribute(Y)!==i.join(",")&&r.setAttribute(Y,i.join(","))}},lt=function(t,e){var r=document.head||document.querySelector(v.HEAD),n=r.querySelectorAll(t+"["+"data-react-helmet]"),a=Array.prototype.slice.call(n),o=[],i=void 0;return e&&e.length&&e.forEach((function(e){var r=document.createElement(t);for(var n in e)if(e.hasOwnProperty(n))if(n===C)r.innerHTML=e.innerHTML;else if(n===x)r.styleSheet?r.styleSheet.cssText=e.cssText:r.appendChild(document.createTextNode(e.cssText));else{var s=void 0===e[n]?"":e[n];r.setAttribute(n,s)}r.setAttribute(Y,"true"),a.some((function(t,e){return i=e,r.isEqualNode(t)}))?a.splice(i,1):o.push(r)})),a.forEach((function(t){return t.parentNode.removeChild(t)})),o.forEach((function(t){return r.appendChild(t)})),{oldTags:a,newTags:o}},ft=function(t){return Object.keys(t).reduce((function(e,r){var n=void 0!==t[r]?r+'="'+t[r]+'"':""+r;return e?e+" "+n:n}),"")},ut=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,r){return e[P[r]||r]=t[r],e}),e)},pt=function(t,e,r){switch(t){case v.TITLE:return{toComponent:function(){return t=e.title,r=e.titleAttributes,(n={key:t})[Y]=!0,a=ut(r,n),[d.createElement(v.TITLE,a,t)];var t,r,n,a},toString:function(){return function(t,e,r,n){var a=ft(r),o=it(e);return a?"<"+t+' data-react-helmet="true" '+a+">"+W(o,n)+"</"+t+">":"<"+t+' data-react-helmet="true">'+W(o,n)+"</"+t+">"}(t,e.title,e.titleAttributes,r)}};case h:case g:return{toComponent:function(){return ut(e)},toString:function(){return ft(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,r){var n,a=((n={key:r})[Y]=!0,n);return Object.keys(e).forEach((function(t){var r=P[t]||t;if(r===C||r===x){var n=e.innerHTML||e.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=e[t]})),d.createElement(t,a)}))}(t,e)},toString:function(){return function(t,e,r){return e.reduce((function(e,n){var a=Object.keys(n).filter((function(t){return!(t===C||t===x)})).reduce((function(t,e){var a=void 0===n[e]?e:e+'="'+W(n[e],r)+'"';return t?t+" "+a:a}),""),o=n.innerHTML||n.cssText||"",i=-1===L.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+t+">")}),"")}(t,e,r)}}}},dt=function(t){var e=t.baseTag,r=t.bodyAttributes,n=t.encode,a=t.htmlAttributes,o=t.linkTags,i=t.metaTags,s=t.noscriptTags,c=t.scriptTags,l=t.styleTags,f=t.title,u=void 0===f?"":f,p=t.titleAttributes;return{base:pt(v.BASE,e,n),bodyAttributes:pt(h,r,n),htmlAttributes:pt(g,a,n),link:pt(v.LINK,o,n),meta:pt(v.META,i,n),noscript:pt(v.NOSCRIPT,s,n),script:pt(v.SCRIPT,c,n),style:pt(v.STYLE,l,n),title:pt(v.TITLE,{title:u,titleAttributes:p},n)}},mt=f()((function(t){return{baseTag:K([k,M],t),bodyAttributes:G(h,t),defer:J(t,I),encode:J(t,_),htmlAttributes:G(g,t),linkTags:Z(v.LINK,[E,k],t),metaTags:Z(v.META,[O,w,S,A,T],t),noscriptTags:Z(v.NOSCRIPT,[C],t),onChangeClientState:q(t),scriptTags:Z(v.SCRIPT,[j,C],t),styleTags:Z(v.STYLE,[x],t),title:B(t),titleAttributes:G(b,t)}}),(function(t){at&&rt(at),t.defer?at=et((function(){ot(t,(function(){at=null}))})):(ot(t),at=null)}),dt)((function(){return null})),yt=(a=mt,i=o=function(t){function e(){return F(this,e),U(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!p()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:e};case v.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,r=t.child,n=t.arrayTypeChildren,a=t.newChildProps,o=t.nestedChildren;return X({},n,((e={})[r.type]=[].concat(n[r.type]||[],[X({},a,this.mapNestedChildrenToProps(r,o))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,r,n=t.child,a=t.newProps,o=t.newChildProps,i=t.nestedChildren;switch(n.type){case v.TITLE:return X({},a,((e={})[n.type]=i,e.titleAttributes=X({},o),e));case v.BODY:return X({},a,{bodyAttributes:X({},o)});case v.HTML:return X({},a,{htmlAttributes:X({},o)})}return X({},a,((r={})[n.type]=X({},o),r))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var r=X({},e);return Object.keys(t).forEach((function(e){var n;r=X({},r,((n={})[e]=t[e],n))})),r},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var r=this,n={};return d.Children.forEach(t,(function(t){if(t&&t.props){var a=t.props,o=a.children,i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,r){return e[R[r]||r]=t[r],e}),e)}(H(a,["children"]));switch(r.warnOnInvalidChildren(t,o),t.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:n=r.flattenArrayTypeChildren({child:t,arrayTypeChildren:n,newChildProps:i,nestedChildren:o});break;default:e=r.mapObjectTypeChildren({child:t,newProps:e,newChildProps:i,nestedChildren:o})}}})),e=this.mapArrayTypeChildrenToProps(n,e)},e.prototype.render=function(){var t=this.props,e=t.children,r=H(t,["children"]),n=X({},r);return e&&(n=this.mapChildrenToProps(e,n)),d.createElement(a,n)},D(e,null,[{key:"canUseDOM",set:function(t){a.canUseDOM=t}}]),e}(d.Component),o.propTypes={base:c().object,bodyAttributes:c().object,children:c().oneOfType([c().arrayOf(c().node),c().node]),defaultTitle:c().string,defer:c().bool,encodeSpecialCharacters:c().bool,htmlAttributes:c().object,link:c().arrayOf(c().object),meta:c().arrayOf(c().object),noscript:c().arrayOf(c().object),onChangeClientState:c().func,script:c().arrayOf(c().object),style:c().arrayOf(c().object),title:c().string,titleAttributes:c().object,titleTemplate:c().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var t=a.rewind();return t||(t=dt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},i);yt.renderStatic=yt.rewind},9921:function(t,e){"use strict";var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,a=r?Symbol.for("react.portal"):60106,o=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,u=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,y=r?Symbol.for("react.memo"):60115,h=r?Symbol.for("react.lazy"):60116,g=r?Symbol.for("react.block"):60121,b=r?Symbol.for("react.fundamental"):60117,v=r?Symbol.for("react.responder"):60118,w=r?Symbol.for("react.scope"):60119;function x(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case n:switch(t=t.type){case f:case u:case o:case s:case i:case d:return t;default:switch(t=t&&t.$$typeof){case l:case p:case h:case y:case c:return t;default:return e}}case a:return e}}}function k(t){return x(t)===u}e.AsyncMode=f,e.ConcurrentMode=u,e.ContextConsumer=l,e.ContextProvider=c,e.Element=n,e.ForwardRef=p,e.Fragment=o,e.Lazy=h,e.Memo=y,e.Portal=a,e.Profiler=s,e.StrictMode=i,e.Suspense=d,e.isAsyncMode=function(t){return k(t)||x(t)===f},e.isConcurrentMode=k,e.isContextConsumer=function(t){return x(t)===l},e.isContextProvider=function(t){return x(t)===c},e.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===n},e.isForwardRef=function(t){return x(t)===p},e.isFragment=function(t){return x(t)===o},e.isLazy=function(t){return x(t)===h},e.isMemo=function(t){return x(t)===y},e.isPortal=function(t){return x(t)===a},e.isProfiler=function(t){return x(t)===s},e.isStrictMode=function(t){return x(t)===i},e.isSuspense=function(t){return x(t)===d},e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===o||t===u||t===s||t===i||t===d||t===m||"object"==typeof t&&null!==t&&(t.$$typeof===h||t.$$typeof===y||t.$$typeof===c||t.$$typeof===l||t.$$typeof===p||t.$$typeof===b||t.$$typeof===v||t.$$typeof===w||t.$$typeof===g)},e.typeOf=x},9864:function(t,e,r){"use strict";t.exports=r(9921)},3524:function(t,e,r){"use strict";var n,a=r(7294),o=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,r){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function f(){c=t(l.map((function(t){return t.props}))),u.canUseDOM?e(c):r&&(c=r(c))}var u=function(t){var e,r;function a(){return t.apply(this,arguments)||this}r=t,(e=a).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=c;return c=void 0,l=[],t};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),f()},i.componentDidUpdate=function(){f()},i.componentWillUnmount=function(){var t=l.indexOf(this);l.splice(t,1),f()},i.render=function(){return o.createElement(n,this.props)},a}(a.PureComponent);return i(u,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(n)+")"),i(u,"canUseDOM",s),u}}},434:function(t){function e(){return t.exports=e=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},t.exports.__esModule=!0,t.exports.default=t.exports,e.apply(this,arguments)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},7462:function(t,e,r){"use strict";function n(){return n=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},n.apply(this,arguments)}r.d(e,{Z:function(){return n}})},3366:function(t,e,r){"use strict";function n(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}r.d(e,{Z:function(){return n}})},3931:function(t,e,r){"use strict";r.d(e,{pT:function(){return je}});var n=r(7294),a=r.t(n,2);var o=function(){function t(t){var e=this;this._insertTag=function(t){var r;r=0===e.tags.length?e.insertionPoint?e.insertionPoint.nextSibling:e.prepend?e.container.firstChild:e.before:e.tags[e.tags.length-1].nextSibling,e.container.insertBefore(t,r),e.tags.push(t)},this.isSpeedy=void 0===t.speedy||t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(t){t.forEach(this._insertTag)},e.insert=function(t){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),void 0!==t.nonce&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}(this));var e=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}(e);try{r.insertRule(t,r.cssRules.length)}catch(n){0}}else e.appendChild(document.createTextNode(t));this.ctr++},e.flush=function(){this.tags.forEach((function(t){return t.parentNode&&t.parentNode.removeChild(t)})),this.tags=[],this.ctr=0},t}(),i=Math.abs,s=String.fromCharCode,c=Object.assign;function l(t){return t.trim()}function f(t,e,r){return t.replace(e,r)}function u(t,e){return t.indexOf(e)}function p(t,e){return 0|t.charCodeAt(e)}function d(t,e,r){return t.slice(e,r)}function m(t){return t.length}function y(t){return t.length}function h(t,e){return e.push(t),t}var g=1,b=1,v=0,w=0,x=0,k="";function S(t,e,r,n,a,o,i){return{value:t,root:e,parent:r,type:n,props:a,children:o,line:g,column:b,length:i,return:""}}function C(t,e){return c(S("",null,null,"",null,null,0),t,{length:-t.length},e)}function T(){return x=w>0?p(k,--w):0,b--,10===x&&(b=1,g--),x}function O(){return x=w<v?p(k,w++):0,b++,10===x&&(b=1,g++),x}function A(){return p(k,w)}function E(){return w}function j(t,e){return d(k,t,e)}function M(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function P(t){return g=b=1,v=m(k=t),w=0,[]}function $(t){return k="",t}function I(t){return l(j(w-1,z(91===t?t+2:40===t?t+1:t)))}function _(t){for(;(x=A())&&x<33;)O();return M(t)>2||M(x)>3?"":" "}function N(t,e){for(;--e&&O()&&!(x<48||x>102||x>57&&x<65||x>70&&x<97););return j(t,E()+(e<6&&32==A()&&32==O()))}function z(t){for(;O();)switch(x){case t:return w;case 34:case 39:34!==t&&39!==t&&z(x);break;case 40:41===t&&z(t);break;case 92:O()}return w}function R(t,e){for(;O()&&t+x!==57&&(t+x!==84||47!==A()););return"/*"+j(e,w-1)+"*"+s(47===t?t:O())}function L(t){for(;!M(A());)O();return j(t,w)}var Y="-ms-",V="-moz-",F="-webkit-",D="comm",X="rule",H="decl",U="@keyframes";function W(t,e){for(var r="",n=y(t),a=0;a<n;a++)r+=e(t[a],a,t,e)||"";return r}function B(t,e,r,n){switch(t.type){case"@import":case H:return t.return=t.return||t.value;case D:return"";case U:return t.return=t.value+"{"+W(t.children,n)+"}";case X:t.value=t.props.join(",")}return m(r=W(t.children,n))?t.return=t.value+"{"+r+"}":""}function q(t){return $(G("",null,null,null,[""],t=P(t),0,[0],t))}function G(t,e,r,n,a,o,i,c,l){for(var d=0,y=0,g=i,b=0,v=0,w=0,x=1,k=1,S=1,C=0,j="",M=a,P=o,$=n,z=j;k;)switch(w=C,C=O()){case 40:if(108!=w&&58==p(z,g-1)){-1!=u(z+=f(I(C),"&","&\f"),"&\f")&&(S=-1);break}case 34:case 39:case 91:z+=I(C);break;case 9:case 10:case 13:case 32:z+=_(w);break;case 92:z+=N(E()-1,7);continue;case 47:switch(A()){case 42:case 47:h(Z(R(O(),E()),e,r),l);break;default:z+="/"}break;case 123*x:c[d++]=m(z)*S;case 125*x:case 59:case 0:switch(C){case 0:case 125:k=0;case 59+y:v>0&&m(z)-g&&h(v>32?J(z+";",n,r,g-1):J(f(z," ","")+";",n,r,g-2),l);break;case 59:z+=";";default:if(h($=K(z,e,r,d,y,a,c,j,M=[],P=[],g),o),123===C)if(0===y)G(z,e,$,$,M,o,g,c,P);else switch(99===b&&110===p(z,3)?100:b){case 100:case 109:case 115:G(t,$,$,n&&h(K(t,$,$,0,0,a,c,j,a,M=[],g),P),a,P,g,c,n?M:P);break;default:G(z,$,$,$,[""],P,0,c,P)}}d=y=v=0,x=S=1,j=z="",g=i;break;case 58:g=1+m(z),v=w;default:if(x<1)if(123==C)--x;else if(125==C&&0==x++&&125==T())continue;switch(z+=s(C),C*x){case 38:S=y>0?1:(z+="\f",-1);break;case 44:c[d++]=(m(z)-1)*S,S=1;break;case 64:45===A()&&(z+=I(O())),b=A(),y=g=m(j=z+=L(E())),C++;break;case 45:45===w&&2==m(z)&&(x=0)}}return o}function K(t,e,r,n,a,o,s,c,u,p,m){for(var h=a-1,g=0===a?o:[""],b=y(g),v=0,w=0,x=0;v<n;++v)for(var k=0,C=d(t,h+1,h=i(w=s[v])),T=t;k<b;++k)(T=l(w>0?g[k]+" "+C:f(C,/&\f/g,g[k])))&&(u[x++]=T);return S(t,e,r,0===a?X:c,u,p,m)}function Z(t,e,r){return S(t,e,r,D,s(x),d(t,2,-2),0)}function J(t,e,r,n){return S(t,e,r,H,d(t,0,n),d(t,n+1,-1),n)}var Q=function(t,e,r){for(var n=0,a=0;n=a,a=A(),38===n&&12===a&&(e[r]=1),!M(a);)O();return j(t,w)},tt=function(t,e){return $(function(t,e){var r=-1,n=44;do{switch(M(n)){case 0:38===n&&12===A()&&(e[r]=1),t[r]+=Q(w-1,e,r);break;case 2:t[r]+=I(n);break;case 4:if(44===n){t[++r]=58===A()?"&\f":"",e[r]=t[r].length;break}default:t[r]+=s(n)}}while(n=O());return t}(P(t),e))},et=new WeakMap,rt=function(t){if("rule"===t.type&&t.parent&&!(t.length<1)){for(var e=t.value,r=t.parent,n=t.column===r.column&&t.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==t.props.length||58===e.charCodeAt(0)||et.get(r))&&!n){et.set(t,!0);for(var a=[],o=tt(e,a),i=r.props,s=0,c=0;s<o.length;s++)for(var l=0;l<i.length;l++,c++)t.props[c]=a[s]?o[s].replace(/&\f/g,i[l]):i[l]+" "+o[s]}}},nt=function(t){if("decl"===t.type){var e=t.value;108===e.charCodeAt(0)&&98===e.charCodeAt(2)&&(t.return="",t.value="")}};function at(t,e){switch(function(t,e){return 45^p(t,0)?(((e<<2^p(t,0))<<2^p(t,1))<<2^p(t,2))<<2^p(t,3):0}(t,e)){case 5103:return"-webkit-print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return F+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return F+t+V+t+Y+t+t;case 6828:case 4268:return F+t+Y+t+t;case 6165:return F+t+Y+"flex-"+t+t;case 5187:return F+t+f(t,/(\w+).+(:[^]+)/,"-webkit-box-$1$2-ms-flex-$1$2")+t;case 5443:return F+t+Y+"flex-item-"+f(t,/flex-|-self/,"")+t;case 4675:return F+t+Y+"flex-line-pack"+f(t,/align-content|flex-|-self/,"")+t;case 5548:return F+t+Y+f(t,"shrink","negative")+t;case 5292:return F+t+Y+f(t,"basis","preferred-size")+t;case 6060:return"-webkit-box-"+f(t,"-grow","")+F+t+Y+f(t,"grow","positive")+t;case 4554:return F+f(t,/([^-])(transform)/g,"$1-webkit-$2")+t;case 6187:return f(f(f(t,/(zoom-|grab)/,"-webkit-$1"),/(image-set)/,"-webkit-$1"),t,"")+t;case 5495:case 3959:return f(t,/(image-set\([^]*)/,"-webkit-$1$`$1");case 4968:return f(f(t,/(.+:)(flex-)?(.*)/,"-webkit-box-pack:$3-ms-flex-pack:$3"),/s.+-b[^;]+/,"justify")+F+t+t;case 4095:case 3583:case 4068:case 2532:return f(t,/(.+)-inline(.+)/,"-webkit-$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(m(t)-1-e>6)switch(p(t,e+1)){case 109:if(45!==p(t,e+4))break;case 102:return f(t,/(.+:)(.+)-([^]+)/,"$1-webkit-$2-$3$1-moz-"+(108==p(t,e+3)?"$3":"$2-$3"))+t;case 115:return~u(t,"stretch")?at(f(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(115!==p(t,e+1))break;case 6444:switch(p(t,m(t)-3-(~u(t,"!important")&&10))){case 107:return f(t,":",":-webkit-")+t;case 101:return f(t,/(.+:)([^;!]+)(;|!.+)?/,"$1-webkit-"+(45===p(t,14)?"inline-":"")+"box$3$1"+"-webkit-$2$3$1"+"-ms-$2box$3")+t}break;case 5936:switch(p(t,e+11)){case 114:return F+t+Y+f(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return F+t+Y+f(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return F+t+Y+f(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return F+t+Y+t+t}return t}var ot=[function(t,e,r,n){if(t.length>-1&&!t.return)switch(t.type){case H:t.return=at(t.value,t.length);break;case U:return W([C(t,{value:f(t.value,"@","@-webkit-")})],n);case X:if(t.length)return function(t,e){return t.map(e).join("")}(t.props,(function(e){switch(function(t,e){return(t=e.exec(t))?t[0]:t}(e,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return W([C(t,{props:[f(e,/:(read-\w+)/,":-moz-$1")]})],n);case"::placeholder":return W([C(t,{props:[f(e,/:(plac\w+)/,":-webkit-input-$1")]}),C(t,{props:[f(e,/:(plac\w+)/,":-moz-$1")]}),C(t,{props:[f(e,/:(plac\w+)/,"-ms-input-$1")]})],n)}return""}))}}],it=function(t){var e=t.key;if("css"===e){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(t){-1!==t.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(t),t.setAttribute("data-s",""))}))}var n=t.stylisPlugins||ot;var a,i,s={},c=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+e+' "]'),(function(t){for(var e=t.getAttribute("data-emotion").split(" "),r=1;r<e.length;r++)s[e[r]]=!0;c.push(t)}));var l,f,u,p,d=[B,(p=function(t){l.insert(t)},function(t){t.root||(t=t.return)&&p(t)})],m=(f=[rt,nt].concat(n,d),u=y(f),function(t,e,r,n){for(var a="",o=0;o<u;o++)a+=f[o](t,e,r,n)||"";return a});i=function(t,e,r,n){l=r,W(q(t?t+"{"+e.styles+"}":e.styles),m),n&&(h.inserted[e.name]=!0)};var h={key:e,sheet:new o({key:e,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:s,registered:{},insert:i};return h.sheet.hydrate(c),h};function st(t,e,r){var n="";return r.split(" ").forEach((function(r){void 0!==t[r]?e.push(t[r]+";"):n+=r+" "})),n}var ct=function(t,e,r){var n=t.key+"-"+e.name;!1===r&&void 0===t.registered[n]&&(t.registered[n]=e.styles)},lt=function(t,e,r){ct(t,e,r);var n=t.key+"-"+e.name;if(void 0===t.inserted[e.name]){var a=e;do{t.insert(e===a?"."+n:"",a,t.sheet,!0);a=a.next}while(void 0!==a)}};var ft=function(t){for(var e,r=0,n=0,a=t.length;a>=4;++n,a-=4)e=1540483477*(65535&(e=255&t.charCodeAt(n)|(255&t.charCodeAt(++n))<<8|(255&t.charCodeAt(++n))<<16|(255&t.charCodeAt(++n))<<24))+(59797*(e>>>16)<<16),r=1540483477*(65535&(e^=e>>>24))+(59797*(e>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(a){case 3:r^=(255&t.charCodeAt(n+2))<<16;case 2:r^=(255&t.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&t.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)},ut={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var pt=/[A-Z]|^ms/g,dt=/_EMO_([^_]+?)_([^]*?)_EMO_/g,mt=function(t){return 45===t.charCodeAt(1)},yt=function(t){return null!=t&&"boolean"!=typeof t},ht=function(t){var e=Object.create(null);return function(r){return void 0===e[r]&&(e[r]=t(r)),e[r]}}((function(t){return mt(t)?t:t.replace(pt,"-$&").toLowerCase()})),gt=function(t,e){switch(t){case"animation":case"animationName":if("string"==typeof e)return e.replace(dt,(function(t,e,r){return vt={name:e,styles:r,next:vt},e}))}return 1===ut[t]||mt(t)||"number"!=typeof e||0===e?e:e+"px"};function bt(t,e,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return vt={name:r.name,styles:r.styles,next:vt},r.name;if(void 0!==r.styles){var n=r.next;if(void 0!==n)for(;void 0!==n;)vt={name:n.name,styles:n.styles,next:vt},n=n.next;return r.styles+";"}return function(t,e,r){var n="";if(Array.isArray(r))for(var a=0;a<r.length;a++)n+=bt(t,e,r[a])+";";else for(var o in r){var i=r[o];if("object"!=typeof i)null!=e&&void 0!==e[i]?n+=o+"{"+e[i]+"}":yt(i)&&(n+=ht(o)+":"+gt(o,i)+";");else if(!Array.isArray(i)||"string"!=typeof i[0]||null!=e&&void 0!==e[i[0]]){var s=bt(t,e,i);switch(o){case"animation":case"animationName":n+=ht(o)+":"+s+";";break;default:n+=o+"{"+s+"}"}}else for(var c=0;c<i.length;c++)yt(i[c])&&(n+=ht(o)+":"+gt(o,i[c])+";")}return n}(t,e,r);case"function":if(void 0!==t){var a=vt,o=r(t);return vt=a,bt(t,e,o)}}if(null==e)return r;var i=e[r];return void 0!==i?i:r}var vt,wt=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var xt=function(t,e,r){if(1===t.length&&"object"==typeof t[0]&&null!==t[0]&&void 0!==t[0].styles)return t[0];var n=!0,a="";vt=void 0;var o=t[0];null==o||void 0===o.raw?(n=!1,a+=bt(r,e,o)):a+=o[0];for(var i=1;i<t.length;i++)a+=bt(r,e,t[i]),n&&(a+=o[i]);wt.lastIndex=0;for(var s,c="";null!==(s=wt.exec(a));)c+="-"+s[1];return{name:ft(a)+c,styles:a,next:vt}},kt=!!a.useInsertionEffect&&a.useInsertionEffect,St=kt||function(t){return t()},Ct=(kt||n.useLayoutEffect,{}.hasOwnProperty),Tt=(0,n.createContext)("undefined"!=typeof HTMLElement?it({key:"css"}):null);Tt.Provider;var Ot=function(t){return(0,n.forwardRef)((function(e,r){var a=(0,n.useContext)(Tt);return t(e,a,r)}))},At=(0,n.createContext)({});var Et="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",jt=function(t){var e=t.cache,r=t.serialized,n=t.isStringTag;ct(e,r,n);St((function(){return lt(e,r,n)}));return null},Mt=Ot((function(t,e,r){var a=t.css;"string"==typeof a&&void 0!==e.registered[a]&&(a=e.registered[a]);var o=t[Et],i=[a],s="";"string"==typeof t.className?s=st(e.registered,i,t.className):null!=t.className&&(s=t.className+" ");var c=xt(i,void 0,(0,n.useContext)(At));s+=e.key+"-"+c.name;var l={};for(var f in t)Ct.call(t,f)&&"css"!==f&&f!==Et&&(l[f]=t[f]);return l.ref=r,l.className=s,(0,n.createElement)(n.Fragment,null,(0,n.createElement)(jt,{cache:e,serialized:c,isStringTag:"string"==typeof o}),(0,n.createElement)(o,l))}));r(434),r(8679);function Pt(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return xt(e)}var $t=function(){var t=Pt.apply(void 0,arguments),e="animation-"+t.name;return{name:e,styles:"@keyframes "+e+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},It=function t(e){for(var r=e.length,n=0,a="";n<r;n++){var o=e[n];if(null!=o){var i=void 0;switch(typeof o){case"boolean":break;case"object":if(Array.isArray(o))i=t(o);else for(var s in i="",o)o[s]&&s&&(i&&(i+=" "),i+=s);break;default:i=o}i&&(a&&(a+=" "),a+=i)}}return a};function _t(t,e,r){var n=[],a=st(t,n,r);return n.length<2?r:a+e(n)}var Nt=function(t){var e=t.cache,r=t.serializedArr;St((function(){for(var t=0;t<r.length;t++)lt(e,r[t],!1)}));return null},zt=Ot((function(t,e){var r=[],a=function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];var o=xt(n,e.registered);return r.push(o),ct(e,o,!1),e.key+"-"+o.name},o={css:a,cx:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return _t(e.registered,a,It(r))},theme:(0,n.useContext)(At)},i=t.children(o);return!0,(0,n.createElement)(n.Fragment,null,(0,n.createElement)(Nt,{cache:e,serializedArr:r}),i)}));function Rt(){return Rt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},Rt.apply(this,arguments)}const Lt=new Map,Yt=new WeakMap;let Vt,Ft=0;function Dt(t){return Object.keys(t).sort().filter((e=>void 0!==t[e])).map((e=>{return`${e}_${"root"===e?(r=t.root,r?(Yt.has(r)||(Ft+=1,Yt.set(r,Ft.toString())),Yt.get(r)):"0"):t[e]}`;var r})).toString()}function Xt(t,e,r={},n=Vt){if(void 0===window.IntersectionObserver&&void 0!==n){const a=t.getBoundingClientRect();return e(n,{isIntersecting:n,target:t,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),()=>{}}const{id:a,observer:o,elements:i}=function(t){let e=Dt(t),r=Lt.get(e);if(!r){const n=new Map;let a;const o=new IntersectionObserver((e=>{e.forEach((e=>{var r;const o=e.isIntersecting&&a.some((t=>e.intersectionRatio>=t));t.trackVisibility&&void 0===e.isVisible&&(e.isVisible=o),null==(r=n.get(e.target))||r.forEach((t=>{t(o,e)}))}))}),t);a=o.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),r={id:e,observer:o,elements:n},Lt.set(e,r)}return r}(r);let s=i.get(t)||[];return i.has(t)||i.set(t,s),s.push(e),o.observe(t),function(){s.splice(s.indexOf(e),1),0===s.length&&(i.delete(t),o.unobserve(t)),0===i.size&&(o.disconnect(),Lt.delete(a))}}const Ht=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function Ut(t){return"function"!=typeof t.children}class Wt extends n.Component{constructor(t){super(t),this.node=null,this._unobserveCb=null,this.handleNode=t=>{this.node&&(this.unobserve(),t||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()},this.handleChange=(t,e)=>{t&&this.props.triggerOnce&&this.unobserve(),Ut(this.props)||this.setState({inView:t,entry:e}),this.props.onChange&&this.props.onChange(t,e)},this.state={inView:!!t.initialInView,entry:void 0}}componentDidUpdate(t){t.rootMargin===this.props.rootMargin&&t.root===this.props.root&&t.threshold===this.props.threshold&&t.skip===this.props.skip&&t.trackVisibility===this.props.trackVisibility&&t.delay===this.props.delay||(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve(),this.node=null}observeNode(){if(!this.node||this.props.skip)return;const{threshold:t,root:e,rootMargin:r,trackVisibility:n,delay:a,fallbackInView:o}=this.props;this._unobserveCb=Xt(this.node,this.handleChange,{threshold:t,root:e,rootMargin:r,trackVisibility:n,delay:a},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){if(!Ut(this.props)){const{inView:t,entry:e}=this.state;return this.props.children({inView:t,entry:e,ref:this.handleNode})}const t=this.props,{children:e,as:r}=t,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,Ht);return n.createElement(r||"div",Rt({ref:this.handleNode},a),e)}}function Bt({threshold:t,delay:e,trackVisibility:r,rootMargin:a,root:o,triggerOnce:i,skip:s,initialInView:c,fallbackInView:l,onChange:f}={}){var u;const[p,d]=n.useState(null),m=n.useRef(),[y,h]=n.useState({inView:!!c,entry:void 0});m.current=f,n.useEffect((()=>{if(s||!p)return;let n=Xt(p,((t,e)=>{h({inView:t,entry:e}),m.current&&m.current(t,e),e.isIntersecting&&i&&n&&(n(),n=void 0)}),{root:o,rootMargin:a,threshold:t,trackVisibility:r,delay:e},l);return()=>{n&&n()}}),[Array.isArray(t)?t.toString():t,p,o,a,i,s,r,l,e]);const g=null==(u=y.entry)?void 0:u.target;n.useEffect((()=>{p||!g||i||s||h({inView:!!c,entry:void 0})}),[p,g,i,s,c]);const b=[d,y.inView,y.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}var qt=r(4954),Gt=r(5893),Kt=Gt.Fragment;function Zt(t,e,r){return Ct.call(e,"css")?(0,Gt.jsx)(Mt,function(t,e){var r={};for(var n in e)Ct.call(e,n)&&(r[n]=e[n]);return r[Et]=t,r}(t,e),r):(0,Gt.jsx)(t,e,r)}$t`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,$t`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,$t`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,$t`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,$t`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,$t`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,$t`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,$t`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,$t`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,$t`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,$t`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,$t`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,$t`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;var Jt=$t`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Qt=$t`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,te=$t`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ee=$t`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,re=$t`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ne=$t`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ae=$t`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,oe=$t`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ie=$t`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,se=$t`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ce=$t`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,le=$t`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,fe=$t`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;var ue=Pt`
  opacity: 0;
`,pe=Pt`
  display: inline-block;
  white-space: pre;
`,de=t=>{const{cascade:e=!1,damping:r=.5,delay:a=0,duration:o=1e3,fraction:i=0,keyframes:s=ne,triggerOnce:c=!1,css:l,className:f,style:u,childClassName:p,childStyle:d,children:m,onVisibilityChange:y}=t,h=(0,n.useMemo)((()=>function({duration:t=1e3,delay:e=0,timingFunction:r="ease",keyframes:n=ne,iterationCount:a=1}){return Pt`
    animation-duration: ${t}ms;
    animation-timing-function: ${r};
    animation-delay: ${e}ms;
    animation-name: ${n};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${a};
  `}({keyframes:s,duration:o})),[o,s]);return null==m?null:"string"==typeof(g=m)||"number"==typeof g||"boolean"==typeof g?Zt(me,{...t,animationStyles:h,children:String(m)}):(0,qt.isFragment)(m)?Zt(ye,{...t,animationStyles:h}):Zt(Kt,{children:n.Children.map(m,((s,m)=>{if(!(0,n.isValidElement)(s))return null;const g=[l,h],b=a+(e?m*o*r:0);switch(s.type){case"ol":case"ul":return Zt(zt,{children:({cx:e})=>Zt(s.type,{...s.props,className:e(f,s.props.className),style:{...u,...s.props.style},children:Zt(de,{...t,children:s.props.children})})});case"li":return Zt(Wt,{threshold:i,triggerOnce:c,onChange:y,children:({inView:t,ref:e})=>Zt(zt,{children:({cx:r})=>Zt(s.type,{...s.props,ref:e,className:r(p,s.props.className),css:t?g:ue,style:{...d,...s.props.style,animationDelay:b+"ms"}})})});default:return Zt(Wt,{threshold:i,triggerOnce:c,onChange:y,children:({inView:t,ref:e})=>Zt("div",{ref:e,className:f,css:t?g:ue,style:{...u,animationDelay:b+"ms"},children:Zt(zt,{children:({cx:t})=>Zt(s.type,{...s.props,className:t(p,s.props.className),style:{...d,...s.props.style}})})})})}}))});var g},me=t=>{const{animationStyles:e,cascade:r=!1,damping:n=.5,delay:a=0,duration:o=1e3,fraction:i=0,triggerOnce:s=!1,css:c,className:l,style:f,children:u,onVisibilityChange:p}=t,{ref:d,inView:m}=Bt({triggerOnce:s,threshold:i,onChange:p});return r?Zt("div",{ref:d,className:l,css:[c,pe],style:f,children:u.split("").map(((t,r)=>Zt("span",{css:m?e:ue,style:{animationDelay:a+r*o*n+"ms"},children:t},r)))}):Zt(ye,{...t,children:u})},ye=t=>{const{animationStyles:e,fraction:r=0,triggerOnce:n=!1,css:a,className:o,style:i,children:s,onVisibilityChange:c}=t,{ref:l,inView:f}=Bt({triggerOnce:n,threshold:r,onChange:c});return Zt("div",{ref:l,className:o,css:f?[a,e]:ue,style:i,children:s})};$t`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,$t`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,$t`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,$t`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,$t`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,$t`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,$t`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,$t`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,$t`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,$t`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;var he=$t`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,ge=$t`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,be=$t`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,ve=$t`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,we=$t`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,xe=$t`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,ke=$t`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Se=$t`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Ce=$t`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Te=$t`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Oe=$t`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Ae=$t`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Ee=$t`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;var je=t=>{const{big:e=!1,direction:r,reverse:a=!1,...o}=t,i=(0,n.useMemo)((()=>function(t,e,r){switch(r){case"bottom-left":return e?ge:Qt;case"bottom-right":return e?be:te;case"down":return t?e?we:re:e?ve:ee;case"left":return t?e?ke:ae:e?xe:ne;case"right":return t?e?Ce:ie:e?Se:oe;case"top-left":return e?Te:se;case"top-right":return e?Oe:ce;case"up":return t?e?Ee:fe:e?Ae:le;default:return e?he:Jt}}(e,a,r)),[e,r,a]);return Zt(de,{keyframes:i,...o})};$t`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,$t`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,$t`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,$t`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,$t`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;Pt`
  backface-visibility: visible;
`,$t`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,$t`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,$t`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,$t`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`,Pt`
  transform-origin: top left;
`;$t`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,$t`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,$t`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,$t`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,$t`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,$t`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,$t`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,$t`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,$t`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,$t`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;$t`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,$t`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,$t`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,$t`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,$t`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,$t`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,$t`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,$t`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;$t`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,$t`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,$t`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,$t`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,$t`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,$t`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,$t`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,$t`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,$t`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,$t`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`}}]);
//# sourceMappingURL=commons-e499df66c83ccf6c2982.js.map
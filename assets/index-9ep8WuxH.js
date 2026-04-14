(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();var Au={exports:{}},La={},bu={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp;function g_(){if(Fp)return pt;Fp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),y=Symbol.iterator;function g(U){return U===null||typeof U!="object"?null:(U=y&&U[y]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,b={};function _(U,q,be){this.props=U,this.context=q,this.refs=b,this.updater=be||S}_.prototype.isReactComponent={},_.prototype.setState=function(U,q){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,q,"setState")},_.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function v(){}v.prototype=_.prototype;function C(U,q,be){this.props=U,this.context=q,this.refs=b,this.updater=be||S}var N=C.prototype=new v;N.constructor=C,T(N,_.prototype),N.isPureReactComponent=!0;var L=Array.isArray,V=Object.prototype.hasOwnProperty,k={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function w(U,q,be){var Xe,Ze={},re=null,me=null;if(q!=null)for(Xe in q.ref!==void 0&&(me=q.ref),q.key!==void 0&&(re=""+q.key),q)V.call(q,Xe)&&!O.hasOwnProperty(Xe)&&(Ze[Xe]=q[Xe]);var pe=arguments.length-2;if(pe===1)Ze.children=be;else if(1<pe){for(var Fe=Array(pe),He=0;He<pe;He++)Fe[He]=arguments[He+2];Ze.children=Fe}if(U&&U.defaultProps)for(Xe in pe=U.defaultProps,pe)Ze[Xe]===void 0&&(Ze[Xe]=pe[Xe]);return{$$typeof:s,type:U,key:re,ref:me,props:Ze,_owner:k.current}}function R(U,q){return{$$typeof:s,type:U.type,key:q,ref:U.ref,props:U.props,_owner:U._owner}}function de(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function I(U){var q={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(be){return q[be]})}var $=/\/+/g;function J(U,q){return typeof U=="object"&&U!==null&&U.key!=null?I(""+U.key):q.toString(36)}function le(U,q,be,Xe,Ze){var re=typeof U;(re==="undefined"||re==="boolean")&&(U=null);var me=!1;if(U===null)me=!0;else switch(re){case"string":case"number":me=!0;break;case"object":switch(U.$$typeof){case s:case e:me=!0}}if(me)return me=U,Ze=Ze(me),U=Xe===""?"."+J(me,0):Xe,L(Ze)?(be="",U!=null&&(be=U.replace($,"$&/")+"/"),le(Ze,q,be,"",function(He){return He})):Ze!=null&&(de(Ze)&&(Ze=R(Ze,be+(!Ze.key||me&&me.key===Ze.key?"":(""+Ze.key).replace($,"$&/")+"/")+U)),q.push(Ze)),1;if(me=0,Xe=Xe===""?".":Xe+":",L(U))for(var pe=0;pe<U.length;pe++){re=U[pe];var Fe=Xe+J(re,pe);me+=le(re,q,be,Fe,Ze)}else if(Fe=g(U),typeof Fe=="function")for(U=Fe.call(U),pe=0;!(re=U.next()).done;)re=re.value,Fe=Xe+J(re,pe++),me+=le(re,q,be,Fe,Ze);else if(re==="object")throw q=String(U),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return me}function Z(U,q,be){if(U==null)return U;var Xe=[],Ze=0;return le(U,Xe,"","",function(re){return q.call(be,re,Ze++)}),Xe}function ie(U){if(U._status===-1){var q=U._result;q=q(),q.then(function(be){(U._status===0||U._status===-1)&&(U._status=1,U._result=be)},function(be){(U._status===0||U._status===-1)&&(U._status=2,U._result=be)}),U._status===-1&&(U._status=0,U._result=q)}if(U._status===1)return U._result.default;throw U._result}var X={current:null},K={transition:null},oe={ReactCurrentDispatcher:X,ReactCurrentBatchConfig:K,ReactCurrentOwner:k};function ce(){throw Error("act(...) is not supported in production builds of React.")}return pt.Children={map:Z,forEach:function(U,q,be){Z(U,function(){q.apply(this,arguments)},be)},count:function(U){var q=0;return Z(U,function(){q++}),q},toArray:function(U){return Z(U,function(q){return q})||[]},only:function(U){if(!de(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},pt.Component=_,pt.Fragment=n,pt.Profiler=o,pt.PureComponent=C,pt.StrictMode=r,pt.Suspense=p,pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,pt.act=ce,pt.cloneElement=function(U,q,be){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Xe=T({},U.props),Ze=U.key,re=U.ref,me=U._owner;if(q!=null){if(q.ref!==void 0&&(re=q.ref,me=k.current),q.key!==void 0&&(Ze=""+q.key),U.type&&U.type.defaultProps)var pe=U.type.defaultProps;for(Fe in q)V.call(q,Fe)&&!O.hasOwnProperty(Fe)&&(Xe[Fe]=q[Fe]===void 0&&pe!==void 0?pe[Fe]:q[Fe])}var Fe=arguments.length-2;if(Fe===1)Xe.children=be;else if(1<Fe){pe=Array(Fe);for(var He=0;He<Fe;He++)pe[He]=arguments[He+2];Xe.children=pe}return{$$typeof:s,type:U.type,key:Ze,ref:re,props:Xe,_owner:me}},pt.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:c,_context:U},U.Consumer=U},pt.createElement=w,pt.createFactory=function(U){var q=w.bind(null,U);return q.type=U,q},pt.createRef=function(){return{current:null}},pt.forwardRef=function(U){return{$$typeof:d,render:U}},pt.isValidElement=de,pt.lazy=function(U){return{$$typeof:x,_payload:{_status:-1,_result:U},_init:ie}},pt.memo=function(U,q){return{$$typeof:m,type:U,compare:q===void 0?null:q}},pt.startTransition=function(U){var q=K.transition;K.transition={};try{U()}finally{K.transition=q}},pt.unstable_act=ce,pt.useCallback=function(U,q){return X.current.useCallback(U,q)},pt.useContext=function(U){return X.current.useContext(U)},pt.useDebugValue=function(){},pt.useDeferredValue=function(U){return X.current.useDeferredValue(U)},pt.useEffect=function(U,q){return X.current.useEffect(U,q)},pt.useId=function(){return X.current.useId()},pt.useImperativeHandle=function(U,q,be){return X.current.useImperativeHandle(U,q,be)},pt.useInsertionEffect=function(U,q){return X.current.useInsertionEffect(U,q)},pt.useLayoutEffect=function(U,q){return X.current.useLayoutEffect(U,q)},pt.useMemo=function(U,q){return X.current.useMemo(U,q)},pt.useReducer=function(U,q,be){return X.current.useReducer(U,q,be)},pt.useRef=function(U){return X.current.useRef(U)},pt.useState=function(U){return X.current.useState(U)},pt.useSyncExternalStore=function(U,q,be){return X.current.useSyncExternalStore(U,q,be)},pt.useTransition=function(){return X.current.useTransition()},pt.version="18.3.1",pt}var Op;function ad(){return Op||(Op=1,bu.exports=g_()),bu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kp;function __(){if(kp)return La;kp=1;var s=ad(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(d,p,m){var x,y={},g=null,S=null;m!==void 0&&(g=""+m),p.key!==void 0&&(g=""+p.key),p.ref!==void 0&&(S=p.ref);for(x in p)r.call(p,x)&&!c.hasOwnProperty(x)&&(y[x]=p[x]);if(d&&d.defaultProps)for(x in p=d.defaultProps,p)y[x]===void 0&&(y[x]=p[x]);return{$$typeof:e,type:d,key:g,ref:S,props:y,_owner:o.current}}return La.Fragment=n,La.jsx=u,La.jsxs=u,La}var Bp;function v_(){return Bp||(Bp=1,Au.exports=__()),Au.exports}var F=v_(),il={},Cu={exports:{}},Nn={},Ru={exports:{}},Pu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function x_(){return zp||(zp=1,(function(s){function e(K,oe){var ce=K.length;K.push(oe);e:for(;0<ce;){var U=ce-1>>>1,q=K[U];if(0<o(q,oe))K[U]=oe,K[ce]=q,ce=U;else break e}}function n(K){return K.length===0?null:K[0]}function r(K){if(K.length===0)return null;var oe=K[0],ce=K.pop();if(ce!==oe){K[0]=ce;e:for(var U=0,q=K.length,be=q>>>1;U<be;){var Xe=2*(U+1)-1,Ze=K[Xe],re=Xe+1,me=K[re];if(0>o(Ze,ce))re<q&&0>o(me,Ze)?(K[U]=me,K[re]=ce,U=re):(K[U]=Ze,K[Xe]=ce,U=Xe);else if(re<q&&0>o(me,ce))K[U]=me,K[re]=ce,U=re;else break e}}return oe}function o(K,oe){var ce=K.sortIndex-oe.sortIndex;return ce!==0?ce:K.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var p=[],m=[],x=1,y=null,g=3,S=!1,T=!1,b=!1,_=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(K){for(var oe=n(m);oe!==null;){if(oe.callback===null)r(m);else if(oe.startTime<=K)r(m),oe.sortIndex=oe.expirationTime,e(p,oe);else break;oe=n(m)}}function L(K){if(b=!1,N(K),!T)if(n(p)!==null)T=!0,ie(V);else{var oe=n(m);oe!==null&&X(L,oe.startTime-K)}}function V(K,oe){T=!1,b&&(b=!1,v(w),w=-1),S=!0;var ce=g;try{for(N(oe),y=n(p);y!==null&&(!(y.expirationTime>oe)||K&&!I());){var U=y.callback;if(typeof U=="function"){y.callback=null,g=y.priorityLevel;var q=U(y.expirationTime<=oe);oe=s.unstable_now(),typeof q=="function"?y.callback=q:y===n(p)&&r(p),N(oe)}else r(p);y=n(p)}if(y!==null)var be=!0;else{var Xe=n(m);Xe!==null&&X(L,Xe.startTime-oe),be=!1}return be}finally{y=null,g=ce,S=!1}}var k=!1,O=null,w=-1,R=5,de=-1;function I(){return!(s.unstable_now()-de<R)}function $(){if(O!==null){var K=s.unstable_now();de=K;var oe=!0;try{oe=O(!0,K)}finally{oe?J():(k=!1,O=null)}}else k=!1}var J;if(typeof C=="function")J=function(){C($)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,Z=le.port2;le.port1.onmessage=$,J=function(){Z.postMessage(null)}}else J=function(){_($,0)};function ie(K){O=K,k||(k=!0,J())}function X(K,oe){w=_(function(){K(s.unstable_now())},oe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(K){K.callback=null},s.unstable_continueExecution=function(){T||S||(T=!0,ie(V))},s.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<K?Math.floor(1e3/K):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(K){switch(g){case 1:case 2:case 3:var oe=3;break;default:oe=g}var ce=g;g=oe;try{return K()}finally{g=ce}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(K,oe){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var ce=g;g=K;try{return oe()}finally{g=ce}},s.unstable_scheduleCallback=function(K,oe,ce){var U=s.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?U+ce:U):ce=U,K){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=ce+q,K={id:x++,callback:oe,priorityLevel:K,startTime:ce,expirationTime:q,sortIndex:-1},ce>U?(K.sortIndex=ce,e(m,K),n(p)===null&&K===n(m)&&(b?(v(w),w=-1):b=!0,X(L,ce-U))):(K.sortIndex=q,e(p,K),T||S||(T=!0,ie(V))),K},s.unstable_shouldYield=I,s.unstable_wrapCallback=function(K){var oe=g;return function(){var ce=g;g=oe;try{return K.apply(this,arguments)}finally{g=ce}}}})(Pu)),Pu}var Vp;function y_(){return Vp||(Vp=1,Ru.exports=x_()),Ru.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp;function S_(){if(Hp)return Nn;Hp=1;var s=ad(),e=y_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function c(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},y={};function g(t){return p.call(y,t)?!0:p.call(x,t)?!1:m.test(t)?y[t]=!0:(x[t]=!0,!1)}function S(t,i,a,l){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,a,l){if(i===null||typeof i>"u"||S(t,i,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function b(t,i,a,l,f,h,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=E}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_[t]=new b(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];_[i]=new b(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){_[t]=new b(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_[t]=new b(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_[t]=new b(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){_[t]=new b(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){_[t]=new b(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){_[t]=new b(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){_[t]=new b(t,5,!1,t.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function C(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(v,C);_[i]=new b(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(v,C);_[i]=new b(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(v,C);_[i]=new b(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){_[t]=new b(t,1,!1,t.toLowerCase(),null,!1,!1)}),_.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){_[t]=new b(t,1,!1,t.toLowerCase(),null,!0,!0)});function N(t,i,a,l){var f=_.hasOwnProperty(i)?_[i]:null;(f!==null?f.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,a,f,l)&&(a=null),l||f===null?g(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):f.mustUseProperty?t[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,l=f.attributeNamespace,a===null?t.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,l?t.setAttributeNS(l,i,a):t.setAttribute(i,a))))}var L=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),k=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),de=Symbol.for("react.provider"),I=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),X=Symbol.for("react.offscreen"),K=Symbol.iterator;function oe(t){return t===null||typeof t!="object"?null:(t=K&&t[K]||t["@@iterator"],typeof t=="function"?t:null)}var ce=Object.assign,U;function q(t){if(U===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+t}var be=!1;function Xe(t,i){if(!t||be)return"";be=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(se){var l=se}Reflect.construct(t,[],i)}else{try{i.call()}catch(se){l=se}t.call(i.prototype)}else{try{throw Error()}catch(se){l=se}t()}}catch(se){if(se&&l&&typeof se.stack=="string"){for(var f=se.stack.split(`
`),h=l.stack.split(`
`),E=f.length-1,D=h.length-1;1<=E&&0<=D&&f[E]!==h[D];)D--;for(;1<=E&&0<=D;E--,D--)if(f[E]!==h[D]){if(E!==1||D!==1)do if(E--,D--,0>D||f[E]!==h[D]){var B=`
`+f[E].replace(" at new "," at ");return t.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",t.displayName)),B}while(1<=E&&0<=D);break}}}finally{be=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?q(t):""}function Ze(t){switch(t.tag){case 5:return q(t.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return t=Xe(t.type,!1),t;case 11:return t=Xe(t.type.render,!1),t;case 1:return t=Xe(t.type,!0),t;default:return""}}function re(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case O:return"Fragment";case k:return"Portal";case R:return"Profiler";case w:return"StrictMode";case J:return"Suspense";case le:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case I:return(t.displayName||"Context")+".Consumer";case de:return(t._context.displayName||"Context")+".Provider";case $:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Z:return i=t.displayName||null,i!==null?i:re(t.type)||"Memo";case ie:i=t._payload,t=t._init;try{return re(t(i))}catch{}}return null}function me(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return re(i);case 8:return i===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function pe(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Fe(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function He(t){var i=Fe(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,h=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(E){l=""+E,h.call(this,E)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function nt(t){t._valueTracker||(t._valueTracker=He(t))}function Xt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=Fe(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function ht(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function xt(t,i){var a=i.checked;return ce({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function bt(t,i){var a=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;a=pe(i.value!=null?i.value:a),t._wrapperState={initialChecked:l,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ct(t,i){i=i.checked,i!=null&&N(t,"checked",i,!1)}function Ft(t,i){ct(t,i);var a=pe(i.value),l=i.type;if(a!=null)l==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Bt(t,i.type,a):i.hasOwnProperty("defaultValue")&&Bt(t,i.type,pe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function z(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function Bt(t,i,a){(i!=="number"||ht(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var mt=Array.isArray;function yt(t,i,a,l){if(t=t.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<t.length;a++)f=i.hasOwnProperty("$"+t[a].value),t[a].selected!==f&&(t[a].selected=f),f&&l&&(t[a].defaultSelected=!0)}else{for(a=""+pe(a),i=null,f=0;f<t.length;f++){if(t[f].value===a){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function Ge(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return ce({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function P(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(mt(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:pe(a)}}function M(t,i){var a=pe(i.value),l=pe(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),l!=null&&(t.defaultValue=""+l)}function W(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function he(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ge(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?he(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ue,ke=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,l,f){MSApp.execUnsafeLocalFunction(function(){return t(i,a,l,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(ue=ue||document.createElement("div"),ue.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ue.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function we(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var Ye={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},it=["Webkit","ms","Moz","O"];Object.keys(Ye).forEach(function(t){it.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Ye[i]=Ye[t]})});function ye(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ye.hasOwnProperty(t)&&Ye[t]?(""+i).trim():i+"px"}function Te(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var l=a.indexOf("--")===0,f=ye(a,i[a],l);a==="float"&&(a="cssFloat"),l?t.setProperty(a,f):t[a]=f}}var We=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Be(t,i){if(i){if(We[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Le(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lt=null;function H(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ae=null,Me=null,De=null;function Se(t){if(t=ga(t)){if(typeof Ae!="function")throw Error(n(280));var i=t.stateNode;i&&(i=vo(i),Ae(t.stateNode,t.type,i))}}function fe(t){Me?De?De.push(t):De=[t]:Me=t}function ze(){if(Me){var t=Me,i=De;if(De=Me=null,Se(t),i)for(t=0;t<i.length;t++)Se(i[t])}}function rt(t,i){return t(i)}function Pt(){}var St=!1;function Wn(t,i,a){if(St)return t(i,a);St=!0;try{return rt(t,i,a)}finally{St=!1,(Me!==null||De!==null)&&(Pt(),ze())}}function xn(t,i){var a=t.stateNode;if(a===null)return null;var l=vo(a);if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var is=!1;if(d)try{var Li={};Object.defineProperty(Li,"passive",{get:function(){is=!0}}),window.addEventListener("test",Li,Li),window.removeEventListener("test",Li,Li)}catch{is=!1}function Yl(t,i,a,l,f,h,E,D,B){var se=Array.prototype.slice.call(arguments,3);try{i.apply(a,se)}catch(ve){this.onError(ve)}}var er=!1,Pr=null,Xn=!1,Lr=null,$a={onError:function(t){er=!0,Pr=t}};function Ka(t,i,a,l,f,h,E,D,B){er=!1,Pr=null,Yl.apply($a,arguments)}function rs(t,i,a,l,f,h,E,D,B){if(Ka.apply(this,arguments),er){if(er){var se=Pr;er=!1,Pr=null}else throw Error(n(198));Xn||(Xn=!0,Lr=se)}}function _i(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function Dr(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Qs(t){if(_i(t)!==t)throw Error(n(188))}function Za(t){var i=t.alternate;if(!i){if(i=_i(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,l=i;;){var f=a.return;if(f===null)break;var h=f.alternate;if(h===null){if(l=f.return,l!==null){a=l;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===a)return Qs(f),t;if(h===l)return Qs(f),i;h=h.sibling}throw Error(n(188))}if(a.return!==l.return)a=f,l=h;else{for(var E=!1,D=f.child;D;){if(D===a){E=!0,a=f,l=h;break}if(D===l){E=!0,l=f,a=h;break}D=D.sibling}if(!E){for(D=h.child;D;){if(D===a){E=!0,a=h,l=f;break}if(D===l){E=!0,l=h,a=f;break}D=D.sibling}if(!E)throw Error(n(189))}}if(a.alternate!==l)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function Qa(t){return t=Za(t),t!==null?Ja(t):null}function Ja(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Ja(t);if(i!==null)return i;t=t.sibling}return null}var eo=e.unstable_scheduleCallback,to=e.unstable_cancelCallback,$l=e.unstable_shouldYield,Kl=e.unstable_requestPaint,A=e.unstable_now,j=e.unstable_getCurrentPriorityLevel,ae=e.unstable_ImmediatePriority,te=e.unstable_UserBlockingPriority,Q=e.unstable_NormalPriority,Re=e.unstable_LowPriority,Ue=e.unstable_IdlePriority,Ce=null,Ne=null;function Ke(t){if(Ne&&typeof Ne.onCommitFiberRoot=="function")try{Ne.onCommitFiberRoot(Ce,t,void 0,(t.current.flags&128)===128)}catch{}}var Je=Math.clz32?Math.clz32:Ct,ut=Math.log,Qe=Math.LN2;function Ct(t){return t>>>=0,t===0?32:31-(ut(t)/Qe|0)|0}var It=64,Nt=4194304;function vt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function jt(t,i){var a=t.pendingLanes;if(a===0)return 0;var l=0,f=t.suspendedLanes,h=t.pingedLanes,E=a&268435455;if(E!==0){var D=E&~f;D!==0?l=vt(D):(h&=E,h!==0&&(l=vt(h)))}else E=a&~f,E!==0?l=vt(E):h!==0&&(l=vt(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&f)===0&&(f=l&-l,h=i&-i,f>=h||f===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)a=31-Je(i),f=1<<a,l|=t[a],i&=~f;return l}function qe(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yn(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,h=t.pendingLanes;0<h;){var E=31-Je(h),D=1<<E,B=f[E];B===-1?((D&a)===0||(D&l)!==0)&&(f[E]=qe(D,i)):B<=i&&(t.expiredLanes|=D),h&=~D}}function gt(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function An(){var t=It;return It<<=1,(It&4194240)===0&&(It=64),t}function bn(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function Fn(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Je(i),t[i]=a}function tr(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<a;){var f=31-Je(a),h=1<<f;i[f]=0,l[f]=-1,t[f]=-1,a&=~h}}function At(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-Je(a),f=1<<l;f&i|t[l]&i&&(t[l]|=i),a&=~f}}var st=0;function ri(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var qt,jn,Di,Js,vd,Zl=!1,no=[],nr=null,ir=null,rr=null,ea=new Map,ta=new Map,sr=[],kg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xd(t,i){switch(t){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":ea.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ta.delete(i.pointerId)}}function na(t,i,a,l,f,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:h,targetContainers:[f]},i!==null&&(i=ga(i),i!==null&&jn(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function Bg(t,i,a,l,f){switch(i){case"focusin":return nr=na(nr,t,i,a,l,f),!0;case"dragenter":return ir=na(ir,t,i,a,l,f),!0;case"mouseover":return rr=na(rr,t,i,a,l,f),!0;case"pointerover":var h=f.pointerId;return ea.set(h,na(ea.get(h)||null,t,i,a,l,f)),!0;case"gotpointercapture":return h=f.pointerId,ta.set(h,na(ta.get(h)||null,t,i,a,l,f)),!0}return!1}function yd(t){var i=Nr(t.target);if(i!==null){var a=_i(i);if(a!==null){if(i=a.tag,i===13){if(i=Dr(a),i!==null){t.blockedOn=i,vd(t.priority,function(){Di(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function io(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=Jl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);lt=l,a.target.dispatchEvent(l),lt=null}else return i=ga(a),i!==null&&jn(i),t.blockedOn=a,!1;i.shift()}return!0}function Sd(t,i,a){io(t)&&a.delete(i)}function zg(){Zl=!1,nr!==null&&io(nr)&&(nr=null),ir!==null&&io(ir)&&(ir=null),rr!==null&&io(rr)&&(rr=null),ea.forEach(Sd),ta.forEach(Sd)}function ia(t,i){t.blockedOn===i&&(t.blockedOn=null,Zl||(Zl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,zg)))}function ra(t){function i(f){return ia(f,t)}if(0<no.length){ia(no[0],t);for(var a=1;a<no.length;a++){var l=no[a];l.blockedOn===t&&(l.blockedOn=null)}}for(nr!==null&&ia(nr,t),ir!==null&&ia(ir,t),rr!==null&&ia(rr,t),ea.forEach(i),ta.forEach(i),a=0;a<sr.length;a++)l=sr[a],l.blockedOn===t&&(l.blockedOn=null);for(;0<sr.length&&(a=sr[0],a.blockedOn===null);)yd(a),a.blockedOn===null&&sr.shift()}var ss=L.ReactCurrentBatchConfig,ro=!0;function Vg(t,i,a,l){var f=st,h=ss.transition;ss.transition=null;try{st=1,Ql(t,i,a,l)}finally{st=f,ss.transition=h}}function Hg(t,i,a,l){var f=st,h=ss.transition;ss.transition=null;try{st=4,Ql(t,i,a,l)}finally{st=f,ss.transition=h}}function Ql(t,i,a,l){if(ro){var f=Jl(t,i,a,l);if(f===null)gc(t,i,l,so,a),xd(t,l);else if(Bg(f,t,i,a,l))l.stopPropagation();else if(xd(t,l),i&4&&-1<kg.indexOf(t)){for(;f!==null;){var h=ga(f);if(h!==null&&qt(h),h=Jl(t,i,a,l),h===null&&gc(t,i,l,so,a),h===f)break;f=h}f!==null&&l.stopPropagation()}else gc(t,i,l,null,a)}}var so=null;function Jl(t,i,a,l){if(so=null,t=H(l),t=Nr(t),t!==null)if(i=_i(t),i===null)t=null;else if(a=i.tag,a===13){if(t=Dr(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return so=t,null}function Md(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(j()){case ae:return 1;case te:return 4;case Q:case Re:return 16;case Ue:return 536870912;default:return 16}default:return 16}}var ar=null,ec=null,ao=null;function Ed(){if(ao)return ao;var t,i=ec,a=i.length,l,f="value"in ar?ar.value:ar.textContent,h=f.length;for(t=0;t<a&&i[t]===f[t];t++);var E=a-t;for(l=1;l<=E&&i[a-l]===f[h-l];l++);return ao=f.slice(t,1<l?1-l:void 0)}function oo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function lo(){return!0}function Td(){return!1}function On(t){function i(a,l,f,h,E){this._reactName=a,this._targetInst=f,this.type=l,this.nativeEvent=h,this.target=E,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(a=t[D],this[D]=a?a(h):h[D]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?lo:Td,this.isPropagationStopped=Td,this}return ce(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=lo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=lo)},persist:function(){},isPersistent:lo}),i}var as={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tc=On(as),sa=ce({},as,{view:0,detail:0}),Gg=On(sa),nc,ic,aa,co=ce({},sa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==aa&&(aa&&t.type==="mousemove"?(nc=t.screenX-aa.screenX,ic=t.screenY-aa.screenY):ic=nc=0,aa=t),nc)},movementY:function(t){return"movementY"in t?t.movementY:ic}}),wd=On(co),Wg=ce({},co,{dataTransfer:0}),Xg=On(Wg),jg=ce({},sa,{relatedTarget:0}),rc=On(jg),qg=ce({},as,{animationName:0,elapsedTime:0,pseudoElement:0}),Yg=On(qg),$g=ce({},as,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Kg=On($g),Zg=ce({},as,{data:0}),Ad=On(Zg),Qg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},e0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function t0(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=e0[t])?!!i[t]:!1}function sc(){return t0}var n0=ce({},sa,{key:function(t){if(t.key){var i=Qg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=oo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Jg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sc,charCode:function(t){return t.type==="keypress"?oo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?oo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),i0=On(n0),r0=ce({},co,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bd=On(r0),s0=ce({},sa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sc}),a0=On(s0),o0=ce({},as,{propertyName:0,elapsedTime:0,pseudoElement:0}),l0=On(o0),c0=ce({},co,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),u0=On(c0),f0=[9,13,27,32],ac=d&&"CompositionEvent"in window,oa=null;d&&"documentMode"in document&&(oa=document.documentMode);var d0=d&&"TextEvent"in window&&!oa,Cd=d&&(!ac||oa&&8<oa&&11>=oa),Rd=" ",Pd=!1;function Ld(t,i){switch(t){case"keyup":return f0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var os=!1;function h0(t,i){switch(t){case"compositionend":return Dd(i);case"keypress":return i.which!==32?null:(Pd=!0,Rd);case"textInput":return t=i.data,t===Rd&&Pd?null:t;default:return null}}function p0(t,i){if(os)return t==="compositionend"||!ac&&Ld(t,i)?(t=Ed(),ao=ec=ar=null,os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Cd&&i.locale!=="ko"?null:i.data;default:return null}}var m0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!m0[t.type]:i==="textarea"}function Id(t,i,a,l){fe(l),i=mo(i,"onChange"),0<i.length&&(a=new tc("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var la=null,ca=null;function g0(t){Qd(t,0)}function uo(t){var i=ds(t);if(Xt(i))return t}function _0(t,i){if(t==="change")return i}var Ud=!1;if(d){var oc;if(d){var lc="oninput"in document;if(!lc){var Fd=document.createElement("div");Fd.setAttribute("oninput","return;"),lc=typeof Fd.oninput=="function"}oc=lc}else oc=!1;Ud=oc&&(!document.documentMode||9<document.documentMode)}function Od(){la&&(la.detachEvent("onpropertychange",kd),ca=la=null)}function kd(t){if(t.propertyName==="value"&&uo(ca)){var i=[];Id(i,ca,t,H(t)),Wn(g0,i)}}function v0(t,i,a){t==="focusin"?(Od(),la=i,ca=a,la.attachEvent("onpropertychange",kd)):t==="focusout"&&Od()}function x0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return uo(ca)}function y0(t,i){if(t==="click")return uo(i)}function S0(t,i){if(t==="input"||t==="change")return uo(i)}function M0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var si=typeof Object.is=="function"?Object.is:M0;function ua(t,i){if(si(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var f=a[l];if(!p.call(i,f)||!si(t[f],i[f]))return!1}return!0}function Bd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zd(t,i){var a=Bd(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Bd(a)}}function Vd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Vd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Hd(){for(var t=window,i=ht();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=ht(t.document)}return i}function cc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function E0(t){var i=Hd(),a=t.focusedElem,l=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&Vd(a.ownerDocument.documentElement,a)){if(l!==null&&cc(a)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=a.textContent.length,h=Math.min(l.start,f);l=l.end===void 0?h:Math.min(l.end,f),!t.extend&&h>l&&(f=l,l=h,h=f),f=zd(a,h);var E=zd(a,l);f&&E&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var T0=d&&"documentMode"in document&&11>=document.documentMode,ls=null,uc=null,fa=null,fc=!1;function Gd(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;fc||ls==null||ls!==ht(l)||(l=ls,"selectionStart"in l&&cc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),fa&&ua(fa,l)||(fa=l,l=mo(uc,"onSelect"),0<l.length&&(i=new tc("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=ls)))}function fo(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var cs={animationend:fo("Animation","AnimationEnd"),animationiteration:fo("Animation","AnimationIteration"),animationstart:fo("Animation","AnimationStart"),transitionend:fo("Transition","TransitionEnd")},dc={},Wd={};d&&(Wd=document.createElement("div").style,"AnimationEvent"in window||(delete cs.animationend.animation,delete cs.animationiteration.animation,delete cs.animationstart.animation),"TransitionEvent"in window||delete cs.transitionend.transition);function ho(t){if(dc[t])return dc[t];if(!cs[t])return t;var i=cs[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in Wd)return dc[t]=i[a];return t}var Xd=ho("animationend"),jd=ho("animationiteration"),qd=ho("animationstart"),Yd=ho("transitionend"),$d=new Map,Kd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(t,i){$d.set(t,i),c(i,[t])}for(var hc=0;hc<Kd.length;hc++){var pc=Kd[hc],w0=pc.toLowerCase(),A0=pc[0].toUpperCase()+pc.slice(1);or(w0,"on"+A0)}or(Xd,"onAnimationEnd"),or(jd,"onAnimationIteration"),or(qd,"onAnimationStart"),or("dblclick","onDoubleClick"),or("focusin","onFocus"),or("focusout","onBlur"),or(Yd,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),b0=new Set("cancel close invalid load scroll toggle".split(" ").concat(da));function Zd(t,i,a){var l=t.type||"unknown-event";t.currentTarget=a,rs(l,i,void 0,t),t.currentTarget=null}function Qd(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],f=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var E=l.length-1;0<=E;E--){var D=l[E],B=D.instance,se=D.currentTarget;if(D=D.listener,B!==h&&f.isPropagationStopped())break e;Zd(f,D,se),h=B}else for(E=0;E<l.length;E++){if(D=l[E],B=D.instance,se=D.currentTarget,D=D.listener,B!==h&&f.isPropagationStopped())break e;Zd(f,D,se),h=B}}}if(Xn)throw t=Lr,Xn=!1,Lr=null,t}function Ot(t,i){var a=i[Mc];a===void 0&&(a=i[Mc]=new Set);var l=t+"__bubble";a.has(l)||(Jd(i,t,2,!1),a.add(l))}function mc(t,i,a){var l=0;i&&(l|=4),Jd(a,t,l,i)}var po="_reactListening"+Math.random().toString(36).slice(2);function ha(t){if(!t[po]){t[po]=!0,r.forEach(function(a){a!=="selectionchange"&&(b0.has(a)||mc(a,!1,t),mc(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[po]||(i[po]=!0,mc("selectionchange",!1,i))}}function Jd(t,i,a,l){switch(Md(i)){case 1:var f=Vg;break;case 4:f=Hg;break;default:f=Ql}a=f.bind(null,i,a,t),f=void 0,!is||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,a,{capture:!0,passive:f}):t.addEventListener(i,a,!0):f!==void 0?t.addEventListener(i,a,{passive:f}):t.addEventListener(i,a,!1)}function gc(t,i,a,l,f){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var D=l.stateNode.containerInfo;if(D===f||D.nodeType===8&&D.parentNode===f)break;if(E===4)for(E=l.return;E!==null;){var B=E.tag;if((B===3||B===4)&&(B=E.stateNode.containerInfo,B===f||B.nodeType===8&&B.parentNode===f))return;E=E.return}for(;D!==null;){if(E=Nr(D),E===null)return;if(B=E.tag,B===5||B===6){l=h=E;continue e}D=D.parentNode}}l=l.return}Wn(function(){var se=h,ve=H(a),xe=[];e:{var _e=$d.get(t);if(_e!==void 0){var Ie=tc,Ve=t;switch(t){case"keypress":if(oo(a)===0)break e;case"keydown":case"keyup":Ie=i0;break;case"focusin":Ve="focus",Ie=rc;break;case"focusout":Ve="blur",Ie=rc;break;case"beforeblur":case"afterblur":Ie=rc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=wd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=Xg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=a0;break;case Xd:case jd:case qd:Ie=Yg;break;case Yd:Ie=l0;break;case"scroll":Ie=Gg;break;case"wheel":Ie=u0;break;case"copy":case"cut":case"paste":Ie=Kg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=bd}var je=(i&4)!==0,Yt=!je&&t==="scroll",Y=je?_e!==null?_e+"Capture":null:_e;je=[];for(var G=se,ee;G!==null;){ee=G;var Ee=ee.stateNode;if(ee.tag===5&&Ee!==null&&(ee=Ee,Y!==null&&(Ee=xn(G,Y),Ee!=null&&je.push(pa(G,Ee,ee)))),Yt)break;G=G.return}0<je.length&&(_e=new Ie(_e,Ve,null,a,ve),xe.push({event:_e,listeners:je}))}}if((i&7)===0){e:{if(_e=t==="mouseover"||t==="pointerover",Ie=t==="mouseout"||t==="pointerout",_e&&a!==lt&&(Ve=a.relatedTarget||a.fromElement)&&(Nr(Ve)||Ve[Ni]))break e;if((Ie||_e)&&(_e=ve.window===ve?ve:(_e=ve.ownerDocument)?_e.defaultView||_e.parentWindow:window,Ie?(Ve=a.relatedTarget||a.toElement,Ie=se,Ve=Ve?Nr(Ve):null,Ve!==null&&(Yt=_i(Ve),Ve!==Yt||Ve.tag!==5&&Ve.tag!==6)&&(Ve=null)):(Ie=null,Ve=se),Ie!==Ve)){if(je=wd,Ee="onMouseLeave",Y="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(je=bd,Ee="onPointerLeave",Y="onPointerEnter",G="pointer"),Yt=Ie==null?_e:ds(Ie),ee=Ve==null?_e:ds(Ve),_e=new je(Ee,G+"leave",Ie,a,ve),_e.target=Yt,_e.relatedTarget=ee,Ee=null,Nr(ve)===se&&(je=new je(Y,G+"enter",Ve,a,ve),je.target=ee,je.relatedTarget=Yt,Ee=je),Yt=Ee,Ie&&Ve)t:{for(je=Ie,Y=Ve,G=0,ee=je;ee;ee=us(ee))G++;for(ee=0,Ee=Y;Ee;Ee=us(Ee))ee++;for(;0<G-ee;)je=us(je),G--;for(;0<ee-G;)Y=us(Y),ee--;for(;G--;){if(je===Y||Y!==null&&je===Y.alternate)break t;je=us(je),Y=us(Y)}je=null}else je=null;Ie!==null&&eh(xe,_e,Ie,je,!1),Ve!==null&&Yt!==null&&eh(xe,Yt,Ve,je,!0)}}e:{if(_e=se?ds(se):window,Ie=_e.nodeName&&_e.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&_e.type==="file")var $e=_0;else if(Nd(_e))if(Ud)$e=S0;else{$e=x0;var et=v0}else(Ie=_e.nodeName)&&Ie.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&($e=y0);if($e&&($e=$e(t,se))){Id(xe,$e,a,ve);break e}et&&et(t,_e,se),t==="focusout"&&(et=_e._wrapperState)&&et.controlled&&_e.type==="number"&&Bt(_e,"number",_e.value)}switch(et=se?ds(se):window,t){case"focusin":(Nd(et)||et.contentEditable==="true")&&(ls=et,uc=se,fa=null);break;case"focusout":fa=uc=ls=null;break;case"mousedown":fc=!0;break;case"contextmenu":case"mouseup":case"dragend":fc=!1,Gd(xe,a,ve);break;case"selectionchange":if(T0)break;case"keydown":case"keyup":Gd(xe,a,ve)}var tt;if(ac)e:{switch(t){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else os?Ld(t,a)&&(at="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(at="onCompositionStart");at&&(Cd&&a.locale!=="ko"&&(os||at!=="onCompositionStart"?at==="onCompositionEnd"&&os&&(tt=Ed()):(ar=ve,ec="value"in ar?ar.value:ar.textContent,os=!0)),et=mo(se,at),0<et.length&&(at=new Ad(at,t,null,a,ve),xe.push({event:at,listeners:et}),tt?at.data=tt:(tt=Dd(a),tt!==null&&(at.data=tt)))),(tt=d0?h0(t,a):p0(t,a))&&(se=mo(se,"onBeforeInput"),0<se.length&&(ve=new Ad("onBeforeInput","beforeinput",null,a,ve),xe.push({event:ve,listeners:se}),ve.data=tt))}Qd(xe,i)})}function pa(t,i,a){return{instance:t,listener:i,currentTarget:a}}function mo(t,i){for(var a=i+"Capture",l=[];t!==null;){var f=t,h=f.stateNode;f.tag===5&&h!==null&&(f=h,h=xn(t,a),h!=null&&l.unshift(pa(t,h,f)),h=xn(t,i),h!=null&&l.push(pa(t,h,f))),t=t.return}return l}function us(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function eh(t,i,a,l,f){for(var h=i._reactName,E=[];a!==null&&a!==l;){var D=a,B=D.alternate,se=D.stateNode;if(B!==null&&B===l)break;D.tag===5&&se!==null&&(D=se,f?(B=xn(a,h),B!=null&&E.unshift(pa(a,B,D))):f||(B=xn(a,h),B!=null&&E.push(pa(a,B,D)))),a=a.return}E.length!==0&&t.push({event:i,listeners:E})}var C0=/\r\n?/g,R0=/\u0000|\uFFFD/g;function th(t){return(typeof t=="string"?t:""+t).replace(C0,`
`).replace(R0,"")}function go(t,i,a){if(i=th(i),th(t)!==i&&a)throw Error(n(425))}function _o(){}var _c=null,vc=null;function xc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var yc=typeof setTimeout=="function"?setTimeout:void 0,P0=typeof clearTimeout=="function"?clearTimeout:void 0,nh=typeof Promise=="function"?Promise:void 0,L0=typeof queueMicrotask=="function"?queueMicrotask:typeof nh<"u"?function(t){return nh.resolve(null).then(t).catch(D0)}:yc;function D0(t){setTimeout(function(){throw t})}function Sc(t,i){var a=i,l=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(l===0){t.removeChild(f),ra(i);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=f}while(a);ra(i)}function lr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function ih(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var fs=Math.random().toString(36).slice(2),vi="__reactFiber$"+fs,ma="__reactProps$"+fs,Ni="__reactContainer$"+fs,Mc="__reactEvents$"+fs,N0="__reactListeners$"+fs,I0="__reactHandles$"+fs;function Nr(t){var i=t[vi];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Ni]||a[vi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=ih(t);t!==null;){if(a=t[vi])return a;t=ih(t)}return i}t=a,a=t.parentNode}return null}function ga(t){return t=t[vi]||t[Ni],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ds(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function vo(t){return t[ma]||null}var Ec=[],hs=-1;function cr(t){return{current:t}}function kt(t){0>hs||(t.current=Ec[hs],Ec[hs]=null,hs--)}function Ut(t,i){hs++,Ec[hs]=t.current,t.current=i}var ur={},un=cr(ur),Cn=cr(!1),Ir=ur;function ps(t,i){var a=t.type.contextTypes;if(!a)return ur;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var f={},h;for(h in a)f[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function Rn(t){return t=t.childContextTypes,t!=null}function xo(){kt(Cn),kt(un)}function rh(t,i,a){if(un.current!==ur)throw Error(n(168));Ut(un,i),Ut(Cn,a)}function sh(t,i,a){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var f in l)if(!(f in i))throw Error(n(108,me(t)||"Unknown",f));return ce({},a,l)}function yo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ur,Ir=un.current,Ut(un,t),Ut(Cn,Cn.current),!0}function ah(t,i,a){var l=t.stateNode;if(!l)throw Error(n(169));a?(t=sh(t,i,Ir),l.__reactInternalMemoizedMergedChildContext=t,kt(Cn),kt(un),Ut(un,t)):kt(Cn),Ut(Cn,a)}var Ii=null,So=!1,Tc=!1;function oh(t){Ii===null?Ii=[t]:Ii.push(t)}function U0(t){So=!0,oh(t)}function fr(){if(!Tc&&Ii!==null){Tc=!0;var t=0,i=st;try{var a=Ii;for(st=1;t<a.length;t++){var l=a[t];do l=l(!0);while(l!==null)}Ii=null,So=!1}catch(f){throw Ii!==null&&(Ii=Ii.slice(t+1)),eo(ae,fr),f}finally{st=i,Tc=!1}}return null}var ms=[],gs=0,Mo=null,Eo=0,qn=[],Yn=0,Ur=null,Ui=1,Fi="";function Fr(t,i){ms[gs++]=Eo,ms[gs++]=Mo,Mo=t,Eo=i}function lh(t,i,a){qn[Yn++]=Ui,qn[Yn++]=Fi,qn[Yn++]=Ur,Ur=t;var l=Ui;t=Fi;var f=32-Je(l)-1;l&=~(1<<f),a+=1;var h=32-Je(i)+f;if(30<h){var E=f-f%5;h=(l&(1<<E)-1).toString(32),l>>=E,f-=E,Ui=1<<32-Je(i)+f|a<<f|l,Fi=h+t}else Ui=1<<h|a<<f|l,Fi=t}function wc(t){t.return!==null&&(Fr(t,1),lh(t,1,0))}function Ac(t){for(;t===Mo;)Mo=ms[--gs],ms[gs]=null,Eo=ms[--gs],ms[gs]=null;for(;t===Ur;)Ur=qn[--Yn],qn[Yn]=null,Fi=qn[--Yn],qn[Yn]=null,Ui=qn[--Yn],qn[Yn]=null}var kn=null,Bn=null,zt=!1,ai=null;function ch(t,i){var a=Qn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function uh(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,kn=t,Bn=lr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,kn=t,Bn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Ur!==null?{id:Ui,overflow:Fi}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Qn(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,kn=t,Bn=null,!0):!1;default:return!1}}function bc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Cc(t){if(zt){var i=Bn;if(i){var a=i;if(!uh(t,i)){if(bc(t))throw Error(n(418));i=lr(a.nextSibling);var l=kn;i&&uh(t,i)?ch(l,a):(t.flags=t.flags&-4097|2,zt=!1,kn=t)}}else{if(bc(t))throw Error(n(418));t.flags=t.flags&-4097|2,zt=!1,kn=t}}}function fh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kn=t}function To(t){if(t!==kn)return!1;if(!zt)return fh(t),zt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!xc(t.type,t.memoizedProps)),i&&(i=Bn)){if(bc(t))throw dh(),Error(n(418));for(;i;)ch(t,i),i=lr(i.nextSibling)}if(fh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){Bn=lr(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}Bn=null}}else Bn=kn?lr(t.stateNode.nextSibling):null;return!0}function dh(){for(var t=Bn;t;)t=lr(t.nextSibling)}function _s(){Bn=kn=null,zt=!1}function Rc(t){ai===null?ai=[t]:ai.push(t)}var F0=L.ReactCurrentBatchConfig;function _a(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var l=a.stateNode}if(!l)throw Error(n(147,t));var f=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(E){var D=f.refs;E===null?delete D[h]:D[h]=E},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function wo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function hh(t){var i=t._init;return i(t._payload)}function ph(t){function i(Y,G){if(t){var ee=Y.deletions;ee===null?(Y.deletions=[G],Y.flags|=16):ee.push(G)}}function a(Y,G){if(!t)return null;for(;G!==null;)i(Y,G),G=G.sibling;return null}function l(Y,G){for(Y=new Map;G!==null;)G.key!==null?Y.set(G.key,G):Y.set(G.index,G),G=G.sibling;return Y}function f(Y,G){return Y=xr(Y,G),Y.index=0,Y.sibling=null,Y}function h(Y,G,ee){return Y.index=ee,t?(ee=Y.alternate,ee!==null?(ee=ee.index,ee<G?(Y.flags|=2,G):ee):(Y.flags|=2,G)):(Y.flags|=1048576,G)}function E(Y){return t&&Y.alternate===null&&(Y.flags|=2),Y}function D(Y,G,ee,Ee){return G===null||G.tag!==6?(G=yu(ee,Y.mode,Ee),G.return=Y,G):(G=f(G,ee),G.return=Y,G)}function B(Y,G,ee,Ee){var $e=ee.type;return $e===O?ve(Y,G,ee.props.children,Ee,ee.key):G!==null&&(G.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===ie&&hh($e)===G.type)?(Ee=f(G,ee.props),Ee.ref=_a(Y,G,ee),Ee.return=Y,Ee):(Ee=$o(ee.type,ee.key,ee.props,null,Y.mode,Ee),Ee.ref=_a(Y,G,ee),Ee.return=Y,Ee)}function se(Y,G,ee,Ee){return G===null||G.tag!==4||G.stateNode.containerInfo!==ee.containerInfo||G.stateNode.implementation!==ee.implementation?(G=Su(ee,Y.mode,Ee),G.return=Y,G):(G=f(G,ee.children||[]),G.return=Y,G)}function ve(Y,G,ee,Ee,$e){return G===null||G.tag!==7?(G=Wr(ee,Y.mode,Ee,$e),G.return=Y,G):(G=f(G,ee),G.return=Y,G)}function xe(Y,G,ee){if(typeof G=="string"&&G!==""||typeof G=="number")return G=yu(""+G,Y.mode,ee),G.return=Y,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case V:return ee=$o(G.type,G.key,G.props,null,Y.mode,ee),ee.ref=_a(Y,null,G),ee.return=Y,ee;case k:return G=Su(G,Y.mode,ee),G.return=Y,G;case ie:var Ee=G._init;return xe(Y,Ee(G._payload),ee)}if(mt(G)||oe(G))return G=Wr(G,Y.mode,ee,null),G.return=Y,G;wo(Y,G)}return null}function _e(Y,G,ee,Ee){var $e=G!==null?G.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return $e!==null?null:D(Y,G,""+ee,Ee);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case V:return ee.key===$e?B(Y,G,ee,Ee):null;case k:return ee.key===$e?se(Y,G,ee,Ee):null;case ie:return $e=ee._init,_e(Y,G,$e(ee._payload),Ee)}if(mt(ee)||oe(ee))return $e!==null?null:ve(Y,G,ee,Ee,null);wo(Y,ee)}return null}function Ie(Y,G,ee,Ee,$e){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return Y=Y.get(ee)||null,D(G,Y,""+Ee,$e);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case V:return Y=Y.get(Ee.key===null?ee:Ee.key)||null,B(G,Y,Ee,$e);case k:return Y=Y.get(Ee.key===null?ee:Ee.key)||null,se(G,Y,Ee,$e);case ie:var et=Ee._init;return Ie(Y,G,ee,et(Ee._payload),$e)}if(mt(Ee)||oe(Ee))return Y=Y.get(ee)||null,ve(G,Y,Ee,$e,null);wo(G,Ee)}return null}function Ve(Y,G,ee,Ee){for(var $e=null,et=null,tt=G,at=G=0,sn=null;tt!==null&&at<ee.length;at++){tt.index>at?(sn=tt,tt=null):sn=tt.sibling;var Tt=_e(Y,tt,ee[at],Ee);if(Tt===null){tt===null&&(tt=sn);break}t&&tt&&Tt.alternate===null&&i(Y,tt),G=h(Tt,G,at),et===null?$e=Tt:et.sibling=Tt,et=Tt,tt=sn}if(at===ee.length)return a(Y,tt),zt&&Fr(Y,at),$e;if(tt===null){for(;at<ee.length;at++)tt=xe(Y,ee[at],Ee),tt!==null&&(G=h(tt,G,at),et===null?$e=tt:et.sibling=tt,et=tt);return zt&&Fr(Y,at),$e}for(tt=l(Y,tt);at<ee.length;at++)sn=Ie(tt,Y,at,ee[at],Ee),sn!==null&&(t&&sn.alternate!==null&&tt.delete(sn.key===null?at:sn.key),G=h(sn,G,at),et===null?$e=sn:et.sibling=sn,et=sn);return t&&tt.forEach(function(yr){return i(Y,yr)}),zt&&Fr(Y,at),$e}function je(Y,G,ee,Ee){var $e=oe(ee);if(typeof $e!="function")throw Error(n(150));if(ee=$e.call(ee),ee==null)throw Error(n(151));for(var et=$e=null,tt=G,at=G=0,sn=null,Tt=ee.next();tt!==null&&!Tt.done;at++,Tt=ee.next()){tt.index>at?(sn=tt,tt=null):sn=tt.sibling;var yr=_e(Y,tt,Tt.value,Ee);if(yr===null){tt===null&&(tt=sn);break}t&&tt&&yr.alternate===null&&i(Y,tt),G=h(yr,G,at),et===null?$e=yr:et.sibling=yr,et=yr,tt=sn}if(Tt.done)return a(Y,tt),zt&&Fr(Y,at),$e;if(tt===null){for(;!Tt.done;at++,Tt=ee.next())Tt=xe(Y,Tt.value,Ee),Tt!==null&&(G=h(Tt,G,at),et===null?$e=Tt:et.sibling=Tt,et=Tt);return zt&&Fr(Y,at),$e}for(tt=l(Y,tt);!Tt.done;at++,Tt=ee.next())Tt=Ie(tt,Y,at,Tt.value,Ee),Tt!==null&&(t&&Tt.alternate!==null&&tt.delete(Tt.key===null?at:Tt.key),G=h(Tt,G,at),et===null?$e=Tt:et.sibling=Tt,et=Tt);return t&&tt.forEach(function(m_){return i(Y,m_)}),zt&&Fr(Y,at),$e}function Yt(Y,G,ee,Ee){if(typeof ee=="object"&&ee!==null&&ee.type===O&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case V:e:{for(var $e=ee.key,et=G;et!==null;){if(et.key===$e){if($e=ee.type,$e===O){if(et.tag===7){a(Y,et.sibling),G=f(et,ee.props.children),G.return=Y,Y=G;break e}}else if(et.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===ie&&hh($e)===et.type){a(Y,et.sibling),G=f(et,ee.props),G.ref=_a(Y,et,ee),G.return=Y,Y=G;break e}a(Y,et);break}else i(Y,et);et=et.sibling}ee.type===O?(G=Wr(ee.props.children,Y.mode,Ee,ee.key),G.return=Y,Y=G):(Ee=$o(ee.type,ee.key,ee.props,null,Y.mode,Ee),Ee.ref=_a(Y,G,ee),Ee.return=Y,Y=Ee)}return E(Y);case k:e:{for(et=ee.key;G!==null;){if(G.key===et)if(G.tag===4&&G.stateNode.containerInfo===ee.containerInfo&&G.stateNode.implementation===ee.implementation){a(Y,G.sibling),G=f(G,ee.children||[]),G.return=Y,Y=G;break e}else{a(Y,G);break}else i(Y,G);G=G.sibling}G=Su(ee,Y.mode,Ee),G.return=Y,Y=G}return E(Y);case ie:return et=ee._init,Yt(Y,G,et(ee._payload),Ee)}if(mt(ee))return Ve(Y,G,ee,Ee);if(oe(ee))return je(Y,G,ee,Ee);wo(Y,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,G!==null&&G.tag===6?(a(Y,G.sibling),G=f(G,ee),G.return=Y,Y=G):(a(Y,G),G=yu(ee,Y.mode,Ee),G.return=Y,Y=G),E(Y)):a(Y,G)}return Yt}var vs=ph(!0),mh=ph(!1),Ao=cr(null),bo=null,xs=null,Pc=null;function Lc(){Pc=xs=bo=null}function Dc(t){var i=Ao.current;kt(Ao),t._currentValue=i}function Nc(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function ys(t,i){bo=t,Pc=xs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Pn=!0),t.firstContext=null)}function $n(t){var i=t._currentValue;if(Pc!==t)if(t={context:t,memoizedValue:i,next:null},xs===null){if(bo===null)throw Error(n(308));xs=t,bo.dependencies={lanes:0,firstContext:t}}else xs=xs.next=t;return i}var Or=null;function Ic(t){Or===null?Or=[t]:Or.push(t)}function gh(t,i,a,l){var f=i.interleaved;return f===null?(a.next=a,Ic(i)):(a.next=f.next,f.next=a),i.interleaved=a,Oi(t,l)}function Oi(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var dr=!1;function Uc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _h(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ki(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function hr(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Mt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,Oi(t,a)}return f=l.interleaved,f===null?(i.next=i,Ic(l)):(i.next=f.next,f.next=i),l.interleaved=i,Oi(t,a)}function Co(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,At(t,a)}}function vh(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var f=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};h===null?f=h=E:h=h.next=E,a=a.next}while(a!==null);h===null?f=h=i:h=h.next=i}else f=h=i;a={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function Ro(t,i,a,l){var f=t.updateQueue;dr=!1;var h=f.firstBaseUpdate,E=f.lastBaseUpdate,D=f.shared.pending;if(D!==null){f.shared.pending=null;var B=D,se=B.next;B.next=null,E===null?h=se:E.next=se,E=B;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,D=ve.lastBaseUpdate,D!==E&&(D===null?ve.firstBaseUpdate=se:D.next=se,ve.lastBaseUpdate=B))}if(h!==null){var xe=f.baseState;E=0,ve=se=B=null,D=h;do{var _e=D.lane,Ie=D.eventTime;if((l&_e)===_e){ve!==null&&(ve=ve.next={eventTime:Ie,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var Ve=t,je=D;switch(_e=i,Ie=a,je.tag){case 1:if(Ve=je.payload,typeof Ve=="function"){xe=Ve.call(Ie,xe,_e);break e}xe=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=je.payload,_e=typeof Ve=="function"?Ve.call(Ie,xe,_e):Ve,_e==null)break e;xe=ce({},xe,_e);break e;case 2:dr=!0}}D.callback!==null&&D.lane!==0&&(t.flags|=64,_e=f.effects,_e===null?f.effects=[D]:_e.push(D))}else Ie={eventTime:Ie,lane:_e,tag:D.tag,payload:D.payload,callback:D.callback,next:null},ve===null?(se=ve=Ie,B=xe):ve=ve.next=Ie,E|=_e;if(D=D.next,D===null){if(D=f.shared.pending,D===null)break;_e=D,D=_e.next,_e.next=null,f.lastBaseUpdate=_e,f.shared.pending=null}}while(!0);if(ve===null&&(B=xe),f.baseState=B,f.firstBaseUpdate=se,f.lastBaseUpdate=ve,i=f.shared.interleaved,i!==null){f=i;do E|=f.lane,f=f.next;while(f!==i)}else h===null&&(f.shared.lanes=0);zr|=E,t.lanes=E,t.memoizedState=xe}}function xh(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],f=l.callback;if(f!==null){if(l.callback=null,l=a,typeof f!="function")throw Error(n(191,f));f.call(l)}}}var va={},xi=cr(va),xa=cr(va),ya=cr(va);function kr(t){if(t===va)throw Error(n(174));return t}function Fc(t,i){switch(Ut(ya,i),Ut(xa,t),Ut(xi,va),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ge(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=ge(i,t)}kt(xi),Ut(xi,i)}function Ss(){kt(xi),kt(xa),kt(ya)}function yh(t){kr(ya.current);var i=kr(xi.current),a=ge(i,t.type);i!==a&&(Ut(xa,t),Ut(xi,a))}function Oc(t){xa.current===t&&(kt(xi),kt(xa))}var Vt=cr(0);function Po(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var kc=[];function Bc(){for(var t=0;t<kc.length;t++)kc[t]._workInProgressVersionPrimary=null;kc.length=0}var Lo=L.ReactCurrentDispatcher,zc=L.ReactCurrentBatchConfig,Br=0,Ht=null,Qt=null,nn=null,Do=!1,Sa=!1,Ma=0,O0=0;function fn(){throw Error(n(321))}function Vc(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!si(t[a],i[a]))return!1;return!0}function Hc(t,i,a,l,f,h){if(Br=h,Ht=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Lo.current=t===null||t.memoizedState===null?V0:H0,t=a(l,f),Sa){h=0;do{if(Sa=!1,Ma=0,25<=h)throw Error(n(301));h+=1,nn=Qt=null,i.updateQueue=null,Lo.current=G0,t=a(l,f)}while(Sa)}if(Lo.current=Uo,i=Qt!==null&&Qt.next!==null,Br=0,nn=Qt=Ht=null,Do=!1,i)throw Error(n(300));return t}function Gc(){var t=Ma!==0;return Ma=0,t}function yi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?Ht.memoizedState=nn=t:nn=nn.next=t,nn}function Kn(){if(Qt===null){var t=Ht.alternate;t=t!==null?t.memoizedState:null}else t=Qt.next;var i=nn===null?Ht.memoizedState:nn.next;if(i!==null)nn=i,Qt=t;else{if(t===null)throw Error(n(310));Qt=t,t={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},nn===null?Ht.memoizedState=nn=t:nn=nn.next=t}return nn}function Ea(t,i){return typeof i=="function"?i(t):i}function Wc(t){var i=Kn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=Qt,f=l.baseQueue,h=a.pending;if(h!==null){if(f!==null){var E=f.next;f.next=h.next,h.next=E}l.baseQueue=f=h,a.pending=null}if(f!==null){h=f.next,l=l.baseState;var D=E=null,B=null,se=h;do{var ve=se.lane;if((Br&ve)===ve)B!==null&&(B=B.next={lane:0,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null}),l=se.hasEagerState?se.eagerState:t(l,se.action);else{var xe={lane:ve,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null};B===null?(D=B=xe,E=l):B=B.next=xe,Ht.lanes|=ve,zr|=ve}se=se.next}while(se!==null&&se!==h);B===null?E=l:B.next=D,si(l,i.memoizedState)||(Pn=!0),i.memoizedState=l,i.baseState=E,i.baseQueue=B,a.lastRenderedState=l}if(t=a.interleaved,t!==null){f=t;do h=f.lane,Ht.lanes|=h,zr|=h,f=f.next;while(f!==t)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Xc(t){var i=Kn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=a.dispatch,f=a.pending,h=i.memoizedState;if(f!==null){a.pending=null;var E=f=f.next;do h=t(h,E.action),E=E.next;while(E!==f);si(h,i.memoizedState)||(Pn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),a.lastRenderedState=h}return[h,l]}function Sh(){}function Mh(t,i){var a=Ht,l=Kn(),f=i(),h=!si(l.memoizedState,f);if(h&&(l.memoizedState=f,Pn=!0),l=l.queue,jc(wh.bind(null,a,l,t),[t]),l.getSnapshot!==i||h||nn!==null&&nn.memoizedState.tag&1){if(a.flags|=2048,Ta(9,Th.bind(null,a,l,f,i),void 0,null),rn===null)throw Error(n(349));(Br&30)!==0||Eh(a,i,f)}return f}function Eh(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function Th(t,i,a,l){i.value=a,i.getSnapshot=l,Ah(i)&&bh(t)}function wh(t,i,a){return a(function(){Ah(i)&&bh(t)})}function Ah(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!si(t,a)}catch{return!0}}function bh(t){var i=Oi(t,1);i!==null&&ui(i,t,1,-1)}function Ch(t){var i=yi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:t},i.queue=t,t=t.dispatch=z0.bind(null,Ht,t),[i.memoizedState,t]}function Ta(t,i,a,l){return t={tag:t,create:i,destroy:a,deps:l,next:null},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t)),t}function Rh(){return Kn().memoizedState}function No(t,i,a,l){var f=yi();Ht.flags|=t,f.memoizedState=Ta(1|i,a,void 0,l===void 0?null:l)}function Io(t,i,a,l){var f=Kn();l=l===void 0?null:l;var h=void 0;if(Qt!==null){var E=Qt.memoizedState;if(h=E.destroy,l!==null&&Vc(l,E.deps)){f.memoizedState=Ta(i,a,h,l);return}}Ht.flags|=t,f.memoizedState=Ta(1|i,a,h,l)}function Ph(t,i){return No(8390656,8,t,i)}function jc(t,i){return Io(2048,8,t,i)}function Lh(t,i){return Io(4,2,t,i)}function Dh(t,i){return Io(4,4,t,i)}function Nh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Ih(t,i,a){return a=a!=null?a.concat([t]):null,Io(4,4,Nh.bind(null,i,t),a)}function qc(){}function Uh(t,i){var a=Kn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Vc(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function Fh(t,i){var a=Kn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Vc(i,l[1])?l[0]:(t=t(),a.memoizedState=[t,i],t)}function Oh(t,i,a){return(Br&21)===0?(t.baseState&&(t.baseState=!1,Pn=!0),t.memoizedState=a):(si(a,i)||(a=An(),Ht.lanes|=a,zr|=a,t.baseState=!0),i)}function k0(t,i){var a=st;st=a!==0&&4>a?a:4,t(!0);var l=zc.transition;zc.transition={};try{t(!1),i()}finally{st=a,zc.transition=l}}function kh(){return Kn().memoizedState}function B0(t,i,a){var l=_r(t);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},Bh(t))zh(i,a);else if(a=gh(t,i,a,l),a!==null){var f=Mn();ui(a,t,l,f),Vh(a,i,l)}}function z0(t,i,a){var l=_r(t),f={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(Bh(t))zh(i,f);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var E=i.lastRenderedState,D=h(E,a);if(f.hasEagerState=!0,f.eagerState=D,si(D,E)){var B=i.interleaved;B===null?(f.next=f,Ic(i)):(f.next=B.next,B.next=f),i.interleaved=f;return}}catch{}finally{}a=gh(t,i,f,l),a!==null&&(f=Mn(),ui(a,t,l,f),Vh(a,i,l))}}function Bh(t){var i=t.alternate;return t===Ht||i!==null&&i===Ht}function zh(t,i){Sa=Do=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Vh(t,i,a){if((a&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,At(t,a)}}var Uo={readContext:$n,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useInsertionEffect:fn,useLayoutEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useMutableSource:fn,useSyncExternalStore:fn,useId:fn,unstable_isNewReconciler:!1},V0={readContext:$n,useCallback:function(t,i){return yi().memoizedState=[t,i===void 0?null:i],t},useContext:$n,useEffect:Ph,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,No(4194308,4,Nh.bind(null,i,t),a)},useLayoutEffect:function(t,i){return No(4194308,4,t,i)},useInsertionEffect:function(t,i){return No(4,2,t,i)},useMemo:function(t,i){var a=yi();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var l=yi();return i=a!==void 0?a(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=B0.bind(null,Ht,t),[l.memoizedState,t]},useRef:function(t){var i=yi();return t={current:t},i.memoizedState=t},useState:Ch,useDebugValue:qc,useDeferredValue:function(t){return yi().memoizedState=t},useTransition:function(){var t=Ch(!1),i=t[0];return t=k0.bind(null,t[1]),yi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var l=Ht,f=yi();if(zt){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),rn===null)throw Error(n(349));(Br&30)!==0||Eh(l,i,a)}f.memoizedState=a;var h={value:a,getSnapshot:i};return f.queue=h,Ph(wh.bind(null,l,h,t),[t]),l.flags|=2048,Ta(9,Th.bind(null,l,h,a,i),void 0,null),a},useId:function(){var t=yi(),i=rn.identifierPrefix;if(zt){var a=Fi,l=Ui;a=(l&~(1<<32-Je(l)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ma++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=O0++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},H0={readContext:$n,useCallback:Uh,useContext:$n,useEffect:jc,useImperativeHandle:Ih,useInsertionEffect:Lh,useLayoutEffect:Dh,useMemo:Fh,useReducer:Wc,useRef:Rh,useState:function(){return Wc(Ea)},useDebugValue:qc,useDeferredValue:function(t){var i=Kn();return Oh(i,Qt.memoizedState,t)},useTransition:function(){var t=Wc(Ea)[0],i=Kn().memoizedState;return[t,i]},useMutableSource:Sh,useSyncExternalStore:Mh,useId:kh,unstable_isNewReconciler:!1},G0={readContext:$n,useCallback:Uh,useContext:$n,useEffect:jc,useImperativeHandle:Ih,useInsertionEffect:Lh,useLayoutEffect:Dh,useMemo:Fh,useReducer:Xc,useRef:Rh,useState:function(){return Xc(Ea)},useDebugValue:qc,useDeferredValue:function(t){var i=Kn();return Qt===null?i.memoizedState=t:Oh(i,Qt.memoizedState,t)},useTransition:function(){var t=Xc(Ea)[0],i=Kn().memoizedState;return[t,i]},useMutableSource:Sh,useSyncExternalStore:Mh,useId:kh,unstable_isNewReconciler:!1};function oi(t,i){if(t&&t.defaultProps){i=ce({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function Yc(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:ce({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Fo={isMounted:function(t){return(t=t._reactInternals)?_i(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var l=Mn(),f=_r(t),h=ki(l,f);h.payload=i,a!=null&&(h.callback=a),i=hr(t,h,f),i!==null&&(ui(i,t,f,l),Co(i,t,f))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=Mn(),f=_r(t),h=ki(l,f);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=hr(t,h,f),i!==null&&(ui(i,t,f,l),Co(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=Mn(),l=_r(t),f=ki(a,l);f.tag=2,i!=null&&(f.callback=i),i=hr(t,f,l),i!==null&&(ui(i,t,l,a),Co(i,t,l))}};function Hh(t,i,a,l,f,h,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,E):i.prototype&&i.prototype.isPureReactComponent?!ua(a,l)||!ua(f,h):!0}function Gh(t,i,a){var l=!1,f=ur,h=i.contextType;return typeof h=="object"&&h!==null?h=$n(h):(f=Rn(i)?Ir:un.current,l=i.contextTypes,h=(l=l!=null)?ps(t,f):ur),i=new i(a,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Fo,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=h),i}function Wh(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&Fo.enqueueReplaceState(i,i.state,null)}function $c(t,i,a,l){var f=t.stateNode;f.props=a,f.state=t.memoizedState,f.refs={},Uc(t);var h=i.contextType;typeof h=="object"&&h!==null?f.context=$n(h):(h=Rn(i)?Ir:un.current,f.context=ps(t,h)),f.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Yc(t,i,h,a),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Fo.enqueueReplaceState(f,f.state,null),Ro(t,a,f,l),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function Ms(t,i){try{var a="",l=i;do a+=Ze(l),l=l.return;while(l);var f=a}catch(h){f=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:f,digest:null}}function Kc(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function Zc(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var W0=typeof WeakMap=="function"?WeakMap:Map;function Xh(t,i,a){a=ki(-1,a),a.tag=3,a.payload={element:null};var l=i.value;return a.callback=function(){Go||(Go=!0,du=l),Zc(t,i)},a}function jh(t,i,a){a=ki(-1,a),a.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var f=i.value;a.payload=function(){return l(f)},a.callback=function(){Zc(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(a.callback=function(){Zc(t,i),typeof l!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),a}function qh(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new W0;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(a)||(f.add(a),t=r_.bind(null,t,i,a),i.then(t,t))}function Yh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function $h(t,i,a,l,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=ki(-1,1),i.tag=2,hr(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var X0=L.ReactCurrentOwner,Pn=!1;function Sn(t,i,a,l){i.child=t===null?mh(i,null,a,l):vs(i,t.child,a,l)}function Kh(t,i,a,l,f){a=a.render;var h=i.ref;return ys(i,f),l=Hc(t,i,a,l,h,f),a=Gc(),t!==null&&!Pn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Bi(t,i,f)):(zt&&a&&wc(i),i.flags|=1,Sn(t,i,l,f),i.child)}function Zh(t,i,a,l,f){if(t===null){var h=a.type;return typeof h=="function"&&!xu(h)&&h.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=h,Qh(t,i,h,l,f)):(t=$o(a.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&f)===0){var E=h.memoizedProps;if(a=a.compare,a=a!==null?a:ua,a(E,l)&&t.ref===i.ref)return Bi(t,i,f)}return i.flags|=1,t=xr(h,l),t.ref=i.ref,t.return=i,i.child=t}function Qh(t,i,a,l,f){if(t!==null){var h=t.memoizedProps;if(ua(h,l)&&t.ref===i.ref)if(Pn=!1,i.pendingProps=l=h,(t.lanes&f)!==0)(t.flags&131072)!==0&&(Pn=!0);else return i.lanes=t.lanes,Bi(t,i,f)}return Qc(t,i,a,l,f)}function Jh(t,i,a){var l=i.pendingProps,f=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ut(Ts,zn),zn|=a;else{if((a&1073741824)===0)return t=h!==null?h.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Ut(Ts,zn),zn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:a,Ut(Ts,zn),zn|=l}else h!==null?(l=h.baseLanes|a,i.memoizedState=null):l=a,Ut(Ts,zn),zn|=l;return Sn(t,i,f,a),i.child}function ep(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Qc(t,i,a,l,f){var h=Rn(a)?Ir:un.current;return h=ps(i,h),ys(i,f),a=Hc(t,i,a,l,h,f),l=Gc(),t!==null&&!Pn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Bi(t,i,f)):(zt&&l&&wc(i),i.flags|=1,Sn(t,i,a,f),i.child)}function tp(t,i,a,l,f){if(Rn(a)){var h=!0;yo(i)}else h=!1;if(ys(i,f),i.stateNode===null)ko(t,i),Gh(i,a,l),$c(i,a,l,f),l=!0;else if(t===null){var E=i.stateNode,D=i.memoizedProps;E.props=D;var B=E.context,se=a.contextType;typeof se=="object"&&se!==null?se=$n(se):(se=Rn(a)?Ir:un.current,se=ps(i,se));var ve=a.getDerivedStateFromProps,xe=typeof ve=="function"||typeof E.getSnapshotBeforeUpdate=="function";xe||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(D!==l||B!==se)&&Wh(i,E,l,se),dr=!1;var _e=i.memoizedState;E.state=_e,Ro(i,l,E,f),B=i.memoizedState,D!==l||_e!==B||Cn.current||dr?(typeof ve=="function"&&(Yc(i,a,ve,l),B=i.memoizedState),(D=dr||Hh(i,a,D,l,_e,B,se))?(xe||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=B),E.props=l,E.state=B,E.context=se,l=D):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{E=i.stateNode,_h(t,i),D=i.memoizedProps,se=i.type===i.elementType?D:oi(i.type,D),E.props=se,xe=i.pendingProps,_e=E.context,B=a.contextType,typeof B=="object"&&B!==null?B=$n(B):(B=Rn(a)?Ir:un.current,B=ps(i,B));var Ie=a.getDerivedStateFromProps;(ve=typeof Ie=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(D!==xe||_e!==B)&&Wh(i,E,l,B),dr=!1,_e=i.memoizedState,E.state=_e,Ro(i,l,E,f);var Ve=i.memoizedState;D!==xe||_e!==Ve||Cn.current||dr?(typeof Ie=="function"&&(Yc(i,a,Ie,l),Ve=i.memoizedState),(se=dr||Hh(i,a,se,l,_e,Ve,B)||!1)?(ve||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(l,Ve,B),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(l,Ve,B)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||D===t.memoizedProps&&_e===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&_e===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Ve),E.props=l,E.state=Ve,E.context=B,l=se):(typeof E.componentDidUpdate!="function"||D===t.memoizedProps&&_e===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&_e===t.memoizedState||(i.flags|=1024),l=!1)}return Jc(t,i,a,l,h,f)}function Jc(t,i,a,l,f,h){ep(t,i);var E=(i.flags&128)!==0;if(!l&&!E)return f&&ah(i,a,!1),Bi(t,i,h);l=i.stateNode,X0.current=i;var D=E&&typeof a.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&E?(i.child=vs(i,t.child,null,h),i.child=vs(i,null,D,h)):Sn(t,i,D,h),i.memoizedState=l.state,f&&ah(i,a,!0),i.child}function np(t){var i=t.stateNode;i.pendingContext?rh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&rh(t,i.context,!1),Fc(t,i.containerInfo)}function ip(t,i,a,l,f){return _s(),Rc(f),i.flags|=256,Sn(t,i,a,l),i.child}var eu={dehydrated:null,treeContext:null,retryLane:0};function tu(t){return{baseLanes:t,cachePool:null,transitions:null}}function rp(t,i,a){var l=i.pendingProps,f=Vt.current,h=!1,E=(i.flags&128)!==0,D;if((D=E)||(D=t!==null&&t.memoizedState===null?!1:(f&2)!==0),D?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Ut(Vt,f&1),t===null)return Cc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=l.children,t=l.fallback,h?(l=i.mode,h=i.child,E={mode:"hidden",children:E},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=E):h=Ko(E,l,0,null),t=Wr(t,l,a,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=tu(a),i.memoizedState=eu,t):nu(i,E));if(f=t.memoizedState,f!==null&&(D=f.dehydrated,D!==null))return j0(t,i,E,l,D,f,a);if(h){h=l.fallback,E=i.mode,f=t.child,D=f.sibling;var B={mode:"hidden",children:l.children};return(E&1)===0&&i.child!==f?(l=i.child,l.childLanes=0,l.pendingProps=B,i.deletions=null):(l=xr(f,B),l.subtreeFlags=f.subtreeFlags&14680064),D!==null?h=xr(D,h):(h=Wr(h,E,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,E=t.child.memoizedState,E=E===null?tu(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},h.memoizedState=E,h.childLanes=t.childLanes&~a,i.memoizedState=eu,l}return h=t.child,t=h.sibling,l=xr(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=a),l.return=i,l.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=l,i.memoizedState=null,l}function nu(t,i){return i=Ko({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Oo(t,i,a,l){return l!==null&&Rc(l),vs(i,t.child,null,a),t=nu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function j0(t,i,a,l,f,h,E){if(a)return i.flags&256?(i.flags&=-257,l=Kc(Error(n(422))),Oo(t,i,E,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,f=i.mode,l=Ko({mode:"visible",children:l.children},f,0,null),h=Wr(h,f,E,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&vs(i,t.child,null,E),i.child.memoizedState=tu(E),i.memoizedState=eu,h);if((i.mode&1)===0)return Oo(t,i,E,null);if(f.data==="$!"){if(l=f.nextSibling&&f.nextSibling.dataset,l)var D=l.dgst;return l=D,h=Error(n(419)),l=Kc(h,l,void 0),Oo(t,i,E,l)}if(D=(E&t.childLanes)!==0,Pn||D){if(l=rn,l!==null){switch(E&-E){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(l.suspendedLanes|E))!==0?0:f,f!==0&&f!==h.retryLane&&(h.retryLane=f,Oi(t,f),ui(l,t,f,-1))}return vu(),l=Kc(Error(n(421))),Oo(t,i,E,l)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=s_.bind(null,t),f._reactRetry=i,null):(t=h.treeContext,Bn=lr(f.nextSibling),kn=i,zt=!0,ai=null,t!==null&&(qn[Yn++]=Ui,qn[Yn++]=Fi,qn[Yn++]=Ur,Ui=t.id,Fi=t.overflow,Ur=i),i=nu(i,l.children),i.flags|=4096,i)}function sp(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Nc(t.return,i,a)}function iu(t,i,a,l,f){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:f}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=a,h.tailMode=f)}function ap(t,i,a){var l=i.pendingProps,f=l.revealOrder,h=l.tail;if(Sn(t,i,l.children,a),l=Vt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&sp(t,a,i);else if(t.tag===19)sp(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Ut(Vt,l),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)t=a.alternate,t!==null&&Po(t)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),iu(i,!1,f,a,h);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Po(t)===null){i.child=f;break}t=f.sibling,f.sibling=a,a=f,f=t}iu(i,!0,a,null,h);break;case"together":iu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ko(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Bi(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),zr|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=xr(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=xr(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function q0(t,i,a){switch(i.tag){case 3:np(i),_s();break;case 5:yh(i);break;case 1:Rn(i.type)&&yo(i);break;case 4:Fc(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,f=i.memoizedProps.value;Ut(Ao,l._currentValue),l._currentValue=f;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Ut(Vt,Vt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?rp(t,i,a):(Ut(Vt,Vt.current&1),t=Bi(t,i,a),t!==null?t.sibling:null);Ut(Vt,Vt.current&1);break;case 19:if(l=(a&i.childLanes)!==0,(t.flags&128)!==0){if(l)return ap(t,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ut(Vt,Vt.current),l)break;return null;case 22:case 23:return i.lanes=0,Jh(t,i,a)}return Bi(t,i,a)}var op,ru,lp,cp;op=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},ru=function(){},lp=function(t,i,a,l){var f=t.memoizedProps;if(f!==l){t=i.stateNode,kr(xi.current);var h=null;switch(a){case"input":f=xt(t,f),l=xt(t,l),h=[];break;case"select":f=ce({},f,{value:void 0}),l=ce({},l,{value:void 0}),h=[];break;case"textarea":f=Ge(t,f),l=Ge(t,l),h=[];break;default:typeof f.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=_o)}Be(a,l);var E;a=null;for(se in f)if(!l.hasOwnProperty(se)&&f.hasOwnProperty(se)&&f[se]!=null)if(se==="style"){var D=f[se];for(E in D)D.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else se!=="dangerouslySetInnerHTML"&&se!=="children"&&se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&se!=="autoFocus"&&(o.hasOwnProperty(se)?h||(h=[]):(h=h||[]).push(se,null));for(se in l){var B=l[se];if(D=f!=null?f[se]:void 0,l.hasOwnProperty(se)&&B!==D&&(B!=null||D!=null))if(se==="style")if(D){for(E in D)!D.hasOwnProperty(E)||B&&B.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in B)B.hasOwnProperty(E)&&D[E]!==B[E]&&(a||(a={}),a[E]=B[E])}else a||(h||(h=[]),h.push(se,a)),a=B;else se==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,D=D?D.__html:void 0,B!=null&&D!==B&&(h=h||[]).push(se,B)):se==="children"?typeof B!="string"&&typeof B!="number"||(h=h||[]).push(se,""+B):se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&(o.hasOwnProperty(se)?(B!=null&&se==="onScroll"&&Ot("scroll",t),h||D===B||(h=[])):(h=h||[]).push(se,B))}a&&(h=h||[]).push("style",a);var se=h;(i.updateQueue=se)&&(i.flags|=4)}},cp=function(t,i,a,l){a!==l&&(i.flags|=4)};function wa(t,i){if(!zt)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function dn(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var f=t.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags&14680064,l|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function Y0(t,i,a){var l=i.pendingProps;switch(Ac(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(i),null;case 1:return Rn(i.type)&&xo(),dn(i),null;case 3:return l=i.stateNode,Ss(),kt(Cn),kt(un),Bc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(To(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ai!==null&&(mu(ai),ai=null))),ru(t,i),dn(i),null;case 5:Oc(i);var f=kr(ya.current);if(a=i.type,t!==null&&i.stateNode!=null)lp(t,i,a,l,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return dn(i),null}if(t=kr(xi.current),To(i)){l=i.stateNode,a=i.type;var h=i.memoizedProps;switch(l[vi]=i,l[ma]=h,t=(i.mode&1)!==0,a){case"dialog":Ot("cancel",l),Ot("close",l);break;case"iframe":case"object":case"embed":Ot("load",l);break;case"video":case"audio":for(f=0;f<da.length;f++)Ot(da[f],l);break;case"source":Ot("error",l);break;case"img":case"image":case"link":Ot("error",l),Ot("load",l);break;case"details":Ot("toggle",l);break;case"input":bt(l,h),Ot("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Ot("invalid",l);break;case"textarea":P(l,h),Ot("invalid",l)}Be(a,h),f=null;for(var E in h)if(h.hasOwnProperty(E)){var D=h[E];E==="children"?typeof D=="string"?l.textContent!==D&&(h.suppressHydrationWarning!==!0&&go(l.textContent,D,t),f=["children",D]):typeof D=="number"&&l.textContent!==""+D&&(h.suppressHydrationWarning!==!0&&go(l.textContent,D,t),f=["children",""+D]):o.hasOwnProperty(E)&&D!=null&&E==="onScroll"&&Ot("scroll",l)}switch(a){case"input":nt(l),z(l,h,!0);break;case"textarea":nt(l),W(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=_o)}l=f,i.updateQueue=l,l!==null&&(i.flags|=4)}else{E=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=he(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=E.createElement(a,{is:l.is}):(t=E.createElement(a),a==="select"&&(E=t,l.multiple?E.multiple=!0:l.size&&(E.size=l.size))):t=E.createElementNS(t,a),t[vi]=i,t[ma]=l,op(t,i,!1,!1),i.stateNode=t;e:{switch(E=Le(a,l),a){case"dialog":Ot("cancel",t),Ot("close",t),f=l;break;case"iframe":case"object":case"embed":Ot("load",t),f=l;break;case"video":case"audio":for(f=0;f<da.length;f++)Ot(da[f],t);f=l;break;case"source":Ot("error",t),f=l;break;case"img":case"image":case"link":Ot("error",t),Ot("load",t),f=l;break;case"details":Ot("toggle",t),f=l;break;case"input":bt(t,l),f=xt(t,l),Ot("invalid",t);break;case"option":f=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},f=ce({},l,{value:void 0}),Ot("invalid",t);break;case"textarea":P(t,l),f=Ge(t,l),Ot("invalid",t);break;default:f=l}Be(a,f),D=f;for(h in D)if(D.hasOwnProperty(h)){var B=D[h];h==="style"?Te(t,B):h==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&ke(t,B)):h==="children"?typeof B=="string"?(a!=="textarea"||B!=="")&&we(t,B):typeof B=="number"&&we(t,""+B):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(o.hasOwnProperty(h)?B!=null&&h==="onScroll"&&Ot("scroll",t):B!=null&&N(t,h,B,E))}switch(a){case"input":nt(t),z(t,l,!1);break;case"textarea":nt(t),W(t);break;case"option":l.value!=null&&t.setAttribute("value",""+pe(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?yt(t,!!l.multiple,h,!1):l.defaultValue!=null&&yt(t,!!l.multiple,l.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=_o)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return dn(i),null;case 6:if(t&&i.stateNode!=null)cp(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(a=kr(ya.current),kr(xi.current),To(i)){if(l=i.stateNode,a=i.memoizedProps,l[vi]=i,(h=l.nodeValue!==a)&&(t=kn,t!==null))switch(t.tag){case 3:go(l.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&go(l.nodeValue,a,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[vi]=i,i.stateNode=l}return dn(i),null;case 13:if(kt(Vt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(zt&&Bn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)dh(),_s(),i.flags|=98560,h=!1;else if(h=To(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[vi]=i}else _s(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;dn(i),h=!1}else ai!==null&&(mu(ai),ai=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Vt.current&1)!==0?Jt===0&&(Jt=3):vu())),i.updateQueue!==null&&(i.flags|=4),dn(i),null);case 4:return Ss(),ru(t,i),t===null&&ha(i.stateNode.containerInfo),dn(i),null;case 10:return Dc(i.type._context),dn(i),null;case 17:return Rn(i.type)&&xo(),dn(i),null;case 19:if(kt(Vt),h=i.memoizedState,h===null)return dn(i),null;if(l=(i.flags&128)!==0,E=h.rendering,E===null)if(l)wa(h,!1);else{if(Jt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(E=Po(t),E!==null){for(i.flags|=128,wa(h,!1),l=E.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=a,a=i.child;a!==null;)h=a,t=l,h.flags&=14680066,E=h.alternate,E===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=E.childLanes,h.lanes=E.lanes,h.child=E.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=E.memoizedProps,h.memoizedState=E.memoizedState,h.updateQueue=E.updateQueue,h.type=E.type,t=E.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Ut(Vt,Vt.current&1|2),i.child}t=t.sibling}h.tail!==null&&A()>ws&&(i.flags|=128,l=!0,wa(h,!1),i.lanes=4194304)}else{if(!l)if(t=Po(E),t!==null){if(i.flags|=128,l=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),wa(h,!0),h.tail===null&&h.tailMode==="hidden"&&!E.alternate&&!zt)return dn(i),null}else 2*A()-h.renderingStartTime>ws&&a!==1073741824&&(i.flags|=128,l=!0,wa(h,!1),i.lanes=4194304);h.isBackwards?(E.sibling=i.child,i.child=E):(a=h.last,a!==null?a.sibling=E:i.child=E,h.last=E)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=A(),i.sibling=null,a=Vt.current,Ut(Vt,l?a&1|2:a&1),i):(dn(i),null);case 22:case 23:return _u(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(zn&1073741824)!==0&&(dn(i),i.subtreeFlags&6&&(i.flags|=8192)):dn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function $0(t,i){switch(Ac(i),i.tag){case 1:return Rn(i.type)&&xo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ss(),kt(Cn),kt(un),Bc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Oc(i),null;case 13:if(kt(Vt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));_s()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return kt(Vt),null;case 4:return Ss(),null;case 10:return Dc(i.type._context),null;case 22:case 23:return _u(),null;case 24:return null;default:return null}}var Bo=!1,hn=!1,K0=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function Es(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){Gt(t,i,l)}else a.current=null}function su(t,i,a){try{a()}catch(l){Gt(t,i,l)}}var up=!1;function Z0(t,i){if(_c=ro,t=Hd(),cc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var f=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var E=0,D=-1,B=-1,se=0,ve=0,xe=t,_e=null;t:for(;;){for(var Ie;xe!==a||f!==0&&xe.nodeType!==3||(D=E+f),xe!==h||l!==0&&xe.nodeType!==3||(B=E+l),xe.nodeType===3&&(E+=xe.nodeValue.length),(Ie=xe.firstChild)!==null;)_e=xe,xe=Ie;for(;;){if(xe===t)break t;if(_e===a&&++se===f&&(D=E),_e===h&&++ve===l&&(B=E),(Ie=xe.nextSibling)!==null)break;xe=_e,_e=xe.parentNode}xe=Ie}a=D===-1||B===-1?null:{start:D,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(vc={focusedElem:t,selectionRange:a},ro=!1,Oe=i;Oe!==null;)if(i=Oe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Oe=t;else for(;Oe!==null;){i=Oe;try{var Ve=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ve!==null){var je=Ve.memoizedProps,Yt=Ve.memoizedState,Y=i.stateNode,G=Y.getSnapshotBeforeUpdate(i.elementType===i.type?je:oi(i.type,je),Yt);Y.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var ee=i.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){Gt(i,i.return,Ee)}if(t=i.sibling,t!==null){t.return=i.return,Oe=t;break}Oe=i.return}return Ve=up,up=!1,Ve}function Aa(t,i,a){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var f=l=l.next;do{if((f.tag&t)===t){var h=f.destroy;f.destroy=void 0,h!==void 0&&su(i,a,h)}f=f.next}while(f!==l)}}function zo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var l=a.create;a.destroy=l()}a=a.next}while(a!==i)}}function au(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function fp(t){var i=t.alternate;i!==null&&(t.alternate=null,fp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[vi],delete i[ma],delete i[Mc],delete i[N0],delete i[I0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function dp(t){return t.tag===5||t.tag===3||t.tag===4}function hp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||dp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ou(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=_o));else if(l!==4&&(t=t.child,t!==null))for(ou(t,i,a),t=t.sibling;t!==null;)ou(t,i,a),t=t.sibling}function lu(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(lu(t,i,a),t=t.sibling;t!==null;)lu(t,i,a),t=t.sibling}var on=null,li=!1;function pr(t,i,a){for(a=a.child;a!==null;)pp(t,i,a),a=a.sibling}function pp(t,i,a){if(Ne&&typeof Ne.onCommitFiberUnmount=="function")try{Ne.onCommitFiberUnmount(Ce,a)}catch{}switch(a.tag){case 5:hn||Es(a,i);case 6:var l=on,f=li;on=null,pr(t,i,a),on=l,li=f,on!==null&&(li?(t=on,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):on.removeChild(a.stateNode));break;case 18:on!==null&&(li?(t=on,a=a.stateNode,t.nodeType===8?Sc(t.parentNode,a):t.nodeType===1&&Sc(t,a),ra(t)):Sc(on,a.stateNode));break;case 4:l=on,f=li,on=a.stateNode.containerInfo,li=!0,pr(t,i,a),on=l,li=f;break;case 0:case 11:case 14:case 15:if(!hn&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){f=l=l.next;do{var h=f,E=h.destroy;h=h.tag,E!==void 0&&((h&2)!==0||(h&4)!==0)&&su(a,i,E),f=f.next}while(f!==l)}pr(t,i,a);break;case 1:if(!hn&&(Es(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(D){Gt(a,i,D)}pr(t,i,a);break;case 21:pr(t,i,a);break;case 22:a.mode&1?(hn=(l=hn)||a.memoizedState!==null,pr(t,i,a),hn=l):pr(t,i,a);break;default:pr(t,i,a)}}function mp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new K0),i.forEach(function(l){var f=a_.bind(null,t,l);a.has(l)||(a.add(l),l.then(f,f))})}}function ci(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var f=a[l];try{var h=t,E=i,D=E;e:for(;D!==null;){switch(D.tag){case 5:on=D.stateNode,li=!1;break e;case 3:on=D.stateNode.containerInfo,li=!0;break e;case 4:on=D.stateNode.containerInfo,li=!0;break e}D=D.return}if(on===null)throw Error(n(160));pp(h,E,f),on=null,li=!1;var B=f.alternate;B!==null&&(B.return=null),f.return=null}catch(se){Gt(f,i,se)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)gp(i,t),i=i.sibling}function gp(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ci(i,t),Si(t),l&4){try{Aa(3,t,t.return),zo(3,t)}catch(je){Gt(t,t.return,je)}try{Aa(5,t,t.return)}catch(je){Gt(t,t.return,je)}}break;case 1:ci(i,t),Si(t),l&512&&a!==null&&Es(a,a.return);break;case 5:if(ci(i,t),Si(t),l&512&&a!==null&&Es(a,a.return),t.flags&32){var f=t.stateNode;try{we(f,"")}catch(je){Gt(t,t.return,je)}}if(l&4&&(f=t.stateNode,f!=null)){var h=t.memoizedProps,E=a!==null?a.memoizedProps:h,D=t.type,B=t.updateQueue;if(t.updateQueue=null,B!==null)try{D==="input"&&h.type==="radio"&&h.name!=null&&ct(f,h),Le(D,E);var se=Le(D,h);for(E=0;E<B.length;E+=2){var ve=B[E],xe=B[E+1];ve==="style"?Te(f,xe):ve==="dangerouslySetInnerHTML"?ke(f,xe):ve==="children"?we(f,xe):N(f,ve,xe,se)}switch(D){case"input":Ft(f,h);break;case"textarea":M(f,h);break;case"select":var _e=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!h.multiple;var Ie=h.value;Ie!=null?yt(f,!!h.multiple,Ie,!1):_e!==!!h.multiple&&(h.defaultValue!=null?yt(f,!!h.multiple,h.defaultValue,!0):yt(f,!!h.multiple,h.multiple?[]:"",!1))}f[ma]=h}catch(je){Gt(t,t.return,je)}}break;case 6:if(ci(i,t),Si(t),l&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,h=t.memoizedProps;try{f.nodeValue=h}catch(je){Gt(t,t.return,je)}}break;case 3:if(ci(i,t),Si(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{ra(i.containerInfo)}catch(je){Gt(t,t.return,je)}break;case 4:ci(i,t),Si(t);break;case 13:ci(i,t),Si(t),f=t.child,f.flags&8192&&(h=f.memoizedState!==null,f.stateNode.isHidden=h,!h||f.alternate!==null&&f.alternate.memoizedState!==null||(fu=A())),l&4&&mp(t);break;case 22:if(ve=a!==null&&a.memoizedState!==null,t.mode&1?(hn=(se=hn)||ve,ci(i,t),hn=se):ci(i,t),Si(t),l&8192){if(se=t.memoizedState!==null,(t.stateNode.isHidden=se)&&!ve&&(t.mode&1)!==0)for(Oe=t,ve=t.child;ve!==null;){for(xe=Oe=ve;Oe!==null;){switch(_e=Oe,Ie=_e.child,_e.tag){case 0:case 11:case 14:case 15:Aa(4,_e,_e.return);break;case 1:Es(_e,_e.return);var Ve=_e.stateNode;if(typeof Ve.componentWillUnmount=="function"){l=_e,a=_e.return;try{i=l,Ve.props=i.memoizedProps,Ve.state=i.memoizedState,Ve.componentWillUnmount()}catch(je){Gt(l,a,je)}}break;case 5:Es(_e,_e.return);break;case 22:if(_e.memoizedState!==null){xp(xe);continue}}Ie!==null?(Ie.return=_e,Oe=Ie):xp(xe)}ve=ve.sibling}e:for(ve=null,xe=t;;){if(xe.tag===5){if(ve===null){ve=xe;try{f=xe.stateNode,se?(h=f.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(D=xe.stateNode,B=xe.memoizedProps.style,E=B!=null&&B.hasOwnProperty("display")?B.display:null,D.style.display=ye("display",E))}catch(je){Gt(t,t.return,je)}}}else if(xe.tag===6){if(ve===null)try{xe.stateNode.nodeValue=se?"":xe.memoizedProps}catch(je){Gt(t,t.return,je)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===t)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===t)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===t)break e;ve===xe&&(ve=null),xe=xe.return}ve===xe&&(ve=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:ci(i,t),Si(t),l&4&&mp(t);break;case 21:break;default:ci(i,t),Si(t)}}function Si(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(dp(a)){var l=a;break e}a=a.return}throw Error(n(160))}switch(l.tag){case 5:var f=l.stateNode;l.flags&32&&(we(f,""),l.flags&=-33);var h=hp(t);lu(t,h,f);break;case 3:case 4:var E=l.stateNode.containerInfo,D=hp(t);ou(t,D,E);break;default:throw Error(n(161))}}catch(B){Gt(t,t.return,B)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Q0(t,i,a){Oe=t,_p(t)}function _p(t,i,a){for(var l=(t.mode&1)!==0;Oe!==null;){var f=Oe,h=f.child;if(f.tag===22&&l){var E=f.memoizedState!==null||Bo;if(!E){var D=f.alternate,B=D!==null&&D.memoizedState!==null||hn;D=Bo;var se=hn;if(Bo=E,(hn=B)&&!se)for(Oe=f;Oe!==null;)E=Oe,B=E.child,E.tag===22&&E.memoizedState!==null?yp(f):B!==null?(B.return=E,Oe=B):yp(f);for(;h!==null;)Oe=h,_p(h),h=h.sibling;Oe=f,Bo=D,hn=se}vp(t)}else(f.subtreeFlags&8772)!==0&&h!==null?(h.return=f,Oe=h):vp(t)}}function vp(t){for(;Oe!==null;){var i=Oe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:hn||zo(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!hn)if(a===null)l.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:oi(i.type,a.memoizedProps);l.componentDidUpdate(f,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&xh(i,h,l);break;case 3:var E=i.updateQueue;if(E!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}xh(i,E,a)}break;case 5:var D=i.stateNode;if(a===null&&i.flags&4){a=D;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&a.focus();break;case"img":B.src&&(a.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var se=i.alternate;if(se!==null){var ve=se.memoizedState;if(ve!==null){var xe=ve.dehydrated;xe!==null&&ra(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}hn||i.flags&512&&au(i)}catch(_e){Gt(i,i.return,_e)}}if(i===t){Oe=null;break}if(a=i.sibling,a!==null){a.return=i.return,Oe=a;break}Oe=i.return}}function xp(t){for(;Oe!==null;){var i=Oe;if(i===t){Oe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Oe=a;break}Oe=i.return}}function yp(t){for(;Oe!==null;){var i=Oe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{zo(4,i)}catch(B){Gt(i,a,B)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var f=i.return;try{l.componentDidMount()}catch(B){Gt(i,f,B)}}var h=i.return;try{au(i)}catch(B){Gt(i,h,B)}break;case 5:var E=i.return;try{au(i)}catch(B){Gt(i,E,B)}}}catch(B){Gt(i,i.return,B)}if(i===t){Oe=null;break}var D=i.sibling;if(D!==null){D.return=i.return,Oe=D;break}Oe=i.return}}var J0=Math.ceil,Vo=L.ReactCurrentDispatcher,cu=L.ReactCurrentOwner,Zn=L.ReactCurrentBatchConfig,Mt=0,rn=null,Kt=null,ln=0,zn=0,Ts=cr(0),Jt=0,ba=null,zr=0,Ho=0,uu=0,Ca=null,Ln=null,fu=0,ws=1/0,zi=null,Go=!1,du=null,mr=null,Wo=!1,gr=null,Xo=0,Ra=0,hu=null,jo=-1,qo=0;function Mn(){return(Mt&6)!==0?A():jo!==-1?jo:jo=A()}function _r(t){return(t.mode&1)===0?1:(Mt&2)!==0&&ln!==0?ln&-ln:F0.transition!==null?(qo===0&&(qo=An()),qo):(t=st,t!==0||(t=window.event,t=t===void 0?16:Md(t.type)),t)}function ui(t,i,a,l){if(50<Ra)throw Ra=0,hu=null,Error(n(185));Fn(t,a,l),((Mt&2)===0||t!==rn)&&(t===rn&&((Mt&2)===0&&(Ho|=a),Jt===4&&vr(t,ln)),Dn(t,l),a===1&&Mt===0&&(i.mode&1)===0&&(ws=A()+500,So&&fr()))}function Dn(t,i){var a=t.callbackNode;yn(t,i);var l=jt(t,t===rn?ln:0);if(l===0)a!==null&&to(a),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(a!=null&&to(a),i===1)t.tag===0?U0(Mp.bind(null,t)):oh(Mp.bind(null,t)),L0(function(){(Mt&6)===0&&fr()}),a=null;else{switch(ri(l)){case 1:a=ae;break;case 4:a=te;break;case 16:a=Q;break;case 536870912:a=Ue;break;default:a=Q}a=Pp(a,Sp.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function Sp(t,i){if(jo=-1,qo=0,(Mt&6)!==0)throw Error(n(327));var a=t.callbackNode;if(As()&&t.callbackNode!==a)return null;var l=jt(t,t===rn?ln:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Yo(t,l);else{i=l;var f=Mt;Mt|=2;var h=Tp();(rn!==t||ln!==i)&&(zi=null,ws=A()+500,Hr(t,i));do try{n_();break}catch(D){Ep(t,D)}while(!0);Lc(),Vo.current=h,Mt=f,Kt!==null?i=0:(rn=null,ln=0,i=Jt)}if(i!==0){if(i===2&&(f=gt(t),f!==0&&(l=f,i=pu(t,f))),i===1)throw a=ba,Hr(t,0),vr(t,l),Dn(t,A()),a;if(i===6)vr(t,l);else{if(f=t.current.alternate,(l&30)===0&&!e_(f)&&(i=Yo(t,l),i===2&&(h=gt(t),h!==0&&(l=h,i=pu(t,h))),i===1))throw a=ba,Hr(t,0),vr(t,l),Dn(t,A()),a;switch(t.finishedWork=f,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Gr(t,Ln,zi);break;case 3:if(vr(t,l),(l&130023424)===l&&(i=fu+500-A(),10<i)){if(jt(t,0)!==0)break;if(f=t.suspendedLanes,(f&l)!==l){Mn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=yc(Gr.bind(null,t,Ln,zi),i);break}Gr(t,Ln,zi);break;case 4:if(vr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,f=-1;0<l;){var E=31-Je(l);h=1<<E,E=i[E],E>f&&(f=E),l&=~h}if(l=f,l=A()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*J0(l/1960))-l,10<l){t.timeoutHandle=yc(Gr.bind(null,t,Ln,zi),l);break}Gr(t,Ln,zi);break;case 5:Gr(t,Ln,zi);break;default:throw Error(n(329))}}}return Dn(t,A()),t.callbackNode===a?Sp.bind(null,t):null}function pu(t,i){var a=Ca;return t.current.memoizedState.isDehydrated&&(Hr(t,i).flags|=256),t=Yo(t,i),t!==2&&(i=Ln,Ln=a,i!==null&&mu(i)),t}function mu(t){Ln===null?Ln=t:Ln.push.apply(Ln,t)}function e_(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var f=a[l],h=f.getSnapshot;f=f.value;try{if(!si(h(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function vr(t,i){for(i&=~uu,i&=~Ho,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-Je(i),l=1<<a;t[a]=-1,i&=~l}}function Mp(t){if((Mt&6)!==0)throw Error(n(327));As();var i=jt(t,0);if((i&1)===0)return Dn(t,A()),null;var a=Yo(t,i);if(t.tag!==0&&a===2){var l=gt(t);l!==0&&(i=l,a=pu(t,l))}if(a===1)throw a=ba,Hr(t,0),vr(t,i),Dn(t,A()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Gr(t,Ln,zi),Dn(t,A()),null}function gu(t,i){var a=Mt;Mt|=1;try{return t(i)}finally{Mt=a,Mt===0&&(ws=A()+500,So&&fr())}}function Vr(t){gr!==null&&gr.tag===0&&(Mt&6)===0&&As();var i=Mt;Mt|=1;var a=Zn.transition,l=st;try{if(Zn.transition=null,st=1,t)return t()}finally{st=l,Zn.transition=a,Mt=i,(Mt&6)===0&&fr()}}function _u(){zn=Ts.current,kt(Ts)}function Hr(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,P0(a)),Kt!==null)for(a=Kt.return;a!==null;){var l=a;switch(Ac(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&xo();break;case 3:Ss(),kt(Cn),kt(un),Bc();break;case 5:Oc(l);break;case 4:Ss();break;case 13:kt(Vt);break;case 19:kt(Vt);break;case 10:Dc(l.type._context);break;case 22:case 23:_u()}a=a.return}if(rn=t,Kt=t=xr(t.current,null),ln=zn=i,Jt=0,ba=null,uu=Ho=zr=0,Ln=Ca=null,Or!==null){for(i=0;i<Or.length;i++)if(a=Or[i],l=a.interleaved,l!==null){a.interleaved=null;var f=l.next,h=a.pending;if(h!==null){var E=h.next;h.next=f,l.next=E}a.pending=l}Or=null}return t}function Ep(t,i){do{var a=Kt;try{if(Lc(),Lo.current=Uo,Do){for(var l=Ht.memoizedState;l!==null;){var f=l.queue;f!==null&&(f.pending=null),l=l.next}Do=!1}if(Br=0,nn=Qt=Ht=null,Sa=!1,Ma=0,cu.current=null,a===null||a.return===null){Jt=1,ba=i,Kt=null;break}e:{var h=t,E=a.return,D=a,B=i;if(i=ln,D.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var se=B,ve=D,xe=ve.tag;if((ve.mode&1)===0&&(xe===0||xe===11||xe===15)){var _e=ve.alternate;_e?(ve.updateQueue=_e.updateQueue,ve.memoizedState=_e.memoizedState,ve.lanes=_e.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Ie=Yh(E);if(Ie!==null){Ie.flags&=-257,$h(Ie,E,D,h,i),Ie.mode&1&&qh(h,se,i),i=Ie,B=se;var Ve=i.updateQueue;if(Ve===null){var je=new Set;je.add(B),i.updateQueue=je}else Ve.add(B);break e}else{if((i&1)===0){qh(h,se,i),vu();break e}B=Error(n(426))}}else if(zt&&D.mode&1){var Yt=Yh(E);if(Yt!==null){(Yt.flags&65536)===0&&(Yt.flags|=256),$h(Yt,E,D,h,i),Rc(Ms(B,D));break e}}h=B=Ms(B,D),Jt!==4&&(Jt=2),Ca===null?Ca=[h]:Ca.push(h),h=E;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var Y=Xh(h,B,i);vh(h,Y);break e;case 1:D=B;var G=h.type,ee=h.stateNode;if((h.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(mr===null||!mr.has(ee)))){h.flags|=65536,i&=-i,h.lanes|=i;var Ee=jh(h,D,i);vh(h,Ee);break e}}h=h.return}while(h!==null)}Ap(a)}catch($e){i=$e,Kt===a&&a!==null&&(Kt=a=a.return);continue}break}while(!0)}function Tp(){var t=Vo.current;return Vo.current=Uo,t===null?Uo:t}function vu(){(Jt===0||Jt===3||Jt===2)&&(Jt=4),rn===null||(zr&268435455)===0&&(Ho&268435455)===0||vr(rn,ln)}function Yo(t,i){var a=Mt;Mt|=2;var l=Tp();(rn!==t||ln!==i)&&(zi=null,Hr(t,i));do try{t_();break}catch(f){Ep(t,f)}while(!0);if(Lc(),Mt=a,Vo.current=l,Kt!==null)throw Error(n(261));return rn=null,ln=0,Jt}function t_(){for(;Kt!==null;)wp(Kt)}function n_(){for(;Kt!==null&&!$l();)wp(Kt)}function wp(t){var i=Rp(t.alternate,t,zn);t.memoizedProps=t.pendingProps,i===null?Ap(t):Kt=i,cu.current=null}function Ap(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=Y0(a,i,zn),a!==null){Kt=a;return}}else{if(a=$0(a,i),a!==null){a.flags&=32767,Kt=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Jt=6,Kt=null;return}}if(i=i.sibling,i!==null){Kt=i;return}Kt=i=t}while(i!==null);Jt===0&&(Jt=5)}function Gr(t,i,a){var l=st,f=Zn.transition;try{Zn.transition=null,st=1,i_(t,i,a,l)}finally{Zn.transition=f,st=l}return null}function i_(t,i,a,l){do As();while(gr!==null);if((Mt&6)!==0)throw Error(n(327));a=t.finishedWork;var f=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=a.lanes|a.childLanes;if(tr(t,h),t===rn&&(Kt=rn=null,ln=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Wo||(Wo=!0,Pp(Q,function(){return As(),null})),h=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||h){h=Zn.transition,Zn.transition=null;var E=st;st=1;var D=Mt;Mt|=4,cu.current=null,Z0(t,a),gp(a,t),E0(vc),ro=!!_c,vc=_c=null,t.current=a,Q0(a),Kl(),Mt=D,st=E,Zn.transition=h}else t.current=a;if(Wo&&(Wo=!1,gr=t,Xo=f),h=t.pendingLanes,h===0&&(mr=null),Ke(a.stateNode),Dn(t,A()),i!==null)for(l=t.onRecoverableError,a=0;a<i.length;a++)f=i[a],l(f.value,{componentStack:f.stack,digest:f.digest});if(Go)throw Go=!1,t=du,du=null,t;return(Xo&1)!==0&&t.tag!==0&&As(),h=t.pendingLanes,(h&1)!==0?t===hu?Ra++:(Ra=0,hu=t):Ra=0,fr(),null}function As(){if(gr!==null){var t=ri(Xo),i=Zn.transition,a=st;try{if(Zn.transition=null,st=16>t?16:t,gr===null)var l=!1;else{if(t=gr,gr=null,Xo=0,(Mt&6)!==0)throw Error(n(331));var f=Mt;for(Mt|=4,Oe=t.current;Oe!==null;){var h=Oe,E=h.child;if((Oe.flags&16)!==0){var D=h.deletions;if(D!==null){for(var B=0;B<D.length;B++){var se=D[B];for(Oe=se;Oe!==null;){var ve=Oe;switch(ve.tag){case 0:case 11:case 15:Aa(8,ve,h)}var xe=ve.child;if(xe!==null)xe.return=ve,Oe=xe;else for(;Oe!==null;){ve=Oe;var _e=ve.sibling,Ie=ve.return;if(fp(ve),ve===se){Oe=null;break}if(_e!==null){_e.return=Ie,Oe=_e;break}Oe=Ie}}}var Ve=h.alternate;if(Ve!==null){var je=Ve.child;if(je!==null){Ve.child=null;do{var Yt=je.sibling;je.sibling=null,je=Yt}while(je!==null)}}Oe=h}}if((h.subtreeFlags&2064)!==0&&E!==null)E.return=h,Oe=E;else e:for(;Oe!==null;){if(h=Oe,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Aa(9,h,h.return)}var Y=h.sibling;if(Y!==null){Y.return=h.return,Oe=Y;break e}Oe=h.return}}var G=t.current;for(Oe=G;Oe!==null;){E=Oe;var ee=E.child;if((E.subtreeFlags&2064)!==0&&ee!==null)ee.return=E,Oe=ee;else e:for(E=G;Oe!==null;){if(D=Oe,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:zo(9,D)}}catch($e){Gt(D,D.return,$e)}if(D===E){Oe=null;break e}var Ee=D.sibling;if(Ee!==null){Ee.return=D.return,Oe=Ee;break e}Oe=D.return}}if(Mt=f,fr(),Ne&&typeof Ne.onPostCommitFiberRoot=="function")try{Ne.onPostCommitFiberRoot(Ce,t)}catch{}l=!0}return l}finally{st=a,Zn.transition=i}}return!1}function bp(t,i,a){i=Ms(a,i),i=Xh(t,i,1),t=hr(t,i,1),i=Mn(),t!==null&&(Fn(t,1,i),Dn(t,i))}function Gt(t,i,a){if(t.tag===3)bp(t,t,a);else for(;i!==null;){if(i.tag===3){bp(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(mr===null||!mr.has(l))){t=Ms(a,t),t=jh(i,t,1),i=hr(i,t,1),t=Mn(),i!==null&&(Fn(i,1,t),Dn(i,t));break}}i=i.return}}function r_(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),i=Mn(),t.pingedLanes|=t.suspendedLanes&a,rn===t&&(ln&a)===a&&(Jt===4||Jt===3&&(ln&130023424)===ln&&500>A()-fu?Hr(t,0):uu|=a),Dn(t,i)}function Cp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Nt,Nt<<=1,(Nt&130023424)===0&&(Nt=4194304)));var a=Mn();t=Oi(t,i),t!==null&&(Fn(t,i,a),Dn(t,a))}function s_(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),Cp(t,a)}function a_(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(a=f.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Cp(t,a)}var Rp;Rp=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||Cn.current)Pn=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return Pn=!1,q0(t,i,a);Pn=(t.flags&131072)!==0}else Pn=!1,zt&&(i.flags&1048576)!==0&&lh(i,Eo,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;ko(t,i),t=i.pendingProps;var f=ps(i,un.current);ys(i,a),f=Hc(null,i,l,t,f,a);var h=Gc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Rn(l)?(h=!0,yo(i)):h=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Uc(i),f.updater=Fo,i.stateNode=f,f._reactInternals=i,$c(i,l,t,a),i=Jc(null,i,l,!0,h,a)):(i.tag=0,zt&&h&&wc(i),Sn(null,i,f,a),i=i.child),i;case 16:l=i.elementType;e:{switch(ko(t,i),t=i.pendingProps,f=l._init,l=f(l._payload),i.type=l,f=i.tag=l_(l),t=oi(l,t),f){case 0:i=Qc(null,i,l,t,a);break e;case 1:i=tp(null,i,l,t,a);break e;case 11:i=Kh(null,i,l,t,a);break e;case 14:i=Zh(null,i,l,oi(l.type,t),a);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:oi(l,f),Qc(t,i,l,f,a);case 1:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:oi(l,f),tp(t,i,l,f,a);case 3:e:{if(np(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,f=h.element,_h(t,i),Ro(i,l,null,a);var E=i.memoizedState;if(l=E.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){f=Ms(Error(n(423)),i),i=ip(t,i,l,a,f);break e}else if(l!==f){f=Ms(Error(n(424)),i),i=ip(t,i,l,a,f);break e}else for(Bn=lr(i.stateNode.containerInfo.firstChild),kn=i,zt=!0,ai=null,a=mh(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(_s(),l===f){i=Bi(t,i,a);break e}Sn(t,i,l,a)}i=i.child}return i;case 5:return yh(i),t===null&&Cc(i),l=i.type,f=i.pendingProps,h=t!==null?t.memoizedProps:null,E=f.children,xc(l,f)?E=null:h!==null&&xc(l,h)&&(i.flags|=32),ep(t,i),Sn(t,i,E,a),i.child;case 6:return t===null&&Cc(i),null;case 13:return rp(t,i,a);case 4:return Fc(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=vs(i,null,l,a):Sn(t,i,l,a),i.child;case 11:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:oi(l,f),Kh(t,i,l,f,a);case 7:return Sn(t,i,i.pendingProps,a),i.child;case 8:return Sn(t,i,i.pendingProps.children,a),i.child;case 12:return Sn(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(l=i.type._context,f=i.pendingProps,h=i.memoizedProps,E=f.value,Ut(Ao,l._currentValue),l._currentValue=E,h!==null)if(si(h.value,E)){if(h.children===f.children&&!Cn.current){i=Bi(t,i,a);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var D=h.dependencies;if(D!==null){E=h.child;for(var B=D.firstContext;B!==null;){if(B.context===l){if(h.tag===1){B=ki(-1,a&-a),B.tag=2;var se=h.updateQueue;if(se!==null){se=se.shared;var ve=se.pending;ve===null?B.next=B:(B.next=ve.next,ve.next=B),se.pending=B}}h.lanes|=a,B=h.alternate,B!==null&&(B.lanes|=a),Nc(h.return,a,i),D.lanes|=a;break}B=B.next}}else if(h.tag===10)E=h.type===i.type?null:h.child;else if(h.tag===18){if(E=h.return,E===null)throw Error(n(341));E.lanes|=a,D=E.alternate,D!==null&&(D.lanes|=a),Nc(E,a,i),E=h.sibling}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===i){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}Sn(t,i,f.children,a),i=i.child}return i;case 9:return f=i.type,l=i.pendingProps.children,ys(i,a),f=$n(f),l=l(f),i.flags|=1,Sn(t,i,l,a),i.child;case 14:return l=i.type,f=oi(l,i.pendingProps),f=oi(l.type,f),Zh(t,i,l,f,a);case 15:return Qh(t,i,i.type,i.pendingProps,a);case 17:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:oi(l,f),ko(t,i),i.tag=1,Rn(l)?(t=!0,yo(i)):t=!1,ys(i,a),Gh(i,l,f),$c(i,l,f,a),Jc(null,i,l,!0,t,a);case 19:return ap(t,i,a);case 22:return Jh(t,i,a)}throw Error(n(156,i.tag))};function Pp(t,i){return eo(t,i)}function o_(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(t,i,a,l){return new o_(t,i,a,l)}function xu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function l_(t){if(typeof t=="function")return xu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===$)return 11;if(t===Z)return 14}return 2}function xr(t,i){var a=t.alternate;return a===null?(a=Qn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function $o(t,i,a,l,f,h){var E=2;if(l=t,typeof t=="function")xu(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case O:return Wr(a.children,f,h,i);case w:E=8,f|=8;break;case R:return t=Qn(12,a,i,f|2),t.elementType=R,t.lanes=h,t;case J:return t=Qn(13,a,i,f),t.elementType=J,t.lanes=h,t;case le:return t=Qn(19,a,i,f),t.elementType=le,t.lanes=h,t;case X:return Ko(a,f,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case de:E=10;break e;case I:E=9;break e;case $:E=11;break e;case Z:E=14;break e;case ie:E=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Qn(E,a,i,f),i.elementType=t,i.type=l,i.lanes=h,i}function Wr(t,i,a,l){return t=Qn(7,t,l,i),t.lanes=a,t}function Ko(t,i,a,l){return t=Qn(22,t,l,i),t.elementType=X,t.lanes=a,t.stateNode={isHidden:!1},t}function yu(t,i,a){return t=Qn(6,t,null,i),t.lanes=a,t}function Su(t,i,a){return i=Qn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function c_(t,i,a,l,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bn(0),this.expirationTimes=bn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bn(0),this.identifierPrefix=l,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Mu(t,i,a,l,f,h,E,D,B){return t=new c_(t,i,a,D,B),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Qn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uc(h),t}function u_(t,i,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:k,key:l==null?null:""+l,children:t,containerInfo:i,implementation:a}}function Lp(t){if(!t)return ur;t=t._reactInternals;e:{if(_i(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Rn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(Rn(a))return sh(t,a,i)}return i}function Dp(t,i,a,l,f,h,E,D,B){return t=Mu(a,l,!0,t,f,h,E,D,B),t.context=Lp(null),a=t.current,l=Mn(),f=_r(a),h=ki(l,f),h.callback=i??null,hr(a,h,f),t.current.lanes=f,Fn(t,f,l),Dn(t,l),t}function Zo(t,i,a,l){var f=i.current,h=Mn(),E=_r(f);return a=Lp(a),i.context===null?i.context=a:i.pendingContext=a,i=ki(h,E),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=hr(f,i,E),t!==null&&(ui(t,f,E,h),Co(t,f,E)),E}function Qo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Np(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function Eu(t,i){Np(t,i),(t=t.alternate)&&Np(t,i)}function f_(){return null}var Ip=typeof reportError=="function"?reportError:function(t){console.error(t)};function Tu(t){this._internalRoot=t}Jo.prototype.render=Tu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Zo(t,i,null,null)},Jo.prototype.unmount=Tu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Vr(function(){Zo(null,t,null,null)}),i[Ni]=null}};function Jo(t){this._internalRoot=t}Jo.prototype.unstable_scheduleHydration=function(t){if(t){var i=Js();t={blockedOn:null,target:t,priority:i};for(var a=0;a<sr.length&&i!==0&&i<sr[a].priority;a++);sr.splice(a,0,t),a===0&&yd(t)}};function wu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function el(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Up(){}function d_(t,i,a,l,f){if(f){if(typeof l=="function"){var h=l;l=function(){var se=Qo(E);h.call(se)}}var E=Dp(i,l,t,0,null,!1,!1,"",Up);return t._reactRootContainer=E,t[Ni]=E.current,ha(t.nodeType===8?t.parentNode:t),Vr(),E}for(;f=t.lastChild;)t.removeChild(f);if(typeof l=="function"){var D=l;l=function(){var se=Qo(B);D.call(se)}}var B=Mu(t,0,!1,null,null,!1,!1,"",Up);return t._reactRootContainer=B,t[Ni]=B.current,ha(t.nodeType===8?t.parentNode:t),Vr(function(){Zo(i,B,a,l)}),B}function tl(t,i,a,l,f){var h=a._reactRootContainer;if(h){var E=h;if(typeof f=="function"){var D=f;f=function(){var B=Qo(E);D.call(B)}}Zo(i,E,t,f)}else E=d_(a,i,t,f,l);return Qo(E)}qt=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=vt(i.pendingLanes);a!==0&&(At(i,a|1),Dn(i,A()),(Mt&6)===0&&(ws=A()+500,fr()))}break;case 13:Vr(function(){var l=Oi(t,1);if(l!==null){var f=Mn();ui(l,t,1,f)}}),Eu(t,1)}},jn=function(t){if(t.tag===13){var i=Oi(t,134217728);if(i!==null){var a=Mn();ui(i,t,134217728,a)}Eu(t,134217728)}},Di=function(t){if(t.tag===13){var i=_r(t),a=Oi(t,i);if(a!==null){var l=Mn();ui(a,t,i,l)}Eu(t,i)}},Js=function(){return st},vd=function(t,i){var a=st;try{return st=t,i()}finally{st=a}},Ae=function(t,i,a){switch(i){case"input":if(Ft(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var f=vo(l);if(!f)throw Error(n(90));Xt(l),Ft(l,f)}}}break;case"textarea":M(t,a);break;case"select":i=a.value,i!=null&&yt(t,!!a.multiple,i,!1)}},rt=gu,Pt=Vr;var h_={usingClientEntryPoint:!1,Events:[ga,ds,vo,fe,ze,gu]},Pa={findFiberByHostInstance:Nr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},p_={bundleType:Pa.bundleType,version:Pa.version,rendererPackageName:Pa.rendererPackageName,rendererConfig:Pa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Qa(t),t===null?null:t.stateNode},findFiberByHostInstance:Pa.findFiberByHostInstance||f_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nl.isDisabled&&nl.supportsFiber)try{Ce=nl.inject(p_),Ne=nl}catch{}}return Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=h_,Nn.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wu(i))throw Error(n(200));return u_(t,i,null,a)},Nn.createRoot=function(t,i){if(!wu(t))throw Error(n(299));var a=!1,l="",f=Ip;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Mu(t,1,!1,null,null,a,!1,l,f),t[Ni]=i.current,ha(t.nodeType===8?t.parentNode:t),new Tu(i)},Nn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Qa(i),t=t===null?null:t.stateNode,t},Nn.flushSync=function(t){return Vr(t)},Nn.hydrate=function(t,i,a){if(!el(i))throw Error(n(200));return tl(null,t,i,!0,a)},Nn.hydrateRoot=function(t,i,a){if(!wu(t))throw Error(n(405));var l=a!=null&&a.hydratedSources||null,f=!1,h="",E=Ip;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),i=Dp(i,null,t,1,a??null,f,!1,h,E),t[Ni]=i.current,ha(t),l)for(t=0;t<l.length;t++)a=l[t],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new Jo(i)},Nn.render=function(t,i,a){if(!el(i))throw Error(n(200));return tl(null,t,i,!1,a)},Nn.unmountComponentAtNode=function(t){if(!el(t))throw Error(n(40));return t._reactRootContainer?(Vr(function(){tl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ni]=null})}),!0):!1},Nn.unstable_batchedUpdates=gu,Nn.unstable_renderSubtreeIntoContainer=function(t,i,a,l){if(!el(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return tl(t,i,a,!1,l)},Nn.version="18.3.1-next-f1338f8080-20240426",Nn}var Gp;function M_(){if(Gp)return Cu.exports;Gp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Cu.exports=S_(),Cu.exports}var Wp;function E_(){if(Wp)return il;Wp=1;var s=M_();return il.createRoot=s.createRoot,il.hydrateRoot=s.hydrateRoot,il}var T_=E_(),gn=ad();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w_=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),A_=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),Xp=s=>{const e=A_(s);return e.charAt(0).toUpperCase()+e.slice(1)},Ym=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var b_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C_=gn.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:c,iconNode:u,...d},p)=>gn.createElement("svg",{ref:p,...b_,width:e,height:e,stroke:s,strokeWidth:r?Number(n)*24/Number(e):n,className:Ym("lucide",o),...d},[...u.map(([m,x])=>gn.createElement(m,x)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vn=(s,e)=>{const n=gn.forwardRef(({className:r,...o},c)=>gn.createElement(C_,{ref:c,iconNode:e,className:Ym(`lucide-${w_(Xp(s))}`,`lucide-${s}`,r),...o}));return n.displayName=Xp(s),n};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R_=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],P_=vn("award",R_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L_=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],D_=vn("book-open",L_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N_=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],$m=vn("chevron-down",N_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I_=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],U_=vn("chevron-up",I_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F_=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],O_=vn("circle-check-big",F_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Km=vn("external-link",k_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B_=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Zm=vn("github",B_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],Ol=vn("linkedin",z_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V_=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],Qm=vn("mail",V_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Jm=vn("map-pin",H_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],W_=vn("menu",G_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X_=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],eg=vn("phone",X_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j_=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]],q_=vn("quote",j_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],$_=vn("send",Y_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Z_=vn("shield-check",K_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],J_=vn("x",Q_),Lu=[{label:"About",href:"#about"},{label:"Skills",href:"#skills"},{label:"Experience",href:"#experience"},{label:"Certifications",href:"#certifications"},{label:"Recommendations",href:"#recommendations"},{label:"Contact",href:"#contact"}];function ev(){const[s,e]=gn.useState(!1),[n,r]=gn.useState(!1),[o,c]=gn.useState("about");gn.useEffect(()=>{const d=()=>{e(window.scrollY>40);const p=Lu.map(m=>m.href.replace("#",""));for(let m=p.length-1;m>=0;m--){const x=document.getElementById(p[m]);if(x&&window.scrollY>=x.offsetTop-120){c(p[m]);break}}};return window.addEventListener("scroll",d,{passive:!0}),()=>window.removeEventListener("scroll",d)},[]);const u=d=>{r(!1);const p=d.replace("#",""),m=document.getElementById(p);m&&m.scrollIntoView({behavior:"smooth"})};return F.jsxs("nav",{className:"fixed top-0 left-0 right-0 z-50 transition-all duration-300",style:{background:s?"rgba(6, 6, 20, 0.92)":"transparent",backdropFilter:s?"blur(12px)":"none",borderBottom:s?"1px solid rgba(0,212,255,0.1)":"none"},children:[F.jsx("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",children:F.jsxs("div",{className:"flex items-center justify-between h-16",children:[F.jsxs("button",{onClick:()=>u("#about"),className:"flex items-center gap-2",children:[F.jsx("span",{className:"text-xl",style:{background:"linear-gradient(135deg, #00d4ff, #7c3aed)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontWeight:700,letterSpacing:"-0.02em"},children:"AK"}),F.jsx("span",{className:"hidden sm:block text-sm",style:{color:"rgba(255,255,255,0.6)"},children:"Aditya Kumar"})]}),F.jsx("div",{className:"hidden md:flex items-center gap-1",children:Lu.map(d=>{const p=d.href.replace("#",""),m=o===p;return F.jsx("button",{onClick:()=>u(d.href),className:"px-3 py-2 rounded-lg text-sm transition-all duration-200",style:{color:m?"#00d4ff":"rgba(255,255,255,0.65)",background:m?"rgba(0,212,255,0.1)":"transparent"},children:d.label},d.href)})}),F.jsx("button",{className:"md:hidden p-2 rounded-lg",style:{color:"rgba(255,255,255,0.8)"},onClick:()=>r(!n),"aria-label":"Toggle menu",children:n?F.jsx(J_,{size:20}):F.jsx(W_,{size:20})})]})}),n&&F.jsx("div",{className:"md:hidden px-4 pb-4 pt-2 flex flex-col gap-1",style:{background:"rgba(6,6,20,0.97)",backdropFilter:"blur(12px)"},children:Lu.map(d=>{const p=d.href.replace("#",""),m=o===p;return F.jsx("button",{onClick:()=>u(d.href),className:"px-4 py-3 rounded-lg text-sm text-left transition-all duration-200",style:{color:m?"#00d4ff":"rgba(255,255,255,0.7)",background:m?"rgba(0,212,255,0.08)":"transparent"},children:d.label},d.href)})})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const od="183",tv=0,jp=1,nv=2,Ll=1,iv=2,za=3,Rr=0,Un=1,ji=2,Yi=0,Vs=1,qp=2,Yp=3,$p=4,rv=5,Qr=100,sv=101,av=102,ov=103,lv=104,cv=200,uv=201,fv=202,dv=203,hf=204,pf=205,hv=206,pv=207,mv=208,gv=209,_v=210,vv=211,xv=212,yv=213,Sv=214,mf=0,gf=1,_f=2,Gs=3,vf=4,xf=5,yf=6,Sf=7,tg=0,Mv=1,Ev=2,bi=0,ng=1,ig=2,rg=3,sg=4,ag=5,og=6,lg=7,cg=300,ns=301,Ws=302,Du=303,Nu=304,Wl=306,Mf=1e3,qi=1001,Ef=1002,cn=1003,Tv=1004,rl=1005,_n=1006,Iu=1007,es=1008,ni=1009,ug=1010,fg=1011,Ha=1012,ld=1013,Ri=1014,wi=1015,Ki=1016,cd=1017,ud=1018,Ga=1020,dg=35902,hg=35899,pg=1021,mg=1022,mi=1023,Zi=1026,ts=1027,gg=1028,fd=1029,Xs=1030,dd=1031,hd=1033,Dl=33776,Nl=33777,Il=33778,Ul=33779,Tf=35840,wf=35841,Af=35842,bf=35843,Cf=36196,Rf=37492,Pf=37496,Lf=37488,Df=37489,Nf=37490,If=37491,Uf=37808,Ff=37809,Of=37810,kf=37811,Bf=37812,zf=37813,Vf=37814,Hf=37815,Gf=37816,Wf=37817,Xf=37818,jf=37819,qf=37820,Yf=37821,$f=36492,Kf=36494,Zf=36495,Qf=36283,Jf=36284,ed=36285,td=36286,wv=3200,Av=0,bv=1,br="",ei="srgb",js="srgb-linear",kl="linear",Lt="srgb",bs=7680,Kp=519,Cv=512,Rv=513,Pv=514,pd=515,Lv=516,Dv=517,md=518,Nv=519,Zp=35044,Qp="300 es",Ai=2e3,Bl=2001;function Iv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function zl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Uv(){const s=zl("canvas");return s.style.display="block",s}const Jp={};function em(...s){const e="THREE."+s.shift();console.log(e,...s)}function _g(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=s[1];n&&n.isStackTrace?s[0]+=" "+n.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ot(...s){s=_g(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...s)}}function wt(...s){s=_g(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...s)}}function Vl(...s){const e=s.join(" ");e in Jp||(Jp[e]=!0,ot(...s))}function Fv(s,e,n){return new Promise(function(r,o){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}const Ov={[mf]:gf,[_f]:yf,[vf]:Sf,[Gs]:xf,[gf]:mf,[yf]:_f,[Sf]:vf,[xf]:Gs};class Ys{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uu=Math.PI/180,nd=180/Math.PI;function Xa(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(pn[s&255]+pn[s>>8&255]+pn[s>>16&255]+pn[s>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[n&63|128]+pn[n>>8&255]+"-"+pn[n>>16&255]+pn[n>>24&255]+pn[r&255]+pn[r>>8&255]+pn[r>>16&255]+pn[r>>24&255]).toLowerCase()}function _t(s,e,n){return Math.max(e,Math.min(n,s))}function kv(s,e){return(s%e+e)%e}function Fu(s,e,n){return(1-n)*s+n*e}function Da(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function In(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Dt{constructor(e=0,n=0){Dt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=_t(this.x,e.x,n.x),this.y=_t(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=_t(this.x,e,n),this.y=_t(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $s{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,u,d){let p=r[o+0],m=r[o+1],x=r[o+2],y=r[o+3],g=c[u+0],S=c[u+1],T=c[u+2],b=c[u+3];if(y!==b||p!==g||m!==S||x!==T){let _=p*g+m*S+x*T+y*b;_<0&&(g=-g,S=-S,T=-T,b=-b,_=-_);let v=1-d;if(_<.9995){const C=Math.acos(_),N=Math.sin(C);v=Math.sin(v*C)/N,d=Math.sin(d*C)/N,p=p*v+g*d,m=m*v+S*d,x=x*v+T*d,y=y*v+b*d}else{p=p*v+g*d,m=m*v+S*d,x=x*v+T*d,y=y*v+b*d;const C=1/Math.sqrt(p*p+m*m+x*x+y*y);p*=C,m*=C,x*=C,y*=C}}e[n]=p,e[n+1]=m,e[n+2]=x,e[n+3]=y}static multiplyQuaternionsFlat(e,n,r,o,c,u){const d=r[o],p=r[o+1],m=r[o+2],x=r[o+3],y=c[u],g=c[u+1],S=c[u+2],T=c[u+3];return e[n]=d*T+x*y+p*S-m*g,e[n+1]=p*T+x*g+m*y-d*S,e[n+2]=m*T+x*S+d*g-p*y,e[n+3]=x*T-d*y-p*g-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,u=e._order,d=Math.cos,p=Math.sin,m=d(r/2),x=d(o/2),y=d(c/2),g=p(r/2),S=p(o/2),T=p(c/2);switch(u){case"XYZ":this._x=g*x*y+m*S*T,this._y=m*S*y-g*x*T,this._z=m*x*T+g*S*y,this._w=m*x*y-g*S*T;break;case"YXZ":this._x=g*x*y+m*S*T,this._y=m*S*y-g*x*T,this._z=m*x*T-g*S*y,this._w=m*x*y+g*S*T;break;case"ZXY":this._x=g*x*y-m*S*T,this._y=m*S*y+g*x*T,this._z=m*x*T+g*S*y,this._w=m*x*y-g*S*T;break;case"ZYX":this._x=g*x*y-m*S*T,this._y=m*S*y+g*x*T,this._z=m*x*T-g*S*y,this._w=m*x*y+g*S*T;break;case"YZX":this._x=g*x*y+m*S*T,this._y=m*S*y+g*x*T,this._z=m*x*T-g*S*y,this._w=m*x*y-g*S*T;break;case"XZY":this._x=g*x*y-m*S*T,this._y=m*S*y-g*x*T,this._z=m*x*T+g*S*y,this._w=m*x*y+g*S*T;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],u=n[1],d=n[5],p=n[9],m=n[2],x=n[6],y=n[10],g=r+d+y;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(x-p)*S,this._y=(c-m)*S,this._z=(u-o)*S}else if(r>d&&r>y){const S=2*Math.sqrt(1+r-d-y);this._w=(x-p)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(c+m)/S}else if(d>y){const S=2*Math.sqrt(1+d-r-y);this._w=(c-m)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(p+x)/S}else{const S=2*Math.sqrt(1+y-r-d);this._w=(u-o)/S,this._x=(c+m)/S,this._y=(p+x)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,u=e._w,d=n._x,p=n._y,m=n._z,x=n._w;return this._x=r*x+u*d+o*m-c*p,this._y=o*x+u*p+c*d-r*m,this._z=c*x+u*m+r*p-o*d,this._w=u*x-r*d-o*p-c*m,this._onChangeCallback(),this}slerp(e,n){let r=e._x,o=e._y,c=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,c=-c,u=-u,d=-d);let p=1-n;if(d<.9995){const m=Math.acos(d),x=Math.sin(m);p=Math.sin(p*m)/x,n=Math.sin(n*m)/x,this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this._onChangeCallback()}else this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,n=0,r=0){ne.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(tm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(tm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,u=e.y,d=e.z,p=e.w,m=2*(u*o-d*r),x=2*(d*n-c*o),y=2*(c*r-u*n);return this.x=n+p*m+u*y-d*x,this.y=r+p*x+d*m-c*y,this.z=o+p*y+c*x-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=_t(this.x,e.x,n.x),this.y=_t(this.y,e.y,n.y),this.z=_t(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=_t(this.x,e,n),this.y=_t(this.y,e,n),this.z=_t(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,u=n.x,d=n.y,p=n.z;return this.x=o*p-c*d,this.y=c*u-r*p,this.z=r*d-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ou.copy(this).projectOnVector(e),this.sub(Ou)}reflect(e){return this.sub(Ou.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ou=new ne,tm=new $s;class ft{constructor(e,n,r,o,c,u,d,p,m){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,d,p,m)}set(e,n,r,o,c,u,d,p,m){const x=this.elements;return x[0]=e,x[1]=o,x[2]=d,x[3]=n,x[4]=c,x[5]=p,x[6]=r,x[7]=u,x[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],d=r[3],p=r[6],m=r[1],x=r[4],y=r[7],g=r[2],S=r[5],T=r[8],b=o[0],_=o[3],v=o[6],C=o[1],N=o[4],L=o[7],V=o[2],k=o[5],O=o[8];return c[0]=u*b+d*C+p*V,c[3]=u*_+d*N+p*k,c[6]=u*v+d*L+p*O,c[1]=m*b+x*C+y*V,c[4]=m*_+x*N+y*k,c[7]=m*v+x*L+y*O,c[2]=g*b+S*C+T*V,c[5]=g*_+S*N+T*k,c[8]=g*v+S*L+T*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],p=e[6],m=e[7],x=e[8];return n*u*x-n*d*m-r*c*x+r*d*p+o*c*m-o*u*p}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],p=e[6],m=e[7],x=e[8],y=x*u-d*m,g=d*p-x*c,S=m*c-u*p,T=n*y+r*g+o*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/T;return e[0]=y*b,e[1]=(o*m-x*r)*b,e[2]=(d*r-o*u)*b,e[3]=g*b,e[4]=(x*n-o*p)*b,e[5]=(o*c-d*n)*b,e[6]=S*b,e[7]=(r*p-m*n)*b,e[8]=(u*n-r*c)*b,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,u,d){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*u+m*d)+u+e,-o*m,o*p,-o*(-m*u+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(ku.makeScale(e,n)),this}rotate(e){return this.premultiply(ku.makeRotation(-e)),this}translate(e,n){return this.premultiply(ku.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ku=new ft,nm=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),im=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bv(){const s={enabled:!0,workingColorSpace:js,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Lt&&(o.r=$i(o.r),o.g=$i(o.g),o.b=$i(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Lt&&(o.r=Hs(o.r),o.g=Hs(o.g),o.b=Hs(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===br?kl:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return Vl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return Vl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[js]:{primaries:e,whitePoint:r,transfer:kl,toXYZ:nm,fromXYZ:im,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:e,whitePoint:r,transfer:Lt,toXYZ:nm,fromXYZ:im,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),s}const Et=Bv();function $i(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Hs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Cs;class zv{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Cs===void 0&&(Cs=zl("canvas")),Cs.width=e.width,Cs.height=e.height;const o=Cs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Cs}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=zl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=$i(c[u]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor($i(n[r]/255)*255):n[r]=$i(n[r]);return{data:n,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vv=0;class gd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vv++}),this.uuid=Xa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?c.push(Bu(o[u].image)):c.push(Bu(o[u]))}else c=Bu(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function Bu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?zv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let Hv=0;const zu=new ne;class Tn extends Ys{constructor(e=Tn.DEFAULT_IMAGE,n=Tn.DEFAULT_MAPPING,r=qi,o=qi,c=_n,u=es,d=mi,p=ni,m=Tn.DEFAULT_ANISOTROPY,x=br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hv++}),this.uuid=Xa(),this.name="",this.source=new gd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(zu).x}get height(){return this.source.getSize(zu).y}get depth(){return this.source.getSize(zu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){ot(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ot(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mf:e.x=e.x-Math.floor(e.x);break;case qi:e.x=e.x<0?0:1;break;case Ef:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mf:e.y=e.y-Math.floor(e.y);break;case qi:e.y=e.y<0?0:1;break;case Ef:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=cg;Tn.DEFAULT_ANISOTROPY=1;class $t{constructor(e=0,n=0,r=0,o=1){$t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const p=e.elements,m=p[0],x=p[4],y=p[8],g=p[1],S=p[5],T=p[9],b=p[2],_=p[6],v=p[10];if(Math.abs(x-g)<.01&&Math.abs(y-b)<.01&&Math.abs(T-_)<.01){if(Math.abs(x+g)<.1&&Math.abs(y+b)<.1&&Math.abs(T+_)<.1&&Math.abs(m+S+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const N=(m+1)/2,L=(S+1)/2,V=(v+1)/2,k=(x+g)/4,O=(y+b)/4,w=(T+_)/4;return N>L&&N>V?N<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(N),o=k/r,c=O/r):L>V?L<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(L),r=k/o,c=w/o):V<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(V),r=O/c,o=w/c),this.set(r,o,c,n),this}let C=Math.sqrt((_-T)*(_-T)+(y-b)*(y-b)+(g-x)*(g-x));return Math.abs(C)<.001&&(C=1),this.x=(_-T)/C,this.y=(y-b)/C,this.z=(g-x)/C,this.w=Math.acos((m+S+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=_t(this.x,e.x,n.x),this.y=_t(this.y,e.y,n.y),this.z=_t(this.z,e.z,n.z),this.w=_t(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=_t(this.x,e,n),this.y=_t(this.y,e,n),this.z=_t(this.z,e,n),this.w=_t(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gv extends Ys{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new $t(0,0,e,n),this.scissorTest=!1,this.viewport=new $t(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:r.depth},c=new Tn(o),u=r.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:_n,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new gd(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends Gv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class vg extends Tn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=cn,this.minFilter=cn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wv extends Tn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=cn,this.minFilter=cn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wt{constructor(e,n,r,o,c,u,d,p,m,x,y,g,S,T,b,_){Wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,d,p,m,x,y,g,S,T,b,_)}set(e,n,r,o,c,u,d,p,m,x,y,g,S,T,b,_){const v=this.elements;return v[0]=e,v[4]=n,v[8]=r,v[12]=o,v[1]=c,v[5]=u,v[9]=d,v[13]=p,v[2]=m,v[6]=x,v[10]=y,v[14]=g,v[3]=S,v[7]=T,v[11]=b,v[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,r=e.elements,o=1/Rs.setFromMatrixColumn(e,0).length(),c=1/Rs.setFromMatrixColumn(e,1).length(),u=1/Rs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),d=Math.sin(r),p=Math.cos(o),m=Math.sin(o),x=Math.cos(c),y=Math.sin(c);if(e.order==="XYZ"){const g=u*x,S=u*y,T=d*x,b=d*y;n[0]=p*x,n[4]=-p*y,n[8]=m,n[1]=S+T*m,n[5]=g-b*m,n[9]=-d*p,n[2]=b-g*m,n[6]=T+S*m,n[10]=u*p}else if(e.order==="YXZ"){const g=p*x,S=p*y,T=m*x,b=m*y;n[0]=g+b*d,n[4]=T*d-S,n[8]=u*m,n[1]=u*y,n[5]=u*x,n[9]=-d,n[2]=S*d-T,n[6]=b+g*d,n[10]=u*p}else if(e.order==="ZXY"){const g=p*x,S=p*y,T=m*x,b=m*y;n[0]=g-b*d,n[4]=-u*y,n[8]=T+S*d,n[1]=S+T*d,n[5]=u*x,n[9]=b-g*d,n[2]=-u*m,n[6]=d,n[10]=u*p}else if(e.order==="ZYX"){const g=u*x,S=u*y,T=d*x,b=d*y;n[0]=p*x,n[4]=T*m-S,n[8]=g*m+b,n[1]=p*y,n[5]=b*m+g,n[9]=S*m-T,n[2]=-m,n[6]=d*p,n[10]=u*p}else if(e.order==="YZX"){const g=u*p,S=u*m,T=d*p,b=d*m;n[0]=p*x,n[4]=b-g*y,n[8]=T*y+S,n[1]=y,n[5]=u*x,n[9]=-d*x,n[2]=-m*x,n[6]=S*y+T,n[10]=g-b*y}else if(e.order==="XZY"){const g=u*p,S=u*m,T=d*p,b=d*m;n[0]=p*x,n[4]=-y,n[8]=m*x,n[1]=g*y+b,n[5]=u*x,n[9]=S*y-T,n[2]=T*y-S,n[6]=d*x,n[10]=b*y+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xv,e,jv)}lookAt(e,n,r){const o=this.elements;return Vn.subVectors(e,n),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),Sr.crossVectors(r,Vn),Sr.lengthSq()===0&&(Math.abs(r.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),Sr.crossVectors(r,Vn)),Sr.normalize(),sl.crossVectors(Vn,Sr),o[0]=Sr.x,o[4]=sl.x,o[8]=Vn.x,o[1]=Sr.y,o[5]=sl.y,o[9]=Vn.y,o[2]=Sr.z,o[6]=sl.z,o[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],d=r[4],p=r[8],m=r[12],x=r[1],y=r[5],g=r[9],S=r[13],T=r[2],b=r[6],_=r[10],v=r[14],C=r[3],N=r[7],L=r[11],V=r[15],k=o[0],O=o[4],w=o[8],R=o[12],de=o[1],I=o[5],$=o[9],J=o[13],le=o[2],Z=o[6],ie=o[10],X=o[14],K=o[3],oe=o[7],ce=o[11],U=o[15];return c[0]=u*k+d*de+p*le+m*K,c[4]=u*O+d*I+p*Z+m*oe,c[8]=u*w+d*$+p*ie+m*ce,c[12]=u*R+d*J+p*X+m*U,c[1]=x*k+y*de+g*le+S*K,c[5]=x*O+y*I+g*Z+S*oe,c[9]=x*w+y*$+g*ie+S*ce,c[13]=x*R+y*J+g*X+S*U,c[2]=T*k+b*de+_*le+v*K,c[6]=T*O+b*I+_*Z+v*oe,c[10]=T*w+b*$+_*ie+v*ce,c[14]=T*R+b*J+_*X+v*U,c[3]=C*k+N*de+L*le+V*K,c[7]=C*O+N*I+L*Z+V*oe,c[11]=C*w+N*$+L*ie+V*ce,c[15]=C*R+N*J+L*X+V*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],u=e[1],d=e[5],p=e[9],m=e[13],x=e[2],y=e[6],g=e[10],S=e[14],T=e[3],b=e[7],_=e[11],v=e[15],C=p*S-m*g,N=d*S-m*y,L=d*g-p*y,V=u*S-m*x,k=u*g-p*x,O=u*y-d*x;return n*(b*C-_*N+v*L)-r*(T*C-_*V+v*k)+o*(T*N-b*V+v*O)-c*(T*L-b*k+_*O)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],p=e[6],m=e[7],x=e[8],y=e[9],g=e[10],S=e[11],T=e[12],b=e[13],_=e[14],v=e[15],C=n*d-r*u,N=n*p-o*u,L=n*m-c*u,V=r*p-o*d,k=r*m-c*d,O=o*m-c*p,w=x*b-y*T,R=x*_-g*T,de=x*v-S*T,I=y*_-g*b,$=y*v-S*b,J=g*v-S*_,le=C*J-N*$+L*I+V*de-k*R+O*w;if(le===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/le;return e[0]=(d*J-p*$+m*I)*Z,e[1]=(o*$-r*J-c*I)*Z,e[2]=(b*O-_*k+v*V)*Z,e[3]=(g*k-y*O-S*V)*Z,e[4]=(p*de-u*J-m*R)*Z,e[5]=(n*J-o*de+c*R)*Z,e[6]=(_*L-T*O-v*N)*Z,e[7]=(x*O-g*L+S*N)*Z,e[8]=(u*$-d*de+m*w)*Z,e[9]=(r*de-n*$-c*w)*Z,e[10]=(T*k-b*L+v*C)*Z,e[11]=(y*L-x*k-S*C)*Z,e[12]=(d*R-u*I-p*w)*Z,e[13]=(n*I-r*R+o*w)*Z,e[14]=(b*N-T*V-_*C)*Z,e[15]=(x*V-y*N+g*C)*Z,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,u=e.x,d=e.y,p=e.z,m=c*u,x=c*d;return this.set(m*u+r,m*d-o*p,m*p+o*d,0,m*d+o*p,x*d+r,x*p-o*u,0,m*p-o*d,x*p+o*u,c*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,u=n._y,d=n._z,p=n._w,m=c+c,x=u+u,y=d+d,g=c*m,S=c*x,T=c*y,b=u*x,_=u*y,v=d*y,C=p*m,N=p*x,L=p*y,V=r.x,k=r.y,O=r.z;return o[0]=(1-(b+v))*V,o[1]=(S+L)*V,o[2]=(T-N)*V,o[3]=0,o[4]=(S-L)*k,o[5]=(1-(g+v))*k,o[6]=(_+C)*k,o[7]=0,o[8]=(T+N)*O,o[9]=(_-C)*O,o[10]=(1-(g+b))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinant();if(c===0)return r.set(1,1,1),n.identity(),this;let u=Rs.set(o[0],o[1],o[2]).length();const d=Rs.set(o[4],o[5],o[6]).length(),p=Rs.set(o[8],o[9],o[10]).length();c<0&&(u=-u),fi.copy(this);const m=1/u,x=1/d,y=1/p;return fi.elements[0]*=m,fi.elements[1]*=m,fi.elements[2]*=m,fi.elements[4]*=x,fi.elements[5]*=x,fi.elements[6]*=x,fi.elements[8]*=y,fi.elements[9]*=y,fi.elements[10]*=y,n.setFromRotationMatrix(fi),r.x=u,r.y=d,r.z=p,this}makePerspective(e,n,r,o,c,u,d=Ai,p=!1){const m=this.elements,x=2*c/(n-e),y=2*c/(r-o),g=(n+e)/(n-e),S=(r+o)/(r-o);let T,b;if(p)T=c/(u-c),b=u*c/(u-c);else if(d===Ai)T=-(u+c)/(u-c),b=-2*u*c/(u-c);else if(d===Bl)T=-u/(u-c),b=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=x,m[4]=0,m[8]=g,m[12]=0,m[1]=0,m[5]=y,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=T,m[14]=b,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,n,r,o,c,u,d=Ai,p=!1){const m=this.elements,x=2/(n-e),y=2/(r-o),g=-(n+e)/(n-e),S=-(r+o)/(r-o);let T,b;if(p)T=1/(u-c),b=u/(u-c);else if(d===Ai)T=-2/(u-c),b=-(u+c)/(u-c);else if(d===Bl)T=-1/(u-c),b=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=x,m[4]=0,m[8]=0,m[12]=g,m[1]=0,m[5]=y,m[9]=0,m[13]=S,m[2]=0,m[6]=0,m[10]=T,m[14]=b,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Rs=new ne,fi=new Wt,Xv=new ne(0,0,0),jv=new ne(1,1,1),Sr=new ne,sl=new ne,Vn=new ne,rm=new Wt,sm=new $s;class Qi{constructor(e=0,n=0,r=0,o=Qi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],d=o[8],p=o[1],m=o[5],x=o[9],y=o[2],g=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,S),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(g,m),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-y,c),this._z=0);break;case"ZXY":this._x=Math.asin(_t(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-y,S),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-_t(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(_t(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,m),this._y=Math.atan2(-y,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-x,S),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return rm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return sm.setFromEuler(this),this.setFromQuaternion(sm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qi.DEFAULT_ORDER="XYZ";class xg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qv=0;const am=new ne,Ps=new $s,Vi=new Wt,al=new ne,Na=new ne,Yv=new ne,$v=new $s,om=new ne(1,0,0),lm=new ne(0,1,0),cm=new ne(0,0,1),um={type:"added"},Kv={type:"removed"},Ls={type:"childadded",child:null},Vu={type:"childremoved",child:null};class wn extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qv++}),this.uuid=Xa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const e=new ne,n=new Qi,r=new $s,o=new ne(1,1,1);function c(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Wt},normalMatrix:{value:new ft}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ps.setFromAxisAngle(e,n),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(e,n){return Ps.setFromAxisAngle(e,n),this.quaternion.premultiply(Ps),this}rotateX(e){return this.rotateOnAxis(om,e)}rotateY(e){return this.rotateOnAxis(lm,e)}rotateZ(e){return this.rotateOnAxis(cm,e)}translateOnAxis(e,n){return am.copy(e).applyQuaternion(this.quaternion),this.position.add(am.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(om,e)}translateY(e){return this.translateOnAxis(lm,e)}translateZ(e){return this.translateOnAxis(cm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?al.copy(e):al.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(Na,al,this.up):Vi.lookAt(al,Na,this.up),this.quaternion.setFromRotationMatrix(Vi),o&&(Vi.extractRotation(o.matrixWorld),Ps.setFromRotationMatrix(Vi),this.quaternion.premultiply(Ps.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(wt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(um),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null):wt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Kv),Vu.child=e,this.dispatchEvent(Vu),Vu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(um),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Na,e,Yv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Na,$v,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,r=e.y,o=e.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*r-c[8]*o,c[13]+=r-c[1]*n-c[5]*r-c[9]*o,c[14]+=o-c[2]*n-c[6]*r-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,x=p.length;m<x;m++){const y=p[m];c(e.shapes,y)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(e.materials,this.material[p]));o.material=d}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];o.animations.push(c(e.animations,p))}}if(n){const d=u(e.geometries),p=u(e.materials),m=u(e.textures),x=u(e.images),y=u(e.shapes),g=u(e.skeletons),S=u(e.animations),T=u(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),x.length>0&&(r.images=x),y.length>0&&(r.shapes=y),g.length>0&&(r.skeletons=g),S.length>0&&(r.animations=S),T.length>0&&(r.nodes=T)}return r.object=o,r;function u(d){const p=[];for(const m in d){const x=d[m];delete x.metadata,p.push(x)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}wn.DEFAULT_UP=new ne(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ol extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zv={type:"move"};class Hu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ol,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ol,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ol,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,u=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const b of e.hand.values()){const _=n.getJointPose(b,r),v=this._getHandJoint(m,b);_!==null&&(v.matrix.fromArray(_.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=_.radius),v.visible=_!==null}const x=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],g=x.position.distanceTo(y.position),S=.02,T=.005;m.inputState.pinching&&g>S+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&g<=S-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Zv)))}return d!==null&&(d.visible=o!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new ol;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const yg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mr={h:0,s:0,l:0},ll={h:0,s:0,l:0};function Gu(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Rt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=Et.workingColorSpace){return this.r=e,this.g=n,this.b=r,Et.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=Et.workingColorSpace){if(e=kv(e,1),n=_t(n,0,1),r=_t(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,u=2*r-c;this.r=Gu(u,c,e+1/3),this.g=Gu(u,c,e),this.b=Gu(u,c,e-1/3)}return Et.colorSpaceToWorking(this,o),this}setStyle(e,n=ei){function r(c){c!==void 0&&parseFloat(c)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:ot("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ei){const r=yg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return Et.workingToColorSpace(mn.copy(this),e),Math.round(_t(mn.r*255,0,255))*65536+Math.round(_t(mn.g*255,0,255))*256+Math.round(_t(mn.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Et.workingColorSpace){Et.workingToColorSpace(mn.copy(this),n);const r=mn.r,o=mn.g,c=mn.b,u=Math.max(r,o,c),d=Math.min(r,o,c);let p,m;const x=(d+u)/2;if(d===u)p=0,m=0;else{const y=u-d;switch(m=x<=.5?y/(u+d):y/(2-u-d),u){case r:p=(o-c)/y+(o<c?6:0);break;case o:p=(c-r)/y+2;break;case c:p=(r-o)/y+4;break}p/=6}return e.h=p,e.s=m,e.l=x,e}getRGB(e,n=Et.workingColorSpace){return Et.workingToColorSpace(mn.copy(this),n),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=ei){Et.workingToColorSpace(mn.copy(this),e);const n=mn.r,r=mn.g,o=mn.b;return e!==ei?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(Mr),this.setHSL(Mr.h+e,Mr.s+n,Mr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Mr),e.getHSL(ll);const r=Fu(Mr.h,ll.h,n),o=Fu(Mr.s,ll.s,n),c=Fu(Mr.l,ll.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new Rt;Rt.NAMES=yg;class Qv extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qi,this.environmentIntensity=1,this.environmentRotation=new Qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const di=new ne,Hi=new ne,Wu=new ne,Gi=new ne,Ds=new ne,Ns=new ne,fm=new ne,Xu=new ne,ju=new ne,qu=new ne,Yu=new $t,$u=new $t,Ku=new $t;class pi{constructor(e=new ne,n=new ne,r=new ne){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),di.subVectors(e,n),o.cross(di);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){di.subVectors(o,n),Hi.subVectors(r,n),Wu.subVectors(e,n);const u=di.dot(di),d=di.dot(Hi),p=di.dot(Wu),m=Hi.dot(Hi),x=Hi.dot(Wu),y=u*m-d*d;if(y===0)return c.set(0,0,0),null;const g=1/y,S=(m*p-d*x)*g,T=(u*x-d*p)*g;return c.set(1-S-T,T,S)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(e,n,r,o,c,u,d,p){return this.getBarycoord(e,n,r,o,Gi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Gi.x),p.addScaledVector(u,Gi.y),p.addScaledVector(d,Gi.z),p)}static getInterpolatedAttribute(e,n,r,o,c,u){return Yu.setScalar(0),$u.setScalar(0),Ku.setScalar(0),Yu.fromBufferAttribute(e,n),$u.fromBufferAttribute(e,r),Ku.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Yu,c.x),u.addScaledVector($u,c.y),u.addScaledVector(Ku,c.z),u}static isFrontFacing(e,n,r,o){return di.subVectors(r,n),Hi.subVectors(e,n),di.cross(Hi).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),di.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return pi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return pi.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let u,d;Ds.subVectors(o,r),Ns.subVectors(c,r),Xu.subVectors(e,r);const p=Ds.dot(Xu),m=Ns.dot(Xu);if(p<=0&&m<=0)return n.copy(r);ju.subVectors(e,o);const x=Ds.dot(ju),y=Ns.dot(ju);if(x>=0&&y<=x)return n.copy(o);const g=p*y-x*m;if(g<=0&&p>=0&&x<=0)return u=p/(p-x),n.copy(r).addScaledVector(Ds,u);qu.subVectors(e,c);const S=Ds.dot(qu),T=Ns.dot(qu);if(T>=0&&S<=T)return n.copy(c);const b=S*m-p*T;if(b<=0&&m>=0&&T<=0)return d=m/(m-T),n.copy(r).addScaledVector(Ns,d);const _=x*T-S*y;if(_<=0&&y-x>=0&&S-T>=0)return fm.subVectors(c,o),d=(y-x)/(y-x+(S-T)),n.copy(o).addScaledVector(fm,d);const v=1/(_+b+g);return u=b*v,d=g*v,n.copy(r).addScaledVector(Ds,u).addScaledVector(Ns,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ja{constructor(e=new ne(1/0,1/0,1/0),n=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(hi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(hi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=hi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,hi):hi.fromBufferAttribute(c,u),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),cl.copy(r.boundingBox)),cl.applyMatrix4(e.matrixWorld),this.union(cl)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ia),ul.subVectors(this.max,Ia),Is.subVectors(e.a,Ia),Us.subVectors(e.b,Ia),Fs.subVectors(e.c,Ia),Er.subVectors(Us,Is),Tr.subVectors(Fs,Us),Xr.subVectors(Is,Fs);let n=[0,-Er.z,Er.y,0,-Tr.z,Tr.y,0,-Xr.z,Xr.y,Er.z,0,-Er.x,Tr.z,0,-Tr.x,Xr.z,0,-Xr.x,-Er.y,Er.x,0,-Tr.y,Tr.x,0,-Xr.y,Xr.x,0];return!Zu(n,Is,Us,Fs,ul)||(n=[1,0,0,0,1,0,0,0,1],!Zu(n,Is,Us,Fs,ul))?!1:(fl.crossVectors(Er,Tr),n=[fl.x,fl.y,fl.z],Zu(n,Is,Us,Fs,ul))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Wi=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],hi=new ne,cl=new ja,Is=new ne,Us=new ne,Fs=new ne,Er=new ne,Tr=new ne,Xr=new ne,Ia=new ne,ul=new ne,fl=new ne,jr=new ne;function Zu(s,e,n,r,o){for(let c=0,u=s.length-3;c<=u;c+=3){jr.fromArray(s,c);const d=o.x*Math.abs(jr.x)+o.y*Math.abs(jr.y)+o.z*Math.abs(jr.z),p=e.dot(jr),m=n.dot(jr),x=r.dot(jr);if(Math.max(-Math.max(p,m,x),Math.min(p,m,x))>d)return!1}return!0}const Zt=new ne,dl=new Dt;let Jv=0;class ii{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jv++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Zp,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)dl.fromBufferAttribute(this,n),dl.applyMatrix3(e),this.setXY(n,dl.x,dl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Zt.fromBufferAttribute(this,n),Zt.applyMatrix3(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Zt.fromBufferAttribute(this,n),Zt.applyMatrix4(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Zt.fromBufferAttribute(this,n),Zt.applyNormalMatrix(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Zt.fromBufferAttribute(this,n),Zt.transformDirection(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Da(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=In(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Da(n,this.array)),n}setX(e,n){return this.normalized&&(n=In(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Da(n,this.array)),n}setY(e,n){return this.normalized&&(n=In(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Da(n,this.array)),n}setZ(e,n){return this.normalized&&(n=In(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Da(n,this.array)),n}setW(e,n){return this.normalized&&(n=In(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=In(n,this.array),r=In(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=In(n,this.array),r=In(r,this.array),o=In(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=In(n,this.array),r=In(r,this.array),o=In(o,this.array),c=In(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zp&&(e.usage=this.usage),e}}class Sg extends ii{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Mg extends ii{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class gi extends ii{constructor(e,n,r){super(new Float32Array(e),n,r)}}const ex=new ja,Ua=new ne,Qu=new ne;class qa{constructor(e=new ne,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):ex.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ua.subVectors(e,this.center);const n=Ua.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Ua,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ua.copy(e.center).add(Qu)),this.expandByPoint(Ua.copy(e.center).sub(Qu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let tx=0;const Jn=new Wt,Ju=new wn,Os=new ne,Hn=new ja,Fa=new ja,an=new ne;class Gn extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tx++}),this.uuid=Xa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Iv(e)?Mg:Sg)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ft().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,n,r){return Jn.makeTranslation(e,n,r),this.applyMatrix4(Jn),this}scale(e,n,r){return Jn.makeScale(e,n,r),this.applyMatrix4(Jn),this}lookAt(e){return Ju.lookAt(e),Ju.updateMatrix(),this.applyMatrix4(Ju.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new gi(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ja);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];Hn.setFromBufferAttribute(c),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const r=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const d=n[c];Fa.setFromBufferAttribute(d),this.morphTargetsRelative?(an.addVectors(Hn.min,Fa.min),Hn.expandByPoint(an),an.addVectors(Hn.max,Fa.max),Hn.expandByPoint(an)):(Hn.expandByPoint(Fa.min),Hn.expandByPoint(Fa.max))}Hn.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)an.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(an));if(n)for(let c=0,u=n.length;c<u;c++){const d=n[c],p=this.morphTargetsRelative;for(let m=0,x=d.count;m<x;m++)an.fromBufferAttribute(d,m),p&&(Os.fromBufferAttribute(e,m),an.add(Os)),o=Math.max(o,r.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ii(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],p=[];for(let w=0;w<r.count;w++)d[w]=new ne,p[w]=new ne;const m=new ne,x=new ne,y=new ne,g=new Dt,S=new Dt,T=new Dt,b=new ne,_=new ne;function v(w,R,de){m.fromBufferAttribute(r,w),x.fromBufferAttribute(r,R),y.fromBufferAttribute(r,de),g.fromBufferAttribute(c,w),S.fromBufferAttribute(c,R),T.fromBufferAttribute(c,de),x.sub(m),y.sub(m),S.sub(g),T.sub(g);const I=1/(S.x*T.y-T.x*S.y);isFinite(I)&&(b.copy(x).multiplyScalar(T.y).addScaledVector(y,-S.y).multiplyScalar(I),_.copy(y).multiplyScalar(S.x).addScaledVector(x,-T.x).multiplyScalar(I),d[w].add(b),d[R].add(b),d[de].add(b),p[w].add(_),p[R].add(_),p[de].add(_))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let w=0,R=C.length;w<R;++w){const de=C[w],I=de.start,$=de.count;for(let J=I,le=I+$;J<le;J+=3)v(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const N=new ne,L=new ne,V=new ne,k=new ne;function O(w){V.fromBufferAttribute(o,w),k.copy(V);const R=d[w];N.copy(R),N.sub(V.multiplyScalar(V.dot(R))).normalize(),L.crossVectors(k,R);const I=L.dot(p[w])<0?-1:1;u.setXYZW(w,N.x,N.y,N.z,I)}for(let w=0,R=C.length;w<R;++w){const de=C[w],I=de.start,$=de.count;for(let J=I,le=I+$;J<le;J+=3)O(e.getX(J+0)),O(e.getX(J+1)),O(e.getX(J+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ii(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let g=0,S=r.count;g<S;g++)r.setXYZ(g,0,0,0);const o=new ne,c=new ne,u=new ne,d=new ne,p=new ne,m=new ne,x=new ne,y=new ne;if(e)for(let g=0,S=e.count;g<S;g+=3){const T=e.getX(g+0),b=e.getX(g+1),_=e.getX(g+2);o.fromBufferAttribute(n,T),c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,_),x.subVectors(u,c),y.subVectors(o,c),x.cross(y),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,b),m.fromBufferAttribute(r,_),d.add(x),p.add(x),m.add(x),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(b,p.x,p.y,p.z),r.setXYZ(_,m.x,m.y,m.z)}else for(let g=0,S=n.count;g<S;g+=3)o.fromBufferAttribute(n,g+0),c.fromBufferAttribute(n,g+1),u.fromBufferAttribute(n,g+2),x.subVectors(u,c),y.subVectors(o,c),x.cross(y),r.setXYZ(g+0,x.x,x.y,x.z),r.setXYZ(g+1,x.x,x.y,x.z),r.setXYZ(g+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)an.fromBufferAttribute(e,n),an.normalize(),e.setXYZ(n,an.x,an.y,an.z)}toNonIndexed(){function e(d,p){const m=d.array,x=d.itemSize,y=d.normalized,g=new m.constructor(p.length*x);let S=0,T=0;for(let b=0,_=p.length;b<_;b++){d.isInterleavedBufferAttribute?S=p[b]*d.data.stride+d.offset:S=p[b]*x;for(let v=0;v<x;v++)g[T++]=m[S++]}return new ii(g,x,y)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Gn,r=this.index.array,o=this.attributes;for(const d in o){const p=o[d],m=e(p,r);n.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let x=0,y=m.length;x<y;x++){const g=m[x],S=e(g,r);p.push(S)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,p=u.length;d<p;d++){const m=u[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],x=[];for(let y=0,g=m.length;y<g;y++){const S=m[y];x.push(S.toJSON(e.data))}x.length>0&&(o[p]=x,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const x=o[m];this.setAttribute(m,x.clone(n))}const c=e.morphAttributes;for(const m in c){const x=[],y=c[m];for(let g=0,S=y.length;g<S;g++)x.push(y[g].clone(n));this.morphAttributes[m]=x}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,x=u.length;m<x;m++){const y=u[m];this.addGroup(y.start,y.count,y.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let nx=0;class Ks extends Ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nx++}),this.uuid=Xa(),this.name="",this.type="Material",this.blending=Vs,this.side=Rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hf,this.blendDst=pf,this.blendEquation=Qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){ot(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ot(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(r.blending=this.blending),this.side!==Rr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==hf&&(r.blendSrc=this.blendSrc),this.blendDst!==pf&&(r.blendDst=this.blendDst),this.blendEquation!==Qr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const d in c){const p=c[d];delete p.metadata,u.push(p)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Xi=new ne,ef=new ne,hl=new ne,wr=new ne,tf=new ne,pl=new ne,nf=new ne;class _d{constructor(e=new ne,n=new ne(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Xi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Xi.copy(this.origin).addScaledVector(this.direction,n),Xi.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){ef.copy(e).add(n).multiplyScalar(.5),hl.copy(n).sub(e).normalize(),wr.copy(this.origin).sub(ef);const c=e.distanceTo(n)*.5,u=-this.direction.dot(hl),d=wr.dot(this.direction),p=-wr.dot(hl),m=wr.lengthSq(),x=Math.abs(1-u*u);let y,g,S,T;if(x>0)if(y=u*p-d,g=u*d-p,T=c*x,y>=0)if(g>=-T)if(g<=T){const b=1/x;y*=b,g*=b,S=y*(y+u*g+2*d)+g*(u*y+g+2*p)+m}else g=c,y=Math.max(0,-(u*g+d)),S=-y*y+g*(g+2*p)+m;else g=-c,y=Math.max(0,-(u*g+d)),S=-y*y+g*(g+2*p)+m;else g<=-T?(y=Math.max(0,-(-u*c+d)),g=y>0?-c:Math.min(Math.max(-c,-p),c),S=-y*y+g*(g+2*p)+m):g<=T?(y=0,g=Math.min(Math.max(-c,-p),c),S=g*(g+2*p)+m):(y=Math.max(0,-(u*c+d)),g=y>0?c:Math.min(Math.max(-c,-p),c),S=-y*y+g*(g+2*p)+m);else g=u>0?-c:c,y=Math.max(0,-(u*g+d)),S=-y*y+g*(g+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,y),o&&o.copy(ef).addScaledVector(hl,g),S}intersectSphere(e,n){Xi.subVectors(e.center,this.origin);const r=Xi.dot(this.direction),o=Xi.dot(Xi)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),d=r-u,p=r+u;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,u,d,p;const m=1/this.direction.x,x=1/this.direction.y,y=1/this.direction.z,g=this.origin;return m>=0?(r=(e.min.x-g.x)*m,o=(e.max.x-g.x)*m):(r=(e.max.x-g.x)*m,o=(e.min.x-g.x)*m),x>=0?(c=(e.min.y-g.y)*x,u=(e.max.y-g.y)*x):(c=(e.max.y-g.y)*x,u=(e.min.y-g.y)*x),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),y>=0?(d=(e.min.z-g.z)*y,p=(e.max.z-g.z)*y):(d=(e.max.z-g.z)*y,p=(e.min.z-g.z)*y),r>p||d>o)||((d>r||r!==r)&&(r=d),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Xi)!==null}intersectTriangle(e,n,r,o,c){tf.subVectors(n,e),pl.subVectors(r,e),nf.crossVectors(tf,pl);let u=this.direction.dot(nf),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;wr.subVectors(this.origin,e);const p=d*this.direction.dot(pl.crossVectors(wr,pl));if(p<0)return null;const m=d*this.direction.dot(tf.cross(wr));if(m<0||p+m>u)return null;const x=-d*wr.dot(nf);return x<0?null:this.at(x/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Eg extends Ks{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=tg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dm=new Wt,qr=new _d,ml=new qa,hm=new ne,gl=new ne,_l=new ne,vl=new ne,rf=new ne,xl=new ne,pm=new ne,yl=new ne;class Ji extends wn{constructor(e=new Gn,n=new Eg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(c&&d){xl.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const x=d[p],y=c[p];x!==0&&(rf.fromBufferAttribute(y,e),u?xl.addScaledVector(rf,x):xl.addScaledVector(rf.sub(n),x))}n.add(xl)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ml.copy(r.boundingSphere),ml.applyMatrix4(c),qr.copy(e.ray).recast(e.near),!(ml.containsPoint(qr.origin)===!1&&(qr.intersectSphere(ml,hm)===null||qr.origin.distanceToSquared(hm)>(e.far-e.near)**2))&&(dm.copy(c).invert(),qr.copy(e.ray).applyMatrix4(dm),!(r.boundingBox!==null&&qr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,qr)))}_computeIntersections(e,n,r){let o;const c=this.geometry,u=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,x=c.attributes.uv1,y=c.attributes.normal,g=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(u))for(let T=0,b=g.length;T<b;T++){const _=g[T],v=u[_.materialIndex],C=Math.max(_.start,S.start),N=Math.min(d.count,Math.min(_.start+_.count,S.start+S.count));for(let L=C,V=N;L<V;L+=3){const k=d.getX(L),O=d.getX(L+1),w=d.getX(L+2);o=Sl(this,v,e,r,m,x,y,k,O,w),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=_.materialIndex,n.push(o))}}else{const T=Math.max(0,S.start),b=Math.min(d.count,S.start+S.count);for(let _=T,v=b;_<v;_+=3){const C=d.getX(_),N=d.getX(_+1),L=d.getX(_+2);o=Sl(this,u,e,r,m,x,y,C,N,L),o&&(o.faceIndex=Math.floor(_/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let T=0,b=g.length;T<b;T++){const _=g[T],v=u[_.materialIndex],C=Math.max(_.start,S.start),N=Math.min(p.count,Math.min(_.start+_.count,S.start+S.count));for(let L=C,V=N;L<V;L+=3){const k=L,O=L+1,w=L+2;o=Sl(this,v,e,r,m,x,y,k,O,w),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=_.materialIndex,n.push(o))}}else{const T=Math.max(0,S.start),b=Math.min(p.count,S.start+S.count);for(let _=T,v=b;_<v;_+=3){const C=_,N=_+1,L=_+2;o=Sl(this,u,e,r,m,x,y,C,N,L),o&&(o.faceIndex=Math.floor(_/3),n.push(o))}}}}function ix(s,e,n,r,o,c,u,d){let p;if(e.side===Un?p=r.intersectTriangle(u,c,o,!0,d):p=r.intersectTriangle(o,c,u,e.side===Rr,d),p===null)return null;yl.copy(d),yl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(yl);return m<n.near||m>n.far?null:{distance:m,point:yl.clone(),object:s}}function Sl(s,e,n,r,o,c,u,d,p,m){s.getVertexPosition(d,gl),s.getVertexPosition(p,_l),s.getVertexPosition(m,vl);const x=ix(s,e,n,r,gl,_l,vl,pm);if(x){const y=new ne;pi.getBarycoord(pm,gl,_l,vl,y),o&&(x.uv=pi.getInterpolatedAttribute(o,d,p,m,y,new Dt)),c&&(x.uv1=pi.getInterpolatedAttribute(c,d,p,m,y,new Dt)),u&&(x.normal=pi.getInterpolatedAttribute(u,d,p,m,y,new ne),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const g={a:d,b:p,c:m,normal:new ne,materialIndex:0};pi.getNormal(gl,_l,vl,g.normal),x.face=g,x.barycoord=y}return x}class rx extends Tn{constructor(e=null,n=1,r=1,o,c,u,d,p,m=cn,x=cn,y,g){super(null,u,d,p,m,x,o,c,y,g),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const sf=new ne,sx=new ne,ax=new ft;class Zr{constructor(e=new ne(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=sf.subVectors(r,n).cross(sx.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(sf),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||ax.getNormalMatrix(e),o=this.coplanarPoint(sf).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yr=new qa,ox=new Dt(.5,.5),Ml=new ne;class Tg{constructor(e=new Zr,n=new Zr,r=new Zr,o=new Zr,c=new Zr,u=new Zr){this.planes=[e,n,r,o,c,u]}set(e,n,r,o,c,u){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(o),d[4].copy(c),d[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Ai,r=!1){const o=this.planes,c=e.elements,u=c[0],d=c[1],p=c[2],m=c[3],x=c[4],y=c[5],g=c[6],S=c[7],T=c[8],b=c[9],_=c[10],v=c[11],C=c[12],N=c[13],L=c[14],V=c[15];if(o[0].setComponents(m-u,S-x,v-T,V-C).normalize(),o[1].setComponents(m+u,S+x,v+T,V+C).normalize(),o[2].setComponents(m+d,S+y,v+b,V+N).normalize(),o[3].setComponents(m-d,S-y,v-b,V-N).normalize(),r)o[4].setComponents(p,g,_,L).normalize(),o[5].setComponents(m-p,S-g,v-_,V-L).normalize();else if(o[4].setComponents(m-p,S-g,v-_,V-L).normalize(),n===Ai)o[5].setComponents(m+p,S+g,v+_,V+L).normalize();else if(n===Bl)o[5].setComponents(p,g,_,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(e){Yr.center.set(0,0,0);const n=ox.distanceTo(e.center);return Yr.radius=.7071067811865476+n,Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(Ml.x=o.normal.x>0?e.max.x:e.min.x,Ml.y=o.normal.y>0?e.max.y:e.min.y,Ml.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ml)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wg extends Ks{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Hl=new ne,Gl=new ne,mm=new Wt,Oa=new _d,El=new qa,af=new ne,gm=new ne;class lx extends wn{constructor(e=new Gn,n=new wg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let o=1,c=n.count;o<c;o++)Hl.fromBufferAttribute(n,o-1),Gl.fromBufferAttribute(n,o),r[o]=r[o-1],r[o]+=Hl.distanceTo(Gl);e.setAttribute("lineDistance",new gi(r,1))}else ot("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,c=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),El.copy(r.boundingSphere),El.applyMatrix4(o),El.radius+=c,e.ray.intersectsSphere(El)===!1)return;mm.copy(o).invert(),Oa.copy(e.ray).applyMatrix4(mm);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,x=r.index,g=r.attributes.position;if(x!==null){const S=Math.max(0,u.start),T=Math.min(x.count,u.start+u.count);for(let b=S,_=T-1;b<_;b+=m){const v=x.getX(b),C=x.getX(b+1),N=Tl(this,e,Oa,p,v,C,b);N&&n.push(N)}if(this.isLineLoop){const b=x.getX(T-1),_=x.getX(S),v=Tl(this,e,Oa,p,b,_,T-1);v&&n.push(v)}}else{const S=Math.max(0,u.start),T=Math.min(g.count,u.start+u.count);for(let b=S,_=T-1;b<_;b+=m){const v=Tl(this,e,Oa,p,b,b+1,b);v&&n.push(v)}if(this.isLineLoop){const b=Tl(this,e,Oa,p,T-1,S,T-1);b&&n.push(b)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Tl(s,e,n,r,o,c,u){const d=s.geometry.attributes.position;if(Hl.fromBufferAttribute(d,o),Gl.fromBufferAttribute(d,c),n.distanceSqToSegment(Hl,Gl,af,gm)>r)return;af.applyMatrix4(s.matrixWorld);const m=e.ray.origin.distanceTo(af);if(!(m<e.near||m>e.far))return{distance:m,point:gm.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}const _m=new ne,vm=new ne;class cx extends lx{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let o=0,c=n.count;o<c;o+=2)_m.fromBufferAttribute(n,o),vm.fromBufferAttribute(n,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+_m.distanceTo(vm);e.setAttribute("lineDistance",new gi(r,1))}else ot("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ag extends Ks{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const xm=new Wt,id=new _d,wl=new qa,Al=new ne;class ux extends wn{constructor(e=new Gn,n=new Ag){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,c=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),wl.copy(r.boundingSphere),wl.applyMatrix4(o),wl.radius+=c,e.ray.intersectsSphere(wl)===!1)return;xm.copy(o).invert(),id.copy(e.ray).applyMatrix4(xm);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=r.index,y=r.attributes.position;if(m!==null){const g=Math.max(0,u.start),S=Math.min(m.count,u.start+u.count);for(let T=g,b=S;T<b;T++){const _=m.getX(T);Al.fromBufferAttribute(y,_),ym(Al,_,p,o,e,n,this)}}else{const g=Math.max(0,u.start),S=Math.min(y.count,u.start+u.count);for(let T=g,b=S;T<b;T++)Al.fromBufferAttribute(y,T),ym(Al,T,p,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function ym(s,e,n,r,o,c,u){const d=id.distanceSqToPoint(s);if(d<n){const p=new ne;id.closestPointToPoint(s,p),p.applyMatrix4(r);const m=o.ray.origin.distanceTo(p);if(m<o.near||m>o.far)return;c.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class bg extends Tn{constructor(e=[],n=ns,r,o,c,u,d,p,m,x){super(e,n,r,o,c,u,d,p,m,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Wa extends Tn{constructor(e,n,r=Ri,o,c,u,d=cn,p=cn,m,x=Zi,y=1){if(x!==Zi&&x!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:n,depth:y};super(g,o,c,u,d,p,x,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class fx extends Wa{constructor(e,n=Ri,r=ns,o,c,u=cn,d=cn,p,m=Zi){const x={width:e,height:e,depth:1},y=[x,x,x,x,x,x];super(e,e,n,r,o,c,u,d,p,m),this.image=y,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Cg extends Tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ya extends Gn{constructor(e=1,n=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const d=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const p=[],m=[],x=[],y=[];let g=0,S=0;T("z","y","x",-1,-1,r,n,e,u,c,0),T("z","y","x",1,-1,r,n,-e,u,c,1),T("x","z","y",1,1,e,r,n,o,u,2),T("x","z","y",1,-1,e,r,-n,o,u,3),T("x","y","z",1,-1,e,n,r,o,c,4),T("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(p),this.setAttribute("position",new gi(m,3)),this.setAttribute("normal",new gi(x,3)),this.setAttribute("uv",new gi(y,2));function T(b,_,v,C,N,L,V,k,O,w,R){const de=L/O,I=V/w,$=L/2,J=V/2,le=k/2,Z=O+1,ie=w+1;let X=0,K=0;const oe=new ne;for(let ce=0;ce<ie;ce++){const U=ce*I-J;for(let q=0;q<Z;q++){const be=q*de-$;oe[b]=be*C,oe[_]=U*N,oe[v]=le,m.push(oe.x,oe.y,oe.z),oe[b]=0,oe[_]=0,oe[v]=k>0?1:-1,x.push(oe.x,oe.y,oe.z),y.push(q/O),y.push(1-ce/w),X+=1}}for(let ce=0;ce<w;ce++)for(let U=0;U<O;U++){const q=g+U+Z*ce,be=g+U+Z*(ce+1),Xe=g+(U+1)+Z*(ce+1),Ze=g+(U+1)+Z*ce;p.push(q,be,Ze),p.push(be,Xe,Ze),K+=6}d.addGroup(S,K,R),S+=K,g+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ya(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Xl extends Gn{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,u=n/2,d=Math.floor(r),p=Math.floor(o),m=d+1,x=p+1,y=e/d,g=n/p,S=[],T=[],b=[],_=[];for(let v=0;v<x;v++){const C=v*g-u;for(let N=0;N<m;N++){const L=N*y-c;T.push(L,-C,0),b.push(0,0,1),_.push(N/d),_.push(1-v/p)}}for(let v=0;v<p;v++)for(let C=0;C<d;C++){const N=C+m*v,L=C+m*(v+1),V=C+1+m*(v+1),k=C+1+m*v;S.push(N,L,k),S.push(L,V,k)}this.setIndex(S),this.setAttribute("position",new gi(T,3)),this.setAttribute("normal",new gi(b,3)),this.setAttribute("uv",new gi(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xl(e.width,e.height,e.widthSegments,e.heightSegments)}}function qs(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function En(s){const e={};for(let n=0;n<s.length;n++){const r=qs(s[n]);for(const o in r)e[o]=r[o]}return e}function dx(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Rg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const hx={clone:qs,merge:En};var px=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pi extends Ks{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=px,this.fragmentShader=mx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.uniformsGroups=dx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class gx extends Pi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _x extends Ks{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vx extends Ks{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const bl=new ne,Cl=new $s,Mi=new ne;class Pg extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=Ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(bl,Cl,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bl,Cl,Mi.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(bl,Cl,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bl,Cl,Mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ar=new ne,Sm=new Dt,Mm=new Dt;class ti extends Pg{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=nd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Uu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nd*2*Math.atan(Math.tan(Uu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z),Ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z)}getViewSize(e,n){return this.getViewBounds(e,Sm,Mm),n.subVectors(Mm,Sm)}setViewOffset(e,n,r,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Uu*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,m=u.fullHeight;c+=u.offsetX*o/p,n-=u.offsetY*r/m,o*=u.width/p,r*=u.height/m}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Lg extends Pg{constructor(e=-1,n=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,d=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,u=c+m*this.view.width,d-=x*this.view.offsetY,p=d-x*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ks=-90,Bs=1;class xx extends wn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ti(ks,Bs,e,n);o.layers=this.layers,this.add(o);const c=new ti(ks,Bs,e,n);c.layers=this.layers,this.add(c);const u=new ti(ks,Bs,e,n);u.layers=this.layers,this.add(u);const d=new ti(ks,Bs,e,n);d.layers=this.layers,this.add(d);const p=new ti(ks,Bs,e,n);p.layers=this.layers,this.add(p);const m=new ti(ks,Bs,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,u,d,p]=n;for(const m of n)this.remove(m);if(e===Ai)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Bl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,p,m,x]=this.children,y=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(r,1,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(r,2,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(r,3,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(r,4,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),r.texture.generateMipmaps=b,e.setRenderTarget(r,5,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,x),e.setRenderTarget(y,g,S),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class yx extends ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Sx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ot("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Em(s,e,n,r){const o=Mx(r);switch(n){case pg:return s*e;case gg:return s*e/o.components*o.byteLength;case fd:return s*e/o.components*o.byteLength;case Xs:return s*e*2/o.components*o.byteLength;case dd:return s*e*2/o.components*o.byteLength;case mg:return s*e*3/o.components*o.byteLength;case mi:return s*e*4/o.components*o.byteLength;case hd:return s*e*4/o.components*o.byteLength;case Dl:case Nl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Il:case Ul:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wf:case bf:return Math.max(s,16)*Math.max(e,8)/4;case Tf:case Af:return Math.max(s,8)*Math.max(e,8)/2;case Cf:case Rf:case Lf:case Df:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Pf:case Nf:case If:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Uf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ff:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Of:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case kf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Bf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case zf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Vf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Hf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Gf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Wf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Xf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case jf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case qf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Yf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case $f:case Kf:case Zf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Qf:case Jf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ed:case td:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Mx(s){switch(s){case ni:case ug:return{byteLength:1,components:1};case Ha:case fg:case Ki:return{byteLength:2,components:1};case cd:case ud:return{byteLength:2,components:4};case Ri:case ld:case wi:return{byteLength:4,components:1};case dg:case hg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:od}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=od);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Dg(){let s=null,e=!1,n=null,r=null;function o(c,u){n(c,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function Ex(s){const e=new WeakMap;function n(d,p){const m=d.array,x=d.usage,y=m.byteLength,g=s.createBuffer();s.bindBuffer(p,g),s.bufferData(p,m,x),d.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)S=s.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:g,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:y}}function r(d,p,m){const x=p.array,y=p.updateRanges;if(s.bindBuffer(m,d),y.length===0)s.bufferSubData(m,0,x);else{y.sort((S,T)=>S.start-T.start);let g=0;for(let S=1;S<y.length;S++){const T=y[g],b=y[S];b.start<=T.start+T.count+1?T.count=Math.max(T.count,b.start+b.count-T.start):(++g,y[g]=b)}y.length=g+1;for(let S=0,T=y.length;S<T;S++){const b=y[S];s.bufferSubData(m,b.start*x.BYTES_PER_ELEMENT,x,b.start,b.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function u(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:o,remove:c,update:u}}var Tx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ax=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Px=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Lx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Nx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ix=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ux=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ox=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,zx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Wx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Xx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,jx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,qx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Yx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$x=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Kx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ey="gl_FragColor = linearToOutputTexel( gl_FragColor );",ty=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ny=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,iy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ry=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ay=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,oy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ly=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,py=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,my=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_y=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,My=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ey=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ty=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ay=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,by=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ry=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Py=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ly=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ny=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Iy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Oy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ky=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,By=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Hy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$y=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ky=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Jy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,aS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,oS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_S=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,SS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,MS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ES=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,TS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,PS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,LS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,DS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,NS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,IS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,US=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,FS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,HS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,WS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,XS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,YS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$S=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,QS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,JS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dt={alphahash_fragment:Tx,alphahash_pars_fragment:wx,alphamap_fragment:Ax,alphamap_pars_fragment:bx,alphatest_fragment:Cx,alphatest_pars_fragment:Rx,aomap_fragment:Px,aomap_pars_fragment:Lx,batching_pars_vertex:Dx,batching_vertex:Nx,begin_vertex:Ix,beginnormal_vertex:Ux,bsdfs:Fx,iridescence_fragment:Ox,bumpmap_pars_fragment:kx,clipping_planes_fragment:Bx,clipping_planes_pars_fragment:zx,clipping_planes_pars_vertex:Vx,clipping_planes_vertex:Hx,color_fragment:Gx,color_pars_fragment:Wx,color_pars_vertex:Xx,color_vertex:jx,common:qx,cube_uv_reflection_fragment:Yx,defaultnormal_vertex:$x,displacementmap_pars_vertex:Kx,displacementmap_vertex:Zx,emissivemap_fragment:Qx,emissivemap_pars_fragment:Jx,colorspace_fragment:ey,colorspace_pars_fragment:ty,envmap_fragment:ny,envmap_common_pars_fragment:iy,envmap_pars_fragment:ry,envmap_pars_vertex:sy,envmap_physical_pars_fragment:gy,envmap_vertex:ay,fog_vertex:oy,fog_pars_vertex:ly,fog_fragment:cy,fog_pars_fragment:uy,gradientmap_pars_fragment:fy,lightmap_pars_fragment:dy,lights_lambert_fragment:hy,lights_lambert_pars_fragment:py,lights_pars_begin:my,lights_toon_fragment:_y,lights_toon_pars_fragment:vy,lights_phong_fragment:xy,lights_phong_pars_fragment:yy,lights_physical_fragment:Sy,lights_physical_pars_fragment:My,lights_fragment_begin:Ey,lights_fragment_maps:Ty,lights_fragment_end:wy,logdepthbuf_fragment:Ay,logdepthbuf_pars_fragment:by,logdepthbuf_pars_vertex:Cy,logdepthbuf_vertex:Ry,map_fragment:Py,map_pars_fragment:Ly,map_particle_fragment:Dy,map_particle_pars_fragment:Ny,metalnessmap_fragment:Iy,metalnessmap_pars_fragment:Uy,morphinstance_vertex:Fy,morphcolor_vertex:Oy,morphnormal_vertex:ky,morphtarget_pars_vertex:By,morphtarget_vertex:zy,normal_fragment_begin:Vy,normal_fragment_maps:Hy,normal_pars_fragment:Gy,normal_pars_vertex:Wy,normal_vertex:Xy,normalmap_pars_fragment:jy,clearcoat_normal_fragment_begin:qy,clearcoat_normal_fragment_maps:Yy,clearcoat_pars_fragment:$y,iridescence_pars_fragment:Ky,opaque_fragment:Zy,packing:Qy,premultiplied_alpha_fragment:Jy,project_vertex:eS,dithering_fragment:tS,dithering_pars_fragment:nS,roughnessmap_fragment:iS,roughnessmap_pars_fragment:rS,shadowmap_pars_fragment:sS,shadowmap_pars_vertex:aS,shadowmap_vertex:oS,shadowmask_pars_fragment:lS,skinbase_vertex:cS,skinning_pars_vertex:uS,skinning_vertex:fS,skinnormal_vertex:dS,specularmap_fragment:hS,specularmap_pars_fragment:pS,tonemapping_fragment:mS,tonemapping_pars_fragment:gS,transmission_fragment:_S,transmission_pars_fragment:vS,uv_pars_fragment:xS,uv_pars_vertex:yS,uv_vertex:SS,worldpos_vertex:MS,background_vert:ES,background_frag:TS,backgroundCube_vert:wS,backgroundCube_frag:AS,cube_vert:bS,cube_frag:CS,depth_vert:RS,depth_frag:PS,distance_vert:LS,distance_frag:DS,equirect_vert:NS,equirect_frag:IS,linedashed_vert:US,linedashed_frag:FS,meshbasic_vert:OS,meshbasic_frag:kS,meshlambert_vert:BS,meshlambert_frag:zS,meshmatcap_vert:VS,meshmatcap_frag:HS,meshnormal_vert:GS,meshnormal_frag:WS,meshphong_vert:XS,meshphong_frag:jS,meshphysical_vert:qS,meshphysical_frag:YS,meshtoon_vert:$S,meshtoon_frag:KS,points_vert:ZS,points_frag:QS,shadow_vert:JS,shadow_frag:eM,sprite_vert:tM,sprite_frag:nM},Pe={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Ti={basic:{uniforms:En([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:En([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Rt(0)},envMapIntensity:{value:1}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:En([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:En([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:En([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Rt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:En([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:En([Pe.points,Pe.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:En([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:En([Pe.common,Pe.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:En([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:En([Pe.sprite,Pe.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:En([Pe.common,Pe.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:En([Pe.lights,Pe.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Ti.physical={uniforms:En([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Rl={r:0,b:0,g:0},$r=new Qi,iM=new Wt;function rM(s,e,n,r,o,c){const u=new Rt(0);let d=o===!0?0:1,p,m,x=null,y=0,g=null;function S(C){let N=C.isScene===!0?C.background:null;if(N&&N.isTexture){const L=C.backgroundBlurriness>0;N=e.get(N,L)}return N}function T(C){let N=!1;const L=S(C);L===null?_(u,d):L&&L.isColor&&(_(L,1),N=!0);const V=s.xr.getEnvironmentBlendMode();V==="additive"?n.buffers.color.setClear(0,0,0,1,c):V==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(s.autoClear||N)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function b(C,N){const L=S(N);L&&(L.isCubeTexture||L.mapping===Wl)?(m===void 0&&(m=new Ji(new Ya(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:qs(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(V,k,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),$r.copy(N.backgroundRotation),$r.x*=-1,$r.y*=-1,$r.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),m.material.uniforms.envMap.value=L,m.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(iM.makeRotationFromEuler($r)),m.material.toneMapped=Et.getTransfer(L.colorSpace)!==Lt,(x!==L||y!==L.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,x=L,y=L.version,g=s.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null)):L&&L.isTexture&&(p===void 0&&(p=new Ji(new Xl(2,2),new Pi({name:"BackgroundMaterial",uniforms:qs(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Rr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=L,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.toneMapped=Et.getTransfer(L.colorSpace)!==Lt,L.matrixAutoUpdate===!0&&L.updateMatrix(),p.material.uniforms.uvTransform.value.copy(L.matrix),(x!==L||y!==L.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,x=L,y=L.version,g=s.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null))}function _(C,N){C.getRGB(Rl,Rg(s)),n.buffers.color.setClear(Rl.r,Rl.g,Rl.b,N,c)}function v(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return u},setClearColor:function(C,N=1){u.set(C),d=N,_(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(C){d=C,_(u,d)},render:T,addToRenderList:b,dispose:v}}function sM(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let c=o,u=!1;function d(I,$,J,le,Z){let ie=!1;const X=y(I,le,J,$);c!==X&&(c=X,m(c.object)),ie=S(I,le,J,Z),ie&&T(I,le,J,Z),Z!==null&&e.update(Z,s.ELEMENT_ARRAY_BUFFER),(ie||u)&&(u=!1,L(I,$,J,le),Z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function p(){return s.createVertexArray()}function m(I){return s.bindVertexArray(I)}function x(I){return s.deleteVertexArray(I)}function y(I,$,J,le){const Z=le.wireframe===!0;let ie=r[$.id];ie===void 0&&(ie={},r[$.id]=ie);const X=I.isInstancedMesh===!0?I.id:0;let K=ie[X];K===void 0&&(K={},ie[X]=K);let oe=K[J.id];oe===void 0&&(oe={},K[J.id]=oe);let ce=oe[Z];return ce===void 0&&(ce=g(p()),oe[Z]=ce),ce}function g(I){const $=[],J=[],le=[];for(let Z=0;Z<n;Z++)$[Z]=0,J[Z]=0,le[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:J,attributeDivisors:le,object:I,attributes:{},index:null}}function S(I,$,J,le){const Z=c.attributes,ie=$.attributes;let X=0;const K=J.getAttributes();for(const oe in K)if(K[oe].location>=0){const U=Z[oe];let q=ie[oe];if(q===void 0&&(oe==="instanceMatrix"&&I.instanceMatrix&&(q=I.instanceMatrix),oe==="instanceColor"&&I.instanceColor&&(q=I.instanceColor)),U===void 0||U.attribute!==q||q&&U.data!==q.data)return!0;X++}return c.attributesNum!==X||c.index!==le}function T(I,$,J,le){const Z={},ie=$.attributes;let X=0;const K=J.getAttributes();for(const oe in K)if(K[oe].location>=0){let U=ie[oe];U===void 0&&(oe==="instanceMatrix"&&I.instanceMatrix&&(U=I.instanceMatrix),oe==="instanceColor"&&I.instanceColor&&(U=I.instanceColor));const q={};q.attribute=U,U&&U.data&&(q.data=U.data),Z[oe]=q,X++}c.attributes=Z,c.attributesNum=X,c.index=le}function b(){const I=c.newAttributes;for(let $=0,J=I.length;$<J;$++)I[$]=0}function _(I){v(I,0)}function v(I,$){const J=c.newAttributes,le=c.enabledAttributes,Z=c.attributeDivisors;J[I]=1,le[I]===0&&(s.enableVertexAttribArray(I),le[I]=1),Z[I]!==$&&(s.vertexAttribDivisor(I,$),Z[I]=$)}function C(){const I=c.newAttributes,$=c.enabledAttributes;for(let J=0,le=$.length;J<le;J++)$[J]!==I[J]&&(s.disableVertexAttribArray(J),$[J]=0)}function N(I,$,J,le,Z,ie,X){X===!0?s.vertexAttribIPointer(I,$,J,Z,ie):s.vertexAttribPointer(I,$,J,le,Z,ie)}function L(I,$,J,le){b();const Z=le.attributes,ie=J.getAttributes(),X=$.defaultAttributeValues;for(const K in ie){const oe=ie[K];if(oe.location>=0){let ce=Z[K];if(ce===void 0&&(K==="instanceMatrix"&&I.instanceMatrix&&(ce=I.instanceMatrix),K==="instanceColor"&&I.instanceColor&&(ce=I.instanceColor)),ce!==void 0){const U=ce.normalized,q=ce.itemSize,be=e.get(ce);if(be===void 0)continue;const Xe=be.buffer,Ze=be.type,re=be.bytesPerElement,me=Ze===s.INT||Ze===s.UNSIGNED_INT||ce.gpuType===ld;if(ce.isInterleavedBufferAttribute){const pe=ce.data,Fe=pe.stride,He=ce.offset;if(pe.isInstancedInterleavedBuffer){for(let nt=0;nt<oe.locationSize;nt++)v(oe.location+nt,pe.meshPerAttribute);I.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let nt=0;nt<oe.locationSize;nt++)_(oe.location+nt);s.bindBuffer(s.ARRAY_BUFFER,Xe);for(let nt=0;nt<oe.locationSize;nt++)N(oe.location+nt,q/oe.locationSize,Ze,U,Fe*re,(He+q/oe.locationSize*nt)*re,me)}else{if(ce.isInstancedBufferAttribute){for(let pe=0;pe<oe.locationSize;pe++)v(oe.location+pe,ce.meshPerAttribute);I.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let pe=0;pe<oe.locationSize;pe++)_(oe.location+pe);s.bindBuffer(s.ARRAY_BUFFER,Xe);for(let pe=0;pe<oe.locationSize;pe++)N(oe.location+pe,q/oe.locationSize,Ze,U,q*re,q/oe.locationSize*pe*re,me)}}else if(X!==void 0){const U=X[K];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(oe.location,U);break;case 3:s.vertexAttrib3fv(oe.location,U);break;case 4:s.vertexAttrib4fv(oe.location,U);break;default:s.vertexAttrib1fv(oe.location,U)}}}}C()}function V(){R();for(const I in r){const $=r[I];for(const J in $){const le=$[J];for(const Z in le){const ie=le[Z];for(const X in ie)x(ie[X].object),delete ie[X];delete le[Z]}}delete r[I]}}function k(I){if(r[I.id]===void 0)return;const $=r[I.id];for(const J in $){const le=$[J];for(const Z in le){const ie=le[Z];for(const X in ie)x(ie[X].object),delete ie[X];delete le[Z]}}delete r[I.id]}function O(I){for(const $ in r){const J=r[$];for(const le in J){const Z=J[le];if(Z[I.id]===void 0)continue;const ie=Z[I.id];for(const X in ie)x(ie[X].object),delete ie[X];delete Z[I.id]}}}function w(I){for(const $ in r){const J=r[$],le=I.isInstancedMesh===!0?I.id:0,Z=J[le];if(Z!==void 0){for(const ie in Z){const X=Z[ie];for(const K in X)x(X[K].object),delete X[K];delete Z[ie]}delete J[le],Object.keys(J).length===0&&delete r[$]}}}function R(){de(),u=!0,c!==o&&(c=o,m(c.object))}function de(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:R,resetDefaultState:de,dispose:V,releaseStatesOfGeometry:k,releaseStatesOfObject:w,releaseStatesOfProgram:O,initAttributes:b,enableAttribute:_,disableUnusedAttributes:C}}function aM(s,e,n){let r;function o(m){r=m}function c(m,x){s.drawArrays(r,m,x),n.update(x,r,1)}function u(m,x,y){y!==0&&(s.drawArraysInstanced(r,m,x,y),n.update(x,r,y))}function d(m,x,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,x,0,y);let S=0;for(let T=0;T<y;T++)S+=x[T];n.update(S,r,1)}function p(m,x,y,g){if(y===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<m.length;T++)u(m[T],x[T],g[T]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,x,0,g,0,y);let T=0;for(let b=0;b<y;b++)T+=x[b]*g[b];n.update(T,r,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function oM(s,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(O){return!(O!==mi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const w=O===Ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==ni&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==wi&&!w)}function p(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const x=p(m);x!==m&&(ot("WebGLRenderer:",m,"not supported, using",x,"instead."),m=x);const y=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),C=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),L=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),V=s.getParameter(s.MAX_SAMPLES),k=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:y,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:T,maxTextureSize:b,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:C,maxVaryings:N,maxFragmentUniforms:L,maxSamples:V,samples:k}}function lM(s){const e=this;let n=null,r=0,o=!1,c=!1;const u=new Zr,d=new ft,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(y,g){const S=y.length!==0||g||r!==0||o;return o=g,r=y.length,S},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(y,g){n=x(y,g,0)},this.setState=function(y,g,S){const T=y.clippingPlanes,b=y.clipIntersection,_=y.clipShadows,v=s.get(y);if(!o||T===null||T.length===0||c&&!_)c?x(null):m();else{const C=c?0:r,N=C*4;let L=v.clippingState||null;p.value=L,L=x(T,g,N,S);for(let V=0;V!==N;++V)L[V]=n[V];v.clippingState=L,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=C}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(y,g,S,T){const b=y!==null?y.length:0;let _=null;if(b!==0){if(_=p.value,T!==!0||_===null){const v=S+b*4,C=g.matrixWorldInverse;d.getNormalMatrix(C),(_===null||_.length<v)&&(_=new Float32Array(v));for(let N=0,L=S;N!==b;++N,L+=4)u.copy(y[N]).applyMatrix4(C,d),u.normal.toArray(_,L),_[L+3]=u.constant}p.value=_,p.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,_}}const Cr=4,Tm=[.125,.215,.35,.446,.526,.582],Jr=20,cM=256,ka=new Lg,wm=new Rt;let of=null,lf=0,cf=0,uf=!1;const uM=new ne;class Am{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,c={}){const{size:u=256,position:d=uM}=c;of=this._renderer.getRenderTarget(),lf=this._renderer.getActiveCubeFace(),cf=this._renderer.getActiveMipmapLevel(),uf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,o,p,d),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(of,lf,cf),this._renderer.xr.enabled=uf,e.scissorTest=!1,zs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ns||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),of=this._renderer.getRenderTarget(),lf=this._renderer.getActiveCubeFace(),cf=this._renderer.getActiveMipmapLevel(),uf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:Ki,format:mi,colorSpace:js,depthBuffer:!1},o=bm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bm(e,n,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=fM(c)),this._blurMaterial=hM(c,e,n),this._ggxMaterial=dM(c,e,n)}return o}_compileMaterial(e){const n=new Ji(new Gn,e);this._renderer.compile(n,ka)}_sceneToCubeUV(e,n,r,o,c){const p=new ti(90,1,n,r),m=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],y=this._renderer,g=y.autoClear,S=y.toneMapping;y.getClearColor(wm),y.toneMapping=bi,y.autoClear=!1,y.state.buffers.depth.getReversed()&&(y.setRenderTarget(o),y.clearDepth(),y.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ji(new Ya,new Eg({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,_=b.material;let v=!1;const C=e.background;C?C.isColor&&(_.color.copy(C),e.background=null,v=!0):(_.color.copy(wm),v=!0);for(let N=0;N<6;N++){const L=N%3;L===0?(p.up.set(0,m[N],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+x[N],c.y,c.z)):L===1?(p.up.set(0,0,m[N]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+x[N],c.z)):(p.up.set(0,m[N],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+x[N]));const V=this._cubeSize;zs(o,L*V,N>2?V:0,V,V),y.setRenderTarget(o),v&&y.render(b,p),y.render(e,p)}y.toneMapping=S,y.autoClear=g,e.background=C}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===ns||e.mapping===Ws;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cm());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;zs(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(u,ka)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[r];d.material=u;const p=u.uniforms,m=r/(this._lodMeshes.length-1),x=n/(this._lodMeshes.length-1),y=Math.sqrt(m*m-x*x),g=0+m*1.25,S=y*g,{_lodMax:T}=this,b=this._sizeLods[r],_=3*b*(r>T-Cr?r-T+Cr:0),v=4*(this._cubeSize-b);p.envMap.value=e.texture,p.roughness.value=S,p.mipInt.value=T-n,zs(c,_,v,3*b,2*b),o.setRenderTarget(c),o.render(d,ka),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=T-r,zs(e,_,v,3*b,2*b),o.setRenderTarget(e),o.render(d,ka)}_blur(e,n,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,u,d){const p=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&wt("blur direction must be either latitudinal or longitudinal!");const x=3,y=this._lodMeshes[o];y.material=m;const g=m.uniforms,S=this._sizeLods[r]-1,T=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Jr-1),b=c/T,_=isFinite(c)?1+Math.floor(x*b):Jr;_>Jr&&ot(`sigmaRadians, ${c}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Jr}`);const v=[];let C=0;for(let O=0;O<Jr;++O){const w=O/b,R=Math.exp(-w*w/2);v.push(R),O===0?C+=R:O<_&&(C+=2*R)}for(let O=0;O<v.length;O++)v[O]=v[O]/C;g.envMap.value=e.texture,g.samples.value=_,g.weights.value=v,g.latitudinal.value=u==="latitudinal",d&&(g.poleAxis.value=d);const{_lodMax:N}=this;g.dTheta.value=T,g.mipInt.value=N-r;const L=this._sizeLods[o],V=3*L*(o>N-Cr?o-N+Cr:0),k=4*(this._cubeSize-L);zs(n,V,k,3*L,2*L),p.setRenderTarget(n),p.render(y,ka)}}function fM(s){const e=[],n=[],r=[];let o=s;const c=s-Cr+1+Tm.length;for(let u=0;u<c;u++){const d=Math.pow(2,o);e.push(d);let p=1/d;u>s-Cr?p=Tm[u-s+Cr-1]:u===0&&(p=0),n.push(p);const m=1/(d-2),x=-m,y=1+m,g=[x,x,y,x,y,y,x,x,y,y,x,y],S=6,T=6,b=3,_=2,v=1,C=new Float32Array(b*T*S),N=new Float32Array(_*T*S),L=new Float32Array(v*T*S);for(let k=0;k<S;k++){const O=k%3*2/3-1,w=k>2?0:-1,R=[O,w,0,O+2/3,w,0,O+2/3,w+1,0,O,w,0,O+2/3,w+1,0,O,w+1,0];C.set(R,b*T*k),N.set(g,_*T*k);const de=[k,k,k,k,k,k];L.set(de,v*T*k)}const V=new Gn;V.setAttribute("position",new ii(C,b)),V.setAttribute("uv",new ii(N,_)),V.setAttribute("faceIndex",new ii(L,v)),r.push(new Ji(V,null)),o>Cr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function bm(s,e,n){const r=new Ci(s,e,n);return r.texture.mapping=Wl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function zs(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function dM(s,e,n){return new Pi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:cM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:jl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function hM(s,e,n){const r=new Float32Array(Jr),o=new ne(0,1,0);return new Pi({name:"SphericalGaussianBlur",defines:{n:Jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Cm(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Rm(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function jl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Ng extends Ci{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new bg(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Ya(5,5,5),c=new Pi({name:"CubemapFromEquirect",uniforms:qs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Un,blending:Yi});c.uniforms.tEquirect.value=n;const u=new Ji(o,c),d=n.minFilter;return n.minFilter===es&&(n.minFilter=_n),new xx(1,10,this).update(e,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,o);e.setRenderTarget(c)}}function pM(s){let e=new WeakMap,n=new WeakMap,r=null;function o(g,S=!1){return g==null?null:S?u(g):c(g)}function c(g){if(g&&g.isTexture){const S=g.mapping;if(S===Du||S===Nu)if(e.has(g)){const T=e.get(g).texture;return d(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const b=new Ng(T.height);return b.fromEquirectangularTexture(s,g),e.set(g,b),g.addEventListener("dispose",m),d(b.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const S=g.mapping,T=S===Du||S===Nu,b=S===ns||S===Ws;if(T||b){let _=n.get(g);const v=_!==void 0?_.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==v)return r===null&&(r=new Am(s)),_=T?r.fromEquirectangular(g,_):r.fromCubemap(g,_),_.texture.pmremVersion=g.pmremVersion,n.set(g,_),_.texture;if(_!==void 0)return _.texture;{const C=g.image;return T&&C&&C.height>0||b&&C&&p(C)?(r===null&&(r=new Am(s)),_=T?r.fromEquirectangular(g):r.fromCubemap(g),_.texture.pmremVersion=g.pmremVersion,n.set(g,_),g.addEventListener("dispose",x),_.texture):null}}}return g}function d(g,S){return S===Du?g.mapping=ns:S===Nu&&(g.mapping=Ws),g}function p(g){let S=0;const T=6;for(let b=0;b<T;b++)g[b]!==void 0&&S++;return S===T}function m(g){const S=g.target;S.removeEventListener("dispose",m);const T=e.get(S);T!==void 0&&(e.delete(S),T.dispose())}function x(g){const S=g.target;S.removeEventListener("dispose",x);const T=n.get(S);T!==void 0&&(n.delete(S),T.dispose())}function y(){e=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:y}}function mM(s){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&Vl("WebGLRenderer: "+r+" extension not supported."),o}}}function gM(s,e,n,r){const o={},c=new WeakMap;function u(y){const g=y.target;g.index!==null&&e.remove(g.index);for(const T in g.attributes)e.remove(g.attributes[T]);g.removeEventListener("dispose",u),delete o[g.id];const S=c.get(g);S&&(e.remove(S),c.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function d(y,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,n.memory.geometries++),g}function p(y){const g=y.attributes;for(const S in g)e.update(g[S],s.ARRAY_BUFFER)}function m(y){const g=[],S=y.index,T=y.attributes.position;let b=0;if(T===void 0)return;if(S!==null){const C=S.array;b=S.version;for(let N=0,L=C.length;N<L;N+=3){const V=C[N+0],k=C[N+1],O=C[N+2];g.push(V,k,k,O,O,V)}}else{const C=T.array;b=T.version;for(let N=0,L=C.length/3-1;N<L;N+=3){const V=N+0,k=N+1,O=N+2;g.push(V,k,k,O,O,V)}}const _=new(T.count>=65535?Mg:Sg)(g,1);_.version=b;const v=c.get(y);v&&e.remove(v),c.set(y,_)}function x(y){const g=c.get(y);if(g){const S=y.index;S!==null&&g.version<S.version&&m(y)}else m(y);return c.get(y)}return{get:d,update:p,getWireframeAttribute:x}}function _M(s,e,n){let r;function o(g){r=g}let c,u;function d(g){c=g.type,u=g.bytesPerElement}function p(g,S){s.drawElements(r,S,c,g*u),n.update(S,r,1)}function m(g,S,T){T!==0&&(s.drawElementsInstanced(r,S,c,g*u,T),n.update(S,r,T))}function x(g,S,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,g,0,T);let _=0;for(let v=0;v<T;v++)_+=S[v];n.update(_,r,1)}function y(g,S,T,b){if(T===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let v=0;v<g.length;v++)m(g[v]/u,S[v],b[v]);else{_.multiDrawElementsInstancedWEBGL(r,S,0,c,g,0,b,0,T);let v=0;for(let C=0;C<T;C++)v+=S[C]*b[C];n.update(v,r,1)}}this.setMode=o,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=x,this.renderMultiDrawInstances=y}function vM(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,d){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=d*(c/3);break;case s.LINES:n.lines+=d*(c/2);break;case s.LINE_STRIP:n.lines+=d*(c-1);break;case s.LINE_LOOP:n.lines+=d*c;break;case s.POINTS:n.points+=d*c;break;default:wt("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function xM(s,e,n){const r=new WeakMap,o=new $t;function c(u,d,p){const m=u.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,y=x!==void 0?x.length:0;let g=r.get(d);if(g===void 0||g.count!==y){let de=function(){w.dispose(),r.delete(d),d.removeEventListener("dispose",de)};var S=de;g!==void 0&&g.texture.dispose();const T=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,_=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],C=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let L=0;T===!0&&(L=1),b===!0&&(L=2),_===!0&&(L=3);let V=d.attributes.position.count*L,k=1;V>e.maxTextureSize&&(k=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const O=new Float32Array(V*k*4*y),w=new vg(O,V,k,y);w.type=wi,w.needsUpdate=!0;const R=L*4;for(let I=0;I<y;I++){const $=v[I],J=C[I],le=N[I],Z=V*k*4*I;for(let ie=0;ie<$.count;ie++){const X=ie*R;T===!0&&(o.fromBufferAttribute($,ie),O[Z+X+0]=o.x,O[Z+X+1]=o.y,O[Z+X+2]=o.z,O[Z+X+3]=0),b===!0&&(o.fromBufferAttribute(J,ie),O[Z+X+4]=o.x,O[Z+X+5]=o.y,O[Z+X+6]=o.z,O[Z+X+7]=0),_===!0&&(o.fromBufferAttribute(le,ie),O[Z+X+8]=o.x,O[Z+X+9]=o.y,O[Z+X+10]=o.z,O[Z+X+11]=le.itemSize===4?o.w:1)}}g={count:y,texture:w,size:new Dt(V,k)},r.set(d,g),d.addEventListener("dispose",de)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let T=0;for(let _=0;_<m.length;_++)T+=m[_];const b=d.morphTargetsRelative?1:1-T;p.getUniforms().setValue(s,"morphTargetBaseInfluence",b),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",g.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:c}}function yM(s,e,n,r,o){let c=new WeakMap;function u(m){const x=o.render.frame,y=m.geometry,g=e.get(m,y);if(c.get(g)!==x&&(e.update(g),c.set(g,x)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),c.get(m)!==x&&(n.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,s.ARRAY_BUFFER),c.set(m,x))),m.isSkinnedMesh){const S=m.skeleton;c.get(S)!==x&&(S.update(),c.set(S,x))}return g}function d(){c=new WeakMap}function p(m){const x=m.target;x.removeEventListener("dispose",p),r.releaseStatesOfObject(x),n.remove(x.instanceMatrix),x.instanceColor!==null&&n.remove(x.instanceColor)}return{update:u,dispose:d}}const SM={[ng]:"LINEAR_TONE_MAPPING",[ig]:"REINHARD_TONE_MAPPING",[rg]:"CINEON_TONE_MAPPING",[sg]:"ACES_FILMIC_TONE_MAPPING",[og]:"AGX_TONE_MAPPING",[lg]:"NEUTRAL_TONE_MAPPING",[ag]:"CUSTOM_TONE_MAPPING"};function MM(s,e,n,r,o){const c=new Ci(e,n,{type:s,depthBuffer:r,stencilBuffer:o}),u=new Ci(e,n,{type:Ki,depthBuffer:!1,stencilBuffer:!1}),d=new Gn;d.setAttribute("position",new gi([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new gi([0,2,0,0,2,0],2));const p=new gx({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),m=new Ji(d,p),x=new Lg(-1,1,1,-1,0,1);let y=null,g=null,S=!1,T,b=null,_=[],v=!1;this.setSize=function(C,N){c.setSize(C,N),u.setSize(C,N);for(let L=0;L<_.length;L++){const V=_[L];V.setSize&&V.setSize(C,N)}},this.setEffects=function(C){_=C,v=_.length>0&&_[0].isRenderPass===!0;const N=c.width,L=c.height;for(let V=0;V<_.length;V++){const k=_[V];k.setSize&&k.setSize(N,L)}},this.begin=function(C,N){if(S||C.toneMapping===bi&&_.length===0)return!1;if(b=N,N!==null){const L=N.width,V=N.height;(c.width!==L||c.height!==V)&&this.setSize(L,V)}return v===!1&&C.setRenderTarget(c),T=C.toneMapping,C.toneMapping=bi,!0},this.hasRenderPass=function(){return v},this.end=function(C,N){C.toneMapping=T,S=!0;let L=c,V=u;for(let k=0;k<_.length;k++){const O=_[k];if(O.enabled!==!1&&(O.render(C,V,L,N),O.needsSwap!==!1)){const w=L;L=V,V=w}}if(y!==C.outputColorSpace||g!==C.toneMapping){y=C.outputColorSpace,g=C.toneMapping,p.defines={},Et.getTransfer(y)===Lt&&(p.defines.SRGB_TRANSFER="");const k=SM[g];k&&(p.defines[k]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=L.texture,C.setRenderTarget(b),C.render(m,x),b=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){c.dispose(),u.dispose(),d.dispose(),p.dispose()}}const Ig=new Tn,rd=new Wa(1,1),Ug=new vg,Fg=new Wv,Og=new bg,Pm=[],Lm=[],Dm=new Float32Array(16),Nm=new Float32Array(9),Im=new Float32Array(4);function Zs(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let c=Pm[o];if(c===void 0&&(c=new Float32Array(o),Pm[o]=c),e!==0){r.toArray(c,0);for(let u=1,d=0;u!==e;++u)d+=n,s[u].toArray(c,d)}return c}function en(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function tn(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function ql(s,e){let n=Lm[e];n===void 0&&(n=new Int32Array(e),Lm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function EM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function TM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;s.uniform2fv(this.addr,e),tn(n,e)}}function wM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(en(n,e))return;s.uniform3fv(this.addr,e),tn(n,e)}}function AM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;s.uniform4fv(this.addr,e),tn(n,e)}}function bM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(en(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),tn(n,e)}else{if(en(n,r))return;Im.set(r),s.uniformMatrix2fv(this.addr,!1,Im),tn(n,r)}}function CM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(en(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),tn(n,e)}else{if(en(n,r))return;Nm.set(r),s.uniformMatrix3fv(this.addr,!1,Nm),tn(n,r)}}function RM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(en(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),tn(n,e)}else{if(en(n,r))return;Dm.set(r),s.uniformMatrix4fv(this.addr,!1,Dm),tn(n,r)}}function PM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function LM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;s.uniform2iv(this.addr,e),tn(n,e)}}function DM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(en(n,e))return;s.uniform3iv(this.addr,e),tn(n,e)}}function NM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;s.uniform4iv(this.addr,e),tn(n,e)}}function IM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function UM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;s.uniform2uiv(this.addr,e),tn(n,e)}}function FM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(en(n,e))return;s.uniform3uiv(this.addr,e),tn(n,e)}}function OM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;s.uniform4uiv(this.addr,e),tn(n,e)}}function kM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(rd.compareFunction=n.isReversedDepthBuffer()?md:pd,c=rd):c=Ig,n.setTexture2D(e||c,o)}function BM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||Fg,o)}function zM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||Og,o)}function VM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||Ug,o)}function HM(s){switch(s){case 5126:return EM;case 35664:return TM;case 35665:return wM;case 35666:return AM;case 35674:return bM;case 35675:return CM;case 35676:return RM;case 5124:case 35670:return PM;case 35667:case 35671:return LM;case 35668:case 35672:return DM;case 35669:case 35673:return NM;case 5125:return IM;case 36294:return UM;case 36295:return FM;case 36296:return OM;case 35678:case 36198:case 36298:case 36306:case 35682:return kM;case 35679:case 36299:case 36307:return BM;case 35680:case 36300:case 36308:case 36293:return zM;case 36289:case 36303:case 36311:case 36292:return VM}}function GM(s,e){s.uniform1fv(this.addr,e)}function WM(s,e){const n=Zs(e,this.size,2);s.uniform2fv(this.addr,n)}function XM(s,e){const n=Zs(e,this.size,3);s.uniform3fv(this.addr,n)}function jM(s,e){const n=Zs(e,this.size,4);s.uniform4fv(this.addr,n)}function qM(s,e){const n=Zs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function YM(s,e){const n=Zs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function $M(s,e){const n=Zs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function KM(s,e){s.uniform1iv(this.addr,e)}function ZM(s,e){s.uniform2iv(this.addr,e)}function QM(s,e){s.uniform3iv(this.addr,e)}function JM(s,e){s.uniform4iv(this.addr,e)}function eE(s,e){s.uniform1uiv(this.addr,e)}function tE(s,e){s.uniform2uiv(this.addr,e)}function nE(s,e){s.uniform3uiv(this.addr,e)}function iE(s,e){s.uniform4uiv(this.addr,e)}function rE(s,e,n){const r=this.cache,o=e.length,c=ql(n,o);en(r,c)||(s.uniform1iv(this.addr,c),tn(r,c));let u;this.type===s.SAMPLER_2D_SHADOW?u=rd:u=Ig;for(let d=0;d!==o;++d)n.setTexture2D(e[d]||u,c[d])}function sE(s,e,n){const r=this.cache,o=e.length,c=ql(n,o);en(r,c)||(s.uniform1iv(this.addr,c),tn(r,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||Fg,c[u])}function aE(s,e,n){const r=this.cache,o=e.length,c=ql(n,o);en(r,c)||(s.uniform1iv(this.addr,c),tn(r,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||Og,c[u])}function oE(s,e,n){const r=this.cache,o=e.length,c=ql(n,o);en(r,c)||(s.uniform1iv(this.addr,c),tn(r,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||Ug,c[u])}function lE(s){switch(s){case 5126:return GM;case 35664:return WM;case 35665:return XM;case 35666:return jM;case 35674:return qM;case 35675:return YM;case 35676:return $M;case 5124:case 35670:return KM;case 35667:case 35671:return ZM;case 35668:case 35672:return QM;case 35669:case 35673:return JM;case 5125:return eE;case 36294:return tE;case 36295:return nE;case 36296:return iE;case 35678:case 36198:case 36298:case 36306:case 35682:return rE;case 35679:case 36299:case 36307:return sE;case 35680:case 36300:case 36308:case 36293:return aE;case 36289:case 36303:case 36311:case 36292:return oE}}class cE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=HM(n.type)}}class uE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=lE(n.type)}}class fE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const d=o[c];d.setValue(e,n[d.id],r)}}}const ff=/(\w+)(\])?(\[|\.)?/g;function Um(s,e){s.seq.push(e),s.map[e.id]=e}function dE(s,e,n){const r=s.name,o=r.length;for(ff.lastIndex=0;;){const c=ff.exec(r),u=ff.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&u+2===o){Um(n,m===void 0?new cE(d,s,e):new uE(d,s,e));break}else{let y=n.map[d];y===void 0&&(y=new fE(d),Um(n,y)),n=y}}}class Fl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const d=e.getActiveUniform(n,u),p=e.getUniformLocation(n,d.name);dE(d,p,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,u=n.length;c!==u;++c){const d=n[c],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&r.push(u)}return r}}function Fm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const hE=37297;let pE=0;function mE(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${n[u]}`)}return r.join(`
`)}const Om=new ft;function gE(s){Et._getMatrix(Om,Et.workingColorSpace,s);const e=`mat3( ${Om.elements.map(n=>n.toFixed(4))} )`;switch(Et.getTransfer(s)){case kl:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function km(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const d=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+mE(s.getShaderSource(e),d)}else return c}function _E(s,e){const n=gE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const vE={[ng]:"Linear",[ig]:"Reinhard",[rg]:"Cineon",[sg]:"ACESFilmic",[og]:"AgX",[lg]:"Neutral",[ag]:"Custom"};function xE(s,e){const n=vE[e];return n===void 0?(ot("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Pl=new ne;function yE(){Et.getLuminanceCoefficients(Pl);const s=Pl.x.toFixed(4),e=Pl.y.toFixed(4),n=Pl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function SE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Va).join(`
`)}function ME(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function EE(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=s.getActiveAttrib(e,o),u=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),n[u]={type:c.type,location:s.getAttribLocation(e,u),locationSize:d}}return n}function Va(s){return s!==""}function Bm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const TE=/^[ \t]*#include +<([\w\d./]+)>/gm;function sd(s){return s.replace(TE,AE)}const wE=new Map;function AE(s,e){let n=dt[e];if(n===void 0){const r=wE.get(e);if(r!==void 0)n=dt[r],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return sd(n)}const bE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vm(s){return s.replace(bE,CE)}function CE(s,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Hm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const RE={[Ll]:"SHADOWMAP_TYPE_PCF",[za]:"SHADOWMAP_TYPE_VSM"};function PE(s){return RE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const LE={[ns]:"ENVMAP_TYPE_CUBE",[Ws]:"ENVMAP_TYPE_CUBE",[Wl]:"ENVMAP_TYPE_CUBE_UV"};function DE(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":LE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const NE={[Ws]:"ENVMAP_MODE_REFRACTION"};function IE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":NE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const UE={[tg]:"ENVMAP_BLENDING_MULTIPLY",[Mv]:"ENVMAP_BLENDING_MIX",[Ev]:"ENVMAP_BLENDING_ADD"};function FE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":UE[s.combine]||"ENVMAP_BLENDING_NONE"}function OE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function kE(s,e,n,r){const o=s.getContext(),c=n.defines;let u=n.vertexShader,d=n.fragmentShader;const p=PE(n),m=DE(n),x=IE(n),y=FE(n),g=OE(n),S=SE(n),T=ME(c),b=o.createProgram();let _,v,C=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Va).join(`
`),_.length>0&&(_+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Va).join(`
`),v.length>0&&(v+=`
`)):(_=[Hm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+x:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Va).join(`
`),v=[Hm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+x:"",n.envMap?"#define "+y:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==bi?"#define TONE_MAPPING":"",n.toneMapping!==bi?dt.tonemapping_pars_fragment:"",n.toneMapping!==bi?xE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,_E("linearToOutputTexel",n.outputColorSpace),yE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Va).join(`
`)),u=sd(u),u=Bm(u,n),u=zm(u,n),d=sd(d),d=Bm(d,n),d=zm(d,n),u=Vm(u),d=Vm(d),n.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,_=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,v=["#define varying in",n.glslVersion===Qp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Qp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const N=C+_+u,L=C+v+d,V=Fm(o,o.VERTEX_SHADER,N),k=Fm(o,o.FRAGMENT_SHADER,L);o.attachShader(b,V),o.attachShader(b,k),n.index0AttributeName!==void 0?o.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(b,0,"position"),o.linkProgram(b);function O(I){if(s.debug.checkShaderErrors){const $=o.getProgramInfoLog(b)||"",J=o.getShaderInfoLog(V)||"",le=o.getShaderInfoLog(k)||"",Z=$.trim(),ie=J.trim(),X=le.trim();let K=!0,oe=!0;if(o.getProgramParameter(b,o.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,b,V,k);else{const ce=km(o,V,"vertex"),U=km(o,k,"fragment");wt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(b,o.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+Z+`
`+ce+`
`+U)}else Z!==""?ot("WebGLProgram: Program Info Log:",Z):(ie===""||X==="")&&(oe=!1);oe&&(I.diagnostics={runnable:K,programLog:Z,vertexShader:{log:ie,prefix:_},fragmentShader:{log:X,prefix:v}})}o.deleteShader(V),o.deleteShader(k),w=new Fl(o,b),R=EE(o,b)}let w;this.getUniforms=function(){return w===void 0&&O(this),w};let R;this.getAttributes=function(){return R===void 0&&O(this),R};let de=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return de===!1&&(de=o.getProgramParameter(b,hE)),de},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=pE++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=V,this.fragmentShader=k,this}let BE=0;class zE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new VE(e),n.set(e,r)),r}}class VE{constructor(e){this.id=BE++,this.code=e,this.usedTimes=0}}function HE(s,e,n,r,o,c){const u=new xg,d=new zE,p=new Set,m=[],x=new Map,y=r.logarithmicDepthBuffer;let g=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(w){return p.add(w),w===0?"uv":`uv${w}`}function b(w,R,de,I,$){const J=I.fog,le=$.geometry,Z=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?I.environment:null,ie=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,X=e.get(w.envMap||Z,ie),K=X&&X.mapping===Wl?X.image.height:null,oe=S[w.type];w.precision!==null&&(g=r.getMaxPrecision(w.precision),g!==w.precision&&ot("WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const ce=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,U=ce!==void 0?ce.length:0;let q=0;le.morphAttributes.position!==void 0&&(q=1),le.morphAttributes.normal!==void 0&&(q=2),le.morphAttributes.color!==void 0&&(q=3);let be,Xe,Ze,re;if(oe){const St=Ti[oe];be=St.vertexShader,Xe=St.fragmentShader}else be=w.vertexShader,Xe=w.fragmentShader,d.update(w),Ze=d.getVertexShaderID(w),re=d.getFragmentShaderID(w);const me=s.getRenderTarget(),pe=s.state.buffers.depth.getReversed(),Fe=$.isInstancedMesh===!0,He=$.isBatchedMesh===!0,nt=!!w.map,Xt=!!w.matcap,ht=!!X,xt=!!w.aoMap,bt=!!w.lightMap,ct=!!w.bumpMap,Ft=!!w.normalMap,z=!!w.displacementMap,Bt=!!w.emissiveMap,mt=!!w.metalnessMap,yt=!!w.roughnessMap,Ge=w.anisotropy>0,P=w.clearcoat>0,M=w.dispersion>0,W=w.iridescence>0,he=w.sheen>0,ge=w.transmission>0,ue=Ge&&!!w.anisotropyMap,ke=P&&!!w.clearcoatMap,we=P&&!!w.clearcoatNormalMap,Ye=P&&!!w.clearcoatRoughnessMap,it=W&&!!w.iridescenceMap,ye=W&&!!w.iridescenceThicknessMap,Te=he&&!!w.sheenColorMap,We=he&&!!w.sheenRoughnessMap,Be=!!w.specularMap,Le=!!w.specularColorMap,lt=!!w.specularIntensityMap,H=ge&&!!w.transmissionMap,Ae=ge&&!!w.thicknessMap,Me=!!w.gradientMap,De=!!w.alphaMap,Se=w.alphaTest>0,fe=!!w.alphaHash,ze=!!w.extensions;let rt=bi;w.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(rt=s.toneMapping);const Pt={shaderID:oe,shaderType:w.type,shaderName:w.name,vertexShader:be,fragmentShader:Xe,defines:w.defines,customVertexShaderID:Ze,customFragmentShaderID:re,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:He,batchingColor:He&&$._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&$.instanceColor!==null,instancingMorph:Fe&&$.morphTexture!==null,outputColorSpace:me===null?s.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:js,alphaToCoverage:!!w.alphaToCoverage,map:nt,matcap:Xt,envMap:ht,envMapMode:ht&&X.mapping,envMapCubeUVHeight:K,aoMap:xt,lightMap:bt,bumpMap:ct,normalMap:Ft,displacementMap:z,emissiveMap:Bt,normalMapObjectSpace:Ft&&w.normalMapType===bv,normalMapTangentSpace:Ft&&w.normalMapType===Av,metalnessMap:mt,roughnessMap:yt,anisotropy:Ge,anisotropyMap:ue,clearcoat:P,clearcoatMap:ke,clearcoatNormalMap:we,clearcoatRoughnessMap:Ye,dispersion:M,iridescence:W,iridescenceMap:it,iridescenceThicknessMap:ye,sheen:he,sheenColorMap:Te,sheenRoughnessMap:We,specularMap:Be,specularColorMap:Le,specularIntensityMap:lt,transmission:ge,transmissionMap:H,thicknessMap:Ae,gradientMap:Me,opaque:w.transparent===!1&&w.blending===Vs&&w.alphaToCoverage===!1,alphaMap:De,alphaTest:Se,alphaHash:fe,combine:w.combine,mapUv:nt&&T(w.map.channel),aoMapUv:xt&&T(w.aoMap.channel),lightMapUv:bt&&T(w.lightMap.channel),bumpMapUv:ct&&T(w.bumpMap.channel),normalMapUv:Ft&&T(w.normalMap.channel),displacementMapUv:z&&T(w.displacementMap.channel),emissiveMapUv:Bt&&T(w.emissiveMap.channel),metalnessMapUv:mt&&T(w.metalnessMap.channel),roughnessMapUv:yt&&T(w.roughnessMap.channel),anisotropyMapUv:ue&&T(w.anisotropyMap.channel),clearcoatMapUv:ke&&T(w.clearcoatMap.channel),clearcoatNormalMapUv:we&&T(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ye&&T(w.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&T(w.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&T(w.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&T(w.sheenColorMap.channel),sheenRoughnessMapUv:We&&T(w.sheenRoughnessMap.channel),specularMapUv:Be&&T(w.specularMap.channel),specularColorMapUv:Le&&T(w.specularColorMap.channel),specularIntensityMapUv:lt&&T(w.specularIntensityMap.channel),transmissionMapUv:H&&T(w.transmissionMap.channel),thicknessMapUv:Ae&&T(w.thicknessMap.channel),alphaMapUv:De&&T(w.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(Ft||Ge),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!le.attributes.uv&&(nt||De),fog:!!J,useFog:w.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||le.attributes.normal===void 0&&Ft===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:pe,skinning:$.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:q,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&de.length>0,shadowMapType:s.shadowMap.type,toneMapping:rt,decodeVideoTexture:nt&&w.map.isVideoTexture===!0&&Et.getTransfer(w.map.colorSpace)===Lt,decodeVideoTextureEmissive:Bt&&w.emissiveMap.isVideoTexture===!0&&Et.getTransfer(w.emissiveMap.colorSpace)===Lt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ji,flipSided:w.side===Un,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ze&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&w.extensions.multiDraw===!0||He)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Pt.vertexUv1s=p.has(1),Pt.vertexUv2s=p.has(2),Pt.vertexUv3s=p.has(3),p.clear(),Pt}function _(w){const R=[];if(w.shaderID?R.push(w.shaderID):(R.push(w.customVertexShaderID),R.push(w.customFragmentShaderID)),w.defines!==void 0)for(const de in w.defines)R.push(de),R.push(w.defines[de]);return w.isRawShaderMaterial===!1&&(v(R,w),C(R,w),R.push(s.outputColorSpace)),R.push(w.customProgramCacheKey),R.join()}function v(w,R){w.push(R.precision),w.push(R.outputColorSpace),w.push(R.envMapMode),w.push(R.envMapCubeUVHeight),w.push(R.mapUv),w.push(R.alphaMapUv),w.push(R.lightMapUv),w.push(R.aoMapUv),w.push(R.bumpMapUv),w.push(R.normalMapUv),w.push(R.displacementMapUv),w.push(R.emissiveMapUv),w.push(R.metalnessMapUv),w.push(R.roughnessMapUv),w.push(R.anisotropyMapUv),w.push(R.clearcoatMapUv),w.push(R.clearcoatNormalMapUv),w.push(R.clearcoatRoughnessMapUv),w.push(R.iridescenceMapUv),w.push(R.iridescenceThicknessMapUv),w.push(R.sheenColorMapUv),w.push(R.sheenRoughnessMapUv),w.push(R.specularMapUv),w.push(R.specularColorMapUv),w.push(R.specularIntensityMapUv),w.push(R.transmissionMapUv),w.push(R.thicknessMapUv),w.push(R.combine),w.push(R.fogExp2),w.push(R.sizeAttenuation),w.push(R.morphTargetsCount),w.push(R.morphAttributeCount),w.push(R.numDirLights),w.push(R.numPointLights),w.push(R.numSpotLights),w.push(R.numSpotLightMaps),w.push(R.numHemiLights),w.push(R.numRectAreaLights),w.push(R.numDirLightShadows),w.push(R.numPointLightShadows),w.push(R.numSpotLightShadows),w.push(R.numSpotLightShadowsWithMaps),w.push(R.numLightProbes),w.push(R.shadowMapType),w.push(R.toneMapping),w.push(R.numClippingPlanes),w.push(R.numClipIntersection),w.push(R.depthPacking)}function C(w,R){u.disableAll(),R.instancing&&u.enable(0),R.instancingColor&&u.enable(1),R.instancingMorph&&u.enable(2),R.matcap&&u.enable(3),R.envMap&&u.enable(4),R.normalMapObjectSpace&&u.enable(5),R.normalMapTangentSpace&&u.enable(6),R.clearcoat&&u.enable(7),R.iridescence&&u.enable(8),R.alphaTest&&u.enable(9),R.vertexColors&&u.enable(10),R.vertexAlphas&&u.enable(11),R.vertexUv1s&&u.enable(12),R.vertexUv2s&&u.enable(13),R.vertexUv3s&&u.enable(14),R.vertexTangents&&u.enable(15),R.anisotropy&&u.enable(16),R.alphaHash&&u.enable(17),R.batching&&u.enable(18),R.dispersion&&u.enable(19),R.batchingColor&&u.enable(20),R.gradientMap&&u.enable(21),w.push(u.mask),u.disableAll(),R.fog&&u.enable(0),R.useFog&&u.enable(1),R.flatShading&&u.enable(2),R.logarithmicDepthBuffer&&u.enable(3),R.reversedDepthBuffer&&u.enable(4),R.skinning&&u.enable(5),R.morphTargets&&u.enable(6),R.morphNormals&&u.enable(7),R.morphColors&&u.enable(8),R.premultipliedAlpha&&u.enable(9),R.shadowMapEnabled&&u.enable(10),R.doubleSided&&u.enable(11),R.flipSided&&u.enable(12),R.useDepthPacking&&u.enable(13),R.dithering&&u.enable(14),R.transmission&&u.enable(15),R.sheen&&u.enable(16),R.opaque&&u.enable(17),R.pointsUvs&&u.enable(18),R.decodeVideoTexture&&u.enable(19),R.decodeVideoTextureEmissive&&u.enable(20),R.alphaToCoverage&&u.enable(21),w.push(u.mask)}function N(w){const R=S[w.type];let de;if(R){const I=Ti[R];de=hx.clone(I.uniforms)}else de=w.uniforms;return de}function L(w,R){let de=x.get(R);return de!==void 0?++de.usedTimes:(de=new kE(s,R,w,o),m.push(de),x.set(R,de)),de}function V(w){if(--w.usedTimes===0){const R=m.indexOf(w);m[R]=m[m.length-1],m.pop(),x.delete(w.cacheKey),w.destroy()}}function k(w){d.remove(w)}function O(){d.dispose()}return{getParameters:b,getProgramCacheKey:_,getUniforms:N,acquireProgram:L,releaseProgram:V,releaseShaderCache:k,programs:m,dispose:O}}function GE(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function o(u,d,p){s.get(u)[d]=p}function c(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:c}}function WE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Gm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Wm(){const s=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function u(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function d(g,S,T,b,_,v){let C=s[e];return C===void 0?(C={id:g.id,object:g,geometry:S,material:T,materialVariant:u(g),groupOrder:b,renderOrder:g.renderOrder,z:_,group:v},s[e]=C):(C.id=g.id,C.object=g,C.geometry=S,C.material=T,C.materialVariant=u(g),C.groupOrder=b,C.renderOrder=g.renderOrder,C.z=_,C.group=v),e++,C}function p(g,S,T,b,_,v){const C=d(g,S,T,b,_,v);T.transmission>0?r.push(C):T.transparent===!0?o.push(C):n.push(C)}function m(g,S,T,b,_,v){const C=d(g,S,T,b,_,v);T.transmission>0?r.unshift(C):T.transparent===!0?o.unshift(C):n.unshift(C)}function x(g,S){n.length>1&&n.sort(g||WE),r.length>1&&r.sort(S||Gm),o.length>1&&o.sort(S||Gm)}function y(){for(let g=e,S=s.length;g<S;g++){const T=s[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:p,unshift:m,finish:y,sort:x}}function XE(){let s=new WeakMap;function e(r,o){const c=s.get(r);let u;return c===void 0?(u=new Wm,s.set(r,[u])):o>=c.length?(u=new Wm,c.push(u)):u=c[o],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function jE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ne,color:new Rt};break;case"SpotLight":n={position:new ne,direction:new ne,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ne,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ne,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":n={color:new Rt,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return s[e.id]=n,n}}}function qE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let YE=0;function $E(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function KE(s){const e=new jE,n=qE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ne);const o=new ne,c=new Wt,u=new Wt;function d(m){let x=0,y=0,g=0;for(let R=0;R<9;R++)r.probe[R].set(0,0,0);let S=0,T=0,b=0,_=0,v=0,C=0,N=0,L=0,V=0,k=0,O=0;m.sort($E);for(let R=0,de=m.length;R<de;R++){const I=m[R],$=I.color,J=I.intensity,le=I.distance;let Z=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Xs?Z=I.shadow.map.texture:Z=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)x+=$.r*J,y+=$.g*J,g+=$.b*J;else if(I.isLightProbe){for(let ie=0;ie<9;ie++)r.probe[ie].addScaledVector(I.sh.coefficients[ie],J);O++}else if(I.isDirectionalLight){const ie=e.get(I);if(ie.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const X=I.shadow,K=n.get(I);K.shadowIntensity=X.intensity,K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize=X.mapSize,r.directionalShadow[S]=K,r.directionalShadowMap[S]=Z,r.directionalShadowMatrix[S]=I.shadow.matrix,C++}r.directional[S]=ie,S++}else if(I.isSpotLight){const ie=e.get(I);ie.position.setFromMatrixPosition(I.matrixWorld),ie.color.copy($).multiplyScalar(J),ie.distance=le,ie.coneCos=Math.cos(I.angle),ie.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),ie.decay=I.decay,r.spot[b]=ie;const X=I.shadow;if(I.map&&(r.spotLightMap[V]=I.map,V++,X.updateMatrices(I),I.castShadow&&k++),r.spotLightMatrix[b]=X.matrix,I.castShadow){const K=n.get(I);K.shadowIntensity=X.intensity,K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize=X.mapSize,r.spotShadow[b]=K,r.spotShadowMap[b]=Z,L++}b++}else if(I.isRectAreaLight){const ie=e.get(I);ie.color.copy($).multiplyScalar(J),ie.halfWidth.set(I.width*.5,0,0),ie.halfHeight.set(0,I.height*.5,0),r.rectArea[_]=ie,_++}else if(I.isPointLight){const ie=e.get(I);if(ie.color.copy(I.color).multiplyScalar(I.intensity),ie.distance=I.distance,ie.decay=I.decay,I.castShadow){const X=I.shadow,K=n.get(I);K.shadowIntensity=X.intensity,K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize=X.mapSize,K.shadowCameraNear=X.camera.near,K.shadowCameraFar=X.camera.far,r.pointShadow[T]=K,r.pointShadowMap[T]=Z,r.pointShadowMatrix[T]=I.shadow.matrix,N++}r.point[T]=ie,T++}else if(I.isHemisphereLight){const ie=e.get(I);ie.skyColor.copy(I.color).multiplyScalar(J),ie.groundColor.copy(I.groundColor).multiplyScalar(J),r.hemi[v]=ie,v++}}_>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=y,r.ambient[2]=g;const w=r.hash;(w.directionalLength!==S||w.pointLength!==T||w.spotLength!==b||w.rectAreaLength!==_||w.hemiLength!==v||w.numDirectionalShadows!==C||w.numPointShadows!==N||w.numSpotShadows!==L||w.numSpotMaps!==V||w.numLightProbes!==O)&&(r.directional.length=S,r.spot.length=b,r.rectArea.length=_,r.point.length=T,r.hemi.length=v,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=L+V-k,r.spotLightMap.length=V,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=O,w.directionalLength=S,w.pointLength=T,w.spotLength=b,w.rectAreaLength=_,w.hemiLength=v,w.numDirectionalShadows=C,w.numPointShadows=N,w.numSpotShadows=L,w.numSpotMaps=V,w.numLightProbes=O,r.version=YE++)}function p(m,x){let y=0,g=0,S=0,T=0,b=0;const _=x.matrixWorldInverse;for(let v=0,C=m.length;v<C;v++){const N=m[v];if(N.isDirectionalLight){const L=r.directional[y];L.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(_),y++}else if(N.isSpotLight){const L=r.spot[S];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(_),L.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(_),S++}else if(N.isRectAreaLight){const L=r.rectArea[T];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(_),u.identity(),c.copy(N.matrixWorld),c.premultiply(_),u.extractRotation(c),L.halfWidth.set(N.width*.5,0,0),L.halfHeight.set(0,N.height*.5,0),L.halfWidth.applyMatrix4(u),L.halfHeight.applyMatrix4(u),T++}else if(N.isPointLight){const L=r.point[g];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(_),g++}else if(N.isHemisphereLight){const L=r.hemi[b];L.direction.setFromMatrixPosition(N.matrixWorld),L.direction.transformDirection(_),b++}}}return{setup:d,setupView:p,state:r}}function Xm(s){const e=new KE(s),n=[],r=[];function o(x){m.camera=x,n.length=0,r.length=0}function c(x){n.push(x)}function u(x){r.push(x)}function d(){e.setup(n)}function p(x){e.setupView(n,x)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:u}}function ZE(s){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let d;return u===void 0?(d=new Xm(s),e.set(o,[d])):c>=u.length?(d=new Xm(s),u.push(d)):d=u[c],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const QE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,e1=[new ne(1,0,0),new ne(-1,0,0),new ne(0,1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1)],t1=[new ne(0,-1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1),new ne(0,-1,0),new ne(0,-1,0)],jm=new Wt,Ba=new ne,df=new ne;function n1(s,e,n){let r=new Tg;const o=new Dt,c=new Dt,u=new $t,d=new _x,p=new vx,m={},x=n.maxTextureSize,y={[Rr]:Un,[Un]:Rr,[ji]:ji},g=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:QE,fragmentShader:JE}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const T=new Gn;T.setAttribute("position",new ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Ji(T,g),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ll;let v=this.type;this.render=function(k,O,w){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||k.length===0)return;this.type===iv&&(ot("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ll);const R=s.getRenderTarget(),de=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),$=s.state;$.setBlending(Yi),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const J=v!==this.type;J&&O.traverse(function(le){le.material&&(Array.isArray(le.material)?le.material.forEach(Z=>Z.needsUpdate=!0):le.material.needsUpdate=!0)});for(let le=0,Z=k.length;le<Z;le++){const ie=k[le],X=ie.shadow;if(X===void 0){ot("WebGLShadowMap:",ie,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;o.copy(X.mapSize);const K=X.getFrameExtents();o.multiply(K),c.copy(X.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(c.x=Math.floor(x/K.x),o.x=c.x*K.x,X.mapSize.x=c.x),o.y>x&&(c.y=Math.floor(x/K.y),o.y=c.y*K.y,X.mapSize.y=c.y));const oe=s.state.buffers.depth.getReversed();if(X.camera._reversedDepth=oe,X.map===null||J===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===za){if(ie.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Ci(o.x,o.y,{format:Xs,type:Ki,minFilter:_n,magFilter:_n,generateMipmaps:!1}),X.map.texture.name=ie.name+".shadowMap",X.map.depthTexture=new Wa(o.x,o.y,wi),X.map.depthTexture.name=ie.name+".shadowMapDepth",X.map.depthTexture.format=Zi,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=cn,X.map.depthTexture.magFilter=cn}else ie.isPointLight?(X.map=new Ng(o.x),X.map.depthTexture=new fx(o.x,Ri)):(X.map=new Ci(o.x,o.y),X.map.depthTexture=new Wa(o.x,o.y,Ri)),X.map.depthTexture.name=ie.name+".shadowMap",X.map.depthTexture.format=Zi,this.type===Ll?(X.map.depthTexture.compareFunction=oe?md:pd,X.map.depthTexture.minFilter=_n,X.map.depthTexture.magFilter=_n):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=cn,X.map.depthTexture.magFilter=cn);X.camera.updateProjectionMatrix()}const ce=X.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<ce;U++){if(X.map.isWebGLCubeRenderTarget)s.setRenderTarget(X.map,U),s.clear();else{U===0&&(s.setRenderTarget(X.map),s.clear());const q=X.getViewport(U);u.set(c.x*q.x,c.y*q.y,c.x*q.z,c.y*q.w),$.viewport(u)}if(ie.isPointLight){const q=X.camera,be=X.matrix,Xe=ie.distance||q.far;Xe!==q.far&&(q.far=Xe,q.updateProjectionMatrix()),Ba.setFromMatrixPosition(ie.matrixWorld),q.position.copy(Ba),df.copy(q.position),df.add(e1[U]),q.up.copy(t1[U]),q.lookAt(df),q.updateMatrixWorld(),be.makeTranslation(-Ba.x,-Ba.y,-Ba.z),jm.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),X._frustum.setFromProjectionMatrix(jm,q.coordinateSystem,q.reversedDepth)}else X.updateMatrices(ie);r=X.getFrustum(),L(O,w,X.camera,ie,this.type)}X.isPointLightShadow!==!0&&this.type===za&&C(X,w),X.needsUpdate=!1}v=this.type,_.needsUpdate=!1,s.setRenderTarget(R,de,I)};function C(k,O){const w=e.update(b);g.defines.VSM_SAMPLES!==k.blurSamples&&(g.defines.VSM_SAMPLES=k.blurSamples,S.defines.VSM_SAMPLES=k.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new Ci(o.x,o.y,{format:Xs,type:Ki})),g.uniforms.shadow_pass.value=k.map.depthTexture,g.uniforms.resolution.value=k.mapSize,g.uniforms.radius.value=k.radius,s.setRenderTarget(k.mapPass),s.clear(),s.renderBufferDirect(O,null,w,g,b,null),S.uniforms.shadow_pass.value=k.mapPass.texture,S.uniforms.resolution.value=k.mapSize,S.uniforms.radius.value=k.radius,s.setRenderTarget(k.map),s.clear(),s.renderBufferDirect(O,null,w,S,b,null)}function N(k,O,w,R){let de=null;const I=w.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(I!==void 0)de=I;else if(de=w.isPointLight===!0?p:d,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const $=de.uuid,J=O.uuid;let le=m[$];le===void 0&&(le={},m[$]=le);let Z=le[J];Z===void 0&&(Z=de.clone(),le[J]=Z,O.addEventListener("dispose",V)),de=Z}if(de.visible=O.visible,de.wireframe=O.wireframe,R===za?de.side=O.shadowSide!==null?O.shadowSide:O.side:de.side=O.shadowSide!==null?O.shadowSide:y[O.side],de.alphaMap=O.alphaMap,de.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,de.map=O.map,de.clipShadows=O.clipShadows,de.clippingPlanes=O.clippingPlanes,de.clipIntersection=O.clipIntersection,de.displacementMap=O.displacementMap,de.displacementScale=O.displacementScale,de.displacementBias=O.displacementBias,de.wireframeLinewidth=O.wireframeLinewidth,de.linewidth=O.linewidth,w.isPointLight===!0&&de.isMeshDistanceMaterial===!0){const $=s.properties.get(de);$.light=w}return de}function L(k,O,w,R,de){if(k.visible===!1)return;if(k.layers.test(O.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&de===za)&&(!k.frustumCulled||r.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,k.matrixWorld);const J=e.update(k),le=k.material;if(Array.isArray(le)){const Z=J.groups;for(let ie=0,X=Z.length;ie<X;ie++){const K=Z[ie],oe=le[K.materialIndex];if(oe&&oe.visible){const ce=N(k,oe,R,de);k.onBeforeShadow(s,k,O,w,J,ce,K),s.renderBufferDirect(w,null,J,ce,k,K),k.onAfterShadow(s,k,O,w,J,ce,K)}}}else if(le.visible){const Z=N(k,le,R,de);k.onBeforeShadow(s,k,O,w,J,Z,null),s.renderBufferDirect(w,null,J,Z,k,null),k.onAfterShadow(s,k,O,w,J,Z,null)}}const $=k.children;for(let J=0,le=$.length;J<le;J++)L($[J],O,w,R,de)}function V(k){k.target.removeEventListener("dispose",V);for(const w in m){const R=m[w],de=k.target.uuid;de in R&&(R[de].dispose(),delete R[de])}}}function i1(s,e){function n(){let H=!1;const Ae=new $t;let Me=null;const De=new $t(0,0,0,0);return{setMask:function(Se){Me!==Se&&!H&&(s.colorMask(Se,Se,Se,Se),Me=Se)},setLocked:function(Se){H=Se},setClear:function(Se,fe,ze,rt,Pt){Pt===!0&&(Se*=rt,fe*=rt,ze*=rt),Ae.set(Se,fe,ze,rt),De.equals(Ae)===!1&&(s.clearColor(Se,fe,ze,rt),De.copy(Ae))},reset:function(){H=!1,Me=null,De.set(-1,0,0,0)}}}function r(){let H=!1,Ae=!1,Me=null,De=null,Se=null;return{setReversed:function(fe){if(Ae!==fe){const ze=e.get("EXT_clip_control");fe?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),Ae=fe;const rt=Se;Se=null,this.setClear(rt)}},getReversed:function(){return Ae},setTest:function(fe){fe?me(s.DEPTH_TEST):pe(s.DEPTH_TEST)},setMask:function(fe){Me!==fe&&!H&&(s.depthMask(fe),Me=fe)},setFunc:function(fe){if(Ae&&(fe=Ov[fe]),De!==fe){switch(fe){case mf:s.depthFunc(s.NEVER);break;case gf:s.depthFunc(s.ALWAYS);break;case _f:s.depthFunc(s.LESS);break;case Gs:s.depthFunc(s.LEQUAL);break;case vf:s.depthFunc(s.EQUAL);break;case xf:s.depthFunc(s.GEQUAL);break;case yf:s.depthFunc(s.GREATER);break;case Sf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}De=fe}},setLocked:function(fe){H=fe},setClear:function(fe){Se!==fe&&(Se=fe,Ae&&(fe=1-fe),s.clearDepth(fe))},reset:function(){H=!1,Me=null,De=null,Se=null,Ae=!1}}}function o(){let H=!1,Ae=null,Me=null,De=null,Se=null,fe=null,ze=null,rt=null,Pt=null;return{setTest:function(St){H||(St?me(s.STENCIL_TEST):pe(s.STENCIL_TEST))},setMask:function(St){Ae!==St&&!H&&(s.stencilMask(St),Ae=St)},setFunc:function(St,Wn,xn){(Me!==St||De!==Wn||Se!==xn)&&(s.stencilFunc(St,Wn,xn),Me=St,De=Wn,Se=xn)},setOp:function(St,Wn,xn){(fe!==St||ze!==Wn||rt!==xn)&&(s.stencilOp(St,Wn,xn),fe=St,ze=Wn,rt=xn)},setLocked:function(St){H=St},setClear:function(St){Pt!==St&&(s.clearStencil(St),Pt=St)},reset:function(){H=!1,Ae=null,Me=null,De=null,Se=null,fe=null,ze=null,rt=null,Pt=null}}}const c=new n,u=new r,d=new o,p=new WeakMap,m=new WeakMap;let x={},y={},g=new WeakMap,S=[],T=null,b=!1,_=null,v=null,C=null,N=null,L=null,V=null,k=null,O=new Rt(0,0,0),w=0,R=!1,de=null,I=null,$=null,J=null,le=null;const Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,X=0;const K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(K)[1]),ie=X>=1):K.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),ie=X>=2);let oe=null,ce={};const U=s.getParameter(s.SCISSOR_BOX),q=s.getParameter(s.VIEWPORT),be=new $t().fromArray(U),Xe=new $t().fromArray(q);function Ze(H,Ae,Me,De){const Se=new Uint8Array(4),fe=s.createTexture();s.bindTexture(H,fe),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ze=0;ze<Me;ze++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Ae,0,s.RGBA,1,1,De,0,s.RGBA,s.UNSIGNED_BYTE,Se):s.texImage2D(Ae+ze,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Se);return fe}const re={};re[s.TEXTURE_2D]=Ze(s.TEXTURE_2D,s.TEXTURE_2D,1),re[s.TEXTURE_CUBE_MAP]=Ze(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[s.TEXTURE_2D_ARRAY]=Ze(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),re[s.TEXTURE_3D]=Ze(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),me(s.DEPTH_TEST),u.setFunc(Gs),ct(!1),Ft(jp),me(s.CULL_FACE),xt(Yi);function me(H){x[H]!==!0&&(s.enable(H),x[H]=!0)}function pe(H){x[H]!==!1&&(s.disable(H),x[H]=!1)}function Fe(H,Ae){return y[H]!==Ae?(s.bindFramebuffer(H,Ae),y[H]=Ae,H===s.DRAW_FRAMEBUFFER&&(y[s.FRAMEBUFFER]=Ae),H===s.FRAMEBUFFER&&(y[s.DRAW_FRAMEBUFFER]=Ae),!0):!1}function He(H,Ae){let Me=S,De=!1;if(H){Me=g.get(Ae),Me===void 0&&(Me=[],g.set(Ae,Me));const Se=H.textures;if(Me.length!==Se.length||Me[0]!==s.COLOR_ATTACHMENT0){for(let fe=0,ze=Se.length;fe<ze;fe++)Me[fe]=s.COLOR_ATTACHMENT0+fe;Me.length=Se.length,De=!0}}else Me[0]!==s.BACK&&(Me[0]=s.BACK,De=!0);De&&s.drawBuffers(Me)}function nt(H){return T!==H?(s.useProgram(H),T=H,!0):!1}const Xt={[Qr]:s.FUNC_ADD,[sv]:s.FUNC_SUBTRACT,[av]:s.FUNC_REVERSE_SUBTRACT};Xt[ov]=s.MIN,Xt[lv]=s.MAX;const ht={[cv]:s.ZERO,[uv]:s.ONE,[fv]:s.SRC_COLOR,[hf]:s.SRC_ALPHA,[_v]:s.SRC_ALPHA_SATURATE,[mv]:s.DST_COLOR,[hv]:s.DST_ALPHA,[dv]:s.ONE_MINUS_SRC_COLOR,[pf]:s.ONE_MINUS_SRC_ALPHA,[gv]:s.ONE_MINUS_DST_COLOR,[pv]:s.ONE_MINUS_DST_ALPHA,[vv]:s.CONSTANT_COLOR,[xv]:s.ONE_MINUS_CONSTANT_COLOR,[yv]:s.CONSTANT_ALPHA,[Sv]:s.ONE_MINUS_CONSTANT_ALPHA};function xt(H,Ae,Me,De,Se,fe,ze,rt,Pt,St){if(H===Yi){b===!0&&(pe(s.BLEND),b=!1);return}if(b===!1&&(me(s.BLEND),b=!0),H!==rv){if(H!==_||St!==R){if((v!==Qr||L!==Qr)&&(s.blendEquation(s.FUNC_ADD),v=Qr,L=Qr),St)switch(H){case Vs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qp:s.blendFunc(s.ONE,s.ONE);break;case Yp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $p:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:wt("WebGLState: Invalid blending: ",H);break}else switch(H){case Vs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qp:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Yp:wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $p:wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:wt("WebGLState: Invalid blending: ",H);break}C=null,N=null,V=null,k=null,O.set(0,0,0),w=0,_=H,R=St}return}Se=Se||Ae,fe=fe||Me,ze=ze||De,(Ae!==v||Se!==L)&&(s.blendEquationSeparate(Xt[Ae],Xt[Se]),v=Ae,L=Se),(Me!==C||De!==N||fe!==V||ze!==k)&&(s.blendFuncSeparate(ht[Me],ht[De],ht[fe],ht[ze]),C=Me,N=De,V=fe,k=ze),(rt.equals(O)===!1||Pt!==w)&&(s.blendColor(rt.r,rt.g,rt.b,Pt),O.copy(rt),w=Pt),_=H,R=!1}function bt(H,Ae){H.side===ji?pe(s.CULL_FACE):me(s.CULL_FACE);let Me=H.side===Un;Ae&&(Me=!Me),ct(Me),H.blending===Vs&&H.transparent===!1?xt(Yi):xt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),u.setFunc(H.depthFunc),u.setTest(H.depthTest),u.setMask(H.depthWrite),c.setMask(H.colorWrite);const De=H.stencilWrite;d.setTest(De),De&&(d.setMask(H.stencilWriteMask),d.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),d.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Bt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?me(s.SAMPLE_ALPHA_TO_COVERAGE):pe(s.SAMPLE_ALPHA_TO_COVERAGE)}function ct(H){de!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),de=H)}function Ft(H){H!==tv?(me(s.CULL_FACE),H!==I&&(H===jp?s.cullFace(s.BACK):H===nv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):pe(s.CULL_FACE),I=H}function z(H){H!==$&&(ie&&s.lineWidth(H),$=H)}function Bt(H,Ae,Me){H?(me(s.POLYGON_OFFSET_FILL),(J!==Ae||le!==Me)&&(J=Ae,le=Me,u.getReversed()&&(Ae=-Ae),s.polygonOffset(Ae,Me))):pe(s.POLYGON_OFFSET_FILL)}function mt(H){H?me(s.SCISSOR_TEST):pe(s.SCISSOR_TEST)}function yt(H){H===void 0&&(H=s.TEXTURE0+Z-1),oe!==H&&(s.activeTexture(H),oe=H)}function Ge(H,Ae,Me){Me===void 0&&(oe===null?Me=s.TEXTURE0+Z-1:Me=oe);let De=ce[Me];De===void 0&&(De={type:void 0,texture:void 0},ce[Me]=De),(De.type!==H||De.texture!==Ae)&&(oe!==Me&&(s.activeTexture(Me),oe=Me),s.bindTexture(H,Ae||re[H]),De.type=H,De.texture=Ae)}function P(){const H=ce[oe];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function M(){try{s.compressedTexImage2D(...arguments)}catch(H){wt("WebGLState:",H)}}function W(){try{s.compressedTexImage3D(...arguments)}catch(H){wt("WebGLState:",H)}}function he(){try{s.texSubImage2D(...arguments)}catch(H){wt("WebGLState:",H)}}function ge(){try{s.texSubImage3D(...arguments)}catch(H){wt("WebGLState:",H)}}function ue(){try{s.compressedTexSubImage2D(...arguments)}catch(H){wt("WebGLState:",H)}}function ke(){try{s.compressedTexSubImage3D(...arguments)}catch(H){wt("WebGLState:",H)}}function we(){try{s.texStorage2D(...arguments)}catch(H){wt("WebGLState:",H)}}function Ye(){try{s.texStorage3D(...arguments)}catch(H){wt("WebGLState:",H)}}function it(){try{s.texImage2D(...arguments)}catch(H){wt("WebGLState:",H)}}function ye(){try{s.texImage3D(...arguments)}catch(H){wt("WebGLState:",H)}}function Te(H){be.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),be.copy(H))}function We(H){Xe.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),Xe.copy(H))}function Be(H,Ae){let Me=m.get(Ae);Me===void 0&&(Me=new WeakMap,m.set(Ae,Me));let De=Me.get(H);De===void 0&&(De=s.getUniformBlockIndex(Ae,H.name),Me.set(H,De))}function Le(H,Ae){const De=m.get(Ae).get(H);p.get(Ae)!==De&&(s.uniformBlockBinding(Ae,De,H.__bindingPointIndex),p.set(Ae,De))}function lt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),x={},oe=null,ce={},y={},g=new WeakMap,S=[],T=null,b=!1,_=null,v=null,C=null,N=null,L=null,V=null,k=null,O=new Rt(0,0,0),w=0,R=!1,de=null,I=null,$=null,J=null,le=null,be.set(0,0,s.canvas.width,s.canvas.height),Xe.set(0,0,s.canvas.width,s.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:me,disable:pe,bindFramebuffer:Fe,drawBuffers:He,useProgram:nt,setBlending:xt,setMaterial:bt,setFlipSided:ct,setCullFace:Ft,setLineWidth:z,setPolygonOffset:Bt,setScissorTest:mt,activeTexture:yt,bindTexture:Ge,unbindTexture:P,compressedTexImage2D:M,compressedTexImage3D:W,texImage2D:it,texImage3D:ye,updateUBOMapping:Be,uniformBlockBinding:Le,texStorage2D:we,texStorage3D:Ye,texSubImage2D:he,texSubImage3D:ge,compressedTexSubImage2D:ue,compressedTexSubImage3D:ke,scissor:Te,viewport:We,reset:lt}}function r1(s,e,n,r,o,c,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Dt,x=new WeakMap;let y;const g=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(P,M){return S?new OffscreenCanvas(P,M):zl("canvas")}function b(P,M,W){let he=1;const ge=Ge(P);if((ge.width>W||ge.height>W)&&(he=W/Math.max(ge.width,ge.height)),he<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ue=Math.floor(he*ge.width),ke=Math.floor(he*ge.height);y===void 0&&(y=T(ue,ke));const we=M?T(ue,ke):y;return we.width=ue,we.height=ke,we.getContext("2d").drawImage(P,0,0,ue,ke),ot("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+ue+"x"+ke+")."),we}else return"data"in P&&ot("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),P;return P}function _(P){return P.generateMipmaps}function v(P){s.generateMipmap(P)}function C(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(P,M,W,he,ge=!1){if(P!==null){if(s[P]!==void 0)return s[P];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ue=M;if(M===s.RED&&(W===s.FLOAT&&(ue=s.R32F),W===s.HALF_FLOAT&&(ue=s.R16F),W===s.UNSIGNED_BYTE&&(ue=s.R8)),M===s.RED_INTEGER&&(W===s.UNSIGNED_BYTE&&(ue=s.R8UI),W===s.UNSIGNED_SHORT&&(ue=s.R16UI),W===s.UNSIGNED_INT&&(ue=s.R32UI),W===s.BYTE&&(ue=s.R8I),W===s.SHORT&&(ue=s.R16I),W===s.INT&&(ue=s.R32I)),M===s.RG&&(W===s.FLOAT&&(ue=s.RG32F),W===s.HALF_FLOAT&&(ue=s.RG16F),W===s.UNSIGNED_BYTE&&(ue=s.RG8)),M===s.RG_INTEGER&&(W===s.UNSIGNED_BYTE&&(ue=s.RG8UI),W===s.UNSIGNED_SHORT&&(ue=s.RG16UI),W===s.UNSIGNED_INT&&(ue=s.RG32UI),W===s.BYTE&&(ue=s.RG8I),W===s.SHORT&&(ue=s.RG16I),W===s.INT&&(ue=s.RG32I)),M===s.RGB_INTEGER&&(W===s.UNSIGNED_BYTE&&(ue=s.RGB8UI),W===s.UNSIGNED_SHORT&&(ue=s.RGB16UI),W===s.UNSIGNED_INT&&(ue=s.RGB32UI),W===s.BYTE&&(ue=s.RGB8I),W===s.SHORT&&(ue=s.RGB16I),W===s.INT&&(ue=s.RGB32I)),M===s.RGBA_INTEGER&&(W===s.UNSIGNED_BYTE&&(ue=s.RGBA8UI),W===s.UNSIGNED_SHORT&&(ue=s.RGBA16UI),W===s.UNSIGNED_INT&&(ue=s.RGBA32UI),W===s.BYTE&&(ue=s.RGBA8I),W===s.SHORT&&(ue=s.RGBA16I),W===s.INT&&(ue=s.RGBA32I)),M===s.RGB&&(W===s.UNSIGNED_INT_5_9_9_9_REV&&(ue=s.RGB9_E5),W===s.UNSIGNED_INT_10F_11F_11F_REV&&(ue=s.R11F_G11F_B10F)),M===s.RGBA){const ke=ge?kl:Et.getTransfer(he);W===s.FLOAT&&(ue=s.RGBA32F),W===s.HALF_FLOAT&&(ue=s.RGBA16F),W===s.UNSIGNED_BYTE&&(ue=ke===Lt?s.SRGB8_ALPHA8:s.RGBA8),W===s.UNSIGNED_SHORT_4_4_4_4&&(ue=s.RGBA4),W===s.UNSIGNED_SHORT_5_5_5_1&&(ue=s.RGB5_A1)}return(ue===s.R16F||ue===s.R32F||ue===s.RG16F||ue===s.RG32F||ue===s.RGBA16F||ue===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function L(P,M){let W;return P?M===null||M===Ri||M===Ga?W=s.DEPTH24_STENCIL8:M===wi?W=s.DEPTH32F_STENCIL8:M===Ha&&(W=s.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ri||M===Ga?W=s.DEPTH_COMPONENT24:M===wi?W=s.DEPTH_COMPONENT32F:M===Ha&&(W=s.DEPTH_COMPONENT16),W}function V(P,M){return _(P)===!0||P.isFramebufferTexture&&P.minFilter!==cn&&P.minFilter!==_n?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function k(P){const M=P.target;M.removeEventListener("dispose",k),w(M),M.isVideoTexture&&x.delete(M)}function O(P){const M=P.target;M.removeEventListener("dispose",O),de(M)}function w(P){const M=r.get(P);if(M.__webglInit===void 0)return;const W=P.source,he=g.get(W);if(he){const ge=he[M.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&R(P),Object.keys(he).length===0&&g.delete(W)}r.remove(P)}function R(P){const M=r.get(P);s.deleteTexture(M.__webglTexture);const W=P.source,he=g.get(W);delete he[M.__cacheKey],u.memory.textures--}function de(P){const M=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(M.__webglFramebuffer[he]))for(let ge=0;ge<M.__webglFramebuffer[he].length;ge++)s.deleteFramebuffer(M.__webglFramebuffer[he][ge]);else s.deleteFramebuffer(M.__webglFramebuffer[he]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[he])}else{if(Array.isArray(M.__webglFramebuffer))for(let he=0;he<M.__webglFramebuffer.length;he++)s.deleteFramebuffer(M.__webglFramebuffer[he]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let he=0;he<M.__webglColorRenderbuffer.length;he++)M.__webglColorRenderbuffer[he]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[he]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const W=P.textures;for(let he=0,ge=W.length;he<ge;he++){const ue=r.get(W[he]);ue.__webglTexture&&(s.deleteTexture(ue.__webglTexture),u.memory.textures--),r.remove(W[he])}r.remove(P)}let I=0;function $(){I=0}function J(){const P=I;return P>=o.maxTextures&&ot("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),I+=1,P}function le(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function Z(P,M){const W=r.get(P);if(P.isVideoTexture&&mt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&W.__version!==P.version){const he=P.image;if(he===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{re(W,P,M);return}}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,W.__webglTexture,s.TEXTURE0+M)}function ie(P,M){const W=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){re(W,P,M);return}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,W.__webglTexture,s.TEXTURE0+M)}function X(P,M){const W=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){re(W,P,M);return}n.bindTexture(s.TEXTURE_3D,W.__webglTexture,s.TEXTURE0+M)}function K(P,M){const W=r.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&W.__version!==P.version){me(W,P,M);return}n.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture,s.TEXTURE0+M)}const oe={[Mf]:s.REPEAT,[qi]:s.CLAMP_TO_EDGE,[Ef]:s.MIRRORED_REPEAT},ce={[cn]:s.NEAREST,[Tv]:s.NEAREST_MIPMAP_NEAREST,[rl]:s.NEAREST_MIPMAP_LINEAR,[_n]:s.LINEAR,[Iu]:s.LINEAR_MIPMAP_NEAREST,[es]:s.LINEAR_MIPMAP_LINEAR},U={[Cv]:s.NEVER,[Nv]:s.ALWAYS,[Rv]:s.LESS,[pd]:s.LEQUAL,[Pv]:s.EQUAL,[md]:s.GEQUAL,[Lv]:s.GREATER,[Dv]:s.NOTEQUAL};function q(P,M){if(M.type===wi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===_n||M.magFilter===Iu||M.magFilter===rl||M.magFilter===es||M.minFilter===_n||M.minFilter===Iu||M.minFilter===rl||M.minFilter===es)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,oe[M.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,oe[M.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,oe[M.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,ce[M.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,ce[M.minFilter]),M.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,U[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===cn||M.minFilter!==rl&&M.minFilter!==es||M.type===wi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,o.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function be(P,M){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",k));const he=M.source;let ge=g.get(he);ge===void 0&&(ge={},g.set(he,ge));const ue=le(M);if(ue!==P.__cacheKey){ge[ue]===void 0&&(ge[ue]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,W=!0),ge[ue].usedTimes++;const ke=ge[P.__cacheKey];ke!==void 0&&(ge[P.__cacheKey].usedTimes--,ke.usedTimes===0&&R(M)),P.__cacheKey=ue,P.__webglTexture=ge[ue].texture}return W}function Xe(P,M,W){return Math.floor(Math.floor(P/W)/M)}function Ze(P,M,W,he){const ue=P.updateRanges;if(ue.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,W,he,M.data);else{ue.sort((ye,Te)=>ye.start-Te.start);let ke=0;for(let ye=1;ye<ue.length;ye++){const Te=ue[ke],We=ue[ye],Be=Te.start+Te.count,Le=Xe(We.start,M.width,4),lt=Xe(Te.start,M.width,4);We.start<=Be+1&&Le===lt&&Xe(We.start+We.count-1,M.width,4)===Le?Te.count=Math.max(Te.count,We.start+We.count-Te.start):(++ke,ue[ke]=We)}ue.length=ke+1;const we=s.getParameter(s.UNPACK_ROW_LENGTH),Ye=s.getParameter(s.UNPACK_SKIP_PIXELS),it=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let ye=0,Te=ue.length;ye<Te;ye++){const We=ue[ye],Be=Math.floor(We.start/4),Le=Math.ceil(We.count/4),lt=Be%M.width,H=Math.floor(Be/M.width),Ae=Le,Me=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,lt),s.pixelStorei(s.UNPACK_SKIP_ROWS,H),n.texSubImage2D(s.TEXTURE_2D,0,lt,H,Ae,Me,W,he,M.data)}P.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,we),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ye),s.pixelStorei(s.UNPACK_SKIP_ROWS,it)}}function re(P,M,W){let he=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(he=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(he=s.TEXTURE_3D);const ge=be(P,M),ue=M.source;n.bindTexture(he,P.__webglTexture,s.TEXTURE0+W);const ke=r.get(ue);if(ue.version!==ke.__version||ge===!0){n.activeTexture(s.TEXTURE0+W);const we=Et.getPrimaries(Et.workingColorSpace),Ye=M.colorSpace===br?null:Et.getPrimaries(M.colorSpace),it=M.colorSpace===br||we===Ye?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let ye=b(M.image,!1,o.maxTextureSize);ye=yt(M,ye);const Te=c.convert(M.format,M.colorSpace),We=c.convert(M.type);let Be=N(M.internalFormat,Te,We,M.colorSpace,M.isVideoTexture);q(he,M);let Le;const lt=M.mipmaps,H=M.isVideoTexture!==!0,Ae=ke.__version===void 0||ge===!0,Me=ue.dataReady,De=V(M,ye);if(M.isDepthTexture)Be=L(M.format===ts,M.type),Ae&&(H?n.texStorage2D(s.TEXTURE_2D,1,Be,ye.width,ye.height):n.texImage2D(s.TEXTURE_2D,0,Be,ye.width,ye.height,0,Te,We,null));else if(M.isDataTexture)if(lt.length>0){H&&Ae&&n.texStorage2D(s.TEXTURE_2D,De,Be,lt[0].width,lt[0].height);for(let Se=0,fe=lt.length;Se<fe;Se++)Le=lt[Se],H?Me&&n.texSubImage2D(s.TEXTURE_2D,Se,0,0,Le.width,Le.height,Te,We,Le.data):n.texImage2D(s.TEXTURE_2D,Se,Be,Le.width,Le.height,0,Te,We,Le.data);M.generateMipmaps=!1}else H?(Ae&&n.texStorage2D(s.TEXTURE_2D,De,Be,ye.width,ye.height),Me&&Ze(M,ye,Te,We)):n.texImage2D(s.TEXTURE_2D,0,Be,ye.width,ye.height,0,Te,We,ye.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){H&&Ae&&n.texStorage3D(s.TEXTURE_2D_ARRAY,De,Be,lt[0].width,lt[0].height,ye.depth);for(let Se=0,fe=lt.length;Se<fe;Se++)if(Le=lt[Se],M.format!==mi)if(Te!==null)if(H){if(Me)if(M.layerUpdates.size>0){const ze=Em(Le.width,Le.height,M.format,M.type);for(const rt of M.layerUpdates){const Pt=Le.data.subarray(rt*ze/Le.data.BYTES_PER_ELEMENT,(rt+1)*ze/Le.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,rt,Le.width,Le.height,1,Te,Pt)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,Le.width,Le.height,ye.depth,Te,Le.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Se,Be,Le.width,Le.height,ye.depth,0,Le.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Me&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,Le.width,Le.height,ye.depth,Te,We,Le.data):n.texImage3D(s.TEXTURE_2D_ARRAY,Se,Be,Le.width,Le.height,ye.depth,0,Te,We,Le.data)}else{H&&Ae&&n.texStorage2D(s.TEXTURE_2D,De,Be,lt[0].width,lt[0].height);for(let Se=0,fe=lt.length;Se<fe;Se++)Le=lt[Se],M.format!==mi?Te!==null?H?Me&&n.compressedTexSubImage2D(s.TEXTURE_2D,Se,0,0,Le.width,Le.height,Te,Le.data):n.compressedTexImage2D(s.TEXTURE_2D,Se,Be,Le.width,Le.height,0,Le.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Me&&n.texSubImage2D(s.TEXTURE_2D,Se,0,0,Le.width,Le.height,Te,We,Le.data):n.texImage2D(s.TEXTURE_2D,Se,Be,Le.width,Le.height,0,Te,We,Le.data)}else if(M.isDataArrayTexture)if(H){if(Ae&&n.texStorage3D(s.TEXTURE_2D_ARRAY,De,Be,ye.width,ye.height,ye.depth),Me)if(M.layerUpdates.size>0){const Se=Em(ye.width,ye.height,M.format,M.type);for(const fe of M.layerUpdates){const ze=ye.data.subarray(fe*Se/ye.data.BYTES_PER_ELEMENT,(fe+1)*Se/ye.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,fe,ye.width,ye.height,1,Te,We,ze)}M.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Te,We,ye.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Be,ye.width,ye.height,ye.depth,0,Te,We,ye.data);else if(M.isData3DTexture)H?(Ae&&n.texStorage3D(s.TEXTURE_3D,De,Be,ye.width,ye.height,ye.depth),Me&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Te,We,ye.data)):n.texImage3D(s.TEXTURE_3D,0,Be,ye.width,ye.height,ye.depth,0,Te,We,ye.data);else if(M.isFramebufferTexture){if(Ae)if(H)n.texStorage2D(s.TEXTURE_2D,De,Be,ye.width,ye.height);else{let Se=ye.width,fe=ye.height;for(let ze=0;ze<De;ze++)n.texImage2D(s.TEXTURE_2D,ze,Be,Se,fe,0,Te,We,null),Se>>=1,fe>>=1}}else if(lt.length>0){if(H&&Ae){const Se=Ge(lt[0]);n.texStorage2D(s.TEXTURE_2D,De,Be,Se.width,Se.height)}for(let Se=0,fe=lt.length;Se<fe;Se++)Le=lt[Se],H?Me&&n.texSubImage2D(s.TEXTURE_2D,Se,0,0,Te,We,Le):n.texImage2D(s.TEXTURE_2D,Se,Be,Te,We,Le);M.generateMipmaps=!1}else if(H){if(Ae){const Se=Ge(ye);n.texStorage2D(s.TEXTURE_2D,De,Be,Se.width,Se.height)}Me&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Te,We,ye)}else n.texImage2D(s.TEXTURE_2D,0,Be,Te,We,ye);_(M)&&v(he),ke.__version=ue.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function me(P,M,W){if(M.image.length!==6)return;const he=be(P,M),ge=M.source;n.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+W);const ue=r.get(ge);if(ge.version!==ue.__version||he===!0){n.activeTexture(s.TEXTURE0+W);const ke=Et.getPrimaries(Et.workingColorSpace),we=M.colorSpace===br?null:Et.getPrimaries(M.colorSpace),Ye=M.colorSpace===br||ke===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);const it=M.isCompressedTexture||M.image[0].isCompressedTexture,ye=M.image[0]&&M.image[0].isDataTexture,Te=[];for(let fe=0;fe<6;fe++)!it&&!ye?Te[fe]=b(M.image[fe],!0,o.maxCubemapSize):Te[fe]=ye?M.image[fe].image:M.image[fe],Te[fe]=yt(M,Te[fe]);const We=Te[0],Be=c.convert(M.format,M.colorSpace),Le=c.convert(M.type),lt=N(M.internalFormat,Be,Le,M.colorSpace),H=M.isVideoTexture!==!0,Ae=ue.__version===void 0||he===!0,Me=ge.dataReady;let De=V(M,We);q(s.TEXTURE_CUBE_MAP,M);let Se;if(it){H&&Ae&&n.texStorage2D(s.TEXTURE_CUBE_MAP,De,lt,We.width,We.height);for(let fe=0;fe<6;fe++){Se=Te[fe].mipmaps;for(let ze=0;ze<Se.length;ze++){const rt=Se[ze];M.format!==mi?Be!==null?H?Me&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ze,0,0,rt.width,rt.height,Be,rt.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ze,lt,rt.width,rt.height,0,rt.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ze,0,0,rt.width,rt.height,Be,Le,rt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ze,lt,rt.width,rt.height,0,Be,Le,rt.data)}}}else{if(Se=M.mipmaps,H&&Ae){Se.length>0&&De++;const fe=Ge(Te[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,De,lt,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(ye){H?Me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Te[fe].width,Te[fe].height,Be,Le,Te[fe].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,lt,Te[fe].width,Te[fe].height,0,Be,Le,Te[fe].data);for(let ze=0;ze<Se.length;ze++){const Pt=Se[ze].image[fe].image;H?Me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ze+1,0,0,Pt.width,Pt.height,Be,Le,Pt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ze+1,lt,Pt.width,Pt.height,0,Be,Le,Pt.data)}}else{H?Me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Be,Le,Te[fe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,lt,Be,Le,Te[fe]);for(let ze=0;ze<Se.length;ze++){const rt=Se[ze];H?Me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ze+1,0,0,Be,Le,rt.image[fe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ze+1,lt,Be,Le,rt.image[fe])}}}_(M)&&v(s.TEXTURE_CUBE_MAP),ue.__version=ge.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function pe(P,M,W,he,ge,ue){const ke=c.convert(W.format,W.colorSpace),we=c.convert(W.type),Ye=N(W.internalFormat,ke,we,W.colorSpace),it=r.get(M),ye=r.get(W);if(ye.__renderTarget=M,!it.__hasExternalTextures){const Te=Math.max(1,M.width>>ue),We=Math.max(1,M.height>>ue);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?n.texImage3D(ge,ue,Ye,Te,We,M.depth,0,ke,we,null):n.texImage2D(ge,ue,Ye,Te,We,0,ke,we,null)}n.bindFramebuffer(s.FRAMEBUFFER,P),Bt(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,ge,ye.__webglTexture,0,z(M)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,he,ge,ye.__webglTexture,ue),n.bindFramebuffer(s.FRAMEBUFFER,null)}function Fe(P,M,W){if(s.bindRenderbuffer(s.RENDERBUFFER,P),M.depthBuffer){const he=M.depthTexture,ge=he&&he.isDepthTexture?he.type:null,ue=L(M.stencilBuffer,ge),ke=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Bt(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,z(M),ue,M.width,M.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,z(M),ue,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ue,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ke,s.RENDERBUFFER,P)}else{const he=M.textures;for(let ge=0;ge<he.length;ge++){const ue=he[ge],ke=c.convert(ue.format,ue.colorSpace),we=c.convert(ue.type),Ye=N(ue.internalFormat,ke,we,ue.colorSpace);Bt(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,z(M),Ye,M.width,M.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,z(M),Ye,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Ye,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function He(P,M,W){const he=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(s.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=r.get(M.depthTexture);if(ge.__renderTarget=M,(!ge.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),he){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,M.depthTexture.addEventListener("dispose",k)),ge.__webglTexture===void 0){ge.__webglTexture=s.createTexture(),n.bindTexture(s.TEXTURE_CUBE_MAP,ge.__webglTexture),q(s.TEXTURE_CUBE_MAP,M.depthTexture);const it=c.convert(M.depthTexture.format),ye=c.convert(M.depthTexture.type);let Te;M.depthTexture.format===Zi?Te=s.DEPTH_COMPONENT24:M.depthTexture.format===ts&&(Te=s.DEPTH24_STENCIL8);for(let We=0;We<6;We++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,Te,M.width,M.height,0,it,ye,null)}}else Z(M.depthTexture,0);const ue=ge.__webglTexture,ke=z(M),we=he?s.TEXTURE_CUBE_MAP_POSITIVE_X+W:s.TEXTURE_2D,Ye=M.depthTexture.format===ts?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===Zi)Bt(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ye,we,ue,0,ke):s.framebufferTexture2D(s.FRAMEBUFFER,Ye,we,ue,0);else if(M.depthTexture.format===ts)Bt(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ye,we,ue,0,ke):s.framebufferTexture2D(s.FRAMEBUFFER,Ye,we,ue,0);else throw new Error("Unknown depthTexture format")}function nt(P){const M=r.get(P),W=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const he=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),he){const ge=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,he.removeEventListener("dispose",ge)};he.addEventListener("dispose",ge),M.__depthDisposeCallback=ge}M.__boundDepthTexture=he}if(P.depthTexture&&!M.__autoAllocateDepthBuffer)if(W)for(let he=0;he<6;he++)He(M.__webglFramebuffer[he],P,he);else{const he=P.texture.mipmaps;he&&he.length>0?He(M.__webglFramebuffer[0],P,0):He(M.__webglFramebuffer,P,0)}else if(W){M.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[he]),M.__webglDepthbuffer[he]===void 0)M.__webglDepthbuffer[he]=s.createRenderbuffer(),Fe(M.__webglDepthbuffer[he],P,!1);else{const ge=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=M.__webglDepthbuffer[he];s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,ue)}}else{const he=P.texture.mipmaps;if(he&&he.length>0?n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),Fe(M.__webglDepthbuffer,P,!1);else{const ge=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,ue)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Xt(P,M,W){const he=r.get(P);M!==void 0&&pe(he.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),W!==void 0&&nt(P)}function ht(P){const M=P.texture,W=r.get(P),he=r.get(M);P.addEventListener("dispose",O);const ge=P.textures,ue=P.isWebGLCubeRenderTarget===!0,ke=ge.length>1;if(ke||(he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture()),he.__version=M.version,u.memory.textures++),ue){W.__webglFramebuffer=[];for(let we=0;we<6;we++)if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[we]=[];for(let Ye=0;Ye<M.mipmaps.length;Ye++)W.__webglFramebuffer[we][Ye]=s.createFramebuffer()}else W.__webglFramebuffer[we]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let we=0;we<M.mipmaps.length;we++)W.__webglFramebuffer[we]=s.createFramebuffer()}else W.__webglFramebuffer=s.createFramebuffer();if(ke)for(let we=0,Ye=ge.length;we<Ye;we++){const it=r.get(ge[we]);it.__webglTexture===void 0&&(it.__webglTexture=s.createTexture(),u.memory.textures++)}if(P.samples>0&&Bt(P)===!1){W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let we=0;we<ge.length;we++){const Ye=ge[we];W.__webglColorRenderbuffer[we]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,W.__webglColorRenderbuffer[we]);const it=c.convert(Ye.format,Ye.colorSpace),ye=c.convert(Ye.type),Te=N(Ye.internalFormat,it,ye,Ye.colorSpace,P.isXRRenderTarget===!0),We=z(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,We,Te,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,W.__webglColorRenderbuffer[we])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),Fe(W.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ue){n.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),q(s.TEXTURE_CUBE_MAP,M);for(let we=0;we<6;we++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ye=0;Ye<M.mipmaps.length;Ye++)pe(W.__webglFramebuffer[we][Ye],P,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ye);else pe(W.__webglFramebuffer[we],P,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);_(M)&&v(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ke){for(let we=0,Ye=ge.length;we<Ye;we++){const it=ge[we],ye=r.get(it);let Te=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Te=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Te,ye.__webglTexture),q(Te,it),pe(W.__webglFramebuffer,P,it,s.COLOR_ATTACHMENT0+we,Te,0),_(it)&&v(Te)}n.unbindTexture()}else{let we=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(we=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(we,he.__webglTexture),q(we,M),M.mipmaps&&M.mipmaps.length>0)for(let Ye=0;Ye<M.mipmaps.length;Ye++)pe(W.__webglFramebuffer[Ye],P,M,s.COLOR_ATTACHMENT0,we,Ye);else pe(W.__webglFramebuffer,P,M,s.COLOR_ATTACHMENT0,we,0);_(M)&&v(we),n.unbindTexture()}P.depthBuffer&&nt(P)}function xt(P){const M=P.textures;for(let W=0,he=M.length;W<he;W++){const ge=M[W];if(_(ge)){const ue=C(P),ke=r.get(ge).__webglTexture;n.bindTexture(ue,ke),v(ue),n.unbindTexture()}}}const bt=[],ct=[];function Ft(P){if(P.samples>0){if(Bt(P)===!1){const M=P.textures,W=P.width,he=P.height;let ge=s.COLOR_BUFFER_BIT;const ue=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ke=r.get(P),we=M.length>1;if(we)for(let it=0;it<M.length;it++)n.bindFramebuffer(s.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+it,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+it,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer);const Ye=P.texture.mipmaps;Ye&&Ye.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,ke.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let it=0;it<M.length;it++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),we){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ke.__webglColorRenderbuffer[it]);const ye=r.get(M[it]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ye,0)}s.blitFramebuffer(0,0,W,he,0,0,W,he,ge,s.NEAREST),p===!0&&(bt.length=0,ct.length=0,bt.push(s.COLOR_ATTACHMENT0+it),P.depthBuffer&&P.resolveDepthBuffer===!1&&(bt.push(ue),ct.push(ue),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ct)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,bt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),we)for(let it=0;it<M.length;it++){n.bindFramebuffer(s.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+it,s.RENDERBUFFER,ke.__webglColorRenderbuffer[it]);const ye=r.get(M[it]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+it,s.TEXTURE_2D,ye,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&p){const M=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function z(P){return Math.min(o.maxSamples,P.samples)}function Bt(P){const M=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function mt(P){const M=u.render.frame;x.get(P)!==M&&(x.set(P,M),P.update())}function yt(P,M){const W=P.colorSpace,he=P.format,ge=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==js&&W!==br&&(Et.getTransfer(W)===Lt?(he!==mi||ge!==ni)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):wt("WebGLTextures: Unsupported texture color space:",W)),M}function Ge(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(m.width=P.naturalWidth||P.width,m.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(m.width=P.displayWidth,m.height=P.displayHeight):(m.width=P.width,m.height=P.height),m}this.allocateTextureUnit=J,this.resetTextureUnits=$,this.setTexture2D=Z,this.setTexture2DArray=ie,this.setTexture3D=X,this.setTextureCube=K,this.rebindTextures=Xt,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Bt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function s1(s,e){function n(r,o=br){let c;const u=Et.getTransfer(o);if(r===ni)return s.UNSIGNED_BYTE;if(r===cd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===ud)return s.UNSIGNED_SHORT_5_5_5_1;if(r===dg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===hg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===ug)return s.BYTE;if(r===fg)return s.SHORT;if(r===Ha)return s.UNSIGNED_SHORT;if(r===ld)return s.INT;if(r===Ri)return s.UNSIGNED_INT;if(r===wi)return s.FLOAT;if(r===Ki)return s.HALF_FLOAT;if(r===pg)return s.ALPHA;if(r===mg)return s.RGB;if(r===mi)return s.RGBA;if(r===Zi)return s.DEPTH_COMPONENT;if(r===ts)return s.DEPTH_STENCIL;if(r===gg)return s.RED;if(r===fd)return s.RED_INTEGER;if(r===Xs)return s.RG;if(r===dd)return s.RG_INTEGER;if(r===hd)return s.RGBA_INTEGER;if(r===Dl||r===Nl||r===Il||r===Ul)if(u===Lt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Dl)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Nl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Il)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ul)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Dl)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Nl)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Il)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ul)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Tf||r===wf||r===Af||r===bf)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Tf)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===wf)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Af)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===bf)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Cf||r===Rf||r===Pf||r===Lf||r===Df||r===Nf||r===If)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Cf||r===Rf)return u===Lt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Pf)return u===Lt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Lf)return c.COMPRESSED_R11_EAC;if(r===Df)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Nf)return c.COMPRESSED_RG11_EAC;if(r===If)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Uf||r===Ff||r===Of||r===kf||r===Bf||r===zf||r===Vf||r===Hf||r===Gf||r===Wf||r===Xf||r===jf||r===qf||r===Yf)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Uf)return u===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ff)return u===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Of)return u===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===kf)return u===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Bf)return u===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===zf)return u===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Vf)return u===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Hf)return u===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Gf)return u===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Wf)return u===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Xf)return u===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===jf)return u===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===qf)return u===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Yf)return u===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===$f||r===Kf||r===Zf)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===$f)return u===Lt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Kf)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Zf)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Qf||r===Jf||r===ed||r===td)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Qf)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Jf)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ed)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===td)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ga?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const a1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,o1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class l1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new Cg(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Pi({vertexShader:a1,fragmentShader:o1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ji(new Xl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class c1 extends Ys{constructor(e,n){super();const r=this;let o=null,c=1,u=null,d="local-floor",p=1,m=null,x=null,y=null,g=null,S=null,T=null;const b=typeof XRWebGLBinding<"u",_=new l1,v={},C=n.getContextAttributes();let N=null,L=null;const V=[],k=[],O=new Dt;let w=null;const R=new ti;R.viewport=new $t;const de=new ti;de.viewport=new $t;const I=[R,de],$=new yx;let J=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let me=V[re];return me===void 0&&(me=new Hu,V[re]=me),me.getTargetRaySpace()},this.getControllerGrip=function(re){let me=V[re];return me===void 0&&(me=new Hu,V[re]=me),me.getGripSpace()},this.getHand=function(re){let me=V[re];return me===void 0&&(me=new Hu,V[re]=me),me.getHandSpace()};function Z(re){const me=k.indexOf(re.inputSource);if(me===-1)return;const pe=V[me];pe!==void 0&&(pe.update(re.inputSource,re.frame,m||u),pe.dispatchEvent({type:re.type,data:re.inputSource}))}function ie(){o.removeEventListener("select",Z),o.removeEventListener("selectstart",Z),o.removeEventListener("selectend",Z),o.removeEventListener("squeeze",Z),o.removeEventListener("squeezestart",Z),o.removeEventListener("squeezeend",Z),o.removeEventListener("end",ie),o.removeEventListener("inputsourceschange",X);for(let re=0;re<V.length;re++){const me=k[re];me!==null&&(k[re]=null,V[re].disconnect(me))}J=null,le=null,_.reset();for(const re in v)delete v[re];e.setRenderTarget(N),S=null,g=null,y=null,o=null,L=null,Ze.stop(),r.isPresenting=!1,e.setPixelRatio(w),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){c=re,r.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){d=re,r.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(re){m=re},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return y===null&&b&&(y=new XRWebGLBinding(o,n)),y},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(re){if(o=re,o!==null){if(N=e.getRenderTarget(),o.addEventListener("select",Z),o.addEventListener("selectstart",Z),o.addEventListener("selectend",Z),o.addEventListener("squeeze",Z),o.addEventListener("squeezestart",Z),o.addEventListener("squeezeend",Z),o.addEventListener("end",ie),o.addEventListener("inputsourceschange",X),C.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(O),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Fe=null,He=null;C.depth&&(He=C.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,pe=C.stencil?ts:Zi,Fe=C.stencil?Ga:Ri);const nt={colorFormat:n.RGBA8,depthFormat:He,scaleFactor:c};y=this.getBinding(),g=y.createProjectionLayer(nt),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),L=new Ci(g.textureWidth,g.textureHeight,{format:mi,type:ni,depthTexture:new Wa(g.textureWidth,g.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const pe={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(o,n,pe),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new Ci(S.framebufferWidth,S.framebufferHeight,{format:mi,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(p),m=null,u=await o.requestReferenceSpace(d),Ze.setContext(o),Ze.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(re){for(let me=0;me<re.removed.length;me++){const pe=re.removed[me],Fe=k.indexOf(pe);Fe>=0&&(k[Fe]=null,V[Fe].disconnect(pe))}for(let me=0;me<re.added.length;me++){const pe=re.added[me];let Fe=k.indexOf(pe);if(Fe===-1){for(let nt=0;nt<V.length;nt++)if(nt>=k.length){k.push(pe),Fe=nt;break}else if(k[nt]===null){k[nt]=pe,Fe=nt;break}if(Fe===-1)break}const He=V[Fe];He&&He.connect(pe)}}const K=new ne,oe=new ne;function ce(re,me,pe){K.setFromMatrixPosition(me.matrixWorld),oe.setFromMatrixPosition(pe.matrixWorld);const Fe=K.distanceTo(oe),He=me.projectionMatrix.elements,nt=pe.projectionMatrix.elements,Xt=He[14]/(He[10]-1),ht=He[14]/(He[10]+1),xt=(He[9]+1)/He[5],bt=(He[9]-1)/He[5],ct=(He[8]-1)/He[0],Ft=(nt[8]+1)/nt[0],z=Xt*ct,Bt=Xt*Ft,mt=Fe/(-ct+Ft),yt=mt*-ct;if(me.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(yt),re.translateZ(mt),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),He[10]===-1)re.projectionMatrix.copy(me.projectionMatrix),re.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const Ge=Xt+mt,P=ht+mt,M=z-yt,W=Bt+(Fe-yt),he=xt*ht/P*Ge,ge=bt*ht/P*Ge;re.projectionMatrix.makePerspective(M,W,he,ge,Ge,P),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function U(re,me){me===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(me.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(o===null)return;let me=re.near,pe=re.far;_.texture!==null&&(_.depthNear>0&&(me=_.depthNear),_.depthFar>0&&(pe=_.depthFar)),$.near=de.near=R.near=me,$.far=de.far=R.far=pe,(J!==$.near||le!==$.far)&&(o.updateRenderState({depthNear:$.near,depthFar:$.far}),J=$.near,le=$.far),$.layers.mask=re.layers.mask|6,R.layers.mask=$.layers.mask&-5,de.layers.mask=$.layers.mask&-3;const Fe=re.parent,He=$.cameras;U($,Fe);for(let nt=0;nt<He.length;nt++)U(He[nt],Fe);He.length===2?ce($,R,de):$.projectionMatrix.copy(R.projectionMatrix),q(re,$,Fe)};function q(re,me,pe){pe===null?re.matrix.copy(me.matrixWorld):(re.matrix.copy(pe.matrixWorld),re.matrix.invert(),re.matrix.multiply(me.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(me.projectionMatrix),re.projectionMatrixInverse.copy(me.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=nd*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(g===null&&S===null))return p},this.setFoveation=function(re){p=re,g!==null&&(g.fixedFoveation=re),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=re)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh($)},this.getCameraTexture=function(re){return v[re]};let be=null;function Xe(re,me){if(x=me.getViewerPose(m||u),T=me,x!==null){const pe=x.views;S!==null&&(e.setRenderTargetFramebuffer(L,S.framebuffer),e.setRenderTarget(L));let Fe=!1;pe.length!==$.cameras.length&&($.cameras.length=0,Fe=!0);for(let ht=0;ht<pe.length;ht++){const xt=pe[ht];let bt=null;if(S!==null)bt=S.getViewport(xt);else{const Ft=y.getViewSubImage(g,xt);bt=Ft.viewport,ht===0&&(e.setRenderTargetTextures(L,Ft.colorTexture,Ft.depthStencilTexture),e.setRenderTarget(L))}let ct=I[ht];ct===void 0&&(ct=new ti,ct.layers.enable(ht),ct.viewport=new $t,I[ht]=ct),ct.matrix.fromArray(xt.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(xt.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(bt.x,bt.y,bt.width,bt.height),ht===0&&($.matrix.copy(ct.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Fe===!0&&$.cameras.push(ct)}const He=o.enabledFeatures;if(He&&He.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&b){y=r.getBinding();const ht=y.getDepthInformation(pe[0]);ht&&ht.isValid&&ht.texture&&_.init(ht,o.renderState)}if(He&&He.includes("camera-access")&&b){e.state.unbindTexture(),y=r.getBinding();for(let ht=0;ht<pe.length;ht++){const xt=pe[ht].camera;if(xt){let bt=v[xt];bt||(bt=new Cg,v[xt]=bt);const ct=y.getCameraImage(xt);bt.sourceTexture=ct}}}}for(let pe=0;pe<V.length;pe++){const Fe=k[pe],He=V[pe];Fe!==null&&He!==void 0&&He.update(Fe,me,m||u)}be&&be(re,me),me.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:me}),T=null}const Ze=new Dg;Ze.setAnimationLoop(Xe),this.setAnimationLoop=function(re){be=re},this.dispose=function(){}}}const Kr=new Qi,u1=new Wt;function f1(s,e){function n(_,v){_.matrixAutoUpdate===!0&&_.updateMatrix(),v.value.copy(_.matrix)}function r(_,v){v.color.getRGB(_.fogColor.value,Rg(s)),v.isFog?(_.fogNear.value=v.near,_.fogFar.value=v.far):v.isFogExp2&&(_.fogDensity.value=v.density)}function o(_,v,C,N,L){v.isMeshBasicMaterial?c(_,v):v.isMeshLambertMaterial?(c(_,v),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(c(_,v),y(_,v)):v.isMeshPhongMaterial?(c(_,v),x(_,v),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(c(_,v),g(_,v),v.isMeshPhysicalMaterial&&S(_,v,L)):v.isMeshMatcapMaterial?(c(_,v),T(_,v)):v.isMeshDepthMaterial?c(_,v):v.isMeshDistanceMaterial?(c(_,v),b(_,v)):v.isMeshNormalMaterial?c(_,v):v.isLineBasicMaterial?(u(_,v),v.isLineDashedMaterial&&d(_,v)):v.isPointsMaterial?p(_,v,C,N):v.isSpriteMaterial?m(_,v):v.isShadowMaterial?(_.color.value.copy(v.color),_.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(_,v){_.opacity.value=v.opacity,v.color&&_.diffuse.value.copy(v.color),v.emissive&&_.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(_.map.value=v.map,n(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,n(v.alphaMap,_.alphaMapTransform)),v.bumpMap&&(_.bumpMap.value=v.bumpMap,n(v.bumpMap,_.bumpMapTransform),_.bumpScale.value=v.bumpScale,v.side===Un&&(_.bumpScale.value*=-1)),v.normalMap&&(_.normalMap.value=v.normalMap,n(v.normalMap,_.normalMapTransform),_.normalScale.value.copy(v.normalScale),v.side===Un&&_.normalScale.value.negate()),v.displacementMap&&(_.displacementMap.value=v.displacementMap,n(v.displacementMap,_.displacementMapTransform),_.displacementScale.value=v.displacementScale,_.displacementBias.value=v.displacementBias),v.emissiveMap&&(_.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,_.emissiveMapTransform)),v.specularMap&&(_.specularMap.value=v.specularMap,n(v.specularMap,_.specularMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest);const C=e.get(v),N=C.envMap,L=C.envMapRotation;N&&(_.envMap.value=N,Kr.copy(L),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),_.envMapRotation.value.setFromMatrix4(u1.makeRotationFromEuler(Kr)),_.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=v.reflectivity,_.ior.value=v.ior,_.refractionRatio.value=v.refractionRatio),v.lightMap&&(_.lightMap.value=v.lightMap,_.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,_.lightMapTransform)),v.aoMap&&(_.aoMap.value=v.aoMap,_.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,_.aoMapTransform))}function u(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,v.map&&(_.map.value=v.map,n(v.map,_.mapTransform))}function d(_,v){_.dashSize.value=v.dashSize,_.totalSize.value=v.dashSize+v.gapSize,_.scale.value=v.scale}function p(_,v,C,N){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.size.value=v.size*C,_.scale.value=N*.5,v.map&&(_.map.value=v.map,n(v.map,_.uvTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,n(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function m(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.rotation.value=v.rotation,v.map&&(_.map.value=v.map,n(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,n(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function x(_,v){_.specular.value.copy(v.specular),_.shininess.value=Math.max(v.shininess,1e-4)}function y(_,v){v.gradientMap&&(_.gradientMap.value=v.gradientMap)}function g(_,v){_.metalness.value=v.metalness,v.metalnessMap&&(_.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,_.metalnessMapTransform)),_.roughness.value=v.roughness,v.roughnessMap&&(_.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,_.roughnessMapTransform)),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)}function S(_,v,C){_.ior.value=v.ior,v.sheen>0&&(_.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),_.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(_.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,_.sheenColorMapTransform)),v.sheenRoughnessMap&&(_.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,_.sheenRoughnessMapTransform))),v.clearcoat>0&&(_.clearcoat.value=v.clearcoat,_.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(_.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,_.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(_.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Un&&_.clearcoatNormalScale.value.negate())),v.dispersion>0&&(_.dispersion.value=v.dispersion),v.iridescence>0&&(_.iridescence.value=v.iridescence,_.iridescenceIOR.value=v.iridescenceIOR,_.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(_.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,_.iridescenceMapTransform)),v.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),v.transmission>0&&(_.transmission.value=v.transmission,_.transmissionSamplerMap.value=C.texture,_.transmissionSamplerSize.value.set(C.width,C.height),v.transmissionMap&&(_.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,_.transmissionMapTransform)),_.thickness.value=v.thickness,v.thicknessMap&&(_.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=v.attenuationDistance,_.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(_.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(_.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=v.specularIntensity,_.specularColor.value.copy(v.specularColor),v.specularColorMap&&(_.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,_.specularColorMapTransform)),v.specularIntensityMap&&(_.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,_.specularIntensityMapTransform))}function T(_,v){v.matcap&&(_.matcap.value=v.matcap)}function b(_,v){const C=e.get(v).light;_.referencePosition.value.setFromMatrixPosition(C.matrixWorld),_.nearDistance.value=C.shadow.camera.near,_.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function d1(s,e,n,r){let o={},c={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(C,N){const L=N.program;r.uniformBlockBinding(C,L)}function m(C,N){let L=o[C.id];L===void 0&&(T(C),L=x(C),o[C.id]=L,C.addEventListener("dispose",_));const V=N.program;r.updateUBOMapping(C,V);const k=e.render.frame;c[C.id]!==k&&(g(C),c[C.id]=k)}function x(C){const N=y();C.__bindingPointIndex=N;const L=s.createBuffer(),V=C.__size,k=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,V,k),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,L),L}function y(){for(let C=0;C<d;C++)if(u.indexOf(C)===-1)return u.push(C),C;return wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const N=o[C.id],L=C.uniforms,V=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let k=0,O=L.length;k<O;k++){const w=Array.isArray(L[k])?L[k]:[L[k]];for(let R=0,de=w.length;R<de;R++){const I=w[R];if(S(I,k,R,V)===!0){const $=I.__offset,J=Array.isArray(I.value)?I.value:[I.value];let le=0;for(let Z=0;Z<J.length;Z++){const ie=J[Z],X=b(ie);typeof ie=="number"||typeof ie=="boolean"?(I.__data[0]=ie,s.bufferSubData(s.UNIFORM_BUFFER,$+le,I.__data)):ie.isMatrix3?(I.__data[0]=ie.elements[0],I.__data[1]=ie.elements[1],I.__data[2]=ie.elements[2],I.__data[3]=0,I.__data[4]=ie.elements[3],I.__data[5]=ie.elements[4],I.__data[6]=ie.elements[5],I.__data[7]=0,I.__data[8]=ie.elements[6],I.__data[9]=ie.elements[7],I.__data[10]=ie.elements[8],I.__data[11]=0):(ie.toArray(I.__data,le),le+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,$,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(C,N,L,V){const k=C.value,O=N+"_"+L;if(V[O]===void 0)return typeof k=="number"||typeof k=="boolean"?V[O]=k:V[O]=k.clone(),!0;{const w=V[O];if(typeof k=="number"||typeof k=="boolean"){if(w!==k)return V[O]=k,!0}else if(w.equals(k)===!1)return w.copy(k),!0}return!1}function T(C){const N=C.uniforms;let L=0;const V=16;for(let O=0,w=N.length;O<w;O++){const R=Array.isArray(N[O])?N[O]:[N[O]];for(let de=0,I=R.length;de<I;de++){const $=R[de],J=Array.isArray($.value)?$.value:[$.value];for(let le=0,Z=J.length;le<Z;le++){const ie=J[le],X=b(ie),K=L%V,oe=K%X.boundary,ce=K+oe;L+=oe,ce!==0&&V-ce<X.storage&&(L+=V-ce),$.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=L,L+=X.storage}}}const k=L%V;return k>0&&(L+=V-k),C.__size=L,C.__cache={},this}function b(C){const N={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(N.boundary=4,N.storage=4):C.isVector2?(N.boundary=8,N.storage=8):C.isVector3||C.isColor?(N.boundary=16,N.storage=12):C.isVector4?(N.boundary=16,N.storage=16):C.isMatrix3?(N.boundary=48,N.storage=48):C.isMatrix4?(N.boundary=64,N.storage=64):C.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ot("WebGLRenderer: Unsupported uniform value type.",C),N}function _(C){const N=C.target;N.removeEventListener("dispose",_);const L=u.indexOf(N.__bindingPointIndex);u.splice(L,1),s.deleteBuffer(o[N.id]),delete o[N.id],delete c[N.id]}function v(){for(const C in o)s.deleteBuffer(o[C]);u=[],o={},c={}}return{bind:p,update:m,dispose:v}}const h1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ei=null;function p1(){return Ei===null&&(Ei=new rx(h1,16,16,Xs,Ki),Ei.name="DFG_LUT",Ei.minFilter=_n,Ei.magFilter=_n,Ei.wrapS=qi,Ei.wrapT=qi,Ei.generateMipmaps=!1,Ei.needsUpdate=!0),Ei}class m1{constructor(e={}){const{canvas:n=Uv(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:g=!1,outputBufferType:S=ni}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=u;const b=S,_=new Set([hd,dd,fd]),v=new Set([ni,Ri,Ha,Ga,cd,ud]),C=new Uint32Array(4),N=new Int32Array(4);let L=null,V=null;const k=[],O=[];let w=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let de=!1;this._outputColorSpace=ei;let I=0,$=0,J=null,le=-1,Z=null;const ie=new $t,X=new $t;let K=null;const oe=new Rt(0);let ce=0,U=n.width,q=n.height,be=1,Xe=null,Ze=null;const re=new $t(0,0,U,q),me=new $t(0,0,U,q);let pe=!1;const Fe=new Tg;let He=!1,nt=!1;const Xt=new Wt,ht=new ne,xt=new $t,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function Ft(){return J===null?be:1}let z=r;function Bt(A,j){return n.getContext(A,j)}try{const A={alpha:!0,depth:o,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:x,failIfMajorPerformanceCaveat:y};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${od}`),n.addEventListener("webglcontextlost",ze,!1),n.addEventListener("webglcontextrestored",rt,!1),n.addEventListener("webglcontextcreationerror",Pt,!1),z===null){const j="webgl2";if(z=Bt(j,A),z===null)throw Bt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw wt("WebGLRenderer: "+A.message),A}let mt,yt,Ge,P,M,W,he,ge,ue,ke,we,Ye,it,ye,Te,We,Be,Le,lt,H,Ae,Me,De;function Se(){mt=new mM(z),mt.init(),Ae=new s1(z,mt),yt=new oM(z,mt,e,Ae),Ge=new i1(z,mt),yt.reversedDepthBuffer&&g&&Ge.buffers.depth.setReversed(!0),P=new vM(z),M=new GE,W=new r1(z,mt,Ge,M,yt,Ae,P),he=new pM(R),ge=new Ex(z),Me=new sM(z,ge),ue=new gM(z,ge,P,Me),ke=new yM(z,ue,ge,Me,P),Le=new xM(z,yt,W),Te=new lM(M),we=new HE(R,he,mt,yt,Me,Te),Ye=new f1(R,M),it=new XE,ye=new ZE(mt),Be=new rM(R,he,Ge,ke,T,p),We=new n1(R,ke,yt),De=new d1(z,P,yt,Ge),lt=new aM(z,mt,P),H=new _M(z,mt,P),P.programs=we.programs,R.capabilities=yt,R.extensions=mt,R.properties=M,R.renderLists=it,R.shadowMap=We,R.state=Ge,R.info=P}Se(),b!==ni&&(w=new MM(b,n.width,n.height,o,c));const fe=new c1(R,z);this.xr=fe,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const A=mt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=mt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(A){A!==void 0&&(be=A,this.setSize(U,q,!1))},this.getSize=function(A){return A.set(U,q)},this.setSize=function(A,j,ae=!0){if(fe.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}U=A,q=j,n.width=Math.floor(A*be),n.height=Math.floor(j*be),ae===!0&&(n.style.width=A+"px",n.style.height=j+"px"),w!==null&&w.setSize(n.width,n.height),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(U*be,q*be).floor()},this.setDrawingBufferSize=function(A,j,ae){U=A,q=j,be=ae,n.width=Math.floor(A*ae),n.height=Math.floor(j*ae),this.setViewport(0,0,A,j)},this.setEffects=function(A){if(b===ni){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let j=0;j<A.length;j++)if(A[j].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(ie)},this.getViewport=function(A){return A.copy(re)},this.setViewport=function(A,j,ae,te){A.isVector4?re.set(A.x,A.y,A.z,A.w):re.set(A,j,ae,te),Ge.viewport(ie.copy(re).multiplyScalar(be).round())},this.getScissor=function(A){return A.copy(me)},this.setScissor=function(A,j,ae,te){A.isVector4?me.set(A.x,A.y,A.z,A.w):me.set(A,j,ae,te),Ge.scissor(X.copy(me).multiplyScalar(be).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(A){Ge.setScissorTest(pe=A)},this.setOpaqueSort=function(A){Xe=A},this.setTransparentSort=function(A){Ze=A},this.getClearColor=function(A){return A.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(A=!0,j=!0,ae=!0){let te=0;if(A){let Q=!1;if(J!==null){const Re=J.texture.format;Q=_.has(Re)}if(Q){const Re=J.texture.type,Ue=v.has(Re),Ce=Be.getClearColor(),Ne=Be.getClearAlpha(),Ke=Ce.r,Je=Ce.g,ut=Ce.b;Ue?(C[0]=Ke,C[1]=Je,C[2]=ut,C[3]=Ne,z.clearBufferuiv(z.COLOR,0,C)):(N[0]=Ke,N[1]=Je,N[2]=ut,N[3]=Ne,z.clearBufferiv(z.COLOR,0,N))}else te|=z.COLOR_BUFFER_BIT}j&&(te|=z.DEPTH_BUFFER_BIT),ae&&(te|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&z.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ze,!1),n.removeEventListener("webglcontextrestored",rt,!1),n.removeEventListener("webglcontextcreationerror",Pt,!1),Be.dispose(),it.dispose(),ye.dispose(),M.dispose(),he.dispose(),ke.dispose(),Me.dispose(),De.dispose(),we.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",er),fe.removeEventListener("sessionend",Pr),Xn.stop()};function ze(A){A.preventDefault(),em("WebGLRenderer: Context Lost."),de=!0}function rt(){em("WebGLRenderer: Context Restored."),de=!1;const A=P.autoReset,j=We.enabled,ae=We.autoUpdate,te=We.needsUpdate,Q=We.type;Se(),P.autoReset=A,We.enabled=j,We.autoUpdate=ae,We.needsUpdate=te,We.type=Q}function Pt(A){wt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function St(A){const j=A.target;j.removeEventListener("dispose",St),Wn(j)}function Wn(A){xn(A),M.remove(A)}function xn(A){const j=M.get(A).programs;j!==void 0&&(j.forEach(function(ae){we.releaseProgram(ae)}),A.isShaderMaterial&&we.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,ae,te,Q,Re){j===null&&(j=bt);const Ue=Q.isMesh&&Q.matrixWorld.determinant()<0,Ce=Qa(A,j,ae,te,Q);Ge.setMaterial(te,Ue);let Ne=ae.index,Ke=1;if(te.wireframe===!0){if(Ne=ue.getWireframeAttribute(ae),Ne===void 0)return;Ke=2}const Je=ae.drawRange,ut=ae.attributes.position;let Qe=Je.start*Ke,Ct=(Je.start+Je.count)*Ke;Re!==null&&(Qe=Math.max(Qe,Re.start*Ke),Ct=Math.min(Ct,(Re.start+Re.count)*Ke)),Ne!==null?(Qe=Math.max(Qe,0),Ct=Math.min(Ct,Ne.count)):ut!=null&&(Qe=Math.max(Qe,0),Ct=Math.min(Ct,ut.count));const It=Ct-Qe;if(It<0||It===1/0)return;Me.setup(Q,te,Ce,ae,Ne);let Nt,vt=lt;if(Ne!==null&&(Nt=ge.get(Ne),vt=H,vt.setIndex(Nt)),Q.isMesh)te.wireframe===!0?(Ge.setLineWidth(te.wireframeLinewidth*Ft()),vt.setMode(z.LINES)):vt.setMode(z.TRIANGLES);else if(Q.isLine){let jt=te.linewidth;jt===void 0&&(jt=1),Ge.setLineWidth(jt*Ft()),Q.isLineSegments?vt.setMode(z.LINES):Q.isLineLoop?vt.setMode(z.LINE_LOOP):vt.setMode(z.LINE_STRIP)}else Q.isPoints?vt.setMode(z.POINTS):Q.isSprite&&vt.setMode(z.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Vl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),vt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))vt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const jt=Q._multiDrawStarts,qe=Q._multiDrawCounts,yn=Q._multiDrawCount,gt=Ne?ge.get(Ne).bytesPerElement:1,An=M.get(te).currentProgram.getUniforms();for(let bn=0;bn<yn;bn++)An.setValue(z,"_gl_DrawID",bn),vt.render(jt[bn]/gt,qe[bn])}else if(Q.isInstancedMesh)vt.renderInstances(Qe,It,Q.count);else if(ae.isInstancedBufferGeometry){const jt=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,qe=Math.min(ae.instanceCount,jt);vt.renderInstances(Qe,It,qe)}else vt.render(Qe,It)};function is(A,j,ae){A.transparent===!0&&A.side===ji&&A.forceSinglePass===!1?(A.side=Un,A.needsUpdate=!0,Dr(A,j,ae),A.side=Rr,A.needsUpdate=!0,Dr(A,j,ae),A.side=ji):Dr(A,j,ae)}this.compile=function(A,j,ae=null){ae===null&&(ae=A),V=ye.get(ae),V.init(j),O.push(V),ae.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(V.pushLight(Q),Q.castShadow&&V.pushShadow(Q))}),A!==ae&&A.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(V.pushLight(Q),Q.castShadow&&V.pushShadow(Q))}),V.setupLights();const te=new Set;return A.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Re=Q.material;if(Re)if(Array.isArray(Re))for(let Ue=0;Ue<Re.length;Ue++){const Ce=Re[Ue];is(Ce,ae,Q),te.add(Ce)}else is(Re,ae,Q),te.add(Re)}),V=O.pop(),te},this.compileAsync=function(A,j,ae=null){const te=this.compile(A,j,ae);return new Promise(Q=>{function Re(){if(te.forEach(function(Ue){M.get(Ue).currentProgram.isReady()&&te.delete(Ue)}),te.size===0){Q(A);return}setTimeout(Re,10)}mt.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Li=null;function Yl(A){Li&&Li(A)}function er(){Xn.stop()}function Pr(){Xn.start()}const Xn=new Dg;Xn.setAnimationLoop(Yl),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(A){Li=A,fe.setAnimationLoop(A),A===null?Xn.stop():Xn.start()},fe.addEventListener("sessionstart",er),fe.addEventListener("sessionend",Pr),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(de===!0)return;const ae=fe.enabled===!0&&fe.isPresenting===!0,te=w!==null&&(J===null||ae)&&w.begin(R,J);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(j),j=fe.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,j,J),V=ye.get(A,O.length),V.init(j),O.push(V),Xt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Fe.setFromProjectionMatrix(Xt,Ai,j.reversedDepth),nt=this.localClippingEnabled,He=Te.init(this.clippingPlanes,nt),L=it.get(A,k.length),L.init(),k.push(L),fe.enabled===!0&&fe.isPresenting===!0){const Ue=R.xr.getDepthSensingMesh();Ue!==null&&Lr(Ue,j,-1/0,R.sortObjects)}Lr(A,j,0,R.sortObjects),L.finish(),R.sortObjects===!0&&L.sort(Xe,Ze),ct=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,ct&&Be.addToRenderList(L,A),this.info.render.frame++,He===!0&&Te.beginShadows();const Q=V.state.shadowsArray;if(We.render(Q,A,j),He===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset(),(te&&w.hasRenderPass())===!1){const Ue=L.opaque,Ce=L.transmissive;if(V.setupLights(),j.isArrayCamera){const Ne=j.cameras;if(Ce.length>0)for(let Ke=0,Je=Ne.length;Ke<Je;Ke++){const ut=Ne[Ke];Ka(Ue,Ce,A,ut)}ct&&Be.render(A);for(let Ke=0,Je=Ne.length;Ke<Je;Ke++){const ut=Ne[Ke];$a(L,A,ut,ut.viewport)}}else Ce.length>0&&Ka(Ue,Ce,A,j),ct&&Be.render(A),$a(L,A,j)}J!==null&&$===0&&(W.updateMultisampleRenderTarget(J),W.updateRenderTargetMipmap(J)),te&&w.end(R),A.isScene===!0&&A.onAfterRender(R,A,j),Me.resetDefaultState(),le=-1,Z=null,O.pop(),O.length>0?(V=O[O.length-1],He===!0&&Te.setGlobalState(R.clippingPlanes,V.state.camera)):V=null,k.pop(),k.length>0?L=k[k.length-1]:L=null};function Lr(A,j,ae,te){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)ae=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLight)V.pushLight(A),A.castShadow&&V.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Fe.intersectsSprite(A)){te&&xt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Xt);const Ue=ke.update(A),Ce=A.material;Ce.visible&&L.push(A,Ue,Ce,ae,xt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Fe.intersectsObject(A))){const Ue=ke.update(A),Ce=A.material;if(te&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),xt.copy(A.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),xt.copy(Ue.boundingSphere.center)),xt.applyMatrix4(A.matrixWorld).applyMatrix4(Xt)),Array.isArray(Ce)){const Ne=Ue.groups;for(let Ke=0,Je=Ne.length;Ke<Je;Ke++){const ut=Ne[Ke],Qe=Ce[ut.materialIndex];Qe&&Qe.visible&&L.push(A,Ue,Qe,ae,xt.z,ut)}}else Ce.visible&&L.push(A,Ue,Ce,ae,xt.z,null)}}const Re=A.children;for(let Ue=0,Ce=Re.length;Ue<Ce;Ue++)Lr(Re[Ue],j,ae,te)}function $a(A,j,ae,te){const{opaque:Q,transmissive:Re,transparent:Ue}=A;V.setupLightsView(ae),He===!0&&Te.setGlobalState(R.clippingPlanes,ae),te&&Ge.viewport(ie.copy(te)),Q.length>0&&rs(Q,j,ae),Re.length>0&&rs(Re,j,ae),Ue.length>0&&rs(Ue,j,ae),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function Ka(A,j,ae,te){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(V.state.transmissionRenderTarget[te.id]===void 0){const Qe=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");V.state.transmissionRenderTarget[te.id]=new Ci(1,1,{generateMipmaps:!0,type:Qe?Ki:ni,minFilter:es,samples:Math.max(4,yt.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace})}const Re=V.state.transmissionRenderTarget[te.id],Ue=te.viewport||ie;Re.setSize(Ue.z*R.transmissionResolutionScale,Ue.w*R.transmissionResolutionScale);const Ce=R.getRenderTarget(),Ne=R.getActiveCubeFace(),Ke=R.getActiveMipmapLevel();R.setRenderTarget(Re),R.getClearColor(oe),ce=R.getClearAlpha(),ce<1&&R.setClearColor(16777215,.5),R.clear(),ct&&Be.render(ae);const Je=R.toneMapping;R.toneMapping=bi;const ut=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),V.setupLightsView(te),He===!0&&Te.setGlobalState(R.clippingPlanes,te),rs(A,ae,te),W.updateMultisampleRenderTarget(Re),W.updateRenderTargetMipmap(Re),mt.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Ct=0,It=j.length;Ct<It;Ct++){const Nt=j[Ct],{object:vt,geometry:jt,material:qe,group:yn}=Nt;if(qe.side===ji&&vt.layers.test(te.layers)){const gt=qe.side;qe.side=Un,qe.needsUpdate=!0,_i(vt,ae,te,jt,qe,yn),qe.side=gt,qe.needsUpdate=!0,Qe=!0}}Qe===!0&&(W.updateMultisampleRenderTarget(Re),W.updateRenderTargetMipmap(Re))}R.setRenderTarget(Ce,Ne,Ke),R.setClearColor(oe,ce),ut!==void 0&&(te.viewport=ut),R.toneMapping=Je}function rs(A,j,ae){const te=j.isScene===!0?j.overrideMaterial:null;for(let Q=0,Re=A.length;Q<Re;Q++){const Ue=A[Q],{object:Ce,geometry:Ne,group:Ke}=Ue;let Je=Ue.material;Je.allowOverride===!0&&te!==null&&(Je=te),Ce.layers.test(ae.layers)&&_i(Ce,j,ae,Ne,Je,Ke)}}function _i(A,j,ae,te,Q,Re){A.onBeforeRender(R,j,ae,te,Q,Re),A.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Q.onBeforeRender(R,j,ae,te,A,Re),Q.transparent===!0&&Q.side===ji&&Q.forceSinglePass===!1?(Q.side=Un,Q.needsUpdate=!0,R.renderBufferDirect(ae,j,te,Q,A,Re),Q.side=Rr,Q.needsUpdate=!0,R.renderBufferDirect(ae,j,te,Q,A,Re),Q.side=ji):R.renderBufferDirect(ae,j,te,Q,A,Re),A.onAfterRender(R,j,ae,te,Q,Re)}function Dr(A,j,ae){j.isScene!==!0&&(j=bt);const te=M.get(A),Q=V.state.lights,Re=V.state.shadowsArray,Ue=Q.state.version,Ce=we.getParameters(A,Q.state,Re,j,ae),Ne=we.getProgramCacheKey(Ce);let Ke=te.programs;te.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?j.environment:null,te.fog=j.fog;const Je=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;te.envMap=he.get(A.envMap||te.environment,Je),te.envMapRotation=te.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,Ke===void 0&&(A.addEventListener("dispose",St),Ke=new Map,te.programs=Ke);let ut=Ke.get(Ne);if(ut!==void 0){if(te.currentProgram===ut&&te.lightsStateVersion===Ue)return Za(A,Ce),ut}else Ce.uniforms=we.getUniforms(A),A.onBeforeCompile(Ce,R),ut=we.acquireProgram(Ce,Ne),Ke.set(Ne,ut),te.uniforms=Ce.uniforms;const Qe=te.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Qe.clippingPlanes=Te.uniform),Za(A,Ce),te.needsLights=eo(A),te.lightsStateVersion=Ue,te.needsLights&&(Qe.ambientLightColor.value=Q.state.ambient,Qe.lightProbe.value=Q.state.probe,Qe.directionalLights.value=Q.state.directional,Qe.directionalLightShadows.value=Q.state.directionalShadow,Qe.spotLights.value=Q.state.spot,Qe.spotLightShadows.value=Q.state.spotShadow,Qe.rectAreaLights.value=Q.state.rectArea,Qe.ltc_1.value=Q.state.rectAreaLTC1,Qe.ltc_2.value=Q.state.rectAreaLTC2,Qe.pointLights.value=Q.state.point,Qe.pointLightShadows.value=Q.state.pointShadow,Qe.hemisphereLights.value=Q.state.hemi,Qe.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Qe.spotLightMatrix.value=Q.state.spotLightMatrix,Qe.spotLightMap.value=Q.state.spotLightMap,Qe.pointShadowMatrix.value=Q.state.pointShadowMatrix),te.currentProgram=ut,te.uniformsList=null,ut}function Qs(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=Fl.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function Za(A,j){const ae=M.get(A);ae.outputColorSpace=j.outputColorSpace,ae.batching=j.batching,ae.batchingColor=j.batchingColor,ae.instancing=j.instancing,ae.instancingColor=j.instancingColor,ae.instancingMorph=j.instancingMorph,ae.skinning=j.skinning,ae.morphTargets=j.morphTargets,ae.morphNormals=j.morphNormals,ae.morphColors=j.morphColors,ae.morphTargetsCount=j.morphTargetsCount,ae.numClippingPlanes=j.numClippingPlanes,ae.numIntersection=j.numClipIntersection,ae.vertexAlphas=j.vertexAlphas,ae.vertexTangents=j.vertexTangents,ae.toneMapping=j.toneMapping}function Qa(A,j,ae,te,Q){j.isScene!==!0&&(j=bt),W.resetTextureUnits();const Re=j.fog,Ue=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?j.environment:null,Ce=J===null?R.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:js,Ne=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,Ke=he.get(te.envMap||Ue,Ne),Je=te.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,ut=!!ae.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Qe=!!ae.morphAttributes.position,Ct=!!ae.morphAttributes.normal,It=!!ae.morphAttributes.color;let Nt=bi;te.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Nt=R.toneMapping);const vt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,jt=vt!==void 0?vt.length:0,qe=M.get(te),yn=V.state.lights;if(He===!0&&(nt===!0||A!==Z)){const qt=A===Z&&te.id===le;Te.setState(te,A,qt)}let gt=!1;te.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==yn.state.version||qe.outputColorSpace!==Ce||Q.isBatchedMesh&&qe.batching===!1||!Q.isBatchedMesh&&qe.batching===!0||Q.isBatchedMesh&&qe.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&qe.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&qe.instancing===!1||!Q.isInstancedMesh&&qe.instancing===!0||Q.isSkinnedMesh&&qe.skinning===!1||!Q.isSkinnedMesh&&qe.skinning===!0||Q.isInstancedMesh&&qe.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&qe.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&qe.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&qe.instancingMorph===!1&&Q.morphTexture!==null||qe.envMap!==Ke||te.fog===!0&&qe.fog!==Re||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Te.numPlanes||qe.numIntersection!==Te.numIntersection)||qe.vertexAlphas!==Je||qe.vertexTangents!==ut||qe.morphTargets!==Qe||qe.morphNormals!==Ct||qe.morphColors!==It||qe.toneMapping!==Nt||qe.morphTargetsCount!==jt)&&(gt=!0):(gt=!0,qe.__version=te.version);let An=qe.currentProgram;gt===!0&&(An=Dr(te,j,Q));let bn=!1,Fn=!1,tr=!1;const At=An.getUniforms(),st=qe.uniforms;if(Ge.useProgram(An.program)&&(bn=!0,Fn=!0,tr=!0),te.id!==le&&(le=te.id,Fn=!0),bn||Z!==A){Ge.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),At.setValue(z,"projectionMatrix",A.projectionMatrix),At.setValue(z,"viewMatrix",A.matrixWorldInverse);const jn=At.map.cameraPosition;jn!==void 0&&jn.setValue(z,ht.setFromMatrixPosition(A.matrixWorld)),yt.logarithmicDepthBuffer&&At.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&At.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),Z!==A&&(Z=A,Fn=!0,tr=!0)}if(qe.needsLights&&(yn.state.directionalShadowMap.length>0&&At.setValue(z,"directionalShadowMap",yn.state.directionalShadowMap,W),yn.state.spotShadowMap.length>0&&At.setValue(z,"spotShadowMap",yn.state.spotShadowMap,W),yn.state.pointShadowMap.length>0&&At.setValue(z,"pointShadowMap",yn.state.pointShadowMap,W)),Q.isSkinnedMesh){At.setOptional(z,Q,"bindMatrix"),At.setOptional(z,Q,"bindMatrixInverse");const qt=Q.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),At.setValue(z,"boneTexture",qt.boneTexture,W))}Q.isBatchedMesh&&(At.setOptional(z,Q,"batchingTexture"),At.setValue(z,"batchingTexture",Q._matricesTexture,W),At.setOptional(z,Q,"batchingIdTexture"),At.setValue(z,"batchingIdTexture",Q._indirectTexture,W),At.setOptional(z,Q,"batchingColorTexture"),Q._colorsTexture!==null&&At.setValue(z,"batchingColorTexture",Q._colorsTexture,W));const ri=ae.morphAttributes;if((ri.position!==void 0||ri.normal!==void 0||ri.color!==void 0)&&Le.update(Q,ae,An),(Fn||qe.receiveShadow!==Q.receiveShadow)&&(qe.receiveShadow=Q.receiveShadow,At.setValue(z,"receiveShadow",Q.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&j.environment!==null&&(st.envMapIntensity.value=j.environmentIntensity),st.dfgLUT!==void 0&&(st.dfgLUT.value=p1()),Fn&&(At.setValue(z,"toneMappingExposure",R.toneMappingExposure),qe.needsLights&&Ja(st,tr),Re&&te.fog===!0&&Ye.refreshFogUniforms(st,Re),Ye.refreshMaterialUniforms(st,te,be,q,V.state.transmissionRenderTarget[A.id]),Fl.upload(z,Qs(qe),st,W)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Fl.upload(z,Qs(qe),st,W),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&At.setValue(z,"center",Q.center),At.setValue(z,"modelViewMatrix",Q.modelViewMatrix),At.setValue(z,"normalMatrix",Q.normalMatrix),At.setValue(z,"modelMatrix",Q.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const qt=te.uniformsGroups;for(let jn=0,Di=qt.length;jn<Di;jn++){const Js=qt[jn];De.update(Js,An),De.bind(Js,An)}}return An}function Ja(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function eo(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(A,j,ae){const te=M.get(A);te.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),M.get(A.texture).__webglTexture=j,M.get(A.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:ae,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,j){const ae=M.get(A);ae.__webglFramebuffer=j,ae.__useDefaultFramebuffer=j===void 0};const to=z.createFramebuffer();this.setRenderTarget=function(A,j=0,ae=0){J=A,I=j,$=ae;let te=null,Q=!1,Re=!1;if(A){const Ce=M.get(A);if(Ce.__useDefaultFramebuffer!==void 0){Ge.bindFramebuffer(z.FRAMEBUFFER,Ce.__webglFramebuffer),ie.copy(A.viewport),X.copy(A.scissor),K=A.scissorTest,Ge.viewport(ie),Ge.scissor(X),Ge.setScissorTest(K),le=-1;return}else if(Ce.__webglFramebuffer===void 0)W.setupRenderTarget(A);else if(Ce.__hasExternalTextures)W.rebindTextures(A,M.get(A.texture).__webglTexture,M.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Je=A.depthTexture;if(Ce.__boundDepthTexture!==Je){if(Je!==null&&M.has(Je)&&(A.width!==Je.image.width||A.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(A)}}const Ne=A.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Re=!0);const Ke=M.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ke[j])?te=Ke[j][ae]:te=Ke[j],Q=!0):A.samples>0&&W.useMultisampledRTT(A)===!1?te=M.get(A).__webglMultisampledFramebuffer:Array.isArray(Ke)?te=Ke[ae]:te=Ke,ie.copy(A.viewport),X.copy(A.scissor),K=A.scissorTest}else ie.copy(re).multiplyScalar(be).floor(),X.copy(me).multiplyScalar(be).floor(),K=pe;if(ae!==0&&(te=to),Ge.bindFramebuffer(z.FRAMEBUFFER,te)&&Ge.drawBuffers(A,te),Ge.viewport(ie),Ge.scissor(X),Ge.setScissorTest(K),Q){const Ce=M.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ce.__webglTexture,ae)}else if(Re){const Ce=j;for(let Ne=0;Ne<A.textures.length;Ne++){const Ke=M.get(A.textures[Ne]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Ne,Ke.__webglTexture,ae,Ce)}}else if(A!==null&&ae!==0){const Ce=M.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ce.__webglTexture,ae)}le=-1},this.readRenderTargetPixels=function(A,j,ae,te,Q,Re,Ue,Ce=0){if(!(A&&A.isWebGLRenderTarget)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ne=Ne[Ue]),Ne){Ge.bindFramebuffer(z.FRAMEBUFFER,Ne);try{const Ke=A.textures[Ce],Je=Ke.format,ut=Ke.type;if(A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ce),!yt.textureFormatReadable(Je)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(ut)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-te&&ae>=0&&ae<=A.height-Q&&z.readPixels(j,ae,te,Q,Ae.convert(Je),Ae.convert(ut),Re)}finally{const Ke=J!==null?M.get(J).__webglFramebuffer:null;Ge.bindFramebuffer(z.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(A,j,ae,te,Q,Re,Ue,Ce=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ne=Ne[Ue]),Ne)if(j>=0&&j<=A.width-te&&ae>=0&&ae<=A.height-Q){Ge.bindFramebuffer(z.FRAMEBUFFER,Ne);const Ke=A.textures[Ce],Je=Ke.format,ut=Ke.type;if(A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ce),!yt.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Qe),z.bufferData(z.PIXEL_PACK_BUFFER,Re.byteLength,z.STREAM_READ),z.readPixels(j,ae,te,Q,Ae.convert(Je),Ae.convert(ut),0);const Ct=J!==null?M.get(J).__webglFramebuffer:null;Ge.bindFramebuffer(z.FRAMEBUFFER,Ct);const It=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Fv(z,It,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Qe),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Re),z.deleteBuffer(Qe),z.deleteSync(It),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,j=null,ae=0){const te=Math.pow(2,-ae),Q=Math.floor(A.image.width*te),Re=Math.floor(A.image.height*te),Ue=j!==null?j.x:0,Ce=j!==null?j.y:0;W.setTexture2D(A,0),z.copyTexSubImage2D(z.TEXTURE_2D,ae,0,0,Ue,Ce,Q,Re),Ge.unbindTexture()};const $l=z.createFramebuffer(),Kl=z.createFramebuffer();this.copyTextureToTexture=function(A,j,ae=null,te=null,Q=0,Re=0){let Ue,Ce,Ne,Ke,Je,ut,Qe,Ct,It;const Nt=A.isCompressedTexture?A.mipmaps[Re]:A.image;if(ae!==null)Ue=ae.max.x-ae.min.x,Ce=ae.max.y-ae.min.y,Ne=ae.isBox3?ae.max.z-ae.min.z:1,Ke=ae.min.x,Je=ae.min.y,ut=ae.isBox3?ae.min.z:0;else{const st=Math.pow(2,-Q);Ue=Math.floor(Nt.width*st),Ce=Math.floor(Nt.height*st),A.isDataArrayTexture?Ne=Nt.depth:A.isData3DTexture?Ne=Math.floor(Nt.depth*st):Ne=1,Ke=0,Je=0,ut=0}te!==null?(Qe=te.x,Ct=te.y,It=te.z):(Qe=0,Ct=0,It=0);const vt=Ae.convert(j.format),jt=Ae.convert(j.type);let qe;j.isData3DTexture?(W.setTexture3D(j,0),qe=z.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(W.setTexture2DArray(j,0),qe=z.TEXTURE_2D_ARRAY):(W.setTexture2D(j,0),qe=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,j.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,j.unpackAlignment);const yn=z.getParameter(z.UNPACK_ROW_LENGTH),gt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),An=z.getParameter(z.UNPACK_SKIP_PIXELS),bn=z.getParameter(z.UNPACK_SKIP_ROWS),Fn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Nt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Nt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ke),z.pixelStorei(z.UNPACK_SKIP_ROWS,Je),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ut);const tr=A.isDataArrayTexture||A.isData3DTexture,At=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){const st=M.get(A),ri=M.get(j),qt=M.get(st.__renderTarget),jn=M.get(ri.__renderTarget);Ge.bindFramebuffer(z.READ_FRAMEBUFFER,qt.__webglFramebuffer),Ge.bindFramebuffer(z.DRAW_FRAMEBUFFER,jn.__webglFramebuffer);for(let Di=0;Di<Ne;Di++)tr&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,M.get(A).__webglTexture,Q,ut+Di),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,M.get(j).__webglTexture,Re,It+Di)),z.blitFramebuffer(Ke,Je,Ue,Ce,Qe,Ct,Ue,Ce,z.DEPTH_BUFFER_BIT,z.NEAREST);Ge.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Q!==0||A.isRenderTargetTexture||M.has(A)){const st=M.get(A),ri=M.get(j);Ge.bindFramebuffer(z.READ_FRAMEBUFFER,$l),Ge.bindFramebuffer(z.DRAW_FRAMEBUFFER,Kl);for(let qt=0;qt<Ne;qt++)tr?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,st.__webglTexture,Q,ut+qt):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,st.__webglTexture,Q),At?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ri.__webglTexture,Re,It+qt):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ri.__webglTexture,Re),Q!==0?z.blitFramebuffer(Ke,Je,Ue,Ce,Qe,Ct,Ue,Ce,z.COLOR_BUFFER_BIT,z.NEAREST):At?z.copyTexSubImage3D(qe,Re,Qe,Ct,It+qt,Ke,Je,Ue,Ce):z.copyTexSubImage2D(qe,Re,Qe,Ct,Ke,Je,Ue,Ce);Ge.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else At?A.isDataTexture||A.isData3DTexture?z.texSubImage3D(qe,Re,Qe,Ct,It,Ue,Ce,Ne,vt,jt,Nt.data):j.isCompressedArrayTexture?z.compressedTexSubImage3D(qe,Re,Qe,Ct,It,Ue,Ce,Ne,vt,Nt.data):z.texSubImage3D(qe,Re,Qe,Ct,It,Ue,Ce,Ne,vt,jt,Nt):A.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Re,Qe,Ct,Ue,Ce,vt,jt,Nt.data):A.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Re,Qe,Ct,Nt.width,Nt.height,vt,Nt.data):z.texSubImage2D(z.TEXTURE_2D,Re,Qe,Ct,Ue,Ce,vt,jt,Nt);z.pixelStorei(z.UNPACK_ROW_LENGTH,yn),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,gt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,An),z.pixelStorei(z.UNPACK_SKIP_ROWS,bn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Fn),Re===0&&j.generateMipmaps&&z.generateMipmap(qe),Ge.unbindTexture()},this.initRenderTarget=function(A){M.get(A).__webglFramebuffer===void 0&&W.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?W.setTextureCube(A,0):A.isData3DTexture?W.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?W.setTexture2DArray(A,0):W.setTexture2D(A,0),Ge.unbindTexture()},this.resetState=function(){I=0,$=0,J=null,Ge.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),n.unpackColorSpace=Et._getUnpackColorSpace()}}function g1(){const s=gn.useRef(null);return gn.useEffect(()=>{const e=s.current;if(!e)return;const n=new Qv,r=new ti(75,e.clientWidth/e.clientHeight,.1,1e3);r.position.z=80;const o=new m1({antialias:!0,alpha:!0});o.setSize(e.clientWidth,e.clientHeight),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.setClearColor(0,0),e.appendChild(o.domElement);const c=120,u=[],d=[],p=100;for(let k=0;k<c;k++)u.push((Math.random()-.5)*p,(Math.random()-.5)*p,(Math.random()-.5)*40),d.push(new ne((Math.random()-.5)*.06,(Math.random()-.5)*.06,(Math.random()-.5)*.02));const m=new Gn,x=new Float32Array(u);m.setAttribute("position",new ii(x,3));const y=new Ag({color:54527,size:.7,transparent:!0,opacity:.85,sizeAttenuation:!0}),g=new ux(m,y);n.add(g);const S=new Gn,T=new Float32Array(c*c*6);S.setAttribute("position",new ii(T,3));const b=new cx(S,new wg({color:54527,transparent:!0,opacity:.15}));n.add(b);const _=new Dt(9999,9999),v=k=>{const O=e.getBoundingClientRect();_.x=(k.clientX-O.left)/e.clientWidth*2-1,_.y=-((k.clientY-O.top)/e.clientHeight)*2+1};window.addEventListener("mousemove",v);let C;const N=new Sx,L=()=>{C=requestAnimationFrame(L);const k=N.getElapsedTime(),O=m.attributes.position.array;for(let I=0;I<c;I++)O[I*3]+=d[I].x,O[I*3+1]+=d[I].y,O[I*3+2]+=d[I].z,Math.abs(O[I*3])>p/2&&(d[I].x*=-1),Math.abs(O[I*3+1])>p/2&&(d[I].y*=-1),Math.abs(O[I*3+2])>20&&(d[I].z*=-1);m.attributes.position.needsUpdate=!0;let w=0;const R=S.attributes.position.array,de=22;for(let I=0;I<c;I++)for(let $=I+1;$<c;$++){const J=O[I*3]-O[$*3],le=O[I*3+1]-O[$*3+1],Z=O[I*3+2]-O[$*3+2];Math.sqrt(J*J+le*le+Z*Z)<de&&w<R.length-5&&(R[w++]=O[I*3],R[w++]=O[I*3+1],R[w++]=O[I*3+2],R[w++]=O[$*3],R[w++]=O[$*3+1],R[w++]=O[$*3+2])}for(let I=w;I<R.length;I++)R[I]=0;S.attributes.position.needsUpdate=!0,S.setDrawRange(0,w/3),g.rotation.y=_.x*.05+k*.03,g.rotation.x=-_.y*.05+k*.01,b.rotation.y=_.x*.05+k*.03,b.rotation.x=-_.y*.05+k*.01,o.render(n,r)};L();const V=()=>{e&&(r.aspect=e.clientWidth/e.clientHeight,r.updateProjectionMatrix(),o.setSize(e.clientWidth,e.clientHeight))};return window.addEventListener("resize",V),()=>{cancelAnimationFrame(C),window.removeEventListener("mousemove",v),window.removeEventListener("resize",V),o.dispose(),e.contains(o.domElement)&&e.removeChild(o.domElement)}},[]),F.jsx("div",{ref:s,className:"absolute inset-0 w-full h-full",style:{pointerEvents:"none"}})}function _1(){const s=()=>{var e;(e=document.getElementById("skills"))==null||e.scrollIntoView({behavior:"smooth"})};return F.jsxs("section",{id:"about",className:"relative min-h-screen flex flex-col items-center justify-center overflow-hidden",style:{background:"linear-gradient(135deg, #06060f 0%, #0d0d2b 50%, #06060f 100%)"},children:[F.jsx(g1,{}),F.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:"radial-gradient(ellipse at 20% 50%, rgba(124,58,237,0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(0,212,255,0.1) 0%, transparent 50%)"}}),F.jsxs("div",{className:"relative z-10 max-w-4xl mx-auto px-6 text-center",children:[F.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs mb-6 border",style:{background:"rgba(0,212,255,0.07)",borderColor:"rgba(0,212,255,0.25)",color:"#00d4ff"},children:[F.jsx("span",{className:"w-1.5 h-1.5 rounded-full animate-pulse",style:{background:"#00d4ff"}}),"Available for opportunities"]}),F.jsx("h1",{className:"mb-4",style:{fontSize:"clamp(2.8rem, 8vw, 5.5rem)",fontWeight:800,letterSpacing:"-0.03em",lineHeight:1.05,background:"linear-gradient(135deg, #ffffff 0%, #a5b4fc 50%, #00d4ff 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"Aditya Kumar"}),F.jsx("h2",{className:"mb-6",style:{fontSize:"clamp(1.1rem, 3vw, 1.5rem)",fontWeight:500,color:"rgba(255,255,255,0.6)",letterSpacing:"0.05em"},children:"Senior Software Engineer"}),F.jsxs("p",{className:"max-w-2xl mx-auto mb-8 leading-relaxed",style:{fontSize:"clamp(0.9rem, 2vw, 1.05rem)",color:"rgba(255,255,255,0.5)",lineHeight:1.8},children:["Passionate backend engineer specializing in"," ",F.jsx("span",{style:{color:"#00d4ff"},children:"Golang"}),","," ",F.jsx("span",{style:{color:"#a5b4fc"},children:"distributed systems"}),", and"," ",F.jsx("span",{style:{color:"#00d4ff"},children:"cloud-native architecture"}),". Building scalable, event-driven microservices that power millions of user journeys."]}),F.jsx("div",{className:"flex flex-wrap items-center justify-center gap-3 mb-8",children:[{icon:F.jsx(Jm,{size:14}),text:"Bangalore, India"},{icon:F.jsx(Qm,{size:14}),text:"kumaraditya1096@gmail.com",href:"mailto:kumaraditya1096@gmail.com"},{icon:F.jsx(eg,{size:14}),text:"+91 93482 86941",href:"tel:+919348286941"}].map((e,n)=>F.jsxs("a",{href:e.href,className:"flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs transition-all duration-200 hover:scale-105",style:{background:"rgba(255,255,255,0.05)",color:"rgba(255,255,255,0.6)",border:"1px solid rgba(255,255,255,0.1)",textDecoration:"none",cursor:e.href?"pointer":"default"},children:[F.jsx("span",{style:{color:"#00d4ff"},children:e.icon}),e.text]},n))}),F.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4 mb-12",children:[F.jsxs("a",{href:"https://www.linkedin.com/in/aditya109/",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg",style:{background:"linear-gradient(135deg, #0077b5, #005885)",color:"#ffffff",boxShadow:"0 4px 20px rgba(0,119,181,0.3)"},children:[F.jsx(Ol,{size:16})," LinkedIn"]}),F.jsxs("a",{href:"https://github.com/aditya109",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg",style:{background:"rgba(255,255,255,0.08)",color:"#ffffff",border:"1px solid rgba(255,255,255,0.15)"},children:[F.jsx(Zm,{size:16})," GitHub"]}),F.jsxs("a",{href:"https://www.credly.com/users/aditya-kumar.dc8debcf/badges#credly",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105",style:{background:"rgb(16, 185, 129, 0.85)",color:"#ffffff",border:"1px solid rgba(16, 185, 129, 0.19)"},children:[F.jsx(Z_,{size:16})," Credly"]})]}),F.jsx("div",{className:"flex flex-wrap justify-center gap-6 md:gap-12",children:[{value:"8+",label:"Years Experience"}].map((e,n)=>F.jsxs("div",{className:"text-center",children:[F.jsx("div",{style:{fontSize:"1.8rem",fontWeight:700,background:"linear-gradient(135deg, #00d4ff, #7c3aed)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:e.value}),F.jsx("div",{className:"text-xs mt-0.5",style:{color:"rgba(255,255,255,0.4)"},children:e.label})]},n))})]}),F.jsxs("button",{onClick:s,className:"absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity duration-300",style:{color:"rgba(255,255,255,0.5)"},"aria-label":"Scroll down",children:[F.jsx("span",{className:"text-xs tracking-widest uppercase",style:{fontSize:"0.65rem"},children:"Scroll"}),F.jsx($m,{size:18,className:"animate-bounce",style:{animationDuration:"1.5s"}})]})]})}const v1=[{title:"Languages",color:"#00d4ff",skills:["Golang","Rust","Python"]},{title:"Platform Frameworks",color:"#ec4899",skills:["Temporal","Databricks"]},{title:"Message Streaming",color:"#7c3aed",skills:["Apache Kafka","SQS","SNS"]},{title:"Databases",color:"#10b981",skills:["PostgreSQL","MongoDB","Redis","Aerospike"]},{title:"Cloud & DevOps",color:"#f59e0b",skills:["AWS","GCP","Azure","Kubernetes","CircleCI","ArgoCD","Jenkins","Terraform","Istio"]},{title:"Practices",color:"#06b6d4",skills:["Unit Testing","TDD","Distributed Tracing","Event-Driven Architecture"]}];function x1(){const s=gn.useRef(null);return F.jsx("section",{id:"skills",ref:s,className:"py-20 md:py-28",style:{background:"#07071a"},children:F.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",children:[F.jsxs("div",{className:"text-center mb-16",children:[F.jsx("span",{className:"text-xs uppercase tracking-widest mb-3 block",style:{color:"#00d4ff"},children:"Technical Proficiency"}),F.jsx("h2",{style:{fontSize:"clamp(1.8rem, 4vw, 2.8rem)",fontWeight:700,color:"#ffffff",letterSpacing:"-0.02em"},children:"Skills & Technologies"}),F.jsx("div",{className:"mx-auto mt-4 rounded-full",style:{width:"60px",height:"3px",background:"linear-gradient(90deg, #00d4ff, #7c3aed)"}})]}),F.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:v1.map((e,n)=>F.jsxs("div",{className:"rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02]",style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)"},children:[F.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[F.jsx("div",{className:"w-2 h-8 rounded-full",style:{background:e.color}}),F.jsx("h3",{style:{color:"rgba(255,255,255,0.85)",fontSize:"0.95rem",fontWeight:600},children:e.title})]}),F.jsx("div",{className:"flex flex-wrap gap-2",children:e.skills.map((r,o)=>F.jsx("span",{className:"px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 hover:scale-105 cursor-default",style:{background:`${e.color}15`,color:e.color,border:`1px solid ${e.color}30`},children:r},o))})]},n))}),F.jsxs("div",{className:"mt-12 text-center",children:[F.jsx("p",{className:"text-xs uppercase tracking-widest mb-6",style:{color:"rgba(255,255,255,0.3)"},children:"Full Stack"}),F.jsx("div",{className:"flex flex-wrap justify-center gap-3",children:["Golang","Rust","Python","Apache Kafka","Temporal","Databricks","SQS","SNS","PostgreSQL","MongoDB","Redis","Aerospike","Kubernetes","AWS","GCP","Azure","CircleCI","Jenkins","Terraform","Istio","ArgoCD"].map((e,n)=>F.jsx("span",{className:"px-4 py-2 rounded-full text-sm transition-all duration-200 hover:scale-105 cursor-default",style:{background:"rgba(255,255,255,0.04)",color:"rgba(255,255,255,0.55)",border:"1px solid rgba(255,255,255,0.08)",fontSize:"0.8rem"},children:e},n))})]})]})})}const y1=[{company:"Flexera",location:"Bangalore, India",role:"Senior Software Engineer",period:"August '24 - Present",current:!0,color:"#4cbb17",keywords:["Golang","Rust","Temporal","SQS","SNS","MongoDB","AWS","EKS","Github Actions"],achievements:[{text:"Designed and developed a critical billing-locking microservice that manages automatic and manual billing period locks to ensure data integrity, audit compliance, and controlled reprocessing of finalized billing data. Built an event-driven pub/sub and queue-based architecture for asynchronous bulk reprocess/unlock requests, unified multi-stage bill data enrichment into a searchable view with CSV export, and added audit logging, rate limiting, cursor pagination, and automated retry recovery.",metric:"safe reprocessing of finalized bills manual effort ↓"},{text:"Architected and built a durable workflow orchestration service using Temporal workflow-as-code to coordinate multi-stage cloud billing pipelines for locking, unlocking, reprocessing, and schedule-based finalization across distributed downstream systems. Implemented built-in retries, heartbeat health checks, stale-operation recovery, query/signal-based progress visibility, per-organization rate limiting, audit-trail correlation, and bulk partial-failure handling for safe concurrent bill reprocessing.",metric:"100% reliability for critical orchestration operations"},{text:"Designed and documented a unified connector platform for cloud account onboarding, delivering a single consistent experience across multiple service domains. Defined an event-driven architecture with SQS/SNS, queue adapters, and asynchronous change workflows for create/update/delete operations, including clear failure reporting and retry paths. Built CloudFormation StackSet–based IAM role provisioning, credential vault integration, and migration from legacy credential storage. Ensured backward compatibility for downstream services by maintaining existing MongoDB schemas while introducing a dual-source model, and defined the contract for connector events and failure notifications to keep FinOps workflows resilient and observable.",metric:"3–4 day onboarding duration → 2 hours"}]},{company:"Furlenco",location:"Bangalore, India",role:"Senior Software Engineer",period:"December '22 – August '24",current:!1,color:"#00A1DE",keywords:["Golang","Rust","Temporal","Apache Kafka","PostgreSQL","MongoDB","AWS","CircleCI","Kubernetes"],achievements:[{text:"Crafted a robust, scalable, and resilient event-driven service in Rust, leveraging PostgreSQL and Kafka. Employed accurate state transition management, subtle retry mechanisms, and the effective use of the adaptor pattern. Integrated various vendors like Moengage, Google Analytics, and Facebook, enabling the reconciliation of user actions for a precise understanding of business dynamics. This effort significantly contributed to providing product teams with an accurate depiction of user journeys, enhancing business insights.",metric:null},{text:"Rebuilt the application orchestration microservice in Golang, focusing on improved communication and request management between application services. Introduced concurrency to enhance workflow latency, implemented distributed tracing, and incorporated the reliable Temporal runtime for efficient debugging. ",metric:"63% customer adoption ↑ · 82% infrastructure cost ↓"},{text:"Implemented a Rust-based cart management service integrating Apache Kafka for user journey analysis.",metric:"37% acquisition funnel ↑"},{text:"Constructed a dynamic listing platform as a rendering engine for products and related data, consolidating diverse microservice data elements. Utilized data modeling and Mongo DB Atlas search to enable dynamic filter functionality and similar product recommendations. Implemented Kafka to ensure seamless data synchronization with business-dependent services.",metric:null},{text:"Led the engineering team — implementing development workflows, creating technical specifications, and establishing quality standards through unit tests and design documents.",metric:null}]},{company:"Exotel Techcom",location:"Bangalore, India",role:"Member of Technical Staff – I",period:"February '22 – December '22",current:!1,color:"#39b54a",keywords:["Golang","Ruby","Jenkins","Istio","Terraform","AWS","Jenkins","Kubernetes"],achievements:[{text:"Designed microservice model for a monolithic service, which enabled independent deployments for individual components of the service. Brought in containerization for smoother and faster scaling. Built CI/CD for the service, increasing developer productivity by increasing frequency and reducing deployment time. ",metric:"Scaled from 25M → 108M requests/day"},{text:"Designed and developed a custom (vegeta-based) robust load-testing framework to replicate multiple types of tenant-based production scenarios, which helped in the capacity estimation (throughput and threshold) of the then-current system.",metric:null},{text:"Integrated service mesh Istio within the service, to leverage traffic management capability and circuit breaking mechanism (outlier detection). Created fault injection pipelines to test the production cluster to increase confidence within the system. Also leveraged tenant-based rate limiting from the integrated service mesh.",metric:null}]},{company:"Gravity iLabs",location:"Bangalore, India",role:"Associate Software Developer",period:"July '20 – February '22",current:!1,color:"#FF745C",keywords:["Golang","C#","Java","Spring","Azure Kubernetes Cluster","Unit Testing"],achievements:[{text:"Built RuleEngine for the company’s core product StrategyDotZero, to serve business rule configurations for the product based on the different clients in .NET Core. Part of the team migrating the product into a microservice (.NET Core/Go) from its current monolithic architecture (.NET MVC).",metric:null},{text:"Worked with the team to refactor 3 core modules and rebuilt the codebase according to defined company guidelines, aimed towards easier code maintenance. Deployed the decoupled modules as a microservice in an Azure Kubernetes Cluster, migrating it from its existing monolithic model. mplemented unit testing in the CI pipeline for the decoupled modules.",metric:null}]},{company:"Mayadata Inc.",location:"Bangalore, India",role:"Software Engineer",period:"July '19 – July '20",current:!1,color:"#BF40BF",keywords:["ReactJS","Golang","Travis CI","GKE","Kubernetes"],achievements:[{text:"Developed and managed the product showcase website for CNCF Open-Source Sandbox Project 'Litmus', utilizing ReactJS for frontend and Golang for backend APIs.",metric:"137% open-source contributions MoM ↑ "},{text:"Implemented continuous integration in Travis and deployed the application on Google Kubernetes Engine (GKE).",metric:null}]}];function S1({exp:s,index:e}){const[n,r]=gn.useState(e===0);return F.jsxs("div",{className:"relative rounded-2xl overflow-hidden transition-all duration-300",style:{background:"rgba(255,255,255,0.03)",border:`1px solid ${n?s.color+"40":"rgba(255,255,255,0.07)"}`},children:[n&&F.jsx("div",{className:"h-0.5",style:{background:`linear-gradient(90deg, ${s.color}, transparent)`}}),F.jsxs("div",{className:"p-6",children:[F.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 cursor-pointer",onClick:()=>r(!n),children:[F.jsxs("div",{className:"flex items-start gap-4",children:[F.jsx("div",{className:"w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5",style:{background:`${s.color}15`,border:`1px solid ${s.color}30`},children:F.jsx("div",{className:"w-3 h-3 rounded-full",style:{background:s.color}})}),F.jsxs("div",{children:[F.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[F.jsx("h3",{style:{color:"#ffffff",fontSize:"1.05rem",fontWeight:600},children:s.company}),s.current&&F.jsx("span",{className:"px-2 py-0.5 rounded-full text-xs",style:{background:"rgba(0,212,255,0.12)",color:"#00d4ff",border:"1px solid rgba(0,212,255,0.25)"},children:"Current"})]}),F.jsx("div",{style:{color:s.color,fontSize:"0.85rem",fontWeight:500},children:s.role}),F.jsxs("div",{className:"flex items-center gap-2 mt-1 flex-wrap",style:{color:"rgba(255,255,255,0.4)",fontSize:"0.78rem"},children:[F.jsx("span",{children:s.location}),F.jsx("span",{children:"·"}),F.jsx("span",{children:s.period})]})]})]}),F.jsx("button",{className:"self-start sm:self-center p-1.5 rounded-lg transition-colors duration-200 flex-shrink-0",style:{color:"rgba(255,255,255,0.4)",background:"rgba(255,255,255,0.05)"},"aria-label":n?"Collapse":"Expand",children:n?F.jsx(U_,{size:16}):F.jsx($m,{size:16})})]}),n&&F.jsxs("div",{className:"mt-5",children:[F.jsx("ul",{className:"space-y-3 mb-5",children:s.achievements.map((o,c)=>F.jsxs("li",{className:"flex gap-3",children:[F.jsx("div",{className:"w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2",style:{background:s.color}}),F.jsxs("div",{children:[F.jsx("p",{style:{color:"rgba(255,255,255,0.65)",fontSize:"0.85rem",lineHeight:1.7},children:o.text}),o.metric&&F.jsx("span",{className:"inline-flex mt-1 px-2 py-0.5 rounded text-xs",style:{background:`${s.color}15`,color:s.color,border:`1px solid ${s.color}25`},children:o.metric})]})]},c))}),F.jsx("div",{className:"flex flex-wrap gap-2 pt-4",style:{borderTop:"1px solid rgba(255,255,255,0.06)"},children:s.keywords.map((o,c)=>F.jsx("span",{className:"px-2.5 py-1 rounded-md text-xs",style:{background:"rgba(255,255,255,0.05)",color:"rgba(255,255,255,0.45)",border:"1px solid rgba(255,255,255,0.08)"},children:o},c))})]})]})]})}function M1(){return F.jsx("section",{id:"experience",className:"py-20 md:py-28",style:{background:"linear-gradient(180deg, #07071a 0%, #06060f 100%)"},children:F.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[F.jsxs("div",{className:"text-center mb-16",children:[F.jsx("span",{className:"text-xs uppercase tracking-widest mb-3 block",style:{color:"#7c3aed"},children:"Career Journey"}),F.jsx("h2",{style:{fontSize:"clamp(1.8rem, 4vw, 2.8rem)",fontWeight:700,color:"#ffffff",letterSpacing:"-0.02em"},children:"Work Experience"}),F.jsx("div",{className:"mx-auto mt-4 rounded-full",style:{width:"60px",height:"3px",background:"linear-gradient(90deg, #7c3aed, #00d4ff)"}})]}),F.jsxs("div",{className:"relative",children:[F.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-px hidden lg:block ml-5",style:{background:"linear-gradient(180deg, #00d4ff20, #7c3aed20, transparent)"}}),F.jsx("div",{className:"space-y-5",children:y1.map((s,e)=>F.jsx(S1,{exp:s,index:e},e))})]}),F.jsx("div",{className:"mt-10 p-6 rounded-2xl",style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)"},children:F.jsxs("div",{className:"flex items-start gap-4",children:[F.jsx("div",{className:"w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0",style:{background:"rgba(16,185,129,0.1)",border:"1px solid rgba(16,185,129,0.25)"},children:F.jsx("span",{style:{fontSize:"1.1rem"},children:"🎓"})}),F.jsxs("div",{children:[F.jsx("h3",{style:{color:"#ffffff",fontWeight:600},children:"B.Tech – Computer Science & Engineering"}),F.jsx("div",{style:{color:"#10b981",fontSize:"0.85rem",fontWeight:500},children:"Kalinga Institute of Industrial Technology"}),F.jsx("div",{style:{color:"rgba(255,255,255,0.4)",fontSize:"0.78rem",marginTop:"0.25rem"},children:"Bhubaneswar, India · 2014 – 2018"})]})]})})]})})}const qm=[{title:"Certified Kubernetes Administrator",issuer:"The Linux Foundation",period:"Valid '21 – '24",badge:"cka.png",color:"#326CE5",validateUrl:"https://www.credly.com/badges/65b33e5c-851e-4db6-aba7-8f96cbe837b9/public_url",description:"Earners of this designation demonstrated the skills, knowledge and competencies to perform the responsibilities of a Kubernetes Administrator. ",skills:["Cluster Administration","Networking","Storage","Security","Workloads"]}],E1=[{title:"Abstractive Text Summarization and Unsupervised Text Classifier",venue:"Springer ICMLIP '19",venueColor:"#f59e0b",description:"Research paper published at the International Conference on Machine Learning and Intelligent Processing (ICMLIP 2019), Springer. Explores deep learning approaches to abstractive summarization and unsupervised classification of natural language text.",tags:["NLP","Deep Learning","Text Summarization","Unsupervised Learning"],icon:"springer-logo.png"}];function T1(){return F.jsx("section",{id:"certifications",className:"py-20 md:py-28",style:{background:"#07071a"},children:F.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8",children:[F.jsxs("div",{className:"text-center mb-16",children:[F.jsx("span",{className:"text-xs uppercase tracking-widest mb-3 block",style:{color:"#f59e0b"},children:"Credentials & Research"}),F.jsx("h2",{style:{fontSize:"clamp(1.8rem, 4vw, 2.8rem)",fontWeight:700,color:"#ffffff",letterSpacing:"-0.02em"},children:"Certifications & Publications"}),F.jsx("div",{className:"mx-auto mt-4 rounded-full",style:{width:"60px",height:"3px",background:"linear-gradient(90deg, #f59e0b, #ec4899)"}})]}),F.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch",children:[F.jsxs("div",{className:"rounded-2xl p-6 flex flex-col h-full transition-all duration-300 hover:scale-[1.01]",style:{background:"rgba(255,255,255,0.03)",border:`1px solid ${qm[0].color}30`,minHeight:"430px"},children:[F.jsxs("div",{className:"flex items-center gap-2 mb-6",children:[F.jsx(P_,{size:18,style:{color:"#f59e0b"}}),F.jsx("h3",{className:"uppercase tracking-wider text-xs",style:{color:"#f59e0b"},children:"Certifications"})]}),F.jsx("div",{className:"flex-1",children:qm.map((s,e)=>F.jsxs("div",{className:"flex flex-col h-full",children:[F.jsx("div",{className:"h-0.5 rounded-full mb-5",style:{background:`linear-gradient(90deg, ${s.color}, transparent)`}}),F.jsxs("div",{className:"flex items-start gap-4",children:[F.jsx("img",{src:`/find.aditya/${s.badge}`,alt:`${s.title} badge`,className:"w-12 h-12 rounded-xl object-contain",style:{border:`1px solid ${s.color}30`}}),F.jsxs("div",{className:"flex-1",children:[F.jsx("h4",{style:{color:"#ffffff",fontSize:"0.95rem",fontWeight:600,lineHeight:1.4},children:s.title}),F.jsx("div",{className:"mt-1",style:{color:s.color,fontSize:"0.82rem",fontWeight:500},children:s.issuer}),F.jsx("div",{className:"mt-0.5",style:{color:"rgba(255,255,255,0.4)",fontSize:"0.78rem"},children:s.period})]})]}),F.jsx("p",{className:"mt-4",style:{color:"rgba(255,255,255,0.55)",fontSize:"0.82rem",lineHeight:1.7},children:s.description}),F.jsxs("a",{href:s.validateUrl,target:"_blank",rel:"noopener noreferrer",className:"mt-4 inline-flex items-center gap-1.5 text-xs transition-opacity duration-200 hover:opacity-80",style:{color:s.color},children:[F.jsx(Km,{size:12})," Validate Certificate"]}),F.jsx("div",{className:"mt-auto flex flex-wrap gap-2",children:s.skills.map((n,r)=>F.jsx("span",{className:"px-2 py-1 rounded-md text-xs",style:{background:`${s.color}10`,color:s.color,border:`1px solid ${s.color}25`},children:n},r))})]},e))})]}),F.jsxs("div",{className:"rounded-2xl p-6 flex flex-col h-full transition-all duration-300 hover:scale-[1.01]",style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(236,72,153,0.2)",minHeight:"430px"},children:[F.jsxs("div",{className:"flex items-center gap-2 mb-6",children:[F.jsx(D_,{size:18,style:{color:"#ec4899"}}),F.jsx("h3",{className:"uppercase tracking-wider text-xs",style:{color:"#ec4899"},children:"Publications"})]}),F.jsx("div",{className:"flex-1",children:E1.map((s,e)=>F.jsxs("div",{className:"flex flex-col h-full",children:[F.jsx("div",{className:"h-0.5 rounded-full mb-5",style:{background:"linear-gradient(90deg, #ec4899, transparent)"}}),F.jsxs("div",{className:"flex items-start gap-4",children:[F.jsx("img",{src:`/find.aditya/${s.icon}`,alt:`${s.title} icon`,className:"w-12 h-12 rounded-xl object-contain",style:{border:`1px solid ${s.venueColor}30`}}),F.jsxs("div",{className:"flex-1",children:[F.jsx("h4",{style:{color:"#ffffff",fontSize:"0.95rem",fontWeight:600,lineHeight:1.4},children:s.title}),F.jsx("span",{className:"inline-flex mt-2 px-2 py-0.5 rounded text-xs",style:{background:`${s.venueColor}15`,color:s.venueColor,border:`1px solid ${s.venueColor}30`},children:s.venue})]})]}),F.jsx("p",{className:"mt-4",style:{color:"rgba(255,255,255,0.55)",fontSize:"0.82rem",lineHeight:1.7},children:s.description}),F.jsx("div",{className:"mt-auto flex flex-wrap gap-2",children:s.tags.map((n,r)=>F.jsx("span",{className:"px-2 py-1 rounded-md text-xs",style:{background:"rgba(236,72,153,0.08)",color:"#ec4899",border:"1px solid rgba(236,72,153,0.2)"},children:n},r))})]},e))})]})]})]})})}const w1=[{name:"Amitesh Srivastava",title:"Senior Software Engineer",company:"CBTS",relation:"Aditya was senior to Amitesh but didn’t manage Amitesh directly at Furlenco",avatar:"AS",color:"#00d4ff",text:`I had the pleasure of working with Aditya at Furlenco. His ability to tackle complex problems with innovative solutions was truly impressive. He is always eager to learn about new technologies and find ways to apply them to our work. 
He also played a crucial role in fostering a positive and collaborative team culture. His enthusiasm and dedication inspired everyone around them, and I believe his contributions significantly increased our team’s overall productivity.`},{name:"Akil KJ Bhat",title:"Senior Product Manager",company:"Furlenco",relation:"Akil worked with Aditya on the same team at Furlenco",avatar:"AB",color:"#7c3aed",text:`Aditya's approach to problem-solving is exemplary, consistently demonstrating a sound understanding of intricate systems. Aditya possesses the unique ability to break down complex issues and present them with clarity, fostering a collaborative environment that encourages open discussion and innovative solutions. 
Working with Aditya was a continuous learning experience for me as a Product Manager. His collaborative nature and insightful contributions made our projects truly two-way endeavours. It was never just about transactions; it was about mutual growth and achieving project success together. 
Aditya Kumar's expertise, collaborative spirit and commitment to excellence make him an invaluable asset to any team or project.`}];function A1(){return F.jsx("section",{id:"recommendations",className:"py-20 md:py-28",style:{background:"linear-gradient(180deg, #06060f 0%, #07071a 100%)"},children:F.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",children:[F.jsxs("div",{className:"text-center mb-16",children:[F.jsx("span",{className:"text-xs uppercase tracking-widest mb-3 block",style:{color:"#0077b5"},children:"What colleagues say"}),F.jsxs("div",{className:"flex items-center justify-center gap-3 mb-2",children:[F.jsx(Ol,{size:20,style:{color:"#0077b5"}}),F.jsx("h2",{style:{fontSize:"clamp(1.8rem, 4vw, 2.8rem)",fontWeight:700,color:"#ffffff",letterSpacing:"-0.02em"},children:"LinkedIn Recommendations"})]}),F.jsx("div",{className:"mx-auto mt-4 rounded-full",style:{width:"60px",height:"3px",background:"linear-gradient(90deg, #0077b5, #00d4ff)"}}),F.jsx("p",{className:"mt-4 text-sm",style:{color:"rgba(255,255,255,0.35)"},children:"Representative recommendations from colleagues and managers"})]}),F.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:w1.map((s,e)=>F.jsxs("div",{className:"rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:scale-[1.01]",style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)"},children:[F.jsx(q_,{size:24,style:{color:s.color,opacity:.5},className:"flex-shrink-0"}),F.jsxs("p",{className:"flex-1",style:{color:"rgba(255,255,255,0.65)",fontSize:"0.8rem",lineHeight:1.8,fontStyle:"italic"},children:['"',s.text.split(`
`).map((n,r)=>F.jsxs("span",{children:[n,r<s.text.split(`
`).length-1&&F.jsx("br",{})]},r)),'"']}),F.jsxs("div",{className:"flex items-center gap-3 pt-4",style:{borderTop:"1px solid rgba(255,255,255,0.06)"},children:[F.jsx("div",{className:"w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold",style:{background:`${s.color}20`,border:`2px solid ${s.color}40`,color:s.color},children:s.avatar}),F.jsxs("div",{children:[F.jsx("div",{style:{color:"#ffffff",fontSize:"0.88rem",fontWeight:600},children:s.name}),F.jsx("div",{style:{color:s.color,fontSize:"0.75rem"},children:s.relation}),F.jsxs("div",{style:{color:"rgba(255,255,255,0.3)",fontSize:"0.72rem"},children:[s.title," · ",s.company]})]})]})]},e))}),F.jsx("div",{className:"text-center mt-10",children:F.jsxs("a",{href:"https://www.linkedin.com/in/aditya109/",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105",style:{background:"rgba(0,119,181,0.1)",color:"#0077b5",border:"1px solid rgba(0,119,181,0.3)"},children:[F.jsx(Ol,{size:16}),"View all recommendations on LinkedIn"]})})]})})}const b1=[{icon:F.jsx(Qm,{size:18}),label:"Email",value:"kumaraditya1096@gmail.com",href:"mailto:kumaraditya1096@gmail.com",color:"#00d4ff"},{icon:F.jsx(eg,{size:18}),label:"Phone",value:"+91 93482 86941",href:"tel:+919348286941",color:"#7c3aed"},{icon:F.jsx(Jm,{size:18}),label:"Location",value:"Bangalore, Karnataka, India",href:"https://maps.google.com/?q=Bangalore,India",color:"#10b981"},{icon:F.jsx(Ol,{size:18}),label:"LinkedIn",value:"linkedin.com/in/aditya109",href:"https://www.linkedin.com/in/aditya109/",color:"#0077b5"},{icon:F.jsx(Zm,{size:18}),label:"GitHub",value:"github.com/aditya109",href:"https://github.com/aditya109",color:"#a5b4fc"},{icon:F.jsx(Km,{size:18}),label:"Website",value:"aditya109.github.io/find.aditya",href:"https://aditya109.github.io/find.aditya/",color:"#f59e0b"}];function C1(){const[s,e]=gn.useState({name:"",email:"",subject:"",message:""}),[n,r]=gn.useState(!1),[o,c]=gn.useState(!1),u=p=>{e({...s,[p.target.name]:p.target.value})},d=p=>{p.preventDefault(),c(!0),setTimeout(()=>{c(!1),r(!0),e({name:"",email:"",subject:"",message:""})},1200)};return F.jsxs("section",{id:"contact",className:"py-20 md:py-28",style:{background:"linear-gradient(180deg, #07071a 0%, #06060f 100%)"},children:[F.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8",children:[F.jsxs("div",{className:"text-center mb-16",children:[F.jsx("span",{className:"text-xs uppercase tracking-widest mb-3 block",style:{color:"#10b981"},children:"Get in Touch"}),F.jsx("h2",{style:{fontSize:"clamp(1.8rem, 4vw, 2.8rem)",fontWeight:700,color:"#ffffff",letterSpacing:"-0.02em"},children:"Contact Me"}),F.jsx("div",{className:"mx-auto mt-4 rounded-full",style:{width:"60px",height:"3px",background:"linear-gradient(90deg, #10b981, #00d4ff)"}}),F.jsx("p",{className:"mt-4",style:{color:"rgba(255,255,255,0.45)",fontSize:"0.9rem",maxWidth:"420px",margin:"1rem auto 0"},children:"Open to new opportunities, collaborations, or just a chat about distributed systems and Go."})]}),F.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-5 gap-8",children:[F.jsx("div",{className:"lg:col-span-2 space-y-3",children:b1.map((p,m)=>F.jsxs("a",{href:p.href,target:p.href.startsWith("http")?"_blank":void 0,rel:"noopener noreferrer",className:"flex items-center gap-3 p-4 rounded-xl group transition-all duration-200 hover:scale-[1.02]",style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)",textDecoration:"none"},children:[F.jsx("div",{className:"w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200",style:{background:`${p.color}15`,border:`1px solid ${p.color}25`,color:p.color},children:p.icon}),F.jsxs("div",{className:"min-w-0",children:[F.jsx("div",{className:"text-xs",style:{color:"rgba(255,255,255,0.35)"},children:p.label}),F.jsx("div",{className:"truncate text-sm",style:{color:"rgba(255,255,255,0.7)"},children:p.value})]})]},m))}),F.jsx("div",{className:"lg:col-span-3",children:F.jsx("div",{className:"rounded-2xl p-6 md:p-8",style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)"},children:n?F.jsxs("div",{className:"flex flex-col items-center justify-center py-12 gap-4",children:[F.jsx(O_,{size:48,style:{color:"#10b981"}}),F.jsx("h3",{style:{color:"#ffffff",fontSize:"1.1rem",fontWeight:600},children:"Message Sent!"}),F.jsx("p",{style:{color:"rgba(255,255,255,0.5)",fontSize:"0.9rem",textAlign:"center"},children:"Thanks for reaching out. I'll get back to you as soon as possible."}),F.jsx("button",{onClick:()=>r(!1),className:"px-5 py-2 rounded-lg text-sm transition-all duration-200 hover:scale-105",style:{background:"rgba(0,212,255,0.1)",color:"#00d4ff",border:"1px solid rgba(0,212,255,0.25)"},children:"Send another"})]}):F.jsxs("form",{onSubmit:d,className:"space-y-4",children:[F.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[F.jsxs("div",{children:[F.jsx("label",{className:"block text-xs mb-1.5",style:{color:"rgba(255,255,255,0.5)"},children:"Your Name"}),F.jsx("input",{type:"text",name:"name",value:s.name,onChange:u,required:!0,placeholder:"John Doe",className:"w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200",style:{background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",color:"#ffffff"},onFocus:p=>p.target.style.border="1px solid rgba(0,212,255,0.4)",onBlur:p=>p.target.style.border="1px solid rgba(255,255,255,0.1)"})]}),F.jsxs("div",{children:[F.jsx("label",{className:"block text-xs mb-1.5",style:{color:"rgba(255,255,255,0.5)"},children:"Email Address"}),F.jsx("input",{type:"email",name:"email",value:s.email,onChange:u,required:!0,placeholder:"john@example.com",className:"w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200",style:{background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",color:"#ffffff"},onFocus:p=>p.target.style.border="1px solid rgba(0,212,255,0.4)",onBlur:p=>p.target.style.border="1px solid rgba(255,255,255,0.1)"})]})]}),F.jsxs("div",{children:[F.jsx("label",{className:"block text-xs mb-1.5",style:{color:"rgba(255,255,255,0.5)"},children:"Subject"}),F.jsx("input",{type:"text",name:"subject",value:s.subject,onChange:u,required:!0,placeholder:"Job opportunity / Collaboration / Hello",className:"w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200",style:{background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",color:"#ffffff"},onFocus:p=>p.target.style.border="1px solid rgba(0,212,255,0.4)",onBlur:p=>p.target.style.border="1px solid rgba(255,255,255,0.1)"})]}),F.jsxs("div",{children:[F.jsx("label",{className:"block text-xs mb-1.5",style:{color:"rgba(255,255,255,0.5)"},children:"Message"}),F.jsx("textarea",{name:"message",value:s.message,onChange:u,required:!0,rows:5,placeholder:"Tell me what you have in mind...",className:"w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none",style:{background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",color:"#ffffff"},onFocus:p=>p.target.style.border="1px solid rgba(0,212,255,0.4)",onBlur:p=>p.target.style.border="1px solid rgba(255,255,255,0.1)"})]}),F.jsx("button",{type:"submit",disabled:o,className:"w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed",style:{background:"linear-gradient(135deg, #00d4ff, #7c3aed)",color:"#ffffff",boxShadow:"0 4px 20px rgba(0,212,255,0.25)"},children:o?F.jsx("span",{className:"w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin"}):F.jsxs(F.Fragment,{children:[F.jsx($_,{size:15})," Send Message"]})})]})})})]})]}),F.jsx("div",{className:"mt-20 text-center",style:{borderTop:"1px solid rgba(255,255,255,0.05)",paddingTop:"2rem"},children:F.jsxs("p",{style:{color:"rgba(255,255,255,0.25)",fontSize:"0.8rem"},children:["© ",new Date().getFullYear()," Aditya Kumar · Built with React & Three.js"]})})]})}function R1(){return F.jsxs("div",{className:"min-h-screen",style:{background:"#06060f",color:"#ffffff",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},children:[F.jsx(ev,{}),F.jsxs("main",{children:[F.jsx(_1,{}),F.jsx(x1,{}),F.jsx(M1,{}),F.jsx(T1,{}),F.jsx(A1,{}),F.jsx(C1,{})]})]})}T_.createRoot(document.getElementById("root")).render(F.jsx(R1,{}));

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/*! Amaze UI v2.7.2 | by Amaze UI Team | (c) 2016 AllMobilize, Inc. | Licensed under MIT | 2016-08-17T16:17:24+0800 */ 
!function(t,e){ true?module.exports=e(__webpack_require__(3)):"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?exports.AMUI=e(require("jquery")):t.AMUI=e(t.jQuery)}(this,function(t){return function(t){function e(n){if(i[n])return i[n].exports;var s=i[n]={exports:{},id:n,loaded:!1};return t[n].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){"use strict";var n=i(1),s=i(2);i(3),i(4),i(5),i(6),i(7),i(8),i(9),i(10),i(11),i(14),i(15),i(16),i(17),i(18),i(19),i(20),i(21),i(22),i(24),i(25),i(23),i(27),i(28),i(29),i(30),i(31),i(32),i(33),i(26),i(34),i(35),i(36),i(37),i(38),i(39),i(40),i(41),i(42),i(43),i(44),i(45),i(46),i(47),i(48),i(49),i(50),i(51),i(52),i(53),i(54),t.exports=n.AMUI=s},function(e,i){e.exports=t},function(t,e,i){"use strict";var n=i(1);if("undefined"==typeof n)throw new Error("Amaze UI 2.x requires jQuery :-(\n\u7231\u4e0a\u4e00\u5339\u91ce\u9a6c\uff0c\u53ef\u4f60\u7684\u5bb6\u91cc\u6ca1\u6709\u8349\u539f\u2026");var s=n.AMUI||{},o=n(window),a=window.document,r=n("html");s.VERSION="2.7.2",s.support={},s.support.transition=function(){var t=function(){var t=a.body||a.documentElement,e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return e[i]}();return t&&{end:t}}(),s.support.animation=function(){var t=function(){var t=a.body||a.documentElement,e={WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(var i in e)if(void 0!==t.style[i])return e[i]}();return t&&{end:t}}(),s.support.touch="ontouchstart"in window&&navigator.userAgent.toLowerCase().match(/mobile|tablet/)||window.DocumentTouch&&document instanceof window.DocumentTouch||window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>0||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>0||!1,s.support.mutationobserver=window.MutationObserver||window.WebKitMutationObserver||null,s.support.formValidation="function"==typeof document.createElement("form").checkValidity,s.utils={},s.utils.debounce=function(t,e,i){var n;return function(){var s=this,o=arguments,a=function(){n=null,i||t.apply(s,o)},r=i&&!n;clearTimeout(n),n=setTimeout(a,e),r&&t.apply(s,o)}},s.utils.isInView=function(t,e){var i=n(t),s=!(!i.width()&&!i.height())&&"none"!==i.css("display");if(!s)return!1;var a=o.scrollLeft(),r=o.scrollTop(),l=i.offset(),c=l.left,u=l.top;return e=n.extend({topOffset:0,leftOffset:0},e),u+i.height()>=r&&u-e.topOffset<=r+o.height()&&c+i.width()>=a&&c-e.leftOffset<=a+o.width()},s.utils.parseOptions=s.utils.options=function(t){if(n.isPlainObject(t))return t;var e=t?t.indexOf("{"):-1,i={};if(e!=-1)try{i=new Function("","var json = "+t.substr(e)+"; return JSON.parse(JSON.stringify(json));")()}catch(s){}return i},s.utils.generateGUID=function(t){var e=t+"-"||"am-";do e+=Math.random().toString(36).substring(2,7);while(document.getElementById(e));return e},s.utils.getAbsoluteUrl=function(){var t;return function(e){return t||(t=document.createElement("a")),t.href=e,t.href}}(),s.plugin=function(t,e,i){var o=n.fn[t];i=i||{},n.fn[t]=function(o){var a,r=Array.prototype.slice.call(arguments,0),l=r.slice(1),c=this.each(function(){var c=n(this),u="amui."+t,h=i.dataOptions||"data-am-"+t,d=c.data(u),p=n.extend({},s.utils.parseOptions(c.attr(h)),"object"==typeof o&&o);(d||"destroy"!==o)&&(d||c.data(u,d=new e(this,p)),i.methodCall?i.methodCall.call(c,r,d):(i.before&&i.before.call(c,r,d),"string"==typeof o&&(a="function"==typeof d[o]?d[o].apply(d,l):d[o]),i.after&&i.after.call(c,r,d)))});return void 0===a?c:a},n.fn[t].Constructor=e,n.fn[t].noConflict=function(){return n.fn[t]=o,this},s[t]=e},n.fn.emulateTransitionEnd=function(t){var e=!1,i=this;n(this).one(s.support.transition.end,function(){e=!0});var o=function(){e||n(i).trigger(s.support.transition.end),i.transitionEndTimmer=void 0};return this.transitionEndTimmer=setTimeout(o,t),this},n.fn.redraw=function(){return this.each(function(){this.offsetHeight})},n.fn.transitionEnd=function(t){function e(s){t.call(this,s),i&&n.off(i,e)}var i=s.support.transition.end,n=this;return t&&i&&n.on(i,e),this},n.fn.removeClassRegEx=function(){return this.each(function(t){var e=n(this).attr("class");if(!e||!t)return!1;var i=[];e=e.split(" ");for(var s=0,o=e.length;s<o;s++)e[s].match(t)||i.push(e[s]);n(this).attr("class",i.join(" "))})},n.fn.alterClass=function(t,e){var i=this;if(t.indexOf("*")===-1)return i.removeClass(t),e?i.addClass(e):i;var s=new RegExp("\\s"+t.replace(/\*/g,"[A-Za-z0-9-_]+").split(" ").join("\\s|\\s")+"\\s","g");return i.each(function(t,e){for(var i=" "+e.className+" ";s.test(i);)i=i.replace(s," ");e.className=n.trim(i)}),e?i.addClass(e):i},s.utils.rAF=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)}}(),s.utils.cancelAF=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||function(t){window.clearTimeout(t)}}(),s.utils.measureScrollbar=function(){if(document.body.clientWidth>=window.innerWidth)return 0;var t=n('<div style="width: 100px;height: 100px;overflow: scroll;position: absolute;top: -9999px;"></div>');n(document.body).append(t);var e=t[0].offsetWidth-t[0].clientWidth;return t.remove(),e},s.utils.imageLoader=function(t,e){function i(){e(t[0])}function n(){if(this.one("load",i),/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var t=this.attr("src"),e=t.match(/\?/)?"&":"?";e+="random="+(new Date).getTime(),this.attr("src",t+e)}}return t.attr("src")?void(t[0].complete||4===t[0].readyState?i():n.call(t)):void i()},s.template=function(t,e){var i=s.template;return i.cache[t]||(i.cache[t]=function(){var e=t,n=/^[\w\-]+$/.test(t)?i.get(t):(e="template(string)",t),s=1,o=("try { "+(i.variable?"var "+i.variable+" = this.stash;":"with (this.stash) { ")+"this.ret += '"+n.replace(/<%/g,"\x11").replace(/%>/g,"\x13").replace(/'(?![^\x11\x13]+?\x13)/g,"\\x27").replace(/^\s*|\s*$/g,"").replace(/\n/g,function(){return"';\nthis.line = "+ ++s+"; this.ret += '\\n"}).replace(/\x11-(.+?)\x13/g,"' + ($1) + '").replace(/\x11=(.+?)\x13/g,"' + this.escapeHTML($1) + '").replace(/\x11(.+?)\x13/g,"'; $1; this.ret += '")+"'; "+(i.variable?"":"}")+"return this.ret;} catch (e) { throw 'TemplateError: ' + e + ' (on "+e+"' + ' line ' + this.line + ')'; } //@ sourceURL="+e+"\n").replace(/this\.ret \+= '';/g,""),a=new Function(o),r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#x22;","'":"&#x27;"},l=function(t){return(""+t).replace(/[&<>\'\"]/g,function(t){return r[t]})};return function(t){return a.call(i.context={escapeHTML:l,line:1,ret:"",stash:t})}}()),e?i.cache[t](e):i.cache[t]},s.template.cache={},s.template.get=function(t){if(t){var e=document.getElementById(t);return e&&e.innerHTML||""}},s.DOMWatchers=[],s.DOMReady=!1,s.ready=function(t){s.DOMWatchers.push(t),s.DOMReady&&t(document)},s.DOMObserve=function(t,e,i){var o=s.support.mutationobserver;o&&(e=n.isPlainObject(e)?e:{childList:!0,subtree:!0},i="function"==typeof i&&i||function(){},n(t).each(function(){var t=this,a=n(t);if(!a.data("am.observer"))try{var r=new o(s.utils.debounce(function(e,n){i.call(t,e,n),a.trigger("changed.dom.amui")},50));r.observe(t,e),a.data("am.observer",r)}catch(l){}}))},n.fn.DOMObserve=function(t,e){return this.each(function(){s.DOMObserve(this,t,e)})},s.support.touch&&r.addClass("am-touch"),n(document).on("changed.dom.amui",function(t){var e=t.target;n.each(s.DOMWatchers,function(t,i){i(e)})}),n(function(){var t=n(document.body);s.DOMReady=!0,n.each(s.DOMWatchers,function(t,e){e(document)}),s.DOMObserve("[data-am-observe]"),r.removeClass("no-js").addClass("js"),s.support.animation&&r.addClass("cssanimations"),window.navigator.standalone&&r.addClass("am-standalone"),n(".am-topbar-fixed-top").length&&t.addClass("am-with-topbar-fixed-top"),n(".am-topbar-fixed-bottom").length&&t.addClass("am-with-topbar-fixed-bottom");var e=n(".am-layout");e.find('[class*="md-block-grid"]').alterClass("md-block-grid-*"),e.find('[class*="lg-block-grid"]').alterClass("lg-block-grid"),n("[data-am-widget]").each(function(){var t=n(this);0===t.parents(".am-layout").length&&t.addClass("am-no-layout")})}),t.exports=s},function(t,e,i){"use strict";function n(t,e,i){return setTimeout(l(t,i),e)}function s(t,e,i){return!!Array.isArray(t)&&(o(t,i[e],i),!0)}function o(t,e,i){var n;if(t)if(t.forEach)t.forEach(e,i);else if(void 0!==t.length)for(n=0;n<t.length;)e.call(i,t[n],n,t),n++;else for(n in t)t.hasOwnProperty(n)&&e.call(i,t[n],n,t)}function a(t,e,i){var n="DEPRECATED METHOD: "+e+"\n"+i+" AT \n";return function(){var e=new Error("get-stack-trace"),i=e&&e.stack?e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",s=window.console&&(window.console.warn||window.console.log);return s&&s.call(window.console,n,i),t.apply(this,arguments)}}function r(t,e,i){var n,s=e.prototype;n=t.prototype=Object.create(s),n.constructor=t,n._super=s,i&&ut(n,i)}function l(t,e){return function(){return t.apply(e,arguments)}}function c(t,e){return typeof t==ft?t.apply(e?e[0]||void 0:void 0,e):t}function u(t,e){return void 0===t?e:t}function h(t,e,i){o(f(e),function(e){t.addEventListener(e,i,!1)})}function d(t,e,i){o(f(e),function(e){t.removeEventListener(e,i,!1)})}function p(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function m(t,e){return t.indexOf(e)>-1}function f(t){return t.trim().split(/\s+/g)}function v(t,e,i){if(t.indexOf&&!i)return t.indexOf(e);for(var n=0;n<t.length;){if(i&&t[n][i]==e||!i&&t[n]===e)return n;n++}return-1}function g(t){return Array.prototype.slice.call(t,0)}function y(t,e,i){for(var n=[],s=[],o=0;o<t.length;){var a=e?t[o][e]:t[o];v(s,a)<0&&n.push(t[o]),s[o]=a,o++}return i&&(n=e?n.sort(function(t,i){return t[e]>i[e]}):n.sort()),n}function w(t,e){for(var i,n,s=e[0].toUpperCase()+e.slice(1),o=0;o<pt.length;){if(i=pt[o],n=i?i+s:e,n in t)return n;o++}}function b(){return Tt++}function T(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||window}function x(t,e){var i=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){c(t.options.enable,[t])&&i.handler(e)},this.init()}function C(t){var e,i=t.options.inputClass;return new(e=i?i:Et?_:St?q:Ct?H:L)(t,E)}function E(t,e,i){var n=i.pointers.length,s=i.changedPointers.length,o=e&Mt&&n-s===0,a=e&(Nt|It)&&n-s===0;i.isFirst=!!o,i.isFinal=!!a,o&&(t.session={}),i.eventType=e,S(t,i),t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}function S(t,e){var i=t.session,n=e.pointers,s=n.length;i.firstInput||(i.firstInput=F(e)),s>1&&!i.firstMultiple?i.firstMultiple=F(e):1===s&&(i.firstMultiple=!1);var o=i.firstInput,a=i.firstMultiple,r=a?a.center:o.center,l=e.center=A(n);e.timeStamp=yt(),e.deltaTime=e.timeStamp-o.timeStamp,e.angle=N(r,l),e.distance=P(r,l),k(i,e),e.offsetDirection=M(e.deltaX,e.deltaY);var c=$(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=c.x,e.overallVelocityY=c.y,e.overallVelocity=gt(c.x)>gt(c.y)?c.x:c.y,e.scale=a?O(a.pointers,n):1,e.rotation=a?I(a.pointers,n):0,e.maxPointers=i.prevInput?e.pointers.length>i.prevInput.maxPointers?e.pointers.length:i.prevInput.maxPointers:e.pointers.length,D(i,e);var u=t.element;p(e.srcEvent.target,u)&&(u=e.srcEvent.target),e.target=u}function k(t,e){var i=e.center,n=t.offsetDelta||{},s=t.prevDelta||{},o=t.prevInput||{};e.eventType!==Mt&&o.eventType!==Nt||(s=t.prevDelta={x:o.deltaX||0,y:o.deltaY||0},n=t.offsetDelta={x:i.x,y:i.y}),e.deltaX=s.x+(i.x-n.x),e.deltaY=s.y+(i.y-n.y)}function D(t,e){var i,n,s,o,a=t.lastInterval||e,r=e.timeStamp-a.timeStamp;if(e.eventType!=It&&(r>$t||void 0===a.velocity)){var l=e.deltaX-a.deltaX,c=e.deltaY-a.deltaY,u=$(r,l,c);n=u.x,s=u.y,i=gt(u.x)>gt(u.y)?u.x:u.y,o=M(l,c),t.lastInterval=e}else i=a.velocity,n=a.velocityX,s=a.velocityY,o=a.direction;e.velocity=i,e.velocityX=n,e.velocityY=s,e.direction=o}function F(t){for(var e=[],i=0;i<t.pointers.length;)e[i]={clientX:vt(t.pointers[i].clientX),clientY:vt(t.pointers[i].clientY)},i++;return{timeStamp:yt(),pointers:e,center:A(e),deltaX:t.deltaX,deltaY:t.deltaY}}function A(t){var e=t.length;if(1===e)return{x:vt(t[0].clientX),y:vt(t[0].clientY)};for(var i=0,n=0,s=0;s<e;)i+=t[s].clientX,n+=t[s].clientY,s++;return{x:vt(i/e),y:vt(n/e)}}function $(t,e,i){return{x:e/t||0,y:i/t||0}}function M(t,e){return t===e?Ot:gt(t)>=gt(e)?t<0?Lt:_t:e<0?zt:Rt}function P(t,e,i){i||(i=Bt);var n=e[i[0]]-t[i[0]],s=e[i[1]]-t[i[1]];return Math.sqrt(n*n+s*s)}function N(t,e,i){i||(i=Bt);var n=e[i[0]]-t[i[0]],s=e[i[1]]-t[i[1]];return 180*Math.atan2(s,n)/Math.PI}function I(t,e){return N(e[1],e[0],Ut)+N(t[1],t[0],Ut)}function O(t,e){return P(e[0],e[1],Ut)/P(t[0],t[1],Ut)}function L(){this.evEl=Xt,this.evWin=Yt,this.pressed=!1,x.apply(this,arguments)}function _(){this.evEl=Gt,this.evWin=Kt,x.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function z(){this.evTarget=Qt,this.evWin=te,this.started=!1,x.apply(this,arguments)}function R(t,e){var i=g(t.touches),n=g(t.changedTouches);return e&(Nt|It)&&(i=y(i.concat(n),"identifier",!0)),[i,n]}function q(){this.evTarget=ie,this.targetIds={},x.apply(this,arguments)}function W(t,e){var i=g(t.touches),n=this.targetIds;if(e&(Mt|Pt)&&1===i.length)return n[i[0].identifier]=!0,[i,i];var s,o,a=g(t.changedTouches),r=[],l=this.target;if(o=i.filter(function(t){return p(t.target,l)}),e===Mt)for(s=0;s<o.length;)n[o[s].identifier]=!0,s++;for(s=0;s<a.length;)n[a[s].identifier]&&r.push(a[s]),e&(Nt|It)&&delete n[a[s].identifier],s++;return r.length?[y(o.concat(r),"identifier",!0),r]:void 0}function H(){x.apply(this,arguments);var t=l(this.handler,this);this.touch=new q(this.manager,t),this.mouse=new L(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function B(t,e){t&Mt?(this.primaryTouch=e.changedPointers[0].identifier,U.call(this,e)):t&(Nt|It)&&U.call(this,e)}function U(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var i={x:e.clientX,y:e.clientY};this.lastTouches.push(i);var n=this.lastTouches,s=function(){var t=n.indexOf(i);t>-1&&n.splice(t,1)};setTimeout(s,ne)}}function V(t){for(var e=t.srcEvent.clientX,i=t.srcEvent.clientY,n=0;n<this.lastTouches.length;n++){var s=this.lastTouches[n],o=Math.abs(e-s.x),a=Math.abs(i-s.y);if(o<=se&&a<=se)return!0}return!1}function X(t,e){this.manager=t,this.set(e)}function Y(t){if(m(t,ue))return ue;var e=m(t,he),i=m(t,de);return e&&i?ue:e||i?e?he:de:m(t,ce)?ce:le}function j(){if(!ae)return!1;var t={},e=window.CSS&&window.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(i){t[i]=!e||window.CSS.supports("touch-action",i)}),t}function Z(t){this.options=ut({},this.defaults,t||{}),this.id=b(),this.manager=null,this.options.enable=u(this.options.enable,!0),this.state=me,this.simultaneous={},this.requireFail=[]}function G(t){return t&we?"cancel":t&ge?"end":t&ve?"move":t&fe?"start":""}function K(t){return t==Rt?"down":t==zt?"up":t==Lt?"left":t==_t?"right":""}function J(t,e){var i=e.manager;return i?i.get(t):t}function Q(){Z.apply(this,arguments)}function tt(){Q.apply(this,arguments),this.pX=null,this.pY=null}function et(){Q.apply(this,arguments)}function it(){Z.apply(this,arguments),this._timer=null,this._input=null}function nt(){Q.apply(this,arguments)}function st(){Q.apply(this,arguments)}function ot(){Z.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function at(t,e){return e=e||{},e.recognizers=u(e.recognizers,at.defaults.preset),new rt(t,e)}function rt(t,e){this.options=ut({},at.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=C(this),this.touchAction=new X(this,this.options.touchAction),lt(this,!0),o(this.options.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}function lt(t,e){var i=t.element;if(i.style){var n;o(t.options.cssProps,function(s,o){n=w(i.style,o),e?(t.oldCssProps[n]=i.style[n],i.style[n]=s):i.style[n]=t.oldCssProps[n]||""}),e||(t.oldCssProps={})}}function ct(t,e){var i=document.createEvent("Event");i.initEvent(t,!0,!0),i.gesture=e,e.target.dispatchEvent(i)}var ut,ht=i(1),dt=i(2),pt=["","webkit","Moz","MS","ms","o"],mt=document.createElement("div"),ft="function",vt=Math.round,gt=Math.abs,yt=Date.now;ut="function"!=typeof Object.assign?function(t){if(void 0===t||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),i=1;i<arguments.length;i++){var n=arguments[i];if(void 0!==n&&null!==n)for(var s in n)n.hasOwnProperty(s)&&(e[s]=n[s])}return e}:Object.assign;var wt=a(function(t,e,i){for(var n=Object.keys(e),s=0;s<n.length;)(!i||i&&void 0===t[n[s]])&&(t[n[s]]=e[n[s]]),s++;return t},"extend","Use `assign`."),bt=a(function(t,e){return wt(t,e,!0)},"merge","Use `assign`."),Tt=1,xt=/mobile|tablet|ip(ad|hone|od)|android/i,Ct="ontouchstart"in window,Et=void 0!==w(window,"PointerEvent"),St=Ct&&xt.test(navigator.userAgent),kt="touch",Dt="pen",Ft="mouse",At="kinect",$t=25,Mt=1,Pt=2,Nt=4,It=8,Ot=1,Lt=2,_t=4,zt=8,Rt=16,qt=Lt|_t,Wt=zt|Rt,Ht=qt|Wt,Bt=["x","y"],Ut=["clientX","clientY"];x.prototype={handler:function(){},init:function(){this.evEl&&h(this.element,this.evEl,this.domHandler),this.evTarget&&h(this.target,this.evTarget,this.domHandler),this.evWin&&h(T(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&d(this.element,this.evEl,this.domHandler),this.evTarget&&d(this.target,this.evTarget,this.domHandler),this.evWin&&d(T(this.element),this.evWin,this.domHandler)}};var Vt={mousedown:Mt,mousemove:Pt,mouseup:Nt},Xt="mousedown",Yt="mousemove mouseup";r(L,x,{handler:function(t){var e=Vt[t.type];e&Mt&&0===t.button&&(this.pressed=!0),e&Pt&&1!==t.which&&(e=Nt),this.pressed&&(e&Nt&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:Ft,srcEvent:t}))}});var jt={pointerdown:Mt,pointermove:Pt,pointerup:Nt,pointercancel:It,pointerout:It},Zt={2:kt,3:Dt,4:Ft,5:At},Gt="pointerdown",Kt="pointermove pointerup pointercancel";window.MSPointerEvent&&!window.PointerEvent&&(Gt="MSPointerDown",Kt="MSPointerMove MSPointerUp MSPointerCancel"),r(_,x,{handler:function(t){var e=this.store,i=!1,n=t.type.toLowerCase().replace("ms",""),s=jt[n],o=Zt[t.pointerType]||t.pointerType,a=o==kt,r=v(e,t.pointerId,"pointerId");s&Mt&&(0===t.button||a)?r<0&&(e.push(t),r=e.length-1):s&(Nt|It)&&(i=!0),r<0||(e[r]=t,this.callback(this.manager,s,{pointers:e,changedPointers:[t],pointerType:o,srcEvent:t}),i&&e.splice(r,1))}});var Jt={touchstart:Mt,touchmove:Pt,touchend:Nt,touchcancel:It},Qt="touchstart",te="touchstart touchmove touchend touchcancel";r(z,x,{handler:function(t){var e=Jt[t.type];if(e===Mt&&(this.started=!0),this.started){var i=R.call(this,t,e);e&(Nt|It)&&i[0].length-i[1].length===0&&(this.started=!1),this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:kt,srcEvent:t})}}});var ee={touchstart:Mt,touchmove:Pt,touchend:Nt,touchcancel:It},ie="touchstart touchmove touchend touchcancel";r(q,x,{handler:function(t){var e=ee[t.type],i=W.call(this,t,e);i&&this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:kt,srcEvent:t})}});var ne=2500,se=25;r(H,x,{handler:function(t,e,i){var n=i.pointerType==kt,s=i.pointerType==Ft;if(!(s&&i.sourceCapabilities&&i.sourceCapabilities.firesTouchEvents)){if(n)B.call(this,e,i);else if(s&&V.call(this,i))return;this.callback(t,e,i)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var oe=w(mt.style,"touchAction"),ae=void 0!==oe,re="compute",le="auto",ce="manipulation",ue="none",he="pan-x",de="pan-y",pe=j();X.prototype={set:function(t){t==re&&(t=this.compute()),ae&&this.manager.element.style&&pe[t]&&(this.manager.element.style[oe]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return o(this.manager.recognizers,function(e){c(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),Y(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,i=t.offsetDirection;if(this.manager.session.prevented)return void e.preventDefault();var n=this.actions,s=m(n,ue)&&!pe[ue],o=m(n,de)&&!pe[de],a=m(n,he)&&!pe[he];if(s){var r=1===t.pointers.length,l=t.distance<2,c=t.deltaTime<250;if(r&&l&&c)return}return a&&o?void 0:s||o&&i&qt||a&&i&Wt?this.preventSrc(e):void 0},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var me=1,fe=2,ve=4,ge=8,ye=ge,we=16,be=32;Z.prototype={defaults:{},set:function(t){return ut(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(s(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=J(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return s(t,"dropRecognizeWith",this)?this:(t=J(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(s(t,"requireFailure",this))return this;var e=this.requireFail;return t=J(t,this),v(e,t)===-1&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(s(t,"dropRequireFailure",this))return this;t=J(t,this);var e=v(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){function e(e){i.manager.emit(e,t)}var i=this,n=this.state;n<ge&&e(i.options.event+G(n)),e(i.options.event),t.additionalEvent&&e(t.additionalEvent),n>=ge&&e(i.options.event+G(n))},tryEmit:function(t){return this.canEmit()?this.emit(t):void(this.state=be)},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(be|me)))return!1;t++}return!0},recognize:function(t){var e=ut({},t);return c(this.options.enable,[this,e])?(this.state&(ye|we|be)&&(this.state=me),this.state=this.process(e),void(this.state&(fe|ve|ge|we)&&this.tryEmit(e))):(this.reset(),void(this.state=be))},process:function(t){},getTouchAction:function(){},reset:function(){}},r(Q,Z,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,i=t.eventType,n=e&(fe|ve),s=this.attrTest(t);return n&&(i&It||!s)?e|we:n||s?i&Nt?e|ge:e&fe?e|ve:fe:be}}),r(tt,Q,{defaults:{event:"pan",threshold:10,pointers:1,direction:Ht},getTouchAction:function(){var t=this.options.direction,e=[];return t&qt&&e.push(de),t&Wt&&e.push(he),e},directionTest:function(t){var e=this.options,i=!0,n=t.distance,s=t.direction,o=t.deltaX,a=t.deltaY;return s&e.direction||(e.direction&qt?(s=0===o?Ot:o<0?Lt:_t,i=o!=this.pX,n=Math.abs(t.deltaX)):(s=0===a?Ot:a<0?zt:Rt,i=a!=this.pY,n=Math.abs(t.deltaY))),t.direction=s,i&&n>e.threshold&&s&e.direction},attrTest:function(t){return Q.prototype.attrTest.call(this,t)&&(this.state&fe||!(this.state&fe)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=K(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),r(et,Q,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[ue]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&fe)},emit:function(t){if(1!==t.scale){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}}),r(it,Z,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[le]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,s=t.distance<e.threshold,o=t.deltaTime>e.time;if(this._input=t,!s||!i||t.eventType&(Nt|It)&&!o)this.reset();else if(t.eventType&Mt)this.reset(),this._timer=n(function(){this.state=ye,this.tryEmit()},e.time,this);else if(t.eventType&Nt)return ye;return be},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===ye&&(t&&t.eventType&Nt?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=yt(),this.manager.emit(this.options.event,this._input)))}}),r(nt,Q,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[ue]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&fe)}}),r(st,Q,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:qt|Wt,pointers:1},getTouchAction:function(){return tt.prototype.getTouchAction.call(this)},attrTest:function(t){var e,i=this.options.direction;return i&(qt|Wt)?e=t.overallVelocity:i&qt?e=t.overallVelocityX:i&Wt&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&i&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&gt(e)>this.options.velocity&&t.eventType&Nt},emit:function(t){var e=K(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),r(ot,Z,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[ce]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,s=t.distance<e.threshold,o=t.deltaTime<e.time;if(this.reset(),t.eventType&Mt&&0===this.count)return this.failTimeout();if(s&&o&&i){if(t.eventType!=Nt)return this.failTimeout();var a=!this.pTime||t.timeStamp-this.pTime<e.interval,r=!this.pCenter||P(this.pCenter,t.center)<e.posThreshold;this.pTime=t.timeStamp,this.pCenter=t.center,r&&a?this.count+=1:this.count=1,this._input=t;var l=this.count%e.taps;if(0===l)return this.hasRequireFailures()?(this._timer=n(function(){this.state=ye,this.tryEmit()},e.interval,this),fe):ye}return be},failTimeout:function(){return this._timer=n(function(){this.state=be},this.options.interval,this),be},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==ye&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),at.VERSION="2.0.7",at.defaults={domEvents:!1,touchAction:re,enable:!0,inputTarget:null,inputClass:null,preset:[[nt,{enable:!1}],[et,{enable:!1},["rotate"]],[st,{direction:qt}],[tt,{direction:qt},["swipe"]],[ot],[ot,{event:"doubletap",taps:2},["tap"]],[it]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var Te=1,xe=2;rt.prototype={set:function(t){return ut(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?xe:Te},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var i,n=this.recognizers,s=e.curRecognizer;(!s||s&&s.state&ye)&&(s=e.curRecognizer=null);for(var o=0;o<n.length;)i=n[o],e.stopped===xe||s&&i!=s&&!i.canRecognizeWith(s)?i.reset():i.recognize(t),!s&&i.state&(fe|ve|ge)&&(s=e.curRecognizer=i),o++}},get:function(t){if(t instanceof Z)return t;for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event==t)return e[i];return null},add:function(t){if(s(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(s(t,"remove",this))return this;if(t=this.get(t)){var e=this.recognizers,i=v(e,t);i!==-1&&(e.splice(i,1),this.touchAction.update())}return this},on:function(t,e){if(void 0!==t&&void 0!==e){var i=this.handlers;return o(f(t),function(t){i[t]=i[t]||[],i[t].push(e)}),this}},off:function(t,e){if(void 0!==t){var i=this.handlers;return o(f(t),function(t){e?i[t]&&i[t].splice(v(i[t],e),1):delete i[t]}),this}},emit:function(t,e){this.options.domEvents&&ct(t,e);var i=this.handlers[t]&&this.handlers[t].slice();if(i&&i.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var n=0;n<i.length;)i[n](e),n++}},destroy:function(){this.element&&lt(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},ut(at,{INPUT_START:Mt,INPUT_MOVE:Pt,INPUT_END:Nt,INPUT_CANCEL:It,STATE_POSSIBLE:me,STATE_BEGAN:fe,STATE_CHANGED:ve,STATE_ENDED:ge,STATE_RECOGNIZED:ye,STATE_CANCELLED:we,STATE_FAILED:be,DIRECTION_NONE:Ot,DIRECTION_LEFT:Lt,DIRECTION_RIGHT:_t,DIRECTION_UP:zt,DIRECTION_DOWN:Rt,DIRECTION_HORIZONTAL:qt,DIRECTION_VERTICAL:Wt,DIRECTION_ALL:Ht,Manager:rt,Input:x,TouchAction:X,TouchInput:q,MouseInput:L,PointerEventInput:_,TouchMouseInput:H,SingleTouchInput:z,Recognizer:Z,AttrRecognizer:Q,Tap:ot,Pan:tt,Swipe:st,Pinch:et,Rotate:nt,Press:it,on:h,off:d,each:o,merge:bt,extend:wt,assign:ut,inherit:r,bindFn:l,prefixed:w}),function(t,e){function i(i,n){var s=t(i);s.data("hammer")||s.data("hammer",new e(s[0],n))}t.fn.hammer=function(t){return this.each(function(){i(this,t)})},e.Manager.prototype.emit=function(e){return function(i,n){e.call(this,i,n),t(this.element).trigger({type:i,gesture:n})}}(e.Manager.prototype.emit)}(ht,at),t.exports=dt.Hammer=at},function(t,e,i){"use strict";function n(){window.removeEventListener("load",n,!1),c=!0}function s(t){return u=u||new s.Class(t)}function o(t,e){for(var i in e)t[i]=e[i];return t}function a(){"#ath"==document.location.hash&&history.replaceState("",window.document.title,document.location.href.split("#")[0]),h.test(document.location.href)&&history.replaceState("",window.document.title,document.location.href.replace(h,"$1")),d.test(document.location.search)&&history.replaceState("",window.document.title,document.location.href.replace(d,"$2"))}var r=i(2),l="addEventListener"in window,c=!1;"complete"===document.readyState?c=!0:l&&window.addEventListener("load",n,!1);var u,h=/\/ath(\/)?$/,d=/([\?&]ath=[^&]*$|&ath=[^&]*(&))/;s.intl={en_us:{ios:"To add this web app to the home screen: tap %icon and then <strong>Add to Home Screen</strong>.",android:'To add this web app to the home screen open the browser option menu and tap on <strong>Add to homescreen</strong>. <small>The menu can be accessed by pressing the menu hardware button if your device has one, or by tapping the top right menu icon <span class="ath-action-icon">icon</span>.</small>'},zh_cn:{ios:"\u5982\u8981\u628a\u5e94\u7528\u7a0b\u5f0f\u52a0\u81f3\u4e3b\u5c4f\u5e55,\u8bf7\u70b9\u51fb%icon, \u7136\u540e<strong>\u52a0\u81f3\u4e3b\u5c4f\u5e55</strong>",android:'To add this web app to the home screen open the browser option menu and tap on <strong>Add to homescreen</strong>. <small>The menu can be accessed by pressing the menu hardware button if your device has one, or by tapping the top right menu icon <span class="ath-action-icon">icon</span>.</small>'},zh_tw:{ios:"\u5982\u8981\u628a\u61c9\u7528\u7a0b\u5f0f\u52a0\u81f3\u4e3b\u5c4f\u5e55, \u8acb\u9ede\u64ca%icon, \u7136\u5f8c<strong>\u52a0\u81f3\u4e3b\u5c4f\u5e55</strong>.",android:'To add this web app to the home screen open the browser option menu and tap on <strong>Add to homescreen</strong>. <small>The menu can be accessed by pressing the menu hardware button if your device has one, or by tapping the top right menu icon <span class="ath-action-icon">icon</span>.</small>'}};for(var p in s.intl)s.intl[p.substr(0,2)]=s.intl[p];s.defaults={appID:"org.cubiq.addtohome",fontSize:15,debug:!1,logging:!1,modal:!1,mandatory:!1,autostart:!0,skipFirstVisit:!1,startDelay:1,lifespan:15,displayPace:1440,maxDisplayCount:0,icon:!0,message:"",validLocation:[],onInit:null,onShow:null,onRemove:null,onAdd:null,onPrivate:null,privateModeOverride:!1,detectHomescreen:!1};var m=window.navigator.userAgent,f=window.navigator;o(s,{hasToken:"#ath"==document.location.hash||h.test(document.location.href)||d.test(document.location.search),isRetina:window.devicePixelRatio&&window.devicePixelRatio>1,isIDevice:/iphone|ipod|ipad/i.test(m),
isMobileChrome:m.indexOf("Android")>-1&&/Chrome\/[.0-9]*/.test(m)&&m.indexOf("Version")==-1,isMobileIE:m.indexOf("Windows Phone")>-1,language:f.language&&f.language.toLowerCase().replace("-","_")||""}),s.language=s.language&&s.language in s.intl?s.language:"en_us",s.isMobileSafari=s.isIDevice&&m.indexOf("Safari")>-1&&m.indexOf("CriOS")<0,s.OS=s.isIDevice?"ios":s.isMobileChrome?"android":s.isMobileIE?"windows":"unsupported",s.OSVersion=m.match(/(OS|Android) (\d+[_\.]\d+)/),s.OSVersion=s.OSVersion&&s.OSVersion[2]?+s.OSVersion[2].replace("_","."):0,s.isStandalone="standalone"in window.navigator&&window.navigator.standalone,s.isTablet=s.isMobileSafari&&m.indexOf("iPad")>-1||s.isMobileChrome&&m.indexOf("Mobile")<0,s.isCompatible=s.isMobileSafari&&s.OSVersion>=6||s.isMobileChrome;var v={lastDisplayTime:0,returningVisitor:!1,displayCount:0,optedout:!1,added:!1};s.removeSession=function(t){try{if(!localStorage)throw new Error("localStorage is not defined");localStorage.removeItem(t||s.defaults.appID)}catch(e){}},s.doLog=function(t){this.options.logging&&console.log(t)},s.Class=function(t){if(this.doLog=s.doLog,this.options=o({},s.defaults),o(this.options,t),this.options.debug&&(this.options.logging=!0),l){if(this.options.mandatory=this.options.mandatory&&("standalone"in window.navigator||this.options.debug),this.options.modal=this.options.modal||this.options.mandatory,this.options.mandatory&&(this.options.startDelay=-.5),this.options.detectHomescreen=this.options.detectHomescreen===!0?"hash":this.options.detectHomescreen,this.options.debug&&(s.isCompatible=!0,s.OS="string"==typeof this.options.debug?this.options.debug:"unsupported"==s.OS?"android":s.OS,s.OSVersion="ios"==s.OS?"8":"4"),this.container=document.documentElement,this.session=this.getItem(this.options.appID),this.session=this.session?JSON.parse(this.session):void 0,!s.hasToken||s.isCompatible&&this.session||(s.hasToken=!1,a()),!s.isCompatible)return void this.doLog("Add to homescreen: not displaying callout because device not supported");this.session=this.session||v;try{if(!localStorage)throw new Error("localStorage is not defined");localStorage.setItem(this.options.appID,JSON.stringify(this.session)),s.hasLocalStorage=!0}catch(e){s.hasLocalStorage=!1,this.options.onPrivate&&this.options.onPrivate.call(this)}for(var i=!this.options.validLocation.length,n=this.options.validLocation.length;n--;)if(this.options.validLocation[n].test(document.location.href)){i=!0;break}if(this.getItem("addToHome")&&this.optOut(),this.session.optedout)return void this.doLog("Add to homescreen: not displaying callout because user opted out");if(this.session.added)return void this.doLog("Add to homescreen: not displaying callout because already added to the homescreen");if(!i)return void this.doLog("Add to homescreen: not displaying callout because not a valid location");if(s.isStandalone)return this.session.added||(this.session.added=!0,this.updateSession(),this.options.onAdd&&s.hasLocalStorage&&this.options.onAdd.call(this)),void this.doLog("Add to homescreen: not displaying callout because in standalone mode");if(this.options.detectHomescreen){if(s.hasToken)return a(),this.session.added||(this.session.added=!0,this.updateSession(),this.options.onAdd&&s.hasLocalStorage&&this.options.onAdd.call(this)),void this.doLog("Add to homescreen: not displaying callout because URL has token, so we are likely coming from homescreen");"hash"==this.options.detectHomescreen?history.replaceState("",window.document.title,document.location.href+"#ath"):"smartURL"==this.options.detectHomescreen?history.replaceState("",window.document.title,document.location.href.replace(/(\/)?$/,"/ath$1")):history.replaceState("",window.document.title,document.location.href+(document.location.search?"&":"?")+"ath=")}if(!this.session.returningVisitor&&(this.session.returningVisitor=!0,this.updateSession(),this.options.skipFirstVisit))return void this.doLog("Add to homescreen: not displaying callout because skipping first visit");if(!this.options.privateModeOverride&&!s.hasLocalStorage)return void this.doLog("Add to homescreen: not displaying callout because browser is in private mode");this.ready=!0,this.options.onInit&&this.options.onInit.call(this),this.options.autostart&&(this.doLog("Add to homescreen: autostart displaying callout"),this.show())}},s.Class.prototype={events:{load:"_delayedShow",error:"_delayedShow",orientationchange:"resize",resize:"resize",scroll:"resize",click:"remove",touchmove:"_preventDefault",transitionend:"_removeElements",webkitTransitionEnd:"_removeElements",MSTransitionEnd:"_removeElements"},handleEvent:function(t){var e=this.events[t.type];e&&this[e](t)},show:function(t){if(this.options.autostart&&!c)return void setTimeout(this.show.bind(this),50);if(this.shown)return void this.doLog("Add to homescreen: not displaying callout because already shown on screen");var e=Date.now(),i=this.session.lastDisplayTime;if(t!==!0){if(!this.ready)return void this.doLog("Add to homescreen: not displaying callout because not ready");if(e-i<6e4*this.options.displayPace)return void this.doLog("Add to homescreen: not displaying callout because displayed recently");if(this.options.maxDisplayCount&&this.session.displayCount>=this.options.maxDisplayCount)return void this.doLog("Add to homescreen: not displaying callout because displayed too many times already")}this.shown=!0,this.session.lastDisplayTime=e,this.session.displayCount++,this.updateSession(),this.applicationIcon||("ios"==s.OS?this.applicationIcon=document.querySelector('head link[rel^=apple-touch-icon][sizes="152x152"],head link[rel^=apple-touch-icon][sizes="144x144"],head link[rel^=apple-touch-icon][sizes="120x120"],head link[rel^=apple-touch-icon][sizes="114x114"],head link[rel^=apple-touch-icon]'):this.applicationIcon=document.querySelector('head link[rel^="shortcut icon"][sizes="196x196"],head link[rel^=apple-touch-icon]'));var n="";"object"==typeof this.options.message&&s.language in this.options.message?n=this.options.message[s.language][s.OS]:"object"==typeof this.options.message&&s.OS in this.options.message?n=this.options.message[s.OS]:this.options.message in s.intl?n=s.intl[this.options.message][s.OS]:""!==this.options.message?n=this.options.message:s.OS in s.intl[s.language]&&(n=s.intl[s.language][s.OS]),n="<p>"+n.replace("%icon",'<span class="ath-action-icon">icon</span>')+"</p>",this.viewport=document.createElement("div"),this.viewport.className="ath-viewport",this.options.modal&&(this.viewport.className+=" ath-modal"),this.options.mandatory&&(this.viewport.className+=" ath-mandatory"),this.viewport.style.position="absolute",this.element=document.createElement("div"),this.element.className="ath-container ath-"+s.OS+" ath-"+s.OS+(s.OSVersion+"").substr(0,1)+" ath-"+(s.isTablet?"tablet":"phone"),this.element.style.cssText="-webkit-transition-property:-webkit-transform,opacity;-webkit-transition-duration:0s;-webkit-transition-timing-function:ease-out;transition-property:transform,opacity;transition-duration:0s;transition-timing-function:ease-out;",this.element.style.webkitTransform="translate3d(0,-"+window.innerHeight+"px,0)",this.element.style.transform="translate3d(0,-"+window.innerHeight+"px,0)",this.options.icon&&this.applicationIcon&&(this.element.className+=" ath-icon",this.img=document.createElement("img"),this.img.className="ath-application-icon",this.img.addEventListener("load",this,!1),this.img.addEventListener("error",this,!1),this.img.src=this.applicationIcon.href,this.element.appendChild(this.img)),this.element.innerHTML+=n,this.viewport.style.left="-99999em",this.viewport.appendChild(this.element),this.container.appendChild(this.viewport),this.img?this.doLog("Add to homescreen: not displaying callout because waiting for img to load"):this._delayedShow()},_delayedShow:function(t){setTimeout(this._show.bind(this),1e3*this.options.startDelay+500)},_show:function(){var t=this;this.updateViewport(),window.addEventListener("resize",this,!1),window.addEventListener("scroll",this,!1),window.addEventListener("orientationchange",this,!1),this.options.modal&&document.addEventListener("touchmove",this,!0),this.options.mandatory||setTimeout(function(){t.element.addEventListener("click",t,!0)},1e3),setTimeout(function(){t.element.style.webkitTransitionDuration="1.2s",t.element.style.transitionDuration="1.2s",t.element.style.webkitTransform="translate3d(0,0,0)",t.element.style.transform="translate3d(0,0,0)"},0),this.options.lifespan&&(this.removeTimer=setTimeout(this.remove.bind(this),1e3*this.options.lifespan)),this.options.onShow&&this.options.onShow.call(this)},remove:function(){clearTimeout(this.removeTimer),this.img&&(this.img.removeEventListener("load",this,!1),this.img.removeEventListener("error",this,!1)),window.removeEventListener("resize",this,!1),window.removeEventListener("scroll",this,!1),window.removeEventListener("orientationchange",this,!1),document.removeEventListener("touchmove",this,!0),this.element.removeEventListener("click",this,!0),this.element.addEventListener("transitionend",this,!1),this.element.addEventListener("webkitTransitionEnd",this,!1),this.element.addEventListener("MSTransitionEnd",this,!1),this.element.style.webkitTransitionDuration="0.3s",this.element.style.opacity="0"},_removeElements:function(){this.element.removeEventListener("transitionend",this,!1),this.element.removeEventListener("webkitTransitionEnd",this,!1),this.element.removeEventListener("MSTransitionEnd",this,!1),this.container.removeChild(this.viewport),this.shown=!1,this.options.onRemove&&this.options.onRemove.call(this)},updateViewport:function(){if(this.shown){this.viewport.style.width=window.innerWidth+"px",this.viewport.style.height=window.innerHeight+"px",this.viewport.style.left=window.scrollX+"px",this.viewport.style.top=window.scrollY+"px";var t=document.documentElement.clientWidth;this.orientation=t>document.documentElement.clientHeight?"landscape":"portrait";var e="ios"==s.OS?"portrait"==this.orientation?screen.width:screen.height:screen.width;this.scale=screen.width>t?1:e/window.innerWidth,this.element.style.fontSize=this.options.fontSize/this.scale+"px"}},resize:function(){clearTimeout(this.resizeTimer),this.resizeTimer=setTimeout(this.updateViewport.bind(this),100)},updateSession:function(){s.hasLocalStorage!==!1&&localStorage&&localStorage.setItem(this.options.appID,JSON.stringify(this.session))},clearSession:function(){this.session=v,this.updateSession()},getItem:function(t){try{if(!localStorage)throw new Error("localStorage is not defined");return localStorage.getItem(t)}catch(e){s.hasLocalStorage=!1}},optOut:function(){this.session.optedout=!0,this.updateSession()},optIn:function(){this.session.optedout=!1,this.updateSession()},clearDisplayCount:function(){this.session.displayCount=0,this.updateSession()},_preventDefault:function(t){t.preventDefault(),t.stopPropagation()}},s.VERSION="3.2.2",t.exports=r.addToHomescreen=s},function(t,e,i){"use strict";var n=i(1),s=i(2),o=function(t,e){var i=this;this.options=n.extend({},o.DEFAULTS,e),this.$element=n(t),this.$element.addClass("am-fade am-in").on("click.alert.amui",".am-close",function(){i.close()})};o.DEFAULTS={removeElement:!0},o.prototype.close=function(){function t(){e.trigger("closed.alert.amui").remove()}var e=this.$element;e.trigger("close.alert.amui").removeClass("am-in"),s.support.transition&&e.hasClass("am-fade")?e.one(s.support.transition.end,t).emulateTransitionEnd(200):t()},s.plugin("alert",o),n(document).on("click.alert.amui.data-api","[data-am-alert]",function(t){var e=n(t.target);e.is(".am-close")&&n(this).alert("close")}),t.exports=o},function(t,e,i){"use strict";var n=i(1),s=i(2),o=function(t,e){this.$element=n(t),this.options=n.extend({},o.DEFAULTS,e),this.isLoading=!1,this.hasSpinner=!1};o.DEFAULTS={loadingText:"loading...",disabledClassName:"am-disabled",activeClassName:"am-active",spinner:void 0},o.prototype.setState=function(t,e){var i=this.$element,o="disabled",a=i.data(),r=this.options,l=i.is("input")?"val":"html",c="am-btn-"+t+" "+r.disabledClassName;t+="Text",r.resetText||(r.resetText=i[l]()),s.support.animation&&r.spinner&&"html"===l&&!this.hasSpinner&&(r.loadingText='<span class="am-icon-'+r.spinner+' am-icon-spin"></span>'+r.loadingText,this.hasSpinner=!0),e=e||(void 0===a[t]?r[t]:a[t]),i[l](e),setTimeout(n.proxy(function(){"loadingText"===t?(i.addClass(c).attr(o,o),this.isLoading=!0):this.isLoading&&(i.removeClass(c).removeAttr(o),this.isLoading=!1)},this),0)},o.prototype.toggle=function(){var t=!0,e=this.$element,i=this.$element.parent('[class*="am-btn-group"]'),n=o.DEFAULTS.activeClassName;if(i.length){var s=this.$element.find("input");"radio"==s.prop("type")&&(s.prop("checked")&&e.hasClass(n)?t=!1:i.find("."+n).removeClass(n)),t&&s.prop("checked",!e.hasClass(n)).trigger("change")}t&&(e.toggleClass(n),e.hasClass(n)||e.blur())},s.plugin("button",o,{dataOptions:"data-am-loading",methodCall:function(t,e){"toggle"===t[0]?e.toggle():"string"==typeof t[0]&&e.setState.apply(e,t)}}),n(document).on("click.button.amui.data-api","[data-am-button]",function(t){t.preventDefault();var e=n(t.target);e.hasClass("am-btn")||(e=e.closest(".am-btn")),e.button("toggle")}),s.ready(function(t){n("[data-am-loading]",t).button(),n("[data-am-button]",t).find("input:checked").each(function(){n(this).parent("label").addClass(o.DEFAULTS.activeClassName)})}),t.exports=s.button=o},function(t,e,i){"use strict";function n(t){return this.each(function(){var e=s(this),i=e.data("amui.collapse"),n=s.extend({},a.DEFAULTS,o.utils.options(e.attr("data-am-collapse")),"object"==typeof t&&t);!i&&n.toggle&&"open"===t&&(t=!t),i||e.data("amui.collapse",i=new a(this,n)),"string"==typeof t&&i[t]()})}var s=i(1),o=i(2),a=function(t,e){this.$element=s(t),this.options=s.extend({},a.DEFAULTS,e),this.transitioning=null,this.options.parent&&(this.$parent=s(this.options.parent)),this.options.toggle&&this.toggle()};a.DEFAULTS={toggle:!0},a.prototype.open=function(){if(!this.transitioning&&!this.$element.hasClass("am-in")){var t=s.Event("open.collapse.amui");if(this.$element.trigger(t),!t.isDefaultPrevented()){var e=this.$parent&&this.$parent.find("> .am-panel > .am-in");if(e&&e.length){var i=e.data("amui.collapse");if(i&&i.transitioning)return;n.call(e,"close"),i||e.data("amui.collapse",null)}this.$element.removeClass("am-collapse").addClass("am-collapsing").height(0),this.transitioning=1;var a=function(){this.$element.removeClass("am-collapsing").addClass("am-collapse am-in").height("").trigger("opened.collapse.amui"),this.transitioning=0};if(!o.support.transition)return a.call(this);var r=this.$element[0].scrollHeight;this.$element.one(o.support.transition.end,s.proxy(a,this)).emulateTransitionEnd(300).css({height:r})}}},a.prototype.close=function(){if(!this.transitioning&&this.$element.hasClass("am-in")){var t=s.Event("close.collapse.amui");if(this.$element.trigger(t),!t.isDefaultPrevented()){this.$element.height(this.$element.height()).redraw(),this.$element.addClass("am-collapsing").removeClass("am-collapse am-in"),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.trigger("closed.collapse.amui").removeClass("am-collapsing").addClass("am-collapse")};return o.support.transition?void this.$element.height(0).one(o.support.transition.end,s.proxy(e,this)).emulateTransitionEnd(300):e.call(this)}}},a.prototype.toggle=function(){this[this.$element.hasClass("am-in")?"close":"open"]()},s.fn.collapse=n,s(document).on("click.collapse.amui.data-api","[data-am-collapse]",function(t){var e,i=s(this),a=o.utils.options(i.attr("data-am-collapse")),r=a.target||t.preventDefault()||(e=i.attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,""),l=s(r),c=l.data("amui.collapse"),u=c?"toggle":a,h=a.parent,d=h&&s(h);c&&c.transitioning||(d&&d.find("[data-am-collapse]").not(i).addClass("am-collapsed"),i[l.hasClass("am-in")?"addClass":"removeClass"]("am-collapsed")),n.call(l,u)}),t.exports=o.collapse=a},function(t,e,i){"use strict";var n=i(1),s=i(2),o=n(document),a=function(t,e){if(this.$element=n(t),this.options=n.extend({},a.DEFAULTS,e),this.format=r.parseFormat(this.options.format),this.$element.data("date",this.options.date),this.language=this.getLocale(this.options.locale),this.theme=this.options.theme,this.$picker=n(r.template).appendTo("body").on({click:n.proxy(this.click,this)}),this.isInput=this.$element.is("input"),this.component=!!this.$element.is(".am-datepicker-date")&&this.$element.find(".am-datepicker-add-on"),this.isInput?this.$element.on({"click.datepicker.amui":n.proxy(this.open,this),"keyup.datepicker.amui":n.proxy(this.update,this)}):this.component?this.component.on("click.datepicker.amui",n.proxy(this.open,this)):this.$element.on("click.datepicker.amui",n.proxy(this.open,this)),this.minViewMode=this.options.minViewMode,"string"==typeof this.minViewMode)switch(this.minViewMode){case"months":this.minViewMode=1;break;case"years":this.minViewMode=2;break;default:this.minViewMode=0}if(this.viewMode=this.options.viewMode,"string"==typeof this.viewMode)switch(this.viewMode){case"months":this.viewMode=1;break;case"years":this.viewMode=2;break;default:this.viewMode=0}this.startViewMode=this.viewMode,this.weekStart=(this.options.weekStart||a.locales[this.language].weekStart||0)%7,this.weekEnd=(this.weekStart+6)%7,this.onRender=this.options.onRender,this.setTheme(),this.fillDow(),this.fillMonths(),this.update(),this.showMode()};a.DEFAULTS={locale:"zh_CN",format:"yyyy-mm-dd",weekStart:void 0,viewMode:0,minViewMode:0,date:"",theme:"",autoClose:1,onRender:function(t){return""}},a.prototype.open=function(t){this.$picker.show(),this.height=this.component?this.component.outerHeight():this.$element.outerHeight(),this.place(),n(window).on("resize.datepicker.amui",n.proxy(this.place,this)),t&&(t.stopPropagation(),t.preventDefault());var e=this;o.on("mousedown.datapicker.amui touchstart.datepicker.amui",function(t){0===n(t.target).closest(".am-datepicker").length&&e.close()}),this.$element.trigger({type:"open.datepicker.amui",date:this.date})},a.prototype.close=function(){this.$picker.hide(),n(window).off("resize.datepicker.amui",this.place),this.viewMode=this.startViewMode,this.showMode(),this.isInput||n(document).off("mousedown.datapicker.amui touchstart.datepicker.amui",this.close),this.$element.trigger({type:"close.datepicker.amui",date:this.date})},a.prototype.set=function(){var t,e=r.formatDate(this.date,this.format);this.isInput?t=this.$element.attr("value",e):(this.component&&(t=this.$element.find("input").attr("value",e)),this.$element.data("date",e)),t&&t.trigger("change")},a.prototype.setValue=function(t){"string"==typeof t?this.date=r.parseDate(t,this.format):this.date=new Date(t),this.set(),this.viewDate=new Date(this.date.getFullYear(),this.date.getMonth(),1,0,0,0,0),this.fill()},a.prototype.place=function(){var t=this.component?this.component.offset():this.$element.offset(),e=this.component?this.component.width():this.$element.width(),i=t.top+this.height,n=t.left,s=o.width()-t.left-e,a=this.isOutView();if(this.$picker.removeClass("am-datepicker-right"),this.$picker.removeClass("am-datepicker-up"),o.width()>640){if(a.outRight)return this.$picker.addClass("am-datepicker-right"),void this.$picker.css({top:i,left:"auto",right:s});a.outBottom&&(this.$picker.addClass("am-datepicker-up"),i=t.top-this.$picker.outerHeight(!0))}else n=0;this.$picker.css({top:i,left:n})},a.prototype.update=function(t){this.date=r.parseDate("string"==typeof t?t:this.isInput?this.$element.prop("value"):this.$element.data("date"),this.format),this.viewDate=new Date(this.date.getFullYear(),this.date.getMonth(),1,0,0,0,0),this.fill()},a.prototype.fillDow=function(){for(var t=this.weekStart,e="<tr>";t<this.weekStart+7;)e+='<th class="am-datepicker-dow">'+a.locales[this.language].daysMin[t++%7]+"</th>";e+="</tr>",this.$picker.find(".am-datepicker-days thead").append(e)},a.prototype.fillMonths=function(){for(var t="",e=0;e<12;)t+='<span class="am-datepicker-month">'+a.locales[this.language].monthsShort[e++]+"</span>";this.$picker.find(".am-datepicker-months td").append(t)},a.prototype.fill=function(){var t=new Date(this.viewDate),e=t.getFullYear(),i=t.getMonth(),n=this.date.valueOf(),s=new Date(e,i-1,28,0,0,0,0),o=r.getDaysInMonth(s.getFullYear(),s.getMonth()),l=this.$picker.find(".am-datepicker-days .am-datepicker-select");"zh_CN"===this.language?l.text(e+a.locales[this.language].year[0]+" "+a.locales[this.language].months[i]):l.text(a.locales[this.language].months[i]+" "+e),s.setDate(o),s.setDate(o-(s.getDay()-this.weekStart+7)%7);var c=new Date(s);c.setDate(c.getDate()+42),c=c.valueOf();for(var u,h,d,p=[];s.valueOf()<c;)s.getDay()===this.weekStart&&p.push("<tr>"),u=this.onRender(s,0),h=s.getFullYear(),d=s.getMonth(),d<i&&h===e||h<e?u+=" am-datepicker-old":(d>i&&h===e||h>e)&&(u+=" am-datepicker-new"),s.valueOf()===n&&(u+=" am-active"),p.push('<td class="am-datepicker-day '+u+'">'+s.getDate()+"</td>"),s.getDay()===this.weekEnd&&p.push("</tr>"),s.setDate(s.getDate()+1);this.$picker.find(".am-datepicker-days tbody").empty().append(p.join(""));var m=this.date.getFullYear(),f=this.$picker.find(".am-datepicker-months").find(".am-datepicker-select").text(e);f=f.end().find("span").removeClass("am-active").removeClass("am-disabled");for(var v=0;v<12;)this.onRender(t.setFullYear(e,v),1)&&f.eq(v).addClass("am-disabled"),v++;m===e&&f.eq(this.date.getMonth()).removeClass("am-disabled").addClass("am-active"),p="",e=10*parseInt(e/10,10);var g,y=this.$picker.find(".am-datepicker-years").find(".am-datepicker-select").text(e+"-"+(e+9)).end().find("td"),w=new Date(this.viewDate);e-=1;for(var b=-1;b<11;b++)g=this.onRender(w.setFullYear(e),2),p+='<span class="'+g+(b===-1||10===b?" am-datepicker-old":"")+(m===e?" am-active":"")+'">'+e+"</span>",e+=1;y.html(p)},a.prototype.click=function(t){t.stopPropagation(),t.preventDefault();var e,i,s=this.$picker.find(".am-datepicker-days").find(".am-active"),o=this.$picker.find(".am-datepicker-months"),a=o.find(".am-active").index(),l=n(t.target).closest("span, td, th");if(1===l.length)switch(l[0].nodeName.toLowerCase()){case"th":switch(l[0].className){case"am-datepicker-switch":this.showMode(1);break;case"am-datepicker-prev":case"am-datepicker-next":this.viewDate["set"+r.modes[this.viewMode].navFnc].call(this.viewDate,this.viewDate["get"+r.modes[this.viewMode].navFnc].call(this.viewDate)+r.modes[this.viewMode].navStep*("am-datepicker-prev"===l[0].className?-1:1)),this.fill(),this.set()}break;case"span":if(l.is(".am-disabled"))return;l.is(".am-datepicker-month")?(e=l.parent().find("span").index(l),l.is(".am-active")?this.viewDate.setMonth(e,s.text()):this.viewDate.setMonth(e)):(i=parseInt(l.text(),10)||0,l.is(".am-active")?this.viewDate.setFullYear(i,a,s.text()):this.viewDate.setFullYear(i)),0!==this.viewMode&&(this.date=new Date(this.viewDate),this.$element.trigger({type:"changeDate.datepicker.amui",date:this.date,viewMode:r.modes[this.viewMode].clsName})),this.showMode(-1),this.fill(),this.set();break;case"td":if(l.is(".am-datepicker-day")&&!l.is(".am-disabled")){var c=parseInt(l.text(),10)||1;e=this.viewDate.getMonth(),l.is(".am-datepicker-old")?e-=1:l.is(".am-datepicker-new")&&(e+=1),i=this.viewDate.getFullYear(),this.date=new Date(i,e,c,0,0,0,0),this.viewDate=new Date(i,e,Math.min(28,c),0,0,0,0),this.fill(),this.set(),this.$element.trigger({type:"changeDate.datepicker.amui",date:this.date,viewMode:r.modes[this.viewMode].clsName}),this.options.autoClose&&this.close()}}},a.prototype.mousedown=function(t){t.stopPropagation(),t.preventDefault()},a.prototype.showMode=function(t){t&&(this.viewMode=Math.max(this.minViewMode,Math.min(2,this.viewMode+t))),this.$picker.find(">div").hide().filter(".am-datepicker-"+r.modes[this.viewMode].clsName).show()},a.prototype.isOutView=function(){var t=this.component?this.component.offset():this.$element.offset(),e={outRight:!1,outBottom:!1},i=this.$picker,n=t.left+i.outerWidth(!0),s=t.top+i.outerHeight(!0)+this.$element.innerHeight();return n>o.width()&&(e.outRight=!0),s>o.height()&&(e.outBottom=!0),e},a.prototype.getLocale=function(t){return t||(t=navigator.language&&navigator.language.split("-"),t[1]=t[1].toUpperCase(),t=t.join("_")),a.locales[t]||(t="en_US"),t},a.prototype.setTheme=function(){this.theme&&this.$picker.addClass("am-datepicker-"+this.theme)},a.locales={en_US:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekStart:0},zh_CN:{days:["\u661f\u671f\u65e5","\u661f\u671f\u4e00","\u661f\u671f\u4e8c","\u661f\u671f\u4e09","\u661f\u671f\u56db","\u661f\u671f\u4e94","\u661f\u671f\u516d"],daysShort:["\u5468\u65e5","\u5468\u4e00","\u5468\u4e8c","\u5468\u4e09","\u5468\u56db","\u5468\u4e94","\u5468\u516d"],daysMin:["\u65e5","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d"],months:["\u4e00\u6708","\u4e8c\u6708","\u4e09\u6708","\u56db\u6708","\u4e94\u6708","\u516d\u6708","\u4e03\u6708","\u516b\u6708","\u4e5d\u6708","\u5341\u6708","\u5341\u4e00\u6708","\u5341\u4e8c\u6708"],monthsShort:["\u4e00\u6708","\u4e8c\u6708","\u4e09\u6708","\u56db\u6708","\u4e94\u6708","\u516d\u6708","\u4e03\u6708","\u516b\u6708","\u4e5d\u6708","\u5341\u6708","\u5341\u4e00\u6708","\u5341\u4e8c\u6708"],weekStart:1,year:["\u5e74"]}};var r={modes:[{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10}],isLeapYear:function(t){return t%4===0&&t%100!==0||t%400===0},getDaysInMonth:function(t,e){return[31,r.isLeapYear(t)?29:28,31,30,31,30,31,31,30,31,30,31][e]},parseFormat:function(t){var e=t.match(/[.\/\-\s].*?/),i=t.split(/\W+/);if(!e||!i||0===i.length)throw new Error("Invalid date format.");return{separator:e,parts:i}},parseDate:function(t,e){var i,n=t.split(e.separator);if(t=new Date,t.setHours(0),t.setMinutes(0),t.setSeconds(0),t.setMilliseconds(0),n.length===e.parts.length){for(var s=t.getFullYear(),o=t.getDate(),a=t.getMonth(),r=0,l=e.parts.length;r<l;r++)switch(i=parseInt(n[r],10)||1,e.parts[r]){case"dd":case"d":o=i,t.setDate(i);break;case"mm":case"m":a=i-1,t.setMonth(i-1);break;case"yy":s=2e3+i,t.setFullYear(2e3+i);break;case"yyyy":s=i,t.setFullYear(i)}t=new Date(s,a,o,0,0,0)}return t},formatDate:function(t,e){var i={d:t.getDate(),m:t.getMonth()+1,yy:t.getFullYear().toString().substring(2),yyyy:t.getFullYear()},n=[];i.dd=(i.d<10?"0":"")+i.d,i.mm=(i.m<10?"0":"")+i.m;for(var s=0,o=e.parts.length;s<o;s++)n.push(i[e.parts[s]]);return n.join(e.separator)},headTemplate:'<thead><tr class="am-datepicker-header"><th class="am-datepicker-prev"><i class="am-datepicker-prev-icon"></i></th><th colspan="5" class="am-datepicker-switch"><div class="am-datepicker-select"></div></th><th class="am-datepicker-next"><i class="am-datepicker-next-icon"></i></th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>'};r.template='<div class="am-datepicker am-datepicker-dropdown"><div class="am-datepicker-caret"></div><div class="am-datepicker-days"><table class="am-datepicker-table">'+r.headTemplate+'<tbody></tbody></table></div><div class="am-datepicker-months"><table class="am-datepicker-table">'+r.headTemplate+r.contTemplate+'</table></div><div class="am-datepicker-years"><table class="am-datepicker-table">'+r.headTemplate+r.contTemplate+"</table></div></div>",s.plugin("datepicker",a),s.ready(function(t){n("[data-am-datepicker]").datepicker()}),t.exports=s.datepicker=a},function(t,e,i){"use strict";var n=i(1),s=i(2),o=n(document),a=s.support.transition,r=function(){this.id=s.utils.generateGUID("am-dimmer"),this.$element=n(r.DEFAULTS.tpl,{id:this.id}),this.inited=!1,this.scrollbarWidth=0,this.$used=n([])};r.DEFAULTS={tpl:'<div class="am-dimmer" data-am-dimmer></div>'},r.prototype.init=function(){return this.inited||(n(document.body).append(this.$element),this.inited=!0,o.trigger("init.dimmer.amui"),this.$element.on("touchmove.dimmer.amui",function(t){t.preventDefault()})),this},r.prototype.open=function(t){this.inited||this.init();var e=this.$element;return t&&(this.$used=this.$used.add(n(t))),this.checkScrollbar().setScrollbar(),e.show().trigger("open.dimmer.amui"),a&&e.off(a.end),setTimeout(function(){e.addClass("am-active")},0),this},r.prototype.close=function(t,e){function i(){s.hide(),this.resetScrollbar()}if(this.$used=this.$used.not(n(t)),!e&&this.$used.length)return this;var s=this.$element;return s.removeClass("am-active").trigger("close.dimmer.amui"),i.call(this),this},r.prototype.checkScrollbar=function(){return this.scrollbarWidth=s.utils.measureScrollbar(),this},r.prototype.setScrollbar=function(){var t=n(document.body),e=parseInt(t.css("padding-right")||0,10);return this.scrollbarWidth&&t.css("padding-right",e+this.scrollbarWidth),t.addClass("am-dimmer-active"),this},r.prototype.resetScrollbar=function(){return n(document.body).css("padding-right","").removeClass("am-dimmer-active"),this},t.exports=s.dimmer=new r},function(t,e,i){"use strict";var n=i(1),s=i(2),o=s.support.animation,a=function(t,e){this.options=n.extend({},a.DEFAULTS,e),e=this.options,this.$element=n(t),this.$toggle=this.$element.find(e.selector.toggle),this.$dropdown=this.$element.find(e.selector.dropdown),this.$boundary=e.boundary===window?n(window):this.$element.closest(e.boundary),this.$justify=e.justify&&n(e.justify).length&&n(e.justify)||void 0,!this.$boundary.length&&(this.$boundary=n(window)),this.active=!!this.$element.hasClass("am-active"),this.animating=null,this.events()};a.DEFAULTS={animation:"am-animation-slide-top-fixed",boundary:window,justify:void 0,selector:{dropdown:".am-dropdown-content",toggle:".am-dropdown-toggle"},trigger:"click"},a.prototype.toggle=function(){this.clear(),this.animating||this[this.active?"close":"open"]()},a.prototype.open=function(t){var e=this.$toggle,i=this.$element,s=this.$dropdown;if(!e.is(".am-disabled, :disabled")&&!this.active){i.trigger("open.dropdown.amui").addClass("am-active"),e.trigger("focus"),this.checkDimensions(t);var a=n.proxy(function(){i.trigger("opened.dropdown.amui"),this.active=!0,this.animating=0},this);o?(this.animating=1,s.addClass(this.options.animation).on(o.end+".open.dropdown.amui",n.proxy(function(){a(),s.removeClass(this.options.animation)},this))):a()}},a.prototype.close=function(){if(this.active){var t="am-dropdown-animation",e=this.$element,i=this.$dropdown;e.trigger("close.dropdown.amui");var s=n.proxy(function(){e.removeClass("am-active").trigger("closed.dropdown.amui"),this.active=!1,this.animating=0,this.$toggle.blur()},this);o?(i.removeClass(this.options.animation),i.addClass(t),this.animating=1,i.one(o.end+".close.dropdown.amui",function(){i.removeClass(t),s()})):s()}},a.prototype.enable=function(){this.$toggle.prop("disabled",!1)},a.prototype.disable=function(){this.$toggle.prop("disabled",!0)},a.prototype.checkDimensions=function(t){if(this.$dropdown.length){var e=this.$dropdown;t&&t.offset&&e.offset(t.offset);var i=e.offset(),s=e.outerWidth(),o=this.$boundary.width(),a=n.isWindow(this.boundary)&&this.$boundary.offset()?this.$boundary.offset().left:0;this.$justify&&e.css({"min-width":this.$justify.css("width")}),s+(i.left-a)>o&&this.$element.addClass("am-dropdown-flip")}},a.prototype.clear=function(){n("[data-am-dropdown]").not(this.$element).each(function(){var t=n(this).data("amui.dropdown");t&&t.close()})},a.prototype.events=function(){var t="dropdown.amui",e=this.$toggle;e.on("click."+t,n.proxy(function(t){t.preventDefault(),this.toggle()},this)),n(document).on("keydown.dropdown.amui",n.proxy(function(t){27===t.keyCode&&this.active&&this.close()},this)).on("click.outer.dropdown.amui",n.proxy(function(t){!this.active||this.$element[0]!==t.target&&this.$element.find(t.target).length||this.close()},this))},s.plugin("dropdown",a),s.ready(function(t){n("[data-am-dropdown]",t).dropdown()}),n(document).on("click.dropdown.amui.data-api",".am-dropdown form",function(t){
t.stopPropagation()}),t.exports=s.dropdown=a},function(t,e,i){(function(e){var n=i(1),s=i(2),o=!0;n.flexslider=function(t,i){var s=n(t);s.vars=n.extend({},n.flexslider.defaults,i);var a,r=s.vars.namespace,l=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,c=("ontouchstart"in window||l||window.DocumentTouch&&document instanceof DocumentTouch)&&s.vars.touch,u="click touchend MSPointerUp keyup",h="",d="vertical"===s.vars.direction,p=s.vars.reverse,m=s.vars.itemWidth>0,f="fade"===s.vars.animation,v=""!==s.vars.asNavFor,g={};n.data(t,"flexslider",s),g={init:function(){s.animating=!1,s.currentSlide=parseInt(s.vars.startAt?s.vars.startAt:0,10),isNaN(s.currentSlide)&&(s.currentSlide=0),s.animatingTo=s.currentSlide,s.atEnd=0===s.currentSlide||s.currentSlide===s.last,s.containerSelector=s.vars.selector.substr(0,s.vars.selector.search(" ")),s.slides=n(s.vars.selector,s),s.container=n(s.containerSelector,s),s.count=s.slides.length,s.syncExists=n(s.vars.sync).length>0,"slide"===s.vars.animation&&(s.vars.animation="swing"),s.prop=d?"top":"marginLeft",s.args={},s.manualPause=!1,s.stopped=!1,s.started=!1,s.startTimeout=null,s.transitions=!s.vars.video&&!f&&s.vars.useCSS&&function(){var t=document.createElement("div"),e=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in e)if(void 0!==t.style[e[i]])return s.pfx=e[i].replace("Perspective","").toLowerCase(),s.prop="-"+s.pfx+"-transform",!0;return!1}(),s.ensureAnimationEnd="",""!==s.vars.controlsContainer&&(s.controlsContainer=n(s.vars.controlsContainer).length>0&&n(s.vars.controlsContainer)),""!==s.vars.manualControls&&(s.manualControls=n(s.vars.manualControls).length>0&&n(s.vars.manualControls)),""!==s.vars.customDirectionNav&&(s.customDirectionNav=2===n(s.vars.customDirectionNav).length&&n(s.vars.customDirectionNav)),s.vars.randomize&&(s.slides.sort(function(){return Math.round(Math.random())-.5}),s.container.empty().append(s.slides)),s.doMath(),s.setup("init"),s.vars.controlNav&&g.controlNav.setup(),s.vars.directionNav&&g.directionNav.setup(),s.vars.keyboard&&(1===n(s.containerSelector).length||s.vars.multipleKeyboard)&&n(document).bind("keyup",function(t){var e=t.keyCode;if(!s.animating&&(39===e||37===e)){var i=39===e?s.getTarget("next"):37===e&&s.getTarget("prev");s.flexAnimate(i,s.vars.pauseOnAction)}}),s.vars.mousewheel&&s.bind("mousewheel",function(t,e,i,n){t.preventDefault();var o=e<0?s.getTarget("next"):s.getTarget("prev");s.flexAnimate(o,s.vars.pauseOnAction)}),s.vars.pausePlay&&g.pausePlay.setup(),s.vars.slideshow&&s.vars.pauseInvisible&&g.pauseInvisible.init(),s.vars.slideshow&&(s.vars.pauseOnHover&&s.hover(function(){s.manualPlay||s.manualPause||s.pause()},function(){s.manualPause||s.manualPlay||s.stopped||s.play()}),s.vars.pauseInvisible&&g.pauseInvisible.isHidden()||(s.vars.initDelay>0?s.startTimeout=setTimeout(s.play,s.vars.initDelay):s.play())),v&&g.asNav.setup(),c&&s.vars.touch&&g.touch(),(!f||f&&s.vars.smoothHeight)&&n(window).bind("resize orientationchange focus",g.resize),s.find("img").attr("draggable","false"),setTimeout(function(){s.vars.start(s)},200)},asNav:{setup:function(){s.asNav=!0,s.animatingTo=Math.floor(s.currentSlide/s.move),s.currentItem=s.currentSlide,s.slides.removeClass(r+"active-slide").eq(s.currentItem).addClass(r+"active-slide"),l?(t._slider=s,s.slides.each(function(){var t=this;t._gesture=new MSGesture,t._gesture.target=t,t.addEventListener("MSPointerDown",function(t){t.preventDefault(),t.currentTarget._gesture&&t.currentTarget._gesture.addPointer(t.pointerId)},!1),t.addEventListener("MSGestureTap",function(t){t.preventDefault();var e=n(this),i=e.index();n(s.vars.asNavFor).data("flexslider").animating||e.hasClass("active")||(s.direction=s.currentItem<i?"next":"prev",s.flexAnimate(i,s.vars.pauseOnAction,!1,!0,!0))})})):s.slides.on(u,function(t){t.preventDefault();var e=n(this),i=e.index(),o=e.offset().left-n(s).scrollLeft();o<=0&&e.hasClass(r+"active-slide")?s.flexAnimate(s.getTarget("prev"),!0):n(s.vars.asNavFor).data("flexslider").animating||e.hasClass(r+"active-slide")||(s.direction=s.currentItem<i?"next":"prev",s.flexAnimate(i,s.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){s.manualControls?g.controlNav.setupManual():g.controlNav.setupPaging()},setupPaging:function(){var t,e,i="thumbnails"===s.vars.controlNav?"control-thumbs":"control-paging",o=1;if(s.controlNavScaffold=n('<ol class="'+r+"control-nav "+r+i+'"></ol>'),s.pagingCount>1)for(var a=0;a<s.pagingCount;a++){e=s.slides.eq(a),void 0===e.attr("data-thumb-alt")&&e.attr("data-thumb-alt","");var l=""!==e.attr("data-thumb-alt")?l=' alt="'+e.attr("data-thumb-alt")+'"':"";if(t="thumbnails"===s.vars.controlNav?'<img src="'+e.attr("data-thumb")+'"'+l+"/>":'<a href="#">'+o+"</a>","thumbnails"===s.vars.controlNav&&!0===s.vars.thumbCaptions){var c=e.attr("data-thumbcaption");""!==c&&void 0!==c&&(t+='<span class="'+r+'caption">'+c+"</span>")}s.controlNavScaffold.append("<li>"+t+"<i></i></li>"),o++}s.controlsContainer?n(s.controlsContainer).append(s.controlNavScaffold):s.append(s.controlNavScaffold),g.controlNav.set(),g.controlNav.active(),s.controlNavScaffold.delegate("a, img",u,function(t){if(t.preventDefault(),""===h||h===t.type){var e=n(this),i=s.controlNav.index(e);e.hasClass(r+"active")||(s.direction=i>s.currentSlide?"next":"prev",s.flexAnimate(i,s.vars.pauseOnAction))}""===h&&(h=t.type),g.setToClearWatchedEvent()})},setupManual:function(){s.controlNav=s.manualControls,g.controlNav.active(),s.controlNav.bind(u,function(t){if(t.preventDefault(),""===h||h===t.type){var e=n(this),i=s.controlNav.index(e);e.hasClass(r+"active")||(i>s.currentSlide?s.direction="next":s.direction="prev",s.flexAnimate(i,s.vars.pauseOnAction))}""===h&&(h=t.type),g.setToClearWatchedEvent()})},set:function(){var t="thumbnails"===s.vars.controlNav?"img":"a";s.controlNav=n("."+r+"control-nav li "+t,s.controlsContainer?s.controlsContainer:s)},active:function(){s.controlNav.removeClass(r+"active").eq(s.animatingTo).addClass(r+"active")},update:function(t,e){s.pagingCount>1&&"add"===t?s.controlNavScaffold.append(n('<li><a href="#">'+s.count+"</a></li>")):1===s.pagingCount?s.controlNavScaffold.find("li").remove():s.controlNav.eq(e).closest("li").remove(),g.controlNav.set(),s.pagingCount>1&&s.pagingCount!==s.controlNav.length?s.update(e,t):g.controlNav.active()}},directionNav:{setup:function(){var t=n('<ul class="'+r+'direction-nav"><li class="'+r+'nav-prev"><a class="'+r+'prev" href="#">'+s.vars.prevText+'</a></li><li class="'+r+'nav-next"><a class="'+r+'next" href="#">'+s.vars.nextText+"</a></li></ul>");s.customDirectionNav?s.directionNav=s.customDirectionNav:s.controlsContainer?(n(s.controlsContainer).append(t),s.directionNav=n("."+r+"direction-nav li a",s.controlsContainer)):(s.append(t),s.directionNav=n("."+r+"direction-nav li a",s)),g.directionNav.update(),s.directionNav.bind(u,function(t){t.preventDefault();var e;""!==h&&h!==t.type||(e=n(this).hasClass(r+"next")?s.getTarget("next"):s.getTarget("prev"),s.flexAnimate(e,s.vars.pauseOnAction)),""===h&&(h=t.type),g.setToClearWatchedEvent()})},update:function(){var t=r+"disabled";1===s.pagingCount?s.directionNav.addClass(t).attr("tabindex","-1"):s.vars.animationLoop?s.directionNav.removeClass(t).removeAttr("tabindex"):0===s.animatingTo?s.directionNav.removeClass(t).filter("."+r+"prev").addClass(t).attr("tabindex","-1"):s.animatingTo===s.last?s.directionNav.removeClass(t).filter("."+r+"next").addClass(t).attr("tabindex","-1"):s.directionNav.removeClass(t).removeAttr("tabindex")}},pausePlay:{setup:function(){var t=n('<div class="'+r+'pauseplay"><a href="#"></a></div>');s.controlsContainer?(s.controlsContainer.append(t),s.pausePlay=n("."+r+"pauseplay a",s.controlsContainer)):(s.append(t),s.pausePlay=n("."+r+"pauseplay a",s)),g.pausePlay.update(s.vars.slideshow?r+"pause":r+"play"),s.pausePlay.bind(u,function(t){t.preventDefault(),""!==h&&h!==t.type||(n(this).hasClass(r+"pause")?(s.manualPause=!0,s.manualPlay=!1,s.pause()):(s.manualPause=!1,s.manualPlay=!0,s.play())),""===h&&(h=t.type),g.setToClearWatchedEvent()})},update:function(t){"play"===t?s.pausePlay.removeClass(r+"pause").addClass(r+"play").html(s.vars.playText):s.pausePlay.removeClass(r+"play").addClass(r+"pause").html(s.vars.pauseText)}},touch:function(){function i(e){e.stopPropagation(),s.animating?e.preventDefault():(s.pause(),t._gesture.addPointer(e.pointerId),C=0,u=d?s.h:s.w,v=Number(new Date),c=m&&p&&s.animatingTo===s.last?0:m&&p?s.limit-(s.itemW+s.vars.itemMargin)*s.move*s.animatingTo:m&&s.currentSlide===s.last?s.limit:m?(s.itemW+s.vars.itemMargin)*s.move*s.currentSlide:p?(s.last-s.currentSlide+s.cloneOffset)*u:(s.currentSlide+s.cloneOffset)*u)}function n(i){i.stopPropagation();var n=i.target._slider;if(n){var s=-i.translationX,o=-i.translationY;return C+=d?o:s,h=C,b=d?Math.abs(C)<Math.abs(-s):Math.abs(C)<Math.abs(-o),i.detail===i.MSGESTURE_FLAG_INERTIA?void e(function(){t._gesture.stop()}):void((!b||Number(new Date)-v>500)&&(i.preventDefault(),!f&&n.transitions&&(n.vars.animationLoop||(h=C/(0===n.currentSlide&&C<0||n.currentSlide===n.last&&C>0?Math.abs(C)/u+2:1)),n.setProps(c+h,"setTouch"))))}}function o(t){t.stopPropagation();var e=t.target._slider;if(e){if(e.animatingTo===e.currentSlide&&!b&&null!==h){var i=p?-h:h,n=i>0?e.getTarget("next"):e.getTarget("prev");e.canAdvance(n)&&(Number(new Date)-v<550&&Math.abs(i)>50||Math.abs(i)>u/2)?e.flexAnimate(n,e.vars.pauseOnAction):f||e.flexAnimate(e.currentSlide,e.vars.pauseOnAction,!0)}a=null,r=null,h=null,c=null,C=0}}var a,r,c,u,h,v,g,y,w,b=!1,T=0,x=0,C=0;l?(t.style.msTouchAction="none",t._gesture=new MSGesture,t._gesture.target=t,t.addEventListener("MSPointerDown",i,!1),t._slider=s,t.addEventListener("MSGestureChange",n,!1),t.addEventListener("MSGestureEnd",o,!1)):(g=function(e){s.animating?e.preventDefault():(window.navigator.msPointerEnabled||1===e.touches.length)&&(s.pause(),u=d?s.h:s.w,v=Number(new Date),T=e.touches[0].pageX,x=e.touches[0].pageY,c=m&&p&&s.animatingTo===s.last?0:m&&p?s.limit-(s.itemW+s.vars.itemMargin)*s.move*s.animatingTo:m&&s.currentSlide===s.last?s.limit:m?(s.itemW+s.vars.itemMargin)*s.move*s.currentSlide:p?(s.last-s.currentSlide+s.cloneOffset)*u:(s.currentSlide+s.cloneOffset)*u,a=d?x:T,r=d?T:x,t.addEventListener("touchmove",y,!1),t.addEventListener("touchend",w,!1))},y=function(t){T=t.touches[0].pageX,x=t.touches[0].pageY,h=d?a-x:a-T,b=d?Math.abs(h)<Math.abs(T-r):Math.abs(h)<Math.abs(x-r);var e=500;(!b||Number(new Date)-v>e)&&(t.preventDefault(),!f&&s.transitions&&(s.vars.animationLoop||(h/=0===s.currentSlide&&h<0||s.currentSlide===s.last&&h>0?Math.abs(h)/u+2:1),s.setProps(c+h,"setTouch")))},w=function(e){if(t.removeEventListener("touchmove",y,!1),s.animatingTo===s.currentSlide&&!b&&null!==h){var i=p?-h:h,n=i>0?s.getTarget("next"):s.getTarget("prev");s.canAdvance(n)&&(Number(new Date)-v<550&&Math.abs(i)>50||Math.abs(i)>u/2)?s.flexAnimate(n,s.vars.pauseOnAction):f||s.flexAnimate(s.currentSlide,s.vars.pauseOnAction,!0)}t.removeEventListener("touchend",w,!1),a=null,r=null,h=null,c=null},t.addEventListener("touchstart",g,!1))},resize:function(){!s.animating&&s.is(":visible")&&(m||s.doMath(),f?g.smoothHeight():m?(s.slides.width(s.computedW),s.update(s.pagingCount),s.setProps()):d?(s.viewport.height(s.h),s.setProps(s.h,"setTotal")):(s.vars.smoothHeight&&g.smoothHeight(),s.newSlides.width(s.computedW),s.setProps(s.computedW,"setTotal")))},smoothHeight:function(t){if(!d||f){var e=f?s:s.viewport;t?e.animate({height:s.slides.eq(s.animatingTo).innerHeight()},t):e.innerHeight(s.slides.eq(s.animatingTo).innerHeight())}},sync:function(t){var e=n(s.vars.sync).data("flexslider"),i=s.animatingTo;switch(t){case"animate":e.flexAnimate(i,s.vars.pauseOnAction,!1,!0);break;case"play":e.playing||e.asNav||e.play();break;case"pause":e.pause()}},uniqueID:function(t){return t.filter("[id]").add(t.find("[id]")).each(function(){var t=n(this);t.attr("id",t.attr("id")+"_clone")}),t},pauseInvisible:{visProp:null,init:function(){var t=g.pauseInvisible.getHiddenProp();if(t){var e=t.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(e,function(){g.pauseInvisible.isHidden()?s.startTimeout?clearTimeout(s.startTimeout):s.pause():s.started?s.play():s.vars.initDelay>0?setTimeout(s.play,s.vars.initDelay):s.play()})}},isHidden:function(){var t=g.pauseInvisible.getHiddenProp();return!!t&&document[t]},getHiddenProp:function(){var t=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var e=0;e<t.length;e++)if(t[e]+"Hidden"in document)return t[e]+"Hidden";return null}},setToClearWatchedEvent:function(){clearTimeout(a),a=setTimeout(function(){h=""},3e3)}},s.flexAnimate=function(t,e,i,o,a){if(s.vars.animationLoop||t===s.currentSlide||(s.direction=t>s.currentSlide?"next":"prev"),v&&1===s.pagingCount&&(s.direction=s.currentItem<t?"next":"prev"),!s.animating&&(s.canAdvance(t,a)||i)&&s.is(":visible")){if(v&&o){var l=n(s.vars.asNavFor).data("flexslider");if(s.atEnd=0===t||t===s.count-1,l.flexAnimate(t,!0,!1,!0,a),s.direction=s.currentItem<t?"next":"prev",l.direction=s.direction,Math.ceil((t+1)/s.visible)-1===s.currentSlide||0===t)return s.currentItem=t,s.slides.removeClass(r+"active-slide").eq(t).addClass(r+"active-slide"),!1;s.currentItem=t,s.slides.removeClass(r+"active-slide").eq(t).addClass(r+"active-slide"),t=Math.floor(t/s.visible)}if(s.animating=!0,s.animatingTo=t,e&&s.pause(),s.vars.before(s),s.syncExists&&!a&&g.sync("animate"),s.vars.controlNav&&g.controlNav.active(),m||s.slides.removeClass(r+"active-slide").eq(t).addClass(r+"active-slide"),s.atEnd=0===t||t===s.last,s.vars.directionNav&&g.directionNav.update(),t===s.last&&(s.vars.end(s),s.vars.animationLoop||s.pause()),f)c?(s.slides.eq(s.currentSlide).css({opacity:0,zIndex:1}),s.slides.eq(t).css({opacity:1,zIndex:2}),s.wrapup(w)):(s.slides.eq(s.currentSlide).css({zIndex:1}).animate({opacity:0},s.vars.animationSpeed,s.vars.easing),s.slides.eq(t).css({zIndex:2}).animate({opacity:1},s.vars.animationSpeed,s.vars.easing,s.wrapup));else{var u,h,y,w=d?s.slides.filter(":first").height():s.computedW;m?(u=s.vars.itemMargin,y=(s.itemW+u)*s.move*s.animatingTo,h=y>s.limit&&1!==s.visible?s.limit:y):h=0===s.currentSlide&&t===s.count-1&&s.vars.animationLoop&&"next"!==s.direction?p?(s.count+s.cloneOffset)*w:0:s.currentSlide===s.last&&0===t&&s.vars.animationLoop&&"prev"!==s.direction?p?0:(s.count+1)*w:p?(s.count-1-t+s.cloneOffset)*w:(t+s.cloneOffset)*w,s.setProps(h,"",s.vars.animationSpeed),s.transitions?(s.vars.animationLoop&&s.atEnd||(s.animating=!1,s.currentSlide=s.animatingTo),s.container.unbind("webkitTransitionEnd transitionend"),s.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(s.ensureAnimationEnd),s.wrapup(w)}),clearTimeout(s.ensureAnimationEnd),s.ensureAnimationEnd=setTimeout(function(){s.wrapup(w)},s.vars.animationSpeed+100)):s.container.animate(s.args,s.vars.animationSpeed,s.vars.easing,function(){s.wrapup(w)})}s.vars.smoothHeight&&g.smoothHeight(s.vars.animationSpeed)}},s.wrapup=function(t){f||m||(0===s.currentSlide&&s.animatingTo===s.last&&s.vars.animationLoop?s.setProps(t,"jumpEnd"):s.currentSlide===s.last&&0===s.animatingTo&&s.vars.animationLoop&&s.setProps(t,"jumpStart")),s.animating=!1,s.currentSlide=s.animatingTo,s.vars.after(s)},s.animateSlides=function(){!s.animating&&o&&s.flexAnimate(s.getTarget("next"))},s.pause=function(){clearInterval(s.animatedSlides),s.animatedSlides=null,s.playing=!1,s.vars.pausePlay&&g.pausePlay.update("play"),s.syncExists&&g.sync("pause")},s.play=function(){s.playing&&clearInterval(s.animatedSlides),s.animatedSlides=s.animatedSlides||setInterval(s.animateSlides,s.vars.slideshowSpeed),s.started=s.playing=!0,s.vars.pausePlay&&g.pausePlay.update("pause"),s.syncExists&&g.sync("play")},s.stop=function(){s.pause(),s.stopped=!0},s.canAdvance=function(t,e){var i=v?s.pagingCount-1:s.last;return!!e||(!(!v||s.currentItem!==s.count-1||0!==t||"prev"!==s.direction)||(!v||0!==s.currentItem||t!==s.pagingCount-1||"next"===s.direction)&&(!(t===s.currentSlide&&!v)&&(!!s.vars.animationLoop||(!s.atEnd||0!==s.currentSlide||t!==i||"next"===s.direction)&&(!s.atEnd||s.currentSlide!==i||0!==t||"next"!==s.direction))))},s.getTarget=function(t){return s.direction=t,"next"===t?s.currentSlide===s.last?0:s.currentSlide+1:0===s.currentSlide?s.last:s.currentSlide-1},s.setProps=function(t,e,i){var n=function(){var i=t?t:(s.itemW+s.vars.itemMargin)*s.move*s.animatingTo,n=function(){if(m)return"setTouch"===e?t:p&&s.animatingTo===s.last?0:p?s.limit-(s.itemW+s.vars.itemMargin)*s.move*s.animatingTo:s.animatingTo===s.last?s.limit:i;switch(e){case"setTotal":return p?(s.count-1-s.currentSlide+s.cloneOffset)*t:(s.currentSlide+s.cloneOffset)*t;case"setTouch":return p?t:t;case"jumpEnd":return p?t:s.count*t;case"jumpStart":return p?s.count*t:t;default:return t}}();return n*-1+"px"}();s.transitions&&(n=d?"translate3d(0,"+n+",0)":"translate3d("+n+",0,0)",i=void 0!==i?i/1e3+"s":"0s",s.container.css("-"+s.pfx+"-transition-duration",i),s.container.css("transition-duration",i)),s.args[s.prop]=n,(s.transitions||void 0===i)&&s.container.css(s.args),s.container.css("transform",n)},s.setup=function(t){if(f)s.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===t&&(c?s.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+s.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(s.currentSlide).css({opacity:1,zIndex:2}):0==s.vars.fadeFirstSlide?s.slides.css({opacity:0,display:"block",zIndex:1}).eq(s.currentSlide).css({zIndex:2}).css({opacity:1}):s.slides.css({opacity:0,display:"block",zIndex:1}).eq(s.currentSlide).css({zIndex:2}).animate({opacity:1},s.vars.animationSpeed,s.vars.easing)),s.vars.smoothHeight&&g.smoothHeight();else{var e,i;"init"===t&&(s.viewport=n('<div class="'+r+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(s).append(s.container),s.cloneCount=0,s.cloneOffset=0,p&&(i=n.makeArray(s.slides).reverse(),s.slides=n(i),s.container.empty().append(s.slides))),s.vars.animationLoop&&!m&&(s.cloneCount=2,s.cloneOffset=1,"init"!==t&&s.container.find(".clone").remove(),s.container.append(g.uniqueID(s.slides.first().clone().addClass("clone")).attr("aria-hidden","true")).prepend(g.uniqueID(s.slides.last().clone().addClass("clone")).attr("aria-hidden","true"))),s.newSlides=n(s.vars.selector,s),e=p?s.count-1-s.currentSlide+s.cloneOffset:s.currentSlide+s.cloneOffset,d&&!m?(s.container.height(200*(s.count+s.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){s.newSlides.css({display:"block"}),s.doMath(),s.viewport.height(s.h),s.setProps(e*s.h,"init")},"init"===t?100:0)):(s.container.width(200*(s.count+s.cloneCount)+"%"),s.setProps(e*s.computedW,"init"),setTimeout(function(){s.doMath(),s.newSlides.css({width:s.computedW,marginRight:s.computedM,"float":"left",display:"block"}),s.vars.smoothHeight&&g.smoothHeight()},"init"===t?100:0))}m||s.slides.removeClass(r+"active-slide").eq(s.currentSlide).addClass(r+"active-slide"),s.vars.init(s)},s.doMath=function(){var t=s.slides.first(),e=s.vars.itemMargin,i=s.vars.minItems,n=s.vars.maxItems;s.w=void 0===s.viewport?s.width():s.viewport.width(),s.h=t.height(),s.boxPadding=t.outerWidth()-t.width(),m?(s.itemT=s.vars.itemWidth+e,s.itemM=e,s.minW=i?i*s.itemT:s.w,s.maxW=n?n*s.itemT-e:s.w,s.itemW=s.minW>s.w?(s.w-e*(i-1))/i:s.maxW<s.w?(s.w-e*(n-1))/n:s.vars.itemWidth>s.w?s.w:s.vars.itemWidth,s.visible=Math.floor(s.w/s.itemW),s.move=s.vars.move>0&&s.vars.move<s.visible?s.vars.move:s.visible,s.pagingCount=Math.ceil((s.count-s.visible)/s.move+1),s.last=s.pagingCount-1,s.limit=1===s.pagingCount?0:s.vars.itemWidth>s.w?s.itemW*(s.count-1)+e*(s.count-1):(s.itemW+e)*s.count-s.w-e):(s.itemW=s.w,s.itemM=e,s.pagingCount=s.count,s.last=s.count-1),s.computedW=s.itemW-s.boxPadding,s.computedM=s.itemM},s.update=function(t,e){s.doMath(),m||(t<s.currentSlide?s.currentSlide+=1:t<=s.currentSlide&&0!==t&&(s.currentSlide-=1),s.animatingTo=s.currentSlide),s.vars.controlNav&&!s.manualControls&&("add"===e&&!m||s.pagingCount>s.controlNav.length?g.controlNav.update("add"):("remove"===e&&!m||s.pagingCount<s.controlNav.length)&&(m&&s.currentSlide>s.last&&(s.currentSlide-=1,s.animatingTo-=1),g.controlNav.update("remove",s.last))),s.vars.directionNav&&g.directionNav.update()},s.addSlide=function(t,e){var i=n(t);s.count+=1,s.last=s.count-1,d&&p?void 0!==e?s.slides.eq(s.count-e).after(i):s.container.prepend(i):void 0!==e?s.slides.eq(e).before(i):s.container.append(i),s.update(e,"add"),s.slides=n(s.vars.selector+":not(.clone)",s),s.setup(),s.vars.added(s)},s.removeSlide=function(t){var e=isNaN(t)?s.slides.index(n(t)):t;s.count-=1,s.last=s.count-1,isNaN(t)?n(t,s.slides).remove():d&&p?s.slides.eq(s.last).remove():s.slides.eq(t).remove(),s.doMath(),s.update(e,"remove"),s.slides=n(s.vars.selector+":not(.clone)",s),s.setup(),s.vars.removed(s)},g.init()},n(window).blur(function(t){o=!1}).focus(function(t){o=!0}),n.flexslider.defaults={namespace:"am-",selector:".am-slides > li",animation:"slide",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:5e3,animationSpeed:600,initDelay:0,randomize:!1,fadeFirstSlide:!0,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:" ",nextText:" ",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",customDirectionNav:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}},n.fn.flexslider=function(t){var e=Array.prototype.slice.call(arguments,1);if(void 0===t&&(t={}),"object"==typeof t)return this.each(function(){var e=n(this),i=t.selector?t.selector:".am-slides > li",s=e.find(i);1===s.length&&t.allowOneSlide===!1||0===s.length?(s.fadeIn(400),t.start&&t.start(e)):void 0===e.data("flexslider")&&new n.flexslider(this,t)});var i,s=n(this).data("flexslider");switch(t){case"next":s.flexAnimate(s.getTarget("next"),!0);break;case"prev":case"previous":s.flexAnimate(s.getTarget("prev"),!0);break;default:"number"==typeof t?s.flexAnimate(t,!0):"string"==typeof t&&(i="function"==typeof s[t]?s[t].apply(s,e):s[t])}return void 0===i?this:i},s.ready(function(t){n("[data-am-flexslider]",t).each(function(t,e){var i=n(e),o=s.utils.parseOptions(i.data("amFlexslider"));o.before=function(t){t._pausedTimer&&(window.clearTimeout(t._pausedTimer),t._pausedTimer=null)},o.after=function(t){var e=t.vars.playAfterPaused;!e||isNaN(e)||t.playing||t.manualPause||t.manualPlay||t.stopped||(t._pausedTimer=window.setTimeout(function(){t.play()},e))},i.flexslider(o)})}),t.exports=n.flexslider}).call(e,i(12).setImmediate)},function(t,e,i){(function(t,n){function s(t,e){this._id=t,this._clearFn=e}var o=i(13).nextTick,a=Function.prototype.apply,r=Array.prototype.slice,l={},c=0;e.setTimeout=function(){return new s(a.call(setTimeout,window,arguments),clearTimeout)},e.setInterval=function(){return new s(a.call(setInterval,window,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t.close()},s.prototype.unref=s.prototype.ref=function(){},s.prototype.close=function(){this._clearFn.call(window,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},e.setImmediate="function"==typeof t?t:function(t){var i=c++,n=!(arguments.length<2)&&r.call(arguments,1);return l[i]=!0,o(function(){l[i]&&(n?t.apply(null,n):t.call(null),e.clearImmediate(i))}),i},e.clearImmediate="function"==typeof n?n:function(t){delete l[t]}}).call(e,i(12).setImmediate,i(12).clearImmediate)},function(t,e){function i(t){if(l===setTimeout)return setTimeout(t,0);try{return l(t,0)}catch(e){try{return l.call(null,t,0)}catch(e){return l.call(this,t,0)}}}function n(t){if(c===clearTimeout)return clearTimeout(t);try{return c(t)}catch(e){try{return c.call(null,t)}catch(e){return c.call(this,t)}}}function s(){p&&h&&(p=!1,h.length?d=h.concat(d):m=-1,d.length&&o())}function o(){if(!p){var t=i(s);p=!0;for(var e=d.length;e;){for(h=d,d=[];++m<e;)h&&h[m].run();m=-1,e=d.length}h=null,p=!1,n(t)}}function a(t,e){this.fun=t,this.array=e}function r(){}var l,c,u=t.exports={};!function(){try{l=setTimeout}catch(t){l=function(){throw new Error("setTimeout is not defined")}}try{c=clearTimeout}catch(t){c=function(){throw new Error("clearTimeout is not defined")}}}();var h,d=[],p=!1,m=-1;u.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];d.push(new a(t,e)),1!==d.length||p||i(o)},a.prototype.run=function(){this.fun.apply(null,this.array)},u.title="browser",u.browser=!0,u.env={},u.argv=[],u.version="",u.versions={},u.on=r,u.addListener=r,u.once=r,u.off=r,u.removeListener=r,u.removeAllListeners=r,u.emit=r,u.binding=function(t){throw new Error("process.binding is not supported")},u.cwd=function(){return"/"},u.chdir=function(t){throw new Error("process.chdir is not supported")},u.umask=function(){return 0}},function(t,e,i){"use strict";function n(t,e){this.wrapper="string"==typeof t?document.querySelector(t):t,this.scroller=this.wrapper.children[0],this.scrollerStyle=this.scroller.style,this.options={disablePointer:!a.hasPointer,disableTouch:a.hasPointer||!a.hasTouch,disableMouse:a.hasPointer||a.hasTouch,startX:0,startY:0,scrollY:!0,directionLockThreshold:5,momentum:!0,bounce:!0,bounceTime:600,bounceEasing:"",preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:!0,useTransition:!0,useTransform:!0,bindToWrapper:"undefined"==typeof window.onmousedown};for(var i in e)this.options[i]=e[i];this.translateZ=this.options.HWCompositing&&a.hasPerspective?" translateZ(0)":"",this.options.useTransition=a.hasTransition&&this.options.useTransition,this.options.useTransform=a.hasTransform&&this.options.useTransform,this.options.eventPassthrough=this.options.eventPassthrough===!0?"vertical":this.options.eventPassthrough,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,this.options.scrollY="vertical"!=this.options.eventPassthrough&&this.options.scrollY,this.options.scrollX="horizontal"!=this.options.eventPassthrough&&this.options.scrollX,this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough,this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold,this.options.bounceEasing="string"==typeof this.options.bounceEasing?a.ease[this.options.bounceEasing]||a.ease.circular:this.options.bounceEasing,this.options.resizePolling=void 0===this.options.resizePolling?60:this.options.resizePolling,this.options.tap===!0&&(this.options.tap="tap"),this.options.useTransition||this.options.useTransform||/relative|absolute/i.test(this.scrollerStyle.position)||(this.scrollerStyle.position="relative"),this.x=0,this.y=0,this.directionX=0,this.directionY=0,this._events={},this._init(),this.refresh(),this.scrollTo(this.options.startX,this.options.startY),this.enable()}var s=i(2),o=s.utils.rAF,a=function(){function t(t){return n!==!1&&(""===n?t:n+t.charAt(0).toUpperCase()+t.substr(1))}var e={},i=document.createElement("div").style,n=function(){for(var t,e=["t","webkitT","MozT","msT","OT"],n=0,s=e.length;n<s;n++)if(t=e[n]+"ransform",t in i)return e[n].substr(0,e[n].length-1);return!1}();e.getTime=Date.now||function(){return(new Date).getTime()},e.extend=function(t,e){for(var i in e)t[i]=e[i]},e.addEvent=function(t,e,i,n){t.addEventListener(e,i,!!n)},e.removeEvent=function(t,e,i,n){t.removeEventListener(e,i,!!n)},e.prefixPointerEvent=function(t){return window.MSPointerEvent?"MSPointer"+t.charAt(7).toUpperCase()+t.substr(8):t},e.momentum=function(t,e,i,n,s,o){var a,r,l=t-e,c=Math.abs(l)/i;return o=void 0===o?6e-4:o,a=t+c*c/(2*o)*(l<0?-1:1),r=c/o,a<n?(a=s?n-s/2.5*(c/8):n,l=Math.abs(a-t),r=l/c):a>0&&(a=s?s/2.5*(c/8):0,l=Math.abs(t)+a,r=l/c),{destination:Math.round(a),duration:r}};var s=t("transform");return e.extend(e,{hasTransform:s!==!1,hasPerspective:t("perspective")in i,hasTouch:"ontouchstart"in window,hasPointer:!(!window.PointerEvent&&!window.MSPointerEvent),hasTransition:t("transition")in i}),e.isBadAndroid=function(){var t=window.navigator.appVersion;if(/Android/.test(t)&&!/Chrome\/\d/.test(t)){var e=t.match(/Safari\/(\d+.\d)/);return!(e&&"object"==typeof e&&e.length>=2)||parseFloat(e[1])<535.19}return!1}(),e.extend(e.style={},{transform:s,transitionTimingFunction:t("transitionTimingFunction"),transitionDuration:t("transitionDuration"),transitionDelay:t("transitionDelay"),transformOrigin:t("transformOrigin")}),e.hasClass=function(t,e){var i=new RegExp("(^|\\s)"+e+"(\\s|$)");return i.test(t.className)},e.addClass=function(t,i){if(!e.hasClass(t,i)){var n=t.className.split(" ");n.push(i),t.className=n.join(" ")}},e.removeClass=function(t,i){if(e.hasClass(t,i)){var n=new RegExp("(^|\\s)"+i+"(\\s|$)","g");t.className=t.className.replace(n," ")}},e.offset=function(t){for(var e=-t.offsetLeft,i=-t.offsetTop;t=t.offsetParent;)e-=t.offsetLeft,i-=t.offsetTop;return{left:e,top:i}},e.preventDefaultException=function(t,e){for(var i in e)if(e[i].test(t[i]))return!0;return!1},e.extend(e.eventType={},{touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2,pointerdown:3,pointermove:3,pointerup:3,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3}),e.extend(e.ease={},{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(t){return t*(2-t)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(t){return Math.sqrt(1- --t*t)}},back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(t){var e=4;return(t-=1)*t*((e+1)*t+e)+1}},bounce:{style:"",fn:function(t){return(t/=1)<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}},elastic:{style:"",fn:function(t){var e=.22,i=.4;return 0===t?0:1==t?1:i*Math.pow(2,-10*t)*Math.sin((t-e/4)*(2*Math.PI)/e)+1}}}),e.tap=function(t,e){var i=document.createEvent("Event");i.initEvent(e,!0,!0),i.pageX=t.pageX,i.pageY=t.pageY,t.target.dispatchEvent(i)},e.click=function(t){var e,i=t.target;/(SELECT|INPUT|TEXTAREA)/i.test(i.tagName)||(e=document.createEvent(window.MouseEvent?"MouseEvents":"Event"),e.initEvent("click",!0,!0),e.view=t.view||window,e.detail=1,e.screenX=i.screenX||0,e.screenY=i.screenY||0,e.clientX=i.clientX||0,e.clientY=i.clientY||0,e.ctrlKey=!!t.ctrlKey,e.altKey=!!t.altKey,e.shiftKey=!!t.shiftKey,e.metaKey=!!t.metaKey,e.button=0,e.relatedTarget=null,e._constructed=!0,i.dispatchEvent(e))},e}();n.prototype={version:"5.2.0",_init:function(){this._initEvents()},destroy:function(){this._initEvents(!0),clearTimeout(this.resizeTimeout),this.resizeTimeout=null,this._execEvent("destroy")},_transitionEnd:function(t){t.target==this.scroller&&this.isInTransition&&(this._transitionTime(),this.resetPosition(this.options.bounceTime)||(this.isInTransition=!1,this._execEvent("scrollEnd")))},_start:function(t){if(1!=a.eventType[t.type]){var e;if(e=t.which?t.button:t.button<2?0:4==t.button?1:2,0!==e)return}if(this.enabled&&(!this.initiated||a.eventType[t.type]===this.initiated)){!this.options.preventDefault||a.isBadAndroid||a.preventDefaultException(t.target,this.options.preventDefaultException)||t.preventDefault();var i,n=t.touches?t.touches[0]:t;this.initiated=a.eventType[t.type],this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.directionLocked=0,this.startTime=a.getTime(),this.options.useTransition&&this.isInTransition?(this._transitionTime(),this.isInTransition=!1,i=this.getComputedPosition(),this._translate(Math.round(i.x),Math.round(i.y)),this._execEvent("scrollEnd")):!this.options.useTransition&&this.isAnimating&&(this.isAnimating=!1,
this._execEvent("scrollEnd")),this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=n.pageX,this.pointY=n.pageY,this._execEvent("beforeScrollStart")}},_move:function(t){if(this.enabled&&a.eventType[t.type]===this.initiated){this.options.preventDefault&&t.preventDefault();var e,i,n,s,o=t.touches?t.touches[0]:t,r=o.pageX-this.pointX,l=o.pageY-this.pointY,c=a.getTime();if(this.pointX=o.pageX,this.pointY=o.pageY,this.distX+=r,this.distY+=l,n=Math.abs(this.distX),s=Math.abs(this.distY),!(c-this.endTime>300&&n<10&&s<10)){if(this.directionLocked||this.options.freeScroll||(n>s+this.options.directionLockThreshold?this.directionLocked="h":s>=n+this.options.directionLockThreshold?this.directionLocked="v":this.directionLocked="n"),"h"==this.directionLocked){if("vertical"==this.options.eventPassthrough)t.preventDefault();else if("horizontal"==this.options.eventPassthrough)return void(this.initiated=!1);l=0}else if("v"==this.directionLocked){if("horizontal"==this.options.eventPassthrough)t.preventDefault();else if("vertical"==this.options.eventPassthrough)return void(this.initiated=!1);r=0}r=this.hasHorizontalScroll?r:0,l=this.hasVerticalScroll?l:0,e=this.x+r,i=this.y+l,(e>0||e<this.maxScrollX)&&(e=this.options.bounce?this.x+r/3:e>0?0:this.maxScrollX),(i>0||i<this.maxScrollY)&&(i=this.options.bounce?this.y+l/3:i>0?0:this.maxScrollY),this.directionX=r>0?-1:r<0?1:0,this.directionY=l>0?-1:l<0?1:0,this.moved||this._execEvent("scrollStart"),this.moved=!0,this._translate(e,i),c-this.startTime>300&&(this.startTime=c,this.startX=this.x,this.startY=this.y)}}},_end:function(t){if(this.enabled&&a.eventType[t.type]===this.initiated){this.options.preventDefault&&!a.preventDefaultException(t.target,this.options.preventDefaultException)&&t.preventDefault();var e,i,n=(t.changedTouches?t.changedTouches[0]:t,a.getTime()-this.startTime),s=Math.round(this.x),o=Math.round(this.y),r=Math.abs(s-this.startX),l=Math.abs(o-this.startY),c=0,u="";if(this.isInTransition=0,this.initiated=0,this.endTime=a.getTime(),!this.resetPosition(this.options.bounceTime))return this.scrollTo(s,o),this.moved?this._events.flick&&n<200&&r<100&&l<100?void this._execEvent("flick"):(this.options.momentum&&n<300&&(e=this.hasHorizontalScroll?a.momentum(this.x,this.startX,n,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options.deceleration):{destination:s,duration:0},i=this.hasVerticalScroll?a.momentum(this.y,this.startY,n,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options.deceleration):{destination:o,duration:0},s=e.destination,o=i.destination,c=Math.max(e.duration,i.duration),this.isInTransition=1),s!=this.x||o!=this.y?((s>0||s<this.maxScrollX||o>0||o<this.maxScrollY)&&(u=a.ease.quadratic),void this.scrollTo(s,o,c,u)):void this._execEvent("scrollEnd")):(this.options.tap&&a.tap(t,this.options.tap),this.options.click&&a.click(t),void this._execEvent("scrollCancel"))}},_resize:function(){var t=this;clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){t.refresh()},this.options.resizePolling)},resetPosition:function(t){var e=this.x,i=this.y;return t=t||0,!this.hasHorizontalScroll||this.x>0?e=0:this.x<this.maxScrollX&&(e=this.maxScrollX),!this.hasVerticalScroll||this.y>0?i=0:this.y<this.maxScrollY&&(i=this.maxScrollY),(e!=this.x||i!=this.y)&&(this.scrollTo(e,i,t,this.options.bounceEasing),!0)},disable:function(){this.enabled=!1},enable:function(){this.enabled=!0},refresh:function(){this.wrapper.offsetHeight;this.wrapperWidth=this.wrapper.clientWidth,this.wrapperHeight=this.wrapper.clientHeight,this.scrollerWidth=this.scroller.offsetWidth,this.scrollerHeight=this.scroller.offsetHeight,this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight,this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0,this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,this.wrapperOffset=a.offset(this.wrapper),this._execEvent("refresh"),this.resetPosition()},on:function(t,e){this._events[t]||(this._events[t]=[]),this._events[t].push(e)},off:function(t,e){if(this._events[t]){var i=this._events[t].indexOf(e);i>-1&&this._events[t].splice(i,1)}},_execEvent:function(t){if(this._events[t]){var e=0,i=this._events[t].length;if(i)for(;e<i;e++)this._events[t][e].apply(this,[].slice.call(arguments,1))}},scrollBy:function(t,e,i,n){t=this.x+t,e=this.y+e,i=i||0,this.scrollTo(t,e,i,n)},scrollTo:function(t,e,i,n){n=n||a.ease.circular,this.isInTransition=this.options.useTransition&&i>0;var s=this.options.useTransition&&n.style;!i||s?(s&&(this._transitionTimingFunction(n.style),this._transitionTime(i)),this._translate(t,e)):this._animate(t,e,i,n.fn)},scrollToElement:function(t,e,i,n,s){if(t=t.nodeType?t:this.scroller.querySelector(t)){var o=a.offset(t);o.left-=this.wrapperOffset.left,o.top-=this.wrapperOffset.top,i===!0&&(i=Math.round(t.offsetWidth/2-this.wrapper.offsetWidth/2)),n===!0&&(n=Math.round(t.offsetHeight/2-this.wrapper.offsetHeight/2)),o.left-=i||0,o.top-=n||0,o.left=o.left>0?0:o.left<this.maxScrollX?this.maxScrollX:o.left,o.top=o.top>0?0:o.top<this.maxScrollY?this.maxScrollY:o.top,e=void 0===e||null===e||"auto"===e?Math.max(Math.abs(this.x-o.left),Math.abs(this.y-o.top)):e,this.scrollTo(o.left,o.top,e,s)}},_transitionTime:function(t){if(this.options.useTransition){t=t||0;var e=a.style.transitionDuration;if(e&&(this.scrollerStyle[e]=t+"ms",!t&&a.isBadAndroid)){this.scrollerStyle[e]="0.0001ms";var i=this;o(function(){"0.0001ms"===i.scrollerStyle[e]&&(i.scrollerStyle[e]="0s")})}}},_transitionTimingFunction:function(t){this.scrollerStyle[a.style.transitionTimingFunction]=t},_translate:function(t,e){this.options.useTransform?this.scrollerStyle[a.style.transform]="translate("+t+"px,"+e+"px)"+this.translateZ:(t=Math.round(t),e=Math.round(e),this.scrollerStyle.left=t+"px",this.scrollerStyle.top=e+"px"),this.x=t,this.y=e},_initEvents:function(t){var e=t?a.removeEvent:a.addEvent,i=this.options.bindToWrapper?this.wrapper:window;e(window,"orientationchange",this),e(window,"resize",this),this.options.click&&e(this.wrapper,"click",this,!0),this.options.disableMouse||(e(this.wrapper,"mousedown",this),e(i,"mousemove",this),e(i,"mousecancel",this),e(i,"mouseup",this)),a.hasPointer&&!this.options.disablePointer&&(e(this.wrapper,a.prefixPointerEvent("pointerdown"),this),e(i,a.prefixPointerEvent("pointermove"),this),e(i,a.prefixPointerEvent("pointercancel"),this),e(i,a.prefixPointerEvent("pointerup"),this)),a.hasTouch&&!this.options.disableTouch&&(e(this.wrapper,"touchstart",this),e(i,"touchmove",this),e(i,"touchcancel",this),e(i,"touchend",this)),e(this.scroller,"transitionend",this),e(this.scroller,"webkitTransitionEnd",this),e(this.scroller,"oTransitionEnd",this),e(this.scroller,"MSTransitionEnd",this)},getComputedPosition:function(){var t,e,i=window.getComputedStyle(this.scroller,null);return this.options.useTransform?(i=i[a.style.transform].split(")")[0].split(", "),t=+(i[12]||i[4]),e=+(i[13]||i[5])):(t=+i.left.replace(/[^-\d.]/g,""),e=+i.top.replace(/[^-\d.]/g,"")),{x:t,y:e}},_animate:function(t,e,i,n){function s(){var d,p,m,f=a.getTime();return f>=h?(r.isAnimating=!1,r._translate(t,e),void(r.resetPosition(r.options.bounceTime)||r._execEvent("scrollEnd"))):(f=(f-u)/i,m=n(f),d=(t-l)*m+l,p=(e-c)*m+c,r._translate(d,p),void(r.isAnimating&&o(s)))}var r=this,l=this.x,c=this.y,u=a.getTime(),h=u+i;this.isAnimating=!0,s()},handleEvent:function(t){switch(t.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(t);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(t);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(t);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(t);break;case"wheel":case"DOMMouseScroll":case"mousewheel":this._wheel(t);break;case"keydown":this._key(t);break;case"click":this.enabled&&!t._constructed&&(t.preventDefault(),t.stopPropagation())}}},n.utils=a,t.exports=s.iScroll=n},function(t,e,i){"use strict";function n(t,e){return this.each(function(){var i=s(this),n=i.data("amui.modal"),o="object"==typeof t&&t;n||i.data("amui.modal",n=new c(this,o)),"string"==typeof t?n[t]&&n[t](e):n.toggle(t&&t.relatedTarget||void 0)})}var s=i(1),o=i(2),a=i(9),r=s(document),l=o.support.transition,c=function(t,e){this.options=s.extend({},c.DEFAULTS,e||{}),this.$element=s(t),this.$dialog=this.$element.find(".am-modal-dialog"),this.$element.attr("id")||this.$element.attr("id",o.utils.generateGUID("am-modal")),this.isPopup=this.$element.hasClass("am-popup"),this.isActions=this.$element.hasClass("am-modal-actions"),this.isPrompt=this.$element.hasClass("am-modal-prompt"),this.isLoading=this.$element.hasClass("am-modal-loading"),this.active=this.transitioning=this.relatedTarget=null,this.dimmer=this.options.dimmer?a:{open:function(){},close:function(){}},this.events()};c.DEFAULTS={className:{active:"am-modal-active",out:"am-modal-out"},selector:{modal:".am-modal",active:".am-modal-active"},closeViaDimmer:!0,cancelable:!0,onConfirm:function(){},onCancel:function(){},closeOnCancel:!0,closeOnConfirm:!0,dimmer:!0,height:void 0,width:void 0,duration:300,transitionEnd:l&&l.end+".modal.amui"},c.prototype.toggle=function(t){return this.active?this.close():this.open(t)},c.prototype.open=function(t){var e=this.$element,i=this.options,n=this.isPopup,o=i.width,a=i.height,r={};if(!this.active&&this.$element.length){t&&(this.relatedTarget=t),this.transitioning&&(clearTimeout(e.transitionEndTimmer),e.transitionEndTimmer=null,e.trigger(i.transitionEnd).off(i.transitionEnd)),n&&this.$element.show(),this.active=!0,e.trigger(s.Event("open.modal.amui",{relatedTarget:t})),this.dimmer.open(e),e.show().redraw(),n||this.isActions||(o&&(r.width=parseInt(o,10)+"px"),a&&(r.height=parseInt(a,10)+"px"),this.$dialog.css(r)),e.removeClass(i.className.out).addClass(i.className.active),this.transitioning=1;var c=function(){e.trigger(s.Event("opened.modal.amui",{relatedTarget:t})),this.transitioning=0,this.isPrompt&&this.$dialog.find("input").eq(0).focus()};return l?void e.one(i.transitionEnd,s.proxy(c,this)).emulateTransitionEnd(i.duration):c.call(this)}},c.prototype.close=function(t){if(this.active){var e=this.$element,i=this.options,n=this.isPopup;this.transitioning&&(clearTimeout(e.transitionEndTimmer),e.transitionEndTimmer=null,e.trigger(i.transitionEnd).off(i.transitionEnd),this.dimmer.close(e,!0)),this.$element.trigger(s.Event("close.modal.amui",{relatedTarget:t})),this.transitioning=1;var o=function(){e.trigger("closed.modal.amui"),n&&e.removeClass(i.className.out),e.hide(),this.transitioning=0,this.dimmer.close(e,!1),this.active=!1};return e.removeClass(i.className.active).addClass(i.className.out),l?void e.one(i.transitionEnd,s.proxy(o,this)).emulateTransitionEnd(i.duration):o.call(this)}},c.prototype.events=function(){var t=this,e=this.options,i=this.$element,n=this.dimmer.$element,o=i.find(".am-modal-prompt-input"),a=i.find("[data-am-modal-confirm]"),r=i.find("[data-am-modal-cancel]"),l=function(){var t=[];return o.each(function(){t.push(s(this).val())}),0===t.length?void 0:1===t.length?t[0]:t};this.options.cancelable&&i.on("keyup.modal.amui",function(e){t.active&&27===e.which&&(i.trigger("cancel.modal.amui"),t.close())}),this.options.dimmer&&this.options.closeViaDimmer&&!this.isLoading&&n.on("click.dimmer.modal.amui",function(){t.close()}),i.on("click.close.modal.amui","[data-am-modal-close], .am-modal-btn",function(i){i.preventDefault();var n=s(this);n.is(a)?e.closeOnConfirm&&t.close():n.is(r)?e.closeOnCancel&&t.close():t.close()}).on("click",function(t){s(t.target).is(i)&&n.trigger("click.dimmer.modal.amui")}),a.on("click.confirm.modal.amui",function(){i.trigger(s.Event("confirm.modal.amui",{trigger:this}))}),r.on("click.cancel.modal.amui",function(){i.trigger(s.Event("cancel.modal.amui",{trigger:this}))}),i.on("confirm.modal.amui",function(e){e.data=l(),t.options.onConfirm.call(t,e)}).on("cancel.modal.amui",function(e){e.data=l(),t.options.onCancel.call(t,e)})},s.fn.modal=n,r.on("click.modal.amui.data-api","[data-am-modal]",function(){var t=s(this),e=o.utils.parseOptions(t.attr("data-am-modal")),i=s(e.target||this.href&&this.href.replace(/.*(?=#[^\s]+$)/,"")),a=i.data("amui.modal")?"toggle":e;n.call(i,a,this)}),t.exports=o.modal=c},function(t,e,i){"use strict";function n(t,e){var i=Array.prototype.slice.call(arguments,1);return this.each(function(){var n=s(this),o=n.data("amui.offcanvas"),a=s.extend({},"object"==typeof t&&t);o||(n.data("amui.offcanvas",o=new c(this,a)),(!t||"object"==typeof t)&&o.open(e)),"string"==typeof t&&o[t]&&o[t].apply(o,i)})}var s=i(1),o=i(2);i(3);var a,r=s(window),l=s(document),c=function(t,e){this.$element=s(t),this.options=s.extend({},c.DEFAULTS,e),this.active=null,this.bindEvents()};c.DEFAULTS={duration:300,effect:"overlay"},c.prototype.open=function(t){var e=this,i=this.$element;if(i.length&&!i.hasClass("am-active")){var n=this.options.effect,o=s("html"),l=s("body"),c=i.find(".am-offcanvas-bar").first(),u=c.hasClass("am-offcanvas-bar-flip")?-1:1;c.addClass("am-offcanvas-bar-"+n),a={x:window.scrollX,y:window.scrollY},i.addClass("am-active"),l.css({width:window.innerWidth,height:r.height()}).addClass("am-offcanvas-page"),"overlay"!==n&&l.css({"margin-left":c.outerWidth()*u}).width(),o.css("margin-top",a.y*-1),setTimeout(function(){c.addClass("am-offcanvas-bar-active").width()},0),i.trigger("open.offcanvas.amui"),this.active=1,i.on("click.offcanvas.amui",function(t){var i=s(t.target);i.hasClass("am-offcanvas-bar")||i.parents(".am-offcanvas-bar").first().length||(t.stopImmediatePropagation(),e.close())}),o.on("keydown.offcanvas.amui",function(t){27===t.keyCode&&e.close()})}},c.prototype.close=function(t){function e(){r.removeClass("am-offcanvas-page").css({width:"",height:"","margin-left":"","margin-right":""}),l.removeClass("am-active"),c.removeClass("am-offcanvas-bar-active"),n.css("margin-top",""),window.scrollTo(a.x,a.y),l.trigger("closed.offcanvas.amui"),i.active=0}var i=this,n=s("html"),r=s("body"),l=this.$element,c=l.find(".am-offcanvas-bar").first();l.length&&this.active&&l.hasClass("am-active")&&(l.trigger("close.offcanvas.amui"),o.support.transition?(setTimeout(function(){c.removeClass("am-offcanvas-bar-active")},0),r.css("margin-left","").one(o.support.transition.end,function(){e()}).emulateTransitionEnd(this.options.duration)):e(),l.off("click.offcanvas.amui"),n.off(".offcanvas.amui"))},c.prototype.bindEvents=function(){var t=this;return l.on("click.offcanvas.amui",'[data-am-dismiss="offcanvas"]',function(e){e.preventDefault(),t.close()}),r.on("resize.offcanvas.amui orientationchange.offcanvas.amui",function(){t.active&&t.close()}),this.$element.hammer().on("swipeleft swipeleft",function(e){e.preventDefault(),t.close()}),this},s.fn.offCanvas=n,l.on("click.offcanvas.amui","[data-am-offcanvas]",function(t){t.preventDefault();var e=s(this),i=o.utils.parseOptions(e.data("amOffcanvas")),a=s(i.target||this.href&&this.href.replace(/.*(?=#[^\s]+$)/,"")),r=a.data("amui.offcanvas")?"open":i;n.call(a,r,this)}),t.exports=o.offcanvas=c},function(t,e,i){"use strict";var n=i(1),s=i(2),o=s.utils.rAF,a=function(t){var e=function(e,i){this.el=t(e),this.zoomFactor=1,this.lastScale=1,this.offset={x:0,y:0},this.options=t.extend({},this.defaults,i),this.setupMarkup(),this.bindEvents(),this.update(),this.enable()},i=function(t,e){return t+e},n=function(t,e){return t>e-.01&&t<e+.01};e.prototype={defaults:{tapZoomFactor:2,zoomOutFactor:1.3,animationDuration:300,maxZoom:4,minZoom:.5,lockDragAxis:!1,use2d:!0,zoomStartEventName:"pz_zoomstart",zoomEndEventName:"pz_zoomend",dragStartEventName:"pz_dragstart",dragEndEventName:"pz_dragend",doubleTapEventName:"pz_doubletap"},handleDragStart:function(t){this.el.trigger(this.options.dragStartEventName),this.stopAnimation(),this.lastDragPosition=!1,this.hasInteraction=!0,this.handleDrag(t)},handleDrag:function(t){if(this.zoomFactor>1){var e=this.getTouches(t)[0];this.drag(e,this.lastDragPosition),this.offset=this.sanitizeOffset(this.offset),this.lastDragPosition=e}},handleDragEnd:function(){this.el.trigger(this.options.dragEndEventName),this.end()},handleZoomStart:function(t){this.el.trigger(this.options.zoomStartEventName),this.stopAnimation(),this.lastScale=1,this.nthZoom=0,this.lastZoomCenter=!1,this.hasInteraction=!0},handleZoom:function(t,e){var i=this.getTouchCenter(this.getTouches(t)),n=e/this.lastScale;this.lastScale=e,this.nthZoom+=1,this.nthZoom>3&&(this.scale(n,i),this.drag(i,this.lastZoomCenter)),this.lastZoomCenter=i},handleZoomEnd:function(){this.el.trigger(this.options.zoomEndEventName),this.end()},handleDoubleTap:function(t){var e=this.getTouches(t)[0],i=this.zoomFactor>1?1:this.options.tapZoomFactor,n=this.zoomFactor,s=function(t){this.scaleTo(n+t*(i-n),e)}.bind(this);this.hasInteraction||(n>i&&(e=this.getCurrentZoomCenter()),this.animate(this.options.animationDuration,s,this.swing),this.el.trigger(this.options.doubleTapEventName))},sanitizeOffset:function(t){var e=(this.zoomFactor-1)*this.getContainerX(),i=(this.zoomFactor-1)*this.getContainerY(),n=Math.max(e,0),s=Math.max(i,0),o=Math.min(e,0),a=Math.min(i,0);return{x:Math.min(Math.max(t.x,o),n),y:Math.min(Math.max(t.y,a),s)}},scaleTo:function(t,e){this.scale(t/this.zoomFactor,e)},scale:function(t,e){t=this.scaleZoomFactor(t),this.addOffset({x:(t-1)*(e.x+this.offset.x),y:(t-1)*(e.y+this.offset.y)})},scaleZoomFactor:function(t){var e=this.zoomFactor;return this.zoomFactor*=t,this.zoomFactor=Math.min(this.options.maxZoom,Math.max(this.zoomFactor,this.options.minZoom)),this.zoomFactor/e},drag:function(t,e){e&&(this.options.lockDragAxis?Math.abs(t.x-e.x)>Math.abs(t.y-e.y)?this.addOffset({x:-(t.x-e.x),y:0}):this.addOffset({y:-(t.y-e.y),x:0}):this.addOffset({y:-(t.y-e.y),x:-(t.x-e.x)}))},getTouchCenter:function(t){return this.getVectorAvg(t)},getVectorAvg:function(t){return{x:t.map(function(t){return t.x}).reduce(i)/t.length,y:t.map(function(t){return t.y}).reduce(i)/t.length}},addOffset:function(t){this.offset={x:this.offset.x+t.x,y:this.offset.y+t.y}},sanitize:function(){this.zoomFactor<this.options.zoomOutFactor?this.zoomOutAnimation():this.isInsaneOffset(this.offset)&&this.sanitizeOffsetAnimation()},isInsaneOffset:function(t){var e=this.sanitizeOffset(t);return e.x!==t.x||e.y!==t.y},sanitizeOffsetAnimation:function(){var t=this.sanitizeOffset(this.offset),e={x:this.offset.x,y:this.offset.y},i=function(i){this.offset.x=e.x+i*(t.x-e.x),this.offset.y=e.y+i*(t.y-e.y),this.update()}.bind(this);this.animate(this.options.animationDuration,i,this.swing)},zoomOutAnimation:function(){var t=this.zoomFactor,e=1,i=this.getCurrentZoomCenter(),n=function(n){this.scaleTo(t+n*(e-t),i)}.bind(this);this.animate(this.options.animationDuration,n,this.swing)},updateAspectRatio:function(){this.setContainerY(this.getContainerX()/this.getAspectRatio())},getInitialZoomFactor:function(){return this.container[0].offsetWidth/this.el[0].offsetWidth},getAspectRatio:function(){return this.el[0].offsetWidth/this.el[0].offsetHeight},getCurrentZoomCenter:function(){var t=this.container[0].offsetWidth*this.zoomFactor,e=this.offset.x,i=t-e-this.container[0].offsetWidth,n=e/i,s=n*this.container[0].offsetWidth/(n+1),o=this.container[0].offsetHeight*this.zoomFactor,a=this.offset.y,r=o-a-this.container[0].offsetHeight,l=a/r,c=l*this.container[0].offsetHeight/(l+1);return 0===i&&(s=this.container[0].offsetWidth),0===r&&(c=this.container[0].offsetHeight),{x:s,y:c}},canDrag:function(){return!n(this.zoomFactor,1)},getTouches:function(t){var e=this.container.offset();return Array.prototype.slice.call(t.touches).map(function(t){return{x:t.pageX-e.left,y:t.pageY-e.top}})},animate:function(t,e,i,n){var s=(new Date).getTime(),a=function(){if(this.inAnimation){var r=(new Date).getTime()-s,l=r/t;r>=t?(e(1),n&&n(),this.update(),this.stopAnimation(),this.update()):(i&&(l=i(l)),e(l),this.update(),o(a))}}.bind(this);this.inAnimation=!0,o(a)},stopAnimation:function(){this.inAnimation=!1},swing:function(t){return-Math.cos(t*Math.PI)/2+.5},getContainerX:function(){return this.container[0].offsetWidth},getContainerY:function(){return this.container[0].offsetHeight},setContainerY:function(t){return this.container.height(t)},setupMarkup:function(){this.container=t('<div class="pinch-zoom-container"></div>'),this.el.before(this.container),this.container.append(this.el),this.container.css({overflow:"hidden",position:"relative"}),this.el.css({"-webkit-transform-origin":"0% 0%","-moz-transform-origin":"0% 0%","-ms-transform-origin":"0% 0%","-o-transform-origin":"0% 0%","transform-origin":"0% 0%",position:"absolute"})},end:function(){this.hasInteraction=!1,this.sanitize(),this.update()},bindEvents:function(){s(this.container.get(0),this),t(window).on("resize",this.update.bind(this)),t(this.el).find("img").on("load",this.update.bind(this))},update:function(){this.updatePlaned||(this.updatePlaned=!0,setTimeout(function(){this.updatePlaned=!1,this.updateAspectRatio();var t=this.getInitialZoomFactor()*this.zoomFactor,e=-this.offset.x/t,i=-this.offset.y/t,n="scale3d("+t+", "+t+",1) translate3d("+e+"px,"+i+"px,0px)",s="scale("+t+", "+t+") translate("+e+"px,"+i+"px)",o=function(){this.clone&&(this.clone.remove(),delete this.clone)}.bind(this);!this.options.use2d||this.hasInteraction||this.inAnimation?(this.is3d=!0,o(),this.el.css({"-webkit-transform":n,"-o-transform":s,"-ms-transform":s,"-moz-transform":s,transform:n})):(this.is3d&&(this.clone=this.el.clone(),this.clone.css("pointer-events","none"),this.clone.appendTo(this.container),setTimeout(o,200)),this.el.css({"-webkit-transform":s,"-o-transform":s,"-ms-transform":s,"-moz-transform":s,transform:s}),this.is3d=!1)}.bind(this),0))},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1}};var s=function(t,e){var i=null,n=0,s=null,o=null,a=function(t,n){if(i!==t){if(i&&!t)switch(i){case"zoom":e.handleZoomEnd(n);break;case"drag":e.handleDragEnd(n)}switch(t){case"zoom":e.handleZoomStart(n);break;case"drag":e.handleDragStart(n)}}i=t},r=function(t){2===n?a("zoom"):1===n&&e.canDrag()?a("drag",t):a(null,t)},l=function(t){return Array.prototype.slice.call(t).map(function(t){return{x:t.pageX,y:t.pageY}})},c=function(t,e){var i,n;return i=t.x-e.x,n=t.y-e.y,Math.sqrt(i*i+n*n)},u=function(t,e){var i=c(t[0],t[1]),n=c(e[0],e[1]);return n/i},h=function(t){t.stopPropagation(),t.preventDefault()},d=function(t){var o=(new Date).getTime();if(n>1&&(s=null),o-s<300)switch(h(t),e.handleDoubleTap(t),i){case"zoom":e.handleZoomEnd(t);break;case"drag":e.handleDragEnd(t)}1===n&&(s=o)},p=!0;t.addEventListener("touchstart",function(t){e.enabled&&(p=!0,n=t.touches.length,d(t))}),t.addEventListener("touchmove",function(t){if(e.enabled){if(p)r(t),i&&h(t),o=l(t.touches);else{switch(i){case"zoom":e.handleZoom(t,u(o,l(t.touches)));break;case"drag":e.handleDrag(t)}i&&(h(t),e.update())}p=!1}}),t.addEventListener("touchend",function(t){e.enabled&&(n=t.touches.length,r(t))})};return e};t.exports=s.pichzoom=a(n)},function(t,e,i){"use strict";var n=i(1),s=i(2),o=n(window),a=function(t,e){this.options=n.extend({},a.DEFAULTS,e),this.$element=n(t),this.active=null,this.$popover=this.options.target&&n(this.options.target)||null,this.init(),this._bindEvents()};a.DEFAULTS={theme:null,trigger:"click",content:"",open:!1,target:null,tpl:'<div class="am-popover"><div class="am-popover-inner"></div><div class="am-popover-caret"></div></div>'},a.prototype.init=function(){function t(){i.sizePopover()}var e,i=this,o=this.$element;this.options.target||(this.$popover=this.getPopover(),this.setContent()),e=this.$popover,e.appendTo(n("body")),this.sizePopover(),o.on("open.popover.amui",function(){n(window).on("resize.popover.amui",s.utils.debounce(t,50))}),o.on("close.popover.amui",function(){n(window).off("resize.popover.amui",t)}),this.options.open&&this.open()},a.prototype.sizePopover=function(){var t=this.$element,e=this.$popover;if(e&&e.length){var i=e.outerWidth(),n=e.outerHeight(),s=e.find(".am-popover-caret"),a=s.outerWidth()/2||8,r=n+8,l=t.outerWidth(),c=t.outerHeight(),u=t.offset(),h=t[0].getBoundingClientRect(),d=o.height(),p=o.width(),m=0,f=0,v=0,g=2,y="top";e.css({left:"",top:""}).removeClass("am-popover-left am-popover-right am-popover-top am-popover-bottom"),r-g<h.top+g?m=u.top-r-g:r<d-h.top-h.height?(y="bottom",m=u.top+c+a+g):(y="middle",m=c/2+u.top-n/2),"top"===y||"bottom"===y?(f=l/2+u.left-i/2,v=f,f<5&&(f=5),f+i>p&&(f=p-i-20),"top"===y&&e.addClass("am-popover-top"),"bottom"===y&&e.addClass("am-popover-bottom"),v-=f):"middle"===y&&(f=u.left-i-a,e.addClass("am-popover-left"),f<5&&(f=u.left+l+a,e.removeClass("am-popover-left").addClass("am-popover-right")),f+i>p&&(f=p-i-5,e.removeClass("am-popover-left").addClass("am-popover-right"))),e.css({top:m+"px",left:f+"px"})}},a.prototype.toggle=function(){return this[this.active?"close":"open"]()},a.prototype.open=function(){var t=this.$popover;this.$element.trigger("open.popover.amui"),this.sizePopover(),t.show().addClass("am-active"),this.active=!0},a.prototype.close=function(){var t=this.$popover;this.$element.trigger("close.popover.amui"),t.removeClass("am-active").trigger("closed.popover.amui").hide(),this.active=!1},a.prototype.getPopover=function(){var t=s.utils.generateGUID("am-popover"),e=[];return this.options.theme&&n.each(this.options.theme.split(" "),function(t,i){e.push("am-popover-"+n.trim(i))}),n(this.options.tpl).attr("id",t).addClass(e.join(" "))},a.prototype.setContent=function(t){t=t||this.options.content,this.$popover&&this.$popover.find(".am-popover-inner").empty().html(t)},a.prototype._bindEvents=function(){for(var t="popover.amui",e=this.options.trigger.split(" "),i=e.length;i--;){var s=e[i];if("click"===s)this.$element.on("click."+t,n.proxy(this.toggle,this));else{var o="hover"==s?"mouseenter":"focusin",a="hover"==s?"mouseleave":"focusout";this.$element.on(o+"."+t,n.proxy(this.open,this)),this.$element.on(a+"."+t,n.proxy(this.close,this))}}},a.prototype.destroy=function(){this.$element.off(".popover.amui").removeData("amui.popover"),this.$popover.remove()},s.plugin("popover",a),s.ready(function(t){n("[data-am-popover]",t).popover()}),t.exports=a},function(t,e,i){"use strict";var n=i(2),s=function(){function t(t,e,i){return t<e?e:t>i?i:t}function e(t){return 100*(-1+t)}function i(t,i,n){var s;return s="translate3d"===c.positionUsing?{transform:"translate3d("+e(t)+"%,0,0)"}:"translate"===c.positionUsing?{transform:"translate("+e(t)+"%,0)"}:{"margin-left":e(t)+"%"},s.transition="all "+i+"ms "+n,s}function n(t,e){var i="string"==typeof t?t:a(t);return i.indexOf(" "+e+" ")>=0}function s(t,e){var i=a(t),s=i+e;n(i,e)||(t.className=s.substring(1))}function o(t,e){var i,s=a(t);n(t,e)&&(i=s.replace(" "+e+" "," "),t.className=i.substring(1,i.length-1))}function a(t){return(" "+(t.className||"")+" ").replace(/\s+/gi," ")}function r(t){t&&t.parentNode&&t.parentNode.removeChild(t)}var l={};l.version="0.2.0";var c=l.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,parent:"body",barSelector:'[role="nprogress-bar"]',spinnerSelector:'[role="nprogress-spinner"]',template:'<div class="nprogress-bar" role="nprogress-bar"><div class="nprogress-peg"></div></div><div class="nprogress-spinner" role="nprogress-spinner"><div class="nprogress-spinner-icon"></div></div>'};l.configure=function(t){var e,i;for(e in t)i=t[e],void 0!==i&&t.hasOwnProperty(e)&&(c[e]=i);return this},l.status=null,l.set=function(e){var n=l.isStarted();e=t(e,c.minimum,1),l.status=1===e?null:e;var s=l.render(!n),o=s.querySelector(c.barSelector),a=c.speed,r=c.easing;return s.offsetWidth,u(function(t){""===c.positionUsing&&(c.positionUsing=l.getPositioningCSS()),h(o,i(e,a,r)),1===e?(h(s,{transition:"none",opacity:1}),s.offsetWidth,setTimeout(function(){h(s,{transition:"all "+a+"ms linear",opacity:0}),setTimeout(function(){l.remove(),t()},a)},a)):setTimeout(t,a)}),this},l.isStarted=function(){return"number"==typeof l.status},l.start=function(){l.status||l.set(0);var t=function(){setTimeout(function(){l.status&&(l.trickle(),t())},c.trickleSpeed)};return c.trickle&&t(),this},l.done=function(t){return t||l.status?l.inc(.3+.5*Math.random()).set(1):this},l.inc=function(e){var i=l.status;return i?("number"!=typeof e&&(e=(1-i)*t(Math.random()*i,.1,.95)),i=t(i+e,0,.994),l.set(i)):l.start()},l.trickle=function(){return l.inc(Math.random()*c.trickleRate)},function(){var t=0,e=0;l.promise=function(i){return i&&"resolved"!==i.state()?(0===e&&l.start(),t++,e++,i.always(function(){e--,0===e?(t=0,l.done()):l.set((t-e)/t)}),this):this}}(),l.render=function(t){if(l.isRendered())return document.getElementById("nprogress");s(document.documentElement,"nprogress-busy");var i=document.createElement("div");i.id="nprogress",i.innerHTML=c.template;var n,o=i.querySelector(c.barSelector),a=t?"-100":e(l.status||0),u=document.querySelector(c.parent);return h(o,{transition:"all 0 linear",transform:"translate3d("+a+"%,0,0)"}),c.showSpinner||(n=i.querySelector(c.spinnerSelector),n&&r(n)),u!=document.body&&s(u,"nprogress-custom-parent"),u.appendChild(i),i},l.remove=function(){o(document.documentElement,"nprogress-busy"),o(document.querySelector(c.parent),"nprogress-custom-parent");var t=document.getElementById("nprogress");t&&r(t)},l.isRendered=function(){return!!document.getElementById("nprogress")},l.getPositioningCSS=function(){var t=document.body.style,e="WebkitTransform"in t?"Webkit":"MozTransform"in t?"Moz":"msTransform"in t?"ms":"OTransform"in t?"O":"";return e+"Perspective"in t?"translate3d":e+"Transform"in t?"translate":"margin"};var u=function(){function t(){var i=e.shift();i&&i(t)}var e=[];return function(i){e.push(i),1==e.length&&t()}}(),h=function(){function t(t){return t.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(t,e){return e.toUpperCase()})}function e(t){var e=document.body.style;if(t in e)return t;for(var i,n=s.length,o=t.charAt(0).toUpperCase()+t.slice(1);n--;)if(i=s[n]+o,i in e)return i;return t}function i(i){return i=t(i),o[i]||(o[i]=e(i))}function n(t,e,n){e=i(e),t.style[e]=n}var s=["Webkit","O","Moz","ms"],o={};return function(t,e){var i,s,o=arguments;if(2==o.length)for(i in e)s=e[i],void 0!==s&&e.hasOwnProperty(i)&&n(t,i,s);else n(t,o[1],o[2])}}();return l}();t.exports=n.progress=s},function(t,e,i){"use strict";var n=i(1),s=i(2),o=i(17),a=i(3),r=s.support.animation,l=s.support.transition,c=function(t,e){this.$element=n(t),this.$body=n(document.body),this.options=n.extend({},c.DEFAULTS,e),this.$pureview=n(this.options.tpl).attr("id",s.utils.generateGUID("am-pureview")),this.$slides=null,this.transitioning=null,this.scrollbarWidth=0,this.init()};c.DEFAULTS={tpl:'<div class="am-pureview am-pureview-bar-active"><ul class="am-pureview-slider"></ul><ul class="am-pureview-direction"><li class="am-pureview-prev"><a href=""></a></li><li class="am-pureview-next"><a href=""></a></li></ul><ol class="am-pureview-nav"></ol><div class="am-pureview-bar am-active"><span class="am-pureview-title"></span><div class="am-pureview-counter"><span class="am-pureview-current"></span> / <span class="am-pureview-total"></span></div></div><div class="am-pureview-actions am-active"><a href="javascript: void(0)" class="am-icon-chevron-left" data-am-close="pureview"></a></div></div>',className:{prevSlide:"am-pureview-slide-prev",nextSlide:"am-pureview-slide-next",onlyOne:"am-pureview-only",active:"am-active",barActive:"am-pureview-bar-active",activeBody:"am-pureview-active"},selector:{slider:".am-pureview-slider",close:'[data-am-close="pureview"]',total:".am-pureview-total",current:".am-pureview-current",title:".am-pureview-title",actions:".am-pureview-actions",
bar:".am-pureview-bar",pinchZoom:".am-pinch-zoom",nav:".am-pureview-nav"},shareBtn:!1,toggleToolbar:!0,target:"img",weChatImagePreview:!0},c.prototype.init=function(){var t=this,e=this.options,i=this.$element,s=this.$pureview;this.refreshSlides(),n("body").append(s),this.$title=s.find(e.selector.title),this.$current=s.find(e.selector.current),this.$bar=s.find(e.selector.bar),this.$actions=s.find(e.selector.actions),e.shareBtn&&this.$actions.append('<a href="javascript: void(0)" class="am-icon-share-square-o" data-am-toggle="share"></a>'),this.$element.on("click.pureview.amui",e.target,function(i){i.preventDefault();var n=t.$images.index(this);e.weChatImagePreview&&window.WeixinJSBridge?window.WeixinJSBridge.invoke("imagePreview",{current:t.imgUrls[n],urls:t.imgUrls}):t.open(n)}),s.find(".am-pureview-direction").on("click.direction.pureview.amui","li",function(e){e.preventDefault(),n(this).is(".am-pureview-prev")?t.prevSlide():t.nextSlide()}),s.find(e.selector.nav).on("click.nav.pureview.amui","li",function(){var e=t.$navItems.index(n(this));t.activate(t.$slides.eq(e))}),s.find(e.selector.close).on("click.close.pureview.amui",function(e){e.preventDefault(),t.close()}),this.$slider.hammer().on("swipeleft.pureview.amui",function(e){e.preventDefault(),t.nextSlide()}).on("swiperight.pureview.amui",function(e){e.preventDefault(),t.prevSlide()}).on("press.pureview.amui",function(i){i.preventDefault(),e.toggleToolbar&&t.toggleToolBar()}),this.$slider.data("hammer").get("swipe").set({direction:a.DIRECTION_HORIZONTAL,velocity:.35}),i.DOMObserve({childList:!0,subtree:!0},function(t,e){}),i.on("changed.dom.amui",function(e){e.stopPropagation(),t.refreshSlides()}),n(document).on("keydown.pureview.amui",n.proxy(function(t){var e=t.keyCode;37==e?this.prevSlide():39==e?this.nextSlide():27==e&&this.close()},this))},c.prototype.refreshSlides=function(){this.$images=this.$element.find(this.options.target);var t=this,e=this.options,i=this.$pureview,o=n([]),a=n([]),r=this.$images,l=r.length;this.$slider=i.find(e.selector.slider),this.$nav=i.find(e.selector.nav);var c="data-am-pureviewed";this.imgUrls=this.imgUrls||[],l&&(1===l&&i.addClass(e.className.onlyOne),r.not("["+c+"]").each(function(e,i){var r,l;"A"===i.nodeName?(r=i.href,l=i.title||""):(r=n(i).data("rel")||i.src,r=s.utils.getAbsoluteUrl(r),l=n(i).attr("alt")||""),i.setAttribute(c,"1"),t.imgUrls.push(r),o=o.add(n('<li data-src="'+r+'" data-title="'+l+'"></li>')),a=a.add(n("<li>"+(e+1)+"</li>"))}),i.find(e.selector.total).text(l),this.$slider.append(o),this.$nav.append(a),this.$navItems=this.$nav.find("li"),this.$slides=this.$slider.find("li"))},c.prototype.loadImage=function(t,e){var i="image-appended";if(!t.data(i)){var s=n("<img>",{src:t.data("src"),alt:t.data("title")});t.html(s).wrapInner('<div class="am-pinch-zoom"></div>').redraw();var a=t.find(this.options.selector.pinchZoom);a.data("amui.pinchzoom",new o(a[0],{})),t.data("image-appended",!0)}e&&e.call(this)},c.prototype.activate=function(t){var e=this.options,i=this.$slides,o=i.index(t),a=t.data("title")||"",r=e.className.active;i.find("."+r).is(t)||this.transitioning||(this.loadImage(t,function(){s.utils.imageLoader(t.find("img"),function(e){t.find(".am-pinch-zoom").addClass("am-pureview-loaded"),n(e).addClass("am-img-loaded")})}),this.transitioning=1,this.$title.text(a),this.$current.text(o+1),i.removeClass(),t.addClass(r),i.eq(o-1).addClass(e.className.prevSlide),i.eq(o+1).addClass(e.className.nextSlide),this.$navItems.removeClass().eq(o).addClass(e.className.active),l?t.one(l.end,n.proxy(function(){this.transitioning=0},this)).emulateTransitionEnd(300):this.transitioning=0)},c.prototype.nextSlide=function(){if(1!==this.$slides.length){var t=this.$slides,e=t.filter(".am-active"),i=t.index(e),n="am-animation-right-spring";i+1>=t.length?r&&e.addClass(n).on(r.end,function(){e.removeClass(n)}):this.activate(t.eq(i+1))}},c.prototype.prevSlide=function(){if(1!==this.$slides.length){var t=this.$slides,e=t.filter(".am-active"),i=this.$slides.index(e),n="am-animation-left-spring";0===i?r&&e.addClass(n).on(r.end,function(){e.removeClass(n)}):this.activate(t.eq(i-1))}},c.prototype.toggleToolBar=function(){this.$pureview.toggleClass(this.options.className.barActive)},c.prototype.open=function(t){var e=t||0;this.checkScrollbar(),this.setScrollbar(),this.activate(this.$slides.eq(e)),this.$pureview.show().redraw().addClass(this.options.className.active),this.$body.addClass(this.options.className.activeBody)},c.prototype.close=function(){function t(){this.$pureview.hide(),this.$body.removeClass(e.className.activeBody),this.resetScrollbar()}var e=this.options;this.$pureview.removeClass(e.className.active),this.$slides.removeClass(),l?this.$pureview.one(l.end,n.proxy(t,this)).emulateTransitionEnd(300):t.call(this)},c.prototype.checkScrollbar=function(){this.scrollbarWidth=s.utils.measureScrollbar()},c.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.scrollbarWidth&&this.$body.css("padding-right",t+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},s.plugin("pureview",c),s.ready(function(t){n("[data-am-pureview]",t).pureview()}),t.exports=c},function(t,e,i){"use strict";var n=i(1),s=i(2),o=function(t,e){if(s.support.animation){this.options=n.extend({},o.DEFAULTS,e),this.$element=n(t);var i=function(){s.utils.rAF.call(window,n.proxy(this.checkView,this))}.bind(this);this.$window=n(window).on("scroll.scrollspy.amui",i).on("resize.scrollspy.amui orientationchange.scrollspy.amui",s.utils.debounce(i,50)),this.timer=this.inViewState=this.initInView=null,i()}};o.DEFAULTS={animation:"fade",className:{inView:"am-scrollspy-inview",init:"am-scrollspy-init"},repeat:!0,delay:0,topOffset:0,leftOffset:0},o.prototype.checkView=function(){var t=this.$element,e=this.options,i=s.utils.isInView(t,e),n=e.animation?" am-animation-"+e.animation:"";i&&!this.inViewState&&(this.timer&&clearTimeout(this.timer),this.initInView||(t.addClass(e.className.init),this.offset=t.offset(),this.initInView=!0,t.trigger("init.scrollspy.amui")),this.timer=setTimeout(function(){i&&t.addClass(e.className.inView+n).width()},e.delay),this.inViewState=!0,t.trigger("inview.scrollspy.amui")),!i&&this.inViewState&&e.repeat&&(t.removeClass(e.className.inView+n),this.inViewState=!1,t.trigger("outview.scrollspy.amui"))},o.prototype.check=function(){s.utils.rAF.call(window,n.proxy(this.checkView,this))},s.plugin("scrollspy",o),s.ready(function(t){n("[data-am-scrollspy]",t).scrollspy()}),t.exports=o},function(t,e,i){"use strict";var n=i(1),s=i(2);i(23);var o=function(t,e){this.options=n.extend({},o.DEFAULTS,e),this.$element=n(t),this.anchors=[],this.$links=this.$element.find('a[href^="#"]').each(function(t,e){this.anchors.push(n(e).attr("href"))}.bind(this)),this.$targets=n(this.anchors.join(", "));var i=function(){s.utils.rAF.call(window,n.proxy(this.process,this))}.bind(this);this.$window=n(window).on("scroll.scrollspynav.amui",i).on("resize.scrollspynav.amui orientationchange.scrollspynav.amui",s.utils.debounce(i,50)),i(),this.scrollProcess()};o.DEFAULTS={className:{active:"am-active"},closest:!1,smooth:!0,offsetTop:0},o.prototype.process=function(){var t=this.$window.scrollTop(),e=this.options,i=[],o=this.$links,a=this.$targets;if(a.each(function(t,n){s.utils.isInView(n,e)&&i.push(n)}),i.length){var r;if(n.each(i,function(e,i){if(n(i).offset().top>=t)return r=n(i),!1}),!r)return;e.closest?(o.closest(e.closest).removeClass(e.className.active),o.filter('a[href="#'+r.attr("id")+'"]').closest(e.closest).addClass(e.className.active)):o.removeClass(e.className.active).filter('a[href="#'+r.attr("id")+'"]').addClass(e.className.active)}},o.prototype.scrollProcess=function(){var t=this.$links,e=this.options;e.smooth&&n.fn.smoothScroll&&t.on("click",function(t){t.preventDefault();var i=n(this),s=n(i.attr("href"));if(s){var o=e.offsetTop&&!isNaN(parseInt(e.offsetTop))&&parseInt(e.offsetTop)||0;n(window).smoothScroll({position:s.offset().top-o})}})},s.plugin("scrollspynav",o),s.ready(function(t){n("[data-am-scrollspynav]",t).scrollspynav()}),t.exports=o},function(t,e,i){"use strict";var n=i(1),s=i(2),o=s.utils.rAF,a=s.utils.cancelAF,r=!1,l=function(t,e){function i(t){return(t/=.5)<1?.5*Math.pow(t,5):.5*(Math.pow(t-2,5)+2)}function s(){p.off("touchstart.smoothscroll.amui",w),r=!1}function c(t){r&&(u||(u=t),h=Math.min(1,Math.max((t-u)/y,0)),d=Math.round(f+g*i(h)),g>0&&d>m&&(d=m),g<0&&d<m&&(d=m),v!=d&&p.scrollTop(d),v=d,d!==m?(a(b),b=o(c)):(a(b),s()))}e=e||{};var u,h,d,p=n(t),m=parseInt(e.position)||l.DEFAULTS.position,f=p.scrollTop(),v=f,g=m-f,y=e.speed||Math.min(750,Math.min(1500,Math.abs(f-m))),w=function(){s()};if(!r&&0!==g){p.on("touchstart.smoothscroll.amui",w),r=!0;var b=o(c)}};l.DEFAULTS={position:0},n.fn.smoothScroll=function(t){return this.each(function(){new l(this,t)})},n(document).on("click.smoothScroll.amui.data-api","[data-am-smooth-scroll]",function(t){t.preventDefault();var e=s.utils.parseOptions(n(this).data("amSmoothScroll"));n(window).smoothScroll(e)}),t.exports=l},function(t,e,i){"use strict";var n=i(1),s=i(2);n.expr[":"].containsNC=function(t,e,i,n){return(t.textContent||t.innerText||"").toLowerCase().indexOf((i[3]||"").toLowerCase())>=0};var o=function(t,e){this.$element=n(t),this.options=n.extend({},o.DEFAULTS,{placeholder:t.getAttribute("placeholder")||o.DEFAULTS.placeholder},e),this.$originalOptions=this.$element.find("option"),this.multiple=t.multiple,this.$selector=null,this.initialized=!1,this.init()};o.DEFAULTS={btnWidth:null,btnSize:null,btnStyle:"default",dropUp:0,maxHeight:null,maxChecked:null,placeholder:"\u70b9\u51fb\u9009\u62e9...",selectedClass:"am-checked",disabledClass:"am-disabled",searchBox:!1,tpl:'<div class="am-selected am-dropdown <%= dropUp ? \'am-dropdown-up\': \'\' %>" id="<%= id %>" data-am-dropdown>  <button type="button" class="am-selected-btn am-btn am-dropdown-toggle">    <span class="am-selected-status am-fl"></span>    <i class="am-selected-icon am-icon-caret-<%= dropUp ? \'up\' : \'down\' %>"></i>  </button>  <div class="am-selected-content am-dropdown-content">    <h2 class="am-selected-header"><span class="am-icon-chevron-left">\u8fd4\u56de</span></h2>   <% if (searchBox) { %>   <div class="am-selected-search">     <input autocomplete="off" class="am-form-field am-input-sm" />   </div>   <% } %>    <ul class="am-selected-list">      <% for (var i = 0; i < options.length; i++) { %>       <% var option = options[i] %>       <% if (option.header) { %>  <li data-group="<%= option.group %>" class="am-selected-list-header">       <%= option.text %></li>       <% } else { %>       <li class="<%= option.classNames%>"          data-index="<%= option.index %>"          data-group="<%= option.group || 0 %>"          data-value="<%= option.value %>" >         <span class="am-selected-text"><%= option.text %></span>         <i class="am-icon-check"></i></li>      <% } %>      <% } %>    </ul>    <div class="am-selected-hint"></div>  </div></div>',listTpl:'<% for (var i = 0; i < options.length; i++) { %>       <% var option = options[i] %>       <% if (option.header) { %>  <li data-group="<%= option.group %>" class="am-selected-list-header">       <%= option.text %></li>       <% } else { %>       <li class="<%= option.classNames %>"          data-index="<%= option.index %>"          data-group="<%= option.group || 0 %>"          data-value="<%= option.value %>" >         <span class="am-selected-text"><%= option.text %></span>         <i class="am-icon-check"></i></li>      <% } %>      <% } %>'},o.prototype.init=function(){var t=this,e=this.$element,i=this.options;e.hide();var o={id:s.utils.generateGUID("am-selected"),multiple:this.multiple,options:[],searchBox:i.searchBox,dropUp:i.dropUp,placeholder:i.placeholder};this.$selector=n(s.template(this.options.tpl,o)),this.$selector.css({width:this.options.btnWidth}),this.$list=this.$selector.find(".am-selected-list"),this.$searchField=this.$selector.find(".am-selected-search input"),this.$hint=this.$selector.find(".am-selected-hint");var a=this.$selector.find(".am-selected-btn"),r=[];i.btnSize&&r.push("am-btn-"+i.btnSize),i.btnStyle&&r.push("am-btn-"+i.btnStyle),a.addClass(r.join(" ")),this.$selector.dropdown({justify:a}),e[0].disabled&&this.disable(),i.maxHeight&&this.$selector.find(".am-selected-list").css({"max-height":i.maxHeight,"overflow-y":"scroll"});var l=[],c=e.attr("minchecked"),u=e.attr("maxchecked")||i.maxChecked;this.maxChecked=u||1/0,e[0].required&&l.push("\u5fc5\u9009"),(c||u)&&(c&&l.push("\u81f3\u5c11\u9009\u62e9 "+c+" \u9879"),u&&l.push("\u81f3\u591a\u9009\u62e9 "+u+" \u9879")),this.$hint.text(l.join("\uff0c")),this.renderOptions(),this.$element.after(this.$selector),this.dropdown=this.$selector.data("amui.dropdown"),this.$status=this.$selector.find(".am-selected-status"),setTimeout(function(){t.syncData(),t.initialized=!0},0),this.bindEvents()},o.prototype.renderOptions=function(){function t(t,e,s){if(""===e.value)return!0;var o="";e.disabled&&(o+=i.disabledClass),!e.disabled&&e.selected&&(o+=i.selectedClass),n.push({group:s,index:t,classNames:o,text:e.text,value:e.value})}var e=this.$element,i=this.options,n=[],o=e.find("optgroup");this.$originalOptions=this.$element.find("option"),this.multiple||null!==e.val()||this.$originalOptions.length&&(this.$originalOptions.get(0).selected=!0),o.length?o.each(function(e){n.push({header:!0,group:e+1,text:this.label}),o.eq(e).find("option").each(function(i,n){t(i,n,e)})}):this.$originalOptions.each(function(e,i){t(e,i,null)}),this.$list.html(s.template(i.listTpl,{options:n})),this.$shadowOptions=this.$list.find("> li").not(".am-selected-list-header")},o.prototype.setChecked=function(t){var e=this.options,i=n(t),s=i.hasClass(e.selectedClass);if(this.multiple){var o=this.$list.find("."+e.selectedClass).length;if(!s&&this.maxChecked<=o)return this.$element.trigger("checkedOverflow.selected.amui",{selected:this}),!1}else{if(this.dropdown.close(),s)return!1;this.$shadowOptions.not(i).removeClass(e.selectedClass)}i.toggleClass(e.selectedClass),this.syncData(t)},o.prototype.syncData=function(t){var e=this,i=this.options,s=[],o=n([]);if(this.$shadowOptions.filter("."+i.selectedClass).each(function(){var i=n(this);s.push(i.find(".am-selected-text").text()),t||(o=o.add(e.$originalOptions.filter('[value="'+i.data("value")+'"]').prop("selected",!0)))}),t){var a=n(t);this.$originalOptions.filter('[value="'+a.data("value")+'"]').prop("selected",a.hasClass(i.selectedClass))}else this.$originalOptions.not(o).prop("selected",!1);this.$element.val()||(s=[i.placeholder]),this.$status.text(s.join(", ")),this.initialized&&this.$element.trigger("change")},o.prototype.bindEvents=function(){var t=this,e="am-selected-list-header",i=s.utils.debounce(function(i){t.$shadowOptions.not("."+e).hide().filter(':containsNC("'+i.target.value+'")').show()},100);this.$list.on("click","> li",function(i){var s=n(this);!s.hasClass(t.options.disabledClass)&&!s.hasClass(e)&&t.setChecked(this)}),this.$searchField.on("keyup.selected.amui",i),this.$selector.on("closed.dropdown.amui",function(){t.$searchField.val(""),t.$shadowOptions.css({display:""})}),this.$element.on("validated.field.validator.amui",function(e){if(e.validity){var i=e.validity.valid,n="am-invalid";t.$selector[(i?"remove":"add")+"Class"](n)}}),s.support.mutationobserver&&(this.observer=new s.support.mutationobserver(function(){t.$element.trigger("changed.selected.amui")}),this.observer.observe(this.$element[0],{childList:!0,subtree:!0,characterData:!0})),this.$element.on("changed.selected.amui",function(){t.renderOptions(),t.syncData()})},o.prototype.select=function(t){var e;e="number"==typeof t?this.$list.find("> li").not(".am-selected-list-header").eq(t):"string"==typeof t?this.$list.find(t):n(t),e.trigger("click")},o.prototype.enable=function(){this.$element.prop("disable",!1),this.$selector.dropdown("enable")},o.prototype.disable=function(){this.$element.prop("disable",!0),this.$selector.dropdown("disable")},o.prototype.destroy=function(){this.$element.removeData("amui.selected").show(),this.$selector.remove()},s.plugin("selected",o),s.ready(function(t){n("[data-am-selected]",t).selected()}),t.exports=o},function(t,e,i){"use strict";i(15);var n=i(1),s=i(2),o=i(26),a=document,r=n(a),l=function(t){this.options=n.extend({},l.DEFAULTS,t||{}),this.$element=null,this.$wechatQr=null,this.pics=null,this.inited=!1,this.active=!1};l.DEFAULTS={sns:["weibo","qq","qzone","tqq","wechat","renren"],title:"\u5206\u4eab\u5230",cancel:"\u53d6\u6d88",closeOnShare:!0,id:s.utils.generateGUID("am-share"),desc:"Hi\uff0c\u5b64\u591c\u89c2\u5929\u8c61\uff0c\u53d1\u73b0\u4e00\u4e2a\u4e0d\u9519\u7684\u897f\u897f\uff0c\u5206\u4eab\u4e00\u4e0b\u4e0b ;-)",via:"Amaze UI",tpl:'<div class="am-share am-modal-actions" id="<%= id %>"><h3 class="am-share-title"><%= title %></h3><ul class="am-share-sns am-avg-sm-3"><% for(var i = 0; i < sns.length; i++) {%><li><a href="<%= sns[i].shareUrl %>" data-am-share-to="<%= sns[i].id %>" ><i class="am-icon-<%= sns[i].icon %>"></i><span><%= sns[i].title %></span></a></li><% } %></ul><div class="am-share-footer"><button class="am-btn am-btn-default am-btn-block" data-am-share-close><%= cancel %></button></div></div>'},l.SNS={weibo:{title:"\u65b0\u6d6a\u5fae\u535a",url:"http://service.weibo.com/share/share.php",width:620,height:450,icon:"weibo"},qq:{title:"QQ \u597d\u53cb",url:"http://connect.qq.com/widget/shareqq/index.html",icon:"qq"},qzone:{title:"QQ \u7a7a\u95f4",url:"http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey",icon:"star"},tqq:{title:"\u817e\u8baf\u5fae\u535a",url:"http://v.t.qq.com/share/share.php",icon:"tencent-weibo"},wechat:{title:"\u5fae\u4fe1",url:"[qrcode]",icon:"wechat"},renren:{title:"\u4eba\u4eba\u7f51",url:"http://widget.renren.com/dialog/share",icon:"renren"},douban:{title:"\u8c46\u74e3",url:"http://www.douban.com/recommend/",icon:"share-alt"},mail:{title:"\u90ae\u4ef6\u5206\u4eab",url:"mailto:",icon:"envelope-o"},sms:{title:"\u77ed\u4fe1\u5206\u4eab",url:"sms:",icon:"comment"}},l.prototype.render=function(){var t=this.options,e=[],i=encodeURIComponent(a.title),o=encodeURIComponent(a.location),r="?body="+i+o;return t.sns.forEach(function(n,s){if(l.SNS[n]){var a,c=l.SNS[n];c.id=n,a="mail"===n?r+"&subject="+t.desc:"sms"===n?r:"?url="+o+"&title="+i,c.shareUrl=c.url+a,e.push(c)}}),s.template(t.tpl,n.extend({},t,{sns:e}))},l.prototype.init=function(){if(!this.inited){var t=this,e="[data-am-share-to]";r.ready(n.proxy(function(){n("body").append(this.render()),this.$element=n("#"+this.options.id),this.$element.find("[data-am-share-close]").on("click.share.amui",function(){t.close()})},this)),r.on("click.share.amui",e,n.proxy(function(t){var i=n(t.target),s=i.is(e)&&i||i.parent(e),o=s.attr("data-am-share-to");"mail"!==o&&"sms"!==o&&(t.preventDefault(),this.shareTo(o,this.setData(o))),this.close()},this)),this.inited=!0}},l.prototype.open=function(){!this.inited&&this.init(),this.$element&&this.$element.modal("open"),this.$element.trigger("open.share.amui"),this.active=!0},l.prototype.close=function(){this.$element&&this.$element.modal("close"),this.$element.trigger("close.share.amui"),this.active=!1},l.prototype.toggle=function(){this.active?this.close():this.open()},l.prototype.setData=function(t){if(t){var e={url:a.location,title:a.title},i=this.options.desc,n=this.pics||[],s=/^(qzone|qq|tqq)$/;if(s.test(t)&&!n.length){for(var o=a.images,r=0;r<o.length&&r<10;r++)!!o[r].src&&n.push(encodeURIComponent(o[r].src));this.pics=n}switch(t){case"qzone":e.desc=i,e.site=this.options.via,e.pics=n.join("|");break;case"qq":e.desc=i,e.site=this.options.via,e.pics=n[0];break;case"tqq":e.pic=n.join("|")}return e}},l.prototype.shareTo=function(t,e){var i=l.SNS[t];if(i){if("wechat"===t||"weixin"===t)return this.wechatQr();var n=[];for(var s in e)e[s]&&n.push(s.toString()+"="+("pic"===s||"pics"===s?e[s]:encodeURIComponent(e[s])));window.open(i.url+"?"+n.join("&"))}},l.prototype.wechatQr=function(){if(!this.$wechatQr){var t=s.utils.generateGUID("am-share-wechat"),e=n('<div class="am-modal am-modal-no-btn am-share-wechat-qr"><div class="am-modal-dialog"><div class="am-modal-hd">\u5206\u4eab\u5230\u5fae\u4fe1 <a href="" class="am-close am-close-spin" data-am-modal-close>&times;</a> </div><div class="am-modal-bd"><div class="am-share-wx-qr"></div><div class="am-share-wechat-tip">\u6253\u5f00\u5fae\u4fe1\uff0c\u70b9\u51fb\u5e95\u90e8\u7684<em>\u53d1\u73b0</em>\uff0c<br/> \u4f7f\u7528<em>\u626b\u4e00\u626b</em>\u5c06\u7f51\u9875\u5206\u4eab\u81f3\u670b\u53cb\u5708</div></div></div></div>');e.attr("id",t);var i=new o({render:"canvas",correctLevel:0,text:a.location.href,width:180,height:180,background:"#fff",foreground:"#000"});e.find(".am-share-wx-qr").html(i),e.appendTo(n("body")),this.$wechatQr=n("#"+t)}this.$wechatQr.modal("open")};var c=new l;r.on("click.share.amui.data-api",'[data-am-toggle="share"]',function(t){t.preventDefault(),c.toggle()}),t.exports=s.share=c},function(t,e,i){function n(t){return t<128?[t]:t<2048?(c0=192+(t>>6),c1=128+(63&t),[c0,c1]):(c0=224+(t>>12),c1=128+(t>>6&63),c2=128+(63&t),[c0,c1,c2])}function s(t){for(var e=[],i=0;i<t.length;i++)for(var s=t.charCodeAt(i),o=n(s),a=0;a<o.length;a++)e.push(o[a]);return e}function o(t,e){this.typeNumber=-1,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.rsBlocks=null,this.totalDataCount=-1,this.data=t,this.utf8bytes=s(t),this.make()}function a(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);for(var i=0;i<t.length&&0==t[i];)i++;this.num=new Array(t.length-i+e);for(var n=0;n<t.length-i;n++)this.num[n]=t[n+i]}function r(){this.buffer=new Array,this.length=0}function n(t){return t<128?[t]:t<2048?(c0=192+(t>>6),c1=128+(63&t),[c0,c1]):(c0=224+(t>>12),c1=128+(t>>6&63),c2=128+(63&t),[c0,c1,c2])}function s(t){for(var e=[],i=0;i<t.length;i++)for(var s=t.charCodeAt(i),o=n(s),a=0;a<o.length;a++)e.push(o[a]);return e}function o(t,e){this.typeNumber=-1,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.rsBlocks=null,this.totalDataCount=-1,this.data=t,this.utf8bytes=s(t),this.make()}function a(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);for(var i=0;i<t.length&&0==t[i];)i++;this.num=new Array(t.length-i+e);for(var n=0;n<t.length-i;n++)this.num[n]=t[n+i]}function r(){this.buffer=new Array,this.length=0}var c=i(1),u=i(2),h=[],d=function(t){"string"==typeof t&&(t={text:t}),this.options=c.extend({},{text:"",render:"",width:256,height:256,correctLevel:3,background:"#ffffff",foreground:"#000000"},t);for(var e=null,i=0,n=h.length;i<n;i++)if(h[i].text==this.options.text&&h[i].text.correctLevel==this.options.correctLevel){e=h[i].obj;break}if(i==n&&(e=new o(this.options.text,this.options.correctLevel),h.push({text:this.options.text,correctLevel:this.options.correctLevel,obj:e})),this.options.render)switch(this.options.render){case"canvas":return this.createCanvas(e);case"table":return this.createTable(e);case"svg":return this.createSVG(e);default:return this.createDefault(e)}return this.createDefault(e)};d.prototype.createDefault=function(t){var e=document.createElement("canvas");return e.getContext?this.createCanvas(t):document.createElementNS&&document.createElementNS(SVG_NS,"svg").createSVGRect?this.createSVG(t):this.createTable(t)},d.prototype.createCanvas=function(t){var e=document.createElement("canvas");e.width=this.options.width,e.height=this.options.height;for(var i=e.getContext("2d"),n=(this.options.width/t.getModuleCount()).toPrecision(4),s=this.options.height/t.getModuleCount().toPrecision(4),o=0;o<t.getModuleCount();o++)for(var a=0;a<t.getModuleCount();a++){i.fillStyle=t.modules[o][a]?this.options.foreground:this.options.background;var r=Math.ceil((a+1)*n)-Math.floor(a*n),l=Math.ceil((o+1)*n)-Math.floor(o*n);i.fillRect(Math.round(a*n),Math.round(o*s),r,l)}return e},d.prototype.createTable=function(t){var e=[];e.push('<table style="border:0px; margin:0px; padding:0px; border-collapse:collapse; background-color: '+this.options.background+';">');var i=-1,n=-1,s=-1,o=-1;i=s=Math.floor(this.options.width/t.getModuleCount()),n=o=Math.floor(this.options.height/t.getModuleCount()),s<=0&&(i=t.getModuleCount()<80?2:1),o<=0&&(n=t.getModuleCount()<80?2:1),foreTd='<td style="border:0px; margin:0px; padding:0px; width:'+i+"px; background-color: "+this.options.foreground+'"></td>',backTd='<td style="border:0px; margin:0px; padding:0px; width:'+i+"px; background-color: "+this.options.background+'"></td>',l=t.getModuleCount();for(var a=0;a<l;a++){e.push('<tr style="border:0px; margin:0px; padding:0px; height: '+n+'px">');for(var r=0;r<l;r++)e.push(t.modules[a][r]?foreTd:backTd);e.push("</tr>")}e.push("</table>");var c=document.createElement("span");return c.innerHTML=e.join(""),c.firstChild},d.prototype.createSVG=function(t){for(var e,i,n,s,o=t.getModuleCount(),a=this.options.height/this.options.width,r='<svg xmlns="http://www.w3.org/2000/svg" width="'+this.options.width+'px" height="'+this.options.height+'px" viewbox="0 0 '+10*o+" "+10*o*a+'">',l="<path ",u=' style="stroke-width:0.5;stroke:'+this.options.foreground+";fill:"+this.options.foreground+';"></path>',h=' style="stroke-width:0.5;stroke:'+this.options.background+";fill:"+this.options.background+';"></path>',d=0;d<o;d++)for(var p=0;p<o;p++)e=10*p,n=10*d*a,i=10*(p+1),s=10*(d+1)*a,r+=l+'d="M '+e+","+n+" L "+i+","+n+" L "+i+","+s+" L "+e+","+s+' Z"',r+=t.modules[d][p]?u:h;return r+="</svg>",c(r)[0]},o.prototype={constructor:o,getModuleCount:function(){return this.moduleCount},make:function(){this.getRightType(),this.dataCache=this.createData(),this.createQrcode()},makeImpl:function(t){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var e=0;e<this.moduleCount;e++)this.modules[e]=new Array(this.moduleCount);this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(!0,t),this.typeNumber>=7&&this.setupTypeNumber(!0),this.mapData(this.dataCache,t)},setupPositionProbePattern:function(t,e){for(var i=-1;i<=7;i++)if(!(t+i<=-1||this.moduleCount<=t+i))for(var n=-1;n<=7;n++)e+n<=-1||this.moduleCount<=e+n||(0<=i&&i<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==i||6==i)||2<=i&&i<=4&&2<=n&&n<=4?this.modules[t+i][e+n]=!0:this.modules[t+i][e+n]=!1)},createQrcode:function(){for(var t=0,e=0,i=null,n=0;n<8;n++){this.makeImpl(n);var s=f.getLostPoint(this);(0==n||t>s)&&(t=s,e=n,i=this.modules)}this.modules=i,this.setupTypeInfo(!1,e),this.typeNumber>=7&&this.setupTypeNumber(!1)},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0,null==this.modules[6][t]&&(this.modules[6][t]=t%2==0))},setupPositionAdjustPattern:function(){for(var t=f.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var i=0;i<t.length;i++){var n=t[e],s=t[i];if(null==this.modules[n][s])for(var o=-2;o<=2;o++)for(var a=-2;a<=2;a++)o==-2||2==o||a==-2||2==a||0==o&&0==a?this.modules[n+o][s+a]=!0:this.modules[n+o][s+a]=!1}},setupTypeNumber:function(t){for(var e=f.getBCHTypeNumber(this.typeNumber),i=0;i<18;i++){var n=!t&&1==(e>>i&1);this.modules[Math.floor(i/3)][i%3+this.moduleCount-8-3]=n,this.modules[i%3+this.moduleCount-8-3][Math.floor(i/3)]=n}},setupTypeInfo:function(t,e){for(var i=p[this.errorCorrectLevel]<<3|e,n=f.getBCHTypeInfo(i),s=0;s<15;s++){var o=!t&&1==(n>>s&1);s<6?this.modules[s][8]=o:s<8?this.modules[s+1][8]=o:this.modules[this.moduleCount-15+s][8]=o;var o=!t&&1==(n>>s&1);s<8?this.modules[8][this.moduleCount-s-1]=o:s<9?this.modules[8][15-s-1+1]=o:this.modules[8][15-s-1]=o}this.modules[this.moduleCount-8][8]=!t},createData:function(){var t=new r,e=this.typeNumber>9?16:8;t.put(4,4),t.put(this.utf8bytes.length,e);for(var i=0,n=this.utf8bytes.length;i<n;i++)t.put(this.utf8bytes[i],8);for(t.length+4<=8*this.totalDataCount&&t.put(0,4);t.length%8!=0;)t.putBit(!1);for(;;){if(t.length>=8*this.totalDataCount)break;if(t.put(o.PAD0,8),t.length>=8*this.totalDataCount)break;t.put(o.PAD1,8)}return this.createBytes(t)},createBytes:function(t){for(var e=0,i=0,n=0,s=this.rsBlock.length/3,o=new Array,r=0;r<s;r++)for(var l=this.rsBlock[3*r+0],c=this.rsBlock[3*r+1],u=this.rsBlock[3*r+2],h=0;h<l;h++)o.push([u,c]);for(var d=new Array(o.length),p=new Array(o.length),m=0;m<o.length;m++){var v=o[m][0],g=o[m][1]-v;i=Math.max(i,v),n=Math.max(n,g),d[m]=new Array(v);for(var r=0;r<d[m].length;r++)d[m][r]=255&t.buffer[r+e];e+=v;var y=f.getErrorCorrectPolynomial(g),w=new a(d[m],y.getLength()-1),b=w.mod(y);p[m]=new Array(y.getLength()-1);for(var r=0;r<p[m].length;r++){var T=r+b.getLength()-p[m].length;p[m][r]=T>=0?b.get(T):0}}for(var x=new Array(this.totalDataCount),C=0,r=0;r<i;r++)for(var m=0;m<o.length;m++)r<d[m].length&&(x[C++]=d[m][r]);for(var r=0;r<n;r++)for(var m=0;m<o.length;m++)r<p[m].length&&(x[C++]=p[m][r]);return x},mapData:function(t,e){for(var i=-1,n=this.moduleCount-1,s=7,o=0,a=this.moduleCount-1;a>0;a-=2)for(6==a&&a--;;){for(var r=0;r<2;r++)if(null==this.modules[n][a-r]){var l=!1;o<t.length&&(l=1==(t[o]>>>s&1));var c=f.getMask(e,n,a-r);c&&(l=!l),this.modules[n][a-r]=l,s--,s==-1&&(o++,s=7)}if(n+=i,n<0||this.moduleCount<=n){n-=i,i=-i;break}}}},o.PAD0=236,o.PAD1=17;for(var p=[1,0,3,2],m={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},f={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;f.getBCHDigit(e)-f.getBCHDigit(f.G15)>=0;)e^=f.G15<<f.getBCHDigit(e)-f.getBCHDigit(f.G15);return(t<<10|e)^f.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;f.getBCHDigit(e)-f.getBCHDigit(f.G18)>=0;)e^=f.G18<<f.getBCHDigit(e)-f.getBCHDigit(f.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return f.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,i){switch(t){case m.PATTERN000:return(e+i)%2==0;case m.PATTERN001:return e%2==0;case m.PATTERN010:return i%3==0;case m.PATTERN011:return(e+i)%3==0;case m.PATTERN100:return(Math.floor(e/2)+Math.floor(i/3))%2==0;case m.PATTERN101:return e*i%2+e*i%3==0;case m.PATTERN110:return(e*i%2+e*i%3)%2==0;case m.PATTERN111:return(e*i%3+(e+i)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new a([1],0),i=0;i<t;i++)e=e.multiply(new a([1,v.gexp(i)],0));return e},getLostPoint:function(t){for(var e=t.getModuleCount(),i=0,n=0,s=0;s<e;s++)for(var o=0,a=t.modules[s][0],r=0;r<e;r++){var l=t.modules[s][r];if(r<e-6&&l&&!t.modules[s][r+1]&&t.modules[s][r+2]&&t.modules[s][r+3]&&t.modules[s][r+4]&&!t.modules[s][r+5]&&t.modules[s][r+6]&&(r<e-10?t.modules[s][r+7]&&t.modules[s][r+8]&&t.modules[s][r+9]&&t.modules[s][r+10]&&(i+=40):r>3&&t.modules[s][r-1]&&t.modules[s][r-2]&&t.modules[s][r-3]&&t.modules[s][r-4]&&(i+=40)),s<e-1&&r<e-1){var c=0;l&&c++,t.modules[s+1][r]&&c++,t.modules[s][r+1]&&c++,t.modules[s+1][r+1]&&c++,0!=c&&4!=c||(i+=3)}a^l?o++:(a=l,o>=5&&(i+=3+o-5),o=1),l&&n++}for(var r=0;r<e;r++)for(var o=0,a=t.modules[0][r],s=0;s<e;s++){var l=t.modules[s][r];s<e-6&&l&&!t.modules[s+1][r]&&t.modules[s+2][r]&&t.modules[s+3][r]&&t.modules[s+4][r]&&!t.modules[s+5][r]&&t.modules[s+6][r]&&(s<e-10?t.modules[s+7][r]&&t.modules[s+8][r]&&t.modules[s+9][r]&&t.modules[s+10][r]&&(i+=40):s>3&&t.modules[s-1][r]&&t.modules[s-2][r]&&t.modules[s-3][r]&&t.modules[s-4][r]&&(i+=40)),
a^l?o++:(a=l,o>=5&&(i+=3+o-5),o=1)}var u=Math.abs(100*n/e/e-50)/5;return i+=10*u}},v={glog:function(t){if(t<1)throw new Error("glog("+t+")");return v.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return v.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},g=0;g<8;g++)v.EXP_TABLE[g]=1<<g;for(var g=8;g<256;g++)v.EXP_TABLE[g]=v.EXP_TABLE[g-4]^v.EXP_TABLE[g-5]^v.EXP_TABLE[g-6]^v.EXP_TABLE[g-8];for(var g=0;g<255;g++)v.LOG_TABLE[v.EXP_TABLE[g]]=g;a.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),i=0;i<this.getLength();i++)for(var n=0;n<t.getLength();n++)e[i+n]^=v.gexp(v.glog(this.get(i))+v.glog(t.get(n)));return new a(e,0)},mod:function(t){var e=this.getLength(),i=t.getLength();if(e-i<0)return this;for(var n=new Array(e),s=0;s<e;s++)n[s]=this.get(s);for(;n.length>=i;){for(var o=v.glog(n[0])-v.glog(t.get(0)),s=0;s<t.getLength();s++)n[s]^=v.gexp(v.glog(t.get(s))+o);for(;0==n[0];)n.shift()}return new a(n,0)}};var y=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];o.prototype.getRightType=function(){for(var t=1;t<41;t++){var e=y[4*(t-1)+this.errorCorrectLevel];if(void 0==e)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+this.errorCorrectLevel);for(var i=e.length/3,n=0,s=0;s<i;s++){var o=e[3*s+0],a=e[3*s+2];n+=a*o}var r=t>9?2:1;if(this.utf8bytes.length+r<n||40==t){this.typeNumber=t,this.rsBlock=e,this.totalDataCount=n;break}}},r.prototype={get:function(t){var e=Math.floor(t/8);return this.buffer[e]>>>7-t%8&1},put:function(t,e){for(var i=0;i<e;i++)this.putBit(t>>>e-i-1&1)},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},o.prototype={constructor:o,getModuleCount:function(){return this.moduleCount},make:function(){this.getRightType(),this.dataCache=this.createData(),this.createQrcode()},makeImpl:function(t){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var e=0;e<this.moduleCount;e++)this.modules[e]=new Array(this.moduleCount);this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(!0,t),this.typeNumber>=7&&this.setupTypeNumber(!0),this.mapData(this.dataCache,t)},setupPositionProbePattern:function(t,e){for(var i=-1;i<=7;i++)if(!(t+i<=-1||this.moduleCount<=t+i))for(var n=-1;n<=7;n++)e+n<=-1||this.moduleCount<=e+n||(0<=i&&i<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==i||6==i)||2<=i&&i<=4&&2<=n&&n<=4?this.modules[t+i][e+n]=!0:this.modules[t+i][e+n]=!1)},createQrcode:function(){for(var t=0,e=0,i=null,n=0;n<8;n++){this.makeImpl(n);var s=f.getLostPoint(this);(0==n||t>s)&&(t=s,e=n,i=this.modules)}this.modules=i,this.setupTypeInfo(!1,e),this.typeNumber>=7&&this.setupTypeNumber(!1)},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0,null==this.modules[6][t]&&(this.modules[6][t]=t%2==0))},setupPositionAdjustPattern:function(){for(var t=f.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var i=0;i<t.length;i++){var n=t[e],s=t[i];if(null==this.modules[n][s])for(var o=-2;o<=2;o++)for(var a=-2;a<=2;a++)o==-2||2==o||a==-2||2==a||0==o&&0==a?this.modules[n+o][s+a]=!0:this.modules[n+o][s+a]=!1}},setupTypeNumber:function(t){for(var e=f.getBCHTypeNumber(this.typeNumber),i=0;i<18;i++){var n=!t&&1==(e>>i&1);this.modules[Math.floor(i/3)][i%3+this.moduleCount-8-3]=n,this.modules[i%3+this.moduleCount-8-3][Math.floor(i/3)]=n}},setupTypeInfo:function(t,e){for(var i=p[this.errorCorrectLevel]<<3|e,n=f.getBCHTypeInfo(i),s=0;s<15;s++){var o=!t&&1==(n>>s&1);s<6?this.modules[s][8]=o:s<8?this.modules[s+1][8]=o:this.modules[this.moduleCount-15+s][8]=o;var o=!t&&1==(n>>s&1);s<8?this.modules[8][this.moduleCount-s-1]=o:s<9?this.modules[8][15-s-1+1]=o:this.modules[8][15-s-1]=o}this.modules[this.moduleCount-8][8]=!t},createData:function(){var t=new r,e=this.typeNumber>9?16:8;t.put(4,4),t.put(this.utf8bytes.length,e);for(var i=0,n=this.utf8bytes.length;i<n;i++)t.put(this.utf8bytes[i],8);for(t.length+4<=8*this.totalDataCount&&t.put(0,4);t.length%8!=0;)t.putBit(!1);for(;;){if(t.length>=8*this.totalDataCount)break;if(t.put(o.PAD0,8),t.length>=8*this.totalDataCount)break;t.put(o.PAD1,8)}return this.createBytes(t)},createBytes:function(t){for(var e=0,i=0,n=0,s=this.rsBlock.length/3,o=new Array,r=0;r<s;r++)for(var l=this.rsBlock[3*r+0],c=this.rsBlock[3*r+1],u=this.rsBlock[3*r+2],h=0;h<l;h++)o.push([u,c]);for(var d=new Array(o.length),p=new Array(o.length),m=0;m<o.length;m++){var v=o[m][0],g=o[m][1]-v;i=Math.max(i,v),n=Math.max(n,g),d[m]=new Array(v);for(var r=0;r<d[m].length;r++)d[m][r]=255&t.buffer[r+e];e+=v;var y=f.getErrorCorrectPolynomial(g),w=new a(d[m],y.getLength()-1),b=w.mod(y);p[m]=new Array(y.getLength()-1);for(var r=0;r<p[m].length;r++){var T=r+b.getLength()-p[m].length;p[m][r]=T>=0?b.get(T):0}}for(var x=new Array(this.totalDataCount),C=0,r=0;r<i;r++)for(var m=0;m<o.length;m++)r<d[m].length&&(x[C++]=d[m][r]);for(var r=0;r<n;r++)for(var m=0;m<o.length;m++)r<p[m].length&&(x[C++]=p[m][r]);return x},mapData:function(t,e){for(var i=-1,n=this.moduleCount-1,s=7,o=0,a=this.moduleCount-1;a>0;a-=2)for(6==a&&a--;;){for(var r=0;r<2;r++)if(null==this.modules[n][a-r]){var l=!1;o<t.length&&(l=1==(t[o]>>>s&1));var c=f.getMask(e,n,a-r);c&&(l=!l),this.modules[n][a-r]=l,s--,s==-1&&(o++,s=7)}if(n+=i,n<0||this.moduleCount<=n){n-=i,i=-i;break}}}},o.PAD0=236,o.PAD1=17;for(var p=[1,0,3,2],m={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},f={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;f.getBCHDigit(e)-f.getBCHDigit(f.G15)>=0;)e^=f.G15<<f.getBCHDigit(e)-f.getBCHDigit(f.G15);return(t<<10|e)^f.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;f.getBCHDigit(e)-f.getBCHDigit(f.G18)>=0;)e^=f.G18<<f.getBCHDigit(e)-f.getBCHDigit(f.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return f.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,i){switch(t){case m.PATTERN000:return(e+i)%2==0;case m.PATTERN001:return e%2==0;case m.PATTERN010:return i%3==0;case m.PATTERN011:return(e+i)%3==0;case m.PATTERN100:return(Math.floor(e/2)+Math.floor(i/3))%2==0;case m.PATTERN101:return e*i%2+e*i%3==0;case m.PATTERN110:return(e*i%2+e*i%3)%2==0;case m.PATTERN111:return(e*i%3+(e+i)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new a([1],0),i=0;i<t;i++)e=e.multiply(new a([1,v.gexp(i)],0));return e},getLostPoint:function(t){for(var e=t.getModuleCount(),i=0,n=0,s=0;s<e;s++)for(var o=0,a=t.modules[s][0],r=0;r<e;r++){var l=t.modules[s][r];if(r<e-6&&l&&!t.modules[s][r+1]&&t.modules[s][r+2]&&t.modules[s][r+3]&&t.modules[s][r+4]&&!t.modules[s][r+5]&&t.modules[s][r+6]&&(r<e-10?t.modules[s][r+7]&&t.modules[s][r+8]&&t.modules[s][r+9]&&t.modules[s][r+10]&&(i+=40):r>3&&t.modules[s][r-1]&&t.modules[s][r-2]&&t.modules[s][r-3]&&t.modules[s][r-4]&&(i+=40)),s<e-1&&r<e-1){var c=0;l&&c++,t.modules[s+1][r]&&c++,t.modules[s][r+1]&&c++,t.modules[s+1][r+1]&&c++,0!=c&&4!=c||(i+=3)}a^l?o++:(a=l,o>=5&&(i+=3+o-5),o=1),l&&n++}for(var r=0;r<e;r++)for(var o=0,a=t.modules[0][r],s=0;s<e;s++){var l=t.modules[s][r];s<e-6&&l&&!t.modules[s+1][r]&&t.modules[s+2][r]&&t.modules[s+3][r]&&t.modules[s+4][r]&&!t.modules[s+5][r]&&t.modules[s+6][r]&&(s<e-10?t.modules[s+7][r]&&t.modules[s+8][r]&&t.modules[s+9][r]&&t.modules[s+10][r]&&(i+=40):s>3&&t.modules[s-1][r]&&t.modules[s-2][r]&&t.modules[s-3][r]&&t.modules[s-4][r]&&(i+=40)),a^l?o++:(a=l,o>=5&&(i+=3+o-5),o=1)}var u=Math.abs(100*n/e/e-50)/5;return i+=10*u}},v={glog:function(t){if(t<1)throw new Error("glog("+t+")");return v.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return v.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},g=0;g<8;g++)v.EXP_TABLE[g]=1<<g;for(var g=8;g<256;g++)v.EXP_TABLE[g]=v.EXP_TABLE[g-4]^v.EXP_TABLE[g-5]^v.EXP_TABLE[g-6]^v.EXP_TABLE[g-8];for(var g=0;g<255;g++)v.LOG_TABLE[v.EXP_TABLE[g]]=g;a.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),i=0;i<this.getLength();i++)for(var n=0;n<t.getLength();n++)e[i+n]^=v.gexp(v.glog(this.get(i))+v.glog(t.get(n)));return new a(e,0)},mod:function(t){var e=this.getLength(),i=t.getLength();if(e-i<0)return this;for(var n=new Array(e),s=0;s<e;s++)n[s]=this.get(s);for(;n.length>=i;){for(var o=v.glog(n[0])-v.glog(t.get(0)),s=0;s<t.getLength();s++)n[s]^=v.gexp(v.glog(t.get(s))+o);for(;0==n[0];)n.shift()}return new a(n,0)}},y=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],o.prototype.getRightType=function(){for(var t=1;t<41;t++){var e=y[4*(t-1)+this.errorCorrectLevel];if(void 0==e)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+this.errorCorrectLevel);for(var i=e.length/3,n=0,s=0;s<i;s++){var o=e[3*s+0],a=e[3*s+2];n+=a*o}var r=t>9?2:1;if(this.utf8bytes.length+r<n||40==t){this.typeNumber=t,this.rsBlock=e,this.totalDataCount=n;break}}},r.prototype={get:function(t){var e=Math.floor(t/8);return this.buffer[e]>>>7-t%8&1},put:function(t,e){for(var i=0;i<e;i++)this.putBit(t>>>e-i-1&1)},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},c.fn.qrcode=function(t){return this.each(function(){c(this).append(new d(t))})},t.exports=u.qrcode=d},function(t,e,i){"use strict";var n=i(1),s=i(2),o=function(t,e){var i=this;this.options=n.extend({},o.DEFAULTS,e),this.$element=n(t),this.sticked=null,this.inited=null,this.$holder=void 0,this.$window=n(window).on("scroll.sticky.amui",s.utils.debounce(n.proxy(this.checkPosition,this),10)).on("resize.sticky.amui orientationchange.sticky.amui",s.utils.debounce(function(){i.reset(!0,function(){i.checkPosition()})},50)).on("load.sticky.amui",n.proxy(this.checkPosition,this)),this.offset=this.$element.offset(),this.init()};o.DEFAULTS={top:0,bottom:0,animation:"",className:{sticky:"am-sticky",resetting:"am-sticky-resetting",stickyBtm:"am-sticky-bottom",animationRev:"am-animation-reverse"}},o.prototype.init=function(){var t=this.check();if(!t)return!1;var e=this.$element,i="";n.each(e.css(["marginTop","marginRight","marginBottom","marginLeft"]),function(t,e){return i+=" "+e});var s=n('<div class="am-sticky-placeholder"></div>').css({height:"absolute"!==e.css("position")?e.outerHeight():"","float":"none"!=e.css("float")?e.css("float"):"",margin:i});return this.$holder=e.css("margin",0).wrap(s).parent(),this.inited=1,!0},o.prototype.reset=function(t,e){var i=this.options,n=this.$element,o=i.animation?" am-animation-"+i.animation:"",a=function(){n.css({position:"",top:"",width:"",left:"",margin:0}),n.removeClass([o,i.className.animationRev,i.className.sticky,i.className.resetting].join(" ")),this.animating=!1,this.sticked=!1,this.offset=n.offset(),e&&e()}.bind(this);n.addClass(i.className.resetting),!t&&i.animation&&s.support.animation?(this.animating=!0,n.removeClass(o).one(s.support.animation.end,function(){a()}).width(),n.addClass(o+" "+i.className.animationRev)):a()},o.prototype.check=function(){if(!this.$element.is(":visible"))return!1;var t=this.options.media;if(t)switch(typeof t){case"number":if(window.innerWidth<t)return!1;break;case"string":if(window.matchMedia&&!window.matchMedia(t).matches)return!1}return!0},o.prototype.checkPosition=function(){if(!this.inited){var t=this.init();if(!t)return}var e=this.options,i=this.$window.scrollTop(),n=e.top,s=e.bottom,o=this.$element,a=e.animation?" am-animation-"+e.animation:"",r=[e.className.sticky,a].join(" ");"function"==typeof s&&(s=s(this.$element));var l=i>this.$holder.offset().top;!this.sticked&&l?o.addClass(r):this.sticked&&!l&&this.reset(),this.$holder.css({height:o.is(":visible")&&"absolute"!==o.css("position")?o.outerHeight():""}),l&&o.css({top:n,left:this.$holder.offset().left,width:this.$holder.width()}),this.sticked=l},s.plugin("sticky",o),n(window).on("load",function(){n("[data-am-sticky]").sticky()}),t.exports=o},function(t,e,i){"use strict";function n(t){var e,i=Array.prototype.slice.call(arguments,1);return this.each(function(){var n=s(this),a=n.is(".am-tabs")&&n||n.closest(".am-tabs"),r=a.data("amui.tabs"),l=s.extend({},o.utils.parseOptions(n.data("amTabs")),s.isPlainObject(t)&&t);r||a.data("amui.tabs",r=new c(a[0],l)),"string"==typeof t&&("open"===t&&n.is(".am-tabs-nav a")?r.open(n):e="function"==typeof r[t]?r[t].apply(r,i):r[t])}),void 0===e?this:e}var s=i(1),o=i(2),a=i(3),r=o.support.transition,l=o.support.animation,c=function(t,e){this.$element=s(t),this.options=s.extend({},c.DEFAULTS,e||{}),this.transitioning=this.activeIndex=null,this.refresh(),this.init()};c.DEFAULTS={selector:{nav:"> .am-tabs-nav",content:"> .am-tabs-bd",panel:"> .am-tab-panel"},activeClass:"am-active"},c.prototype.refresh=function(){var t=this.options.selector;this.$tabNav=this.$element.find(t.nav),this.$navs=this.$tabNav.find("a"),this.$content=this.$element.find(t.content),this.$tabPanels=this.$content.find(t.panel);var e=this.$tabNav.find("> ."+this.options.activeClass);1!==e.length?this.open(0):this.activeIndex=this.$navs.index(e.children("a"))},c.prototype.init=function(){var t=this,e=this.options;if(this.$element.on("click.tabs.amui",e.selector.nav+" a",function(e){e.preventDefault(),t.open(s(this))}),!e.noSwipe){if(!this.$content.length)return this;var i=new a.Manager(this.$content[0]),n=new a.Swipe({direction:a.DIRECTION_HORIZONTAL});i.add(n),i.on("swipeleft",o.utils.debounce(function(e){e.preventDefault(),t.goTo("next")},100)),i.on("swiperight",o.utils.debounce(function(e){e.preventDefault(),t.goTo("prev")},100)),this._hammer=i}},c.prototype.open=function(t){var e=this.options.activeClass,i="number"==typeof t?t:this.$navs.index(s(t));if(t="number"==typeof t?this.$navs.eq(i):s(t),t&&t.length&&!this.transitioning&&!t.parent("li").hasClass(e)){var n=this.$tabNav,o=t.attr("href"),a=/^#.+$/,r=a.test(o)&&this.$content.find(o)||this.$tabPanels.eq(i),l=n.find("."+e+" a")[0],c=s.Event("open.tabs.amui",{relatedTarget:l});t.trigger(c),c.isDefaultPrevented()||(this.activate(t.closest("li"),n),this.activate(r,this.$content,function(){t.trigger({type:"opened.tabs.amui",relatedTarget:l})}),this.activeIndex=i)}},c.prototype.activate=function(t,e,i){this.transitioning=!0;var n=this.options.activeClass,o=e.find("> ."+n),a=i&&r&&!!o.length;o.removeClass(n+" am-in"),t.addClass(n),a?(t.redraw(),t.addClass("am-in")):t.removeClass("am-fade");var l=s.proxy(function(){i&&i(),this.transitioning=!1},this);a&&!this.$content.is(".am-tabs-bd-ofv")?o.one(r.end,l):l()},c.prototype.goTo=function(t){var e=this.activeIndex,i="next"===t,n=i?"am-animation-right-spring":"am-animation-left-spring";if(i&&e+1>=this.$navs.length||!i&&0===e){var s=this.$tabPanels.eq(e);l&&s.addClass(n).on(l.end,function(){s.removeClass(n)})}else this.open(i?e+1:e-1)},c.prototype.destroy=function(){this.$element.off(".tabs.amui"),a.off(this.$content[0],"swipeleft swiperight"),this._hammer&&this._hammer.destroy(),s.removeData(this.$element,"amui.tabs")},s.fn.tabs=n,o.ready(function(t){s("[data-am-tabs]",t).tabs()}),s(document).on("click.tabs.amui.data-api","[data-am-tabs] .am-tabs-nav a",function(t){t.preventDefault(),n.call(s(this),"open")}),t.exports=o.tabs=c},function(t,e,i){"use strict";var n=i(1),s=i(2),o=function(t,e){this.options=n.extend({},o.DEFAULTS,e),this.$element=n(t),this.init()};o.DEFAULTS={checkboxClass:"am-ucheck-checkbox",radioClass:"am-ucheck-radio",checkboxTpl:'<span class="am-ucheck-icons"><i class="am-icon-unchecked"></i><i class="am-icon-checked"></i></span>',radioTpl:'<span class="am-ucheck-icons"><i class="am-icon-unchecked"></i><i class="am-icon-checked"></i></span>'},o.prototype.init=function(){var t=this.$element,e=t[0],i=this.options;"checkbox"===e.type?t.addClass(i.checkboxClass).after(i.checkboxTpl):"radio"===e.type&&t.addClass(i.radioClass).after(i.radioTpl)},o.prototype.check=function(){this.$element.prop("checked",!0).trigger("change.ucheck.amui").trigger("checked.ucheck.amui")},o.prototype.uncheck=function(){this.$element.prop("checked",!1).trigger("change").trigger("unchecked.ucheck.amui")},o.prototype.toggle=function(){this.$element.prop("checked",function(t,e){return!e}).trigger("change.ucheck.amui").trigger("toggled.ucheck.amui")},o.prototype.disable=function(){this.$element.prop("disabled",!0).trigger("change.ucheck.amui").trigger("disabled.ucheck.amui")},o.prototype.enable=function(){this.$element.prop("disabled",!1),this.$element.trigger("change.ucheck.amui").trigger("enabled.ucheck.amui")},o.prototype.destroy=function(){this.$element.removeData("amui.ucheck").removeClass(this.options.checkboxClass+" "+this.options.radioClass).next(".am-ucheck-icons").remove().end().trigger("destroyed.ucheck.amui")},s.plugin("uCheck",o,{after:function(){s.support.touch&&this.parent().hover(function(){n(this).addClass("am-nohover")},function(){n(this).removeClass("am-nohover")})}}),s.ready(function(t){n("[data-am-ucheck]",t).uCheck()}),t.exports=o},function(t,e,i){"use strict";var n=i(1),s=i(2),o=function(t,e){this.options=n.extend({},o.DEFAULTS,e),this.options.patterns=n.extend({},o.patterns,this.options.patterns);var i=this.options.locales;!o.validationMessages[i]&&(this.options.locales="zh_CN"),this.$element=n(t),this.init()};o.DEFAULTS={debug:!1,locales:"zh_CN",H5validation:!1,H5inputType:["email","url","number"],patterns:{},patternClassPrefix:"js-pattern-",activeClass:"am-active",inValidClass:"am-field-error",validClass:"am-field-valid",validateOnSubmit:!0,alwaysRevalidate:!1,allFields:":input:not(:submit, :button, :disabled, .am-novalidate)",ignore:":hidden:not([data-am-selected], .am-validate)",customEvents:"validate",keyboardFields:":input:not(:submit, :button, :disabled, .am-novalidate)",keyboardEvents:"focusout, change",activeKeyup:!1,textareaMaxlenthKeyup:!0,pointerFields:'input[type="range"]:not(:disabled, .am-novalidate), input[type="radio"]:not(:disabled, .am-novalidate), input[type="checkbox"]:not(:disabled, .am-novalidate), select:not(:disabled, .am-novalidate), option:not(:disabled, .am-novalidate)',pointerEvents:"click",onValid:function(t){},onInValid:function(t){},markValid:function(t){var e=this.options,i=n(t.field),s=i.closest(".am-form-group");i.addClass(e.validClass).removeClass(e.inValidClass),s.addClass("am-form-success").removeClass("am-form-error"),e.onValid.call(this,t)},markInValid:function(t){var e=this.options,i=n(t.field),s=i.closest(".am-form-group");i.addClass(e.inValidClass+" "+e.activeClass).removeClass(e.validClass),s.addClass("am-form-error").removeClass("am-form-success"),e.onInValid.call(this,t)},validate:function(t){},submit:null},o.VERSION="2.7.2",o.patterns={email:/^((([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/,url:/^(https?|ftp):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,number:/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/,dateISO:/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,integer:/^-?\d+$/},o.validationMessages={zh_CN:{valueMissing:"\u8bf7\u586b\u5199\uff08\u9009\u62e9\uff09\u6b64\u5b57\u6bb5",customError:{tooShort:"\u81f3\u5c11\u586b\u5199 %s \u4e2a\u5b57\u7b26",checkedOverflow:"\u81f3\u591a\u9009\u62e9 %s \u9879",checkedUnderflow:"\u81f3\u5c11\u9009\u62e9 %s \u9879"},patternMismatch:"\u8bf7\u6309\u7167\u8981\u6c42\u7684\u683c\u5f0f\u586b\u5199",rangeOverflow:"\u8bf7\u586b\u5199\u5c0f\u4e8e\u7b49\u4e8e %s \u7684\u503c",rangeUnderflow:"\u8bf7\u586b\u5199\u5927\u4e8e\u7b49\u4e8e %s \u7684\u503c",stepMismatch:"",tooLong:"\u81f3\u591a\u586b\u5199 %s \u4e2a\u5b57\u7b26",typeMismatch:"\u8bf7\u6309\u7167\u8981\u6c42\u7684\u7c7b\u578b\u586b\u5199"}},o.ERROR_MAP={tooShort:"minlength",checkedOverflow:"maxchecked",checkedUnderflow:"minchecked",rangeOverflow:"max",rangeUnderflow:"min",tooLong:"maxlength"},o.prototype.init=function(){function t(t){var e=t.toString();return e.substring(1,e.length-1)}function e(t,e,a){var r=e.split(","),l=function(t){i.validate(this)};a&&(l=s.utils.debounce(l,a)),n.each(r,function(e,i){o.on(i+".validator.amui",t,l)})}var i=this,o=this.$element,a=this.options;return(!a.H5validation||!s.support.formValidation)&&(o.attr("novalidate","novalidate"),n.each(a.H5inputType,function(e,i){var n=o.find("input[type="+i+"]");n.attr("pattern")||n.is("[class*="+a.patternClassPrefix+"]")||n.attr("pattern",t(a.patterns[i]))}),n.each(a.patterns,function(e,i){var n=o.find("."+a.patternClassPrefix+e);!n.attr("pattern")&&n.attr("pattern",t(i))}),o.on("submit.validator.amui",function(t){if("function"==typeof a.submit)return a.submit.call(i,t);if(a.validateOnSubmit){var e=i.isFormValid();return"boolean"===n.type(e)?e:!!o.data("amui.checked")||(n.when(e).then(function(){o.data("amui.checked",!0).submit()},function(){o.data("amui.checked",!1).find("."+a.inValidClass).eq(0).focus()}),!1)}}),e(":input",a.customEvents),e(a.keyboardFields,a.keyboardEvents),e(a.pointerFields,a.pointerEvents),a.textareaMaxlenthKeyup&&e("textarea[maxlength]","keyup",50),void(a.activeKeyup&&e(".am-active","keyup",50)))},o.prototype.isValid=function(t){var e=n(t),i=this.options;return(void 0===e.data("validity")||i.alwaysRevalidate)&&this.validate(t),e.data("validity")&&e.data("validity").valid},o.prototype.validate=function(t){var e=this,i=this.$element,s=this.options,o=n(t),a=o.data("equalTo");a&&o.attr("pattern","^"+i.find(a).val()+"$");var r=o.attr("pattern")||!1,l=new RegExp(r),c=null,u=null,h=o.is("[type=checkbox]")?(u=i.find('input[name="'+t.name+'"]')).filter(":checked").length:o.is("[type=radio]")?(c=this.$element.find('input[name="'+t.name+'"]')).filter(":checked").length>0:o.val();o=u&&u.length?u.first():o;var d=void 0!==o.attr("required")&&"false"!==o.attr("required"),p=parseInt(o.attr("maxlength"),10),m=parseInt(o.attr("minlength"),10),f=Number(o.attr("min")),v=Number(o.attr("max")),g=this.createValidity({field:o[0],valid:!0});if(s.debug&&window.console&&(console.log("Validate: value -> ["+h+", regex -> ["+l+"], required -> "+d),console.log("Regex test: "+l.test(h)+", Pattern: "+r)),!isNaN(p)&&h.length>p&&(g.valid=!1,g.tooLong=!0),!isNaN(m)&&h.length<m&&(g.valid=!1,g.customError="tooShort"),!isNaN(f)&&Number(h)<f&&(g.valid=!1,g.rangeUnderflow=!0),!isNaN(v)&&Number(h)>v&&(g.valid=!1,g.rangeOverflow=!0),d&&!h)g.valid=!1,g.valueMissing=!0;else if((u||o.is('select[multiple="multiple"]'))&&h){h=u?h:h.length;var y=parseInt(o.attr("minchecked"),10),w=parseInt(o.attr("maxchecked"),10);!isNaN(y)&&h<y&&(g.valid=!1,g.customError="checkedUnderflow"),!isNaN(w)&&h>w&&(g.valid=!1,g.customError="checkedOverflow")}else r&&!l.test(h)&&h&&(g.valid=!1,g.patternMismatch=!0);var b,T=function(t){this.markField(t);var i=n.Event("validated.field.validator.amui");i.validity=t,o.trigger(i).data("validity",t);var s=c||u;return s&&s.not(o).data("validity",t).each(function(){t.field=this,e.markField(t)}),t};if("function"==typeof s.validate&&(b=s.validate.call(this,g)),b){var x=new n.Deferred;return o.data("amui.dfdValidity",x.promise()),n.when(b).always(function(t){x[t.valid?"resolve":"reject"](t),T.call(e,t)})}T.call(this,g)},o.prototype.markField=function(t){var e=this.options,i="mark"+(t.valid?"":"In")+"Valid";e[i]&&e[i].call(this,t)},o.prototype.validateForm=function(){var t=this,e=this.$element,i=this.options,s=e.find(i.allFields).not(i.ignore),o=[],a=!0,r=[],l=n([]),c=[],u=!1;e.trigger("validate.form.validator.amui");var h=s.filter(function(t){var e;if("INPUT"===this.tagName&&"radio"===this.type){if(e=this.name,o[e]===!0)return!1;o[e]=!0;
}return!0});h.each(function(){var i=n(this),s=t.isValid(this),o=i.data("validity");a=!!s&&a,r.push(o),s||(l=l.add(n(this),e));var h=i.data("amui.dfdValidity");if(h)c.push(h),u=!0;else{var d=new n.Deferred;c.push(d.promise()),d[s?"resolve":"reject"](o)}});var d={valid:a,$invalidFields:l,validity:r,promises:c,async:u};return e.trigger("validated.form.validator.amui",d),d},o.prototype.isFormValid=function(){var t=this,e=this.validateForm(),i=function(e){t.$element.trigger(e+".validator.amui")};if(e.async){var s=new n.Deferred;return n.when.apply(null,e.promises).then(function(){s.resolve(),i("valid")},function(){s.reject(),i("invalid")}),s.promise()}if(!e.valid){var o=e.$invalidFields.first();return o.is("[data-am-selected]")&&(o=o.next(".am-selected").find(".am-selected-btn")),o.focus(),i("invalid"),!1}return i("valid"),!0},o.prototype.createValidity=function(t){return n.extend({customError:t.customError||!1,patternMismatch:t.patternMismatch||!1,rangeOverflow:t.rangeOverflow||!1,rangeUnderflow:t.rangeUnderflow||!1,stepMismatch:t.stepMismatch||!1,tooLong:t.tooLong||!1,typeMismatch:t.typeMismatch||!1,valid:t.valid||!0,valueMissing:t.valueMissing||!1},t)},o.prototype.getValidationMessage=function(t){var e,i,s=o.validationMessages[this.options.locales],a="%s",r=n(t.field);return(r.is('[type="checkbox"]')||r.is('[type="radio"]'))&&(r=this.$element.find("[name="+r.attr("name")+"]").first()),n.each(t,function(t,i){return"field"===t||"valid"===t?t:"customError"===t&&i?(e=i,s=s.customError,!1):i===!0?(e=t,!1):void 0}),i=s[e]||void 0,i&&o.ERROR_MAP[e]&&(i=i.replace(a,r.attr(o.ERROR_MAP[e])||"\u89c4\u5b9a\u7684")),i},o.prototype.removeMark=function(){this.$element.find(".am-form-success, .am-form-error, ."+this.options.inValidClass+", ."+this.options.validClass).removeClass(["am-form-success","am-form-error",this.options.inValidClass,this.options.validClass].join(" "))},o.prototype.destroy=function(){this.removeMark(),this.$element.removeData("amui.validator amui.checked").off(".validator.amui").find(this.options.allFields).removeData("validity amui.dfdValidity")},s.plugin("validator",o),s.ready(function(t){n("[data-am-validator]",t).validator()}),t.exports=o},function(t,e,i){"use strict";var n=i(2),s={get:function(t){var e,i=encodeURIComponent(t)+"=",n=document.cookie.indexOf(i),s=null;return n>-1&&(e=document.cookie.indexOf(";",n),e==-1&&(e=document.cookie.length),s=decodeURIComponent(document.cookie.substring(n+i.length,e))),s},set:function(t,e,i,n,s,o){var a=encodeURIComponent(t)+"="+encodeURIComponent(e);i instanceof Date&&(a+="; expires="+i.toUTCString()),n&&(a+="; path="+n),s&&(a+="; domain="+s),o&&(a+="; secure"),document.cookie=a},unset:function(t,e,i,n){this.set(t,"",new Date(0),e,i,n)}};n.utils=n.utils||{},t.exports=n.utils.cookie=s},function(t,e,i){"use strict";var n=i(2),s=function(){var t="undefined"!=typeof Element&&"ALLOW_KEYBOARD_INPUT"in Element,e=function(){for(var t,e,i=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n=0,s=i.length,o={};n<s;n++)if(t=i[n],t&&t[1]in document){for(n=0,e=t.length;n<e;n++)o[i[0][n]]=t[n];return o}return!1}(),i={request:function(i){var n=e.requestFullscreen;i=i||document.documentElement,/5\.1[\.\d]* Safari/.test(navigator.userAgent)?i[n]():i[n](t&&Element.ALLOW_KEYBOARD_INPUT)},exit:function(){document[e.exitFullscreen]()},toggle:function(t){this.isFullscreen?this.exit():this.request(t)},raw:e};return!!e&&(Object.defineProperties(i,{isFullscreen:{get:function(){return!!document[e.fullscreenElement]}},element:{enumerable:!0,get:function(){return document[e.fullscreenElement]}},enabled:{enumerable:!0,get:function(){return!!document[e.fullscreenEnabled]}}}),i.VERSION="3.0.0",i)}();t.exports=n.fullscreen=s},function(t,e,i){"use strict";var n=i(1),s=i(2);s.support.geolocation=window.navigator&&window.navigator.geolocation;var o=s.support.geolocation,a=function(t){this.options=t||{}};a.MESSAGES={unsupportedBrowser:"Browser does not support location services",permissionDenied:"You have rejected access to your location",positionUnavailable:"Unable to determine your location",timeout:"Service timeout has been reached"},a.ERROR_CODE={0:"unsupportedBrowser",1:"permissionDenied",2:"positionUnavailable",3:"timeout"},a.prototype.get=function(t){var e=this;t=n.extend({},this.options,t);var i=new n.Deferred;return o?this.watchID=o.getCurrentPosition(function(t){i.resolve.call(e,t)},function(t){i.reject(a.MESSAGES[a.ERROR_CODE[t.code]])},t):i.reject(a.MESSAGES.unsupportedBrowser),i.promise()},a.prototype.watch=function(t){if(o&&(t=n.extend({},this.options,t),n.isFunction(t.done))){this.clearWatch();var e=n.isFunction(t.fail)?t.fail:null;return this.watchID=o.watchPosition(t.done,e,t),this.watchID}},a.prototype.clearWatch=function(){o&&this.watchID&&(o.clearWatch(this.watchID),this.watchID=null)},t.exports=s.Geolocation=a},function(t,e,i){(function(e){"use strict";function n(){try{return l in r&&r[l]}catch(t){return!1}}var s,o=i(2),a={},r="undefined"!=typeof window?window:e,l="localStorage";a.disabled=!1,a.version="1.3.20",a.set=function(t,e){},a.get=function(t,e){},a.has=function(t){return void 0!==a.get(t)},a.remove=function(t){},a.clear=function(){},a.transact=function(t,e,i){null==i&&(i=e,e=null),null==e&&(e={});var n=a.get(t,e);i(n),a.set(t,n)},a.getAll=function(){},a.forEach=function(){},a.serialize=function(t){return JSON.stringify(t)},a.deserialize=function(t){if("string"==typeof t)try{return JSON.parse(t)}catch(e){return t||void 0}},n()&&(s=r[l],a.set=function(t,e){return void 0===e?a.remove(t):(s.setItem(t,a.serialize(e)),e)},a.get=function(t,e){var i=a.deserialize(s.getItem(t));return void 0===i?e:i},a.remove=function(t){s.removeItem(t)},a.clear=function(){s.clear()},a.getAll=function(){var t={};return a.forEach(function(e,i){t[e]=i}),t},a.forEach=function(t){for(var e=0;e<s.length;e++){var i=s.key(e);t(i,a.get(i))}});try{var c="__storejs__";a.set(c,c),a.get(c)!=c&&(a.disabled=!0),a.remove(c)}catch(u){a.disabled=!0}a.enabled=!a.disabled,t.exports=o.store=a}).call(e,function(){return this}())},function(t,e,i){"use strict";function n(){var t=s('[data-am-widget="accordion"]'),e={item:".am-accordion-item",title:".am-accordion-title",body:".am-accordion-bd",disabled:".am-disabled"};t.each(function(t,i){var n=o.utils.parseOptions(s(i).attr("data-am-accordion")),a=s(i).find(e.title);a.on("click.accordion.amui",function(){var t=s(this).next(e.body),o=s(this).parent(e.item),a=t.data("amui.collapse");o.is(e.disabled)||(o.toggleClass("am-active"),a?t.collapse("toggle"):t.collapse(),!n.multiple&&s(i).children(".am-active").not(o).not(e.disabled).removeClass("am-active").find(e.body+".am-in").collapse("close"))})})}var s=i(1),o=i(2);i(7),s(n),t.exports=o.accordion={VERSION:"2.1.0",init:n}},function(t,e){"use strict";t.exports={VERSION:"2.0.1"}},function(t,e,i){"use strict";function n(){var t=s(".ds-thread"),e=t.parent('[data-am-widget="duoshuo"]').attr("data-ds-short-name"),i=("https:"==document.location.protocol?"https:":"http:")+"//static.duoshuo.com/embed.js";if(t.length&&e&&(window.duoshuoQuery={short_name:e},!s('script[src="'+i+'"]').length)){var n=s("<script>",{async:!0,type:"text/javascript",src:i,charset:"utf-8"});s("body").append(n)}}var s=i(1),o=i(2);s(window).on("load",n),t.exports=o.duoshuo={VERSION:"2.0.1",init:n}},function(t,e,i){"use strict";function n(){s(".am-figure").each(function(t,e){var i,n=o.utils.parseOptions(s(e).attr("data-am-figure")),a=s(e);if(n.pureview)if("auto"===n.pureview){var r=s.isImgZoomAble(a.find("img")[0]);r&&a.pureview()}else a.addClass("am-figure-zoomable").pureview();i=a.data("amui.pureview"),i&&a.on("click",":not(img)",function(){i.open(0)})})}var s=i(1),o=i(2);i(20),s.isImgZoomAble=function(t){var e=new Image;e.src=t.src;var i=s(t).width()<e.width;return i&&s(t).closest(".am-figure").addClass("am-figure-zoomable"),i},s(window).on("load",n),t.exports=o.figure={VERSION:"2.0.3",init:n}},function(t,e,i){"use strict";function n(){s(".am-footer-ysp").on("click",function(){s("#am-footer-modal").modal()});var t=o.utils.parseOptions(s(".am-footer").data("amFooter"));t.addToHS&&a(),s('[data-rel="desktop"]').on("click",function(t){t.preventDefault(),window.AMPlatform?window.AMPlatform.util.goDesktop():(r.set("allmobilize","desktop","","/"),window.location=window.location)})}var s=i(1),o=i(2);i(15);var a=i(4),r=i(31);s(n),t.exports=o.footer={VERSION:"3.1.2",init:n}},function(t,e,i){"use strict";function n(){var t=s('[data-am-widget="gallery"]');t.each(function(){var t=o.utils.parseOptions(s(this).attr("data-am-gallery"));t.pureview&&("object"==typeof t.pureview?s(this).pureview(t.pureview):s(this).pureview())})}var s=i(1),o=i(2);i(20),s(n),t.exports=o.gallery={VERSION:"3.0.0",init:n}},function(t,e,i){"use strict";function n(){function t(){i[(n.scrollTop()>50?"add":"remove")+"Class"]("am-active")}var e=s('[data-am-widget="gotop"]'),i=e.filter(".am-gotop-fixed"),n=s(window);e.data("init")||(e.find("a").on("click",function(t){t.preventDefault(),n.smoothScroll()}),t(),n.on("scroll.gotop.amui",o.utils.debounce(t,100)),e.data("init",!0))}var s=i(1),o=i(2);i(23),s(n),t.exports=o.gotop={VERSION:"4.0.2",init:n}},function(t,e,i){"use strict";function n(){s('[data-am-widget="header"]').each(function(){if(s(this).hasClass("am-header-fixed"))return s("body").addClass("am-with-fixed-header"),!1})}var s=i(1),o=i(2);s(n),t.exports=o.header={VERSION:"2.0.0",init:n}},function(t,e,i){"use strict";var n=i(2);t.exports=n.intro={VERSION:"4.0.2",init:function(){}}},function(t,e,i){"use strict";var n=i(2);t.exports=n.listNews={VERSION:"4.0.0",init:function(){}}},function(t,e,i){function n(t){var e=o("<script />",{id:"am-map-api-0"});o("body").append(e),e.on("load",function(){console.log("load");var e=o("<script/>",{id:"am-map-api-1"});o("body").append(e),e.on("load",function(){var e=document.createElement("script");e.textContent="("+t.toString()+")();",o("body")[0].appendChild(e)}).attr("src","http://api.map.baidu.com/getscript?type=quick&file=feature&ak=WVAXZ05oyNRXS5egLImmentg&t=20140109092002")}).attr("src","http://api.map.baidu.com/getscript?type=quick&file=api&ak=WVAXZ05oyNRXS5egLImmentg&t=20140109092002")}function s(){var t=document.querySelector(".am-map"),e=116.331398,i=39.897445,n=t.getAttribute("data-name"),s=t.getAttribute("data-address"),o=t.getAttribute("data-longitude")||e,a=t.getAttribute("data-latitude")||i,r=t.getAttribute("data-setZoom")||17,l=t.getAttribute("data-icon"),c=new BMap.Map("bd-map"),u=new BMap.Point(o,a);c.centerAndZoom(u,r),t.getAttribute("data-zoomControl")&&c.addControl(new BMap.ZoomControl),t.getAttribute("data-scaleControl")&&c.addControl(new BMap.ScaleControl);var h=new BMap.Marker(u);l&&h.setIcon(new BMap.Icon(l,new BMap.Size(40,40)));var d={width:200,title:n},p=new BMap.InfoWindow("\u5730\u5740\uff1a"+s,d),m=new BMap.Geocoder;o==e&&a==i?m.getPoint(s,function(t){t&&(c.centerAndZoom(t,r),h.setPosition(t),c.addOverlay(h),c.openInfoWindow(p,t))},""):m.getLocation(u,function(t){c.centerAndZoom(u,r),h.setPosition(u),c.addOverlay(h),s?c.openInfoWindow(p,u):c.openInfoWindow(new BMap.InfoWindow(s,d),u)})}var o=i(1),a=i(2),r=function(){o(".am-map").length&&n(s)};o(r),t.exports=a.map={VERSION:"2.0.2",init:r}},function(t,e,i){"use strict";function n(){if(s("#mechat").length){var t=s('[data-am-widget="mechat"]'),e=t.data("am-mechat-unitid"),i=s("<script>",{charset:"utf-8",src:"http://mechatim.com/js/unit/button.js?id="+e});s("body").append(i)}}var s=i(1),o=i(2);s(window).on("load",n),t.exports=o.mechat={VERSION:"2.0.1",init:n}},function(t,e,i){"use strict";var n=i(1),s=i(2),o=i(14);i(16),i(7);var a=function(){var t=n('[data-am-widget="menu"]');t.find(".am-menu-nav .am-parent > a").on("click",function(t){t.preventDefault();var e=n(this),i=e.parent(),s=e.next(".am-menu-sub");i.toggleClass("am-open"),s.collapse("toggle"),i.siblings(".am-parent").removeClass("am-open").children(".am-menu-sub.am-in").collapse("close")}),t.filter("[data-am-menu-collapse]").find("> .am-menu-toggle").on("click",function(t){t.preventDefault();var e=n(this),i=e.next(".am-menu-nav");e.toggleClass("am-active"),i.collapse("toggle")}),t.filter("[data-am-menu-offcanvas]").find("> .am-menu-toggle").on("click",function(t){t.preventDefault();var e=n(this),i=e.next(".am-offcanvas");e.toggleClass("am-active"),i.offCanvas("open")});var e='.am-offcanvas[data-dismiss-on="click"]',i=n(e);i.find("a").not(".am-parent>a").on("click",function(t){n(this).parents(e).offCanvas("close")}),t.filter(".am-menu-one").each(function(t){var e,i=n(this),s=n('<div class="am-menu-nav-sub-wrap"></div>'),a=0,r=i.find(".am-menu-nav"),l=r.children("li");l.filter(".am-parent").each(function(t){n(this).attr("data-rel","#am-menu-sub-"+t),n(this).find(".am-menu-sub").attr("id","am-menu-sub-"+t).appendTo(s)}),i.append(s),r.wrap('<div class="am-menu-nav-wrap" id="am-menu-'+t+'">'),l.each(function(t){a+=parseFloat(n(this).css("width"))}),r.width(a);var c=new o("#am-menu-"+t,{eventPassthrough:!0,scrollX:!0,scrollY:!1,preventDefault:!1});l.on("click",function(){var t=n(this);t.addClass("am-active").siblings().removeClass("am-active"),s.find(".am-menu-sub.am-in").collapse("close"),t.is(".am-parent")?!t.hasClass(".am-open")&&s.find(t.attr("data-rel")).collapse("open"):t.siblings().removeClass("am-open"),void 0===e&&(e=n(this).index()?0:1);var o,a=n(this).index()>e,l=n(this)[a?"next":"prev"](),u=l.offset()||n(this).offset(),h=i.offset(),d=parseInt(i.css("padding-left"));(a?u.left+u.width>h.left+h.width:u.left<h.left)&&(o=r.offset(),c.scrollTo(a?h.width-u.left+o.left-u.width-d:o.left-u.left,0,400)),e=n(this).index()}),i.on("touchmove",function(t){t.preventDefault()})})};n(a),t.exports=s.menu={VERSION:"4.0.3",init:a}},function(t,e,i){"use strict";function n(){function t(){u.append(b),u.find("li").not(".am-navbar-more").slice(i()-1).appendTo(w),n.append(w)}function e(){return i()>=d?(b.hide(),void w.find("li").insertBefore(b)):(!n.find(".am-navbar-actions").length&&t(),b.show(),void(u.find("li").length<i()?w.find("li").slice(0,i()-u.find("li").length).insertBefore(b):u.find("li").length>i()&&(w.find("li").length?u.find("li").not(b).slice(i()-1).insertBefore(w.find("li").first()):u.find("li").not(b).slice(i()-1).appendTo(w))))}function i(){return Math.floor((l.width()-f)/m)}var n=s('[data-am-widget="navbar"]');if(n.length){var l=s(window),c=s("body"),u=n.find(".am-navbar-nav"),h=n.find("li"),d=h.length,p=u.attr("class")&&parseInt(u.attr("class").match(/am-avg-sm-(\d+)/)[1])||3,m=60,f=16,v=h.filter("[data-am-navbar-share]"),g=h.filter("[data-am-navbar-qrcode]"),y="am-active",w=s('<ul class="am-navbar-actions"></ul>',{id:o.utils.generateGUID("am-navbar-actions")}),b=s('<li class="am-navbar-labels am-navbar-more"><a href="javascript: void(0);"><span class="am-icon-angle-up"></span><span class="am-navbar-label">\u66f4\u591a</span></a></li>');if("fixed"==n.css("position")&&c.addClass("am-with-fixed-navbar"),g.length){var T="am-navbar-qrcode";if(C=s("#"+T),!C.length){var x=g.attr("data-am-navbar-qrcode"),C=s('<div class="am-modal am-modal-no-btn" id=""><div class="am-modal-dialog"><div class="am-modal-bd"></div></div></div>',{id:T}),E=C.find(".am-modal-bd");if(x)E.html('<img src="'+x+'"/>');else{var S=new r({render:"canvas",correctLevel:0,text:window.location.href,width:200,height:200,background:"#fff",foreground:"#000"});E.html(S)}c.append(C)}g.on("click",function(t){t.preventDefault(),C.modal()})}d>p&&d>i()&&t(),n.on("click.navbar.amui",".am-navbar-more",function(t){t.preventDefault(),b[w.hasClass(y)?"removeClass":"addClass"](y),w.toggleClass(y)}),v.length&&v.on("click.navbar.amui",function(t){t.preventDefault(),a.toggle()}),l.on("resize.navbar.amui orientationchange.navbar.amui",o.utils.debounce(e,150))}}var s=i(1),o=i(2),a=i(25),r=i(26);i(15),s(n),t.exports=o.navbar={VERSION:"2.0.2",init:n}},function(t,e,i){"use strict";var n=i(2);t.exports=n.pagination={VERSION:"3.0.1"}},function(t,e,i){"use strict";function n(){var t=s('[data-am-widget="paragraph"]');t.each(function(t){var e=s(this),i=o.utils.parseOptions(e.attr("data-am-paragraph")),n=t;i.pureview&&e.pureview(),i.tableScrollable&&e.find("table").each(function(t){s(this).width()>s(window).width()&&s(this).scrollTable(n+"-"+t)})})}var s=i(1),o=i(2),a=i(14);i(20),s.fn.scrollTable=function(t){var e,i=s(this);i.wrap('<div class="am-paragraph-table-container" id="am-paragraph-table-'+t+'"><div class="am-paragraph-table-scroller"></div></div>'),e=i.parent(),e.width(i.width()),e.height(i.height()),new a("#am-paragraph-table-"+t,{eventPassthrough:!0,scrollX:!0,scrollY:!1,preventDefault:!1})},s(window).on("load",n),t.exports=o.paragraph={VERSION:"2.0.1",init:n}},function(t,e,i){"use strict";function n(){var t=s('[data-am-widget="slider"]');t.not(".am-slider-manual").each(function(t,e){var i=o.utils.parseOptions(s(e).attr("data-am-slider"));s(e).flexslider(i)})}var s=i(1),o=i(2);i(11),s(n),t.exports=o.slider={VERSION:"3.0.1",init:n}},function(t,e,i){"use strict";function n(){s('[data-am-widget="tabs"]').each(function(){var t=s(this).data("amTabsNoswipe")?{noSwipe:1}:{};s(this).tabs(t)})}var s=i(1),o=i(2);i(28),s(n),t.exports=o.tab={VERSION:"4.0.1",init:n}},function(t,e,i){"use strict";var n=i(2);t.exports=n.titlebar={VERSION:"4.0.1"}},function(t,e,i){"use strict";function n(){var t=s('[data-am-widget="wechatpay"]');return a?void t.on("click",".am-wechatpay-btn",function(t){t.preventDefault();var e=o.utils.parseOptions(s(this).parent().data("wechatPay"));return window.wx?void wx.checkJsApi({jsApiList:["chooseWXPay"],success:function(t){t.checkResult.chooseWXPay?wx.chooseWXPay(e):alert("\u5fae\u4fe1\u7248\u672c\u4e0d\u652f\u6301\u652f\u4ed8\u63a5\u53e3\u6216\u6ca1\u6709\u5f00\u542f\uff01")},fail:function(){alert("\u8c03\u7528 checkJsApi \u63a5\u53e3\u65f6\u53d1\u751f\u9519\u8bef!")}}):void alert("\u6ca1\u6709\u5fae\u4fe1 JS SDK")}):(t.hide(),!1)}var s=i(1),o=i(2),a=window.navigator.userAgent.indexOf("MicroMessenger")>-1,r=n;s(r),t.exports=o.pay={VERSION:"1.0.0",init:r}}])});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

$(document).ready(function(){
  $("#header").load("./html/header.html");
  $("#nav").load("./html/nav.html");
  $("#footer").load("./html/footer.html");

});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

$(document).ready(function(){

	// 个人、企业用户登录处切换内容
	$(".login_user_form li").eq(0).show()
	$(".login_user_tit li").click(function(){
		var l_tit = $(this).index();
		$(".login_user_form li").eq(l_tit).show().siblings().hide();
		$(this).addClass("login_active").siblings().removeClass("login_active");
	});


	// 高级搜索选项更多时，ul高度改变
	$(".moreChoese").click(function(){
		$(this).addClass("am-hide").siblings().removeClass("am-hide")
			   .parent().siblings("ul").toggleClass("moreInfo");
	});

	// 职位相关信息选择
	$(".choeseActive li").click(function(){
		$(this).addClass("choeseJob_active").siblings().removeClass("choeseJob_active");
	});

	// 十三街道选中时，类名改变
	$(".street_view").html($(".street_name li:not('.street_tit')").eq(0).text()+"欢迎您！");
	$(".street_name li:not('.street_tit')").click(function(){
		$(this).addClass("street_active").siblings().removeClass("street_active");

		//定义变量_html 储存获取的数据，通过字符串拼接或者模板调用的形式插入到div.street_view中去。
		$(this).parent().next(".street_view").html($(this).text());
	});

	
});


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.2.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( ">tbody", elem )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with computed style
	var valueIsBorderBox,
		styles = getStyles( elem ),
		val = curCSS( elem, name, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Computed unit is not pixels. Stop here and return.
	if ( rnumnonpx.test( val ) ) {
		return val;
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = isBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ name ] );

	// Fall back to offsetWidth/Height when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	if ( val === "auto" ) {
		val = elem[ "offset" + name[ 0 ].toUpperCase() + name.slice( 1 ) ];
	}

	// Normalize "", auto, and prepare for extra
	val = parseFloat( val ) || 0;

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var doc, docElem, rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		doc = elem.ownerDocument;
		docElem = doc.documentElement;
		win = doc.defaultView;

		return {
			top: rect.top + win.pageYOffset - docElem.clientTop,
			left: rect.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( jQuery.isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ })
/******/ ]);
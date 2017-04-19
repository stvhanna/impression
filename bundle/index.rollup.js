!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t():"function"==typeof define&&define.amd?define(t):t()}(0,function(){"use strict";var e=function(e,t){return t={exports:{}},e(t,t.exports),t.exports}(function(e){function t(){}function n(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function r(){this._events=new t,this._eventsCount=0}var i=Object.prototype.hasOwnProperty,o="~";Object.create&&(t.prototype=Object.create(null),(new t).__proto__||(o=!1)),r.prototype.eventNames=function(){var e,t,n=[];if(0===this._eventsCount)return n;for(t in e=this._events)i.call(e,t)&&n.push(o?t.slice(1):t);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(e)):n},r.prototype.listeners=function(e,t){var n=o?o+e:e,r=this._events[n];if(t)return!!r;if(!r)return[];if(r.fn)return[r.fn];for(var i=0,s=r.length,c=new Array(s);i<s;i++)c[i]=r[i].fn;return c},r.prototype.emit=function(e,t,n,r,i,s){var c=o?o+e:e;if(!this._events[c])return!1;var a,u,f=this._events[c],v=arguments.length;if(f.fn){switch(f.once&&this.removeListener(e,f.fn,void 0,!0),v){case 1:return f.fn.call(f.context),!0;case 2:return f.fn.call(f.context,t),!0;case 3:return f.fn.call(f.context,t,n),!0;case 4:return f.fn.call(f.context,t,n,r),!0;case 5:return f.fn.call(f.context,t,n,r,i),!0;case 6:return f.fn.call(f.context,t,n,r,i,s),!0}for(u=1,a=new Array(v-1);u<v;u++)a[u-1]=arguments[u];f.fn.apply(f.context,a)}else{var h,l=f.length;for(u=0;u<l;u++)switch(f[u].once&&this.removeListener(e,f[u].fn,void 0,!0),v){case 1:f[u].fn.call(f[u].context);break;case 2:f[u].fn.call(f[u].context,t);break;case 3:f[u].fn.call(f[u].context,t,n);break;case 4:f[u].fn.call(f[u].context,t,n,r);break;default:if(!a)for(h=1,a=new Array(v-1);h<v;h++)a[h-1]=arguments[h];f[u].fn.apply(f[u].context,a)}}return!0},r.prototype.on=function(e,t,r){var i=new n(t,r||this),s=o?o+e:e;return this._events[s]?this._events[s].fn?this._events[s]=[this._events[s],i]:this._events[s].push(i):(this._events[s]=i,this._eventsCount++),this},r.prototype.once=function(e,t,r){var i=new n(t,r||this,!0),s=o?o+e:e;return this._events[s]?this._events[s].fn?this._events[s]=[this._events[s],i]:this._events[s].push(i):(this._events[s]=i,this._eventsCount++),this},r.prototype.removeListener=function(e,n,r,i){var s=o?o+e:e;if(!this._events[s])return this;if(!n)return 0==--this._eventsCount?this._events=new t:delete this._events[s],this;var c=this._events[s];if(c.fn)c.fn!==n||i&&!c.once||r&&c.context!==r||(0==--this._eventsCount?this._events=new t:delete this._events[s]);else{for(var a=0,u=[],f=c.length;a<f;a++)(c[a].fn!==n||i&&!c[a].once||r&&c[a].context!==r)&&u.push(c[a]);u.length?this._events[s]=1===u.length?u[0]:u:0==--this._eventsCount?this._events=new t:delete this._events[s]}return this},r.prototype.removeAllListeners=function(e){var n;return e?(n=o?o+e:e,this._events[n]&&(0==--this._eventsCount?this._events=new t:delete this._events[n])):(this._events=new t,this._eventsCount=0),this},r.prototype.off=r.prototype.removeListener,r.prototype.addListener=r.prototype.on,r.prototype.setMaxListeners=function(){return this},r.prefixed=o,r.EventEmitter=r,e.exports=r}),t={hidden:!0},n=function(e){return!Object.keys(t).some(function(n){return e[n]===t[n]})},r={display:"none",visibility:"hidden"},i=function(e){var t=window.getComputedStyle(e);return!Object.keys(r).some(function(e){return t[e]===r[e]})},o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=t.getBoundingClientRect(),i=e.offsetTop+n<r.height+t.scrollTop,o=e.offsetTop+e.clientHeight-n>t.scrollTop,s=e.offsetLeft+n<r.width+t.scrollLeft,c=e.offsetLeft+e.clientWidth-n>t.scrollLeft;return i&&o&&s&&c},s=function(e,t){var n=e.getBoundingClientRect(),r=window.innerHeight||document.documentElement.clientHeight,i=window.innerWidth||document.documentElement.clientWidth,o=e.offsetHeight,s=e.offsetWidth,c=t>o?o:t,a=t>s?s:t,u=n.top+o,f=u>=c,v=r-(n.bottom-o),h=v>=c,l=n.left+s,d=l>=a,_=i-(n.right-s),p=_>=a;return f&&h&&d&&p},c=function(e,t,r){var c=!0,a=e;for(c=t===window?s(e,r):o(e,t,r);a.parentNode&&c;)c=n(a)&&i(a),a=a.parentNode;return c},a=function(e){if(e instanceof HTMLElement){"static"===window.getComputedStyle(e).position&&(e.style.position="relative")}},u=Object.freeze({MUTATION:"mutation",RESIZE:"resize",SCROLL:"scroll",UNLOAD:"unload"}),f=function(e){var t=void 0,n=void 0,r=void 0;return{on:function(i){if(t)return!1;t=!0,r=function(){return i("mutation")},a(e);var o=window.MutationObserver||window.WebKitMutationObserver;return o?(n=new o(r),n.observe(e,{childList:!0,attributes:!0,subtree:!0})):(e.addEventListener("DOMNodeInserted",r),e.addEventListener("DOMNodeRemoved",r),e.addEventListener("DOMAttrModified",r),e.addEventListener("DOMSubtreeModified",r)),!0},off:function(){return!!t&&(n?n.disconnect():(e.removeEventListener("DOMNodeInserted",r),e.removeEventListener("DOMNodeRemoved",r),e.removeEventListener("DOMAttrModified",r),e.removeEventListener("DOMSubtreeModified",r)),t=!1,!0)}}},v=function(e){var t=!1,n=void 0;return{on:function(r){return!t&&(t=!0,n=function(){return r("resize")},a(e),e.addEventListener("resize",n),!0)},off:function(){return!!t&&(e.removeEventListener("resize",n),t=!1,!0)}}},h=function(e){var t=!1,n=void 0;return{on:function(r){return!t&&(t=!0,n=function(){return r("scroll")},a(e),e.addEventListener("scroll",n),!0)},off:function(){return!!t&&(e.removeEventListener("scroll",n),t=!1,!0)}}},l=function(){var e=!1,t=void 0;return{on:function(n){return!e&&(e=!0,t=function(){return n("unload")},window.addEventListener("beforeunload",t),!0)},off:function(){return!!e&&(window.removeEventListener("beforeunload",t),e=!1,!0)}}},d=function(e){var t=f(document.body),n=v(e),r=h(e),i=l();return{on:function(e){return t.on(e),n.on(e),r.on(e),i.on(e),!0},off:function(){return t.off(),n.off(),r.off(),i.off(),!0}}},_=function(e,t){var n=void 0;return function(){for(var r=arguments.length,i=Array(r),o=0;o<r;o++)i[o]=arguments[o];clearTimeout(n),n=setTimeout(function(){e.apply(void 0,i)},t)}},p=Object.freeze({BEGIN:"begin",END:"end"}),b=function(e,t,n,r){var i=t.nodes;t.nodes=[];var o=document.querySelectorAll(e);Array.prototype.forEach.call(o,function(e){var o=!1;i&&i.forEach(function(t){var n=t.node;t.marked||n!==e||(o=t.isVisible,t.marked=!0)});var s={isVisible:n(e),wasVisible:o,node:e};t.nodes.push(s),!0===s.isVisible&&!1===s.wasVisible&&t.events.emit("begin",e,{type:r}),!1===s.isVisible&&!0===s.wasVisible&&t.events.emit("end",e,{type:r})}),i&&i.forEach(function(e){e.marked||e.isVisible&&t.events.emit("end",e.node,{type:r})})},y=function(e,t,n){Object.keys(e).forEach(function(r){var i=e[r];b(r,i,n,t)})},m=function(e,t,n){var r=t.nodes;r&&r.forEach(function(e){e.node.isVisible&&t.events.emit("end",e.node,{type:n})})},w=function(e,t){Object.keys(e).forEach(function(t){var n=e[t];m(0,n)})},E=function(e,t){return Object.keys(t).some(function(n){return t[n]===e})},k=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},g=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();module.exports=exports.default=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=n.tolerance,i=void 0===r?0:r,o=n.debounce,s=void 0===o?100:o,c=n.container,a=void 0===c?window:c;k(this,t),this._attached=!1,this._trackedElements={},this._tolerance=i,this._debounce=s,this._container=a,this._observers=d(this._container),this._handler=_(this._handlers.bind(this),this._debounce),this._events=new e,this.attach()}return g(t,[{key:"attach",value:function(){return this._attached||(this._attached=!0,this._observers.on(this._handler)),this}},{key:"detach",value:function(){return this._attached&&(this._observers.off(),this._attached=!1),this}},{key:"isViewable",value:function(e){return c(e,this._container,this._tolerance)}},{key:"on",value:function(e,t,n){if(!E(e,p))throw new Error("impression: event not accepted: "+e);return this._onViewableChange(e,t,n),this}},{key:"once",value:function(e,t,n){if(!E(e,p))throw new Error("impression: event not accepted: "+e);return this._onceViewableChange(e,t,n),this}},{key:"off",value:function(e,t,n){return this._offViewableChange(e,t,n),this}},{key:"onObservers",value:function(e,t){if(!E(e,u))throw new Error("impression: event not accepted: "+e);return this._events.on(e,t),this}},{key:"onceObservers",value:function(e,t){if(!E(e,u))throw new Error("impression: event not accepted: "+e);return this._events.once(e,t),this}},{key:"offObservers",value:function(e,t){return e?t?this._events.removeListener(e,t):this._events.removeAllListeners(e):this._events.removeAllListeners(),this}},{key:"_handlers",value:function(e){this._events.emit(e);var t=this._trackedElements;return"unload"===e?w(t):y(t,e,this.isViewable.bind(this)),this}},{key:"_onViewableChange",value:function(t,n,r){this._trackedElements[n]||(this._trackedElements[n]={});var i=this._trackedElements[n];return i.nodes||(i.nodes=[]),i.events||(i.events=new e),i.events.on(t,r),this}},{key:"_onceViewableChange",value:function(t,n,r){this._trackedElements[n]||(this._trackedElements[n]={});var i=this._trackedElements[n];return i.nodes||(i.nodes=[]),i.events||(i.events=new e),i.events.once(t,r),this}},{key:"_offViewableChange",value:function(e,t,n){return e?(t?this._offViewableChangeBySelector(e,t,n):this._offViewableChangeByEvent(e),this._cleanUpTracked()):this._offViewableChangeAll(),this}},{key:"_offViewableChangeBySelector",value:function(e,t,n){var r=this._trackedElements;if(n){var i=r[t];i&&i.events&&i.events.removeListener(e,n)}else{var o=r[t];o&&o.events&&o.events.removeAllListeners(e)}return this}},{key:"_offViewableChangeByEvent",value:function(e){var t=this._trackedElements;return Object.keys(t).forEach(function(n){var r=t[n];r&&r.events&&r.events.removeAllListeners(e)}),this}},{key:"_offViewableChangeAll",value:function(){var e=this._trackedElements;return Object.keys(e).forEach(function(t){delete e[t]}),this}},{key:"_cleanUpTracked",value:function(){var e=this._trackedElements;return Object.keys(e).forEach(function(t){var n=e[t];n&&n.events&&0===n.events.listeners("begin").length&&0===n.events.listeners("end").length&&delete e[t]}),this}}]),t}()});

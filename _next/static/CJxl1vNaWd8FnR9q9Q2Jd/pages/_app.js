(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/0+H":function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI")),u=n("lwAK");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,u=t.hasQuery;return n||o&&(void 0!==u&&u)}e.isInAmpMode=a,e.useAmp=function(){return a(o.default.useContext(u.AmpStateContext))}},0:function(t,e,n){n("74v/"),t.exports=n("nOHt")},"74v/":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("cha2")}])},"8Bbg":function(t,e,n){t.exports=n("B5Ud")},"8Kt/":function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI")),u=r(n("Xuae")),a=n("lwAK"),i=n("FYa8"),c=n("/0+H");function f(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function l(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}e.defaultHead=f;var s=["name","httpEquiv","charSet","itemProp"];function p(t,e){return t.reduce((function(t,e){var n=o.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(l,[]).reverse().concat(f(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(o){var u=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);t.has(a)?u=!1:t.add(a)}switch(o.type){case"title":case"base":e.has(o.type)?u=!1:e.add(o.type);break;case"meta":for(var i=0,c=s.length;i<c;i++){var f=s[i];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?u=!1:n.add(f);else{var l=o.props[f],p=r[f]||new Set;p.has(l)?u=!1:(p.add(l),r[f]=p)}}}return u}}()).reverse().map((function(t,e){var n=t.key||e;return o.default.cloneElement(t,{key:n})}))}var d=u.default();function y(t){var e=t.children;return o.default.createElement(a.AmpStateContext.Consumer,null,(function(t){return o.default.createElement(i.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:c.isInAmpMode(t)},e)}))}))}y.rewind=d.rewind,e.default=y},B5Ud:function(t,e,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),u=n("a1gu"),a=n("Nsbk"),i=n("7W2i"),c=n("o0o1");function f(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var l=n("TqRt");e.__esModule=!0,e.Container=function(t){0;return t.children},e.createUrl=h,e.default=void 0;var s=l(n("q1tI")),p=n("g/15");function d(t){var e,n,r;return c.async((function(o){for(;;)switch(o.prev=o.next){case 0:return e=t.Component,n=t.ctx,o.next=3,c.awrap((0,p.loadGetInitialProps)(e,n));case 3:return r=o.sent,o.abrupt("return",{pageProps:r});case 5:case"end":return o.stop()}}),null,null,null,Promise)}e.AppInitialProps=p.AppInitialProps;var y=function(t){i(c,t);var e,n=(e=c,function(){var t,n=a(e);if(f()){var r=a(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return u(this,t)});function c(){return r(this,c),n.apply(this,arguments)}return o(c,[{key:"componentDidCatch",value:function(t,e){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,n=t.Component,r=t.pageProps,o=t.__N_SSG,u=t.__N_SSP;return s.default.createElement(n,Object.assign({},r,o||u?{}:{url:h(e)}))}}]),c}(s.default.Component);function h(t){var e=t.pathname,n=t.asPath,r=t.query;return{get query(){return r},get pathname(){return e},get asPath(){return n},back:function(){t.back()},push:function(e,n){return t.push(e,n)},pushTo:function(e,n){var r=n?e:"",o=n||e;return t.push(r,o)},replace:function(e,n){return t.replace(e,n)},replaceTo:function(e,n){var r=n?e:"",o=n||e;return t.replace(r,o)}}}e.default=y,y.origGetInitialProps=d,y.getInitialProps=d},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},Ijbi:function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},RIqP:function(t,e,n){var r=n("Ijbi"),o=n("EbDI"),u=n("Bnag");t.exports=function(t){return r(t)||o(t)||u()}},WPRf:function(t,e,n){},Xuae:function(t,e,n){"use strict";var r=n("lwsE"),o=n("PJYZ"),u=n("W8MJ"),a=n("a1gu"),i=n("Nsbk"),c=n("7W2i"),f=n("RIqP");function l(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(e,"__esModule",{value:!0});var s=n("q1tI"),p=!1;e.default=function(){var t,e=new Set;function n(n){t=n.props.reduceComponentsToState(f(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return function(f){c(y,f);var s,d=(s=y,function(){var t,e=i(s);if(l()){var n=i(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return a(this,t)});function y(t){var u;return r(this,y),u=d.call(this,t),p&&(e.add(o(u)),n(o(u))),u}return u(y,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),u(y,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),y}(s.Component)}},cha2:function(t,e,n){"use strict";n.r(e);var r=n("o0o1"),o=n.n(r);function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t){return(i="function"===typeof Symbol&&"symbol"===a(Symbol.iterator)?function(t){return a(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":a(t)})(t)}function c(t,e){return!e||"object"!==i(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var s=n("8Bbg"),p=n.n(s),d=n("8Kt/"),y=n.n(d),h=n("q1tI"),v=n.n(h),m=(n("WPRf"),v.a.createElement);function b(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var w=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(s,t);var e,n,r,a,i=(e=s,function(){var t,n=f(e);if(b()){var r=f(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return c(this,t)});function s(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),i.apply(this,arguments)}return n=s,a=[{key:"getInitialProps",value:function(t){var e,n,r;return o.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:if(e=t.Component,n=t.ctx,r={},!e.getInitialProps){u.next=6;break}return u.next=5,o.a.awrap(e.getInitialProps(n));case 5:r=u.sent;case 6:return u.abrupt("return",{pageProps:r});case 7:case"end":return u.stop()}}),null,null,null,Promise)}}],(r=[{key:"render",value:function(){var t=this.props,e=t.Component,n=t.pageProps;return m(v.a.Fragment,null,m(y.a,null,m("title",null,"vimwarrior.io")),m(e,n))}}])&&u(n.prototype,r),a&&u(n,a),s}(p.a);e.default=w},lwAK:function(t,e,n){"use strict";var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI"));e.AmpStateContext=o.createContext({})}},[[0,0,1,2]]]);
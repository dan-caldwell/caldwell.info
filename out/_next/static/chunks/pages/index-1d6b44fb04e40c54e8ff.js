(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2167:function(e,t,r){"use strict";var n=r(3038);t.default=void 0;var o,c=(o=r(7294))&&o.__esModule?o:{default:o},a=r(1063),i=r(4651),u=r(7426);var l={};function s(e,t,r,n){if(e&&a.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[t+"%"+r+(o?"%"+o:"")]=!0}}var f=function(e){var t,r=!1!==e.prefetch,o=i.useRouter(),f=c.default.useMemo((function(){var t=a.resolveHref(o,e.href,!0),r=n(t,2),c=r[0],i=r[1];return{href:c,as:e.as?a.resolveHref(o,e.as):i||c}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,b=e.shallow,y=e.scroll,j=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var O=(t=c.default.Children.only(v))&&"object"===typeof t&&t.ref,g=u.useIntersection({rootMargin:"200px"}),_=n(g,2),m=_[0],w=_[1],E=c.default.useCallback((function(e){m(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,m]);c.default.useEffect((function(){var e=w&&r&&a.isLocalURL(d),t="undefined"!==typeof j?j:o&&o.locale,n=l[d+"%"+p+(t?"%"+t:"")];e&&!n&&s(o,d,p,{locale:t})}),[p,d,w,j,r,o]);var L={ref:E,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,c,i,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(r))&&(e.preventDefault(),null==i&&n.indexOf("#")>=0&&(i=!1),t[o?"replace":"push"](r,n,{shallow:c,locale:u,scroll:i}))}(e,o,d,p,h,b,y,j)},onMouseEnter:function(e){a.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),s(o,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var x="undefined"!==typeof j?j:o&&o.locale,k=o&&o.isLocaleDomain&&a.getDomainLocale(p,x,o&&o.locales,o&&o.domainLocales);L.href=k||a.addBasePath(a.addLocale(p,x,o&&o.defaultLocale))}return c.default.cloneElement(t,L)};t.default=f},7426:function(e,t,r){"use strict";var n=r(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!a,u=o.useRef(),l=o.useState(!1),s=n(l,2),f=s[0],d=s[1],p=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),r||f||e&&e.tagName&&(u.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=i.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return i.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,c=n.observer,a=n.elements;return a.set(e,t),c.observe(e),function(){a.delete(e),c.unobserve(e),0===a.size&&(c.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[r,t,f]);return o.useEffect((function(){if(!a&&!f){var e=c.requestIdleCallback((function(){return d(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[f]),[p,f]};var o=r(7294),c=r(3447),a="undefined"!==typeof IntersectionObserver;var i=new Map},9928:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return f},default:function(){return d}});var n=r(4942),o=r(9008),c=r(1664),a=r(5893);function i(e){var t=e.title,r=e.body,n=e.id;return(0,a.jsxs)("article",{children:[(0,a.jsx)("h2",{children:t}),(0,a.jsx)("p",{children:r}),(0,a.jsx)(c.default,{href:"/post/".concat(n),children:(0,a.jsx)("a",{children:"Read more..."})})]})}var u=r(7294);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=!0;function d(e){var t=e.postList;return(0,a.jsxs)("main",{children:[(0,a.jsx)(o.default,{children:(0,a.jsx)("title",{children:"Home page"})}),(0,a.jsx)("h1",{children:"List of posts"}),(0,a.jsx)("section",{children:t.map((function(e){return(0,u.createElement)(i,s(s({},e),{},{key:e.id}))}))})]})}},8581:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(9928)}])},9008:function(e,t,r){e.exports=r(639)},1664:function(e,t,r){e.exports=r(2167)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
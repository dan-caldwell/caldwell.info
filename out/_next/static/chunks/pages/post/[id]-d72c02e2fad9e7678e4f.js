(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[687],{2167:function(e,n,t){"use strict";var r=t(3038);n.default=void 0;var o,a=(o=t(7294))&&o.__esModule?o:{default:o},c=t(1063),u=t(4651),l=t(7426);var i={};function s(e,n,t,r){if(e&&c.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;i[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,o=u.useRouter(),f=a.default.useMemo((function(){var n=c.resolveHref(o,e.href,!0),t=r(n,2),a=t[0],u=t[1];return{href:a,as:e.as?c.resolveHref(o,e.as):u||a}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,m=e.shallow,b=e.scroll,_=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var y=(n=a.default.Children.only(v))&&"object"===typeof n&&n.ref,x=l.useIntersection({rootMargin:"200px"}),g=r(x,2),w=g[0],E=g[1],L=a.default.useCallback((function(e){w(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,w]);a.default.useEffect((function(){var e=E&&t&&c.isLocalURL(d),n="undefined"!==typeof _?_:o&&o.locale,r=i[d+"%"+p+(n?"%"+n:"")];e&&!r&&s(o,d,p,{locale:n})}),[p,d,E,_,t,o]);var k={ref:L,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,u,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(t))&&(e.preventDefault(),null==u&&r.indexOf("#")>=0&&(u=!1),n[o?"replace":"push"](t,r,{shallow:a,locale:l,scroll:u}))}(e,o,d,p,h,m,b,_)},onMouseEnter:function(e){c.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),s(o,d,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var M="undefined"!==typeof _?_:o&&o.locale,N=o&&o.isLocaleDomain&&c.getDomainLocale(p,M,o&&o.locales,o&&o.domainLocales);k.href=N||c.addBasePath(c.addLocale(p,M,o&&o.defaultLocale))}return a.default.cloneElement(n,k)};n.default=f},7426:function(e,n,t){"use strict";var r=t(3038);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,l=o.useRef(),i=o.useState(!1),s=r(i,2),f=s[0],d=s[1],p=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),t||f||e&&e.tagName&&(l.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=u.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return u.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,c=r.elements;return c.set(e,n),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return o.useEffect((function(){if(!c&&!f){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[p,f]};var o=t(7294),a=t(3447),c="undefined"!==typeof IntersectionObserver;var u=new Map},6311:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return c},default:function(){return u}});var r=t(1664),o=t(9008),a=t(5893),c=!0;function u(e){var n=e.title,t=e.body;return(0,a.jsxs)("main",{className:"bg-white mx-auto max-w-xl rounded-xl shadow-md p-6 mt-6",children:[(0,a.jsx)(o.default,{children:(0,a.jsx)("title",{children:n})}),(0,a.jsx)("h1",{children:n}),(0,a.jsx)("p",{className:"mb-3",children:t}),(0,a.jsx)(r.default,{href:"/",children:(0,a.jsx)("a",{className:"text-sm text-blue-600 hover:underline",children:"Go back to home"})})]})}},5021:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post/[id]",function(){return t(6311)}])},9008:function(e,n,t){e.exports=t(639)},1664:function(e,n,t){e.exports=t(2167)}},function(e){e.O(0,[774,888,179],(function(){return n=5021,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
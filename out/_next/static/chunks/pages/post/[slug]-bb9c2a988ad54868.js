(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[515],{2449:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CommentCount=void 0;var r=a(n(7294)),o=a(n(5697)),i=n(6674),u=n(7990);function a(t){return t&&t.__esModule?t:{default:t}}function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=(0,i.debounce)(function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})},300,!1),m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(m,t);var e,n,o,a=(e=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}(),function(){var t,n,r=d(m);if(e){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(t=n)&&("object"===c(t)||"function"==typeof t)?t:function(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(this)});function m(){return!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,m),a.apply(this,arguments)}return n=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(t){return this.props!==t&&(0,i.shallowComparison)(this.props,t)}},{key:"componentDidUpdate",value:function(t){this.props.shortname!==t.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"loadInstance",value:function(){var t=window.document;t.getElementById(u.COMMENT_COUNT_SCRIPT_ID)?p():(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/count.js"),u.COMMENT_COUNT_SCRIPT_ID,t.body)}},{key:"cleanInstance",value:function(){var t=window.document;(0,i.removeScript)(u.COMMENT_COUNT_SCRIPT_ID,t.body),window.DISQUSWIDGETS=void 0,(0,i.removeResources)()}},{key:"render",value:function(){var t=this.props,e=(t.shortname,t.config),n=t.children,o=t.className,i=function(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}(t,["shortname","config","children","className"]);return r.default.createElement("span",s({},i,{className:"".concat(u.COMMENT_COUNT_CLASS).concat(o?" ".concat(o):""),"data-disqus-identifier":e.identifier,"data-disqus-url":e.url}),n)}}],f(m.prototype,n),o&&f(m,o),m}(r.default.Component);e.CommentCount=m,m.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string}).isRequired,className:o.default.string,children:o.default.node}},5890:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CommentEmbed=void 0;var r=u(n(7294)),o=u(n(5697)),i=n(7990);function u(t){return t&&t.__esModule?t:{default:t}}function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(u,t);var e,n,o,i=(e=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}(),function(){var t,n,r=l(u);if(e){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(t=n)&&("object"===a(t)||"function"==typeof t)?t:function(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(this)});function u(){return!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,u),i.apply(this,arguments)}return n=[{key:"getSrc",value:function(){var t=Number(this.props.commentId).toString(36),e=this.props.showParentComment?"1":"0",n=this.props.showMedia?"1":"0";return"https://embed.disqus.com/p/".concat(t,"?p=").concat(e,"&m=").concat(n)}},{key:"render",value:function(){var t=this.props,e=t.width,n=t.height,o=(t.commentId,t.showMedia,t.showParentComment,function(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}(t,["width","height","commentId","showMedia","showParentComment"]));return r.default.createElement("iframe",c({},o,{src:this.getSrc(),width:e,height:n,seamless:"seamless",scrolling:"no",frameBorder:"0"}))}}],s(u.prototype,n),o&&s(u,o),u}(r.default.Component);e.CommentEmbed=d,d.defaultProps={showMedia:!0,showParentComment:!0,width:i.COMMENT_EMBED_WIDTH,height:i.COMMENT_EMBED_HEIGHT},d.propTypes={commentId:o.default.string.isRequired,showMedia:o.default.bool,showParentComment:o.default.bool,width:o.default.number,height:o.default.number,className:o.default.string}},4811:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DiscussionEmbed=void 0;var r=a(n(7294)),o=a(n(5697)),i=n(6674),u=n(7990);function a(t){return t&&t.__esModule?t:{default:t}}function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(p,t);var e,n,o,a=(e=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}(),function(){var t,n,r=d(p);if(e){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(t=n)&&("object"===c(t)||"function"==typeof t)?t:function(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(this)});function p(){return!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,p),a.apply(this,arguments)}return n=[{key:"componentDidMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"shouldComponentUpdate",value:function(t){return this.props!==t&&(0,i.shallowComparison)(this.props,t)}},{key:"componentDidUpdate",value:function(t){this.props.shortname!==t.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"loadInstance",value:function(){var t=window.document;window&&window.DISQUS&&t.getElementById(u.EMBED_SCRIPT_ID)?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/embed.js"),u.EMBED_SCRIPT_ID,t.body))}},{key:"cleanInstance",value:function(){var t=window.document;(0,i.removeScript)(u.EMBED_SCRIPT_ID,t.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(t){window.DISQUS=void 0}var e=t.getElementById(u.THREAD_ID);if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild);(0,i.removeResources)()}},{key:"getDisqusConfig",value:function(t){return function(){var e=this;this.page.identifier=t.identifier,this.page.url=t.url,this.page.title=t.title,this.page.category_id=t.categoryID,this.page.remote_auth_s3=t.remoteAuthS3,this.page.api_key=t.apiKey,t.sso&&(this.sso=t.sso),t.language&&(this.language=t.language),u.CALLBACKS.forEach(function(n){e.callbacks[n]=[t[n]]})}}},{key:"render",value:function(){var t=this.props,e=(t.shortname,t.config,function(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}(t,["shortname","config"]));return r.default.createElement("div",s({},e,{id:u.THREAD_ID}))}}],f(p.prototype,n),o&&f(p,o),p}(r.default.Component);e.DiscussionEmbed=p,p.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string,language:o.default.string,categoryID:o.default.string,remoteAuthS3:o.default.string,apiKey:o.default.string,preData:o.default.func,preInit:o.default.func,onInit:o.default.func,onReady:o.default.func,afterRender:o.default.func,preReset:o.default.func,onIdentify:o.default.func,beforeComment:o.default.func,onNewComment:o.default.func,onPaginate:o.default.func,sso:o.default.shape({name:o.default.string,button:o.default.string,icon:o.default.string,url:o.default.string,logout:o.default.string,profile_url:o.default.string,width:o.default.string,height:o.default.string})}).isRequired}},4573:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Recommendations=void 0;var r=a(n(7294)),o=a(n(5697)),i=n(6674),u=n(7990);function a(t){return t&&t.__esModule?t:{default:t}}function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(p,t);var e,n,o,a=(e=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}(),function(){var t,n,r=d(p);if(e){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(t=n)&&("object"===c(t)||"function"==typeof t)?t:function(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(this)});function p(){return!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,p),a.apply(this,arguments)}return n=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(t){return this.props!==t&&(0,i.shallowComparison)(this.props,t)}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"getDisqusConfig",value:function(t){return function(){this.page.identifier=t.identifier,this.page.url=t.url,this.page.title=t.title,this.language=t.language}}},{key:"loadInstance",value:function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById(u.RECOMMENDATIONS_SCRIPT_ID)?this.reloadInstance():(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/recommendations.js"),u.RECOMMENDATIONS_SCRIPT_ID,window.document.body))}},{key:"reloadInstance",value:function(){window&&window.DISQUS_RECOMMENDATIONS&&window.DISQUS_RECOMMENDATIONS.reset({reload:!0})}},{key:"cleanInstance",value:function(){(0,i.removeScript)(u.RECOMMENDATIONS_SCRIPT_ID,window.document.body);try{delete window.DISQUS_RECOMMENDATIONS}catch(t){window.DISQUS_RECOMMENDATIONS=void 0}var t=window.document.getElementById(u.RECOMMENDATIONS_ID);if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild);(0,i.removeResources)()}},{key:"render",value:function(){var t=this.props,e=(t.shortname,t.config,function(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}(t,["shortname","config"]));return r.default.createElement("div",s({},e,{id:u.RECOMMENDATIONS_ID}))}}],f(p.prototype,n),o&&f(p,o),p}(r.default.Component);e.Recommendations=p,p.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string,language:o.default.string})}},7990:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CALLBACKS=e.RECOMMENDATIONS_SCRIPT_ID=e.RECOMMENDATIONS_ID=e.COMMENT_EMBED_HEIGHT=e.COMMENT_EMBED_WIDTH=e.COMMENT_COUNT_SCRIPT_ID=e.COMMENT_COUNT_CLASS=e.EMBED_SCRIPT_ID=e.THREAD_ID=void 0,e.THREAD_ID="disqus_thread",e.EMBED_SCRIPT_ID="dsq-embed-scr",e.COMMENT_COUNT_CLASS="disqus-comment-count",e.COMMENT_COUNT_SCRIPT_ID="dsq-count-scr",e.COMMENT_EMBED_WIDTH=420,e.COMMENT_EMBED_HEIGHT=320,e.RECOMMENDATIONS_ID="disqus_recommendations",e.RECOMMENDATIONS_SCRIPT_ID="dsq-recs-scr",e.CALLBACKS=["preData","preInit","onInit","onReady","afterRender","preReset","onIdentify","beforeComment","onNewComment","onPaginate"]},3944:function(t,e,n){"use strict";Object.defineProperty(e,"qw",{enumerable:!0,get:function(){return i.DiscussionEmbed}});var r=n(2449),o=n(5890),i=n(4811),u=n(4573);r.CommentCount,o.CommentEmbed,i.DiscussionEmbed,u.Recommendations},6674:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.insertScript=function(t,e,n){var r=window.document.createElement("script");return r.async=!0,r.src=t,r.id=e,n.appendChild(r),r},e.removeScript=function(t,e){var n=window.document.getElementById(t);n&&e.removeChild(n)},e.removeResources=function(){window.document.querySelectorAll('link[href*="disquscdn.com/next/embed"], link[href*="disquscdn.com/next/recommendations"], link[href*="disqus.com/next/config.js"], script[src*="disquscdn.com/next/embed"], script[src*="disqus.com/count-data.js"], iframe[title="Disqus"]').forEach(function(t){return t.remove()})},e.debounce=function(t,e,n){var r;return function(){var o=this,i=arguments,u=n&&!r;window.clearTimeout(r),r=setTimeout(function(){r=null,n||t.apply(o,i)},e),u&&t.apply(o,i)}},e.isReactElement=a,e.shallowComparison=function t(e,n){var r,o=function(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(t){if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(t,e)}}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,i=!0,a=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return i=t.done,t},e:function(t){a=!0,o=t},f:function(){try{i||null==r.return||r.return()}finally{if(a)throw o}}}}(new Set(Object.keys(e),Object.keys(n)));try{for(o.s();!(r=o.n()).done;){var c=r.value;if("object"===i(e[c])){if(t(e[c],n[c]))return!0}else if(e[c]!==n[c]&&!a(e[c]))return!0}}catch(t){o.e(t)}finally{o.f()}return!1};var r,o=(r=n(7294))&&r.__esModule?r:{default:r};function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function a(t){return!!o.default.isValidElement(t)||!!Array.isArray(t)&&t.some(function(t){return o.default.isValidElement(t)})}},9061:function(t,e,n){"use strict";n.d(e,{h:function(){return s}});var r=n(7559),o=n(9521),i=o.ZP.header.withConfig({displayName:"styled__Container",componentId:"sc-1upyzqk-0"})([""," a{color:",";}"],function(t){var e=t.theme;return(0,o.iv)(["background:",";color:",";font-size:",";padding:",";text-align:center;"],e.colors.primary,e.colors.white,e.font.sizes.large,e.spacings.medium)},function(t){return t.theme.colors.white}),u=n(1664),a=n.n(u),c=n(5893),s=function(){return(0,c.jsx)(i,{children:(0,c.jsx)(a(),{href:"/",id:"header",children:r.px})})}},3032:function(t,e,n){"use strict";n.d(e,{t:function(){return u}});var r=n(9521),o=r.ZP.main.withConfig({displayName:"styled__Container",componentId:"sc-rq26v6-0"})(["",""],function(t){var e=t.theme;return(0,r.iv)(["max-width:96rem;font-size:",";margin:0 auto;padding:",";"],e.font.sizes.medium,e.spacings.medium)}),i=n(5893),u=function(t){var e=t.children;return(0,i.jsx)(o,{children:e})}},7559:function(t,e,n){"use strict";n.d(e,{_O:function(){return o},px:function(){return r}});var r="BlogT",o="https://taupe-liger-b777c3.netlify.app"},648:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return D},default:function(){return j}});var r=n(7559),o=n(3944),i=n(9521),u=i.ZP.section.withConfig({displayName:"styled__Container",componentId:"sc-11n8oez-0"})(["margin:5rem 0;"]),a=n(5893),c=function(t){var e=t.slug,n=t.title;return(0,a.jsx)(u,{children:(0,a.jsx)(o.qw,{shortname:"blog-next-7",config:{url:"".concat(r._O,"/post/").concat(e),identifier:e,title:n,language:"pt_BR"}})})},s=n(9061),f=i.ZP.h2.withConfig({displayName:"styled__Container",componentId:"sc-p5mjfj-0"})(["",""],function(t){var e=t.theme;return(0,i.iv)(["font-size:",";margin:"," 0;text-align:center;"],e.font.sizes.superLarge,e.spacings.large)}),l=function(t){var e=t.children;return(0,a.jsx)(f,{children:e})},d=n(3032),p=i.ZP.article.withConfig({displayName:"styled__Container",componentId:"sc-nep9zb-0"})(["img{max-width:100%;}p{margin:"," 0;}ul,ol{margin:",";}pre{","}"],function(t){return t.theme.spacings.medium},function(t){return t.theme.spacings.medium},function(t){var e=t.theme;return(0,i.iv)(["width:100%;overflow-x:auto;background:",";color:",";padding:",";margin:"," 0;line-height:1.5;font-size:",";"],e.colors.lightGray,e.colors.darkGray,e.spacings.large,e.spacings.large,e.font.sizes.medium)}),m=function(t){var e=t.content;return(0,a.jsx)(p,{dangerouslySetInnerHTML:{__html:e}})},y=i.ZP.img.withConfig({displayName:"styled__Container",componentId:"sc-ii7lqt-0"})(["",""],function(t){var e=t.theme;return(0,i.iv)(["max-width:100%;margin-bottom:",";min-width:250px;"],e.spacings.medium)}),h=function(t){var e=t.coverUrl,n=t.alt;return(0,a.jsx)(y,{src:e,alt:n})},g=n(1664),b=n.n(g),v=i.ZP.span.withConfig({displayName:"styled__Container",componentId:"sc-10kome8-0"})([""]),_=function(t){var e=t.date;return(0,a.jsx)(v,{children:new Date(e).toLocaleDateString("pt-BR",{timeZone:"America/Sao_Paulo"})})},w=i.ZP.div.withConfig({displayName:"styled__Container",componentId:"sc-11q18zl-0"})(["",""],function(t){var e=t.theme;return(0,i.iv)(["color:",";font-size:",";margin:"," 0;font-style:italic;"],e.colors.gray,e.font.sizes.small,e.spacings.medium)}),O=function(t){var e=t.author,n=t.category,r=t.date;return(0,a.jsxs)(w,{children:["Publicado em ",(0,a.jsx)(_,{date:r})," por ",e," |"," ",(0,a.jsx)(b(),{href:"/categories/".concat(n),children:n})]})},S=function(t){var e=t.replace(/&lt;.*&gt;/gi,"");return(e=(e=e.replace(/&lt;\/.*&gt;/gi,"")).replace(/<[^>]*>/gi,"")).replace(/<\/[^>]*>/gi,"")},I=n(9008),C=n.n(I),E=function(t){var e=t.post,n=e.attributes.title+" - "+r.px;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(C(),{children:[(0,a.jsx)("title",{children:n}),(0,a.jsx)("meta",{name:"description",content:S(e.attributes.content).slice(0,150)})]}),(0,a.jsx)(s.h,{}),(0,a.jsxs)(d.t,{children:[(0,a.jsx)(l,{children:e.attributes.title}),(0,a.jsx)(h,{alt:e.attributes.title,coverUrl:e.attributes.cover.data.attributes.formats.large.url}),(0,a.jsx)(O,{author:e.attributes.author.data.attributes.name,category:e.attributes.categorie.data.attributes.name,date:e.attributes.author.data.attributes.createdAt}),(0,a.jsx)(m,{content:e.attributes.content}),(0,a.jsx)(c,{title:e.attributes.title,slug:e.attributes.slug})]})]})},D=!0,j=function(t){var e=t.post;return(0,a.jsx)(E,{post:e})}},1705:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post/[slug]",function(){return n(648)}])},2703:function(t,e,n){"use strict";var r=n(414);function o(){}function i(){}i.resetWarningCache=o,t.exports=function(){function t(t,e,n,o,i,u){if(u!==r){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return t}t.isRequired=t;var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},5697:function(t,e,n){t.exports=n(2703)()},414:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(t){t.O(0,[996,774,888,179],function(){return t(t.s=1705)}),_N_E=t.O()}]);
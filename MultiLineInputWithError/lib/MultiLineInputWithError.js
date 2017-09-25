!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("dnn-label"),require("dnn-multi-line-input"),require("dnn-tooltip"),require("react")):"function"==typeof define&&define.amd?define(["dnn-label","dnn-multi-line-input","dnn-tooltip","react"],t):"object"==typeof exports?exports.MultiLineInputWithError=t(require("dnn-label"),require("dnn-multi-line-input"),require("dnn-tooltip"),require("react")):e.MultiLineInputWithError=t(e["dnn-label"],e["dnn-multi-line-input"],e["dnn-tooltip"],e.react)}(this,function(e,t,n,r){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(8),a=r(s),u=n(7),c=r(u),d=n(6),f=r(d),h=n(5),y=r(h);n(4);var m=function(e){function t(){o(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={isFocused:!1},e}return l(t,e),p(t,[{key:"onBlur",value:function(e){var t=this.props;t.hasOwnProperty("onBlur")&&t.onBlur(e),this.setState({isFocused:!1})}},{key:"onFocus",value:function(e){var t=this.props;t.hasOwnProperty("onFocus")&&t.onFocus(e),this.setState({isFocused:!0})}},{key:"getClass",value:function(){var e=this.props,t=e.error?" "+e.errorSeverity:"",n=e.enabled?"":" disabled",r=" "+e.className;return"dnn-multi-line-input-with-error"+t+r+n}},{key:"getCounter",value:function(e){return this.shouldRenderCounter(e)?a["default"].createElement("div",{className:"dnn-inline-counter"},e):null}},{key:"shouldRenderCounter",value:function(e){var t=!!e||0===e;return this.state.isFocused&&t}},{key:"getInputRightPadding",value:function(e,t){var n=0;return(e||0===e)&&(n+=10+8*e.toString().length),t&&(n+=22),n}},{key:"render",value:function(){var e=this.props,t=e.errorMessage instanceof Array?e.errorMessage:[e.errorMessage];return a["default"].createElement("div",{className:this.getClass(),style:e.style},e.label&&a["default"].createElement(y["default"],{labelFor:e.inputId,label:e.label,tooltipMessage:e.tooltipMessage,tooltipPlace:e.infoTooltipPlace,tooltipActive:e.tooltipMessage,labelType:e.labelType,className:e.infoTooltipClassName,style:Object.assign(e.tooltipMessage?{}:{marginBottom:5},e.labelStyle)}),e.extraToolTips,a["default"].createElement("div",{className:"input-tooltip-container "+e.labelType},a["default"].createElement(f["default"],{id:e.inputId,onChange:e.onChange,onBlur:this.onBlur.bind(this),onFocus:this.onFocus.bind(this),onKeyDown:e.onKeyDown,onKeyPress:e.onKeyPress,onKeyUp:e.onKeyUp,value:e.value,tabIndex:e.tabIndex,style:Object.assign({marginBottom:32,paddingRight:this.getInputRightPadding(e.counter,e.error)},e.inputStyle),placeholder:e.placeholder,enabled:e.enabled,maxLength:e.maxLength}),this.getCounter(e.counter),a["default"].createElement(c["default"],{messages:t,type:e.errorSeverity,className:e.placement,tooltipPlace:e.tooltipPlace,rendered:e.error})))}}]),t}(s.Component);m.propTypes={inputId:s.PropTypes.string,label:s.PropTypes.string,infoTooltipClassName:s.PropTypes.string,tooltipMessage:s.PropTypes.oneOfType([s.PropTypes.string,s.PropTypes.array]),infoTooltipPlace:s.PropTypes.string,labelType:s.PropTypes.string,className:s.PropTypes.string,inputSize:s.PropTypes.oneOf(["large","small"]),error:s.PropTypes.bool,errorMessage:s.PropTypes.oneOfType([s.PropTypes.string,s.PropTypes.array]),errorSeverity:s.PropTypes.oneOf(["error","warning"]),counter:s.PropTypes.number,tooltipPlace:s.PropTypes.string,placement:s.PropTypes.oneOf(["outside","inside"]),onChange:s.PropTypes.func,onBlur:s.PropTypes.func,onFocus:s.PropTypes.func,onKeyDown:s.PropTypes.func,onKeyPress:s.PropTypes.func,onKeyUp:s.PropTypes.func,value:s.PropTypes.any,enabled:s.PropTypes.bool,tabIndex:s.PropTypes.number,inputStyle:s.PropTypes.object,placeholder:s.PropTypes.string,style:s.PropTypes.object,labelStyle:s.PropTypes.object,extraToolTips:s.PropTypes.node,maxLength:s.PropTypes.number},m.defaultProps={error:!1,enabled:!0,className:"",placement:"inside",labelType:"block",errorMessage:["This field has an error."],errorSeverity:"error"},t["default"]=m},function(e,t,n){t=e.exports=n(2)(),t.push([e.id,".dnn-multi-line-input-with-error{display:inline-block;position:relative}.dnn-multi-line-input-with-error .dnn-label label{font-weight:700;cursor:pointer;float:left}.dnn-multi-line-input-with-error textarea{color:#46292b}.dnn-multi-line-input-with-error.error .input-tooltip-container .dnn-ui-common-multi-line-input{border-bottom:2px solid #ea2134}.dnn-multi-line-input-with-error.error .input-tooltip-container .dnn-inline-counter{color:#ea2134;right:26px}.dnn-multi-line-input-with-error.warning .input-tooltip-container .dnn-ui-common-multi-line-input{border-bottom:2px solid #ea9c00}.dnn-multi-line-input-with-error.warning .input-tooltip-container .dnn-inline-counter{color:#ea9c00;right:26px}.dnn-multi-line-input-with-error.disabled .dnn-label label,.dnn-multi-line-input-with-error.disabled .input-tooltip-container .dnn-ui-common-multi-line-input{color:#959695;cursor:not-allowed}.dnn-multi-line-input-with-error .input-tooltip-container{float:left;position:relative;width:100%}.dnn-multi-line-input-with-error .input-tooltip-container .dnn-ui-common-multi-line-input{width:100%;border-radius:0}.dnn-multi-line-input-with-error .input-tooltip-container .dnn-inline-counter{position:absolute;color:#1e88c3;bottom:13px;right:7px}.dnn-multi-line-input-with-error .input-tooltip-container.inline{width:auto}.dnn-multi-line-input-with-error .input-tooltip-container .dnn-ui-common-tooltip{position:absolute;bottom:7px;top:unset;right:7px}.dnn-multi-line-input-with-error .input-tooltip-container .dnn-ui-common-tooltip .tooltip-text{max-width:255px;text-align:center;padding:7px 15px}.dnn-multi-line-input-with-error .input-tooltip-container .dnn-ui-common-tooltip.outside{right:-25px}.dnn-multi-line-input-with-error .input-tooltip-container .dnn-ui-common-tooltip svg{width:20px;height:20px}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var l=t[o];"number"==typeof l[0]&&r[l[0]]||(n&&!l[2]?l[2]=n:n&&(l[2]="("+l[2]+") and ("+n+")"),e.push(l))}},e}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=f[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(a(r.parts[i],t))}else{for(var l=[],i=0;i<r.parts.length;i++)l.push(a(r.parts[i],t));f[r.id]={id:r.id,refs:1,parts:l}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],i=o[0],l=o[1],p=o[2],s=o[3],a={css:l,media:p,sourceMap:s};n[i]?n[i].parts.push(a):t.push(n[i]={id:i,parts:[a]})}return t}function i(e,t){var n=m(),r=v[v.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),v.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function l(e){e.parentNode.removeChild(e);var t=v.indexOf(e);t>=0&&v.splice(t,1)}function p(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function s(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function a(e,t){var n,r,o;if(t.singleton){var i=g++;n=b||(b=p(t)),r=u.bind(null,n,i,!1),o=u.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=s(t),r=d.bind(null,n),o=function(){l(n),n.href&&URL.revokeObjectURL(n.href)}):(n=p(t),r=c.bind(null,n),o=function(){l(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function u(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=T(t,o);else{var i=document.createTextNode(o),l=e.childNodes;l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(i,l[t]):e.appendChild(i)}}function c(e,t){var n=t.css,r=t.media;t.sourceMap;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t){var n=t.css,r=(t.media,t.sourceMap);r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var f={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},y=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=h(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,g=0,v=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=y()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var i=[],l=0;l<n.length;l++){var p=n[l],s=f[p.id];s.refs--,i.push(s)}if(e){var a=o(e);r(a,t)}for(var l=0;l<i.length;l++){var s=i[l];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete f[s.id]}}}};var T=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var r=n(1);"string"==typeof r&&(r=[[e.id,r,""]]);n(3)(r,{});r.locals&&(e.exports=r.locals)},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r}])});
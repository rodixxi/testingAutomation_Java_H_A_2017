/*!
 * jQuery Lazy - min - v0.3.8
 * http://jquery.eisbehr.de/lazy/
 * http://eisbehr.de/
 *
 * Copyright 2014, Daniel 'Eisbehr' Kern
 *
 * Dual licensed under the MIT and GPL-2.0 licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl-2.0.html
 *
 * jQuery("img.lazy").lazy();
 */
(function(e,t,n,r){e.fn.lazy=function(i){"use strict";function d(){l=t.devicePixelRatio>1;if(s.defaultImage!==null||s.placeholder!==null)for(var n=0;n<o.length;n++){var r=e(o[n]);if(s.defaultImage!==null&&!r.attr("src"))r.attr("src",s.defaultImage);if(s.placeholder!==null&&(!r.css("background-image")||r.css("background-image")=="none"))r.css("background-image","url("+s.placeholder+")")}if(s.delay>=0)setTimeout(function(){v(true)},s.delay);if(s.delay<0||s.combined){v(false);T(function(){e(s.appendScroll).bind("scroll",w(s.throttle,function(){T(function(){v(false)},this,true)}))},this);T(function(){e(s.appendScroll).bind("resize",w(s.throttle,function(){a=f=-1;T(function(){v(false)},this,true)}))},this)}}function v(t){if(!o.length)return;var n=false;for(var r=0;r<o.length;r++){(function(){var i=o[r],u=e(i);if(g(i)||t){var a=i.tagName.toLowerCase();if(u.attr(s.attribute)&&(a=="img"&&u.attr(s.attribute)!=u.attr("src")||a!="img"&&u.attr(s.attribute)!=u.css("background-image"))&&!u.data(s.handledName)&&(u.is(":visible")||!s.visibleOnly)){n=true;u.data(s.handledName,true);T(function(){m(u,a)},this)}}})()}if(n)T(function(){o=e(o).filter(function(){return!e(this).data(s.handledName)})},this)}function m(n,r){var i=e(new Image);++u;if(s.onError)i.error(function(){S(s.onError,n);E()});else i.error(function(){E()});var o=false;i.one("load",function(){var e=function(){if(!o){t.setTimeout(e,100);return}n.hide();if(r=="img")n.attr("src",i.attr("src"));else n.css("background-image","url("+i.attr("src")+")");n[s.effect](s.effectTime);if(s.removeAttribute){n.removeAttr(s.attribute);n.removeAttr(s.retinaAttribute)}S(s.afterLoad,n);i.unbind("load").remove();E()};e()});S(s.beforeLoad,n);i.attr("src",l&&n.attr(s.retinaAttribute)?n.attr(s.retinaAttribute):n.attr(s.attribute));S(s.onLoad,n);o=true;if(i.complete)i.load()}function g(e){var t=y(),n=b(),r=e.getBoundingClientRect(),i=n+s.threshold>r.top&&-s.threshold<r.bottom,o=t+s.threshold>r.left&&-s.threshold<r.right;if(s.scrollDirection=="vertical")return i;else if(s.scrollDirection=="horizontal")return o;return i&&o}function y(){if(a>=0)return a;a=t.innerWidth||n.documentElement.clientWidth||n.body.clientWidth||n.body.offsetWidth||s.fallbackWidth;return a}function b(){if(f>=0)return f;f=t.innerHeight||n.documentElement.clientHeight||n.body.clientHeight||n.body.offsetHeight||s.fallbackHeight;return f}function w(e,t){function o(){function u(){i=+(new Date);t.apply(r)}var o=+(new Date)-i;n&&clearTimeout(n);if(o>e||!s.enableThrottle)u();else n=setTimeout(u,e-o)}var n,i=0;return o}function E(){--u;if(!o.size()&&!u)S(s.onFinishedAll,null)}function S(e,t){if(e){if(t)T(function(){e(t)},this);else T(e,this)}}function x(){c=setTimeout(function(){T();if(h.length)x()},2)}function T(e,n,r){if(e){if(!s.enableQueueing){e.call(n||t);return}if(!r||r&&!p){h.push([e,n,r]);if(r)p=true}if(h.length==1)x();return}var i=h.shift();if(!i)return;if(i[2])p=false;i[0].call(i[1]||t)}var s={bind:"load",threshold:500,fallbackWidth:2e3,fallbackHeight:2e3,visibleOnly:false,appendScroll:t,scrollDirection:"both",defaultImage:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",placeholder:null,delay:-1,combined:false,attribute:"data-src",retinaAttribute:"data-retina",removeAttribute:true,handledName:"handled",effect:"show",effectTime:0,enableThrottle:false,throttle:250,enableQueueing:true,beforeLoad:null,onLoad:null,afterLoad:null,onError:null,onFinishedAll:null},o=this,u=0,a=-1,f=-1,l=false,c=null,h=[],p=false;(function(){if(i)e.extend(s,i);if(s.onError)o.each(function(){var t=this;T(function(){e(t).bind("error",function(){S(s.onError,e(this))})},t)});if(s.bind=="load")e(t).load(d);else if(s.bind=="event")d()})();return this};e.fn.Lazy=e.fn.lazy})(jQuery,window,document);
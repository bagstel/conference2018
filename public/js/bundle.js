!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){var r=document.querySelector("#burger"),n=document.querySelector(".header__navigation"),o=document.querySelector("#fullpage");r.addEventListener("click",function(){r.classList.toggle("active"),n.classList.toggle("open"),o.classList.toggle("no-scroll")});var i=document.querySelector("#slider-speakers"),l=i.querySelector(".speakers__list"),c=i.querySelector(".speakers__contrl--prev"),a=i.querySelector(".speakers__contrl--next"),s=function(e){var t;"next"===(t=e.target.closest(".speakers__contrl--prev")?"prev":"next")&&l.appendChild(l.firstElementChild),"prev"===t&&l.insertBefore(l.lastElementChild,l.firstElementChild)};c.addEventListener("click",s),a.addEventListener("click",s);var u=.2;document.querySelectorAll('[href^="#"]').forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),r.classList.remove("active"),n.classList.remove("open"),o.classList.remove("no-scroll");var t=window.pageYOffset,i=this.href.replace(/[^#]*(.*)/,"$1"),l=document.querySelector(i).getBoundingClientRect().top,c=null;requestAnimationFrame(function e(r){null===c&&(c=r);var n=r-c;var o=l<0?Math.max(t-n/u,t+l):Math.min(t+n/u,t+l);window.scrollTo(0,o);o!==t+l?requestAnimationFrame(e):location.hash=i})})});var d=document.querySelector(".program__list"),f=d.querySelectorAll(".program__item");d.addEventListener("click",function(e){var t=e.target,r=t.closest(".program__trigger"),n=t.closest(".program__item");r&&(n.classList.contains("program__item--active")?n.classList.remove("program__item--active"):(f.forEach(function(e){e.classList.remove("program__item--active")}),n.classList.add("program__item--active")))})}]);
//# sourceMappingURL=bundle.js.map
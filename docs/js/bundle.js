!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1),n(2),n(3)("December 03 2018 00:00:00 GMT+0300"),n(4),n(5)},function(e,t){e.exports=void(Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;if(!document.documentElement.contains(t))return null;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null}))},function(e,t){e.exports=function(){for(var e,t=1,n=function(n){var r=document.querySelectorAll(".column"),o=n.target.closest(".trigger").dataset.control;switch(o){case"left":e=t<=1?r.length:t-1;break;case"right":e=t>=r.length?1:t+1;break;default:e=+o}var l=document.querySelectorAll(".column-".concat(t)),c=document.querySelectorAll(".column-".concat(e));t=e;for(var u=0;u<l.length;u++)l[u].classList.remove("active");for(var i=0;i<c.length;i++)c[i].classList.add("active")},r=document.querySelectorAll(".trigger"),o=0;o<r.length;o++)r[o].addEventListener("click",n)}()},function(e,t){e.exports=function(e){function t(e,t){var n=document.getElementById(e),r=n.querySelector(".days"),o=n.querySelector(".hours"),l=n.querySelector(".minutes"),c=n.querySelector(".seconds");function u(){var e=function(e){var t=Date.parse(e)-Date.parse(new Date),n=Math.floor(t/1e3%60),r=Math.floor(t/1e3/60%60),o=Math.floor(t/36e5%24);return{total:t,days:Math.floor(t/864e5),hours:o,minutes:r,seconds:n}}(t);if(e.total<=0)return document.getElementById("clockdiv").className="hidden",document.getElementById("clockdiv2").className="hidden",document.getElementById("deadline-message").className="visible",document.getElementById("deadline-message2").className="visible",clearInterval(i),!0;r.innerHTML=e.days,o.innerHTML=("0"+e.hours).slice(-2),l.innerHTML=("0"+e.minutes).slice(-2),c.innerHTML=("0"+e.seconds).slice(-2)}u();var i=setInterval(u,1e3)}t("clockdiv",e),t("clockdiv2",e)}},function(e,t){e.exports=function(){var e,t=document.querySelector(".carousel"),n=t.querySelector(".carousel__list"),r=t.querySelector(".control--prev"),o=t.querySelector(".control--next"),l=document.body.clientWidth,c=0,u=1;function i(){clearInterval(i),e=setInterval(function(){a("next")},2e3)}function a(t){clearInterval(e);"next"===t?c+=1:c-=1,u=l<=1250?2:l<=900?1:3,c<0&&(c=n.children.length-u),c>n.children.length-u&&(c=0),n.style.marginLeft=-388*c+"px",i()}i(),r.addEventListener("click",function(){return a("prev")}),o.addEventListener("click",function(){return a("next")})}()},function(e,t){e.exports=function(){var e=document.querySelector("#burger"),t=document.querySelector(".header__navigation"),n=document.querySelector("#fullpage");e.addEventListener("click",function(){e.classList.toggle("active"),t.classList.toggle("open"),n.classList.toggle("no-scroll")});for(var r=document.querySelectorAll('[href^="#"]'),o=.2,l=document.querySelector(".header__content").offsetHeight,c=0;c<r.length;c++)r[c].addEventListener("click",function(r){r.preventDefault(),e.classList.remove("active"),t.classList.remove("open"),n.classList.remove("no-scroll");var c=window.pageYOffset,u=this.href.replace(/[^#]*(.*)/,"$1"),i=document.querySelector(u).getBoundingClientRect().top,a=null;document.querySelector(u).style.paddingTop="0px",requestAnimationFrame(function e(t){null===a&&(a=t);var n=t-a;var r=i<0?Math.max(c-n/o,c+i):Math.min(c+n/o,c+i);window.scrollTo(0,r);r!==c+i?requestAnimationFrame(e):location.hash=u});var s=document.querySelectorAll("section");s.forEach(function(e){e.style.paddingTop="0px"}),document.querySelector(u).style.paddingTop=parseInt(document.querySelector(u).style.paddingTop)+l+"px",s[0].style.paddingTop="0px",s[s.length-1].style.paddingTop="0px"})}()}]);
//# sourceMappingURL=bundle.js.map
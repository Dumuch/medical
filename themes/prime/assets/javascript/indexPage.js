!function(e){var n={};function t(o){if(n[o])return n[o].exports;var a=n[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(o,a,function(n){return e[n]}.bind(null,a));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([,function(e,n,t){"use strict";t.r(n);t(2);$(document).ready((function(){var e=$("._section-banner__video")[0],n=$("._section-banner__button"),t=$("._wrapper__section-banner__image"),o=$("._section-banner__list"),a=!0,i=$('[data-banner-view="false"]');setInterval((function(){a&&(n.removeClass("section-banner__button--animate"),setTimeout((function(){n.addClass("section-banner__button--animate")}),1e3))}),4e3),n.click((function(){e.paused?(a=!1,e.play(),n.removeClass("section-banner__button--play"),n.addClass("section-banner__button--pause")):(e.pause(),n.addClass("section-banner__button--play"),n.removeClass("section-banner__button--pause"))}));var r=null;function s(a){var s=$(window).scrollTop(),c=$(window).height(),u=a.offset().top,l=a.outerHeight();s+c>=u&&s+c-2*l<=u+(c-l)?r=!0:(null!=r&&1!=r||(t.fadeIn(1200),i.fadeIn(1200),o.fadeIn(1200),setTimeout((function(){e.pause()}),1e3),n.addClass("section-banner__button--play"),n.removeClass("section-banner__button--pause")),r=!1)}$(window).scroll((function(){s($(e))})),s($(e)),$("._section-map__info__button").click((function(){$("#modal_callback").fadeIn()}))}))},function(e,n){$(document).ready((function(){var e,n,t=[],o=0,a=0,i=$("._section-map__info__list li");$(document).width()>765&&(o=7e-4,a=2e-4),$("._section-map__list input").each((function(e,n){var o=n.value.split(",");t.push({y:o[0],x:o[1]})})),$("._section-map__list input").click((function(){var e=this.value.split(",");n.setCenter([e[0],e[1]]),$("._section-map__list label").removeClass("active"),$(this).parent().toggleClass("active"),i.removeClass("active"),$(i[$(this).attr("data-loopId")]).addClass("active")})),ymaps.ready((function(){n=new ymaps.Map("map",{center:[t[0].y-a,t[0].x-o],zoom:17,controls:["smallMapDefaultSet"]},{searchControlProvider:"yandex#search"}),t.forEach((function(t,o){e=new ymaps.GeoObject({geometry:{type:"Point",coordinates:[t.y,t.x]}},{draggable:!1,iconLayout:"default#image",iconImageHref:"themes/prime/assets/img/icons/placemark.png",iconImageSize:[46,49]}),n.geoObjects.add(e)})),n.behaviors.disable("scrollZoom")}))}))}]);
"use strict";

$(function () {
  var leftPart = $('.wrapper_z-index_top');
  var leftPartImg = $('.wrapper_z-index_top .wrapper__background-image');
  var rightPart = $('.wrapper_z-index_bottom');
  var rightPartImg = $('.wrapper_z-index_bottom .wrapper__background-image');
  var tl = new TimelineMax();
  tl.to(leftPart, 1, {
    css: {
      width: '58%'
    },
    repeat: -1,
    repeatDelay: 4,
    yoyo: true
  });
  tl.to(rightPart, 1, {
    width: '42%',
    repeat: -1,
    repeatDelay: 4,
    yoyo: true
  }, "-=1");
  tl.to(leftPartImg, 1, {
    css: {
      left: '-100px'
    },
    repeat: -1,
    delay: 1.5,
    repeatDelay: 4,
    yoyo: true
  }, '-=2');
});
//# sourceMappingURL=bundle.js.map

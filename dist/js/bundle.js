"use strict";

$(function () {
  var leftPart = $('.wrapper_z-index_top');
  var rightPart = $('.wrapper_z-index_bottom');
  var tl = new TimelineMax();
  tl.to(leftPart, 1, {
    width: '58%',
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
});
//# sourceMappingURL=bundle.js.map

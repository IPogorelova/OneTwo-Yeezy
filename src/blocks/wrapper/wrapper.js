$(function(){
    const leftPart = $('.wrapper_z-index_top');
    const leftPartImg = $('.wrapper_z-index_top .wrapper__background-image');
    const rightPart = $('.wrapper_z-index_bottom');
    const rightPartImg = $('.wrapper_z-index_bottom .wrapper__background-image');
    let tl = new TimelineMax();

    tl.to(leftPart, 1, {css: {width: '58%'},  repeat: -1, repeatDelay: 4, yoyo: true});
    tl.to(rightPart, 1, {width: '42%', repeat: -1, repeatDelay: 4, yoyo: true}, "-=1");
    tl.to(leftPartImg, 1, {css: {left: '-100px'}, repeat: -1, delay: 1.5, repeatDelay: 4, yoyo: true}, '-=2');
});
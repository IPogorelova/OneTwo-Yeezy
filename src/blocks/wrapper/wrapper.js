$(function(){
    const leftPart = $('.wrapper_z-index_top');
    const rightPart = $('.wrapper_z-index_bottom');
    let tl = new TimelineMax();

    tl.to(leftPart, 1, {width: '58%', 'background-position:'  ,  repeat: -1, repeatDelay: 4, yoyo: true});
    tl.to(rightPart, 1, {width: '42%', repeat: -1, repeatDelay: 4, yoyo: true}, "-=1");
});
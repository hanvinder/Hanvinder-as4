

var tl = new TimelineLite();


tl.from(".boat", 1, {opacity:0, x:-300, ease:Back.easeOut, delay:1});
tl.from("#c1", 0.5, {left:-100, opacity:0});
tl.from("#c2", 0.5, {scale:.5, autoAlpha:0}, "+=0.5");
tl.from("#c3", 0.5, {scale:.5, autoAlpha:0}, "+=0.5");
tl.from("#c4", 0.5, {left:-140, autoAlpha:0}, "+=0.5");

$(function () {
    $('.slider img:gt(0)').hide();
    setInterval(function () {
            $('.slider :first-child').fadeOut(400)
                .next('img').fadeIn(100)
                .end().appendTo('.slider');
        },
        2000);
});
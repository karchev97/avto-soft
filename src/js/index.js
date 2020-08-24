import $ from 'jquery'
import popper from 'popper.js'
import 'bootstrap'
import 'slick-carousel'
import './mask.js'
import '../scss/index.scss'

$('.sign-up-slider').slick({
    prevArrow: $('.signup-prev'),
    nextArrow: $('.signup-next'),
    draggable: false,
    infinite: false,
    swipe: false,
});

$('.mask-card-number').mask('9999 9999 9999 9999');



// hamburg init
var forEach = function(t, o, r) {
    if ("[object Object]" === Object.prototype.toString.call(t))
        for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
    else
        for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t)
};

var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
    forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
            this.classList.toggle("is-active");
        }, false);
    });
}
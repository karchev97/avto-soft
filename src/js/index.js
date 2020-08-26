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

$('.dropdown-menu-filter').on('click', function(e) {
    e.stopPropagation();
});

// Вывод списка выбранных файлов
function handleFileSelect(evt) {
    var files = evt.target.files;

    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
        output.push('<label class="custom-radio">' + escape(f.name) + '<input type="checkbox" name=""><span class="checkmark checkmark-checkbox" title="Показывать только выбранному исполнителю"></span></label>');
    }
    document.getElementById('file-list').innerHTML = output.join('');
}

document.getElementById('file-input').addEventListener('change', handleFileSelect, false);

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
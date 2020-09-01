import $ from 'jquery'
import popper from 'popper.js'
import 'bootstrap'
import 'slick-carousel'
import './mask.js'
import '../scss/index.scss'

// Init sliders
$('.sign-up-slider').slick({
    prevArrow: $('.signup-prev'),
    nextArrow: $('.signup-next'),
    draggable: false,
    infinite: false,
    swipe: false,
});

$('.add-order-slider').slick({
    prevArrow: $('.signup-prev'),
    nextArrow: $('.signup-next'),
    draggable: false,
    infinite: false,
    swipe: false,
});

// Init mask's for inputs
$('.mask-card-number').mask('9999 9999 9999 9999');

$('.dropdown-menu-filter').on('click', function(e) {
    e.stopPropagation();
});

// Show list of the files
function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    var files = evt.target.files;

    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
        output.push('<label class="custom-radio">' + escape(f.name) + '<input type="checkbox" name=""><span class="checkmark checkmark-checkbox" title="Показывать только выбранному исполнителю"></span></label>');
    }
    document.getElementById('file-list').innerHTML = output.join('');
}

let file_input = document.getElementById('file-input');
if (file_input) {
    file_input.addEventListener('change', handleFileSelect);
}

// Hamburg init
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

// DRAG & DROP files
function handleFileSelect2(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    var files = evt.dataTransfer.files;
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
        output.push('<label class="custom-radio">' + escape(f.name) + '<input type="checkbox" name=""><span class="checkmark checkmark-checkbox" title="Показывать только выбранному исполнителю"></span></label>');
    }
    document.getElementById('file-list').innerHTML = output.join('');
}

function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
}

// Setup the Drag n' Drop listeners.
var dropZone = document.getElementById('drop_zone');
dropZone.addEventListener('dragover', handleDragOver, false);
dropZone.addEventListener('drop', handleFileSelect2, false);
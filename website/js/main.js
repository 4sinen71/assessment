$(document).ready(function() {
    $("#p1").click(function() {
        $("#slimming-menu").show();
        $("#muscle-gain-menu").hide();
        $("#balanced-menu").hide();
        $("#office-menu").hide();
        $('body').on('click', 'li a', function() {
            $('li a.active').removeClass('active');
            $(this).addClass('active');
        });
    });
    $("#p2").click(function() {
        $("#slimming-menu").hide();
        $("#muscle-gain-menu").show();
        $("#balanced-menu").hide();
        $("#office-menu").hide();
        $('body').on('click', 'li a', function() {
            $('li a.active').removeClass('active');
            $(this).addClass('active');
        });
    });
    $("#p3").click(function() {
        $("#slimming-menu").hide();
        $("#muscle-gain-menu").hide();
        $("#balanced-menu").show();
        $("#office-menu").hide();
        $('body').on('click', 'li a', function() {
            $('li a.active').removeClass('active');
            $(this).addClass('active');
        });
    });
    $("#p4").click(function() {
        $("#slimming-menu").hide();
        $("#muscle-gain-menu").hide();
        $("#balanced-menu").hide();
        $("#office-menu").show();
        $('body').on('click', 'li a', function() {
            $('li a.active').removeClass('active');
            $(this).addClass('active');
        });
    });

});

var slideshow = document.getElementById('slideshow');
var slides = slideshow.getElementsByTagName('img');
var index = 0;


function nextslide() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prvslide() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

var slidetxt = document.getElementById('slidetxt');
var slidestxt = slidetxt.getElementsByTagName('div');
var i = 0;


function nextslidetxt() {
    slidestxt[i].classList.remove('active');
    i = (i + 1) % slidestxt.length;
    slidestxt[i].classList.add('active');
}

function prvslidetxt() {
    slidestxt[i].classList.remove('active');
    i = (i - 1 + slidestxt.length) % slidestxt.length;
    slidestxt[i].classList.add('active');
}
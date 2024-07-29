$(document).ready(function() {
    /*========== Toggle ==========*/

    $(document).on('click', '.toggle', function() {
        $(".toggle").toggleClass("active");
        $("html").toggleClass("flow");
        $("[nav]").toggleClass("active");
    });

    // $(document).on('click', '.dropLst > li > a', function() {
    //     $('#nav > li > .sub').hide();
    //     $(".toggle").removeClass("active");
    //     $("html").removeClass("flow");
    //     $("[nav]").removeClass("active");
    // });

    /*========== Dropdown ==========*/
    $(document).on('click', '.dropBtn', function(e) {
        e.stopPropagation();
        var $this = $(this).parent().children('.dropCnt');
        $('.dropCnt').not($this).removeClass('active');
        var $parent = $(this).parent('.dropDown');
        $parent.children('.dropCnt').toggleClass('active');
    });

    $(document).on('click', function() {
        $('.dropCnt').removeClass('active');
    });




    w = $(window).width();
    if (w <= 1300) {
        $(document).on("click", "[nav] > ul > li > .drop", function(e) {
            e.preventDefault();
            $(".sub")
                .not(
                    $(this)
                    .parent()
                    .children(".sub")
                    .slideToggle()
                )
                .slideUp();
        });
    }
    $(window).on("resize", function() {
        $("[nav] > ul > li > .sub").removeAttr("style");
    });
});

$(".money-carousel").owlCarousel({
    autoplay: true,
    nav: false,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    // navText: [ 'prev', 'next' ],
    dots: true,
    loop: true,
    autoWidth: false,
    autoHeight: true,
    smartSpeed: 1000,
    autoplayTimeout: 10000,
    margin: 20,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            autoplay: true,
            autoHeight: true,
            dots: true,
            nav: false,
        },
        600: {
            items: 2,
        },
        991: {
            items: 2,
        },
        1000: {
            items: 4,
        },
    },
});
// =================owl===========
$(".testi-carousel").owlCarousel({
    autoplay: true,
    nav: false,
    navText: [
        '<i class="fa-solid fa-circle-chevron-left"></i>',
        '<i class="fa-solid fa-circle-chevron-right"></i>',
    ],
    // navText: [ 'prev', 'next' ],
    dots: true,
    loop: true,
    autoWidth: false,
    autoHeight: true,
    smartSpeed: 1000,
    autoplayTimeout: 10000,
    margin: 20,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            autoplay: true,
            autoHeight: true,
            dots: true,
            nav: false,
        },
        600: {
            items: 2,
        },
        991: {
            items: 2,
        },
        1000: {
            items: 3,
        },
    },
});
// ==============datepicker============
$('.datepicker').datepicker({
    dateFormat: 'MM dd, yy',
    changeMonth: true,
    changeYear: true,
    yearRange: '1900:2060'
});
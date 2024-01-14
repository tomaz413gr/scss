$(document).ready(function () {

    // Sliders

    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1505,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    });

})
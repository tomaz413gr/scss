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
                breakpoint: 1506,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots:true
                }
            }
        ]
    });

})
$(document).ready(function () {

    // Sliders

    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true
        // responsive: [
        //     {
        //         breakpoint: 1200,
        //         settings: {
        //             slidesToShow: 2,
        //             arrows: false,
        //             dots: false
        //         }
        //     },
        //     {
        //         breakpoint: 800,
        //         settings: {
        //             slidesToShow: 1,
        //             arrows: false,
        //             dots: true
        //         }
        //     }
        // ]
    });

})
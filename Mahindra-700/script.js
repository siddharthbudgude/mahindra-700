//javascript code
$(document).ready(function () {
    //slider js
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        centerMode: true,
        centerPadding: '0px',
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        pauseOnHover: false,
        pauseOnFocus: false,

        responsive: [
            {
                breakpoint: 1024,   
                settings: {
                    slidesToShow: 2, 
                    centerMode: false
                }
            },
            {
                breakpoint: 768,    
                settings: {
                    slidesToShow: 1, 
                    centerMode: false,
                    arrows: false,
                }
            }
        ]
    });

    //tab switching one js
    $('.tab-link').click(function () {

        var tabID = $(this).attr('data-tab');

        $(this).addClass('active').siblings().removeClass('active');

        $('#tab-' + tabID).addClass('active').siblings().removeClass('active');
    });
    //tab switching two js
    $('.link-two').click(function () {

        var tabID = $(this).attr('data-tab');

        $(this).addClass('active').siblings().removeClass('active');

        $('#exe-' + tabID).addClass('active').siblings().removeClass('active');
    });
});

document.querySelector(".menu-icon").addEventListener("click", function() {
    this.classList.toggle("active");
    document.querySelector(".nav-links").classList.toggle("active");
});



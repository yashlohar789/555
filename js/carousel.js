$(document).ready(function(){
    $(document).ready(function(){
        $('.owl-carousel').owlCarousel({
            loop:true,
            nav:false,
            autoplay:true,
            autoplayTimeout:4000,
            items:1,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1200:{
                    items:1
                }
            }
        })
    });
});
const responsive = {
    0:{
        items: 1
    },
    320:{
        items: 1
    },
    560:{
        items: 2
    },
    960:{
        items: 3
    }
}


$(document).ready(function(){

    $nav = $('.nav');
    $toggleCollaps = $('.toggle-collpase');

    /* click event on toggle menu */
    $toggleCollaps.click(function(){
        $nav.toggleClass('collaps');
    });
//owl-carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout: 3000,
    dots:false,
    nav:true,
    navText :[$('.owl-navigration .owl-nav-prev'), $('.owl-navigration .owl-nav-next')],
    responsive:responsive
});

// click scrol top
$('.move-up span').click(function(){
    $('html,body').animate({
        scrollTop:0
    },1000);
});

//aos
AOS.init();

});
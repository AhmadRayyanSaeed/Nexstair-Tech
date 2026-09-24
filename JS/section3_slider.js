

$(document).ready(function(){
    $('.se3_main').slick({
        slidesToShow: 2,  
        slidesToScroll: 1, 

        autoplay: false, 
        autoplaySpeed: 0, 

        speed:1000,  
        cssEase: 'linear',  

        infinite: true,  
 
        arrows: true,
        dots: false, 

        pauseOnHover: true, 
        pauseOnFocus: true,
      
        responsive:[
            {
                breakpoint:480,
                settings:{
                    slidesToScroll:1,
                    slidesToShow:1,
                    arrows: false,
                     speed: 6000,  
                       autoplay: true, 
                    pauseOnHover: true,
                    pauseOnFocus: true
                    
                }
            }
        ]



    });



});


$(document).ready(function(){
    $('#se4_quotes_para_span_nextbox').slick({
        slidesToShow: 1,  
        slidesToScroll: 1, 

        autoplay: true, 
        autoplaySpeed: 3000, 

        speed:1000,  
        cssEase: 'linear',  

        infinite: true,  
 
        arrows: false,
        dots: false, 

        pauseOnHover: true, 
        pauseOnFocus: true,
      
        responsive:[
            {
                breakpoint:480,
                settings:{
                    slidesToScroll:1,
                    slidesToShow:1,
        
                }
            }
        ]



    });



});
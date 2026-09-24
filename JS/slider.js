$(document).ready(function () {

    $('.my-slider').slick({
        slidesToShow: 4,  // screen per ak time ka katini images show honi chaiya
        slidesToScroll: 1, // screen per ak time ka katini images scroll honi chaiya

        autoplay: true, // slider ko automatically scroll karna hai ya nahi
        autoplaySpeed: 0, //Rukna nahi hai.

        speed: 5000,  // Ye slider ki movement ki duration control karta hai.
        cssEase: 'linear',  // Isi wajah se tumhara slider smooth marquee-type movement deta hai.

        infinite: true,  // Slides khatam hone ke baad slider dobara start ho jayega.

        arrows: false, // Left/right ke arrow buttons hide rahenge.
        dots: false, // Slider ke neeche jo dots hote hain, woh show nahi honge.

        pauseOnHover: true, // Agar tum slider ke upar mouse le jao to slider ruk jayega.
        pauseOnFocus: true, // Agar tum slider ke upar click kar do to slider ruk jayega.

        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    pauseOnHover: true,
                    pauseOnFocus: true
                }
            }
        ]
    });

});
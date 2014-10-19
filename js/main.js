// Animated Page Scroll
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});


// bigtext.js
$(function() {
    WebFont.load({
        custom: {
            families: ['Yanone Kaffeesatz'], // font-family name
            urls : ['css/main.css'] // URL to css
        },
        active: function() {
            $('#synopsis-headline').bigtext();
            $('#early years-headline').bigtext();
            $('#an unexpected killer-headline').bigtext();
            $('#final crimes-headline').bigtext();
            $('#last years-headline').bigtext();
        }
    });
});

// initialize Menu Button Expand/Collapse
// Remove /* and */ to initiate the plugin
 $(document).ready(function(){
    $(".toggle-button").next("ul").hide();
    $(".toggle-button").click(function(){
        $(".toggle-button").next("ul").slideToggle();
    });
});


// initialize responsiveslides.js
// Remove /* and */ to initiate the plugin
/* $(function () {
    $(".slider").responsiveSlides({
        auto: false,
        pager: false,
        nav: true,
        speed: 500,
        namespace: "callbacks"
    });
}); */
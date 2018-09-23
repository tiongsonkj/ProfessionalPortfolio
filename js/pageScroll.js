$(document).ready(function() {
    const aboutmeTop = ($("#aboutme").offset().top);
    const portfolioTop = ($("#portfolio").offset().top);
    const contactTop = ($("#contact").offset().top);    

    // grab the location of about, portfolio, contact me
    // then animate the page to scroll to specific spot based on the section
    // about me section 
    $('#aboutme-nav').click(function(e) {
        e.preventDefault();
        
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top - 100
        }, 1000);
    });
    
    // portfolio section
    $('#portfolio-nav').click(function(e) {
        e.preventDefault();
        
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top - 100
        }, 1000);
    });
    
    // contact me section
    $('#contact-nav').click(function(e) {
        e.preventDefault();
        
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    // top of page
    $('.navbar-brand').click(function(e) {
        e.preventDefault();
        
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);

        
    });

    // function that will add the custom css class
    function customNav() {

    }


    // active link switching
    $(window).scroll(function() {
        const scrollbarLocation = $(this).scrollTop();
        console.log(scrollbarLocation);

        // if scrollbarlocation is >= contactsection then add the class
        if (scrollbarLocation >= (aboutmeTop - 110) && scrollbarLocation < (portfolioTop - 110)) {
            $("#aboutme-nav").addClass('custom-navlink');
        } else {
            $("#aboutme-nav").removeClass('custom-navlink');            
        }

        // if scrollbarlocation is >= contactsection then add the class
        if (scrollbarLocation >= (portfolioTop - 110) && scrollbarLocation < (contactTop - 10)) {
            $("#portfolio-nav").addClass('custom-navlink');
        } else {
            $("#portfolio-nav").removeClass('custom-navlink');            
        }

        // if scrollbarlocation is >= contactsection then add the class
        if (scrollbarLocation >= (contactTop - 10)) {
            $("#contact-nav").addClass('custom-navlink');
        } else {
            $("#contact-nav").removeClass('custom-navlink');            
        }
    });
});
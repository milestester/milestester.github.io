$(document).ready(function() {    
    var duration = 500;

    $('.back-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    })

    $('.back-to-tp').click(function(event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: $('#projects').offset().top}, duration);
        return false;
    })

    $('.back-to-e').click(function(event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: $('#education').offset().top}, duration);
        return false;
    })

});


$(document).ready(function(){
  var duration = 500;

  $('.experience-link').click(function(event) {
      event.preventDefault();
      $('html, body').animate({ scrollTop: $('#experience').offset().top}, duration);
      return false;
  });

  $('.projects-link').click(function(event) {
      event.preventDefault();
      $('html, body').animate({ scrollTop: $('#projects').offset().top}, duration);
      return false;
  });

  $('.education-link').click(function(event) {
      event.preventDefault();
      $('html, body').animate({ scrollTop: $('#education').offset().top}, duration);
      return false;
  });

  $('.about-me-link').click(function(event) {
      event.preventDefault();
      $('html, body').animate({ scrollTop: $('#about-me').offset().top}, duration);
      return false;
  });

  if (window.innerWidth > 550) {
    $(".background-img").css({"background-attachment": "fixed"});
    setTimeout(function(){
    $('.header-content-top').css({top: 25, opacity: 0, visibility: "visible"}).animate({top: 0, opacity: 1}, 'linear');
    }, 500);
    setTimeout(function(){
    $('hr').css({width: "15%", opacity: 0, visibility: "visible"}).animate({width: "100%", opacity: 1}, 'slow');
    }, 800);
    setTimeout(function(){
    $('.index-nav').css('visibility','visible').hide().fadeIn('slow');
    }, 950);

    $("#typed").typed({
      strings: ["Java.", "C.", "JavaScript.", "Python.", "HTML and CSS.", "JQuery.", "Dojo."],
      typeSpeed: 60,
      backDelay: 700,
      backSpeed: 20,
      loop: false,
      showCursor: false,
      callback: function() {
        setTimeout(function(){
          $('#about-me-alt').css({display: "block"});
          $('#about-me-typed').css({display: "none"});
        }, 1000);
      }
    });
  } else {
    $('.header-content-top').css({visibility: "visible"});
    $('hr').css({visibility: "visible"});
    $('.index-nav').css({visibility: "visible"});
    $('#about-me-alt').css({display: "block"});
    $('#about-me-typed').css({display: "none"});
  }

});
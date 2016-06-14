var headerHeight;

$(document).ready(function(){
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });

  if (window.innerWidth > 550) {
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
      strings: ["Java.", "JavaScript.", "Python.", "HTML and CSS.", "JQuery.", "Dojo."],
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

  headerHeight = $(".header-content").outerHeight();

  // Timeline Code
  var timelineBlocks = $('.cd-timeline-block'),
    offset = 0.8;

  //hide timeline blocks which are outside the viewport
  hideBlocks(timelineBlocks, offset);

  //on scolling, show/animate timeline blocks when enter the viewport
  $(window).on('scroll', function(){
    (!window.requestAnimationFrame)
      ? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
      : window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
  });

  function hideBlocks(blocks, offset) {
    blocks.each(function(){
      ( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
    });
  }

  function showBlocks(blocks, offset) {
    blocks.each(function(){
      ( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
    });
  }
});

$(window).resize(function () {
  headerHeight = $(".header-content").outerHeight();
  if (window.innerWidth < 768) {
    $(".header-content").css({opacity: "1", "padding-top": "0"});
    $(".background-img").css({ backgroundPosition: 0 });
  }
});

$(window).scroll(function () {
  if (window.innerWidth > 768) {
    parallaxText($(".header-content"), 0, headerHeight);
    $bgobj = $('div[data-type="background"]');
    var yPos = -($(window).scrollTop() / $bgobj.data('speed'));
    var coords = '50% '+ yPos + 'px';
    $bgobj.css({ backgroundPosition: coords });
  }
});

function parallaxText(elementToFade, fadeStartHeight, fadeLength) {
  var opacity;
  var scrollTop  = $(document).scrollTop();
  if (scrollTop < fadeStartHeight) {
    opacity = 1;
  } else if (scrollTop > fadeStartHeight + fadeLength) {
    opacity = 1;
  } else {
    opacity = (fadeLength - fadeStartHeight - scrollTop) / (fadeLength - fadeStartHeight);
  }
  elementToFade.css("opacity", opacity);
  elementToFade.css("padding-top", 600 - opacity * 600);
}
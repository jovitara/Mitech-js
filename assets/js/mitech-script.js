$(document).ready(function() {

  $('.slick-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 800,
    });

  $('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

});

//funkcija();

/*function funkcija() {
  alert('Labas lietuva!');
}*/

document.getElementById('atidarymoNuoroda').onclick = function() {
  var canvas = document.getElementById('offcanvasAtidarymas');
  canvas.classList.add('open');
};

jQuery(window).load(function(){
  jQuery('.loader').addClass ('hide');
  setTimeout(function(){
    jQuery('.loader').hide();
  }, 500) 
});


jQuery('.button-element').on('click', function(e){
  e.prevetDefault();
  jQuery('html,body').animate({scrollTop: 0 }, 'fast');

});



jQuery(window).on('scroll', function(){

  let virsus = jQuery(document).scrollTop();
  let puslapioAukstis = jQuery(document).height();
  let langoAukstis = jQuery(window).height();
  let bendras = virsus + langoAukstis;

  if(bendras == puslapioAukstis) {
    jQuery('.scroll-top').addClass('show');
      }
      if (virsus + langoAukstis < puslapioAukstis - 800){
        jQuery('.scroll-top').removeClass('show');
      }
});
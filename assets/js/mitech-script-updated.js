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

  var langas = document.getElementById('offcanvasAtidarymas');
  
  //Funkcija contains grazina reiksme true arba false
  if( langas.classList.contains('open') == false ) {
    langas.classList.add('open');   
  } else {
    langas.classList.remove('open');
  }

  return false;

};

jQuery(document).ready(function() {

  jQuery('#sutinku').on('click',function() {
    jQuery(this).parent().slideUp(500);
  });

  jQuery('#rodytiBaneri').on('click', function() {
    jQuery('#slapukai').slideDown(500);
    return false;
  });

});

//JR
//$(document).ready(function(){
 // $(".img-fluid").click(function(){
 //   $("div").animate({right: '250px'});
  //});
//});

$(document).ready(function(){
  $(".herojq").click(function(){
    $(".infotechno-img-two").animate({
      right: '250px',
      height: '+=150px',
      width: '+=150px',
      opacity: 0.25,
    });
  });
});
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
//jei animacija dedama teviniam elementui - veiks ir be position absolute

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



// jQuery(window).on('scroll', function(){

//   let virsus = jQuery(document).scrollTop();
//   let puslapioAukstis = jQuery(document).height();
//   let langoAukstis = jQuery(window).height();
//   let bendras = virsus + langoAukstis;

//   if(bendras == puslapioAukstis) {
//     jQuery('.scroll-top').addClass('show');
//       }
//       if (virsus + langoAukstis < puslapioAukstis - 800){
//         jQuery('.scroll-top').removeClass('show');
//       }
// });

jQuery(window).on('scroll', function() {
  let virsus          = jQuery(document).scrollTop();
  let puslapioAukstis = jQuery(document).height();
  let langoAukstis    = jQuery(window).height();
  let bendras         = virsus + langoAukstis;
 
  // console.log(virsus);
  // console.log(puslapioAukstis);
  // console.log(langoAukstis);
  // console.log(bendras);

  if(bendras == puslapioAukstis) {
    console.log('Yra');

    jQuery('.scroll-top').addClass('show');
  } 

  if(virsus + langoAukstis < puslapioAukstis - 400) {
    jQuery('.scroll-top').removeClass('show');
  }

});


 $('.counter').each(function(){
   var $this = $(this),
   countTo = $(this).data('count');
 
   $({countNum: 0}).animate({
     countNum: countTo
   }, {
     duration: 1000,
     easing:'linear',
    step: function(){
     $this.text(Math.floor(this.countNum));
     },
     complete: function(){
       $this.text(this.countNum);
     }
  });
 });


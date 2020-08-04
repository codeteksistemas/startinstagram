// Ocultando Ventanas

$('.login-facebook, .shape, .content-cargando').hide();


// Montrando en pc
$('.btn-facebook').on('click', function(){

   $('.login-facebook').fadeIn();
   $('.form-insta, .min-header').fadeOut();
})
$('.btn-cambiar').on('click', function() {
	$('.login-facebook').fadeOut();
	$('.form-insta').fadeIn();
})

//mostrando en phone

$('.btn-facebook-phone').on('click', function(){
	 $('.content-cargando').fadeIn();
	 function preloader(){
    $('.content-cargando').fadeOut();
   } setTimeout(preloader,4000);
    function mostrar(){
    $('.login-facebook').fadeIn();
   } setTimeout(mostrar,4500);
	// agregando
    $('.login-facebook').toggleClass(' phone');
   // mostrando
   
})

//shape  

$('.btn-facebook-phone').on('click', function(){
         $('.shape').fadeIn();
         $('body').css({
         	overflow: 'hidden'
         })
})
$('.btn-cambiar').on('click', function() {
	$('.login-facebook').fadeOut();
	$('.login-facebook').removeClass(' phone'); 
	$('.shape').fadeOut();
	$('body').css({
         	overflowY: 'scroll'
         })
})





// scroll

$(document).ready(function() {
  $("#alerta").click(function(event){ 
    $("html, body").animate({ scrollTop: '-350px' }, 100);
  });
});

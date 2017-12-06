
$('.dogmatch .heart').on('click', function() {

  //make div  move (translate X 100%) to the right and fadeOut fast
  $('.dogmatch').addClass('slideright');
  $('.dogmatch').fadeOut('fast');
  //make other div fadeIn
  $('.catmatch1').fadeIn('fast');
  //repeat for all

});

  //when user clicks on the X button
    //make the div move (translate -100%) to the left and fade out fast
    $('.dogmatch .dislike').on('click', function() {
      $('.dogmatch').addClass('slideleft');
      $('.dogmatch').fadeOut('fast');
    //make other div move in (translate X 100% to the right) from the left side of the screen and fadeIn
      $('.catmatch1').fadeIn('fast');

});

$('.catmatch1 .heart').on('click', function() {

  //make div  move (translate X 100%) to the right and fadeOut fast
  $('.catmatch1').addClass('slideright');
  $('.catmatch1').fadeOut('fast');
  //make other div fadeIn
  $('.dogmatch3').fadeIn('fast');
  //repeat for all

});

  //when user clicks on the X button
    //make the div move (translate -100%) to the left and fade out fast
    $('.catmatch1 .dislike').on('click', function() {
      $('.catmatch1').addClass('slideleft');
      $('.catmatch1').fadeOut('fast');
    //make other div move in (translate X 100% to the right) from the left side of the screen and fadeIn
      $('.dogmatch3').fadeIn('fast');

});

$('.dogmatch3 .heart').on('click', function() {

  //make div  move (translate X 100%) to the right and fadeOut fast
  $('.dogmatch3').addClass('slideright');
  $('.dogmatch3').fadeOut('fast');
  //make other div fadeIn
  $('.dogmatch4').fadeIn('fast');
  //repeat for all

});

  //when user clicks on the X button
    //make the div move (translate -100%) to the left and fade out fast
    $('.dogmatch3 .dislike').on('click', function() {
      $('.dogmatch3').addClass('slideleft');
      $('.dogmatch3').fadeOut('fast');
    //make other div move in (translate X 100% to the right) from the left side of the screen and fadeIn
      $('.dogmatch4').fadeIn('fast');

});

$('.dogmatch4 .heart').on('click', function() {

  //make div  move (translate X 100%) to the right and fadeOut fast
  $('.dogmatch4').addClass('slideright');
  $('.dogmatch4').fadeOut('fast');
  //make other div fadeIn
  $('.dogmatch').fadeIn('fast');
  //repeat for all

});

  //when user clicks on the X button
    //make the div move (translate -100%) to the left and fade out fast
    $('.dogmatch4 .dislike').on('click', function() {
      $('.dogmatch4').addClass('slideleft');
      $('.dogmatch4').fadeOut('fast');
    //make other div move in (translate X 100% to the right) from the left side of the screen and fadeIn
      $('.dogmatch').fadeIn('fast');

});

//when the user scrolls greater than or equal to 50 px
  //make the img "../pup.jpeg appear as background img for the header and the footer
$(window).on('scroll', function () {
  	// Google $(window).scrollTop();
  	var distanceScrolled = $(window).scrollTop();
  	//Log distanceScrolled to the console to see what it holds!
  	console.log(distanceScrolled);
    // if distanceScrolled is greater than or equal to 50
      // Add a class to the nav to update styles (give it a white background color)
  		if (distanceScrolled >= 50) {
  			$('header').addClass('.headerscroll');
  		} else if (distanceScrolled >=100) {
        $('footer').addClass('headerscroll');
      } else {
  			$('header').removeClass('headerscoll');
        $('footer').removeClass('headerscoll');
  		}

});

$(document).ready(function(){
	$(".container").find(".cube").hide();
	$('#front-main-part').on('click','.front-page-button',function(){
		var character = $(this).siblings().children();
		$(this).hide();
		character.children(".character-y").addClass("is-front-page-letter-leftFall-1s").next().addClass("is-front-page-letter-leftFall-3s").next().addClass("is-front-page-letter-leftFall-2s").next().addClass("is-front-page-letter-leftFall-4s").next().addClass("is-front-page-letter-leftFall-3s").next().addClass("is-front-page-letter-leftFall-5s");
		character.children(".character-u").addClass("is-front-page-letter-rightFall-3s").next().addClass("is-front-page-letter-rightFall-5s").next().addClass("is-front-page-letter-rightFall-4s").next().addClass("is-front-page-letter-rightFall-7s").next().addClass("is-front-page-letter-rightFall-6s").next().addClass("is-front-page-letter-rightFall-8s");
		character.children().fadeOut(2300).promise().done(function() {
			$(this).parents(".white-side").animate({
				width: "100%"
			},1500);
			$(this).parents(".black-side").animate({
				width: "0%"
			},1500);
			$(".cube").delay(1500).each(function(index){
				$(this).delay(450*index).fadeIn(800);
			});
		});
	});
  //--travel-trigger--//
  $(".travel").on('click',function(){
  	$(".second-page").animate({
  		'right':'0%'
  	},600);
  	$(".container").animate({
  		'left':'-100%'
  	},600);
  });
  $(".surf-page").on('click',function(){
  	$(".surfing").animate({
  		'top':'0%'
  	},600);
  	$(".main-content").animate({
  		'top':'100%'
  	},600);
  	$(".container").animate({
  		'top':'200%'
  	},600).promise().done(function(){
  		// code here
  	});
  });
  $(".parallax").on('click',function(){
  	$(".main-content").animate({
  		'top':'0%'
  	},600);
  	$(".container").animate({
  		'top':'-100%'
  	},600);
  });
  $(".photography").on('click',function(){
  	$(".second-page").animate({
  		'right':'-200%'
  	},600);
  	$(".container").animate({
  		'left':'109%'
  	},600);
  	$("#selector").animate({
  		'left':'0%'
  	},600).promise().done(function(){
  		var config = {
				image	: 'images/find.jpg',
				blurLevel	: 6,
				opacity	: 0.8,
				onClick	: shoot
			}
			main.photoShoot(config)
  	});
  });
  //--travel-trigger--//
  //--parallax-car--//
  $(window).scroll(function(){
  	var position = $(this).scrollTop();
  	$('.car-front').css({top:535+position*10,left:641-position*10,'transform':'scale('+(parseFloat(position/1.4+1))+')'});
  	$('.carback').css({top:515-position*11.7,left:605-position*17.1,'transform':'scale('+(parseFloat(1-position/55.8))+')'});
	});
  //--parallax-car--//
  //--photo-shoot--//
  var main =$("#selector");
	$('<div class="album">').html('<div class="slide" />').appendTo(main);
	// trigger click end the game
	function success(){
		$("#selector").hide().promise().done(function(){
			$('<h1 class="congratulations">CONGRATULATIONS!!Good Photographer Need Patience And You Got It</h1>').appendTo($("#front-main-part"));
			$('<a href="index.html" class="is-trigger-button">Back-To-Main-Page</a>').appendTo($("#front-main-part"));
			$(".white-side").css('background','url("images/wally.jpg")');
		});
	}
	$(".trigger").on('click',success);
	// trigger click end the game 
	function shoot(position){
		// This function is called by the plug-in when the button is pressed
		
		// Setting the overlay's div to white will create the illusion of a camera flash:
		main.find('.overlay').css('background-color','white');
		
		// The flash will last for 100 milliseconds (a tenth of the second):
		setTimeout(function(){main.find('.overlay').css('background-color','')},100);
		// Creating a new shot image:
		var newShot = $('<div class="shot">');
		var img = $('<img src=images/car2.jpg>');
		newShot.append( $('<img src=images/find.jpg>').css('margin',-position.top+'px 0 0 -'+position.left+'px') );
		$(".slide").append(newShot);
		$('.shot').eq(3).remove();
		// Adding the newly created shot to the album div, but moved 160px to the right.
		// We start an animation to slide it in view:
		
		newShot.css('margin-right',-160).prependTo('.album .slide').animate({marginRight:0},'slow');	
	}
  //--photo-shoot--//
  //--surf--//
  // make some waves.

  //--surf--//
});

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
  // move to travel page
  $(".travel").on('click',function(){
  	$(".second-page").animate({
  		'right':'0%'
  	},600);
  	$(".container").animate({
  		'left':'-100%'
  	},600);
  });
  // move to travel page
  // move from travel page to main page
  $(".travel-home").on('click',function(){
  	$(".second-page").animate({
  		'right':'-100%'
  	},600);
  	$(".container").animate({
  		'left':'10%'
  	},600);
  });
  // move to travel page to main page
  // move to surf page
  $(".surf-page").on('click',function(){
  	$(".surfing").show(100);
  	$(".surfing").animate({
  		'top':'0%'
  	},100);
  	$(".main-content").animate({
  		'top':'100%'
  	},600);
  	$(".container").animate({
  		'top':'200%'
  	},600);
  });
  // move to surf page
  // move from surf page to main page
  $(".surf-home").on('click',function(){
  	$(".surf-pic img").hide();
  	$(".surfing").animate({
  		'top':'-100%'
  	},600);
  	$(".main-content").animate({
  		'top':'100%'
  	},600);
  	$(".container").animate({
  		'top':'0%'
  	},600);
  });
  // move from surf page to main page
// mover to parallax page
  $(".parallax").on('click',function(){
  	$("body").css('overflow','scroll');
  	$(".main-content").animate({
  		'top':'0%'
  	},600);
  	$(".container").animate({
  		'top':'-100%'
  	},600);
  });
// mover to parallax page
// mover from parallax page to main page
  	$(".parallax-home").on('click',function(){
  	$("body").css('overflow','hidden');
  	$(".container").animate({
  		'top':'0%'
  	},600);
  	$(".main-content").animate({
  		'top':'100%'
  	},600);
  });
// mover from parallax page to main page
// move to photography page
  $(".photography").on('click',function(){
  	// $("#front-main-part").css('left','0%');
  	$("#selector").show(100);
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
// move to photography page
// move from photography page to main page
function photoBackHome(){
	$("#front-main-part").animate({
		'left':'-100%'
	},600);
	$(".container").animate({
		'left':'9%'
	},600);
	$(".second-page").animate({
		'right':'-100%'
	},600);
};
// move from photography page to main page
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
			// $('<a class="is-trigger-button">Back-To-Main-Page</a>').appendTo($("#front-main-part"));
			$(".white-side").css('background','url("images/wally.jpg")');
			$(".is-trigger-button").fadeIn();
			$("#front-main-part").css('left','0');
		});
	}
	$(".trigger").on('click',success);
	$(".is-trigger-button").on('click',photoBackHome);
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
  function showSurfPic(){
  	$(".surfing-logo").css('transform','translate(-50%, -50%) scale(0.5)');
  	$(".buttons").hide();
  	$(".bg").hide();
  	$(".surf-word").fadeIn(800);
  	$(".surf-home").fadeIn(800);
  	$(".surf-pic img").each(function(index){
				$(this).delay(100*index).fadeIn(1000);
			});
  }
  $(".surfing-logo").on('click',showSurfPic);
  //--surf--//
});

var perscroll = 120;
var scrollNow = 0;
var open1 = 0;
var open2 = 0;
var open3 = 0;
var open4 = 0;
var swidth = parseInt( window.innerWidth );
var sheight = parseInt( window.innerHeight );
var set1 = $("#dialog1").offset().top;	
var set2 = $("#dialog2").offset().top;	
var set3 = $("#dialog3").offset().top;	
var set4 = $("#dialog4").offset().top;
var setshop = $("#scene2").offset().top;
var setbtn = $("#btn").offset().top;
var setfoot = $("#footer").offset().top;

if(jQuery.browser.mobile)
{
   console.log('You are using a mobile device!');
	$("body").addClass("mobile");

	var ratio = window.devicePixelRatio || 1;
	var w = screen.width * ratio;
	var h = screen.height * ratio;
}
else
{
   console.log('You are not using a mobile device!');
}
//LOADING
  function init( ) {
    // .... 其他指令
    $("body").removeClass("load")
	$("#loading").fadeOut(500);
	$(".logo").delay(500).queue(function(next){$(this).addClass("on");next();});
	$(".press").delay(1200).queue(function(next){$(this).removeClass("load");next();});
  }

  if (window.attachEvent) {
    window.attachEvent('onload', init);
  } else {
    window.addEventListener('load', init, false);
  }
  
$(document).ready(function(){
	setInterval(tailmove,1000);
	rollbar();
	setInterval(rollbar,20000);
	setInterval('$(".press").toggleClass("on");',1200);
});

$(window).scroll(function () {
	var scrollVal = $(this).scrollTop();
	//$("title").text( scrollVal );
	/*RED跟隨螢幕*/
	if(scrollVal <= sheight){
		$("#walk").css("top",0).css("margin-top",0).removeClass().addClass("walk1");
		$("body").removeClass("walking");
	}
	if(scrollVal >  sheight && scrollVal<= setbtn - 400 ){
		$("#walk").css("margin-top",0);
		$("body").addClass("walking");
		
	
		/*走路換圖*/
		var walki = Math.floor( parseInt(scrollVal-sheight) / perscroll ) ;
		
		if( walki%4 == 0){
			$("#walk").removeClass().addClass("walk0");
		}
		if( walki%4 == 1){
			$("#walk").removeClass().addClass("walk1");
		}
		if( walki%4 == 2){
			$("#walk").removeClass().addClass("walk2");
		}
		if( walki%4 == 3){
			$("#walk").removeClass().addClass("walk1");
		}	
	}
	/*跳訊息*/
	if(scrollVal > set1 - 400){
		$("#wingull").addClass("on");
			if ( open1 < 1){
				fly();
				$("#dialog1").delay(1000).animate({marginLeft:50,opacity:1});
			}
			open1 ++;
	}
	if(scrollVal > set2 - 150){
		if ( open2 < 1){
			$("#dialog2").animate({marginLeft:-50,opacity:1});
			$(".spacetail").addClass("on");
			eeveejump();
		}
		open2 ++;
	}
	if(scrollVal > set3 - 400){
		if ( open3 < 1){
			$("#dialog3").animate({marginLeft:-50,opacity:1});
		}
		open3 ++;
	}
	if(scrollVal > set4 - 100){
		if ( open4 < 1){
			$("#dialog4").animate({marginLeft:50,opacity:1});
			$(".fat").addClass("fat2");
		}
		open4 ++;
	}
	/*拿購物袋、跑馬燈*/
	if(scrollVal > setshop - 190  && scrollVal<= setbtn - 400 ){
		$(".rollbar").fadeIn();
		$("#walk").addClass("shopping");
	}else if(scrollVal > setbtn - 400){
		$("#walk").addClass("shopping");	
	}else{
		$("#walk").removeClass("shopping");
		$(".rollbar").fadeOut();
	}
	if(scrollVal > setbtn - 50 ){
		$(".rollbar").fadeOut();
	}
	/*RED停在按鈕前*/
if(scrollVal > setbtn - 400){
		$("body").removeClass("walking");
		setbtn = $("#btn").offset().top;
		$("#walk").css("margin-top",setbtn - sheight - 400);
	}	
	scrollNow = scrollVal;	
});
window.onresize = function() {
	swidth = parseInt( window.innerWidth );
	sheight = parseInt( window.innerHeight );
	set1 = $("#dialog1").offset().top;	
	set2 = $("#dialog2").offset().top;	
	set3 = $("#dialog3").offset().top;	
	set4 = $("#dialog4").offset().top;
	setshop = $("#scene2").offset().top;
	setbtn = $("#btn").offset().top;
	setfoot = $("#btn").offset().top;
};
$("#dialog1,#dialog2,#dialog3,#dialog4").click(function(){
	$( this ).stop().fadeOut();
});
$("#wingull").click(function(){
	$( "#dialog1" ).stop().fadeIn();
});
$(".eevee").click(function(){
	$( "#dialog2" ).fadeIn();
});
$(".board").click(function(){
	$( "#dialog3" ).fadeIn();
});
$(".fat").click(function(){
	$( "#dialog4" ).stop().fadeIn();
});
$(".popup").click(function(){
	$( ".popup" ).fadeOut();
});
//$(".joinboard").click(function(){
	//$( ".popup" ).fadeIn();
//});
$("#btn").click(function(){
	$( ".joinshop0 .joinboard" ).find("a").eq(0).click();
});
$("#shopbtn").click(function(){
	$( ".joinshop0 .joinboard" ).find("a").eq(1).click();
});
$(".mobile .scene0").click(function(){
	$( ".joinshop0 .joinboard" ).find("a").eq(0).click();
	goswipe();
});
function fly(){
		$("#wingull").delay(300).queue(function(next){$(this).addClass("fly2");next();})
				.delay(150).queue(function(next){$(this).addClass("fly3");next();})
				.delay(150).queue(function(next){$(this).addClass("fly4");next();})
				.delay(400).queue(function(next){$(this).addClass("fly5");next();})
				.delay(150).queue(function(next){$(this).addClass("fly6");next();})
				.delay(100).queue(function(next){$(this).addClass("fly7");next();});
}
function tailmove(){
		$(".tail").toggleClass("tail2")
				.delay(250).queue(function(next){$(this).toggleClass("tail2");next();});
}
function eeveejump(){
		$(".eevee").delay(300).queue(function(next){$(this).addClass("eevee2");next();})
				.delay(150).queue(function(next){$(this).addClass("eevee3");next();})
				.delay(150).queue(function(next){$(this).addClass("eevee4");next();})
				.delay(150).queue(function(next){$(this).addClass("eevee5");next();});
}
function rollbar(){
		$(".rollbar b").css("left",swidth).animate({left:"-500px"},18000);
}

function goswipe(){
	if( $("body").hasClass("mobile") ){
		$(".lb-container").swipe( {
			  swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
			    if ( direction == "left" ){	$("body").find("#lightbox").find(".lb-next").click(); }
			    else if ( direction == "right" ){ $("body").find("#lightbox").find(".lb-prev").click(); } 
			  },
			   threshold:0
				});
	}
}

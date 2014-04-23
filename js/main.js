$(document).ready(function() {

		$("body").localScroll({
			queue:true,
			duration:800,
			hash:true
		});
	
		function randomFromTo(from, to){
			return Math.floor(Math.random() * (to - from + 1) + from);
		}
  
		function moveRandom(obj) {
			/* get container position and size
			 * -- access method : cPos.top and cPos.left */
			var cPos = $('.intro-wrap').offset(),
			    cHeight = $('.intro-wrap').height(),
				cWidth = $('.intro-wrap').width(),
				bHeight = obj.height(),
				bWidth = obj.width(),
				minspeed = 100,
				maxspeed = 500,
				randomSpeed = Math.floor(Math.random() * (maxspeed - minspeed + 1)) + minspeed;
			
			// set maximum position
			maxY = cPos.top + cHeight - bHeight;
			maxX = cPos.left + cWidth - bWidth;
			
			// set minimum position
			minY = cPos.top;
			minX = cPos.left;
			
			// set new position			
			newY = randomFromTo(minY, maxY);
			newX = randomFromTo(minX, maxX);
			
			obj.delay(2000).toggleClass("blipblip").animate({
				top: newY,
				left: newX
				}, randomSpeed, function() {
					moveRandom(obj);
					}
			);
		}
		
	$('.blip').each(function() {
    	moveRandom($(this));
	});
	
	$('section.supporter').hover(
		function() {
			$(this).children("div.overlay").stop(true, true).animate({top: "48px"}, 200);
		},
		function() {
			$(this).children("div.overlay").stop(true, true).animate({top: "0px"}, 200);
		}
	);
	
});
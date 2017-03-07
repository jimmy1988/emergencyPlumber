var timer;
var time = 5000;
var sliding = false; //detects whether the slider is sliding or not
$(document).ready(function(){	
    timer = setInterval(animate, time); // sets the timer to execute a function every 8 seconds(8000 milliseconds)
	$("#next").click(function(){next();}) //binds a function to the click function of an element
	$("#prev").click(function(){previous();}) //binds a function to the click function of an element
});
function animate(){
		//detects if the slider is sliding or not
	if(sliding == false){
		//clears the timer and sets its variable to an empty variable
		clearInterval(timer);
				timer=null;		
		//grabs the width of the first child of the slider
		var slideWidth = $("#main li").first().width(); 
		//grabs the width of the main slider
		var wrapperWidth = $("#main").width(); 
		//tells any elements that wish to call a function that the slider is still sliding
		sliding = true;
		//starts the animation of the slider
		$("#main").animate({			
			//sets and resets the margin left property in the css to slide width (this overrrides the defaults)
			marginLeft: "-" + slideWidth + "px",			
		//callback function to execute once the animations has ended
		//the slider will take 2 seconds to slide
		}, 1000, function() {
			//grabs the first child element of the slider
			$_slide = $("#main li").first();
			//removes the first child
			$_slide.remove();
			//appends the first child element to the end of the slider, at the end of the li tags
			$("#main").append($_slide);
			//resets the margin left property in css to 0 px
			$("#main").css("margin-left", "0px");			
			//tells all other elements that the slider has finished sliding
			sliding = false;			
		});		
		//resets the timer variable back to its original state
		timer = setInterval(animate, time);
	}
}
//moves the slider to the previous image on the slider
function previous(){	
	//detects whether the slider is still sliding
	if(sliding == false){
		//clears the timer and sets its variable to an empty variable
		clearInterval(timer);
		timer=null;
		//tells all other elements that the slider is still sliding
		sliding = true;
		//grabs the width of the first child of the slider
		var slideWidth = $("#main li").first().width(); 		
		//grabs the last child elements of the slider
		$_slide = $("#main li").last();
		//removes the last child from the DOM
		$_slide.remove();
		//appends the child to the beginning of the slider
		$("#main").prepend($_slide);
		//increases the margin left in the css, this is so the slider slides to left
		$("#main").css("margin-left", "-" + slideWidth + "px");
		//animates the slider to slide to the left
		$("#main").animate({			
			//resets the margin left to 0
			marginLeft: "0px",
			//callback to fire once the animation is completed
		}, 1000, function() {
			//tells all other elements that the slider is not sliding any more
			sliding = false;			
			//resets the timer to its original state
			timer = setInterval(animate, time);
		});
	}
}
function next(){
	//detects whether the slider is sliding
	if(sliding == false){
		//calls the animate function
		animate();
	}
	
}
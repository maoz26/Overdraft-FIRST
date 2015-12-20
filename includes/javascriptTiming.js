window.onload = function(){
	calculateCounter();
}


$(window).scroll(function(e){
    parallax();
});


function parallax(){
    var scrolled = $(window).scrollTop();
    $('#gif_background').css('top', -(scrolled * 0.2) + 'px');
}


function calculateCounter()
{
    var START_DATE = new Date("October 1, 2015 00:00:00"); // put in the starting date here
    var INTERVAL = 1; // in seconds
    var INCREMENT = 986; // increase per tick
    var START_VALUE = 456000000000; // initial value when it's the start date (beginning of July 2015)
    var count = 0;
    var countStr = 0; 

	var msInterval = INTERVAL * 1000; // seconds
	var now = new Date();
	count = parseInt((now - START_DATE)/msInterval) * INCREMENT + START_VALUE;

	countStr = count.toLocaleString();
	document.getElementById('counter').innerHTML = countStr; // the first count
	document.getElementById('counter_again').innerHTML = countStr; // the last count

	setInterval(function() { 	// the loop
		count += INCREMENT; 
		countStr = count.toLocaleString();
		document.getElementById('counter').innerHTML = countStr;
		document.getElementById('counter_again').innerHTML = countStr; // the last count
	}, msInterval);
}


function writingFunctions()
{
	setTimeout(function(){ 
		document.getElementById('frame1_h2').style.visibility = 'visible'; 
		new TypingText(document.getElementById("frame1_h2"));
		TypingText.runAll();
	}, 5000);

	setTimeout(function(){ 
		document.getElementById('start_roll').style.visibility = 'visible'; 
		document.body.style.overflow = 'visible';
	}, 10000);


	// var debtSumGraph = document.getElementById("debtSumGraph"); 
	// TweenLite.to(debtSumGraph, 3, 
	// 	{
	// 		width: 900,
	// 		ease: Power4.SteppedEase
	// 	}); 



// var tween = TweenLite.to($box, 2, {
// x: 100,
// ease: Power1.easeInOut,
// delay: 2,
// onComplete: myFunction,
// onCompleteParams: [element, 'param2']
// });


	
}


function waypointFunctions()
{
	var waypointFrame3 = new Waypoint({
	  element: document.getElementById('not_bad_h1'),
	  handler: function(direction) {
	    document.getElementById('circleGIF').style.visibility = 'visible'; 
	  }
	  
	})




}









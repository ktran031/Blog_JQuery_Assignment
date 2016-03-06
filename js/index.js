
/*
$(document).ready(function()
});
*/

// $(document).ready(function(){
// //     $("a").click(function(event){
// //         event.preventDefault();
// //     });
// // });

  $(document).ready(pageReady);
    function pageReady() {

$(".readmore").click(readSlide);

function readSlide () {
	event.preventDefault();
	$("p").slideDown(); 
	$("#show-this-on-click").show(); 
	$(".readmore").hide();
	$(".readless").show();

}

$(".readless").click(lessSlide);

function lessSlide() {
	event.preventDefault();
	$("#show-this-on-click").slideUp(); 
	$(".readless").hide();
	$(".readmore").show();
	
}

$(".learnmore").click(learnSlide);

function learnSlide () {
	event.preventDefault();
	$("#learnmoretext").slideDown();
	$(".learnmore").hide();

}

}
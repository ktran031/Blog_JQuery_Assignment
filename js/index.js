
/*
$(document).ready(function()
});
*/

$(document).ready(function(){
    $("a").click(function(event){
        event.preventDefault();
    });
});


$(".readmore").click(readSlide);
$(".readless").click(lessSlide);



function readSlide () {
	$("#show-this-on-click").slideDown(); 
	$("#show-this-on-click").show(); 
	$(".readmore").hide();
	$(".readless").show();

}

function lessSlide() {
	$("#show-this-on-click").slideUp(); 
	$(".readless").hide();
	$(".readmore").show();
	
}


$(".learnmore").click(learnSlide);

function learnSlide () {
	$("#learnmoretext").slideDown();
	$(".learnmore").hide();

}

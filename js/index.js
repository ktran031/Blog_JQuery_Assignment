
/*
$(document).ready(function()
});
*/

$(".readmore").click(readSlide);
// $(".readless").click(lessSlide);

function readSlide() {
	$("#readp").slideDown();
	$("#show-this-on-click").show();
	$(".readmore").hide();
	$(".readless").show();

}

// function lessSlide() {
// 	$("p").slideUp();
// 	$(".readless").hide();
// 	$(".readmore").show();
// }


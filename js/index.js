
/*
$(document).ready(function()
});
*/

$(".readmore").click(readSlide);
$(".readless").click(lessSlide);

function readSlide() {
	$("p").slideDown();
	$(".readmore").hide();
	$(".readless").show();

}

// function lessSlide() {
// 	$("p").slideUp();
// 	$(".readless").hide();
// 	$(".readmore").show();
// }


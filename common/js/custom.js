$(document).ready(function(){
	
	const hamburg = document.querySelector('.c_hamburger');
	hamburg.onclick = function(){
		if($('div.l_nav_area_sp').hasClass("hidden")){
			$('div.l_nav_area_sp').removeClass("hidden");
			$('body').css("overflow","hidden");
			$('div.overlay').removeClass("hide");
		}
		else{
			$('body').css("overflow","auto");
			$('div.l_nav_area_sp').addClass("hidden");
			$('div.overlay').addClass("hide");
		}
	}

	/* Loop through the elements, and hide the parent, when clicked on */

})
function toggle_click(answer){
	console.log(answer);
	question = answer-1;

	if($(".c_answer:nth-child(" + answer + ")").is(":visible")){
			$(".c_answer:nth-child(" + answer + ")").hide();
			$(".c_question:nth-child("+question+")").removeClass("active");
	}
	else{
		$(".c_answer:nth-child(" + answer + ")").show();
		$(".c_question:nth-child("+question+")").addClass("active");
	}
}
//ページトップに戻る
$(function() {
	var topBtn = $('.top_btn');
	topBtn.hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});
    topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
    });
});
//カレント設定
$(function() {
	var id = $("body").attr("id");
	$("li." + id).addClass("active");
});



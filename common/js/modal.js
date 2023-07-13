$(document).ready(function(){
	
	const hamburg = document.getElementsByClassName("c_btn_interview");
	const close = document.querySelector('.close');
	$('.c_btn_interview').on("click",function(){
		var modal_id = $(this).attr("id").slice(4);
		$("#" + modal_id).addClass("active");
		$("body").addClass("overflow-modal");
		console.log(modal_id);
	})
	$('.close').on("click",function(){
		var modal_id = $(this).attr("id").slice(5);
		$("#" + modal_id).removeClass("active");
	})
});
//$('.c_btn_interview').on("click",function(){
//  var modal_id = $(this).attr("id").slice(4);
//  $("#" + modal_id).addClass("active");
//  $("body").addClass("overflow-modal");  
//});
//
//$("span.close").click(function(){
//  $(".modal.active").removeClass("active");
//  $("body").removeClass("overflow-modal");
//});
//
//window.onclick = function(event) {
//  var modal_num = $(".modal.active").attr("id");
//  var modal = document.getElementById(modal_num);
//  if (event.target == modal) {
//    $(".modal.active").removeClass("active");
//    $("body").removeClass("overflow-modal");
//  }
//}
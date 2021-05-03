/*global $ , jQuery, alery, console*/

$(function () {
  
	"use strict";
 	
	
	//calculate body padding top depend on navbar height
	
	$('body , html').css('paddingTop', $('.navbar').innerHeight());
	
	
	// smoothly scroll to element 
	
	$('.navbar li a').click(function (e) {
		
		e.preventDefault();
		
		
		
		$('html, body').animate({
			
			scrollTop: $('#' + $(this).data('scroll')).offset().top + 1
			
		}, 1000);
		
	});
	 
}
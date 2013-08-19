$(document).ready( function(){
	$("#master").click( function(){
		$(this).html("hallo");
	});
	$(function() {
		$( "#pink" ).accordion({ header: "h4", collapsible: "true"});
		$( "#MichaelBuble" ).accordion({ header: "h4", collapsible: "true"});
	});

});

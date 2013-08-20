$(document).ready( function(){
	$("#master").click( function(){
		$(this).html("hallo");
	});
	$(function() {
		$( "#pink" ).accordion({ header: "h4", collapsible: "true", active: "false", animate: "easeOutBounce", icons: { "header": "ui-icon-grip-diagonal-se", "activeHeader": "ui-icon-grip-solid-horizontal" } });
		$( "#MichaelBuble" ).accordion({ header: "h4", collapsible: "true", active: "false", animate: "easeOutBounce", icons: { "header": "ui-icon-grip-diagonal-se", "activeHeader": "ui-icon-grip-solid-horizontal" } });
		$( "#nest" ).accordion({ header: "h3", collapsible: "true", active: "false"});
		$( "#acco1" ).accordion();
	});

});

$(document).ready(function(){
	
/* FADE DIV WITH ID OF WRAPPER */

	$('#icon, #head').bind('fade-cycle', function() {
    $(this).fadeTo(4000, 0.5, function() {
        $(this).fadeTo(3000, 1.0, function() {
            $(this).trigger('fade-cycle');
        });
    });
});

$('#icon, #head').each(function(index, elem) {
    setTimeout(function() {
        $(elem).trigger('fade-cycle');
    }, index * 250);
});


});

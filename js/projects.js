$(function(){
   $('.projects li>a').click(function(event){
        var loc = $(this)[0].hash;
        var width = $(window).width();
        var move = width/20;
        console.log(move);

        $('html, body').animate({
            scrollLeft: $(loc).offset().left - move
        }, 600);
        event.preventDefault();
    });

   	$('.panel-title a').click(function(){
		$('i', this).toggleClass('down');
		$('.panel-title a').not(this).each(function(){
			$('i', this).removeClass('down');
		})
	})
});






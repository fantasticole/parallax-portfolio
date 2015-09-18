$(function(){
   $('.projects li>a').click(function(event){
        var loc = $(this)[0].hash;
        var width = $(window).width();
        var move = width/20;
        console.log(move);

        if ($(window).width > 550){
	        $('html, body').animate({
	            scrollLeft: $(loc).offset().left - move
	        }, 600);
        }
        else{
        	move /=2;
	        $('html, body').animate({
	            scrollLeft: $(loc).offset().left - move
	        }, 600);
        }
        event.preventDefault();
    });

   	$('.panel-title a').click(function(){
   		var mom = $(this)[0].dataset.parent.toString();
		$('i', this).toggleClass('down');
		$(mom + ' .panel-title a').not(this).each(function(){
			$('i', this).removeClass('down');
		})
	});

	var config = {
		"id": '628733595385995265',
		"domId": 'timeline',
		"maxTweets": 15,
		"enableLinks": true,
		"showUser": true,
		"showTime": true,
		"showInteraction": false,
		"lang": 'en'
	};

	var here = window.location.href;

	if (here.indexOf('projects') > -1){
		twitterFetcher.fetch(config);
	};
});






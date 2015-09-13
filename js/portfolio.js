$(function(){
	var controller = new ScrollMagic.Controller();

	var tl = new TimelineMax();

	tl.to(".arrow", 0.6,
		{
			top: '30px',
			repeat: -1,
			yoyo: true
		});

	function makeParallax(loc, dur, yVal){
		var current = new ScrollMagic.Scene({triggerElement: loc, duration: dur});
		current.setTween(loc + ' > div', {y: yVal, ease: Linear.easeNone})
		// current.addIndicators()
		current.addTo(controller);
	};

	makeParallax("#section1", "200%", "80%");
	makeParallax("#section2", "200%", "80%");
	makeParallax("#section3", "200%", "80%");
	makeParallax("#section4", "200%", "80%");
	makeParallax("#section5", "100%", "50%");

	function allowContactSubmission(){
		var nameLength = $('#entry_348166146')[0].value.length;
		var email = $('#entry_73439495')[0].value;
		var subjectLength = $('#entry_274250116')[0].value.length;
		var messageLength = $('#entry_1098022282')[0].value.length;
		var testsPassed = 0;
		if (nameLength > 0){
			testsPassed++
		}
		if (email.indexOf('@') > -1 && email.indexOf('.') > -1){
			testsPassed++
		}
		if (subjectLength > 0){
			testsPassed++
		}
		if (messageLength > 0){
			testsPassed++
		}

		if (testsPassed > 3){
			$('#ss-submit').css({'pointer-events': 'auto', 'background-color': '#000', 'color': '#fff', 'border': '1px solid #fff'});
			$('#ss-submit').hover(function(){
				$(this).css({'background-color': '#fff', 'color': '#000', 'border': '1px solid red'})}, function(){
				$(this).css({'background-color': '#000', 'color': '#fff', 'border': '1px solid #fff'})
			});
			$('.instructions').hide();
		}
	}

	$('#contact').keydown(allowContactSubmission);
});






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
		current.addIndicators()
		current.addTo(controller);
	};

	makeParallax("#section1", "200%", "80%");
	makeParallax("#section2", "200%", "80%");
	makeParallax("#section3", "200%", "80%");
	makeParallax("#section4", "200%", "80%");
	makeParallax("#section5", "100%", "50%");

	// var section1 = new ScrollMagic.Scene({triggerElement: "#section1", duration: "200%"});

	// section1.setTween("#section1 > div", {y: "80%", ease: Linear.easeNone})
	// section1.addIndicators()
	// section1.addTo(controller);
});
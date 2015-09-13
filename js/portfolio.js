$(function(){
	var controller = new ScrollMagic.Controller();

	var section1 = new ScrollMagic.Scene({triggerElement: "#section1", duration: "200%"});

	section1.setTween("#section1 > div", {y: "80%", ease: Linear.easeNone})
	section1.addIndicators()
	section1.addTo(controller);

	var tl = new TimelineMax();

	tl.to(".arrow", 0.6,
		{
			top: '30px',
			repeat: -1,
			yoyo: true
		});

	var section2 = new ScrollMagic.Scene({triggerElement: "#section2", duration: "200%"});

	section2.setTween("#section2 > div", {y: "80%", ease: Linear.easeNone})
	section2.addIndicators()
	section2.addTo(controller);

	var section3 = new ScrollMagic.Scene({triggerElement: "#section3", duration: "200%"});

	section3.setTween("#section3 > div", {y: "80%", ease: Linear.easeNone})
	section3.addIndicators()
	section3.addTo(controller);

	var section4 = new ScrollMagic.Scene({triggerElement: "#section4", duration: "200%"});

	section4.setTween("#section4 > div", {y: "80%", ease: Linear.easeNone})
	section4.addIndicators()
	section4.addTo(controller);

	var section5 = new ScrollMagic.Scene({triggerElement: "#section5", duration: "100%"});

	section5.setTween("#section5 > div", {y: "50%", ease: Linear.easeNone})
	section5.addIndicators()
	section5.addTo(controller);
});
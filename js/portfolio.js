$(function(){
	var controller = new ScrollMagic.Controller({
		globalSceneOptions: {duration: "200%"}
	});

	var welcome = new ScrollMagic.Scene({triggerElement: "#section1"});

	welcome.setTween("#section1 > div", {y: "80%", ease: Linear.easeNone})
	welcome.addIndicators()
	welcome.addTo(controller);

	var section2 = new ScrollMagic.Scene({triggerElement: "#section2"});

	section2.setTween("#section2 > div", {y: "80%", ease: Linear.easeNone})
	section2.addIndicators()
	section2.addTo(controller);

	var section3 = new ScrollMagic.Scene({triggerElement: "#section3"});

	section3.setTween("#section3 > div", {y: "80%", ease: Linear.easeNone})
	section3.addIndicators()
	section3.addTo(controller);

	var section4 = new ScrollMagic.Scene({triggerElement: "#section4"});

	section4.setTween("#section4 > div", {y: "80%", ease: Linear.easeNone})
	section4.addIndicators()
	section4.addTo(controller);

	var section5 = new ScrollMagic.Scene({triggerElement: "#section5"});

	var lastController = new ScrollMagic.Controller({
		globalSceneOptions: {duration: "100%"}
	});

	section5.setTween("#section5 > div", {y: "50%", ease: Linear.easeNone})
	section5.addIndicators()
	section5.addTo(lastController);
});
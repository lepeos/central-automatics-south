
$(document).ready(function () {


	//slideshow controls.

	$('.slidershow').bxSlider({
		mode: 'fade',
		captions: true,
		auto: true,
		controls: true,
		responsive: true,
		adaptiveHeight: false,
		infiniteLoop: true,
		slideWidth: 1000,
		slideHeight: 500,
		touchEnabled: true,

	});


	//The controls for the buttons at the bottom.



function initialize() {
        var mapOptions = {
          center: { lat: -34.397, lng: 150.644},
          zoom: 8
        };
        var map = new google.maps.Map(document.getElementById('map'),
            mapOptions);
      }
      google.maps.event.addDomListener(window, 'load', initialize);

});
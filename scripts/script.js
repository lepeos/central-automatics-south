
$(document).ready(function () {


	//slideshow controls.

	$('.slidershow').bxSlider({
		mode: 'fade',
		captions: true,
		auto: true,
		controls: true,
		responsive: true,
		adaptiveHeight: true,
		infiniteLoop: true,
		slideWidth: 1500,
		slideHeight: 500,
		touchEnabled: true,

	});


	//Map
// function initialize() {
//     var mapCanvas = document.getElementById('map-canvas');
//     var myLatLng = new google.maps.LatLng(55.9128254, -3.1661612);
//     var mapOptions = {
//       center: myLatLng,
//       zoom: 15,
//       mapTypeId: google.maps.MapTypeId.ROADMAP
//     };




//     var map = new google.maps.Map(mapCanvas, mapOptions);


//     var marker = new google.maps.Marker({
// 	position: myLatLng,
// 	animation: google.maps.Animation.DROP,
// 	map: map,
// 	title: 'Central-Automatics South.'
//     });
//   }

// google.maps.event.addDomListener(window, 'load', initialize);

});






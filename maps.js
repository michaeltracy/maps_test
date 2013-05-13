var map;
var geocoder;

function initialize() {
  var reston = new google.maps.LatLng(38.935, -77.347);
  geocoder = new google.maps.Geocoder();
  var mapOptions = {
    zoom: 15,
    center: reston,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

  codeAddress();
}

function codeAddress() {
  // var address = document.getElementById('address').value;
  var address = "Reston, VA";
  geocoder.geocode( { 'address': address }, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: map, position: results[0].geometry.location });
    } else {
      alert("Geocode didn't work because " + status);
    }
  });
}

function loadScript() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBfDgPmYE_hNoH8pmoG4_6IHdlt1bNY_j4&sensor=false&callback=initialize";
  document.body.appendChild(script);
}

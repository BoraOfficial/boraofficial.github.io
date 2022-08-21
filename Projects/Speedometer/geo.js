function toRad(degrees) {
  return degrees * Math.PI / 180;
};    

function calcCrow(lat1, lon1, lat2, lon2) {
  var R = 6371000; // meter
  var dLat = toRad(lat2-lat1);
  var dLon = toRad(lon2-lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);

  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;
  return d;
}

var prevPosition = null;

function showPosition(position) {
  var lat2 = position.coords.latitude;
  var lon2 = position.coords.longitude;
  
  if (prevPosition) {     
    var lat1 = prevPosition.coords.latitude;
    var lon1 = prevPosition.coords.longitude;
    var distance = calcCrow(lat1,lon1,lat2,lon2).toFixed(1);
    document.getElementById("velo").value = distance;
  }
    

  
  prevPosition = position;
  
  setTimeout(function() {
    navigator.geolocation.getCurrentPosition(showPosition);
  }, 1000);
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
} else {
  document.getElementById("div").innerHTML =
  "Geolocation is not supported by this browser.";
}

setInterval(function(){
  var velo = document.getElementById("velo");

  function getlocation() {
    navigator.geolocation.getCurrentPosition(showLoc);
  }

  function showLoc(pos) {
    velo.value = pos.coords.speed;
  }
}, 1000);

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
  } else {
  document.getElementById("div").innerHTML =
  "Geolocation is not supported by this browser.";
}

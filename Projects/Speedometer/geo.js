setInterval(function(){
  var velo = document.getElementById("velo")

  function getlocation() {
    navigator.geolocation.getCurrentPosition(showLoc);
  }

  function showLoc(pos) {
    velo.value = "Speed: " +
      pos.coords.speed;
  }
}, 1000);

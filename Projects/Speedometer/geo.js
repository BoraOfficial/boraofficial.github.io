setInterval(function(){
  var velo = document.getElementById("velo")

  function getlocation() {
    navigator.geolocation.getCurrentPosition(showLoc);
  }

  function showLoc(pos) {
    velo.value = pos.coords.speed;
  }
}, 1000);

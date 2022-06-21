var element = document.getElementById("paraID");

function getlocation() {
  navigator.geolocation.getCurrentPosition(showLoc);
}

function showLoc(pos) {
  element.innerHTML = "Speed: " +
    pos.coords.speed;
}
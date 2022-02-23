// User can't view the source

document.onkeydown = function(e) {
  if(event.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}

//Block inspect element

<span id="rcp-span" style="display: none; position: fixed; overflow: hidden;"></span>
<script id="rcp-script" type="text/javascript">var rcpSpan = document.getElementById('rcp-span');window.onmousemove = function (e) { var x = e.clientX, y = e.clientY; rcpSpan.style.top = (y + 20) + 'px'; rcpSpan.style.left = (x + 20) + 'px'; };window.ondragstart = function (e) { if (e && e.target && (e.target.nodeName == 'IMG' || e.target.nodeName == 'img')) { return false;} };if (document.addEventListener) { document.addEventListener('contextmenu', function(e) { showCR(); e.preventDefault(); }, false); } else { document.attachEvent('oncontextmenu', function() { showCR(); window.event.returnValue = false; }); }function showCR() { rcpSpan.style.display = 'block'; window.setTimeout(closeCR,2000); }function closeCR() { rcpSpan.style.display = 'none'; }</script>

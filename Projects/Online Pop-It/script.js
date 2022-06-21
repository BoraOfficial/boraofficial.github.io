$('.neumorphic-checkbox').on('click', function(){
  $(this).toggleClass('neumorphic-checkbox_active');
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function playAudio(url) {
  new Audio(url).play();
}

async function reloadPage() {
  playAudio('pop.mp3')
  await sleep(400);
  location.reload();
  return false;
}
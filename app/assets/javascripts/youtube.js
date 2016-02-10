var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'HIJ5XvZeb-k',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED && done) {
    loadVideo("FyASdjZE0R0");
  }
}
function stopVideo() {
  player.stopVideo();
}

function loadVideo(videoId) {
  player.loadVideoById({ videoId: videoId });
}

$('.js-play-song').on('click', function() {
  var videoLink = $('.js-video-link').val();
  var matches = videoLink.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
  loadVideo(matches[1]);
  $('.js-video-link').val('');
});
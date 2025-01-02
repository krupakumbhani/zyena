function playVideo() {
  var thumbnail = document.getElementById("video-thumbnail");
  var playButton = document.querySelector(".play-button");
  var videoPlayer = document.getElementById("video-player");

  // Hide the thumbnail and play button
  thumbnail.style.display = "none";
  playButton.style.display = "none";

  // Show the video player and play the video
  videoPlayer.style.display = "block";
  videoPlayer.play();
}

function closeVideo() {
  var modal = document.getElementById("video-modal");
  var iframe = document.getElementById("video-frame");
  modal.style.display = "none";
  iframe.src = "";
}

window.onclick = function (event) {
  var modal = document.getElementById("video-modal");
  if (event.target == modal) {
    modal.style.display = "none";
    var iframe = document.getElementById("video-frame");
    iframe.src = "";
  }
};

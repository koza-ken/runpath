// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

const audioPlaying = document.getElementById("audio-play")
const audioButton = document.getElementById("audio-btn")
audioButton.addEventListener('click', () => {
  // ボタンを連打すると、回数分再生するようにloadを追加
  audioPlaying.load()
  audioPlaying.play()
})

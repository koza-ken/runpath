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

const volumeLoud = document.getElementById("volume-loud")
const volumeMute = document.getElementById("volume-mute")
volumeLoud.addEventListener('click', ()=>{
  volumeLoud.classList.add('hidden')
  volumeMute.classList.remove('hidden')
  audioPlaying.muted = true
})
volumeMute.addEventListener('click', ()=>{
  volumeLoud.classList.remove('hidden')
  volumeMute.classList.add('hidden')
  audioPlaying.muted = false
})
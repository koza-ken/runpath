// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

// 音声再生
const audioPlaying = document.getElementById("audio-play")
const audioButton = document.getElementById("audio-btn")
audioButton.addEventListener('click', () => {
  // ボタンを連打すると、回数分再生するようにloadを追加
  audioPlaying.load()
  audioPlaying.play()
  incrementSessionCount()
})

// ミュートボタン
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

// セッションストレージのsession_countというキーがなければ0にする（sessionStorrageは文字列で保存）
const initSessionCount = () => {
  if (!sessionStorage.getItem("session_count")) {
   sessionStorage.setItem("session_count", "0")
  }
}

// セッションのカウントを1増やしてその数字で上書きする
const incrementSessionCount = () => {
  // 文字列を数字に変換する必要あり
  let count = parseInt(sessionStorage.getItem("session_count"), 10)
  count += 1
  sessionStorage.setItem("session_count", count.toString())
}

const updateSessionCountView =  () => {
  initSessionCount()
  let count = parseInt(sessionStorage.getItem("session_count"), 10)
  const element = document.getElementById("session_click_count")
  if (element) {
    element.textContent = `${count}`
  }
}

const sessionUpdateCountButton = document.getElementById("session-update-button")
sessionUpdateCountButton.addEventListener('click', updateSessionCountView)

// Xへの投稿ボタン
const tweetButton = document.getElementById("x-post-button");
tweetButton.addEventListener("click", () => {
  let count = sessionStorage.getItem("session_count")
  const tweetURL = `https://twitter.com/intent/tweet?text=${count}らんぱすー&hashtags=らんぱすー&url=https://runpath.onrender.com`;  
  window.open(tweetURL, "_blank");
});
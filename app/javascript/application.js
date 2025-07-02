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

const updateSessionCountView = () => {
  initSessionCount()
  let count = parseInt(sessionStorage.getItem("session_count"), 10)
  const element = document.getElementById("session_click_count")
  if (isNaN(count)) {
    count = parseInt(count)
  }
  element.textContent = `${count}`
}

document.addEventListener('load', updateSessionCountView())

const sessionUpdateCountButton = document.getElementById("session-update-button")
sessionUpdateCountButton.addEventListener('click', updateSessionCountView)

// Xへの投稿ボタン
const tweetButton = document.getElementById("x-post-button");
tweetButton.addEventListener("click", () => {
  let count = sessionStorage.getItem("session_count")
  const tweetURL = `https://twitter.com/intent/tweet?text=${count}らんぱすー&hashtags=らんぱすー&url=https://runpath.onrender.com`;  
  window.open(tweetURL, "_blank");
});


// 隠しコマンドの処理
const inputSequence = [];

document.addEventListener('keydown', (event) => {
  const key = event.key;
  const normalizedKey = key.length === 1 ? key.toLowerCase() : key;

  inputSequence.push(normalizedKey);

  // window.secretCommand が未定義の場合は終了
  if (!Array.isArray(window.secretCommand)) return;

  if (inputSequence.length > window.secretCommand.length) {
    // 古い入力削除
    inputSequence.shift();
  }

  if (arraysMatch(inputSequence, window.secretCommand)) {
    triggerSecretFeature();
    // リセット
    inputSequence.length = 0; 
  }
});

function arraysMatch(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((val, i) => val === arr2[i]);
}

const secretButton = document.getElementById("secret-button")
function triggerSecretFeature() {
  alert('かくしこまんどみーつけた！！')
  secretButton.classList.remove('hidden');
}

const secretTweetButton = document.getElementById("secret-x-post-button");
secretTweetButton.addEventListener("click", () => {
  const secretTweetURL = `https://twitter.com/intent/tweet?text=かくしこまんどみーつけた！らんぱすー！！&hashtags=らんぱすー&url=https://runpath.onrender.com`;  
  window.open(secretTweetURL, "_blank");
});
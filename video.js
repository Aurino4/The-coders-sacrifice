// window.addEventListener("load", function () {
//     let audio = new Audio("./Video/OST_audio.mp3")
//     audio.play()
//   })

let playing = false
let audioOST = new Audio("./Video/OST_audio.mp3")
function playOST() {
    audioOST.volume = 0.2
    if (playing == false) {
        audioOST.play()
        document.querySelector(".audio-line").style.display = "none"
        playing = true
    } else{
        audioOST.pause()
        audioOST.currentTime= 0
        document.querySelector(".audio-line").style.display = "block"
        playing = false
    }

  }

  document.querySelector(".audio").addEventListener("click", playOST)
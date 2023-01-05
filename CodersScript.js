console.info("hola")

let overlay = document.getElementById("overlay")
let cerrar = document.getElementById("cerrar")
let buttonRed = document.querySelector(".buttonRed")
let buttonWhite = document.querySelector(".buttonWhite")
let button_añadir = document.querySelector("#button_añadir")
let muertoOverlay = document.querySelector(".printMuerto")
let inputCandidatos = document.querySelector("#box")
localStorage.removeItem("ultimaDir")
localStorage.removeItem("positionX")

cerrar.onclick = function cerrarPopUp() {
  overlay.style.display = "none";
}

var candidatos = []
let muertos = []
let muertoPopup = false


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function muerte() {
  if ((!(candidatos.length == 0)) && (muertoPopup == false)) {
    let muerto = candidatos.splice(getRandomInt(candidatos.length), 1)
    muertos.push(muerto[0].name)
    muertoPopup = true
    muertoOverlay.style.display = "flex";
    muertoOverlay.innerHTML = `<p>Has matado a ${muerto[0].name}</p>`
    printing()
    playSound('SHOT')
    splash("ADD")
    swapDirection()
  }

  if (candidatos.length == 0) {
    muertoOverlay.style.display = "flex";
    muertoOverlay.innerHTML = `<p>The END</p><p>Press Reload to play again</p>`
    muertoPopup = false
    buttonWhite.innerHTML = `<a href="/video.html"><img src="/images/bottonBlanco.svg"> </a>`
  }
}

function reload() {
  if (muertoPopup == true) {
    muertoOverlay.style.display = "none";
    muertoPopup = false
    playSound('RELOAD')
    splash("CLEAN")
  }
}


function createList(type) {
  let toPrint = ""
  switch (type) {
    case 'CANDIDATOS':
      candidatos.forEach(item => {
        toPrint += `<li>${item.name}</li>`
      })
      return toPrint
    case 'MUERTOS':
      muertos.forEach(item => {
        toPrint += `<li>${item}</li>`
      });
      return toPrint
    case 'IMG':
      candidatos.forEach((item, i) => {
        toPrint += `<div class="avatares-${i}"><p class="avatares-p">${item.name}</p><img class="avatares-img" src="${item.image}"></div>`
      });
      return toPrint
    default:
      return "Na'";
  }
}

function printing() {
  document.querySelector("#coders-list").innerHTML = createList('CANDIDATOS')
  document.querySelector("#members").innerHTML = createList('IMG')
  document.querySelector("#death").innerHTML = createList('MUERTOS')
}

function playSound(type) {
  const audioShot = new Audio('./Audio/disparo.mp3');
  const audioReload = new Audio('./Audio/recargar.mp3');

  switch (type) {
    case 'SHOT':
      audioShot.play()
      break;
    case 'RELOAD':
      audioReload.play()
      break;
    default:
      break;
  }
}


let already = true
function añadir() {
  let value = document.getElementById('box').value
  candidatos.push({ name: value, image: avatarSelection() })
  document.getElementById('box').value = "";
  printing()

  
  swapDirection()
  if (already == true) {
      setInterval(() => {swapDirection()}, 500);
      already = false
      console.log("fucniona");
  }
}


function enter(e) {
  if (e.keyCode == 13) {
    añadir();
  }
}

function changeToPress(color) {
  let buttonRedPress = document.querySelector(".buttonRedPress")
  let buttonWhitePress = document.querySelector(".buttonWhitePress")
  switch (color) {
    case 'RED':
      buttonRed.style.display = "none"
      buttonRedPress.style.display = "block"
      setTimeout(() => {
        buttonRed.style.display = "block"
        buttonRedPress.style.display = "none"
      }, 200)
      break;
    case 'WHITE':
      buttonWhite.style.display = "none"
      buttonWhitePress.style.display = "block"
      setTimeout(() => {
        buttonWhite.style.display = "block"
        buttonWhitePress.style.display = "none"
      }, 200)
      break
    default:
      break;
  }
}

buttonRed.addEventListener("click", muerte)
buttonWhite.addEventListener("click", reload)
button_añadir.addEventListener("click", añadir)
inputCandidatos.addEventListener("keypress", (e) => { enter(e) })
buttonRed.addEventListener("click", () => { changeToPress('RED') })
buttonWhite.addEventListener("click", () => { changeToPress('WHITE') })

function avatarSelection() {
  var imgArray = ['./images/cartman.png', './images/cheff.png', './images/clyde.png', './images/jimbo.png',
    './images/jimmy.png', './images/Kenny.png', './images/Stan_HanSolo.png', './images/kyle.png', './images/KyleBrother.png', './images/niña_rubia.png',
    './images/niñaConFlor.png', './images/NiñaRosa.png', './images/pip.png', './images/Randy_eggs.png', './images/Randy.png', './images/Señor_Mackey.png',
    './images/Sheila.png', './images/Stan.png', './images/timmy.png', './images/Token.png', './images/tweek.png', './images/vaca.png', './images/wendy.png']
  return imgArray[getRandomInt(imgArray.length)]
}

let cssVar = document.querySelector(":root")
let newIndex = []

function swapDir(i, ultimaDir) {
  if (ultimaDir[i] == 'izq') {
    ultimaDir[i] = 'der';
  }else { 
    ultimaDir[i] = 'izq'; 
  }
  return ultimaDir
}

function swapDirection() {
  for (let i = 0; i < candidatos.length; i++) {
    if (!localStorage.getItem("ultimaDir")) {
      var ultimaDir = ["der"]
    } else {
      var ultimaDir = JSON.parse(localStorage.getItem("ultimaDir"))
    }
    if (!localStorage.getItem("positionX")) {
      var positionX = []
      positionX[i] = Math.ceil(Math.random() * 27) * (Math.round(Math.random()) ? 1 : -1)
      console.log(positionX);
    } else {
      positionX = JSON.parse(localStorage.getItem("positionX"))
      if (positionX[i] == null) {
        positionX[i] = Math.ceil(Math.random() * 27) * (Math.round(Math.random()) ? 1 : -1)
      }
    }

    if (Math.random() > 0.8 ) {
      changePosition(i, swapDir(i, ultimaDir), positionX)
    }else {
      changePosition(i, ultimaDir, positionX);
    }
  }
}

function changePosition(index, ultimaDir, positionX) {
  // if (newIndex[index] == false) {
  // positionX[i] = Math.ceil(Math.random() * 27) * (Math.round(Math.random()) ? 1 : -1)
  // newIndex[index] = true
  // }
  // ultimaDir[index] = Math.round(Math.random() > 0.8) ? "izq" : "der"

  if (positionX [index] <= -27) {
    ultimaDir[index] = "der"
  } else if(positionX [index] >= 27){
    ultimaDir[index] = "izq"
  }

  if (ultimaDir[index] == 'izq') { 
    positionX[index] -= 1; 
  }else if(ultimaDir[index] == 'der') {
    positionX[index] += 1;  
  }
  localStorage.setItem("ultimaDir", JSON.stringify(ultimaDir))
  localStorage.setItem("positionX", JSON.stringify(positionX))

  // var position = Math.ceil(Math.random() * 27) * (Math.round(Math.random()) ? 1 : -1)
  document.querySelector(`.avatares-${index}`).style = `height:10vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #000000;
  position: absolute;
  transform: translateX(${positionX[index]}vh);
  transition: all 1s;
  transition-timing-function: linear;
  bottom: 1vh;
  `
}

function splash(type) {
   let splash = document.querySelector(".splash")
   switch (type) {
    case "ADD":
      splash.innerHTML =`<img class="splash-img" src="./images/splash.png">`
      
      break;
    case "CLEAN": 
      splash.innerHTML=""
      let cleanAudio = new Audio('./Audio/clean.mp3');
      cleanAudio.play()
      break;
    default:
      break;
   }
}









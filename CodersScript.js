console.info("hola")

let overlay = document.getElementById("overlay")
let cerrar = document.getElementById("cerrar")

cerrar.onclick = function cerrarPopUp() {
  overlay.style.display = "none";
}

var candidatos = []
let muertos = []



function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

button1.onclick = function muerte() {
  let muerto = candidatos.splice(getRandomInt(candidatos.length), 1)
  muertos.push(muerto[0].name)
  printing() 
  playSound('SHOT')
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
        toPrint += `<div class="avatares"><img src="${item.image}"><p>${item.name}</p></div>`
      });
      return toPrint
    default:
      return "Na'";
  }
}

function printing() {
  document.getElementById("coders-list").innerHTML = createList('CANDIDATOS')
  document.getElementById("members").innerHTML = createList('IMG')
  document.getElementById("death").innerHTML = createList('MUERTOS')
}

function playSound(type) {
  let audioShot = new Audio('./Audio/disparo.mp3');

  switch (type) {
    case 'SHOT':
      audioShot.play()
      break;
    case 'RELOAD':

      break;
    default:
      break;
  }
}

button_añadir.onclick = function añadir() {
  let value = document.getElementById('box').value
  candidatos.push({name:value, image:avatarSelection()})
  document.getElementById('box').value = ""; 
  printing()
}


function avatarSelection() {
  var imgArray = ['./images/cartman.png','./images/cheff.png','./images/clyde.png','./images/jimbo.png',
  './images/jimmy.png','./images/Kenny.png','./images/Stan_HanSolo.png','./images/kyle.png','./images/KyleBrother.png','./images/niña_rubia.png',
  './images/niñaConFlor.png','./images/NiñaRosa.png','./images/pip.png','./images/Randy_eggs.png','./images/Randy.png','./images/Señor_Mackey.png',
  './images/Sheila.png','./images/Stan.png','./images/timmy.png','./images/Token.png','./images/tweek.png','./images/vaca.png','./images/wendy.png']
  return imgArray[getRandomInt(imgArray.length)]
}
console.info("hola")

let overlay = document.getElementById("overlay")
let cerrar = document.getElementById("cerrar")

cerrar.onclick = function cerrarPopUp() {
  overlay.style.display = "none";
}


var candidatos = [
]
//let candidatos = []
let muertos = []



function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
button1.onclick = function muerte() {
  let muerto = candidatos.splice(getRandomInt(candidatos.length), 1)
  muertos.push(muerto[0].name)
  printing() 
}

  function createCandidatosList() {
    let toPrint = ""
    candidatos.forEach(item => {
      toPrint += `<li>${item.name}</li>`
    })
    return toPrint
  }

  function createImg(){
    let toPrint = ""
    candidatos.forEach(item => {
      toPrint += `<div class="avatares"><img  src="${item.image}"></div>`
    });
    return toPrint
  }

function createMuertosList() {
  let toPrint = ""
    muertos.forEach((item) => {
      toPrint += `<li>${item}</li>`
    });
    return toPrint
}

function printing() {
  document.getElementById("coders").innerHTML = createCandidatosList()
  document.getElementById("members").innerHTML = createImg()
  document.getElementById("death").innerHTML = createMuertosList()
}
  button_añadir.onclick = function añadir() {
  let value = document.getElementById('box').value
  candidatos.push({name:value, image:avatarSelection()})
  document.getElementById('box').value = ""; 
 
    printing()


}





// var audio = document.getElementById("audio")
// // audio.play();

var imgArray = ['./images/cartman.png','./images/cheff.png','./images/clyde.png','./images/jimbo.png',
'./images/jimmy.png','./images/Kenny.png','./images/Stan_HanSolo.png','./images/kyle.png','./images/KyleBrother.png','./images/niña_rubia.png',
'./images/niñaConFlor.png','./images/NiñaRosa.png','./images/pip.png','./images/Randy_eggs.png','./images/Randy.png','./images/Señor_Mackey.png',
'./images/Sheila.png','./images/Stan.png','./images/timmy.png','./images/Token.png','./images/tweek.png','./images/vaca.png','./images/wendy.png']

function avatarSelection() {
  let avatar_selection = imgArray.splice(getRandomInt(imgArray.length), 1)
  return avatar_selection
}
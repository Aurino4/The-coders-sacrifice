

let overlay = document.getElementById("overlay")
let cerrar = document.getElementById("cerrar")

cerrar.onclick = function cerrarPopUp() {
  overlay.style.display = "none";
}

console.info("hola")
var candidatos = []
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

// function createCandidatosList() {
//   let toPrint = ""
//   candidatos.forEach(item => {
//     toPrint += `<li>${item.name}</li>`
//   })
//   return toPrint
// }

// function createImg(){
//   let toPrint = ""
//   candidatos.forEach(item => {
//     toPrint += `<img src="${item.image}">`
//   });
//   return toPrint
// }
// function createMuertosList() {
//   let toPrint = ""
//     muertos.forEach((item, i) => {
//       toPrint += `<li>${item}</li>`
//     });
//     return toPrint
// }

function createList(type) {
  let toPrint = ""
  switch (type) {
    case 'CANDIDATOS':
      candidatos.forEach(item => {
        toPrint += `<li>${item.name}</li>`
      })
      return toPrint
    case 'MUERTOS':
      muertos.forEach((item, i) => {
        toPrint += `<li>${item}</li>`
      });
      return toPrint
    case 'IMG':
      candidatos.forEach(item => {
        toPrint += `<img src="${item.image}">`
      });
      return toPrint
    default:
      return "Na'";
  }
}

function printing() {
  document.getElementById("coders").innerHTML = createList('CANDIDATOS')
  document.getElementById("members").innerHTML = createList('IMG')
  document.getElementById("death").innerHTML = createList('MUERTOS')
}

button_añadir.onclick = function añadir() {
  let value = document.getElementById('box').value
  candidatos.push({name:value, image:randomAvatar()})
  document.getElementById('box').value = ""; 
  printing()
}

function randomAvatar() {
  let imagenes = ["./images/kyle.png"]
  return imagenes[getRandomInt(imagenes.length)]
}
//  function avatar1() {
//   let imagenes = ["./images/kyle.png"]
//   document.getElementById("prueba").src = imagenes[0]
// }




var audio = document.getElementById("audio");

var audio = document.getElementById("audio")
// audio.play();
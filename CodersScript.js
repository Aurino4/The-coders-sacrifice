console.info("hola")

let overlay = document.getElementById("overlay")
let cerrar = document.getElementById("cerrar")

cerrar.onclick = function cerrarPopUp() {
  overlay.style.display = "none";
}

console.info("hola")
var candidatos = [{
  "name":"",
  "image":""
},
{
   "name":"",
   "image":""
}
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
      toPrint += `<img src="${item.image}">`
    });
    return toPrint
  }
console.info("resultado es igual a " + resultado)
function createMuertosList() {
  let toPrint = ""
    muertos.forEach((item, i) => {
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
  let palabras = document.getElementById('box').value.split(" ");
  for (var i = 0; i < candidatos.length; i++){
    candidatos[i]["name"] = palabras;
    candidatos [i]["image"] =  avatar()
  } 
  candidatos = candidatos.concat(palabras);
  document.getElementById('box').value = ""; 
  document.getElementById("coders").innerHTML = candidatos.join("<br>");
  }

function avatar() {
  let imagenes = ["./images/kyle.png"]
  document.getElementById("kyle" = imagenes[0])
}
//  function avatar1() {
//   let imagenes = ["./images/kyle.png"]
//   document.getElementById("prueba").src = imagenes[0]
// }


var audio = document.getElementById("audio");

var audio = document.getElementById("audio")
// audio.play();
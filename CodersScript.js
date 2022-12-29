

let overlay = document.getElementById("overlay")
let cerrar = document.getElementById("cerrar")

cerrar.onclick = function cerrarPopUp() {
  overlay.style.display = "none";
}

console.info("hola")
var candidatos = [
]
//let candidatos = []
let muertos = []

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
button1.onclick = function muerte() {
  let muerto = candidatos.splice(getRandomInt(candidatos.length), 1)
  muertos.push(muerto)
  document.getElementById("coders").innerHTML = "";
  document.getElementById("death").innerHTML = "";
  printing() 
}

  function createList() {
    let toPrint = ""
    candidatos.forEach(item => {
      toPrint += `<li>${item.name}</li>`
    })
    return toPrint
  }

  function createImg(){
    let toPrint = ""
    candidatos.forEach((item, i) => {
      toPrint += `<img id="${item.name + i}" src="${item.image}">`
    });
    return toPrint
  }

function muertosFunction(item, index) {
  document.getElementById("death").innerHTML +=item + "<br>"
}

function printing() {
  document.getElementById("coders").innerHTML = createList()
  document.getElementById("members").innerHTML = createImg()

  // document.getElementById("coders").innerHTML += `<li>${item}</li>`
  // muertos.forEach(muertosFunction)
}
  button_añadir.onclick = function añadir() {
  let palabras = document.getElementById('box').value
  candidatos.push({name:palabras, image:"./images/kyle.png"})
  document.getElementById('box').value = ""; 
  // for (var i = 0; i < candidatos.length; i++){
    printing()
  //   // candidatos [i]["image"] = avatar()
  // } 
  // candidatos = candidatos.concat(palabras);

  // document.getElementById("coders").innerHTML = candidatos.join("<br>");

}

function avatar() {
  let imagenes = ["./images/kyle.png"]
  document.getElementById("kyle").src = imagenes[0]
}
//  function avatar1() {
//   let imagenes = ["./images/kyle.png"]
//   document.getElementById("prueba").src = imagenes[0]
// }


var audio = document.getElementById("audio");

var audio = document.getElementById("audio")
// audio.play();
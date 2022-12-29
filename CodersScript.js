console.info("hola")

let overlay = document.getElementById("overlay")
let cerrar = document.getElementById("cerrar")

cerrar.onclick = function cerrarPopUp() {
  overlay.style.display = "none";
}


var candidatos = []
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

  function candidatosFunction(item, index) {
  return document.getElementById("coders").innerHTML += item + "<br>"

}

function muertosFunction(item, index) {
  document.getElementById("death").innerHTML +=item + "<br>"
}

function printing() {
  candidatos.forEach(candidatosFunction)
  muertos.forEach(muertosFunction)
}
  button_añadir.onclick = function añadir() {
  let palabras = document.getElementById('box').value.split(" ");
  for (var i = 0; i < candidatos.length; i++){
    if (i=0){candidatos.push({name:palabras, image:"./images/kyle.png"})
  }else{
    candidatos[i]["name"] = palabras;
    //candidatos [i]["image"] =  avatar()
  }
  } 
  candidatos = candidatos.concat(palabras);
  document.getElementById('box').value = ""; 
  document.getElementById("coders").innerHTML = candidatos.join("<br>");
  }
    	                                
// function avatar() {
//   let imagenes = ["./images/kyle.png"]
//   document.getElementById("kyle").src = imagenes[0]
// }
//  function avatar1() {
//   let imagenes = ["./images/kyle.png"]
//   document.getElementById("prueba").src = imagenes[0]
// }


var audio = document.getElementById("audio");

var audio = document.getElementById("audio")
audio.play();
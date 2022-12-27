

let overlay = document.getElementById("overlay")
let cerrar = document.getElementById ("cerrar")
cerrar.onclick = function cerrarPopUp(){
   overlay.style.display = "none";    
}

let candidatos = ["Martín","Pablo", "Eugenio", "Ana", "Guadalupe", "Jonas"]
let muertos = []
candidatos.forEach(candidatosFunction)
function getRandomInt(max) {
   return Math.floor(Math.random() * max);
}
button1.onclick = function muerte() {
   let muerto = candidatos.splice(getRandomInt(candidatos.length), 1)
   muertos.push(muerto)
   document.getElementById("titulo2").innerHTML = "";
   document.getElementById("titulo3").innerHTML = "";
   vertical()
}

 function candidatosFunction (item, index) {
  return document.getElementById("titulo2").innerHTML += index + ":" + item + "<br>"
 }

function muertosFunction (item, index) { 
  document.getElementById("titulo3").innerHTML += index + ":" + item + "<br>"  
}
function vertical() {
  candidatos.forEach(candidatosFunction)
  muertos.forEach(muertosFunction) 
}


var audio = document.getElementById("audio")
audio.play();
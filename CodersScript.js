let cerrar = document.getElementById ("cerrar")
var overlay = document.getElementById("overlay")

console.info("hola")
// let candidatos = ["Martín","Pablo", "Eugenio", "Ana", "Guadalupe", "Jonas"]
// let muertos = []
// candidatos.forEach(candidatosFunction)
// muertos.forEach(muertosFunction)
// function getRandomInt(max) {
//    return Math.floor(Math.random() * max);
// }

// //console.info(getRandomInt(candidatos.length))

// //---------------------------------------------

// button1.onclick = function muerte() {
//    let muerto = candidatos.splice(getRandomInt(candidatos.length), 1)
//    muertos.push(muerto)
//    candidatos.forEach(candidatosFunction)
//    muertos.forEach(muertosFunction)
//    console.info(candidatos)
// }

 function candidatosFunction (item, index) {
//   //var zParrafos = document.querySelectorAll("p")
//   // var zBody = document.querySelectorAll("header");
//   // zBody.removeChild(zParrafos[1]);//
   
  return document.getElementById("titulo2").innerHTML += index + ":" + item + "<br>"
 }
function muertosFunction (item, index) {
  document.getElementById("titulo3").innerHTML += index + ":" + item + "<br>"  
};

cerrar.onclick = function cerrarPopUp(){
   overlay.style.display = "none";    
}
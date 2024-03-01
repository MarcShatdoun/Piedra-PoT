//Juego Piedra papel o tijero
// V0.1 

let rules = `
PIEDRA, PAPEL O TIJERAS
=======================

🪨 1 <--- PIEDRA
🗞️ 2 <--- PAPEL 
✂️ 3 <--- TIJERAS

x <--- Salir 

`

let eleccionUsuario = Number(prompt(rules))
console.log("eleccion = ", eleccionUsuario);


let randomNumb = Math.floor(Math.random()*3 + 1)



if(!isNaN(eleccionUsuario) && (1 <= eleccionUsuario <= 3)){
   if (eleccionUsuario == 1){
    alert("Has elegido ✊")
   } else if(eleccionUsuario == 2){
    alert("Has elegido ✋")
   } else if(eleccionUsuario == 3){
     alert("Has elegido ✂️ ")
   } else{
    alert("Hasta pronto !!")
   }
   
   let eleccionPC = randomNumb
   //Reglas del juego
   if (eleccionPC == 1){
    alert("El bot ha elegido ✊")
   } else if(eleccionUsuario == 2){
    alert("El bot ha elegido ✋")
   } else if(eleccionUsuario == 3){
     alert("El bot ha elegido ✂️ ")
   }
   
   if (eleccionPC == eleccionUsuario){
    alert("Vaya, ha habido un empate")
   } else if( 
        (eleccionUsuario == 1 && eleccionPC == 3) || 
        (eleccionUsuario == 2 && eleccionPC == 1) || 
        (eleccionUsuario == 3 && eleccionPC == 2)
    ){
        alert("Has ganado")
    }
    else {
        alert("Has perdido")
    }
}

else{
    alert("Hasta pronto !!")  
}




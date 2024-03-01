//Juego Piedra papel o tijero
// V0.2

// do {
//     game()
//     let repeticion = confirm("Quieres jugar otra vez?")
//     if (!repeticion){
//         break;
//     }
// } while (true);

let reinicio = true;

do {
    game();
    console.log("aqui");
    reinicio = confirm("Quieres jugar otra vez?")
    
} while (reinicio);


function game(){
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



    if(!isNaN(eleccionUsuario)){
    if (eleccionUsuario == 1){
        alert("Has elegido ✊")
    } else if(eleccionUsuario == 2){
        alert("Has elegido ✋")
    } else if(eleccionUsuario == 3){
        alert("Has elegido ✂️ ")
    } else{
        alert("Hasta pronto !!");
        return;
    }
    
    let eleccionPC = randomNumb
    
    if (eleccionPC == 1){
        alert("El bot ha elegido ✊")
    } else if(eleccionPC == 2){
        alert("El bot ha elegido ✋")
    } else if(eleccionPC == 3){
        alert("El bot ha elegido ✂️ ")
    }
    //Reglas del juego
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


} 



//Juego Piedra papel o tijero
// V0.3

// do {
//     game()
//     let repeticion = confirm("Quieres jugar otra vez?")
//     if (!repeticion){
//         break;
//     }
// } while (true);
let winsMe = 0
let winsBot = 0
let draw = 0
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
        draw++
    } else if( 
            (eleccionUsuario == 1 && eleccionPC == 3) || 
            (eleccionUsuario == 2 && eleccionPC == 1) || 
            (eleccionUsuario == 3 && eleccionPC == 2)
        ){
            alert("Has ganado")
            winsMe++
        }
        else {
            alert("Has perdido")
            winsBot++
        }
    }

    else{
        alert("Hasta pronto !!")  
        return
    }
let marcador = `
Marcador:

Victorias: ${winsMe}
Derrotas: ${winsBot}
Empates: ${draw}

`
alert(marcador)

} 



// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


//Almacenar amigos ingresados
let amigos =[];



// Crear funcion para agregar amigos
function agregarAmigo(){ 
    if (document.getElementById('amigo').value == ''){
        alert("el campo no puede estar vacio");
        
    }else{
        //
        let agregarAmigos= amigos.push(document.getElementById('amigo').value);    
            lista();
            limpiarCampo();
            return;
        }  
    }
   
   
//limpiar caja
function limpiarCampo(){
    let caja = document.getElementById('amigo').value= '';

}


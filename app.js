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

//mostrar lista
function lista(){
    
    //preparar variables
    let listas= document.getElementById('listaAmigos');
    listas.innerHTML = '';
    let insertarAmgigos = '';
    
    //creando bucle for
    for (contador = 0; contador < amigos.length; contador++ ){
        insertarAmgigos += `<li>${amigos[contador]}</li>`;
    }

    listas.innerHTML = insertarAmgigos;
}




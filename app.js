// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombreUsuario = "";
let listaNombres = [];
let numumeroDeNombres = 0;
let nombreActual = "";
let ultimoNombreSorteado = [];

//console.log(listaNombres);

function agregarAmigo(){
    nombreUsuario = document.querySelector(".input-name").value;
    if(nombreUsuario != ""){
        if(comprobarSimilitud(nombreUsuario) == false){
            listaNombres.push(nombreUsuario);
            mostrarNombres();
            console.log(listaNombres);
    
            document.querySelector(".input-name").value = "";
        }
    }else{
        alert("Por favor, ingrese un nombre válido.");
    }
}

function sortearAmigo(){
    if(listaNombres.length > 0){
        let elementoHTML = document.getElementById("resultado");
        numumeroDeNombres = listaNombres.length;
        let posicion = Math.floor(Math.random()*numumeroDeNombres);

        nombreActual = listaNombres[posicion];
        if(ultimoNombreSorteado.length > 1 && ultimoNombreSorteado[ultimoNombreSorteado.length-1] == nombreActual){
            return sortearAmigo();
        }
        ultimoNombreSorteado.push(nombreActual);
        console.log(ultimoNombreSorteado); //Comprobando que no se repita el anterior sorteado
        elementoHTML.innerHTML = `El amigo secreto sorteado es: ${nombreActual} `;   
        
        return elementoHTML.innerHTML;
    }   
}

function mostrarNombres(){
    let nombresAcumulados = "";
    const nombresMostrar = document.getElementById("listaAmigos");
    nombresMostrar.innerHTML = ""; 

    for(let i = 0; i < listaNombres.length; i++){
        nombresAcumulados += `<li>${listaNombres[i]}</li>`;
    }
    console.log(nombresAcumulados);
    nombresMostrar.innerHTML = nombresAcumulados;
}

function comprobarSimilitud(nombreNuevo){
    let yaExiste = false;
    for(let i = 0; i < listaNombres.length; i++){
        if(nombreNuevo == listaNombres[i]){
            alert("Ya existe ese nombre en la lista.");
            yaExiste = true;
        }
    }    
    return yaExiste;
}

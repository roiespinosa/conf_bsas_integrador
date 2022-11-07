//apliqué function para generar el algoritmo matemático//
function cuenta(cantidad,categoria){
    const ticket=200; //const = constante
    let total=ticket*cantidad;

//switch hace el recorrido de la variable hasta que encuentra aquella que se menciona con "case" y aplica una sentencia definida//

    switch(categoria){
        case "estudiante":
            total=total-(total*0.8)
            break;
        case "trainee":
            total=total-(total*0.5)
            break;
        case "junior":
            total=total-(total*0.15)
            break;
    }
    return total //sin return la funcion no va a dar resultado//
}
//acá tome el botón resumen para que arroje el resultado asignandole una variable//
let resumen=document.getElementById("resumen");

//Asignamos un evento a la acción del boton y dentro enumero las variables a tener en cuenta. Al final del elemento cuando definimos una variable ponemos la funcion value para asignarle un valor como tal//
resumen.addEventListener("click", ()=>{
    let cantidad= document.getElementById("cantidad").value
    let categoria= document.getElementById("categoria").value

// referencié la variable valor con la función//
    let valor=cuenta(cantidad,categoria)
    console.log(valor) //fue para probar que funcionaba la función//
    let total_a_pagar=document.getElementById("total_a_pagar") //generé una variable que llamara al elemento de html//

    total_a_pagar.textContent= "Total a Pagar: $ " + valor // el textContent hace una modificación del contenido porque no se me ocurrio como hacer que solo imprimiera el valor dentro del casillero//

}    
)
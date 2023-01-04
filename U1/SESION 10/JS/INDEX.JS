var actualizado = document.getElementById("TITULO") ;
console.log(actualizado); 

var actualizado2 = document.getElementsByClassName("TITULOPRINCIPAL");
console.log(actualizado2);

document.getElementById("TITULO").innerHTML="APRENDIENDO MÁS SOBRE JAVASCRIPT";


function datos(){

    var NOMBRE = document.getElementById("NOMBRE").value;

    localStorage.setItem("textvalue", nombre)      //textvalue = nombre

}


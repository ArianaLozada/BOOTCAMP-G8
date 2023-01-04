function datos(){

    var NOMBRES = document.getElementById("NOMBRE"). value;
    var APELLIDOS = document.getElementById("APELLIDO").value;
    var EDADES = document.getElementById("EDAD").value;
    var DNI = document.getElementById("DNI").value;
    var CORREO = document.getElementById("CORREO").value;

    console.log(NOMBRES)
    console.log(APELLIDOS)
    console.log(EDADES)
    console.log(DNI)
    console.log(CORREO)

    //1ERA FORMA DE DARLE FORMATO

    var mensajes = "Nombres: "+NOMBRES;
    console.log(mensajes);

    var mensaje1= "Apellidos: "+APELLIDOS;
    console.log(mensaje1);

    //2DA FORMA DE DARLE FORMATO

    var formato = "Nombres: "+NOMBRES+ "\nApellidos: "+APELLIDOS+ "\nEDADES: "+EDADES+ "\nDNI: "+DNI+ "\nCORREO: "+CORREO
    console.log(formato);




}
function validarNum(msg, min, max) {
    let number;
    let valido;

    do {
        number = parseInt(prompt(msg));

        if (isNaN(number)) {

            alert("Por favor, el valor debe ser un número.");
            valido = false;

        } else if (number === null || number === undefined) {

            alert("Por favor, ingrese un valor en el campo.");
            valido = false;

        } else if (number < min || number > max) {

            alert(`Por favor, ingrese un número entre ${min} y ${max}.`);
            valido = false;

        } else {
            valido = true;
        }

    } while (!valido);

    return number;
}

function validarStrNum (msg) {
    let nombre;
    let valido;



    do {
        nombre = prompt(msg);

        if (nombre === null){

            alert("Por favor, ingrese un valor en el campo.");
            valido = false;

        } else if (nombre.trim() === "") {

            alert("Por favor, debe ingresar un valor en el campo");
            valido = false;

        } else if (!isNaN(nombre)) {

            alert("Por favor, el valor ingresado no debe ser un numero");
            valido = false;
        
        } else {
            valido = true;
        }      
    } while (!valido);
    return nombre;

    
}

function validarString (msg)  {

    let portada;
    let valido;

    do {
        portada = prompt(msg);

        if (portada === null){

            alert("Por favor, ingrese un valor en el campo.");
            valido = false;

        } else if (portada.trim() === "") {

            alert("Por favor, debe ingresar un valor en el campo");
            valido = false;    
        
        } else {
            valido = true;
        }
    } while (!valido);
    return portada;

    

        
}    
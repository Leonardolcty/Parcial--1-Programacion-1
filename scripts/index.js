

let discos = [];

    fetch('./discos.json')
        .then(res => res.json())
        .then(data => {
            discos = data;
            mostrar();
        })
        .catch(() => alert('No se pudo cargar los discos.'));

function cargar () {

    const nombre = validarStrNum("Por favor, ingrese el nombre del disco.")
    const artista = validarStrNum("Por favor, ingrese el nombre del artistia o banda del disco.");
    const portada = validarString("Por favor, ingrese el link de la portada del disco.");
    let id, idEnUso;

    do {
        id = validarNum("Por Favor, ingrese el id del disco.(1-999)",1,999);
        idEnUso = idExistente(id);// Como me hizo enojar esta parte xd
        if (idEnUso) {
            alert("El id ingresado ya está en uso. Por favor, ingrese otro codigo")
        }
    } while (idEnUso);

    let disco = new Disco(nombre, artista, portada, id);

    do {

        let nombrePista = validarStrNum("Por favor, ingrese el nombre de la pista.");
        let duracion = validarNum("Por favor, ingrese la duracion de la pista (1-7200)",1,7200);

        let pista = new Pista(nombrePista, duracion);

        disco.ingresarPistas(pista);

        
    } while (confirm("¿Desea ingresar otra pista?"));

    discos.push(disco);

    alert(`Disco ${disco.nombre} fue ingresado`)

}

function idExistente(id) {
    return discos.some(disco => disco.id === id);// Como me hizo enojar esta parte xd
}

//Muestra la duración de cada pista en formato MM:SS 
function obtenerDuracionTotal(pistas) {
    return pistas.reduce((total, pista) => total + pista.duracion, 0);
}



function duracionLarga(segundos) {
    return segundos > 180;
}

function mostrar () {
    let divImprimir = document.querySelector("#discos");
    divImprimir.innerHTML = "";

    for (let disco of discos) {
        // Obtiene la duracion total de pista y la guarda en una variable, variable que cumple la funcion de mostrar la duracion total
        let duracionTotal = obtenerDuracionTotal(disco.pistas);

        let html = `<div class="col-md-4">`;
        html += `<div class="card h-100">`;
        html += `<img src="${disco.portada}" class="card-img-top" alt="${disco.nombre}">`;
        html += `<div class="card-body">`;
        html += `<h3 class="card-title">${disco.nombre}</h3>`;
        html += `<h4 class="card-text">${disco.artista}</h4>`;
        html += `<p class="card-text">Pistas cargadas: ${disco.pistas.length}</p>`;
        html += `<p class="card-text">Id : ${disco.id }</p>`;
        html += `<p class="card-text">Duración total : ${duracionFormateada(duracionTotal)}</p>`;
        html += `</div>`;
        html += `<ul class="list-group list-group-flush">`;

        disco.pistas.forEach(pista => {
            // Con la funcion duracionLarga nos fijamos si el valor que le llega desde duracion es mayor a 180. Si cumple con la condicion se le aplicara el estilo
            const claseDuracion = duracionLarga(pista.duracion) ? 'style="color: #fff; background: #c80018; padding: .5rem; border-radius: 3px;"' : '';
            // El estilo se le aplica al span en el que esta el MS:SS
            html += `<li class="list-group-item">${pista.nombre} <span ${claseDuracion}>${duracionFormateada(pista.duracion)}</span></li>`;
        });
        html += `</ul>`;
        html += `</div>`;
        html += `</div>`;

        divImprimir.innerHTML += html;
    }
}

function duracionFormateada(segundos) {
    let minutos = Math.floor(segundos / 60);
    let restoSegundos = segundos % 60;
    if (restoSegundos < 10) {
        restoSegundos = "0" + restoSegundos;
    }
    return minutos + ":" + restoSegundos;
}

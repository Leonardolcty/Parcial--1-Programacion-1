class Disco {

    constructor (nombre, artista, portada, id) {

        this.nombre = nombre;
        this.artista  = artista;
        this.portada = portada;
        this.id = id;
        this.pistas = [];

    }

    ingresarPistas (pista) {
        this.pistas.push(pista) 
    }
    
    duracionFormateada() {

        let minutos = Math.floor(this.duracion / 60);
        let segundos = this.duracion % 60;
        return `${minutos}:${segundos.toString().padStart(2, '0')}`;

    }

}

class Pista {

    constructor (nombre, duracion) {
        
        this.nombre = nombre;
        this.duracion = duracion;

    }

}
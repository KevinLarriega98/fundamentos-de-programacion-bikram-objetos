/** Declaración */

// 1.
let Coche = {
  marca: "Ford",
  modelo: "Mustang",
  matricula: "1234ABC",
};

// 2.
let Casa = {
  codPostal: "28001",
  calle: "Gran Vía",
  portal: "1",
  piso: "2",
}

// 3.
let FullStackDeveloper = {
  lenguajes: ["JavaScript", "Python", "Java"],
  proyectos: ["Proyecto1", "Proyecto2", "Proyecto3"],
}

// 4.
let Perro = {
  nombre: "Max",
  raza: "Labrador",
  color: "Marrón",
  edad: 5,
  ladrar() {
    console.log("Guau Guau");
  },
  popo() {
    return Math.random() * 3;
  },
}

/** Lectura de propiedades */

// 5.
let marcaPortatil = Portatil.marca;

// 6.
let marcaPortatil2 = Portatil["marca"];

// 7.
let grupos = Concierto.grupos;

// 8.
let RGB = [Led.rojo, Led.verde, Led.azul];

/** Modificación de propiedades */

// 9.
Portatil.modelo = "P345";

// 10.
Concierto.cartelera.push("Guns N' Roses");

// 11.
Concierto.fecha = new Date();

// 12.
Impresora.imprimiendo = {
  nombreArchivo: "documento.pdf",
  copias: 2,
  numPaginas: 10,
};

/** Declaración */

// 13.
let Noticia = {
  titular: "Nueva noticia",
  cuerpo: "Contenido de la noticia",
};

// 14.
let Persona = {
  nombre: "Kevin",
  apellidos: "Larriega",
  edad: 28,
};

// 15.
let Avion = {
  numPasajeros: 180,
  despegar() {
    console.log("despegando");
  },
  volar() {
    console.log("llegando al destino");
  },
  aterrizar() {
    console.log("aterrizando");
  },
};

// 16.
let Paquete = {
  contenido: [Coche, Casa],
};

// 17.
let Pais = {
  numHabitantes: 49000000,
  continente: "Europa",
  gentilicio: "español",
};

/** Lectura de propiedades */

// 18.
let codError = O_Error.codigo;

// 19.
let integrantes = Grupo.integrantes;

// 20.
let nivelesTinta = Impresora.tinta;

// 21.
let pixeles = Pantalla.pixeles;

// 22.
let especificaciones = Movil["especificaciones"];

/** Modificación de propiedades */

// 23.
Grupo.numIntegrantes = 5;

// 24.
Pantalla.dimensiones = "1920x1080";

// 25.
Led.encendido = !Led.encendido;

// 26.
Movil.temperatura = "20º";

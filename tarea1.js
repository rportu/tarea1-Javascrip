//pinguinos
var gunter = {
  name: "Gunter",
  origin: "Adventure Time",
  canFly: false,
  sayHello: function () {
    console.log("QUACK!!!");
  },
};

var ramon = {
  name: "Ramón",
  origin: "Happy Feet",
  canFly: true,
  sayHello: function () {
    console.log("Estoy encantado de conocerle.");
  },
};

var fred = {
  name: "Fred",
  origin: "Sitting Ducks",
  canFly: false,
  sayHello: function () {
    console.log("Hi there!");
  },
};

//arreglo de los pinguinos
let pinguinos = [gunter, ramon, fred];

//console.log(pinguinos);

//for
for (let value of pinguinos) {
  //console.log(value);
}

//longitud
let longitud = pinguinos.length;
//console.log(longitud);

//for para numberOfFeet
for (let i = 0; i < pinguinos.length; i++) {
  pinguinos[i].numberOfFeet = Math.floor(Math.random() * (6 - 1)) + 1;
  //console.log(pinguinos[i]);
}

//pueden volar?
for (let i = 0; i < pinguinos.length; i++) {
  if (pinguinos[i].canFly == true) {
    //console.log("¡"+pinguinos[i].name+" puede volar!")
  }
}

//pinguinos con mas de 2 pies
let pinguinosConMasDeDosPies = [];
for (let i = 0; i < pinguinos.length; i++) {
  if (pinguinos[i].numberOfFeet > 2) {
    let j = 0;
    pinguinosConMasDeDosPies[j] = pinguinos[i];
    //console.log(pinguinosConMasDeDosPies[j]);
    j++;
  }
}

//comidas favoritas
var comidasFavoritas = {
  comidaFavoritaUno: "Pescado",
  comidaFavoritaDos: "Calamares",
  comidaFavoritaTres: "Mariscos"
};

//aqui se las asigno
for (let i = 0; i < pinguinos.length; i++) {
  pinguinos[i].favoriteFoods = comidasFavoritas;
  //console.log(pinguinos[i].favoriteFoods.comidaFavoritaDos) // mostrar la comida favorita #2 de cada uno 
  
  pinguinos[i].favoriteFoods.comidaFavoritaTres = "Piñas"; //sobreescibir la comida favorita #3 de cada pinguino
  //console.log(pinguinos[i]);
}

//for para imprimir solo la comida favorita de los pingüinos
for (let i = 0; i < pinguinos.length; i++) {
  pinguinos[i].favoriteFoods = comidasFavoritas;
  
  //console.log(pinguinos[i].favoriteFoods);
}

//array.find()
const carros = [
  {nombre: 'mazda', anio: 2010},
  {nombre: 'honda', anio: 2020},
  {nombre: 'cerezas', anio: 2006}
];

function buscarHonda(carros) {
  return carros.nombre === 'honda';
  
}
//console.log(carros.find(buscarHonda));

//array.filter()
const palabras = ['costa rica', 'copa oro', 'copa america', 'eurocopa', 'jamaica', 'gol'];
const resultado = palabras.filter(palabras => palabras.length > 9);
console.log(resultado);


//DEJE CASI TODOS LOS console.log COMENTADOS PARA A LA HORA DE CORRER NO SE VEA FEO
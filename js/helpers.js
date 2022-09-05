//Creamos una ArrowFunction en la que optenemos un numero aleatorio para darle una posicion a la Dragon Ball
let getRandomNumber = (size) => {
  return Math.floor(Math.random() * size);
};

//Creamos una ArrowFunction para tomar la distancia entre el click del jugador y la Dragon Ball
let getDistance = (e, target) => {
  //obtenemos la diferencia entre las distancias
  let diffx = e.offsetX - target.x;
  let diffy = e.offsetY - target.y;
  //Realizamos el teorema de pitagoras para obtener la distancia (Se saca raiz cuadrada a la suma de las diferencias al cuadrado )
  return Math.sqrt(diffx * diffx + diffy * diffy);
};

//Creamos una ArrowFunction para darle una pista al usuario dependiendo de la distancia obtenida anteriormente
let getDistanceHint = (distance) => {
  if (distance < 30) {
    return "Boiling Hot!";
  } else if (distance < 40) {
    return "Really Hot";
  } else if (distance < 100) {
    return "Warm";
  } else if (distance < 180) {
    return "Cold";
  } else if (distance < 360) {
    return "Really Cold";
  } else {
    return "Freezing";
  }
};

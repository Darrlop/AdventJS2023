function drawGift(size, symbol) {

  caja = [];  // Caja de regalo en forma de cubo
  const MITAD = (size * 2 - 2) / 2;
  let i = MITAD;
  let linea = "";
  let borde = "#";
  let lCaraS = "#";
  let lCaraL = "#";

  // // Creo el borde superior, y las filas de la cara superior
  // for (let ind = 0; ind < i; ind++){
  //   linea += " ";
  //   borde += "#" ;
  //   ind < i - 1 ? lCaraS += symbol : lCaraS += "#";
  // }
  // //linea = linea.slice() <- los test empujan la 1ª linea por el "
  // linea += borde;
  // caja.push(linea);

    function caraSuperior(){
        // Creo el borde superior, y las filas de la cara superior
      for (let ind = 0; ind < i; ind++){
        linea += " ";
        borde += "#" ;
        ind < i - 1 ? lCaraS += symbol : lCaraS += "#";
      }
      //linea = linea.slice() <- los test empujan la 1ª linea por el "
      linea += borde;
      caja.push(linea);
    
    }

  caraSuperior()
  // //Fila cara superior <- integrado arriba
  // for (let ind = 1; ind < size-1; ind ++){
  //   lCaraS += symbol;
  // }
  // lCaraS += "#";


  //Elaboración Mitad superior
  i--;
  while (i > 0){
    linea = "";
    for (ind = 0; ind < i; ind++){
      linea += " ";
    }
    i === MITAD - 1 ? lCaraL : lCaraL = symbol + lCaraL;
    linea += lCaraS + lCaraL;
    caja.push(linea);
    i--;
  }

  //Borde Medio
  if (MITAD === 1) 
    caja.push(borde + lCaraL);
  else if (MITAD >= 1) 
    caja.push(borde + symbol + lCaraL);

  arrayModelo = [...caja];
  for (let ind = arrayModelo.length - 2; ind >= 0; ind--){
    let lin = arrayModelo[ind];
    linea = lin.replace(/ /g, ""); 
    caja.push(linea);
  }

  const strCaja = caja.join('\n') + "\n";
  console.log("En formato String:");
  console.log(strCaja)



  return '#\n'
}

drawGift(5, "+")
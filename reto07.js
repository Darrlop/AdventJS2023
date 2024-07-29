function drawGift(size, symbol) {

  caja = [];  // Caja de regalo en forma de cubo
  const MITAD = (size * 2 - 2) / 2;
  
  // Inicializo elementos
  let i = MITAD;
  let linea = "";
  let borde = "#";
  let lCaraS = "#";
  let lCaraL = "#";

    //Uso funciones anidadas para organizar el código

    function creoElementosCaraSuperior(){
      /// Creo los elementos que componen la cara superio: el borde y las filas de dicha cara
      for (let ind = 0; ind < i; ind++){
        linea += " ";
        borde += "#" ;
        ind < i - 1 ? lCaraS += symbol : lCaraS += "#";  // BALIZA probar con size 0. el test secreto puede fallar por eso
      }
      if (MITAD >= 0) linea += borde;  //Controlo caso especial con size = 0                 
    }


    function imprimoMitadSuperior(){
      /// Imprimo mitad superior de la caja, hasta justo antes del borde de cambio de cara
      caja.push(linea);
      i--;  //resto por haber impreso ya el borde superior

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
    }


    function imprimoBordeMedio(){
      /// Imprimo el borde medio, ecuador de la parte superior e inferior
      if (MITAD === 1) 
        caja.push(borde + lCaraL);
      else if (MITAD >= 1) 
        caja.push(borde + symbol + lCaraL);
    }


    function imprimoMitadinferior(){
      /// Imprimo la mitad inferior a partir de la impresión ya hecha en la parte superior
      arrayMolde = [...caja];
      for (let ind = arrayMolde.length - 2; ind >= 0; ind--){
        let lin = arrayMolde[ind];
        linea = lin.replace(/ /g, ""); 
        caja.push(linea);
      }    
    }
  

  creoElementosCaraSuperior();
  imprimoMitadSuperior();
  imprimoBordeMedio();
  imprimoMitadinferior();

  const strCaja = caja.join('\n') + "\n"; // añado un \n extra por indicación del enunciado
  return strCaja;
}

console.log(drawGift(0, "+"))
function decode(message) {

  let subMensajes = [];
  let textoOk = "";

  const inversion = (invertido) => {
    //debugger;
    let tempo = invertido;
    //Quito ( ) iniciales
    let i = tempo.indexOf("(");
    let j = tempo.lastIndexOf(")");
    tempo = invertido.slice(i+1,j);
    
    //verifico si hay más (  )
    i = tempo.indexOf("(");
    j = tempo.indexOf(")");
    console.log(i + "///" + j)

    if( i !== -1){
      let subTextoOk = tempo.slice(0,i) + tempo.slice(j+1, tempo.length)
      console.log(subTextoOk)
      subTextoOk += inversion(tempo.slice(i, j+1))
      subTextoOk = subTextoOk.split('').reverse().join('');
      return subTextoOk
      
    }else{
      //subTextoOk += tempo.split('').reverse().join('');
      tempo = tempo.split('').reverse().join('');

    
    }
    //return subTextoOk;
    return tempo;
    
  };


  let textoFinal = "";

  function obtNumParenAbiertos(message){
    //resultado máximo
    let cont = 0;
    for(char of message){
      if(char === '('){
        cont++;
        if (cont === 2) break;
      } 
    }
    return cont;
  }

  
  
  let numParen = obtNumParenAbiertos(message);

  var invertir = (subT) => {
    return subT === "" ? '' : subT.slice(1,-1).split('').reverse().join('');
  }

  
  if (numParen === 1){
    let i = message.indexOf("(");
    let j = message.lastIndexOf(")");
    let textOkI = message.slice(0,i);
    let textOkF =  message.slice(j+1, message.length); 
    console.log(textOkI + textOkF);
    console.log(message);
    let subTextOk = invertir(message.slice(i, j+1));
    console.log(subTextOk);
    textoFinal = textOkI + subTextOk + textOkF;
  }else if (numParen === 2){
      //debugger
      let i1 = message.indexOf("(");
      let j1 = message.lastIndexOf(")");
      let textOkI = message.slice(0,i1);
      let textOkF =  message.slice(j1+1, message.length); 

      let i2 = message.indexOf("(", i1+1);
      let j2 = message.lastIndexOf(")", j1-1);
      let subTextOkI = message.slice(i1, i2);
      let subTextOkF =  message.slice(j2+1, j1+1); 
      
      let subText = invertir(message.slice(i2, j2+1));

      subText = subTextOkI + subText + subTextOkF;
      subText = invertir(subText) 
      subText = textOkI + subText + textOkF;
      return subText

  }else{
    textoFinal = message;
  }

  /*
  subMensajes = message.split(" "); 
  console.log(subMensajes)
  for (let subM of subMensajes){
    if (!subM.includes("(")){
      textoOk += `${subM} `;
    }else{
      textoOk += inversion(subM) + " ";
    }
  }
*/

  return textoFinal;
}

//const c = decode('sa(u(cla)atn)s')
//console.log(c) // santaclaus

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

//const a = decode('hola (odnum)')
//console.log(a) // hola mundo

//x  Cortar el mensaje
//x  Detectar paréntesis
//    Si no hay otro (), invierto
//    Si sí hay otro
//      detectar paréntesis
//      invierto
//   Eliminar espacios finales









/*
const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus
Notas:


El nivel máximo de anidamiento es 2.
*/
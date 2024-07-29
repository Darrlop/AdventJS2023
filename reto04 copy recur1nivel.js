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

  subMensajes = message.split(" "); 
  console.log(subMensajes)
  for (let subM of subMensajes){
    if (!subM.includes("(")){
      textoOk += `${subM} `;
    }else{
      textoOk += inversion(subM) + " ";
    }
  }


  return textoOk
}

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

//const b = decode('(olleh) (dlrow)!')
//console.log(b) // hello world!

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
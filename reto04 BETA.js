function decode(message) {

  let textoFinal = "";

  /** 
   *Obtiene el nivel de anidación del mensaje
   *@param {string} message - mensaje a analizar
  */
  function obtNivel(message){
    let cont = 0;
    if (!message.includes('(')){
      cont = -1;
    }else{
      for(let char of message){
        if(char === '('){
          cont++;
        } else if(char === ')'){
          cont--;
        }
        if (cont === 2) break;
      }
      cont === 0 ? cont = 1 : cont = 2;
    }
    return cont;
  }


  var invertir = (subT) => {
    return subT === "" ? '' : subT.slice(1,-1).split('').reverse().join('');
  }


  let nivel = obtNivel(message);

  if (nivel === 1){

    for (let ind = 0; ind < message.length; ind++){
      if (message[ind] === '('){
        let iCierre = message.indexOf(")", ind + 1);
        let subTexto = invertir(message.slice(ind, iCierre + 1));
        textoFinal += subTexto + ' ';
        ind = iCierre;
      }else{
        textoFinal += message[ind];
      }
    }

  }else if (nivel === 2){

    let ind = 0
    while ( ind < message.length){
      if (message[ind] === '('){
        let anclaI = ind, subInd = ind;
        let subTexto = "";
        subTexto = subTexto.concat(message[subInd]);
        while (true){
          subInd++;
          if (message[subInd] === ')'){
            subTexto = subTexto.concat(message[subInd]);
            let subTextoInver = invertir(subTexto);
            message = message.replace(subTexto, subTextoInver);
            ind = subInd;
            break;
          }else if (message[subInd] === '('){
            ind = subInd - 1;
            break;
          }else{
            subTexto = subTexto.concat(message[subInd]);
          }
        }        
      }

      if( ind === message.length -1 && message.includes('(')){
        ind = 0;
      }else{
        ind++
        textoFinal = message
      }       
    }//   

  }else{
    textoFinal = message;
  }
  return textoFinal;
}

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

//const b = decode('(olleh) (dlrow)!')
//console.log(b) // hello world!

//const a = decode('hola (odnum)')
//console.log(a) // hola mundo

//const t1 = decode('((nta)(sa))')
//console.log(t1)//Expected: "santa"

//espacio tras ultima palabra  world !;  mundo_

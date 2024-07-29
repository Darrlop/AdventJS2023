function cyberReindeer(road, time) {
 
  let roadRun = road.split('');  //como los string sin inmutables, lo convierto a array para trabajar 
  // Para controlar estado donde está el trineo en un momento dado
  let roadMap = road.split('');
  roadMap[0] = '.';

  const CYBER = 'S'; //CyberReindeer
  const POS = '.'; // Posición
  const BA = "*"; // Barrera Abierta
  const BC = "|"; // Barrera Cerrada
  let pos = 0;
  let recorrido = [];

  for (let clock = 1; clock <= time; clock++){
    
    recorrido.push(roadRun.join(''));

    if(clock === 5){  //Actualizo roads con barreras abiertas
      roadMap = roadMap.map(function(estado){  // Aplico un map para mutar el array
        return estado === BC ? BA : estado;
      });
      //Aplico cambios al otro array con el operador spread y restauro ubicación trineo
      roadRun = [...roadMap]; 
      roadRun[pos] = CYBER;
    }
    // Santa intenta avanzar
    switch (roadMap[pos + 1]){
      case POS:
      case BA:
        roadRun[pos] = roadMap[pos];
        roadRun[pos + 1] = CYBER;
        pos += 1;
        break;
      case BC:
        //Espera sin avanzar por estar cerrada la barrera
        break;
    }
  }
  return recorrido;
}

const road ="S..|...|..";
const time = 10; // unidades de tiempo
const result = cyberReindeer(road, time);
console.log(result)

function maxDistance(movements) {
  
  let movD = 0, movI = 0, mov = 0;

  for (let move of movements){
    if (move === '<') movI++;
    else if (move === '>') movD++;
    else mov++;
  }

  return movD >= movI ? (movD -movI + mov) : (movI - movD + mov);
}



// const movements = '>>*<'
// const result = maxDistance(movements)
//  console.log(result) // -> 2

// const movements2 = '<<<>'
// const result2 = maxDistance(movements2)
// console.log(result2) // -> 2

// const movements3 = '>***>'
// const result3 = maxDistance(movements3)
// console.log(result3) // -> 5
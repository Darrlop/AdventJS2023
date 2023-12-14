function decode(message) {
  let result = message;

  const reverseText = () => {
    const pattern = result.match(/\([a-z\s]*\)/g);
    console.log(pattern)
    pattern?.forEach((str) => {
      result = result.replace(
        str,
        str.split("").slice(1, -1).reverse().join("")
      );
    });
  };

  reverseText();
  reverseText();

  return result;
}


const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

//const b = decode('(olleh) (dlrow)!')
//console.log(b) // hello world!

//const a = decode('hola (odnum)')
//console.log(a) // hola mundo

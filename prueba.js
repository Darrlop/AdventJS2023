function drawGift(size, symbol) {
  let cube = [];

  let space = " ";
  let borderSymbol = "#";
  let bgSymbol = symbol.toString();
  let width = size - 2;
  let i = 1;

  while (i <= size) {
    let newline = "";
    newline += space.repeat(size - i);

    if (i === 1) {
      newline += borderSymbol.repeat(size);
    } else if (i === size) {
      newline +=
        borderSymbol.repeat(size) + bgSymbol.repeat(width) + borderSymbol;
    } else {
      newline +=
        borderSymbol +
        bgSymbol.repeat(width) +
        borderSymbol +
        bgSymbol.repeat(i - 2) +
        borderSymbol;
    }

    newline += "\n";
    cube.push(newline);
    i++;
  }

  let j = width;
  while (j >= 0) {
    let newline = cube[j].trim() + "\n";
    cube.push(newline);
    j--;
  }
  const stringCube = cube.join("");
  return stringCube;
}

console.log(drawGift(2, "+"))




/*4
0123456
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

/*5
012345678
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

/*1
#
*/


// numF n*2-2  (es -1, pero si haces -2 es de 0 a lo que sea)
// j -> n*2-2
// middle (n*2-2)/2

// caraL = 0
// f0 (n*2-2)/2  -> i
//     n*#  +  (* x caraL)
// f1 i-1 -> #  /  *** hasta (n*2-2) -> caraS / # / * x caraL  /  #

// caraL++ <-1

// f2 i-1 -> #  /  * x caraS / * x caraL / #
// f3 i-1 #  /  * x caraS  /  * x caraL


// O ...Usar #****# como un todo (cara) a partir de f1
//   caraS + caraL 
//       CaraL _ > (0*, *, ** etc )+ #

// para la mitad inferior:
//     -O bien guardar la superior (arrays) e imprimirla
//     -O resescribir jugando con los ind -->  i a cer   /  luego de j a i


/*6
     i    j       
01234567890
     ######
    #****##
   #****#*#
  #****#**#
 #****#***#
######****#
#****#***#
#****#**#
#****#*#
#****##
######
*/
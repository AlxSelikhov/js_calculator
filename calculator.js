
function calculator (a,b,c){
    array = [a,c]

    if (b == '+') {
        const sumWithInitial = array.reduce(
            (a, c) => a + c
          );
        return result = sumWithInitial
    }
    else if (b == '-') {
        const minusWithInitial = array.reduce(
            (a, c) => a - c
          );
        return result = minusWithInitial
    }
    else if (b == '*') {
      const multiplyWithInitial = array.reduce(
          (a, c) => a * c
        );
      return result = multiplyWithInitial
  }
  else if (b == '/') {
    const shareWithInitial = array.reduce(
        (a, c) => a / c
      );
    return result = shareWithInitial
}

    
};

console.log(calculator(4, '/', 5))

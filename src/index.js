module.exports = function solveEquation(equation) {
  let coeffs =  equation.replace(/\s/g, '')
                              .split(/\*x\^2|\*x/)
                              .map(item => parseInt(item));
  let a = coeffs[0];
  let b = coeffs[1];
  let c = coeffs[2];
  let D = b**2 - 4*a*c;
  let x1 = (-1)*(b + Math.sqrt(D))/(2*a);
  let x2 = (-1)*(b - Math.sqrt(D))/(2*a);
  let roots = [x1, x2].map(root => Math.round(root))
                                  .sort(comparator);
  return roots;
  
  function comparator(a, b) {
    return (a !== b) ? ((a < b) ? -1 : 1) : 0;
  }
}

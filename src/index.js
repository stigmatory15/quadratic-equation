module.exports = function solveEquation(equation) {
    let a1 = equation.replace("^2", "");
    let a2 = a1.replace(/x/g, "");
    let a3 = a2.replace(/ /g, '');
    let b = a3.split('*');
    let d = b[1] * b[1] - 4 * b[0] * b[2];
    let x1 = (-(b[1]) - Math.sqrt(d)) / (2 * b[0]);
    let x2 = (-(b[1]) + Math.sqrt(d)) / (2 * b[0]);
    let answer = [Math.round(x1), Math.round(x2)];
    answer.sort( function(a, b) {return a - b} );
    return answer;
}

const suma = (num, num2) => {
    return num + num2;
}

function rest(num1, num2) {
    return num1 - num2;
}

function mult(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}

const calc = (num, num2, callback) => {/* callback se puede llamar de cualquier forma */
    return callback(num, num2);
}

console.log(calc(10, 15, suma));
console.log(calc(10, 15, rest));
console.log(calc(10, 15, mult));
console.log(calc(10, 15, div));

//setTimeout es 
setTimeout(function () {
    console.log('Hola Javascript');
}, 1000);

const gretting = (name) => {
    console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000, 'Andres');
console.log(setTimeout(gretting, 1000, 'Felipe'));
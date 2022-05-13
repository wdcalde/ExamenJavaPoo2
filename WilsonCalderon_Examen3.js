let matriz1 = [3, 2, 1, 1, 2, 3, 2, 3, 1];
let matriz2 = [1, 1, 2, 2, 1, 1, 1, 2, 1];

console.log('Arreglo : [');
console.log(matriz1[0] + ', ' + matriz1[1] + ', ' + matriz1[2] + ', ' + matriz1[3] + ', ' + matriz1[4] + ', ' + matriz1[5] + ', ');
console.log(matriz1[6] + ', ' + matriz1[7] + ', ' + matriz1[8]);
console.log(']');

console.log('------------------------------------------');

console.log('Arreglo 2: [');
console.log(matriz2[0] + ', ' + matriz2[1] + ', ' + matriz2[2] + ', ' + matriz2[3] + ', ' + matriz2[4] + ', ' + matriz2[5] + ', ');
console.log(matriz2[6] + ', ' + matriz2[7] + ', ' + matriz2[8]);
console.log(']');

console.log('------------------------------------------');

for (let i = 0; i < matriz1.length; i++) {
    console.log(matriz1[i] + ' + ' + matriz2[i] + ' = ' + (matriz1[i] + matriz2[i]));
    console.log(matriz1[i] + ' * ' + matriz2[i] + ' = ' + (matriz1[i] * matriz2[i]));
    console.log('------------------------------------------');
}
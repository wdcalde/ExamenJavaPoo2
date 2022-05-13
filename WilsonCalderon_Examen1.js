
const NORMAL = 265;
const EXTRA = 350;
const ORDINARIAS = 40;

let horas = 53;
let extras = (horas - ORDINARIAS);

let salario = { normal: (NORMAL * ORDINARIAS), 
                extra: (EXTRA * extras) }

console.log('El total a pagar por horas laborales normal (40hrs) es de : ' + salario.normal);
    
console.log('El total a pagar por horas Extra ' + extras + ' horas es de : ' + salario.extra);

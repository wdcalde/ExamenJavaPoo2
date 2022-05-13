class Persona {

    nombre;
    apellido;
    edad;

    getDetalles() {
        console.log(this.nombre + ' ' + this.apellido + ' de ' + this.edad + ' años');
    }

    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

class Empleado extends Persona {

    tipo;

    getDetalles() {
        console.log(super.getDetalles() + ' - ' + this.tipo + ' pertenece a ' + this.descripcionTipo());
    }

    descripcionTipo() {
        switch (this.tipo) {
            case 'C':
                return 'empleado de confianza';
                
                break;

            case 'S':
                return 'sindicato';

                break;

            default:
                break;
        }
    }

    constructor(nombre, apellido, tipo) {
        super(nombre, apellido);
        this.tipo = tipo;
    }
}

class Nomina {

    empleados;
    dias;

    calculaPago(tipo) {

        switch (tipo) {
            case 'C':
                return this.dias * 350 * 0.87;
                break;
            
            case 'S':
                return this.dias * 500 * 0.9;
                break;

            default:
                return 0;
                break;
        }

    }

    calcularNomina() {
        for (let index = 0; index < this.empleados.length; index++) {
            this.dias = Math.random() * (15 - 5) + 5;
            console.log(this.empleados[index].getDetalles() + ' con un sueldo de ' + this.calculaPago(this.empleados[index].tipo) + ' por ' + this.dias + ' trabajados');
        }

    }

    constructor(empleados) {
        this.empleados = empleados;
    }
}

let empleados = new Array();
let empleado1 = new Empleado('Maria', 'Carvajal', 'C');
let empleado2 = new Empleado('Juan', 'Almeira', 'C');
let empleado3 = new Empleado('Dulce', 'Salguero', 'S');

empleado1.edad = 33;
empleado2.edad = 23;
empleado3.edad = 42;

empleados[0] = empleado1;
empleados[1] = empleado2;
empleados[2] = empleado3;

let quincena = new Nomina(empleados);

quincena.calcularNomina();
function sum(a:number, b:number) {
    return a + b; //retorna suma con valor number
    //return (a + b).toString(); --> para convertir resultado de la suma a string
}

//transformar función de arriba en una función de flecha
const sumarFlecha = (a:number, b:number):number =>  a + b; //():number para espefificar que la salida tiene que ser tipo number


//multiplicar cuando hay valores opcionales
function multiply(num: number, otherNum?: number, base: number = 2):number { //primero hay que poner los valores obligatorios, después opcionales y al final argumentos con valor por defecto.
    //si queremos modificar la base tenemos que mandar siempre el argumento opcional
    return num * base;
}

const result = multiply (10, 20, 10);

console.log(result);

interface CharacterSIM {
    name: string;
    pv:number;
}

function heal(character: CharacterSIM, healX):void {

    character.pv +=healX;
    console.log(character)
}

const newCharacter: CharacterSIM = {
    name: 'Lisa',
    pv: 50
}

heal(newCharacter, 20);

//buenas prácticas es poner a nuestros valores y resultados los tipos de valores que esperar
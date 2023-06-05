//regresame un valor si tiene 
//si existen los hijos dime cuantos hay, sino:undefined

interface Passenger {
    name:string;
    children?: string[]
}

const passenger1: Passenger = {
    name: 'Noa'
}

const passenger2: Passenger = {
    name: 'Lola',
    children: ['Diana', 'Minerva']
}

function printChildren( passenger: Passenger): void {
    const howManyChildren = passenger.children?.length;

    console.log( howManyChildren )
}

printChildren( passenger2 );
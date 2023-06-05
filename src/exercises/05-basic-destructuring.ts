interface Album {
    volume: number;
    seconds: number;
    song: string;
    details: Details;
}

interface Details {
    singer: string;
    year: number;
}

const album: Album = {
    volume: 90,
    seconds: 36,
    song: 'Jaded',
    details: {
        singer: 'Miley Cyrus',
        year: 2023
    }
}

//para desesctructurar los objetos tenemos que encapsular las propiedades de nuestra constante entre nuevos corchetes para poder llamarlos de manera más limpia en nuestro console.log()
const { volume, seconds, song, details } = album;
const { singer, year } = details;

console.log('The current volume is: ', volume);
console.log('The current second is: ', seconds);
console.log('The current song is: ', song);
console.log('And it is from: ', details);

//en la desestructuración de objetos nos fijamos en los nombres y podemos alterar siempre su orden porque los llamamos por nombre
//sin embargo, en la desestructuración de arrays los llamamos de acuerdo a su posición y es muy importante que si queremos imprimir sólo un valor escribamos los huecos anteriores con comas como en el ejemplo de la línea 36

const bbt: string[] = ['Penny', 'Leonard', 'Sheldon'];
const [, , position3] = bbt;

console.log('Character 1: ', );
console.log('Character 2: ', );
console.log('Character 3: ', position3);

class regularPerson {
    
    constructor (
        public name: string,
        public address: string
    ){}
}

 //extender una clase con o añadiendo metodos de otras clases

class Hero extends regularPerson {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string
    ){
        super( realName, 'Bristol, United Kingdom'); //llamar al constructor de la clase que extiende
    }
}


const blackPanther = new Hero('Black Panther', 35, 'Miles');

console.log(blackPanther);
//diferencias entre clase y interface

//1.las clases pueden tener instancias
//2. la interface se pueden definir los tipos pero no implementarlos, sí en la clase 
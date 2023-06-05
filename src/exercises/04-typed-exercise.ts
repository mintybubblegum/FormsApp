interface SuperHero {
    name: string;
    age: number;
    address: Address;
    showAddress: () => string;
}

//para añadir objetos anidados en nuestra interfaz, lo mejor es que creemos una interfaz exclusiva y después la añadamos adjunta a la anterior
interface Address {
    street:string;
    city: string;
    country: string;
}

const superHero: SuperHero = {
    name: 'Wonderwoman',
    age: 31,
    address: {
        street: 'Main st',
        city: 'Malaga',
        country: 'Spain'
    },
    showAddress(){
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}

const fullAddress = superHero.showAddress();
console.log(fullAddress);
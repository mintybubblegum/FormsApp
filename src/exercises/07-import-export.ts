import { Product, calculaImpuestoSobreVenta } from './06-destructuring-assesments';

const shoppingCart: Product[] = [
    {
        description: 'Telephone 1',
        price: 100
    },
    {
        description: 'Telephone 2',
        price: 320
    }
];


const [total, isv] = calculaImpuestoSobreVenta( shoppingCart);
console.log('Total', total);
console.log('ISV', isv);
export interface Product {
    description: string;
    price: number;
}

const telephone: Product = {
    description: 'OnePlus 5T',
    price: 200
}

const tablet: Product = {
    description: 'iPad Air',
    price: 500
}

export function calculaImpuestoSobreVenta( products: Product[]):[number, number] {
    let total = 0;

    products.forEach((product) => {
        total += product.price;
    })

    return [total, total * 0.15];
}

const items = [ telephone, tablet ];

const [ total, isv] = calculaImpuestoSobreVenta(items);

console.log('ISV:', isv)
console.log('Total:', total)
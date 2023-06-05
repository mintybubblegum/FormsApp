"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _06_destructuring_assesments_1 = require("./src/exercises/06-destructuring-assesments");
var shoppingCart = [
    {
        description: 'Telephone 1',
        price: 100
    },
    {
        description: 'Telephone 2',
        price: 320
    }
];
var _a = (0, _06_destructuring_assesments_1.calculaImpuestoSobreVenta)(shoppingCart), total = _a[0], isv = _a[1];
console.log('Total', total);
console.log('ISV', isv);

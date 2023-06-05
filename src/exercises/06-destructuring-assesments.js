"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculaImpuestoSobreVenta = void 0;
var telephone = {
    description: 'OnePlus 5T',
    price: 200
};
var tablet = {
    description: 'iPad Air',
    price: 500
};
function calculaImpuestoSobreVenta(products) {
    var total = 0;
    products.forEach(function (product) {
        total += product.price;
    });
    return [total, total * 0.15];
}
exports.calculaImpuestoSobreVenta = calculaImpuestoSobreVenta;
var items = [telephone, tablet];
var _a = calculaImpuestoSobreVenta(items), total = _a[0], isv = _a[1];
console.log('ISV:', isv);
console.log('Total:', total);

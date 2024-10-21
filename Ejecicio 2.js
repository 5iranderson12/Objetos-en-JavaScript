// Requerir la librería prompt-sync
const prompt = require('prompt-sync')();

// Definir el objeto con las propiedades precio y descuento, y el método neto
let producto = {
    precio: 0,
    descuento: 0,
    // Método que calcula el precio neto aplicando el descuento
    neto: function() {
        return this.precio - (this.precio * (this.descuento / 100));
    }
};

// Solicitar los valores de precio y descuento al usuario
producto.precio = parseFloat(prompt("Ingrese el precio del producto: "));
producto.descuento = parseFloat(prompt("Ingrese el porcentaje de descuento: "));

// Calcular el precio neto y mostrar el resultado
let precioNeto = producto.neto();
console.log(`El precio neto con el descuento aplicado es: ${precioNeto.toFixed(2)}`);

function Producto(nombre, precio, cantidad, categoria, id) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    this.categoria = categoria;
    this.id = id;
}
  
let productos = [];
  
productos.push(new Producto("Anillo", 20000, 12, "Joyeria", 1));
productos.push(new Producto("Pulcera", 12000, 10, "Joyeria", 2));
productos.push(new Producto("Aros", 15400, 20, "Joyeria", 3));
productos.push(new Producto("Reloj", 30700, 18, "Accesorios", 4));
productos.push(new Producto("Alianzas", 85000, 7, "Joyeria", 5));
  
productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
  
let productoDeseado = prompt("¿Qué producto desea comprar?");
  
productoDeseado = productoDeseado.toLowerCase();

let productoEncontrado = productos.find(producto => producto.nombre.toLowerCase() === productoDeseado);


if (productoEncontrado) {
    alert(`¡El producto "${productoEncontrado.nombre}" está listo para ser enviado a su domicilio! Precio: $${productoEncontrado.precio}`);
} else {
    alert("El producto no fue encontrado en nuestro catálogo.");
}


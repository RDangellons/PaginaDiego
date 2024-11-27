document.addEventListener("DOMContentLoaded", () => {
    const carrito = [];
    const ticket = document.getElementById("ticket");
    const totalPagar = document.getElementById("total-pagar");

    // Agregar producto al carrito
    document.querySelectorAll(".agregar-btn").forEach(button => {
        button.addEventListener("click", () => {
            const nombre = button.getAttribute("data-nombre");
            const precio = parseFloat(button.getAttribute("data-precio"));

            // Verifica si ya existe en el carrito
            const producto = carrito.find(p => p.nombre === nombre);
            if (producto) {
                producto.cantidad++;
            } else {
                carrito.push({ nombre, precio, cantidad: 1 });
            }

            actualizarTicket();
        });
    });

    // Actualizar el ticket
    const actualizarTicket = () => {
        ticket.innerHTML = ""; // Limpia el ticket actual
        let total = 0;

        carrito.forEach(producto => {
            const item = document.createElement("div");
            item.innerHTML = `
                <p><strong>Producto:</strong> ${producto.nombre}</p>
                <p><strong>Cantidad:</strong> ${producto.cantidad}</p>
                <p><strong>Precio Unitario:</strong> $${producto.precio.toFixed(2)}</p>
                <p><strong>Total:</strong> $${(producto.cantidad * producto.precio).toFixed(2)}</p>
                <hr>
            `;
            ticket.appendChild(item);
            total += producto.cantidad * producto.precio;
        });

        totalPagar.innerHTML = `<strong>Total a Pagar:</strong> $${total.toFixed(2)}`;
    };
});

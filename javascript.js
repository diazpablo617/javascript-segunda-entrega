
document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); 

   
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;

    // objeto
    const usuario = { 
        nombre: nombre,
        email: email
    };

    localStorage.setItem('usuario', JSON.stringify(usuario));

    // Muestra los datos 
    document.getElementById('resultado').innerText = `Nombre: ${nombre}, Email: ${email}`;
});

// Recuperar y mostrar datos guardados al cargar la página
window.addEventListener('load', function() {
    const usuarioGuardado = localStorage.getItem('usuario');

    if (usuarioGuardado) {
        const usuario = JSON.parse(usuarioGuardado); 
        document.getElementById('resultado').innerText = `Nombre: ${usuario.nombre}, Email: ${usuario.email}`;
    }
});


let totalGastos = 0; // Variable para almacenar el total de gastos
let resumenCompras = []; // Array para almacenar el resumen de las compras


const actualizarTotal = () => {
    const totalDisplay = document.getElementById("totalDisplay");

    
    const resumen = resumenCompras.join('\n'); 

    totalDisplay.textContent = `Resumen de Compras:\n${resumen}`;
};


const actualizarTotal2 = () => {
    const totalDisplay2 = document.getElementById("totalDisplay2");

    
    const resumen = resumenCompras.join('\n');

    totalDisplay2.textContent = `Usted ha comprado bebidas por un total de $${totalGastos}---------->>>>>>GRACIAS POR SU COMPRA`;
};


btncomprar.addEventListener("click", (event) => {
    event.preventDefault();
    agregarCompras();
});

const agregarCompras = () => {
    const cantidadInput = document.getElementById("cantidad");
    const cantidad = parseFloat(cantidadInput.value);
    comprasList.innerHTML = ""

    if (comprasList.children.length === 0) {
        if (cantidad) {
            const gasto = cantidad * 500;
            const compraDescripcion = `Cocacola1L: ${cantidad} x $500 = $${gasto}`;
            const nuevaCompra = document.createElement("li");
            nuevaCompra.textContent = compraDescripcion;
            comprasList.appendChild(nuevaCompra);
            totalGastos += gasto; // Sumar al total de gastos
            resumenCompras.push(compraDescripcion); // Agregar al resumen de compras
            actualizarTotal(); 
            actualizarTotal2();
        } 
    }
}

btncomprar2.addEventListener("click", (event) => {
    event.preventDefault();
    agregarCompras2();
});

const agregarCompras2 = () => {
    const cantidadInput2 = document.getElementById("cantidad2");
    const cantidad2 = parseFloat(cantidadInput2.value);
    comprasList2.innerHTML = ""

    if (cantidad2) {
        const gasto2 = cantidad2 * 1000;
        const compraDescripcion2 = `Cocacola2L: ${cantidad2} x $1000 = $${gasto2}`;
        const nuevaCompra2 = document.createElement("li");
        nuevaCompra2.textContent = compraDescripcion2;
        comprasList2.appendChild(nuevaCompra2);
        totalGastos += gasto2; // Sumar al total de gastos
        resumenCompras.push(compraDescripcion2); // Agregar al resumen de compras
        actualizarTotal(); 
        actualizarTotal2();
    } 
}

btncomprar3.addEventListener("click", (event) => {
    event.preventDefault();
    agregarCompras3();
});

const agregarCompras3 = () => {
    const cantidadInput3 = document.getElementById("cantidad3");
    const cantidad3 = parseFloat(cantidadInput3.value);
    comprasList3.innerHTML = ""

    if (cantidad3) {
        const gasto3 = cantidad3 * 1500;
        const compraDescripcion3 = `Cocacola3L: ${cantidad3} x $1500 = $${gasto3}`;
        const nuevaCompra3 = document.createElement("li");
        nuevaCompra3.textContent = compraDescripcion3;
        comprasList3.appendChild(nuevaCompra3);
        totalGastos += gasto3 ; // Sumar al total de gastos
        resumenCompras.push(compraDescripcion3); // Agregar al resumen de compras
        actualizarTotal(); 
        actualizarTotal2(); 
    } 
}


import './style.css'
import { productos } from './datos.js'

// Elemento donde se dibujan las tarjetas (lo creas en el Ejercicio 1)
const catalogo = document.getElementById('catalogo')

// ------------------------------------------------------------
// EJERCICIO 2 — mostrarProductos(lista)
// Convierte una lista de productos en tarjetas HTML y las pone en la página.
// Forma general:
//   catalogo.innerHTML = lista.map(p => `
//     <article class="...las mismas clases de tu Ejercicio 1...">
//       <h3>${p.nombre}</h3>
//       ...
//       <button data-id="${p.id}">Agregar</button>
//     </article>
//   `).join('')
import { productos } from "./datos.js";

function mostrarProductos(lista) {
  const catalogo = document.getElementById("catalogo");
  catalogo.innerHTML = lista.map(p => `
    <div class="bg-white rounded-lg shadow p-4 text-center">
      <h2 class="text-xl font-semibold">${p.nombre}</h2>
      <p>$${p.precio}</p>
      <button data-id="${p.id}" class="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
        Agregar
      </button>
    </div>
  `).join('');
}

mostrarProductos(productos);

// ------------------------------------------------------------
function mostrarProductos(lista) {
  // Escribe aquí tu código
}

mostrarProductos(productos)

// ------------------------------------------------------------
// EJERCICIO 3 — Armar el pedido
// El pedido es un arreglo con los productos que la persona va agregando.
// Pasos (detalle en el README):
//   1. Escucha el clic en el contenedor #catalogo (delegación de eventos).
//   2. Busca el producto por id con .find() y agrégalo con .push().
//   3. Dibuja el pedido con mostrarPedido() y calcula el total con .reduce().
//   4. Botón "Vaciar pedido".
// ------------------------------------------------------------
const pedido = []

// Escribe aquí tu código del Ejercicio 3

// ------------------------------------------------------------
// EJERCICIO 4 — Filtrar por categoría
// Botones de categoría que llamen a mostrarProductos() con
// productos.filter(...). El botón "Todos" muestra la lista completa.
// ------------------------------------------------------------

// Escribe aquí tu código del Ejercicio 4

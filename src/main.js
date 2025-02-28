// Archivo: main.js

import {
  agregarTarea, tareaRealizada, tareaEliminada, cargarLista,
} from './js/modules/script.js';

// utlizar las funciones creadas

agregarTarea('Hacer la compra', 0, false, false);

const elementoRealizado = document.querySelector('[data="realizado"]');
if (elementoRealizado) {
  tareaRealizada(elementoRealizado); // Marcar como realizada
}

const elementoEliminado = document.querySelector('[data="eliminado"]');
if (elementoEliminado) {
  tareaEliminada(elementoEliminado); // Eliminar la tarea
}

const datosEjemplo = [
  {
    nombre: 'Tarea 1', id: 0, realizado: false, eliminado: false,
  },
  {
    nombre: 'Tarea 2', id: 1, realizado: true, eliminado: false,
  },
];

cargarLista(datosEjemplo);

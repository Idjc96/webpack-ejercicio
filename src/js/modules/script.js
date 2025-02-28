// Archivo: modules/tareas.js

// Variables globales
const fecha = document.querySelector('#fecha');
const lista = document.querySelector('#lista');
const input = document.querySelector('#input');
const botonEnter = document.querySelector('#enter');
const check = 'fa-check-circle';
const uncheck = 'fa-circle';
const lineThrough = 'line-through';
let id;
let LIST;

// Función para traer la fecha
const FECHA = new Date();
fecha.innerHTML = FECHA.toLocaleDateString('es-CO', { weekday: 'long', month: 'short', day: 'numeric' });

// Función agregar tarea
export function agregarTarea(tarea, id, realizado, eliminado) {
  if (eliminado) { return; }

  const REALIZADO = realizado ? check : uncheck;
  const LINE = realizado ? lineThrough : '';

  const elemento = `
        <li id="elemento">
            <i class="far ${REALIZADO}" data="realizado" id="${id}"></i>
            <p class="text ${LINE}">${tarea}</p>
            <i class="fas fa-trash de" data="eliminado" id="${id}"></i>
        </li>
    `;
  lista.insertAdjacentHTML('beforeend', elemento);
}

// Función de tarea realizada
export function tareaRealizada(element) {
  element.classList.toggle(check);
  element.classList.toggle(uncheck);
  element.parentNode.querySelector('.text').classList.toggle(lineThrough);
  LIST[element.id].realizado = !LIST[element.id].realizado;
}

// Función de tarea eliminada
export function tareaEliminada(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);
  LIST[element.id].eliminado = true;
}

// Función para cargar la lista desde localStorage
export function cargarLista(DATA) {
  DATA.forEach((i) => {
    agregarTarea(i.nombre, i.id, i.realizado, i.eliminado);
  });
}

// Event listeners y lógica principal
botonEnter.addEventListener('click', () => {
  const tarea = input.value;
  if (tarea) {
    agregarTarea(tarea, id, false, false);
    LIST.push({
      nombre: tarea,
      id,
      realizado: false,
      eliminado: false,
    });
    localStorage.setItem('TODO', JSON.stringify(LIST));
    input.value = '';
    id += 1;
  }
});

document.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    const tarea = input.value;
    if (tarea) {
      agregarTarea(tarea, id, false, false);
      LIST.push({
        nombre: tarea,
        id,
        realizado: false,
        eliminado: false,
      });
      localStorage.setItem('TODO', JSON.stringify(LIST));
      input.value = '';
      id += 1;
    }
  }
});

lista.addEventListener('click', (event) => {
  const element = event.target;
  const elementData = element.attributes.data.value;

  if (elementData === 'realizado') {
    tareaRealizada(element);
  } else if (elementData === 'eliminado') {
    tareaEliminada(element);
  }
  localStorage.setItem('TODO', JSON.stringify(LIST));
});

// Cargar datos desde localStorage
const data = localStorage.getItem('TODO');
if (data) {
  LIST = JSON.parse(data);
  id = LIST.length;
  cargarLista(LIST);
} else {
  LIST = [];
  id = 0;
}

"use strict";
(self["webpackChunkformulario"] = self["webpackChunkformulario"] || []).push([["index"],{

/***/ "./src/js/modules/script.js":
/*!**********************************!*\
  !*** ./src/js/modules/script.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   agregarTarea: () => (/* binding */ agregarTarea),
/* harmony export */   cargarLista: () => (/* binding */ cargarLista),
/* harmony export */   tareaEliminada: () => (/* binding */ tareaEliminada),
/* harmony export */   tareaRealizada: () => (/* binding */ tareaRealizada)
/* harmony export */ });
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
function agregarTarea(tarea, id, realizado, eliminado) {
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
    lista.insertAdjacentHTML("beforeend", elemento);
}

// Función de tarea realizada
function tareaRealizada(element) {
    element.classList.toggle(check);
    element.classList.toggle(uncheck);
    element.parentNode.querySelector('.text').classList.toggle(lineThrough);
    LIST[element.id].realizado = LIST[element.id].realizado ? false : true;
}

// Función de tarea eliminada
function tareaEliminada(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].eliminado = true;
}

// Función para cargar la lista desde localStorage
function cargarLista(DATA) {
    DATA.forEach(function (i) {
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
            id: id,
            realizado: false,
            eliminado: false
        });
        localStorage.setItem('TODO', JSON.stringify(LIST));
        input.value = '';
        id++;
    }
});

document.addEventListener('keyup', function (event) {
    if (event.key == 'Enter') {
        const tarea = input.value;
        if (tarea) {
            agregarTarea(tarea, id, false, false);
            LIST.push({
                nombre: tarea,
                id: id,
                realizado: false,
                eliminado: false
            });
            localStorage.setItem('TODO', JSON.stringify(LIST));
            input.value = '';
            id++;
        }
    }
});

lista.addEventListener('click', function (event) {
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
let data = localStorage.getItem('TODO');
if (data) {
    LIST = JSON.parse(data);
    id = LIST.length;
    cargarLista(LIST);
} else {
    LIST = [];
    id = 0;
}


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_modules_script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/modules/script.js */ "./src/js/modules/script.js");
// Archivo: main.js



// utlizar las funciones creadas

(0,_js_modules_script_js__WEBPACK_IMPORTED_MODULE_0__.agregarTarea)('Hacer la compra', 0, false, false);

const elementoRealizado = document.querySelector('[data="realizado"]');
if (elementoRealizado) {
    (0,_js_modules_script_js__WEBPACK_IMPORTED_MODULE_0__.tareaRealizada)(elementoRealizado); // Marcar como realizada
}

const elementoEliminado = document.querySelector('[data="eliminado"]');
if (elementoEliminado) {
    (0,_js_modules_script_js__WEBPACK_IMPORTED_MODULE_0__.tareaEliminada)(elementoEliminado); // Eliminar la tarea
}

const datosEjemplo = [
    { nombre: 'Tarea 1', id: 0, realizado: false, eliminado: false },
    { nombre: 'Tarea 2', id: 1, realizado: true, eliminado: false },
];

(0,_js_modules_script_js__WEBPACK_IMPORTED_MODULE_0__.cargarLista)(datosEjemplo);




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/main.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNELGlEQUFpRDs7QUFFdkc7QUFDTztBQUNQLHFCQUFxQjs7QUFFckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVUseUJBQXlCLEdBQUc7QUFDbEUsNkJBQTZCLEtBQUssSUFBSSxNQUFNO0FBQzVDLDhEQUE4RCxHQUFHO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQy9HQTtBQUNBO0FBQ21HO0FBQ25HO0FBQ0E7QUFDQTtBQUNBLG1FQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxRUFBYyxxQkFBcUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFFQUFjLHFCQUFxQjtBQUN2QztBQUNBO0FBQ0E7QUFDQSxNQUFNLDhEQUE4RDtBQUNwRSxNQUFNLDZEQUE2RDtBQUNuRTtBQUNBO0FBQ0Esa0VBQVc7QUFDWDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9ybXVsYXJpby8uL3NyYy9qcy9tb2R1bGVzL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9mb3JtdWxhcmlvLy4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQXJjaGl2bzogbW9kdWxlcy90YXJlYXMuanNcblxuLy8gVmFyaWFibGVzIGdsb2JhbGVzXG5jb25zdCBmZWNoYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWNoYScpO1xuY29uc3QgbGlzdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdGEnKTtcbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0Jyk7XG5jb25zdCBib3RvbkVudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VudGVyJyk7XG5jb25zdCBjaGVjayA9ICdmYS1jaGVjay1jaXJjbGUnO1xuY29uc3QgdW5jaGVjayA9ICdmYS1jaXJjbGUnO1xuY29uc3QgbGluZVRocm91Z2ggPSAnbGluZS10aHJvdWdoJztcbmxldCBpZDtcbmxldCBMSVNUO1xuXG4vLyBGdW5jacOzbiBwYXJhIHRyYWVyIGxhIGZlY2hhXG5jb25zdCBGRUNIQSA9IG5ldyBEYXRlKCk7XG5mZWNoYS5pbm5lckhUTUwgPSBGRUNIQS50b0xvY2FsZURhdGVTdHJpbmcoJ2VzLUNPJywgeyB3ZWVrZGF5OiAnbG9uZycsIG1vbnRoOiAnc2hvcnQnLCBkYXk6ICdudW1lcmljJyB9KTtcblxuLy8gRnVuY2nDs24gYWdyZWdhciB0YXJlYVxuZXhwb3J0IGZ1bmN0aW9uIGFncmVnYXJUYXJlYSh0YXJlYSwgaWQsIHJlYWxpemFkbywgZWxpbWluYWRvKSB7XG4gICAgaWYgKGVsaW1pbmFkbykgeyByZXR1cm47IH1cblxuICAgIGNvbnN0IFJFQUxJWkFETyA9IHJlYWxpemFkbyA/IGNoZWNrIDogdW5jaGVjaztcbiAgICBjb25zdCBMSU5FID0gcmVhbGl6YWRvID8gbGluZVRocm91Z2ggOiAnJztcblxuICAgIGNvbnN0IGVsZW1lbnRvID0gYFxuICAgICAgICA8bGkgaWQ9XCJlbGVtZW50b1wiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXIgJHtSRUFMSVpBRE99XCIgZGF0YT1cInJlYWxpemFkb1wiIGlkPVwiJHtpZH1cIj48L2k+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInRleHQgJHtMSU5FfVwiPiR7dGFyZWF9PC9wPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdHJhc2ggZGVcIiBkYXRhPVwiZWxpbWluYWRvXCIgaWQ9XCIke2lkfVwiPjwvaT5cbiAgICAgICAgPC9saT5cbiAgICBgO1xuICAgIGxpc3RhLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBlbGVtZW50byk7XG59XG5cbi8vIEZ1bmNpw7NuIGRlIHRhcmVhIHJlYWxpemFkYVxuZXhwb3J0IGZ1bmN0aW9uIHRhcmVhUmVhbGl6YWRhKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2hlY2spO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSh1bmNoZWNrKTtcbiAgICBlbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLnRleHQnKS5jbGFzc0xpc3QudG9nZ2xlKGxpbmVUaHJvdWdoKTtcbiAgICBMSVNUW2VsZW1lbnQuaWRdLnJlYWxpemFkbyA9IExJU1RbZWxlbWVudC5pZF0ucmVhbGl6YWRvID8gZmFsc2UgOiB0cnVlO1xufVxuXG4vLyBGdW5jacOzbiBkZSB0YXJlYSBlbGltaW5hZGFcbmV4cG9ydCBmdW5jdGlvbiB0YXJlYUVsaW1pbmFkYShlbGVtZW50KSB7XG4gICAgZWxlbWVudC5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudC5wYXJlbnROb2RlKTtcbiAgICBMSVNUW2VsZW1lbnQuaWRdLmVsaW1pbmFkbyA9IHRydWU7XG59XG5cbi8vIEZ1bmNpw7NuIHBhcmEgY2FyZ2FyIGxhIGxpc3RhIGRlc2RlIGxvY2FsU3RvcmFnZVxuZXhwb3J0IGZ1bmN0aW9uIGNhcmdhckxpc3RhKERBVEEpIHtcbiAgICBEQVRBLmZvckVhY2goZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgYWdyZWdhclRhcmVhKGkubm9tYnJlLCBpLmlkLCBpLnJlYWxpemFkbywgaS5lbGltaW5hZG8pO1xuICAgIH0pO1xufVxuXG4vLyBFdmVudCBsaXN0ZW5lcnMgeSBsw7NnaWNhIHByaW5jaXBhbFxuYm90b25FbnRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCB0YXJlYSA9IGlucHV0LnZhbHVlO1xuICAgIGlmICh0YXJlYSkge1xuICAgICAgICBhZ3JlZ2FyVGFyZWEodGFyZWEsIGlkLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICBMSVNULnB1c2goe1xuICAgICAgICAgICAgbm9tYnJlOiB0YXJlYSxcbiAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgIHJlYWxpemFkbzogZmFsc2UsXG4gICAgICAgICAgICBlbGltaW5hZG86IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVE9ETycsIEpTT04uc3RyaW5naWZ5KExJU1QpKTtcbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgaWQrKztcbiAgICB9XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ID09ICdFbnRlcicpIHtcbiAgICAgICAgY29uc3QgdGFyZWEgPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgaWYgKHRhcmVhKSB7XG4gICAgICAgICAgICBhZ3JlZ2FyVGFyZWEodGFyZWEsIGlkLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgTElTVC5wdXNoKHtcbiAgICAgICAgICAgICAgICBub21icmU6IHRhcmVhLFxuICAgICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgICByZWFsaXphZG86IGZhbHNlLFxuICAgICAgICAgICAgICAgIGVsaW1pbmFkbzogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1RPRE8nLCBKU09OLnN0cmluZ2lmeShMSVNUKSk7XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgaWQrKztcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5saXN0YS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3QgZWxlbWVudERhdGEgPSBlbGVtZW50LmF0dHJpYnV0ZXMuZGF0YS52YWx1ZTtcblxuICAgIGlmIChlbGVtZW50RGF0YSA9PT0gJ3JlYWxpemFkbycpIHtcbiAgICAgICAgdGFyZWFSZWFsaXphZGEoZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmIChlbGVtZW50RGF0YSA9PT0gJ2VsaW1pbmFkbycpIHtcbiAgICAgICAgdGFyZWFFbGltaW5hZGEoZWxlbWVudCk7XG4gICAgfVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdUT0RPJywgSlNPTi5zdHJpbmdpZnkoTElTVCkpO1xufSk7XG5cbi8vIENhcmdhciBkYXRvcyBkZXNkZSBsb2NhbFN0b3JhZ2VcbmxldCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1RPRE8nKTtcbmlmIChkYXRhKSB7XG4gICAgTElTVCA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgaWQgPSBMSVNULmxlbmd0aDtcbiAgICBjYXJnYXJMaXN0YShMSVNUKTtcbn0gZWxzZSB7XG4gICAgTElTVCA9IFtdO1xuICAgIGlkID0gMDtcbn1cbiIsIi8vIEFyY2hpdm86IG1haW4uanNcclxuXHJcbmltcG9ydCB7IGFncmVnYXJUYXJlYSwgdGFyZWFSZWFsaXphZGEsIHRhcmVhRWxpbWluYWRhLCBjYXJnYXJMaXN0YSB9IGZyb20gJy4vanMvbW9kdWxlcy9zY3JpcHQuanMnO1xyXG5cclxuLy8gdXRsaXphciBsYXMgZnVuY2lvbmVzIGNyZWFkYXNcclxuXHJcbmFncmVnYXJUYXJlYSgnSGFjZXIgbGEgY29tcHJhJywgMCwgZmFsc2UsIGZhbHNlKTtcclxuXHJcbmNvbnN0IGVsZW1lbnRvUmVhbGl6YWRvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGE9XCJyZWFsaXphZG9cIl0nKTtcclxuaWYgKGVsZW1lbnRvUmVhbGl6YWRvKSB7XHJcbiAgICB0YXJlYVJlYWxpemFkYShlbGVtZW50b1JlYWxpemFkbyk7IC8vIE1hcmNhciBjb21vIHJlYWxpemFkYVxyXG59XHJcblxyXG5jb25zdCBlbGVtZW50b0VsaW1pbmFkbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhPVwiZWxpbWluYWRvXCJdJyk7XHJcbmlmIChlbGVtZW50b0VsaW1pbmFkbykge1xyXG4gICAgdGFyZWFFbGltaW5hZGEoZWxlbWVudG9FbGltaW5hZG8pOyAvLyBFbGltaW5hciBsYSB0YXJlYVxyXG59XHJcblxyXG5jb25zdCBkYXRvc0VqZW1wbG8gPSBbXHJcbiAgICB7IG5vbWJyZTogJ1RhcmVhIDEnLCBpZDogMCwgcmVhbGl6YWRvOiBmYWxzZSwgZWxpbWluYWRvOiBmYWxzZSB9LFxyXG4gICAgeyBub21icmU6ICdUYXJlYSAyJywgaWQ6IDEsIHJlYWxpemFkbzogdHJ1ZSwgZWxpbWluYWRvOiBmYWxzZSB9LFxyXG5dO1xyXG5cclxuY2FyZ2FyTGlzdGEoZGF0b3NFamVtcGxvKTtcclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
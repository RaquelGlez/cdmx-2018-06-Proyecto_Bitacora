// 1- llamamos al input, al boton y al div que contendra la publicacion
let publicacion = document.getElementById('tarea');
let btnPublicar = document.getElementById('publicar');

// 4- creamos el elemento del DOM donde imprimiremos la publicacion
const createElement = (textInput) => {
  // nuestra publicación del imput es de tipo texto,
  let elemento = document.createElement('p');
  let contenido = document.createTextNode(textInput);
  elemento.appendChild(contenido);
  addPublicationToPag(elemento);
  console.log(elemento);
};

// 5- Agregando la publicación a la pagina web
const addPublicationToPag = (elemento) => {
  let textPublicacion = document.getElementById('publicacion');
  textPublicacion.appendChild(elemento);
  document.getElementById('tarea').value = '';
};


// 3- definimos el eventClick
const eventClick = () => {
  const textInput = publicacion.value;
  console.log(textInput);
  if (textInput === '') {
    alert('Ingresa una actividad');
  } else {
    createElement(textInput);
  }
};


// 2- asignamos el evento al boton al darle click
btnPublicar.addEventListener('click', eventClick);

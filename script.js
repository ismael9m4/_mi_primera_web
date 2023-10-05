//alert("Hola este es mi primer codigo Javascript");
//let nombre1 = 'Valor variable';
//const nombre2 = 'Valor constante';

//console.log(nombre1);
//console.log(nombre2);


const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    parrafo.style.color = "red";
    warnings += `El nombre debe contener más de 4 caracteres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.style.color = "green";
    parrafo.innerHTML = "Enviado";
    event.preventDefault(); // Prevenir la recarga de la página
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});
//------FIN
window.onload = function () {
    let mensaje='Bienvenido a mi página web!!';
//Obtengo mi elemento titulo
let titulo1 = document.querySelector("main .seccion-uno h2");
let titulo2 = document.getElementsByTagName("h2");
let titulo3 = document.getElementById("titulo");
let horaActual = new Date().getHours();
titulo3.innerHTML= mensaje;
//Condicional
if(horaActual < 12){
    titulo3.innerHTML = "Buenas dias";
}else{
    if(horaActual<18){
        titulo3.innerHTML = "Buenas tardes"; 
    }else{
        titulo3.innerHTML = "Buenas noches";
    }
}
console.log(titulo3.textContent);

//Función
let parrafo= document.querySelector(".parrafo");
parrafo.innerText=cambiarParrafo("Ismael","Ing. Informática");


let menu_responsive = document.querySelector(".checkbtn");
      menu_responsive.onclick = function () {
        navBar = document.querySelector(".navbar");
        navBar.classList.toggle("active");
      };


}
function cambiarParrafo(nombre, profesion){
let contenido = `Hola, mi nombre es ${nombre}, me dedico a la informatica, soy ${profesion}`;
return contenido;
}

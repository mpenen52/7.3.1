let inputNombre = document.getElementById("nombre");
let inputApellido = document.getElementById("apellido");
let inputEmail = document.getElementById("email");
let inputContrasenia1 = document.getElementById("password1");
let inputContrasenia2 = document.getElementById("password2");
/* */
let btnRegistro = document.getElementById("btnRegistrarme");
let btnAbrirTerminos = document.getElementById("btnTerminos");
let chkTerminosModal = document.getElementById("terminosModal");

/* 
Ningún campo puede estar vacío
El Email debe tener un formato valido
La contraseña debe tener al menos 6 caracteres
Los datos ingresados en "Contraseña" y "Repetir contraseña" deben ser iguales
Se debe haber marcado el checkbox "Acepto los términos y condiciones del servicio" (en este caso dentro de un modal)
*/

document.addEventListener("DOMContentLoaded", function () {
    btnRegistro.addEventListener("click", function (e) {
        e.preventDefault();

        let valorNombre = inputNombre.value;
        let valorApellido = inputApellido.value;
        let valorContrasenia1 = inputContrasenia1.value;
        let valorContrasenia2 = inputContrasenia2.value;
        let valorEmail = inputEmail.value; 
        let valorCheckbox = chkTerminosModal.value

        if (valorNombre == "") {            
            inputNombre.classList.remove("is-valid");
            inputNombre.classList.add("is-invalid");


        } else {
            inputNombre.classList.remove("is-invalid");
            inputNombre.classList.add("is-valid");
        }

        if (valorApellido == "") {
            inputApellido.classList.add("is-invalid");
            inputApellido.classList.remove("is-valid");

         if (divApellido.children.length > 3) {
                AUXcontenedorApellido.classList.add("d-none");
            }
        } else {
            inputApellido.classList.add("is-valid");
            inputApellido.classList.remove("is-invalid");
        }

        if (valorContrasenia1 == "") {            
            inputContrasenia1.classList.add("is-invalid");
            inputContrasenia1.classList.remove("is-valid");

        } else {
            inputContrasenia1.classList.add("is-valid");
            inputContrasenia1.classList.remove("is-invalid");
        }

        if (valorContrasenia2 == "") {            
            inputContrasenia2.classList.remove("is-valid");
            inputContrasenia2.classList.add("is-invalid");

          
        } else {
            inputContrasenia2.classList.remove("is-invalid");
            inputContrasenia2.classList.add("is-valid");
        }

        if (valorContrasenia1 !== valorContrasenia2) {            
            inputContrasenia1.classList.add("is-invalid");
            inputContrasenia2.classList.add("is-invalid");
        }

        if (valorContrasenia1.length<6){
            inputContrasenia1.classList.add("is-invalid");
            inputContrasenia2.classList.add("is-invalid");
        }


        let emailValido = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        if (valorEmail != "" && emailValido.test(valorEmail)) {
            inputEmail.classList.remove("is-invalid");
            inputEmail.classList.add("is-valid");
        } else {
            inputEmail.classList.remove("is-valid");
            inputEmail.classList.add("is-invalid");
            
        }

          if (valorCheckbox.checked) {
            chkTerminosModal.classList.remove("is-invalid");
            chkTerminosModal.classList.add("is-valid");
            }
          else{
            chkTerminosModal.classList.remove("is-valid");
            chkTerminosModal.classList.add("is-invalid");
            
          }

    });
});

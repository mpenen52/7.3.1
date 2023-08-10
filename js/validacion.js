function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

const form = document.querySelector("form-label");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const button = document.getElementById('regBtn');

const para = document.querySelector("alert-danger");
button.addEventListener("click", (e) => {
  if (nombre.value === "" || apellido.value === "" || email.value === "" || password1.value === "" || password2.value === "" && terminos.value === false) {
    e.preventDefault();
    showAlertError();
  } else {
    showAlertSuccess();
  }
});


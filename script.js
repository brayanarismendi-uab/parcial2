const formulario = document.querySelector("#form-helados");
const aviso = document.querySelector("#aviso-helados");


function validacionForm(event) {

    const nombre = document.querySelector("#nombre").value;
    const correo = document.querySelector("#correo").value;
    const sabores = document.querySelector("#sabores").value;

    if (nombre === "" || correo === "") {
        event.preventDefault();
        aviso.textContent = "falta tu nombre o tu correo ";
        aviso.classList.add("error");
        aviso.classList.remove("exito");


    } 
    else if (!correo.includes("@")) {
        event.preventDefault();
        aviso.textContent = "eso no parece ser un correo";
        aviso.classList.add("error");
        aviso.classList.remove("exito");

    } 
    else {
        aviso.textContent = "Pedido anotado - te atiende Brayan Isai Arismendi Rodriguez";
        aviso.classList.add("exito");
        aviso.classList.remove("error");

    }
}

formulario.addEventListener("submit", validacionForm);


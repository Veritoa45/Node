const formIngreso = document.querySelector(".formularioIngreso");
const formRegistro = document.querySelector(".formularioRegistro");

formIngreso.addEventListener("submit", (event) => {
    const inputText = document.getElementsByClassName("item_formulario_ingreso");

    for (let i = 0; i < inputText.length; i++) {
        
        if (inputText[i].value.trim().length < 3 ) {
            alert(`Debe completar el campo "${inputText[i].getAttribute("id").toUpperCase()}"`);
            event.preventDefault();
            return;
        }        
    }
});

formRegistro.addEventListener("submit", (event) => {
    const inputText = document.getElementsByClassName("datos");

    for (let i = 0; i < inputText.length; i++) {
        
        if (inputText[i].value.trim().length < 3 ) {
            alert(`Debe completar el campo "${inputText[i].getAttribute("id").toUpperCase()}"`);
            event.preventDefault();
            return;
        }        
    }

    const pssw = document.querySelector("#contraseña");
    const psswR = document.querySelector("#contraseñaR");

    if(pssw.value != psswR.value) {
        alert("Las contraseñas no coinciden");
        event.preventDefault();
        return;
    }

    const acepto = document.getElementById("terminos");

    if (!acepto.checked){
        event.preventDefault();
        alert("Debes aceptar los términos y condiciones")
        return;
    }
});
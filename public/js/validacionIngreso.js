const formIngreso = document.querySelector(".formularioIngreso");
const formRegistro = document.querySelector(".formularioRegistro");

formIngreso.addEventListener("submit", async (event) => {
  const inputText = document.getElementsByClassName("item_formulario_ingreso");
  const responseDiv = document.querySelector("#response");

  for (let i = 0; i < inputText.length; i++) {
    if (inputText[i].value.trim().length < 3) {
      responseDiv.innerHTML = `</p>Debe completar el campo "${inputText[i]
        .getAttribute("id")
        .toUpperCase()}"</p>`;
      event.preventDefault();
      return;
    }
  }

  event.preventDefault();

  const data = {
    mail: document.getElementById("mail_l").value,
    pssword: document.getElementById("password_l").value,
  };

  console.log("Datos capturados del formulario:", data);

  try {
    const response = await fetch("../../auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.headers.get("content-type")?.includes("application/json")) {
      const responseData = await response.json();
      if (response.ok) {
        sessionStorage.setItem("isAdmin", responseData.isAdmin);
        if (responseData.isAdmin) {
          window.location.href = "admin.html";
        } else if (responseData.role === "socio") {
          window.location.href = "client.html";
        } else {
          console.log(responseData.error);
          responseDiv.innerHTML = `${responseData.error}`;
          responseDiv.style.display = "block";
        }
      } else {
        if (response.status === 400) {
          responseDiv.innerHTML = `<p>${responseData.message}</p>`;
          responseDiv.style.display = "block";
        }
      }
    } else {
      const errorText = await response.text();
      console.error("Error: ", errorText);
      responseDiv.innerHTML = `<p>Error en la respuesta del servidor</p>`;
      responseDiv.style.display = "block";
    }
  } catch (err) {
    console.error("Error al procesar la solicitud:", err);
    responseDiv.innerHTML = `<p>Error: ${err.message}</p>`;
    responseDiv.style.display = "block";
  }
});

formRegistro.addEventListener("submit", async (event) => {
  const inputText = document.getElementsByClassName("datos");
  const responseDiv = document.querySelector("#response");

  for (let i = 0; i < inputText.length; i++) {
    if (inputText[i].value.trim().length < 3) {
      responseDiv.innerHTML = `Debe completar el campo "${inputText[i]
        .getAttribute("id")
        .toUpperCase()}"`;
      event.preventDefault();
      return;
    }
  }

  const pssw = document.querySelector("#pssword");
  const psswR = document.querySelector("#contraseñaR");

  if (pssw.value != psswR.value) {
    responseDiv.innerHTML = "Las contraseñas no coinciden";
    event.preventDefault();
    return;
  } else if (pssw.value.length < 8) {
    event.preventDefault();
    responseDiv.innerHTML = "La contraseña debe contener minimo 8 caracteres";
    return;
  }

  const acepto = document.getElementById("terminos");

  if (!acepto.checked) {
    event.preventDefault();
    responseDiv.innerHTML = "Debes aceptar los términos y condiciones";
    return;
  }

  event.preventDefault();

  const data = {
    nombre: document.getElementById("nombre").value,
    apellido: document.getElementById("apellido").value,
    mail: document.getElementById("mail").value,
    pssword: document.getElementById("pssword").value,
    tel: document.getElementById("tel").value,
  };
  console.log("Datos capturados del formulario:", data);
  try {
    const response = await fetch("../../auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    if (response.ok) {
      alert("Usuario registrado con éxito");
    } else {
      responseDiv.innerHTML = `<p>${responseData.message}</p>`;
      responseDiv.style.display = "block";
    }
  } catch (err) {
    console.error("Error al procesar la solicitud:", err);
    responseDiv.innerHTML = `<p>Error: ${err.message}</p>`;
    responseDiv.style.display = "block";
  }
});

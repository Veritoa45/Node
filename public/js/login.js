(function () {
  const form = document.querySelector("#login");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
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
      const responseData = await response.json();
      const responseDiv = document.querySelector("#response");
      if (response.ok) {
        if (responseData.isAdmin) {
          // Redirigir al usuario administrador a admin.html
          window.location.href = "admin.html";
        } else if (responseData.role === "socio") {
          // Redirigir al usuario socio a client.html
          window.location.href = "client.html";
        } else {
          // Redirigir a otra vista o mostrar un mensaje de error para otros roles
          console.log(responseData.error);
          responseDiv.innerHTML = `${responseData.error}`;
          responseDiv.style.display = "block";
        }
      } else {
        // Mostrar mensaje de error en caso de credenciales inválidas u otro error
        if (response.status === 400) {
          responseDiv.innerHTML = `<p>${responseData.message}</p>`;
          responseDiv.style.display = "block";
        }
      }
    } catch (err) {
      console.error("Error al procesar la solicitud:", err);
      const responseDiv = document.querySelector("#response");
      responseDiv.innerHTML = `<p>Error: ${err.message}</p>`;
      responseDiv.style.display = "block";
    }
  });
})();

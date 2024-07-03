document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const isAdmin = sessionStorage.getItem("isAdmin");
    if (!isAdmin || isAdmin !== "true") {
      alert("No tienes permisos para realizar esta acción");
      return;
    }

    const data = new FormData(form);

    try {
      const response = await fetch("../libros", {
        method: "POST",
        body: data,
      });

      const responseDiv = document.querySelector("#response");

      if (response.headers.get("content-type")?.includes("application/json")) {
        const responseData = await response.json();
        if (!response.ok) {
          responseDiv.innerHTML = `<p>${
            responseData.error || "Error al crear el libro"
          }</p>`;
        } else {
          responseDiv.innerHTML = "<p>Libro creado con éxito</p>";
          form.reset();
        }
      } else {
        const errorText = await response.text();
        throw new Error("Error en la respuesta del servidor: " + errorText);
      }

      responseDiv.style.display = "block";
    } catch (err) {
      const responseDiv = document.querySelector("#response");
      responseDiv.innerHTML = `<p>${err.message}</p>`;
      responseDiv.style.display = "block";
    }
  });
});

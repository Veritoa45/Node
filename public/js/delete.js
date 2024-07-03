document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#delete");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const isAdmin = sessionStorage.getItem("isAdmin");
    if (!isAdmin || isAdmin !== "true") {
      alert("No tienes permisos para realizar esta acción");
      return;
    }

    const id = sessionStorage.getItem("id");

    try {
      const response = await fetch(`../libros/${encodeURIComponent(id)}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response);

      if (response.headers.get("content-type")?.includes("application/json")) {
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.message || "Error al eliminar el libro");
        } else {
          const responseDiv = document.querySelector("#response");
          responseDiv.innerHTML = "<p>Libro eliminado con éxito</p>";
          responseDiv.style.display = "block";
          document.getElementById("titulo").value = "";
          document.getElementById("searchData").value = "";
        }
      } else {
        const errorText = await response.text();
        throw new Error("Error en la respuesta del servidor: " + errorText);
      }
    } catch (error) {
      console.error(error);
      const responseDiv = document.querySelector("#response");
      responseDiv.innerHTML = `<p>${error.message}</p>`;
      responseDiv.style.display = "block";
    }
  });
});

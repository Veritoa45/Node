const searchButton = document.querySelector('#search');

searchButton.addEventListener("click", async () => {
  const searchData = document.getElementById("searchData").value.trim();

  if (!searchData) {
    alert("Por favor, ingrese el título del libro.");
    return;
  }

  try {
    const response = await fetch(`/libros/${encodeURIComponent(searchData)}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error al buscar el libro");
    }

    const libro = await response.json();

    // Mostrar los datos del libro en el formulario
   
    document.getElementById("titulo").value = libro[0].titulo;
    document.getElementById("resumen").value = libro[0].resumen;
    document.getElementById("genero").value = libro[0].genero;
    document.getElementById("ISBN").value = libro[0].ISBN;
    document.getElementById("id_autor").value = libro[0].id_autor;
  } catch (error) {
    console.error(error);
    const responseDiv = document.getElementById("response");
    responseDiv.innerHTML = `<p>${error.message}</p>`;
    responseDiv.style.display = "block";
  }
});

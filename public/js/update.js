const form = document.querySelector('#update');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const titulo = document.getElementById("titulo").value
  const resumen = document.getElementById("resumen").value
  const genero = document.getElementById("genero").value
  const ISBN = document.getElementById("ISBN").value
  const id_autor = document.getElementById("id_autor").value
  let data = {
    titulo: titulo,
    resumen: resumen,
    genero: genero,
    ISBN: ISBN,
    id_autor: id_autor
  };
  console.log('Updated values:', data);

  try {
    // const queryParams = `titulo=${encodeURIComponent(titulo)}&id_autor=${encodeURIComponent(id_autor)}&genero=${encodeURIComponent(genero)}&resumen=${encodeURIComponent(resumen)}&ISBN=${encodeURIComponent(ISBN)}`;
    const response = await fetch(`../libros/${encodeURIComponent(sessionStorage.getItem('id'))}`, {
      method: 'PUT',
      body: data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error al actualizar el producto');
    } else {
      const responseDiv = document.querySelector('#response');
      responseDiv.innerHTML = '<p>Producto actualizado con éxito</p>';
      responseDiv.style.display = 'block';
      document.getElementById("titulo").value = '';
      document.getElementById("id_autor").value = '';
      document.getElementById("genero").value = '';
      document.getElementById("ISBN").value = '';
      document.getElementById("resumen").value = '';
    }

  } catch (error) {
    console.error(error);
    const responseDiv = document.querySelector('#response');
    responseDiv.innerHTML = `<p>${error.message}</p>`;
    responseDiv.style.display = 'block';
  }
});

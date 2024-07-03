const form = document.querySelector('#delete');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const id = sessionStorage.getItem('id')

  try {
    const response = await fetch(`../libros/${encodeURIComponent(id)}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error al eliminar el producto');
    }

    const responseDiv = document.querySelector('#response');

    responseDiv.innerHTML = '<p>Libro eliminado con éxito</p>';
    responseDiv.style.display = 'block';

    document.getElementById('titulo').value = '';
    document.getElementById('searchData').value = '';

  } catch (error) {
    console.error(error);
    const responseDiv = document.querySelector('#response');
    responseDiv.innerHTML = `<p>${error.message}</p>`;
    responseDiv.style.display = 'block';
  }
});
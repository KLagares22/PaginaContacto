
function validateForm(event) {
  // Obtener los valores de los campos
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  // Comprobar si los campos están vacíos
  if (name === "" || email === "") {
      alert('Por favor, completa todos los campos.');
      event.preventDefault(); // Evita que el formulario se envíe
  } else {
      alert('¡Pronto seras contactado!');
  }
}

document.getElementById('contactForm').addEventListener('submit', validateForm)

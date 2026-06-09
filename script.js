const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const year = document.getElementById('year');
const form = document.getElementById('contactForm');
const whatsappNumber = '13055550123';

year.textContent = new Date().getFullYear();

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('active'));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);
  const nombre = data.get('nombre');
  const telefono = data.get('telefono');
  const servicio = data.get('servicio');
  const mensaje = data.get('mensaje') || 'Sin mensaje adicional';
  const text = `Hola MadameGutti, quiero información para una cita.%0A%0ANombre: ${encodeURIComponent(nombre)}%0ATeléfono: ${encodeURIComponent(telefono)}%0AServicio: ${encodeURIComponent(servicio)}%0AMensaje: ${encodeURIComponent(mensaje)}`;
  window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
});

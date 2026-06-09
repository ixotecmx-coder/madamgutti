const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const year = document.getElementById('year');
const form = document.getElementById('contactForm');
const whatsappNumber = '17868885457';

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


const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxClose = document.querySelector('.lightbox-close');

function openLightbox(item) {
  const image = window.getComputedStyle(item).backgroundImage;
  const imageUrl = image.slice(5, -2);
  lightboxImage.src = imageUrl;
  lightboxTitle.textContent = item.dataset.title || 'Galería MadameGutti';
  lightbox.classList.add('active');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('active');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  lightboxImage.src = '';
}

galleryItems.forEach(item => item.addEventListener('click', () => openLightbox(item)));
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', event => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && lightbox.classList.contains('active')) closeLightbox();
});

// Menú móvil
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }
  
});
const dropdown = document.querySelector('.dropdown');

if (dropdown) {
  dropdown.addEventListener('click', function (e) {
    if (window.innerWidth <= 880) {
      e.preventDefault();
      dropdown.classList.toggle('open');
    }
  });
}

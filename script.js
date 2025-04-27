function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const slides = document.getElementById('slides');
  sidebar.classList.toggle('collapsed');
  if (sidebar.classList.contains('collapsed')) {
    slides.style.marginLeft = '0';
  } else {
    slides.style.marginLeft = window.innerWidth <= 768 ? '0' : '220px';
  }
}
window.addEventListener('scroll', function () {
  const popup = document.getElementById('popup');
  if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 50)) {
    popup.classList.add('show');
  } else {
    popup.classList.remove('show');
  }
});
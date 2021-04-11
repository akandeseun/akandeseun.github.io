
function classToggle() {
  const navs = document.querySelectorAll('ul.nav-links')
  
  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

document.querySelector('i.toggle')
  .addEventListener('click', classToggle);
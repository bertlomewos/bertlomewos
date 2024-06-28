function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const parentContainer = document.querySelector('.text-container');

parentContainer.addEventListener('click', event => {
    const current = event.target;

    const isReadMoreBtn = current.classList.contains('rm-btn');
    if (!isReadMoreBtn) return;

    const currentText = event.target.previousElementSibling.querySelector('.read-more');

    currentText.classList.toggle('read-more--show');

    current.textContent = current.textContent.includes('Read more...') ? 'Read less...' : 'Read more...';

});
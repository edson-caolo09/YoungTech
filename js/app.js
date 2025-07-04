window.addEventListener('scroll', () => {
  const header = document.querySelector('#header');
  header.classList.toggle('scroll', window.scrollY > 0);
});
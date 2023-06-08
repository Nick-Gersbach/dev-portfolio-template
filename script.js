//Mobile Menu Fucntionality
document.querySelector('.menu-btn').addEventListener('click', () => document.querySelector('ul').classList.toggle('show'));


//Back to top functionality
const backToTop = document.querySelector('.back-to-top');

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    backToTop.classList.add("active");
  } else {
    backToTop.classList.remove("active");
  }
})
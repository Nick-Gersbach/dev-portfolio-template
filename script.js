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


//click a nav link
//remove class of show from mobile nav

const navLink = document.getElementsByClassName('nav-link');

for(let i = 0; i < navLink.length; i++) {

  navLink[i].addEventListener("click", function(){
    closeMobileMenu();
  })

}


function closeMobileMenu() {

document.querySelector("ul").classList.remove('show');

}

var buttons = document.getElementsByClassName('project_download_btn');

for(var i=0; i< buttons.length; i++){
    buttons[i].hidden = true;
}
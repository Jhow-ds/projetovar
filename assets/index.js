
// expandir e recolher o menu hamburger
let menu = document.getElementById('menu')

function clickMenu() {
    if(menu.style.display == 'none') {
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
}

function mostrarNavbar() {
  if(window.innerWidth >= 769) {
    menu.style.display = 'block'
  } else {
    menu.style.display = 'none'
  }
}

mostrarNavbar()
window.addEventListener("resize", mostrarNavbar)


// função para alterar o menu hamburger
var icon = document.getElementById('icon');

function toggleIcon() {
  if (window.innerWidth <= 768) {
    icon.classList.remove('ph-x');
    icon.classList.add('ph-list');
  }
}

icon.addEventListener('click', function() {
  if (window.innerWidth <= 768) {
    icon.classList.toggle('ph-list');
    icon.classList.toggle('ph-x');
  }
});

window.addEventListener('resize', toggleIcon);



// Inicio do slide de fotos
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controles
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail imagem controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Função para avançar automaticamente o slide
function autoSlide() {
  plusSlides(1);
}

// Definindo intervalo de tempo para avançar os slides automaticamente
setInterval(autoSlide, 5000);

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Fim da Função de Slides 



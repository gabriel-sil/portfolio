function toggleMenu() {
  const menu = document.querySelector('.list-navigation-bg');
  if (menu.style.height === '0px' || menu.style.height === '') {
      menu.style.height = '89vh';
  } else {
      menu.style.height = '0px';
  }
}

// Adicionar evento de clique aos links dentro do menu
const menuLinks = document.querySelectorAll('.list-navigation a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        toggleMenu(); // Fecha o menu quando um link é clicado
    });
});

/* */


/* subir de volta*/
// Adicione esse script no final do seu arquivo HTML, antes da tag </body>

document.addEventListener("DOMContentLoaded", function () {
    const btnScrollToTop = document.getElementById("btnScrollToTop");

    // Adicionar um evento de clique ao botão
    btnScrollToTop.addEventListener("click", function () {
        // Role suavemente de volta para o topo da página
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Isso cria uma animação suave de rolagem
        });
    });
});






/* sobre mim a navegação lateral*/
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".list-sticky-sidebar a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("highlighted");
        if (link.getAttribute("href").slice(1) === current) {
            link.classList.add("highlighted");
        }
    });
});

/**/
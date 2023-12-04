var currentAnimation = 1;

function toggleAnimation() {
    var frase1 = document.querySelector('.frase1');

    // Remove a classe de animação atual
    frase1.classList.remove('animation' + currentAnimation);

    // Alterna para a próxima animação (1, 2, 3, 1, ...)
    currentAnimation = (currentAnimation % 3) + 1;

    // Adiciona a nova classe de animação
    frase1.classList.add('animation' + currentAnimation);
}

document.addEventListener("DOMContentLoaded", function() {
    var scrollButton = document.getElementById("scroll-to-top-btn");

    // Mostrar ou ocultar o botão com base no scroll da página
    window.addEventListener("scroll", function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollButton.style.display = "block";
        } else {
            scrollButton.style.display = "none";
        }
    });

    // Função para rolar suavemente para o topo da página
    window.scrollToTop = function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
});

document.addEventListener("DOMContentLoaded", function() {
    // Adiciona um ouvinte de evento a todos os links da navegação
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Obtém o destino do link (o elemento com o ID correspondente)
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // Rola suavemente para o elemento de destino
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
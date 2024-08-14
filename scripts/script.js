// // Rolagem dos posters e logica para mudança das datas e horarios dos filmes
let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carrossel_imagens .slide');
    const totalSlides = slides.length;
    currentIndex = (currentIndex + step + totalSlides) % totalSlides;
    const newTransformValue = -currentIndex * 100 / totalSlides + '%';
    document.querySelector('.carrossel_imagens').style.transform = `translateX(${newTransformValue})`;
}

// // Muda o slide a cada 7 segundos
setInterval(() => moveSlide(1), 7000);


document.addEventListener("DOMContentLoaded", () => {
    // Variáveis para o menu de login
    const userButton = document.getElementById('usuarioBotao');
    const userMenu = document.getElementById('userMenu');
    const closeButton = document.getElementById('fecharMenuBotao');

    // Variáveis para o menu de criação de conta
    // const criarContaLink = document.getElementById('criarConta');
    // const criarContaMenu = document.getElementById('menuCriarConta');
    // const overlay = document.getElementById('overlay');

    // Abrir e fechar o menu de login ao clicar no ícone do usuário
    userButton.addEventListener('click', () => {
        userMenu.style.display = userMenu.style.display === 'none' || userMenu.style.display === '' ? 'block' : 'none';
    });

    // Fechar o menu de login ao clicar fora dele
    document.addEventListener('click', (event) => {
        if (!userButton.contains(event.target) && !userMenu.contains(event.target)) {
            userMenu.style.display = 'none';
        }
    });

    // Abrir o menu de criação de conta ao clicar no link
    criarContaLink.addEventListener('click', (e) => {
        e.preventDefault();
        criarContaMenu.style.display = 'flex';
        userMenu.style.display = 'none';
        overlay.style.display = 'block';
    });

    // Fechar o menu de criação de conta e o overlay ao clicar fora do menu
    overlay.addEventListener('click', () => {
        criarContaMenu.style.display = 'none';
        overlay.style.display = 'none';
    });
});

// Bloqueia o login com a Apple em desktops
document.addEventListener('DOMContentLoaded', function() {
    const appleLogin = document.getElementById('appleLogin');

    function isDesktop() {
        return window.innerWidth > 1024;
    }

    if (isDesktop()) {
        appleLogin.classList.add('disabled');
        appleLogin.setAttribute('title', 'Esta opção está disponível apenas em dispositivos móveis');
    }
});

//Logica para mudança de dados na rolagem de cards


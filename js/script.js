// =========================
// TRADUÇÃO DO PORTFÓLIO
// =========================

const languageButton = document.querySelector('#language-toggle');

// Recupera o idioma salvo ou utiliza português como padrão
let currentLanguage = localStorage.getItem('language') || 'pt';

// Função responsável pela tradução
function updateLanguage() {

    // Seleciona todos os elementos traduzíveis
    const elements = document.querySelectorAll('[data-pt][data-en]');

    // Atualiza os textos
    elements.forEach((element) => {
        element.textContent = element.dataset[currentLanguage];
    });

    // Atualiza o idioma do documento
    document.documentElement.lang =
        currentLanguage === 'pt' ? 'pt-BR' : 'en';

    // Atualiza o botão
    languageButton.textContent =
        currentLanguage === 'pt' ? 'EN' : 'PT';

    // Atualiza o título da página
    document.title =
        currentLanguage === 'pt'
            ? 'Lucas André | Desenvolvedor de Software'
            : 'Lucas André | Software Developer';

    // Armazena a preferência de idioma
    localStorage.setItem('language', currentLanguage);
}

// Evento de clique no botão
languageButton.addEventListener('click', () => {

    // Alterna entre português e inglês
    currentLanguage = currentLanguage === 'pt' ? 'en' : 'pt';

    // Executa a função de tradução
    updateLanguage();

});

// Aplica o idioma salvo ao carregar a página
updateLanguage();

// Animação durante a rolagem

const sections = document.querySelectorAll('main section:not(#home)');

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.1
});

sections.forEach((section) => {
    section.classList.add('reveal');
    observer.observe(section);
});

// Identificação da seção ativa

const pageSections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', updateActiveSection);
window.addEventListener('load', updateActiveSection);

function updateActiveSection() {

    let currentSection = 'home';

    pageSections.forEach((section) => {

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 150) {
            currentSection = section.id;
        }

    });

    navLinks.forEach((link) => {

        link.classList.toggle(
            'active',
            link.getAttribute('href') === '#' + currentSection
        );

    });
}

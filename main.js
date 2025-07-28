import './style.css';
import { Homeview } from './components/Homeview/Homeview';

const app = document.querySelector("#app");
app.innerHTML = Homeview();

// Aplicar tema guardado
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
}
updateImagesForTheme();

// Toggle del tema
document.addEventListener("click", (e) => {
    if (e.target && e.target.id === "theme-toggle") {
        document.body.classList.toggle("dark-theme");

        updateImagesForTheme();

        // Guardar preferencia
        const isDark = document.body.classList.contains("dark-theme");
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }
});

// Cambiar las imágenes según el tema
function updateImagesForTheme() {
    const isDark = document.body.classList.contains('dark-theme');
    document.querySelectorAll('.theme-image').forEach(img => {
        img.src = isDark ? img.dataset.dark : img.dataset.light;
    });
}

document.addEventListener("DOMContentLoaded", () => {

    // Navbar - marcar sección activa, incluido Home
    const navItems = document.querySelectorAll('.nav-container ul li');
    const sectionElements = document.querySelectorAll('section[id]');
    const homeItem = document.querySelector('.nav-container ul li.home');

    function activateNavOnScroll() {
        const scrollY = window.pageYOffset;
        const aboutSection = document.querySelector('#about');

        if (aboutSection) {
            const aboutTop = aboutSection.offsetTop;
            if (scrollY < aboutTop - 100) {
                navItems.forEach(item => item.classList.remove('active'));
                if (homeItem) homeItem.classList.add('active');
                return;
            }
        }

        for (const section of sectionElements) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop - 150 && scrollY < sectionTop + sectionHeight - 150) {
                navItems.forEach(item => item.classList.remove('active'));
                const matchingItem = Array.from(navItems).find(item => {
                    const link = item.querySelector('a');
                    return link && link.getAttribute('href') === `#${sectionId}`;
                });
                if (matchingItem) matchingItem.classList.add('active');
                break;
            }
        }
    }

    window.addEventListener("scroll", activateNavOnScroll);
    window.addEventListener("load", activateNavOnScroll);

    // Cambiar fondo del header al hacer scroll
    const headerScroll = document.getElementById('scroll-header');
    function toggleHeaderBackground() {
        if (window.scrollY > 50) {
            headerScroll.classList.add('scrolled');
        } else {
            headerScroll.classList.remove('scrolled');
        }
    }

    window.addEventListener("scroll", toggleHeaderBackground);
    window.addEventListener("load", toggleHeaderBackground);

    // Sombra del Nav al hacer Scroll
    const navScroll = document.getElementById('scroll-nav');
    function toggleNavBackground() {
        if (window.scrollY > 50){
            navScroll.classList.add('scrolled');
        } else {
            navScroll.classList.remove('scrolled');
        }
    }

    window.addEventListener("scroll", toggleNavBackground);
    window.addEventListener("load", toggleNavBackground);
});

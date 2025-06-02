function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".jeneal-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });
    });
});
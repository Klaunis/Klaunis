(function () {
    const body = document.body;
    const navToggle = document.querySelector('.nav-toggle');
    const yearTarget = document.getElementById('year');

    if (yearTarget) {
        yearTarget.textContent = new Date().getFullYear();
    }

    if (!navToggle) {
        return;
    }

    const nav = document.getElementById('site-nav');

    const closeNav = () => {
        body.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
    };

    navToggle.addEventListener('click', () => {
        const isOpen = body.classList.toggle('nav-open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    nav?.addEventListener('click', (event) => {
        if (event.target instanceof HTMLAnchorElement) {
            closeNav();
        }
    });

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeNav();
        }
    });
})();

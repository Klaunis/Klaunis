(function () {
    const body = document.body;
    const navToggle = document.querySelector('.nav-toggle');
    const yearTarget = document.getElementById('year');

    if (yearTarget) {
        yearTarget.textContent = new Date().getFullYear();
    }

    if (navToggle) {
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
    }

    const initSlider = (slider) => {
        const input = slider.querySelector("input[type='range']");
        if (!input) return;

        const applyValue = (value) => {
            slider.style.setProperty('--slider-value', value);
        };

        const updateFromEvent = (event) => {
            const rect = slider.getBoundingClientRect();
            const value = Math.min(100, Math.max(0, ((event.clientX - rect.left) / rect.width) * 100));
            input.value = String(value);
            applyValue(value);
        };

        applyValue(input.value || 60);

        input.addEventListener('input', () => applyValue(input.value));

        const startPointerDrag = (event) => {
            if (event.pointerType === 'mouse' && event.button !== 0) return;
            slider.setPointerCapture(event.pointerId);
            updateFromEvent(event);

            const onPointerMove = (moveEvent) => updateFromEvent(moveEvent);
            const stopPointerDrag = (endEvent) => {
                slider.releasePointerCapture(event.pointerId);
                slider.removeEventListener('pointermove', onPointerMove);
                slider.removeEventListener('pointerup', stopPointerDrag);
                slider.removeEventListener('pointercancel', stopPointerDrag);
            };

            slider.addEventListener('pointermove', onPointerMove);
            slider.addEventListener('pointerup', stopPointerDrag);
            slider.addEventListener('pointercancel', stopPointerDrag);
        };

        slider.addEventListener('pointerdown', (event) => {
            if (event.target === input) return; // default range interaction handles this
            startPointerDrag(event);
        });
    };

    document.querySelectorAll('[data-slider]').forEach(initSlider);
})();

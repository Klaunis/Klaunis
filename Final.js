const MEDIA_FALLBACK_IMAGE = 'Portfolio/3D/Chess/Render Chess 1.jpg';
const MEDIA_PLACEHOLDER_IMAGE = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAQAAADYDLwCAAAAmUlEQVR4nO3TsQ0AIAwAwW3///liGxINDN2EcXZFrfd8c7szAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgJsCXwAB6ny62QAAAABJRU5ErkJggg==';
const HERO_DEFAULT_VIDEO = 'Bg Movie.webm';
const PORTFOLIO_PREVIEW_COUNT = 6;

// portfolioConfig (defined in projects-data.js) lets you control filter order.
const portfolioProjects = window.portfolioProjects || [];
const portfolioConfig = window.portfolioConfig || {};

document.addEventListener('DOMContentLoaded', () => {
    const state = {
        filter: 'all',
        isExpanded: false
    };

    const dom = {
        hero: document.querySelector('.hero'),
        heroVideo: document.getElementById('hero-video'),
        heroImage: document.getElementById('hero-image'),
        navToggle: document.querySelector('[data-nav-toggle]'),
        navLinks: document.getElementById('primary-nav'),
        filterContainer: document.querySelector('.filter-chips'),
        grid: document.getElementById('portfolio-grid'),
        empty: document.getElementById('portfolio-empty'),
        toggleButton: document.getElementById('portfolio-toggle'),
        videoModal: document.getElementById('video-modal'),
        viewReelButton: document.querySelector('[data-open-reel]'),
        reelVideo: document.getElementById('reel-video'),
        form: document.getElementById('contact-form'),
        formFeedback: document.getElementById('form-feedback'),
        year: document.getElementById('current-year')
    };

    setCurrentYear();
    setupHero();
    setupNav();
    setupFilters();
    setupPortfolioToggle();
    setupVideoModal();
    renderPortfolio();
    setupForm();

    function setCurrentYear() {
        if (dom.year) {
            dom.year.textContent = new Date().getFullYear();
        }
    }

    function setupHero() {
        if (!dom.hero) return;

        const heroImageSource = dom.hero.dataset.heroImage || MEDIA_FALLBACK_IMAGE;
        if (dom.heroImage) {
            dom.heroImage.style.backgroundImage = `url("${heroImageSource}")`;
        }

        if (!dom.heroVideo) return;

        dom.heroVideo.setAttribute('playsinline', '');
        dom.heroVideo.setAttribute('muted', '');
        dom.heroVideo.muted = true;
        dom.heroVideo.setAttribute('loop', '');

        const updateHeroMedia = () => {
            const desktopVideo = dom.hero.dataset.desktopVideo || HERO_DEFAULT_VIDEO;
            const mobileVideo = dom.hero.dataset.mobileVideo || desktopVideo;
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            const isMobile = window.matchMedia('(max-width: 768px)').matches;
            const source = isMobile ? mobileVideo : desktopVideo;

            if (!source || prefersReducedMotion) {
                dom.heroVideo.removeAttribute('src');
                dom.heroVideo.load();
                dom.hero.classList.remove('has-video');
                return;
            }

            if (dom.heroVideo.dataset.loadedSource === source) {
                return;
            }

            dom.heroVideo.dataset.loadedSource = source;
            dom.heroVideo.src = source;
            dom.heroVideo.poster = heroImageSource;
            dom.heroVideo.load();
        };

        dom.heroVideo.addEventListener('loadeddata', () => {
            dom.hero.classList.add('has-video');
            dom.heroVideo.play().catch(() => { });
        });

        dom.heroVideo.addEventListener('error', () => {
            dom.hero.classList.remove('has-video');
        });

        updateHeroMedia();
        window.matchMedia('(max-width: 768px)').addEventListener('change', updateHeroMedia);
        window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', updateHeroMedia);
    }

    function setupNav() {
        if (!dom.navToggle || !dom.navLinks) return;
        const toggleNav = () => {
            const isOpen = dom.navLinks.classList.toggle('is-open');
            dom.navToggle.setAttribute('aria-expanded', String(isOpen));
            document.body.classList.toggle('nav-open', isOpen);
        };

        dom.navToggle.addEventListener('click', toggleNav);
        dom.navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                dom.navLinks.classList.remove('is-open');
                dom.navToggle.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('nav-open');
            });
        });

        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && dom.navLinks.classList.contains('is-open')) {
                dom.navLinks.classList.remove('is-open');
                dom.navToggle.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('nav-open');
            }
        });
    }

    function setupFilters() {
        if (!dom.filterContainer) return;

        const filters = buildFilterList();
        dom.filterContainer.innerHTML = '';

        filters.forEach((filterKey, index) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'chip';
            button.dataset.filter = filterKey;
            button.textContent = formatFilterLabel(filterKey);

            const isActive = filterKey === state.filter || (!filters.includes(state.filter) && index === 0);
            button.classList.toggle('is-active', isActive);
            if (isActive) {
                state.filter = filterKey;
            }

            button.addEventListener('click', () => {
                if (filterKey === state.filter) return;
                state.filter = filterKey;
                state.isExpanded = false;
                dom.filterContainer.querySelectorAll('.chip').forEach(chip => {
                    chip.classList.toggle('is-active', chip === button);
                });
                renderPortfolio();
            });

            dom.filterContainer.appendChild(button);
        });
    }

    function buildFilterList() {
        const configured = Array.isArray(portfolioConfig.filters)
            ? portfolioConfig.filters.map(filter => String(filter).toLowerCase())
            : [];

        const discovered = new Set();
        configured.forEach(filter => discovered.add(filter));

        portfolioProjects.forEach(project => {
            if (Array.isArray(project.tags)) {
                project.tags.forEach(tag => {
                    if (typeof tag === 'string' && tag.trim()) {
                        discovered.add(tag.toLowerCase());
                    }
                });
            }
        });

        const filters = Array.from(discovered);
        if (!filters.includes('all')) {
            filters.unshift('all');
        } else {
            const allIndex = filters.indexOf('all');
            if (allIndex > 0) {
                filters.splice(allIndex, 1);
                filters.unshift('all');
            }
        }

        return filters;
    }

    function formatFilterLabel(filterKey) {
        if (filterKey === 'all') return 'All';
        return filterKey
            .split(/[-_]/)
            .map(part => {
                const normalized = part.toLowerCase();
                if (normalized.length <= 3 || /^\d/.test(normalized)) {
                    return normalized.toUpperCase();
                }
                return normalized.charAt(0).toUpperCase() + normalized.slice(1);
            })
            .join(' ');
    }

    function setupPortfolioToggle() {
        if (!dom.toggleButton) return;

        dom.toggleButton.setAttribute('aria-controls', 'portfolio-grid');
        dom.toggleButton.setAttribute('aria-expanded', 'false');

        dom.toggleButton.addEventListener('click', () => {
            state.isExpanded = !state.isExpanded;
            renderPortfolio();
        });
    }

    function renderPortfolio() {
        if (!dom.grid) return;

        dom.grid.innerHTML = '';

        const filteredProjects = portfolioProjects.filter(project => {
            if (state.filter === 'all') return true;
            if (!Array.isArray(project.tags)) return false;
            return project.tags.some(tag => String(tag).toLowerCase() === state.filter);
        });

        if (!filteredProjects.length) {
            if (dom.empty) dom.empty.hidden = false;
            updatePortfolioToggle(0);
            return;
        }

        if (dom.empty) dom.empty.hidden = true;

        const visibleCount = state.isExpanded
            ? filteredProjects.length
            : Math.min(PORTFOLIO_PREVIEW_COUNT, filteredProjects.length);

        filteredProjects.slice(0, visibleCount).forEach(project => {
            dom.grid.appendChild(createPortfolioCard(project));
        });

        updatePortfolioToggle(filteredProjects.length);
    }

    function createPortfolioCard(project) {
        const link = document.createElement('a');
        link.className = 'portfolio-card';
        link.href = `project.html?id=${encodeURIComponent(project.id)}`;
        link.setAttribute('aria-label', `${project.title} project details`);

        const visual = document.createElement('div');
        visual.className = 'portfolio-card__visual';

        const img = new Image();
        img.src = project.cover;
        img.alt = `${project.title} preview`;
        img.addEventListener('error', () => {
            if (img.src !== MEDIA_FALLBACK_IMAGE) {
                img.src = MEDIA_FALLBACK_IMAGE;
            } else if (img.src !== MEDIA_PLACEHOLDER_IMAGE) {
                img.src = MEDIA_PLACEHOLDER_IMAGE;
            }
        });
        visual.appendChild(img);

        if (Array.isArray(project.tags) && project.tags.length) {
            const badge = document.createElement('span');
            badge.className = 'portfolio-card__badge';
            badge.textContent = project.tags
                .map(tag => formatFilterLabel(String(tag).toLowerCase()))
                .join(' | ');
            visual.appendChild(badge);
        }

        const overlay = document.createElement('div');
        overlay.className = 'portfolio-card__overlay';

        const title = document.createElement('h3');
        title.className = 'portfolio-card__title';
        title.textContent = project.title;

        const description = document.createElement('p');
        description.className = 'portfolio-card__description';
        description.textContent = project.summary || '';

        overlay.append(title, description);
        visual.appendChild(overlay);

        const footer = document.createElement('div');
        footer.className = 'portfolio-card__footer';
        const left = document.createElement('span');
        left.textContent = project.year || '';
        const right = document.createElement('span');
        right.className = 'portfolio-card__cta';
        right.textContent = 'View Project';
        const icon = document.createElement('span');
        icon.className = 'portfolio-card__cta-icon';
        icon.setAttribute('aria-hidden', 'true');
        icon.textContent = '\u2192';
        right.appendChild(icon);
        footer.append(left, right);

        link.append(visual, footer);
        return link;
    }

    function updatePortfolioToggle(totalCount) {
        if (!dom.toggleButton) return;

        if (totalCount <= PORTFOLIO_PREVIEW_COUNT) {
            state.isExpanded = false;
            dom.toggleButton.hidden = true;
            dom.toggleButton.setAttribute('aria-hidden', 'true');
            dom.toggleButton.setAttribute('aria-expanded', 'false');
            dom.toggleButton.textContent = 'View More \u2193';
            dom.toggleButton.setAttribute('aria-label', state.isExpanded ? 'Collapse portfolio list' : 'Expand portfolio list');
            return;
        }

        dom.toggleButton.hidden = false;
        dom.toggleButton.setAttribute('aria-hidden', 'false');
        dom.toggleButton.setAttribute('aria-expanded', String(state.isExpanded));
        dom.toggleButton.textContent = state.isExpanded ? 'View Less \u2191' : 'View More \u2193';
        dom.toggleButton.setAttribute('aria-label', state.isExpanded ? 'Collapse portfolio list' : 'Expand portfolio list');
    }

    function setupVideoModal() {
        if (!dom.videoModal || !dom.viewReelButton) return;

        const closeSelectors = dom.videoModal.querySelectorAll('[data-modal-close], .modal__overlay');
        closeSelectors.forEach(element => {
            element.addEventListener('click', () => toggleModal(dom.videoModal, false));
        });

        dom.viewReelButton.addEventListener('click', () => {
            if (dom.reelVideo) {
                dom.reelVideo.pause();
                dom.reelVideo.currentTime = 0;
            }
            toggleModal(dom.videoModal, true);
            if (dom.reelVideo && typeof dom.reelVideo.play === 'function') {
                dom.reelVideo.play().catch(() => { });
            }
        });
    }

    function toggleModal(modal, shouldOpen) {
        if (!modal) return;

        const isOpen = Boolean(shouldOpen);
        modal.classList.toggle('active', isOpen);
        modal.classList.toggle('hidden', !isOpen);
        modal.setAttribute('aria-hidden', String(!isOpen));
        document.body.classList.toggle('modal-open', isOpen);

        if (!isOpen) {
            modal.querySelectorAll('video').forEach(video => {
                video.pause();
                if (typeof video.currentTime === 'number') {
                    video.currentTime = 0;
                }
            });
        }
    }

    function setupForm() {
        if (!dom.form || !dom.formFeedback) return;

        const submitButton = dom.form.querySelector('[type="submit"]');
        const defaultLabel = submitButton ? submitButton.textContent : '';
        const endpoint = dom.form.getAttribute('action') || 'https://formsubmit.co/ajax/kunaalsethii@gmail.com';

        dom.form.addEventListener('submit', async event => {
            event.preventDefault();

            if (!dom.form.checkValidity()) {
                dom.form.reportValidity();
                return;
            }

            dom.formFeedback.hidden = false;
            dom.formFeedback.textContent = 'Sending...';
            dom.form.classList.add('is-sending');
            if (submitButton) {
                submitButton.disabled = true;
                submitButton.textContent = 'Sending...';
            }

            const formData = new FormData(dom.form);

            try {
                const response = await fetch(endpoint, {
                    method: 'POST',
                    headers: { Accept: 'application/json' },
                    body: formData
                });

                if (!response.ok) {
                    throw new Error('Request failed');
                }

                dom.form.reset();
                dom.formFeedback.textContent = 'Message sent. I will reply from kunaalsethii@gmail.com shortly.';
            } catch (error) {
                dom.formFeedback.textContent = 'Could not send message. Email me directly at kunaalsethii@gmail.com.';
            } finally {
                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.textContent = defaultLabel;
                }

                setTimeout(() => {
                    dom.formFeedback.hidden = true;
                }, 6000);

                dom.form.classList.remove('is-sending');
            }
        });
    }
});

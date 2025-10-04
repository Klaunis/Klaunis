const MEDIA_FALLBACK_IMAGE = window.MEDIA_FALLBACK_IMAGE || 'Portfolio/3D/Chess/Render Chess 1.jpg';
const portfolioProjects = window.portfolioProjects || [];

let galleryObserver;
const dom = {};
const comparisonSliderRegistry = new WeakSet();

document.addEventListener('DOMContentLoaded', () => {
    const searchParams = new URLSearchParams(window.location.search);
    const projectId = searchParams.get('id');
    const project = portfolioProjects.find(item => item.id === projectId);

    cacheDom();
    setCurrentYear();
    setupNav();

    if (!project) {
        showNotFound();
        return;
    }

    renderProject(project);
});

function cacheDom() {
    dom.navToggle = document.querySelector('[data-nav-toggle]');
    dom.navLinks = document.getElementById('primary-nav');
    dom.main = document.getElementById('project-main');
    dom.heroSection = document.getElementById('project-hero');
    dom.heroMedia = document.getElementById('project-hero-media');
    dom.heroBlur = document.querySelector('.project-hero__blur');
    dom.meta = document.getElementById('project-meta');
    dom.title = document.getElementById('project-title');
    dom.summary = document.getElementById('project-summary');
    dom.tags = document.getElementById('project-tags');
    dom.credits = document.getElementById('project-credits');
    dom.description = document.getElementById('project-description');
    dom.mediaHeader = document.getElementById('project-media-header');
    dom.media = document.getElementById('project-media');
}

function setCurrentYear() {
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
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

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && dom.navLinks.classList.contains('is-open')) {
            dom.navLinks.classList.remove('is-open');
            dom.navToggle.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('nav-open');
        }
    });
}

function showNotFound() {
    if (dom.main) {
        dom.main.hidden = true;
    }
    window.location.replace('index.html#portfolio');
}

function renderProject(project) {
    document.title = `${project.title} - Kunal Sethi`;

    if (dom.main) dom.main.hidden = false;

    const previewImage = getHeroPreviewImage(project);
    applyHeroPreview(previewImage);

    if (dom.meta) {
        dom.meta.textContent = project.year ? String(project.year) : '';
    }

    if (dom.title) {
        dom.title.textContent = project.title;
    }

    if (dom.summary) {
        dom.summary.textContent = project.summary || '';
    }

    if (dom.description) {
        dom.description.innerHTML = '';
        if (project.description) {
            project.description.split(/\n{2,}/).forEach(block => {
                const trimmed = block.trim();
                if (!trimmed) return;
                const paragraph = document.createElement('p');
                paragraph.textContent = trimmed;
                dom.description.appendChild(paragraph);
            });
        }
    }

    renderProjectTags(project.tags);
    renderProjectCredits(project.credits);
    renderMediaGallery(project.media);
}

function applyHeroPreview(previewImage) {
    const safeImage = previewImage || MEDIA_FALLBACK_IMAGE;
    const cssUrl = toCssUrl(safeImage);

    if (dom.heroSection) {
        dom.heroSection.style.setProperty('--project-hero-preview', cssUrl);
    }

    if (dom.heroMedia) {
        dom.heroMedia.style.backgroundImage = cssUrl === 'none'
            ? 'none'
            : `linear-gradient(180deg, rgba(4,4,4,0.25) 0%, rgba(4,4,4,0.9) 100%), ${cssUrl}`;
    }

    if (dom.heroBlur) {
        dom.heroBlur.style.backgroundImage = cssUrl;
    }
}

function renderProjectTags(tags) {
    if (!dom.tags) return;

    dom.tags.hidden = true;
    dom.tags.innerHTML = '';

    if (!Array.isArray(tags) || !tags.length) {
        return;
    }

    tags.forEach(tag => {
        const item = document.createElement('li');
        item.textContent = String(tag).toUpperCase();
        dom.tags.appendChild(item);
    });

    dom.tags.hidden = false;
}

function renderProjectCredits(credits) {
    if (!dom.credits) return;

    dom.credits.hidden = true;
    dom.credits.innerHTML = '';

    if (!Array.isArray(credits) || !credits.length) {
        return;
    }

    credits.forEach(tool => {
        const chip = document.createElement('span');
        chip.textContent = tool;
        dom.credits.appendChild(chip);
    });

    dom.credits.hidden = false;
}

function renderMediaGallery(mediaItems) {
    if (!dom.media) return;

    dom.media.innerHTML = '';

    const hasMedia = Array.isArray(mediaItems) && mediaItems.length > 0;

    if (dom.mediaHeader) {
        dom.mediaHeader.hidden = !hasMedia;
        const heading = dom.mediaHeader.querySelector('.project-media-heading');
        const subheading = dom.mediaHeader.querySelector('.project-media-subheading');

        if (heading) {
            heading.textContent = 'Media Gallery';
        }

        if (subheading) {
            if (hasMedia) {
                const count = mediaItems.length;
                const label = count === 1 ? 'highlight' : 'highlights';
                subheading.textContent = `Scroll through ${count} ${label} from this project.`;
            } else {
                subheading.textContent = 'Scroll through key frames, breakdowns, and behind-the-scenes moments.';
            }
        }
    }

    if (hasMedia) {
        mediaItems.forEach(item => {
            dom.media.appendChild(createMediaBlock(item));
        });
    }

    setupGalleryReveal(hasMedia);
}

function setupGalleryReveal(hasMedia) {
    if (galleryObserver) {
        galleryObserver.disconnect();
        galleryObserver = null;
    }

    if (!dom.heroSection) {
        return;
    }

    dom.heroSection.classList.remove('project-hero--media-visible');

    if (!hasMedia || !dom.mediaHeader) {
        return;
    }

    galleryObserver = new IntersectionObserver(([entry]) => {
        dom.heroSection.classList.toggle('project-hero--media-visible', entry.isIntersecting);
    }, {
        threshold: 0.4,
        rootMargin: '-35% 0px -45% 0px'
    });

    galleryObserver.observe(dom.mediaHeader);
}

function createMediaBlock(item = {}) {
    if (item.type === 'compare') {
        return createCompareBlock(item);
    }

    const wrapper = document.createElement('article');
    wrapper.className = 'project-media-item';

    let mediaElement;
    const mediaType = item.type || 'image';

    switch (mediaType) {
        case 'video': {
            const video = document.createElement('video');
            video.controls = true;
            video.preload = 'metadata';
            video.setAttribute('playsinline', '');
            video.setAttribute('webkit-playsinline', '');
            if (item.poster) {
                video.poster = item.poster;
            }
            if (item.src) {
                video.src = item.src;
            }
            video.addEventListener('error', () => {
                video.poster = MEDIA_FALLBACK_IMAGE;
            });
            mediaElement = video;
            break;
        }
        case 'embed': {
            const frame = document.createElement('iframe');
            frame.src = item.src || '';
            frame.title = item.caption || 'Embedded media';
            frame.allow = 'autoplay; fullscreen; picture-in-picture';
            frame.loading = 'lazy';
            frame.setAttribute('allowfullscreen', 'true');
            mediaElement = frame;
            break;
        }
        case 'image':
        default: {
            const image = new Image();
            image.src = item.src || MEDIA_FALLBACK_IMAGE;
            image.alt = item.caption || 'Project still';
            image.addEventListener('error', () => {
                if (image.src !== MEDIA_FALLBACK_IMAGE) {
                    image.src = MEDIA_FALLBACK_IMAGE;
                }
            });
            mediaElement = image;
            break;
        }
    }

    mediaElement.classList.add('project-media-element', getMediaModifier(mediaType));
    wrapper.appendChild(mediaElement);

    if (item.caption) {
        const caption = document.createElement('p');
        caption.className = 'project-media-caption';
        caption.textContent = item.caption;
        wrapper.appendChild(caption);
    }

    return wrapper;
}

function createCompareBlock(item = {}) {
    const wrapper = document.createElement('article');
    wrapper.className = 'project-media-item project-media-item--compare';

    const slider = document.createElement('div');
    slider.className = 'comparison-slider';
    slider.style.setProperty('--position', '60%');
    slider.setAttribute('role', 'region');
    const ariaLabel = item.caption ? `${item.caption} comparison slider` : 'Before and after comparison slider';
    slider.setAttribute('aria-label', ariaLabel);

    const beforeLabelText = item.beforeLabel || 'Before';
    const afterLabelText = item.afterLabel || 'After';

    const beforeLabel = document.createElement('span');
    beforeLabel.className = 'comparison-slider__label comparison-slider__label--before';
    beforeLabel.textContent = beforeLabelText;

    const afterLabel = document.createElement('span');
    afterLabel.className = 'comparison-slider__label comparison-slider__label--after';
    afterLabel.textContent = afterLabelText;

    const beforeLayer = document.createElement('div');
    beforeLayer.className = 'comparison-slider__layer comparison-slider__layer--before';
    beforeLayer.appendChild(createComparisonMediaElement(item.before, beforeLabelText));

    const afterLayer = document.createElement('div');
    afterLayer.className = 'comparison-slider__layer comparison-slider__layer--after';
    afterLayer.appendChild(createComparisonMediaElement(item.after, afterLabelText));

    const divider = document.createElement('div');
    divider.className = 'comparison-slider__divider';
    divider.setAttribute('aria-hidden', 'true');

    const handle = document.createElement('div');
    handle.className = 'comparison-slider__handle';
    handle.setAttribute('role', 'slider');
    handle.setAttribute('tabindex', '0');
    handle.setAttribute('aria-valuemin', '0');
    handle.setAttribute('aria-valuemax', '100');
    handle.setAttribute('aria-valuenow', '60');
    handle.setAttribute('aria-label', 'Reveal before or after image');

    slider.append(beforeLabel, beforeLayer, afterLayer, afterLabel, divider, handle);
    wrapper.appendChild(slider);

    if (item.caption) {
        const caption = document.createElement('p');
        caption.className = 'project-media-caption';
        caption.textContent = item.caption;
        wrapper.appendChild(caption);
    }

    initComparisonSlider(slider);
    return wrapper;
}

function createComparisonMediaElement(source, altText) {
    const safeSource = source || MEDIA_FALLBACK_IMAGE;
    const isVideo = /\.(mp4|webm|mov|m4v)$/i.test(safeSource);

    if (isVideo) {
        const video = document.createElement('video');
        video.src = safeSource;
        video.playsInline = true;
        video.setAttribute('playsinline', '');
        video.muted = true;
        video.setAttribute('muted', '');
        video.loop = true;
        video.setAttribute('loop', '');
        video.autoplay = true;
        video.setAttribute('autoplay', '');
        video.controls = false;
        video.className = 'comparison-slider__media';
        video.addEventListener('error', () => {
            if (video.src !== MEDIA_FALLBACK_IMAGE) {
                video.src = MEDIA_FALLBACK_IMAGE;
            }
        });
        return video;
    }

    const image = new Image();
    image.src = safeSource;
    image.alt = altText || '';
    image.className = 'comparison-slider__media';
    image.addEventListener('error', () => {
        if (image.src !== MEDIA_FALLBACK_IMAGE) {
            image.src = MEDIA_FALLBACK_IMAGE;
        }
    });
    return image;
}

function initComparisonSlider(slider) {
    if (!slider || comparisonSliderRegistry.has(slider)) {
        return;
    }

    comparisonSliderRegistry.add(slider);

    const handle = slider.querySelector('.comparison-slider__handle');
    if (!handle) {
        return;
    }

    const setPosition = (value) => {
        const bounded = Math.max(0, Math.min(100, Number(value)));
        slider.style.setProperty('--position', `${bounded}%`);
        handle.setAttribute('aria-valuenow', String(Math.round(bounded)));
    };

    const moveToClientX = (clientX) => {
        const rect = slider.getBoundingClientRect();
        if (!rect.width) return;
        const raw = ((clientX - rect.left) / rect.width) * 100;
        setPosition(raw);
    };

    const onPointerMove = (event) => moveToClientX(event.clientX);
    const onPointerUp = () => {
        slider.classList.remove('is-dragging');
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('pointerup', onPointerUp);
    };

    slider.addEventListener('pointerdown', (event) => {
        event.preventDefault();
        slider.classList.add('is-dragging');
        handle.focus({ preventScroll: true });
        moveToClientX(event.clientX);
        window.addEventListener('pointermove', onPointerMove, { passive: true });
        window.addEventListener('pointerup', onPointerUp, { passive: true });
    });

    handle.addEventListener('keydown', (event) => {
        const current = Number(handle.getAttribute('aria-valuenow')) || 60;
        const step = event.shiftKey ? 12 : 4;
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault();
            const delta = event.key === 'ArrowLeft' ? -step : step;
            setPosition(current + delta);
        }
        if (event.key === 'Home') {
            event.preventDefault();
            setPosition(0);
        }
        if (event.key === 'End') {
            event.preventDefault();
            setPosition(100);
        }
    });

    setPosition(handle.getAttribute('aria-valuenow') || 60);
}

function getMediaModifier(type) {
    switch (type) {
        case 'video':
            return 'project-media-element--video';
        case 'embed':
            return 'project-media-element--frame';
        default:
            return 'project-media-element--image';
    }
}

function getHeroPreviewImage(project) {
    if (!project) {
        return MEDIA_FALLBACK_IMAGE;
    }

    if (project.cover) {
        return project.cover;
    }

    if (Array.isArray(project.media)) {
        for (const item of project.media) {
            if (item?.poster) {
                return item.poster;
            }
        }

        for (const item of project.media) {
            if (item?.src) {
                return item.src;
            }
        }
    }

    return MEDIA_FALLBACK_IMAGE;
}

function toCssUrl(source) {
    if (!source) {
        return 'none';
    }
    return `url("${String(source).replace(/"/g, '\\"')}")`;
}





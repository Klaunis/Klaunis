// --- 1. MASTER CONFIGURATION & CUSTOMIZATION GUIDE ---

// Helper object for new software icons. Using a central object makes it easy to manage.
const ICONS = {
    AFTER_EFFECTS: '<img src="https://cdn.simpleicons.org/adobeaftereffects/AE" alt="Adobe After Effects" title="Adobe After Effects" />',
    ILLUSTRATOR: '<img src="https://cdn.simpleicons.org/adobeillustrator/AI" alt="Adobe Illustrator" title="Adobe Illustrator" />',
    PHOTOSHOP: '<img src="https://cdn.simpleicons.org/adobephotoshop/PS" alt="Adobe Photoshop" title="Adobe Photoshop" />',
    PREMIERE_PRO: '<img src="https://cdn.simpleicons.org/adobepremierepro/PR" alt="Adobe Premiere Pro" title="Adobe Premiere Pro" />',
    SUBSTANCE_PAINTER: '<img src="https://cdn.simpleicons.org/substance3dpainter" alt="Substance 3D Painter" title="Substance 3D Painter" />',
    BLENDER: '<img src="https://cdn.simpleicons.org/blender" alt="Blender" title="Blender" />',
    MAYA: '<img src="https://cdn.simpleicons.org/autodeskmaya" alt="Autodesk Maya" title="Autodesk Maya" />',
    MAX3DS: '<img src="https://cdn.simpleicons.org/autodesk" alt="3ds Max" title="3ds Max" />',
    HOUDINI: '<img src="https://cdn.simpleicons.org/houdini" alt="Houdini" title="Houdini" />',
    NUKE: '<img src="https://cdn.simpleicons.org/nuke" alt="Nuke" title="Nuke" />',
    MARMOSET: '<img src="https://cdn.simpleicons.org/marmoset" alt="Marmoset Toolbag" title="Marmoset Toolbag" />',
};


const portfolioConfig = {
    portfolio: {
        pageSize: 6
    },
    resume: {
        // FIX: Corrected the path to the resume file.
        file: 'Portfolio/Resume/Kunal_Sethi_Resume.pdf',
        label: 'Download Résumé'
    },
    sliderLabels: {
        before: "BEFORE",
        after: "AFTER"
    },
    heroVideo: {
        desktop: "Bg Movie.webm",
        mobile: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
        poster: "Portfolio/3D/Chess/Render Chess 1.jpg"
    },
    about: {
        title: "A Bit About Me",
        text: "I’m a visual designer who lives at the intersection of art and tech. My passion is crafting cinematic visuals that don't just look good, but feel right—evoking emotion and telling a story in every frame. For me, collaboration isn't just part of the job; it's the best part. Let's build something unforgettable together.",
        image: "https://placehold.co/400x400/0a0a0a/ffffff?text=Kunal"
    },
    contact: {
        title: "Have a vision in mind?",
        subtitle: "I'm currently available for select projects. If you're passionate about what you do, we'll get along great.",
        email: "sethikunal66@gmail.com",
        phone: "+91 9717895116"
    },
    projects: [
        { 
            id: "showcase", 
            reelVideo: "Bg Movie.webm"
        },
        {
            id: "project1", 
            caption: "Social Login",
            description: " This was made just using Motion Graphics on the attempt to make a real life close-up screen shot for a short vfx film.",
            tags: ["graphics", "motion"],
            tools: [
                // UPDATE: New icons
                { name: 'Illustrator', icon: ICONS.ILLUSTRATOR },
                { name: 'After Effects', icon: ICONS.AFTER_EFFECTS }
            ],
            files: [
                { 
                    type: 'video', 
                    url: "Portfolio/Motion/Computer Screen Shot.webm",
                    caption: "Social Login",
                    description: "This is the initial concept art that set the tone for the entire project."
                },
            ],
            thumbnail: "Portfolio/Motion/Computer.png",
            caseStudyUrl: "#"
        },
        {
            id: "project2", 
            caption: "Game of Chess",
            description: "A render done while Checkmating.",
            tags: ["3d"],
            tools: [
                // UPDATE: New icons
                { name: 'Maya', icon: ICONS.MAYA },
                { name: 'Blender', icon: ICONS.BLENDER },
                
            ],
            files: [
                { 
                    type: 'image', 
                    url: "Portfolio/3D/Chess/Render Chess 1.jpg",
                    caption: "Game of Chess",
                    description: "The final shot after lighting and texturing."
                },
                { 
                    type: 'slider', 
                    before: "Portfolio/3D/Chess/Chess UV.avif",
                    after: "Portfolio/3D/Chess/chess wire.avif",
                    beforeLabel: "Wireframe",
                    afterLabel: "UV",
                    caption: "Comparison: Final vs. UV Wireframe",
                    description: "Drag the slider to compare the final render with the underlying UV map."
                }
            ],
            thumbnail: "Portfolio/3D/Chess/Render Chess 1.jpg",
            caseStudyUrl: null
        },
        {
            id: "project3", 
            caption: "Invitation for the Big Day",
            description: "These are some Invitation Videos for the Event 'Save the Date'.",
            tags: ["graphics", "motion"],
            tools: [
                // UPDATE: New icons
                { name: 'After Effects', icon: ICONS.AFTER_EFFECTS },
                { name: 'Illustrator', icon: ICONS.ILLUSTRATOR }
            ],
            files: [{ 
                type: 'video', url: "Portfolio/Motion/Marriage/Std 3.webm"
            },
            { 
                type: 'video', url: "Portfolio/Motion/Marriage/Std.webm"
            },
            { 
                type: 'video', url: "Portfolio/Motion/Marriage/Std 2.webm"
            }

            ],
            thumbnail: "Portfolio/Motion/Marriage/Thumbnail.png",
            caseStudyUrl: "#"
        },
        {
            id: "project4", 
            caption: "Dirty Utensil",
            description: "IDK learnt it from some online course, good stuff",
            tags: ["3d"],
            tools: [
                // UPDATE: New icons
                { name: 'Maya', icon: ICONS.MAYA },
                { name: 'Substance Painter', icon: ICONS.SUBSTANCE_PAINTER },
                { name: 'Marmoset Toolbag', icon: ICONS.MARMOSET }
            ],
            files: [{ type: 'image', url: "Portfolio/3D/Utensil/Render 1.png" },
                    { type: 'image', url: "Portfolio/3D/Utensil/Render 2.png" },
                    { type: 'image', url: "Portfolio/3D/Utensil/Render 3.png" },
            ],
            thumbnail: "Portfolio/3D/Utensil/Render 1.png",
            caseStudyUrl: null
        },
        {
            id: "project5", 
            caption: "Horror GFX",
            description: "Was asked to make a GFX icon for SCP based game",
            tags: ["graphics"],
            tools: [
                // UPDATE: New icons
                { name: 'Photoshop', icon: ICONS.PHOTOSHOP },
            ],
            files: [{ type: 'image', url: "Portfolio/Graphic/Game Logos/Horror GFX.png" },
            ],
            thumbnail: "Portfolio/Graphic/Game Logos/Horror GFX.png",
            caseStudyUrl: null
        },
        {
            id: "project6", 
            caption: "Nature GFX",
            description: "Was asked to make a GFX icon for Adventure based game",
            tags: ["graphics"],
            tools: [
                // UPDATE: New icons
                { name: 'Photoshop', icon: ICONS.PHOTOSHOP },
            ],
            files: [{ type: 'image', url: "Portfolio/Graphic/Game Logos/Wildlife GFX.png"},],
            thumbnail: "Portfolio/Graphic/Game Logos/Wildlife GFX.png",
            caseStudyUrl: null
        },
        {
            id: 'live1', caption: 'Smriti', description: 'Live action short film for a Competition.', tags: ['live'], 
            tools: [{ name: 'Premiere Pro', icon: ICONS.PREMIERE_PRO }],
            files: [ { type: 'embed', url: 'https://drive.google.com/file/d/1cjhTnD9lp6dFNPByDucGBw6qx1K0tbVn/view?usp=drive_link' } ],
            thumbnail: 'Portfolio/Live Action Thumbnails/Smriti.png',
        },
        {
            id: 'live2', caption: 'School Project, Music Video', description: 'Music video project.', tags: ['live'], 
            // UPDATE: Added requested tool
            tools: [{ name: 'Premiere Pro', icon: ICONS.PREMIERE_PRO }],
            files: [ { type: 'embed', url: 'https://drive.google.com/file/d/12V2DCK0RVkH04rPWgCrEl03CksKhWXBr/view?usp=drive_link' } ],
            thumbnail: 'Portfolio/Live Action Thumbnails/I worry.png',
        },
        {
            id: 'live3', caption: 'Rang (with Motion Graphics)', description: 'Live action + motion graphics.', tags: ['live', 'motion'], 
            // UPDATE: Added requested tool
            tools: [{ name: 'After Effects', icon: ICONS.AFTER_EFFECTS }],
            files: [ { type: 'embed', url: 'https://drive.google.com/file/d/1gSdjfouUxhe669ReEXZdV3kQM_p_BtMS/view?usp=drive_link' } ],
            thumbnail: 'Portfolio/Live Action Thumbnails/Rang.png',
        },
        {
            id: 'live4', caption: 'Lack of', description: 'Live action piece.', tags: ['live'], 
            // UPDATE: Added requested tool
            tools: [{ name: 'Premiere Pro', icon: ICONS.PREMIERE_PRO }],
            files: [ { type: 'embed', url: 'https://drive.google.com/file/d/1-OVP217GzKXAJ6f1KASnaRe2e9XCrSHG/view?usp=drive_link' } ],
            thumbnail: 'Portfolio/Live Action Thumbnails/Lack Of.png',
        },
        {
            id: 'live5', caption: 'KeyGenie (VFX + Live Action)', description: 'VFX plus live action.', tags: ["live","vfx"], 
            // UPDATE: Added requested tools
            tools: [
                { name: 'Nuke', icon: ICONS.NUKE },
                { name: 'Houdini', icon: ICONS.HOUDINI },
                { name: 'After Effects', icon: ICONS.AFTER_EFFECTS },
                { name: 'Blender', icon: ICONS.BLENDER },
            ],
            files: [ { type: 'embed', url: 'https://drive.google.com/file/d/1knQ2yOpeLwQ9hFicbvCN1QimoIu9b58v/view?usp=drive_link' } ],
            thumbnail: 'Portfolio/Live Action Thumbnails/KeyGenie.png',
        },
        {
            id: 'live6', caption: 'Kalam', description: 'Live action film.', tags: ['live'], 
            // UPDATE: Added requested tool
            tools: [{ name: 'Premiere Pro', icon: ICONS.PREMIERE_PRO }],
            files: [ { type: 'embed', url: 'https://drive.google.com/file/d/1D1Uh7e9wNRdIIeQlKKb432gEiHNBfrS-/view?usp=drive_link' } ],
            thumbnail: 'Portfolio/Live Action Thumbnails/Kalam.png',
        }
    ],
    // This array now drives the order and content of the highlights carousel
    highlights: ["project1", "project2", "project3", "project4", "live1", "live2", "live3", "live4", "live5", "live6"],
    services: [
        {
            icon: `<svg class="w-12 h-12 mx-auto mb-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>`,
            title: "Art Direction",
            description: "Crafting the visual identity and mood for a project, from initial concept and mood boards to final execution."
        },
        {
            icon: `<svg class="w-12 h-12 mx-auto mb-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path></svg>`,
            title: "3D & VFX",
            description: "Bringing ideas to life with modeling, texturing, lighting, and visual effects to create immersive, believable worlds."
        },
        {
            icon: `<svg class="w-12 h-12 mx-auto mb-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
            title: "Motion Design",
            description: "Creating compelling movement and energy through animation, from title sequences to full promotional trailers."
        }
    ],
    collaborations: [
        { type: 'text', content: "Indie Games" },
        { type: 'icon', content: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>` },
        { type: 'text', content: "Short Films" },
        { type: 'icon', content: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>` },
        { type: 'text', content: "Music Videos" },
        { type: 'icon', content: `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='2' y='4' width='20' height='16' rx='2'/><path d='M10 9h4v6h-4z'/></svg>` }
    ]
};

// --- Make config globally available for inline scripts ---
window.portfolioConfig = portfolioConfig;

// --- 2. SITE INITIALIZATION & LOGIC ---
const $ = (q, ctx = document) => ctx.querySelector(q);
const $$ = (q, ctx = document) => Array.from(ctx.querySelectorAll(q));
let currentProjectInView = null, currentMediaIndex = 0;
const originalTitle = document.title;
const showcaseReelParallaxInner = $('#showcase-reel-parallax-inner');

document.addEventListener("DOMContentLoaded", () => {
    $("#year").textContent = new Date().getFullYear();
    populateContent();
    setupEventListeners();
    initScrollObserver();
    normalizeTextContent();
});

function populateContent() {
    const heroVideoElement = $('.hero-media-element');
    if (heroVideoElement) {
        if (portfolioConfig.heroVideo.poster) heroVideoElement.setAttribute('poster', portfolioConfig.heroVideo.poster);
        heroVideoElement.setAttribute('preload', 'none');
        const makeSource = (url, media) => {
            if (!url) return '';
            const ext = (url.split('.').pop() || '').toLowerCase();
            const typeMap = { mp4: 'video/mp4', webm: 'video/webm', mov: 'video/quicktime' };
            const typeAttr = typeMap[ext] ? ` type="${typeMap[ext]}"` : '';
            const mediaAttr = media ? ` media="${media}"` : '';
            return `<source src="${url}"${typeAttr}${mediaAttr}>`;
        };
        heroVideoElement.innerHTML = `
            ${makeSource(portfolioConfig.heroVideo.desktop, '(min-width: 821px)')}
            ${makeSource(portfolioConfig.heroVideo.mobile, '(max-width: 820px)')}
        `;
        heroVideoElement.load();
    }
    
    $('#about-image').src = portfolioConfig.about.image;
    $('#about-title').textContent = portfolioConfig.about.title;
    $('#about-text').textContent = portfolioConfig.about.text;
    $('#contact-title').textContent = portfolioConfig.contact.title;
    $('#contact-subtitle').textContent = portfolioConfig.contact.subtitle;
    
    const emailLink = $('#contact-email');
    emailLink.href = `mailto:${portfolioConfig.contact.email}`;
    emailLink.textContent = portfolioConfig.contact.email;
    
    const phoneLink = $('#contact-phone');
    phoneLink.href = `tel:${portfolioConfig.contact.phone}`;
    phoneLink.textContent = portfolioConfig.contact.phone;

    const track = $('#highlights-track');
    if (track) {
        const slidesHTML = portfolioConfig.highlights.map(id => {
            const project = portfolioConfig.projects.find(p => p.id === id);
            if (!project) return '';
            return `
                <div class="highlight-slide" data-project-id="${project.id}">
                    <div class="highlight-slide-content" style="background-image: url('${project.thumbnail}')">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                        <div class="relative z-20 p-6 flex flex-col justify-end h-full">
                            <h3 class="font-bold text-2xl">${project.caption}</h3>
                            <p class="text-neutral-300 text-sm mt-2">${project.description.substring(0, 120)}...</p>
                        </div>
                    </div>
                </div>`;
        }).join('');
        track.innerHTML = slidesHTML;
    }

    const showcaseData = portfolioConfig.projects.find(p => p.id === 'showcase');
    if (showcaseReelParallaxInner && showcaseData?.reelVideo) {
        showcaseReelParallaxInner.innerHTML = `
            <video autoplay muted loop playsinline preload="metadata" class="w-full h-full object-cover" ${showcaseData.poster ? `poster="${showcaseData.poster}"` : ''}>
                <source src="${showcaseData.reelVideo}" type="video/webm">
            </video>
            <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 class="text-4xl font-bold tracking-wider">SHOWCASE REEL</h3>
            </div>`;
    }

    $('#services-grid').innerHTML = portfolioConfig.services.map(service => `
        <div class="service-card rounded-xl p-8 text-center">
            ${service.icon}
            <h4 class="text-xl font-bold mb-2">${service.title}</h4>
            <p class="text-neutral-400">${service.description}</p>
        </div>
    `).join('');

    $('#collaborations-grid').innerHTML = portfolioConfig.collaborations.map(collab => {
        if (collab.type === 'text') return `<span class="font-bold text-2xl">${collab.content}</span>`;
        if (collab.type === 'icon') return collab.content;
        return '';
    }).join('');

    renderPortfolioGrid('all');
}

let __portfolioFilter = 'all';
let __portfolioVisibleCount = 0;
let __portfolioInitialCount = 0;

function getGridColumns() {
    const grid = document.getElementById('portfolio-grid');
    if (!grid) return 1;
    const styles = window.getComputedStyle(grid);
    const cols = styles.getPropertyValue('grid-template-columns');
    return cols ? cols.split(' ').length : 1;
}

function computeGridPaging() {
    const cols = getGridColumns();
    let rowsPerPage = (cols === 1) ? 3 : (cols === 2) ? 4 : 2;
    return { pageSize: rowsPerPage * cols };
}

function renderPortfolioGrid(filter) {
    const grid = $("#portfolio-grid");
    const allProjects = (filter === 'all')
        ? portfolioConfig.projects.filter(p => p.id !== 'showcase')
        : portfolioConfig.projects.filter(p => p.tags && p.tags.includes(filter));
    
    const { pageSize } = computeGridPaging();
    if (__portfolioVisibleCount === 0 || filter !== __portfolioFilter) {
        __portfolioVisibleCount = pageSize;
        __portfolioInitialCount = pageSize;
        __portfolioFilter = filter;
    }

    const projectsToRender = allProjects.slice(0, __portfolioVisibleCount);
    grid.innerHTML = projectsToRender.map((project, index) => `
        <div class="portfolio-item group" data-project-id="${project.id}" role="button" tabindex="0" style="animation-delay: ${index * 40}ms">
            <img loading="lazy" src="${project.thumbnail}" alt="${project.caption}" />
            <div class="absolute top-3 right-3 flex gap-2">
                ${project.tags?.map(tag => `<span class="bg-black/50 text-white text-[10px] font-semibold px-2 py-1 rounded-full">${tag.toUpperCase()}</span>`).join('') || ''}
            </div>
            <div class="portfolio-overlay absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span class="text-white font-bold">${project.caption}</span>
            </div>
        </div>`).join('');

    updatePaginationButtons(allProjects.length, pageSize);
}

function updatePaginationButtons(totalProjects, pageSize) {
    const loadMoreBtn = $('#portfolioLoadMore');
    const showLessBtn = $('#portfolioShowLess');

    loadMoreBtn.style.display = (__portfolioVisibleCount < totalProjects) ? 'inline-block' : 'none';
    showLessBtn.style.display = (__portfolioVisibleCount > __portfolioInitialCount && totalProjects > __portfolioInitialCount) ? 'inline-block' : 'none';

    loadMoreBtn.onclick = () => {
        __portfolioVisibleCount = Math.min(__portfolioVisibleCount + pageSize, totalProjects);
        renderPortfolioGrid(__portfolioFilter);
    };

    showLessBtn.onclick = () => {
        __portfolioVisibleCount = __portfolioInitialCount;
        renderPortfolioGrid(__portfolioFilter);
        $('#portfolio').scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
}

function setupEventListeners() {
    window.addEventListener('load', () => {
        const loader = $('#loader-overlay');
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 500);
    });
    
    window.addEventListener('scroll', () => {
        updateNavOnScroll();
        handleScrollEffects();
    });

    const cursor = $('#custom-cursor');
    if (window.matchMedia("(pointer: fine)").matches) {
        window.addEventListener('mousemove', e => {
            document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
            document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        });
        
        $$('a, button, input[type="range"], .portfolio-item, .highlight-slide, .service-card, .slider-handle').forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('is-interactive'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('is-interactive'));
        });
    } else {
        cursor.style.display = 'none';
        document.body.style.cursor = 'auto';
    }
    
    const navMenu = $("#navMenu");
    $("#hamburger")?.addEventListener("click", () => {
        const isHidden = navMenu.classList.contains('hidden');
        if (isHidden) {
            navMenu.classList.remove('hidden');
            setTimeout(() => {
                navMenu.classList.remove('opacity-0', '-translate-y-4');
            }, 10);
        } else {
            navMenu.classList.add('opacity-0', '-translate-y-4');
            setTimeout(() => {
                navMenu.classList.add('hidden');
            }, 300);
        }
    });
    
    $$('#navMenu a, a.hero-cta, #main-nav a[href^="#"]').forEach(a => a.addEventListener("click", e => {
        e.preventDefault();
        navMenu.classList.add('opacity-0', '-translate-y-4');
        setTimeout(() => navMenu.classList.add('hidden'), 300);
        const targetElement = $(a.getAttribute("href"));
        if (targetElement) {
            window.scrollTo({ top: targetElement.offsetTop, behavior: "smooth" });
        }
    }));

    $$("[data-tab]").forEach(btn => btn.addEventListener("click", () => {
        $$("[data-tab]").forEach(b => b.classList.remove("bg-white", "text-black"));
        btn.classList.add("bg-white", "text-black");
        __portfolioVisibleCount = 0;
        renderPortfolioGrid(btn.dataset.tab);
    }));

    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (__portfolioVisibleCount === __portfolioInitialCount) {
                __portfolioVisibleCount = 0; 
            }
            renderPortfolioGrid(__portfolioFilter);
        }, 150);
    });

    const portfolioGrid = $('#portfolio-grid');
    portfolioGrid.addEventListener('mouseover', e => {
        const item = e.target.closest('.portfolio-item');
        if (item) {
            portfolioGrid.classList.add('is-focused');
            $$('.portfolio-item', portfolioGrid).forEach(i => i.classList.remove('is-active'));
            item.classList.add('is-active');
        }
    });
    portfolioGrid.addEventListener('mouseout', () => {
        portfolioGrid.classList.remove('is-focused');
        const activeItem = $('.portfolio-item.is-active', portfolioGrid);
        if(activeItem) activeItem.classList.remove('is-active');
    });

    document.body.addEventListener('click', e => {
        const target = e.target.closest('[data-project-id]');
        if (target) openCinematicViewer(target.dataset.projectId);
    });
    
    $('#closeViewerBtn')?.addEventListener('click', closeCinematicViewer);
    $('#cinematicViewerOverlay')?.addEventListener('click', closeCinematicViewer);
    document.addEventListener("keydown", e => {
        if (!$('#cinematicViewerOverlay')?.classList.contains('is-open')) return;
        if (e.key === "Escape") closeCinematicViewer();
        if (e.key === "ArrowLeft") showPrevMedia();
        if (e.key === "ArrowRight") showNextMedia();
    });
    $('#prevBtn')?.addEventListener('click', e => { e.stopPropagation(); showPrevMedia(); });
    $('#nextBtn')?.addEventListener('click', e => { e.stopPropagation(); showNextMedia(); });
    
    document.addEventListener('visibilitychange', () => {
        document.title = document.hidden ? "Come back! 👋" : originalTitle;
    });

    $('#scrollToTop')?.addEventListener('click', e => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}


function openCinematicViewer(projectId) {
    currentProjectInView = portfolioConfig.projects.find(p => p.id === projectId);
    if (!currentProjectInView) return;

    if (currentProjectInView.externalUrl && (!currentProjectInView.files || currentProjectInView.files.length === 0)) {
        window.open(currentProjectInView.externalUrl, '_blank');
        return;
    }
    currentMediaIndex = 0;
    updateGalleryView();
    document.body.classList.add('viewer-open');
    $('#cinematicViewerOverlay').classList.add('is-open');
    document.body.style.overflow = 'hidden';

    window.__lastFocusedEl = document.activeElement;
    $('#main-content')?.setAttribute('aria-hidden', 'true');
    const overlay = $('#cinematicViewerOverlay');
    const focusable = $$('button, [href], [tabindex]:not([tabindex="-1"])', overlay);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first?.focus();
    
    overlay.addEventListener('keydown', function trap(e) {
        if (e.key !== 'Tab') return;
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });
}

function closeCinematicViewer() {
    document.body.classList.remove('viewer-open');
    $('#cinematicViewerOverlay')?.classList.remove('is-open');
    document.body.style.overflow = '';
    $('#viewerMediaWrapper').innerHTML = '';
    $('#main-content')?.removeAttribute('aria-hidden');
    window.__lastFocusedEl?.focus();
}

function toDrivePreviewUrl(url) {
    if (!url.includes('drive.google.com')) return url;
    const match = url.match(/\/file\/d\/([^/]+)\//);
    return match ? `https://drive.google.com/file/d/${match[1]}/preview` : url;
}

function createEmbedElement(url) {
    return `<iframe class="viewer-media" src="${toDrivePreviewUrl(url)}" allow="autoplay; fullscreen" allowfullscreen frameborder="0"></iframe>`;
}

function createMediaElement(url, caption) {
    const isVideo = /\.(mp4|webm|mov)$/i.test(url);
    if (isVideo) {
        return `<video src="${url}" autoplay loop muted playsinline class="viewer-media"></video>`;
    }
    return `<img src="${url}" alt="${caption}" class="viewer-media" />`;
}

function updateGalleryView() {
    const file = currentProjectInView.files[currentMediaIndex];
    const wrapper = $('#viewerMediaWrapper');

    if (file.type === 'slider') {
        const beforeText = file.beforeLabel || portfolioConfig.sliderLabels.before;
        const afterText = file.afterLabel || portfolioConfig.sliderLabels.after;
        wrapper.innerHTML = `
            <div class="comparison-slider" role="region" aria-label="Before and after comparison slider">
                <div class="before-label">${beforeText}</div>
                <div class="before-media">${createMediaElement(file.before, beforeText)}</div>
                <div class="after-image-container">
                    <div class="after-media">${createMediaElement(file.after, afterText)}</div>
                </div>
                <div class="after-label">${afterText}</div>
                <div class="slider-divider" aria-hidden="true"></div>
                <div class="slider-handle" role="slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" aria-label="Reveal"></div>
            </div>
        `;
        initSlider(wrapper.querySelector('.comparison-slider'));
    } else {
        wrapper.innerHTML = (file.type === 'embed') 
            ? createEmbedElement(file.url)
            : createMediaElement(file.url, file.caption || currentProjectInView.caption);
    }

    $('#viewerCaption').textContent = file.caption || currentProjectInView.caption;
    $('#viewerDescription').textContent = file.description || currentProjectInView.description;
    
    const toolsWrap = $('#viewerTools');
    if (toolsWrap) {
        const tools = currentProjectInView.tools || [];
        toolsWrap.innerHTML = tools.map(t => {
            const icon = (t.icon && t.icon.trim().startsWith('<')) ? t.icon : `<img src="${t.icon}" alt="${t.name} icon" />`;
            return `<span role="listitem" title="${t.name}">${icon}<span class="tool-name">${t.name}</span></span>`;
        }).join('');
    }
    
    $('#viewerProgressIndicator').style.width = `${(currentMediaIndex + 1) / currentProjectInView.files.length * 100}%`;
    $('#prevBtn').style.display = currentMediaIndex > 0 ? 'flex' : 'none';
    $('#nextBtn').style.display = currentMediaIndex < currentProjectInView.files.length - 1 ? 'flex' : 'none';
}

function initSlider(slider) {
    const afterContainer = slider.querySelector('.after-image-container');
    const handle = slider.querySelector('.slider-handle');
    const divider = slider.querySelector('.slider-divider');
    let isDragging = false;

    const moveSlider = (x) => {
        const rect = slider.getBoundingClientRect();
        let pos = Math.max(0, Math.min(100, (x - rect.left) / rect.width * 100));
        handle.style.left = `${pos}%`;
        afterContainer.style.clipPath = `inset(0 ${100 - pos}% 0 0)`;
        divider.style.left = `${pos}%`;
        handle.setAttribute('aria-valuenow', Math.round(pos));
    };

    const onPointerMove = (e) => isDragging && moveSlider(e.clientX);
    const onPointerUp = () => {
        isDragging = false;
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('pointerup', onPointerUp);
    };
    
    slider.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        isDragging = true;
        moveSlider(e.clientX);
        window.addEventListener('pointermove', onPointerMove, { passive: true });
        window.addEventListener('pointerup', onPointerUp, { passive: true });
    });
    
    handle.addEventListener('keydown', (e) => {
        const current = parseFloat(handle.style.left) || 50;
        const step = (e.shiftKey ? 10 : 2);
        let next = current;
        if (e.key === 'ArrowLeft') next = current - step;
        if (e.key === 'ArrowRight') next = current + step;
        if (next !== current) {
            e.preventDefault();
            const newPos = Math.max(0, Math.min(100, next));
            handle.style.left = `${newPos}%`;
            afterContainer.style.clipPath = `inset(0 ${100 - newPos}% 0 0)`;
            divider.style.left = `${newPos}%`;
            handle.setAttribute('aria-valuenow', Math.round(newPos));
        }
    });

    moveSlider(slider.getBoundingClientRect().left + slider.getBoundingClientRect().width * 0.7);
}

function showPrevMedia() {
    if (currentMediaIndex > 0) { currentMediaIndex--; updateGalleryView(); }
}

function showNextMedia() {
    if (currentProjectInView && currentMediaIndex < currentProjectInView.files.length - 1) { currentMediaIndex++; updateGalleryView(); }
}

function updateNavOnScroll() {
    $('#main-nav').classList.toggle('bg-black/50', window.scrollY > 50);
    $('#main-nav').classList.toggle('backdrop-blur-md', window.scrollY > 50);
}

function handleScrollEffects() {
    const scrollY = window.scrollY;
    if (showcaseReelParallaxInner) {
        const rect = showcaseReelParallaxInner.parentElement.getBoundingClientRect();
        const start = rect.top + scrollY;
        const end = start + rect.height;
        if (scrollY > start - window.innerHeight && scrollY < end) {
            const progress = (scrollY - (start - window.innerHeight)) / (rect.height + window.innerHeight);
            showcaseReelParallaxInner.style.transform = `translateY(${ (progress - 0.5) * -100}px)`;
        }
    }
    $('#scrollToTop')?.classList.toggle('is-visible', scrollY > 400);
}

function initScrollObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                if (!entry.target.classList.contains('section-title')) {
                   observer.unobserve(entry.target);
                }
            }
        });
    }, { threshold: 0.1 });
    
    $$(".fade-in-section, .section-title").forEach(el => observer.observe(el));
}

function normalizeTextContent() {
    try {
        document.title = 'Kunal Sethi — Cinematic Visual Designer';
        const heroTagline = $('.hero-subtitle');
        if (heroTagline) heroTagline.textContent = 'Cinematic Visual Designer • 3D • VFX • Motion • Graphics';
        $('#resume-nav').textContent = 'Résumé';
        $('#resume-nav-mobile').textContent = 'Résumé';
        $('#resume-link span').textContent = 'Download Résumé';
        $$('a[href="#contact"]').forEach(a => {
            if (a.textContent.length > 0 && a.textContent.includes('Talk')) a.textContent = "Let’s Talk";
        });
    } catch (e) {
        console.warn("Could not normalize all text content.", e);
    }
}

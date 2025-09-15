// --- 1. MASTER CONFIGURATION & CUSTOMIZATION GUIDE ---
// === EDIT ME: All content and media live here ===
// Put your files in these folders (or change paths to your liking):
// - Logos for software icons: `Logos/` (e.g., Logos/Photoshop.png.png)
// - Portfolio media: `Portfolio/...` (thumbnails + images/videos per project)
// - Hero videos/poster: in the root alongside this file (or set paths below)
// Notes:
// - poster is the image shown before video starts or if it fails to load
// - You can add/remove projects, files, and tools freely
const portfolioConfig = {
    portfolio: {
        pageSize: 6
    },
    resume: {
        file: 'Kunal_Sethi_Resume.pdf',
        label: 'Download Rï¿½sumï¿½'
    },
    // Default labels for the comparison slider. Can be overridden per file.
    sliderLabels: {
        before: "BEFORE",
        after: "AFTER"
    },
    heroVideo: {
        desktop: "Bg Movie.webm",
        mobile: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
        poster: "Portfolio/3D/Chess/Render Chess 1.jpg" // optional; place next to the desktop video (or change path)
    },
    about: {
        title: "A Bit About Me",
        text: "Iï¿½m a visual designer who lives at the intersection of art and tech. My passion is crafting cinematic visuals that don't just look good, but feel rightï¿½evoking emotion and telling a story in every frame. For me, collaboration isn't just part of the job; it's the best part. Let's build something unforgettable together.",
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
                { name: 'Illustrator', icon: 'Logos/Photoshop.png.png' },
                { name: 'After Effects', icon: 'Logos/After Effects.png.png' }
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
                { name: 'Maya', icon: 'Logos/Maya.png.jpg' },
                { name: 'Blender', icon: 'Logos/3dsmax.png.png' },
                
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
                    // Provide any mix of images/videos/gifs
                    before: "Portfolio/3D/Chess/Chess UV.avif",
                    after: "Portfolio/3D/Chess/chess wire.avif",
                    // NEW: Per-slider labels (fallback to global defaults if omitted)
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
                { name: 'After Effects', icon: 'Logos/After Effects.png.png' },
                { name: 'Illustrator', icon: 'Logos/Premiere Pro.png.png' }
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
                { name: 'Maya', icon: 'Logos/Maya.png.jpg' },
                { name: 'Substance Painter', icon: 'Logos/Premiere Pro.png.png' },
                { name: 'Marmoset Toolbag', icon: 'Logos/Premiere Pro.png.png' }
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
                { name: 'Photoshop', icon: 'Logos/Photoshop.png.png' },
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
                { name: 'Photoshop', icon: 'Logos/Photoshop.png.png' },
                           ],
            files: [{ type: 'image', url: "Portfolio/Graphic/Game Logos/Wildlife GFX.png"},],
            thumbnail: "Portfolio/Graphic/Game Logos/Wildlife GFX.png",
            caseStudyUrl: null
        }


    ],
    highlights: ["project1", "project2", "project3", "project4","live1","live2","live3","live4","live5","live6"],
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
        },
        {
            icon: `<svg class=\"w-12 h-12 mx-auto mb-4 text-neutral-400\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M4 4h16v12H4z\"/><path d=\"M8 20h8\"/></svg>`,
            title: "Music Videos",
            description: "End-to-end editing, motion graphics, and finishing for music videos."
        },
        {
            icon: `<svg class=\"w-12 h-12 mx-auto mb-4 text-neutral-400\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9 19V6l12-2v13\"/><circle cx=\"6\" cy=\"18\" r=\"3\"/></svg>`,
            title: "Sound & Score",
            description: "Audio editing, sound design, and original scoring to complement visuals."
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

// --- Add Live Action entries (external Google Drive links) ---
try {
    portfolioConfig.projects.push(
        {
            id: 'live1', caption: 'Smriti', description: 'Live action short film for a Competition.', tags: ['live'], tools: [{ name: 'Premiere Pro', icon: 'Logos/Photoshop.png.png' }, ],
            files: [ { type: 'embed', url: 'https://drive.google.com/file/d/1cjhTnD9lp6dFNPByDucGBw6qx1K0tbVn/view?usp=drive_link' } ],
            thumbnail: 'Portfolio/Live Action Thumbnails/Smriti.png',
            caseStudyUrl: null
        },
        {
            id: 'live2', caption: 'School Project, Music Video', description: 'Music video project.', tags: ['live'], tools: [],
            files: [ { type: 'embed', url: 'https://drive.google.com/file/d/12V2DCK0RVkH04rPWgCrEl03CksKhWXBr/view?usp=drive_link' } ],
            thumbnail: 'Portfolio/Live Action Thumbnails/I worry.png',
            caseStudyUrl: null
        },
        {
            id: 'live3', caption: 'Rang (with Motion Graphics)', description: 'Live action + motion graphics.', tags: ['live'], tools: [],
            files: [ { type: 'embed', url: 'https://drive.google.com/file/d/1gSdjfouUxhe669ReEXZdV3kQM_p_BtMS/view?usp=drive_link' } ],
            thumbnail: 'Portfolio/Live Action Thumbnails/Rang.png',
            caseStudyUrl: null
        },
        {
            id: 'live4', caption: 'Lack of', description: 'Live action piece.', tags: ['live'], tools: [],
            files: [ { type: 'embed', url: 'https://drive.google.com/file/d/1-OVP217GzKXAJ6f1KASnaRe2e9XCrSHG/view?usp=drive_link' } ],
            thumbnail: 'Portfolio/Live Action Thumbnails/Lack Of.png',
            caseStudyUrl: null
        },
        {
            id: 'live5', caption: 'KeyGenie (VFX + Live Action)', description: 'VFX plus live action.', tags: ["live","vfx"], tools: [],
            files: [ { type: 'embed', url: 'https://drive.google.com/file/d/1knQ2yOpeLwQ9hFicbvCN1QimoIu9b58v/view?usp=drive_link' } ],
            thumbnail: 'Portfolio/Live Action Thumbnails/KeyGenie.png',
            caseStudyUrl: null
        },
        {
            id: 'live6', caption: 'Kalam', description: 'Live action film.', tags: ['live'], tools: [],
            files: [ { type: 'embed', url: 'https://drive.google.com/file/d/1D1Uh7e9wNRdIIeQlKKb432gEiHNBfrS-/view?usp=drive_link' } ],
            thumbnail: 'Portfolio/Live Action Thumbnails/Kalam.png',
            caseStudyUrl: null
        }
    );
} catch {}


// --- 2. SITE INITIALIZATION & LOGIC ---
const $ = (q, ctx = document) => ctx.querySelector(q);
const $$ = (q, ctx = document) => Array.from(ctx.querySelectorAll(q));
let currentProjectInView = null, currentMediaIndex = 0;
const originalTitle = document.title;
const showcaseReelParallaxInner = $('#showcase-reel-parallax-inner');

document.addEventListener("DOMContentLoaded", () => {
    $("#year").textContent = new Date().getFullYear();
    // Normalize hero tagline text to avoid any encoding artifacts in source HTML
    const heroTagline = document.querySelector('#top p');
    if (heroTagline) heroTagline.textContent = 'Cinematic Visual Designer ? 3D ? VFX ? Motion ? Graphics';
    populateContent();
    setupEventListeners();
    initScrollObserver();
});

function populateContent() {
    const heroVideoElement = $('.hero-media-element');
    // Ensure poster + no eager preload for performance
    try {
        if (portfolioConfig.heroVideo.poster) heroVideoElement.setAttribute('poster', portfolioConfig.heroVideo.poster);
        heroVideoElement.setAttribute('preload', 'none');
    } catch {}
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
    // Fix title and tagline text to avoid encoding issues
    try {
        document.title = 'Kunal Sethi ï¿½ Cinematic Visual Designer';
        const heroTag = document.querySelector('#top p.font-medium');
        if (heroTag) heroTag.textContent = 'Cinematic Visual Designer ï¿½ 3D ï¿½ VFX ï¿½ Motion ï¿½ Graphics';
    } catch {}
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
    // Build highlights slides
    const slidesHTML = portfolioConfig.highlights.map(id => {
        const project = portfolioConfig.projects.find(p => p.id === id);
        if (!project) return '';
        return `
            <div class="highlight-slide" data-project-id="${project.id}">
                <div class="highlight-slide-content" style="background-image: url('${project.thumbnail}')">
                       <div class="relative z-10 p-6 flex flex-col justify-end h-full">
                            <h3 class="font-bold text-2xl">${project.caption}</h3>
                            <p class="text-neutral-300 text-sm mt-2">${project.description.substring(0, 120)}...</p>
                       </div>
                </div>
            </div>`;
    }).join('');
    track.innerHTML = slidesHTML;
    const showcaseData = portfolioConfig.projects.find(p => p.id === 'showcase');
    if (showcaseReelParallaxInner && showcaseData?.reelVideo) {
        showcaseReelParallaxInner.innerHTML = `
            <video autoplay muted loop playsinline preload="metadata" class="w-full h-full object-cover" ${showcaseData.poster ? `poster="${showcaseData.poster}"` : ''}>
                <source src="${showcaseData.reelVideo}" type="video/mp4">
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
        if (collab.type === 'text') {
            return `<span class="font-bold text-2xl">${collab.content}</span>`;
        }
        if (collab.type === 'icon') {
            return collab.content;
        }
    }).join('');
    __portfolioFilter = 'all';
    renderPortfolioGrid(__portfolioFilter);
    // Resume link
    const resume = portfolioConfig.resume;
    const resumeLink = $('#resume-link');
    if (resumeLink) {
        const defaultResume = 'Portfolio/Resume/Kunal_Sethi_Resume.pdf';
        const href = (resume && resume.file) ? resume.file : defaultResume;
        resumeLink.href = href;
        if (resume && resume.label) {
            resumeLink.querySelector('span').textContent = resume.label;
        }
    }
}

let __portfolioFilter = 'all';
let __portfolioVisibleCount = 0;
let __portfolioInitialCount = 0;

function getGridColumns() {
    const grid = document.getElementById('portfolio-grid');
    if (!grid) return 1;
    const styles = window.getComputedStyle(grid);
    const cols = styles.getPropertyValue('grid-template-columns');
    if (!cols) return 1;
    return cols.split(' ').filter(Boolean).length || 1;
}

function computeGridPaging() {
    const cols = getGridColumns();
    // Rules:
    // - 1 column: 3 boxes per page
    // - 2 columns: 4 rows (8 items) per page
    // - 3+ columns: 2 rows per page
    let rowsPerPage = 2;
    if (cols === 1) rowsPerPage = 3;
    else if (cols === 2) rowsPerPage = 4;
    const pageSize = rowsPerPage * cols;
    return { cols, rowsPerPage, pageSize };
}

function renderPortfolioGrid(filter) {
    const grid = $("#portfolio-grid");
    const allProjects = (filter === 'all')
        ? portfolioConfig.projects.filter(p => p.id !== 'showcase')
        : portfolioConfig.projects.filter(p => p.tags && p.tags.includes(filter));
    // Smaller pages on phones to avoid long scroll
    const { pageSize } = computeGridPaging();
    if (__portfolioVisibleCount === 0) {
        __portfolioVisibleCount = pageSize;
        __portfolioInitialCount = pageSize;
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
    const btn = $('#portfolioLoadMore');
    const lessBtn = $('#portfolioShowLess');
    if (btn) {
        if (__portfolioVisibleCount >= allProjects.length) {
            btn.style.display = 'none';
        } else {
            btn.style.display = 'inline-block';
            btn.onclick = () => { __portfolioVisibleCount += pageSize; renderPortfolioGrid(filter); };
        }
    }
    if (lessBtn) {
        if (__portfolioVisibleCount > __portfolioInitialCount) {
            lessBtn.style.display = 'inline-block';
            lessBtn.onclick = () => {
                __portfolioVisibleCount = __portfolioInitialCount;
                renderPortfolioGrid(filter);
                const section = document.getElementById('portfolio');
                if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            };
        } else {
            lessBtn.style.display = 'none';
        }
    }
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
    const hamburger = $("#hamburger");
    hamburger?.addEventListener("click", () => {
        navMenu.classList.toggle('hidden');
        setTimeout(() => {
           navMenu.classList.toggle('opacity-0');
           navMenu.classList.toggle('-translate-y-4');
        }, 10)
    });
    
    $$('#navMenu a, #main-nav a[href^="#"], a.scroll-to-top').forEach(a => a.addEventListener("click", e => {
        e.preventDefault();
        navMenu.classList.add('hidden', 'opacity-0', '-translate-y-4');
        const targetElement = $(a.getAttribute("href"));
        if (targetElement) {
            window.scrollTo({ top: targetElement.offsetTop, behavior: "smooth" });
        }
    }));

    // Prevent anchors with href="#" from jumping to top
    document.body.addEventListener('click', (e) => {
        const dummy = e.target.closest('a[href="#"]');
        if (dummy) e.preventDefault();
    });

    $$("[data-tab]").forEach(btn => btn.addEventListener("click", () => {
        $$("[data-tab]").forEach(b => {
            b.classList.remove("bg-white", "text-black");
        });
        btn.classList.add("bg-white", "text-black");
        __portfolioFilter = btn.dataset.tab;
        __portfolioVisibleCount = 0; // reset paging when filter changes
        __portfolioInitialCount = 0;
        renderPortfolioGrid(__portfolioFilter);
    }));

    // Recompute paging on resize/orientation changes
    let __pf_resizeTimer = null;
    window.addEventListener('resize', () => {
        clearTimeout(__pf_resizeTimer);
        __pf_resizeTimer = setTimeout(() => {
            // Only reset when user hasn't expanded beyond initial
            if (__portfolioVisibleCount === __portfolioInitialCount) {
                __portfolioVisibleCount = 0;
                __portfolioInitialCount = 0;
            }
            renderPortfolioGrid(__portfolioFilter);
        }, 120);
    });

    $('#portfolio-grid').addEventListener('mouseover', e => {
        const item = e.target.closest('.portfolio-item');
        if (item) {
            $('#portfolio-grid').classList.add('is-focused');
            item.classList.add('is-active');
        }
    });
    $('#portfolio-grid').addEventListener('mouseout', () => {
        $('#portfolio-grid').classList.remove('is-focused');
        const activeItem = $('.portfolio-item.is-active', $('#portfolio-grid'));
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
        document.title = document.hidden ? "Come back! \uD83D\uDC4B" : originalTitle;
    });

    setupHighlightsCarousel();
}

function setupHighlightsCarousel() {
    const track = $('#highlights-track');
    let slides = $$('.highlight-slide', track);
    const prevBtn = $('#highlight-prev');
    const nextBtn = $('#highlight-next');
    const scrubber = $('#highlight-scrubber');
    // Infinite wheel-style carousel state
    let __hl_isAutoScrolling = false;

    if (!track || slides.length === 0) return;

    // Duplicate slides before and after to form an endless belt
    const baseSlides = Array.from(slides);
    const prefix = baseSlides.map(s => { const c = s.cloneNode(true); c.setAttribute('data-clone', 'prefix'); return c; });
    const suffix = baseSlides.map(s => { const c = s.cloneNode(true); c.setAttribute('data-clone', 'suffix'); return c; });
    prefix.reverse().forEach(c => track.insertBefore(c, track.firstChild));
    suffix.forEach(c => track.appendChild(c));
    slides = $$('.highlight-slide', track);

    // Compute one-block metrics and jump to the middle block
    const originals = $$('.highlight-slide:not([data-clone])', track);
    const getBlockMetrics = () => {
        const first = originals[0];
        const last = originals[originals.length - 1];
        const start = first.offsetLeft;
        const end = last.offsetLeft + last.clientWidth;
        return { start, width: end - start };
    };
    setTimeout(() => {
        const { start } = getBlockMetrics();
        const prev = track.style.scrollBehavior; track.style.scrollBehavior = 'auto';
        track.scrollTo({ left: start });
        track.style.scrollBehavior = prev;
    }, 0);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                slides.forEach(slide => slide.classList.remove('is-active'));
                entry.target.classList.add('is-active');
            }
        });
    }, { root: track, threshold: 0.6 });

    slides.forEach(slide => observer.observe(slide));

    const updateScrubber = () => {
        const scrollableWidth = Math.max(1, track.scrollWidth - track.clientWidth);
        const val = Math.round((track.scrollLeft / scrollableWidth) * 1000);
        if (scrubber) scrubber.value = String(val);
    };

    // Wrap around seamlessly when crossing block edges
    const wrapIfNeeded = () => {
        const originalsNow = $$('.highlight-slide:not([data-clone])', track);
        if (!originalsNow.length) return;
        const first = originalsNow[0];
        const last = originalsNow[originalsNow.length - 1];
        const start = first.offsetLeft;
        const width = (last.offsetLeft + last.clientWidth) - start;
        const buffer = 2;
        if (track.scrollLeft < start - buffer) {
            track.scrollLeft += width;
        } else if (track.scrollLeft >= start + width - buffer) {
            track.scrollLeft -= width;
        }
    };

    track.addEventListener('scroll', () => { wrapIfNeeded(); updateScrubber(); });
    window.addEventListener('resize', updateScrubber);
    updateScrubber();

    // Buttons: go to previous/next visible slide based on current position
    const getActiveIndex = () => {
        const center = track.scrollLeft + track.clientWidth / 2;
        let best = 0, bestDelta = Infinity;
        slides.forEach((s, i) => {
            const mid = s.offsetLeft + s.clientWidth / 2;
            const d = Math.abs(mid - center);
            if (d < bestDelta) { bestDelta = d; best = i; }
        });
        return best;
    };
    const scrollToIndex = (i) => {
        const idx = Math.max(0, Math.min(slides.length - 1, i));
        const target = slides[idx];
        if (target) track.scrollTo({ left: target.offsetLeft, behavior: 'smooth' });
    };
    prevBtn?.addEventListener('click', (e) => { e.preventDefault(); scrollToIndex(getActiveIndex() - 1); });
    nextBtn?.addEventListener('click', (e) => { e.preventDefault(); scrollToIndex(getActiveIndex() + 1); });

    // Make vertical touchpad scrolling pan horizontally on the track
    track.addEventListener('wheel', (e) => {
        const canScroll = track.scrollWidth > track.clientWidth;
        if (!canScroll) return; 
        const dx = Math.abs(e.deltaX);
        const dy = Math.abs(e.deltaY);
        // If vertical intent is stronger, translate it to horizontal
        if (dy > dx) {
            e.preventDefault();
            track.scrollLeft += e.deltaY;
        }
    }, { passive: false });

    // Drag-to-scroll (mouse/touch) for track
    let dragging = false, startX = 0, startLeft = 0;
    track.addEventListener('pointerdown', (e) => {
        if (e.button !== 0 && e.pointerType === 'mouse') return;
        dragging = true;
        track.setPointerCapture(e.pointerId);
        startX = e.clientX;
        startLeft = track.scrollLeft;
        track.style.scrollSnapType = 'none';
    });
    track.addEventListener('pointermove', (e) => {
        if (!dragging) return;
        const dx = e.clientX - startX;
        track.scrollLeft = startLeft - dx; // natural drag
    });
    function endDrag(e) {
        if (!dragging) return;
        dragging = false;
        try { track.releasePointerCapture(e.pointerId); } catch {}
        // Restore snapping after momentum settles a bit
        setTimeout(() => { track.style.scrollSnapType = ''; }, 60);
    }
    track.addEventListener('pointerup', endDrag);
    track.addEventListener('pointercancel', endDrag);

    // Joystick control (reworked to avoid WebKitCSSMatrix dependency)
    const joystick = $('#highlight-joystick');
    let joyActive = false, joyRAF = null, joyNormalized = 0;
    function setHandle(normalized) {
        if (!joystick) return;
        const handle = joystick.querySelector('.hj-handle');
        const half = (joystick.clientWidth - handle.clientWidth) / 2;
        handle.style.transform = `translate(calc(-50% + ${normalized * half}px), -50%)`;
        joyNormalized = normalized;
        joystick.setAttribute('aria-valuenow', String(Math.round(normalized * 100)));
    }
    function joyLoop() {
        if (!joyActive) { joyRAF = null; return; }
        const speed = joyNormalized * (track.clientWidth * 0.02); // px per frame approx
        track.scrollLeft += speed;
        joyRAF = requestAnimationFrame(joyLoop);
    }
    function startJoy(e) {
        if (!joystick) return;
        joystick.classList.add('dragging');
        joyActive = true;
        moveJoy(e);
        if (!joyRAF) joyRAF = requestAnimationFrame(joyLoop);
        window.addEventListener('pointermove', moveJoy);
        window.addEventListener('pointerup', endJoy, { once: true });
    }
    function moveJoy(e) {
        if (!joystick) return;
        const rect = joystick.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const normalized = Math.max(-1, Math.min(1, (x - rect.width / 2) / (rect.width / 2)));
        setHandle(normalized);
    }
    function endJoy() {
        if (!joystick) return;
        joystick.classList.remove('dragging');
        joyActive = false;
        // ease back to center
        setHandle(0);
        const handle = joystick.querySelector('.hj-handle');
        handle.classList.add('hj-bounce');
        setTimeout(() => handle.classList.remove('hj-bounce'), 220);
        window.removeEventListener('pointermove', moveJoy);
    }
    joystick?.addEventListener('pointerdown', startJoy);

    // Scrubber input directly controls scroll position
    if (scrubber) {
        scrubber.addEventListener('input', () => {
            const scrollable = Math.max(1, track.scrollWidth - track.clientWidth);
            track.style.scrollSnapType = 'none';
            track.scrollLeft = (Number(scrubber.value) / 1000) * scrollable;
        });
        scrubber.addEventListener('change', () => {
            // restore snapping when user finishes scrubbing
            setTimeout(() => { track.style.scrollSnapType = ''; }, 60);
        });
    }

    function onScrollEndOnce(cb) {
        // Use native scrollend if available, otherwise a short idle timer
        let done = false;
        const finish = () => { if (!done) { done = true; cb(); } };
        if ('onscrollend' in window) {
            const h = () => { track.removeEventListener('scrollend', h); finish(); };
            track.addEventListener('scrollend', h, { once: true });
        } else {
            let t = null;
            const handler = () => {
                clearTimeout(t);
                t = setTimeout(() => {
                    track.removeEventListener('scroll', handler);
                    finish();
                }, 120);
            };
            track.addEventListener('scroll', handler);
            handler();
        }
    }

    function centerOnSlide(slide, smooth = true) {
        const left = slide.offsetLeft - (track.clientWidth - slide.clientWidth) / 2;
        const prevSnap = track.style.scrollSnapType; track.style.scrollSnapType = 'none';
        __hl_isAutoScrolling = true;
        track.scrollTo({ left, behavior: smooth ? 'smooth' : 'auto' });
        onScrollEndOnce(() => { track.style.scrollSnapType = prevSnap; __hl_isAutoScrolling = false; });
    }

    // Helper to find the slide closest to center
    function getClosestSlide() {
        const center = track.scrollLeft + track.clientWidth / 2;
        let best = slides[0];
        let bestDist = Infinity;
        slides.forEach(s => {
            const mid = s.offsetLeft + s.clientWidth / 2;
            const d = Math.abs(mid - center);
            if (d < bestDist) { bestDist = d; best = s; }
        });
        return best;
    }
    prevBtn.addEventListener('click', () => {
        const arr = Array.from(slides);
        const current = getClosestSlide();
        const idx = arr.indexOf(current);
        const target = arr[Math.max(0, idx - 1)];
        centerOnSlide(target);
    });
    nextBtn.addEventListener('click', () => {
        const arr = Array.from(slides);
        const current = getClosestSlide();
        const idx = arr.indexOf(current);
        const target = arr[Math.min(arr.length - 1, idx + 1)];
        centerOnSlide(target);
    });
}

function openCinematicViewer(projectId) {
    currentProjectInView = portfolioConfig.projects.find(p => p.id === projectId);
    if (!currentProjectInView) return;
    // If it's just an external link with no files, open new tab; otherwise use viewer
    if (currentProjectInView.externalUrl && (!currentProjectInView.files || currentProjectInView.files.length === 0)) {
        try { window.open(currentProjectInView.externalUrl, '_blank'); } catch {}
        return;
    }
    currentMediaIndex = 0;
    updateGalleryView();
    document.body.classList.add('viewer-open');
    $('#cinematicViewerOverlay').classList.add('is-open');
    document.body.style.overflow = 'hidden';
    // Accessibility: trap focus in overlay and hide background for screen readers
    try {
        window.__lastFocusedEl = document.activeElement;
        $('#main-content')?.setAttribute('aria-hidden', 'true');
        const overlay = $('#cinematicViewerOverlay');
        const focusable = overlay.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])');
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        first?.focus();
        overlay.addEventListener('keydown', function trap(e) {
            if (e.key === 'Tab') {
                if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
                else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
            }
            if (e.key === 'ArrowLeft') { e.preventDefault(); showPrevMedia(); }
            if (e.key === 'ArrowRight') { e.preventDefault(); showNextMedia(); }
        });
    } catch {}
}

function closeCinematicViewer() {
    document.body.classList.remove('viewer-open');
    $('#cinematicViewerOverlay')?.classList.remove('is-open');
    document.body.style.overflow = 'auto';
    $('#viewerMediaWrapper').innerHTML = '';
    try {
        $('#main-content')?.setAttribute('aria-hidden', 'false');
        if (window.__lastFocusedEl && typeof window.__lastFocusedEl.focus === 'function') {
            window.__lastFocusedEl.focus();
        }
    } catch {}
}

function toDrivePreviewUrl(url) {
    try {
        if (!url.includes('drive.google.com')) return url;
        const m = url.match(/\/file\/d\/([^/]+)\//);
        const id = m ? m[1] : null;
        return id ? `https://drive.google.com/file/d/${id}/preview` : url;
    } catch { return url; }
}

function createEmbedElement(url) {
    const src = toDrivePreviewUrl(url);
    return `<iframe class="viewer-media" src="${src}" allow="autoplay; fullscreen" allowfullscreen frameborder="0"></iframe>`;
}

function createMediaElement(url) {
    const isVideo = /\.(mp4|webm|mov)$/i.test(url);
    if (isVideo) {
        return `<video src="${url}" autoplay loop muted playsinline class="viewer-media"></video>`;
    }
    if (url.includes('drive.google.com')) {
        return createEmbedElement(url);
    }
    return `<img src="${url}" alt="${currentProjectInView.caption}" class="viewer-media" />`;
}

function updateGalleryView() {
    const file = currentProjectInView.files[currentMediaIndex];
    const wrapper = $('#viewerMediaWrapper');

    if (file.type === 'image' || file.type === 'video') {
        wrapper.innerHTML = createMediaElement(file.url);
        
    } else if (file.type === 'embed') {
        wrapper.innerHTML = createEmbedElement(file.url);

    } else if (file.type === 'slider') {
        const beforeText = file.beforeLabel ?? portfolioConfig.sliderLabels.before;
        const afterText = file.afterLabel ?? portfolioConfig.sliderLabels.after;
        wrapper.innerHTML = `
            <div class="comparison-slider" role="region" aria-label="Before and after comparison slider">
                <div class="before-label">${beforeText}</div>
                <div class="before-media">${createMediaElement(file.before)}</div>
                <div class="after-image-container">
                    <div class="after-media">${createMediaElement(file.after)}</div>
                </div>
                <div class="after-label">${afterText}</div>
                <div class="slider-divider" aria-hidden="true"></div>
                <div class="slider-handle" role="slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" aria-label="Reveal"></div>
            </div>
        `;
        initSlider(wrapper.querySelector('.comparison-slider'));
    }

    $('#viewerCaption').textContent = file.caption || currentProjectInView.caption;
    $('#viewerDescription').textContent = file.description || currentProjectInView.description;
    // Render tools used (software icons)
    const toolsWrap = $('#viewerTools');
    if (toolsWrap) {
        const tools = currentProjectInView.tools || [];
        toolsWrap.innerHTML = tools.map(t => {
            const icon = (t.icon && typeof t.icon === 'string' && t.icon.trim().startsWith('<'))
                ? t.icon
                : `<img src="${t.icon}" alt="${t.name} icon" loading="lazy" />`;
            return `
                <span role="listitem" title="${t.name}">
                    ${icon}
                    <span class="tool-name">${t.name}</span>
                </span>
            `;
        }).join('');
    }
    
    // Case study button removed by request
    $('#viewerProgressIndicator').style.width = `${(currentMediaIndex + 1) / currentProjectInView.files.length * 100}%`;
    $('#prevBtn').style.display = currentMediaIndex > 0 ? 'flex' : 'none';
    $('#nextBtn').style.display = currentMediaIndex < currentProjectInView.files.length - 1 ? 'flex' : 'none';
}

function initSlider(slider) {
    const afterContainer = slider.querySelector('.after-image-container');
    const handle = slider.querySelector('.slider-handle');
    const divider = slider.querySelector('.slider-divider');
    let isDragging = false;

    function moveSlider(x) {
        const rect = slider.getBoundingClientRect();
        let pos = (x - rect.left) / rect.width * 100;
        pos = Math.max(0, Math.min(100, pos));
        handle.style.left = `${pos}%`;
        afterContainer.style.clipPath = `inset(0 ${100 - pos}% 0 0)`;
        handle.setAttribute('aria-valuenow', Math.round(pos).toString());
        if (divider) divider.style.left = `${pos}%`;
    }

    // Pointer events: drag anywhere on the slider, not just the handle
    const onPointerMove = (e) => { if (isDragging) moveSlider(e.clientX); };
    const onPointerUp = () => { isDragging = false; window.removeEventListener('pointermove', onPointerMove); window.removeEventListener('pointerup', onPointerUp); };
    const startDrag = (clientX) => { isDragging = true; moveSlider(clientX); window.addEventListener('pointermove', onPointerMove, { passive: true }); window.addEventListener('pointerup', onPointerUp, { passive: true }); };

    // Prevent native selection/drag and start a smooth drag immediately
    slider.addEventListener('dragstart', (e) => e.preventDefault());
    slider.addEventListener('pointerdown', (e) => { e.preventDefault(); startDrag(e.clientX); });
    handle.addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); startDrag(e.clientX); });

    // Click to jump
    slider.addEventListener('click', (e) => { moveSlider(e.clientX); });

    // Keyboard accessibility for the slider handle
    handle.tabIndex = 0;
    handle.addEventListener('keydown', (e) => {
        const rect = slider.getBoundingClientRect();
        const current = parseFloat(handle.style.left) || 50;
        const step = (e.shiftKey ? 5 : 2);
        if (e.key === 'ArrowLeft') {
            const next = Math.max(0, current - step);
            handle.style.left = `${next}%`;
            afterContainer.style.clipPath = `inset(0 ${100 - next}% 0 0)`;
            handle.setAttribute('aria-valuenow', Math.round(next).toString());
            e.preventDefault();
        } else if (e.key === 'ArrowRight') {
            const next = Math.min(100, current + step);
            handle.style.left = `${next}%`;
            afterContainer.style.clipPath = `inset(0 ${100 - next}% 0 0)`;
            handle.setAttribute('aria-valuenow', Math.round(next).toString());
            e.preventDefault();
        }
    });

    // Ensure an explicit initial position at 70%
    const initialPos = 70;
    handle.style.left = `${initialPos}%`;
    afterContainer.style.clipPath = `inset(0 ${100 - initialPos}% 0 0)`;
    handle.setAttribute('aria-valuenow', String(initialPos));
    if (divider) divider.style.left = `${initialPos}%`;
}

function showPrevMedia() {
    if (currentMediaIndex > 0) { currentMediaIndex--; updateGalleryView(); }
}

function showNextMedia() {
    if (currentProjectInView && currentMediaIndex < currentProjectInView.files.length - 1) { currentMediaIndex++; updateGalleryView(); }
}

function updateNavOnScroll() {
    if (window.scrollY > 50) $('#main-nav').classList.add('bg-black/50', 'backdrop-blur-md');
    else $('#main-nav').classList.remove('bg-black/50', 'backdrop-blur-md');
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
    const scrollToTopBtn = $('#scrollToTop');
    if(scrollY > 400) {
        scrollToTopBtn.classList.add('is-visible');
    } else {
        scrollToTopBtn.classList.remove('is-visible');
    }
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


// --- 3. Page text normalization to avoid mojibake on GitHub Pages ---
// Some editors saved smart quotes and bullets with a legacy code page.
// Normalize key UI strings at runtime so they render correctly everywhere.
document.addEventListener('DOMContentLoaded', () => {
  try {
    const normalize = () => {
      // Set a clean, known-good title
      document.title = 'Kunal Sethi â€” Cinematic Visual Designer';
      const heroTagline = document.querySelector('#top p.hero-subtitle, #top .hero-subtitle, #top p');
      if (heroTagline) heroTagline.textContent = 'Cinematic Visual Designer â€¢ 3D â€¢ VFX â€¢ Motion â€¢ Graphics';

      const resumeNav = document.getElementById('resume-nav');
      if (resumeNav) resumeNav.textContent = 'RÃ©sumÃ©';
      const resumeNavMobile = document.getElementById('resume-nav-mobile');
      if (resumeNavMobile) resumeNavMobile.textContent = 'RÃ©sumÃ©';
      const resumeBtn = document.querySelector('#resume-link span');
      if (resumeBtn) resumeBtn.textContent = 'Download RÃ©sumÃ©';

      // "Let's Talk" buttons (desktop + mobile)
      document.querySelectorAll('a[href="#contact"]').forEach(a => {
        if (a) a.textContent = "Letâ€™s Talk";
      });

      // Meta descriptions (non-critical for rendering, but helpful if inspected)
      const og = document.querySelector('meta[property="og:description"]');
      const tw = document.querySelector('meta[name="twitter:description"]');
      const desc = 'Cinematic Visual Designer â€¢ 3D â€¢ VFX â€¢ Motion â€¢ Graphics';
      if (og) og.setAttribute('content', desc);
      if (tw) tw.setAttribute('content', desc);
    };
    normalize();
  } catch (e) { /* no-op */ }
});




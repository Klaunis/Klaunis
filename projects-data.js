// Configure available filters (use lowercase keys).
window.portfolioConfig = window.portfolioConfig || {
    filters: ['all', '3d', 'vfx', 'motion', 'graphics', 'live']
};

window.portfolioProjects = [
    {
        id: 'social-login',
        title: 'Social Login Interface',
        year: '2024',
        summary: 'Cinematic UI beat crafted for a speculative sci-fi short.',
        description: 'A motion design exploration engineered to feel tactile and cinematic. Layered glitch typography, parallax cards, and emissive lighting sell a login moment that belongs in a near-future thriller.',
        tags: ['motion', 'graphics'],
        cover: 'Portfolio/Motion/Computer.png',
        media: [
            { type: 'video', src: 'Portfolio/Motion/Computer Screen Shot.webm', poster: 'Portfolio/Motion/Computer.png', caption: 'Final motion render' },
            { type: 'image', src: 'Portfolio/Motion/Computer.png', caption: 'Art direction keyframe' }
        ],
        credits: ['Adobe After Effects', 'Adobe Illustrator']
    },
    {
        id: 'chess-study',
        title: 'Game of Chess',
        year: '2024',
        summary: 'A moody 3D render capturing the quiet before checkmate.',
        description: 'Building the shot from modeling through look-dev, I leaned into dramatic rim lighting and distressed textures to create a grounded, cinematic mood. Every piece is positioned to feel like a frame pulled from a thriller.',
        tags: ['3d'],
        cover: 'Portfolio/3D/Chess/Render Chess 1.jpg',
        media: [
            { type: 'image', src: 'Portfolio/3D/Chess/Render Chess 1.jpg', caption: 'Final render' },
            {
                type: 'compare',
                before: 'Portfolio/3D/Chess/chess wire.jpg',
                after: 'Portfolio/3D/Chess/Chess UV.jpg',
                beforeLabel: 'Wireframe',
                afterLabel: 'UV Map',
                caption: 'Wireframe vs UV comparison'
            },

        ],
        credits: ['Autodesk Maya', 'Blender']
    },
    {
        id: 'dirty-utensil',
        title: 'Dirty Utensil',
        year: '2023',
        summary: 'Texture-forward prop study blending realism and grit.',
        description: 'Focused on storytelling through surface detail, this piece layers hand-painted textures, procedural grunge, and cinematic grading to feel lived-in. Rendered with a macro lens to amplify scale and realism.',
        tags: ['3d'],
        cover: 'Portfolio/3D/Utensil/Render 1.png',
        media: [
            { type: 'image', src: 'Portfolio/3D/Utensil/Render 1.png', caption: 'Hero render' },
            { type: 'image', src: 'Portfolio/3D/Utensil/Render 2.png', caption: 'Material close-up' },
            { type: 'image', src: 'Portfolio/3D/Utensil/Render 3.png', caption: 'Alternate lighting pass' }
        ],
        credits: ['Autodesk Maya', 'Substance 3D Painter', 'Marmoset Toolbag']
    },
    {
        id: 'save-the-date',
        title: 'Save The Date Series',
        year: '2023',
        summary: 'A trio of vibrant motion invitations built for projection and socials.',
        description: 'Designed to be both immersive and adaptable, the set combines typographic flourishes, particle trails, and heartfelt pacing. Each version regrades the palette to suit different moods while keeping the emotional through-line intact.',
        tags: ['motion'],
        cover: 'Portfolio/Motion/Marriage/Thumbnail.png',
        media: [
            { type: 'embed', src: 'Portfolio/Motion/Marriage/series-player.html', caption: 'Watch the full trio' },
            { type: 'video', src: 'Portfolio/Motion/Marriage/Std.webm', poster: 'Portfolio/Motion/Marriage/Thumbnail.png', caption: 'Warm tone version' },
            { type: 'video', src: 'Portfolio/Motion/Marriage/Std 2.webm', poster: 'Portfolio/Motion/Marriage/Thumbnail.png', caption: 'Cool tone variation' },
            { type: 'video', src: 'Portfolio/Motion/Marriage/Std 3.webm', poster: 'Portfolio/Motion/Marriage/Thumbnail.png', caption: 'Final upscale pass' }
        ],
        credits: ['Adobe After Effects']
    },
    {
        id: 'horror-icon',
        title: 'Horror Game Icon',
        year: '2024',
        summary: 'Branding a chilling survival experience with cinematic grit.',
        description: 'Crafted to feel like a key art shard, the design balances typography, texture overlays, and color separation to scream horror without being cliche. The emboss effects and lighting push it toward a streaming-platform finish.',
        tags: ['graphics'],
        cover: 'Portfolio/Graphic/Game Logos/Horror GFX.png',
        media: [
            { type: 'image', src: 'Portfolio/Graphic/Game Logos/Horror GFX.png', caption: 'Final icon design' }
        ],
        credits: ['Adobe Photoshop']
    },
    {
        id: 'wildlife-icon',
        title: 'Wildlife Game Icon',
        year: '2024',
        summary: 'Adventure-driven iconography with painterly lighting.',
        description: 'The brief was to capture wonder. I explored layered foliage, warm rim light, and a tactile badge structure so the icon feels premium on storefronts and splash screens alike.',
        tags: ['graphics'],
        cover: 'Portfolio/Graphic/Game Logos/Wildlife GFX.png',
        media: [
            { type: 'image', src: 'Portfolio/Graphic/Game Logos/Wildlife GFX.png', caption: 'Final icon design' }
        ],
        credits: ['Adobe Photoshop']
    },
    {
        id: 'lack-of',
        title: 'Lack Of',
        year: '2023',
        summary: 'A moody live-action short built around fragmented memory.',
        description: 'Shot as an intimate narrative exercise, the piece pairs minimal dialogue with textured color grading to lean into tension and unresolved emotion.',
        tags: ['live'],
        cover: 'Portfolio/Live Action Thumbnails/Lack Of.png',
        media: [
            { type: 'image', src: 'Portfolio/Live Action Thumbnails/Lack Of.png', caption: 'Key art still' },
            { type: 'embed', src: 'https://drive.google.com/file/d/1-OVP217GzKXAJ6f1KASnaRe2e9XCrSHG/preview', caption: 'Full short film' }
        ],

        credits: ['Adobe Premiere Pro', 'DaVinci Resolve']
    },
    {
        id: 'i-worry',
        title: 'I Worry',
        year: '2022',
        summary: 'School project music video channeling delicate, lyrical pacing.',
        description: 'Shot as an intimate narrative exercise, the piece pairs minimal dialogue with textured color grading to lean into tension and unresolved emotion.',
        tags: ['live', 'motion'],
        cover: 'Portfolio/Live Action Thumbnails/I worry.png',
        media: [
            { type: 'embed', src: 'https://drive.google.com/file/d/12V2DCK0RVkH04rPWgCrEl03CksKhWXBr/preview', caption: 'Full music video' },
            { type: 'image', src: 'Portfolio/Live Action Thumbnails/I worry.png', caption: 'Final still frame' }
        ],
        credits: ['Adobe Premiere Pro', 'Adobe After Effects']
    },
    {
        id: 'kalam',
        title: 'Kalam',
        year: '2021',
        summary: 'A tribute short celebrating curiosity and the spirit of invention.',
        description: 'Built as a passion project, Kalam blends archival-inspired graphics with grounded live-action vignettes to highlight the optimism of young makers.',
        tags: ['live'],
        cover: 'Portfolio/Live Action Thumbnails/Kalam.png',
        media: [
            { type: 'embed', src: 'https://drive.google.com/file/d/1D1Uh7e9wNRdIIeQlKKb432gEiHNBfrS-/preview', caption: 'Full short film' },
            { type: 'image', src: 'Portfolio/Live Action Thumbnails/Kalam.png', caption: 'Title card still' }
        ],
        credits: ['Adobe Premiere Pro']
    },
    {
        id: 'smriti',
        title: 'Smriti',
        year: '2022',
        summary: 'A short film exploring memory through gentle surrealism.',
        description: 'Shot on location with a lean crew, I directed, edited, and graded the piece to feel intimate yet cinematic. Motion graphics punctuate the narrative, guiding viewers through fragmented recollections.',
        tags: ['live'],
        cover: 'Portfolio/Live Action Thumbnails/Smriti.png',
        media: [
            { type: 'embed', src: 'https://drive.google.com/file/d/1cjhTnD9lp6dFNPByDucGBw6qx1K0tbVn/preview', caption: 'Full short film' },
            { type: 'image', src: 'Portfolio/Live Action Thumbnails/Smriti.png', caption: 'Key art still' }
        ],
        credits: ['Adobe Premiere Pro']
    },
    {
        id: 'rang',
        title: 'Rang',
        year: '2021',
        summary: 'Music, motion, and live action blending to celebrate color.',
        description: 'This hybrid piece fuses choreography with animated typography. I led direction, compositing, and color to keep the performance grounded while allowing lyrical motion graphics to float through the frame.',
        tags: ['live', 'motion'],
        cover: 'Portfolio/Live Action Thumbnails/Rang.png',
        media: [
            { type: 'embed', src: 'https://drive.google.com/file/d/1gSdjfouUxhe669ReEXZdV3kQM_p_BtMS/preview', caption: 'Final short film' },
            { type: 'image', src: 'Portfolio/Live Action Thumbnails/Rang.png', caption: 'Frame from the performance' }
        ],
        credits: ['Adobe After Effects', 'Adobe Premiere Pro']
    },
    {
        id: 'keygenie',
        title: 'KeyGenie',
        year: '2021',
        summary: 'A playful VFX-meets-live-action piece about everyday magic.',
        description: 'From previs to final composite, I handled the VFX pipeline: matchmoving practical plates, simulating particles, and bringing it together with a grade that keeps the whimsy alive.',
        tags: ['live', 'vfx'],
        cover: 'Portfolio/Live Action Thumbnails/KeyGenie.png',
        media: [
            { type: 'embed', src: 'https://drive.google.com/file/d/1knQ2yOpeLwQ9hFicbvCN1QimoIu9b58v/preview', caption: 'Short film' },
            { type: 'image', src: 'Portfolio/Live Action Thumbnails/KeyGenie.png', caption: 'Poster still' }
        ],
        credits: ['Nuke', 'Houdini', 'Adobe After Effects', 'Blender']
    }
];




// Clean-copy overrides to remove mojibake and ensure readable text everywhere
document.addEventListener('DOMContentLoaded', () => {
  try {
    // Title
    document.title = 'Kunal Sethi — Cinematic Visual Designer';

    // Hero subtitle
    const heroTagline = document.querySelector('#top p.hero-subtitle, #top .hero-subtitle, #top p');
    if (heroTagline) heroTagline.textContent = 'Cinematic Visual Designer • 3D • VFX • Motion • Graphics';

    // Résumé links and labels
    const resumeHref = 'Portfolio/Resume/Kunal_Sethi_Resume.pdf';
    const resumeNav = document.getElementById('resume-nav');
    if (resumeNav) { resumeNav.textContent = 'Résumé'; resumeNav.href = resumeHref; }
    const resumeNavMobile = document.getElementById('resume-nav-mobile');
    if (resumeNavMobile) { resumeNavMobile.textContent = 'Résumé'; resumeNavMobile.href = resumeHref; }
    const resumeBtn = document.querySelector('#resume-link span');
    if (resumeBtn) resumeBtn.textContent = 'Download Résumé';

    // About section
    const aboutTitle = document.getElementById('about-title');
    if (aboutTitle) aboutTitle.textContent = 'A Bit About Me';
    const aboutText = document.getElementById('about-text');
    if (aboutText) aboutText.textContent = "I’m a visual designer working at the intersection of art and technology. I love crafting cinematic visuals that don’t just look good, but feel right—evoking emotion and telling a story in every frame. Collaboration isn’t just part of the job; it’s the best part. Let’s build something unforgettable together.";

    // "Let's Talk" buttons
    document.querySelectorAll('a[href="#contact"]').forEach(a => { a.textContent = "Let’s Talk"; });

    // Meta descriptions
    const cleanDesc = 'Cinematic Visual Designer • 3D • VFX • Motion • Graphics';
    const og = document.querySelector('meta[property="og:description"]');
    const tw = document.querySelector('meta[name="twitter:description"]');
    if (og) og.setAttribute('content', cleanDesc);
    if (tw) tw.setAttribute('content', cleanDesc);
  } catch (e) {
    // no-op
  }
});


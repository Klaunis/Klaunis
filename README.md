Klaunis — Portfolio Website

Live site
- GitHub Pages: https://klaunis.github.io/Klaunis/

Local development
- Open `index.html` in Live Server (VS Code) from the repository root.
- Assets are referenced with relative paths. Case matters on GitHub Pages.

Deploy
- Push to `main`. GitHub Pages is configured to deploy from the branch root.
- First build may take 1–3 minutes. See the Pages section under Settings.

Large media
- GitHub blocks files > 100 MB. Prefer web‑optimized media:
  - Video: H.264 MP4 or WebM (720p/1080p), under 20–50 MB when possible.
  - Images: JPEG/WEBP; compress before committing.
- If you need to store very large binaries, consider Git LFS.

Custom domain (optional)
1) Buy a domain at any registrar (e.g., Namecheap, GoDaddy).
2) In repo Settings → Pages → Custom domain, enter your domain (e.g., `kunal.studio`).
3) At your registrar DNS, create records:
   - A 185.199.108.153
   - A 185.199.109.153
   - A 185.199.110.153
   - A 185.199.111.153
   - CNAME `www` → `klaunis.github.io` (for www subdomain)
4) Back in Pages settings, enable Enforce HTTPS once the certificate is issued.

Notes
- `index.html`, `Final.css`, and `Final.js` should remain at the repo root for Pages.
- When editing text that includes special characters (• ’ é), save files as UTF‑8.
  The JS also normalizes key UI text at runtime to avoid encoding issues.


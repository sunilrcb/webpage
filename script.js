// Auto‑highlight the current nav link and set aria‑current
window.addEventListener('DOMContentLoaded', () => {
const here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
document.querySelectorAll('nav a').forEach(a => {
const isActive = a.getAttribute('href').toLowerCase() === here;
a.classList.toggle('active', isActive);
if (isActive) a.setAttribute('aria-current', 'page');
else a.removeAttribute('aria-current');
});
});


// Contact form handler (demo only)
function handleSubmit(e){
e.preventDefault();
const data = Object.fromEntries(new FormData(e.target).entries());
alert(`Thanks, ${data.name}! Your message has been received.`);
e.target.reset();
}
```


---


### Notes
- All pages now link `./style.css` and `./script.js` (relative path).
- Navigation is consistent and valid (using `<ul><li>` everywhere).
- File names are standardized: `projects.html` and `education.html` (no `project.html` / `biodata.html`).
- Minor grammar fixes and accessibility improvements (e.g., `aria-current`).
- Replace `#` placeholders with your actual LinkedIn/GitHub URLs.

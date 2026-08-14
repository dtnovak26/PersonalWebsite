// nav.js — shared mobile menu toggle + image slider init

// ── MOBILE NAV ────────────────────────────────────────────────────────────────
const mobileMenu = document.getElementById('mobile-menu');
const navLinks   = document.getElementById('nav-links');

if (mobileMenu && navLinks) {
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    navLinks.addEventListener('click', () => {
        if (window.innerWidth <= 768) navLinks.classList.remove('active');
    });
}

// ── IMAGE SLIDER ──────────────────────────────────────────────────────────────
// Automatically initialises every .img-slider on the page.
//
// HTML pattern:
//   <div class="img-slider">
//     <div class="img-slide">
//       <img src="..." alt="...">
//       <p class="img-caption">Optional caption</p>   ← omit if not needed
//     </div>
//     <!-- repeat .img-slide as needed -->
//   </div>
//
// Captions: add <p class="img-caption"> inside any .img-slide.
// No caption? Just leave it out — the grey bar won't appear for that slide.
// ─────────────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.img-slider').forEach(slider => {
        const slides = slider.querySelectorAll('.img-slide');
        const count  = slides.length;

        // Mark single-slide sliders so CSS hides controls
        slider.dataset.count = count;
        if (count < 2) return;

        // Wrap slides in a scrollable track
        const track = document.createElement('div');
        track.className = 'img-slider-track';
        slides.forEach(s => track.appendChild(s));
        slider.prepend(track);

        // Prev / Next buttons
        const prev = document.createElement('button');
        prev.className = 'slider-btn prev';
        prev.setAttribute('aria-label', 'Previous image');
        prev.innerHTML = '&#8592;';

        const next = document.createElement('button');
        next.className = 'slider-btn next';
        next.setAttribute('aria-label', 'Next image');
        next.innerHTML = '&#8594;';

        slider.appendChild(prev);
        slider.appendChild(next);

        // Dot indicators
        const dotsWrap = document.createElement('div');
        dotsWrap.className = 'slider-dots';
        const dots = Array.from({ length: count }, (_, i) => {
            const d = document.createElement('button');
            d.className = 'slider-dot' + (i === 0 ? ' active' : '');
            d.setAttribute('aria-label', `Go to image ${i + 1}`);
            d.addEventListener('click', () => goTo(i));
            dotsWrap.appendChild(d);
            return d;
        });
        slider.appendChild(dotsWrap);

        let current = 0;

        function goTo(index) {
            current = (index + count) % count;
            track.style.transform = `translateX(-${current * 100}%)`;
            dots.forEach((d, i) => d.classList.toggle('active', i === current));
        }

        prev.addEventListener('click', () => goTo(current - 1));
        next.addEventListener('click', () => goTo(current + 1));

        // Keyboard support when slider is focused
        slider.setAttribute('tabindex', '0');
        slider.addEventListener('keydown', e => {
            if (e.key === 'ArrowLeft')  { goTo(current - 1); e.preventDefault(); }
            if (e.key === 'ArrowRight') { goTo(current + 1); e.preventDefault(); }
        });

        // Touch / swipe support
        let touchStartX = null;
        slider.addEventListener('touchstart', e => {
            touchStartX = e.touches[0].clientX;
        }, { passive: true });
        slider.addEventListener('touchend', e => {
            if (touchStartX === null) return;
            const dx = e.changedTouches[0].clientX - touchStartX;
            if (Math.abs(dx) > 40) goTo(current + (dx < 0 ? 1 : -1));
            touchStartX = null;
        }, { passive: true });
    });
});

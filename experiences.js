/**
 * experiences.js — Single source of truth for all experience cards.
 *
 * HOW TO ADD A NEW EXPERIENCE:
 *   1. Add an object to the EXPERIENCES array below.
 *   2. Add the card to experience.html by calling renderExpGrid('#exp-grid').
 *   3. The "Other Experiences" section on each exp- page auto-refreshes.
 *   Done. No other files need to be touched.
 *
 * FIELDS:
 *   id          — unique slug, matches the exp-*.html filename (without .html)
 *   href        — path to the detail page
 *   tag         — one of: internship | research | personal | student-team
 *   title       — two-line card title (use \n for the line break)
 *   image       — path to image, or null for emoji fallback
 *   emoji       — fallback emoji shown when image is null
 *   alt         — alt text for the image
 *
 * TIMELINE FIELDS (used on index.html — kept here for reference,
 * timeline rendering is intentionally NOT auto-driven yet):
 *   tlTitle     — title shown in the timeline card
 *   tlCompany   — company / org name
 *   tlDate      — date range string
 *   tlDesc      — one-paragraph description
 *   tlActive    — set true to include in the auto-timeline (reserved for future use)
 */

const EXPERIENCES = [

    // ── INTERNSHIPS ──────────────────────────────────────────────────────────

    {
        id:        'exp-boeing',
        href:      'exp-boeing.html',
        tag:       'internship',
        title:     'Boeing South Carolina\nInnovation Engineering Intern',
        image:     'images/787_Family.jpg',
        emoji:     null,
        alt:       'Boeing South Carolina',
        tlTitle:   'Innovation Engineering Intern',
        tlCompany: 'Boeing South Carolina — Mid-Body Innovation Cell',
        tlDate:    'May – August 2026',
        tlDesc:    'Rapidly prototyping real-time innovative solutions to provide timely help to engineers and technicians throughout mid-body and BSC.',
        tlActive:  false,
    },

    {
        id:        'exp-firefly',
        href:      'exp-firefly.html',
        tag:       'internship',
        title:     'Firefly Aerospace\nStructures Engineering Intern',
        image:     'images/FireflyLogo2.webp',
        emoji:     null,
        alt:       'Firefly Aerospace',
        tlTitle:   'Structures Engineering Intern',
        tlCompany: 'Firefly Aerospace',
        tlDate:    'Summer 2025',
        tlDesc:    'Structures engineering intern working on launch vehicle components.',
        tlActive:  false,
    },

    {
        id:        'exp-stars-semiconductor',
        href:      'exp-stars-semiconductor.html',
        tag:       'internship',
        title:     'Purdue STARS\nSemiconductor Intern',
        image:     'images/STARS_Characterization.jpg',
        emoji:     '⚡',
        alt:       'Semiconductor internship',
        tlTitle:   'Semiconductor Manufacturing Intern',
        tlCompany: 'Purdue STARS — Purdue University',
        tlDate:    'Summer 2024',
        tlDesc:    'Worked on the MIM Characterization subteam to improve photolithography masks for MIM capacitors at the Birck Nanotechnology Center. Presented findings at the Purdue Summer Research Convention and toured GlobalFoundries Fab 8 in Malta, NY.',
        tlActive:  false,
    },

    // ── RESEARCH ─────────────────────────────────────────────────────────────

    {
        id:        'exp-specht',
        href:      'exp-specht.html',
        tag:       'research',
        title:     'Specht Lab\nResearch Assistant',
        image:     'images/Specht Lab Group.jpeg',
        emoji:     null,
        alt:       'Specht Lab Research',
        tlTitle:   null,
        tlCompany: null,
        tlDate:    null,
        tlDesc:    null,
        tlActive:  false,
    },

    // ── STUDENT TEAMS ─────────────────────────────────────────────────────────

    {
        id:        'exp-first-robotics',
        href:      'exp-first-robotics.html',
        tag:       'student-team',
        title:     'FIRST Robotics\nTeam Lead',
        image:     'images/PurpleCircuitsCad.png',
        emoji:     '🤖',
        alt:       'FIRST Robotics',
        tlTitle:   null,
        tlCompany: null,
        tlDate:    null,
        tlDesc:    null,
        tlActive:  false,
    },

    {
        id:        'exp-part-dodo',
        href:      'exp-part-dodo.html',
        tag:       'student-team',
        title:     'Purdue Aerial Robotics Team PART - R&D 2025 Dodo',
        image:     'images/Dodo_1.jpeg',
        emoji:     null,
        alt:       'Purdue DODO Drone Club',
        tlTitle:   null,
        tlCompany: null,
        tlDate:    null,
        tlDesc:    null,
        tlActive:  false,
    },

    {
        id:        'exp-part-kiwi',
        href:      'exp-part-kiwi.html',
        tag:       'student-team',
        title:     'Purdue Aerial Robotics Team PART - R&D 2026 Kiwi',
        image:     'images/DSCF1392.jpg',
        emoji:     null,
        alt:       'Purdue KIWI Autonomy',
        tlTitle:   null,
        tlCompany: null,
        tlDate:    null,
        tlDesc:    null,
        tlActive:  false,
    },

    // ── PERSONAL PROJECTS ─────────────────────────────────────────────────────

    {
        id:        'exp-personal-website',
        href:      'exp-personal-website.html',
        tag:       'personal',
        title:     'This Portfolio\nWebsite',
        image:     'images/logo.jpeg',
        emoji:     '💻',
        alt:       'Portfolio website',
        tlTitle:   null,
        tlCompany: null,
        tlDate:    null,
        tlDesc:    null,
        tlActive:  false,
    },

    {
        id:        'exp-sum26',
        href:      'exp-sum26.html',
        tag:       'personal',
        title:     'Summer 2026\nGoals & Projects',
        image:     'images/NEMO.jpg',
        emoji:     null,
        alt:       'Summer 2026',
        tlTitle:   null,
        tlCompany: null,
        tlDate:    null,
        tlDesc:    null,
        tlActive:  false,
    },

    {
        id:        'exp-drones',
        href:      'exp-drones.html',
        tag:       'personal',
        title:     'Custom FPV\nQuad Builds',
        image:     'images/JB_FIVE.jpg',
        emoji:     '🚁',
        alt:       'Custom FPV Quad Builds',
        tlTitle:   null,
        tlCompany: null,
        tlDate:    null,
        tlDesc:    null,
        tlActive:  false,
    },

];

// ─────────────────────────────────────────────────────────────────────────────
// RENDERERS
// Called by experience.html and each exp- page.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * renderExpGrid(containerSelector, filterTag?)
 *
 * Populates the experience grid on experience.html with cards built from
 * EXPERIENCES. If filterTag is supplied only matching cards are shown.
 *
 * @param {string}  containerSelector  CSS selector for the grid wrapper
 */
function renderExpGrid(containerSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    container.innerHTML = EXPERIENCES.map(exp => {
        const lines  = exp.title.split('\n');
        const media  = exp.image
            ? `<img src="${exp.image}" alt="${exp.alt}">`
            : `<div class="no-img">${exp.emoji}</div>`;

        return `
        <a href="${exp.href}" class="exp-card" data-tag="${exp.tag}">
            ${media}
            <div class="exp-overlay">
                <div class="overlay-inner">
                    <span class="overlay-tag">${tagLabel(exp.tag)}</span>
                    <p class="overlay-title">${lines.join('<br>')}</p>
                    <span class="overlay-arrow">View →</span>
                </div>
            </div>
        </a>`;
    }).join('');
}

/**
 * renderRelatedTiles(containerSelector, currentId, count?)
 *
 * Populates the "Other Experiences" preview grid at the bottom of each
 * exp- page. Excludes the current page's own card and picks randomly
 * from the remainder so the section never feels stale.
 *
 * @param {string}  containerSelector  CSS selector for the tile grid wrapper
 * @param {string}  currentId          The id of the current page (e.g. 'exp-boeing')
 * @param {number}  [count=3]          How many tiles to show
 */
function renderRelatedTiles(containerSelector, currentId, count = 3) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const pool = EXPERIENCES.filter(e => e.id !== currentId);

    // Fisher-Yates shuffle so results vary on every page load
    // This needs to be tested more in depth - unsure on the functionality of this feature
    for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    const chosen = pool.slice(0, count);

    container.innerHTML = chosen.map(exp => {
        const lines     = exp.title.split('\n');
        const tagClass  = `pt-${exp.tag}`;
        const media     = exp.image
            ? `<img src="${exp.image}" alt="${exp.alt}">`
            : `<div class="tile-bg">${exp.emoji}</div>`;

        return `
        <a href="${exp.href}" class="preview-tile ${tagClass}">
            ${media}
            <div class="tile-label">
                <span class="tile-tag">${tagLabel(exp.tag)}</span>
                <span class="tile-name">${lines.join('<br>')}</span>
            </div>
        </a>`;
    }).join('');
}

/** Maps tag slug → human-readable label */
function tagLabel(tag) {
    const map = {
        'internship':   'Internship',
        'research':     'Research',
        'personal':     'Personal Project',
        'student-team': 'Student Team',
    };
    return map[tag] || tag;
}

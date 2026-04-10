/* ============================================================
   JOULE WALL ART — app.js
   Fixed:
   - Rewrote PAINTINGS image references to match the actual files
     present in /assets/images in the GitHub repo.
   - Kept your filter/search/sort/modal/nav logic intact.
   ============================================================ */

'use strict';

/* ────────────────────────────────────────────────────────────
   PAINTINGS DATA
   Sorted low-to-high by price within each group
   ──────────────────────────────────────────────────────────── */
const BASE = 'https://surya-swarup.github.io/Joule-Art-Gallery-3/assets/images/';

const PAINTINGS = [

  /* ── SMALL WALL ─────────────────────────────────────────── */
  {
    id: 's01', title: 'Horse Line Art Minimal Wall Painting',
    category: 'Small', theme: 'Horses', price: 1499, featured: true,
    img: BASE + 'Horse Line Art Minimal Wall Painting.jpg',
  },
  {
    id: 's02', title: 'Blue Buddha Window View Wall Painting',
    category: 'Small', theme: 'Buddha', price: 1549, featured: true,
    img: BASE + 'Blue Buddha Window View Wall Painting.jpg',
  },
  {
    id: 's03', title: 'Floral Arch Cloudscape Wall Painting',
    category: 'Small', theme: 'Landscape', price: 1549, featured: false,
    img: BASE + 'Floral Arch Cloudscape Wall Painting.jpg',
  },
  {
    id: 's04', title: 'Sunset River Landscape Wall Painting',
    category: 'Small', theme: 'Landscape', price: 1599, featured: false,
    img: BASE + 'Sunset River Landscape Wall Painting.jpg',
  },
  {
    id: 's05', title: 'Side Profile Buddha Portrait Wall Painting',
    category: 'Small', theme: 'Buddha', price: 1599, featured: false,
    img: BASE + 'Side Profile Buddha Portrait Wall Painting.jpg',
  },
  {
    id: 's06', title: 'Collage Woman in Wide Hat Wall Painting',
    category: 'Small', theme: 'Portrait', price: 1649, featured: false,
    img: BASE + 'Collage Woman in Wide Hat Wall Painting.jpg',
  },
  {
    id: 's07', title: 'Golden Buddha Textured Wall Painting',
    category: 'Small', theme: 'Buddha', price: 1649, featured: false,
    img: BASE + 'Golden Buddha Textured Wall Painting.jpg',
  },
  {
    id: 's08', title: 'Abstract Tree Tunnel Path Wall Painting',
    category: 'Small', theme: 'Abstract', price: 1699, featured: false,
    img: BASE + 'Abstract Tree Tunnel Path Wall Painting.jpg',
  },
  {
    id: 's09', title: 'Folk Art Radha Krishna Portrait Wall Painting',
    category: 'Small', theme: 'Spiritual', price: 1699, featured: false,
    img: BASE + 'Folk Art Radha Krishna Portrait Wall Painting.jpg',
  },
  {
    id: 's10', title: 'Pink Urban Cityscape Wall Painting',
    category: 'Small', theme: 'Landscape', price: 1699, featured: false,
    img: BASE + 'Pink Urban Cityscape Wall Painting.jpg',
  },

  /* ── OFFICE WALL ─────────────────────────────────────────── */
  {
    id: 'o01', title: 'Buddha Mandala Traditional Wall Painting',
    category: 'Office Wall', theme: 'Buddha', price: 1799, featured: true,
    img: BASE + 'Buddha Mandala Traditional Wall Painting.jpg',
  },
  {
    id: 'o02', title: 'Golden Seven Running Horses Wall Painting',
    category: 'Office Wall', theme: 'Horses', price: 1799, featured: true,
    img: BASE + 'Golden Seven Running Horses Wall Painting.jpg',
  },
  {
    id: 'o03', title: 'Geometric Krishna Flute Wall Painting',
    category: 'Office Wall', theme: 'Spiritual', price: 1799, featured: false,
    img: BASE + 'Geometric Krishna Flute Wall Painting.jpg',
  },
  {
    id: 'o04', title: 'Colorful Geometric Female Portrait Wall Painting',
    category: 'Office Wall', theme: 'Portrait', price: 1849, featured: false,
    img: BASE + 'Colorful Geometric Female Portrait Wall Painting.jpg',
  },
  {
    id: 'o05', title: 'Tree of Life Golden Texture Wall Painting',
    category: 'Office Wall', theme: 'Spiritual', price: 1849, featured: false,
    img: BASE + 'Tree of Life Golden Texture Wall Painting.jpg',
  },
  {
    id: 'o06', title: 'Vintage Woman Portrait Framed Wall Painting',
    category: 'Office Wall', theme: 'Portrait', price: 1849, featured: false,
    img: BASE + 'Vintage Woman Portrait Framed Wall Painting.jpg',
  },
  {
    id: 'o07', title: 'Japanese Pagoda Red Sky Wall Painting',
    category: 'Office Wall', theme: 'Landscape', price: 1849, featured: false,
    img: BASE + 'Japanese Pagoda Red Sky Wall Painting.jpg',
  },
  {
    id: 'o08', title: 'Golden White Horse Portrait Wall Painting',
    category: 'Office Wall', theme: 'Horses', price: 1899, featured: false,
    img: BASE + 'Golden White Horse Portrait Wall Painting.jpg',
  },
  {
    id: 'o09', title: 'Krishna Flute Floral Portrait Wall Painting',
    category: 'Office Wall', theme: 'Spiritual', price: 1899, featured: false,
    img: BASE + 'Krishna Flute Floral Portrait Wall Painting.jpg',
  },
  {
    id: 'o10', title: 'Red Eye Abstract Dark Wall Painting',
    category: 'Office Wall', theme: 'Abstract', price: 1899, featured: false,
    img: BASE + 'Red Eye Abstract Dark Wall Painting.jpg',
  },

  /* ── STATEMENT WALL ──────────────────────────────────────── */
  {
    id: 'w01', title: 'Leopard on Teal Textured Wall Painting',
    category: 'Statement Wall', theme: 'Wildlife', price: 1999, featured: true,
    img: BASE + 'Leopard on Teal Textured Wall Painting.jpg',
  },
  {
    id: 'w02', title: 'White Running Horses Panoramic Wall Painting',
    category: 'Statement Wall', theme: 'Horses', price: 1999, featured: true,
    img: BASE + 'White Running Horses Panoramic Wall Painting.jpg',
  },
  {
    id: 'w03', title: 'Lotus Buddha Floral Horizontal Wall Painting',
    category: 'Statement Wall', theme: 'Buddha', price: 1999, featured: false,
    img: BASE + 'Lotus Buddha Floral Horizontal Wall Painting.jpg',
  },
  {
    id: 'w04', title: 'Radha Krishna Moonlight Tree Multi Panel Wall Painting',
    category: 'Statement Wall', theme: 'Spiritual', price: 2099, featured: false,
    img: BASE + 'Radha Krishna Moonlight Tree Multi Panel Wall Painting.jpg',
  },
  {
    id: 'w05', title: 'Black and White Running Horses Abstract Wall Painting',
    category: 'Statement Wall', theme: 'Horses', price: 2099, featured: false,
    img: BASE + 'Black and White Running Horses Abstract Wall Painting.jpg',
  },
  {
    id: 'w06', title: 'Graffiti Pop Art Female Portrait Wall Painting',
    category: 'Statement Wall', theme: 'Portrait', price: 2099, featured: false,
    img: BASE + 'Graffiti Pop Art Female Portrait Wall Painting.jpg',
  },
  {
    id: 'w07', title: 'Surreal Red Moon Cityscape Wall Painting',
    category: 'Statement Wall', theme: 'Landscape', price: 2199, featured: false,
    img: BASE + 'Surreal Red Moon Cityscape Wall Painting.jpg',
  },
  {
    id: 'w08', title: 'Abstract Fashion Lady in Hat Wall Painting',
    category: 'Statement Wall', theme: 'Portrait', price: 2199, featured: false,
    img: BASE + 'Abstract Fashion Lady in Hat Wall Painting.jpg',
  },
  {
    id: 'w09', title: 'Colorful Abstract Horses Wall Painting',
    category: 'Statement Wall', theme: 'Horses', price: 2299, featured: false,
    img: BASE + 'Colorful Abstract Horses Wall Painting.jpg',
  },
  {
    id: 'w10', title: 'Gothic Cathedral Yellow Moon Wall Painting',
    category: 'Statement Wall', theme: 'Landscape', price: 2499, featured: false,
    img: BASE + 'Gothic Cathedral Yellow Moon Wall Painting.jpg',
  },
];

/* ────────────────────────────────────────────────────────────
   STATE
   ──────────────────────────────────────────────────────────── */
let state = {
  category: '',
  theme:    '',
  sort:     'price-asc',
  search:   '',
};

/* ────────────────────────────────────────────────────────────
   SMOOTH SCROLL UTILITY
   ──────────────────────────────────────────────────────────── */
function smoothScrollTo(sectionId) {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else if (sectionId === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
window.smoothScrollTo = smoothScrollTo;

/* ────────────────────────────────────────────────────────────
   FILTER BY CATEGORY
   ──────────────────────────────────────────────────────────── */
function filterByCategory(cat) {
  state.category = cat;
  syncFiltersToState();
  renderGrid();
  smoothScrollTo('collection');
}
window.filterByCategory = filterByCategory;

/* ────────────────────────────────────────────────────────────
   FILTER + SORT LOGIC
   ──────────────────────────────────────────────────────────── */
function getFilteredSorted() {
  let list = PAINTINGS.filter(p => {
    const matchCat    = !state.category || p.category === state.category;
    const matchTheme  = !state.theme    || p.theme    === state.theme;
    const matchSearch = !state.search   ||
      p.title.toLowerCase().includes(state.search.toLowerCase()) ||
      p.theme.toLowerCase().includes(state.search.toLowerCase()) ||
      p.category.toLowerCase().includes(state.search.toLowerCase());
    return matchCat && matchTheme && matchSearch;
  });

  switch (state.sort) {
    case 'price-asc':
      list.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      list.sort((a, b) => b.price - a.price);
      break;
    case 'name-az':
      list.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case 'featured':
      list.sort((a, b) => {
        if (b.featured !== a.featured) return b.featured - a.featured;
        return a.price - b.price;
      });
      break;
  }

  return list;
}

/* ────────────────────────────────────────────────────────────
   RENDER GRID
   ──────────────────────────────────────────────────────────── */
function renderGrid() {
  const grid       = document.getElementById('paintings-grid');
  const emptyState = document.getElementById('empty-state');
  const filtered   = getFilteredSorted();

  grid.innerHTML = '';

  if (filtered.length === 0) {
    emptyState.style.display = 'block';
    return;
  }
  emptyState.style.display = 'none';

  filtered.forEach(p => {
    const card = document.createElement('div');
    card.className = 'painting-card';
    card.setAttribute('data-id', p.id);
    card.innerHTML = `
      <div class="painting-card-img-wrap">
        <img
          src="${p.img}"
          alt="${p.title}"
          class="painting-card-img"
          loading="lazy"
          onerror="this.src='';this.style.background='#1e1e1e';this.alt='Image coming soon';"
        />
        <span class="painting-card-category">${p.category}</span>
      </div>
      <div class="painting-card-body">
        <h3 class="painting-card-title">${p.title}</h3>
        <p class="painting-card-theme">${p.theme}</p>
        <div class="painting-card-footer">
          <span class="painting-card-price">₹${p.price.toLocaleString('en-IN')}</span>
          <button class="painting-card-btn" data-id="${p.id}">Quick view</button>
        </div>
      </div>`;
    grid.appendChild(card);
  });

  grid.querySelectorAll('.painting-card, .painting-card-btn').forEach(el => {
    el.addEventListener('click', () => {
      const id = el.dataset.id || el.closest('.painting-card')?.dataset.id;
      if (id) openModal(id);
    });
  });
}

/* ────────────────────────────────────────────────────────────
   SYNC UI CONTROLS → STATE
   ──────────────────────────────────────────────────────────── */
function syncFiltersToState() {
  const catEl   = document.getElementById('filter-category');
  const themeEl = document.getElementById('filter-theme');
  const sortEl  = document.getElementById('filter-sort');

  if (catEl && catEl.value !== undefined) catEl.value = state.category;
  if (themeEl && themeEl.value !== undefined) themeEl.value = state.theme;
  if (sortEl && sortEl.value !== undefined) sortEl.value = state.sort;

  document.querySelectorAll('.cat-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.cat === state.category);
  });
}

/* ────────────────────────────────────────────────────────────
   MODAL
   ──────────────────────────────────────────────────────────── */
function openModal(id) {
  const p = PAINTINGS.find(x => x.id === id);
  if (!p) return;

  const overlay = document.getElementById('modal-overlay');
  document.getElementById('modal-img').src = p.img;
  document.getElementById('modal-img').alt = p.title;
  document.getElementById('modal-title').textContent = p.title;
  document.getElementById('modal-meta').textContent =
    `Recommended fit: ${p.category}  ·  Theme: ${p.theme}`;
  document.getElementById('modal-price').textContent = `₹${p.price.toLocaleString('en-IN')}`;

  const waMsg = encodeURIComponent(
    `Hi! I'm interested in the "${p.title}" (${p.category}) priced at ₹${p.price}. Please share availability.`
  );
  document.getElementById('modal-wa').href = `https://wa.me/919065505100?text=${waMsg}`;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ────────────────────────────────────────────────────────────
   NAV
   ──────────────────────────────────────────────────────────── */
function initNav() {
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('main-nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      hamburger.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', open);
    });
  }

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      nav?.classList.remove('open');
      hamburger?.classList.remove('open');
      hamburger?.setAttribute('aria-expanded', 'false');
    });
  });

  const sections = ['hero', 'categories', 'collection', 'about', 'contact'];
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        document.querySelectorAll('.nav-link').forEach(link => {
          const href = link.getAttribute('href')?.replace('#', '');
          link.classList.toggle('active',
            href === id || (id === 'hero' && href === 'home'));
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = link.getAttribute('href').replace('#', '');
      const el = document.getElementById(target);
      if (el) {
        e.preventDefault();
        smoothScrollTo(target);
      } else if (target === 'home' || target === '') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });
}

/* ────────────────────────────────────────────────────────────
   HEADER SEARCH
   ──────────────────────────────────────────────────────────── */
function initHeaderSearch() {
  const input = document.getElementById('header-search-input');
  if (!input) return;

  let debounceTimer;
  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      state.search = input.value.trim();
      renderGrid();
    }, 280);
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      state.search = input.value.trim();
      renderGrid();
      smoothScrollTo('collection');
    }
  });
}

/* ────────────────────────────────────────────────────────────
   FILTER CONTROLS
   ──────────────────────────────────────────────────────────── */
function initFilters() {
  const catEl = document.getElementById('filter-category');
  const themeEl = document.getElementById('filter-theme');
  const sortEl = document.getElementById('filter-sort');
  const clearBtn = document.getElementById('clear-filters');

  if (catEl) catEl.addEventListener('change', () => {
    state.category = catEl.value;
    updateCatTabs();
    renderGrid();
  });
  if (themeEl) themeEl.addEventListener('change', () => {
    state.theme = themeEl.value;
    renderGrid();
  });
  if (sortEl) sortEl.addEventListener('change', () => {
    state.sort = sortEl.value;
    renderGrid();
  });

  if (clearBtn) clearBtn.addEventListener('click', () => {
    state = { category: '', theme: '', sort: 'price-asc', search: '' };
    const hSearch = document.getElementById('header-search-input');
    if (hSearch) hSearch.value = '';
    syncFiltersToState();
    renderGrid();
  });

  document.querySelectorAll('.cat-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      state.category = tab.dataset.cat;
      updateCatTabs();
      if (catEl) catEl.value = state.category;
      renderGrid();
    });
  });
}

function updateCatTabs() {
  document.querySelectorAll('.cat-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.cat === state.category);
  });
}

/* ────────────────────────────────────────────────────────────
   MODAL EVENTS
   ──────────────────────────────────────────────────────────── */
function initModal() {
  const overlay = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('modal-close');

  closeBtn?.addEventListener('click', closeModal);
  overlay?.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

/* ────────────────────────────────────────────────────────────
   INIT
   ──────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const sortEl = document.getElementById('filter-sort');
  if (sortEl) sortEl.value = 'price-asc';

  initNav();
  initHeaderSearch();
  initFilters();
  initModal();
  renderGrid();

  window.addEventListener('scroll', () => {
    const header = document.querySelector('.site-header');
    if (header) {
      header.style.boxShadow = window.scrollY > 20
        ? '0 2px 20px rgba(0,0,0,0.6)' : 'none';
    }
  }, { passive: true });
});

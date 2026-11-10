'use strict';

/* ============================================================
   SELMAR ELECTRONICS — MAIN JS v2
   Professional business website with real product images
   ============================================================ */

/* ---- Product Data (real Unsplash product photography) ---- */
const PRODUCTS = [
  /* TVs */
  {
    id: 1, cat: 'tv', brand: 'Samsung', badge: 'hot',
    name: 'Samsung 65" Neo QLED 4K Smart TV',
    desc: 'Quantum Matrix Technology, Neural Quantum Processor 4K, 120Hz refresh rate, built-in Alexa & Google.',
    price: 'ZMW 18,500',
    img: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=480&q=80&auto=format&fit=crop'
  },
  {
    id: 2, cat: 'tv', brand: 'LG', badge: 'sale',
    name: 'LG 55" OLED evo C3 4K TV',
    desc: 'Perfect Black, α9 AI Processor Gen6, Dolby Vision IQ, Dolby Atmos, webOS 23 Smart TV platform.',
    price: 'ZMW 15,200',
    img: 'https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=480&q=80&auto=format&fit=crop'
  },
  {
    id: 3, cat: 'tv', brand: 'Hisense', badge: '',
    name: 'Hisense 50" ULED 4K Smart TV',
    desc: 'Full Array Local Dimming, ULED X technology, 60Hz Pro, Dolby Vision, HDR10+ Smart TV.',
    price: 'ZMW 7,800',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=480&q=80&auto=format&fit=crop'
  },
  /* Phones */
  {
    id: 4, cat: 'phone', brand: 'Apple', badge: 'new',
    name: 'Apple iPhone 16 Pro Max',
    desc: 'A18 Pro chip, 48MP Fusion camera, 5x optical zoom, ProMotion 120Hz Super Retina XDR, titanium design.',
    price: 'ZMW 22,000',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=480&q=80&auto=format&fit=crop'
  },
  {
    id: 5, cat: 'phone', brand: 'Samsung', badge: 'new',
    name: 'Samsung Galaxy S25 Ultra',
    desc: '200MP ProVisual Engine camera, Snapdragon 8 Elite, 6.9" AMOLED 120Hz, 5000mAh, built-in S Pen.',
    price: 'ZMW 19,500',
    img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=480&q=80&auto=format&fit=crop'
  },
  {
    id: 6, cat: 'phone', brand: 'Tecno', badge: 'sale',
    name: 'Tecno Camon 30 Pro 5G',
    desc: '50MP OIS main camera, 5G connectivity, 6.78" AMOLED 144Hz display, 5000mAh battery, 45W charging.',
    price: 'ZMW 3,200',
    img: 'https://images.unsplash.com/photo-1598327105854-5b9a99f9a9e6?w=480&q=80&auto=format&fit=crop'
  },
  /* Appliances */
  {
    id: 7, cat: 'appliance', brand: 'LG', badge: '',
    name: 'LG 617L Side-by-Side Refrigerator',
    desc: 'InstaView Door-in-Door, Linear Inverter Compressor, Door Cooling+, ThinQ AI, energy-efficient.',
    price: 'ZMW 12,500',
    img: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=480&q=80&auto=format&fit=crop'
  },
  {
    id: 8, cat: 'appliance', brand: 'Samsung', badge: 'hot',
    name: 'Samsung 9kg Front Load Washer',
    desc: 'EcoBubble™ technology, Digital Inverter Motor, Steam+, AI Control, SmartThings compatible.',
    price: 'ZMW 8,900',
    img: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=480&q=80&auto=format&fit=crop'
  },
  {
    id: 9, cat: 'appliance', brand: 'Midea', badge: 'sale',
    name: 'Midea 1.5HP Inverter Split AC',
    desc: 'Inverter compressor, R32 refrigerant, WiFi control via MSmartHome, 5-star energy rating, quick cool.',
    price: 'ZMW 6,400',
    img: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=480&q=80&auto=format&fit=crop'
  },
  {
    id: 10, cat: 'appliance', brand: 'Panasonic', badge: '',
    name: 'Panasonic 32L Inverter Microwave',
    desc: 'Inverter technology for uniform cooking, 1000W, Auto Cook programs, Genius Sensor, stainless interior.',
    price: 'ZMW 2,100',
    img: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=480&q=80&auto=format&fit=crop'
  },
  /* Audio */
  {
    id: 11, cat: 'audio', brand: 'Sony', badge: 'new',
    name: 'Sony HT-A9 Home Theatre System',
    desc: '360 Spatial Sound Mapping, Dolby Atmos, DTS:X, 504W total power, wireless surround, HDMI eARC.',
    price: 'ZMW 11,200',
    img: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=480&q=80&auto=format&fit=crop'
  },
  {
    id: 12, cat: 'audio', brand: 'Sony', badge: '',
    name: 'Sony WH-1000XM5 Headphones',
    desc: 'Industry-leading noise cancellation, 30hr battery, multipoint Bluetooth, speak-to-chat, crystal-clear calls.',
    price: 'ZMW 4,500',
    img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=480&q=80&auto=format&fit=crop'
  },
  {
    id: 13, cat: 'audio', brand: 'JBL', badge: '',
    name: 'JBL Charge 5 Portable Speaker',
    desc: 'IP67 waterproof & dustproof, 40W sound, 20-hour playtime, built-in power bank, PartyBoost capable.',
    price: 'ZMW 1,800',
    img: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=480&q=80&auto=format&fit=crop'
  },
  /* Laptops */
  {
    id: 14, cat: 'laptop', brand: 'HP', badge: '',
    name: 'HP Pavilion 15 — Core i5 13th Gen',
    desc: 'Intel Core i5-1335U, 16GB DDR4 RAM, 512GB NVMe SSD, 15.6" FHD IPS, Windows 11 Home, backlit keyboard.',
    price: 'ZMW 7,200',
    img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=480&q=80&auto=format&fit=crop'
  },
  {
    id: 15, cat: 'laptop', brand: 'Lenovo', badge: 'hot',
    name: 'Lenovo ThinkPad E14 Gen 5',
    desc: 'AMD Ryzen 5 7530U, 16GB DDR5, 512GB SSD, 14" FHD IPS, Windows 11 Pro, MIL-SPEC durability certified.',
    price: 'ZMW 8,800',
    img: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=480&q=80&auto=format&fit=crop'
  },
  {
    id: 16, cat: 'laptop', brand: 'ASUS', badge: 'sale',
    name: 'ASUS VivoBook 15 OLED',
    desc: '13th Gen Intel Core i5, 2.8K OLED 120Hz display, 8GB RAM, 512GB SSD, Harman/Kardon audio, slim chassis.',
    price: 'ZMW 6,500',
    img: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=480&q=80&auto=format&fit=crop'
  },
];

/* ---- Brand Data ---- */
const BRANDS = [
  { name: 'Samsung',   cat: 'TVs & Smartphones',  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/200px-Samsung_Logo.svg.png' },
  { name: 'Apple',     cat: 'iPhone & MacBook',    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/100px-Apple_logo_black.svg.png' },
  { name: 'LG',        cat: 'TVs & Appliances',    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/LG_logo_%282015%29.svg/200px-LG_logo_%282015%29.svg.png' },
  { name: 'Sony',      cat: 'Audio & TVs',         logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/200px-Sony_logo.svg.png' },
  { name: 'HP',        cat: 'Laptops & Printers',  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/120px-HP_logo_2012.svg.png' },
  { name: 'Lenovo',    cat: 'Laptops & PCs',       logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lenovo_logo_2015.svg/200px-Lenovo_logo_2015.svg.png' },
  { name: 'Hisense',   cat: 'TVs & Refrigerators', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Hisense_logo.svg/200px-Hisense_logo.svg.png' },
  { name: 'Panasonic', cat: 'Appliances',          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Panasonic_logo_%28Blue%29.svg/200px-Panasonic_logo_%28Blue%29.svg.png' },
  { name: 'JBL',       cat: 'Audio Systems',       logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/JBL_logo.svg/200px-JBL_logo.svg.png' },
  { name: 'ASUS',      cat: 'Laptops & Gaming',    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/ASUS_Logo.svg/200px-ASUS_Logo.svg.png' },
  { name: 'Midea',     cat: 'AC & Appliances',     logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Midea_logo.svg/200px-Midea_logo.svg.png' },
  { name: 'Tecno',     cat: 'Smartphones',         logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/TECNO_Mobile_logo.svg/200px-TECNO_Mobile_logo.svg.png' },
];

/* ---- Testimonials ---- */
const TESTIMONIALS = [
  { stars: 5, text: 'I purchased a Samsung QLED TV and LG refrigerator from Selmar. The staff were professional and knowledgeable. Prices are genuinely competitive and the products arrived with full warranty documentation. I will not shop elsewhere.', name: 'Mwansa Chanda', location: 'Ndola, Copperbelt', init: 'MC' },
  { stars: 5, text: 'Outstanding service. I called ahead to enquire about the iPhone 16 Pro, and the team reserved one for me at an excellent price. The process was quick and completely transparent. Highly professional establishment.', name: 'Bwalya Mutale', location: 'Ndola, Zambia', init: 'BM' },
  { stars: 5, text: 'I bought a Sony WH-1000XM5 for a business trip. The product was genuine, sealed, with a valid warranty card. The sales advisor was patient and helped me compare options. I sent three colleagues here already.', name: 'Fridah Kabwe', location: 'Kitwe, Copperbelt', init: 'FK' },
  { stars: 5, text: 'Three years as a customer and Selmar has never let me down. Genuine stock, honest pricing, and reliable after-sales support. When I had a warranty claim, it was resolved promptly without any argument.', name: 'Kaluba Ng\'andu', location: 'Ndola, Zambia', init: 'KN' },
  { stars: 5, text: 'I needed a laptop for university studies on a strict budget. The team listened to my requirements and suggested the perfect HP Pavilion. No pressure, no upselling. Just honest, helpful advice. Excellent shop.', name: 'Temwa Phiri', location: 'Mufulira, Zambia', init: 'TP' },
  { stars: 5, text: 'Selmar supplied six air conditioning units for our office. Installation guidance was thorough and all units came with valid manufacturer warranties. We will continue to source our electronics from Selmar.', name: 'David Mulenga', location: 'Ndola, Copperbelt', init: 'DM' },
];

/* ==================================================
   LOADER
   ================================================== */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('done');
  }, 1900);
});

/* ==================================================
   THEME TOGGLE (Light / Dark)
   ================================================== */
const html = document.documentElement;
const themeToggle = document.getElementById('themeToggle');

// Persist across sessions
const savedTheme = localStorage.getItem('selmar-theme') || 'dark';
html.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('selmar-theme', next);
  showToast(next === 'light' ? '☀️ Light mode enabled' : '🌙 Dark mode enabled');
});

/* ==================================================
   CUSTOM CURSOR (desktop only)
   ================================================== */
if (window.matchMedia('(pointer:fine)').matches) {
  const cur = document.getElementById('cursor');
  const fol = document.getElementById('cursor-follower');
  let mx = 0, my = 0, fx = 0, fy = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cur.style.left = mx + 'px';
    cur.style.top  = my + 'px';
  });

  (function animFol() {
    fx += (mx - fx) * 0.1;
    fy += (my - fy) * 0.1;
    fol.style.left = fx + 'px';
    fol.style.top  = fy + 'px';
    requestAnimationFrame(animFol);
  })();

  document.querySelectorAll('a,button,.product-card,.why-feat,.brand-card,.t-card,.filter-btn,.stag').forEach(el => {
    el.addEventListener('mouseenter', () => { cur.classList.add('hovered'); fol.classList.add('hovered'); });
    el.addEventListener('mouseleave', () => { cur.classList.remove('hovered'); fol.classList.remove('hovered'); });
  });
}

/* ==================================================
   ANNOUNCEMENT BAR
   ================================================== */
document.getElementById('announceClose')?.addEventListener('click', () => {
  document.getElementById('announceBar').style.display = 'none';
});

/* ==================================================
   NAVBAR — scroll & mobile
   ================================================== */
const navbar    = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  navbar.classList.toggle('scrolled', y > 10);
  backToTop.classList.toggle('visible', y > 500);
  updateActiveNavLink();
});

navToggle.addEventListener('click', () => {
  const expanded = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', expanded);
});

document.querySelectorAll('.nav-link').forEach(l => {
  l.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

function updateActiveNavLink() {
  const sections = ['hero','products','why-us','brands','testimonials','contact'];
  const offset = 80;
  let current = 'hero';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top <= offset) current = id;
  });
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.getAttribute('href') === `#${current}`);
  });
}

backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ==================================================
   SMOOTH SCROLL
   ================================================== */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({ top: target.offsetTop - 64, behavior: 'smooth' });
    }
  });
});

/* ==================================================
   SEARCH OVERLAY
   ================================================== */
const searchOverlay = document.getElementById('searchOverlay');
const searchInput   = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

document.getElementById('searchBtn').addEventListener('click', openSearch);
document.getElementById('searchClose').addEventListener('click', closeSearch);
searchOverlay.addEventListener('click', e => { if (e.target === searchOverlay) closeSearch(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSearch(); });

function openSearch() {
  searchOverlay.classList.add('open');
  setTimeout(() => searchInput.focus(), 150);
}
function closeSearch() {
  searchOverlay.classList.remove('open');
  searchInput.value = '';
  searchResults.innerHTML = '';
}

searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  searchResults.innerHTML = '';
  if (!q) return;
  const hits = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.brand.toLowerCase().includes(q) ||
    p.desc.toLowerCase().includes(q)
  ).slice(0, 5);
  hits.forEach(p => {
    const item = document.createElement('div');
    item.className = 'search-result-item';
    item.innerHTML = `
      <img class="sri-img" src="${p.img}" alt="${p.name}" loading="lazy" />
      <div style="flex:1;min-width:0">
        <div class="sri-name">${p.name}</div>
        <div class="sri-brand">${p.brand}</div>
      </div>
      <div class="sri-price">${p.price}</div>
    `;
    item.addEventListener('click', () => {
      closeSearch();
      enquireProduct(p.name);
    });
    searchResults.appendChild(item);
  });
  if (!hits.length) {
    searchResults.innerHTML = `<div style="padding:1rem 1.5rem;color:var(--text-muted);font-size:.88rem;">No results found for "${q}"</div>`;
  }
});

document.querySelectorAll('.stag').forEach(tag => {
  tag.addEventListener('click', () => {
    searchInput.value = tag.textContent;
    searchInput.dispatchEvent(new Event('input'));
    searchInput.focus();
  });
});

/* ==================================================
   HERO CANVAS (subtle grid)
   ================================================== */
(function initHeroCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    drawGrid();
  }

  function drawGrid() {
    ctx.clearRect(0, 0, W, H);
    const spacing = 48;
    ctx.strokeStyle = html.getAttribute('data-theme') === 'light'
      ? 'rgba(26,86,219,0.06)'
      : 'rgba(26,86,219,0.12)';
    ctx.lineWidth = 1;
    for (let x = 0; x <= W; x += spacing) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
    }
    for (let y = 0; y <= H; y += spacing) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }
  }

  resize();
  window.addEventListener('resize', resize);

  // Redraw on theme change
  const obs = new MutationObserver(drawGrid);
  obs.observe(html, { attributes: true, attributeFilter: ['data-theme'] });
})();

/* ==================================================
   COUNTER ANIMATION
   ================================================== */
function animateCount(el) {
  const target = parseInt(el.dataset.count);
  const duration = 2000;
  const fps = 60;
  const steps = (duration / 1000) * fps;
  let current = 0;
  const inc = target / steps;
  const id = setInterval(() => {
    current = Math.min(current + inc, target);
    el.textContent = Math.floor(current).toLocaleString();
    if (current >= target) clearInterval(id);
  }, 1000 / fps);
}

const metricObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCount(e.target);
      metricObs.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.metric-num').forEach(el => metricObs.observe(el));

/* ==================================================
   PRODUCTS GRID
   ================================================== */
function renderProducts(filter = 'all') {
  const grid = document.getElementById('productsGrid');
  const filtered = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === filter);
  grid.innerHTML = '';

  filtered.forEach(p => {
    const badgeHtml = p.badge
      ? `<span class="product-badge badge-${p.badge}">${p.badge.toUpperCase()}</span>`
      : '';
    const card = document.createElement('article');
    card.className = 'product-card';
    card.setAttribute('role', 'listitem');
    card.innerHTML = `
      <div class="product-img-wrap">
        <img src="${p.img}" alt="${p.name}" loading="lazy" />
        ${badgeHtml}
      </div>
      <div class="product-body">
        <div class="product-brand">${p.brand}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-footer">
          <div class="product-price">${p.price}</div>
          <button class="product-enquire" onclick="enquireProduct('${p.name.replace(/'/g,"\\'")}')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.63 19.79 19.79 0 013 1.18 2 2 0 014.11 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            Enquire
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  // Re-apply cursor hover to new cards
  if (window.matchMedia('(pointer:fine)').matches) {
    const cur = document.getElementById('cursor');
    const fol = document.getElementById('cursor-follower');
    document.querySelectorAll('.product-card').forEach(el => {
      el.addEventListener('mouseenter', () => { cur.classList.add('hovered'); fol.classList.add('hovered'); });
      el.addEventListener('mouseleave', () => { cur.classList.remove('hovered'); fol.classList.remove('hovered'); });
    });
  }
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    renderProducts(btn.dataset.filter);
  });
});

renderProducts();

/* ==================================================
   BRANDS GRID
   ================================================== */
const brandsGrid = document.getElementById('brandsGrid');
BRANDS.forEach(b => {
  const card = document.createElement('div');
  card.className = 'brand-card';
  card.innerHTML = `
    <img class="brand-logo-img" src="${b.logo}" alt="${b.name} logo" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='block'" />
    <span style="display:none;font-size:1.5rem;font-weight:800;color:var(--accent)">${b.name[0]}</span>
    <div class="brand-name">${b.name}</div>
    <div class="brand-cat">${b.cat}</div>
  `;
  brandsGrid.appendChild(card);
});

/* ==================================================
   TESTIMONIALS GRID
   ================================================== */
const tGrid = document.getElementById('testimonialsGrid');
TESTIMONIALS.forEach(t => {
  const card = document.createElement('div');
  card.className = 't-card';
  card.innerHTML = `
    <div class="t-stars">${'★'.repeat(t.stars)}</div>
    <p class="t-text">"${t.text}"</p>
    <div class="t-author">
      <div class="t-avatar">${t.init}</div>
      <div>
        <div class="t-name">${t.name}</div>
        <div class="t-location">${t.location}</div>
      </div>
    </div>
  `;
  tGrid.appendChild(card);
});

/* ==================================================
   COUNTDOWN TIMER (12 hours from load)
   ================================================== */
(function initCountdown() {
  const END = Date.now() + 12 * 60 * 60 * 1000;
  function tick() {
    const diff = Math.max(0, END - Date.now());
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    document.getElementById('cd-h').textContent = String(h).padStart(2, '0');
    document.getElementById('cd-m').textContent = String(m).padStart(2, '0');
    document.getElementById('cd-s').textContent = String(s).padStart(2, '0');
    if (diff > 0) setTimeout(tick, 1000);
  }
  tick();
})();

/* ==================================================
   SCROLL ANIMATIONS (Intersection Observer)
   ================================================== */
const animObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const delay = parseInt(e.target.dataset.delay || 0);
      setTimeout(() => e.target.classList.add('animated'), delay);
      animObs.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('[data-animate]').forEach(el => animObs.observe(el));

// Also animate product cards, feature cards on scroll
const cardObs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => {
        e.target.style.opacity = '1';
        e.target.style.transform = 'none';
      }, i * 60);
      cardObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

function observeCards() {
  document.querySelectorAll('.product-card, .t-card, .brand-card, .why-feat').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    cardObs.observe(el);
  });
}

// Run after products render
setTimeout(observeCards, 100);

/* ==================================================
   TOAST
   ================================================== */
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.innerHTML = `<span class="toast-dot"></span>${msg}`;
  toast.classList.add('visible');
  setTimeout(() => toast.classList.remove('visible'), 3500);
}

/* ==================================================
   WHATSAPP ENQUIRY
   ================================================== */
function enquireProduct(name) {
  const phone = '260777774388';
  const msg = encodeURIComponent(
    `Hello Selmar Electronics,\n\nI would like to enquire about the following product:\n\n*${name}*\n\nPlease advise on availability and pricing. Thank you.`
  );
  window.open(`https://wa.me/${phone}?text=${msg}`, '_blank', 'noopener');
  showToast('Opening WhatsApp enquiry…');
}

// Expose globally for inline onclick
window.enquireProduct = enquireProduct;

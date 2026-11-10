/* =====================================================
   SELMAR ELECTRONICS – MAIN JS
   ===================================================== */

'use strict';

/* ============ DATA ============ */
const PRODUCTS = [
  { id:1, cat:'tv',        emoji:'📺', brand:'Samsung',  name:'65" Neo QLED 4K TV',         desc:'Quantum HDR, 120Hz, SmartTV with Alexa built-in', price:'ZMW 18,500', badge:'Hot' },
  { id:2, cat:'tv',        emoji:'📺', brand:'LG',       name:'55" OLED evo C3 TV',          desc:'Perfect Black, Dolby Vision IQ, α9 AI Processor',  price:'ZMW 15,200', badge:'Sale' },
  { id:3, cat:'tv',        emoji:'📺', brand:'Hisense',  name:'50" ULED 4K Smart TV',        desc:'ULED X, 60Hz Pro, Full Array Local Dimming',       price:'ZMW 7,800',  badge:'' },
  { id:4, cat:'phone',     emoji:'📱', brand:'Apple',    name:'iPhone 16 Pro Max',           desc:'A18 Pro chip, 48MP camera system, ProMotion 120Hz', price:'ZMW 22,000', badge:'New' },
  { id:5, cat:'phone',     emoji:'📱', brand:'Samsung',  name:'Galaxy S25 Ultra',            desc:'200MP camera, Snapdragon 8 Elite, 6.9" AMOLED',    price:'ZMW 19,500', badge:'New' },
  { id:6, cat:'phone',     emoji:'📱', brand:'Tecno',    name:'Tecno Camon 30 Pro',          desc:'50MP OIS camera, 5G, 5000mAh battery',             price:'ZMW 3,200',  badge:'Sale' },
  { id:7, cat:'appliance', emoji:'🧊', brand:'LG',       name:'Side-by-Side Refrigerator',   desc:'617L InstaView Door-in-Door, Linear Inverter',     price:'ZMW 12,500', badge:'' },
  { id:8, cat:'appliance', emoji:'🫙', brand:'Samsung',  name:'Front Load Washer 9kg',       desc:'EcoBubble™, Digital Inverter, Steam+',             price:'ZMW 8,900',  badge:'Hot' },
  { id:9, cat:'appliance', emoji:'♨️', brand:'Panasonic',name:'1000W Microwave Oven',        desc:'Inverter technology, 32L capacity, Auto Cook',     price:'ZMW 2,100',  badge:'' },
  { id:10,cat:'appliance', emoji:'❄️', brand:'Midea',   name:'1.5 HP Split Air Conditioner',desc:'Inverter, R32, WiFi control, 5-star energy',       price:'ZMW 6,400',  badge:'Sale' },
  { id:11,cat:'audio',     emoji:'🔊', brand:'Sony',     name:'HT-A9 Home Theatre',          desc:'360 Spatial Sound, Dolby Atmos, DTS:X',            price:'ZMW 11,200', badge:'New' },
  { id:12,cat:'audio',     emoji:'🎧', brand:'Sony',     name:'WH-1000XM5 Headphones',       desc:'30hr battery, ANC, Crystal-clear calls',           price:'ZMW 4,500',  badge:'' },
  { id:13,cat:'audio',     emoji:'📻', brand:'JBL',      name:'JBL Charge 5 BT Speaker',     desc:'40W, IP67, 20hr playtime, Powerbank feature',      price:'ZMW 1,800',  badge:'' },
  { id:14,cat:'laptop',    emoji:'💻', brand:'HP',       name:'HP Pavilion 15 i5',           desc:'Intel Core i5-13th Gen, 16GB RAM, 512GB SSD',      price:'ZMW 7,200',  badge:'' },
  { id:15,cat:'laptop',    emoji:'💻', brand:'Lenovo',   name:'ThinkPad E14 Gen 5',          desc:'AMD Ryzen 5 7530U, 16GB, 512GB, Windows 11 Pro',   price:'ZMW 8,800',  badge:'Hot' },
  { id:16,cat:'laptop',    emoji:'💻', brand:'ASUS',     name:'VivoBook 15 OLED',            desc:'13th Gen Intel, OLED FHD, 8GB RAM, 512GB',         price:'ZMW 6,500',  badge:'Sale' },
];

const BRANDS = [
  { emoji:'📱', name:'Samsung',  tag:'TVs & Phones' },
  { emoji:'🍎', name:'Apple',    tag:'iPhone & iPad' },
  { emoji:'📺', name:'LG',       tag:'TVs & Appliances' },
  { emoji:'🎵', name:'Sony',     tag:'Audio & TVs' },
  { emoji:'🔊', name:'JBL',      tag:'Audio Systems' },
  { emoji:'💻', name:'HP',       tag:'Laptops & Printers' },
  { emoji:'🖥️', name:'Lenovo',   tag:'Laptops & PCs' },
  { emoji:'💡', name:'Panasonic',tag:'Appliances' },
  { emoji:'🌀', name:'Midea',    tag:'AC & Appliances' },
  { emoji:'📡', name:'Hisense',  tag:'TVs & Fridges' },
  { emoji:'📞', name:'Tecno',    tag:'Smartphones' },
  { emoji:'⚡', name:'ASUS',     tag:'Laptops & Gaming' },
];

const TESTIMONIALS = [
  { stars:5, text:"I bought my Samsung TV and LG fridge from Selmar and I'm absolutely amazed! The staff were incredibly helpful, prices are unbeatable and the quality is top notch. This is my go-to store forever!", name:'Mwansa Chanda', location:'Ndola, Copperbelt', init:'MC' },
  { stars:5, text:"Selmar Electronics is the BEST shop in Ndola! I got my iPhone 16 and they gave me an amazing deal. The team went above and beyond to help me. I sent 5 of my friends there already!", name:'Bwalya Mutale', location:'Ndola, Zambia', init:'BM' },
  { stars:5, text:"Very professional service. I bought a Sony sound system and it's exactly as described. Delivery was fast, installation advice was excellent. Highly recommend Selmar!", name:'Fridah Kabwe', location:'Kitwe, Copperbelt', init:'FK' },
  { stars:5, text:"I've been shopping at Selmar for 3 years and they've never disappointed me once. Genuine products, great after-sale support. I won't shop anywhere else for electronics!", name:'Kaluba Ng\'andu', location:'Ndola, Zambia', init:'KN' },
  { stars:5, text:"The microwave I bought broke after 2 months but Selmar sorted the warranty immediately with zero stress. That's real customer service. They've earned a customer for life!", name:'Temwa Phiri', location:'Mufulira, Zambia', init:'TP' },
  { stars:5, text:"Amazing variety and knowledgeable staff! I walked in confused about laptops and walked out with the perfect HP Pavilion at the best price. I love this shop so much!", name:'Lombe Kapumba', location:'Ndola, Copperbelt', init:'LK' },
];

/* ============ LOADER ============ */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
  }, 2000);
});

/* ============ CURSOR ============ */
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursor-follower');
let mx = 0, my = 0, fx = 0, fy = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});

(function animFollower() {
  fx += (mx - fx) * 0.12;
  fy += (my - fy) * 0.12;
  follower.style.left = fx + 'px';
  follower.style.top  = fy + 'px';
  requestAnimationFrame(animFollower);
})();

document.querySelectorAll('a,button,.product-card,.feature-card,.brand-card,.testimonial-card,.contact-card,.filter-tab,.tag,.back-to-top,.t-dot').forEach(el => {
  el.addEventListener('mouseenter', () => { cursor.classList.add('hovering'); follower.classList.add('hovering'); });
  el.addEventListener('mouseleave', () => { cursor.classList.remove('hovering'); follower.classList.remove('hovering'); });
});

/* ============ NAVBAR ============ */
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  document.getElementById('backToTop').classList.toggle('visible', window.scrollY > 400);
  updateActiveNav();
});

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
document.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', () => navLinks.classList.remove('open')));

function updateActiveNav() {
  const sections = ['hero','products','features','brands','testimonials','contact'];
  const scrollPos = window.scrollY + 100;
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    if (el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      const link = document.querySelector(`.nav-link[href="#${id}"]`);
      if (link) link.classList.add('active');
    }
  });
}

/* ============ SEARCH ============ */
const searchBtn     = document.getElementById('searchBtn');
const searchOverlay = document.getElementById('searchOverlay');
const searchClose   = document.getElementById('searchClose');
const searchInput   = document.getElementById('searchInput');

searchBtn.addEventListener('click', () => {
  searchOverlay.classList.add('open');
  setTimeout(() => searchInput.focus(), 200);
});
searchClose.addEventListener('click', () => searchOverlay.classList.remove('open'));
searchOverlay.addEventListener('click', e => { if (e.target === searchOverlay) searchOverlay.classList.remove('open'); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') searchOverlay.classList.remove('open'); });
document.querySelectorAll('.tag').forEach(t => {
  t.addEventListener('click', () => {
    searchInput.value = t.textContent;
    searchInput.focus();
  });
});

/* ============ PARTICLES ============ */
(function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  const ctx    = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x  = Math.random() * W;
      this.y  = Math.random() * H;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.r  = Math.random() * 2 + 0.5;
      this.a  = Math.random() * 0.5 + 0.1;
    }
    update() {
      this.x += this.vx; this.y += this.vy;
      if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,212,255,${this.a})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < 80; i++) particles.push(new Particle());

  function connect() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i+1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d  = Math.sqrt(dx*dx + dy*dy);
        if (d < 100) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0,212,255,${0.08 * (1 - d/100)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    connect();
    requestAnimationFrame(loop);
  }
  loop();
})();

/* ============ HERO COUNTER ANIMATION ============ */
function animateCounter(el) {
  const target = parseInt(el.dataset.count);
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = Math.floor(current).toLocaleString();
  }, 16);
}

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCounter(e.target);
      counterObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.stat-num').forEach(el => counterObserver.observe(el));

/* ============ PRODUCTS ============ */
function renderProducts(filter = 'all') {
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = '';
  PRODUCTS.forEach(p => {
    if (filter !== 'all' && p.cat !== filter) return;
    const badgeHtml = p.badge ? `<div class="product-badge ${p.badge==='New'?'new':''}">${p.badge}</div>` : '';
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-img">
        <span style="position:relative;z-index:1;">${p.emoji}</span>
        ${badgeHtml}
      </div>
      <div class="product-body">
        <div class="product-brand">${p.brand}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-footer">
          <div class="product-price">${p.price}</div>
          <button class="product-cta" onclick="enquire('${p.name}')" aria-label="Enquire">📞</button>
        </div>
      </div>
    `;
    card.style.animationDelay = `${Math.random()*0.3}s`;
    grid.appendChild(card);

    // hover cursor
    card.addEventListener('mouseenter', () => { cursor.classList.add('hovering'); follower.classList.add('hovering'); });
    card.addEventListener('mouseleave', () => { cursor.classList.remove('hovering'); follower.classList.remove('hovering'); });
  });
}

document.querySelectorAll('.filter-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderProducts(tab.dataset.filter);
  });
});

renderProducts();

/* ============ BRANDS ============ */
const brandsGrid = document.getElementById('brandsGrid');
BRANDS.forEach(b => {
  const card = document.createElement('div');
  card.className = 'brand-card';
  card.innerHTML = `<div class="brand-logo">${b.emoji}</div><div class="brand-name">${b.name}</div><div class="brand-tag">${b.tag}</div>`;
  brandsGrid.appendChild(card);
  card.addEventListener('mouseenter', () => { cursor.classList.add('hovering'); follower.classList.add('hovering'); });
  card.addEventListener('mouseleave', () => { cursor.classList.remove('hovering'); follower.classList.remove('hovering'); });
});

/* ============ TESTIMONIALS ============ */
const tTrack = document.getElementById('testimonialsTrack');
const tDots  = document.getElementById('testimonialDots');
TESTIMONIALS.forEach((t, i) => {
  const card = document.createElement('div');
  card.className = 'testimonial-card';
  card.innerHTML = `
    <div class="t-stars">${'★'.repeat(t.stars)}</div>
    <p class="t-text">${t.text}</p>
    <div class="t-author">
      <div class="t-avatar">${t.init}</div>
      <div>
        <div class="t-name">${t.name}</div>
        <div class="t-location">${t.location}</div>
      </div>
    </div>
  `;
  tTrack.appendChild(card);

  const dot = document.createElement('div');
  dot.className = 't-dot' + (i===0?' active':'');
  tDots.appendChild(dot);
});

/* ============ AOS (Scroll Animations) ============ */
const aosObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('aos-animate'), parseInt(e.target.dataset.aosDelay || 0));
      aosObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('[data-aos]').forEach(el => aosObserver.observe(el));

/* ============ COUNTDOWN TIMER ============ */
function startCountdown() {
  const END = Date.now() + 12*60*60*1000; // 12 hrs
  function tick() {
    const diff = Math.max(0, END - Date.now());
    const h = Math.floor(diff/3600000);
    const m = Math.floor((diff%3600000)/60000);
    const s = Math.floor((diff%60000)/1000);
    document.getElementById('cd-h').textContent = String(h).padStart(2,'0');
    document.getElementById('cd-m').textContent = String(m).padStart(2,'0');
    document.getElementById('cd-s').textContent = String(s).padStart(2,'0');
    if (diff > 0) setTimeout(tick, 1000);
  }
  tick();
}
startCountdown();

/* ============ BACK TO TOP ============ */
document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ============ TOAST ============ */
function showToast(msg, duration=3500) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

function enquire(productName) {
  const phone = '+260777774388';
  const msg = encodeURIComponent(`Hello Selmar Electronics! I'm interested in: ${productName}. Please let me know the availability and price. Thank you!`);
  window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
  showToast(`Opening WhatsApp to enquire about ${productName}…`);
}

/* ============ SMOOTH SCROLL ============ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
    }
  });
});

/* ============ LUCIDE ICONS ============ */
lucide.createIcons();

/* ============ PARALLAX HERO ============ */
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const hero = document.querySelector('.hero-content');
  if (hero && scrolled < window.innerHeight) {
    hero.style.transform = `translateY(${scrolled * 0.2}px)`;
    hero.style.opacity = 1 - scrolled / 600;
  }
});

console.log('%c⚡ Selmar Electronics', 'color:#00d4ff;font-size:24px;font-weight:900;font-family:Orbitron,sans-serif;');
console.log('%cNdola\'s #1 Electronics Store | Vitanda Street, Yengwe, Ndola, Zambia', 'color:#ff6b35;font-size:12px;');

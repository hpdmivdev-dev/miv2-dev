/**
 * Shared Components - Header (Mega Menu) and Footer
 * HPD MIV Website
 */

// =============================================================================
// FEATURED CARDS DATA
// =============================================================================
const featuredCards = {
  izleti: {
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=300&q=80",
    alt: "Hike",
    badge: "Sljedeći Veliki Izlet",
    title: "Vikend na Velebitu",
    description: "Dvodnevni izlet, spavanje na Zavižanu. Prijave do srijede.",
    buttonText: "Prijavi se",
    buttonLink: "trip.html?id=1"
  },
  clanstvo: {
    image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=300&q=80",
    alt: "Membership",
    badge: "Škola 2026",
    title: "Upisi u planinarsku školu",
    description: "Opća planinarska škola za početnike. Prijave do kraja mjeseca.",
    buttonText: "Saznaj više",
    buttonLink: "ops.html"
  },
  onama: {
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=300&q=80",
    alt: "About",
    badge: "Lokacija",
    title: "Trakošćanska 24, Varaždin",
    description: "Posjetite nas srijedom od 18-20h. Dođite na druženje!",
    buttonText: "Kako do nas",
    buttonLink: "index.html#kontakt"
  }
};

// =============================================================================
// HELPER: Generate Featured Card HTML
// =============================================================================
function getFeaturedCardHtml(cardType) {
  const card = featuredCards[cardType];
  return `
    <div class="col-span-2 bg-slate-50 rounded-xl p-4 flex gap-4 border border-slate-100">
      <img
        src="${card.image}"
        class="w-32 h-32 object-cover rounded-lg"
        alt="${card.alt}"
      />
      <div>
        <span class="text-[10px] font-bold text-brand-600 uppercase bg-brand-50 px-2 py-1 rounded">${card.badge}</span>
        <h4 class="font-bold text-slate-900 mt-2">${card.title}</h4>
        <p class="text-xs text-slate-500 mt-1 mb-3">${card.description}</p>
        <a href="${card.buttonLink}" class="text-xs font-bold text-white bg-slate-900 px-3 py-2 rounded hover:bg-slate-700 inline-block">${card.buttonText}</a>
      </div>
    </div>
  `;
}

// =============================================================================
// HEADER HTML TEMPLATE
// =============================================================================
function getHeaderHtml(activePage) {
  // Determine active states
  const isIzletiActive = activePage === 'izleti' || activePage === 'trip';
  const isClanstvoActive = activePage === 'clanstvo' || activePage === 'pristupnica';
  const isONamaActive = ['onama', 'povijest', 'vodstvo', 'sekcije', 'dokumenti', 'suradnja'].includes(activePage);
  const isObavijestiActive = activePage === 'novosti' || activePage === 'news';
  const isGalerijaActive = activePage === 'galerija';
  const isKontaktActive = activePage === 'kontakt';

  const getNavBtnClass = (isActive) => isActive 
    ? 'nav-btn h-full flex items-center gap-1 text-brand-600 border-b-2 border-brand-600 text-sm font-bold transition'
    : 'nav-btn h-full flex items-center gap-1 text-sm font-bold text-slate-600 hover:text-brand-600 transition';

  return `
    <!-- Skip to main content link for accessibility -->
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-brand-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold"
    >
      Preskoči na glavni sadržaj
    </a>

    <!-- Navigation -->
    <section class="relative z-30">
      <nav class="bg-white border-b border-slate-200 relative">
        <div class="container mx-auto px-6 h-20 flex justify-between items-center">
          <!-- Logo -->
          <a href="index.html" class="flex items-center gap-2">
            <img
              src="materials/logo.png"
              alt="HPD MIV"
              class="h-12 md:h-14 w-auto"
            />
          </a>

          <!-- Menu Links -->
          <div class="hidden md:flex gap-8 h-full">
            <button
              onclick="toggleMenu('opt1-izleti')"
              class="${getNavBtnClass(isIzletiActive)}"
            >
              Izleti
              <svg class="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <button
              onclick="toggleMenu('opt1-clanstvo')"
              class="${getNavBtnClass(isClanstvoActive)}"
            >
              Članstvo
              <svg class="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <button
              onclick="toggleMenu('opt1-onama')"
              class="${getNavBtnClass(isONamaActive)}"
            >
              O Nama
              <svg class="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <button
              onclick="toggleMenu('opt1-obavijesti')"
              class="${getNavBtnClass(isObavijestiActive)}"
            >
              Obavijesti
              <svg class="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <a
              href="gallery.html"
              class="h-full flex items-center text-sm font-bold ${isGalerijaActive ? 'text-brand-600 border-b-2 border-brand-600' : 'text-slate-600 hover:text-brand-600'} transition"
            >Galerija</a>
            <a
              href="contact.html"
              class="h-full flex items-center text-sm font-bold ${isKontaktActive ? 'text-brand-600' : 'text-slate-600 hover:text-brand-600'} transition"
            >Kontakt</a>
          </div>

          <!-- CTA -->
          <a
            href="pristupnica.html"
            class="bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-slate-800 transition"
          >Postani Član</a>
        </div>

        <!-- MEGA MENU: IZLETI -->
        <div
          id="opt1-izleti"
          class="mega-menu hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-mega z-50"
        >
          <div class="container mx-auto px-6 py-8">
            <div class="grid grid-cols-4 gap-8">
              <!-- Column 1 -->
              <div class="col-span-1">
                <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Plan Izleta</h3>
                <div class="space-y-4">
                  <a href="index.html#izleti" class="flex items-start gap-3 group">
                    <div class="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <div class="font-bold text-slate-900 text-sm">Kalendar 2025</div>
                      <div class="text-xs text-slate-500">Popis svih planiranih izleta</div>
                    </div>
                  </a>
                  <a href="https://hpdmiv.hr/wp-content/uploads/2025/12/hpdmiv.hr-hpdmiv-plan-izleta-2026-v22-hpdmiv-plan-izleta-2026-v22.pdf" class="flex items-start gap-3 group">
                    <div class="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <div class="font-bold text-slate-900 text-sm">Godišnji plan izleta</div>
                      <div class="text-xs text-slate-500">Godišnji plan društvenih izleta</div>
                    </div>
                  </a>
                </div>
              </div>
              <!-- Column 2 -->
              <div class="col-span-1">
                <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Info</h3>
                <div class="space-y-4">
                  <a href="#" class="flex items-start gap-3 group">
                    <div class="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                      </svg>
                    </div>
                    <div>
                      <div class="font-bold text-slate-900 text-sm">Izvještaji</div>
                      <div class="text-xs text-slate-500">Blog i galerije s izleta</div>
                    </div>
                  </a>
                  <a href="rules.html" class="flex items-start gap-3 group">
                    <div class="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <div class="font-bold text-slate-900 text-sm">Pravila i Težine</div>
                      <div class="text-xs text-slate-500">Što znače oznake K1/T1?</div>
                    </div>
                  </a>
                </div>
              </div>
              <!-- Featured Card -->
              ${getFeaturedCardHtml('izleti')}
            </div>
          </div>
        </div>

        <!-- MEGA MENU: ČLANSTVO -->
        <div
          id="opt1-clanstvo"
          class="mega-menu hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-mega z-50"
        >
          <div class="container mx-auto px-6 py-8">
            <div class="grid grid-cols-4 gap-8">
              <!-- Column 1 -->
              <div class="col-span-1">
                <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Članstvo</h3>
                <div class="space-y-4">
                  <a href="pristupnica.html" class="flex items-start gap-3 group">
                    <div class="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                      </svg>
                    </div>
                    <div>
                      <div class="font-bold text-slate-900 text-sm">Postani Član</div>
                      <div class="text-xs text-slate-500">Cjenik, pogodnosti i online upis</div>
                    </div>
                  </a>
                  <a href="ops.html" class="flex items-start gap-3 group">
                    <div class="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                      </svg>
                    </div>
                    <div>
                      <div class="font-bold text-slate-900 text-sm">Planinarska Škola</div>
                      <div class="text-xs text-slate-500">Edukacija za početnike</div>
                    </div>
                  </a>
                </div>
              </div>
              <!-- Column 2 -->
              <div class="col-span-1">
                <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Oprema</h3>
                <div class="space-y-4">
                  <a href="#" class="flex items-start gap-3 group">
                    <div class="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                      </svg>
                    </div>
                    <div>
                      <div class="font-bold text-slate-900 text-sm">Najam Opreme</div>
                      <div class="text-xs text-slate-500">Kacige, pojasevi i setovi</div>
                    </div>
                  </a>
                  <a href="#" class="flex items-start gap-3 group">
                    <div class="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    </div>
                    <div>
                      <div class="font-bold text-slate-900 text-sm">Osiguranje članova</div>
                      <div class="text-xs text-slate-500">Uvjeti i police</div>
                    </div>
                  </a>
                </div>
              </div>
              <!-- Featured Card -->
              ${getFeaturedCardHtml('clanstvo')}
            </div>
          </div>
        </div>

        <!-- MEGA MENU: O NAMA -->
        <div
          id="opt1-onama"
          class="mega-menu hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-mega z-50"
        >
          <div class="container mx-auto px-6 py-8">
            <div class="grid grid-cols-4 gap-8">
              <!-- Column 1: Organizacija -->
              <div class="col-span-1">
                <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Organizacija</h3>
                <div class="space-y-4">
                  <a href="povijest.html" class="flex items-start gap-3 group">
                    <div class="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <div class="font-bold text-slate-900 text-sm">Povijest HPD MIV</div>
                      <div class="text-xs text-slate-500">Naša bogata tradicija</div>
                    </div>
                  </a>
                  <a href="vodstvo.html" class="flex items-start gap-3 group">
                    <div class="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <div class="font-bold text-slate-900 text-sm">Vodstvo Društva</div>
                      <div class="text-xs text-slate-500">Uprava i odbori</div>
                    </div>
                  </a>
                  <a href="sekcije.html" class="flex items-start gap-3 group">
                    <div class="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                      </svg>
                    </div>
                    <div>
                      <div class="font-bold text-slate-900 text-sm">Sekcije i komisije</div>
                      <div class="text-xs text-slate-500">Djelatnosti društva</div>
                    </div>
                  </a>
                </div>
              </div>
              <!-- Column 2: Dokumenti i suradnja -->
              <div class="col-span-1">
                <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Dokumenti i suradnja</h3>
                <div class="space-y-4">
                  <a href="dokumenti.html" class="flex items-start gap-3 group">
                    <div class="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <div class="font-bold text-slate-900 text-sm">Dokumenti</div>
                      <div class="text-xs text-slate-500">Službeni dokumenti</div>
                    </div>
                  </a>
                  <a href="suradnja.html" class="flex items-start gap-3 group">
                    <div class="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <div class="font-bold text-slate-900 text-sm">Suradnja</div>
                      <div class="text-xs text-slate-500">Partneri društva</div>
                    </div>
                  </a>
                </div>
              </div>
              <!-- Featured Card -->
              ${getFeaturedCardHtml('onama')}
            </div>
          </div>
        </div>

        <!-- MEGA MENU: OBAVIJESTI -->
        <div
          id="opt1-obavijesti"
          class="mega-menu hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-mega z-50"
        >
          <div class="container mx-auto px-6 py-8">
            <div class="grid grid-cols-4 gap-8">
              <!-- Column 1 -->
              <div class="col-span-1">
                <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Novosti</h3>
                <div class="space-y-4">
                  <a href="news.html" class="flex items-start gap-3 group">
                    <div class="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                      </svg>
                    </div>
                    <div>
                      <div class="font-bold text-slate-900 text-sm">Novosti</div>
                      <div class="text-xs text-slate-500">Aktualna događanja i najave</div>
                    </div>
                  </a>
                </div>
              </div>
              <!-- Column 2 -->
              <div class="col-span-1">
                <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Info letci</h3>
                <div class="space-y-4">
                  <a href="https://hpdmiv.hr/wp-content/uploads/2026/01/hpdmiv.hr-info-list-veljaca-info-list-veljaca.pdf" target="_blank" class="flex items-start gap-3 group">
                    <div class="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <div class="font-bold text-slate-900 text-sm">Mjesečni info letak</div>
                      <div class="text-xs text-slate-500">Preuzmi PDF za ovaj mjesec</div>
                    </div>
                  </a>
                  <a href="https://hpdmiv.hr/wp-content/uploads/2025/07/hpdmiv.hr-hpd-miv-varazdin-g.info-2025-hpd-miv-varazdin-g.info-2025-2.pdf" target="_blank" class="flex items-start gap-3 group">
                    <div class="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                      </svg>
                    </div>
                    <div>
                      <div class="font-bold text-slate-900 text-sm">Godišnji info letak</div>
                      <div class="text-xs text-slate-500">Godišnje obavijesti HPD MIV</div>
                    </div>
                  </a>
                </div>
              </div>
              <!-- Featured Card -->
              ${getFeaturedCardHtml('onama')}
            </div>
          </div>
        </div>
      </nav>
    </section>
  `;
}

// =============================================================================
// FOOTER HTML TEMPLATE
// =============================================================================
function getFooterHtml() {
  return `
    <footer class="relative bg-slate-900 text-white pt-20 pb-8 overflow-hidden">
      <!-- Decorative mountain background -->
      <div
        class="absolute bottom-0 left-0 w-full h-40 opacity-[0.06] pointer-events-none z-0"
        style="
          background-image: url('materials/mountain-range-2.png');
          background-repeat: repeat-x;
          background-position: bottom center;
          background-size: contain;
          filter: invert(1);
        "
      ></div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <!-- Column 1: About -->
          <div>
            <a href="index.html" class="inline-block mb-4">
              <img src="materials/logo.png" alt="HPD MIV" class="h-14" />
            </a>
            <p class="text-slate-400 text-sm mb-6 leading-relaxed">
              Hrvatsko planinarsko društvo "MIV" Varaždin - više od 40 godina tradicije, planinarstva i zajedništva.
            </p>
            <div class="flex gap-3">
              <a href="#" class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white transition">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white transition">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white transition">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Column 2: Quick Links -->
          <div>
            <h4 class="font-bold text-white mb-6 text-sm uppercase tracking-wider">Brzi linkovi</h4>
            <ul class="space-y-3">
              <li><a href="index.html#izleti" class="text-slate-400 hover:text-white transition text-sm">Kalendar izleta</a></li>
              <li><a href="pristupnica.html" class="text-slate-400 hover:text-white transition text-sm">Članstvo</a></li>
              <li><a href="ops.html" class="text-slate-400 hover:text-white transition text-sm">Planinarska škola</a></li>
              <li><a href="index.html#novosti" class="text-slate-400 hover:text-white transition text-sm">Novosti</a></li>
              <li><a href="#" class="text-slate-400 hover:text-white transition text-sm">Česta pitanja</a></li>
            </ul>
          </div>

          <!-- Column 3: Organization -->
          <div>
            <h4 class="font-bold text-white mb-6 text-sm uppercase tracking-wider">O društvu</h4>
            <ul class="space-y-3">
              <li><a href="povijest.html" class="text-slate-400 hover:text-white transition text-sm">Povijest</a></li>
              <li><a href="vodstvo.html" class="text-slate-400 hover:text-white transition text-sm">Vodstvo</a></li>
              <li><a href="dokumenti.html" class="text-slate-400 hover:text-white transition text-sm">Dokumenti</a></li>
              <li><a href="suradnja.html" class="text-slate-400 hover:text-white transition text-sm">Suradnja</a></li>
            </ul>
          </div>

          <!-- Column 4: Contact -->
          <div>
            <h4 class="font-bold text-white mb-6 text-sm uppercase tracking-wider">Kontakt</h4>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-slate-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span class="text-slate-400 text-sm">Trakošćanska 24<br/>42000 Varaždin</span>
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-slate-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <a href="mailto:info@hpdmiv.hr" class="text-slate-400 hover:text-white transition text-sm">info@hpdmiv.hr</a>
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-slate-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span class="text-slate-400 text-sm">Srijedom 18:00 – 20:00</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-slate-500 text-sm">© 2026 HPD MIV Varaždin. Sva prava pridržana.</p>
          <div class="flex gap-6">
            <a href="#" class="text-slate-500 hover:text-white transition text-sm">Privatnost</a>
            <a href="#" class="text-slate-500 hover:text-white transition text-sm">Uvjeti korištenja</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

// =============================================================================
// SCROLL TO TOP HTML TEMPLATE
// =============================================================================
function getScrollToTopHtml() {
  return `
    <button
      id="scroll-to-top"
      class="fixed bottom-8 right-8 w-12 h-12 bg-slate-900 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform translate-y-20 opacity-0 z-50 hover:bg-slate-800 hover:-translate-y-1"
      aria-label="Scroll to top"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
      </svg>
    </button>
  `;
}

// =============================================================================
// MEGA MENU FUNCTIONS
// =============================================================================
function toggleMenu(menuId) {
  const allMenus = document.querySelectorAll(".mega-menu");
  allMenus.forEach((menu) => {
    if (menu.id !== menuId) {
      menu.classList.add("hidden");
      menu.classList.remove("active");
    }
  });

  const menu = document.getElementById(menuId);
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    setTimeout(() => {
      menu.classList.add("active");
    }, 10);
  } else {
    menu.classList.remove("active");
    setTimeout(() => {
      menu.classList.add("hidden");
    }, 200);
  }
}

// Close menus when clicking outside
document.addEventListener("click", function (event) {
  const isClickInsideNav = event.target.closest("nav");
  if (!isClickInsideNav) {
    const allMenus = document.querySelectorAll(".mega-menu");
    allMenus.forEach((menu) => {
      menu.classList.remove("active");
      setTimeout(() => {
        menu.classList.add("hidden");
      }, 200);
    });
  }
});

// =============================================================================
// FADE-IN OBSERVER
// =============================================================================
function initFadeInObserver() {
  const fadeInSections = document.querySelectorAll(".fade-in-section");
  
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeInSections.forEach((section) => {
    fadeInObserver.observe(section);
  });
}

// =============================================================================
// CUSTOM SCROLLBAR
// =============================================================================
function initCustomScrollbar() {
  const style = document.createElement('style');
  style.textContent = `
    /* Custom Scrollbar */
    ::-webkit-scrollbar {
      width: 14px;
    }

    ::-webkit-scrollbar-track {
      background: #f8fafc; /* slate-50 */
    }

    ::-webkit-scrollbar-thumb {
      background: #0f172a; /* slate-900 */
      border: 4px solid #f8fafc;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #1e293b; /* slate-800 */
    }

    /* Scrollbar buttons (arrows) */
    ::-webkit-scrollbar-button:single-button {
      background-color: #0f172a;
      display: block;
      background-size: 10px;
      background-repeat: no-repeat;
      background-position: center;
      height: 14px;
      width: 14px;
    }

    /* Up arrow */
    ::-webkit-scrollbar-button:single-button:vertical:decrement {
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'><path d='M7 14l5-5 5 5z'/></svg>");
      border-radius: 4px 4px 0 0;
    }

    /* Down arrow */
    ::-webkit-scrollbar-button:single-button:vertical:increment {
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'><path d='M7 10l5 5 5-5z'/></svg>");
      border-radius: 0 0 4px 4px;
    }

    /* Firefox support */
    * {
      scrollbar-width: thin;
      scrollbar-color: #0f172a #f8fafc;
    }
  `;
  document.head.appendChild(style);
}

// =============================================================================
// SCROLL TO TOP LOGIC
// =============================================================================
function initScrollToTop() {
  // Create and append the button if it doesn't exist
  if (!document.getElementById('scroll-to-top')) {
    const div = document.createElement('div');
    div.innerHTML = getScrollToTopHtml();
    document.body.appendChild(div.firstElementChild);
  }

  const scrollBtn = document.getElementById('scroll-to-top');
  
  // Show/hide button on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollBtn.classList.remove('translate-y-20', 'opacity-0');
      scrollBtn.classList.add('translate-y-0', 'opacity-100');
    } else {
      scrollBtn.classList.add('translate-y-20', 'opacity-0');
      scrollBtn.classList.remove('translate-y-0', 'opacity-100');
    }
  });

  // Scroll to top on click
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// =============================================================================
// INIT FUNCTIONS
// =============================================================================
function initHeader(activePage = 'home') {
  const headerContainer = document.getElementById('site-header');
  if (headerContainer) {
    headerContainer.innerHTML = getHeaderHtml(activePage);
  }
}

function initFooter() {
  const footerContainer = document.getElementById('site-footer');
  if (footerContainer) {
    footerContainer.innerHTML = getFooterHtml();
  }
}

function initSharedComponents(activePage = 'home') {
  initHeader(activePage);
  initFooter();
  initFadeInObserver();
  initScrollToTop();
  initCustomScrollbar();
}

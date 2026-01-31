/**
 * Mock News Data for HPD MIV Website Preview
 */

const NEWS_TYPES = {
  IMPORTANT: { 
    name: 'Važno', 
    bgClass: 'bg-red-50', 
    textClass: 'text-red-700', 
    borderClass: 'border-red-100',
    heroBadgeClass: 'bg-red-500/20 border-red-400/30'
  },
  REPORT: { 
    name: 'Izvještaj', 
    bgClass: 'bg-slate-50', 
    textClass: 'text-slate-600', 
    borderClass: 'border-slate-200',
    heroBadgeClass: 'bg-blue-500/20 border-blue-400/30'
  },
  EDUCATION: { 
    name: 'Edukacija', 
    bgClass: 'bg-blue-50', 
    textClass: 'text-blue-600', 
    borderClass: 'border-blue-100',
    heroBadgeClass: 'bg-indigo-500/20 border-indigo-400/30'
  },
  EVENT: { 
    name: 'Događaj', 
    bgClass: 'bg-green-50', 
    textClass: 'text-green-600', 
    borderClass: 'border-green-100',
    heroBadgeClass: 'bg-emerald-500/20 border-emerald-400/30'
  },
  ANNOUNCEMENT: { 
    name: 'Obavijest', 
    bgClass: 'bg-amber-50', 
    textClass: 'text-amber-600', 
    borderClass: 'border-amber-100',
    heroBadgeClass: 'bg-amber-500/20 border-amber-400/30'
  }
};

const MOCK_NEWS = [
  {
    id: 1,
    type: 'IMPORTANT',
    title: 'Promjena radnog vremena ureda tijekom blagdana',
    date: '2025-12-10',
    excerpt: 'Zbog nadolazećih božićnih i novogodišnjih blagdana, ured društva radit će prema prilagođenom rasporedu. Provjerite nove termine za uplatu članarina i preuzimanje markica.',
    content: `
      <p>Poštovani članovi i prijatelji HPD MIV Varaždin,</p>
      
      <p>Obavještavamo vas da će tijekom božićnih i novogodišnjih blagdana ured društva raditi prema prilagođenom rasporedu:</p>
      
      <h3>Blagdanski raspored</h3>
      <ul>
        <li><strong>23.12. (ponedjeljak)</strong> – Redovno radno vrijeme (17:00 - 19:00)</li>
        <li><strong>24.12. - 26.12.</strong> – Zatvoreno (Badnjak, Božić)</li>
        <li><strong>27.12. (petak)</strong> – Redovno radno vrijeme (17:00 - 19:00)</li>
        <li><strong>30.12. (ponedjeljak)</strong> – Redovno radno vrijeme (17:00 - 19:00)</li>
        <li><strong>31.12. - 01.01.</strong> – Zatvoreno (Nova godina)</li>
        <li><strong>03.01. (petak)</strong> – Redovno radno vrijeme (17:00 - 19:00)</li>
      </ul>
      
      <h3>Važne napomene</h3>
      <p>Molimo sve članove koji trebaju obaviti uplatu članarine ili preuzeti markice da to učine prije ili nakon blagdana prema gore navedenom rasporedu.</p>
      
      <p>Za hitne upite možete nas kontaktirati putem e-maila: <a href="mailto:info@hpd-miv.hr">info@hpd-miv.hr</a></p>
      
      <p>Želimo vam ugodne blagdane i sretnu Novu godinu!</p>
      
      <p><em>Uprava HPD MIV Varaždin</em></p>
    `,
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80',
    author: 'Uprava HPD MIV'
  },
  {
    id: 2,
    type: 'REPORT',
    title: 'Održana redovna godišnja skupština društva',
    date: '2025-12-05',
    excerpt: 'U prostoru kulturne udruge održana je redovna skupština. Usvojeni su financijski planovi za 2026. godinu, izvještaj o radu sekcija i dodijeljena su priznanja zaslužnim članovima za dugogodišnji rad.',
    content: `
      <p>Dana 05. prosinca 2025. godine održana je redovna godišnja skupština Hrvatskog planinarskog društva MIV Varaždin u prostoru Kulturne udruge Varaždin.</p>
      
      <h3>Dnevni red</h3>
      <ol>
        <li>Izbor radnih tijela skupštine</li>
        <li>Izvještaj o radu u 2025. godini</li>
        <li>Financijski izvještaj za 2025. godinu</li>
        <li>Plan rada za 2026. godinu</li>
        <li>Financijski plan za 2026. godinu</li>
        <li>Dodjela priznanja zaslužnim članovima</li>
        <li>Razno</li>
      </ol>
      
      <h3>Izvještaj o radu</h3>
      <p>Predsjednik društva Ivan Horvat iznio je izvještaj o aktivnostima u protekloj godini. Organizirano je ukupno 48 izleta s prosječno 35 sudionika po izletu. Posebno uspješni bili su višednevni izleti na Velebit i Julijske Alpe.</p>
      
      <h3>Priznanja</h3>
      <p>Za dugogodišnji rad i doprinos društvu priznanja su dobili:</p>
      <ul>
        <li>Ana Kovač - 30 godina aktivnog članstva</li>
        <li>Marko Petrović - vodič godine</li>
        <li>Petra Novak - najbolji organizator</li>
      </ul>
      
      <p>Hvala svim članovima koji su prisustvovali skupštini!</p>
    `,
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
    author: 'Tajništvo HPD MIV'
  },
  {
    id: 3,
    type: 'EDUCATION',
    title: 'Završena 16. opća planinarska škola',
    date: '2025-11-28',
    excerpt: 'Čestitamo svim polaznicima opće planinarske škole na uspješno položenom završnom ispitu na Ravnoj gori. Podjela diploma održat će se ove srijede u prostorijama društva nakon sastanka.',
    content: `
      <p>S ponosom objavljujemo da je uspješno završena 16. opća planinarska škola HPD MIV Varaždin!</p>
      
      <h3>O školi</h3>
      <p>Škola je trajala od rujna do studenog 2025. godine i obuhvatila je teorijski i praktični dio. Polaznici su naučili osnove orijentacije, meteorologije, prve pomoći u planinama te sigurnog kretanja planinskim terenima.</p>
      
      <h3>Praktični dio</h3>
      <p>Završni ispit održan je na Ravnoj gori gdje su polaznici demonstrirali stečena znanja kroz:</p>
      <ul>
        <li>Orijentaciju s kartom i busolom</li>
        <li>Prepoznavanje vremenskih uvjeta</li>
        <li>Pravilno pakiranje ruksaka</li>
        <li>Kretanje različitim tipovima terena</li>
        <li>Simulaciju prve pomoći</li>
      </ul>
      
      <h3>Podjela diploma</h3>
      <p><strong>Datum:</strong> Srijeda, 04.12.2025.</p>
      <p><strong>Vrijeme:</strong> 19:30 (nakon redovnog sastanka)</p>
      <p><strong>Mjesto:</strong> Prostorije HPD MIV</p>
      
      <p>Čestitamo svim polaznicima i dobrodošli u svijet planinarenja! 🏔️</p>
    `,
    image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=800&q=80',
    author: 'Voditelj planinarske škole'
  }
];

// Helper functions
function getNewsById(id) {
  return MOCK_NEWS.find(news => news.id === parseInt(id));
}

function getNewsType(typeKey) {
  return NEWS_TYPES[typeKey] || NEWS_TYPES.ANNOUNCEMENT;
}

function formatNewsDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const months = ['Siječnja', 'Veljače', 'Ožujka', 'Travnja', 'Svibnja', 'Lipnja', 
                  'Srpnja', 'Kolovoza', 'Rujna', 'Listopada', 'Studenog', 'Prosinca'];
  const year = date.getFullYear();
  return `${day}. ${months[date.getMonth()]} ${year}.`;
}

function formatNewsDateShort(dateString) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const months = ['SIJ', 'VEL', 'OŽU', 'TRA', 'SVI', 'LIP', 'SRP', 'KOL', 'RUJ', 'LIS', 'STU', 'PRO'];
  return `${day}. ${months[date.getMonth()]}`;
}

/**
 * Mock Trip Data for HPD MIV Website Preview
 * Based on: backoffice/src/app/core/models/trip.model.ts
 */

const MOCK_TRIPS = [
  // Trip 1: Multi-day - Velebit Weekend
  {
    id: 1,
    tripType: 'multi-day',
    tripName: 'Vikend na Velebitu – Alan i Zavižan',
    startDate: '2026-02-15',
    endDate: '2026-02-16',
    guides: ['Ivan Horvat', 'Ana Kovač'],
    departure: 'Parking Mercator, Varaždin - 06:00',
    section: 'Visokogorska sekcija',
    transport: 'Autobusom',
    fitnessDifficulty: 'K2',
    technicalDifficulty: 'T2',
    memberPrice: 45,
    nonMemberPrice: 60,
    food: 'Doručak i večera u domu',
    returnInfo: 'Povratak u Varaždin oko 20:00 u nedjelju',
    description: 'Dvodnevni izlet na Velebit s noćenjem u planinarskom domu Zavižan.',
    dayDescriptions: [
      {
        date: '2026-02-15',
        description: `<p><strong>06:00</strong> – Polazak autobusom s parkinga kod Mercatora u Varaždinu. Vožnja prema Velebitu s kratkim odmorima.</p>
<p><strong>10:30</strong> – Dolazak na polazište. Priprema opreme i kratki briefing s vodičima.</p>
<p><strong>11:00</strong> – Početak uspona prema vrhu Alan (1601 m). Ruta vodi kroz prekrasnu bukovu šumu i krške predjele.</p>
<p><strong>14:00</strong> – Dolazak na vrh. Pauza za ručak s panoramskim pogledom na Jadransko more i otoke.</p>
<p><strong>15:30</strong> – Nastavak prema planinarskom domu Zavižan. Spust grebenom s pogledom na Liku.</p>
<p><strong>18:00</strong> – Dolazak u dom. Smještaj i večera. Druženje uz pejzaže Velebita.</p>`
      },
      {
        date: '2026-02-16',
        description: `<p><strong>08:00</strong> – Doručak u planinarskom domu.</p>
<p><strong>09:30</strong> – Posjet Velebitskom botaničkom vrtu. Obilazak endemskih biljaka karakterističnih za ovaj prostor.</p>
<p><strong>11:00</strong> – Lagana šetnja okolnim stazama s pogledom na Liku i primorski dio.</p>
<p><strong>13:00</strong> – Ručak i priprema za povratak.</p>
<p><strong>14:00</strong> – Polazak autobusom prema Varaždinu.</p>
<p><strong>~20:00</strong> – Očekivani dolazak u Varaždin.</p>`
      }
    ],
    notes: 'Obavezna zimska oprema: dereze, cepin, topla odjeća u slojevima. Prenoćište u domu je uključeno u cijenu. Potrebno je ponijeti vreću za spavanje.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop',
    status: 'open', // open, limited, full
    spotsLeft: null
  },

  // Trip 2: Multi-day - Slovenia Alps
  {
    id: 2,
    tripType: 'multi-day',
    tripName: 'Julijske Alpe – Triglav',
    startDate: '2026-03-07',
    endDate: '2026-03-09',
    guides: ['Marko Petrović', 'Luka Jurić'],
    departure: 'Parking Mercator, Varaždin - 05:00',
    section: 'Visokogorska sekcija',
    transport: 'Autobusom',
    fitnessDifficulty: 'K3',
    technicalDifficulty: 'T3',
    memberPrice: 120,
    nonMemberPrice: 150,
    food: 'Pansion u domu (doručak, večera)',
    returnInfo: 'Povratak u Varaždin u nedjelju navečer oko 21:00',
    description: 'Trodnevna avantura na najviši vrh Slovenije - Triglav (2864m). Zahtjevan izlet za iskusne planinare.',
    dayDescriptions: [
      {
        date: '2026-03-07',
        description: `<p><strong>05:00</strong> – Polazak iz Varaždina autobusom.</p>
<p><strong>09:00</strong> – Dolazak na polazište Rudno Polje (1340m).</p>
<p><strong>10:00</strong> – Početak uspona prema Domu Planika (2401m).</p>
<p><strong>15:00</strong> – Dolazak u dom. Smještaj i odmor.</p>
<p><strong>18:00</strong> – Večera i pripreme za sutrašnji uspon na vrh.</p>`
      },
      {
        date: '2026-03-08',
        description: `<p><strong>06:00</strong> – Rani doručak.</p>
<p><strong>07:00</strong> – Polazak prema vrhu Triglava (2864m).</p>
<p><strong>10:00</strong> – Dolazak na vrh! Fotografiranje i uživanje u pogledu.</p>
<p><strong>11:00</strong> – Spust prema Domu Planika.</p>
<p><strong>14:00</strong> – Ručak u domu.</p>
<p><strong>15:00</strong> – Slobodno vrijeme, istraživanje okolice.</p>
<p><strong>18:00</strong> – Večera i druženje.</p>`
      },
      {
        date: '2026-03-09',
        description: `<p><strong>08:00</strong> – Doručak i pakiranje.</p>
<p><strong>09:00</strong> – Spust prema Rudnom Polju.</p>
<p><strong>13:00</strong> – Dolazak na parkiralište. Ručak u okolnom restoranu.</p>
<p><strong>15:00</strong> – Polazak autobusom prema Varaždinu.</p>
<p><strong>~21:00</strong> – Očekivani dolazak u Varaždin.</p>`
      }
    ],
    notes: 'Potrebna kompletna alpinistička oprema (dereze, cepin, pojas, kaciga). Iskustvo s visokogorskim turama je obavezno. Provjera uvjeta dan prije polaska.',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
    status: 'limited',
    spotsLeft: 3
  },

  // Trip 3: Single-day - Kalnik
  {
    id: 3,
    tripType: 'single-day',
    tripDate: '2026-02-22',
    tripName: 'Kalnik: Sedam Zubi',
    guides: ['Petra Novak'],
    departure: 'Parking Mercator, Varaždin - 07:30',
    section: 'Izletnička sekcija',
    transport: 'Vlastitim automobilima',
    fitnessDifficulty: 'K1',
    technicalDifficulty: 'T1',
    memberPrice: 0,
    nonMemberPrice: 10,
    food: 'Vlastiti ručak / mogućnost u restoranu',
    returnInfo: 'Povratak u Varaždin oko 16:00',
    description: 'Popularna staza grebenom Kalnika s prekrasnim vidicima prema Prigorju i Zagorju. Idealno za početnike i obitelji.',
    notes: null,
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80',
    status: 'open',
    spotsLeft: null
  }
];

// Helper functions
function getTripById(id) {
  return MOCK_TRIPS.find(trip => trip.id === parseInt(id));
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const months = ['siječnja', 'veljače', 'ožujka', 'travnja', 'svibnja', 'lipnja', 
                  'srpnja', 'kolovoza', 'rujna', 'listopada', 'studenog', 'prosinca'];
  return `${day}. ${months[date.getMonth()]}`;
}

function formatDateShort(dateString) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const months = ['SIJ', 'VEL', 'OŽU', 'TRA', 'SVI', 'LIP', 'SRP', 'KOL', 'RUJ', 'LIS', 'STU', 'PRO'];
  return { day, month: months[date.getMonth()] };
}

function getDayName(dateString) {
  const date = new Date(dateString);
  const days = ['Nedjelja', 'Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak', 'Subota'];
  return days[date.getDay()];
}

function getDifficultyColor(difficulty) {
  if (difficulty.includes('1')) return { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-100' };
  if (difficulty.includes('2')) return { bg: 'bg-yellow-50', text: 'text-yellow-700', border: 'border-yellow-100' };
  if (difficulty.includes('3')) return { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-100' };
  return { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-100' };
}

function getStatusBadge(trip) {
  if (trip.status === 'full') {
    return { text: 'Popunjeno', class: 'bg-slate-800 text-white' };
  }
  if (trip.status === 'limited') {
    return { text: `Još ${trip.spotsLeft} mjesta`, class: 'bg-orange-500 text-white' };
  }
  return { text: 'Prijave Otvorene', class: 'bg-green-500 text-white' };
}

function getTransportIcon(transport) {
  if (transport.toLowerCase().includes('autobus')) {
    return `<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
    </svg>`;
  }
  return `<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
  </svg>`;
}

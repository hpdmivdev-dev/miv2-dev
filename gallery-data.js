/**
 * Gallery Data - Photo Albums
 * HPD MIV Website
 */

const galleryAlbums = [
  // 2025 Albums
  {
    id: 1,
    title: "Zimski uspon na Sljeme",
    date: "2025-01-15",
    year: 2025,
    coverImage: "https://images.unsplash.com/photo-1418985991508-e47386d96a71?auto=format&fit=crop&w=600&q=80",
    photoCount: 45
  },
  {
    id: 2,
    title: "Planinarska škola - Teorija",
    date: "2025-01-20",
    year: 2025,
    coverImage: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=600&q=80",
    photoCount: 32
  },
  {
    id: 3,
    title: "Noćni pohod na Ivanščicu",
    date: "2025-01-28",
    year: 2025,
    coverImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
    photoCount: 28
  },

  // 2024 Albums
  {
    id: 4,
    title: "Izlet na Velebit",
    date: "2024-09-14",
    year: 2024,
    coverImage: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=600&q=80",
    photoCount: 87
  },
  {
    id: 5,
    title: "Ljetni kamp za mlade",
    date: "2024-07-10",
    year: 2024,
    coverImage: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80",
    photoCount: 156
  },
  {
    id: 6,
    title: "Pohod na Triglav",
    date: "2024-08-22",
    year: 2024,
    coverImage: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=600&q=80",
    photoCount: 94
  },
  {
    id: 7,
    title: "Proljetni izlet - Papuk",
    date: "2024-04-18",
    year: 2024,
    coverImage: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80",
    photoCount: 52
  },
  {
    id: 8,
    title: "Zimska avantura - Risnjak",
    date: "2024-02-10",
    year: 2024,
    coverImage: "https://images.unsplash.com/photo-1491002052546-bf38f186af56?auto=format&fit=crop&w=600&q=80",
    photoCount: 41
  },
  {
    id: 9,
    title: "Novogodišnji pohod",
    date: "2024-01-01",
    year: 2024,
    coverImage: "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?auto=format&fit=crop&w=600&q=80",
    photoCount: 38
  },

  // 2023 Albums
  {
    id: 10,
    title: "Jesen na Medvednici",
    date: "2023-10-21",
    year: 2023,
    coverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    photoCount: 63
  },
  {
    id: 11,
    title: "Planinarski maraton",
    date: "2023-09-09",
    year: 2023,
    coverImage: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?auto=format&fit=crop&w=600&q=80",
    photoCount: 112
  },
  {
    id: 12,
    title: "Ljetna škola planinarstva",
    date: "2023-07-15",
    year: 2023,
    coverImage: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=600&q=80",
    photoCount: 78
  },
  {
    id: 13,
    title: "Gorski kotar ekspedicija",
    date: "2023-06-03",
    year: 2023,
    coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80",
    photoCount: 89
  },
  {
    id: 14,
    title: "Proljetno druženje",
    date: "2023-04-22",
    year: 2023,
    coverImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80",
    photoCount: 45
  },

  // Archive (2022 and older)
  {
    id: 15,
    title: "Alpska ekspedicija 2022",
    date: "2022-08-15",
    year: 2022,
    coverImage: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=600&q=80",
    photoCount: 134
  },
  {
    id: 16,
    title: "40 godina HPD MIV",
    date: "2022-05-20",
    year: 2022,
    coverImage: "https://images.unsplash.com/photo-1502126829571-83575bb53030?auto=format&fit=crop&w=600&q=80",
    photoCount: 256
  },
  {
    id: 17,
    title: "Zimski izazov 2021",
    date: "2021-12-11",
    year: 2021,
    coverImage: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?auto=format&fit=crop&w=600&q=80",
    photoCount: 67
  },
  {
    id: 18,
    title: "Ljetna tura - Dolomiti",
    date: "2021-07-20",
    year: 2021,
    coverImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80",
    photoCount: 189
  },
  {
    id: 19,
    title: "Tradicijska proslava 2020",
    date: "2020-09-05",
    year: 2020,
    coverImage: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
    photoCount: 98
  },
  {
    id: 20,
    title: "Jubilarna ekspedicija 2019",
    date: "2019-06-15",
    year: 2019,
    coverImage: "https://images.unsplash.com/photo-1445363692815-ebcd599f7621?auto=format&fit=crop&w=600&q=80",
    photoCount: 145
  }
];

// Helper function to format date in Croatian
function formatDateCroatian(dateString) {
  const months = [
    'siječnja', 'veljače', 'ožujka', 'travnja', 'svibnja', 'lipnja',
    'srpnja', 'kolovoza', 'rujna', 'listopada', 'studenoga', 'prosinca'
  ];
  const date = new Date(dateString);
  return `${date.getDate()}. ${months[date.getMonth()]} ${date.getFullYear()}.`;
}

// Get albums by year filter
function getAlbumsByYear(yearFilter) {
  if (yearFilter === 'all') {
    return galleryAlbums;
  }
  if (yearFilter === 'archive') {
    return galleryAlbums.filter(album => album.year < 2023);
  }
  return galleryAlbums.filter(album => album.year === parseInt(yearFilter));
}

// Get unique years for filtering
function getAvailableYears() {
  const years = [...new Set(galleryAlbums.map(album => album.year))];
  return years.sort((a, b) => b - a);
}

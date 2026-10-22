export const whatsappNumber = '6281991911000';
export function whatsapp(message: string) { return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`; }
export const programs = [
  { id: 'executive', category: 'Reguler', name: 'Executive Program', duration: '6 bulan', price: '7,5', field: 'Langkah awal di dunia hospitality', description: 'Pilihan pendidikan singkat untuk memulai perjalanan belajar di industri perhotelan.', icon: 'compass', features: ['Program pendidikan 6 bulan', 'Pembelajaran berbasis kompetensi', 'Konsultasi pilihan bidang dengan admin'] },
  { id: 'hospitality', category: 'Reguler', name: 'Housekeeping & F&B Service', duration: '1 tahun', price: '9,5', field: 'Diploma 1', description: 'Bangun keterampilan pelayanan untuk menapaki dunia perhotelan dan kapal pesiar.', icon: 'bell', features: ['Program Diploma 1', 'Housekeeping & Food and Beverage Service', 'Pendidikan sesuai kebutuhan dunia kerja'] },
  { id: 'culinary', category: 'Reguler', name: 'Culinary', duration: '1 tahun', price: '13', field: 'Diploma 1', description: 'Awali perjalanan profesional di dunia kuliner melalui pendidikan berbasis kompetensi.', icon: 'chef', features: ['Program Diploma 1', 'Bidang keahlian culinary', 'Instruktur profesional di bidangnya'] },
  { id: 'rpl-hospitality', category: 'RPL Online', name: 'Housekeeping & F&B Service', duration: 'Hubungi admin', price: '6,6', field: 'Diploma 1 · RPL Online', description: 'Pilihan program RPL Online untuk bidang Housekeeping dan Food and Beverage Service.', icon: 'bell', features: ['Program Diploma 1', 'Jalur RPL Online', 'Persyaratan & durasi dikonfirmasi ke admin'] },
  { id: 'rpl-culinary', category: 'RPL Online', name: 'Culinary', duration: 'Hubungi admin', price: '9,6', field: 'Diploma 1 · RPL Online', description: 'Kembangkan perjalanan pendidikan di bidang kuliner melalui jalur RPL Online.', icon: 'chef', features: ['Program Diploma 1 Culinary', 'Jalur RPL Online', 'Persyaratan & durasi dikonfirmasi ke admin'] },
];
export const gallery = [
  { src: '/images/hospitality.webp', title: 'Belajar melayani, siap melangkah', category: 'Pendidikan', alt: 'Peserta didik BSA College dalam kegiatan pelayanan hospitality' },
  { src: '/images/cruise.webp', title: 'Dari Singaraja, menjelajah dunia', category: 'Kapal pesiar', alt: 'Dokumentasi peserta didik di depan kapal pesiar' },
  { src: '/images/graduation.webp', title: 'Satu langkah menuju masa depan', category: 'Kelulusan', alt: 'Dokumentasi kelulusan peserta didik BSA College' },
  { src: '/images/departure.webp', title: 'Perjalanan baru dimulai bersama', category: 'Keberangkatan', alt: 'Rombongan peserta didik BSA College dalam dokumentasi keberangkatan' },
  { src: '/images/america.webp', title: 'Pengalaman hingga Amerika', category: 'Internasional', alt: 'Peserta didik BSA College dalam dokumentasi program di Amerika' },
  { src: '/images/australia.webp', title: 'Pengalaman lintas negara', category: 'Internasional', alt: 'Dokumentasi perjalanan internasional peserta didik dari brosur BSA College' },
];

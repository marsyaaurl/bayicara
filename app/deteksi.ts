export const surveyQuestions = [
  // A. Identitas Responden
  {
    question_id: 1,
    question: 'Usia anak:',
    options: [
      { label: '12-24 bulan', value: '12-24 bulan' },
      { label: '25-36 bulan', value: '25-36 bulan' },
      { label: '37-48 bulan', value: '37-48 bulan' },
      { label: '49-60 bulan', value: '49-60 bulan' },
    ],
  },
  {
    question_id: 2,
    question: 'Jenis kelamin anak:',
    options: [
      { label: 'Laki-laki', value: 'Laki-laki' },
      { label: 'Perempuan', value: 'Perempuan' },
    ],
  },

  // B. Faktor Medis
  {
    question_id: 3,
    question: 'Apakah anak memiliki riwayat medis berikut? (Pilih satu yang paling sesuai)',
    options: [
      { label: 'Asfiksia saat lahir', value: 'Asfiksia saat lahir' },
      { label: 'Gangguan pendengaran', value: 'Gangguan pendengaran' },
      { label: 'Kelainan bentuk mulut/langit-langit', value: 'Kelainan bentuk mulut/langit-langit' },
      { label: 'Riwayat kejang/epilepsi', value: 'Riwayat kejang/epilepsi' },
      { label: 'Prematur (<37 minggu)', value: 'Prematur (<37 minggu)' },
      { label: 'Tidak ada', value: 'Tidak ada' },
    ],
  },
  {
    question_id: 4,
    question: 'Perkembangan motorik kasar anak:',
    options: [
      { label: 'Sesuai milestone (misal: jalan di usia 12-18 bulan)', value: 'Sesuai milestone' },
      { label: 'Terlambat (>18 bulan baru bisa jalan)', value: 'Terlambat' },
    ],
  },

  // C. Faktor Lingkungan & Stimulasi
  {
    question_id: 5,
    question: 'Durasi paparan gadget/TV per hari:',
    options: [
      { label: '<1 jam', value: '<1 jam' },
      { label: '1-2 jam', value: '1-2 jam' },
      { label: '>2 jam', value: '>2 jam' },
    ],
  },
  {
    question_id: 6,
    question: 'Frekuensi interaksi verbal orang tua dengan anak:',
    options: [
      { label: '>5x/hari (stimulasi aktif)', value: '>5x/hari' },
      { label: '2-4x/hari', value: '2-4x/hari' },
      { label: '<1x/hari (minim stimulasi)', value: '<1x/hari' },
    ],
  },
  {
    question_id: 7,
    question: 'Kegiatan stimulasi bahasa yang rutin dilakukan:',
    options: [
      { label: 'Membacakan buku cerita', value: 'Membacakan buku cerita' },
      { label: 'Bernyanyi bersama', value: 'Bernyanyi bersama' },
      { label: 'Bermain peran', value: 'Bermain peran' },
      { label: 'Tidak ada stimulasi khusus', value: 'Tidak ada stimulasi khusus' },
    ],
  },

  // D. Perilaku Komunikasi
  {
    question_id: 8,
    question: 'Kosakata yang dikuasai anak:',
    options: [
      { label: '>50 kata (usia 2 tahun)', value: '>50 kata' },
      { label: '10-20 kata', value: '10-20 kata' },
      { label: '<10 kata', value: '<10 kata' },
    ],
  },
  {
    question_id: 9,
    question: 'Kemampuan merespons instruksi:',
    options: [
      { label: 'Bisa mengikuti 2 perintah sekaligus', value: 'Bisa mengikuti 2 perintah' },
      { label: 'Hanya merespons 1 perintah sederhana', value: '1 perintah sederhana' },
      { label: 'Tidak merespons instruksi verbal', value: 'Tidak merespons' },
    ],
  },
  {
    question_id: 10,
    question: 'Pola bicara yang dominan:',
    options: [
      { label: 'Kalimat lengkap (3-4 kata)', value: 'Kalimat lengkap' },
      { label: 'Frasa 2 kata', value: 'Frasa 2 kata' },
      { label: 'Kata tunggal/tanpa makna jelas', value: 'Kata tunggal/tanpa makna jelas' },
    ],
  },
  {
    question_id: 11,
    question: 'Reaksi saat kesulitan berkomunikasi:',
    options: [
      { label: 'Menggunakan gestur (menunjuk, mengangguk)', value: 'Gestur' },
      { label: 'Menangis/mengamuk', value: 'Menangis/mengamuk' },
      { label: 'Menarik tangan orang tua', value: 'Menarik tangan' },
    ],
  },

  // E. Faktor Keluarga
  {
    question_id: 12,
    question: 'Riwayat speech delay dalam keluarga:',
    options: [
      { label: 'Ada (orang tua/saudara kandung)', value: 'Ada' },
      { label: 'Tidak ada', value: 'Tidak ada' },
    ],
  },
  {
    question_id: 13,
    question: 'Latar belakang pendidikan orang tua:',
    options: [
      { label: 'S1/S2 ke atas', value: 'S1/S2 ke atas' },
      { label: 'SMA', value: 'SMA' },
      { label: 'SMP ke bawah', value: 'SMP ke bawah' },
    ],
  },
  {
    question_id: 14,
    question: 'Bahasa yang digunakan di rumah:',
    options: [
      { label: '1 bahasa dominan', value: '1 bahasa dominan' },
      { label: '2-3 bahasa campur', value: '2-3 bahasa campur' },
    ],
  },
];

// ============================================================
// TTO TAKİP — KURUM (ÜNİVERSİTE) LİSTESİ
// ------------------------------------------------------------
// Platforma yeni bir üniversite eklemek için aşağıdaki listeye bir kayıt ekleyin.
// Her üniversite AYRI bir Firebase projesi kullanır; verileri birbirinden tamamen
// ayrıdır. Ayrıntılar: KURUM_EKLEME.md
//
//   id       : Adreste kullanılan kısa ad (küçük harf, Türkçe karakter yok).
//              Kurumun doğrudan bağlantısı: .../index.html?kurum=<id>
//   name     : Kurumun tam adı
//   short    : Logo yoksa rozette görünen kısaltma (en fazla 4 harf)
//   city     : Şehir
//   color    : Rozet rengi
//   logo     : İsteğe bağlı logo dosyası (örn. "logos/karabuk.png"). Yalnızca
//              kurumun izin verdiği logoyu kullanın. Dosya yoksa rozet görünür.
//   firebase : Kurumun Firebase web ayarları. null ise kurum DEMO modunda açılır.
//   listed   : false yapılırsa giriş sayfasında görünmez, yalnızca doğrudan
//              bağlantıyla açılır (örn. sözleşmesi biten veya deneme kurumları).
// ============================================================
window.TTO_PLATFORM = {
  name: 'TTO Takip',
  tagline: 'Üniversiteler için Teknoloji Transfer Ofisi Dosya Takip Platformu',
  contact: ''   // örn. 'tto-takip@ornek.com' — doluysa giriş sayfasında "Kurumunuzu ekleyin" bağlantısı çıkar
};

window.TTO_KURUMLAR = [
  {
    id: 'karabuk',
    name: 'Karabük Üniversitesi',
    short: 'KBÜ',
    city: 'Karabük',
    color: '#1d4ed8',
    logo: '',
    firebase: null
    /* Firebase projesi açılınca null yerine şunu yazın:
    firebase: {
      apiKey: "AIzaSy...",
      authDomain: "kbu-tto-takip.firebaseapp.com",
      databaseURL: "https://kbu-tto-takip-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "kbu-tto-takip",
      appId: "1:123456789:web:abc123"
    }
    */
  },
  {
    id: 'itu',
    name: 'İstanbul Teknik Üniversitesi',
    short: 'İTÜ',
    city: 'İstanbul',
    color: '#0f766e',
    logo: '',
    firebase: null
  },
  {
    id: 'hacettepe',
    name: 'Hacettepe Üniversitesi',
    short: 'HÜ',
    city: 'Ankara',
    color: '#b91c1c',
    logo: '',
    firebase: null
  }
];

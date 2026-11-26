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
//   landing  : İsteğe bağlı. Kurumun kendi verdiği açılış (karşılama) sayfası.
//              Site kökü açıldığında önce bu sayfa gösterilir. Dosyayı kurum
//              değiştirdiğinde uygulama kodunda hiçbir şeye dokunmak gerekmez.
//              Ayrıntılar: kurumlar/<id>/BENIOKU.md
// ============================================================
window.TTO_PLATFORM = {
  name: 'TTO Takip',
  tagline: 'Üniversiteler için Teknoloji Transfer Ofisi Dosya Takip Platformu',
  contact: '',  // örn. 'tto-takip@ornek.com' — doluysa giriş sayfasında "Kurumunuzu ekleyin" bağlantısı çıkar

  // Varsayılan kurum: Site açılınca kurum seçme ekranı ATLANIR ve doğrudan bu
  // kurum açılır (kurumun "landing" sayfası varsa önce o gösterilir).
  // Kurum seçme ekranını yeniden açmak için '' yapın.
  // Seçme ekranı bu ayar açıkken de şu adresten görülebilir: index.html?portal=1
  defaultKurum: 'karabuk'
};

window.TTO_KURUMLAR = [
  {
    id: 'karabuk',
    name: 'Karabük Üniversitesi',
    short: 'KBÜ',
    city: 'Karabük',
    color: '#1d4ed8',
    logo: '',
    // Karabük Üniversitesi'nin verdiği açılış sayfası. Bu klasördeki dosyayı
    // kurumun gönderdiği dosyayla değiştirmeniz yeterlidir.
    landing: 'kurumlar/karabuk/giris.html',
    firebase: {
      apiKey: "AIzaSyDHGKMLd30rKX_DWF_HKKSrxIfTxf0D_V4",
      authDomain: "ttotakibi.firebaseapp.com",
      databaseURL: "https://ttotakibi-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "ttotakibi",
      storageBucket: "ttotakibi.firebasestorage.app",
      messagingSenderId: "831544691407",
      appId: "1:831544691407:web:e272ef306ad29e2f9485ba"
    }
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

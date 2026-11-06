# 💡 TTO Takip — Fikri Mülkiyet Dosya Takibi

Teknoloji Transfer Ofisi (TTO) için buluş, faydalı model, endüstriyel tasarım ve marka dosyalarının **hangi aşamada** olduğunu ve **nerede beklediğini** gösteren web uygulaması. JellyFish altyapısı (tek dosya `index.html` + Firebase Realtime Database + parçalı belge saklama) üzerine kuruldu.

- **TTO personeli** tüm dosyaları görür, ekler, aşama değiştirir, süreleri ve belgeleri yönetir.
- **Akademik personel, öğrenciler, idari personel ve harici (üniversite dışı) kişiler** yalnızca **buluşçu olarak yer aldıkları** dosyaları görür ve yeni başvuru yapabilir.
- Bir dosyada 1 ile 6 (veya daha fazla) buluşçu olabilir; bir kişi birden fazla dosyada yer alabilir. Herkes tüm dosyalarını tek hesapta görür.
- Dosya TÜRKPATENT'e iletildiğinde **"TÜRKPATENT Sürecinde"** durumuna geçer ve bekleme süresi, türün ortalama süresiyle karşılaştırılarak gösterilir.

## 🏛️ Çok kurumlu yapı

Uygulama açılınca **kurum seçme ekranı** gelir: platformdaki üniversiteler logolarıyla (logo yoksa kısaltma rozetiyle) listelenir. Kuruma tıklayınca o kurumun TTO giriş ekranı açılır; giriş ekranında ve menüde kurumun adı ve logosu görünür. Son girilen kurum ekranın üstünde "Devam et" kartıyla çıkar.

- Her kurumun **doğrudan bağlantısı** vardır: `index.html?kurum=karabuk`. Üniversite bu bağlantıyı kendi sitesinde paylaşabilir.
- Her kurum **ayrı bir Firebase projesi** kullanır. Veriler, kullanıcı hesapları ve güvenlik kuralları kurumlar arasında tamamen ayrıdır.
- Kurumlar `kurumlar.js` dosyasında tanımlanır. Yeni üniversite eklemek için uygulama koduna dokunmak gerekmez: **[KURUM_EKLEME.md](KURUM_EKLEME.md)**.

## 🚀 Hemen denemek için: Demo modu

`index.html` dosyasını tarayıcıda açın ve bir kurum seçin. Firebase ayarı girilmemiş kurumlar **Demo** rozetiyle görünür ve örnek verilerle açılır: örnek dosyalar, 5 TTO personeli ve buluşçular hazır gelir. Giriş ekranındaki düğmelerle farklı rollere geçebilirsiniz (tüm şifreler `123456`).
Her kurumun demo verisi ayrıdır ve yalnızca o tarayıcıda tutulur; **Demoyu sıfırla** ile baştan başlar. Aktif bir kurumun demosunu göstermek için adresin sonuna `&demo=1` ekleyin (tanıtım ve satış sunumları için).

## 🧭 Dosya aşamaları

| Durum | Aşamalar |
|---|---|
| **TTO'da İnceleniyor** | Başvuru Alındı → TTO Ön İnceleme → (Buluşçudan Belge Bekleniyor) → Değerlendirme / Hak Talebi Kararı → Başvuru Hazırlığı (Vekil/Tarifname) |
| **TÜRKPATENT Sürecinde** | TÜRKPATENT'e Başvuruldu → Araştırma Raporu Bekleniyor → Bültende Yayın / İtiraz Süresi → İnceleme (Esasa İlişkin) |
| **Sonuçlandı** | Tescil Edildi · Reddedildi · Geri Çekildi · Hak Talep Edilmedi (Buluşçuya Bırakıldı) |

Her tür kendi yolunu izler: patentte araştırma ve inceleme vardır; faydalı modelde inceleme yoktur; tasarım ve markada araştırma raporu yoktur.

### TÜRKPATENT'te bekleme süresi

Ayarlar ekranındaki varsayılan ortalamalar: **Patent 30 ay, Faydalı Model 12 ay, Tasarım 6 ay, Marka 7 ay.**
TÜRKPATENT'in açıkladığı ortalama patent tescil süresi 2023'te 36 ay, 2024'te 30 ay, 2025'in ilk 8 ayında 25 aydır; yani "patent en az iki yıl sürer" beklentisi gerçekçidir. Diğer türlerin değerleri yaklaşıktır. Ayarlar ekranı, sizin dosyalarınızda gerçekleşen ortalama süreyi de gösterir; değerleri ona göre güncelleyebilirsiniz. Ortalama aşılırsa dosya turuncu "ortalama süre aşıldı" uyarısı alır.

### Otomatik hatırlatmalar

- **Hak talebi kararı** (patent ve faydalı model): TTO'ya bildirim tarihi + 4 ay (Ayarlar'dan değişir; SMK m.121 ve üniversitenizin buluş yönergesine göre kontrol edin).
- **Rüçhan / yurt dışı başvuru son günü:** TÜRKPATENT başvurusu + 12 ay (patent, faydalı model), + 6 ay (tasarım, marka).
- Personel her dosyaya elle süre ekleyebilir (inceleme talebi, yıllık ücret, itiraza cevap…). Genel Bakış ekranı önümüzdeki 60 günün sürelerini listeler.

## 👥 Kim ne yapabilir?

| İşlem | Koordinatör | Koord. Yrd. | Şef / Personel | Buluşçu |
|---|:---:|:---:|:---:|:---:|
| Tüm dosyaları görme, filtreleme, Excel'e aktarma | ✅ | ✅ | ✅ | Yalnızca kendi dosyaları |
| Dosya ekleme, düzenleme, aşama değiştirme | ✅ | ✅ | ✅ | ❌ |
| Portal üzerinden yeni başvuru | — | — | — | ✅ |
| Belge yükleme | ✅ (gizli veya buluşçuya açık) | ✅ | ✅ | ✅ (kendi dosyasına) |
| İç not ve süre yönetimi | ✅ | ✅ | ✅ | ❌ (göremez) |
| Dosya silme, Ayarlar | ✅ | ✅ | ❌ | ❌ |
| Personel ekleme / görev değiştirme / pasife alma | ✅ | ❌ | ❌ | ❌ |

Buluşçular, dosyadaki **diğer buluşçuların adlarını**, aşamaları, TTO'nun buluşçulara açık yazdığı açıklamaları ve buluşçulara açık belgeleri görür. İç notları, süreleri ve gizli belgeleri yalnızca TTO görür.

## 🔑 Hesaplar nasıl çalışır?

Herkes **e-posta + şifre** ile girer; kayıttan sonra e-posta doğrulaması zorunludur. Yetki, e-posta adresine göre belirlenir:

1. **İlk kurulum:** Koordinatör uygulamada **Kayıt Ol** ile hesap açar, e-postasını doğrular, girişte çıkan **"Beni koordinatör yap"** düğmesine basar. (Bu düğme yalnızca sistemde hiç koordinatör yokken çalışır.)
2. **Personel:** Koordinatör, **Personel** ekranından kişinin e-postasını ve görevini (Koordinatör Yardımcısı, Şef, Personel) ekler. Personel aynı e-postayla kayıt olunca TTO ekranları açılır.
3. **Buluşçular:** TTO, dosyaya buluşçuları e-postalarıyla ekler. Buluşçu aynı e-postayla kayıt olunca dosyalarını görür. Portal üzerinden başvuru yapan kişinin eklediği diğer buluşçular da, bir TTO personeli uygulamayı açtığında otomatik olarak dosyaya erişim kazanır.
4. **Şifre unutma:** Giriş ekranındaki **Şifremi unuttum** bağlantısı, Firebase üzerinden sıfırlama e-postası gönderir.

## 📦 Kurulum ve yayınlama

Firebase kurulumu için **[FIREBASE_KURULUM.md](FIREBASE_KURULUM.md)** dosyasına bakın. Yayınlama JellyFish'teki gibi GitHub Pages ile yapılır.

## 📁 Dosyalar

| Dosya | Açıklama |
|---|---|
| `index.html` | Uygulamanın tamamı |
| `kurumlar.js` | Platformdaki kurumlar, logoları ve Firebase ayarları |
| `logos/` | Kurum logoları (isteğe bağlı) |
| `KURUM_EKLEME.md` | Yeni üniversite ekleme ve ticari kullanım notları |
| `database.rules.json` | Firebase Realtime Database güvenlik kuralları |
| `FIREBASE_KURULUM.md` | Adım adım Firebase kurulumu |

*TTO Takip v1.1*

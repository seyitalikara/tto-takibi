# 💡 TTO Takip — Firebase Kurulum Kılavuzu

Bu kurulum **bir kez** yapılır. Buluşçuların ve personelin hiçbir ayar yapmasına gerek kalmaz.

> **v1.2'den v1.3'e geçiyorsanız:** Personel girişi değişti (7. adım) — kuralları (5. adım) yeniden yükleyin.

> **v1.1'den v1.2'ye geçiyorsanız:** Buluş Bildirim Formu için yeni kurallar eklendi (`forms`, `formPersonal`). Firebase kullanan kurumlarda **5. adımı** (kuralları yeniden yükleme) tekrarlayın.

> **JellyFish projesini kullanmayın.** TTO Takip için **ayrı bir Firebase projesi** açın. `database.rules.json` yüklendiğinde projedeki tüm kuralların yerine geçer; aynı projeyi kullanırsanız JellyFish çalışmaz hâle gelir.

---

## 1. Firebase projesi oluşturun

1. [console.firebase.google.com](https://console.firebase.google.com) → **Add project**
2. Proje adı girin (örn. `kbu-tto-takip`). Google Analytics'i kapatabilirsiniz.
3. **Build → Realtime Database → Create database** → Lokasyon: **europe-west1** → **Start in locked mode**

## 2. E-posta/Şifre girişini açın ⚠️

1. **Build → Authentication → Get started**
2. **Sign-in method** sekmesi → **Email/Password** → **Enable** → **Save**
   (Alttaki "Email link (passwordless sign-in)" seçeneğini açmanıza gerek yok.)
3. **Settings → Authorized domains** → **Add domain** → uygulamayı yayınlayacağınız adresi ekleyin (örn. `seyitalikara.github.io`).
4. *(İsteğe bağlı)* **Templates** sekmesinde doğrulama ve şifre sıfırlama e-postalarının dilini **Türkçe** yapın ve gönderen adını "KBÜ TTO" gibi düzenleyin.

> JellyFish'ten farkı: JellyFish anonim giriş kullanıyordu. TTO Takip'te harici kişiler de giriş yapacağı ve dosyalar gizli olduğu için gerçek e-posta hesapları ve **e-posta doğrulaması** kullanılır. Güvenlik kuralları, doğrulanmamış e-postalara hiçbir veriyi açmaz.

## 3. Web uygulaması bilgilerini alın

⚙️ **Project settings → Your apps → `</>` (Web)** → takma ad girin → **Register app**. Çıkan `firebaseConfig` değerlerini not alın.

## 4. Bilgileri `kurumlar.js` içine yazın

`kurumlar.js` dosyasını VS Code / Not Defteri ile açın. Kurumunuzun kaydındaki `firebase: null` satırını şu şekilde değiştirin:

```javascript
firebase: {
  apiKey: "AIzaSy...",
  authDomain: "kbu-tto-takip.firebaseapp.com",
  databaseURL: "https://kbu-tto-takip-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "kbu-tto-takip",
  appId: "1:123456789:web:abc123"
}
```

Kaydedin. Kurum seçme ekranında kurumun rozeti **Demo**'dan **Aktif**'e döner ve kuruma tıklayınca gerçek giriş ekranı açılır. `firebase: null` olan kurumlar demo verileriyle açılır. Aktif bir kurumun demosunu göstermek için adresin sonuna `&demo=1` ekleyin (örn. `index.html?kurum=karabuk&demo=1`).

## 5. Güvenlik kurallarını yükleyin ⚠️

1. **Realtime Database → Rules** sekmesi
2. Mevcut içeriğin **tamamını silin**, `database.rules.json` içeriğini yapıştırın → **Publish**

`database.rules.json` her değiştiğinde bu adımı tekrarlayın. GitHub'a yüklemek kuralları Firebase'e aktarmaz.

## 6. İlk koordinatör hesabı

1. Uygulamayı açın → **Kayıt Ol** → bilgilerinizi girin → **Hesap Oluştur**
2. E-postanıza gelen bağlantıya tıklayın (gelmediyse spam klasörüne bakın) → uygulamada **Doğruladım, devam et**
3. Üstteki mavi şeritte **Beni koordinatör yap** düğmesine basın.

> Bu adımı kuralları yükledikten **hemen sonra** siz yapın. Düğme yalnızca sistemde hiç koordinatör yokken çalışır; sonrasında yeni koordinatörü yalnızca mevcut koordinatör atayabilir.

## 7. Personel hesaplarını oluşturun

**Personel → Personel Hesabı Oluştur**: Koordinatör yardımcısı, şef ve personelin ad, e-posta, görev ve **giriş şifresini** girin (**Üret** düğmesi güçlü şifre önerir). Şifreyi not alıp personele güvenli bir yoldan iletin. Personel giriş ekranında **TTO Personeli** sekmesinden girer; kayıt olmaz, e-posta doğrulaması gerekmez.

- Şifre değiştirmek için Personel listesindeki 🔑 düğmesini kullanın (mevcut şifre gerekir).
- Kişi daha önce buluşçu olarak kayıt olduysa, formda **"Bu e-postayla zaten hesap var — bağla"** seçeneğiyle o hesabın şifresini (kişi yanınızdayken) girip bağlayın; sonra 🔑 ile yeni şifre verin.

> **v1.2'den v1.3'e geçiş:** Personel yetkisi artık hesabın uid'sine bağlıdır. Kuralları (5. adım) yeniden yükleyin. Firebase'e bağlı çalışan bir kurumda eski personel kayıtlarının uid'si yoktur: koordinatör bu kişileri Personel ekranında ✏️ ile açıp **"zaten hesap var — bağla"** ile yeniden bağlamalıdır. İlk koordinatör için bu mümkün değilse Firebase Console → Realtime Database → `staff/<e-posta>` kaydına `uid` alanını (Authentication → Users listesindeki User UID) elle ekleyin.

## 8. Mevcut dosyaları aktarın

**Dosyalar → Yeni Dosya** ile eski dosyaları girerken:
- **Başlangıç aşaması** olarak dosyanın şu anki aşamasını seçin (örn. *Araştırma Raporu Bekleniyor*).
- **TÜRKPATENT başvuru tarihi** ve **numarasını** yazın. Bekleme süresi bu tarihten hesaplanır.
- Buluşçuları e-postalarıyla ekleyin. E-postası olmayan buluşçu da eklenebilir; yalnızca sisteme giriş yapamaz.

## 9. GitHub Pages ile yayınlama

1. GitHub'da `TTO_Takip` adında **public** bir depo oluşturun.
2. `index.html`, `kurumlar.js`, `database.rules.json`, `README.md`, `FIREBASE_KURULUM.md`, `KURUM_EKLEME.md` dosyalarını ve varsa `logos` klasörünü yükleyin.
3. **Settings → Pages → Branch: `main` / `(root)` → Save**
4. 1-2 dakika sonra kurum seçme ekranı `https://KULLANICI-ADI.github.io/TTO_Takip/` adresinde yayında olur. Kurumun doğrudan bağlantısı: `https://KULLANICI-ADI.github.io/TTO_Takip/?kurum=karabuk`. Bu adresi 2. adımdaki **Authorized domains** listesine eklediğinizden emin olun.

---

## 🔍 Veritabanını inceleme (deneme ve sunum için)

Kurumun Firebase projesine Google hesabınızla girin: [console.firebase.google.com](https://console.firebase.google.com) → proje.

| Ne görmek istiyorsunuz? | Nerede? |
|---|---|
| Kimler hesap açtı, ne zaman açtı, en son ne zaman girdi | **Authentication → Users** (şifreler görünmez; Firebase şifreleri tek yönlü özetleyerek saklar) |
| Tüm veriler canlı (dosyalar, personel, buluşçu profilleri) | **Realtime Database → Data** — uygulamada yapılan her değişiklik burada anında görünür |
| Personel kayıtları ve yetkileri | Data → `staff` (`role`, `active`, `uid`) |
| Buluşçu profilleri | Data → `users` (ad, tür: akademik / ogrenci / idari / harici, birim) |
| Dosyalar ve TÜRKPATENT numaraları | Data → `files` (`tpAppNo`, `tpAppDate`, `stage`…) |
| Bir kuralın neden izin verip vermediği | **Realtime Database → Rules → Rules Playground** |
| Kullanım ve kota | Realtime Database → **Usage** |
| Tüm verinin yedeği | Data → ⋮ → **Export JSON** |

Projeye başka birini (örn. koordinatörü) izleyici olarak eklemek için: ⚙️ **Project settings → Users and permissions → Add member → Viewer**.

> **Deneme önerisi:** Gerçek veriyle başlamadan önce bir deneme Firebase projesi açıp birkaç personel hesabı ve buluşçu kaydı oluşturun; Console'da `staff`, `users`, `files` düğümlerinin nasıl dolduğunu izleyin. Denemeden sonra proje silinebilir.
> Demo modunda (Firebase ayarı boşken) veriler yalnızca o tarayıcıda tutulur; tarayıcının Geliştirici Araçları → Application → Local Storage → `tto_demo_db_v2_karabuk` anahtarında görülebilir.

## 🔐 Güvenlik özeti

- Buluşçular (doğrulanmamış e-postalar) hiçbir veriyi okuyamaz ve yazamaz.
- Personel yetkisi `staff` listesindeki **aktif** kayda ve o kayda bağlı hesabın **uid**'sine bağlıdır. Personel hesaplarını ve şifrelerini yalnızca koordinatör oluşturur; biri personelin e-postasıyla kendi hesabını açsa bile yetki alamaz. Pasife alınan personel anında buluşçu ekranına düşer.
- Şifreler veritabanında saklanmaz; Firebase Authentication tarafından tek yönlü özetlenir. Koordinatör yeni şifre belirleyebilir, mevcut şifreyi göremez.
- Buluşçu yalnızca **kendi e-postasının yazılı olduğu** dosyaları okuyabilir. Başkasının dosyasını, iç notları (`internal`) ve gizli belgeleri okuyamaz.
- Buluşçu yalnızca "Başvuru Alındı" aşamasında yeni portal başvurusu açabilir; mevcut dosyaların aşamasını, tarihlerini ve buluşçu listesini değiştiremez.
- Belgeler Firebase Storage'da değil, Realtime Database içinde parçalara bölünerek saklanır (**kredi kartı gerekmez**). Belge sınırı 10 MB'tır.

## 📊 Kapasite (ücretsiz Spark planı)

1 GB veritabanı alanı ve aylık 10 GB indirme. Belgeler yaklaşık %33 büyüyerek saklanır; 2 MB'lık belgelerle yaklaşık 350–400 belge sığar. Büyük tarifname ve çizim dosyalarını üniversitenin kendi arşivinde tutup buraya yalnızca özet PDF'leri yüklemeniz önerilir. Kullanımı **Realtime Database → Usage** sekmesinden izleyin.

## ❓ Sık sorulan sorular

**Buluşçu "Henüz dosyanız görünmüyor" diyor.**
Dosyadaki e-posta ile kayıt olduğu e-posta aynı mı? Büyük/küçük harf fark etmez ama yazım aynı olmalı. Gerekirse dosyayı **Düzenle** ile açıp e-postayı düzeltin.

**Portal başvurusundaki diğer buluşçular dosyayı göremiyor.**
Herhangi bir TTO personeli uygulamayı açtığında erişim otomatik tanımlanır. Bir personelin giriş yapması yeterlidir.

**"Bu işlem için yetkiniz yok" hatası.**
Kurallar güncel değilse (5. adım) ya da kullanıcının e-postası doğrulanmamışsa çıkar. Personel ise **Personel** listesinde **Aktif** ve **Hesap tanımlı** olduğundan emin olun.

**"E-Posta/Şifre girişi kapalı" uyarısı.**
2. adım yapılmamış: Authentication → Sign-in method → Email/Password'u açın.

**Yedek almak.**
Uygulamada **Ayarlar → Dosya verilerini yedekle (JSON)** ya da Firebase Console → Realtime Database → Data → ⋮ → **Export JSON**.

---

*TTO Takip v1.3 — Teknoloji Transfer Ofisi Fikri Mülkiyet Dosya Takibi*

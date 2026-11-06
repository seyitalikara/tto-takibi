# 🏛️ Platforma Yeni Kurum (Üniversite) Ekleme

TTO Takip birden fazla üniversiteye hizmet verecek şekilde kuruludur. Uygulama kodu herkes için **aynıdır**; kurumları ayıran tek şey `kurumlar.js` dosyasındaki kayıt ve her kurumun **kendi Firebase projesidir**.

```
TTO_Takip/
├── index.html          ← tüm kurumlar için aynı uygulama
├── kurumlar.js         ← kurum listesi (ad, şehir, renk, logo, Firebase ayarı)
├── logos/              ← kurum logoları (isteğe bağlı)
└── database.rules.json ← her kurumun Firebase projesine aynen yüklenir
```

## Adımlar

### 1. Kurum kaydını ekleyin (demo olarak)

`kurumlar.js` içindeki `TTO_KURUMLAR` listesine bir kayıt ekleyin:

```javascript
{
  id: 'gazi',                       // adres: index.html?kurum=gazi
  name: 'Gazi Üniversitesi',
  short: 'GÜ',                      // logo yoksa rozette görünür
  city: 'Ankara',
  color: '#7c3aed',
  logo: 'logos/gazi.png',           // isteğe bağlı
  firebase: null                    // null → demo modunda açılır
},
```

Bu hâliyle kurum, kurum seçme ekranında **Demo** rozetiyle görünür ve örnek verilerle açılır. Tanıtım toplantıları için bu yeterlidir.

> Bir kurumu listeden gizleyip yalnızca doğrudan bağlantıyla açmak için `listed: false` ekleyin (örn. görüşmesi süren kurumlar).

### 2. Logoyu ekleyin

Logoyu kurumun kurumsal kimlik sayfasından veya TTO'sundan **izin alarak** edinin, `logos/` klasörüne koyun (PNG veya SVG, kare veya yatay, şeffaf zemin tercih edin) ve `logo` alanına yolunu yazın. Logo dosyası yoksa ya da açılamazsa kısaltma rozeti otomatik gösterilir.

### 3. Kurumu canlıya alın

1. Kurum için **yeni bir Firebase projesi** açın ([FIREBASE_KURULUM.md](FIREBASE_KURULUM.md) 1–3. adımlar).
2. `database.rules.json` dosyasını bu projeye yükleyin (5. adım).
3. Firebase web ayarlarını `kurumlar.js` içindeki kaydın `firebase` alanına yazın.
4. Yayın adresini Firebase → Authentication → Settings → **Authorized domains** listesine ekleyin.
5. Kurumun TTO koordinatörü uygulamada kayıt olur ve **Beni koordinatör yap** ile ilk yöneticiyi tanımlar.

Kurumun rozeti **Aktif**'e döner.

## Neden her kuruma ayrı Firebase projesi?

- **Veri ayrılığı:** Buluş dosyaları gizlidir. Bir kurumun verisi, kullanıcıları ve yöneticileri diğer kurumların projesinde hiç bulunmaz; kurallarda hata olsa bile kurumlar arası sızıntı olmaz.
- **KVKK ve sözleşme:** Her üniversite kendi verisinin nerede tutulduğunu bilir. Sözleşme bittiğinde projenin tamamı kuruma devredilebilir, dışa aktarılabilir ya da silinebilir.
- **Maliyet ve kapasite:** Ücretsiz Spark planı (1 GB veritabanı) her kurum için ayrı sayılır. Büyüyen kurum, diğerlerini etkilemeden ücretli Blaze planına geçebilir.
- **Kurumsal hesap:** Firebase projesi kurumun kendi Google hesabında açılıp size "Editor" yetkisi verilebilir; böylece fatura ve veri sahipliği kurumda kalır.

## Ticari kullanım (satış / kiralama) için notlar

- **Lisans ve fikri mülkiyet:** Uygulamayı satmadan veya kiralamadan önce yazılımın sahipliğini netleştirin. Görev kapsamında üniversitede geliştirilen yazılımlarda üniversitenin de hakkı olabilir. Karabük Üniversitesi TTO'su bu konuda doğru adrestir; yazılım olarak telif tescili veya lisans sözleşmesi şablonu hazırlanabilir.
- **Kurum adları ve logolar:** Kurum seçme ekranında bir üniversitenin adını ve logosunu göstermek, o kurumla iş birliği yapıldığı izlenimini verir. Sözleşmesi olmayan kurumları tanıtım amacıyla listede göstermeyin ve logoları yalnızca kurumun yazılı izniyle kullanın. Mevcut listedeki İTÜ ve Hacettepe kayıtları örnek amaçlıdır; yayına almadan önce kaldırın ya da `listed: false` yapın.
- **Hizmet seviyesi:** Kiralama modelinde yedekleme sıklığı, destek süresi ve sözleşme sonunda verinin teslimi gibi konuları sözleşmede yazılı hâle getirin. Firebase Console → Realtime Database → **Export JSON** ile kurum verisi tek dosyada dışa aktarılabilir.
- **Kişisel veriler:** Platform buluşçuların ad, e-posta, birim ve telefon bilgilerini işler. Her kurum için aydınlatma metni ve gerekiyorsa veri işleme sözleşmesi hazırlanmalıdır.

> Bu notlar hukuki görüş değildir; sözleşme ve lisans konularında bir hukukçuya danışın.

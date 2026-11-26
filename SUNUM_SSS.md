# 🎤 Sunum için sık sorulan sorular — TTO Takip v1.3

Rektör yardımcılığı sunumunda gelebilecek sorular ve kısa cevapları.

**Sisteme kimler, nasıl giriyor?**
Giriş ekranında iki kapı var. *Buluşçu / Başvuru* kapısından öğrenci, akademisyen, idari personel ve üniversite dışı (harici) buluşçular kendi hesaplarını açıp girer. *TTO Personeli* kapısından yalnızca koordinatörün hesap açtığı personel girer; personel kendini kaydedemez.

**Personelin şifresini kim belirliyor? Koordinatör şifreleri görebiliyor mu?**
Personel şifresini koordinatör belirler ve değiştirir. Şifreler hiçbir yerde açık hâlde saklanmaz (Firebase tek yönlü özetler); koordinatör dâhil kimse mevcut bir şifreyi göremez, yalnızca yenisini verebilir.

**Biri personelin e-postasıyla kayıt olmaya çalışırsa?**
Hesap zaten koordinatör tarafından açıldığı için kayıt reddedilir. Ayrıca personel yetkisi e-postaya değil, koordinatörün açtığı hesabın benzersiz kimliğine (uid) bağlıdır; bu kural sunucu tarafında (Firebase güvenlik kuralları) uygulanır, tarayıcıda değil.

**Bir buluşçu başkasının dosyasını görebilir mi?**
Hayır. Buluşçu yalnızca adının ve e-postasının yazılı olduğu dosyaları görür; TTO iç notlarını, sürelerini, gizli belgeleri ve diğer buluşçuların T.C. no/adres/telefon bilgisini göremez. Bu da sunucu kuralıyla korunur.

**Üniversiteden TÜRKPATENT'e kaç başvuru gitti, numaraları ne?**
Koordinatör Paneli → TÜRKPATENT Başvuruları. Tüm başvurular seri numaraları, tarihleri ve güncel aşamalarıyla tek tabloda; yıl/tür/durum filtrelenir ve Excel'e (.xlsx) aktarılır. Numarası girilmemiş dosya kırmızı uyarı verir.

**Üniversite dışından gelen başvuruları ayrı görebiliyor muyuz?**
Evet: Koordinatör Paneli → Harici Başvurular. Harici buluşçu içeren dosyalar ve istenirse portaldan gelen tüm başvurular listelenir.

**Veriler nerede duruyor? KVKK?**
Kurumun kendi Firebase projesinde (Google Cloud, Avrupa — europe-west1). Her üniversitenin projesi ayrıdır. Proje kurumun Google hesabında açılabilir; veri sahipliği kurumda kalır. Aydınlatma metni kurum tarafından hazırlanmalıdır.

**Veritabanını kim, nereden görebiliyor?**
Firebase Console'a yetkilendirilen hesaplar (örn. sistem sorumlusu, koordinatör) tüm veriyi ve kayıtlı kullanıcı listesini canlı görür. Ayrıntılar: FIREBASE_KURULUM.md → *Veritabanını inceleme*.

**Maliyeti nedir?**
Ücretsiz Spark planı (1 GB veritabanı, aylık 10 GB indirme) bir TTO için başlangıçta yeterlidir; kredi kartı gerekmez. Büyürse kullandıkça öde (Blaze) planına geçilir.

**Yedek alınıyor mu?**
Ayarlar → *Dosya verilerini yedekle (JSON)* veya Firebase Console → Export JSON. Düzenli yedek takvimi TTO tarafından belirlenmelidir.

**Üniversitenin kendi giriş sayfası kullanılabilir mi?**
Evet. Site, Karabük Üniversitesi'nin vereceği açılış sayfasıyla açılır; sayfa tek bir dosyadır (`kurumlar/karabuk/giris.html`) ve değiştirildiğinde uygulama kendiliğinden yenisini kullanır.

**Başka üniversiteler de kullanabilir mi?**
Altyapı çok kurumlu. Kurum seçme ekranı şimdilik kapalı; açıldığında her üniversite kendi sayfasından ve kendi ayrı veritabanından çalışır (KURUM_EKLEME.md).

---
**Bilinen sınır (dürüst cevap):** Personel, kurumsal e-postasına erişimi olduğu sürece Firebase'in standart "şifre sıfırlama" e-postasını tetikleyecek bir yol teknik olarak bulunabilir; uygulama arayüzünde personel için bu seçenek kapalıdır. Bunu tamamen kapatmak sunucu tarafı fonksiyon (Firebase Cloud Functions, ücretli Blaze planı) gerektirir.

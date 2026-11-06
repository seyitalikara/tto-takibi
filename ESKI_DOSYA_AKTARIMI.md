# 📥 Eski (Kâğıt) Dosyaların Dijitale Aktarılması

Elden alınmış dilekçe, Buluş Bildirim Formu ve Ticarileştirme Ön Raporu gibi evraklar, TTO Takip'e **veri dosyası (.json)** olarak aktarılır. Aktarılan dosya sistemde tam bir TTO dosyasına dönüşür: buluşçular, aşama, TÜRKPATENT bilgileri ve formun tüm alanları dolu gelir; **Word çıktısı** da hemen alınabilir.

## İş akışı

1. **Evrakı tarayın** (PDF). Bir başvurunun tüm sayfaları tek PDF'te olsun.
2. **PDF'i Claude'a verin** ve "TTO Takip aktarım dosyasına çevir" deyin. Claude, `ornek_aktarim.json` biçiminde bir dosya üretir.
3. Üretilen dosyayı **`ozel/` klasörüne** kaydedin. Bu klasör `.gitignore` ile GitHub'a yüklenmez.
4. TTO Takip'te **Dosyalar → Eski dosya aktar** → JSON dosyalarını seçin (birden fazla seçilebilir) → **Aktar**.
   - Aynı **TTO no** veya **TÜRKPATENT başvuru no** ile kayıtlı dosya varsa güncellenir, yoksa yeni dosya açılır.
5. Taranmış orijinal PDF'i dosyanın **Belgeler** bölümüne "yalnız TTO" olarak yükleyin.

> ⚠️ **Kişisel veri:** Aktarım dosyaları T.C. kimlik numarası, adres ve telefon içerir. Bu dosyaları **asla GitHub'a yüklemeyin**, e-postayla göndermeyin; aktarımdan sonra silin veya şifreli bir yerde saklayın. Uygulama içinde bu bilgileri yalnızca TTO personeli ve bilginin sahibi buluşçu görebilir.

## Dosya biçimi

```jsonc
{
  "format": "tto-takip-bbf",         // zorunlu, değişmez
  "version": 1,
  "kurum": "karabuk",
  "file": {
    "ttoNo": "TTO-2024-003",          // yoksa null → otomatik verilir
    "type": "patent",                 // patent | faydali | tasarim | marka | diger
    "title": "Buluşun başlığı",
    "ttoDate": "2024-05-14",          // TTO'ya başvuru (dilekçe) tarihi, YYYY-AA-GG
    "stage": "tp_arastirma",          // güncel aşama (aşağıdaki listeye bakın)
    "stageDate": "2025-01-10",
    "tpAppDate": "2024-09-02", "tpAppNo": "2024/012345",
    "pubDate": null, "regDate": null, "regNo": null,
    "owner": "Karabük Üniversitesi", "summary": null
  },
  "inventors": [
    { "name": "Dr. Öğr. Üyesi Ad Soyad", "email": "ad.soyad@karabuk.edu.tr",
      "kind": "akademik",             // akademik | ogrenci | idari | harici
      "unit": "Mühendislik Fakültesi", "share": 25,
      "tc": "…", "address": "…", "phone": "…",
      "lead": true }                  // yürütücü
  ],
  "form": {
    "petition": { "date": "2024-05-14" },
    "keywords": "…", "q2": "…", "q3": "…", "q4": "…",
    "units": [ { "name": "…", "isNew": true, "prior": false, "critical": true, "func": "…" } ],
    "q6": { "patentTR": true, "patentAbroad": true, "publication": false, "internet": true, "competitors": false, "text": "…" },
    "q7": "…", "q8": "…", "q9": "…", "q10": "…",
    "q11": { "start": "Eylül 2024", "end": "Çalışmalar devam etmektedir" },
    "q12": "…", "q13": "…",
    "figDesc": "Şekil 1, …", "detail": "…",
    "commercial": { "owner": "…", "ozet": "…", "amac": "…", "sektor": "…", "trl": "…", "trlSure": "…", "trlButce": "…",
      "prototip": "…", "tesis": "…", "uretim": "…", "fiyat": "…", "muadilFiyat": "…", "satisMiktar": "…",
      "pazarPayi": "…", "pazarBuyuklugu": "…", "muadiller": "…", "ihracat": "…",
      "avantaj": "…", "dezavantaj": "…", "lisans": "…", "signer": "…", "date": "2024-05-14" }
  }
}
```

Tam örnek: **`ornek_aktarim.json`** (kurgusal demo verisi).

### Form alanlarının karşılıkları

| Alan | Buluş Bildirim Formundaki karşılığı |
|---|---|
| `keywords` | 1. Anahtar kelimeler |
| `q2` | 2. Uygulama alanı |
| `q3` | 3. Mevcut uygulamaların eksiklikleri |
| `q4` | 4. Fark/ayrıcalıklar, mevcut tekniğe üstünlükler |
| `units` | 5. Unsurlar tablosu (Yeni / Önceki tekniğe ait / Çok önemli) |
| `q6` | 6. Yapılan araştırmalar ve sonuçları |
| `q7` | 7. Bilinen patent/makale yayınları |
| `q8` | 8. Kamuya açıklama/ifşa |
| `q9` | 9. Sanayiye uygulanabilirlik |
| `q10` | 10. Çalışmaların yaygın olduğu ülkeler |
| `q11` | 11. Geliştirme başlangıç/bitiş tarihi |
| `q12` | 12. Hibe/destek/kaynak |
| `q13` | 13. Üçüncü kişilerin üretebileceği alternatifler |
| `figDesc` | Şekillerin açıklaması |
| `detail` | Buluşun detaylı anlatımı |
| `commercial.*` | Ticarileştirme Ön Raporu satırları |

### Aşama kodları

`basvuru` Başvuru Alındı · `on_inceleme` TTO Ön İnceleme · `eksik` Belge Bekleniyor · `kurul` Hak Talebi Kararı · `hazirlik` Başvuru Hazırlığı · `tp_basvuru` TÜRKPATENT'e Başvuruldu · `tp_arastirma` Araştırma Raporu · `tp_yayin` Yayın/İtiraz · `tp_inceleme` İnceleme · `tescil` · `red` · `geri` · `serbest`

## Notlar

- Çizimler JSON'a girmez. Şekil görsellerini (PNG/JPG) dosyanın belgelerine yükleyip formun **Çizimler** sekmesinden seçin; Word çıktısına otomatik eklenir.
- E-postası bilinmeyen buluşçular da aktarılabilir (`"email": null`); yalnızca sisteme giriş yapamazlar.
- Bir JSON dosyası tek başvuru içerebileceği gibi `[ {...}, {...} ]` biçiminde birden fazla başvuru da içerebilir.

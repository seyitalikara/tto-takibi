# Karabük Üniversitesi açılış sayfası

Site kökü (`https://seyitalikara.github.io/tto-takibi/`) açıldığında önce **bu klasördeki `giris.html`** gösterilir. Kurum seçme ekranı şimdilik atlanır.

## Üniversitenin verdiği sayfayı koymak

1. Üniversitenin gönderdiği HTML dosyasının adını **`giris.html`** yapın ve bu klasördeki dosyanın **yerine** koyun.
2. Sayfa görsel, CSS veya JS dosyası kullanıyorsa onları da bu klasöre (`kurumlar/karabuk/`) kopyalayın. Sayfadaki yollar bu klasöre göre çalışır.
3. Sayfadaki giriş düğmelerinin bağlantılarını (`href`) aşağıdakilerle değiştirin:

| Düğme | Bağlantı |
|---|---|
| Buluşçu girişi (öğrenci, akademisyen, idari personel, harici) | `../../index.html?kurum=karabuk&giris=buluscu` |
| Yeni hesap oluştur / Kayıt ol | `../../index.html?kurum=karabuk&giris=kayit` |
| TTO personeli girişi | `../../index.html?kurum=karabuk&giris=personel` |

4. GitHub'a yükleyin. Uygulama koduna (`index.html`) dokunmanız gerekmez; dosya değiştiğinde sistem yeni sayfayı kendiliğinden kullanır.

> Dosya adını değiştirmek isterseniz `kurumlar.js` içindeki `landing: 'kurumlar/karabuk/giris.html'` satırını da güncelleyin.
> Açılış sayfası dosyası bulunamazsa site doğrudan Karabük giriş ekranını açar.

## Kurum seçme ekranını geri açmak

`kurumlar.js` → `defaultKurum: 'karabuk'` satırını `defaultKurum: ''` yapın. Site kökü yeniden kurum seçme ekranını gösterir; Karabük Üniversitesi'ne tıklayan bu açılış sayfasına gelir. Açılış sayfası tanımlı olmayan kurumlar doğrudan kendi giriş ekranlarını açar. (Seçme ekranı bu ayar açıkken de `index.html?portal=1` adresinden görülebilir.)

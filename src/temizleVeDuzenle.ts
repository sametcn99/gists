function temizleVeDuzenle(metin: string): string {
  // 1. Türkçe karakterler ve karşılık gelen İngilizce karakterler tanımlanıyor.
  const turkceKarakterler = "çğıöşüÇĞİÖŞÜ";
  const ingilizceKarakterler = "cgiosuCGIOSU";

  // 2. Türkçe karakterler İngilizce karakterlere dönüştürülüyor.
  let duzeltilmisMetin = metin.replace(
    new RegExp("[" + turkceKarakterler + "]", "g"), // Türkçe karakterlerin bulunduğu bir regex ifadesi oluşturuluyor
    function (harf) {
      const index = turkceKarakterler.indexOf(harf); // Karakterin Türkçe karakterler içindeki indeksi bulunuyor
      if (index > -1) {
        return ingilizceKarakterler.charAt(index); // Türkçe karakter, İngilizce karşılığıyla değiştiriliyor
      }
      return harf; // Eğer karakter Türkçe karakterler listesinde yoksa değişiklik yapılmıyor
    },
  );

  // 3. Diğer özel karakterler siliniyor.
  duzeltilmisMetin = duzeltilmisMetin.replace(/[^a-zA-Z0-9\s]/g, ""); // Kelime karakterleri ve boşluk dışındaki tüm özel karakterler siliniyor

  return duzeltilmisMetin; // Temizlenmiş metin döndürülüyor
}

// Örnek kullanım:
const ornekMetin =
  "Bu özel karakterleri temizleme örneği: çğıöşüÇĞİÖŞÜ _?=)(/&%+^'!é@#~`{}[]|\\,.;:/-";
const temizlenmisMetin = temizleVeDuzenle(ornekMetin);

// Konsola temizlenmiş metni yazdır
console.log(`temizlenmiş metin: ` + temizlenmisMetin);

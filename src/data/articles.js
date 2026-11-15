// Rehber yazıları: soru odaklı içerik, Google "Öne Çıkan Snippet" ve yapay zekâ
// asistanlarının (ChatGPT, Gemini, Perplexity) alıntılaması için kısa cevap + detay yapısında.

export const ARTICLES = [
  {
    slug: 'aydinda-ogrenci-evi-kiralarken-dikkat-edilmesi-gerekenler',
    title: "Aydın'da Öğrenci Evi Kiralarken Dikkat Edilmesi Gereken 10 Şey",
    description:
      "ADÜ'yü kazanan öğrenciler ve veliler için Aydın'da öğrenci evi ve apart kiralama rehberi: zamanlama, bölge seçimi, sözleşme, depozito, faturalar ve güvenlik.",
    date: '2026-08-01',
    readMin: 6,
    category: 'Öğrenci',
    summary:
      "Aydın'da öğrenci evi kiralarken aramaya Ağustos'ta başlayın, bölümünüzün hangi yerleşkede olduğunu kontrol edin, faturaların kiraya dahil olup olmadığını yazılı netleştirin, depozitonun üç aylık kirayı geçmediğinden emin olun ve evi fotoğraflı teslim tutanağıyla teslim alın.",
    sections: [
      {
        h2: '1. Aramaya erken başlayın',
        p: ['Tercih sonuçları açıklandıktan sonraki ilk haftalar, kampüse yakın eşyalı apartlarda en geniş seçeneğin olduğu dönemdir. Eylül ortasından sonra iyi konumlu daireler hızla dolar.'],
      },
      {
        h2: '2. Yerleşkenizi kontrol edin',
        p: ["Aydın Adnan Menderes Üniversitesi'nin ana yerleşkesi Efeler'dedir; ancak bazı fakülte ve yüksekokullar Kuşadası, Nazilli, Söke, Didim ve diğer ilçelerde yer alır. Ev aramadan önce bölümünüzün nerede olduğunu öğrenin."],
      },
      {
        h2: '3. Ulaşımı ders saatinde deneyin',
        p: ['Haritada yakın görünen bir ev, dolmuş veya otobüs bağlantısı zayıfsa her sabah zaman kaybettirebilir. Mümkünse evi ders saatine yakın bir saatte ziyaret edip kampüse giderek deneyin.'],
      },
      {
        h2: '4. Apart mı, paylaşımlı ev mi karar verin',
        p: ['Tek başına kalmak isteyenler için 1+0 / 1+1 öğrenci apartları; maliyeti bölüşmek isteyenler için 2+1 ve 3+1 paylaşımlı evler uygundur. Ev arkadaşlarınızla gider paylaşımını en baştan yazılı hale getirin.'],
      },
      {
        h2: '5. Faturaların kiraya dahil olup olmadığını netleştirin',
        p: ['Bazı apartlarda aidat, su ve internet kiraya dahildir; elektrik ve doğalgaz ayrıdır. Kış aylarında ısınma gideri ciddi bir kalemdir; kombili mi, merkezi sistem mi olduğunu sorun.'],
      },
      {
        h2: '6. Yazılı sözleşme yapın',
        p: ['Kira bedeli, ödeme günü, sözleşme süresi (genellikle akademik yıl ya da 12 ay), artış şartı ve depozito sözleşmede açıkça yazmalıdır. Velinin kefil olacağı durumlarda kefaletin yazılı ve sınırlı olması gerekir.'],
      },
      {
        h2: '7. Depozito kuralını bilin',
        p: ['Türk Borçlar Kanunu’na göre depozito en fazla üç aylık kira bedeli kadar olabilir. Depozitonun hangi koşullarda ve ne zaman iade edileceği sözleşmede belirtilmelidir.'],
      },
      {
        h2: '8. Fotoğraflı teslim tutanağı hazırlayın',
        p: ['Eşyaların listesini ve evin mevcut durumunu (duvarlar, beyaz eşya, mobilya) fotoğraflarla kayıt altına alın. Çıkışta depozitonun iadesi için en güçlü belgeniz budur.'],
      },
      {
        h2: '9. Güvenliği kontrol edin',
        p: ['Bina giriş kapısı, kilitler, pencere korumaları, kombinin bakımı ve karbonmonoksit riski gibi detaylar özellikle aileler için önemlidir.'],
      },
      {
        h2: '10. Ev sahibinin kimliğini doğrulayın',
        p: ['Kirayı ödediğiniz kişinin evin maliki veya yetkili temsilcisi olduğundan emin olun. Yetki belgeli bir emlak danışmanıyla çalışmak bu riski ortadan kaldırır.'],
      },
    ],
    faqs: [
      {
        q: "Aydın'da öğrenci evi için en uygun zaman nedir?",
        a: 'Ağustos ayı ve Eylül’ün ilk yarısı en geniş seçeneğin olduğu dönemdir.',
      },
      {
        q: 'Öğrenci evinde depozito ne kadar olur?',
        a: 'Kanunen en fazla üç aylık kira bedeli kadar olabilir; uygulamada çoğunlukla bir veya iki aylık kira alınır.',
      },
    ],
    related: 'aydin-ogrenci-apart',
  },
  {
    slug: 'aydinda-ev-alirken-tapu-sureci',
    title: "Aydın'da Ev Alırken Tapu Süreci: Adım Adım Rehber",
    description:
      "Aydın'da ev, daire veya arsa alırken tapu devri nasıl yapılır? Web Tapu başvurusu, gerekli belgeler, tapu harcı, DASK ve güvenli ödeme adım adım.",
    date: '2026-09-10',
    readMin: 5,
    category: 'Satın Alma',
    summary:
      'Tapu devri için önce Web Tapu üzerinden başvuru yapılır, gerekli belgeler hazırlanır (kimlik, DASK poliçesi, gerekirse belediye değer yazısı), tapu harcı (alıcı ve satıcı için ayrı ayrı %2) ve döner sermaye ücreti ödenir, ardından tapu müdürlüğündeki randevuda imzalar atılır.',
    sections: [
      {
        h2: '1. Satın almadan önce: kontroller',
        p: ['Tapu kaydında ipotek, haciz veya şerh olup olmadığını, tapunun türünü (kat mülkiyeti/kat irtifakı), iskân durumunu ve belediyedeki imar durumunu kontrol edin. Site/apartman yönetiminden aidat borcu olmadığına dair yazı isteyin.'],
      },
      {
        h2: '2. Web Tapu başvurusu',
        p: ['Tapu ve Kadastro Genel Müdürlüğü’nün Web Tapu sistemi üzerinden satış başvurusu yapılır ve randevu alınır. Bu işlemi alıcı, satıcı ya da yetkili emlak danışmanı başlatabilir.'],
      },
      {
        h2: '3. Gerekli belgeler',
        list: [
          'Alıcı ve satıcının kimlik belgeleri',
          'Geçerli zorunlu deprem sigortası (DASK) poliçesi',
          'Gerekli durumlarda belediyeden emlak vergisi değeri yazısı',
          'Vekâleten işlem yapılıyorsa vekâletname',
        ],
      },
      {
        h2: '4. Harç ve ücretler',
        p: ['Tapu harcı, beyan edilen satış bedeli üzerinden alıcı ve satıcı için ayrı ayrı %2 olarak hesaplanır. Ayrıca döner sermaye ücreti ödenir. Beyan edilen bedel, belediyenin belirlediği asgari değerin altında olamaz.'],
      },
      {
        h2: '5. Ödeme ve imza',
        p: ['Ödemeyi elden yapmak yerine banka üzerinden, kayıtlı ve tapu devriyle eşzamanlı şekilde gerçekleştirin. Randevu günü tapu müdürlüğünde taraflar imzaları atar ve yeni tapu alıcı adına düzenlenir.'],
      },
      {
        h2: '6. Tapudan sonra',
        p: ['Elektrik, su ve doğalgaz aboneliklerini adınıza devredin; emlak vergisi beyanını belediyeye yapın ve DASK poliçesini yeni malik adına güncelleyin.'],
      },
    ],
    faqs: [
      {
        q: 'Tapu harcı kaç para?',
        a: 'Beyan edilen satış bedelinin alıcı için %2’si, satıcı için %2’sidir (toplam %4). Taraflar paylaşımı farklı kararlaştırabilir.',
      },
      {
        q: 'Tapu işlemi ne kadar sürer?',
        a: 'Belgeler hazırsa Web Tapu başvurusu ve randevu ile işlem genellikle birkaç iş günü içinde tamamlanır; tapu müdürlüğünün yoğunluğuna göre değişebilir.',
      },
    ],
    related: 'aydin-satilik-ev',
  },
  {
    slug: 'evinizi-kiraya-verirken-sozlesme-rehberi',
    title: 'Evinizi Kiraya Verirken Kira Sözleşmesi ve Kiracı Seçimi Rehberi',
    description:
      "Aydın'da dairenizi kiraya verirken kira bedeli nasıl belirlenir, kiracı nasıl seçilir, sözleşmeye neler yazılmalı? Depozito, kira artışı ve teslim tutanağı.",
    date: '2026-10-05',
    readMin: 5,
    category: 'Ev Sahibi',
    summary:
      'Evinizi kiraya verirken kira bedelini bölgedeki emsallere göre belirleyin, kiracının gelir ve referanslarını kontrol edin, sözleşmeye bedel, süre, artış şartı ve depozitoyu açıkça yazın ve evi fotoğraflı teslim tutanağıyla teslim edin.',
    sections: [
      {
        h2: 'Doğru kira bedeli',
        p: ['Kira bedelini aynı mahalledeki benzer dairelerin güncel ilanları değil, gerçekleşen kiralamaları belirler. Yüksek fiyatla uzun süre boş kalan bir daire, doğru fiyatla hemen kiralanan bir daireden daha az kazandırır.'],
      },
      {
        h2: 'Kiracı seçimi',
        p: ['Kiracı adayının gelir durumu, çalıştığı kurum, önceki ev sahibinden referans ve gerekiyorsa kefil bilgisi ön görüşmede değerlendirilmelidir. Öğrenci kiracılarda velinin kefil olması yaygın bir uygulamadır.'],
      },
      {
        h2: 'Sözleşmeye mutlaka yazılması gerekenler',
        list: [
          'Kira bedeli, ödeme günü ve ödeme şekli (banka hesabı)',
          'Sözleşme süresi ve başlangıç tarihi',
          'Yıllık artış koşulu (konutlarda 12 aylık TÜFE ortalamasını aşamaz)',
          'Depozito tutarı (en fazla üç aylık kira) ve iade koşulları',
          'Aidat, yakıt ve ortak giderlerin kime ait olduğu',
          'Demirbaş listesi ve evin teslim durumu',
        ],
      },
      {
        h2: 'Teslim tutanağı',
        p: ['Evin ve eşyaların durumunu tarihli fotoğraflarla kayıt altına alın. Kiracı çıkışında hasar ve depozito konusundaki olası anlaşmazlıkların önüne geçer.'],
      },
    ],
    faqs: [
      {
        q: 'Kira artışı en fazla ne kadar olabilir?',
        a: 'Konut kiralarında yenilenen dönemde artış, bir önceki kira yılının 12 aylık TÜFE ortalamasını geçemez.',
      },
    ],
    related: 'aydin-kiralik-ev',
  },
  {
    slug: 'efeler-mi-kusadasi-mi-didim-mi-yatirim-karsilastirmasi',
    title: 'Efeler mi, Kuşadası mı, Didim mi? Aydın Gayrimenkul Yatırım Karşılaştırması',
    description:
      "Aydın'da gayrimenkul yatırımı için Efeler, Kuşadası ve Didim karşılaştırması: kira getirisi, sezonluk talep, değer artışı potansiyeli ve hangi yatırımcıya uygun olduğu.",
    date: '2026-10-25',
    readMin: 4,
    category: 'Yatırım',
    summary:
      "Düzenli 12 ay kira geliri istiyorsanız Efeler, yaz sezonu getirisi ve tatil kullanımı istiyorsanız Kuşadası, orta–uzun vadeli arsa ve villa değer artışı hedefliyorsanız Didim öne çıkar.",
    sections: [
      {
        h2: 'Efeler: Düzenli kira geliri',
        p: ['Üniversite, hastaneler ve kamu kurumları sayesinde kiralık talebi yıl boyunca süreklidir. Özellikle 1+1 ve 2+1 daireler öğrenci, memur ve sağlık çalışanlarına hızla kiralanır. Boş kalma riski düşük, nakit akışı düzenli bir yatırım arayanlar için uygundur.'],
      },
      {
        h2: 'Kuşadası: Sezonluk getiri ve yaşam kalitesi',
        p: ['Turizm sayesinde yaz aylarında kısa dönem kiralama getirisi yüksektir; kış aylarında ise talep düşer. Hem kendi tatiliniz için kullanmak hem de kiradan gelir elde etmek isteyenler için cazip bir seçenektir. Site aidatları ve sezon dışı boşluk hesaba katılmalıdır.'],
      },
      {
        h2: 'Didim: Orta–uzun vadeli değer artışı',
        p: ['Gelişmeye devam eden sahil hattı, imarlı arsa ve villa projeleriyle uzun vadeli yatırımcıların ilgisini çeker. Arsa yatırımlarında imar ve yol cephesi kontrolleri belirleyicidir.'],
      },
      {
        h2: 'Hangisi size uygun?',
        list: [
          'Aylık düzenli gelir → Efeler (öğrenci/memur kiralaması)',
          'Tatil + sezonluk gelir → Kuşadası (site içi yazlık, villa)',
          'Uzun vadeli birikim → Didim (imarlı arsa, villa)',
          'Toprak & tarım → Söke, İncirliova, Germencik, Çine (tarla, zeytinlik)',
        ],
      },
    ],
    faqs: [
      {
        q: "Aydın'da en çok kira getiren ilçe hangisi?",
        a: 'Yıllık ortalamada düzenli kira için Efeler; yaz sezonunda kısa dönem kiralamada Kuşadası öne çıkar. Getiri, mülkün tipine ve konumuna göre değişir.',
      },
    ],
    related: 'aydin-satilik-ev',
  },
]

export const articleBySlug = Object.fromEntries(ARTICLES.map((a) => [a.slug, a]))

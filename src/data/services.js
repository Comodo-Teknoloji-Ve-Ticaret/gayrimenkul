// Hizmet (arama niyeti) sayfaları. Her biri ayrı bir URL ve ayrı bir SEO hedefi.

export const SERVICES = [
  {
    slug: 'aydin-kiralik-ev',
    short: 'Kiralık Ev',
    icon: 'key',
    tone: 'sea',
    seoTitle: 'Aydın Kiralık Ev ve Daire | Efeler, Kuşadası, Didim | Ozan Arslan',
    description:
      "Aydın'da kiralık ev, kiralık daire ve eşyalı kiralık mı arıyorsunuz? Efeler, Kuşadası, Didim, Nazilli ve Söke'de bütçenize uygun, sözleşmeli ve güvenli kiralama. Ozan Arslan – Pasha Gayrimenkul.",
    eyebrow: 'Aydın Kiralık Konut',
    h1: "Aydın'da Kiralık Ev ve Daire",
    lead:
      "Efeler merkezden Kuşadası sahiline kadar; aile, memur, çalışan ve öğrenciler için eşyalı ya da eşyasız kiralık daireleri tek elden takip ediyorum. Size uyan evi bulup, sözleşmeden anahtar teslimine kadar süreci yönetiyorum.",
    answer:
      "Aydın'da kiralık ev ararken önce bölgeyi (Efeler merkez, kampüs çevresi veya sahil ilçeleri), sonra bütçe, oda sayısı ve eşya durumunu netleştirin. Ozan Arslan'a WhatsApp'tan bu dört bilgiyi göndermeniz, size uygun ilanların listelenmesi için yeterlidir.",
    highlights: [
      { title: 'Eşyalı & eşyasız', text: '1+0 stüdyodan 3+1 aile dairesine, site içi ve müstakil seçenekler.' },
      { title: 'Yazılı sözleşme', text: 'Türk Borçlar Kanunu’na uygun kira sözleşmesi, demirbaş listesi ve teslim tutanağı.' },
      { title: 'Ev sahibine de hizmet', text: 'Dairenizi doğru kiracıya, doğru bedelle ve güvenceli şekilde kiraya veriyoruz.' },
    ],
    sections: [
      {
        h2: "Aydın'da kiralık ev için hangi bölgeye bakmalı?",
        p: [
          "Efeler (Aydın merkez), yıl boyunca kiralık talebinin en canlı olduğu yerdir. Hastanelere, adliyeye, kamu kurumlarına ve çarşıya yakın olmak isteyenler Yedieylül, Mimar Sinan, Girne, Fatih, Zafer, Kurtuluş ve Ilıcabaşı gibi mahallelere yöneliyor. Üniversiteye yakınlık arayanlar için kampüs ile merkez arasındaki ulaşım hattı üzerindeki mahalleler öne çıkıyor.",
          "Kuşadası ve Didim'de kiralık piyasası mevsime göre değişir: yaz aylarında kısa dönem talebi artarken, kış döneminde uzun dönem (12 ay) kiralık daire bulmak daha kolaydır. Nazilli ve Söke ise kendi ticaret ve sanayi hayatı olan, kiralık talebi düzenli ilçelerdir.",
        ],
      },
      {
        h2: 'Kiralık daire tutarken nelere dikkat etmelisiniz?',
        list: [
          'Tapu kontrolü: Evi size kiralayan kişinin gerçekten malik ya da vekili olduğunu doğrulayın.',
          'Yazılı sözleşme: Kira bedeli, ödeme günü, artış koşulu ve depozito sözleşmede açıkça yazmalı.',
          'Depozito: Kanuna göre en fazla üç aylık kira bedeli kadar olabilir.',
          'Aidat ve giderler: Site aidatı, yakıt (doğalgaz/kombi) ve ortak giderlerin kime ait olduğunu netleştirin.',
          'Teslim tutanağı: Evin ve eşyaların durumunu fotoğraflı tutanakla kayıt altına alın.',
          'Zorunlu deprem sigortası (DASK) ve abonelikler: Elektrik, su ve doğalgaz aboneliklerinin devri için gereken belgeleri önceden isteyin.',
        ],
      },
      {
        h2: 'Evinizi kiraya vermek mi istiyorsunuz?',
        p: [
          "Ev sahipleri için bölgedeki güncel kira emsallerini çıkarıyor, dairenizi profesyonel fotoğraflarla tanıtıyor ve kiracı adaylarını ön görüşmeyle eliyorum. Gelir durumu ve referansları kontrol edilmiş kiracıyla, yazılı sözleşme ve teslim tutanağıyla süreç tamamlanır.",
        ],
      },
    ],
    faqs: [
      {
        q: "Aydın'da kiralık ev bulmak ne kadar sürer?",
        a: "Efeler merkezde, bütçe ve beklentiler net ise uygun daire genellikle birkaç gün ile iki hafta arasında bulunur. Üniversite dönemi başlangıcı (Ağustos–Eylül) ve yaz sezonu talebin en yoğun olduğu dönemlerdir; bu dönemlerde erken başlamak avantaj sağlar.",
      },
      {
        q: 'Kiralık evde depozito ne kadar olabilir?',
        a: 'Türk Borçlar Kanunu’na göre depozito (güvence bedeli) en fazla üç aylık kira bedeli kadar olabilir. Para olarak verilen depozitonun vadeli bir banka hesabına yatırılması öngörülür.',
      },
      {
        q: 'Konut kirası her yıl ne kadar artırılabilir?',
        a: 'Konut kiralarında yenilenen kira yılında yapılacak artış, bir önceki kira yılındaki 12 aylık TÜFE ortalamasını geçemez. Sözleşmede bu sınırın altında bir oran da belirlenebilir.',
      },
    ],
    defaultRequest: 'Kiralık ev / daire arıyorum',
  },

  {
    slug: 'aydin-satilik-ev',
    short: 'Satılık Ev',
    icon: 'home',
    tone: 'gold',
    seoTitle: 'Aydın Satılık Ev, Daire ve Villa | Efeler, Kuşadası, Didim | Ozan Arslan',
    description:
      "Aydın'da satılık daire, satılık müstakil ev, Kuşadası ve Didim'de satılık yazlık ve villa. Tapu kontrolü, emsal analizi ve güvenli tapu devri ile Ozan Arslan – Pasha Gayrimenkul.",
    eyebrow: 'Aydın Satılık Konut',
    h1: "Aydın'da Satılık Ev, Daire ve Yazlık",
    lead:
      "Oturmak için ev, kira getirisi için yatırımlık daire ya da denize yakın bir yazlık… Hangi amaçla alırsanız alın, doğru fiyatı emsal verilerle belirliyor, tapu ve imar kontrollerini yapıyor, devri sorunsuz tamamlıyorum.",
    answer:
      "Aydın'da satılık ev alırken önce amacınızı belirleyin: 12 ay kira getirisi için Efeler, yaz sezonu getirisi ve tatil için Kuşadası, orta–uzun vadeli değer artışı için Didim öne çıkar. Satın almadan önce tapu kaydını, imar durumunu, iskân belgesini ve bölgedeki emsal satışları mutlaka kontrol edin.",
    highlights: [
      { title: 'Emsal analizi', text: 'Aynı bölgedeki benzer mülklerin satış değerleriyle gerçekçi fiyat.' },
      { title: 'Tapu & imar kontrolü', text: 'Şerh, ipotek, haciz, iskân ve imar durumu satın almadan önce incelenir.' },
      { title: 'Uçtan uca tapu devri', text: 'Web Tapu başvurusu, DASK, harç ve randevu süreçlerinin takibi.' },
    ],
    sections: [
      {
        h2: 'Satılık evde amaca göre bölge seçimi',
        p: [
          "Efeler'de yeni projeler, site içi daireler ve merkezi konumdaki eski binalar bir arada bulunur; hem oturmak hem kiraya vermek için talep yıl boyunca canlıdır. Kuşadası'nda Davutlar, Güzelçamlı, Soğucak, Karaova ve Kadınlar Denizi çevresi yazlık ve villa arayanların ilk tercihleri arasındadır. Didim'de Altınkum ve Akbük hattı, denize yakın daire ve villa projeleriyle gelişmeye devam eder.",
          "Nazilli ve Söke'de ise merkezi daireler ve yeni gelişen konut bölgeleri, bu ilçelerde yaşayan ve çalışan aileler için uygun fiyatlı seçenekler sunar.",
        ],
      },
      {
        h2: 'Ev satın almadan önce kontrol listesi',
        list: [
          'Tapu kaydı: Malik bilgisi, hisse durumu, ipotek, haciz ve şerhler (e-Devlet ve tapu müdürlüğü kayıtları).',
          'Kat mülkiyeti / kat irtifakı: Dairenin tapu türü ve iskân (yapı kullanma izin belgesi) durumu.',
          'İmar ve yapı durumu: Belediyeden imar durumu, ruhsat ve projeye uygunluk.',
          'Aidat ve borçlar: Site/apartman yönetiminden aidat borcu olmadığına dair yazı, emlak vergisi durumu.',
          'Emsal satışlar: Aynı bina ya da sokaktaki benzer dairelerin gerçek satış fiyatları.',
          'Ödeme güvenliği: Ödemeyi banka üzerinden, tapu devriyle eşzamanlı ve kayıtlı şekilde yapın.',
        ],
      },
      {
        h2: 'Evinizi satmak istiyorsanız',
        p: [
          "Mülkünüz için önce ücretsiz ekspertiz (değer tespiti) hazırlıyorum: bölgedeki emsal satışlar, binanın yaşı, kat, cephe ve konum gibi kriterlerle gerçekçi bir fiyat aralığı çıkarıyoruz. Ardından profesyonel fotoğraf, gerektiğinde drone çekimi ve hedefli ilanlarla mülkünüzü doğru alıcıya ulaştırıyor, finansal olarak hazır alıcılarla görüştürüyorum.",
        ],
      },
    ],
    faqs: [
      {
        q: 'Ev alırken tapu harcı ne kadar ve kim öder?',
        a: 'Tapu harcı, beyan edilen satış bedeli üzerinden alıcı ve satıcı için ayrı ayrı %2 (toplam %4) olarak hesaplanır. Ayrıca döner sermaye ücreti ödenir. Taraflar harcın paylaşımını kendi aralarında farklı kararlaştırabilir.',
      },
      {
        q: "Aydın'da yatırım için hangi ilçe daha avantajlı?",
        a: "Düzenli 12 ay kira geliri için Efeler; yaz sezonu kira getirisi ve tatil kullanımı için Kuşadası; orta–uzun vadede arsa ve villa değer artışı için Didim öne çıkar. En doğru seçim bütçenize ve beklentinize göre değişir; ücretsiz karşılaştırmalı analiz isteyebilirsiniz.",
      },
      {
        q: 'Satılık evde iskân neden önemli?',
        a: 'İskân (yapı kullanma izin belgesi), binanın projesine uygun tamamlandığını gösterir. İskânı olmayan konutlarda kredi kullanımı ve abonelik işlemlerinde sorun yaşanabilir; satın almadan önce kontrol edilmelidir.',
      },
    ],
    defaultRequest: 'Satılık ev / daire arıyorum',
  },

  {
    slug: 'aydin-ogrenci-apart',
    short: 'Öğrenci Apart',
    icon: 'cap',
    tone: 'olive',
    seoTitle: 'Aydın Öğrenci Apart ve Öğrenci Evi | ADÜ Kampüse Yakın Kiralık | Ozan Arslan',
    description:
      "Aydın Adnan Menderes Üniversitesi (ADÜ) öğrencileri için kampüse yakın öğrenci apart, eşyalı 1+0 / 1+1 ve paylaşımlı öğrenci evi. Veli onaylı sözleşme, güvenli kiralama – Ozan Arslan.",
    eyebrow: 'ADÜ Öğrencileri İçin',
    h1: "Aydın'da Öğrenci Apart ve Öğrenci Evi",
    lead:
      "Aydın Adnan Menderes Üniversitesi'ni kazandınız, tebrikler! Kampüse ve şehir merkezine ulaşımı kolay, eşyalı, güvenli öğrenci apartları ve paylaşımlı öğrenci evlerini sizin ve aileniz için bir araya getiriyorum.",
    answer:
      "Aydın'da öğrenci apartı ararken kampüse ulaşım süresi, eşya durumu, faturaların kiraya dahil olup olmadığı, internet ve güvenlik ilk bakılacak beş şeydir. En geniş seçenek Ağustos ve Eylül başında olur; tercih sonuçları açıklanır açıklanmaz aramaya başlamak avantajlıdır.",
    highlights: [
      { title: 'Kampüse yakın', text: 'Merkez kampüse ve şehir merkezine dolmuş/otobüs hattı üzerinde konumlar.' },
      { title: 'Eşyalı & faturası net', text: 'Yatak, dolap, çalışma masası, beyaz eşya; aidat ve faturalar baştan belli.' },
      { title: 'Veli için güvence', text: 'Yazılı sözleşme, kefil düzeni ve fotoğraflı teslim tutanağı.' },
    ],
    sections: [
      {
        h2: "ADÜ öğrencileri Aydın'da nerede kalıyor?",
        p: [
          "Aydın Adnan Menderes Üniversitesi'nin ana yerleşkesi Efeler'dedir; üniversitenin bazı fakülte ve meslek yüksekokulları ise Kuşadası, Nazilli, Söke, Didim, Çine gibi ilçelerde bulunur. Bu yüzden 'Aydın'da öğrenci evi' ararken önce bölümünüzün hangi yerleşkede olduğunu kontrol edin.",
          "Efeler'de okuyan öğrenciler genellikle kampüse doğrudan ulaşımı olan, çarşıya ve sosyal alanlara yakın mahalleleri tercih eder. Eşyalı 1+0 ve 1+1 öğrenci apartları tek başına kalmak isteyenler için; 2+1 ve 3+1 daireler ise ev arkadaşlarıyla paylaşarak kirayı bölüşmek isteyenler için uygundur.",
        ],
      },
      {
        h2: 'Apart mı, yurt mu, paylaşımlı ev mi?',
        list: [
          'Öğrenci apartı (1+0 / 1+1): Kendi alanınız, kendi düzeniniz. Genellikle eşyalı ve bina içinde başka öğrenciler de kalır.',
          'Paylaşımlı öğrenci evi (2+1 / 3+1): Kira ve faturalar bölüşüldüğü için kişi başı maliyet daha düşüktür; ev arkadaşı uyumu önemlidir.',
          'Yurt: Faturalar ve yemek dahildir ama kural ve saat sınırları vardır; kontenjan dolabilir.',
        ],
      },
      {
        h2: 'Öğrenci evi kiralarken veliler için kısa kontrol listesi',
        list: [
          'Kira sözleşmesinde öğrenci ve (varsa) kefil veli bilgileri yazılı olsun.',
          'Faturaların (elektrik, su, doğalgaz, internet) kiraya dahil olup olmadığı netleşsin.',
          'Eşya listesi ve evin durumu fotoğraflı teslim tutanağıyla kayıt altına alınsın.',
          'Binanın giriş güvenliği, kombi/ısınma sistemi ve pencere/kapı kilitleri kontrol edilsin.',
          'Kampüse ulaşım süresi ders saatlerinde bizzat denensin.',
        ],
      },
      {
        h2: 'Öğrenci apartı sahipleri ve yatırımcılar için',
        p: [
          "Aydın'da öğrenciye kiralanabilecek 1+0 / 1+1 daireler, üniversite talebi sayesinde düzenli kira geliri arayan yatırımcıların ilgisini çeker. Kampüse yakın, eşyalı ve bakımlı daireler dönem başlarında hızla kiralanır. Apartınızı ya da dairenizi öğrenciye kiralamak veya bu amaçla daire almak istiyorsanız bölgeye göre talep ve kira analizini birlikte yapabiliriz.",
        ],
      },
    ],
    faqs: [
      {
        q: "Aydın'da öğrenci evi aramaya ne zaman başlamalıyım?",
        a: 'Üniversite tercih sonuçları açıklandıktan hemen sonra, yani Ağustos ayında başlamak en geniş seçeneği sunar. Eylül ortasından sonra kampüse yakın eşyalı apartlar hızla dolar.',
      },
      {
        q: 'Öğrenci apartında faturalar kiraya dahil mi?',
        a: 'Apartına göre değişir. Bazı öğrenci apartlarında aidat, su ve internet kiraya dahildir; elektrik ve doğalgaz ayrı ödenir. Sözleşmeden önce hangi giderlerin dahil olduğunu yazılı olarak netleştirmek gerekir.',
      },
      {
        q: 'Ailem başka şehirdeyse evi görmeden kiralayabilir miyim?',
        a: 'Evet. Daireyi görüntülü görüşme ile canlı gezdirebilir, detaylı fotoğraf ve video gönderebilirim. Sözleşme ve teslim tutanağı hazırlandıktan sonra anahtar teslimi yapılır.',
      },
      {
        q: 'ADÜ’nün ilçelerdeki fakülteleri için de öğrenci evi bulabilir misiniz?',
        a: 'Evet. Kuşadası, Nazilli, Söke ve Didim başta olmak üzere üniversitenin ilçelerdeki yerleşkelerine yakın öğrenci evi ve apart arayışlarında da yardımcı oluyorum.',
      },
    ],
    defaultRequest: 'Öğrenci apart / öğrenci evi arıyorum',
  },

  {
    slug: 'aydin-satilik-arsa-zeytinlik',
    short: 'Arsa & Zeytinlik',
    icon: 'leaf',
    tone: 'clay',
    seoTitle: 'Aydın Satılık Arsa, Tarla ve Zeytinlik | İmar ve Tapu Kontrollü | Ozan Arslan',
    description:
      "Aydın'da satılık imarlı arsa, tarla, zeytinlik ve incir bahçesi. Didim, Kuşadası, Söke, İncirliova, Germencik ve Çine'de imar, kadastro, yol ve hisse kontrolüyle güvenli toprak yatırımı.",
    eyebrow: 'Toprak Yatırımı',
    h1: "Aydın'da Satılık Arsa, Tarla ve Zeytinlik",
    lead:
      "Zeytin ve incirin memleketi Aydın'da toprak almak hem keyifli hem kârlı bir yatırım olabilir — doğru kontrol yapıldığı sürece. İmar durumu, kadastro, yol cephesi, su ve hisseli tapu kontrollerini sizin yerinize yapıyorum.",
    answer:
      "Aydın'da arsa veya zeytinlik alırken en kritik dört kontrol: imar durumu (belediyeden), parselin kadastro sınırları ve yola cephesi, tapunun hisseli olup olmadığı ve tarım arazilerinde bölünme/satış kısıtlamalarıdır. Bu kontroller yapılmadan kapora verilmemelidir.",
    highlights: [
      { title: 'İmar & kadastro', text: 'İmar durumu, parsel sorgu ve yerinde sınır kontrolü.' },
      { title: 'Hisseli tapuya dikkat', text: 'Hisse yapısı ve kullanım hakları satın almadan önce netleşir.' },
      { title: 'Drone & harita sunumu', text: 'Parselin konumu, yolu ve çevresi havadan görüntülenir.' },
    ],
    sections: [
      {
        h2: 'Aydın’da hangi bölgede ne tür arsa var?',
        p: [
          "Didim ve Kuşadası çevresinde denize yakın imarlı konut ve villa arsaları; Söke ovasında tarım arazileri; İncirliova, Germencik, Köşk ve Çine taraflarında zeytinlik, incir bahçesi ve köy içi imarlı arsalar öne çıkar. Nazilli ve Söke'de yol cepheli ticari parseller ve depo/sanayi arsaları da yatırımcıların radarındadır.",
        ],
      },
      {
        h2: 'Arsa ve tarla alırken kontrol listesi',
        list: [
          'İmar durumu belgesi: Konut, ticari, tarım ya da imarsız mı? Emsal (KAKS) ve kat yüksekliği nedir?',
          'Parsel sorgu ve yerinde kontrol: Tapudaki ada/parsel ile arazideki sınırlar örtüşüyor mu?',
          'Yol cephesi: Parselin kadastral yola cephesi var mı, yoksa geçit hakkı mı gerekiyor?',
          'Hisseli tapu: Hissedar sayısı, hissenin arazideki karşılığı ve diğer hissedarların önalım hakkı.',
          'Tarım arazileri: Asgari parsel büyüklüğü ve bölünme kısıtlamaları ile ilgili güncel mevzuat.',
          'Su ve elektrik: Kuyu izni, sulama birliği, elektrik direğine uzaklık.',
        ],
      },
      {
        h2: 'Zeytinlik yatırımı neden ayrı değerlendirilmeli?',
        p: [
          "Zeytinlik alanlarında yapılaşma ve kullanım konusunda özel kurallar uygulanır; zeytinliğin üzerine ev yapma planınız varsa bunun mümkün olup olmadığı satın almadan önce mutlaka araştırılmalıdır. Ağaç sayısı, ağaçların yaşı, verim ve sulama imkânı zeytinliğin değerini doğrudan etkiler.",
        ],
      },
    ],
    faqs: [
      {
        q: 'Hisseli tapulu arsa almak riskli midir?',
        a: 'Hisseli tapuda arazinin belirli bir bölümü değil, tamamı üzerinde pay sahibi olursunuz. Diğer hissedarların önalım hakkı ve kullanım anlaşmazlıkları gibi riskler vardır. Satın almadan önce hisse yapısı ve varsa kullanım (rızai taksim) anlaşması incelenmelidir.',
      },
      {
        q: 'Zeytinliğe ev yapılabilir mi?',
        a: 'Zeytinlik alanlarında yapılaşmaya ilişkin özel kısıtlamalar bulunur ve her parsel için durum farklı olabilir. Satın almadan önce ilgili kurumlardan ve belediyeden parselin durumunu teyit etmek gerekir.',
      },
      {
        q: 'Arsanın imar durumunu nasıl öğrenirim?',
        a: 'Parselin bağlı olduğu belediyenin imar müdürlüğünden imar durumu belgesi alınabilir; birçok belediye e-imar üzerinden de bilgi verir. Ozan Arslan bu kontrolü alım sürecinin bir parçası olarak yapar.',
      },
    ],
    defaultRequest: 'Arsa / tarla / zeytinlik arıyorum',
  },
]

export const serviceBySlug = Object.fromEntries(SERVICES.map((s) => [s.slug, s]))

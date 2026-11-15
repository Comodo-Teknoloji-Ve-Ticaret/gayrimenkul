import { useState } from 'react'
import Icon from '../components/Icon.jsx'
import { AnswerBox, ContactSection, Faq, SectionHead, Wave, toneClass } from '../components/Blocks.jsx'
import { AGENT, AREAS, href, waLink } from '../data/site.js'
import { SERVICES } from '../data/services.js'
import { DISTRICTS } from '../data/districts.js'
import { ARTICLES } from '../data/articles.js'

export const HOME_FAQS = [
  {
    q: "Aydın'da güvenilir bir emlak danışmanı arıyorum, Ozan Arslan kimdir?",
    a: "Ozan Arslan, Pasha Gayrimenkul bünyesinde Yedieylül Mahallesi, Çine Cd. No:1/A, Efeler/Aydın adresindeki ofisten Aydın ve ilçelerinde (Efeler, Kuşadası, Didim, Nazilli, Söke, İncirliova, Germencik, Çine) kiralık ev, satılık ev, öğrenci apartı, arsa ve zeytinlik danışmanlığı veren gayrimenkul danışmanıdır.",
  },
  {
    q: "Aydın'da kiralık veya satılık ev için nasıl başvurabilirim?",
    a: "Ozan Arslan'a 0534 649 73 41 numaralı telefon veya WhatsApp hattından ya da sitedeki form üzerinden ulaşabilirsiniz. Bütçe, bölge, oda sayısı ve eşya tercihi gibi bilgileri paylaşmanız uygun seçeneklerin hızla listelenmesini sağlar.",
  },
  {
    q: "ADÜ öğrencileri için öğrenci apartı bulabiliyor musunuz?",
    a: "Evet. Aydın Adnan Menderes Üniversitesi öğrencileri için kampüse ve şehir merkezine ulaşımı kolay, eşyalı 1+0 / 1+1 öğrenci apartları ve paylaşımlı öğrenci evleri için danışmanlık veriyorum. Veliler için görüntülü gezinti ve yazılı sözleşme sağlanır.",
  },
  {
    q: 'Ücretsiz ekspertiz hizmeti bağlayıcı mı?',
    a: 'Hayır. Mülkünüzün konumunu ve özelliklerini inceleyip bölgedeki gerçek satış emsallerini analiz ederek yazılı bir fiyat aralığı sunuyorum. Tamamen ücretsizdir ve herhangi bir bağlayıcılığı yoktur.',
  },
  {
    q: "Aydın'da yatırım için Efeler mi, Kuşadası mı, Didim mi?",
    a: "12 ay düzenli kira geliri için Efeler; yaz sezonu kira getirisi ve tatil kullanımı için Kuşadası; arsa ve villa projelerinde orta–uzun vadeli değer artışı için Didim öne çıkar.",
  },
]

const STEPS = [
  { icon: 'chart', title: 'Ücretsiz ekspertiz', text: 'Güncel emsal satış ve kira verileriyle mülkün gerçek değerini belirliyoruz.' },
  { icon: 'camera', title: 'Profesyonel sunum', text: 'Fotoğraf, gerektiğinde drone çekimi ve hedefli ilanlarla doğru kitleye ulaşıyoruz.' },
  { icon: 'shield', title: 'Kontrol & eleme', text: 'Tapu, imar ve borç kontrolleri; finansal olarak hazır alıcı ve kiracılar.' },
  { icon: 'doc', title: 'Güvenli devir', text: 'Sözleşme, Web Tapu, DASK, harç ve teslim tutanağına kadar uçtan uca takip.' },
]

function QuickSearch() {
  const [active, setActive] = useState(SERVICES[0].slug)
  const [area, setArea] = useState(AREAS[0])
  const s = SERVICES.find((x) => x.slug === active)

  function go(e) {
    e.preventDefault()
    window.open(waLink(`Merhaba Ozan Bey, ${area} bölgesinde "${s.short}" için seçenekleri öğrenmek istiyorum.`), '_blank', 'noopener')
  }

  return (
    <form onSubmit={go} className="rounded-3xl bg-white p-2 text-ink shadow-[0_30px_60px_-25px_rgba(0,0,0,.55)]">
      <div className="grid grid-cols-2 gap-1 sm:grid-cols-4" role="tablist" aria-label="Ne arıyorsunuz?">
        {SERVICES.map((x) => (
          <button
            key={x.slug}
            type="button"
            role="tab"
            aria-selected={active === x.slug}
            onClick={() => setActive(x.slug)}
            className={`flex items-center justify-center gap-1.5 rounded-2xl px-3 py-2.5 text-[13px] font-bold transition ${
              active === x.slug ? 'bg-brand-50 text-brand-600' : 'text-muted hover:bg-mist-100 hover:text-ink'
            }`}
          >
            <Icon name={x.icon} className="h-4 w-4" />
            {x.short}
          </button>
        ))}
      </div>
      <div className="mt-2 flex flex-col gap-2 border-t border-mist-200 p-2 pt-3 sm:flex-row sm:items-center">
        <label className="flex flex-1 items-center gap-2 rounded-2xl bg-mist-50 px-4 py-3">
          <Icon name="pin" className="h-5 w-5 shrink-0 text-brand-500" />
          <span className="sr-only">Bölge</span>
          <select value={area} onChange={(e) => setArea(e.target.value)} className="w-full bg-transparent text-sm font-semibold outline-none">
            {AREAS.map((a) => <option key={a}>{a}</option>)}
          </select>
        </label>
        <button type="submit" className="btn-brand !py-3.5 sm:!px-7">
          Seçenekleri iste <Icon name="arrow" className="h-4 w-4" />
        </button>
      </div>
      <p className="px-3 pb-2 pt-1 text-xs text-muted">
        ya da{' '}
        <a href={href(`/${s.slug}/`)} className="font-semibold text-brand-600 hover:underline">
          {s.h1} rehberini inceleyin →
        </a>
      </p>
    </form>
  )
}

function Marquee() {
  const items = ['Efeler', 'Kuşadası', 'Didim', 'Nazilli', 'Söke', 'İncirliova', 'Germencik', 'Çine', 'Köşk', 'Davutlar', 'Güzelçamlı', 'Altınkum', 'Akbük', 'Sultanhisar']
  const row = [...items, ...items]
  return (
    <div className="relative overflow-hidden border-y border-white/10 py-4" aria-hidden="true">
      <div className="marquee flex w-max gap-10 whitespace-nowrap font-display text-xl text-white/45">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            {t} <span className="text-brand-400">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="bg-ocean relative overflow-hidden text-white">
      <div className="grain absolute inset-0" aria-hidden="true" />
      <div className="wrap relative grid items-center gap-12 pb-12 pt-12 sm:pt-16 lg:grid-cols-12 lg:pb-16 lg:pt-20">
        <div className="space-y-7 lg:col-span-7">
          <p className="eyebrow !text-brand-300">Pasha Gayrimenkul · Efeler / Aydın</p>
          <h1 className="font-display text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.01em] sm:text-6xl lg:text-[4.1rem]">
            Aydın'da kiralık ev, satılık ev ve öğrenci apartı için{' '}
            <em className="text-gradient-light pr-1 font-medium">güvenilir adres.</em>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-white/75">
            Ben <strong className="text-white">Ozan Arslan</strong>. Efeler'den Kuşadası'na, Didim'den Nazilli ve Söke'ye kadar tüm Aydın'da
            evinizi, apartınızı ya da arsanızı emsal verilerle, tapu kontrolleriyle ve yazılı sözleşmeyle buluyorum.
          </p>

          <QuickSearch />

          <dl className="grid max-w-lg grid-cols-3 gap-4 pt-2">
            {[
              ['17', 'ilçenin tamamı'],
              ['4', 'hizmet alanı'],
              ['%100', 'yazılı sözleşme'],
            ].map(([v, l]) => (
              <div key={l} className="border-l border-white/15 pl-4">
                <dt className="sr-only">{l}</dt>
                <dd className="font-display text-3xl font-semibold">{v}</dd>
                <dd className="text-xs text-white/60">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-[380px] lg:col-span-5">
          <div className="absolute -inset-10 rounded-full bg-brand-400/30 blur-3xl" aria-hidden="true" />
          <div className="arch absolute -inset-3 border border-white/25" aria-hidden="true" />
          <div className="arch relative overflow-hidden bg-gradient-to-b from-white to-brand-100 shadow-[0_40px_80px_-30px_rgba(0,0,0,.6)] ring-4 ring-white/10">
            <img
              src={href('/' + AGENT.photo)}
              alt="Ozan Arslan – Aydın gayrimenkul danışmanı, Pasha Gayrimenkul"
              width="400"
              height="400"
              className="aspect-[4/5] w-full object-cover object-top"
              fetchPriority="high"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-950/80 to-transparent" aria-hidden="true" />
            <div className="absolute inset-x-5 bottom-5 text-white">
              <p className="font-display text-2xl font-semibold">Ozan Arslan</p>
              <p className="text-sm text-brand-300">Gayrimenkul Danışmanı · Aydın</p>
            </div>
          </div>
          <a
            href={`tel:${AGENT.phoneE164}`}
            className="absolute -left-3 top-10 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl sm:-left-10"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-left leading-tight">
              <span className="block text-[11px] text-muted">Hemen ulaşın</span>
              <span className="block text-sm font-bold text-ink">{AGENT.phoneDisplay}</span>
            </span>
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute -right-2 bottom-24 hidden items-center lg:flex gap-2 rounded-2xl bg-[#1f9d55] px-4 py-3 text-sm font-bold text-white shadow-xl sm:-right-8"
          >
            <Icon name="whatsapp" className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </div>
      <Marquee />
      <Wave className="relative -mb-px text-mist-50" />
    </section>
  )
}

function Services() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="hizmetler-baslik">
      <div className="wrap space-y-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHead eyebrow="Ne arıyorsunuz?" title="Aydın'da her ihtiyaca bir kapı" />
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            Her hizmetin kendi rehberi, kontrol listesi ve sık sorulan soruları var. İhtiyacınıza uygun olanı seçin.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <a
              key={s.slug}
              href={href(`/${s.slug}/`)}
              className="group card relative flex flex-col justify-between gap-10 p-6 transition hover:-translate-y-1 hover:border-brand-500/50 hover:shadow-[0_24px_48px_-24px_rgba(11,26,51,.35)]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`grid h-12 w-12 place-items-center rounded-2xl ${toneClass[s.tone]}`}>
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <span className="font-display text-sm text-mist-300">0{i + 1}</span>
                </div>
                <h3 className="h-display text-2xl">{s.h1.replace("Aydın'da ", '')}</h3>
                <p className="text-sm leading-relaxed text-muted">{s.highlights[0].text}</p>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-ink">
                İncele <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function StudentBand() {
  return (
    <section className="bg-ocean relative overflow-hidden py-16 text-white sm:py-20">
      <div className="grain absolute inset-0" aria-hidden="true" />
      <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-sea-500/25 blur-3xl" aria-hidden="true" />
      <div className="wrap relative grid items-center gap-10 lg:grid-cols-2">
        <div className="space-y-5">
          <p className="eyebrow !text-brand-400">ADÜ öğrencileri & veliler</p>
          <h2 className="font-display text-3xl font-semibold leading-tight sm:text-5xl">
            Aydın Adnan Menderes'i kazandınız. <span className="text-brand-400">Ev kısmını bana bırakın.</span>
          </h2>
          <p className="leading-relaxed text-white/70">
            Kampüse ve şehir merkezine ulaşımı kolay, eşyalı öğrenci apartları ve paylaşımlı öğrenci evleri. Başka şehirdeki veliler için
            görüntülü gezinti, yazılı sözleşme ve fotoğraflı teslim tutanağı.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={href('/aydin-ogrenci-apart/')} className="btn-brand">Öğrenci apartlarını incele</a>
            <a href={href('/rehber/aydinda-ogrenci-evi-kiralarken-dikkat-edilmesi-gerekenler/')} className="btn-ghost !border-white/25">
              10 maddelik kontrol listesi
            </a>
          </div>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            ['Eşyalı 1+0 / 1+1', 'Tek kalmak isteyenlere hazır apart daireler'],
            ['Paylaşımlı 2+1 / 3+1', 'Ev arkadaşlarıyla kira ve faturayı bölüşün'],
            ['Faturası net', 'Aidat, internet ve faturalar sözleşmede yazılı'],
            ['İlçe yerleşkeleri', 'Kuşadası, Nazilli, Söke, Didim fakülteleri için de'],
          ].map(([t, d]) => (
            <li key={t} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <Icon name="cap" className="mb-3 h-6 w-6 text-brand-400" />
              <p className="font-semibold">{t}</p>
              <p className="mt-1 text-sm text-white/60">{d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Districts() {
  return (
    <section className="py-16 sm:py-20" id="bolgeler">
      <div className="wrap space-y-10">
        <SectionHead
          eyebrow="Aydın bölge rehberi"
          title="Her ilçenin ayrı bir hikâyesi var"
          intro="Merkezde düzenli kira, sahilde sezon getirisi, ovada toprak yatırımı. İlgilendiğiniz ilçeyi seçin; mahalleleri, öne çıkan mülk tiplerini ve sık soruları inceleyin."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {DISTRICTS.map((d, i) => (
            <a
              key={d.slug}
              href={href(`/bolgeler/${d.slug}/`)}
              className={`group card flex flex-col justify-between gap-8 p-7 transition hover:border-brand-500/50 hover:shadow-[0_24px_48px_-24px_rgba(11,26,51,.35)] ${
                i === 0 ? 'lg:row-span-2 bg-gradient-to-br from-white to-mist-100' : ''
              }`}
            >
              <div className="space-y-3">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-600">{d.tag}</p>
                <h3 className={`h-display ${i === 0 ? 'text-5xl' : 'text-3xl'}`}>{d.name}</h3>
                <p className="text-sm leading-relaxed text-muted">{d.lead}</p>
                {i === 0 && (
                  <div className="hidden space-y-2 pt-4 lg:block">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted">Mahalleler</p>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-ink/80">
                      {d.neighborhoods.map((n) => (
                        <li key={n} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-500" /> {n}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {d.focus.map((f) => (
                    <span key={f} className="rounded-full bg-mist-100 px-2.5 py-1 text-xs font-semibold text-ink/70">{f}</span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-bold">
                  {d.name} rehberi <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          ))}
          <a
            href={href('/aydin-satilik-arsa-zeytinlik/')}
            className="group flex flex-col justify-between gap-8 rounded-3xl bg-gradient-to-r from-olive-600 to-sea-500 p-7 text-white transition hover:opacity-95 md:col-span-2 lg:col-span-3 lg:flex-row lg:items-end"
          >
            <div className="space-y-3">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-olive-100">Toprak yatırımı</p>
              <h3 className="font-display text-3xl font-semibold">İncirliova, Germencik, Çine & köyler</h3>
              <p className="text-sm text-white/75">Zeytinlik, incir bahçesi, tarla ve köy içi imarlı arsa.</p>
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-bold">
              Arsa & zeytinlik <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="border-y border-mist-200 bg-white py-16 sm:py-20">
      <div className="wrap space-y-12">
        <SectionHead eyebrow="Nasıl çalışıyorum?" title="İlk görüşmeden anahtar teslimine dört adım" center />
        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <li key={s.title} className="relative space-y-3">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-navy-950 text-brand-400">
                  <Icon name={s.icon} className="h-5 w-5" />
                </span>
                <span className="h-px flex-1 bg-mist-300" aria-hidden="true" />
                <span className="font-display text-sm text-brand-600">Adım {i + 1}</span>
              </div>
              <h3 className="text-lg font-bold">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="py-16 sm:py-20" id="hakkimda">
      <div className="wrap grid items-center gap-10 lg:grid-cols-12">
        <div className="space-y-5 lg:col-span-7">
          <SectionHead eyebrow="Hakkımda" title="Neden Ozan Arslan & Pasha Gayrimenkul?" />
          <div className="prose-tr">
            <p>
              Gayrimenkul yalnızca anahtar teslim etmek değildir; doğru fiyatlama, hukuki güvenlik ve doğru kişiye ulaşmak gerektirir.
              Pasha Gayrimenkul'ün Efeler Çine Caddesi ofisinden Aydın'ın mahalle mahalle arz–talep dengesini takip ediyorum.
            </p>
            <p>
              Ev sahiplerinin mülkünü değerinin altında satmasını ya da kiraya vermesini önlüyor; alıcıların, kiracıların ve öğrenci ailelerinin ise
              içi rahat, sözleşmeli ve sorunsuz bir süreç yaşamasını sağlıyorum.
            </p>
          </div>
          <ul className="flex flex-wrap gap-2 pt-1">
            {['Yetki belgeli danışmanlık', 'Güncel emsal analizi', 'Tapu & imar kontrolü', 'Yazılı sözleşme'].map((t) => (
              <li key={t} className="inline-flex items-center gap-1.5 rounded-full border border-mist-300 bg-white px-3.5 py-2 text-xs font-semibold">
                <Icon name="check" className="h-3.5 w-3.5 text-olive-600" strokeWidth={2.4} /> {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-5">
          <div className="relative space-y-4 overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 to-navy-800 p-8 text-white shadow-[0_30px_60px_-30px_rgba(31,111,235,.8)]">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10" aria-hidden="true" />
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-200">Ev sahipleri için</p>
            <p className="font-display text-3xl font-semibold leading-tight">Mülkünüz bugün kaç TL eder?</p>
            <p className="text-sm text-white/75">Aydın'daki gerçek satış ve kira emsalleriyle ücretsiz, bağlayıcı olmayan değer raporu.</p>
            <a href={href('/iletisim/')} className="btn-light w-full">
              Ücretsiz ekspertiz iste <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ArticleCards({ items = ARTICLES }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((a) => (
        <a key={a.slug} href={href(`/rehber/${a.slug}/`)} className="group card flex flex-col gap-4 p-6 transition hover:border-brand-500/50">
          <div className="flex items-center gap-3 text-xs text-muted">
            <span className="rounded-full bg-mist-100 px-2.5 py-1 font-semibold text-ink/70">{a.category}</span>
            <span>{a.readMin} dk okuma</span>
          </div>
          <h3 className="h-display text-xl leading-snug group-hover:text-brand-600">{a.title}</h3>
          <p className="line-clamp-2 text-sm leading-relaxed text-muted">{a.description}</p>
        </a>
      ))}
    </div>
  )
}

function Guides() {
  return (
    <section className="border-t border-mist-200 bg-white py-16 sm:py-20">
      <div className="wrap space-y-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHead eyebrow="Aydın gayrimenkul rehberi" title="Karar vermeden önce okuyun" />
          <a href={href('/rehber/')} className="inline-flex items-center gap-2 text-sm font-bold">
            Tüm rehberler <Icon name="arrow" className="h-4 w-4" />
          </a>
        </div>
        <ArticleCards />
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <section className="wrap pb-4">
        <AnswerBox label="Özetle">
          Ozan Arslan, Pasha Gayrimenkul Efeler ofisinden Aydın ve ilçelerinde kiralık ev, satılık ev, ADÜ öğrencileri için öğrenci apartı,
          arsa ve zeytinlik danışmanlığı veren gayrimenkul danışmanıdır. Ücretsiz ekspertiz sunar; {AGENT.phoneDisplay} numaralı telefon ve
          WhatsApp hattından ulaşılabilir.
        </AnswerBox>
      </section>
      <Services />
      <StudentBand />
      <Districts />
      <Process />
      <About />
      <Guides />
      <Faq items={HOME_FAQS} title="Aydın gayrimenkul hakkında sık sorulanlar" />
      <ContactSection />
    </>
  )
}

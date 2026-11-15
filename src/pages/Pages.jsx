import Icon from '../components/Icon.jsx'
import {
  AnswerBox,
  ContactCard,
  ContactSection,
  ContentSections,
  Faq,
  LeadForm,
  PageHero,
  SectionHead,
  toneClass,
} from '../components/Blocks.jsx'
import { ArticleCards } from './Home.jsx'
import { AREAS, UPDATED, href } from '../data/site.js'
import { SERVICES, serviceBySlug } from '../data/services.js'
import { DISTRICTS } from '../data/districts.js'
import { ARTICLES } from '../data/articles.js'

const fmtDate = (iso) =>
  new Date(iso + 'T12:00:00Z').toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })

function Updated({ date = UPDATED }) {
  return (
    <p className="text-xs text-muted">
      Son güncelleme: <time dateTime={date}>{fmtDate(date)}</time> · Yazan: Ozan Arslan
    </p>
  )
}

function RelatedServices({ exclude }) {
  return (
    <div className="space-y-3">
      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted">Diğer hizmetler</p>
      {SERVICES.filter((s) => s.slug !== exclude).map((s) => (
        <a key={s.slug} href={href(`/${s.slug}/`)} className="group flex items-center gap-3 rounded-2xl border border-mist-200 bg-white p-3 transition hover:border-brand-500/50">
          <span className={`grid h-10 w-10 place-items-center rounded-xl ${toneClass[s.tone]}`}>
            <Icon name={s.icon} className="h-5 w-5" />
          </span>
          <span className="flex-1 text-sm font-semibold">{s.h1}</span>
          <Icon name="arrow" className="h-4 w-4 text-muted transition group-hover:translate-x-1" />
        </a>
      ))}
    </div>
  )
}

function DistrictChips() {
  return (
    <div className="flex flex-wrap gap-2">
      {DISTRICTS.map((d) => (
        <a key={d.slug} href={href(`/bolgeler/${d.slug}/`)} className="rounded-full border border-mist-300 bg-white px-3.5 py-2 text-sm font-semibold transition hover:border-navy-950">
          {d.name}
        </a>
      ))}
    </div>
  )
}

/* ───────────── Hizmet sayfası ───────────── */
export function ServicePage({ service: s }) {
  const relatedArticles = ARTICLES.filter((a) => a.related === s.slug)
  return (
    <>
      <PageHero
        crumbs={[{ name: 'Ana sayfa', path: '/' }, { name: s.short, path: `/${s.slug}/` }]}
        eyebrow={s.eyebrow}
        title={s.h1}
        lead={s.lead}
      >
        <div className="grid gap-3 pt-2 sm:grid-cols-3">
          {s.highlights.map((h) => (
            <div key={h.title} className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
              <p className="flex items-center gap-2 font-semibold text-brand-300">
                <Icon name="check" className="h-4 w-4" strokeWidth={2.4} /> {h.title}
              </p>
              <p className="mt-1.5 text-sm text-white/65">{h.text}</p>
            </div>
          ))}
        </div>
      </PageHero>

      <div className="wrap grid gap-12 py-14 lg:grid-cols-12">
        <article className="space-y-10 lg:col-span-8">
          <AnswerBox>{s.answer}</AnswerBox>
          <ContentSections sections={s.sections} />
          <div className="space-y-3">
            <h2 className="h-display text-2xl">Bölgelere göre inceleyin</h2>
            <DistrictChips />
          </div>
          {relatedArticles.length > 0 && (
            <div className="space-y-4">
              <h2 className="h-display text-2xl">İlgili rehberler</h2>
              <ArticleCards items={relatedArticles} />
            </div>
          )}
          <Updated />
        </article>
        <aside className="space-y-8 lg:col-span-4">
          <div className="lg:sticky lg:top-24 space-y-8">
            <LeadForm defaultRequest={s.defaultRequest} compact />
            <RelatedServices exclude={s.slug} />
          </div>
        </aside>
      </div>

      <Faq items={s.faqs} title={`${s.short}: sık sorulan sorular`} />
      <ContactSection defaultRequest={s.defaultRequest} />
    </>
  )
}

/* ───────────── İlçe sayfası ───────────── */
export function DistrictPage({ district: d }) {
  const area = AREAS.find((a) => a.startsWith(d.name)) || AREAS[0]
  return (
    <>
      <PageHero
        crumbs={[{ name: 'Ana sayfa', path: '/' }, { name: 'Bölgeler', path: '/#bolgeler' }, { name: d.name, path: `/bolgeler/${d.slug}/` }]}
        eyebrow={`${d.tag} · Aydın`}
        title={d.h1}
        lead={d.lead}
      >
        <div className="flex flex-wrap gap-2 pt-2">
          {d.focus.map((f) => (
            <span key={f} className="rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-sm font-semibold text-white/85">{f}</span>
          ))}
        </div>
      </PageHero>

      <div className="wrap grid gap-12 py-14 lg:grid-cols-12">
        <article className="space-y-10 lg:col-span-8">
          <AnswerBox>{d.answer}</AnswerBox>
          <section className="space-y-4">
            <h2 className="h-display text-2xl sm:text-3xl">{d.name} gayrimenkul piyasası</h2>
            <div className="prose-tr">
              {d.paragraphs.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
            </div>
          </section>
          <section className="grid gap-6 md:grid-cols-2">
            <div className="card p-6">
              <h2 className="mb-4 text-lg font-bold">Bölge profili</h2>
              <dl className="divide-y divide-mist-200 text-sm">
                {d.profile.map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 py-2.5">
                    <dt className="text-muted">{k}</dt>
                    <dd className="text-right font-semibold">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="card p-6">
              <h2 className="mb-4 text-lg font-bold">Hizmet verdiğim mahalle ve bölgeler</h2>
              <ul className="flex flex-wrap gap-1.5">
                {d.neighborhoods.map((n) => (
                  <li key={n} className="rounded-full bg-mist-100 px-3 py-1.5 text-xs font-semibold">{n}</li>
                ))}
              </ul>
            </div>
          </section>
          <section className="space-y-4">
            <h2 className="h-display text-2xl">{d.locative} ne arıyorsunuz?</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {SERVICES.map((s) => (
                <a key={s.slug} href={href(`/${s.slug}/`)} className="group flex items-center gap-3 rounded-2xl border border-mist-200 bg-white p-4 transition hover:border-brand-500/50">
                  <span className={`grid h-10 w-10 place-items-center rounded-xl ${toneClass[s.tone]}`}>
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                  <span className="flex-1 text-sm font-semibold">{d.name} {s.short.toLocaleLowerCase('tr-TR')}</span>
                  <Icon name="arrow" className="h-4 w-4 text-muted transition group-hover:translate-x-1" />
                </a>
              ))}
            </div>
          </section>
          <div className="space-y-3">
            <h2 className="h-display text-2xl">Diğer ilçeler</h2>
            <DistrictChips />
          </div>
          <Updated />
        </article>
        <aside className="lg:col-span-4">
          <div className="space-y-8 lg:sticky lg:top-24">
            <LeadForm defaultArea={area} compact />
          </div>
        </aside>
      </div>

      <Faq items={d.faqs} title={`${d.name} hakkında sık sorulanlar`} />
      <ContactSection defaultArea={area} />
    </>
  )
}

/* ───────────── Rehber listesi ───────────── */
export function GuideIndex() {
  return (
    <>
      <PageHero
        crumbs={[{ name: 'Ana sayfa', path: '/' }, { name: 'Rehber', path: '/rehber/' }]}
        eyebrow="Aydın gayrimenkul rehberi"
        title="Kiralarken, alırken ve satarken bilmeniz gerekenler"
        lead="Öğrenciler, aileler, ev sahipleri ve yatırımcılar için Aydın'a özel, sade ve uygulanabilir rehberler."
      />
      <section className="wrap py-14">
        <ArticleCards />
      </section>
      <ContactSection />
    </>
  )
}

/* ───────────── Rehber yazısı ───────────── */
export function ArticlePage({ article: a }) {
  const service = serviceBySlug[a.related]
  const others = ARTICLES.filter((x) => x.slug !== a.slug).slice(0, 2)
  return (
    <>
      <PageHero
        crumbs={[{ name: 'Ana sayfa', path: '/' }, { name: 'Rehber', path: '/rehber/' }, { name: a.category, path: `/rehber/${a.slug}/` }]}
        eyebrow={`${a.category} · ${a.readMin} dk okuma`}
        title={a.title}
        lead={a.description}
      />
      <div className="wrap grid gap-12 py-14 lg:grid-cols-12">
        <article className="space-y-10 lg:col-span-8">
          <Updated date={a.date} />
          <AnswerBox label="Özet">{a.summary}</AnswerBox>
          <ContentSections sections={a.sections} />
          {service && (
            <a href={href(`/${service.slug}/`)} className="bg-ocean group flex items-center justify-between gap-4 rounded-3xl p-6 text-white sm:p-8">
              <span>
                <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-brand-400">İlgili hizmet</span>
                <span className="mt-1 block font-display text-2xl font-semibold">{service.h1}</span>
              </span>
              <Icon name="arrow" className="h-6 w-6 shrink-0 text-brand-400 transition group-hover:translate-x-1" />
            </a>
          )}
        </article>
        <aside className="lg:col-span-4">
          <div className="space-y-8 lg:sticky lg:top-24">
            <ContactCard />
            <div className="space-y-3">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted">Diğer rehberler</p>
              {others.map((o) => (
                <a key={o.slug} href={href(`/rehber/${o.slug}/`)} className="block rounded-2xl border border-mist-200 bg-white p-4 text-sm font-semibold transition hover:border-brand-500/50">
                  {o.title}
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
      <Faq items={a.faqs} />
    </>
  )
}

/* ───────────── İletişim / Ücretsiz ekspertiz ───────────── */
export function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: 'Ana sayfa', path: '/' }, { name: 'İletişim', path: '/iletisim/' }]}
        eyebrow="Ücretsiz ekspertiz & iletişim"
        title="Mülkünüzün değerini öğrenin, aradığınız evi birlikte bulalım"
        lead="Satmak, kiraya vermek, satın almak ya da kiralamak… Formu doldurun veya doğrudan arayın; aynı gün dönüş yapıyorum."
      />
      <section className="wrap grid items-start gap-10 py-14 lg:grid-cols-2">
        <div className="space-y-8">
          <ContactCard />
          <div className="card space-y-4 p-6 sm:p-8">
            <h2 className="h-display text-2xl">Ücretsiz ekspertiz nasıl işler?</h2>
            <ol className="space-y-3 text-sm text-ink/80">
              {[
                'Mülkün adresini, metrekaresini ve temel bilgilerini paylaşırsınız.',
                'Bölgedeki gerçekleşmiş satış ve kira emsallerini analiz ederim.',
                'Gerekirse mülkü yerinde görür, durumunu değerlendiririm.',
                'Size yazılı bir fiyat aralığı ve pazarlama önerisi sunarım. Ücretsizdir, bağlayıcı değildir.',
              ].map((t, i) => (
                <li key={t} className="flex gap-3">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-navy-950 text-xs font-bold text-brand-400">{i + 1}</span>
                  {t}
                </li>
              ))}
            </ol>
          </div>
        </div>
        <LeadForm defaultRequest="Mülkümü satmak istiyorum (ücretsiz ekspertiz)" />
      </section>
      <section className="border-t border-mist-200 bg-white py-14">
        <div className="wrap space-y-6">
          <SectionHead eyebrow="Ofis" title="Pasha Gayrimenkul – Efeler, Aydın" />
          <div className="overflow-hidden rounded-3xl border border-mist-200">
            <iframe
              title="Pasha Gayrimenkul Efeler ofis konumu"
              src="https://www.google.com/maps?q=Yedieyl%C3%BCl+Mahallesi+%C3%87ine+Cd.+No:1%2FA+Efeler+Ayd%C4%B1n&output=embed"
              className="h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export function NotFound() {
  return (
    <section className="wrap space-y-6 py-24 text-center">
      <p className="eyebrow justify-center">404</p>
      <h1 className="h-display text-4xl sm:text-5xl">Aradığınız sayfa bulunamadı</h1>
      <p className="mx-auto max-w-md text-muted">Belki şunlardan biriyle devam etmek istersiniz:</p>
      <div className="flex flex-wrap justify-center gap-2">
        <a href={href('/')} className="btn-navy">Ana sayfa</a>
        {SERVICES.map((s) => (
          <a key={s.slug} href={href(`/${s.slug}/`)} className="btn-ghost">{s.short}</a>
        ))}
      </div>
    </section>
  )
}

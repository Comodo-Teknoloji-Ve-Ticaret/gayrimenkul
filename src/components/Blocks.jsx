import { useState } from 'react'
import Icon from './Icon.jsx'
import { AGENT, AREAS, REQUEST_TYPES, href, waLink } from '../data/site.js'

export function SectionHead({ eyebrow, title, intro, center = false, light = false }) {
  return (
    <div className={`max-w-2xl space-y-3 ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <p className={`eyebrow ${light ? '!text-brand-400' : ''}`}>{eyebrow}</p>}
      <h2 className={`h-display text-3xl sm:text-4xl ${light ? '!text-white' : ''}`}>{title}</h2>
      {intro && <p className={`leading-relaxed ${light ? 'text-white/70' : 'text-muted'}`}>{intro}</p>}
    </div>
  )
}

/** "Kısa cevap" kutusu – arama motorları ve yapay zekâ asistanlarının alıntılayabileceği net özet. */
export function AnswerBox({ children, label = 'Kısa cevap' }) {
  return (
    <aside className="relative rounded-2xl border border-brand-500/30 bg-brand-300/20 p-5 sm:p-6" aria-label={label}>
      <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-600">{label}</p>
      <p className="leading-relaxed text-ink/85">{children}</p>
    </aside>
  )
}

export function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Sayfa yolu" className="text-xs text-white/60">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((it, i) => (
          <li key={it.path} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i < items.length - 1 ? (
              <a href={href(it.path)} className="hover:text-white">{it.name}</a>
            ) : (
              <span aria-current="page" className="text-white/90">{it.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export function PageHero({ crumbs, eyebrow, title, lead, children }) {
  return (
    <section className="bg-ocean relative overflow-hidden text-white">
      <div className="grain absolute inset-0" aria-hidden="true" />
      <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-400/25 blur-3xl" aria-hidden="true" />
      <div className="wrap relative space-y-6 pb-6 pt-12 sm:pt-16">
        <Breadcrumbs items={crumbs} />
        <div className="max-w-3xl space-y-4">
          {eyebrow && <p className="eyebrow !text-brand-400">{eyebrow}</p>}
          <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">{title}</h1>
          {lead && <p className="text-base leading-relaxed text-white/75 sm:text-lg">{lead}</p>}
        </div>
        {children}
      </div>
      <Wave className="relative -mb-px text-mist-50" />
    </section>
  )
}

/** Ege dalgası – koyu bölümden açık zemine yumuşak geçiş */
export function Wave({ className = '' }) {
  return (
    <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className={`block h-10 w-full sm:h-16 ${className}`} aria-hidden="true">
      <path
        fill="currentColor"
        fillOpacity=".35"
        d="M0 46c120-22 240-34 360-22s240 44 360 44 240-30 360-40 240 4 360 18v44H0z"
      />
      <path fill="currentColor" d="M0 62c140-26 260-30 380-14s230 38 350 34 250-36 370-40 230 10 340 24v34H0z" />
    </svg>
  )
}

export function Faq({ items, title = 'Sıkça sorulan sorular', eyebrow = 'Merak edilenler' }) {
  if (!items?.length) return null
  return (
    <section className="py-16 sm:py-20" id="sss">
      <div className="wrap grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHead eyebrow={eyebrow} title={title} />
        </div>
        <div className="space-y-3 lg:col-span-8">
          {items.map((f, i) => (
            <details key={f.q} className="group card p-5 sm:p-6" open={i === 0}>
              <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold">
                <h3 className="text-base">{f.q}</h3>
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-mist-100 text-brand-600 transition group-open:rotate-45">
                  <Icon name="plus" className="h-4 w-4" />
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

/** Uzun içerik bölümleri: { h2, p?: string[], list?: string[] } */
export function ContentSections({ sections }) {
  return (
    <div className="space-y-12">
      {sections.map((s) => (
        <section key={s.h2} className="space-y-4">
          <h2 className="h-display text-2xl sm:text-3xl">{s.h2}</h2>
          {s.p && (
            <div className="prose-tr">
              {s.p.map((t) => <p key={t.slice(0, 40)}>{t}</p>)}
            </div>
          )}
          {s.list && (
            <ul className="space-y-3">
              {s.list.map((t) => (
                <li key={t} className="flex gap-3 leading-relaxed text-ink/80">
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-olive-100 text-olive-600">
                    <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2.4} />
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  )
}

export function LeadForm({ defaultRequest = REQUEST_TYPES[0], defaultArea = AREAS[0], compact = false }) {
  const [name, setName] = useState('')
  const [request, setRequest] = useState(defaultRequest)
  const [area, setArea] = useState(defaultArea)
  const [budget, setBudget] = useState('')
  const [note, setNote] = useState('')

  function submit(e) {
    e.preventDefault()
    const lines = [
      'Merhaba Ozan Bey, web sitenizden ulaşıyorum.',
      `Ad Soyad: ${name}`,
      `Talep: ${request}`,
      `Bölge: ${area}`,
      budget && `Bütçe: ${budget}`,
      note && `Not: ${note}`,
    ].filter(Boolean)
    window.open(waLink(lines.join('\n')), '_blank', 'noopener')
  }

  const field =
    'w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-brand-400 focus:bg-white/10'
  const label = 'mb-1.5 block text-xs font-semibold text-white/70'

  return (
    <form onSubmit={submit} className="bg-ocean space-y-4 rounded-3xl p-6 text-white shadow-[0_30px_60px_-30px_rgba(10,38,86,.7)] sm:p-8">
      <div>
        <p className="font-display text-2xl font-semibold text-brand-400">Ne arıyorsunuz?</p>
        <p className="mt-1 text-sm text-white/60">Formu doldurun, talebiniz doğrudan WhatsApp hattıma iletilsin.</p>
      </div>
      <div>
        <label htmlFor="f-name" className={label}>Adınız Soyadınız</label>
        <input id="f-name" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Örn. Ayşe Yılmaz" className={field} autoComplete="name" />
      </div>
      <div className={compact ? 'grid gap-4' : 'grid gap-4 sm:grid-cols-2'}>
        <div>
          <label htmlFor="f-req" className={label}>Talep</label>
          <select id="f-req" value={request} onChange={(e) => setRequest(e.target.value)} className={`${field} [&>option]:text-ink`}>
            {REQUEST_TYPES.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="f-area" className={label}>Bölge</label>
          <select id="f-area" value={area} onChange={(e) => setArea(e.target.value)} className={`${field} [&>option]:text-ink`}>
            {AREAS.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="f-budget" className={label}>Bütçe (isteğe bağlı)</label>
        <input id="f-budget" value={budget} onChange={(e) => setBudget(e.target.value)} placeholder="Örn. aylık 15.000 TL ya da 3.000.000 TL" className={field} />
      </div>
      {!compact && (
        <div>
          <label htmlFor="f-note" className={label}>Notunuz (isteğe bağlı)</label>
          <textarea id="f-note" rows={3} value={note} onChange={(e) => setNote(e.target.value)} placeholder="Oda sayısı, eşyalı/eşyasız, taşınma tarihi…" className={field} />
        </div>
      )}
      <button type="submit" className="btn-brand w-full">
        <Icon name="whatsapp" className="h-4 w-4" /> WhatsApp ile Gönder
      </button>
      <p className="text-center text-xs text-white/50">
        ya da arayın: <a href={`tel:${AGENT.phoneE164}`} className="font-semibold text-white">{AGENT.phoneDisplay}</a>
      </p>
    </form>
  )
}

export function ContactCard() {
  return (
    <div className="card space-y-5 p-6 sm:p-8">
      <div className="flex items-center gap-4">
        <img src={href('/' + AGENT.photo)} alt="Ozan Arslan" width="64" height="64" className="h-16 w-16 rounded-full object-cover object-top ring-2 ring-brand-400" loading="lazy" />
        <div>
          <p className="font-display text-xl font-semibold">{AGENT.name}</p>
          <p className="text-sm text-muted">{AGENT.title} · {AGENT.company}</p>
        </div>
      </div>
      <ul className="space-y-3 text-sm">
        <li className="flex gap-3"><Icon name="pin" className="h-5 w-5 shrink-0 text-brand-600" /> {AGENT.addressFull}</li>
        <li className="flex gap-3"><Icon name="phone" className="h-5 w-5 shrink-0 text-brand-600" /> <a className="font-semibold hover:underline" href={`tel:${AGENT.phoneE164}`}>{AGENT.phoneDisplay}</a></li>
        <li className="flex gap-3"><Icon name="mail" className="h-5 w-5 shrink-0 text-brand-600" /> <a className="hover:underline" href={`mailto:${AGENT.email}`}>{AGENT.email}</a></li>
      </ul>
      <div className="grid gap-2 sm:grid-cols-2">
        <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-wa"><Icon name="whatsapp" className="h-4 w-4" /> WhatsApp</a>
        <a href={AGENT.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost"><Icon name="pin" className="h-4 w-4" /> Yol tarifi</a>
      </div>
    </div>
  )
}

export function ContactSection({ defaultRequest, defaultArea, title = 'Hemen görüşelim', intro }) {
  return (
    <section id="iletisim" className="border-t border-mist-200 bg-mist-100/60 py-16 sm:py-20">
      <div className="wrap grid items-start gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <SectionHead
            eyebrow="Doğrudan iletişim"
            title={title}
            intro={intro || 'Kiralık ya da satılık ev, öğrenci apartı veya arsa… Ne aradığınızı yazın, size uygun seçenekleri aynı gün paylaşayım.'}
          />
          <ContactCard />
        </div>
        <LeadForm defaultRequest={defaultRequest} defaultArea={defaultArea} />
      </div>
    </section>
  )
}

export const toneClass = {
  sea: 'bg-sea-100 text-sea-500',
  gold: 'bg-brand-100 text-brand-600',
  olive: 'bg-olive-100 text-olive-600',
  clay: 'bg-clay-100 text-clay-600',
}

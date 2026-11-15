import { useState } from 'react'
import Icon from './Icon.jsx'
import { AGENT, href, waLink } from '../data/site.js'
import { SERVICES } from '../data/services.js'
import { DISTRICTS } from '../data/districts.js'

const NAV = [
  ...SERVICES.map((s) => ({ label: s.short, to: `/${s.slug}/` })),
  { label: 'Rehber', to: '/rehber/' },
]

function Logo({ light = false }) {
  return (
    <a href={href('/')} className="flex items-center gap-3" aria-label="Ozan Arslan Gayrimenkul – Ana sayfa">
      <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-navy-900 font-display text-lg font-semibold text-white ring-2 ring-brand-200/60">
        OA
      </span>
      <span className="leading-none">
        <span className={`block font-display text-lg font-semibold tracking-tight ${light ? 'text-white' : 'text-ink'}`}>
          Ozan Arslan
        </span>
        <span className={`mt-1 block text-[10px] font-bold uppercase tracking-[0.2em] ${light ? 'text-brand-400' : 'text-brand-600'}`}>
          Pasha Gayrimenkul · Aydın
        </span>
      </span>
    </a>
  )
}

function Header({ path }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 border-b border-mist-200/80 bg-mist-50/90 backdrop-blur-md">
      <div className="wrap flex h-16 items-center justify-between gap-4 sm:h-[72px]">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Ana menü">
          {NAV.map((n) => {
            const active = path === n.to || (n.to !== '/' && path.startsWith(n.to))
            return (
              <a
                key={n.to}
                href={href(n.to)}
                className={`rounded-full px-3.5 py-2 text-sm font-semibold transition ${
                  active ? 'bg-navy-950 text-white' : 'text-ink/75 hover:bg-mist-200/70 hover:text-ink'
                }`}
              >
                {n.label}
              </a>
            )
          })}
          <a href={href('/iletisim/')} className="btn-brand ml-2 !py-2.5">
            Ücretsiz Ekspertiz
          </a>
        </nav>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="grid h-11 w-11 place-items-center rounded-full text-ink hover:bg-mist-200 lg:hidden"
          aria-expanded={open}
          aria-controls="mobil-menu"
          aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
        >
          <Icon name={open ? 'close' : 'menu'} className="h-6 w-6" />
        </button>
      </div>
      {open && (
        <div id="mobil-menu" className="border-t border-mist-200 bg-mist-50 lg:hidden">
          <nav className="wrap grid gap-1 py-4" aria-label="Mobil menü">
            {NAV.map((n) => (
              <a key={n.to} href={href(n.to)} className="rounded-xl px-3 py-3 font-semibold hover:bg-mist-200">
                {n.label}
              </a>
            ))}
            <p className="mt-2 px-3 text-[11px] font-bold uppercase tracking-[0.18em] text-muted">Bölgeler</p>
            <div className="flex flex-wrap gap-2 px-3 pb-2">
              {DISTRICTS.map((d) => (
                <a key={d.slug} href={href(`/bolgeler/${d.slug}/`)} className="rounded-full border border-mist-300 px-3 py-1.5 text-sm font-semibold">
                  {d.name}
                </a>
              ))}
            </div>
            <a href={href('/iletisim/')} className="btn-brand mt-2">
              Ücretsiz Ekspertiz Talep Et
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

function TopBar() {
  return (
    <div className="bg-navy-950 text-[12px] text-white/75">
      <div className="wrap flex h-9 items-center justify-between gap-4">
        <p className="truncate">
          <span className="font-semibold text-brand-400">Aydın & ilçeleri:</span> kiralık · satılık · öğrenci apart · arsa
        </p>
        <a href={`tel:${AGENT.phoneE164}`} className="shrink-0 font-semibold text-white hover:text-brand-400">
          {AGENT.phoneDisplay}
        </a>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="bg-ocean text-white/70">
      <div className="wrap grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4 sm:col-span-2 lg:col-span-1">
          <Logo light />
          <p className="text-sm leading-relaxed">
            Pasha Gayrimenkul Efeler ofisinden Aydın ve tüm ilçelerinde kiralık, satılık, öğrenci apartı ve arsa danışmanlığı.
          </p>
        </div>
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-brand-400">Hizmetler</p>
          <ul className="space-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <a href={href(`/${s.slug}/`)} className="hover:text-white">
                  {s.h1.replace("Aydın'da ", 'Aydın ')}
                </a>
              </li>
            ))}
            <li>
              <a href={href('/iletisim/')} className="hover:text-white">Ücretsiz Ekspertiz</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-brand-400">Bölgeler</p>
          <ul className="space-y-2 text-sm">
            {DISTRICTS.map((d) => (
              <li key={d.slug}>
                <a href={href(`/bolgeler/${d.slug}/`)} className="hover:text-white">
                  {d.name} emlak
                </a>
              </li>
            ))}
            <li>
              <a href={href('/rehber/')} className="hover:text-white">Gayrimenkul Rehberi</a>
            </li>
          </ul>
        </div>
        <address className="space-y-3 text-sm not-italic">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-brand-400">Ofis</p>
          <p>{AGENT.company}<br />{AGENT.addressFull}</p>
          <p>
            <a href={`tel:${AGENT.phoneE164}`} className="font-semibold text-white hover:text-brand-400">{AGENT.phoneDisplay}</a>
            <br />
            <a href={`mailto:${AGENT.email}`} className="hover:text-white">{AGENT.email}</a>
          </p>
          <a href={AGENT.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-white">
            <Icon name="linkedin" className="h-4 w-4" /> LinkedIn
          </a>
        </address>
      </div>
      <div className="border-t border-white/10">
        <div className="wrap flex flex-col gap-1 py-5 text-xs text-white/50 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Ozan Arslan · Pasha Gayrimenkul. Tüm hakları saklıdır.</p>
          <p>Aydın · Efeler · Kuşadası · Didim · Nazilli · Söke</p>
        </div>
      </div>
    </footer>
  )
}

function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-mist-200 bg-mist-50/95 p-2.5 backdrop-blur lg:hidden">
      <a href={`tel:${AGENT.phoneE164}`} className="btn-navy !py-3">
        <Icon name="phone" className="h-4 w-4" /> Hemen Ara
      </a>
      <a href={waLink('Merhaba Ozan Bey, bilgi almak istiyorum.')} target="_blank" rel="noopener noreferrer" className="btn-wa !py-3">
        <Icon name="whatsapp" className="h-4 w-4" /> WhatsApp
      </a>
    </div>
  )
}

export default function Layout({ path, children }) {
  return (
    <div className="flex min-h-screen flex-col pb-[68px] lg:pb-0">
      <a href="#icerik" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">
        İçeriğe geç
      </a>
      <TopBar />
      <Header path={path} />
      <main id="icerik" className="flex-1">{children}</main>
      <Footer />
      <MobileBar />
    </div>
  )
}

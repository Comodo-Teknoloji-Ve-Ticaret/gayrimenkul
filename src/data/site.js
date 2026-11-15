import { SITE_URL } from '../../site.config.js'

export { SITE_URL }

export const AGENT = {
  name: 'Ozan Arslan',
  altNames: ['Ozan Arsalan', 'Ozan Arslan Emlak', 'Ozan Arslan Gayrimenkul'],
  title: 'Gayrimenkul Danışmanı',
  company: 'Pasha Gayrimenkul',
  phoneDisplay: '0534 649 73 41',
  phoneE164: '+905346497341',
  phoneWa: '905346497341',
  email: 'ozanarss@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ozanarsslan',
  street: 'Yedieylül Mahallesi, Çine Cd. No:1/A',
  district: 'Efeler',
  city: 'Aydın',
  postalCode: '09020',
  addressFull: 'Yedieylül Mahallesi, Çine Cd. No:1/A, 09020 Efeler/Aydın',
  lat: 37.8444,
  lng: 27.8458,
  photo: 'ozan-arslan.jpg',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Yedieyl%C3%BCl+Mahallesi+%C3%87ine+Cd.+No:1%2FA+09020+Efeler+Ayd%C4%B1n',
}

export const UPDATED = '2026-11-15'

export const waLink = (text = 'Merhaba Ozan Bey, web sitenizden ulaşıyorum.') =>
  `https://wa.me/${AGENT.phoneWa}?text=${encodeURIComponent(text)}`

const BASE = import.meta.env.BASE_URL // ör. "/gayrimenkul/"

/** Site içi bağlantı: href('/aydin-kiralik-ev/') → '/gayrimenkul/aydin-kiralik-ev/' */
export const href = (path = '/') => BASE + path.replace(/^\//, '')

/** Mutlak URL (canonical, sitemap, JSON-LD için) */
export const absUrl = (path = '/') => SITE_URL + '/' + path.replace(/^\//, '')

export const REQUEST_TYPES = [
  'Kiralık ev / daire arıyorum',
  'Satılık ev / daire arıyorum',
  'Öğrenci apart / öğrenci evi arıyorum',
  'Arsa / tarla / zeytinlik arıyorum',
  'Mülkümü satmak istiyorum (ücretsiz ekspertiz)',
  'Mülkümü kiraya vermek istiyorum',
]

export const AREAS = [
  'Efeler (Merkez)',
  'Kuşadası',
  'Didim',
  'Nazilli',
  'Söke',
  'İncirliova',
  'Germencik',
  'Çine',
  'Diğer Aydın ilçeleri',
]

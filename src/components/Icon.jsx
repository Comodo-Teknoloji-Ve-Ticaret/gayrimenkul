const PATHS = {
  key: 'M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-3 3v11m0-4h3m-3-3h2',
  home: 'M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5Z',
  cap: 'M2 9l10-5 10 5-10 5L2 9Zm4 2.2V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.8M22 9v6',
  leaf: 'M5 19c0-8 5-14 15-15-1 10-7 15-15 15Zm0 0 7-7',
  phone: 'M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2',
  pin: 'M12 21s-7-6.2-7-12a7 7 0 1 1 14 0c0 5.8-7 12-7 12Zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  mail: 'M3 6h18v12H3V6Zm0 0 9 7 9-7',
  arrow: 'M5 12h14m-6-6 6 6-6 6',
  check: 'm5 12.5 4.5 4.5L19 7',
  menu: 'M4 7h16M4 12h16M4 17h16',
  close: 'M6 6l12 12M18 6 6 18',
  shield: 'M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6l-8-3Zm-3.5 9 2.5 2.5 4.5-5',
  chart: 'M4 20V10m6 10V4m6 16v-7m4 7H2',
  camera: 'M4 8h3l2-3h6l2 3h3v11H4V8Zm8 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z',
  doc: 'M7 3h7l5 5v13H7V3Zm7 0v5h5M10 13h6m-6 4h6',
  plus: 'M12 5v14M5 12h14',
  linkedin: 'M6 9v10M6 5.5v.01M10 19v-6a3 3 0 0 1 6 0v6m-6-10v10',
}

export default function Icon({ name, className = 'h-5 w-5', strokeWidth = 1.8 }) {
  if (name === 'whatsapp') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.4.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" />
      </svg>
    )
  }
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={PATHS[name]} />
    </svg>
  )
}

import { ArrowUpRight } from 'lucide-react'

const footerLinks = [
  { label: 'About Growwth Partners', href: 'https://growwthpartners.com/' },
  { label: 'Privacy Policy', href: 'https://growwthpartners.com/privacy-policy' },
  { label: 'Terms of Service', href: 'https://growwthpartners.com/terms' },
]

export default function Footer() {
  return (
    <footer
      id="site-footer"
      className="relative overflow-hidden border-t border-[rgba(138,109,0,0.18)] bg-[radial-gradient(circle_at_12%_0%,rgba(255,204,51,0.28),transparent_30%),linear-gradient(135deg,#ffffff_0%,#fffbea_48%,#fff3c4_100%)] text-[var(--pcfo-text)]"
    >
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[var(--pcfo-accent)]/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute right-0 top-10 h-72 w-72 rounded-full bg-[#f4a261]/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(138,109,0,0.16)] bg-white/85 p-6 shadow-[0_22px_70px_rgba(92,71,0,0.1)] backdrop-blur sm:p-8">
            <span className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#ffcc33_0%,#f5b82e_48%,#f4a261_100%)]" />
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[var(--pcfo-accent-700)]">
              Fractional CFO services
            </p>
            <h2 className="mt-4 max-w-3xl text-2xl font-black leading-tight tracking-normal text-[var(--pcfo-text)] sm:text-3xl lg:text-[2rem]">
              Growwth Partners
            </h2>
            <p className="mt-3 max-w-3xl text-base font-semibold leading-8 text-[var(--pcfo-muted)] sm:text-lg">
              Singapore-headquartered. Serving 200+ businesses across SG, UAE, AU,
              and US with senior finance leadership built for founders, operators,
              and growth-stage teams.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[rgba(138,109,0,0.16)] bg-white/90 p-5 shadow-[0_22px_70px_rgba(92,71,0,0.1)] backdrop-blur sm:p-6">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[var(--pcfo-accent-700)]">
              Quick Links
            </p>

            <div className="mt-5 grid gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-[rgba(138,109,0,0.14)] bg-[#fffbea] px-4 py-3.5 text-sm font-semibold text-[var(--pcfo-text)] shadow-[0_8px_22px_rgba(92,71,0,0.04)] transition hover:-translate-y-0.5 hover:border-[#f4a261]/70 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pcfo-accent-700)] sm:text-base"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight
                    className="h-4 w-4 text-[#8a6d00] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#f4a261]"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[rgba(138,109,0,0.16)] pt-5">
          <p className="text-center text-sm font-semibold text-[var(--pcfo-muted)]">
            Copyright © 2026 Growwth Partners. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

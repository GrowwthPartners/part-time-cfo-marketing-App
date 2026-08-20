import { Award, ExternalLink, Globe2, Mail, Medal, Users } from 'lucide-react'

const credibility = [
  { icon: Award, label: "Asia's Greatest CFO Award" },
  { icon: Users, label: '250+ founders mentored' },
  { icon: Globe2, label: '2 decades serving Singapore businesses' },
  { icon: Medal, label: 'Golden Globe Tigers Award' },
]

export default function MeetJatinSection() {
  return (
    <section className="bg-[var(--pcfo-bg)] px-4 py-16 text-[var(--pcfo-text)] sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -inset-6 rounded-full bg-[var(--pcfo-accent)] opacity-25 blur-2xl"
          />
          <div className="relative rounded-[2.5rem] border border-[var(--pcfo-divider)] bg-[var(--pcfo-surface)] p-6 text-center shadow-[0_26px_90px_rgba(32,30,29,0.12)]">
            <div className="mx-auto h-64 w-64 overflow-hidden rounded-full border-8 border-[var(--pcfo-bg)] bg-[var(--pcfo-bg)] shadow-[0_22px_70px_rgba(32,30,29,0.16)] sm:h-72 sm:w-72 lg:h-80 lg:w-80">
              <img
                src="/image/jatin-ceo.jpeg"
                alt="Jatin Detwani, founder of Growwth Partners"
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <p className="mt-6 text-sm font-black uppercase tracking-[0.22em] text-[var(--pcfo-accent-700)]">
              Founder, Growwth Partners
            </p>
            <p className="mt-2 text-2xl font-black text-[var(--pcfo-text)]">Jatin Detwani</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href="mailto:jd@growwthpartners.com"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--pcfo-accent)] px-5 py-3 text-sm font-black text-white shadow-[0_16px_42px_rgba(138,109,0,0.22)] transition hover:-translate-y-0.5 hover:bg-[#e6b800] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--pcfo-accent-700)]"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email Jatin
              </a>
              <a
                href="https://www.linkedin.com/in/jatin-detwani/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--pcfo-divider)] bg-[var(--pcfo-bg)] px-5 py-3 text-sm font-black text-[var(--pcfo-text)] shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--pcfo-accent-700)] hover:bg-[var(--pcfo-accent-100)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--pcfo-accent-700)]"
              >
                <ExternalLink className="h-4 w-4 text-[var(--pcfo-accent-700)]" aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[var(--pcfo-accent-700)]">
            Meet Jatin
          </p>
          <h2 className="mt-4 text-3xl font-black leading-tight tracking-normal text-[var(--pcfo-text)] sm:text-4xl lg:text-5xl">
            Led by One of Asia's Top CFOs
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-[var(--pcfo-muted)]">
            <p>
              Jatin Detwani founded Growwth Partners after two decades serving
              Singapore businesses across finance, fundraising, and growth strategy.
              He's been recognised as one of Asia's Greatest CFOs and has personally
              mentored 250+ founders across Singapore, the UAE, Australia, and the US.
            </p>
            <p>
              When you work with Growwth Partners, your engagement is personally
              guided by Jatin, not just supervised from a distance. Strategic decisions,
              fundraising prep, and complex advisory work go through him.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {credibility.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-2xl border border-[var(--pcfo-divider)] bg-[var(--pcfo-surface)] px-4 py-3 text-sm font-black text-[var(--pcfo-text)]"
                >
                  <Icon className="h-5 w-5 text-[var(--pcfo-accent-700)]" aria-hidden="true" />
                  {item.label}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

import { lazy, Suspense, useEffect, useState } from 'react'
import { ArrowRight, BadgeCheck, ChartNoAxesCombined, ShieldCheck } from 'lucide-react'
import bannerImage from '../../assets/hero/banner-image.webp'

const DesktopAwardShowcase = lazy(() => import('./DesktopAwardShowcase'))

const trustItems = [
  { icon: BadgeCheck, label: 'Award-winning CFO leadership' },
  { icon: ChartNoAxesCombined, label: 'Strategic finance, reporting, and forecasting' },
  { icon: ShieldCheck, label: 'Singapore and Australia compliance support' },
]

function DesktopAwardSkeleton() {
  return (
    <div
      className="relative mx-auto min-h-[590px] w-full max-w-[38rem] overflow-hidden rounded-[2.5rem] border border-[#ece8e3] bg-[#fbfaf8] shadow-[0_22px_70px_rgba(32,30,29,0.08)] xl:min-h-[660px]"
      aria-hidden="true"
    >
      <div className="absolute inset-8 rounded-[2rem] bg-[#fff3c4]" />
      <div className="absolute left-1/2 top-1/2 h-72 w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] bg-white shadow-[0_18px_50px_rgba(32,30,29,0.1)]" />
      <div className="absolute left-7 top-12 h-28 w-44 rounded-[1.5rem] bg-white/90" />
      <div className="absolute bottom-10 right-9 h-32 w-36 rounded-[1.5rem] bg-white/90" />
    </div>
  )
}

function useDesktopEnhancements() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    const update = () => setEnabled(mediaQuery.matches)

    update()
    mediaQuery.addEventListener('change', update)

    return () => mediaQuery.removeEventListener('change', update)
  }, [])

  return enabled
}

function HeroSection() {
  const enableDesktopEnhancements = useDesktopEnhancements()

  const openConsultationModal = () => {
    document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="pcfo-hero" id="top">
      <div className="pcfo-hero-orb" aria-hidden="true" />
      <div className="pcfo-hero-main">
        <div className="pcfo-hero-copy">
          <p className="pcfo-kicker">Part-Time CFO Services</p>
          <h1>CFO-level financial leadership, at a fraction of the cost.</h1>
          <p className="pcfo-hero-lead">
            We handle your finances, you grow your business!
          </p>
          <p>
            Growwth&apos;s Fractional CFOs are industry experts with decades of
            experience in managing business money.
          </p>
          <p>
            From financial analysis and strategic planning to budgeting, risk
            management, and a host of other vital CFO services, we handle the
            entire spectrum of your financial needs, allowing you to concentrate
            on growing your business.
          </p>
          <div className="pcfo-actions">
            <button
              className="pcfo-btn pcfo-btn-primary pcfo-btn-large"
              type="button"
              onClick={() =>
                window.open('https://calendly.com/jd-growwthpartners/demo', '_blank')
              }
            >
              Get Your Free Consultation
            </button>
            <a className="pcfo-btn pcfo-btn-secondary pcfo-btn-large" href="#why">
              Why choose us
            </a>
          </div>
        </div>

        <div className="pcfo-hero-visual">
          <img src={bannerImage} alt="Business finance consultation meeting" />
          <div className="pcfo-hero-visual-card">
            <span>Finance partner for founders</span>
            <strong>Clarity before every major decision.</strong>
          </div>
        </div>
      </div>
      <div className="mt-12 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 xl:gap-16">
        <div className="rounded-[2rem] border border-[#f0dfb7] bg-white/90 p-5 shadow-[0_22px_70px_rgba(92,71,0,0.12)] backdrop-blur sm:p-6 lg:p-7">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8a6d00]">
            Trusted CFO partner
          </p>

          <div className="mt-5 grid gap-3">
            {trustItems.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-2xl border border-[#f3e6bf] bg-[#fffbea] px-4 py-3 text-sm font-bold text-[#201e1d]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ffcc33] text-[#201e1d]">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span>{item.label}</span>
                </div>
              )
            })}
          </div>

          <div className="mt-7 flex flex-col gap-3">
            <button
              type="button"
              onClick={openConsultationModal}
              className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[linear-gradient(100deg,#ffcc33_0%,#f5b82e_48%,#f4a261_100%)] px-7 py-4 text-base font-black text-white shadow-[0_18px_44px_rgba(244,162,97,0.24)] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f5b82e]"
            >
              Book a Free 30-Min Consultation
              <ArrowRight
                className="h-5 w-5 transition group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </button>

            <button
              type="button"
              onClick={() =>
                window.open('https://calendly.com/jd-growwthpartners/demo', '_blank')
              }
              className="group cursor-pointer rounded-2xl border border-[#f0dfb7] bg-white px-5 py-3 text-left text-sm font-bold text-[#201e1d] shadow-sm transition hover:border-[#f4a261]/60 hover:bg-[#fffbea] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f5b82e]"
            >
              <span className="block text-[#17120d]">Sounds too good to be true?</span>
              <span className="inline-flex items-center gap-1 text-[#8a6d00]">
                Check for yourself, pick a time directly on Jatin&apos;s calendar
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </button>
          </div>
        </div>

        <div className="hidden md:block">
          {enableDesktopEnhancements ? (
            <Suspense fallback={<DesktopAwardSkeleton />}>
              <DesktopAwardShowcase />
            </Suspense>
          ) : (
            <DesktopAwardSkeleton />
          )}
        </div>
      </div>
    </section>
  )
}

export default HeroSection

import { lazy, Suspense, useCallback, useEffect, useMemo, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Clock,
  Globe2,
  MessageSquareQuote,
  Shield,
  Star,
  TrendingUp,
  Users,
} from 'lucide-react'
import geleijnVerheijke from '../../assets/hero/geleijn-verheijke.webp'
import kiyanForoughi from '../../assets/hero/KiyanForoughi1.webp'
import maneeshMishra from '../../assets/hero/maneeshmishra.webp'
import rajithVolopay from '../../assets/hero/rajith-volopay.webp'
import socialProofBanner from '../../assets/hero/social-proof-banner.webp'
import suMaeChia from '../../assets/hero/su-mae-chia.webp'

const TrustedLogosSection = lazy(() => import('./TrustedLogosSection'))

const stats = [
  { icon: Users, value: '25+', label: 'Clients Worldwide' },
  { icon: Star, value: '25+', label: 'Professional Staff' },
  { icon: Shield, value: '15+', label: 'Years Track Record' },
  { icon: Globe2, value: '15+', label: 'Global Partners' },
]

function useDesktopImage() {
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

export default function SocialProofSection() {
  const showBanner = useDesktopImage()
  const [activeFeatured, setActiveFeatured] = useState(0)
  const [expandedStory, setExpandedStory] = useState<number | null>(null)

  const testimonialVideos = useMemo(
    () => [
      {
        id: 'uylxy3pjgl',
        title: 'Customer Testimonial 1',
        name: 'Ellie Curran',
        role: 'Former Co-Founder & CEO, CoLab',
      },
      {
        id: '7lotud5v4w',
        title: 'Customer Testimonial 2',
        name: 'Migara Tennakoon',
        role: 'Founder & CEO, Peace Lily',
      },
      {
        id: '70p2vilm80',
        title: 'Customer Testimonial 3',
        name: 'Seckin Caglin',
        role: 'Co-Founder & Co-CEO, Cenoa',
      },
      {
        id: 'kos5z2qvc2',
        title: 'Customer Testimonial 4',
        name: 'Neha Jain',
        role: 'FP&A Manager, Tigerhall',
      },
      {
        id: 'u5hhsmcpqb',
        title: 'Customer Testimonial 5',
        name: 'Marcos Bulacio',
        role: 'Founder & CEO, Pangea | Regenesis Labs',
      },
      {
        id: '7439tnjfo9',
        title: 'Customer Testimonial 6',
        name: 'Navin Kumar Selvara',
        role: 'Managing Director, Navsar Engineering International',
      },
      {
        id: '8wkgd8bplx',
        title: 'Customer Testimonial 7',
        name: 'Deep Singh',
        role: 'Founder, Credilinq',
      },
      {
        id: 'sohkpspr9u',
        title: 'Customer Testimonial 8',
        name: 'Matt',
        role: 'Co-Founder & Managing Director, Player Media (Mana Group)',
      },
    ],
    [],
  )

  const featuredTestimonials = useMemo(
    () => [
      {
        image: kiyanForoughi,
        name: 'Kiyan Foroughi',
        role: 'Co-founder & CEO',
        company: 'Needle',
        headline: 'Growwth Partners gave us our time back.',
        shortQuote:
          'When you are scaling a startup across five countries with a distributed team, finance ops can consume your entire week. Growwth Partners changed that equation for us. We went from drowning in compliance, payroll coordination, and vendor management to spending maybe two hours a week on ops.',
        fullQuote: [
          'They did not just handle the work. They owned it. US entity setup. Multi-jurisdiction EOR coordination. CPF, MOM, IRAS, all the regulatory noise that kills momentum. They took it off our plate entirely.',
          'What I value most: they operate like operators, not accountants. When something is urgent, they handle it. When we need clarity, they give us signal, not spreadsheets.',
          'For founders who need finance infrastructure that does not require hand-holding, Growwth Partners is the move.',
        ],
        metrics: [
          { icon: Globe2, label: '5 Countries', detail: 'Multi-jurisdiction ops' },
          { icon: Clock, label: '~2 hrs/week', detail: 'FinOps time reduced' },
          { icon: TrendingUp, label: '$600K+ ARR', detail: 'Scaled without friction' },
        ],
      },
      {
        image: rajithVolopay,
        name: 'Rajith',
        role: 'Co-Founder & CEO',
        company: 'Volopay',
        headline: 'They work like an extension of your internal finance leadership.',
        shortQuote:
          'When you are building a global fintech across multiple jurisdictions, tax structuring, regulatory positioning, and transaction readiness are not back-office tasks. They directly impact how fast and how confidently you can scale.',
        fullQuote: [
          'At Volopay, those stakes are even higher. As a regulated fintech backed by global investors, every decision around tax, structure, and financial diligence needs to stand up to scrutiny.',
          'Growwth Partners supported us across tax advisory, due diligence, and M&A transaction work. Their ability to navigate complex structures while keeping a commercial lens stood out immediately.',
          'For companies navigating capital raises, cross-border structures, or strategic transactions, Growwth Partners brings the technical depth and real deal experience you want in your corner.',
        ],
        metrics: [
          { icon: Globe2, label: 'Global Fintech', detail: 'Multi-jurisdiction ops' },
          { icon: Shield, label: 'M&A Ready', detail: 'Due diligence and tax' },
          { icon: TrendingUp, label: 'Investor-Backed', detail: 'Scaled with confidence' },
        ],
      },
      {
        image: suMaeChia,
        name: 'Su-Mae Chia',
        role: 'Founder',
        company: 'BSKIN',
        headline: 'Their insights gave us a clearer picture of profitability.',
        shortQuote:
          'When we brought on Growwth Partners as our Fractional CFO, our business needed more structure and clearer financial direction. They reviewed our financial and funding setup and helped streamline processes for better accountability.',
        fullQuote: [
          'They gave us practical help, advising on employee transfers, setting up new accounting systems, and creating cost allocation frameworks that clarified profitability across our businesses.',
          'They introduced consistent reporting, clarified our KPIs, and pinpointed both underperforming areas and key cost drivers.',
          'Above all, I appreciated Growwth Partners’ flexibility and willingness to tailor support to what we genuinely needed.',
        ],
        metrics: [
          { icon: TrendingUp, label: 'Profitability', detail: 'Clear cost allocation' },
          { icon: Clock, label: 'Fractional CFO', detail: 'Tailored support' },
          { icon: Shield, label: 'KPI Clarity', detail: 'Consistent reporting' },
        ],
      },
      {
        image: geleijnVerheijke,
        name: 'Geleijn Cornelis Verheijke',
        role: 'Founder and CEO',
        company: 'Oxstreet SPV Pte Ltd',
        headline: 'Proactive, low-friction, and they do not overcomplicate things.',
        shortQuote:
          'Growwth Partners has been handling the corporate compliance for my Singapore entity for the past few years, and I have been very happy with their service. What stands out is how proactive and low-friction they make everything.',
        fullQuote: [
          'They reach out well ahead of deadlines with clear instructions on what is needed, handle all the ACRA and IRAS filings, and are pragmatic about things like ECI waivers when the company qualifies.',
          'Yogita and the team are responsive, professional, and clearly know the Singapore regulatory landscape well.',
          'If you are looking for a corporate secretary and tax compliance partner in Singapore, I would recommend them without hesitation.',
        ],
        metrics: [
          { icon: Shield, label: 'Compliance', detail: 'ACRA and IRAS filings' },
          { icon: Clock, label: 'Proactive', detail: 'Ahead of deadlines' },
          { icon: Globe2, label: 'Singapore', detail: 'Regulatory expertise' },
        ],
      },
      {
        image: maneeshMishra,
        name: 'Maneesh Mishra',
        role: 'Founder and Director',
        company: 'Dataleap Services Pte. Ltd.',
        headline:
          'Growwth Partners truly stands out among all the service providers we have worked with.',
        shortQuote:
          'We engaged Growwth Partners to support us with accounting, bookkeeping, preparation of ECI and tax returns. When we first started working with them, we needed help with bookkeeping and bringing better structure to our accounts.',
        fullQuote: [
          'Growwth Partners supported us across bookkeeping, financial due diligence, and filing tax returns with tax authorities. What truly stands out is their strong technical capability, attention to detail, and the consistent quality of their work.',
          'They also provided valuable support on tax matters, including helping us claim carried-back losses, set them off against prior year profits, and secure the resulting tax refund. Among all the service providers we have worked with, Growwth Partners truly stands out, and I would confidently recommend them.',
        ],
        metrics: [
          { icon: Shield, label: 'Tax Refund', detail: 'Carried-back losses' },
          { icon: TrendingUp, label: 'ECI & Tax', detail: 'Filing & compliance' },
          { icon: Clock, label: 'Bookkeeping', detail: 'Structured accounts' },
        ],
      },
    ],
    [],
  )

  const activeStory = featuredTestimonials[activeFeatured]

  const goToStory = useCallback(
    (nextIndex: number) => {
      const boundedIndex =
        (nextIndex + featuredTestimonials.length) % featuredTestimonials.length

      setActiveFeatured(boundedIndex)
      setExpandedStory(null)
    },
    [featuredTestimonials.length],
  )

  return (
    <section
      className="relative overflow-hidden bg-[var(--pcfo-bg)] px-4 py-16 text-[var(--pcfo-text)] sm:px-6 lg:px-8 lg:py-24"
      id="client-stories"
    >
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[var(--pcfo-accent)]/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[var(--pcfo-accent-700)]">
            Client Stories
          </p>
          <h2 className="mt-4 text-3xl font-black leading-tight tracking-normal text-[var(--pcfo-text)] sm:text-4xl lg:text-5xl">
            Trusted by Founders Scaling Across Borders
          </h2>
          <p className="mt-6 text-lg leading-8 text-[var(--pcfo-muted)]">
            Finance made simple with senior CFO guidance. Hear how founders use
            Growwth Partners to reduce finance friction, improve reporting, and scale
            with confidence.
          </p>
        </div>

        {showBanner && (
          <div className="relative mx-auto mt-10 hidden max-w-6xl md:block">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-[2.5rem] bg-[var(--pcfo-accent)] opacity-20 blur-xl"
            />
            <div className="relative overflow-hidden rounded-[2rem] border border-[var(--pcfo-divider)] bg-[var(--pcfo-bg)] shadow-[0_26px_90px_rgba(32,30,29,0.14)]">
              <img
                src={socialProofBanner}
                alt="Growwth Partners client presence and accreditations"
                className="aspect-[16/9] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        )}

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon

            return (
              <div
                key={stat.label}
                className="rounded-[1.75rem] border border-[var(--pcfo-divider)] bg-[var(--pcfo-bg)] p-5 text-center shadow-[0_16px_50px_rgba(32,30,29,0.07)]"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--pcfo-accent-100)] text-[var(--pcfo-accent-700)]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <p className="text-4xl font-black tracking-normal text-[var(--pcfo-accent-700)]">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-black text-[var(--pcfo-text)]">{stat.label}</p>
              </div>
            )
          })}
        </div>

        <div className="mx-auto mt-12 max-w-6xl">
          <div className="relative rounded-[2rem] border border-[var(--pcfo-divider)] bg-[var(--pcfo-bg)] p-5 shadow-[0_24px_80px_rgba(32,30,29,0.12)] sm:p-7 lg:p-9">
            <div className="grid gap-8 lg:grid-cols-[18rem_1fr] lg:gap-10">
              <aside className="flex flex-col items-center text-center">
                <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-[var(--pcfo-accent-100)] bg-[var(--pcfo-accent-100)] shadow-[0_18px_50px_rgba(32,30,29,0.16)] sm:h-36 sm:w-36">
                  <img
                    src={activeStory.image}
                    alt={`${activeStory.name}, ${activeStory.role} at ${activeStory.company}`}
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
                <p className="mt-5 text-lg font-black text-[var(--pcfo-text)]">
                  {activeStory.name}
                </p>
                <p className="mt-1 text-sm font-semibold text-[var(--pcfo-muted)]">
                  {activeStory.role}
                </p>
                <p className="text-sm font-black text-[var(--pcfo-accent-700)]">
                  {activeStory.company}
                </p>

                <div className="mt-6 w-full space-y-3 border-t border-[var(--pcfo-divider)] pt-5">
                  {activeStory.metrics.map((metric) => {
                    const Icon = metric.icon

                    return (
                      <div key={metric.label} className="flex items-center gap-3 text-left">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--pcfo-accent-100)] text-[var(--pcfo-accent-700)]">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span>
                          <span className="block text-sm font-black text-[var(--pcfo-text)]">
                            {metric.label}
                          </span>
                          <span className="block text-xs font-semibold text-[var(--pcfo-muted)]">
                            {metric.detail}
                          </span>
                        </span>
                      </div>
                    )
                  })}
                </div>
              </aside>

              <div className="min-w-0">
                <MessageSquareQuote
                  className="mb-4 h-8 w-8 text-[var(--pcfo-accent-700)]"
                  aria-hidden="true"
                />
                <div className="mb-4 flex gap-1 text-[var(--pcfo-accent)]" aria-label="5 star rating">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <h3 className="text-2xl font-black leading-tight tracking-normal text-[var(--pcfo-text)] sm:text-3xl">
                  "{activeStory.headline}"
                </h3>
                <p className="mt-5 text-base font-semibold leading-8 text-[var(--pcfo-muted)]">
                  {activeStory.shortQuote}
                </p>

                {expandedStory === activeFeatured && (
                  <div className="mt-5 space-y-4 text-base font-semibold leading-8 text-[var(--pcfo-muted)]">
                    {activeStory.fullQuote.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                )}

                <button
                  type="button"
                  onClick={() =>
                    setExpandedStory(
                      expandedStory === activeFeatured ? null : activeFeatured,
                    )
                  }
                  className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[var(--pcfo-accent-700)] transition hover:text-[var(--pcfo-accent-800)]"
                >
                  {expandedStory === activeFeatured ? 'Show less' : 'Read full story'}
                  {expandedStory === activeFeatured ? (
                    <ChevronUp className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <ChevronDown className="h-4 w-4" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 border-t border-[var(--pcfo-divider)] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex justify-center gap-2 sm:justify-start">
                {featuredTestimonials.map((story, index) => (
                  <button
                    key={story.name}
                    type="button"
                    onClick={() => goToStory(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      activeFeatured === index
                        ? 'w-8 bg-[var(--pcfo-accent-700)]'
                        : 'w-2.5 bg-[var(--pcfo-gray-300)] hover:bg-[var(--pcfo-accent)]'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex justify-center gap-3">
                <button
                  type="button"
                  onClick={() => goToStory(activeFeatured - 1)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--pcfo-divider)] bg-[var(--pcfo-bg)] text-[var(--pcfo-text)] shadow-sm transition hover:-translate-y-0.5 hover:bg-[var(--pcfo-accent-100)]"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => goToStory(activeFeatured + 1)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--pcfo-accent)] text-white shadow-[0_14px_36px_rgba(138,109,0,0.24)] transition hover:-translate-y-0.5 hover:bg-[#e6b800]"
                  aria-label="Next testimonial"
                >
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-6xl">
          <div className="rounded-[2rem] border border-[var(--pcfo-divider)] bg-[var(--pcfo-bg)] p-5 shadow-[0_24px_80px_rgba(32,30,29,0.1)] sm:p-7 lg:p-9">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-black uppercase tracking-[0.22em] text-[var(--pcfo-accent-700)]">
                  Video Testimonials
                </p>
                <h3 className="mt-3 text-2xl font-black leading-tight tracking-normal text-[var(--pcfo-text)] sm:text-3xl">
                  Hear directly from founders and finance leaders
                </h3>
                <p className="mt-3 text-base font-semibold leading-7 text-[var(--pcfo-muted)]">
                  A quick look at how clients describe working with Growwth Partners
                  across compliance, finance operations, and strategic CFO support.
                </p>
              </div>
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--pcfo-accent-100)] px-4 py-2 text-sm font-black text-[var(--pcfo-accent-700)]">
                <MessageSquareQuote className="h-4 w-4" aria-hidden="true" />
                {testimonialVideos.length} client videos
              </div>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {testimonialVideos.map((video, index) => (
                <article
                  key={video.id}
                  className={`overflow-hidden rounded-[1.75rem] border border-[var(--pcfo-divider)] bg-[var(--pcfo-surface)] shadow-[0_18px_50px_rgba(32,30,29,0.08)] ${
                    index === 0 ? 'md:col-span-2 xl:col-span-2' : ''
                  }`}
                >
                  <div className="aspect-video w-full overflow-hidden bg-[var(--pcfo-text)]">
                    <iframe
                      src={`https://fast.wistia.net/embed/iframe/${video.id}`}
                      title={video.title}
                      allow="autoplay; fullscreen; picture-in-picture"
                      loading="lazy"
                      className="h-full w-full border-0"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-lg font-black text-[var(--pcfo-text)]">{video.name}</p>
                    <p className="mt-1 text-sm font-semibold leading-6 text-[var(--pcfo-muted)]">
                      {video.role}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <Suspense
          fallback={
            <div
              aria-hidden="true"
              className="relative left-1/2 mt-12 min-h-64 w-screen -translate-x-1/2"
            />
          }
        >
          <TrustedLogosSection />
        </Suspense>
      </div>
    </section>
  )
}

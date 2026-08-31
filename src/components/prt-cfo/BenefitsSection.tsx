import Reveal from './Reveal'

const audiences = [
  {
    title: 'Startups',
    description:
      'Chart growth trajectories to attract investors and creditors with the help of our virtual CFOs.',
  },
  {
    title: 'Small Businesses',
    description:
      'Transition from a full-time CFO to more flexible Fractional CFO services for enhanced financial management.',
  },
  {
    title: 'Medium Businesses',
    description: 'Outsource additional tasks while benefiting from in-house CFO expertise.',
  },
  {
    title: 'Enterprise-Level Businesses',
    description:
      'Employ Fractional CFO expertise during significant transitions and critical decision-making processes.',
  },
]

function BenefitsSection() {
  return (
    <section className="pcfo-section" id="benefits">
      <Reveal>
        <p className="pcfo-kicker">Who it&apos;s for</p>
        <h2>Who benefits from Growwth&apos;s Fractional CFO services?</h2>
      </Reveal>
      <div className="pcfo-benefits-layout">
        <div className="pcfo-audience-list">
          {audiences.map((audience, index) => (
            <Reveal
              className="pcfo-audience-row"
              delay={index * 0.06}
              key={audience.title}
            >
              <h3>
                <span aria-hidden="true" />
                {audience.title}
              </h3>
              <p>{audience.description}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="pcfo-benefits-visual" delay={0.18}>
          <img src="/image/part-time-cfo1.webp" alt="CFO growth planning dashboard" />
          <div className="pcfo-benefits-visual-card">
            <span>Built for growth stages</span>
            <strong>Flexible CFO support as your finance needs evolve.</strong>
          </div>
        </Reveal>
      </div>
      <p className="pcfo-inline-cta">
        Not sure which fits you?{' '}
        <a
          href="https://calendly.com/jd-growwthpartners/demo"
          target="_blank"
          rel="noreferrer"
        >
          Talk to a CFO
        </a>
      </p>
    </section>
  )
}

export default BenefitsSection

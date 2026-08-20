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
      <p className="pcfo-kicker">Who it&apos;s for</p>
      <h2>Who benefits from Growwth&apos;s Fractional CFO services?</h2>
      <div className="pcfo-audience-list">
        {audiences.map((audience) => (
          <article className="pcfo-audience-row" key={audience.title}>
            <h3>
              <span aria-hidden="true" />
              {audience.title}
            </h3>
            <p>{audience.description}</p>
          </article>
        ))}
      </div>
      <p className="pcfo-inline-cta">
        Not sure which fits you? <a href="#cta">Talk to a CFO</a>
      </p>
    </section>
  )
}

export default BenefitsSection

import Reveal from './Reveal'

const reasons = [
  {
    title: '5-Star Rated Services',
    description: 'Experience working with 200+ high-growth companies.',
  },
  {
    title: 'All Round Growth',
    description: 'Worked with early-stage startups, SMEs and expanding companies.',
  },
  {
    title: 'Strong Leadership',
    description: 'Founded and led by an Ex-Rocket Internet APAC CFO.',
  },
]

function WhyUsSection() {
  return (
    <section className="pcfo-section" id="why">
      <Reveal>
        <h2>Business finances shouldn&apos;t be led by gut instinct. They should be led by experts.</h2>
        <p className="pcfo-kicker">Why choose us?</p>
      </Reveal>
      <div className="pcfo-reason-grid">
        {reasons.map((reason, index) => (
          <Reveal className="pcfo-card" delay={index * 0.07} key={reason.title}>
            <span className="pcfo-card-icon" aria-hidden="true" />
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default WhyUsSection

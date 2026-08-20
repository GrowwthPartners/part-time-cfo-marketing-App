const proofPoints = [
  '200+ businesses served',
  '5-star rated',
  'No lock-in contracts',
]

function HeroSection() {
  return (
    <section className="pcfo-hero" id="top">
      <div className="pcfo-hero-orb" aria-hidden="true" />
      <p className="pcfo-kicker">Part-Time CFO Services</p>
      <h1>CFO-level financial leadership, at a fraction of the cost.</h1>
      <p className="pcfo-hero-lead">We handle your finances, you grow your business!</p>
      <p>
        Growwth&apos;s Fractional CFOs are industry experts with decades of
        experience in managing business money.
      </p>
      <p>
        From financial analysis and strategic planning to budgeting, risk
        management, and a host of other vital CFO services, we handle the entire
        spectrum of your financial needs, allowing you to concentrate on growing
        your business.
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
      <div className="pcfo-proof-list" aria-label="Business proof points">
        {proofPoints.map((point) => (
          <span key={point}>
            <span className="pcfo-check" aria-hidden="true" />
            {point}
          </span>
        ))}
      </div>
    </section>
  )
}

export default HeroSection

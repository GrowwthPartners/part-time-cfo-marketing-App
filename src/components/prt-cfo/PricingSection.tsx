const inclusions = [
  'Dedicated fractional CFO',
  'No lock-in contracts',
  'SG & AU compliance included',
]

function PricingSection() {
  return (
    <section className="pcfo-section pcfo-pricing" id="pricing">
      <div className="pcfo-pricing-panel">
        <div>
          <h2>Fractional CFO packages</h2>
          <p>Flexible engagements built around your stage and needs.</p>
          <div className="pcfo-inclusions">
            {inclusions.map((inclusion) => (
              <span key={inclusion}>
                <span className="pcfo-check" aria-hidden="true" />
                {inclusion}
              </span>
            ))}
          </div>
        </div>
        <div className="pcfo-price">
          <p>Starting from SGD 600</p>
          <a className="pcfo-btn pcfo-btn-primary" href="#cta">
            Get Your Free Consultation
          </a>
        </div>
      </div>
    </section>
  )
}

export default PricingSection

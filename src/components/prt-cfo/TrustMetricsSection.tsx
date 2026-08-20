const metrics = [
  { label: 'Companies trusted us', value: '500+', tone: 'yellow', size: 'lg' },
  { label: '5-star rating', value: '*****', tone: 'gray', size: 'sm' },
  { label: 'Financial analysis', value: 'Chart', tone: 'deep', size: 'xl' },
  { label: 'Strategic planning', value: 'Goal', tone: 'yellow-strong', size: 'md' },
  { label: 'Budgeting', value: 'Plan', tone: 'yellow', size: 'lg' },
  { label: 'Risk management', value: 'Guard', tone: 'pale', size: 'md' },
]

function TrustMetricsSection() {
  return (
    <section className="pcfo-trust" aria-labelledby="trust-title">
      <h2 id="trust-title">
        200+ businesses have profited from Growwth Partners mentorship
      </h2>
      <div className="pcfo-bubbles">
        {metrics.map((metric) => (
          <div
            className={`pcfo-bubble pcfo-bubble-${metric.tone} pcfo-bubble-${metric.size}`}
            key={metric.label}
          >
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustMetricsSection

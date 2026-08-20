const regions = [
  {
    country: 'Singapore',
    points: [
      'IRAS-compliant tax and GST filing',
      'ACRA reporting and annual returns',
      '2026 e-invoicing mandate handled before the deadline',
      'ECI, XBRL, and statutory compliance built in',
    ],
  },
  {
    country: 'Australia',
    points: [
      'ATO-compliant BAS and GST lodgement',
      'ASIC reporting and obligations',
      'PAYG, Superannuation, and payroll compliance',
      'Single Touch Payroll (STP) and year-end handled',
    ],
  },
]

function ComplianceSection() {
  return (
    <section className="pcfo-section pcfo-region" id="region">
      <h2>We know your numbers and your regulators</h2>
      <p>
        Finance isn&apos;t one-size-fits-all across borders. Whether you&apos;re
        navigating IRAS in Singapore or the ATO in Australia, our CFOs know the
        local rules, deadlines, and reporting standards inside out; so
        you&apos;re always compliant, always investor-ready.
      </p>
      <div className="pcfo-region-grid">
        {regions.map((region) => (
          <article className="pcfo-card" key={region.country}>
            <h3>{region.country}</h3>
            {region.points.map((point) => (
              <p key={point}>{point}</p>
            ))}
          </article>
        ))}
      </div>
      <p className="pcfo-region-close">
        From Singapore to Sydney, your finances stay clean, compliant, and ready
        for whatever comes next.
      </p>
    </section>
  )
}

export default ComplianceSection

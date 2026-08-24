import { CheckCircle2, MapPinned, ShieldCheck } from 'lucide-react'

const regions = [
  {
    country: 'Singapore',
    agency: 'IRAS + ACRA',
    points: [
      'IRAS-compliant tax and GST filing',
      'ACRA reporting and annual returns',
      '2026 e-invoicing mandate handled before the deadline',
      'ECI, XBRL, and statutory compliance built in',
    ],
  },
  {
    country: 'Australia',
    agency: 'ATO + ASIC',
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
      <div className="pcfo-region-heading">
        <span className="pcfo-eyebrow">Regional compliance</span>
        <h2>We know your numbers and your regulators</h2>
        <p>
          Finance isn&apos;t one-size-fits-all across borders. Whether
          you&apos;re navigating IRAS in Singapore or the ATO in Australia, our
          CFOs know the local rules, deadlines, and reporting standards inside
          out; so you&apos;re always compliant, always investor-ready.
        </p>
      </div>
      <div className="pcfo-region-grid">
        {regions.map((region) => (
          <article className="pcfo-region-card" key={region.country}>
            <div className="pcfo-region-card-head">
              <span className="pcfo-region-icon">
                <MapPinned size={20} aria-hidden="true" />
              </span>
              <div>
                <p>{region.agency}</p>
                <h3>{region.country}</h3>
              </div>
            </div>
            <ul>
              {region.points.map((point) => (
                <li key={point}>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="pcfo-region-close-wrap">
        <p className="pcfo-region-close">
          <ShieldCheck size={20} aria-hidden="true" />
          From Singapore to Sydney, your finances stay clean, compliant, and
          ready for whatever comes next.
        </p>
      </div>
    </section>
  )
}

export default ComplianceSection

function ConsultationSection() {
  return (
    <section className="pcfo-section pcfo-consult" id="cta">
      <div className="pcfo-consult-panel">
        <h2>If that&apos;s a YES! We can help you increase your business efficiency by 80%</h2>
        <p>Let&apos;s get started!</p>
        <form className="pcfo-form" onSubmit={(event) => event.preventDefault()}>
          <input className="pcfo-input" placeholder="Name" aria-label="Name" />
          <input className="pcfo-input" placeholder="Company Name" aria-label="Company Name" />
          <input className="pcfo-input" placeholder="Email" type="email" aria-label="Email" />
          <input className="pcfo-input" placeholder="Phone Number" aria-label="Phone Number" />
          <textarea
            className="pcfo-input"
            placeholder="Additional comments"
            aria-label="Additional comments"
          />
          <button className="pcfo-btn pcfo-btn-primary" type="submit">
            Get Your Free Consultation
          </button>
        </form>
        <p className="pcfo-note">No obligation. We reply within 1 business day.</p>
      </div>
    </section>
  )
}

export default ConsultationSection

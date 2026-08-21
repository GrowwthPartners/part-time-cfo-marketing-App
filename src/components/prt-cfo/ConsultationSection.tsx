import { useState, type FormEvent } from 'react'
import { submitContactForm } from '../../api/contact'

function ConsultationSection() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>(
    'idle',
  )
  const [message, setMessage] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    setStatus('submitting')
    setMessage('')

    try {
      await submitContactForm({
        name: formData.get('name'),
        companyName: formData.get('companyName'),
        email: formData.get('email'),
        phoneNumber: formData.get('phoneNumber'),
        serviceLookingFor: 'new prtcfo page',
        message: formData.get('comments'),
      })

      form.reset()
      setStatus('success')
      setMessage('Thanks. We will get back to you within 1 business day.')
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please try again in a moment.')
    }
  }

  return (
    <section className="pcfo-section pcfo-consult" id="cta">
      <div className="pcfo-consult-panel">
        <h2>If that&apos;s a YES! We can help you increase your business efficiency by 80%</h2>
        <p>Let&apos;s get started!</p>
        <form className="pcfo-form" onSubmit={handleSubmit}>
          <input
            className="pcfo-input"
            name="name"
            placeholder="Name"
            aria-label="Name"
            required
          />
          <input
            className="pcfo-input"
            name="companyName"
            placeholder="Company Name"
            aria-label="Company Name"
            required
          />
          <input
            className="pcfo-input"
            name="email"
            placeholder="Email"
            type="email"
            aria-label="Email"
            required
          />
          <input
            className="pcfo-input"
            name="phoneNumber"
            placeholder="Phone Number"
            aria-label="Phone Number"
            required
          />
          <textarea
            className="pcfo-input"
            name="comments"
            placeholder="Additional comments"
            aria-label="Additional comments"
          />
          <button
            className="pcfo-btn pcfo-btn-primary"
            type="submit"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Submitting...' : 'Get Your Free Consultation'}
          </button>
        </form>
        {message && (
          <p className={`pcfo-form-status pcfo-form-status-${status}`} role="status">
            {message}
          </p>
        )}
        <p className="pcfo-note">No obligation. We reply within 1 business day.</p>
      </div>
    </section>
  )
}

export default ConsultationSection

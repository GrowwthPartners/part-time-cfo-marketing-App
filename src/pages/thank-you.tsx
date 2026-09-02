import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock,
  Mail,
  Users,
} from 'lucide-react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Head } from 'vite-react-ssg'
import { Footer, Header } from '../components/prt-cfo'
import './prt-cfo/part-time-cfo.css'

function ThankYou() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  return (
    <>
      <Head>
        <title>Thank You | Growwth Partners</title>
        <meta
          name="description"
          content="Thank you for contacting Growwth Partners. Our expert will reach out to you shortly."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="pcfo-page">
        <Header />
        <main className="pcfo-thank-you">
          <section className="pcfo-thank-you-panel" aria-labelledby="thank-you-title">
            <div className="pcfo-thank-you-copy">
              <div className="pcfo-thank-you-icon">
                <CheckCircle2 size={48} aria-hidden="true" />
              </div>
              <p className="pcfo-kicker">Request received</p>
              <h1 id="thank-you-title">Thank You!</h1>
              <p className="pcfo-thank-you-lead">
                We&apos;ve received your request. A Growwth Partners finance
                expert will review your requirements and get in touch with you
                shortly.
              </p>

              <div className="pcfo-thank-you-actions">
                <button
                  className="pcfo-btn pcfo-btn-primary pcfo-btn-large"
                  type="button"
                  onClick={() => navigate('/')}
                >
                  <ArrowLeft size={18} aria-hidden="true" />
                  Back to Home
                </button>
                <a
                  className="pcfo-btn pcfo-btn-secondary pcfo-btn-large"
                  href="https://calendly.com/jd-growwthpartners/demo"
                  target="_blank"
                  rel="noreferrer"
                >
                  Book Calendar Slot
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="pcfo-thank-you-next">
              <p className="pcfo-thank-you-next-label">What happens next</p>
              <div className="pcfo-thank-you-grid">
                <article>
                  <Mail size={22} aria-hidden="true" />
                  <strong>Confirmation</strong>
                  <span>Your details are safely submitted.</span>
                </article>
                <article>
                  <Clock size={22} aria-hidden="true" />
                  <strong>Quick Review</strong>
                  <span>We review your finance needs within 24 hours.</span>
                </article>
                <article>
                  <Users size={22} aria-hidden="true" />
                  <strong>CFO Match</strong>
                  <span>You get guidance from the right finance expert.</span>
                </article>
              </div>
              <div className="pcfo-thank-you-note">
                <CalendarDays size={20} aria-hidden="true" />
                <span>
                  Prefer not to wait? You can pick a time directly on Jatin&apos;s
                  calendar.
                </span>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default ThankYou

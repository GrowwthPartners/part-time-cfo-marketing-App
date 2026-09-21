import Reveal from './Reveal'
import type { MouseEvent } from 'react'

const questions = [
  'Do you struggle to make sense of your financial reports?',
  'Are you finding it challenging to plan for future growth?',
  'Is cash flow management a constant concern for your business?',
  'Do you wish to optimise your financial strategies for maximum profitability?',
]

function QuestionsSection() {
  function handleQuestionClick(event: MouseEvent<HTMLAnchorElement>) {
    const consultationSection = document.querySelector('#cta')

    if (!consultationSection) {
      return
    }

    event.preventDefault()
    consultationSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="pcfo-questions" aria-labelledby="questions-title">
      <Reveal>
        <h2 id="questions-title">Answer a few questions for us</h2>
      </Reveal>
      <div>
        {questions.map((question, index) => (
          <Reveal className="pcfo-question-shell" delay={index * 0.06} key={question}>
            <a className="pcfo-question" href="#cta" onClick={handleQuestionClick}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{question}</p>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default QuestionsSection

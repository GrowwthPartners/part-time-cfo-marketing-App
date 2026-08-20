const questions = [
  'Do you struggle to make sense of your financial reports?',
  'Are you finding it challenging to plan for future growth?',
  'Is cash flow management a constant concern for your business?',
  'Do you wish to optimise your financial strategies for maximum profitability?',
]

function QuestionsSection() {
  return (
    <section className="pcfo-questions" aria-labelledby="questions-title">
      <h2 id="questions-title">Answer a few questions for us</h2>
      <div>
        {questions.map((question, index) => (
          <article className="pcfo-question" key={question}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p>{question}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default QuestionsSection

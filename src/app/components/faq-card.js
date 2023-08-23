export default function FAQCard({question, answer, className}) {
  return(
    <div className={className}>
        <h3>{question}</h3>
        <p>{answer}</p>
    </div>
  )
}
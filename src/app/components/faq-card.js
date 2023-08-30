export default function FAQCard({question, answer, className}) {
  return(
    <div className={`relative h-52 w-72 rounded-lg text-primary flex flex-col bg-background justify center px-3 overflow-auto ` + className} >
      <h3 className="text-lg font-semibold text-secondary pt-2  mb-2">{question}</h3>
      <p>{answer}</p>
    </div>
  )
}
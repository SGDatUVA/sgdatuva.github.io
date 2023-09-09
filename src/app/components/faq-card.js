export default function FAQCard({question, answer, className}) {
  return(
    <div className={`h-60 w-60 rounded-lg text-primary flex flex-col bg-background justify center px-3 overflow-auto 
    sm:h-56 sm:w-72 lg:h-44 lg:w-96 xl:h-52 xl:w-72 ` + className} >
      <h3 className="text-lg font-semibold text-secondary pt-2  mb-2">{question}</h3>
      <p>{answer}</p>
    </div>
  )
}
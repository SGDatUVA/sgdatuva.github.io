const FAQ = ({ question, answer}) => {
  return (
    <div className="w-5/6">
      <p>{question}</p>
      <p className="font-bold">{answer}</p>
    </div>
  );
};

export default FAQ;
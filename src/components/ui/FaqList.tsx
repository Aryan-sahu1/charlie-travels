type Faq = { question: string; answer: string };

export default function FaqList({
  items,
  name = "questions",
}: {
  items: readonly Faq[];
  name?: string;
}) {
  return (
    <div className="faq-list">
      {items.map((faq, index) => (
        <details key={faq.question} name={name} open={index === 0}>
          <summary>
            {faq.question}
            <span className="faq-toggle" aria-hidden="true" />
          </summary>
          <p>{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}

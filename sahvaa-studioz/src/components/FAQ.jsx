const faqs = [
  {
    q: "Do you cover destination weddings?",
    a: "Yes, we cover destination weddings across India.",
  },
  {
    q: "Do you provide cinematic videography?",
    a: "Yes, we provide premium cinematic wedding films.",
  },
  {
    q: "How can we book Sahvaa Studioz?",
    a: "You can contact us directly through WhatsApp.",
  },
]

export default function FAQ() {
  return (
    <section
      style={{
        padding: "100px 20px",
        background: "black",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "1000px",
          margin: "auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#d4af37",
            fontSize: "50px",
            marginBottom: "50px",
          }}
        >
          Frequently Asked Questions
        </h2>

        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              marginBottom: "20px",
              background: "rgba(255,255,255,0.05)",
              padding: "30px",
              borderRadius: "20px",
            }}
          >
            <h3 style={{ color: "#d4af37" }}>
              {faq.q}
            </h3>

            <p style={{ color: "#ccc" }}>
              {faq.a}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
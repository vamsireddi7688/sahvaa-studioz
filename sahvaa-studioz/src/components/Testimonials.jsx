const reviews = [
  {
    name: "Rahul & Sneha",
    text: "Absolutely stunning wedding photography. Every moment was captured beautifully.",
  },
  {
    name: "Karthik",
    text: "Professional team and cinematic quality output. Highly recommended.",
  },
  {
    name: "Priya",
    text: "Best photography experience in Hyderabad. Loved the reels and album design.",
  },
]

export default function Testimonials() {
  return (
    <section
      style={{
        padding: "100px 20px",
        background: "#0a0a0a",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#d4af37",
            fontSize: "50px",
            marginBottom: "60px",
          }}
        >
          Testimonials
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(300px,1fr))",
            gap: "30px",
          }}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              style={{
                background: "rgba(255,255,255,0.05)",
                padding: "40px",
                borderRadius: "20px",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <h3
                style={{
                  color: "#d4af37",
                  marginBottom: "20px",
                }}
              >
                {review.name}
              </h3>

              <p
                style={{
                  color: "#ccc",
                  lineHeight: "1.8",
                }}
              >
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
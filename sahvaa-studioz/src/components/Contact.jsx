export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "100px 20px",
        background: "black",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "800px",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#d4af37",
            fontSize: "50px",
            marginBottom: "30px",
          }}
        >
          Contact Us
        </h2>

        <p style={{ color: "#ccc", marginBottom: "40px" }}>
          Book your wedding, birthday,
          traditional events & cinematic shoots.
        </p>

        <a
          href="https://wa.me/918985105028"
          target="_blank"
          className="btn"
        >
          WhatsApp Now
        </a>
      </div>
    </section>
  )
}
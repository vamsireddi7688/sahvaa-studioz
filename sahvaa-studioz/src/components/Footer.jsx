export default function Footer() {
  return (
    <footer
      style={{
        background: "black",
        padding: "50px 20px",
        textAlign: "center",
        borderTop: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <h2
        style={{
          color: "#d4af37",
          marginBottom: "20px",
        }}
      >
        Sahvaa Studioz
      </h2>

      <p style={{ color: "#ccc" }}>
        Luxury Wedding Photography & Cinematic Films
      </p>

      <p style={{ color: "#888", marginTop: "20px" }}>
        Hyderabad | +91 8985105028
      </p>

      <a
        href="mailto:sahvaastudioz@gmail.com"
        style={{
          color: "#d4af37",
          textDecoration: "none",
        }}
      >
        sahvaastudioz@gmail.com
      </a>

      <p
        style={{
          marginTop: "30px",
          color: "#666",
        }}
      >
        © 2026 Sahvaa Studioz. All rights reserved.
      </p>
    </footer>
  )
}
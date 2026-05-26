export default function About() {
  return (
    <section
      id="about"
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
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "50px",
          alignItems: "center",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552"
          alt=""
          style={{
            width: "100%",
            borderRadius: "20px",
            height: "500px",
            objectFit: "cover",
          }}
        />

        <div>
          <h2
            style={{
              fontSize: "50px",
              color: "#d4af37",
              marginBottom: "20px",
            }}
          >
            About Sahvaa Studioz
          </h2>

          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.8",
              color: "#ccc",
            }}
          >
            We capture timeless emotions, traditions,
            and unforgettable celebrations through
            cinematic photography and storytelling.

            Sahvaa Studioz specializes in weddings,
            traditional events, birthday celebrations,
            engagement shoots, and luxury cinematic films.

            Every frame is crafted with emotion,
            elegance, and artistic excellence.
          </p>
        </div>
      </div>
    </section>
  )
}
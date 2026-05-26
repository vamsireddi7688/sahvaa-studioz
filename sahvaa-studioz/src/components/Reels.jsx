export default function Reels() {
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
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#d4af37",
            fontSize: "50px",
            marginBottom: "20px",
          }}
        >
          Instagram Reels
        </h2>

        <p
          style={{
            color: "#ccc",
            marginBottom: "50px",
          }}
        >
          Watch our cinematic wedding reels & event highlights.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
          }}
        >
          <iframe
            src="https://www.instagram.com/reel/DUMMY/embed"
            height="500"
            frameBorder="0"
          ></iframe>

          <iframe
            src="https://www.instagram.com/reel/DUMMY/embed"
            height="500"
            frameBorder="0"
          ></iframe>

          <iframe
            src="https://www.instagram.com/reel/DUMMY/embed"
            height="500"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
import heroVideo from "../assets/videos/hero.mp4"

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.6)",
        }}
      ></div>

      {/* CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          color: "white",
          padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "70px",
            lineHeight: "1.2",
            maxWidth: "1000px",
          }}
        >
          Capturing
          <span style={{ color: "#d4af37" }}>
            {" "}Emotions{" "}
          </span>
          &
          <span style={{ color: "#d4af37" }}>
            {" "}Timeless{" "}
          </span>
          Memories
        </h1>

        <p
          style={{
            marginTop: "20px",
            fontSize: "24px",
          }}
        >
          Luxury Wedding Photography in Hyderabad
        </p>

        <a
          href="https://wa.me/918985105028"
          target="_blank"
          style={{
            marginTop: "30px",
            background: "#d4af37",
            color: "black",
            padding: "15px 35px",
            borderRadius: "50px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Book Now
        </a>
      </div>
    </section>
  )
}
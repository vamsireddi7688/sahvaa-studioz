const services = [
  "Wedding Photography",
  "Cinematic Videography",
  "Birthday Events",
  "Pre Wedding Shoots",
  "Drone Coverage",
  "Albums & Reels Editing",
]

export default function Services() {
  return (
    <section
      id="services"
      style={{
        padding: "100px 20px",
        background: "black",
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
          Our Services
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "30px",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                background: "rgba(255,255,255,0.05)",
                padding: "40px",
                borderRadius: "20px",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
              }}
            >
              <h3
                style={{
                  fontSize: "28px",
                  color: "#d4af37",
                  marginBottom: "20px",
                }}
              >
                {service}
              </h3>

              <p
                style={{
                  color: "#ccc",
                  lineHeight: "1.7",
                }}
              >
                Premium luxury photography service
                crafted for unforgettable moments
                and cinematic storytelling.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
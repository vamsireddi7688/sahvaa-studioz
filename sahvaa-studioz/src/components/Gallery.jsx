import wedding1 from "../assets/images/wedding1.jpg"
import wedding2 from "../assets/images/wedding2.jpg"
import birthday1 from "../assets/images/birthday1.jpg"
import traditional1 from "../assets/images/traditional1.jpg"

const images = [
  wedding1,
  wedding2,
  birthday1,
  traditional1,
]

export default function Gallery() {
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
            marginBottom: "50px",
          }}
        >
          Our Gallery
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
          }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              style={{
                width: "100%",
                height: "350px",
                objectFit: "cover",
                borderRadius: "20px",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
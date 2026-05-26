export default function Map() {
  return (
    <section
      style={{
        padding: "50px 20px",
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
        <iframe
          src="https://maps.google.com/maps?q=hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="400"
          style={{
            border: 0,
            borderRadius: "20px",
          }}
          loading="lazy"
        ></iframe>
      </div>
    </section>
  )
}
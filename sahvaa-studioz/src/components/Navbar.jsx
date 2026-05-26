export default function Navbar() {
  return (
    <nav
      style={{
        position:"fixed",
        top:0,
        width:"100%",
        background:"rgba(0,0,0,0.7)",
        padding:"20px",
        zIndex:1000,
        backdropFilter:"blur(10px)"
      }}
    >
      <div
        style={{
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center",
          width:"90%",
          margin:"auto"
        }}
      >
        <h2 className="gold">
          Sahvaa Studioz
        </h2>

        <div style={{display:"flex",gap:"20px"}}>
          <a href="#home" style={{color:"white"}}>Home</a>
          <a href="#about" style={{color:"white"}}>About</a>
          <a href="#services" style={{color:"white"}}>Services</a>
          <a href="#gallery" style={{color:"white"}}>Gallery</a>
          <a href="#contact" style={{color:"white"}}>Contact</a>
        </div>
      </div>
    </nav>
  )
}
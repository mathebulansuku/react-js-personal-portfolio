export default function HeroSection() {
  return (
    <section id="heroSection" className="hero-section">
      <div className="hero-section-content-box">
        <div className="hero-section-content">
          <p className="section-title">Hey, I'm Manny </p>
          <h1 className="hero-section-title">
            <span className="hero-section-title-color">
              Front-End Developer
            </span>
            {""}
            <br />
            AWS Cloud Architect
          </h1>
          <p className="hero-section-description">
            Proficient in crafting intuitive user interface and seamless user
            experience.
            <br />
            Skilled in designing and implementing scalable, cost-effective, and
            secure cloud solutions.
          </p>
        </div>
        <button className="btn btn-primary" to="footer">
          Get In Touch
        </button>
      </div>
      {/* <div className="hero-section-img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div> */}
    </section>
  );
}

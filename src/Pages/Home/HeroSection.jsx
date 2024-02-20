export default function HeroSection() {
  return (
    <section id="heroSection" className="hero-section">
      <div className="hero-section-content-box">
        <div className="hero-section-content">
          <p className="section-title">Hey, I'm Manny </p>
          <h1 className="hero-section-title">
            <span className="hero-section-title-color">Front-End</span>
            {""}
            <br />
            Developer
          </h1>
          <p className="hero-section-description">
            Nsuku Mathebula, a tenacious computer science student from the
            University of South Africa, is poised to graduate in 2025.
            <br />
            As a skilled front-end web developer, Nsuku's proficiency spans the
            entire spectrum of web application creation, where his fusion of
            technical aptitude and artistic finesse crafts digital experiences
            that captivate.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero-section-img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}

import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero-section">
      <div className="hero-section-content-box">
        <div className="hero-section-content">
          <p className="section-title">Hey, I'm Manny </p>
          <h1 className="hero-section-title">
            <span className="hero-section-title-color">DevOps Engineer</span>
            {""}
            <br />
            Cloud Engineer
          </h1>
          <p className="hero-section-description">
            I automate processes so teams can innovate without any friction.
            <br />
            Skilled in designing and implementing scalable, cost-effective, and
            secure cloud solutions.
          </p>
        </div>
        <Link to="Contact" smooth duration={500}>
          <button className="btn btn-primary" to="footer">
            Get In Touch
          </button>
        </Link>
      </div>
      <div className="hero-section-img">
        <img src="./img/me-nobg.png" alt="Hero Section" />
      </div>
    </section>
  );
}

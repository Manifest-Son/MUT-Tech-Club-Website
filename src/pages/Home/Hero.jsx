import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-header">
        <h2>Welcome to Murang&#x27;a University Tech Club</h2>
        <p className="hero-subtitle">
          Murang&#x27;a University Tech Club is a club recognised by the
          institution and students across the campus.
        </p>
      </div>
      <div className="hero-cta-section">
        <Link to="/events" className="hero-cta">
          Join Us
        </Link>
      </div>
    </section>
  );
};

export default Hero;

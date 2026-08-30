import "./hero.css"
import heroImage from "../images/hero.png";

export function Hero() {
  return (
    <section className="hero">
      <img
        src={heroImage}
        alt="Gaming Event"
        className="hero-image"
      />
    </section>
  );
}
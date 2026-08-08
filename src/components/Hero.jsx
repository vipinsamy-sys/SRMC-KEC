import "../styles/Hero.css";

export default function Hero() {
  return (

    <section className="hero" id="hero">

      {/* Floating Mathematics Symbols */}
      <div className="math-symbol symbol-one">π</div>
      <div className="math-symbol symbol-two">Σ</div>
      <div className="math-symbol symbol-three">∫</div>
      <div className="math-symbol symbol-four">∞</div>


      <div className="hero-content">


        <div className="hero-badge">
          EST. 2014 • DEPARTMENT OF MATHEMATICS • KEC
        </div>


        <h1>
          Srinivasa Ramanujan
          <br />
          <span>Mathematics Club</span>
        </h1>


        <p className="hero-college">
          Kongu Engineering College
        </p>


        <p className="hero-description">

          Exploring mathematics beyond classrooms through
          innovation, creativity and curiosity.

        </p>


        <div className="hero-buttons">

          <button className="primary-btn">
            Explore Events
          </button>


          <button className="secondary-btn">
            About Club
          </button>

        </div>


      </div>

    </section>

  );
}
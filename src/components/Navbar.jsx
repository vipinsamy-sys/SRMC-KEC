import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">
        <img src="/images/MATHSLOGO.jpg" alt="SRMC Logo" />
        <div>
          <h2>SRMC</h2>
          <span>KEC Mathematics Club</span>
        </div>
      </div>


      <nav>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/crew">Crew</a></li>
          <li><a href="/events">Events</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/achievements">Achievements</a></li>
          <li><a href="/quiz">Quiz</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>


      <div className="auth-buttons">

    <button className="login-btn">
        Log In
    </button>


    <button className="signup-btn">
        Sign Up
    </button>

</div>

    </header>
  );
}
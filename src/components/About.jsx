import "../styles/About.css";

export default function About() {

  return (

    <section className="about" id="about">


      <div className="about-container">


        <div className="about-text">


          <p className="section-tag">
            ABOUT SRMC
          </p>


          <h2>
            Where Mathematics
            <br />
            Meets Innovation
          </h2>


          <p>

            Srinivasa Ramanujan Mathematics Club of Kongu Engineering
            College provides a platform for students to explore the
            beauty of mathematics beyond academics.

          </p>


          <p>

            Through workshops, competitions, mathematical puzzles and
            collaborative activities, SRMC encourages logical thinking,
            creativity and problem solving.

          </p>


          <button className="learn-btn">
            Learn More
          </button>


        </div>



        <div className="about-card">


          <div className="card-item">

            <h3>
              500+
            </h3>

            <span>
              Members
            </span>

          </div>



          <div className="card-item">

            <h3>
              50+
            </h3>

            <span>
              Events
            </span>

          </div>




          <div className="card-item">

            <h3>
              2014
            </h3>

            <span>
              Established
            </span>

          </div>


        </div>



      </div>


    </section>

  );

}
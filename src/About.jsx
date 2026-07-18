import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const infoGridRef = useRef(null)
  const grid3Ref = useRef(null)
  const objectivesRef = useRef(null)
  const activityGridRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      function animateCount(el, target) {
        const obj = { val: 0 }
        gsap.to(obj, {
          val: target, duration: 1.5, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
          onUpdate: function () { el.textContent = Math.floor(obj.val) + '+' }
        })
      }
      animateCount(document.getElementById('statYears'), 11)
      animateCount(document.getElementById('statEvents'), 30)
      animateCount(document.getElementById('statMembers'), 50)

      const infoItems = infoGridRef.current?.querySelectorAll('.about-info-item')
      if (infoItems?.length) {
        gsap.fromTo(infoItems, { opacity: 0, y: 20 }, {
          opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: infoGridRef.current, start: 'top 85%', toggleActions: 'play none none none' }
        })
      }

      const cards = grid3Ref.current?.querySelectorAll('.about-card-sm')
      if (cards?.length) {
        gsap.fromTo(cards, { opacity: 0, y: 20 }, {
          opacity: 1, y: 0, duration: 0.5, stagger: 0.12, ease: 'power2.out',
          scrollTrigger: { trigger: grid3Ref.current, start: 'top 85%', toggleActions: 'play none none none' }
        })
      }

      const objEl = objectivesRef.current
      if (objEl) {
        gsap.fromTo(objEl, { opacity: 0, y: 20 }, {
          opacity: 1, y: 0, duration: 0.5, ease: 'power2.out',
          scrollTrigger: { trigger: objEl, start: 'top 85%', toggleActions: 'play none none none' }
        })
        gsap.fromTo(objEl.querySelectorAll('li'), { opacity: 0, x: -10 }, {
          opacity: 1, x: 0, duration: 0.35, stagger: 0.06, ease: 'power1.out',
          scrollTrigger: { trigger: objEl, start: 'top 80%', toggleActions: 'play none none none' }
        })
      }

      const actCards = activityGridRef.current?.querySelectorAll('.about-activity-card')
      if (actCards?.length) {
        gsap.fromTo(actCards, { opacity: 0, y: 20 }, {
          opacity: 1, y: 0, duration: 0.5, stagger: 0.12, ease: 'power2.out',
          scrollTrigger: { trigger: activityGridRef.current, start: 'top 85%', toggleActions: 'play none none none' }
        })
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" className="py-20 px-4">
      <div className="section-container">
        <h2 className="section-title">
          <span className="sym">∫</span> About <span className="sym">∑</span>
        </h2>

        <div className="about-card">
          <img src="/images/MATHSLOGO.jpg" alt="SRMC Logo" />
          <h3>About the Club <span className="sym">√</span></h3>
          <p>
            The <strong style={{ color: '#b8912f' }}>Srinivasa Ramanujan Mathematics Club (SRMC)</strong> was established in the academic year
            <strong style={{ color: '#b8912f' }}> 2014–15</strong> under the Department of Mathematics at Kongu Engineering College. Named after the legendary
            mathematician <strong style={{ color: '#b8912f' }}>Srinivasa Ramanujan</strong>, the club serves as a platform to inspire students
            through logical thinking, analytical reasoning, creativity, and the practical applications of mathematics.
          </p>
          <p>
            The club organizes a wide range of academic, technical, and non-technical activities throughout the year,
            encouraging students to explore mathematics beyond the classroom. Through competitions, workshops, guest
            lectures, and collaborative events, SRMC aims to develop problem-solving abilities, innovation, leadership,
            and teamwork among students.
          </p>
          <p className="about-tagline">
            "Where numbers find meaning,<br />and minds find their edge."
          </p>
        </div>

        <div className="math-quote">
          <blockquote>
            &ldquo;An equation means nothing to me unless it expresses a thought of God.&rdquo;
          </blockquote>
          <cite>— Srinivasa Ramanujan</cite>
        </div>

        <div className="about-info-grid" ref={infoGridRef}>
          <div className="about-info-item">
            <span className="about-info-sym">Δ</span>
            <h4>Founded</h4>
            <p>2014–15</p>
          </div>
          <div className="about-info-item">
            <span className="about-info-sym">∑</span>
            <h4>Student Reach</h4>
            <p>Students from all B.E./B.Tech programmes across Kongu Engineering College</p>
          </div>
          <div className="about-info-item">
            <span className="about-info-sym">∂</span>
            <h4>Department</h4>
            <p>Department of Mathematics</p>
          </div>
          <div className="about-info-item">
            <span className="about-info-sym">∞</span>
            <h4>Events Conducted</h4>
            <p>30+ Events</p>
          </div>
        </div>

        <div className="about-grid-3" ref={grid3Ref}>
          <div className="about-card-sm">
            <h4><span className="sym">✦</span> Our Vision</h4>
            <ul>
              <li>Inspire students to appreciate the beauty and power of mathematics.</li>
              <li>Build a community that promotes logical thinking, innovation, and lifelong learning.</li>
              <li>Encourage mathematical excellence beyond the classroom.</li>
            </ul>
          </div>
          <div className="about-card-sm">
            <h4><span className="sym">✦</span> Our Mission</h4>
            <ul>
              <li>Organize engaging workshops, competitions, and guest lectures.</li>
              <li>Develop analytical thinking, problem-solving, and leadership skills.</li>
              <li>Promote interdisciplinary applications of mathematics in engineering and technology.</li>
            </ul>
          </div>
          <div className="about-card-sm">
            <h4><span className="sym">✦</span> What We Do</h4>
            <ul>
              <li>Conduct technical, non-technical, and mathematical events throughout the academic year.</li>
              <li>Organize symposiums, quizzes, workshops, and expert talks.</li>
              <li>Provide opportunities for students to collaborate, compete, and enhance their practical knowledge.</li>
            </ul>
          </div>
        </div>

        <div className="about-objectives" ref={objectivesRef}>
          <h3><span className="sym">✦</span> Objectives</h3>
          <ul>
            <li>Foster analytical thinking and logical reasoning among students.</li>
            <li>Encourage interest in mathematics beyond the academic curriculum.</li>
            <li>Provide opportunities to apply mathematical concepts in engineering and technology.</li>
            <li>Promote teamwork, leadership, and communication through club activities.</li>
            <li>Create a platform for students to showcase creativity, innovation, and problem-solving abilities.</li>
            <li>Connect students with academicians, researchers, and industry professionals through expert sessions.</li>
          </ul>
        </div>

        <div className="about-activity">
          <h3><span className="sym">✦</span> Annual Activity Plan</h3>
          <div className="about-activity-grid" ref={activityGridRef}>
            <div className="about-activity-card">
              <div className="about-activity-header">
                <span className="about-activity-q">Q1</span>
                <h4>September – October</h4>
              </div>
              <ul>
                <li><strong>Inaugural Function</strong></li>
                <li><strong>INFINYX</strong> – Mathematical Aptitude Challenge</li>
                <li><strong>EQUATRIX</strong> – Logic, Creativity & Innovation Competition</li>
                <li><strong>MATHVERSE LIVE</strong> – Online Quiz & Poster Making Competition</li>
              </ul>
            </div>
            <div className="about-activity-card">
              <div className="about-activity-header">
                <span className="about-activity-q">Q2</span>
                <h4>February – April</h4>
              </div>
              <ul>
                <li><strong>Brain Booster: Vedic Maths</strong> Workshop</li>
                <li><strong>MATH FIESTA 2K26</strong> – National Level Technical Symposium</li>
                <li><strong>Valedictory Function & Special Guest Lecture</strong></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="stat-strip">
          <div className="stat-item" data-symbol="Δ">
            <div className="stat-number" id="statYears">0</div>
            <div className="stat-label">Years Active</div>
          </div>
          <div className="stat-item" data-symbol="∑">
            <div className="stat-number" id="statEvents">0</div>
            <div className="stat-label">Events Conducted</div>
          </div>
          <div className="stat-item" data-symbol="∞">
            <div className="stat-number" id="statMembers">0</div>
            <div className="stat-label">Student Members</div>
          </div>
        </div>
      </div>
    </section>
  )
}

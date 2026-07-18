import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const heroLogoRef = useRef(null)
  const heroEquationRef = useRef(null)
  const heroCtaRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroLogoRef.current, { opacity: 0, y: -20, duration: 0.8, ease: 'power2.out' })
      gsap.from('.hero-college', { opacity: 0, y: 15, duration: 0.6, delay: 0.15, ease: 'power2.out' })
      gsap.from('.hero-club-name', { opacity: 0, y: 20, duration: 0.7, delay: 0.3, ease: 'power2.out' })
      gsap.from(heroEquationRef.current, { opacity: 0, y: 15, duration: 0.6, delay: 0.5, ease: 'power2.out' })
      gsap.fromTo(heroCtaRef.current?.querySelectorAll('a'), { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.7, stagger: 0.15, ease: 'power2.out' })
      gsap.from('.ramanujan-badge', { opacity: 0, duration: 0.5, delay: 0.4, ease: 'power2.out' })
    })
    return () => ctx.revert()
  }, [])

  const handleSmoothScroll = (e) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute('href')
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="hero">
      <img src="/images/MATHSLOGO.jpg" alt="SRMC Logo" className="hero-logo" id="heroLogo" ref={heroLogoRef} />
      <p className="hero-college">Kongu Engineering College</p>
      <h1 className="hero-club-name">
        Srinivasa Ramanujan<br />Mathematics Club
      </h1>
      <div className="ramanujan-badge">
        Est. <span className="year">2014</span> &middot; Dept. of Mathematics &middot; KEC
      </div>
      <p className="hero-equation" id="heroEquation" ref={heroEquationRef}>
        e<sup>iπ</sup> + 1 = 0
      </p>
      <div className="hero-cta" id="heroCta" ref={heroCtaRef}>
        <a href="#events" className="btn-gold" onClick={handleSmoothScroll}>Explore Events</a>
        <a href="#about" className="btn-outline" onClick={handleSmoothScroll}>About the Club</a>
      </div>
      <div className="scroll-cue">
        <span>SCROLL</span>
        <div className="arrow"></div>
      </div>
    </section>
  )
}

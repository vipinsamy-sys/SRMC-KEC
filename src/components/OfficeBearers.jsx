import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { bearers } from '../data'

gsap.registerPlugin(ScrollTrigger)

function getBadgeClass(role) {
  const r = role.toLowerCase()
  if (r.indexOf('faculty') !== -1) return 'bearer-role-faculty'
  if (r.indexOf('president') !== -1 || r.indexOf('secretary') !== -1 || r.indexOf('treasurer') !== -1 || r.indexOf('joint') !== -1) return 'bearer-role-officer'
  if (r.indexOf('executive') !== -1) return 'bearer-role-executive'
  return 'bearer-role-member'
}

export default function OfficeBearers() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.bearer-card', { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.45, stagger: 0.03, ease: 'power2.out',
        scrollTrigger: { trigger: '#office-bearers', start: 'top 80%', toggleActions: 'play none none none' }
      })
    })
    return () => ctx.revert()
  }, [])

  const scrollLeft = () => {
    containerRef.current?.scrollBy({ left: -300, behavior: 'smooth' })
  }

  const scrollRight = () => {
    containerRef.current?.scrollBy({ left: 300, behavior: 'smooth' })
  }

  return (
    <section id="office-bearers" className="py-20 px-4">
      <div className="section-container">
        <h2 className="section-title">
          <span className="sym">θ</span> Office Bearers <span className="sym">φ</span>
        </h2>

        <p className="bearers-subtitle">Meet the team behind SRMC</p>

        <div className="bearers-wrapper">
          <button className="bearer-nav bearer-nav-left" aria-label="Scroll left" onClick={scrollLeft}>
            <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <div className="bearers-scroll" ref={containerRef}>
            {bearers.map((b, i) => (
              <div className="bearer-card" key={i}>
                <div className="bearer-img-wrap">
                  <img
                    src={b.image}
                    alt={b.name}
                    loading="lazy"
                    style={b.adjust ? { objectPosition: 'center 20%' } : undefined}
                  />
                </div>
                <div className="bearer-info">
                  <h3>{b.name}</h3>
                  <span className={`bearer-role-badge ${getBadgeClass(b.role)}`}>{b.role}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="bearer-nav bearer-nav-right" aria-label="Scroll right" onClick={scrollRight}>
            <svg viewBox="0 0 24 24"><polyline points="9 6 15 12 9 18" /></svg>
          </button>
        </div>
      </div>
    </section>
  )
}

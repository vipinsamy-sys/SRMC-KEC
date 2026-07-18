import { useState } from 'react'

export default function Footer() {
  const [instaStyle, setInstaStyle] = useState({})
  const [shimmerOpacity, setShimmerOpacity] = useState(0)

  const handleInstaEnter = () => {
    setInstaStyle({
      transform: 'scale(1.2) rotate(-10deg)',
      boxShadow: '0 8px 28px rgba(221,42,123,0.55),0 0 0 3px rgba(255,255,255,0.15),inset 0 1.5px 0 rgba(255,255,255,0.35)',
      backgroundPosition: '100% 100%'
    })
    setShimmerOpacity(1)
  }

  const handleInstaLeave = () => {
    setInstaStyle({
      transform: 'scale(1) rotate(0deg)',
      boxShadow: '0 4px 15px rgba(221,42,123,0.4),0 0 0 2px rgba(255,255,255,0.08),inset 0 1.5px 0 rgba(255,255,255,0.3)',
      backgroundPosition: '0% 0%'
    })
    setShimmerOpacity(0)
  }

  return (
    <footer id="contact">
      <div className="section-container">
        <h2 className="section-title" style={{ marginBottom: '2rem' }}>
          <span className="sym">φ</span> Contact <span className="sym">λ</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="text-center md:text-left md:pl-12">
            <h3 style={{ color: '#b8912f', fontSize: '1.1rem', marginBottom: '0.75rem' }}>Get in Touch</h3>
            <p><a href="mailto:srmc@kongu.edu">srmc@kongu.edu</a></p>
            <p style={{ marginTop: '0.5rem' }}>
              <a
                href="https://www.instagram.com/srmc_kec"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <span
                  style={{
                    position: 'relative',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '2.35rem',
                    height: '2.35rem',
                    borderRadius: '0.65rem',
                    background: 'linear-gradient(135deg,#feda77 0%,#f58529 25%,#dd2a7b 50%,#8134af 75%,#515bd4 100%)',
                    backgroundSize: '200% 200%',
                    boxShadow: '0 4px 15px rgba(221,42,123,0.4),0 0 0 2px rgba(255,255,255,0.08),inset 0 1.5px 0 rgba(255,255,255,0.3)',
                    fontSize: '1.2rem',
                    cursor: 'pointer',
                    transition: 'all 0.35s cubic-bezier(0.34,1.56,0.64,1)',
                    animation: 'pulseGlow 3s ease-in-out infinite',
                    overflow: 'hidden',
                    ...instaStyle
                  }}
                  onMouseEnter={handleInstaEnter}
                  onMouseLeave={handleInstaLeave}
                >
                  <span
                    className="shimmer"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: 'inherit',
                      background: 'linear-gradient(120deg,transparent 30%,rgba(255,255,255,0.35) 50%,transparent 70%)',
                      opacity: shimmerOpacity,
                      transition: 'opacity 0.4s',
                      pointerEvents: 'none'
                    }}
                  ></span>
                  📸
                </span>
                @srmc_kec
              </a>
            </p>
          </div>
          <div className="text-center md:text-right md:pr-12">
            <h3 style={{ color: '#b8912f', fontSize: '1.1rem', marginBottom: '0.75rem' }}>Address</h3>
            <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
              Kongu Engineering College<br />Perundurai, Erode District<br />Tamil Nadu — 638 060
            </p>
          </div>
        </div>

        <div className="text-center border-t pt-6 mt-6" style={{ borderColor: 'rgba(184,145,47,0.2)' }}>
          <div className="math-divider">
            <span className="line"></span>
            <span>∫</span>
            <span>π</span>
            <span>∑</span>
            <span>∞</span>
            <span className="line"></span>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
            &copy; 2026 Srinivasa Ramanujan Mathematics Club &middot; Kongu Engineering College
          </p>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', marginTop: '0.25rem' }}>
            Designed with care by the SRMC Web Development Team
          </p>
        </div>
      </div>
    </footer>
  )
}

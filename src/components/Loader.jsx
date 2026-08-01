import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Loader() {
  const loaderRef = useRef(null)
  const logoRef = useRef(null)
  const textRef = useRef(null)
  const orbitRingRef = useRef(null)
  const flashRef = useRef(null)

  useEffect(() => {
    const loader = loaderRef.current
    const logo = logoRef.current
    const text = textRef.current
    const orbitRing = orbitRingRef.current
    const flash = flashRef.current

    if (!loader) return

    if (sessionStorage.getItem('srmcLoaderShown')) {
      loader.style.display = 'none'
      return
    }

    const tl = gsap.timeline({
      onComplete: () => {
        loader.classList.add('hide')
        sessionStorage.setItem('srmcLoaderShown', '1')
        setTimeout(() => { loader.style.display = 'none' }, 700)
      }
    })

    tl.to(orbitRing, {
      rotation: 360, duration: 1.6, ease: 'power2.inOut', transformOrigin: '100 100'
    }, 0)

    tl.to('.ring-sym', {
      attr: { x: 100, y: 100 }, scale: 0, opacity: 0,
      duration: 0.5, stagger: 0.05, ease: 'power2.in'
    }, 1.6)

    tl.call(() => {
      gsap.fromTo(flash, { opacity: 0, scale: 0.5 }, {
        opacity: 0.7, scale: 2, duration: 0.4, ease: 'power2.out',
        onComplete: () => { flash.style.opacity = 0; flash.style.transform = '' }
      })
    }, null, 2.1)

    tl.to(logo, { filter: 'grayscale(0%)', duration: 0.6, ease: 'power2.inOut' }, 2.1)
    tl.to(text, { opacity: 1, duration: 0.7, ease: 'power2.out' }, 2.7)
    tl.to({}, { duration: 2.0 })

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div id="loader" ref={loaderRef}>
      <div className="loader-content">
        <div className="loader-svg-wrap">
          <img src="/images/MATHSLOGO.jpg" alt="SRMC" className="loader-logo" id="loaderLogo" ref={logoRef} />
          <svg className="loader-svg" viewBox="0 0 200 200">
            <g id="orbitRing" ref={orbitRingRef}>
              <text className="ring-sym" x="100" y="12" textAnchor="middle" dominantBaseline="middle" fill="#c0392b" fontSize="15">π</text>
              <text className="ring-sym" x="162" y="38" textAnchor="middle" dominantBaseline="middle" fill="#2980b9" fontSize="15">∑</text>
              <text className="ring-sym" x="188" y="100" textAnchor="middle" dominantBaseline="middle" fill="#7f8c8d" fontSize="15">√</text>
              <text className="ring-sym" x="162" y="162" textAnchor="middle" dominantBaseline="middle" fill="#b8912f" fontSize="15">∞</text>
              <text className="ring-sym" x="100" y="188" textAnchor="middle" dominantBaseline="middle" fill="#7a1230" fontSize="15">∫</text>
              <text className="ring-sym" x="38" y="162" textAnchor="middle" dominantBaseline="middle" fill="#27ae60" fontSize="15">Δ</text>
              <text className="ring-sym" x="12" y="100" textAnchor="middle" dominantBaseline="middle" fill="#16a085" fontSize="15">θ</text>
              <text className="ring-sym" x="38" y="38" textAnchor="middle" dominantBaseline="middle" fill="#8e44ad" fontSize="15">φ</text>
            </g>
          </svg>
          <div className="loader-flash" id="loaderFlash" ref={flashRef}></div>
        </div>
        <p className="loader-text" id="loaderText" ref={textRef}>Srinivasa Ramanujan Mathematics Club</p>
      </div>
    </div>
  )
}

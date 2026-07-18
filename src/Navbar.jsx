import { useEffect, useRef, useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navbarRef = useRef(null)
  const stickyLogoRef = useRef(null)

  useEffect(() => {
    const navbar = navbarRef.current
    const stickyLogo = stickyLogoRef.current
    const handler = () => {
      const scrolled = window.scrollY > 100
      navbar.classList.toggle('scrolled', scrolled)
      if (stickyLogo) {
        stickyLogo.style.opacity = scrolled ? '1' : '0'
      }
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleNavClick = (e) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute('href')
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  return (
    <nav id="navbar" ref={navbarRef}>
      <div className="max-w-7xl mx-auto flex items-center justify-between nav-inner">
        <div className="flex items-center gap-2">
          <a href="#hero" className="flex items-center gap-2 no-underline" onClick={handleNavClick}>
            <img
              src="/images/MATHSLOGO.jpg"
              alt="SRMC"
              className="h-8 w-8 rounded-full object-cover opacity-0 transition-all duration-500"
              id="stickyLogoImg"
              ref={stickyLogoRef}
            />
            <span className="font-bold font-['Fraunces'] text-sm md:text-base tracking-wider" style={{ color: '#1a1f2e' }}>
              <span className="md:hidden">SRMC</span>
              <span className="hidden md:inline">SRMC</span><br className="hidden md:inline" />
              <span className="hidden md:inline text-xs md:text-sm" style={{ color: '#5b6b82' }}>KEC</span>
            </span>
          </a>
        </div>
        <div className="hidden md:flex items-center gap-5">
          <a href="#hero" className="nav-link" onClick={handleNavClick}>Home</a>
          <a href="#about" className="nav-link" onClick={handleNavClick}>About</a>
          <a href="#events" className="nav-link" onClick={handleNavClick}>Events</a>
          <a href="#office-bearers" className="nav-link" onClick={handleNavClick}>Office Bearers</a>
          <a href="#gallery" className="nav-link" onClick={handleNavClick}>Gallery</a>
          <a href="#contact" className="nav-link" onClick={handleNavClick}>Contact</a>
        </div>
        <button
          className="md:hidden text-2xl"
          style={{ color: '#1a1f2e' }}
          onClick={() => setMenuOpen((v) => !v)}
        >
          ☰
        </button>
      </div>
      {menuOpen && (
        <div id="mobileMenu" className="mobile-menu">
          <a href="#hero" className="nav-link text-center block" onClick={handleNavClick}>Home</a>
          <a href="#about" className="nav-link text-center block" onClick={handleNavClick}>About</a>
          <a href="#events" className="nav-link text-center block" onClick={handleNavClick}>Events</a>
          <a href="#office-bearers" className="nav-link text-center block" onClick={handleNavClick}>Office Bearers</a>
          <a href="#gallery" className="nav-link text-center block" onClick={handleNavClick}>Gallery</a>
          <a href="#contact" className="nav-link text-center block" onClick={handleNavClick}>Contact</a>
        </div>
      )}
    </nav>
  )
}

import { useEffect, useRef } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Loader from './Loader'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Events from './Events'
import OfficeBearers from './OfficeBearers'
import Gallery from './Gallery'
import Footer from './Footer'

export default function App() {
  const inited = useRef(false)

  useEffect(() => {
    if (inited.current) return
    inited.current = true

    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)

    AOS.init({
      duration: 600,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60
    })
  }, [])

  return (
    <>
      <Loader />
      <Navbar />
      <Hero />
      <About />
      <Events />
      <OfficeBearers />
      <Gallery />
      <Footer />
    </>
  )
}

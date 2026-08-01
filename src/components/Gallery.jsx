import { useEffect, useRef, useState, useCallback } from 'react'
import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const placeholders = [
  'https://placehold.co/600x400/faf8f4/b8912f?text=Math+Fiesta+2026',
  'https://placehold.co/600x400/faf8f4/b8912f?text=Workshop',
  'https://placehold.co/600x400/faf8f4/b8912f?text=Club+Meet',
  'https://placehold.co/600x400/faf8f4/b8912f?text=National+Math+Day',
  'https://placehold.co/600x400/faf8f4/b8912f?text=Quiz+Competition',
  'https://placehold.co/600x400/faf8f4/b8912f?text=Team+Photo'
]

export default function Gallery() {
  const [lightboxSrc, setLightboxSrc] = useState(null)
  const swiperRef = useRef(null)
  const swiperInstance = useRef(null)

  const openLightbox = useCallback((src) => {
    setLightboxSrc(src)
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxSrc(null)
  }, [])

  useEffect(() => {
    swiperInstance.current = new Swiper(swiperRef.current, {
      modules: [Pagination],
      slidesPerView: 1.2,
      spaceBetween: 16,
      centeredSlides: false,
      pagination: { el: '.swiper-pagination', clickable: true },
      breakpoints: { 480: { slidesPerView: 1.5 }, 640: { slidesPerView: 2 } }
    })
    return () => {
      if (swiperInstance.current) swiperInstance.current.destroy(true, true)
    }
  }, [])

  useEffect(() => {
    if (lightboxSrc) {
      const handler = (e) => { if (e.target === e.currentTarget) closeLightbox() }
      document.addEventListener('click', handler)
      return () => document.removeEventListener('click', handler)
    }
  }, [lightboxSrc, closeLightbox])

  return (
    <>
      <section id="gallery" className="py-20 px-4">
        <div className="section-container">
          <h2 className="section-title">
            <span className="sym">Δ</span> Gallery <span className="sym">∞</span>
          </h2>

          <div className="gallery-grid" id="galleryGrid">
            {placeholders.map((src, i) => (
              <img key={i} src={src} alt="Gallery Image" loading="lazy" onClick={() => openLightbox(src)} />
            ))}
          </div>

          <div className="swiper" ref={swiperRef}>
            <div className="swiper-wrapper">
              {placeholders.map((src, i) => (
                <div className="swiper-slide" key={i}>
                  <img src={src} alt="Gallery Image" loading="lazy" onClick={() => openLightbox(src)} />
                </div>
              ))}
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>

      {lightboxSrc && (
        <div className="lightbox open" id="lightbox" onClick={closeLightbox}>
          <span className="close-lightbox" onClick={closeLightbox}>&times;</span>
          <img src={lightboxSrc} alt="" />
        </div>
      )}
    </>
  )
}

import { useState, useEffect, useCallback } from 'react'
import { eventsData } from './data'

export default function Events() {
  const [year, setYear] = useState('2026-2027')
  const [lightboxSrc, setLightboxSrc] = useState(null)

  const openLightbox = useCallback((src) => {
    setLightboxSrc(src)
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxSrc(null)
  }, [])

  useEffect(() => {
    if (lightboxSrc) {
      const handler = (e) => { if (e.target === e.currentTarget) closeLightbox() }
      document.addEventListener('click', handler)
      return () => document.removeEventListener('click', handler)
    }
  }, [lightboxSrc, closeLightbox])

  const events = eventsData[year] || []

  return (
    <>
      <section id="events" className="py-20 px-4">
        <div className="section-container">
          <h2 className="section-title">
            <span className="sym">√</span> Events <span className="sym">π</span>
          </h2>

          <div className="flex flex-wrap gap-3 justify-center mb-10">
            <div className="relative inline-block">
              <select
                id="yearSelect"
                className="filter-btn appearance-none cursor-pointer pr-8"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                <option value="2026-2027">2026–2027</option>
                <option value="2025-2026">2025–2026</option>
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs" style={{ color: 'var(--gold)' }}>▼</span>
            </div>
          </div>

          {events.length === 0 ? (
            <p className="col-span-full text-center py-12" style={{ color: 'var(--text-secondary)' }}>No events found for this academic year.</p>
          ) : (
            <div id="eventsGrid" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((e, i) => (
                <div className="event-card" key={i} data-status={e.status}>
                  {e.image && (
                    <div
                      className="event-poster-wrap"
                      style={{ margin: '-1.5rem -1.5rem 1rem', overflow: 'hidden', cursor: 'pointer' }}
                      onClick={() => openLightbox(e.image)}
                    >
                      <img
                        src={e.image}
                        alt={e.title}
                        className="event-poster"
                        style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
                      />
                    </div>
                  )}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: '0.5rem' }}>
                    <h3>{e.title}</h3>
                    <span className={`status-badge status-${e.status} whitespace-nowrap`}>
                      {e.status.charAt(0).toUpperCase() + e.status.slice(1)}
                    </span>
                  </div>
                  <div className="event-date">{e.date}</div>
                </div>
              ))}
            </div>
          )}
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

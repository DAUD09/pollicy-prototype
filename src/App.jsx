import { useState, useEffect } from 'react'
import './index.css'

const NAV_LINKS = ['About', 'Programmes', 'Research', 'Publications', 'News', 'Careers', 'Partners', 'Contact']

function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(250,250,248,0.96)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'all 0.3s ease',
      padding: '0 2rem',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
        <a href="#home" style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 38, height: 38, borderRadius: '50%',
              background: 'var(--orange)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ fontFamily: 'Syne', fontWeight: 800, color: '#fff', fontSize: 13, letterSpacing: '-0.5px' }}>PO</span>
            </div>
            <span style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 18, color: 'var(--ink)', letterSpacing: '-0.5px' }}>POLLICY</span>
          </div>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }} className="desktop-nav">
          {NAV_LINKS.slice(0, 6).map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} style={{
              textDecoration: 'none', color: 'var(--muted)',
              fontFamily: 'Syne', fontWeight: 500, fontSize: 13,
              padding: '6px 12px', borderRadius: 6,
              transition: 'color 0.2s, background 0.2s',
            }}
              onMouseEnter={e => { e.target.style.color = 'var(--orange)'; e.target.style.background = 'var(--orange-light)' }}
              onMouseLeave={e => { e.target.style.color = 'var(--muted)'; e.target.style.background = 'transparent' }}
            >{link}</a>
          ))}
          <a href="#contact" style={{
            textDecoration: 'none', background: 'var(--orange)', color: '#fff',
            fontFamily: 'Syne', fontWeight: 600, fontSize: 13,
            padding: '8px 18px', borderRadius: 6, marginLeft: 8,
            transition: 'background 0.2s',
          }}
            onMouseEnter={e => e.target.style.background = 'var(--orange-dark)'}
            onMouseLeave={e => e.target.style.background = 'var(--orange)'}
          >Get in Touch</a>
        </div>

        <button onClick={() => setOpen(!open)} style={{
          display: 'none', background: 'none', border: 'none', cursor: 'pointer',
          padding: 8, color: 'var(--ink)',
        }} className="mobile-menu-btn" aria-label="Toggle menu">
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <><line x1="4" y1="4" x2="18" y2="18"/><line x1="18" y1="4" x2="4" y2="18"/></> : <><line x1="3" y1="7" x2="19" y2="7"/><line x1="3" y1="12" x2="19" y2="12"/><line x1="3" y1="17" x2="19" y2="17"/></>}
          </svg>
        </button>
      </div>

      {open && (
        <div style={{
          background: '#FAFAF8', borderTop: '1px solid var(--border)',
          padding: '1rem 2rem', display: 'flex', flexDirection: 'column', gap: 4,
        }}>
          {NAV_LINKS.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)} style={{
              textDecoration: 'none', color: 'var(--ink)', fontFamily: 'Syne',
              fontWeight: 500, padding: '10px 0', borderBottom: '1px solid var(--border)',
              fontSize: 15,
            }}>{link}</a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}

function Hero() {
  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      background: 'linear-gradient(160deg, #1A1A18 0%, #2A2A20 60%, #1A1A18 100%)',
      position: 'relative', overflow: 'hidden', paddingTop: 68,
    }}>
      {/* Pattern overlay */}
      <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.06 }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E8761A" strokeWidth="0.8"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)"/>
      </svg>

      {/* Decorative circle */}
      <div style={{
        position: 'absolute', right: -200, top: '50%', transform: 'translateY(-50%)',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(232,118,26,0.18) 0%, transparent 70%)',
        pointerEvents: 'none',
      }}/>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '4rem 2rem', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 760 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(232,118,26,0.15)', border: '1px solid rgba(232,118,26,0.3)',
            borderRadius: 20, padding: '6px 14px', marginBottom: '2rem',
          }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--orange)' }}/>
            <span style={{ color: 'var(--orange)', fontFamily: 'Syne', fontWeight: 600, fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Pan-African · Feminist · Data-Driven</span>
          </div>

          <h1 style={{
            fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(2.6rem, 6vw, 4.8rem)',
            lineHeight: 1.05, color: '#F5F4F0', letterSpacing: '-2px', marginBottom: '1.5rem',
          }}>
            Data &amp; Technology<br/>
            <span style={{ color: 'var(--orange)' }}>for Equitable</span><br/>
            Digital Futures
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(245,244,240,0.65)',
            lineHeight: 1.7, maxWidth: 580, marginBottom: '2.5rem',
            fontWeight: 300,
          }}>
            Pollicy works at the intersection of data, technology, and design to build inclusive and equitable digital ecosystems across Africa and beyond.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="#programmes" style={{
              textDecoration: 'none', background: 'var(--orange)', color: '#fff',
              fontFamily: 'Syne', fontWeight: 700, fontSize: 15,
              padding: '14px 28px', borderRadius: 8,
              transition: 'background 0.2s, transform 0.2s',
              display: 'inline-block',
            }}
              onMouseEnter={e => { e.target.style.background = 'var(--orange-dark)'; e.target.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.target.style.background = 'var(--orange)'; e.target.style.transform = 'none' }}
            >Explore Our Work</a>
            <a href="#research" style={{
              textDecoration: 'none', color: '#F5F4F0',
              fontFamily: 'Syne', fontWeight: 600, fontSize: 15,
              padding: '14px 28px', borderRadius: 8,
              border: '1px solid rgba(245,244,240,0.2)',
              transition: 'border-color 0.2s, background 0.2s',
              display: 'inline-block',
            }}
              onMouseEnter={e => { e.target.style.borderColor = 'var(--orange)'; e.target.style.background = 'rgba(232,118,26,0.08)' }}
              onMouseLeave={e => { e.target.style.borderColor = 'rgba(245,244,240,0.2)'; e.target.style.background = 'transparent' }}
            >Read Research →</a>
          </div>
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: 1, marginTop: '5rem', maxWidth: 680,
          border: '1px solid rgba(245,244,240,0.1)', borderRadius: 12, overflow: 'hidden',
        }}>
          {[['12+', 'Countries Reached'], ['200+', 'Research Publications'], ['50+', 'Partners'], ['1M+', 'People Impacted']].map(([num, label]) => (
            <div key={label} style={{
              padding: '1.5rem', background: 'rgba(255,255,255,0.04)',
              borderRight: '1px solid rgba(245,244,240,0.08)',
            }}>
              <div style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '2rem', color: 'var(--orange)', lineHeight: 1 }}>{num}</div>
              <div style={{ color: 'rgba(245,244,240,0.5)', fontSize: 13, marginTop: 4, fontWeight: 300 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" style={{ padding: '6rem 2rem', background: '#FAFAF8' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div style={{ color: 'var(--orange)', fontFamily: 'Syne', fontWeight: 700, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>About Pollicy</div>
            <h2 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.1, letterSpacing: '-1px', marginBottom: '1.5rem', color: 'var(--ink)' }}>
              Building Inclusive Digital Ecosystems Across Africa
            </h2>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1rem', fontSize: 16 }}>
              Pollicy Data Institute Limited is a Pan-African, feminist organisation working at the intersection of data, technology, and design. We believe in the transformative power of data — but only when it serves all people equitably.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: 16 }}>
              From policy advocacy to community-centred research, our work spans governance, digital rights, gender and data, AI ethics, and civic technology across the African continent.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: '2rem', flexWrap: 'wrap' }}>
              {['Feminist', 'Pan-African', 'Inclusive', 'Open Data'].map(tag => (
                <span key={tag} style={{
                  background: 'var(--orange-light)', color: 'var(--orange-dark)',
                  fontFamily: 'Syne', fontWeight: 600, fontSize: 12,
                  padding: '6px 14px', borderRadius: 20, border: '1px solid rgba(232,118,26,0.2)',
                }}>{tag}</span>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { icon: '◎', title: 'Mission', desc: 'Advance inclusive, equitable digital ecosystems through data, technology, and design.' },
              { icon: '◈', title: 'Vision', desc: 'A world where all people — especially women and marginalised communities — thrive digitally.' },
              { icon: '◉', title: 'Approach', desc: 'Feminist, intersectional research and design that centres those most affected by digital exclusion.' },
              { icon: '◐', title: 'Impact', desc: 'Shaping policy, building capacity, and driving data-driven advocacy across 12+ African countries.' },
            ].map(item => (
              <div key={item.title} style={{
                background: '#fff', border: '1px solid var(--border)',
                borderRadius: 12, padding: '1.5rem',
                transition: 'border-color 0.2s, transform 0.2s',
                cursor: 'default',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--orange)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none' }}
              >
                <div style={{ color: 'var(--orange)', fontSize: 22, marginBottom: 8 }}>{item.icon}</div>
                <div style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: 14, color: 'var(--ink)', marginBottom: 6 }}>{item.title}</div>
                <div style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const PROGRAMMES = [
  { tag: 'Digital Rights', title: 'Data Governance & Policy', desc: 'Shaping data protection frameworks, digital rights legislation, and open government data initiatives across Africa.', color: '#E8761A' },
  { tag: 'Gender & Data', title: 'Feminist Data Practice', desc: 'Building methodologies and tools for gender-responsive data collection, analysis, and use in policymaking.', color: '#C45E0A' },
  { tag: 'AI Ethics', title: 'Responsible AI in Africa', desc: 'Examining AI systems for bias, accountability, and harm — and advocating for ethical AI deployment on the continent.', color: '#E8761A' },
  { tag: 'Civic Tech', title: 'Digital Civic Engagement', desc: 'Designing technology tools that enable citizens to participate in governance, access public services, and hold institutions accountable.', color: '#C45E0A' },
  { tag: 'Capacity Building', title: 'Digital Skills & Literacy', desc: 'Training community leaders, journalists, CSOs, and governments on data literacy, privacy, and digital safety.', color: '#E8761A' },
  { tag: 'Research', title: 'Applied Data Research', desc: 'Producing rigorous, context-driven research on digital economy, surveillance, health data, and technology policy.', color: '#C45E0A' },
]

function Programmes() {
  return (
    <section id="programmes" style={{ padding: '6rem 2rem', background: 'var(--surface)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ color: 'var(--orange)', fontFamily: 'Syne', fontWeight: 700, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Work Areas</div>
          <h2 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', letterSpacing: '-1px', color: 'var(--ink)' }}>Our Programmes</h2>
          <p style={{ color: 'var(--muted)', marginTop: '1rem', fontSize: 16, maxWidth: 520, margin: '1rem auto 0' }}>Six interconnected focus areas driving digital equity and inclusion across the African continent.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {PROGRAMMES.map(prog => (
            <div key={prog.title} style={{
              background: '#fff', border: '1px solid var(--border)',
              borderRadius: 12, padding: '2rem',
              transition: 'border-color 0.25s, transform 0.25s, box-shadow 0.25s',
              cursor: 'pointer', position: 'relative', overflow: 'hidden',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--orange)'
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(232,118,26,0.1)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: prog.color }}/>
              <span style={{
                display: 'inline-block', background: 'var(--orange-light)', color: 'var(--orange-dark)',
                fontFamily: 'Syne', fontWeight: 700, fontSize: 11,
                padding: '4px 10px', borderRadius: 12, marginBottom: '1rem',
                letterSpacing: '0.06em', textTransform: 'uppercase',
              }}>{prog.tag}</span>
              <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: 18, color: 'var(--ink)', marginBottom: '0.75rem', lineHeight: 1.25 }}>{prog.title}</h3>
              <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.7 }}>{prog.desc}</p>
              <div style={{ marginTop: '1.5rem', color: 'var(--orange)', fontFamily: 'Syne', fontWeight: 700, fontSize: 13 }}>Learn more →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const RESEARCH = [
  { cat: 'Report', year: '2024', title: 'State of Data Governance in East Africa', desc: 'A comprehensive assessment of data protection laws, enforcement mechanisms, and civil society responses across 6 East African countries.', readTime: '28 min read' },
  { cat: 'Policy Brief', year: '2024', title: 'Gendered Dimensions of AI Bias in Health Systems', desc: 'Examining how algorithmic systems in healthcare perpetuate gender disparities and recommending feminist approaches to AI auditing.', readTime: '12 min read' },
  { cat: 'Working Paper', year: '2023', title: 'Surveillance, Safety, and Digital Rights in Urban Africa', desc: 'Investigating CCTV expansion, facial recognition adoption, and community responses to surveillance infrastructure in Kampala, Nairobi, and Lagos.', readTime: '35 min read' },
]

function Research() {
  return (
    <section id="research" style={{ padding: '6rem 2rem', background: '#FAFAF8' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
          <div>
            <div style={{ color: 'var(--orange)', fontFamily: 'Syne', fontWeight: 700, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Research & Insights</div>
            <h2 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', letterSpacing: '-1px', color: 'var(--ink)' }}>Latest Research</h2>
          </div>
          <a href="#publications" style={{ color: 'var(--orange)', fontFamily: 'Syne', fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>View all publications →</a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {RESEARCH.map(item => (
            <article key={item.title} style={{
              background: '#fff', border: '1px solid var(--border)', borderRadius: 12,
              overflow: 'hidden', transition: 'transform 0.25s, box-shadow 0.25s',
              cursor: 'pointer',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.07)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
            >
              <div style={{ background: 'var(--ink)', padding: '2rem', minHeight: 130, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', bottom: -20, right: -20, width: 100, height: 100, borderRadius: '50%', background: 'rgba(232,118,26,0.2)' }}/>
                <span style={{
                  display: 'inline-block', background: 'var(--orange)', color: '#fff',
                  fontFamily: 'Syne', fontWeight: 700, fontSize: 11, letterSpacing: '0.06em',
                  padding: '4px 10px', borderRadius: 6, textTransform: 'uppercase',
                }}>{item.cat}</span>
                <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12, fontFamily: 'Syne', marginTop: 8 }}>{item.year}</div>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: 16, color: 'var(--ink)', lineHeight: 1.3, marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.7, marginBottom: '1.25rem' }}>{item.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--muted)', fontSize: 12 }}>{item.readTime}</span>
                  <span style={{ color: 'var(--orange)', fontFamily: 'Syne', fontWeight: 700, fontSize: 13 }}>Read →</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Publications() {
  const [filter, setFilter] = useState('All')
  const categories = ['All', 'Reports', 'Policy Briefs', 'Data Tools', 'Guides']
  const pubs = [
    { cat: 'Reports', title: 'Digital Rights in Africa 2024', year: 2024, format: 'PDF' },
    { cat: 'Policy Briefs', title: 'AI Ethics Framework for Governments', year: 2024, format: 'PDF' },
    { cat: 'Data Tools', title: 'Gender Data Audit Toolkit', year: 2024, format: 'Interactive' },
    { cat: 'Reports', title: 'State of Internet Shutdowns 2023', year: 2023, format: 'PDF' },
    { cat: 'Guides', title: 'Data Journalism Handbook — Africa Edition', year: 2023, format: 'PDF' },
    { cat: 'Policy Briefs', title: 'Open Government Data Standards', year: 2023, format: 'PDF' },
  ]
  const filtered = filter === 'All' ? pubs : pubs.filter(p => p.cat === filter)

  return (
    <section id="publications" style={{ padding: '6rem 2rem', background: 'var(--surface)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ color: 'var(--orange)', fontFamily: 'Syne', fontWeight: 700, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Resource Repository</div>
          <h2 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', letterSpacing: '-1px', color: 'var(--ink)' }}>Publications & Resources</h2>
        </div>

        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)} style={{
              background: filter === cat ? 'var(--orange)' : '#fff',
              color: filter === cat ? '#fff' : 'var(--muted)',
              border: `1px solid ${filter === cat ? 'var(--orange)' : 'var(--border)'}`,
              fontFamily: 'Syne', fontWeight: 600, fontSize: 13,
              padding: '8px 18px', borderRadius: 20, cursor: 'pointer',
              transition: 'all 0.2s',
            }}>{cat}</button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {filtered.map(pub => (
            <div key={pub.title} style={{
              background: '#fff', border: '1px solid var(--border)', borderRadius: 12,
              padding: '1.5rem', display: 'flex', alignItems: 'center', gap: 16,
              transition: 'border-color 0.2s', cursor: 'pointer',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--orange)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <div style={{
                width: 44, height: 52, background: 'var(--orange-light)',
                borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <svg width="20" height="24" fill="none" stroke="var(--orange)" strokeWidth="1.5">
                  <rect x="3" y="1" width="14" height="22" rx="2"/>
                  <line x1="7" y1="7" x2="13" y2="7"/>
                  <line x1="7" y1="11" x2="13" y2="11"/>
                  <line x1="7" y1="15" x2="11" y2="15"/>
                </svg>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', gap: 6, marginBottom: 4, alignItems: 'center' }}>
                  <span style={{ color: 'var(--muted)', fontSize: 11, fontFamily: 'Syne' }}>{pub.cat}</span>
                  <span style={{ color: 'var(--border)', fontSize: 11 }}>·</span>
                  <span style={{ color: 'var(--muted)', fontSize: 11 }}>{pub.year}</span>
                </div>
                <div style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: 14, color: 'var(--ink)', lineHeight: 1.3, marginBottom: 4 }}>{pub.title}</div>
                <span style={{
                  background: 'var(--orange-light)', color: 'var(--orange-dark)',
                  fontSize: 11, fontFamily: 'Syne', fontWeight: 700,
                  padding: '2px 8px', borderRadius: 8,
                }}>{pub.format}</span>
              </div>
              <svg width="16" height="16" fill="none" stroke="var(--orange)" strokeWidth="2" style={{ flexShrink: 0 }}>
                <path d="M12 3v10M3 12l9 0M6 6l6-3"/>
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const NEWS = [
  { date: 'May 12, 2025', cat: 'Event', title: 'Pollicy Joins UN Digital Forum on AI Governance in Africa', img: '🌍' },
  { date: 'Apr 28, 2025', cat: 'Blog', title: 'What Does Feminist Data Practice Look Like in 2025?', img: '✊' },
  { date: 'Apr 10, 2025', cat: 'Press', title: 'Pollicy Launches New Civic Tech Accelerator for East African CSOs', img: '🚀' },
]

function News() {
  return (
    <section id="news" style={{ padding: '6rem 2rem', background: '#FAFAF8' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
          <div>
            <div style={{ color: 'var(--orange)', fontFamily: 'Syne', fontWeight: 700, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Latest</div>
            <h2 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', letterSpacing: '-1px', color: 'var(--ink)' }}>News & Blog</h2>
          </div>
          <a href="#" style={{ color: 'var(--orange)', fontFamily: 'Syne', fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>All posts →</a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {NEWS.map(item => (
            <article key={item.title} style={{
              background: '#fff', border: '1px solid var(--border)', borderRadius: 12,
              overflow: 'hidden', cursor: 'pointer',
              transition: 'transform 0.25s, box-shadow 0.25s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.07)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
            >
              <div style={{
                height: 160, background: 'var(--surface)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 56,
              }}>{item.img}</div>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', alignItems: 'center' }}>
                  <span style={{
                    background: 'var(--orange-light)', color: 'var(--orange-dark)',
                    fontFamily: 'Syne', fontWeight: 700, fontSize: 11,
                    padding: '3px 10px', borderRadius: 10,
                  }}>{item.cat}</span>
                  <span style={{ color: 'var(--muted)', fontSize: 12 }}>{item.date}</span>
                </div>
                <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: 16, color: 'var(--ink)', lineHeight: 1.3 }}>{item.title}</h3>
                <div style={{ color: 'var(--orange)', fontFamily: 'Syne', fontWeight: 700, fontSize: 13, marginTop: '1rem' }}>Read more →</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Careers() {
  return (
    <section id="careers" style={{ padding: '6rem 2rem', background: 'var(--ink)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ color: 'var(--orange)', fontFamily: 'Syne', fontWeight: 700, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Join Us</div>
          <h2 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', letterSpacing: '-1px', color: '#F5F4F0' }}>Careers & Opportunities</h2>
          <p style={{ color: 'rgba(245,244,240,0.55)', marginTop: '1rem', fontSize: 16, maxWidth: 500, margin: '1rem auto 0' }}>Join a team building equitable digital futures for Africa.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16, marginBottom: '2.5rem' }}>
          {[
            { title: 'Website Developer', type: 'Contract · Remote', open: true, desc: 'Design, build and deploy the new Pollicy website. 2–4 month project-based role.' },
            { title: 'Research Associate', type: 'Full-time · Kampala', open: true, desc: 'Lead applied research on digital rights, data governance, and gender and technology.' },
            { title: 'Programme Officer — AI Ethics', type: 'Full-time · Nairobi', open: false, desc: "Manage Pollicy's responsible AI programme across East Africa." },
          ].map(job => (
            <div key={job.title} style={{
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(245,244,240,0.1)',
              borderRadius: 12, padding: '1.75rem',
              transition: 'border-color 0.2s', cursor: 'pointer',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--orange)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(245,244,240,0.1)'}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: 16, color: '#F5F4F0', lineHeight: 1.3 }}>{job.title}</h3>
                {job.open && <span style={{ background: 'rgba(29,158,117,0.2)', color: '#5DCAA5', fontFamily: 'Syne', fontWeight: 700, fontSize: 11, padding: '3px 8px', borderRadius: 10, flexShrink: 0, marginLeft: 8 }}>Open</span>}
              </div>
              <div style={{ color: 'var(--orange)', fontFamily: 'Syne', fontWeight: 600, fontSize: 12, marginBottom: '0.75rem' }}>{job.type}</div>
              <p style={{ color: 'rgba(245,244,240,0.5)', fontSize: 14, lineHeight: 1.7 }}>{job.desc}</p>
              <div style={{ color: 'var(--orange)', fontFamily: 'Syne', fontWeight: 700, fontSize: 13, marginTop: '1.25rem' }}>Apply →</div>
            </div>
          ))}
        </div>

        <div style={{
          background: 'rgba(232,118,26,0.12)', border: '1px solid rgba(232,118,26,0.25)',
          borderRadius: 12, padding: '1.75rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '1rem',
        }}>
          <div>
            <div style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: 16, color: '#F5F4F0', marginBottom: 4 }}>Fellowship & Consultancy Opportunities</div>
            <div style={{ color: 'rgba(245,244,240,0.55)', fontSize: 14 }}>We also work with fellows, consultants, and partner organisations on a rolling basis.</div>
          </div>
          <a href="mailto:info@pollicy.org" style={{
            background: 'var(--orange)', color: '#fff', textDecoration: 'none',
            fontFamily: 'Syne', fontWeight: 700, fontSize: 13,
            padding: '10px 22px', borderRadius: 8, flexShrink: 0,
          }}>Express Interest</a>
        </div>
      </div>
    </section>
  )
}

function Partners() {
  const partners = ['Open Society Foundations', 'Mozilla Foundation', 'Ford Foundation', 'Digital Rights Foundation', 'IDRC Canada', 'Omidyar Network', 'Africa No Filter', 'UN Women']
  return (
    <section id="partners" style={{ padding: '6rem 2rem', background: '#FAFAF8' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ color: 'var(--orange)', fontFamily: 'Syne', fontWeight: 700, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Collaborations</div>
          <h2 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', letterSpacing: '-1px', color: 'var(--ink)' }}>Partners & Funders</h2>
          <p style={{ color: 'var(--muted)', marginTop: '1rem', fontSize: 16, maxWidth: 500, margin: '1rem auto 0' }}>We collaborate with funders, civil society, governments, and researchers who share our commitment to equitable digital futures.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12, marginBottom: '3rem' }}>
          {partners.map(partner => (
            <div key={partner} style={{
              background: '#fff', border: '1px solid var(--border)', borderRadius: 10,
              padding: '1.25rem', textAlign: 'center',
              transition: 'border-color 0.2s', cursor: 'pointer',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--orange)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <div style={{ fontFamily: 'Syne', fontWeight: 600, fontSize: 13, color: 'var(--muted)', lineHeight: 1.4 }}>{partner}</div>
            </div>
          ))}
        </div>

        <div style={{
          background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12,
          padding: '2.5rem', textAlign: 'center',
        }}>
          <h3 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 22, color: 'var(--ink)', marginBottom: '0.75rem' }}>Partner With Us</h3>
          <p style={{ color: 'var(--muted)', fontSize: 15, maxWidth: 500, margin: '0 auto 1.5rem' }}>We are always looking for aligned partners to co-create research, co-fund programmes, and amplify impact across Africa.</p>
          <a href="#contact" style={{
            background: 'var(--orange)', color: '#fff', textDecoration: 'none',
            fontFamily: 'Syne', fontWeight: 700, fontSize: 14,
            padding: '12px 28px', borderRadius: 8, display: 'inline-block',
            transition: 'background 0.2s',
          }}
            onMouseEnter={e => e.target.style.background = 'var(--orange-dark)'}
            onMouseLeave={e => e.target.style.background = 'var(--orange)'}
          >Start a Conversation</a>
        </div>
      </div>
    </section>
  )
}

function Newsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = () => {
    if (email) { setSent(true) }
  }

  return (
    <section style={{ padding: '4rem 2rem', background: 'var(--orange)' }}>
      <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', color: '#fff', letterSpacing: '-0.5px', marginBottom: '0.75rem' }}>Stay in the Loop</h2>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 16, marginBottom: '2rem' }}>Get Pollicy research, events, and insights delivered to your inbox.</p>
        {sent ? (
          <div style={{ color: '#fff', fontFamily: 'Syne', fontWeight: 700, fontSize: 16 }}>✓ You're subscribed! Welcome to the Pollicy community.</div>
        ) : (
          <div style={{ display: 'flex', gap: 12, maxWidth: 440, margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}>
            <input
              type="email" placeholder="your@email.com" value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSubmit()}
              style={{
                flex: 1, minWidth: 200, padding: '12px 16px', borderRadius: 8,
                border: 'none', fontSize: 15, background: 'rgba(255,255,255,0.95)',
                color: 'var(--ink)', fontFamily: 'DM Sans',
                outline: 'none',
              }}
            />
            <button onClick={handleSubmit} style={{
              background: 'var(--ink)', color: '#fff', border: 'none',
              fontFamily: 'Syne', fontWeight: 700, fontSize: 14,
              padding: '12px 24px', borderRadius: 8, cursor: 'pointer',
              transition: 'opacity 0.2s',
            }}
              onMouseEnter={e => e.target.style.opacity = '0.85'}
              onMouseLeave={e => e.target.style.opacity = '1'}
            >Subscribe</button>
          </div>
        )}
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', org: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = () => {
    if (form.name && form.email && form.message) { setSent(true) }
  }

  return (
    <section id="contact" style={{ padding: '6rem 2rem', background: 'var(--surface)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          <div>
            <div style={{ color: 'var(--orange)', fontFamily: 'Syne', fontWeight: 700, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Get in Touch</div>
            <h2 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', letterSpacing: '-1px', color: 'var(--ink)', marginBottom: '1.25rem' }}>Let's Build Equitable Digital Futures Together</h2>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '2rem', fontSize: 15 }}>Whether you're a researcher, partner, journalist, or community member — we'd love to connect.</p>

            {[
              { icon: '📍', label: 'Kampala Office', val: 'Plot 7, Kulubya Close, Bugolobi' },
              { icon: '✉️', label: 'Email', val: 'info@pollicy.org' },
              { icon: '🌐', label: 'Website', val: 'www.pollicy.org' },
              { icon: '📞', label: 'Phone', val: '+256 708 310 397' },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: 18, flexShrink: 0, marginTop: 2 }}>{item.icon}</span>
                <div>
                  <div style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: 12, color: 'var(--muted)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 2 }}>{item.label}</div>
                  <div style={{ color: 'var(--ink)', fontSize: 15 }}>{item.val}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 16, padding: '2.5rem' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ fontSize: 48, marginBottom: '1rem' }}>✓</div>
                <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: 22, color: 'var(--ink)', marginBottom: '0.5rem' }}>Message Received!</h3>
                <p style={{ color: 'var(--muted)' }}>We'll be in touch within 2–3 business days.</p>
              </div>
            ) : (
              <>
                <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: 20, color: 'var(--ink)', marginBottom: '1.5rem' }}>Send Us a Message</h3>
                {[
                  { key: 'name', label: 'Full Name *', type: 'text', placeholder: 'Jane Mutua' },
                  { key: 'email', label: 'Email Address *', type: 'email', placeholder: 'jane@example.org' },
                  { key: 'org', label: 'Organisation', type: 'text', placeholder: 'Your organisation (optional)' },
                ].map(field => (
                  <div key={field.key} style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', fontFamily: 'Syne', fontWeight: 600, fontSize: 13, color: 'var(--muted)', marginBottom: 6 }}>{field.label}</label>
                    <input type={field.type} placeholder={field.placeholder} value={form[field.key]}
                      onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                      style={{
                        width: '100%', padding: '10px 14px', border: '1px solid var(--border)',
                        borderRadius: 8, fontSize: 15, fontFamily: 'DM Sans',
                        color: 'var(--ink)', outline: 'none', transition: 'border-color 0.2s',
                        background: '#FAFAF8',
                      }}
                      onFocus={e => e.target.style.borderColor = 'var(--orange)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>
                ))}
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontFamily: 'Syne', fontWeight: 600, fontSize: 13, color: 'var(--muted)', marginBottom: 6 }}>Message *</label>
                  <textarea placeholder="Tell us about your enquiry..." value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    style={{
                      width: '100%', padding: '10px 14px', border: '1px solid var(--border)',
                      borderRadius: 8, fontSize: 15, fontFamily: 'DM Sans',
                      color: 'var(--ink)', outline: 'none', resize: 'vertical',
                      transition: 'border-color 0.2s', background: '#FAFAF8',
                    }}
                    onFocus={e => e.target.style.borderColor = 'var(--orange)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>
                <button onClick={handleSubmit} style={{
                  width: '100%', background: 'var(--orange)', color: '#fff',
                  border: 'none', fontFamily: 'Syne', fontWeight: 700, fontSize: 15,
                  padding: '14px', borderRadius: 8, cursor: 'pointer',
                  transition: 'background 0.2s',
                }}
                  onMouseEnter={e => e.target.style.background = 'var(--orange-dark)'}
                  onMouseLeave={e => e.target.style.background = 'var(--orange)'}
                >Send Message</button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer style={{ background: 'var(--ink)', padding: '3rem 2rem 2rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem', marginBottom: '2.5rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1rem' }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'Syne', fontWeight: 800, color: '#fff', fontSize: 11 }}>PO</span>
              </div>
              <span style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 16, color: '#F5F4F0' }}>POLLICY</span>
            </div>
            <p style={{ color: 'rgba(245,244,240,0.45)', fontSize: 13, lineHeight: 1.7 }}>Pan-African, feminist organisation advancing inclusive digital ecosystems through data, technology, and design.</p>
          </div>

          {[
            { title: 'About', links: ['Our Story', 'Team', 'Values', 'Annual Reports'] },
            { title: 'Work', links: ['Programmes', 'Research', 'Publications', 'Tools'] },
            { title: 'Connect', links: ['News', 'Events', 'Partners', 'Careers'] },
          ].map(col => (
            <div key={col.title}>
              <div style={{ fontFamily: 'Syne', fontWeight: 700, color: '#F5F4F0', fontSize: 14, marginBottom: '1rem' }}>{col.title}</div>
              {col.links.map(link => (
                <div key={link} style={{ marginBottom: 8 }}>
                  <a href="#" style={{ color: 'rgba(245,244,240,0.45)', fontSize: 13, textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = 'var(--orange)'}
                    onMouseLeave={e => e.target.style.color = 'rgba(245,244,240,0.45)'}
                  >{link}</a>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div style={{ borderTop: '1px solid rgba(245,244,240,0.08)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ color: 'rgba(245,244,240,0.35)', fontSize: 12 }}>© 2025 Pollicy Data Institute Limited. All rights reserved.</div>
          <div style={{ display: 'flex', gap: 16 }}>
            {['Privacy Policy', 'Terms of Use', 'Accessibility'].map(link => (
              <a key={link} href="#" style={{ color: 'rgba(245,244,240,0.35)', fontSize: 12, textDecoration: 'none' }}
                onMouseEnter={e => e.target.style.color = 'var(--orange)'}
                onMouseLeave={e => e.target.style.color = 'rgba(245,244,240,0.35)'}
              >{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Programmes />
        <Research />
        <Publications />
        <News />
        <Careers />
        <Partners />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

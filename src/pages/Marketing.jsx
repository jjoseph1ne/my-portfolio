import { useEffect, useState } from 'react'
import PortfolioShell from '../components/PortfolioShell'
import './PageLayout.css'
import './ProductUX.css'
import './Marketing.css'

const tntPosts = [
  'https://www.instagram.com/reel/DISQ90lPI1_/?utm_source=ig_embed&utm_campaign=loading',
  'https://www.instagram.com/p/DIKiAbAAqCK/?utm_source=ig_embed&utm_campaign=loading',
  'https://www.instagram.com/reel/DE07-Ykv_EV/?utm_source=ig_embed&utm_campaign=loading',
  'https://www.instagram.com/reel/DIulwk2POJS/?utm_source=ig_embed&utm_campaign=loading',
  'https://www.instagram.com/p/DJDCTQBAobD/?utm_source=ig_embed&utm_campaign=loading',
  'https://www.instagram.com/p/DKdCvXrPhrH/?utm_source=ig_embed&utm_campaign=loading',
]

const voltageProject = {
  id: 'mktg-01-voltage',
  number: '01',
  category: 'Concert Management',
  title: 'Voltage NYC',
  subtitle: 'Concert Management course project · Sugar Mouse · Spring 2026',
  role: 'Talent buying · Marketing · Partnership · Production · Four-person team',
  summary:
    'For Concert Management, our four-person team independently built and produced Voltage NYC from the ground up: artist booking, positioning, promotion, sponsorship outreach, ticketing, and show operations. The concert drew 129 attendees and generated $781.67 in ticket revenue, making it the highest-attended and highest-grossing group concert in the class.',
  focus: 'Live event strategy · Talent buying · Brand partnership · Production',
  note:
    'We handled the full process ourselves with faculty guidance only: talent buying, marketing rollout, partnership with Raising Cane’s for audience coupons, and night-of production. After covering the $100 venue and sound engineer fee, the remaining revenue went directly to the artists.',
  visualSrc: '/projects/voltage-assets/voltage-poster.jpg',
  visualAlt: 'Voltage NYC event poster',
  visualClass: 'mktg-band-visual-voltage',
  galleryImages: [
    '/projects/voltage-assets/voltage-lineup.png',
    '/projects/voltage-assets/voltage-canes.jpg',
  ],
  galleryWithStats: true,
  hideGalleryHint: true,
  liveImages: [
    '/projects/voltage-assets/voltage-live-01.jpg',
    '/projects/voltage-assets/voltage-live-02.jpg',
    '/projects/voltage-assets/voltage-live-03.jpg',
    '/projects/voltage-assets/voltage-live-04.jpg',
    '/projects/voltage-assets/voltage-live-05.jpg',
    '/projects/voltage-assets/voltage-live-06.jpg',
    '/projects/voltage-assets/voltage-live-07.jpg',
  ],
  stats: [
    { value: '129', label: 'Attendees' },
    { value: '$781.67', label: 'Ticket revenue' },
    { value: '$100', label: 'Venue + sound engineer' },
    { value: 'Top group', label: 'Highest attendance + revenue in class' },
  ],
  bandClass: 'mktg-band-voltage',
}

const additionalProjects = [
  {
    id: 'mktg-04-style',
    number: '04',
    category: 'Social Media',
    title: 'NYU GALA 2025',
    subtitle: 'A Journey to the West · Annual stage production campaign',
    role: 'Social Media Manager · @NYUCSSA (Chinese Student Association) · Spring 2025',
    summary:
      'I led the social rollout for NYU CSSA’s 2025 gala, shaping how the show was introduced online, how ticketing moments were communicated, and how the campaign spoke to both Chinese and English-speaking student audiences.',
    focus: 'Content strategy · Social media · Bilingual',
    note:
      'Student organization branding and event promotion: translating a large-scale cultural performance into a campaign that felt legible, exciting, and shareable on multiple social media platforms.',
    visualSrc: '/projects/nyugala-2025-instagram.png',
    visualAlt: 'NYU GALA 2025 Instagram campaign post',
      galleryImages: [
        '/projects/nyugala-gallery-09.png',
        '/projects/nyugala-gallery-10.png',
        '/projects/nyugala-gallery-01.jpg',
        '/projects/nyugala-gallery-11.png',
        '/projects/nyugala-gallery-12.png',
        '/projects/nyugala-gallery-13.png',
        '/projects/nyugala-gallery-14.png',
        '/projects/nyugala-gallery-15.png',
        '/projects/nyugala-gallery-16.png',
        '/projects/nyugala-gallery-17.png',
        '/projects/nyugala-gallery-18.png',
        '/projects/nyugala-gallery-19.png',
        '/projects/nyugala-gallery-20.png',
        '/projects/nyugala-gallery-02.png',
        '/projects/nyugala-gallery-03.png',
        '/projects/nyugala-gallery-04.png',
      '/projects/nyugala-gallery-05.png',
      '/projects/nyugala-gallery-06.png',
      '/projects/nyugala-gallery-08.jpg',
    ],
    coverage: [
      {
        source: 'Apollo Theater',
        title: 'A Journey to the West',
        summary: 'Official event page for the May 3, 2025 gala at Apollo’s Historic Theater, highlighting the show’s theatrical structure and cross-cultural framing.',
        href: 'https://www.apollotheater.org/event/a-journey-to-the-west',
        tone: 'apollo',
      },
    ],
    bandClass: 'mktg-band-gala',
  },
  {
    id: 'mktg-05-loona',
    number: '05',
    category: 'Non-profit Organization',
    title: 'We Independent',
    subtitle: 'Non-profit Organization',
    role: 'Marketing Assistant',
    summary:
      'We Independent is a nonprofit organization supporting dependent visa holders, especially women navigating immigration, identity, and belonging. I supported marketing and communications across community programming, educational sessions, interviews, and partnership events.',
    focus: 'Community outreach · Social media · Campaign design',
    note:
      'Our Nonprofit communications centered on accessibility and care: translating legal resources, wellness programming, and community storytelling into visual campaigns that felt warm, clear, and approachable.',
    logoSrc: '/projects/we-independent-assets/logo.png',
    logoAlt: 'We Independent logo',
    visualSrc: '/projects/we-independent-assets/main-visual-wide.png',
    visualAlt: 'We Independent outdoor brand campaign billboard visual',
    visualClass: 'mktg-band-visual-we-independent',
    galleryImages: [
      '/projects/we-independent-assets/gallery-10.jpg',
      '/projects/we-independent-assets/gallery-11.jpg',
      '/projects/we-independent-assets/gallery-01.jpeg',
      '/projects/we-independent-assets/gallery-02.png',
      '/projects/we-independent-assets/gallery-03.png',
      '/projects/we-independent-assets/gallery-04.jpg',
      '/projects/we-independent-assets/gallery-05.jpg',
      '/projects/we-independent-assets/gallery-06.jpg',
      '/projects/we-independent-assets/gallery-07.png',
      '/projects/we-independent-assets/gallery-08.jpg',
      '/projects/we-independent-assets/gallery-09.jpg',
    ],
    embeds: [
      'https://www.instagram.com/p/DPE-opZjowY/?utm_source=ig_embed&utm_campaign=loading',
      'https://www.instagram.com/p/DGPKZkEI3oP/?utm_source=ig_embed&utm_campaign=loading',
      'https://www.instagram.com/p/DVcXyJ7D0_d/?utm_source=ig_embed&utm_campaign=loading',
    ],
    bandClass: 'mktg-band-coral',
  },
]

const heroPills = ['360° campaigns', 'Content strategy', 'Brand research', 'Creator growth', 'Product marketing']
const remorseWechatPosts = [
  '/projects/remorse-assets/wechat-08.png',
  '/projects/remorse-assets/wechat-07.png',
  '/projects/remorse-assets/wechat-06.png',
  '/projects/remorse-assets/wechat-05.png',
  '/projects/remorse-assets/wechat-04.png',
  '/projects/remorse-assets/wechat-03.png',
  '/projects/remorse-assets/wechat-02.png',
  '/projects/remorse-assets/wechat-01.png',
]
const remorseCoverage = [
  {
    source: 'Asian American Arts Alliance',
    title: '伤逝Remorse',
    summary: 'Event listing highlighting the Dixon Place run and framing the work as a reimagined adaptation of Lu Xun’s novella.',
    href: 'https://www.aaartsalliance.org/events/remorse',
    tone: 'a4',
  },
  {
    source: 'BroadwayWorld',
    title: 'REMORSE Debuts Off-Broadway at Dixon Place',
    summary: 'Press coverage announcing the February 7–9, 2025 performances and the production’s outreach-driven approach.',
    href: 'https://www.broadwayworld.com/off-broadway/article/REMORSE-Debuts-Off-Broadway-at-Dixon-Place-20250126',
    tone: 'bww',
  },
]
const remorseFeatureAssets = [
  {
    src: '/projects/remorse-assets/asset-01.png',
    alt: 'Remorse ticket graphic post',
  },
  {
    src: '/projects/remorse-assets/asset-02.png',
    alt: 'Remorse rehearsal reel post',
  },
  {
    src: '/projects/remorse-assets/asset-03.png',
    alt: 'Remorse countdown poster post',
  },
]

export default function Marketing() {
  const [activeRemorseImage, setActiveRemorseImage] = useState(null)

  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process()
    } else {
      const s = document.createElement('script')
      s.src = 'https://www.instagram.com/embed.js'
      s.async = true
      document.body.appendChild(s)
    }
  }, [])

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll('[data-reveal]'))
    if (targets.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!activeRemorseImage) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveRemorseImage(null)
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeRemorseImage])

  return (
    <PortfolioShell>
      <div className="folio-page folio-page-marketing">
        <main className="folio-main">

          {/* ── Hero ── */}
          <section className="folio-product-hero mktg-reveal mktg-reveal-hero is-visible" data-reveal>
            <div className="folio-product-hero-bar mktg-hero-bar">
              <span className="folio-kicker">Marketing</span>
              <div className="folio-product-manifesto" aria-label="Marketing introduction">
                <span>Campaign thinking.</span>
                <span>Brand, social, and strategy.</span>
                <span>Five projects.</span>
              </div>
              <div className="mktg-hero-pills">
                {heroPills.map((t, index) => (
                  <span key={t} className="mktg-hero-pill" style={{ '--mktg-pill-delay': `${index * 90}ms` }}>{t}</span>
                ))}
              </div>
            </div>
          </section>

          {/* ── 01 · Voltage NYC ── */}
          <section className="mktg-remorse-section mktg-reveal is-visible" data-reveal>
            <div className="mktg-tnt-eyebrow">
              <span className="mktg-tnt-num">{voltageProject.number}</span>
              <span className="mktg-tnt-cat">{voltageProject.category}</span>
            </div>
            <div className={`mktg-band ${voltageProject.bandClass} mktg-glass-card`}>
              <div className="mktg-band-layout">
                <div className="mktg-band-left">
                  <div className="mktg-band-title-row">
                    <h2 className="mktg-band-title">{voltageProject.title}</h2>
                  </div>
                  <p className="mktg-band-subtitle">{voltageProject.subtitle}</p>
                  <p className="mktg-band-role">{voltageProject.role}</p>
                  <p className="mktg-band-focus">{voltageProject.focus}</p>
                  <p className="mktg-band-summary">{voltageProject.summary}</p>
                  <p className="mktg-band-note">{voltageProject.note}</p>
                </div>
                <div className={`mktg-band-visual mktg-band-visual-poster ${voltageProject.visualClass || ''}`}>
                  <button
                    type="button"
                    className="mktg-band-poster-button"
                    onClick={() => setActiveRemorseImage({ src: voltageProject.visualSrc, alt: voltageProject.visualAlt })}
                    aria-label={`Open ${voltageProject.title} poster`}
                  >
                    <img src={voltageProject.visualSrc} alt={voltageProject.visualAlt} className="mktg-band-poster" />
                  </button>
                </div>
              </div>
              <div className="mktg-band-gallery-stats-row">
                <div className="mktg-band-gallery-wrap">
                  <div className="mktg-band-gallery" aria-label={`${voltageProject.title} gallery`}>
                    {voltageProject.galleryImages.map((imageSrc, index) => (
                      <figure key={imageSrc} className="mktg-band-gallery-item">
                        <button
                          type="button"
                          className="mktg-band-gallery-button"
                          onClick={() => setActiveRemorseImage({
                            src: imageSrc,
                            alt: `${voltageProject.title} campaign visual ${index + 1}`,
                          })}
                          aria-label={`Open ${voltageProject.title} campaign visual ${index + 1}`}
                        >
                          <img
                            src={imageSrc}
                            alt={`${voltageProject.title} campaign visual ${index + 1}`}
                            className="mktg-band-gallery-image"
                          />
                        </button>
                      </figure>
                    ))}
                  </div>
                </div>
                <div className="mktg-band-stats-grid" aria-label={`${voltageProject.title} project results`}>
                  {voltageProject.stats.map((stat) => (
                    <div key={`${voltageProject.id}-${stat.label}`} className="mktg-band-stat">
                      <span className="mktg-band-stat-value">{stat.value}</span>
                      <span className="mktg-band-stat-label">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mktg-band-mini-gallery-wrap">
                <p className="mktg-band-gallery-hint">Event moments</p>
                <div className="mktg-band-mini-gallery" aria-label={`${voltageProject.title} event photo strip`}>
                  {voltageProject.liveImages.map((imageSrc, index) => (
                    <figure key={imageSrc} className="mktg-band-mini-gallery-item">
                      <button
                        type="button"
                        className="mktg-band-mini-gallery-button"
                        onClick={() => setActiveRemorseImage({
                          src: imageSrc,
                          alt: `${voltageProject.title} event photo ${index + 1}`,
                        })}
                        aria-label={`Open ${voltageProject.title} event photo ${index + 1}`}
                      >
                        <img
                          src={imageSrc}
                          alt={`${voltageProject.title} event photo ${index + 1}`}
                          className="mktg-band-mini-gallery-image"
                        />
                      </button>
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── 02 · Tisch New Theatre ── */}
          <section className="mktg-tnt-section mktg-reveal is-visible">

            <div className="mktg-tnt-eyebrow">
              <span className="mktg-tnt-num">02</span>
              <span className="mktg-tnt-cat">Social Media</span>
            </div>

            <div className="mktg-band mktg-band-tnt mktg-glass-card">

              <div className="mktg-band-layout">
                <div className="mktg-band-left">
                  <div className="mktg-band-title-row">
                    <img
                      src="/projects/tnt-assets/Black TNT Logo PNG.png"
                      alt="TNT logo"
                      className="mktg-band-logo"
                    />
                    <h2 className="mktg-band-title">Tisch New Theatre</h2>
                  </div>
                  <p className="mktg-band-subtitle">Student-run theater company · NYU Tisch · Spring 2025</p>
                  <p className="mktg-band-role">Social Media Manager · @tischnewtheatre · NYU Tisch · Spring 2025</p>
                  <p className="mktg-band-focus">Content strategy · Campaign design · Community</p>
                  <p className="mktg-band-summary">
                    Tisch New Theatre is NYU Tisch School of the Arts' student-run theater company,
                    producing full-scale musicals and plays each season.<br /><br />
                    I managed the Instagram end-to-end — graphic assets, production campaigns,
                    and short form videos — shaping how TNT communicates to audiences,
                    prospective creatives, and the NYU community.<br /><br />
                    I contributed to audience development strategy that supported 2 sold-out performances out of 3 show nights.
                  </p>
                </div>
                <div className="mktg-band-visual mktg-band-visual-poster">
                  <img
                    src="/projects/tnt-assets/Screenshot 2026-05-04 at 22.37.58.png"
                    alt="Fun Home production poster"
                    className="mktg-band-poster mktg-band-poster-crop"
                  />
                </div>
              </div>

              <div className="mktg-tnt-rule" />

              <p className="mktg-tnt-seclabel">Live posts · @tischnewtheatre</p>
              <div className="mktg-tnt-embeds">
                {tntPosts.map((postUrl) => (
                  <div key={postUrl} className="mktg-tnt-embed">
                    <blockquote
                      className="instagram-media"
                      data-instgrm-captioned
                      data-instgrm-permalink={postUrl}
                      data-instgrm-version="14"
                      style={{ margin: 0, width: '100%', minWidth: 0 }}
                    />
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* ── 03 · The Opera Remorse ── */}
          <section id="marketing-remorse" className="mktg-remorse-section mktg-reveal" data-reveal>

            <div className="mktg-tnt-eyebrow">
              <span className="mktg-tnt-num">03</span>
              <span className="mktg-tnt-cat">Marketing Campaign</span>
            </div>

            <div className="mktg-remorse-card mktg-glass-card">
              <div className="mktg-remorse-layout">
                <div className="mktg-remorse-left">
                  <h2 className="mktg-remorse-title">The Opera Remorse</h2>
                  <p className="mktg-remorse-subtitle">傷逝 · Off-Broadway · Dixon Place · 2025</p>
                  <p className="mktg-remorse-role">Marketing Lead</p>
                  <p className="mktg-remorse-focus">Marketing campaign · Social media · Audience communication</p>
                  <p className="mktg-remorse-body">
                    The Opera Remorse (傷逝) is an Off-Broadway Chinese opera production that premiered at Dixon Place.<br /><br />
                    I grew marketing campaigns, especially for social presence from 0 to 200+ followers, adapting tone, content format, and posting cadence per platform algorithm to maximize reach.<br /><br />
                    Executed a bilingual (English/Mandarin) cross-platform marketing campaign for a student-led Chinese Opera production, targeting English-speaking and Chinese-speaking audiences across Instagram, the RedNote, and WeChat.
                  </p>
                </div>
                <div className="mktg-remorse-poster-wrap">
                  <img
                    src="/projects/remorse-assets/remorse-poster.jpg"
                    alt="The Opera Remorse production poster"
                    className="mktg-remorse-poster"
                  />
                </div>
              </div>

              <div className="mktg-remorse-rule" />

              <div className="mktg-remorse-actions">
                <p className="mktg-remorse-seclabel">Official WeChat Account Posts</p>
                <p className="mktg-remorse-caption">Long-form visual storytelling for a bilingual opera audience in New York.</p>
              </div>

              <div className="mktg-remorse-gallery">
                {remorseWechatPosts.map((imageSrc, index) => (
                  <figure key={imageSrc} className="mktg-remorse-gallery-item">
                    <button
                      type="button"
                      className="mktg-remorse-gallery-button"
                      onClick={() => setActiveRemorseImage({
                        src: imageSrc,
                        alt: `Opera Remorse WeChat account post ${index + 1}`,
                      })}
                      aria-label={`Open Opera Remorse WeChat account post ${index + 1}`}
                    >
                      <img
                        src={imageSrc}
                        alt={`Opera Remorse WeChat account post ${index + 1}`}
                        className="mktg-remorse-gallery-image"
                      />
                    </button>
                  </figure>
                ))}
              </div>

              <div className="mktg-remorse-asset-row">
                <div className="mktg-remorse-asset-feature">
                  <button
                    type="button"
                    className="mktg-remorse-asset-button"
                    onClick={() => setActiveRemorseImage(remorseFeatureAssets[0])}
                    aria-label="Open featured Remorse campaign asset"
                  >
                    <img
                      src={remorseFeatureAssets[0].src}
                      alt={remorseFeatureAssets[0].alt}
                      className="mktg-remorse-asset-image"
                    />
                  </button>
                </div>
                <div className="mktg-remorse-asset-stack">
                  {remorseFeatureAssets.slice(1).map((asset, index) => (
                    <button
                      key={asset.src}
                      type="button"
                      className={`mktg-remorse-asset-button mktg-remorse-asset-small mktg-remorse-asset-small-${index + 1}`}
                      onClick={() => setActiveRemorseImage(asset)}
                      aria-label={`Open Remorse campaign asset ${index + 2}`}
                    >
                      <img
                        src={asset.src}
                        alt={asset.alt}
                        className="mktg-remorse-asset-image"
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="mktg-remorse-coverage">
                {remorseCoverage.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`mktg-remorse-coverage-card mktg-remorse-coverage-${item.tone}`}
                  >
                    <div className="mktg-remorse-coverage-chrome" aria-hidden="true">
                      <span className="mktg-remorse-coverage-dot" />
                      <span className="mktg-remorse-coverage-dot" />
                      <span className="mktg-remorse-coverage-dot" />
                      <span className="mktg-remorse-coverage-bar">{item.source}</span>
                    </div>
                    <span className="mktg-remorse-coverage-source">{item.source}</span>
                    <h3 className="mktg-remorse-coverage-title">{item.title}</h3>
                    <p className="mktg-remorse-coverage-summary">{item.summary}</p>
                    <span className="mktg-remorse-coverage-link">Open article</span>
                  </a>
                ))}
              </div>

            </div>
          </section>

          {/* ── 04–05 · Additional work ── */}
          {additionalProjects.map((p) => (
            <section key={p.id} className="mktg-remorse-section mktg-reveal" data-reveal>
              <div className="mktg-tnt-eyebrow">
                <span className="mktg-tnt-num">{p.number}</span>
                <span className="mktg-tnt-cat">{p.category}</span>
              </div>
              <div className={`mktg-band ${p.bandClass} mktg-glass-card`}>
                <div className="mktg-band-layout">
                  <div className="mktg-band-left">
                    <div className="mktg-band-title-row">
                      {p.logoSrc ? (
                        <img src={p.logoSrc} alt={p.logoAlt || `${p.title} logo`} className="mktg-band-logo" />
                      ) : null}
                      <h2 className="mktg-band-title">{p.title}</h2>
                    </div>
                    <p className="mktg-band-subtitle">{p.subtitle}</p>
                    <p className="mktg-band-role">{p.role}</p>
                    <p className="mktg-band-focus">{p.focus}</p>
                    <p className="mktg-band-summary">{p.summary}</p>
                    <p className="mktg-band-note">{p.note}</p>
                  </div>
                  <div className={`mktg-band-visual ${p.visualSrc ? 'mktg-band-visual-poster' : ''} ${p.galleryImages ? 'mktg-band-visual-gala' : ''} ${p.visualClass || ''}`}>
                    {p.visualSrc ? (
                      <button
                        type="button"
                        className="mktg-band-poster-button"
                        onClick={() => setActiveRemorseImage({ src: p.visualSrc, alt: p.visualAlt })}
                        aria-label={`Open ${p.title} poster`}
                      >
                        <img src={p.visualSrc} alt={p.visualAlt} className="mktg-band-poster" />
                      </button>
                    ) : (
                      <div className="mktg-band-stat-stack">
                        {p.stats.map((stat) => (
                          <div key={stat.label} className="mktg-band-stat">
                            <span className="mktg-band-stat-value">{stat.value}</span>
                            <span className="mktg-band-stat-label">{stat.label}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                {p.galleryImages && p.galleryWithStats ? (
                  <div className="mktg-band-gallery-stats-row">
                    <div className="mktg-band-gallery-wrap">
                      <div className="mktg-band-gallery" aria-label={`${p.title} gallery`}>
                        {p.galleryImages.map((imageSrc, index) => (
                          <figure key={imageSrc} className="mktg-band-gallery-item">
                            <button
                              type="button"
                              className="mktg-band-gallery-button"
                              onClick={() => setActiveRemorseImage({
                                src: imageSrc,
                                alt: `${p.title} campaign visual ${index + 1}`,
                              })}
                              aria-label={`Open ${p.title} campaign visual ${index + 1}`}
                            >
                              <img
                                src={imageSrc}
                                alt={`${p.title} campaign visual ${index + 1}`}
                                className="mktg-band-gallery-image"
                              />
                            </button>
                          </figure>
                        ))}
                      </div>
                    </div>
                    {p.stats ? (
                      <div className="mktg-band-stats-grid" aria-label={`${p.title} project results`}>
                        {p.stats.map((stat) => (
                          <div key={`${p.id}-${stat.label}`} className="mktg-band-stat">
                            <span className="mktg-band-stat-value">{stat.value}</span>
                            <span className="mktg-band-stat-label">{stat.label}</span>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ) : null}
                {p.galleryImages && !p.galleryWithStats ? (
                  <div className="mktg-band-gallery-wrap">
                    <div className="mktg-band-gallery" aria-label={`${p.title} gallery`}>
                      {p.galleryImages.map((imageSrc, index) => (
                        <figure key={imageSrc} className="mktg-band-gallery-item">
                          <button
                            type="button"
                            className="mktg-band-gallery-button"
                            onClick={() => setActiveRemorseImage({
                              src: imageSrc,
                              alt: `${p.title} campaign visual ${index + 1}`,
                            })}
                            aria-label={`Open ${p.title} campaign visual ${index + 1}`}
                          >
                            <img
                              src={imageSrc}
                              alt={`${p.title} campaign visual ${index + 1}`}
                              className="mktg-band-gallery-image"
                            />
                          </button>
                        </figure>
                      ))}
                    </div>
                  </div>
                ) : null}
                {p.stats && !p.galleryWithStats ? (
                  <div className="mktg-band-stats-grid" aria-label={`${p.title} project results`}>
                    {p.stats.map((stat) => (
                      <div key={`${p.id}-${stat.label}`} className="mktg-band-stat">
                        <span className="mktg-band-stat-value">{stat.value}</span>
                        <span className="mktg-band-stat-label">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                ) : null}
                {p.liveImages ? (
                  <div className="mktg-band-mini-gallery-wrap">
                    <p className="mktg-band-gallery-hint">Event moments</p>
                    <div className="mktg-band-mini-gallery" aria-label={`${p.title} event photo strip`}>
                      {p.liveImages.map((imageSrc, index) => (
                        <figure key={imageSrc} className="mktg-band-mini-gallery-item">
                          <button
                            type="button"
                            className="mktg-band-mini-gallery-button"
                            onClick={() => setActiveRemorseImage({
                              src: imageSrc,
                              alt: `${p.title} event photo ${index + 1}`,
                            })}
                            aria-label={`Open ${p.title} event photo ${index + 1}`}
                          >
                            <img
                              src={imageSrc}
                              alt={`${p.title} event photo ${index + 1}`}
                              className="mktg-band-mini-gallery-image"
                            />
                          </button>
                        </figure>
                      ))}
                    </div>
                  </div>
                ) : null}
                {p.embeds ? (
                  <div className="mktg-band-embeds" aria-label={`${p.title} Instagram embeds`}>
                    {p.embeds.map((postUrl) => (
                      <div key={postUrl} className="mktg-band-embed">
                        <blockquote
                          className="instagram-media"
                          data-instgrm-captioned
                          data-instgrm-permalink={postUrl}
                          data-instgrm-version="14"
                          style={{ margin: 0, width: '100%', minWidth: 0 }}
                        />
                      </div>
                    ))}
                  </div>
                ) : null}
                {p.coverage ? (
                  <div className="mktg-band-coverage">
                    {p.coverage.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className={`mktg-remorse-coverage-card mktg-remorse-coverage-${item.tone}`}
                      >
                        <div className="mktg-remorse-coverage-chrome" aria-hidden="true">
                          <span className="mktg-remorse-coverage-dot" />
                          <span className="mktg-remorse-coverage-dot" />
                          <span className="mktg-remorse-coverage-dot" />
                          <span className="mktg-remorse-coverage-bar">{item.source}</span>
                        </div>
                        <span className="mktg-remorse-coverage-source">{item.source}</span>
                        <h3 className="mktg-remorse-coverage-title">{item.title}</h3>
                        <p className="mktg-remorse-coverage-summary">{item.summary}</p>
                        <span className="mktg-remorse-coverage-link">Open article</span>
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </section>
          ))}

        </main>
      </div>

      {activeRemorseImage && (
        <div
          className="mktg-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeRemorseImage.alt}
          onClick={() => setActiveRemorseImage(null)}
        >
          <div className="mktg-lightbox-inner" onClick={(event) => event.stopPropagation()}>
            <img
              src={activeRemorseImage.src}
              alt={activeRemorseImage.alt}
              className="mktg-lightbox-image"
            />
          </div>
        </div>
      )}
    </PortfolioShell>
  )
}

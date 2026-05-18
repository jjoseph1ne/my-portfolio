import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import PortfolioShell from '../components/PortfolioShell'
import './PageLayout.css'
import './ProductProject.css'

const HOME_PAGE_DEMO_SRC =
  'https://embed.figma.com/proto/aaDovbA8gUUexP0ug5caUO/Rolling-Deck?node-id=481-1637&viewport=-447%2C220%2C0.1&scaling=min-zoom&content-scaling=fixed&page-id=1%3A6&embed-host=share'

const DEMO_VIDEO_SRC =
  'https://player.vimeo.com/video/1182507112?badge=0&autopause=0&player_id=0&app_id=58479'

const insightShifts = [
  {
    from: 'Sneaker accessories sold one by one',
    to: 'A modular styling system built around combinations',
  },
  {
    from: 'Customization as an optional add-on',
    to: 'Customization as the primary interaction path',
  },
  {
    from: 'Passive browsing through inventory',
    to: 'Guided self-expression through building and mixing',
  },
]

const builtWith = [
  'Adobe Express',
  'Adobe Illustrator',
  'Adobe Photoshop',
  'chatgpt',
  'claudecode',
  'codex',
  'Figma',
  'gemini',
  'midjourney',
  'nanobanana',
]

const featureRows = [
  {
    title: 'Charm builder',
    body: 'Users choose sneaker type, add charms, preview combinations, and move into cart from a build-first flow instead of a generic product page.',
    images: [
      {
        src: '/projects/soleluxe-assets/charm-diy-ref-2.png',
        alt: 'Charm builder interface with tabs, charms, and shoe preview',
      },
    ],
  },
  {
    title: 'Archive and limited drops',
    body: 'Time-based release logic, rarity, and refresh behavior create repeat visits without relying only on static catalog browsing.',
    images: [
      {
        src: '/projects/soleluxe-assets/daily-offer.png',
        alt: 'Daily offer strip showing rotating highlighted products and countdown',
      },
    ],
  },
  {
    title: 'Playful interface language',
    body: 'Rounded UI, softer motion, and faster feedback make the site feel expressive without losing shopping clarity.',
    images: [
      {
        src: '/projects/soleluxe-assets/component-15.png',
        alt: 'Styled lace and charm cutout asset with pink halo',
      },
      {
        src: '/projects/soleluxe-assets/frame-141.png',
        alt: 'Scroll-to-explore graphic with monthly sold cards and heart charm',
      },
    ],
  },
]

const productTiers = [
  {
    title: 'DIY sets',
    description:
      'The primary build-first offer: users choose a sneaker base, layer charms, and preview a full styling combination.',
    assets: ['Sneaker base', 'Charm builder', 'Preview + cart'],
    image: '/projects/soleluxe-assets/diy1-1.png',
  },
  {
    title: 'Mystery boxes',
    description:
      'A playful surprise-driven path that keeps the assortment collectible without forcing heavy decision-making.',
    assets: ['Blind-box packaging', 'Themed drops', 'Discovery logic'],
    image: '/projects/soleluxe-assets/mh1-1.png',
  },
  {
    title: 'Style sets',
    description:
      'Pre-styled combinations for users who want an opinionated look with less effort and faster purchase confidence.',
    assets: ['Curated bundles', 'Look-based grouping', 'Quick shop'],
    image: '/projects/soleluxe-assets/set1.png',
  },
  {
    title: 'Singles',
    description:
      'Low-commitment individual items like laces, bows, charms, and chains that still plug into the larger styling system.',
    assets: ['Laces', 'Bows', 'Charms'],
    image: '/projects/soleluxe-assets/single1.png',
  },
]

function StableEmbed({
  title,
  src,
  className,
  allow,
  referrerPolicy,
  allowFullScreen,
  width,
  height,
  style,
}) {
  const iframeRef = useRef(null)

  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return undefined

    iframe.src = src

    return () => {
      iframe.src = 'about:blank'
    }
  }, [src])

  return (
    <iframe
      key={src}
      ref={iframeRef}
      className={className}
      title={title}
      src={src}
      allow={allow}
      referrerPolicy={referrerPolicy}
      allowFullScreen={allowFullScreen}
      width={width}
      height={height}
      loading="eager"
      style={style}
    />
  )
}

export default function SoleluxeProject() {
  return (
    <PortfolioShell>
      <div className="folio-page folio-project-page">
        <main className="folio-main">
          <Link to="/product" className="folio-project-back folio-project-back-standalone">
            Back to Product / Design
          </Link>

          <section className="folio-project-hero">
            <div className="folio-project-intro">
              <span className="folio-kicker">04 / 2026</span>
              <h1>Soleluxe</h1>
              <p className="folio-project-subtitle">Experience &amp; Brand Redesign</p>
            </div>

            <div className="folio-project-hero-lower">
              <div className="folio-project-competition">
                <span className="folio-meta-label">Designathon prompt</span>
                <p>
                  Adobe Student Designathon Spring 2026: redesign an e-commerce startup into a
                  clearer, more compelling end-to-end brand and product experience.
                </p>
              </div>

              <div className="folio-project-meta">
                <div>
                  <span className="folio-meta-label">Focus</span>
                  <p>Brand repositioning / E-commerce UX / Product system / Visual system</p>
                </div>
                <div>
                  <span className="folio-meta-label">Role</span>
                  <p>Research, repositioning, UX architecture, interface direction, visual system</p>
                </div>
                <div>
                  <span className="folio-meta-label">Team</span>
                  <p>Astrid / Josephine / Jasmine / Yutong</p>
                </div>
                <div>
                  <span className="folio-meta-label">Assets</span>
                  <p>Deck, prototype, sitemap, user flow, homepage logic, design system</p>
                </div>
              </div>

              <div className="folio-project-actions">
                <a
                  href="https://www.figma.com/deck/FGihrgTJWr601nRZ4lDOCD"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open full deck
                </a>
              </div>
            </div>
          </section>

          <section className="folio-project-section">
            <div className="folio-project-section-head">
              <span className="folio-kicker">Context</span>
            </div>

            <div className="folio-project-grid two-up folio-project-grid-compact">
              <article className="folio-project-card">
                <span className="folio-meta-label">Brand brief</span>
                <p>
                  Soleluxe already positioned itself around main character energy, playful styling,
                  and sneaker customization for a younger fashion audience.
                </p>
              </article>
              <article className="folio-project-card">
                <span className="folio-meta-label">System gap</span>
                <p>
                  The shopping flow still surfaced isolated items, with little guidance for how to
                  combine products or build a recognizable personal look.
                </p>
              </article>
            </div>
          </section>

          <section className="folio-project-section">
            <div className="folio-project-section-head folio-project-section-head-tight">
              <span className="folio-kicker">Sitemap</span>
              <h2>A fuller commerce map, not just a page redesign.</h2>
            </div>

            <div className="folio-sitemap-map">
              <div className="folio-sitemap-map-home">Home</div>

              <div className="folio-sitemap-map-rows">
                <div className="folio-sitemap-map-row folio-sitemap-map-row-detail">
                  <div className="folio-sitemap-map-branch">Dropdown menu</div>
                  <div className="folio-sitemap-map-detail">
                    <div className="folio-sitemap-dropdown-grid">
                      <span className="folio-sitemap-map-chip folio-sitemap-dropdown-chip">Individual product</span>
                      <div className="folio-sitemap-map-note folio-sitemap-dropdown-note-tall">
                        Sorted by bow, charm, and lace.
                      </div>

                      <span className="folio-sitemap-map-chip folio-sitemap-dropdown-chip">Curated sets</span>

                      <span className="folio-sitemap-map-chip folio-sitemap-dropdown-chip">Customizable sets</span>
                      <div className="folio-sitemap-dropdown-custom">
                        <div className="folio-sitemap-map-note">
                          Build your set scales from 5 charms to a full set with premium lace and bow.
                        </div>
                        <div className="folio-sitemap-dropdown-tail">
                          <span className="folio-sitemap-map-chip folio-sitemap-map-chip-accent">
                            Product detail page
                          </span>
                          <span className="folio-sitemap-map-chip folio-sitemap-map-chip-pink">
                            Product detail page
                          </span>
                        </div>
                      </div>

                      <span className="folio-sitemap-map-chip folio-sitemap-dropdown-chip">Surprise sets</span>
                      <div className="folio-sitemap-map-note folio-sitemap-map-note-table">
                        Mystery boxes vary by theme, quantity, and price tier.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="folio-sitemap-map-row folio-sitemap-map-row-detail">
                  <div className="folio-sitemap-map-branch">Main page</div>
                  <div className="folio-sitemap-map-detail">
                    <div className="folio-sitemap-map-stack">
                      <div className="folio-sitemap-map-pair">
                        <span className="folio-sitemap-map-chip">Hero event</span>
                        <div className="folio-sitemap-map-note-stack">
                          <div className="folio-sitemap-map-note">Version A: slogan with hero image only.</div>
                          <div className="folio-sitemap-map-note">
                            Version B: slogan folded into limited-edition campaign storytelling.
                          </div>
                        </div>
                      </div>

                      <div className="folio-sitemap-map-pair">
                        <span className="folio-sitemap-map-chip">Daily refresh</span>
                        <div className="folio-sitemap-map-note">
                          Four surfaced picks plus a countdown timer for repeat visits.
                        </div>
                      </div>

                      <div className="folio-sitemap-map-pair">
                        <span className="folio-sitemap-map-chip">Account incentive</span>
                        <div className="folio-sitemap-map-note">
                          Login benefits, small gift logic, and stronger access to likely breakout items.
                        </div>
                      </div>

                      <div className="folio-sitemap-map-pair">
                        <span className="folio-sitemap-map-chip">Limited edition</span>
                        <div className="folio-sitemap-map-note">
                          Dedicated campaign carousel for timed drops.
                        </div>
                      </div>

                      <div className="folio-sitemap-map-pair folio-sitemap-map-pair-shortcuts">
                        <span className="folio-sitemap-map-chip">Category shortcuts</span>
                        <div className="folio-sitemap-shortcuts-layout">
                          <div className="folio-sitemap-map-note-stack">
                            <div className="folio-sitemap-map-note">
                              Version A: one large customize shortcut plus three irregular supporting shortcuts.
                            </div>
                            <div className="folio-sitemap-map-note">
                              Version B: hover-led image swap with category emphasis.
                            </div>
                          </div>
                          <div className="folio-sitemap-shortcuts-chip-column">
                            <span className="folio-sitemap-map-chip folio-sitemap-map-chip-soft">Individual product</span>
                            <span className="folio-sitemap-map-chip folio-sitemap-map-chip-soft">Curated sets</span>
                            <span className="folio-sitemap-map-chip folio-sitemap-map-chip-soft">Customizable sets</span>
                            <span className="folio-sitemap-map-chip folio-sitemap-map-chip-soft">Surprise sets</span>
                          </div>
                        </div>
                      </div>

                      <div className="folio-sitemap-map-pair">
                        <span className="folio-sitemap-map-chip">Best seller</span>
                        <div className="folio-sitemap-map-note">
                          Sticky horizontal full-screen best-seller scroll.
                        </div>
                      </div>

                      <div className="folio-sitemap-map-pair">
                        <span className="folio-sitemap-map-chip">Certifications</span>
                        <div className="folio-sitemap-map-note">
                          Transport, trust, and certificate signals.
                        </div>
                      </div>

                      <div className="folio-sitemap-map-pair">
                        <span className="folio-sitemap-map-chip">Join us</span>
                        <div className="folio-sitemap-map-note">Contact information plus email submit.</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="folio-sitemap-map-row folio-sitemap-map-row-detail">
                  <div className="folio-sitemap-map-branch">Account</div>
                  <div className="folio-sitemap-map-detail">
                    <div className="folio-sitemap-map-pair">
                      <span className="folio-sitemap-map-chip">History / orders</span>
                      <div className="folio-sitemap-map-note">
                        Purchased and surfaced styles are stored as archive-like history with tier grouping.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="folio-sitemap-map-row">
                  <div className="folio-sitemap-map-branch">Shopping cart</div>
                </div>

                <div className="folio-sitemap-map-row">
                  <div className="folio-sitemap-map-branch">Search</div>
                </div>

                <div className="folio-sitemap-map-row">
                  <div className="folio-sitemap-map-branch">Favorite</div>
                </div>
              </div>
            </div>
          </section>

          <section className="folio-project-section">
            <div className="folio-project-section-head folio-project-section-head-compact">
              <span className="folio-kicker">Insight</span>
            </div>

            <div className="folio-project-shift-grid folio-project-shift-grid-compact">
              {insightShifts.map((shift) => (
                <article key={shift.from} className="folio-project-shift-card">
                  <span>From</span>
                  <p>{shift.from}</p>
                  <strong>To {shift.to}</strong>
                </article>
              ))}
            </div>
          </section>

          <section className="folio-project-section">
            <div className="folio-project-section-head folio-project-section-head-compact">
              <span className="folio-kicker">Persona</span>
            </div>

            <div className="folio-persona-header">
              <span className="folio-meta-label">Cheercore audience</span>
              <h3>Two buyers, one styling logic: accessories as visible personality.</h3>
            </div>

            <div className="folio-persona-duo">
              <article className="folio-persona-profile">
                <h4>Maya, 15 — High school freshman, Houston TX</h4>
                <p>
                  Still figuring out her style. Spends hours on TikTok and Pinterest building a
                  vision of who she wants to be. Buys on impulse when something clicks.
                </p>
                <div className="folio-persona-points">
                  <div>
                    <strong>To feel put-together</strong>
                    <p>
                      Outfits should look intentional and detailed, even when she only has a few
                      minutes.
                    </p>
                  </div>
                  <div>
                    <strong>To be noticed for the right reasons</strong>
                    <p>Quiet flex, taste-first, and different from everyone else.</p>
                  </div>
                  <div>
                    <strong>To have a camera roll she loves</strong>
                    <p>
                      She wants accessories that photograph beautifully without trying too hard.
                    </p>
                  </div>
                </div>
                <blockquote>
                  &ldquo;I just want to look like I have my life together.&rdquo;
                </blockquote>
              </article>

              <article className="folio-persona-profile">
                <h4>Chloe, 22 — Recent grad, first job, Atlanta GA</h4>
                <p>
                  Finally has her own income and is learning what she actually likes. Buying less,
                  choosing more carefully. Style becomes a way of signaling who she is becoming.
                </p>
                <div className="folio-persona-points folio-persona-points-warm">
                  <div>
                    <strong>To have a signature</strong>
                    <p>Something friends associate with her, not a trend everyone is doing.</p>
                  </div>
                  <div>
                    <strong>To actually love what she buys</strong>
                    <p>She wants excitement first, not buyer&apos;s remorse afterward.</p>
                  </div>
                  <div>
                    <strong>To look like she has taste</strong>
                    <p>Not rich or trendy. Just clearly intentional and recommendation-worthy.</p>
                  </div>
                </div>
                <blockquote>
                  &ldquo;I&apos;m done buying things I don&apos;t actually love.&rdquo;
                </blockquote>
              </article>
            </div>
          </section>

          <section className="folio-project-section">
            <div className="folio-project-section-head">
              <span className="folio-kicker">Product System</span>
            </div>

            <div className="folio-tier-gallery">
              {productTiers.map((tier) => (
                <article key={tier.title} className="folio-tier-gallery-card">
                  <div className="folio-tier-gallery-art">
                    <img src={tier.image} alt={tier.title} />
                  </div>
                  <div className="folio-tier-gallery-copy">
                    <h3>{tier.title}</h3>
                    <p>{tier.description}</p>
                    <div className="folio-tier-asset-list">
                      {tier.assets.map((asset) => (
                        <span key={asset} className="folio-tier-asset-pill">
                          {asset}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="folio-project-section">
            <div className="folio-project-section-head">
              <span className="folio-kicker">Builder Flow</span>
              <h2>Two scenarios: fast purchase or guided customization.</h2>
            </div>

            <div className="folio-project-flow-map">
              <article className="folio-project-flow-diagram">
                <div className="folio-project-flow-copy">
                  <span className="folio-meta-label">Scenario A — Browse to purchase</span>
                  <p className="folio-project-flow-note">A linear route for users who want to shop quickly.</p>
                </div>

                <div className="folio-flow-linear">
                  {[
                    'Enter site',
                    'Home page',
                    'Collection page',
                    'Product details',
                    'Add to cart',
                    'Checkout',
                  ].map((step, index) => (
                    <div key={step} className="folio-flow-node">
                      <span>0{index + 1}</span>
                      <strong>{step}</strong>
                    </div>
                  ))}
                </div>
              </article>

              <article className="folio-project-flow-diagram">
                <div className="folio-project-flow-copy">
                  <span className="folio-meta-label">Scenario B — Customization charm builder</span>
                  <p className="folio-project-flow-note">
                    A branching route where customization becomes the hero interaction.
                  </p>
                </div>

                <div className="folio-flow-branch">
                  <div className="folio-flow-node folio-flow-node-top">
                    <span>01</span>
                    <strong>Enter site</strong>
                  </div>
                  <div className="folio-flow-node folio-flow-node-top">
                    <span>02</span>
                    <strong>Home page + builder CTA</strong>
                  </div>

                  <div className="folio-flow-branch-row">
                    <div className="folio-flow-node">
                      <span>03A</span>
                      <strong>Individual</strong>
                    </div>
                    <div className="folio-flow-node">
                      <span>03B</span>
                      <strong>Curated sets</strong>
                    </div>
                    <div className="folio-flow-node">
                      <span>03C</span>
                      <strong>Customizable</strong>
                    </div>
                  </div>

                  <div className="folio-flow-branch-row">
                    <div className="folio-flow-node">
                      <span>04A</span>
                      <strong>Collection / product page</strong>
                    </div>
                    <div className="folio-flow-node">
                      <span>04B</span>
                      <strong>Set detail</strong>
                    </div>
                    <div className="folio-flow-node">
                      <span>04C</span>
                      <strong>Charm builder</strong>
                    </div>
                  </div>

                  <div className="folio-flow-node folio-flow-node-preview">
                    <span>05</span>
                    <strong>Preview look + share</strong>
                  </div>

                  <div className="folio-flow-node folio-flow-node-bottom">
                    <span>06</span>
                    <strong>Add to cart / checkout</strong>
                  </div>
                </div>
              </article>
            </div>
          </section>

          <section className="folio-project-section">
            <div className="folio-project-section-head folio-project-section-head-compact">
              <span className="folio-kicker">Home page demo</span>
            </div>

            <div className="folio-homepage-showcase">
              <div className="folio-homepage-embed-frame">
                <StableEmbed
                  className="folio-homepage-embed"
                  title="Soleluxe homepage figma demo"
                  src={HOME_PAGE_DEMO_SRC}
                  width="800"
                  height="450"
                  style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                  allowFullScreen
                />
              </div>
              <p className="folio-homepage-embed-note">
                Click, drag, and scroll to interact with the prototype.
              </p>
            </div>
          </section>

          <section className="folio-project-section folio-project-demo-section">
            <div className="folio-project-section-head">
              <span className="folio-kicker">Demo video</span>
            </div>

            <div className="folio-project-demo-frame">
              <div className="folio-project-demo-aspect">
                <StableEmbed
                  className="folio-project-demo-embed"
                  title="Soleluxe UIUX"
                  src={DEMO_VIDEO_SRC}
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </section>

          <section className="folio-project-section" id="design-system">
            <div className="folio-project-section-head">
              <span className="folio-kicker">Design System</span>
            </div>

            <div className="folio-design-system-layout">
              <article className="folio-design-panel folio-design-panel-overview">
                <span className="folio-meta-label">Overview</span>
                <p>
                  A styling-first visual language that feels sweeter, softer, and more expressive
                  than a generic sneaker storefront while staying commercially clear.
                </p>
              </article>

              <article className="folio-design-panel folio-design-panel-logo">
                <span className="folio-meta-label">Logo</span>
                <img
                  className="folio-design-logo-image"
                  src="/projects/soleluxe-assets/logo-final-2.png"
                  alt="Soleluxe wordmark"
                />
                <p>Script wordmark inspired by lace movement, bows, and charm ornament.</p>
              </article>

              <article className="folio-design-panel folio-design-panel-color">
                <span className="folio-meta-label">Color</span>
                <div className="folio-design-swatches">
                  <span className="folio-swatch folio-swatch-berry" />
                  <span className="folio-swatch folio-swatch-cream" />
                  <span className="folio-swatch folio-swatch-pink" />
                  <span className="folio-swatch folio-swatch-green" />
                </div>
                <p>Berry red, blush pink, cream, and muted green balance play with legibility.</p>
              </article>

              <article className="folio-design-panel folio-design-panel-tone">
                <span className="folio-meta-label">Tone of voice</span>
                <ul>
                  <li>Playful</li>
                  <li>Confident</li>
                  <li>Feminine</li>
                  <li>Collected</li>
                </ul>
              </article>

              <article className="folio-design-panel folio-design-panel-pattern">
                <span className="folio-meta-label">Pattern</span>
                <div className="folio-design-patterns">
                  <img
                    className="folio-design-pattern-image"
                    src="/projects/soleluxe-assets/rectangle-194.png"
                    alt="Cream star pattern"
                  />
                  <img
                    className="folio-design-pattern-image"
                    src="/projects/soleluxe-assets/rectangle-195.png"
                    alt="Pink bow and star pattern"
                  />
                </div>
                <p>Soft star fields and bow motifs extend the brand into backgrounds and packaging.</p>
              </article>

              <article className="folio-design-panel folio-design-panel-ui">
                <span className="folio-meta-label">UI components</span>
                <div className="folio-design-ui-preview">
                  <div className="folio-design-ui-nav" />
                  <div className="folio-design-ui-cards">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="folio-design-ui-pills">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <p>Rounded containers, framed product cards, soft shadows, and sticker-like accents.</p>
              </article>

              <article className="folio-design-panel folio-design-panel-imagery">
                <span className="folio-meta-label">Product imagery</span>
                <div className="folio-design-imagery-grid">
                  <img src="/projects/soleluxe-assets/image-52-1.png" alt="Lace bow product render" />
                  <img src="/projects/soleluxe-assets/image-43-1.png" alt="Silver beaded bow product render" />
                  <img src="/projects/soleluxe-assets/image-44-1.png" alt="Black beaded bow product render" />
                  <img src="/projects/soleluxe-assets/smallbow1-1.png" alt="White lace lace-set product render" />
                  <img src="/projects/soleluxe-assets/smallbow2-1.png" alt="Black lace-set product render" />
                  <img src="/projects/soleluxe-assets/11-1.png" alt="Crystal stud charm render" />
                  <img src="/projects/soleluxe-assets/8-1.png" alt="Black clover charm render" />
                  <img src="/projects/soleluxe-assets/5-1.png" alt="Gold flower charm render" />
                </div>
                <p>
                  A small selected slice of the product gallery. In total, 68 exploratory product
                  visuals were generated with nanobanana.
                </p>
              </article>
            </div>
          </section>

          <section className="folio-project-section">
            <div className="folio-project-section-head">
              <span className="folio-kicker">Key Features</span>
            </div>

            <div className="folio-project-feature-list">
              {featureRows.map((feature, index) => (
                <article key={feature.title} className="folio-project-feature-row">
                  <div className="folio-project-feature-copy">
                    <span className="folio-project-feature-number">0{index + 1}</span>
                    <h3>{feature.title}</h3>
                    <p>{feature.body}</p>
                  </div>
                  <div className="folio-project-feature-visual">
                    {feature.images.length === 1 ? (
                      <img src={feature.images[0].src} alt={feature.images[0].alt} />
                    ) : (
                      <div className="folio-project-feature-visual-grid">
                        {feature.images.map((image) => (
                          <img key={image.src} src={image.src} alt={image.alt} />
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="folio-project-section">
            <div className="folio-project-section-head">
              <span className="folio-kicker">Challenges &amp; Learnings</span>
            </div>

            <div className="folio-project-prose-columns">
              <p>
                The hardest part was translating customization into a system that felt both
                flexible and easy to understand, while keeping a strong visual identity without
                overwhelming the shopping experience.
              </p>
              <p>
                More options do not automatically create better interaction. Clear product grouping
                shapes how people buy, and in e-commerce the interaction model is part of the
                business model.
              </p>
            </div>
          </section>

          <section className="folio-project-section">
            <div className="folio-project-section-head">
              <span className="folio-kicker">Accomplishments &amp; Next</span>
            </div>

            <div className="folio-project-prose-columns">
              <p>
                Brand, product structure, and interface now reinforce one another, and the rebuilt
                visual language makes the site feel more like a single world instead of a list of
                disconnected products.
              </p>
              <p>
                The next phase is expanding the prototype, refining the builder flow, and
                producing a broader library of styling imagery to support more combinations and use
                cases.
              </p>
            </div>
          </section>

          <section className="folio-project-section folio-project-tools-section">
            <div className="folio-project-section-head">
              <span className="folio-kicker">Built With</span>
            </div>

            <div className="folio-project-tool-cloud">
              {builtWith.map((tool) => (
                <span key={tool} className="folio-project-tool-pill">
                  {tool}
                </span>
              ))}
            </div>
          </section>
        </main>

        <div className="folio-product-bottom-bar">
          <a href="mailto:mw5333@nyu.edu">Email</a>
          <a href="https://www.linkedin.com/in/josephine-wang-4a8b872b0/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:mw5333@nyu.edu?subject=Resume%20Request">Resume</a>
        </div>
      </div>
    </PortfolioShell>
  )
}

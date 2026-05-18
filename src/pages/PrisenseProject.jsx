import { Link } from 'react-router-dom'
import PortfolioShell from '../components/PortfolioShell'
import './PageLayout.css'
import './ProductProject.css'
import './PrisenseProject.css'

const gapAnalysis = [
  {
    product: 'Oura Ring',
    what: 'Sleep quality tracking',
    gap: 'Passive but limited to sleep, with no emotional layer.',
  },
  {
    product: 'How We Feel',
    what: 'Mood check-in app',
    gap: 'Requires manual input and depends on user self-awareness.',
  },
  {
    product: 'Daylio / Moodfit',
    what: 'Mood logging',
    gap: 'Logging fatigue is the main dropout reason.',
  },
  {
    product: 'Emotions app',
    what: 'Emotion dictionary',
    gap: 'Educational only, with no real-time sensing.',
  },
  {
    product: 'Sensate 2',
    what: 'Vibration for anxiety relief',
    gap: 'Supports output only, without detection.',
  },
  {
    product: 'CGM',
    what: 'Continuous biometric tracking',
    gap: 'Medical-grade and clinically narrow, not designed for emotional awareness.',
  },
  {
    product: 'Komuso necklace',
    what: 'Breathing tool',
    gap: 'Behavioral guidance only, with no sensing layer.',
  },
]

const surveyStats = [
  '92.9% experience high social stress in interviews, performance, or close relationships.',
  '92.8% believe they understand their own emotions.',
  '57.1% frequently cannot explain where their emotions come from.',
  '92.9% say emotions affect how they perform in life.',
  '42.9% have experienced emotional outbursts.',
  '64.2% feel they cannot effectively regulate their emotions.',
  '100% want to better understand their emotions.',
  '100% are interested in emotion-visualization tools.',
  '57.1% are open to emotion visualization being automated or tech-enabled.',
]

const researchInsights = [
  'Young adults commonly experience emotional pressure in high-stakes social situations.',
  'Although most believe they understand their emotions, over half cannot explain where those emotions come from.',
  'Mixed emotions are common in pressure situations.',
  'Emotions directly affect performance.',
  'Many do not know how to regulate what they feel.',
  'Understanding often happens only after the moment has passed.',
  'Young adults are actively interested in emotion visualization tools.',
]

const problemStatements = [
  {
    label: 'UX',
    body: 'Young adults frequently experience complex emotions in high-pressure social situations, but lack tools that help them understand and regulate these emotions in real time.',
  },
  {
    label: 'Mental health',
    body: 'Young people often struggle to understand and manage their emotional responses during stressful social interactions.',
  },
  {
    label: 'Technology',
    body: 'Young people need a more intuitive way to understand their emotional states and patterns to improve emotional awareness and mental well-being.',
  },
  {
    label: 'Product',
    body: 'Young people lack accessible ways to visualize and interpret emotional signals, making regulation difficult.',
  },
  {
    label: 'Wearable',
    body: 'Young adults need subtle and intuitive tools that help them become more aware of their emotional states during daily life and important social situations.',
  },
]

const competitiveAnalysis = [
  {
    title: 'How We Feel',
    body: 'A free app built by scientists, designers, engineers, and therapists. Strong visual taxonomy and no ads, but still relies on repeated self-reporting.',
    note: 'User criticism: analysis views feel limited and sometimes irrelevant.',
  },
  {
    title: 'Emotions app',
    body: 'An emotion dictionary linked to neuroscience and education. Helpful for naming, but not for sensing in the moment.',
    note: 'Good educational model, weak live behavioral utility.',
  },
  {
    title: 'CGM',
    body: 'The closest analogue for passive physiological tracking: continuous, ambient, and behavior-shaping.',
    note: 'Strong precedent for passive sensing, but built for medical data rather than emotional ambiguity.',
  },
  {
    title: 'Sensate 2',
    body: 'A wearable aimed at stress relief through vibration and calm-down rituals.',
    note: 'Output-only; it soothes, but does not help users detect what is happening.',
  },
]

const personas = [
  {
    name: 'Marcus Reid',
    lens: 'Performance support',
    details: '21 · Junior at NYU Stern · Finance & Econ · GPA 3.6 · New York',
    goals:
      'Stay clear-headed in high-pressure interviews and understand when he starts to spiral.',
    frustrations:
      'He prepares well but performs inconsistently, and existing tools are too passive to help in the moment.',
    scenario:
      'During a finance interview, subtle heat and vibration help him recover before losing focus.',
    touchpoints: 'Live Status · Event Mode · Wearable',
  },
  {
    name: 'Sophia Wallace',
    lens: 'Emotional tracking',
    details: '20 · Sophomore at Columbia · Architecture · New York',
    goals:
      'Understand emotional patterns across a day without adding another manual habit.',
    frustrations:
      'She has no energy for journaling, and mood apps feel like homework.',
    scenario:
      'At night, the archive view helps her connect tension, relief, and drain across one ordinary day.',
    touchpoints: 'Live Status · Cube Visualization',
  },
  {
    name: 'Jason Chen',
    lens: 'Emotional validation',
    details: '27 · Product designer · Tech industry',
    goals:
      'Understand subtle feelings that do not match his outwardly stable life.',
    frustrations:
      'He often feels slightly off on objectively good days and cannot tell why.',
    scenario:
      'After a full Saturday, the system validates that something felt off even when life looked fine from the outside.',
    touchpoints: 'Onboarding · Archive / Pattern View · Cube Visualization',
  },
]

const onboardingDevice = [
  `Put on device — "Let's get you set up."`,
  `Guided breathing — "Now, just breathe."`,
  `Calm state confirmation — "There you are. We've found your calm."`,
  'Output calibration — vibration intensity and heat intensity.',
  'Confirm setup and enter Home.',
]

const onboardingInput = [
  `Frequent emotions — "What emotions visit you most?" Select up to 6 from 24 options.`,
  `Rare emotions — "And what feels furthest from you?"`,
  'Example-image scenario scoring.',
  'Why are you here? Learn my emotion / emotional validation / improve stress handling / other.',
  `"Your emotional range is uniquely yours."`,
]

export default function PrisenseProject() {
  return (
    <PortfolioShell>
      <div className="folio-page folio-project-page folio-project-page-prisense">
        <main className="folio-main">
          <Link to="/product" className="folio-project-back folio-project-back-standalone">
            Back to Product / Design
          </Link>

          <section className="folio-project-hero folio-project-hero-prisense">
            <div className="folio-project-intro">
              <span className="folio-kicker">FigBuild 2026</span>
              <h1>Prisense</h1>
              <p className="folio-project-subtitle">Speculative emotional sensing system</p>
            </div>

            <div className="folio-project-hero-lower">
              <div className="folio-project-competition">
                <span className="folio-meta-label">Prompt</span>
                <p>
                  A 72hrs FigBuild challenge to design a speculative tool that can track and
                  influence an intangible, invisible, or previously unmeasurable part of human
                  sensory experience in support of wellness and behavior change.
                </p>

                <span className="folio-meta-label">Project frame</span>
                <p>
                  A speculative hackathon project imagining a wearable and companion app that
                  helps young adults perceive emotional signals that usually remain invisible,
                  ambiguous, and hard to name in the moment.
                </p>
              </div>

              <div className="folio-project-meta folio-project-meta-three">
                <div>
                  <span className="folio-meta-label">Focus</span>
                  <p>Speculative design / Emotional wellness / Wearable UX / Reflective systems</p>
                </div>
                <div>
                  <span className="folio-meta-label">Team</span>
                  <p>Josephine, Astrid, Amy, Claire</p>
                </div>
              </div>
            </div>
          </section>

          <section className="folio-project-section">
            <div className="folio-project-section-head">
              <span className="folio-kicker">Second-hand research</span>
              <h2>Existing tools can log, teach, soothe, or measure, but none close the loop on real-time emotional self-awareness.</h2>
            </div>

            <div className="folio-project-card folio-prisense-table-card">
              <div className="folio-prisense-table-wrap">
                <table className="folio-prisense-table">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>What it does</th>
                      <th>Key gap</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gapAnalysis.map((row) => (
                      <tr key={row.product}>
                        <td>{row.product}</td>
                        <td>{row.what}</td>
                        <td>{row.gap}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="folio-project-grid two-up folio-project-grid-compact">
              <article className="folio-project-card">
                <span className="folio-meta-label">The manual burden gap</span>
                <p>
                  Most emotional tools require users to remember to log. Fatigue becomes the
                  main reason they stop returning.
                </p>
              </article>

              <article className="folio-project-card">
                <span className="folio-meta-label">The subjectivity gap</span>
                <p>
                  Many tools assume users already know how they feel, even though low
                  interoception often leads people to mislabel states like anxiety, exhaustion,
                  overstimulation, or caffeine crashes.
                </p>
              </article>
            </div>
          </section>

          <section className="folio-project-section">
            <div className="folio-project-section-head">
              <span className="folio-kicker">Primary research</span>
              <h2>Survey data showed a strong appetite for emotional clarity, especially in high-pressure social situations.</h2>
            </div>

            <div className="folio-prisense-research-layout">
              <article className="folio-project-card folio-prisense-sample-card">
                <span className="folio-meta-label">Sample</span>
                <div className="folio-prisense-sample-image-wrap">
                  <img
                    className="folio-prisense-sample-image"
                    src="/projects/prisense-assets/survey-sample.png"
                    alt="Emotional Awareness and Social Emotion Survey intro screen"
                  />
                </div>
              </article>

              <article className="folio-project-card folio-prisense-survey-stat-card">
                <span className="folio-meta-label">Key data points</span>
                <ul className="folio-prisense-stat-list">
                  {surveyStats.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="folio-project-card folio-prisense-research-full">
                <span className="folio-meta-label">7 key insights</span>
                <ol className="folio-prisense-insight-list">
                  {researchInsights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </article>

              <article className="folio-project-card folio-prisense-research-full">
                <span className="folio-meta-label">Problem statement directions</span>
                <div className="folio-prisense-statement-list folio-prisense-statement-list-plain">
                  {problemStatements.map((statement) => (
                    <article key={statement.label} className="folio-prisense-statement-row folio-prisense-statement-row-plain">
                      <strong>{statement.label}</strong>
                      <p>{statement.body}</p>
                    </article>
                  ))}
                </div>
              </article>
            </div>
          </section>

          <section className="folio-project-section">
            <div className="folio-project-section-head">
              <span className="folio-kicker">Competitive analysis</span>
              <h2>The category already has strong fragments. The missing piece is a system that can sense, interpret, and respond in the moment.</h2>
            </div>

            <div className="folio-project-grid two-up folio-project-grid-compact">
              {competitiveAnalysis.map((item) => (
                <article key={item.title} className="folio-project-card">
                  <span className="folio-meta-label">{item.title}</span>
                  <p>{item.body}</p>
                  <p>{item.note}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="folio-project-section">
            <div className="folio-project-section-head">
              <span className="folio-kicker">Meet Prisense</span>
              <h2>Prisense = Prism + Sense.</h2>
            </div>

            {/* Concept — Prism + Sense */}
            <div className="folio-project-card folio-prisense-meet-card">
              <div className="folio-prisense-meet-intro">
                <p className="folio-prisense-meet-lead">A prism doesn't create color. It reveals what was always there.</p>
                <p>Prisense doesn't create emotion. It reveals what your body already knows.</p>
              </div>
              <div className="folio-prisense-concept-cols">
                <div className="folio-prisense-meet-textblock">
                  <h3>Prism</h3>
                  <p>
                    Light passes through a prism and refracts into a visible spectrum
                    — making the invisible, visible. We borrowed this as our central
                    metaphor: your physiological signals are the light. Prisense is the
                    prism. The output is clarity.
                  </p>
                </div>
                <div className="folio-prisense-meet-textblock">
                  <h3>Sense</h3>
                  <p>
                    Not just "sensor." A new sense entirely. Affective Resonance
                    Awareness — the ability to perceive your own complex emotional
                    state as it happens, in real time, grounded in biology.
                  </p>
                </div>
              </div>
            </div>

            {/* Hardware + App — merged into one cohesive card */}
            <div className="folio-project-card folio-prisense-meet-card folio-prisense-objects-card">
              <p className="folio-prisense-meet-tagline">Two Objects. One System.</p>

              {/* Row 1 — Wearable: images left, specs right (unchanged) */}
              <div className="folio-prisense-objects-body">
                <div className="folio-prisense-objects-images">
                  <div className="folio-prisense-object-img-wrap">
                    <img
                      src="/projects/prisense-assets/meet-object.png"
                      alt="Prisense bracelet product photo"
                    />
                  </div>
                  <div className="folio-prisense-object-img-wrap">
                    <img
                      src="/projects/prisense-assets/meet-model.png"
                      alt="Prisense wearable necklace"
                    />
                  </div>
                </div>
                <div className="folio-prisense-objects-block">
                  <span className="folio-prisense-meet-chip">Discrete Wearable Necklace</span>
                  <div className="folio-prisense-meet-system-copy">
                    <p><strong>Passively and continuously senses:</strong></p>
                    <p>Dopamine · Serotonin · Endorphins · Oxytocin · Adrenaline · Cortisol</p>
                    <p><strong>Inferred from:</strong></p>
                    <p>Heart rate variability · Skin conductance · Skin temperature · Breathing rhythm</p>
                    <p><strong>Outputs:</strong></p>
                    <p>Gentle heat conduction when emotion exceeds calm baseline. Haptic vibration to guide breathing back to HRV baseline.</p>
                  </div>
                </div>
              </div>

              <div className="folio-prisense-objects-divider" />

              {/* Row 2 — Companion App: text left, screens right */}
              <div className="folio-prisense-app-row">
                <div className="folio-prisense-objects-block">
                  <span className="folio-prisense-meet-chip">Companion App</span>
                  <p className="folio-prisense-meet-modes-copy">
                    Four modes, one purpose: to make your emotional data beautiful, intuitive, and yours. Designed to support, not distract.
                  </p>
                  <div className="folio-prisense-meet-modes">
                    <p><strong>Onboarding</strong> — Personal adjustment and threshold</p>
                    <p><strong>Home</strong> — Real-time emotional visualization</p>
                    <p><strong>Event</strong> — In-the-moment regulation, minimal UI</p>
                    <p><strong>Archive</strong> — Long-term pattern reflection</p>
                  </div>
                </div>
                <div className="folio-prisense-app-screens">
                  <div className="folio-prisense-meet-strip-card">
                    <img src="/projects/prisense-assets/meet-onboarding.png" alt="Prisense onboarding flow screen" />
                    <span>Onboarding</span>
                  </div>
                  <div className="folio-prisense-meet-strip-card">
                    <img src="/projects/prisense-assets/meet-home.png" alt="Prisense home visualization screen" />
                    <span>Home</span>
                  </div>
                  <div className="folio-prisense-meet-strip-card">
                    <img src="/projects/prisense-assets/meet-event.png" alt="Prisense event mode screen" />
                    <span>Event</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="folio-project-section">
            <div className="folio-project-section-head">
              <span className="folio-kicker">Personas</span>
            </div>

            <div className="folio-prisense-persona-grid">
              {personas.map((persona) => (
                <article key={persona.name} className="folio-project-card folio-prisense-persona-card">
                  <header className="folio-prisense-persona-header">
                    <span className="folio-meta-label">{persona.lens}</span>
                    <h3 className="folio-prisense-persona-name">{persona.name}</h3>
                    <p className="folio-prisense-persona-details">{persona.details}</p>
                  </header>
                  <dl className="folio-prisense-persona-dl">
                    <div className="folio-prisense-persona-row">
                      <dt>Goals</dt>
                      <dd>{persona.goals}</dd>
                    </div>
                    <div className="folio-prisense-persona-row">
                      <dt>Frustrations</dt>
                      <dd>{persona.frustrations}</dd>
                    </div>
                    <div className="folio-prisense-persona-row">
                      <dt>Scenario</dt>
                      <dd>{persona.scenario}</dd>
                    </div>
                    <div className="folio-prisense-persona-row">
                      <dt>Touchpoints</dt>
                      <dd>{persona.touchpoints}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </section>

          <section className="folio-project-section">
            <div className="folio-project-section-head">
              <span className="folio-kicker">Site map</span>
            </div>

            <div className="folio-project-card folio-prisense-sitemap-card">
              <div className="folio-prisense-sitemap-home">HOME</div>

              <div className="folio-prisense-sitemap-grid">
                <div className="folio-prisense-sitemap-col folio-prisense-sitemap-col-onboarding">
                  <div className="folio-prisense-sitemap-block folio-prisense-sitemap-block-root">
                    0. Onboarding
                  </div>
                  <div className="folio-prisense-sitemap-stack">
                    <div className="folio-prisense-sitemap-block folio-prisense-sitemap-block-main">
                      Questionnaire
                    </div>
                    <div className="folio-prisense-sitemap-block folio-prisense-sitemap-block-main">
                      Device Connection
                    </div>
                    <div className="folio-prisense-sitemap-block folio-prisense-sitemap-block-main">
                      Calibration
                    </div>
                  </div>
                </div>

                <div className="folio-prisense-sitemap-col">
                  <div className="folio-prisense-sitemap-block folio-prisense-sitemap-block-section">
                    Home
                  </div>
                  <div className="folio-prisense-sitemap-stack">
                    <div className="folio-prisense-sitemap-block folio-prisense-sitemap-block-main">
                      Wearable
                    </div>
                    <div className="folio-prisense-sitemap-row">
                      <div className="folio-prisense-sitemap-block folio-prisense-sitemap-block-main">
                        Live status
                      </div>
                      <div className="folio-prisense-sitemap-connector" />
                      <div className="folio-prisense-sitemap-block folio-prisense-sitemap-block-detail">
                        Output data visualization
                      </div>
                    </div>
                    <div className="folio-prisense-sitemap-row folio-prisense-sitemap-row-top">
                      <div className="folio-prisense-sitemap-block folio-prisense-sitemap-block-main">
                        Core Features
                      </div>
                      <div className="folio-prisense-sitemap-detail-stack">
                        <div className="folio-prisense-sitemap-inline">
                          <div className="folio-prisense-sitemap-connector" />
                          <div className="folio-prisense-sitemap-block folio-prisense-sitemap-block-detail folio-prisense-sitemap-block-detail-small">
                            Event
                          </div>
                        </div>
                        <div className="folio-prisense-sitemap-inline">
                          <div className="folio-prisense-sitemap-connector folio-prisense-sitemap-connector-diagonal" />
                          <div className="folio-prisense-sitemap-block folio-prisense-sitemap-block-detail folio-prisense-sitemap-block-detail-small">
                            Archive
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="folio-prisense-sitemap-col">
                  <div className="folio-prisense-sitemap-block folio-prisense-sitemap-block-section">
                    Event
                  </div>
                  <div className="folio-prisense-sitemap-stack">
                    <div className="folio-prisense-sitemap-row">
                      <div className="folio-prisense-sitemap-block folio-prisense-sitemap-block-main">
                        Spectrum
                      </div>
                      <div className="folio-prisense-sitemap-connector" />
                      <div className="folio-prisense-sitemap-block folio-prisense-sitemap-block-detail">
                        Time stamp emotional state
                      </div>
                    </div>
                    <div className="folio-prisense-sitemap-row">
                      <div className="folio-prisense-sitemap-block folio-prisense-sitemap-block-main">
                        Event List
                      </div>
                      <div className="folio-prisense-sitemap-connector" />
                      <div className="folio-prisense-sitemap-block folio-prisense-sitemap-block-detail">
                        Upcoming / Recording / Finished
                      </div>
                    </div>
                    <div className="folio-prisense-sitemap-block folio-prisense-sitemap-block-main">
                      Add Event
                    </div>
                    <div className="folio-prisense-sitemap-row">
                      <div className="folio-prisense-sitemap-block folio-prisense-sitemap-block-main">
                        View Finished Event
                      </div>
                      <div className="folio-prisense-sitemap-connector" />
                      <div className="folio-prisense-sitemap-block folio-prisense-sitemap-block-detail">
                        Emotional state name + Hormone %
                      </div>
                    </div>
                    <div className="folio-prisense-sitemap-block folio-prisense-sitemap-block-main">
                      Upcoming event notification
                    </div>
                  </div>
                </div>

                <div className="folio-prisense-sitemap-col">
                  <div className="folio-prisense-sitemap-block folio-prisense-sitemap-block-section">
                    Archive
                  </div>
                  <div className="folio-prisense-sitemap-stack">
                    <div className="folio-prisense-sitemap-block folio-prisense-sitemap-block-main">
                      Cube
                    </div>
                    <div className="folio-prisense-sitemap-block folio-prisense-sitemap-block-main">
                      Calendar
                    </div>
                    <div className="folio-prisense-sitemap-block folio-prisense-sitemap-block-main">
                      Summary
                    </div>
                    <div className="folio-prisense-sitemap-block folio-prisense-sitemap-block-main">
                      Setting
                    </div>
                    <div className="folio-prisense-sitemap-row">
                      <div className="folio-prisense-sitemap-block folio-prisense-sitemap-block-main">
                        Report / Help
                      </div>
                      <div className="folio-prisense-sitemap-connector" />
                      <div className="folio-prisense-sitemap-block folio-prisense-sitemap-block-detail folio-prisense-sitemap-block-detail-small folio-prisense-sitemap-block-detail-recalibration">
                        Re-calibration
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="folio-project-section">
            <div className="folio-project-section-head">
              <span className="folio-kicker">Onboarding flow</span>
            </div>

            <div className="folio-prisense-onboarding-flow">
              {[
                '/projects/prisense-assets/onboarding/onboarding-1.png',
                '/projects/prisense-assets/onboarding/onboarding-2.png',
                '/projects/prisense-assets/onboarding/onboarding-3.png',
                '/projects/prisense-assets/onboarding/onboarding-4.png',
                '/projects/prisense-assets/onboarding/onboarding-5.png',
              ].map((src, index) => (
                <article key={src} className="folio-project-card folio-prisense-onboarding-card">
                  <img
                    src={src}
                    alt={`Prisense onboarding screen ${index + 1}`}
                    className="folio-prisense-onboarding-image"
                  />
                </article>
              ))}
            </div>
          </section>

          {/* ── Core App Screens ──────────────────────────────────── */}
          <section className="folio-project-section">
            <div className="folio-project-section-head">
              <span className="folio-kicker">App screens</span>
              <h2 className="folio-section-title">Core Experience</h2>
            </div>

            <div className="folio-prisense-appflow-grid">
              {[
                { src: '/projects/prisense-assets/flow/screen-home.png',     label: 'Today',     sub: 'Today\'s emotional state' },
                { src: '/projects/prisense-assets/flow/screen-event.png',    label: 'Event',     sub: 'Live spectrum view' },
                { src: '/projects/prisense-assets/flow/screen-archive.png',  label: 'Archive',   sub: 'Cube + weekly summary' },
                { src: '/projects/prisense-assets/flow/screen-calendar.png', label: 'Calendar',  sub: 'Monthly & grid view' },
                { src: '/projects/prisense-assets/flow/screen-settings.png', label: 'Settings',  sub: 'Preferences' },
              ].map(({ src, label, sub }) => (
                <article key={label} className="folio-project-card folio-prisense-appflow-card">
                  <img
                    src={src}
                    alt={`Prisense ${label} screen`}
                    className="folio-prisense-appflow-image"
                  />
                  <div className="folio-prisense-appflow-meta">
                    <span className="folio-prisense-appflow-label">{label}</span>
                    <span className="folio-prisense-appflow-sub">{sub}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ── Create Event Flow ─────────────────────────────────── */}
          <section className="folio-project-section">
            <div className="folio-project-section-head">
              <span className="folio-kicker">User flow</span>
              <h2 className="folio-section-title">Create Event</h2>
            </div>

            <div className="folio-prisense-eventflow-wrap">
              {[
                { src: '/projects/prisense-assets/flow/event-1.png', step: '01', label: 'Event list' },
                { src: '/projects/prisense-assets/flow/event-2.png', step: '02', label: 'Add Event' },
                { src: '/projects/prisense-assets/flow/event-3.png', step: '03', label: 'Confirmed' },
                { src: '/projects/prisense-assets/flow/event-4.png', step: '04', label: 'Countdown' },
                { src: '/projects/prisense-assets/flow/event-5.png', step: '05', label: 'Cancel?' },
                { src: '/projects/prisense-assets/flow/event-6.png', step: '06', label: 'Finished' },
              ].map(({ src, step, label }, i, arr) => (
                <div key={step} className="folio-prisense-eventflow-item">
                  <article className="folio-project-card folio-prisense-appflow-card folio-prisense-eventflow-card">
                    <img
                      src={src}
                      alt={`Create Event step ${step} – ${label}`}
                      className="folio-prisense-appflow-image"
                    />
                    <div className="folio-prisense-appflow-meta">
                      <span className="folio-prisense-appflow-step">{step}</span>
                      <span className="folio-prisense-appflow-label">{label}</span>
                    </div>
                  </article>
                  {i < arr.length - 1 && (
                    <div className="folio-prisense-eventflow-arrow" aria-hidden="true">→</div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* ── Interactive Prototype ─────────────────────────────── */}
          <section className="folio-project-section">
            <div className="folio-project-section-head">
              <span className="folio-kicker">Interactive prototype</span>
              <h2 className="folio-section-title">Try it yourself</h2>
            </div>

            <article className="folio-project-card folio-prisense-proto-card">
              <div className="folio-prisense-proto-phone">
                <iframe
                  src="https://east-email-38736688.figma.site"
                  className="folio-prisense-proto-iframe"
                  title="Prisense interactive prototype"
                />
              </div>
            </article>
          </section>

        </main>
      </div>
    </PortfolioShell>
  )
}

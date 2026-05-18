import { Link } from 'react-router-dom'
import PortfolioShell from '../components/PortfolioShell'
import './PageLayout.css'
import './ProductProject.css'
import './FudgetProject.css'

const testingTakeaways = [
  'The pig mascot was universally loved and made the product feel more approachable and distinct.',
  'Spending breakdowns, budget tracking, and statistics were consistently seen as the most valuable utility.',
  'Users were confused by overlap between home, wallet, budget, and goals, so hierarchy and naming need to stay very clear.',
  'Social features were polarizing in public but stronger in private or practical contexts like splitting costs and friend requests.',
  'Users wanted AI to be proactive with alerts and insights, not just a passive chat box they have to initiate.',
]

export default function FudgetProject() {
  return (
    <PortfolioShell>
      <div className="folio-page folio-project-page folio-project-page-fudget">
        <main className="folio-main">
          <Link to="/product" className="folio-project-back folio-project-back-standalone">
            Back to Product / Design
          </Link>

          <section className="folio-project-hero folio-project-hero-fudget">
            <div className="folio-project-intro">
              <span className="folio-kicker">Spring 2026</span>
              <h1>Fudget</h1>
              <p className="folio-project-subtitle">Social budgeting app</p>
            </div>

            <div className="folio-project-hero-lower">
              <div className="folio-project-competition">
                <span className="folio-meta-label">Project frame</span>
                <p>
                  A UX design class project imagining a budgeting app for young adults <br />
                  who find traditional finance tools too cold, too stressful, or too hard to return to.
                </p>
              </div>

              <div className="folio-project-meta">
                <div>
                  <span className="folio-meta-label">Focus</span>
                  <p>Fintech UX / Information architecture / Social features / Mobile systems</p>
                </div>
                <div>
                  <span className="folio-meta-label">Team</span>
                  <p className="folio-fudget-team-line">Josephine / Joanna / Killian / Nora</p>
                </div>
              </div>

              <div className="folio-project-actions">
                <a
                  href="https://www.figma.com/deck/3CtmSU6vrUXJKWYbho7gZ7/Fudget---Final-Presentation?node-id=1-528"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open deck
                </a>
              </div>
            </div>
          </section>

          <section className="folio-project-section">
            <div className="folio-project-section-head">
              <span className="folio-kicker">Problem</span>
              <h2>Young adults know they should manage money better. They often avoid the apps meant to help.</h2>
            </div>

            <div className="folio-project-grid two-up folio-project-grid-compact">
              <article className="folio-project-card">
                <span className="folio-meta-label">Observed tension</span>
                <p>
                  Existing finance tools feel institutional, corrective, or overwhelming. For an
                  anxious first-time user, even opening a bank app can trigger avoidance.
                </p>
              </article>
              <article className="folio-project-card">
                <span className="folio-meta-label">Design question</span>
                <p>
                  How might budgeting feel more supportive, social, and motivating without losing
                  clarity or trust?
                </p>
              </article>
            </div>
          </section>

          <section className="folio-project-section">
            <div className="folio-project-section-head folio-project-section-head-compact">
              <span className="folio-kicker">Persona</span>
            </div>

            <div className="folio-fudget-persona">
              <div className="folio-fudget-persona-copy">
                <span className="folio-meta-label">Meet Maya</span>
                <div className="folio-fudget-persona-hero">
                  <img
                    src="/projects/fudget-assets/persona-maya.png"
                    alt="Maya persona reference"
                    className="folio-fudget-persona-image"
                  />
                  <h3>&ldquo;I&apos;m honestly scared of what I&apos;m gonna see when I open my bank app.&rdquo;</h3>
                </div>
                <p>
                  Maya is navigating early financial independence with high anxiety and low
                  financial literacy. She expects digital tools to be intuitive, cashless, and
                  zero-learning-curve.
                </p>
              </div>

              <div className="folio-fudget-persona-side">
                <span className="folio-meta-label">Maya&apos;s experience</span>
                <img
                  src="/projects/fudget-assets/maya-storyboard.png"
                  alt="Storyboard showing Maya's experience from financial confusion to feeling in control"
                  className="folio-fudget-persona-storyboard"
                />
              </div>
            </div>

            <div className="folio-fudget-persona-points folio-fudget-persona-points-row">
              <div>
                <strong>Core goals</strong>
                <p>Break the paycheck-to-paycheck cycle, build a safety net, and feel more independent.</p>
              </div>
              <div>
                <strong>Pain points</strong>
                <p>Bank avoidance, intimidating language, and budgeting tools that feel clinical or tedious.</p>
              </div>
              <div>
                <strong>Habits</strong>
                <p>Cashless spending, impulsive stress purchases, and financial advice gathered from social media.</p>
              </div>
            </div>
          </section>

          <section className="folio-project-section">
            <div className="folio-project-section-head folio-project-section-head-compact">
              <span className="folio-kicker">Landscape analysis</span>
            </div>

            <div className="folio-fudget-competitive-grid">
              <article className="folio-project-card folio-fudget-competitive-card">
                <img
                  src="/projects/fudget-assets/competitive-rocket-money.png"
                  alt="Rocket Money app reference"
                  className="folio-fudget-competitive-image"
                />
                <div className="folio-fudget-competitive-copy">
                  <h3>Rocket Money</h3>
                  <p>Corrective</p>
                </div>
              </article>

              <article className="folio-project-card folio-fudget-competitive-card">
                <img
                  src="/projects/fudget-assets/competitive-cash-app.png"
                  alt="Cash App reference"
                  className="folio-fudget-competitive-image"
                />
                <div className="folio-fudget-competitive-copy">
                  <h3>Cash App</h3>
                  <p>Casual but unclear</p>
                </div>
              </article>

              <article className="folio-project-card folio-fudget-competitive-card">
                <img
                  src="/projects/fudget-assets/competitive-bofa.png"
                  alt="Bank of America app reference"
                  className="folio-fudget-competitive-image"
                />
                <div className="folio-fudget-competitive-copy">
                  <h3>Bank of America</h3>
                  <p>Institutional + cold</p>
                </div>
              </article>
            </div>
          </section>

          <section className="folio-project-section">
            <div className="folio-project-section-head folio-project-section-head-compact">
              <span className="folio-kicker">User journey</span>
            </div>

            <div className="folio-fudget-journey-card">
              <img
                src="/projects/fudget-assets/user-journey.png"
                alt="Maya user journey mapping moments of financial anxiety during a night out"
                className="folio-fudget-journey-image"
              />
            </div>
          </section>

          <section className="folio-project-section">
            <div className="folio-project-section-head folio-project-section-head-nowrap">
              <span className="folio-kicker">Concept</span>
              <h2>Finance that feels more like support than surveillance.</h2>
            </div>

            <div className="folio-fudget-concept-stage">
              <div className="folio-fudget-concept-column folio-fudget-concept-column-left">
                <h3>meet FUDGET</h3>
                <p className="folio-fudget-concept-lead">
                  A social budgeting app for Gen Z that knows their worth.
                </p>

                <div className="folio-fudget-concept-note">
                  <strong>Prioritize your wins over stresses.</strong>
                  <p>
                    Fudget greets you with how much you&apos;re saving rather than a daunting
                    balance figure.
                  </p>
                </div>

                <div className="folio-fudget-concept-note">
                  <strong>All your finances, all at your fingertips.</strong>
                  <p>
                    Fudget lets you manage how you spend and what you spend on all in one place,
                    so you never have to lose track over multiple apps.
                  </p>
                </div>
              </div>

              <div className="folio-fudget-concept-phone-wrap">
                <img
                  src="/projects/fudget-assets/concept-phone.png"
                  alt="Fudget home screen shown on a phone mockup"
                  className="folio-fudget-concept-phone"
                />
              </div>

              <div className="folio-fudget-concept-column folio-fudget-concept-column-right">
                <div className="folio-fudget-concept-pillar">
                  <strong>Friendly</strong>
                  <p>Approachable, not clinical.</p>
                </div>

                <div className="folio-fudget-concept-pillar">
                  <strong>Smart</strong>
                  <p>Insights that meet you where you are.</p>
                </div>

                <div className="folio-fudget-concept-pillar">
                  <strong>Social</strong>
                  <p>Budget with friends, not just beside them.</p>
                </div>

                <ul className="folio-fudget-concept-list">
                  <li>Track spending, set goals, and share with friends.</li>
                  <li>AI that warns you before you overspend.</li>
                  <li>Finance that actually feels like it&apos;s on your side.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="folio-project-section">
            <div className="folio-project-section-head folio-project-section-head-compact">
              <span className="folio-kicker">Sitemap</span>
            </div>

            <div className="folio-fudget-sitemap-card">
              <img
                src="/projects/fudget-assets/sitemap.png"
                alt="Fudget sitemap showing Home, Wallet, Social, and Account sections"
                className="folio-fudget-sitemap-image"
              />
            </div>
          </section>

          <section className="folio-project-section" id="design-system">
            <div className="folio-project-section-head">
              <span className="folio-kicker">Design system</span>
              <h2>Mint, violet, rounded glass, and a mascot-led voice make the product feel less institutional.</h2>
            </div>

            <div className="folio-fudget-system-row">
              <article className="folio-design-panel">
                <span className="folio-meta-label">Palette</span>
                <div className="folio-fudget-palette-grid">
                  <div className="folio-fudget-palette-item">
                    <span className="folio-fudget-swatch folio-fudget-swatch-mint" />
                    <p>#6EFFA1</p>
                  </div>
                  <div className="folio-fudget-palette-item">
                    <span className="folio-fudget-swatch folio-fudget-swatch-violet" />
                    <p>#272665</p>
                  </div>
                  <div className="folio-fudget-palette-item">
                    <span className="folio-fudget-swatch folio-fudget-swatch-orange" />
                    <p>#FF6A1A</p>
                  </div>
                  <div className="folio-fudget-palette-item">
                    <span className="folio-fudget-swatch folio-fudget-swatch-cyan" />
                    <p>#1CCBEE</p>
                  </div>
                </div>
              </article>

              <article className="folio-design-panel">
                <span className="folio-meta-label">Typography</span>
                <div className="folio-fudget-type-panel">
                  <p>Unbounded Black or Bold for headings and highlighted info.</p>
                  <p>Sora Bold or Semi-Bold for general info and secondary info.</p>
                  <p>All lowercase for most headings to lend approachability, except for names.</p>
                </div>
              </article>

              <article className="folio-design-panel">
                <span className="folio-meta-label">Widgets</span>
                <div className="folio-fudget-widget-row">
                  <img
                    src="/projects/fudget-assets/widget-green.png"
                    alt="Green widget treatment"
                    className="folio-fudget-system-image"
                  />
                  <img
                    src="/projects/fudget-assets/widget-violet.png"
                    alt="Violet widget treatment"
                    className="folio-fudget-system-image"
                  />
                  <img
                    src="/projects/fudget-assets/widget-orange.png"
                    alt="Orange widget treatment"
                    className="folio-fudget-system-image"
                  />
                  <img
                    src="/projects/fudget-assets/widget-cyan.png"
                    alt="Cyan widget treatment"
                    className="folio-fudget-system-image"
                  />
                </div>
              </article>

              <article className="folio-design-panel">
                <span className="folio-meta-label">Tabs</span>
                <div className="folio-fudget-tabs-panel">
                  <img
                    src="/projects/fudget-assets/tab-bar.png"
                    alt="Fudget tab bar"
                    className="folio-fudget-system-image"
                  />
                  <img
                    src="/projects/fudget-assets/tab-spec.png"
                    alt="Tab label states"
                    className="folio-fudget-system-image folio-fudget-system-image-tab-spec"
                  />
                </div>
              </article>
            </div>
          </section>

          <section className="folio-project-section">
            <div className="folio-project-section-head folio-project-section-head-compact">
              <span className="folio-kicker">Design iteration tests</span>
              <p className="folio-fudget-iteration-note">
                Three designers explored the same community feature in parallel to push the
                direction wider before narrowing the system.
              </p>
            </div>

            <div className="folio-fudget-iteration-grid">
              <div className="folio-fudget-iteration-group">
                <div className="folio-fudget-iteration-phones">
                  <img src="/projects/fudget-assets/community-joanna-1.png" alt="Joanna community feature screen 1" className="folio-fudget-iteration-phone" />
                  <img src="/projects/fudget-assets/community-joanna-2.png" alt="Joanna community feature screen 2" className="folio-fudget-iteration-phone" />
                  <img src="/projects/fudget-assets/community-joanna-3.png" alt="Joanna community feature screen 3" className="folio-fudget-iteration-phone" />
                </div>
                <p>Joanna&apos;s community feature</p>
              </div>

              <div className="folio-fudget-iteration-group">
                <div className="folio-fudget-iteration-phones">
                  <img src="/projects/fudget-assets/community-josephine-1.png" alt="Josephine community feature screen 1" className="folio-fudget-iteration-phone" />
                  <img src="/projects/fudget-assets/community-josephine-2.png" alt="Josephine community feature screen 2" className="folio-fudget-iteration-phone" />
                  <img src="/projects/fudget-assets/community-josephine-3.png" alt="Josephine community feature screen 3" className="folio-fudget-iteration-phone" />
                </div>
                <p>Josephine&apos;s community feature</p>
              </div>

              <div className="folio-fudget-iteration-group">
                <div className="folio-fudget-iteration-phones">
                  <img src="/projects/fudget-assets/community-killian-1.png" alt="Killian community feature screen 1" className="folio-fudget-iteration-phone" />
                  <img src="/projects/fudget-assets/community-killian-2.png" alt="Killian community feature screen 2" className="folio-fudget-iteration-phone" />
                  <img src="/projects/fudget-assets/community-killian-3.png" alt="Killian community feature screen 3" className="folio-fudget-iteration-phone" />
                </div>
                <p>Killian&apos;s community feature</p>
              </div>
            </div>
          </section>

          <section className="folio-project-section">
            <div className="folio-project-section-head folio-project-section-head-compact">
              <span className="folio-kicker">High-fi flows</span>
            </div>

            <div className="folio-fudget-hi-fi-flows">
              <div className="folio-fudget-hi-fi-row">
                <article className="folio-project-card folio-fudget-hi-fi-card folio-fudget-hi-fi-card-flow">
                  <span className="folio-meta-label">Wallet flow</span>
                  <div className="folio-fudget-hi-fi-strip folio-fudget-hi-fi-strip-wallet">
                    <img src="/projects/fudget-assets/flows/wallet-0.png" alt="Wallet flow screen 1" className="folio-fudget-hi-fi-phone" />
                    <img src="/projects/fudget-assets/flows/wallet-1.png" alt="Wallet flow screen 2" className="folio-fudget-hi-fi-phone" />
                    <img src="/projects/fudget-assets/flows/wallet-2.png" alt="Wallet flow screen 3" className="folio-fudget-hi-fi-phone" />
                    <img src="/projects/fudget-assets/flows/wallet-3.png" alt="Wallet flow screen 4" className="folio-fudget-hi-fi-phone" />
                    <img src="/projects/fudget-assets/flows/wallet-4.png" alt="Wallet flow screen 5" className="folio-fudget-hi-fi-phone" />
                    <img src="/projects/fudget-assets/flows/wallet-5.png" alt="Wallet flow screen 6" className="folio-fudget-hi-fi-phone" />
                    <img src="/projects/fudget-assets/flows/wallet-6.png" alt="Wallet flow screen 7" className="folio-fudget-hi-fi-phone" />
                  </div>
                </article>
              </div>

              <div className="folio-fudget-hi-fi-row">
                <article className="folio-project-card folio-fudget-hi-fi-card folio-fudget-hi-fi-card-flow">
                  <span className="folio-meta-label">Community flow</span>
                  <div className="folio-fudget-hi-fi-strip folio-fudget-hi-fi-strip-community">
                    <img src="/projects/fudget-assets/flows/community-0.png" alt="Community flow screen 1" className="folio-fudget-hi-fi-phone" />
                    <img src="/projects/fudget-assets/flows/community-1.png" alt="Community flow screen 2" className="folio-fudget-hi-fi-phone" />
                    <img src="/projects/fudget-assets/flows/community-2.png" alt="Community flow screen 3" className="folio-fudget-hi-fi-phone" />
                    <img src="/projects/fudget-assets/flows/community-3.png" alt="Community flow screen 4" className="folio-fudget-hi-fi-phone" />
                    <img src="/projects/fudget-assets/flows/community-4.png" alt="Community flow screen 5" className="folio-fudget-hi-fi-phone" />
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section className="folio-project-section">
            <div className="folio-project-section-head folio-project-section-head-compact">
              <span className="folio-kicker">Additional features</span>
            </div>

            <div className="folio-fudget-additional-grid">
              <article className="folio-project-card folio-fudget-additional-card">
                <span className="folio-meta-label">AI chatbox</span>
                <img
                  src="/projects/fudget-assets/additional-aichat.png"
                  alt="Fudget AI chatbox feature"
                  className="folio-fudget-additional-image"
                />
              </article>

              <article className="folio-project-card folio-fudget-additional-card">
                <span className="folio-meta-label">Biometric required</span>
                <img
                  src="/projects/fudget-assets/additional-faceid.png"
                  alt="Fudget Face ID authentication state"
                  className="folio-fudget-additional-image"
                />
              </article>
            </div>
          </section>

          <section className="folio-project-section">
            <div className="folio-project-section-head folio-project-section-head-compact">
              <span className="folio-kicker">Interactive prototype</span>
            </div>

            <div className="folio-fudget-prototype-embed">
              <iframe
                title="Fudget prototype"
                src="https://embed.figma.com/proto/RVrg9hT5rvfCHRokg9Ig9M/UX-DESIGN?node-id=541-9077&p=f&viewport=-150%2C-16%2C0.35&scaling=scale-down&content-scaling=fixed&starting-point-node-id=541%3A9077&page-id=518%3A3115&embed-host=share"
                allowFullScreen
              />
            </div>
          </section>

          <section className="folio-project-section">
            <div className="folio-project-section-head folio-project-section-head-compact">
              <span className="folio-kicker">User testing insights</span>
            </div>

            <div className="folio-fudget-testing-row">
              {testingTakeaways.map((item) => (
                <article key={item} className="folio-project-card">
                  <p>{item}</p>
                </article>
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

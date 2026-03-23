import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import './Home.css'

const works = [
  {
    id: '01',
    title: 'Product · UX',
    tags: 'UI/UX Design · UX Research',
    to: '/product',
    cls: 'card-product',
  },
  {
    id: '02',
    title: 'Marketing',
    tags: 'Brand Campaigns · Creative Direction · Visual Identity',
    to: '/marketing',
    cls: 'card-marketing',
  },
  {
    id: '03',
    title: 'Photography',
    tags: 'Visual Storytelling · Editorial',
    to: '/photography',
    cls: 'card-photography',
  },
  {
    id: '04',
    title: 'About',
    tags: 'Background · Process · Contact',
    to: '/about',
    cls: 'card-about',
  },
]

const experience = [
  {
    company: 'Memora',
    role: 'Product & UX',
    period: 'Nov 2025 – Present',
    desc: 'Translating AI model capabilities into structured product insights and intuitive user-facing workflows for an early-stage travel photography platform.',
    tags: 'Product × AI × UX',
  },
  {
    company: 'Phoenix Digital Technology',
    role: 'Digital Marketing Intern',
    period: 'May – Jul 2025 · Beijing, China',
    desc: 'Managed 35+ campaign assets across video, motion graphics, and visual content while synthesizing market research into executive-facing reports for a cultural exhibition brand in Beijing.',
    tags: 'Content × User Insight × Experience Optimization',
  },
  {
    company: 'Keyi Tech',
    role: 'Growth Marketing Intern',
    period: 'Apr – Jun 2025 · Dover, DE',
    desc: 'Built a data-driven influencer evaluation framework in Excel and drove 1,000+ follower growth in 90 days through model-guided creator partnerships.',
    tags: 'Data-driven Marketing × Growth × ROI',
  },
  {
    company: 'The Style That Binds Us',
    role: 'Marketing Analyst Intern',
    period: 'Feb – May 2025 · New York, NY',
    desc: 'Managed a 500+ record client database and conducted competitive brand research to inform positioning strategy for a digital fashion consultancy.',
    tags: 'Fashion × Brand Strategy × Consumer Insight',
  },
]

export default function Home() {
  return (
    <>
      <Navigation />

      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero-name">Josephine Wang</h1>
          <p className="hero-label">Portfolio</p>
          <p className="hero-cats">Product · UX / Marketing / Visual</p>
          <div className="hero-btns">
            <a href="#works" className="hero-btn">Works</a>
            <a href="#experience" className="hero-btn">Experience</a>
            <Link to="/about" className="hero-btn">About</Link>
          </div>
        </div>
      </section>

      {/* WORKS */}
      <section className="works" id="works">
        <div className="works-header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Works</h2>
        </div>
        <div className="works-grid">
          {works.map((w) => (
            <Link key={w.id} to={w.to} className={`work-card ${w.cls}`}>
              <span className="card-num">{w.id}</span>
              <div className="card-info">
                <h3 className="card-title">{w.title}</h3>
                <p className="card-tags">{w.tags}</p>
              </div>
              <span className="card-arrow">&#8594;</span>
            </Link>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="experience" id="experience">
        <h2 className="exp-heading">Experience</h2>
        <div className="exp-grid">
          {experience.map((e) => (
            <div key={e.company} className="exp-item">
              <span className="exp-role">{e.role}</span>
              <h3 className="exp-company">{e.company}</h3>
              <span className="exp-period">{e.period}</span>
              <span className="exp-tags">{e.tags}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <span className="section-label contact-label">Get in Touch</span>
        <h2 className="contact-heading">
          Let&rsquo;s build<br />something together.
        </h2>
        <p className="contact-sub">
          Open to internship and full-time opportunities in product design, UX, and creative direction.
        </p>
        <div className="contact-btns">
          <a href="mailto:mw5333@nyu.edu" className="contact-btn email-btn">
            mw5333@nyu.edu
          </a>
          <a
            href="https://www.linkedin.com/in/josephine-wang-4a8b872b0/"
            target="_blank"
            rel="noreferrer"
            className="contact-btn linkedin-btn"
          >
            LinkedIn &#8594;
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}

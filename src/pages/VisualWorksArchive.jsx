import { Link } from 'react-router-dom'
import PortfolioShell from '../components/PortfolioShell'
import './PhotographyArchive.css'

const visualSections = [
  {
    meta: 'Sophomore Year 2024-2025',
    rows: [
      {
        className: 'visual-archive-row visual-archive-row-duo visual-archive-row-sophomore',
        items: [
          {
            title: 'Poetics in AI',
            image: '/projects/poetics-in-ai-assets/detail.jpeg',
            tone: 'visual-archive-card-wide',
            frameClassName: 'visual-archive-frame-full-image',
            to: '/photography/visual-works/poetics-in-ai',
          },
          {
            title: 'Scribe',
            image: '/projects/scribe-assets/cover.jpeg',
            tone: 'visual-archive-card-wide',
            frameClassName: 'visual-archive-frame-full-image',
            to: '/photography/visual-works/scribe',
          },
        ],
      },
    ],
  },
  {
    meta: 'Freshman Year 2023-2024',
    rows: [
      {
        className: 'visual-archive-row visual-archive-row-solo',
        items: [
          {
            title: 'Internship at Visual China Group',
            image: '/projects/freshman-year-assets/visual-china-internship.jpg',
            tone: 'visual-archive-card-wide',
            frameClassName: 'visual-archive-frame-full-image',
            to: '/photography/visual-works/visual-china-group',
          },
        ],
      },
      {
        className: 'visual-archive-row visual-archive-row-shoot-symphony',
        items: [
          {
            title: 'Shoot?',
            image: '/projects/freshman-year-assets/shoot-question.jpeg',
            tone: 'visual-archive-card-portrait',
            to: '/photography/visual-works/shoot',
          },
          {
            title: 'Symphony',
            image: '/projects/freshman-year-assets/symphony.jpeg',
            tone: 'visual-archive-card-wide',
            to: '/photography/visual-works/symphony',
          },
        ],
      },
      {
        className: 'visual-archive-row visual-archive-row-duo',
        items: [
          {
            title: 'Digital Webcam',
            image: '/projects/freshman-year-assets/digital-webcam.png',
            tone: 'visual-archive-card-wide',
            to: '/photography/visual-works/digital-webcam',
          },
          {
            title: 'Maze Soccer',
            image: '/projects/maze-soccer-assets/maze-soccer-cover.png',
            tone: 'visual-archive-card-wide',
            to: '/photography/visual-works/maze-soccer',
          },
        ],
      },
      {
        className: 'visual-archive-row visual-archive-row-solo',
        items: [
          {
            title: 'Collaborative Project: Against Interpretation',
            image: '/projects/against-interpretation-assets/cover.png',
            tone: 'visual-archive-card-wide',
            frameClassName: 'visual-archive-frame-full-image',
            to: '/photography/visual-works/against-interpretation',
          },
        ],
      },
      {
        className: 'visual-archive-row visual-archive-row-duo',
        items: [
          {
            title: 'Dancing Characters',
            image: '/projects/dancing-characters-assets/cover.png',
            tone: 'visual-archive-card-wide',
            frameClassName: 'visual-archive-frame-full-image',
            to: '/photography/visual-works/dancing-characters',
          },
          {
            title: 'Cause Website Building',
            image: '/projects/cause-website-assets-cover.png',
            tone: 'visual-archive-card-wide',
            frameClassName: 'visual-archive-frame-full-image',
            to: '/photography/visual-works/cause-website-building',
          },
        ],
      },
    ],
  },
  {
    meta: 'High School Works',
    rows: [
      {
        className: 'visual-archive-row visual-archive-row-trio',
        items: [
          {
            title: 'Irrigation',
            image: '/projects/irrigation-assets/cover.jpg',
            tone: 'visual-archive-card-portrait',
            to: '/photography/visual-works/irrigation',
          },
          {
            title: 'Yummy',
            image: '/projects/yummy-assets/cover-archive-green-type.png',
            tone: 'visual-archive-card-portrait',
            to: '/photography/visual-works/yummy',
          },
          {
            title: 'Plastic',
            image: '/projects/plastic-assets/cover.jpg',
            tone: 'visual-archive-card-portrait',
            to: '/photography/visual-works/plastic',
          },
        ],
      },
      {
        className: 'visual-archive-row visual-archive-row-trace',
        items: [
          {
            title: 'Trace the Path of Me',
            image: '/projects/trace-me-assets/cover-archive-installation.png',
            tone: 'visual-archive-card-portrait',
            to: '/photography/visual-works/trace-the-path-of-me',
          },
          {
            title: 'My Thoughts',
            image: '/projects/my-thoughts-assets/cover-archive-collage.png',
            tone: 'visual-archive-card-wide',
            to: '/photography/visual-works/my-thoughts',
          },
        ],
      },
      {
        className: 'visual-archive-row visual-archive-row-zhongjing',
        items: [
          {
            title: 'Sketch',
            image: '/projects/sketch-assets/panel-01.jpg',
            tone: 'visual-archive-card-portrait',
            frameClassName: 'visual-archive-frame-sketch',
            to: '/photography/visual-works/sketch',
          },
          {
            title: 'Zhongjing Tea',
            image: '/projects/zhongjing-tea-assets/cover-archive-boxes.png',
            tone: 'visual-archive-card-wide',
            to: '/photography/visual-works/zhongjing-tea',
          },
        ],
      },
      {
        className: 'visual-archive-row visual-archive-row-high-school-series',
        items: [
          {
            title: 'High School Official Account',
            image: '/projects/high-school-official-account-assets/official-account-cover.jpeg',
            tone: 'visual-archive-card-portrait',
            to: '/photography/visual-works/high-school-official-account',
          },
          {
            title: 'Yearbook',
            image: '/projects/high-school-official-account-assets/yearbook-cover.png',
            tone: 'visual-archive-card-portrait',
            to: '/photography/visual-works/yearbook',
          },
          {
            title: 'Graduation Series',
            image: '/projects/graduation-series-assets/cover.png',
            tone: 'visual-archive-card-wide',
            frameClassName: 'visual-archive-frame-graduation',
            to: '/photography/visual-works/graduation-series',
          },
        ],
      },
    ],
  },
]

export default function VisualWorksArchive() {
  return (
    <PortfolioShell>
      <main className="visual-page-archive visual-page-archive-works">
        {visualSections.map((section) => (
          <section key={section.meta} className="visual-archive-section">
            <div className="visual-archive-head">
              <span className="visual-archive-rule" aria-hidden="true" />
              <span className="visual-archive-caption">{section.meta}</span>
            </div>

            <div className="visual-archive-stack">
              <div className="visual-archive-rows">
                {section.rows.map((row, rowIndex) => (
                  <div key={`${section.meta}-${rowIndex}`} className={row.className}>
                    {row.items.map((item) => {
                      const card = (
                        <figure className={`visual-archive-card ${item.tone}`}>
                          <div className={`visual-archive-frame ${item.frameClassName ?? ''}`.trim()}>
                            <img src={item.image} alt={item.title} loading="lazy" />
                          </div>
                          <figcaption>{item.title}</figcaption>
                        </figure>
                      )

                      if (item.to) {
                        return (
                          <Link key={item.title} to={item.to} className="visual-archive-card-link">
                            {card}
                          </Link>
                        )
                      }

                      return (
                        <div key={item.title} className="visual-archive-card-shell">
                          {card}
                        </div>
                      )
                    })}
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>
    </PortfolioShell>
  )
}

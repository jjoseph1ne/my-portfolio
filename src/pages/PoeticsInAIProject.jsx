import { useState } from 'react'
import { Link } from 'react-router-dom'
import PortfolioShell from '../components/PortfolioShell'
import './ArchiveProject.css'
import './PoeticsInAIProject.css'
import { ArchiveProjectImageFigure, ArchiveProjectLightbox } from './ArchiveProjectMedia'

export default function PoeticsInAIProject() {
  const [activeImage, setActiveImage] = useState(null)

  return (
    <PortfolioShell>
      <main className="archive-project-page archive-project-page-detail">
        <section className="archive-project-detail-layout poetics-ai-layout">
          <div className="archive-project-detail-sidebar poetics-ai-copy">
            <Link to="/photography/visual-works" className="archive-project-back">← Back to Visual Works</Link>

            <div className="archive-project-meta">
              <span className="archive-project-title">Poetics in AI</span>
              <span className="archive-project-subtitle">
                Fall 2024 | Creative Approaches in Emerging Media
              </span>
            </div>

            <div className="archive-project-copy-block">
              <p className="archive-project-copy-text">
                Previously, I&apos;ve been trying to build up a type of communication method or the
                chatbox-ish thing to further discuss the mistakes in daily communication and how
                languages could be presented without misunderstandings through visualization.
                Initially while developing this final project, I figured out the way of combining
                emerging technology to represent a sense of respond to the old and out-dated
                style, so I started to explore OpenAI API as a tool. As soon as I was using this
                new tool, I found my topic had gradually changed. In an age where artificial
                intelligence and automation shape most of our digital interactions, this project
                changed to explore the intersection between artificial intelligence, human
                creativity, and cultural heritage. I aim to create a visual and performative
                experience that explores how artificial intelligence can reinterpret traditional
                Chinese poetry in the context of modern algorithms.
              </p>

              <p className="archive-project-copy-text">
                While AI has penetrated our lives in every aspects and did provide new paths of
                creating, thinking, as well as critiquing arts, it also raises questions about
                the authenticity, cultural preservation and human touch of art.
              </p>

              <p className="archive-project-copy-label">Questions from my project development:</p>
              <p className="archive-project-copy-text">
                01. Can artificial intelligence capture the essence of traditional art forms
                like calligraphy?
              </p>
              <p className="archive-project-copy-text">
                02. How do data collection and algorithms influence cultural expression?
              </p>
              <p className="archive-project-copy-text">
                03. AI models are often trained on large, uncurated data sets that ignore
                background depth. How do these tools adapt, simplify, or distort traditional art
                forms like Chinese calligraphy?
              </p>

              <p className="archive-project-copy-text">
                Admittedly, AI can imitate human art partially, and generate an visual appealing
                thing out, but it lacks the inherent emotional and cultural context inherent in
                traditional art forms. So in this project, I&apos;m trying to make a commentary on
                the balance between embracing emerging technologies while preserving the
                authenticity of cultural practices.
              </p>
              <p className="archive-project-copy-text">
                The project is a AI-based interactive performance type, where I type in a poetry
                and AI algorithms would generate abstract calligraphy image type file. And then
                the files are arranged in grids which is similar to “Tian Zi Ge”, the type of
                paper people use to practice calligraphy. The output is a reflection on the
                relationship between cultural traditions, machine learning, and human-machine
                collaboration in the arts.
              </p>

              <p className="archive-project-copy-text">
                Non-sense characters: At the beginning part developing the project, I intended to
                make all those generated characters with some meanings different from the previous
                ones. However, I just found that it&apos;s totally nonsense to make AI generate
                characters to be sensical. It should have its own language system that it
                developed through my training; there&apos;s no need to correct it on my own opinions.
              </p>

              <p className="archive-project-copy-label">Medium choice:</p>
              <p className="archive-project-copy-text">
                I chose a digital interactive installation as it creates a seamless bridge
                between traditional art and modern technology. Besides internet and AI based
                interface, the projection onto canvas introduces a physical dimension where
                viewers can reflect on the merger of classical and contemporary approaches. By
                projecting digital results onto physical paper, I connect the virtual with the
                tactile, creating a bridge between ancient traditions and modern technology.
              </p>

              <p className="archive-project-copy-label">What I learned:</p>
              <p className="archive-project-copy-text">
                human input in guiding AI art; The limitations of AI in fully capturing the
                emotional and cultural depth of traditional art; Insights into data collection
                and automation as tools for creative exploration; Reflection on balancing modern
                technology with cultural preservation.
              </p>
            </div>
          </div>

          <section className="archive-project-detail-content poetics-ai-stack">
            <div className="poetics-ai-media">
              <section className="archive-project-video-block">
                <video
                  className="poetics-ai-video"
                  controls
                  playsInline
                  preload="metadata"
                  poster="/projects/poetics-in-ai-assets/detail.jpeg"
                >
                  <source src="/projects/poetics-in-ai-assets/intro.mov" />
                </video>
              </section>

              <ArchiveProjectImageFigure
                src="/projects/poetics-in-ai-assets/cover.png"
                alt="Poetics in AI live system interface and generated characters"
                onOpen={setActiveImage}
              />

              <section className="archive-project-video-block">
                <video
                  className="poetics-ai-video"
                  controls
                  playsInline
                  preload="metadata"
                  poster="/projects/poetics-in-ai-assets/cover.png"
                >
                  <source src="/projects/poetics-in-ai-assets/demo.mov" />
                </video>
              </section>
            </div>
          </section>
        </section>

        <ArchiveProjectLightbox activeImage={activeImage} onClose={() => setActiveImage(null)} />
      </main>
    </PortfolioShell>
  )
}

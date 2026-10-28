import { Link } from 'react-router-dom'
import PortfolioShell from '../components/PortfolioShell'
import './PageLayout.css'
import './IdentityBiasAuditProject.css'

const metrics = [
  { value: '100K', label: 'Training comments' },
  { value: '20K', label: 'Public test comments' },
  { value: '09', label: 'Identity subgroups' },
  { value: '0.946', label: 'Overall ROC-AUC' },
]

export default function IdentityBiasAuditProject() {
  return (
    <PortfolioShell>
      <main className="bias-project">
        <Link to="/product/data-research" className="bias-project-back">← Back to Data / Research</Link>

        <section className="bias-project-hero">
          <div className="bias-project-hero-top">
            <span>Responsible Data Science / NYU</span>
            <span>2026</span>
          </div>
          <h1>Identity Bias Audit</h1>
          <p>
            An ongoing audit of unintended identity bias in an automated toxicity
            classification system.
          </p>
          <div className="bias-project-hero-bottom">
            <span>Python · TensorFlow / Keras · pandas · scikit-learn</span>
            <span>Josephine Wang · Lulu Zhu · Justin Wu · Tommy Su</span>
          </div>
        </section>

        <section className="bias-project-section">
          <span className="bias-project-index">01 / Question</span>
          <div>
            <h2>Does strong overall accuracy hide unequal performance?</h2>
            <p>
              The system assigns online comments a toxicity score from 0 to 1. We use 0.5
              as the threshold for a toxic prediction, then ask whether harmless comments
              that mention certain identities are more likely to be flagged.
            </p>
          </div>
        </section>

        <section className="bias-project-section">
          <span className="bias-project-index">02 / Data &amp; model</span>
          <div>
            <h2>Public comments, annotated for toxicity and identity mentions.</h2>
            <p>
              The Jigsaw Unintended Bias in Toxicity Classification dataset contains about
              1.8 million Civil Comments entries. A subset includes identity labels spanning
              gender, religion, race, sexual orientation, and disability. These labels describe
              identities mentioned in comments, not the authors of those comments.
            </p>
            <p>
              For a preliminary run, we sampled 100,000 training comments and 20,000 public
              test comments with a fixed random seed. We adapted an open-source bidirectional
              LSTM to TensorFlow/Keras 3, using pre-trained fastText and GloVe embeddings,
              and trained it for one epoch in a Kaggle GPU notebook.
            </p>
          </div>
        </section>

        <section className="bias-project-metrics" aria-label="Audit scope">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </section>

        <section className="bias-project-section">
          <span className="bias-project-index">03 / Preliminary result</span>
          <div>
            <h2>A high overall score does not tell the whole story.</h2>
            <p>
              On the public test sample, the model achieved 0.946 overall ROC-AUC. Subgroup
              AUC ranged from 0.799 to 0.825 for comments mentioning Muslim, white, Black,
              or gay/lesbian identities. This is an initial signal for closer investigation,
              not a final conclusion about the model.
            </p>
          </div>
        </section>

        <section className="bias-project-section bias-project-finding">
          <span className="bias-project-index">04 / Next steps</span>
          <div>
            <h2>Look at who gets flagged, not only how often the model is right.</h2>
            <p>
              The proposal calls for comparing false positive and false negative rates across
              nine identity subgroups, alongside Subgroup AUC, BPSN AUC, and BNSP AUC. We
              also plan to swap identity terms in otherwise comparable comments to examine
              how predictions change, checking each pair for contextual consistency.
            </p>
            <p>
              The stakes are practical: over-flagging non-toxic comments could limit
              legitimate discussion about identity, even when aggregate model performance
              looks strong.
            </p>
          </div>
        </section>

        <section className="bias-project-sources" aria-label="Project sources">
          <span className="bias-project-index">Sources</span>
          <div>
            <a href="https://www.kaggle.com/competitions/jigsaw-unintended-bias-in-toxicity-classification" target="_blank" rel="noreferrer">
              Jigsaw dataset ↗
            </a>
            <a href="https://github.com/4ndrewparr/jigsaw-toxicity-classification" target="_blank" rel="noreferrer">
              Original LSTM implementation ↗
            </a>
          </div>
        </section>
      </main>
    </PortfolioShell>
  )
}

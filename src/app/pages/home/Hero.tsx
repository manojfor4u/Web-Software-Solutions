import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />
      <div className="hero-inner page-container">
        <div className="hero-copy">
          <div className="breadcrumbs"><a href="#home">Home</a><span>/</span><span>Services</span></div>
          <span className="hero-kicker">Digital experiences, built around you</span>
          <h1>Our Web Development Services</h1>
          <p>End-to-end website development solutions to build, grow<br className="desktop-break" /> and digitize your business online.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Get a Free Quote <ArrowForwardIcon fontSize="small" /></a>
            <a className="button button-outline-light" href="#contact">Talk to Our Experts</a>
          </div>
        </div>

        <div className="hero-visual" aria-label="A preview of a website being developed" role="img">
          <div className="hero-orbit" />
          <div className="plant-pot"><span /><i /><b /></div>
          <div className="laptop">
            <div className="laptop-screen">
              <div className="screen-top"><span /><span /><span /></div>
              <div className="screen-code">&lt;/&gt;</div>
              <div className="website-preview">
                <div className="preview-sidebar"><i /><i /><i /></div>
                <div className="preview-content"><b /><span /><span /><div><i /><i /><i /></div></div>
              </div>
            </div>
            <div className="laptop-base" />
          </div>
          <div className="checklist-card">
            {['Design', 'Develop', 'Test', 'Deploy'].map((step) => (
              <span key={step}><CheckCircleIcon fontSize="small" />{step}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

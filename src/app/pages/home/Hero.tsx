import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined'

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />
      <div className="hero-inner page-container">
        <div className="hero-copy">
          <span className="hero-kicker">Digital experiences, built around you</span>
          <h1>Professional <span>Web</span> Development Services</h1>
          <p>We design and develop modern, responsive and result-driven websites that help your business grow online.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Get a Free Quote <ArrowForwardIcon fontSize="small" /></a>
            <a className="button button-outline-light" href="#contact"><HeadsetMicOutlinedIcon fontSize="small" /> Talk to Our Experts</a>
          </div>
          <ul className="hero-benefits" aria-label="Our service benefits">
            <li><CheckCircleIcon aria-hidden="true" /> Responsive Design</li>
            <li><CheckCircleIcon aria-hidden="true" /> Secure &amp; Reliable</li>
            <li><CheckCircleIcon aria-hidden="true" /> High Performance</li>
            <li><CheckCircleIcon aria-hidden="true" /> Ongoing Support</li>
          </ul>
        </div>

        <div className="hero-visual" aria-label="A preview of a website being developed" role="img">
          <div className="hero-orbit" />
          <div className="plant-pot"><span /><i /><b /></div>
          <div className="laptop">
            <div className="laptop-screen">
              <div className="screen-top"><span /><span /><span /></div>
              <div className="screen-code"><strong>Grow Your<br />Business Online</strong><span>Modern digital experiences</span></div>
              <div className="website-preview">
                <div className="preview-sidebar"><i /><i /><i /></div>
                <div className="preview-content"><b /><span /><span /><div><i /><i /><i /></div></div>
              </div>
            </div>
            <div className="laptop-base" />
          </div>
          <div className="hero-phone" aria-hidden="true">
            <div className="hero-phone-notch" />
            <div className="hero-phone-brand">WS</div>
            <div className="hero-phone-title">Grow Your<br />Business</div>
            <span />
            <span />
            <div className="hero-phone-actions"><i /><i /></div>
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

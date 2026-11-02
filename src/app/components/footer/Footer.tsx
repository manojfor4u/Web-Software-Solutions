import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import companyLogo from '../../assets/images/Web Logo.png'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-intro">
          <a className="brand footer-brand" href="#home" aria-label="Web Software Solutions home">
            <img className="brand-logo" src={companyLogo} alt="" />
          </a>
          <p>Thoughtful websites. Built to move your business forward.</p>
        </div>
        <address className="footer-address">
          <span>Visit our office</span>
          City Centre - Kolte Patil, Hinjawadi Phase 1 Rd, Phase 1, Rajiv, Hinjawadi, Maharashtra 411057
        </address>
        <a className="footer-contact-link" href="https://wa.me/917558652571" target="_blank" rel="noreferrer">
          <WhatsAppIcon fontSize="small" aria-hidden="true" /> Chat with our team
        </a>
        <div className="footer-meta">
          <small>© {new Date().getFullYear()} Web Software Solutions. All rights reserved.</small>
        </div>
      </div>
    </footer>
  )
}

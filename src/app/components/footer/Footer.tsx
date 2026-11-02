import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import companyLogo from '../../assets/images/Web Logo.png'

const services = [
  ['Business Website', '#services'],
  ['E-commerce Website', '#services'],
  ['WordPress Development', '#services'],
  ['Full-Stack Development', '#services'],
  ['Website Redesign', '#services'],
  ['Website Maintenance', '#services'],
]

const quickLinks = [
  ['Home', '#home'],
  ['About Us', '#about'],
  ['Portfolio', '#portfolio'],
  ['Pricing', '#pricing'],
  ['Testimonials', '#track-record'],
  ['FAQ', '#contact'],
]

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-inner">
        <div className="footer-intro">
          <a className="brand footer-brand" href="#home" aria-label="Web Software Solutions home">
            <img className="brand-logo" src={companyLogo} alt="" />
          </a>
          <p>Thoughtful websites, built to move your business forward.</p>
        </div>

        <nav className="footer-column" aria-label="Our services">
          <h2>Our Services</h2>
          <ul>
            {services.map(([label, href]) => <li key={label}><a href={href}>{label}</a></li>)}
          </ul>
        </nav>

        <nav className="footer-column" aria-label="Quick links">
          <h2>Quick Links</h2>
          <ul>
            {quickLinks.map(([label, href]) => <li key={label}><a href={href}>{label}</a></li>)}
          </ul>
        </nav>

        <div className="footer-column footer-contact">
          <h2>Contact Us</h2>
          <a href="tel:+917558652571"><PhoneOutlinedIcon aria-hidden="true" />+91 75586 52571</a>
          <a href="https://wa.me/917558652571" target="_blank" rel="noreferrer"><WhatsAppIcon aria-hidden="true" />Chat on WhatsApp</a>
          <a href="mailto:connectbox26@gmail.com"><EmailOutlinedIcon aria-hidden="true" />connectbox26@gmail.com</a>
          <address><LocationOnOutlinedIcon aria-hidden="true" />City Centre - Kolte Patil, Hinjawadi Phase 1 Rd, Maharashtra 411057</address>
        </div>

        <div className="footer-meta">
          <small>© {new Date().getFullYear()} Web Software Solutions. All rights reserved.</small>
          <a href="#home">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}

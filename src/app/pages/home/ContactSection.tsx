import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

export default function ContactSection() {
  return (
    <section className="contact-banner page-container" id="contact">
      <div className="contact-target" aria-hidden="true">
        <svg viewBox="0 0 64 64" fill="none"><circle cx="29" cy="35" r="20" stroke="currentColor" strokeWidth="3" /><circle cx="29" cy="35" r="12" stroke="currentColor" strokeWidth="3" /><circle cx="29" cy="35" r="4" fill="currentColor" /><path d="m29 35 25-25m-11 0h11v11" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </div>
      <div className="contact-copy"><h2>Have a Project in Mind?</h2><p>Let’s turn your idea into a powerful website.</p></div>
      <div className="contact-actions">
        <a className="button button-light" href="mailto:hello@webdevelopmentsolutions.in">Get a Free Quote <ArrowForwardIcon fontSize="small" /></a>
        <a className="button button-whatsapp" href="https://wa.me/917558652571" target="_blank" rel="noreferrer"><WhatsAppIcon fontSize="small" aria-hidden="true" /> Chat on WhatsApp</a>
        <a className="button button-call" href="tel:+917558652571"><PhoneOutlinedIcon fontSize="small" aria-hidden="true" /> +91 75586 52571</a>
      </div>
    </section>
  )
}

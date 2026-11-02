import { useEffect, useState } from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import MiscellaneousServicesOutlinedIcon from '@mui/icons-material/MiscellaneousServicesOutlined'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined'
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import companyLogo from '../../assets/images/Web Logo.png'

const navigation = [
  { label: 'Home', href: '#home', icon: HomeOutlinedIcon },
  { label: 'Services', href: '#services', icon: MiscellaneousServicesOutlinedIcon },
  { label: 'Portfolio', href: '#portfolio', icon: WorkOutlineIcon },
  { label: 'About Us', href: '#about', icon: InfoOutlinedIcon },
  { label: 'Pricing', href: '#pricing', icon: PriceChangeOutlinedIcon },
  { label: 'Contact', href: '#contact', icon: ContactMailOutlinedIcon },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    if (!menuOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuOpen])

  return (
    <header className={`site-header${menuOpen ? ' menu-open' : ''}`}>
      <div className="header-inner">
        <a className="brand" href="#home" aria-label="Web Software Solutions home" onClick={closeMenu}>
          <img className="brand-logo" src={companyLogo} alt="" />
        </a>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        {menuOpen && (
          <button
            className="mobile-menu-backdrop"
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMenu}
          />
        )}

        <nav id="primary-navigation" className={`primary-navigation${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          <div className="mobile-nav-heading">
            <a className="brand" href="#home" aria-label="Web Software Solutions home" onClick={closeMenu}>
              <img className="brand-logo" src={companyLogo} alt="" />
            </a>
            <button
              className="mobile-nav-close"
              type="button"
              aria-label="Close navigation menu"
              onClick={closeMenu}
            >
              <CloseIcon />
            </button>
          </div>
          {navigation.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} onClick={closeMenu}>
              <Icon className="mobile-nav-icon" aria-hidden="true" />
              <span>{label}</span>
            </a>
          ))}
          <a className="header-phone" href="tel:+917558652571">
            <PhoneOutlinedIcon fontSize="small" aria-hidden="true" /> +91 75586 52571
          </a>
          <a className="header-whatsapp header-whatsapp-icon" href="https://wa.me/917558652571" target="_blank" rel="noreferrer" aria-label="Chat with us on WhatsApp" title="Chat on WhatsApp">
            <WhatsAppIcon aria-hidden="true" />
          </a>
          <p className="mobile-nav-note">Thoughtful websites, built around your business.</p>
        </nav>
      </div>
    </header>
  )
}

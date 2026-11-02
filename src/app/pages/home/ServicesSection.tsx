import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined'
import LanguageIcon from '@mui/icons-material/Language'
import CodeIcon from '@mui/icons-material/Code'
import AutorenewIcon from '@mui/icons-material/Autorenew'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import SectionHeading from '../../components/common/SectionHeading'

const services = [
  { icon: ComputerOutlinedIcon, title: 'Business Website', description: 'Build a professional website to showcase your business, services and brand online.' },
  { icon: ShoppingCartOutlinedIcon, title: 'E-commerce Website', description: 'Create a secure online store with product catalog, payment integration and order management.' },
  { icon: PersonOutlineIcon, title: 'Portfolio Website', description: 'A personal or professional website to showcase your work, skills and achievements.' },
  { icon: LayersOutlinedIcon, title: 'Landing Page', description: 'High-converting, focused landing pages for marketing campaigns and lead generation.' },
  { icon: LanguageIcon, title: 'WordPress Development', description: 'Custom, easy-to-manage WordPress websites for businesses and blogs.' },
  { icon: CodeIcon, title: 'Frontend & Backend Dev', description: 'Complete web application development with modern frontend and powerful backend.' },
  { icon: AutorenewIcon, title: 'Website Redesign', description: 'Give your existing website a modern, responsive and user-friendly look.' },
  { icon: SettingsOutlinedIcon, title: 'Website Maintenance', description: 'Regular updates, security, backups and performance optimization for your website.' },
]

export default function ServicesSection() {
  return (
    <section className="services-section section-pad" id="services">
      <div className="page-container">
        <SectionHeading
          title="Our Services"
          description="We offer a complete range of website development services tailored to your business needs."
        />
        <div className="services-grid">
          {services.map(({ icon: Icon, title, description }) => (
            <article className="service-card" key={title}>
              <Icon className="service-icon" aria-hidden="true" />
              <h3>{title}</h3>
              <p>{description}</p>
              <a href="#contact" className="learn-more">Know More <ArrowForwardIcon fontSize="small" /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

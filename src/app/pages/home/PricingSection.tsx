import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import SectionHeading from '../../components/common/SectionHeading'

const plans = [
  {
    name: 'Starter',
    tagline: 'A perfect start for small businesses.',
    price: '₹20,000',
    features: ['Up to 5 pages', 'Responsive design', 'Contact form', 'Basic SEO setup'],
    delivery: '5–7 days',
    revisions: '2 revisions',
  },
  {
    name: 'Business',
    tagline: 'The ideal choice for growing businesses.',
    price: '₹35,000',
    features: ['Up to 12 pages', 'Custom design & functionality', 'SEO-ready foundation', 'Third-party integrations'],
    delivery: '7–14 days',
    revisions: '3 revisions',
    popular: true,
  },
  {
    name: 'Enterprise',
    tagline: 'A custom solution for larger, complex needs.',
    price: '₹1,00,000',
    features: ['Custom functionality', 'E-commerce & integrations', 'Advanced security & performance', 'Ongoing support'],
    delivery: 'As per scope',
    revisions: 'Unlimited',
  },
]

export default function PricingSection() {
  return (
    <section className="pricing-section section-pad" id="pricing">
      <div className="page-container">
        <SectionHeading title="Website Packages" description="Choose the right plan for your business. Transparent pricing with no hidden cost." />
        <div className="pricing-grid">
          {plans.map(({ name, tagline, price, features, delivery, revisions, popular }) => (
            <article className={`pricing-card${popular ? ' pricing-card-popular' : ''}`} key={name}>
              {popular && <span className="pricing-popular-label">Most Popular</span>}
              <div className="pricing-card-heading">
                <h3>{name}</h3>
                <p>{tagline}</p>
              </div>
              <p className="pricing-price"><span>From</span> {price}</p>
              <ul className="pricing-features">
                {features.map((feature) => (
                  <li key={feature}><CheckCircleIcon aria-hidden="true" />{feature}</li>
                ))}
              </ul>
              <div className="pricing-details">
                <span>Delivery: {delivery}</span>
                <span>Revisions: {revisions}</span>
              </div>
              <a
                href={`https://wa.me/917558652571?text=${encodeURIComponent(`Hi, I'm interested in the ${name} website package (from ${price}).`)}`}
                className="button pricing-card-action"
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon fontSize="small" aria-hidden="true" /> {name === 'Enterprise' ? 'Get a Custom Quote' : 'Get Started'}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

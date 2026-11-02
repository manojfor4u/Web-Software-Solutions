import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import starterPlanImage from '../../assets/images/Modern.png'
import businessPlanImage from '../../assets/images/Business.png'
import enterprisePlanImage from '../../assets/images/Enterprise.png'
import SectionHeading from '../../components/common/SectionHeading'

const plans = [
  { name: 'Starter', price: 'From ₹20,000', image: starterPlanImage },
  { name: 'Business', price: 'From ₹35,000', image: businessPlanImage },
  { name: 'Enterprise', price: 'From ₹1,00,000', image: enterprisePlanImage },
]

export default function PricingSection() {
  return (
    <section className="pricing-section section-pad" id="pricing">
      <div className="page-container">
        <SectionHeading eyebrow="Clear, considered pricing" title="A good fit for your next step" description="Every project is different. Here are a few starting points—we’ll shape the right scope together." />
        <div className="pricing-grid">
          {plans.map(({ name, price, image }) => (
            <article className="pricing-card" key={name}>
              <div className="pricing-card-image">
                <img className="pricing-plan-image" src={image} alt={`${name} plan, ${price}`} loading="lazy" />
              </div>
              <a
                href={`https://wa.me/917558652571?text=${encodeURIComponent(`Hi, I'm interested in the ${name} plan (${price}).`)}`}
                className="button button-primary pricing-card-action"
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon fontSize="small" aria-hidden="true" /> Discuss this plan
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

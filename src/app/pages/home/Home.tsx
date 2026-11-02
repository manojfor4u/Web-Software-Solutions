import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Hero from './Hero'
import TrustSection from './TrustSection'
import ServicesSection from './ServicesSection'
import ProcessSection from './ProcessSection'
import PortfolioSection from './PortfolioSection'
import PricingSection from './PricingSection'
import ContactSection from './ContactSection'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustSection />
        <ServicesSection />
        <ProcessSection />
        <PortfolioSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

import ecommerceWebsiteImage from '../../assets/images/E-Commerce.png'
import coachingWebsiteImage from '../../assets/images/Coaching.png'
import collegeWebsiteImage from '../../assets/images/College.png'
import hospitalWebsiteImage from '../../assets/images/Hospital.png'
import hotelWebsiteImage from '../../assets/images/Hotel.png'
import realEstateWebsiteImage from '../../assets/images/Real State.png'
import salonWebsiteImage from '../../assets/images/Parlour.png'
import restaurantWebsiteImage from '../../assets/images/Restaurent.png'
import portfolioIllustrations from '../../assets/images/portfolio-illustrations.svg?url'
import SectionHeading from '../../components/common/SectionHeading'

const projects: { title: string; photo?: string; illustration?: string; fitFrame?: boolean }[] = [
  { title: 'E-commerce', photo: ecommerceWebsiteImage, fitFrame: true },
  { title: 'College & University', photo: collegeWebsiteImage },
  { title: 'Beauty Parlour & Salon', photo: salonWebsiteImage },
  { title: 'Restaurant & Cafe', photo: restaurantWebsiteImage },
  { title: 'Real Estate', photo: realEstateWebsiteImage, fitFrame: true },
  { title: 'Hospital & Healthcare', photo: hospitalWebsiteImage },
  { title: 'Hotel & Resort', photo: hotelWebsiteImage },
  { title: 'Coaching & Training Institute', photo: coachingWebsiteImage },
]

export default function PortfolioSection() {
  return (
    <section className="portfolio-section section-pad" id="portfolio">
      <div className="page-container">
        <SectionHeading title="Our Recent Work" description="A glimpse of our actual projects that have helped businesses grow online." />
        <div className="portfolio-grid">
          {projects.map((project) => (
            <article className="portfolio-card" key={project.title}>
              <div className={`project-preview${project.fitFrame ? ' project-preview--fit-frame' : ''}`} aria-hidden="true">
                {project.photo ? (
                  <img className="portfolio-illustration" src={project.photo} alt="" loading="lazy" />
                ) : (
                  <svg className="portfolio-illustration" viewBox="0 0 640 360" focusable="false">
                    <use href={`${portfolioIllustrations}#${project.illustration ?? 'portfolio'}`} />
                  </svg>
                )}
              </div>
              <div className="portfolio-copy">
                <h3>{project.title} Website</h3>
                <span className="portfolio-project-type">Website Preview</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

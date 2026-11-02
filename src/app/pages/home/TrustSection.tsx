import Rating from '@mui/material/Rating'
import CodeRoundedIcon from '@mui/icons-material/CodeRounded'
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded'

export default function TrustSection() {
  return (
    <section className="trust-section" aria-labelledby="trust-heading">
      <div className="trust-inner">
        <h2 id="trust-heading">
          Our <span>Track Record</span>
        </h2>
        <p className="trust-description">Real results, happy clients, and on-time delivery — here’s what we’ve achieved so far.</p>
        <div className="trust-metrics">
          <div className="trust-metric">
            <span className="trust-metric-icon trust-metric-icon-projects"><CodeRoundedIcon aria-hidden="true" /></span>
            <div className="trust-metric-content">
              <strong>100+</strong>
              <span>Projects delivered</span>
            </div>
            <span className="trust-metric-accent" aria-hidden="true" />
          </div>
          <div className="trust-metric">
            <span className="trust-metric-icon trust-metric-icon-reviews"><GroupsRoundedIcon aria-hidden="true" /></span>
            <div className="trust-metric-content">
              <strong>500+</strong>
              <span>Client reviews</span>
            </div>
            <span className="trust-metric-accent" aria-hidden="true" />
          </div>
          <div className="trust-metric trust-metric-rating">
            <span className="trust-metric-icon trust-metric-icon-rating"><StarRoundedIcon aria-hidden="true" /></span>
            <div className="trust-metric-content">
              <div className="trust-rating-value">
                <strong>4.5/5</strong>
                <Rating value={4.5} precision={0.5} readOnly size="medium" aria-label="Rated 4.5 out of 5" />
              </div>
              <span>Average rating</span>
            </div>
            <span className="trust-metric-accent" aria-hidden="true" />
          </div>
          <div className="trust-metric">
            <span className="trust-metric-icon trust-metric-icon-time"><AccessTimeRoundedIcon aria-hidden="true" /></span>
            <div className="trust-metric-content">
              <strong>On-Time</strong>
              <span>Reliable delivery</span>
            </div>
            <span className="trust-metric-accent" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}

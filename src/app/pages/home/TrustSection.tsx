import Rating from '@mui/material/Rating'
import CodeRoundedIcon from '@mui/icons-material/CodeRounded'
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'

const reasons = [
  'Experienced & skilled team',
  'Clean & scalable code',
  'On-time project delivery',
  'Transparent pricing',
  'Long-term support',
]

export default function TrustSection() {
  return (
    <section className="trust-section" id="track-record" aria-labelledby="trust-heading">
      <div className="trust-inner">
        <div className="trust-reasons">
          <h2>Why Choose<br /><span>Web Software Solutions?</span></h2>
          <ul>
            {reasons.map((reason) => (
              <li key={reason}><CheckCircleRoundedIcon aria-hidden="true" />{reason}</li>
            ))}
          </ul>
        </div>
        <div className="trust-record">
          <h2 id="trust-heading">Our <span>Track Record</span></h2>
          <p className="trust-description">Trusted by businesses to build and grow online.</p>
          <div className="trust-metrics">
            <div className="trust-metric">
              <span className="trust-metric-icon trust-metric-icon-projects"><CodeRoundedIcon aria-hidden="true" /></span>
              <div className="trust-metric-content">
                <strong>100+</strong>
                <span>Projects Delivered</span>
              </div>
              <span className="trust-metric-accent" aria-hidden="true" />
            </div>
            <div className="trust-metric">
              <span className="trust-metric-icon trust-metric-icon-reviews"><GroupsRoundedIcon aria-hidden="true" /></span>
              <div className="trust-metric-content">
                <strong>100+</strong>
                <span>Client Reviews</span>
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
                <span>Average Rating</span>
              </div>
              <span className="trust-metric-accent" aria-hidden="true" />
            </div>
            <div className="trust-metric">
              <span className="trust-metric-icon trust-metric-icon-time"><AccessTimeRoundedIcon aria-hidden="true" /></span>
              <div className="trust-metric-content">
                <strong>98%</strong>
                <span>On-Time Delivery</span>
              </div>
              <span className="trust-metric-accent" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

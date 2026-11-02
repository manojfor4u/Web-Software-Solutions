import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined'
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined'

const highlights = [
  {
    icon: ScheduleOutlinedIcon,
    title: 'On-time delivery',
    description: 'Clear milestones help keep your project on schedule.',
  },
  {
    icon: SupportAgentOutlinedIcon,
    title: 'Ongoing support',
    description: 'Get help and guidance even after your website launches.',
  },
]

export default function TrustSection() {
  return (
    <section className="trust-section page-container" aria-label="Why choose Web Software Solutions">
      <div className="trust-project-count">
        <strong>100+</strong>
        <span>Projects delivered</span>
      </div>
      {highlights.map(({ icon: Icon, title, description }) => (
        <article className="trust-highlight" key={title}>
          <Icon aria-hidden="true" />
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </article>
      ))}
    </section>
  )
}

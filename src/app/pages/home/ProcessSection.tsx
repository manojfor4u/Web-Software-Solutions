import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined'
import CodeIcon from '@mui/icons-material/Code'
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined'
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined'
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined'

const process = [
  { icon: ChatBubbleOutlineIcon, title: '1. Discuss', description: 'Understand your requirements and goals.' },
  { icon: AssignmentOutlinedIcon, title: '2. Plan & Design', description: 'Create a project plan and modern UI/UX design.' },
  { icon: CodeIcon, title: '3. Develop', description: 'Build your website with clean and scalable code.' },
  { icon: ScienceOutlinedIcon, title: '4. Test', description: 'Ensure quality, security and performance.' },
  { icon: RocketLaunchOutlinedIcon, title: '5. Deploy', description: 'Launch your website and make it live.' },
  { icon: HeadsetMicOutlinedIcon, title: '6. Support', description: 'Provide ongoing support and maintenance.' },
]

export default function ProcessSection() {
  return (
    <section className="process-section" id="about">
      <div className="page-container">
        <h2>Our Development Process</h2>
        <p className="process-description">A simple, transparent and result-oriented process to bring your idea to life.</p>
        <div className="process-grid">
          {process.map(({ icon: Icon, title, description }, index) => (
            <div className="process-step" key={title}>
              <div className="process-icon"><Icon aria-hidden="true" /></div>
              <div className="process-label">
                <span className="process-number">{String(index + 1).padStart(2, '0')}</span>
                <h3>{title.replace(/^\d+\.\s*/, '')}</h3>
              </div>
              <p>{description}</p>
              {index < process.length - 1 && <span className="process-arrow" aria-hidden="true">→</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

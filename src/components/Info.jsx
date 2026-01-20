import profileImg from '../assets/Laura_Smith.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Info() {
  return (
   <>
        <img src={profileImg} alt="profile" className="profile-img"/>

        <div className="info-section">
          <h1 className="name">Laura Smith</h1>
          <p className="job-title">Frontend Developer</p>
          <p className="web-site">laurasmith.website</p>

          <div className="social-buttons">
            <button className="btn email"><FontAwesomeIcon icon={faEnvelope} /> Email</button>
            <button className="btn linkedin"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</button>
          </div>
        </div>
      
    </>
  )
}

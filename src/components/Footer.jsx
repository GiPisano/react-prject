import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faSquareTwitter,
    faSquareFacebook,
    faSquareInstagram,
    faSquareGithub
} from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
    return(
        <div className='footer'>
            <ul>
                <li><a href="#"><FontAwesomeIcon icon={faSquareTwitter} className="icon"/></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faSquareFacebook} className="icon"/></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faSquareInstagram} className="icon"/></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faSquareGithub} className="icon"/></a></li>
            </ul>
        </div>
    )
}
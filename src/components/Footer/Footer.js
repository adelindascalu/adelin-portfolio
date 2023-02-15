import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer-elements'>
          <p className='copyright'>
            &copy;
            <span className='year'>{getCurrentYear()}</span> by Adelin Dascălu.
          </p>

          <ul className='footer-links'>
            <li>
              <a
                href='https://www.linkedin.com/in/adelin-dascalu/'
                className='footer-link'
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a
                href='https://github.com/adelindascalu'
                className='footer-link'
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            {/* <li>
              <a href='#' className='footer-link'>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </footer>
  );
}

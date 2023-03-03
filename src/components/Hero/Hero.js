import { Link } from "react-scroll";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
  return (
    <section className='container' id='home'>
      <div className='hero'>
        <h3 className='hero-text'>Hi, I am</h3>
        <h2 className='hero-name'>Adelin Dascălu</h2>
        <p className='hero-description'>Junior Front-End Developer</p>
        <Link
          to='about'
          spy={true}
          smooth={true}
          offset={0}
          duration={700}
          className='btn-dark hero-btn'
        >
          Discover More &nbsp;
          <FontAwesomeIcon icon={faArrowDown} />
        </Link>
        <ul className='hero-links'>
          <li>
            <a
              href='https://www.linkedin.com/in/adelin-dascalu/'
              className='hero-link'
            >
              <FontAwesomeIcon icon={faLinkedin} className='icon' />
            </a>
          </li>
          <li>
            <a href='https://github.com/adelindascalu' className='hero-link'>
              <FontAwesomeIcon icon={faGithub} className='icon' />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

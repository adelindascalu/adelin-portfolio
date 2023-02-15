import { Link } from "react-scroll";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

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
      </div>
    </section>
  );
}

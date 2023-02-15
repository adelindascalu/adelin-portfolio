import "./About.css";
import portfolioPhoto from "../../assets/images/WhatsApp Image 2023-01-28 at 14.14.03 cut.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import CV from "../../assets/docs/Adelin_Dascalu_CV_EN.pdf";

export default function About() {
  return (
    <section id='about' className='about-section'>
      <div className='container about'>
        <div className='about-text-box'>
          <h2 className='heading-tertiary'>About me</h2>
          <h3 className='heading-secondary'>Who am I?</h3>
          <p className='about-description'>
            Hello! My name is Adelin Dascălu and I enjoy building things from
            scratch. My journey as a Front-End Developer started back in 2022,
            when I enrolled at IT School where I learned about technologies like
            HTML, CSS, JavaScript and React.
          </p>
          <a className='btn-dark resume-btn' href={CV} download>
            <FontAwesomeIcon icon={faDownload} />
            &nbsp;Resume
          </a>
        </div>
        <div className='about-img-box'>
          <img
            className='portfolio-picture'
            src={portfolioPhoto}
            alt='profile-pic'
          ></img>
        </div>
      </div>
    </section>
  );
}

import "./About.css";
import portfolioPhoto from "../../assets/images/WhatsApp Image 2023-01-28 at 14.14.03 cut.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import CV from "../../assets/docs/Adelin_Dascalu_CV_EN_.pdf";

export default function About() {
  return (
    <section id='about' className='about-section'>
      <div className='container about'>
        <div className='about-text-box'>
          <h2 className='heading-tertiary'>About me</h2>
          <h3 className='heading-secondary'>Who I am</h3>
          <p className='about-description'>
            Hello! My name is Adelin Dascălu and I am a Junior Front-End
            Developer based in Bucharest, Romania. It all started back in 2022
            when I joined a Web Development training program and I realized it
            was a perfect fit. My goal is to improve my skills, with the main
            focus on designing and building websites that offer a smooth user
            experience.
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
